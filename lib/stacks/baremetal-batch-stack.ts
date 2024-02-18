import { Stack, StackProps } from "aws-cdk-lib";
import { CfnComputeEnvironment, CfnJobQueue } from "aws-cdk-lib/aws-batch";
import { IVpc } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export interface BareMetalBatchStackProps extends StackProps {
    vpc: IVpc;
    maxvCpus?: number;
}

export class BareMetalBatchStack extends Stack {
    readonly computeEnvironmentArn: string;
    readonly attrJobQueueArn: string;

    constructor(scope: Construct, id: string, props: BareMetalBatchStackProps) {
        super(scope, id, props);

        const { vpc, maxvCpus } = props;

        const computeEnvironment = new CfnComputeEnvironment(this, "cluster", {
            type: "MANAGED",
            computeResources: {
                type: "FARGATE",
                maxvCpus: maxvCpus || 20,
                subnets: vpc.selectSubnets().subnetIds,
            },
        });
        const queue = new CfnJobQueue(this, "job-queue", {
            priority: 1,
            jobQueueName: "queue-1",
            computeEnvironmentOrder: [
                {
                    order: 1,
                    computeEnvironment:
                        computeEnvironment.attrComputeEnvironmentArn,
                },
            ],
        });

        this.computeEnvironmentArn =
            computeEnvironment.attrComputeEnvironmentArn;
        this.attrJobQueueArn = queue.attrJobQueueArn;
    }
}
