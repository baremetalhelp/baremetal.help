#!/usr/bin/env node
import { App, Environment } from "aws-cdk-lib";
import { BareMetalConfig } from "../lib/model";
import {
    BareMetalAwsOrganizationStack,
    BareMetalCdnStack,
    BareMetalGitHubPagesStack,
    BareMetalLandingZoneStack,
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
    ssoInstanceArn: "arn:aws:sso:::instance/ssoins-722394f61090d7d4",
    ssRegion: "us-east-1",
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

new BareMetalLandingZoneStack(app, "BareMetalLandingZone", {
    env,
    tags,
    bareMetalConfig,
});

// TODO
// - Pass SSO region to custom resource handlers for Organization and OU
//
