# Getting Ready to Understand and Run Everything in BareMetal

:::warning This page has multiple issues
- [ ] These instructions may not be up to date on Windows and Linux
:::

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Don't Panic

You'll need to run code to create BareMetal features like a Content Delivery Network. That's in the next tutorial.

While you may not need to know everything about the tools like TypeScript and the Cloud Development Kit (CDK) right away, having a basic understanding can be very beneficial, especially if you want to customize or modify your implementation in the future.

## Install the Tools

You have a couple of good options. You can use a package manager or install by hand. We recommend a package manager and the one we use is  [`homebrew`](https://brew.sh/).

### Using `homebrew`

:::note TODO
This won't work on Windows, only macOS and Linux. You'll need to follow the "Otherwise..." instructions on Windows.
:::

Things will be easier if you use a package manager, especially [`homebrew`](https://brew.sh/). You can use it to install the tools you'll need. In any case, we link to each tool's installation instructions at the official docs. You can install the tools however you like, but you might want to go with the `homebrew` version because it's easy to do and easy to stay up to date.

```bash
brew install git node yarn typescript awscli cdk-cli
```

### Otherwise...

Install [`git`](https://github.com/git-guides/install-git). You'll need this to access and download the BareMetal source code that's at the foundation of repeatable implementations of the architectures.

Install a current version of [`node`](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs). This is one of the tools that is likely to be installed already but may not be up to date.

Install [`yarn`](https://yarnpkg.com/) the package manager for JavaScript and TypeScript. The code for each BareMetal tutorial requires you to _run_ but not necessarily _understand_ what's going on. And running the code will download all the required dependencies for the infrastructure-as-code.

Now [TypeScript](https://www.typescriptlang.org/download/). This is the language the BareMetal scripts are written in because that's the source language the infrastructure-as-code is written in.

Install the latest version of the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

Install [AWS Cloud Development Kit, CDK CLI](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html). All the BareMetal scripts use CDK and you can't get going without this.

## Prepare your Environment

You will need to access AWS accounts with the AWS CLI. 

There are lots of ways to configure the AWS CLI and the right credentials. Lots! The easiest way to do this is the method using long-term credentials. Long-term credentials are not recommended for the long term. We will show you more secure and robust ways as we develop a better foundation for identity. 

If you want a simple version, follow the version tht follows with the exact screenshots and clicks you need.

### Using the Inscrutable AWS Instructions

Even the "simple" version of the AWS instructions is complicated.

But if you're up for it, follow [Authenticate with IAM user credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html).

### The Same with Pictures

:::note TODO
The same with pictures
:::

## Test things out

Now you have the AWS CLI set up with credentials, you can run a simple command. Try listing the AWS S3 Buckets in your account. You may not have any yet.

```bash
aws s3 ls
```

Now try creating one

```bash
aws s3 mb s3://thenameofyourbucket
```

Names of S3 buckets are globally unique. And you can't have the bucket called `thenameofyourbucket` because I got there first 🤣. Just try something long and random, like a [UUID](https://www.uuidtools.com/v4).

Now list your S3 buckets again and you'll see it.

```bash
aws s3 ls
```

### Why didn't that Work?

...


## The Upshot
