import { Stack, StackProps } from "aws-cdk-lib";
import { IVpc } from "aws-cdk-lib/aws-ec2";
import { Cluster } from "aws-cdk-lib/aws-ecs";
import { Construct } from "constructs";

export interface BareMetalEcsStackProps extends StackProps {
    clusterName: string;
    vpc: IVpc;
}

export class BareMetalEcsStack extends Stack {
    readonly cluster: Cluster;

    constructor(scope: Construct, id: string, props: BareMetalEcsStackProps) {
        super(scope, id, props);

        const { clusterName, vpc } = props;

        const cluster = new Cluster(this, "cluster", { clusterName, vpc });

        this.cluster = cluster;
    }
}
