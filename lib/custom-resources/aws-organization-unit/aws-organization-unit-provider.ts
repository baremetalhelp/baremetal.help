import { Duration, NestedStack, Stack } from "aws-cdk-lib";
import { Code, Runtime, SingletonFunction } from "aws-cdk-lib/aws-lambda";
import { Provider } from "aws-cdk-lib/custom-resources";
import { Organizations } from "cdk-iam-floyd";
import { Construct } from "constructs";
import * as path from "path";

/**
 * Borrows very heavily from https://github.com/awslabs/aws-bootstrap-kit
 */
export class AwsOrganizationUnitProvider extends NestedStack {
    public static getOrCreate(scope: Construct) {
        const stack = Stack.of(scope);
        const uid = "BareMetal-AwsOrganizationUnitProvider";

        return (
            (stack.node.tryFindChild(uid) as AwsOrganizationUnitProvider) ||
            new AwsOrganizationUnitProvider(stack, uid)
        );
    }

    public readonly provider: Provider;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        const onEventHandler = new SingletonFunction(
            this,
            "aws-organization-unit-handler",
            {
                uuid: "93A2C2DF-747C-433D-9456-49A691A99ADE",
                code: Code.fromAsset(path.join(__dirname, "handler")),
                runtime: Runtime.NODEJS_14_X,
                handler: "index.onEventHandler",
                timeout: Duration.minutes(5),
            }
        );

        onEventHandler.addToRolePolicy(
            new Organizations()
                .allow()
                .toListOrganizationalUnitsForParent()
                .toCreateOrganizationalUnit()
                .toUpdateOrganizationalUnit()
                .onAllResources()
        );

        this.provider = new Provider(this, "aws-organization-unit-provider", {
            onEventHandler,
        });
    }
}
