---
sidebar_position: 3
---

# Same Thing With Pictures

These are the SSO integration instructions you're looking for.

## Assumptions

See the general assumptions in "About BareMetal tutorials". [link]

In addition
1. You have an [Azure account](https://azure.microsoft.com)
2. An [Azure AD tenant](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant) in that account and permissions to configure it.
3. An Azure P2 trial license [link]

## Enable AWS SSO

In the AWS Console, find the Single Sign-On page.

![Enable AWS SSO](images/enable-sso.png)

:::info action
Click "Enable AWS SSO".
:::

### AWS SSO enabled OK

It may take a minute or two, but success looks like this.

![AWS SSO enabled](images/aws-sso-created.png)

## Create Initial AD Tenant 

Follow [these instructions](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-create-new-tenant).

![](images/empty-ad-console.png)

:::info action
Click "Enterprise applications"
:::

## Create New Enterprise Application

An Enterprise Application is the feature you add to integrate with AWS SSO. You can't do any of the rest of this tutorial without this feature.

![](images/ad-new-application.png)

:::info action
Click "+ New application"
:::

:::info action
Search for "aws"
:::

You'll see AWS show up twice. There's a legacy application and then the one that works. Pick the one that works.

![](images/search-aws-application.png)

:::info action
Click "AWS Single Sign-on"
:::

![](images/create-ad-application.png)

:::info action
Click "Create". It'll take a minute or two.
:::

### AD Enterprise Application created OK

![](images/create-ad-application-success.png)

TBD: Errors and fixes

## Set Up Single Sign-On in AD

![](images/set-up-ad-single-sign-on.png)

:::info action
Click "Set up single sign on". Click "SAML".
:::

![](images/ad-saml-setup.png)

Leave this window open. We're doing to generate some metadata in AWS SSO that we 
will use to configure this.

## Download SSO Metadata from AWS

Go back to the AWS SSO console.

:::info action
Click "Settings"
:::

![](images/aws-sso-settings.png)

Change the Identity Source.

:::info action
Click "Actions" menu
:::

![](images/change-identity-source.png)

:::info action
Click "External identity provider". Then "Next".
:::

:::info action
Click "Download metadata file"
:::

![](images/download-metadata.png)

## Upload SSO Metadata to AD

Now open the AD window back up.

:::info action
Click "Upload metadata file", select metadata file you downloaded from AWS, click "Add".
:::

![](images/add-metatdata.png)

Success looks like this.

![](images/add-metadata-success.png)

:::info action
Click "Save".
:::

![](images/no-ill-test-later.png)

:::info action
Click "No, I'll test later"
:::

## Download SSO Certificate

![](images/download-certificate.png)

:::info action
In step 3, click "Download" next to "Certificate (Base64)" to download the SAML signing certificate.
:::

:::warning incomplete or broken implementation
We could not get the Federation Metadata XML download to work. As of this writing, the upload to AWS SSO did not configure things the right way. 

It's no big deal. We just need to copy a few fields by hand.

We also did not install the "highly recommended" browser plugin in Step 4. We're not using Chrome, and that's the
only browser it supports. Well probably Edge too.
:::

## Complete AWS SSO Configuration

:::info action
In step 5, open "Configuration URLs".

Copy "Login URL" in this Azure window to "IdP sign-in URL" in the AWS SSO window.

Copy "Azure AD identifier" in the Azure window to "IdP issuer URL" in the AWS SSO console.

Still in the AWS SSO console, upload the SAML signing certificate you downloaded from Azure AD.
:::

This is what the AWS SSO console looks like when you're ready to go.

![](images/aws-sso-config-ready-to-go.png)

:::info action
Click "Next".
:::

Review.

![](images/confirm-idp-config.png)

:::info action
Enter ACCEPT. Click "Change identity source".
:::

This is what success looks like.

![](images/sso-setup-complete.png)

> TBD do we need to set up automatic provisioning in here? Not sure how it's different from the provisioning in AD.
