---
sidebar_position: 3
---

# Create an AWS Organization

:::warning this page has multiple issues

- [ ] We need a picture book for how to create the simplest organisation in the console.
- [ ] We need to review the current state of alternative tools and describe them in more details. If there are end-to-end examples in those tools, link to them.
      :::

An [AWS Organization](https://aws.amazon.com/organizations/) is how multiple AWS Accounts are organized into a group hierarchy, with Accounts under Organization Units. Grouping accounts like this makes securing different kinds of accounts — like production and QA — easier and more repeatable.

:::warning
The tools for creating an organization are generally complex and finicky. Each solution has a lot of preparation to take care of before you're up and running with an AWS Organization.

If you're not ready to invest the time it'll take to create an AWS Organization using the tools below, you can always create one by hand in the AWS console to get you going. When you feel it's appropriate, you can always recreate the AWS Organization with the tool you want.

This is probably not what you wanted to hear.
:::

:::note recommendation
Do it by hand in the AWS console: It's way easier.

If you're just starting out in the cloud from bare metal, the chances are you won't have so many accounts to organize.

This is probably what you wanted to hear.
:::

## Quick Start

There is no quick start. There are no comprehensive push-button solutions. You can get one started using the [console or CLI](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_create.html).

## Some Options

There are several tools to manage AWS Accounts and the AWS Organization they live in.

[AWS ControlTower](https://aws.amazon.com/controltower/?control-blogs.sort-by=item.additionalFields.createdDate&control-blogs.sort-order=desc) is a good effort, but there's no CLI access. However, many enterprises use ControlTower.

[Account Factory for Terraform](https://docs.aws.amazon.com/controltower/latest/userguide/aft-architecture.html) (AFT) is a newer addition and is pretty good. Take a look at the walk through and video to see if it's right for you. We think AFT's complexity is a good match for larger enterprises.

[org-formation](https://github.com/org-formation/org-formation-cli) is an infrastructure-as-code approach that's quite clever. This approach may fit your needs as a medium enterprise.
