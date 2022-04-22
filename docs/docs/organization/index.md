---
sidebar_position: 3
---

# Create AWS Organization

An [AWS Organization](https://aws.amazon.com/organizations/) is how multiple AWS Accounts are organized into a group hierarchy, Organization Units. This is required for SSO to work.

## You Have Good Options

There are several good tools and a lot of good documentation about managing AWS Accounts. 

[AWS ControlTower](https://aws.amazon.com/controltower/?control-blogs.sort-by=item.additionalFields.createdDate&control-blogs.sort-order=desc) is a good effort, but there's no CLI access. However, many enterprises use ControlTower.

[Account Factory for Terraform](https://docs.aws.amazon.com/controltower/latest/userguide/aft-architecture.html) (AFT) is a newer addition and is pretty good. Take a look at the walk through and video to see if it's right for you. We think AFT's complexity is a good match for larger enterprises.

[`org-formation`](https://github.com/org-formation/org-formation-cli) is an infrastructure-as-code approach that's quite clever.