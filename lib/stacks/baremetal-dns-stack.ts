/**
 * An example of a data-driven stack. This one creates simple TXT records in a Route53 Hosted Zone
 * that have been defined as key/value pairs in code.
 */
import { Stack, StackProps } from "aws-cdk-lib";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { HostedZone, TxtRecord } from "aws-cdk-lib/aws-route53";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface BareMetalDnsStackProps extends StackProps {
    domainName: string;
    dnsTxtRecords: { [key: string]: string };
}

export class BareMetalDnsStack extends Stack {
    readonly s3Bucket: Bucket;
    readonly certificate: Certificate;

    constructor(scope: Construct, id: string, props: BareMetalDnsStackProps) {
        super(scope, id, props);

        const { domainName, dnsTxtRecords } = props;

        const zone = HostedZone.fromLookup(this, "hosted-zone", {
            domainName,
        });

        // Manage list of key/value TXT records
        //
        for (const key in dnsTxtRecords) {
            new TxtRecord(this, key, {
                zone,
                recordName: key,
                values: [dnsTxtRecords[key]],
            });
        }
    }
}
