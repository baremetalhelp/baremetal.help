---
sidebar_position: 3
---

# BareMetal Documentation

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

This entire documentation is the `website` folder once you've cloned the repo 

```
git clone https://github.com/baremetalhelp/baremetal.help.git
```

We're using [Docusaurus](https://docusaurus.io/) and Docusaurus uses Markdown for the text. See the Docusaurus documentation for all the details.

## How To Deploy Documentation Like This

We deploy to GitHub Pages, which is a free website hosting service from GitHub.

In the `website` directory, type `yarn deploy` to push to GitHub Pages. It won't work for you, because you're not a member of the BareMetal organization. But this method will definitely work for your Docusaurus website.

Alternatively, see the [GitHub Actions](https://docs.github.com/en/actions) workflow in `.github/workflows/publish-website.yml`. This file contains the steps of a GitHub Action that does the deploy for you. You can use that too in your documentation.
