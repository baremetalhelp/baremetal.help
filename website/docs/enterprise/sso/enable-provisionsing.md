---
sidebar_position: 5
---

# Set Up User and Group Provisioning

We have some AD Users and AD Groups. We need to set up which ones are synchronized with AWS SSO. Hint: Pretty much all of them.

## Assign User and Groups

The AWS Single Sign-On Enterprise Application requires users and groups to be **assigned** so that they are synchronized.

Find the AWS Single Sign-on Enterprise Application.

![](images/find-enterprise-applications.png)

:::info action
Click "Enterprise applications".
:::

![](images/enterprise-applications.png)

:::info action
Click "AWS Single Sign-on".
:::

![](images/aws-single-sign-on-overview.png)

:::info action
Click "Assign users and groups".
:::

![](images/assign-users-and-groups.png)

:::info action
Click "Add user/group". The "Users and groups" on the next page.
:::

![](images/add-assignment.png)

:::info action
Add all users and groups. I have my user in AD as the owner. It's not at all necessary.
:::

![](images/add-assignments.png)

:::info action
Click "Select" to add all the assignments. Click "Assign" to make it happen.
:::

![](images/assignments-complete.png)

## Provision User and Groups for Synchronization

Now that we have assigned which AD User and Groups will be synchronized to AWS SSO Users and Groups, it's time to set up the synchronization job itself.

:::info action
In the AWS Single Sign-on Enterprise Application, click "Provisioning".
:::

![](images/start-provisioning.png)

:::info action
Click "Get started"
:::

![](images/provisioning.png)

:::info action
Select "Automatic".
:::

![](images/automatic-provisioning.png)

### Back to AWS SSO Console

AD automatic provisioning requires a Tenant URL and a Secret Token. We get these from the AWS.

In the AWS SSO Console.

![](images/aws-automatic-provisioning-setup.png)

:::info action
Click "Enable" next to "Automatic Provisioning".
:::

![](images/scim-endpoint-and-token.png)

:::info action
Copy "SCIM endpoint" URL to "Tenant URL" in the AD Provisioning console.

Copy "Access token" to "Secret Token" in the AD Provisioning console.
:::

![](images/test-scim-connection.png)

:::info action
Click "Test Connection".
:::

Here's what success looks like.

![](images/test-scim-connection-success.png)

:::info action
Click "Save".
:::

Here's the initial provisioning configuration.

![](images/provisioning-setup.png)

:::info action
Click "Start provisioning".
:::

Nothing will happen for a bit, so put the kettle on.

By default, synchronization runs every 40 minutes. It is not possible to change this delay. But it _is_ possible to "Provision on demand" on a specific AD User. Although this will not
create new SSO Groups, just assign existing ones.

For this step we're only interested in seeing all users and group being synchronized at once to AWS SSO.

We're so close we can taste it.

![](images/40-minutes-later.jpg)

![](images/provisioning-with-error.png)

Oh look. An error. Let's show you how to debug and fix that.

First, let's head over to the AWS SSO Console to see what we can find out. Check Users and Groups.

:::info action
Open AWS SSO console. Click "Users", then click "Groups".
:::

![](images/synched-users.png)

![](images/synched-groups.png)

It looks like although Annie was synchronized correctly, the Administrator group did not.

:::info action
Click "Provisioning logs" and find the failure.
:::

![](images/provisioning-logs.png)

:::info action
Click the failed entity.
:::

![](images/provisioning-failure-detail.png)

:::tip
It's quite possible some group names are reserved, either in AD or AWS SSO. "Administrator" could be one of those. Let's add a new group "SRE" and see what happens.
:::

Bingo.

![](images/sre-group-sync.png)

## State of Play

Tie it all together... TBD
