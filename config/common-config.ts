import { BareMetalConfig } from "../lib/model";

/**
 * See model.ts for documentation
 */
export const bareMetalConfig: BareMetalConfig = {
    ssoInstanceArn: "arn:aws:sso:::instance/ssoins-722394f61090d7d4",
    ssoRegion: "us-east-1",
    domainName: "baremetal.help",
    cdnEndpoint: "cdn.baremetal.help",
    gitHubUser: "baremetalhelp",
};

export const globalTags: { [key: string]: any } = {
    repo: "https://github.com/baremetalhelp/baremetal.help",
    owner: "tech@baremetal.help",
    status: "dev",
    description:
        "Infra-as-Code and documentation for a robust cloud-native foundation for your enterprise",
};
