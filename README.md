# Hey there

Welcome to [BareMetal Help](https://baremetal.help). We provide a set of infrastructure-as-code stacks that set up basic infrastructure in AWS. These stacks are tightly integrated and have been developed with best practices and consistent configuration, which makes all resources consistent, repeatable, and interoperable.

The full documentation's https://baremetal.help .

## Inspiration

As [Venmo SRE](https://venmo.com) I was given the opportunity to show development teams how to build things, things I'd already built for my home AWS infrastructure. A good example is the Web Team's new CDN. It's just like the one I used.

But the things I'd done were not well documented or integrated. This project fixes that.

## You're Here Because

1. You botched a search and this is totally not what you're looking for. Try more specific search terms.
1. You're a professional developer and you want to know how you'd create an enterprise grade, secure-by-default set of AWS accounts ready for development, testing, and production in your personal AWS accounts to ace interview questions.
1. You're an enterprise migrating to the cloud and you want to know how to start off on the right foot with a cloud-native solution.

## What You Get

Some examples of infrastructure

1. A cloud-native Content Delivery Network (CDN) at a custom domain
1. Single Sign-On (SSO) infrastructure, optionally integrated with Azure AD
1. Secure-by-default controls for users, groups, accounts, and an AWS Organization represented as a tree of Organization Units
1. A documentation website like https://baremetal.help hosted for free at a domain you own

You'll find references to awesome existing documentation for everything we build. The value we add is unifying everything you'll build. And everything you build will work first time as long as the prerequisites are met. We tell you what those are and how to do them.

## What You Don't Get

Any applications. We let you deploy your applications on a Kubernetes or AWS' container solution ECS. We have IaC to create a shared container infrastructure if you want it. Or you can copy our code and build it yourself.  

## Navigating This Repo

...

## License

This repo is covered under [The MIT License](./LICENSE).

## Thanks

Jon, Nadia, Phil.

Auth0 for their [Open Source Template](https://github.com/auth0/open-source-template)
