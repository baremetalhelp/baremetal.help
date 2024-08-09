import { Stack, StackProps } from "aws-cdk-lib";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { HostedZone, TxtRecord } from "aws-cdk-lib/aws-route53";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface BareMetalDnsStackProps extends StackProps {
    domainName: string;
    dnsTxtRecords?: { [key: string]: string };
    create?: boolean;
}

/**
 * An example of a data-driven stack. This one creates simple TXT records in a Route53 Hosted Zone.
 * 
 * We either create or look up a hosted zone from the domain. The default is to look up the domain 
 * because it's unlikely you don't already have one.
 */
export class BareMetalDnsStack extends Stack {
    readonly s3Bucket: Bucket;
    readonly certificate: Certificate;

    constructor(scope: Construct, id: string, props: BareMetalDnsStackProps) {
        super(scope, id, props);

        const { domainName, create, dnsTxtRecords } = props;

        const zone = create
            ? new HostedZone(this, "hosted-zone", {
                  zoneName: domainName,
              })
            : HostedZone.fromLookup(this, "hosted-zone", {
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
