#!/usr/bin/env node
import { App, Environment } from "aws-cdk-lib";
import { BareMetalConfig } from "../lib/model";
import { BareMetalCdnStack } from "../lib/stacks/bare-metal-cdn-stack";

const tags = {
  repo: "https://github.com/baremetalhelp/baremetal.help",
  owner: "tech@baremetal.help",
  staus: "dev",
  description:
    "Infra-as-Code and documentation for cloud-native foundation for the enterprise",
};
const env: Environment = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};
const bareMetalConfig: BareMetalConfig = {
  domainName: "baremetal.help",
  cdnEndpoint: "cdn.baremetal.help",
};

const app = new App();

new BareMetalCdnStack(app, "BareMetalCdn", { env, tags, bareMetalConfig });
