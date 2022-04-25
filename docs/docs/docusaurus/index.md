---
sidebar_position: 3
---

# BareMetal Documentation

The entire documentation for this website is the `docs` folder. We're using [Docusaurus](https://docusaurus.io/). Full documentation there.

## Assumptions

See the general assumptions in "About BareMetal tutorials".

## Deploy

`cd docs` to put you in the right place.

`yarn` (no args needed) to install dependencies.

`yarn start` to pull up a local version at <http://localhost:3000/>.

`yarn deploy` to push to GitHub Pages.

## Things to Watch Out For

There's a file `CNAME` in the docs directory that contains the domain name where you want to see your documentation. GitHub Pages uses the DNS for this domain to configure hosting.

Make sure you know how to configure the right kind of domain for hosting GitHub Pages. You can pick either an apex domain, like `baremetal.help`, or a subdomain like `docs.baremetal.help`. This repo configures an apex domain.

See [About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) in the GitHub documentation.

## The Full DNS Step-by-Step

Here's the short version of the above GitHub instructions.

:::info action
Add the right A record to DNS. 

GitHub Pages expects a DNS Alias record mapping your apex domain to four specific IP address, `185.199.108.153` and others like it.

You also need a CNAME record for `www.baremetal.help`[^1]