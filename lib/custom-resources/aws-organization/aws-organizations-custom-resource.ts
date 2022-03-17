import { Stack, StackProps } from "aws-cdk-lib";
import { ManagedPolicy, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  AwsSdkCall,
  PhysicalResourceId,
  PhysicalResourceIdReference,
} from "aws-cdk-lib/custom-resources";
import { ManagedPolicies, ServicePrincipals } from "cdk-constants";
import { Iam, Organizations } from "cdk-iam-floyd";
import { Construct } from "constructs";

export interface AwsOrganizationsCustomResourceProps extends StackProps {}

export class AwsOrganizationsCustomResource extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: AwsOrganizationsCustomResourceProps
  ) {
    super(scope, id);

    const { account } = Stack.of(this);
    const role = new Role(this, "lambda-role", {
      assumedBy: new ServicePrincipal(ServicePrincipals.LAMBDA),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName(
          ManagedPolicies.AWS_LAMBDA_BASIC_EXECUTION_ROLE
        ),
      ],
    });
    // TBD: narrow
    //
    const policy = AwsCustomResourcePolicy.fromStatements([
      new Organizations().allow().allActions().onAllResources(),
      new Iam().allow().allActions().onAllResources(),
    ]);
    const onCreate: AwsSdkCall = {
      service: "Organizations",
      action: "createOrganization",
      physicalResourceId: PhysicalResourceId.of(account),
      parameters: {},
    };
    const onDelete: AwsSdkCall = {
      service: "Organizations",
      action: "deleteOrganization",
      parameters: {},
    };
    const customResource = new AwsCustomResource(
      this,
      `${id}-organization-resource`,
      {
        onCreate,
        onDelete,
        policy,
        role,
        resourceType: "Custom::BareMetalOrganization",
      }
    );
  }
}
