# Industrial-Strength Documentation

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import TerminalWindow from '@site/src/components/TerminalWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::warning This page has multiple issues.

- [ ] It's too preachy and does not give enough reasonable alternatives.
- [ ] Is it really a foundation?
      :::

Why does documentation belong here? Well, we think that it's the foundation of robust enterprises. We can't get by without it. You may already have a wiki like Confluence and we think you should stick with that. One of the nice things about doing documentation the way we do it here is that you can use Git and Pull Requests to document changes to the documentation.

We wrote the BareMetal documentation to be read. If it's hard to read or otherwise not right, we'll fix it. If you find a mistake, please let us know and we'll fix it. Even better, please by all means submit a Pull Request.

The entire BareMetal team is proud of this documentation, which you can find in the `website` folder once you've cloned the repo.

```bash
git clone https://github.com/baremetalhelp/baremetal.help.git
cd website
```

## Great writing tools

We're using [Docusaurus](https://docusaurus.io/) and Docusaurus uses [Markdown](https://docusaurus.io/docs/markdown-features) for the text. Read [Getting Started](https://docusaurus.io/docs/category/getting-started) in the Docusaurus documentation for details about creating your own documentation website like this one.

We have kept the defaults for all the styles when we originally generated the website. We're not worried about how it looks so much as whether it's correct and helpful. And the default looks just fine.

We like [Visual Studio Code](https://code.visualstudio.com/Download) as our editor and it has great [Markdown support](https://code.visualstudio.com/Docs/languages/markdown).

## How to deploy documentation like this

We deploy to GitHub Pages, which is a free website hosting service by GitHub.

There are two parts to deploying the docs

1. Set up DNS with the correct entries to get GitHub Pages to work with a custom domain. See [About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages).
2. Generate static HTML and metadata for the website, then push to GitHub in a well-known branch, `gh-pages`.

### Set up DNS

We have a stack for that. It's not that hard, but why not make it repeatable?

In `./bin/baremetal.help.ts`, check you assign the correct values of your domain and GitHub user to the corresponding parameters. We're using `baremetal.help` and `baremetalhelp` respectively and both those values need to change.

```ts
new BareMetalGitHubPagesStack(app, "BareMetalGitHubPages", {
    env,
    tags,
    domainName: "baremetal.help",
    gitHubUser: "baremetalhelp",
});
```

Then — as the `baremetal` privileged user — deploy the BareMetal CDK stack. In the root of this repo

```shell
cdk deploy BareMetalGitHubPages
```

This creates the following resources

| Name    | CDK Type      | Value                                                                                                                                             | Notes                                                                                                                                                                                              |
| ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `alias` | `ARecord`     | Well-known list of GitHub Pages IP addresses (we save you from typing `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) | [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) |
| `cname` | `CnameRecord` | `www.${domainName}` → `${gitHubUser}.github.io`                                                                                                   | Required redirection for GitHub Pages to work with a custom domain.                                                                                                                                |

### Build and push the documentation

In the `website` directory, type `yarn deploy` to push the content and deploy to GitHub Pages. See the Docusaurus documentation for [Deployment](https://docusaurus.io/docs/deployment) for full details.

Alternatively, see the [GitHub Actions](https://docs.github.com/en/actions) workflow in `.github/workflows/publish-website.yml`. This file contains the steps of a GitHub Action that does the deploy for you. You can use that too in your documentation.

## Upshot

- You saw how to write documentation on Docusaurus.
- You generated static content from your Docusaurus site.
- You pushed it to a well-known branch, `gh-pages`, that tells GitHub Pages where to find your static content.
- You deployed a BareMetal stack that sets up DNS so GitHub Pages works with a custom domain.
