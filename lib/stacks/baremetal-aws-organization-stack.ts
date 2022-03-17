import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { AwsOrganizationsCustomResource } from "../custom-resources";
import { BareMetalConfig } from "../model";

export interface AwsOrganizationStackProps extends StackProps {
  bareMetalConfig: BareMetalConfig;
}

export class BareMetalAwsOrganizationStack extends Stack {
  constructor(scope: Construct, id: string, props: AwsOrganizationStackProps) {
    super(scope, id, props);

    const { domainName, cdnEndpoint } = props.bareMetalConfig;

    const organization = new AwsOrganizationsCustomResource(
      this,
      "aws-organization",
      {}
    );
  }
}
