import { Duration, Stack, StackProps } from "aws-cdk-lib";
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
import { Construct } from "constructs";

export interface BareMetalWebsiteStackProps extends StackProps {
    domainName: string;
    subDomainName: string;
}

export class BareMetalWebsiteStack extends Stack {
    readonly siteBucketName: string;
    readonly distributionId: string;

    constructor(
        scope: Construct,
        name: string,
        props: BareMetalWebsiteStackProps,
    ) {
        super(scope, name);

        const { domainName, subDomainName } = props;
        const zone = HostedZone.fromLookup(this, "hosted-zone", {
            domainName: props.domainName,
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

        const certificate = new Certificate(this, "SiteCertificate", {
            domainName: siteDomain,
            validation: CertificateValidation.fromDns(zone),
        });

        const distribution = new Distribution(this, "SiteDistribution", {
            certificate: certificate,
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

        new ARecord(this, "SiteAliasRecord", {
            recordName: siteDomain,
            target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
            zone,
        });

        this.siteBucketName = siteBucket.bucketName;
        this.distributionId = distribution.distributionId;

        // Do this in GitHub actions
        //
        // const siteBucket = Bucket.fromBucketName(this, "site-bucket", this.siteBucketName)
        // const distribution = Distribution.fromDistributionAttributes(this, "distribution", {
        //     distributionId: this.distributionId,
        //     domainName: siteDomain,
        // })
        // new BucketDeployment(this, "deployment", {
        //     sources: [
        //         Source.asset(path.join(__dirname, "./site-contents")),
        //     ],
        //     destinationBucket: siteBucket,
        //     distribution,
        //     distributionPaths: ["/*"],
        // });
    }
}
