import { Stack, StackProps } from "aws-cdk-lib";
import { IVpc, Vpc } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export interface BareMetalVpcStackProps extends StackProps {
    vpcName: string;
    maxAzs?: number;
    natGateways?: number;
}

export class BareMetalVpcStack extends Stack {
    readonly vpc: IVpc;

    constructor(scope: Construct, id: string, props: BareMetalVpcStackProps) {
        super(scope, id, props);

        const { vpcName, maxAzs, natGateways } = props;

        const vpc = new Vpc(this, "vpc", {
            vpcName,
            maxAzs: maxAzs ?? 2,
            natGateways: natGateways ?? 1,
        });

        this.vpc = vpc;
    }
}
