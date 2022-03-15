---
sidebar_position: 1
---

# About BareMetal Tutorials

Here are some tutorials for bringing up cloud infrastructure from "bare metal." We assume very little. The focus here is Amazon Web Services, AWS.

For example, to create a Single Sign-On integration in AWS, we do not assume you have an organization, an existing SSO integration, or a directory set up for users and groups.

We're clear about any assumptions and we always show you how to prepare for each tutorial. For example, to create a CDN we show you how to register a domain in the AWS console. And for setting up email for your domain, we show you all the things you need to take care of.

Each tutorial includes infrastructure-as-code for deploying the tutorial's resources, written in CDK [link]. CDK has "stacks" as a
fundamental. There's at least one stack for every tutorial.

That means you can run the CDK to create the infrastructure in each tutorial without going through every detail. You might regret that
when things go wrong or you want to know how to use it. 

## The BareMetal tutorials

### Content Delivery Network, CDN

You use a CDN for delivering content like images from edge locations all over the world. A CDN is a cache. You define where the originals live and any configuration you need for different types of content.

## Nothing special

There's already so much great documentation for all of the resources you can create in the public cloud. We don't duplicate it, preferring
to link to relevant documentation along the way.

What we _do_ provide, however, is infrastructure-as-code for all tutorials that shares common configuration and written in a way so
you can pick and chose what you want. The common configuration means that all your BareMetal stacks are consistent and compatible.

We make it super clear when there are dependencies on other tutorials.

## Overall assumptions

1. You have an AWS account with a privileged IAM user [link].
1. You have credentials for that user [link].
1. You have cloned this repo [link].
1. You have the CDK CLI installed [link].

## Verify your setup

Blah.

## Shared configuration

Blah.

## Running infra-as-code

Blah.

## TODO

- Make configuration fields optional and handle it
- All the links
