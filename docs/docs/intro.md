---
sidebar_position: 1
---

# About BareMetal Tutorials

:::warning This page has multiple issues
- [ ] It's not clear which tutorials and stacks to deploy at which time: Once for all accounts, like SSO, or every account, like VPCs
- [ ] It's just not very clear at all.
:::

## What is BareMetal™? 

Bare metal is what computer people often say when they mean a computer with nothing installed on it, not even an operating system.

This documentation contains tutorials for bringing up cloud infrastructure from exactly that, bare metal. We assume very little. The focus here is on the prëeminent Public Cloud Provider, Amazon Web Services, AWS.

We assume very little. We do not judge you if you don't even have an AWS Account. We'll get you started with that too.

:::info action
Whenever you're asked to do something like click or run a shell command, it'll be in an "ACTION" box like this.
:::

## A Quick Example

We mean it when we say we give you infrastructure-as-code for all the things. Not only that, we imbue them with secure-by-default best practices and convenience you've come to expect from modern-day appliances. For example, here's some Infrastructure-as-Code from the tutorial and code for a Content Delivery Network, CDN. This happens to be written in TypeScript using [AWS Cloud Development Kit, CDK](https://aws.amazon.com/cdk/).

```ts
    ...
    // Find the AWS DNS entry for your domain
    const hostedZone = HostedZone.fromLookup(this, "hosted-zone", {
      domainName,
    });

    // Create an SSL certificate for the CDN endpoint
    const certificate = new Certificate(this, "certificate", {
      domainName: cdnEndpoint,
      validation: CertificateValidation.fromDns(hostedZone),
    });
    // Set expiry notification
    certificate
      .metricDaysToExpiry()
      .createAlarm(this, "certificate-expiry-alarm", {
        comparisonOperator: ComparisonOperator.LESS_THAN_THRESHOLD,
        evaluationPeriods: 1,
        threshold: 45, 
      });

    // This is the CDN origin, where you copy resources
    const origin = new Bucket(this, "origin");

    // And finally pull everything together and make the CDN itself
    const distribution = new Distribution(this, "distribution", {
      domainNames: [cdnEndpoint],
      certificate,
      defaultBehavior: {
        origin: new S3Origin(origin),
      },
    });
    ...
```

Even if you don't speak CDK or the TypeScript language, you may be able to follow along and notice

- Nothing is hard-coded, not even the domain or the CDN domain prefix.
- You can see we create just the right SSL certificate with automatic verification that this is for a domain you own via an AWS HostedZone.
- And we'll let you know in plenty of time _before_ that certificate expires with a custom alert.

Each tutorial includes infrastructure-as-code for deploying that tutorial's resources, written in AWS CDK. CDK has "stacks" as a
fundamental that encapsulate a collection of related resources. There's at least one stack for every tutorial.

That means you can run the CDK to create the infrastructure in each tutorial without going through every detail. You might regret that
when things go wrong or you want to know how to use it.

:::note
Clone the GitHub repo for this site, https://github.com/baremetalhelp/baremetal.help .

You're going to need this repo to run any of the code we wrote for the BareMetal Tutorials. This documentation is also in the same repo under `docs`.
:::

## Other Approaches

:::note TODO
Explain Terraform and click ops
:::

## Available BareMetal tutorials

:::note TODO
List them here with notes about the order, and which get run once per enterprise and which per account.

## Nothing Special

There's already so much great documentation for all of the resources you can create in the public cloud. We don't duplicate it, and will cheerfully link to the best documentation along the way.

What we _do_ provide, however, is infrastructure-as-code stacks for all the enterprise-grade infrastructure that you need to being up in bare metal that share common configuration and written in a way so
you can pick and chose what you want. The common configuration means that all your BareMetal stacks are consistent and compatible.

We make it super clear when there are dependencies on other tutorials.

## Overall Assumptions

Here are the basics. Each tutorial relies on at least these. Additional requirements are listed in each tutorial as needed.

1. You have an AWS account and have [created a privileged IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html), `admin`.
2. You have [created credentials for the `admin` user] and have [stored them on your computer](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).
3. You have installed the [latest AWS command-ine tools, CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
4. You have installed the [latest AWS CDK CLI](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html).

## Verify Your Setup

Blah.

## Shared Configuration

We make it easy to define common configuration used across all stacks. That way everything's consistent.

We're defining infrastructure-as-code for everything. So all the configuration data you need is in code. We like the TypeScript language, but we could have used any of the [supported CDK languages](https://aws.amazon.com/cdk/faqs/#:~:text=Q%3A%20What%20programming%20languages%20does,Go%20(in%20Developer%20Preview).).

In the file `./config/common-config.ts`, you can see

```ts
const bareMetalConfig: BareMetalConfig = {
    ssoInstanceArn: "arn:aws:sso:::instance/ssoins-722394f61090d7d4",
    ssoRegion: "us-east-1",
    domainName: "baremetal.help",
    cdnEndpoint: "cdn.baremetal.help",
    gitHubUser: "baremetalhelp",
};
```

All fields are optional. Here's what each field does.

| Field            | Value                                                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `ssoInstanceArn` | If you're using Single Sign-On, you'll have this value handy. This is used to create permissions for users using the SSO Landing Zone. |
| `ssoRegion`      | This is the region of SSO, not necessarily the region you're using for your BareMetal stacks.                                          |
| `domainName`     | If you have a domain you want to use for documentation, add this value.                                                                |
| `cdnEndpoint`    | If you're developing a CDN, add this field,                                                                                            |
| `gitHubUser`     | For publishing documentation.                                                                                                          |

## Consistent and Universal Resource Tagging

Resource tagging is at the very core of Public Cloud best practices. Again in `./config/common-config.ts`, edit `globalTags` key/value tags. Your Organization creates a custom policy for required tags and values. For example, departmental charge back requires consistent tagging.

Here's the tags we use. But your enterprise will want more as a best practice, including 

```ts
export const globalTags: { [key: string]: any } = {
    repo: "https://github.com/baremetalhelp/baremetal.help",
    owner: "tech@baremetal.help",
    environment: "dev",
    description: "Infra-as-Code and documentation for a robust cloud-native enterprise foundation",
};
```

## To-Do

- [x] Make all configuration fields optional and handle them
- [ ] Each tutorial must have at least the following sections: preamble with resource diagram "Assumptions", "Required Configuration", "How to Deploy", "Verification", "Stack Resources" as table, "How it works", 
- [ ] Add all the links
- [ ] Comments in CDK and data structures
- [ ] Separate CDN prefix for domain name
- [ ] Add switch for domain verification for SSL Certificate if the domain is not hosted in AWS Route 53 
- [ ] Pass SSO region to custom resource handlers
- [ ] Create and use config for GitHub Pages IP addresses
- [ ] Create and apply SCP for required tags and values
- [ ] Create Enterprise track and Features track in top-level doc sidebar menu
- [ ] Fix doc links. Sometimes we copied the URL from `http://localhost:3000`
- [ ] Test whether an empty Managed Services list in Permission Sets work. Otherwise do the same as missing policy. I don't think it's an error to have both missing because we could just be setting things up.
- [ ] Explore making true constructs for the meat of stacks, even if they're only used once in BareMetal
- [x] Use title case for H1 _and_ H2 b/c H2 are document headings, sentence case for everything else
- [ ] Open source goodness like licensing, semantic versioning, PR template, ...
- [ ] GitHub Actions for stack (hooks per stack if possible)
- [ ] Maybe move common config back to top-level and pass explicitly to stacks? Yeah. I think that's right.
- [ ] Alt text for images
- [ ] Do we need custom domain for AD Tenant?
- [ ] Clarify potential issues and fixes for each step 
- [ ] Clarify and be super explicit about the P2 trial license
- [ ] Dependency diagram for the enterprise track is wrong: It should reflect options and dependencies better
- [ ] Describe what exactly ControlTower is and how to operate it. This should include default SCPs and examples of creating our own.
- [ ] Still with CT, show best practices for managing accounts. AFT?
- [ ] Show how to configure CLI access via AWS config for SSO
- [ ] Create reusable CDK Constructs for common components and publish them separately. Check again whether that's already been done and leverage those if they're any good.
- [ ] And when you do that, make them take, for example, either an existing bucket or a bucket configuration for a new one. Better still in that case, pass an existing origin like `S3Origin` instead of the bucket. Otherwise the default will be a bucket configured as origin. I like that better.
- [ ] Set up billing alarms from day 1.
- [ ] Talk about https://aws.amazon.com/blogs/opensource/accelerate-aws-single-sign-on-sso-implementation-using-aws-cloud-development-kit-aws-cdk/

:::note
BareMetal is not really a trademark. But "BareMetal is not really a trademark™" is.
:::
