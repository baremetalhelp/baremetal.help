import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { BareMetalCdnConstruct } from "../constructs/baremetal-cdn";

export interface BareMetalCdnStackProps extends StackProps {
    domainName?: string;
    cdnEndpoint?: string;
}

export class BareMetalCdnStack extends Stack {
    constructor(scope: Construct, id: string, props: BareMetalCdnStackProps) {
        super(scope, id, props);

        const { domainName, cdnEndpoint } = props;

        new BareMetalCdnConstruct(this, "cdn", { domainName, cdnEndpoint });
    }
}
