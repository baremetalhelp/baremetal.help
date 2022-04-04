import { Duration } from "aws-cdk-lib";
import {
    Code,
    Function,
    Runtime,
    SingletonFunction,
} from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Iam, Organizations } from "cdk-iam-floyd";
import { Construct } from "constructs";
import * as path from "path";

/**
 * Borrows very heavily from https://github.com/awslabs/aws-bootstrap-kit
 */
export class AwsOrganizationsProvider extends Construct {
    public readonly provider: Provider;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        const createOrgHandler = new NodejsFunction(
            this,
            "aws-organization-handler",
            {
                entry: path.join(__dirname, "handler", "index.ts"),
                runtime: Runtime.NODEJS_14_X,
                handler: "onEventHandler",
                timeout: Duration.minutes(5),
            }
        );

        createOrgHandler.addToRolePolicy(
            new Organizations()
                .allow()
                .toCreateOrganization()
                .toDescribeOrganization()
                .onAllResources()
        );
        createOrgHandler.addToRolePolicy(
            new Iam().allow().toCreateServiceLinkedRole().onRole("*")
        );

        this.provider = new Provider(this, "orgProvider", {
            onEventHandler: createOrgHandler,
        });
    }
}
