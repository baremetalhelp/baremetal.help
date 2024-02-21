import { Stack, StackProps } from "aws-cdk-lib";
import {
    ARecord,
    CnameRecord,
    HostedZone,
    RecordTarget,
} from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";

const GITHUB_PAGES_IP_ADDRESSES = [
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153",
];

export interface BareMetalGitHubPagesStackProps extends StackProps {
    domainName: string;
    subDomainName?: string;
    gitHubUser: string;
}

export class BareMetalGitHubPagesStack extends Stack {
    constructor(
        scope: Construct,
        id: string,
        props: BareMetalGitHubPagesStackProps
    ) {
        super(scope, id, props);

        const { domainName, subDomainName, gitHubUser } = props;

        const recordName = subDomainName
            ? `${subDomainName}.${domainName}`
            : domainName;

        if (!domainName || !gitHubUser) {
            throw Error(
                "Documentation website requires both a domain and a GitHub user"
            );
        }

        const hostedZone = HostedZone.fromLookup(this, "hostedzone", {
            domainName,
        });

        const alias = new ARecord(this, "alias", {
            zone: hostedZone,
            recordName,
            target: RecordTarget.fromIpAddresses(...GITHUB_PAGES_IP_ADDRESSES),
        });

        const cname = new CnameRecord(this, "cname", {
            zone: hostedZone,
            domainName: `${gitHubUser}.github.io`,
            recordName: "www",
        });
    }
}
