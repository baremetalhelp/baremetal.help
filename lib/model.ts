import { PolicyStatement } from "cdk-iam-floyd";

// /**
//  * This configuration is shared across all stacks. You only need to change values here.
//  * All fields are optional and each stack checks you have defined the values the stack requires.
//  */
// export interface BareMetalConfig {
//     // If you're using Single Sign-On, you'll have this value handy. This is used to create permissions for users using the SSO Landing Zone.
//     //
//     ssoInstanceArn?: string;
//     // This is the region of SSO, not the region you're using for your BareMetal stacks
//     //
//     ssoRegion?: string;
//     // If you have a domain you want to use for documentation, add this value
//     //
//     domainName?: string;
//     // If you're developing a CDN, add this field
//     //
//     cdnEndpoint?: string;
//     // If you're publishing a documentation website like this one, add this field
//     //
//     gitHubUser?: string;
//     // If we're integrating with a SAML provider like Azure AD, it's helpful to have a name we can use
//     // to refer to it
//     samlProviderName?: string;
// }

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
