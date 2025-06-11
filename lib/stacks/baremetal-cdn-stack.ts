import { CfnOutput, Duration, Stack, StackProps } from "aws-cdk-lib";
import {
    Certificate,
    CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import {
    AllowedMethods,
    Distribution,
    OriginAccessIdentity,
    SecurityPolicyProtocol,
    ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { ARecord, HostedZone, RecordTarget } from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3";
import { Statement } from "cdk-iam-floyd";
import { AwsManagedPolicy } from "cdk-iam-floyd/lib/generated/aws-managed-policies/iam-floyd";
import { Construct } from "constructs";

export interface BareMetalCdnStackProps extends StackProps {
    domainName: string;
    subDomainName: string;
}

export class BareMetalCdnStack extends Stack {
    readonly siteBucketName: string;
    readonly siteDomain: string;

    constructor(scope: Construct, name: string, props: BareMetalCdnStackProps) {
        super(scope, name);

        const { domainName, subDomainName } = props;

        // TODO: HostedZone lookup failing from domain name for some reason
        //
        // const zone = HostedZone.fromLookup(this, "hosted-zone", {
        //     domainName,
        // });
        const zone = HostedZone.fromHostedZoneAttributes(this, "hosted-zone", {
            hostedZoneId: "Z02074912A2SG31RKK387",
            zoneName: domainName,
        });
        const siteDomain = subDomainName + "." + domainName;
        const cloudfrontOAI = new OriginAccessIdentity(this, "cloudfront-oai");
        const siteBucket = new Bucket(this, "site-bucket", {
            publicReadAccess: false,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        });
        siteBucket.addToResourcePolicy(
            new Statement.S3()
                .allow()
                .toGetObject()
                .on(siteBucket.arnForObjects("*"))
                .forCanonicalUser(
                    cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId,
                ),
        );

        const certificate = new Certificate(this, "certificate", {
            domainName: siteDomain,
            validation: CertificateValidation.fromDns(zone),
        });

        const distribution = new Distribution(this, "distribution", {
            certificate,
            defaultRootObject: "index.html",
            domainNames: [siteDomain],
            minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
            errorResponses: [
                {
                    httpStatus: 403,
                    responseHttpStatus: 403,
                    responsePagePath: "/error.html",
                    ttl: Duration.minutes(30),
                },
            ],
            defaultBehavior: {
                origin: new S3Origin(siteBucket, {
                    originAccessIdentity: cloudfrontOAI,
                }),
                compress: true,
                allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
                viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
        });

        new ARecord(this, "alias", {
            recordName: siteDomain,
            target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
            zone,
        });

        new CfnOutput(this, "bucket-name-export", {
            exportName: "bucket-name",
            value: siteBucket.bucketName,
        });

        new CfnOutput(this, "site-domain-export", {
            exportName: "site-domain",
            value: siteDomain,
        });

        this.siteBucketName = siteBucket.bucketName;
        this.siteDomain = siteDomain;
    }
}
