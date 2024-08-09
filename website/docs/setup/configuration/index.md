# Configure your Enterprise

You have an AWS Account and a privileged, secure user, `baremetal`.

You can successfully run the `aws` CLI and perform simple operations like listing nd creating S3 Buckets.

Now it's time to configure how you want your enterprise to look. What's your company domain name? 

## Shared Configuration

We make it easy to define common configuration used across all stacks. That way everything's consistent.

All of the CDK stacks are referenced in the main file `./bin/baremetal.help.ts`. And that's where the common configuration lives. Change the constants in that file to match your enterprise.

```ts
// Some constants you'll change for your enterprise
//
const enterpriseName = "baremetal"; // CHANGE ME
const domainName = "baremetal.help"; // CHANGE ME
```

## Consistent and Universal Resource Tagging

Resource tagging is at the very core of Public Cloud best practices. In the file `./config/common-tags.ts`, edit `COMMON_TAGS` key/value tags. Your Organization creates a custom policy for required tags and values. For example, departmental charge back requires consistent tagging.

You can even create policies that will not allow resources to be created without specific tags. So if you're a developer and have forgotten to add a required tag, your deployment will fail. That'll show them!

Here's the tags we use. But your enterprise will want more as a best practice. But start here

```ts
export const COMMON_TAGS = {
    repo: "https://github.com/baremetalhelp/baremetal.help",
    owner: "stephen@baremetal.help",
    environment: process.env.ENVIRONMENT || "unknown-environment",
    description: "BareMetal enterprise foundation",
};
```

You can add whatever you like here. All stacks inherit all these tags. You can add or change a tag and redeploy any affected stacks and the tags will be updated in place.

There are other best-practice tags. Let's ask around.

:::info ask claude!
```
Use a consistent naming convention:

Project: [project-name]
Environment: [dev/test/staging/prod]
Owner: [team-name or email]

Include cost allocation tags:

CostCenter: [cost-center-code]
Business Unit: [business-unit-name]

Add operational tags:

CreatedBy: [username or service]
CreatedDate: [YYYY-MM-DD]
LastModifiedBy: [username or service]
LastModifiedDate: [YYYY-MM-DD]

Include compliance and security tags:

Compliance: [compliance-standard]
DataClassification: [public/confidential/restricted]

Add application-specific tags:

Application: [application-name]
Version: [version-number]

Use lifecycle management tags:

TerminationDate: [YYYY-MM-DD]
Backup: [yes/no]

Consider automation tags:

AutoStop: [yes/no]
AutoStart: [yes/no]

Add stack-specific tags:

StackName: [stack-name]
StackId: [stack-id]

Remember to use consistent capitalization and formatting for your tags. 
Also, ensure that you're following any specific tagging policies your organization may have in place.
```
:::

## The Upshot

- As the last step for getting ready to deploy BareMetal infrastructure, you declared a couple of constants specific to your enterprise that are common across all your BareMetal features.
- You defined a robust resource tagging strategy from day one, so full attribution of resources and stacks is easily discoverable. 