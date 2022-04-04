import { BareMetalConfig } from "../lib/model";

/**
 * See model.ts for documentation
 *
 * All these field are optional. FIll in values as you complete the tutorials. We
 * tell you which fields are required for each stack to work.
 */
export const COMMON_CONFIG: BareMetalConfig = {
    ssoInstanceArn: "arn:aws:sso:::instance/ssoins-722394f61090d7d4",
    ssoRegion: "us-east-1",
    domainName: "baremetal.help",
    cdnEndpoint: "cdn.baremetal.help",
    gitHubUser: "baremetalhelp",
};

/**
 * Common Key/value pairs that are applied to each stack and all resources in the stack.
 *
 * Add your own.
 */
export const GLOBAL_TAGS: { [key: string]: string | undefined } = {
    repo: "https://github.com/baremetalhelp/baremetal.help",
    owner: "sre@baremetal.help",
    environment: process.env.ENVIRONMENT,
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
