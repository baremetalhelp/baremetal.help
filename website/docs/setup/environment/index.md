# Get Ready Run Everything in BareMetal

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

```mdx-code-block
import SecurityCredentialsLink from './images/security-credentials-link.png';
```

:::warning make sure you've set up your AWS account correctly
Setting up you development environment will only work if you've completed the previous tutorial [Account Best-Practice Setup](./newaccount/)
:::

## Don't Panic

This is going to feel like a lot.

You'll need the right environment to deploy BareMetal features. There is some setup required, but the good news is once it's done it'll see you through to the end.

:::note you can also just follow along and read the code
Perhaps you're just getting to know the ropes and aren't ready to deploy anything yet. Tagging along is just fine. We worked hard to make all the scripts readable.

While you may not need to know everything about the tools like TypeScript and the Cloud Development Kit (CDK) right away, having a basic understanding can be very beneficial, especially if you want to customize or modify your implementation in the future.
:::

## Quick Start

If you've done something like this before, here are the basics. Each tutorial relies on at least these. Additional requirements are listed in each tutorial as needed.

1. You have an AWS account and have [created a privileged IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html), `baremetal`.
2. You have created credentials for the `baremetal` user and have [stored them on your computer](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).
3. You have installed the [latest AWS command-ine tools, CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
4. You have installed the [latest AWS CDK CLI](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html).

## Step-by-Step

So the quick start was a bit ambitious. Try this instead.

### Install the Tools with a Package Manger

You have a couple of good options. You can use a package manager or install by hand. We recommend a package manager and the one we use is [`homebrew`](https://brew.sh/).

#### Using `homebrew`

:::note todo
This won't work on Windows, only macOS and Linux. You'll need to follow the "Otherwise..." instructions on Windows.
:::

Things will be easier if you use a package manager, especially [`homebrew`](https://brew.sh/). You can use it to install the tools you'll need. In any case, we link to each tool's installation instructions at the official docs. You can install the tools however you like, but you might want to go with the `homebrew` version because it's easy to do and easy to stay up to date.

```bash
brew install git node yarn typescript awscli aws-cli
```

### Otherwise, Install by Hand

Install [`git`](https://github.com/git-guides/install-git). You'll need this to access and download the BareMetal source code that's at the foundation of repeatable implementations of the architectures.

Install a current version of [`node`](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs). This is one of the tools that is likely to be installed already but may not be up to date.

Install [`yarn`](https://yarnpkg.com/) the package manager for JavaScript and TypeScript. The code for each BareMetal tutorial requires you to _run_ but not necessarily _understand_ what's going on. And running the code will download all the required dependencies for the infrastructure-as-code.

Now [TypeScript](https://www.typescriptlang.org/download/). This is the language the BareMetal scripts are written in because that's the source language the infrastructure-as-code is written in.

Install the latest version of the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

Install [AWS Cloud Development Kit, CDK CLI](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html). All the BareMetal scripts use CDK and you can't get going without this.

## Prepare your Environment

You will need to access AWS accounts with the AWS CLI.

There are lots of ways to configure the AWS CLI and the right credentials. Lots! The easiest way to do this is the method using long-term credentials. Long-term credentials are not recommended for the long term. We will show you more secure and robust ways as we develop a better foundation for identity.

If you want a simple version, follow the version that follows with the exact screenshots and clicks you need.

### Log in as `baremetal`

:::info action
In the AWS Console, log in as the `baremetal` user, not the root user. We definitely don't want to create credentials for the root user. That's a serious security antipattern.
:::

After you log in, click "Security credentials" from the top-right menu in the AWS Console UI.

<img src={SecurityCredentialsLink} width="400px"/>

Scroll down to Access Keys.

![](./images/security-credentials-ui.png)

:::info action
Click "Create access key".

Select "Command Line Interface (CLI)", read "Alternatives recommended", and check the box that you want to proceed anyway.

_We will come back to the recommendations in a future tutorial dedicated to the topic._
:::

Complete the UI and see this.

![](./images/keys-created.png)

Don't close this page.

## Set up the CLI

Finally.

:::info action
Assuming you have installed the AWS command-line tool, enter `aws configure` in a terminal and enter the keys but copying from the page you didn't close as follows.

You can set the default region and CLI output format if you like. We like `us-east-1` and `json`.

```
$ aws configure
AWS Access Key ID [None]: AKIAYDHJWGRG2BYMTGO3
AWS Secret Access Key [None]: ABC-super-secret-XYZ
Default region name [None]: us-east-1
Default output format [None]: json
```

:::

This will store credentials in a file `~/.aws/credentials`, which you can verify as follows.

```
$ cat ~/.aws/credentials
[default]
aws_access_key_id = AKIAYDHJWGRG2BYMTGO3
aws_secret_access_key = ABC-super-secret-XYZ
```

## Test things out

Now you have the AWS CLI set up with credentials, you can run a simple command. Try listing the AWS S3 Buckets in your account. You may not have any yet.

```bash
aws s3 ls
```

Now try creating one

```bash
aws s3 mb s3://thenameofyourbucket
```

Names of S3 buckets are globally unique. And you can't have the bucket called `thenameofyourbucket` because I got there first. Just try something long and random, like a [UUID](https://www.uuidtools.com/v4).

Now list your S3 buckets again and you'll see it.

```bash
aws s3 ls
```

### Why didn't that Work?

Some things to look for

- You did not create an `baremetal` user
- You did not create CLI access keys for the `baremetal` user
- You did not initialize the AWS CLI with access keys for the `baremetal` user
- We botched these instructions

## The Upshot
