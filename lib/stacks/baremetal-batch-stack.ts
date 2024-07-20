import { Stack, StackProps } from "aws-cdk-lib";
import { FargateComputeEnvironment, JobQueue } from "aws-cdk-lib/aws-batch";
import { IVpc } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export interface BareMetalBatchStackProps extends StackProps {
    vpc: IVpc;
}

export class BareMetalBatchStack extends Stack {
    readonly computeEnvironmentArn: string;
    readonly lowPriorityQueueArn: string;
    readonly highPriorityQueueArn: string;

    constructor(scope: Construct, id: string, props: BareMetalBatchStackProps) {
        super(scope, id, props);

        const { vpc } = props;

        const computeEnvironment = new FargateComputeEnvironment(
            this,
            "batch-cluster",
            {
                vpc,
                spot: true,
            }
        );

        const lowPriorityQueue = new JobQueue(this, "low-priority-job-queue", {
            priority: 1,
        });
        const highPriorityQueue = new JobQueue(
            this,
            "high-priority-job-queue",
            {
                priority: 10,
            }
        );
        lowPriorityQueue.addComputeEnvironment(computeEnvironment, 1);
        highPriorityQueue.addComputeEnvironment(computeEnvironment, 1);

        this.computeEnvironmentArn = computeEnvironment.computeEnvironmentArn;
        this.lowPriorityQueueArn = lowPriorityQueue.jobQueueArn;
        this.highPriorityQueueArn = highPriorityQueue.jobQueueArn;
    }
}
