#!/usr/bin/env node
import { App, Environment } from "aws-cdk-lib";
import { COMMON_CONFIG as commonConfig, GLOBAL_TAGS as tags } from "../config";
import {
    BareMetalAwsOrganizationStack,
    BareMetalCdnStack,
    BareMetalGitHubPagesStack,
    BareMetalLandingZoneStack,
} from "../lib/stacks";

const env: Environment = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

const commonStackProps = { env, tags, commonConfig };

new BareMetalCdnStack(app, "BareMetalCdn", { ...commonStackProps });

new BareMetalGitHubPagesStack(app, "BareMetalGitHubPages", {
    ...commonStackProps,
});

new BareMetalAwsOrganizationStack(app, "BareMetalAwsOrganization", {
    ...commonStackProps,
});

new BareMetalLandingZoneStack(app, "BareMetalLandingZone", {
    ...commonStackProps,
});

