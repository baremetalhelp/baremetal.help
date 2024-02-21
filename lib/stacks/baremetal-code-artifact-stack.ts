import { Stack, StackProps } from "aws-cdk-lib";
import { CfnDomain, CfnRepository } from "aws-cdk-lib/aws-codeartifact";
import {
    AccountRootPrincipal,
    OrganizationPrincipal,
    PolicyDocument,
} from "aws-cdk-lib/aws-iam";
import { Statement } from "cdk-iam-floyd";
import { Construct } from "constructs";

export interface BareMetalCodeArtifactStackProps extends StackProps {
    domainName: string;
    organizationId: string;
}
export class BareMetalCodeArtifactStack extends Stack {
    constructor(
        scope: Construct,
        id: string,
        props: BareMetalCodeArtifactStackProps
    ) {
        super(scope, id, props);

        const { domainName, organizationId } = props;
        const stack = Stack.of(this);

        const domainPermissionsPolicyDocument = new PolicyDocument({
            statements: [
                new Statement.Codeartifact()
                    .allow()
                    .toCreateRepository()
                    .toCreateDomain()
                    .toGetAuthorizationToken()
                    .toGetDomainPermissionsPolicy()
                    .toListRepositoriesInDomain()
                    .forCdkPrincipal(new AccountRootPrincipal())
                    .onAllResources(),
            ],
        });

        const domain = new CfnDomain(this, "domain", {
            domainName,
            permissionsPolicyDocument: domainPermissionsPolicyDocument,
        });

        // // Permissions for any account in the organization
        // //
        const repositoryPermissionsPolicyDocument = new PolicyDocument({
            statements: [
                new Statement.Codeartifact()
                    .allow()
                    .toDescribePackageVersion()
                    .toDescribeRepository()
                    .toGetPackageVersionReadme()
                    .toGetRepositoryEndpoint()
                    .toListPackageVersionAssets()
                    .toListPackageVersionDependencies()
                    .toListPackageVersions()
                    .toListPackages()
                    .toPublishPackageVersion()
                    .toPutPackageMetadata()
                    .toReadFromRepository()
                    .forCdkPrincipal(new OrganizationPrincipal(organizationId))
                    .onAllResources(),
            ],
        });

        const repositories: { [key: string]: string } = {
            npmjs: "public:npmjs",
            maven: "public:maven-central",
            pypi: "public:pypi",
            "maven-google-android": "public:maven-googleandroid",
            "gradle-plugins": "public:maven-gradleplugins",
            "maven-commonsware": "public:maven-commonsware",
            nuget: "public:nuget-org",
            clojars: "public:maven-clojars",
        };

        for (let repositoryName in repositories) {
            const repository = new CfnRepository(this, repositoryName, {
                domainName: domain.domainName,
                repositoryName,
                externalConnections: [repositories[repositoryName]],
                domainOwner: stack.account,
                permissionsPolicyDocument: repositoryPermissionsPolicyDocument,
            });
            repository.addDependency(domain);
        }
    }
}
