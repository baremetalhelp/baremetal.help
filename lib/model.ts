import { PolicyStatement } from "cdk-iam-floyd";

/**
 * We simplify the task of defining AWS Permission Sets. They can be a bit finicky if we're being completely honest.
 *
 * Hope you agree!
 */
export interface PermissionSetConfig {
    // This must be unique and is mandatory
    //
    name: string;

    // Optional list of the name (not ARNs) of the AWS Managed Policies this Permission Set uses
    //
    awsManagedPolicyNames?: string[];

    // Option custom policies
    //
    inlinePolicyStatements?: PolicyStatement[];
}
