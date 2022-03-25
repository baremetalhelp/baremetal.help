import { PolicyStatement } from "cdk-iam-floyd";

export interface BareMetalConfig {
  domainName?: string;
  cdnEndpoint?: string;
  gitHubUser?: string;
  organizationId?: string;
  rootOuId?: string;
  ssoInstanceArn?: string;
}

export interface PermissionSetConfig {
  name: string;
  awsManagedPolicyNames?: string[];
  inlinePolicyStatements?: PolicyStatement[];
}
