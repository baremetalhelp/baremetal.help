# Industrial-Strength Documentation

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import TerminalWindow from '@site/src/components/TerminalWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

:::warning This page has multiple issues.

- [ ] It's not very good.
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

We have kept the defaults for all the styles when we originally generated the website. We're not worried a out how it looks so much as whether it's correct and helpful. And the default looks just fine.

We like [Visual Studio Code](https://code.visualstudio.com/Download) as our editor and it has great [Markdown support](https://code.visualstudio.com/Docs/languages/markdown).

## How to deploy documentation like this

We deploy to GitHub Pages, which is a free website hosting service by GitHub.

In the `website` directory, type `yarn deploy` to push the content and deploy to GitHub Pages. See the Docusaurus documentation for [Deployment](https://docusaurus.io/docs/deployment) for full details.

Alternatively, see the [GitHub Actions](https://docs.github.com/en/actions) workflow in `.github/workflows/publish-website.yml`. This file contains the steps of a GitHub Action that does the deploy for you. You can use that too in your documentation.
