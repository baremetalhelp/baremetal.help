import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { BareMetalConfig } from "../model";
export interface BareMetalCdnStackProps extends StackProps {
    bareMetalConfig: BareMetalConfig;
}
export declare class BareMetalCdnStack extends Stack {
    constructor(scope: Construct, id: string, props: BareMetalCdnStackProps);
}
