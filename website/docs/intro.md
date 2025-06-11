---
sidebar_position: 1
---

# About BareMetal Tutorials

## What is BareMetal?

"Bare metal" is what computer people often say when they mean a computer with nothing installed on it, not even an operating system.

This documentation contains rock-solid tutorials for bringing up enterprise-grade cloud infrastructure from exactly that, bare metal. We assume very little. The focus here is on the preeminent Public Cloud Provider, Amazon Web Services, AWS.

We will not judge you if you don't have an AWS Account yet. We'll get you started with that too. It's probably why you're here.

:::info action
Whenever you're asked to do something like click or run a shell command, it'll be in an "ACTION" box like this.
:::

## A Quick Example

We mean it when we say we give you infrastructure-as-code for all the things. Not only that, we imbue them with secure-by-default best practices and convenience you've come to expect from modern-day kitchen appliances.

For example, here's some infrastructure-as-code from the tutorial and code for a Content Delivery Network, CDN. If you're building an enterprise, you'll definitely need a CDN for delivering static content like images or public data files.

This script happens to be written in TypeScript using [AWS Cloud Development Kit, CDK](https://aws.amazon.com/cdk/). If you're not a CDK or TypeScript person, just scan the keywords. If you use the code we provide as-is, you only have to add some configuration for your enterprise (like your company domain name) to a simple configuration file. That's it.

```ts
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
certificate.metricDaysToExpiry().createAlarm(this, "certificate-expiry-alarm", {
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
```

Regardless of whether you're a TypeScript or CDK person, you will notice a few things.

- Nothing is hard-coded, not even the domain or the CDN domain prefix.
- You can see we create just the right SSL certificate with automatic verification that this is for a domain you own via the AWS DNS service, Route53.
- And we'll let you know in plenty of time _before_ that certificate expires with a custom alert.

Each tutorial includes infrastructure-as-code for deploying that tutorial's resources, written in AWS CDK. CDK has "stacks" as a
fundamental that encapsulate a collection of related resources. There's at least one stack for every tutorial.

That means you can run the CDK to create the infrastructure in each tutorial without going through every detail and be pretty confident it'll work for you just like it did for us last time we ran it. Which was probably earlier today.

:::note Get the code
If you're OK with Git and you have it installed already, clone the GitHub repo for this site. Otherwise we'll take you through it later.

```
git clone https://github.com/baremetalhelp/baremetal.help
```

You're going to need this repo to run any of the code we wrote for the BareMetal Tutorials. This documentation is also in the same repo under `website`.
:::

## Other Approaches

AWS CDK is not the only game in town and there are some good alternatives. We just like the idea of CDK and the language it's written in, TypeScript.

But let's be clear. The following are all widely-used and viable options with their own strengths and weaknesses. It's a matter of taste.

| Approach                       | Background                                                                                                                                                                                                                                                                  | Pros                                                                                                                                                                                                                                                                                                            | Cons                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Click-ops                      | We used to drive to the data center, plug wires in and edit configuration files. With public cloud providers' console access, clicking around in the UI is the equivalent.                                                                                                  | Old-school familiarity.                                                                                                                                                                                                                                                                                         | Old-school fragility.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Terraform                      | Hashicorp Terraform is a general-purpose configuration syntax that can connect to variety of providers. It's billed as cloud-agnostic, but that's quite misleading.                                                                                                         | It's widely used in existing enterprises for more than just cloud architectures. There's excellent tooling for maintaining Terraform infrastructure, including Terraform cloud.                                                                                                                                 | Terraform uses collections of _resources_ for each provider, like AWS and Microsoft Azure. Each defined resource is specific to an individual cloud provider, so the resource definitions for Amazon S3 and Azure Blob Storage have nothing to do with each other. Conditionals and loops can get messy because it's only a definition standard, not a full programming language. The definition syntax, HCL, is almost, but not entirely, unlike JSON [^adams] |
| AWS CloudFormation             | This was the original configuration standard for AWS infrastructure. It used to be limited to JSON, which was very hard to maintain. You've been able to use YAML for a long time now and that's way better so you should go this route.                                    | There is dedicated support in AWS for CloudFormation both as a managed service and in the console UI. The CloudFormation managed service maintains the state for you. The console can get a bit sticky with lots of stacks, especially nested stacks. But "A" for effort.                                       | Whether it's JSON or YAML, some things are hard to do like conditionals and loops for the same reason as Terraform. It's just a configuration standard for defining values. Although it's YAML, the syntax for accessing some functions usually breaks IDE formatters.                                                                                                                                                                                          |
| AWS CDK, Cloud Development Kit | Realizing the limitations of purely-declarative CloudFormation — and noticing that the resource definitions of name/type/property triples are the same as programming languages — AWS created proper programming language bindings for CloudFormation resource definitions. | It's now a programming language, so type-checking, loops, conditionals, and so on are a breeze. You can use standard data-driven techniques to make the code fully parameterized. Although CDK itself is written in TypeScript there are bindings for many popular languages as well as several unpopular ones. | It's now a programming language, so you need to set up a development environment. It can be finicky getting compatible versions of dependencies and keeping them up to date. IDE's like [VS Code](https://code.visualstudio.com) have great support for TypeScript and have AWS integration.                                                                                                                                                                    |

## Navigating BareMetal tutorials

First, "Set Up Your Environment" on the left walks you through creating an AWS Account and development environment. You'll need this to be complete whether you're just deploying the basics or the complete Enterprise Infrastructure.

The basics are simpler, self-contained stacks that provide functionality like a Content-Delivery Network.

Robust enterprises separate concerns. If you've done this kind of thing before, then you'll know about best practices such as network partitions between application servers and databases. In AWS, it is a best practice to limit the scope of any one AWS account. New accounts are practically free and there are good ways to organize them.

Use cases for separate AWS accounts include

- Development, staging, and production deployments
- Limiting secure access to sensitive data, like logs
- Centralized billing

## Nothing Special

There's already so much great documentation for all of the resources you can create in the public cloud. We don't duplicate it, and will cheerfully link to the best documentation along the way.

What we _do_ provide, however, is infrastructure-as-code stacks for all the enterprise-grade infrastructure that you need to bring up in a bare metal AWS account that share common configuration. They are written in a way that lets
you pick and chose what you want. The common configuration means that all your BareMetal stacks are consistent and compatible. Also, if you make a change, you can redeploy all the stacks and update everything with the new values.

We make it super clear when there are dependencies on other tutorials.

# To-Do

- [x] Make all configuration fields optional and handle them
- [ ] Figure out licensing for docs and source and add to every page, and to generated site.
    - [ ] Make it clear in the front page
    - [ ] Subscription? Buy me a coffee?
- [ ] Add comments and purpose to every CDK stack
- [ ] Write tests for all stacks and any other code we may have
- [ ] Each tutorial must have at least the following sections: preamble with resource diagram "Assumptions", "Required Configuration", "How to Deploy", "Verification", "Stack Resources" as table, "How it works",
- [ ] Add all the links
- [ ] List and explain the resources created by each stack (see example in documentation stack)
- [ ] Comments in CDK and data structures
- [ ] Separate CDN prefix for domain name
- [ ] Add switch for domain verification for SSL Certificate if the domain is not hosted in AWS Route 53
- [ ] Pass SSO region to custom resource handlers
- [x] Create and use config for GitHub Pages IP addresses
- [ ] Create and apply SCP for required tags and values
- [ ] Create Enterprise track and Features track in top-level doc sidebar menu
- [ ] Fix doc links. Sometimes we copied the URL from `http://localhost:3000`
- [ ] Test whether an empty Managed Services list in Permission Sets work. Otherwise do the same as missing policy. I don't think it's an error to have both missing because we could just be setting things up.
- [ ] Explore making true constructs for the meat of stacks, even if they're only used once in BareMetal
- [x] Use title case for H1 _and_ H2 b/c H2 are document headings, sentence case for everything else
- [ ] Open source goodness like licensing, semantic versioning, PR template, ...
- [ ] GitHub Actions for stack (hooks per stack if possible)
- [x] Maybe move common config back to top-level and pass explicitly to stacks? Yeah. I think that's right.
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
- [x] Do not create an `admin` user. Make it `baremetal` and assign PowerUserAccess

:::note
BareMetal is not really a trademark. But "BareMetal is not really a trademark™" is.
:::

[^adams]: [Douglas Adams, The Hitchhiker’s Guide to the Galaxy](https://www.goodreads.com/quotes/20153-after-a-fairly-shaky-start-to-the-day-arthur-s-mind)
