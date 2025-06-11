import { Stack, StackProps } from "aws-cdk-lib";
import {
    IVpc,
    InterfaceVpcEndpointAwsService,
    SubnetType,
    Vpc,
} from "aws-cdk-lib/aws-ec2";
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
            subnetConfiguration: [
                {
                    cidrMask: 24,
                    name: "ingress",
                    subnetType: SubnetType.PUBLIC,
                },
                {
                    cidrMask: 24,
                    name: "application",
                    subnetType: SubnetType.PRIVATE_WITH_EGRESS,
                },
                {
                    cidrMask: 28,
                    name: "database",
                    subnetType: SubnetType.PRIVATE_ISOLATED,
                },
            ],
        });

        const vpcEndpoints: { [key: string]: InterfaceVpcEndpointAwsService } =
            {
                secretsmanager: InterfaceVpcEndpointAwsService.SECRETS_MANAGER,
                s3: InterfaceVpcEndpointAwsService.S3,
                rds: InterfaceVpcEndpointAwsService.RDS,
            };

        for (const [name, service] of Object.entries(vpcEndpoints)) {
            vpc.addInterfaceEndpoint(`${name}-vpc-endpoint`, {
                service,
                privateDnsEnabled: false,
            });
        }

        this.vpc = vpc;
    }
}
