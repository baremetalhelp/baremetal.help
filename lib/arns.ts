// Monstrous hack. We use side effects of the awesome cdk-iam-floyd library
// to generate legal ARNs because the patterns are built in.
// This really needs to be a separate library that both this code and
// cdk-iam-floyd can call.
//
import { Organizations, PolicyStatement, S3 } from "cdk-iam-floyd";

function resourceFor(policyStatement: PolicyStatement) {
  return policyStatement.toJSON()["Resource"];
}

export function s3BucketArn(bucketName: string) {
  return resourceFor(new S3().onBucket(bucketName));
}

export function organizationArn(
  masterAccountId: string,
  organizationId: string
) {
  return resourceFor(
    new Organizations().onOrganization(masterAccountId, organizationId)
  );
}

console.log(new S3().toCreateBucket().onBucket("xyz").toJSON());
console.log(
  new Organizations().toAttachPolicy().onOrganization("foo", "bar").toJSON()
);
