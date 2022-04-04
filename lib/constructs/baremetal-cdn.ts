import { CfnOutput, Stack } from "aws-cdk-lib";
import {
    Certificate,
    CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { ComparisonOperator } from "aws-cdk-lib/aws-cloudwatch";
import { ARecord, HostedZone, RecordTarget } from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface BareMetalCdnProps {
    domainName?: string;
    cdnEndpoint?: string;
}
export class BareMetalCdn extends Construct {
    constructor(parent: Stack, name: string, props: BareMetalCdnProps) {
        super(parent, name);

        const { domainName, cdnEndpoint } = props;

        if (!domainName || !cdnEndpoint) {
            throw Error("CDN stack requires both a domain and a CDN endpoint");
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

        const bucket = new Bucket(this, "origin", {
            publicReadAccess: false,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        });

        const distribution = new Distribution(this, "distribution", {
            domainNames: [cdnEndpoint],
            certificate,
            defaultBehavior: {
                origin: new S3Origin(bucket),
            },
        });

        new CfnOutput(this, "Origin Bucket", {
            value: bucket.bucketName,
        });

        const alias = new ARecord(this, "alias", {
            zone: hostedZone,
            recordName: cdnEndpoint,
            target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
        });
    }
}
