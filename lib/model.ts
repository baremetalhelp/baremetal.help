import { PolicyStatement } from "cdk-iam-floyd";

/**
 * This configuration is shared across all stacks. You only need to change values here.
 * All fields are optional and each stack checks you have defined the values the stack requires.
 */
export interface BareMetalConfig {
    // If you're using Single Sign-On, you'll have this value handy. This is used to create permissions for users using the SSO Landing Zone.
    //
    ssoInstanceArn?: string;
    // This is the region of SSO, not the region you're using for your BareMetal stacks
    //
    ssoRegion?: string;
    // If you have a domain you want to use for documentation, add this value
    //
    domainName?: string;
    // If you're developing a CDN, add this field
    //
    cdnEndpoint?: string;
    // If you're publishing a documentation website like this one, add this field
    //
    gitHubUser?: string;
}

/**
 * We simplify the task of defining AWS Permission Sets. They can be a bit finicky if we're being completely honest.
 * 
 * Hope you agree!
 */
export interface PermissionSetConfig {
    // This must be unique and is mandatory
    //
    name: string;
    // 
    awsManagedPolicyNames?: string[];
    inlinePolicyStatements?: PolicyStatement[];
}
