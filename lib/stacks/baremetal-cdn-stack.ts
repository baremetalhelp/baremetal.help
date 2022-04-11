import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { BareMetalCdn } from "../constructs";
import { BareMetalConfig } from "../model";

export interface BareMetalCdnStackProps extends StackProps {
    commonConfig: BareMetalConfig;
}

export class BareMetalCdnStack extends Stack {
    constructor(scope: Construct, id: string, props: BareMetalCdnStackProps) {
        super(scope, id, props);

        const { domainName, cdnEndpoint } = props.commonConfig;

        new BareMetalCdn(this, "cdn", { domainName, cdnEndpoint });
    }
}
