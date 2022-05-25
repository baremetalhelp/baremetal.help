---
sidebar_position: 3
---

# Create AWS Organization

An [AWS Organization](https://aws.amazon.com/organizations/) is how multiple AWS Accounts are organized into a group hierarchy, with Accounts under Organization Units. This is required for SSO to work.

:::warning
The tools for creating an organization can be complex and finicky. Each has a lot of ground to cover before you're up and running with an AWS Organization.

If you're not ready to invest the time it'll take to create an AWS Organization using the tools below, you can always create one by hand to get you going. When you feel it's appropriate, you can always recreate the AWS Organization with the tool you want.

This is probably not what you wanted to hear.
:::

## Quick Start

There is no quick start. There are no push-button solutions. 

## You Have Good Options

There are several good tools and a lot of good documentation already written about managing AWS Accounts. 

[AWS ControlTower](https://aws.amazon.com/controltower/?control-blogs.sort-by=item.additionalFields.createdDate&control-blogs.sort-order=desc) is a good effort, but there's no CLI access. However, many enterprises use ControlTower.

[Account Factory for Terraform](https://docs.aws.amazon.com/controltower/latest/userguide/aft-architecture.html) (AFT) is a newer addition and is pretty good. Take a look at the walk through and video to see if it's right for you. We think AFT's complexity is a good match for larger enterprises.

[org-formation](https://github.com/org-formation/org-formation-cli) is an infrastructure-as-code approach that's quite clever. This approach may fit your needs as a medium enterprise.

