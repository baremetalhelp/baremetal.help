#!/usr/bin/env node
import { App, Environment } from "aws-cdk-lib";
import {
    DNS_TXT_RECORDS as dnsTxtRecords,
    COMMON_TAGS as tags,
} from "../config";

import {
    BareMetalBatchStack,
    BareMetalCdnStack,
    BareMetalCodeArtifactStack,
    BareMetalDnsStack,
    BareMetalEcsStack,
    BareMetalGitHubPagesStack,
    BareMetalLandingZoneStack,
    BareMetalVpcStack,
    BareMetalWebsiteCdnStack,
} from "../lib/stacks";

const env: Environment = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
};

console.log(
    `Deploying to ${env.account} in ${env.region} with tags ${JSON.stringify(
        tags
    )}`
);

const domainName = "baremetal.help";
const vpcName = "baremetal-vpc";

const app = new App();

/**
 * Here are all the independent stacks you can deploy on your infrastructure.
 *
 * Say `cdk deploy BareMetalCdn` and so on to deploy just one. You almost certainly don't want to deploy
 * them all at once because you probably don't need them all.
 */

new BareMetalCdnStack(app, "BareMetalCdnStack", {
    env,
    tags,
    domainName,
    subDomainName: "cdn",
});

new BareMetalWebsiteCdnStack(app, "BareMetalWebsiteCdnStack", {
    env,
    tags,
    domainName,
    subDomainName: "www",
});

new BareMetalGitHubPagesStack(app, "BareMetalGitHubPagesStack", {
    env,
    tags,
    domainName,
    gitHubUser: "baremetalhelp",
});

new BareMetalLandingZoneStack(app, "BareMetalLandingZoneStack", {
    env,
    tags,
    ssoInstanceArn: "arn:aws:sso:::instance/ssoins-722348d4ba8b2b4e",
});

new BareMetalCodeArtifactStack(app, "BareMetalCodeArtifactStack", {
    env,
    tags,
});

new BareMetalDnsStack(app, "BareMetalDnsStack", {
    env,
    tags,
    domainName: "baremetal.help",
    dnsTxtRecords,
});

const vpcStack = new BareMetalVpcStack(app, "BareMetalVpc", {
    env,
    tags,
    vpcName,
});
const { vpc } = vpcStack;

const ecsStack = new BareMetalEcsStack(app, "BareMetalEcs", {
    env,
    tags,
    vpc,
    clusterName: "baremetal-cluster",
});
ecsStack.addDependency(vpcStack);

const batchStack = new BareMetalBatchStack(app, "BareMetalBatch", {
    vpc,
});
batchStack.addDependency(vpcStack);

// TODO
// export useful properties
// qualify resource name with id for multiple stacks
// add IAM policies everywhere
// separate out vpc into own stack
// Remove AWS Organization completely
// Make enum in landing zone config take a list of accounts in some simple categories like prod, prepro, staging, qa, dev, system and apply policies accordingly for all groups in each category
// Comment code
// Add tests
// Single ALB?
// Add "opinions" for each stack and alternatives
// Publish internal CDK constructs
// Get the names of all the AWS vs. Amazon services right. Links to everything, even if it's repeated.
// Include The Upshot and the end of each tutorial
// Include an quick start where possible
// Make sure there's an architecture diagram for each stack
// Show how SCPs can be applied to OUs
// Make all shell command a :::note action box
// Batch processing stack
//
