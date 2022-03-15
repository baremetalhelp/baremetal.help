---
sidebar_position: 2
---

# BareMetal CDN

We're going to build a Content Delivery Network, CDN, from scratch. A CDN serves web objects like images from locations that are geographically close to consumers.

CDNs cache too. So you only need to copy the original to one place and the CDN takes care of copying to edge locations on a cache miss.

## Assumptions

See the general assumptions in "About BareMetal tutorials".

In addition
1. You registered a domain (strongly recommended) [link].

:::note
You can serve content from an internal HTTP endpoint without a domain you own, but the URL of that endpoint can change if you delete and recreate the CDN.

If you write applications that rely on the internal URL, you'll have to change them.
It's an random internal name created for you by AWS.

If you just want to play with a CDN or don't have a custom domain, your best bet is to use the AWS console [link] rather than deploy the stack for this tutorial.
:::

In this repo [link], 

```bash
cdk ls
```

`BareMetalCDN` is the stack for this tutorial.

## Configuration

The CDN stack requires the following configuration.

In `baremetal.help.ts`, change the common configuration values to your domain.

```ts
const bareMetalConfig: BareMetalConfig = {
  domainName: "example.com",
  cdnEndpoint: "cdn.example.com",
};
```

## Deploy

```bash
cdk deploy BareMetalCdn
```

## Resources

Blah.

## Verification

Blah.


