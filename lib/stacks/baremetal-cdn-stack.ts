import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import {
    Certificate,
    CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { ComparisonOperator } from "aws-cdk-lib/aws-cloudwatch";
import { ARecord, HostedZone, RecordTarget } from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface BareMetalCdnStackProps extends StackProps {}

export class BareMetalCdnStack extends Stack {
    constructor(scope: Construct, id: string, props: BareMetalCdnStackProps) {
        super(scope, id, props);

        const { domainName, cdnEndpoint } = props.bareMetalConfig;

        if (!domainName || !cdnEndpoint) {
            throw Error("CDN requires both a domain and a CDN endpoint");
        }

        const hostedZone = HostedZone.fromLookup(this, "hosted-zone", {
            domainName,
        });
        const certificate = new Certificate(this, "certificate", {
            domainName: cdnEndpoint,
            validation: CertificateValidation.fromDns(hostedZone),
        });
        certificate
            .metricDaysToExpiry()
            .createAlarm(this, "certificate-expiry-alarm", {
                comparisonOperator: ComparisonOperator.LESS_THAN_THRESHOLD,
                evaluationPeriods: 1,
                threshold: 45, // Automatic rotation happens between 60 and 45 days before expiry
            });

        const origin = new Bucket(this, "origin");

        const distribution = new Distribution(this, "distribution", {
            domainNames: [cdnEndpoint],
            certificate,
            defaultBehavior: {
                origin: new S3Origin(origin),
            },
        });

        new CfnOutput(this, "Origin Bucket", {
            value: origin.bucketName,
        });

        const alias = new ARecord(this, "alias", {
            zone: hostedZone,
            recordName: cdnEndpoint,
            target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
        });
    }
}
