#!/usr/bin/env node
import { App, Environment } from "aws-cdk-lib";
import { BareMetalConfig } from "../lib/model";
import { BareMetalAwsOrganizationStack } from "../lib/stacks/baremetal-aws-organization-stack";
import { BareMetalCdnStack } from "../lib/stacks/baremetal-cdn-stack";
import { BareMetalGitHubPagesStack } from "../lib/stacks/baremetal-github-pages-stack";

const tags = {
  repo: "https://github.com/baremetalhelp/baremetal.help",
  owner: "tech@baremetal.help",
  status: "dev",
  description:
    "Infra-as-Code and documentation for a robust cloud-native foundation for the enterprise",
};
const env: Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};
const bareMetalConfig: BareMetalConfig = {
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
