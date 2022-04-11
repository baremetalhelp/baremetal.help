import { BareMetalConfig } from "../lib/model";

/**
 * See model.ts for documentation
 *
 * All these field are optional. Fill in values as you complete the tutorials. We
 * tell you which fields are required for each stack to work. The code check for
 * them too.
 */
export const COMMON_CONFIG: BareMetalConfig = {
    ssoInstanceArn: "arn:aws:sso:::instance/ssoins-722348d4ba8b2b4e",
    ssoRegion: "us-east-1",
    domainName: "baremetal.help",
    cdnEndpoint: "cdn.baremetal.help",
    gitHubUser: "baremetalhelp",
    samlProviderName: "Azure_AD",
};

/**
 * Common Key/value pairs that are applied to each stack and all resources in the stack.
 *
 * By all means add your own.
 */
export const GLOBAL_TAGS: { [key: string]: string } = {
    repo: "https://github.com/baremetalhelp/baremetal.help",
    owner: "sre@baremetal.help",
    environment: process.env.ENVIRONMENT || "unknown-environment",
    disposition: "Development",
    description:
        "Infra-as-Code and documentation for a robust cloud-native foundation for your enterprise",
};

/**
 * These tags are required for each stack and resources in the stacks
 */
export const REQUIRED_TAGS: { [key: string]: string } = {
    repo: "The GitHub (Enterprise) for this repo",
    owner: "Email, Slack channel, department ID or similar",
    environment: "Usually prod, preprod, sandbox, dev or similar",
};
