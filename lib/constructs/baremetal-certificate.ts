import { Stack } from "aws-cdk-lib";
import {
    Certificate,
    CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { ComparisonOperator } from "aws-cdk-lib/aws-cloudwatch";
import { HostedZone, IHostedZone } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";

export interface BareMetalCertificateProps {
    domainName: string;
    subDomainName?: string;
}

export class BareMetalCertificate extends Construct {
    readonly certificate: Certificate;
    readonly hostedZone: IHostedZone;

    constructor(parent: Stack, name: string, props: BareMetalCertificateProps) {
        super(parent, name);

        const { domainName, subDomainName } = props;
        const certificateName = subDomainName
            ? `${subDomainName}.${domainName}`
            : domainName;
        const hostedZone = HostedZone.fromLookup(this, `${name}-hosted-zone`, {
            domainName,
        });

        const certificate = new Certificate(this, `${domainName}-certificate`, {
            domainName: certificateName,
            validation: CertificateValidation.fromDns(hostedZone),
        });

        certificate
            .metricDaysToExpiry()
            .createAlarm(this, `name-${domainName}-certificate-expiry-alarm`, {
                comparisonOperator: ComparisonOperator.LESS_THAN_THRESHOLD,
                evaluationPeriods: 1,
                threshold: 45, // Automatic rotation happens between 60 and 45 days before expiry
            });

        this.certificate = certificate;
        this.hostedZone = hostedZone;
    }
}
