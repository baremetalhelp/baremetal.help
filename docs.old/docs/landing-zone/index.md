---
sidebar_position: 3
---

# SSO Landing Zone 

:::warning This page has multiple issues.

- [ ] The preamble is too wordy and not very good.
- [ ] It does not describe the what the landing zone is and how to make it very well.
- [ ] There's no help for resolving common issues.
:::

Single Sign-On provides a way to associate users and groups in the enterprise. Usually, this delegates to something like Active Directory.

But there's another piece that must be implemented that lets users see accounts and permissions for groups they're in once they sign on. This is done with [AWS Permission Sets](https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html). That's what you're going to do now.

Unless you do this bit, users will be able to log in using SSO just fine, but they won't see any available accounts when they do. 

Here's how the different entities are related. Looks complicated, but follow it through anyway. ✅ resources are done. 🛠 is what you're making.

```mermaid
stateDiagram-v2
   state "✅ AWS Organization" as organization
   state "✅ SSO Identity Provider" as directory
   state "✅ SSO Groups" as groups
   state "✅ SSO Users" as users
   state "✅ AWS Accounts" as accounts
   state "🛠 AWS Permission Sets" as permission_sets
   state "🛠 Permission Set Assignments" as permission_set_assignments
   state "🛠 AWS Landing Zone" as landing_zone
   organization --> accounts : contains
   directory --> users : provides
   directory --> groups : provides
   permission_sets --> permission_set_assignments : binds to
   accounts --> permission_set_assignments : binds to
   groups --> permission_set_assignments : binds to
   permission_set_assignments --> landing_zone : configures
   users --> landing_zone : log in via SSO
```

## Assumptions

See the general assumptions in "About BareMetal tutorials".

In addition
1. You have set up a [BareMetal AWS Organization](../docs/organization)
2. You have created some accounts in the organization
3. You have SSO integration ready because you [followed the instructions](../docs/sso/follow-instructions) or [looked at the pictures](../docs/sso/sso-picture-book)

## Preparation

The CDK stack for the Landing Zone is data-driven. This means we made it easy for you create assignments of SSO groups to accounts. SSO users in those groups will see accounts assigned to the groups they're in when they log in. This is the Landing Zone.

You're going to collect ids for AWS Accounts and SSO Groups an add those to a data structure. The CDK stack will traverse this data structure and create the corresponding AWS resources for the Landing Zone. We do the loops and create the resources so you don't have to.

A big advantage of making this part data driven is that since we're using TypeScript, we can make the data type safe so you don't mess it up. And you don't have to worry about all the plumbing. All you need to do it gather the rights ids.

The configuration file ig `landing-zone-config.ts` [link].

In summary, you'll
1. Make a list of AWS Accounts
2. Make a list of SSO Groups
3. Define AWS Permission Sets that grant SSO Users in SSO Groups permissions in AWS Accounts
4. Press the "go" button

### Update SSO configuration

:::info action
Open the AWS SSO Console.

Click "Settings".

Copy the value of the SSO ARN.
::: 

![](images/copy-sso-arn.png)

This ARN is used to create the required SSO resources Permissions Sets and Account/Group assignments.

:::info action
In the file `common-config.ts`, set the field `ssoInstanceArn` to the ARN you just copied. Save.
:::

### Get the list of AWS Accounts

Open the AWS console to the AWS Organizations page. Open up the tree of Organization Units. Any accounts present in the Organization will appear here. For example

![AWS Organizations console](../images/aws-console-organizations.png)

shows account names and numbers.

For each AWS account you want to include in the Landing Zone, add a value to the `enum Account` like this.

```ts
export enum Account {
    BILLING_ACCOUNT = "825617765789",
    SANDBOX = "772866064453",
    PREPROD1 = "921112571860",
    PROD1 = "644590569382",
    AUDIT = "405828339838",
    LOG_ARCHIVE = "937567863100",
}
```

An `enum` is better than constants because we can use them in type-safe data structures,
whereas simple constants could be misspelled. Remember these are strings.[^1]

### Get the list of SSO Group IDs

Open the AWS SSO Console. Click _Groups_. Click a group you want to available in the Landing Zone. Copy the _Group ID_. These ids are GUIDs with a prefix.

![SSO Groups console](../images/aws-console-group-id.png)

Now update the `enum` for SSO Groups, just like you did for AWS Accounts.

```ts
export enum Group {
    SRE = "9067420728-45df392d-85da-4751-9f20-47fb268d3709",
    VIEW_ONLY = "9067420728-101bc3b4-7cbc-4b31-9bfe-4a50632d72b8",
    READ_ONLY = "9067420728-b8b4d794-4d00-4b87-a1b2-7c58ca76c3a2",
    DEVELOPER = "9067420728-e78cfac1-937f-459a-98f7-1a4fe90b5772",
}
```

### Configure permissions

Each SSO Group can be assigned to multiple AWS Accounts. And for each assignment, you need to specify the permissions an SSO User in that SSO Group will have in each account.

There's a data structure.

```ts
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
```

Here's the `SRE` Permission Set config, defined in `permission-sets.ts` [link]

```ts
export const adminPermissionSetConfig: PermissionSetConfig = {
    name: "SRE",
    awsManagedPolicyNames: [ManagedPolicies.ADMINISTRATOR_ACCESS],
};
```

`name` has to be unique. We're using upper case but that's just a habit.

`awsManagedPolicyNames` is an array of `string`s that correspond to AWS-provided policies. We're using the JavaScript library `cdk-constants`, which makes it easy not to mess up spelling.

In the above, the `inlinePolicy` was omitted. We'll make a Permission Set in a bit that has an inline policy so you can see what that's about.

Define as many of these as you have roles, job functions, or however else you plan to administer and control access. 

## Now Glue Everything Together

In the file `landing-zone-config.ts`, see the interface `GroupAssignment`

```ts
interface GroupAssignment {
    group: Group;
    accounts: Account[];
    permissionSetConfig: PermissionSetConfig;
}
```

We define data in this structure that binds everything together.

Add elements to the `landingZoneConfig` like this

```ts
export const landingZoneConfig: GroupAssignment[] = [
    // SRE
    //
    {
        group: Group.SRE,
        accounts: [
            Account.BILLING_ACCOUNT,
            Account.SANDBOX,
            Account.PREPROD1,
            Account.PROD1,
            Account.AUDIT,
            Account.LOG_ARCHIVE,
        ],
        permissionSetConfig: adminPermissionSetConfig,
    },
    ...
```

Here, `group` is a value from your `enum` for SSO Groups. `accounts` is an array that defines which AWS Accounts in the Landing Zone will be available for this SSO Group.

And `permissionSetConfig` is the permissions you defined previously. You can define this permission configuration inline like this if you want. But when inline policies are being used, it can be a bit unwieldy.

```ts
 {
        group: Group.SRE,
        accounts: [
            Account.BILLING_ACCOUNT,
            Account.SANDBOX,
            Account.PREPROD1,
            Account.PROD1,
            Account.AUDIT,
            Account.LOG_ARCHIVE,
        ],
        permissionSetConfig: {
            name: "SRE",
            awsManagedPolicyNames: [ManagedPolicies.ADMINISTRATOR_ACCESS],
        },
    },
```

## Deploy the SSO Stack

Let's do a diff to see what's going on.

:::info action
```bash
cdk --profile baremetal.help diff BareMetalLandingZone
```
:::

```
[+] AWS::SSO::PermissionSet SRE SRE 
[+] AWS::SSO::Assignment assignment_825617765789_90674777ee-7d026bff-6189-4057-8a8e-fc5e79c39742 assignment82561776578990674777ee7d026bff618940578a8efc5e79c39742 
[+] AWS::SSO::Assignment assignment_772866064453_90674777ee-7d026bff-6189-4057-8a8e-fc5e79c39742 assignment77286606445390674777ee7d026bff618940578a8efc5e
```

We're creating some `AWS::SSO::PermissionSet` resources for `SRE` and the other groups. We're also assigning groups to accounts with `AWS::SSO::Assignment`. Finally, we made some permission sets that define what users in that group can do.

### Looks good: deploy!

:::info action
```bash
cdk --profile baremetal.help deploy BareMetalLandingZone
```
:::

It should go something like this

```bash
❯ cdk --profile baremetal.help deploy BareMetalLandingZone                                                                               

✨  Synthesis time: 7.28s

BareMetalLandingZone: deploying...
[0%] start: Publishing e646c4690c632a01d0c1c953bb8daa64b7d389435a0d4df2a3e657b76915cc9e:825617765789-us-east-1
[100%] success: Published e646c4690c632a01d0c1c953bb8daa64b7d389435a0d4df2a3e657b76915cc9e:825617765789-us-east-1
BareMetalLandingZone: creating CloudFormation changeset...

 ✅  BareMetalLandingZone

✨  Deployment time: 103.19s

Stack ARN:
arn:aws:cloudformation:us-east-1:825617765789:stack/BareMetalLandingZone/e9d4adc0-b9a3-11ec-b82b-0e2cb68ae875

✨  Total time: 110.47s
```

## Do We Have a Landing Zone?

Let's check.

We should have some SSO Users.

:::info action
Navigate to the AWS Single Sign-On console in AWS.

Click "Users".
:::

![](images/sso-users-list.png)

Looks good.

Now for Groups.

:::info action
Still in the AWS SSO Console, click "Groups".
:::

![](images/sso-groups-list.png)

:::info action
Still in the AWS SSO Console, click "Permission Sets".
:::

![](images/sso-permission-sets-list.png)

Let's take a look at one of those Permission Sets.

:::info action
Click `DEVELOPER`.
:::

![](images/sso-permission-set-details.png)

We can see the AWS Managed Policy `PowerUserAccess` has been assigned to the Permission Set. Now let's see which accounts this SSO Groups is available in.

:::info action
Still in the `DEVELOPER` Permission Set detail page, click the "Accounts" tab.
:::

![](images/permission-set-account-detail.png)

We can see the `DEVELOPER` Permission Set is available in the `Sandbox` AWS Account.

Let's check the same thing from the AWS Accounts perspective.

:::info action
Click "AWS accounts" in the AWS Single Sign-On console. Open the `Dev OU.
:::

![](images/permission-sets-for-accounts.png)

We can see that the `Sandbox` account has been assigned the Permission Sets `DEVELOPER` and `SRE`.

### Try signing in

What would all this be if we didn't have a Landing Zone that let users log in and see their stuff?

:::info action
In the AWS SSO Console, click "Settings"

Copy the "User portal URL".

Open that URL, probably in an incognito window because we're going to try logging in as different users.

Enter the log in credentials of one of our SSO Users. 
:::

![](images/microsoft-sso-login.png)

This looks promising.

:::info action
Click "Next", enter password, click "Sign in".
:::

![](images/sso-update-password.png)

:::info action
Enter a new password.
:::

![](images/sso-protect-account.png)

Here you have the option of enabling Multi-Factor Authentication. Let's do it.

:::info action
**Highly recommended**, Click "Next".

Click "Skip for now" only if you're building a Landing Zone as a toy.
:::

:::info action
Follow the MFA setup. 

Log in with user and new password.

Click "AWS Account (6)" (or however many accounts you have).
:::

![](images/landing-zone-first-look.png)

## Using the Landing Zone

Logged in as a user, open each account in the list so you can see the Permission Sets available for that user in each account.

In this case, we logged in as Annie Admin, and she has superpowers.

:::info action
Click each account to show Permission Sets available.
:::

![](images/landing-zone-open-account-list.png)

:::note
Understand that this is not the exhaustive list of all Permission Sets, SSO Groups, and AWS Accounts.

This is a list of accounts where the logged in user has at least one Permission Set. And those Permission Sets appear because the user is in the relevant group.

Here's that again in pictures.

```mermaid
stateDiagram-v2
   state "SSO Groups" as sso_groups
   state "SSO Users" as sso_users
   state "SSO Assignment" as sso_assignment
   state "Permission Sets" as permission_sets
   state "AWS Managed Policies" as aws_managed_policies
   state "Inline Policies" as inline_policies
   state "AWS Accounts" as accounts
   state "AWS Organization" as organization
   state "SSO Landing Zone" as landing_zone

   sso_users --> sso_groups : member of
   sso_groups --> sso_assignment : binds to
   permission_sets --> sso_assignment : binds to
   aws_managed_policies --> permission_sets : policy for
   inline_policies --> permission_sets : policy for
   accounts --> sso_assignment : binds to
   organization --> accounts : contains
   sso_assignment --> landing_zone
   sso_assignment --> landing_zone
   sso_assignment --> landing_zone
   sso_assignment --> landing_zone
   sso_assignment --> landing_zone
```

Think of SSO Assignments as a sparse matrix with group rows and account columns. Cells where they intersect mean that the group is valid in the account. Permission Sets provide policies for the group in the account.
:::

:::caution
It's really good practice to make groups mean the same thing on each account they're assigned to. This means the Permission Set is always the same for any given group.
:::

## Using Roles and Permissions

:::info action
Click "Management console" next to `SRE` in any account. This Permission Set has admin  rights.
:::

As admin, you should be able to do pretty much everything in an account. We'll start small and create an S3 bucket.

:::info action
Navigate to the S3 console. Click "Services" in the top left next to the naughts and crosses.

Find S3 and bring up the console.
:::

There probably aren't any S3 buckets yet. Let's make one.

:::info action
Click "Create bucket". Enter a unique name for the bucket and leave the defaults. Click "Create bucket".
:::

![](images/admin-creates-bucket-ok.png)

Go back to the Landing Zone, the list of accounts. For the same account, let's try another role, `VIEW_ONLY`.

:::info action
Click the "Management console" link for `VIEW_ONLY`.
:::

You're still Annie, but you relinquished your superpowers. Let's confirm we no longer have what it takes to be admin.

:::info action
Navigate to the S3 console. Your bucket's in the list.

Select the bucket and click "Delete".
:::

Bingo.

So even though you created the bucket as Annie, once you're in a more restrictive role you can't delete it.

![](images/cant-delete-bucket-as-view-only.png)

## The Upshot

We created an enterprise-grade landing zone.

We tried logging in as a use with two different roles, and we saw that the permissions were different for each
role.  

---

[^1] Perhaps we could have used numbers here, but we're not sure how good AWS is at not starting account numbers with `0`.

