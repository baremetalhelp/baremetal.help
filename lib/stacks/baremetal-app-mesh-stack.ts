import { Stack, StackProps } from "aws-cdk-lib";
import { Mesh } from "aws-cdk-lib/aws-appmesh";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import { ApplicationLoadBalancedFargateService } from "aws-cdk-lib/aws-ecs-patterns";
import { Construct } from "constructs";
import { BareMetalConfig } from "../model";

export interface BareMetalAppMeshStackProps extends StackProps {
    commonConfig: BareMetalConfig;
}

export class BareMetalAppMeshStack extends Stack {
    constructor(
        scope: Construct,
        id: string,
        props: BareMetalAppMeshStackProps
    ) {
        super(scope, id, props);

        const { domainName, cdnEndpoint } = props.commonConfig;

        const vpc = new ec2.Vpc(this, "vpc", {
            maxAzs: 2,
        });

        const cluster = new ecs.Cluster(this, "cluster", {
            vpc: vpc,
        });

        new ApplicationLoadBalancedFargateService(this, "service", {
            cluster: cluster,
            taskImageOptions: {
                image: ecs.ContainerImage.fromRegistry("nginx"),
            },
            publicLoadBalancer: true,
        });

        const mesh = new Mesh(this, "mesh");
    }
}
