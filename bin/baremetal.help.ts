#!/usr/bin/env node
import { App, Environment } from "aws-cdk-lib";
import { GLOBAL_TAGS as tags } from "../config/common-config";
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

new BareMetalCdnStack(app, "BareMetalCdn", { env, tags });

new BareMetalGitHubPagesStack(app, "BareMetalGitHubPages", { env, tags });

new BareMetalAwsOrganizationStack(app, "BareMetalAwsOrganization", {
    env,
    tags,
});

new BareMetalLandingZoneStack(app, "BareMetalLandingZone", { env, tags });
