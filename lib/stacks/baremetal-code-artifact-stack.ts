import { Stack, StackProps } from "aws-cdk-lib";
import { CfnDomain, CfnRepository } from "aws-cdk-lib/aws-codeartifact";
import { AccountRootPrincipal } from "aws-cdk-lib/aws-iam";
import { Codeartifact } from "cdk-iam-floyd";
import { Construct } from "constructs";
import {
    CodeArtifactExternalConnections,
    PrivateRepositories,
} from "../../config";

export class BareMetalCodeArtifactStack extends Stack {
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        const stack = Stack.of(this);

        const domainPermissionsPolicyDocument = {
            Statement: new Codeartifact()
                .allow()
                .toCreateRepository()
                .toCreateDomain()
                .toGetAuthorizationToken()
                .toGetDomainPermissionsPolicy()
                .toListRepositoriesInDomain()
                .forCdkPrincipal(new AccountRootPrincipal())
                .onAllResources()
                .toStatementJson(),
        };

        const domain = new CfnDomain(this, `${id}-domain`, {
            domainName: "repo",
            permissionsPolicyDocument: domainPermissionsPolicyDocument,
        });

        const repositoryPermissionsPolicyDocument = {
            Statement: new Codeartifact()
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
                .forCdkPrincipal(new AccountRootPrincipal())
                .onAllResources()
                .toStatementJson(),
        };

        // Make repos for all the external connections
        //
        Object.values(CodeArtifactExternalConnections).forEach(
            (externalConnection) => {
                const repositoryName = this.repoNameFor(externalConnection);

                new CfnRepository(this, repositoryName, {
                    domainName: domain.attrName,
                    repositoryName,
                    domainOwner: stack.account,
                    permissionsPolicyDocument:
                        repositoryPermissionsPolicyDocument,
                    externalConnections: [externalConnection],
                });
            }
        );

        // Make local repos just for the ones we want, referring to the relevant external one
        //
        PrivateRepositories.forEach((repository) => {
            const repositoryName = "local-" + this.repoNameFor(repository);

            new CfnRepository(this, repositoryName, {
                domainName: domain.attrName,
                repositoryName,
                domainOwner: stack.account,
                permissionsPolicyDocument: repositoryPermissionsPolicyDocument,
                upstreams: [this.repoNameFor(repository)],
            });
        });
    }

    private repoNameFor(repository: CodeArtifactExternalConnections) {
        // Remove common "public:" and remove punctuation
        //
        return `repository-${repository}`
            .replace("public:", "")
            .replace(/[\W]+/g, "_");
    }
}
