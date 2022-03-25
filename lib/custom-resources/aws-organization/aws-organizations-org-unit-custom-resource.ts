import { StackProps } from "aws-cdk-lib";
import { ManagedPolicy, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import {
  AwsCustomResource,
  AwsCustomResourcePolicy,
  AwsSdkCall,
  PhysicalResourceId,
  PhysicalResourceIdReference,
} from "aws-cdk-lib/custom-resources";
import { ManagedPolicies, ServicePrincipals } from "cdk-constants";
import { Construct } from "constructs";

export interface AwsOrganizationsOrgUnitCustomResourceProps extends StackProps {
  ParentId: string;
  Name: string;
}

export class AwsOrganizationsOrgUnitCustomResource extends Construct {
  readonly organizationalUnitId: string;

  constructor(
    scope: Construct,
    id: string,
    props: AwsOrganizationsOrgUnitCustomResourceProps
  ) {
    super(scope, id);

    const { Name, ParentId } = props;

    // const client = new Organizations();
    // client.

    const role = new Role(this, "lambda-role", {
      assumedBy: new ServicePrincipal(ServicePrincipals.LAMBDA),
      managedPolicies: [
        ManagedPolicy.fromAwsManagedPolicyName(
          ManagedPolicies.AWS_LAMBDA_BASIC_EXECUTION_ROLE
        ),
      ],
    });
    const onCreate: AwsSdkCall = {
      service: "Organizations",
      action: "createOrganizationalUnit",
      parameters: {
        ParentId,
        Name,
      },
      physicalResourceId: PhysicalResourceId.fromResponse(
        "OrganizationalUnit.Id"
      ),
    };
    const onDelete: AwsSdkCall = {
      service: "Organizations",
      action: "deleteOrganizationalUnit",
      parameters: {
        OrganizationalUnitId: new PhysicalResourceIdReference(),
      },
    };
    const policy = AwsCustomResourcePolicy.fromSdkCalls({
      resources: AwsCustomResourcePolicy.ANY_RESOURCE,
    });

    const customResource = new AwsCustomResource(
      this,
      `${id}-organization-unit-resource`,
      {
        onCreate,
        onDelete,
        policy,
        role,
        resourceType: "Custom::BareMetalOrganizationUnit",
      }
    );

    this.organizationalUnitId = customResource.getResponseField(
      "OrganizationalUnit.Id"
    );
  }
}
