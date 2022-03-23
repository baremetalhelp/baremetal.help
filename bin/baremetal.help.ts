#!/usr/bin/env node
import { App, Environment } from "aws-cdk-lib";
import { BareMetalConfig } from "../lib/model";
import {
  BareMetalAwsOrganizationStack,
  BareMetalCdnStack,
  BareMetalGitHubPagesStack,
  BareMetalPermissionSetsStack
} from "../lib/stacks";

const tags = {
  repo: "https://github.com/baremetalhelp/baremetal.help",
  owner: "tech@baremetal.help",
  status: "dev",
  description:
    "Infra-as-Code and documentation for a robust cloud-native foundation for your enterprise",
};
const env: Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const bareMetalConfig: BareMetalConfig = {
  organizationId: "o-rh5uzhk4d7",
  rootOuId: 'r-s40u',
  ssoInstanceArn: "arn:aws:sso:::instance/ssoins-722394f61090d7d4",
  domainName: "baremetal.help",
  cdnEndpoint: "cdn.baremetal.help",
  gitHubUser: "baremetalhelp",
};

const app = new App();

new BareMetalCdnStack(app, "BareMetalCdn", { env, tags, bareMetalConfig });

new BareMetalGitHubPagesStack(app, "BareMetalGitHubPages", {
  env,
  tags,
  bareMetalConfig,
});

new BareMetalAwsOrganizationStack(app, "BareMetalAwsOrganization", {
  env,
  tags,
  bareMetalConfig,
});

new BareMetalPermissionSetsStack(app, "BareMetalPermissionSets", {
  env,
  tags,
  bareMetalConfig,
});
