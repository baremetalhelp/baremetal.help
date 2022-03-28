import { CustomResource } from "aws-cdk-lib";
import {
    AwsCustomResource,
    AwsCustomResourcePolicy,
    AwsSdkCall,
    PhysicalResourceId,
} from "aws-cdk-lib/custom-resources";
import { Construct } from "constructs";
import { AwsOrganizationsProvider } from "./aws-organizations-provider";

/**
 * Borrows very heavily from https://github.com/awslabs/aws-bootstrap-kit
 */
export class AwsOrganizationsCustomResource extends Construct {
    readonly id: string;
    readonly rootId: string;

    constructor(scope: Construct, id: string) {
        super(scope, id);

        let awsOrganizationsProvider = new AwsOrganizationsProvider(
            this,
            "aws-organizations-provider"
        );

        let org = new CustomResource(
            this,
            "aws-organizations-custom-resource",
            {
                serviceToken: awsOrganizationsProvider.provider.serviceToken,
                resourceType: "Custom::Organizations",
            }
        );

        this.id = org.getAtt("OrganizationId").toString();

        // Common call
        //
        let awsSdkCall: AwsSdkCall = {
            service: "Organizations",
            action: "listRoots",
            physicalResourceId: PhysicalResourceId.fromResponse("Roots.0.Id"),
            region: "us-east-1",
        };

        let root = new AwsCustomResource(
            this,
            "aws-organizations-root-custom-resource",
            {
                onCreate: awsSdkCall,
                onUpdate: awsSdkCall,
                onDelete: awsSdkCall,
                installLatestAwsSdk: false,
                policy: AwsCustomResourcePolicy.fromSdkCalls({
                    resources: AwsCustomResourcePolicy.ANY_RESOURCE,
                }),
            }
        );

        this.rootId = root.getResponseField("Roots.0.Id");
    }
}
