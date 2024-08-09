"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2235],{5013:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>h,toc:()=>p});var n=s(4848),o=s(8453);const i=s.p+"assets/images/root-account-settings-5b34387cfd703939ca5438448c7a362d.png",r=s.p+"assets/images/sign-out-b63f8a99048ebd21abb3284d606980d0.png",a=s.p+"assets/images/mfa-f5f3ddf8c89ab7ff88d5b47902e2565c.png",c=s.p+"assets/images/mfas-at-login-52f5ef789e56a5cebe40781409f6bbc6.png",l={},d="Set Up your AWS Account",h={id:"setup/newaccount/index",title:"Set Up your AWS Account",description:"Creating a new AWS account is easy. Setting it up for best practices like security and billing is also easy, but easy to miss. All the features and functionality of the rest of BareMetal rely on this correct set up.",source:"@site/docs/setup/newaccount/index.md",sourceDirName:"setup/newaccount",slug:"/setup/newaccount/",permalink:"/docs/setup/newaccount/",draft:!1,unlisted:!1,editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/setup/newaccount/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set Up Your Environment",permalink:"/docs/category/set-up-your-environment"},next:{title:"Environment Setup",permalink:"/docs/setup/environment/"}},u={},p=[{value:"Create an AWS account",id:"create-an-aws-account",level:2},{value:"Log in as the root user",id:"log-in-as-the-root-user",level:2},{value:"Assign the root user MFA, Multi-Factor Authentication",id:"assign-the-root-user-mfa-multi-factor-authentication",level:2},{value:"Test the root MFA",id:"test-the-root-mfa",level:3},{value:"Establish cost budgets",id:"establish-cost-budgets",level:2},{value:"Create a <code>poweruser</code> IAM group",id:"create-a-poweruser-iam-group",level:2},{value:"Create a privileged IAM user <code>baremetal</code>",id:"create-a-privileged-iam-user-baremetal",level:2},{value:"A short version",id:"a-short-version",level:3},{value:"Log in and secure the <code>baremetal</code> user",id:"log-in-and-secure-the-baremetal-user",level:2},{value:"Test MFA for the <code>baremetal</code> user",id:"test-mfa-for-the-baremetal-user",level:3},{value:"The Upshot",id:"the-upshot",level:2}];function f(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"set-up-your-aws-account",children:"Set Up your AWS Account"}),"\n","\n",(0,n.jsx)(t.p,{children:"Creating a new AWS account is easy. Setting it up for best practices like security and billing is also easy, but easy to miss. All the features and functionality of the rest of BareMetal rely on this correct set up."}),"\n",(0,n.jsx)(t.h2,{id:"create-an-aws-account",children:"Create an AWS account"}),"\n",(0,n.jsxs)(t.p,{children:["As mentioned, this part's easy. Follow the instructions in ",(0,n.jsx)(t.a,{href:"https://signin.aws.amazon.com/signup?request_type=register",children:"Sign up for AWS"}),". Remember the email address you provided and if you see it, jot down the AWS account number. This new account comes with a generous ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/free",children:"Free Tier"}),". You will still need a credit card."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Delete resources when you're finished with them!",type:"warning",children:[(0,n.jsx)(t.p,{children:"You can create virtual compute resources, EC2, in the free tier. But that only applies to certain sizes and then only for a limited number of hours in a month."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"If you create an instance or other resource, please make sure you delete it when you're finished. You will incur charges if you leave them running, even if you don't use them."})}),(0,n.jsx)(t.p,{children:"S3 buckets are practically free, even for buckets with a lot of objects. But archiving unused S3 objects to deep storage incurs a per-object charge. So it pays to study the cost structure of how AWS changes for things."}),(0,n.jsx)(t.p,{children:"No, seriously, delete unused resources. Do it now, while you're thinking of it."})]}),"\n",(0,n.jsx)(t.h2,{id:"log-in-as-the-root-user",children:"Log in as the root user"}),"\n",(0,n.jsxs)(t.p,{children:["You'll use the email address and password you used to create the AWS Account to ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all",children:"sign in for the first time"}),'. This is called the "root" user.']}),"\n",(0,n.jsxs)(t.admonition,{title:"security",type:"warning",children:[(0,n.jsx)(t.p,{children:"You generally won't use the root user for anything after the original set up. Specifically, you must not create credentials for the root user to use command-line tools."}),(0,n.jsx)(t.p,{children:"Simply just having these credentials stored anywhere is a significant threat and will allow an attacker to take over your whole account if they compromise your laptop."}),(0,n.jsx)(t.p,{children:"We'll shortly set up a privileged user, and that will required root access to the console only."})]}),"\n",(0,n.jsx)(t.h2,{id:"assign-the-root-user-mfa-multi-factor-authentication",children:"Assign the root user MFA, Multi-Factor Authentication"}),"\n",(0,n.jsxs)(t.p,{children:["Once you have logged in as the root user, the very first thing to do is to assign MFA. This is true for all accounts, but setting it for root is critical. If you have a hardware MFA, all the better. But software MFAs are almost as good ",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-bitwarden",id:"user-content-fnref-bitwarden","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,n.jsxs)(t.admonition,{title:"action",type:"info",children:[(0,n.jsx)(t.p,{children:'Once you\'re logged in, from the top-right menu in the AWS console click "Security credentials" for the root user.'}),(0,n.jsx)("img",{src:i,width:"400px"})]}),"\n",(0,n.jsx)(t.p,{children:'You\'ll see "My security credentials" for the root user.'}),"\n",(0,n.jsx)(t.admonition,{title:"action",type:"info",children:(0,n.jsx)(t.p,{children:'Click "Assign MFA device" and follow along.'})}),"\n",(0,n.jsx)(t.p,{children:"Here's what a successfully-assigned MFA device looks like."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(5358).A+"",width:"3508",height:"2360"})}),"\n",(0,n.jsx)(t.h3,{id:"test-the-root-mfa",children:"Test the root MFA"}),"\n",(0,n.jsxs)(t.admonition,{title:"action",type:"info",children:[(0,n.jsxs)(t.p,{children:['Click "Sign out" from the top-right menu in the AWS console. ',(0,n.jsx)("img",{src:r,width:"400px"})]}),(0,n.jsxs)(t.p,{children:["Then log back in as the root user. This time, the console will prompt for the MFA. ",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-sequoia",id:"user-content-fnref-sequoia","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," ",(0,n.jsx)("img",{src:a,width:"400px"})]})]}),"\n",(0,n.jsx)(t.admonition,{title:"security",type:"warning",children:(0,n.jsx)(t.p,{children:"You will not need to use the root user frequently, perhaps never again if you're security conscious. Which you definitely are, because you're building a secure-by-default enterprise in the AWS public cloud."})}),"\n",(0,n.jsx)(t.h2,{id:"establish-cost-budgets",children:"Establish cost budgets"}),"\n",(0,n.jsx)(t.p,{children:"Any Public Cloud costs money. It's not unusual for big companies to spend $1M+ a month."}),"\n",(0,n.jsxs)(t.admonition,{title:"a note on pricing",type:"note",children:[(0,n.jsx)(t.p,{children:'When you migrate from your data center to the cloud, how you pay for infrastructure changes. A lot. Many times we\'ve seen "sticker shock" when the first bill comes in. Maybe you messed up, but Finance in your company will need answers in any case.'}),(0,n.jsxs)(t.p,{children:["The issue is often that people start comparing two completely different ways of paying for things: CapEx vs. OpEx. Read ",(0,n.jsx)(t.a,{href:"https://www.cloudzero.com/blog/capex-vs-opex/",children:"CapEx Vs. OpEx In The Cloud: 10 Key Differences"})," for a good overview."]}),(0,n.jsx)(t.p,{children:"In brief, CapEx, Capital Expenditure, represents larger upfront costs for hardware where the on-going monthly OpEx, Operation Expenses, are then usually moderate. Hosting, IT staff, and so on. In the Public Cloud, your bill will be OpEx. There are generally no upfront cost requirements and pricing is pay-as-you-use. This often means the cloud monthly bill is much larger than it was in the old model. But the savings comes from the fact you didn't buy lots of infrastructure upfront."}),(0,n.jsx)(t.p,{children:"Public Cloud offers exceptional scaling up for peak load and scaling down for periods of lower traffic. In traditional CapEx models, you have to buy enough infrastructure for peak load, which is sitting idle outside that period."})]}),"\n",(0,n.jsx)(t.admonition,{title:"action",type:"info",children:(0,n.jsxs)(t.p,{children:["Log in as the root user in the AWS console and click ",(0,n.jsx)(t.em,{children:"Billing and Cost Management"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"Here you can see a private AWS account with moderate bills."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(3435).A+"",width:"2544",height:"1740"})}),"\n",(0,n.jsxs)(t.p,{children:["You can use the ",(0,n.jsx)(t.a,{href:"https://calculator.aws/#/",children:"AWS Pricing Calculator"})," to estimate charges by usage patterns."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html",children:"What is AWS Billing and Cost Management?"})," for an overview ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/pricing-calculator/latest/userguide/what-is-pricing-calculator.html",children:"User Guide"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html",children:"Managing your costs with AWS Budgets"})," for details of how to create budgets and alarms. It's very handy to know you'll get notified if you left something running or your estimates were inaccurate."]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html",children:"Create a billing alarm to monitor your estimated AWS charges"})," for details of setting up billing alarm."]}),"\n",(0,n.jsx)(t.p,{children:'Here, you can see how two budgets set up for daily and monthly costs in a personal AWS Account. The monthly often goes over because of domain renewal. But you should always check even if you think you know why it spiked. Otherwise you\'ll have a "There was this one time..." story to tell.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(6690).A+"",width:"2966",height:"626"})}),"\n",(0,n.jsxs)(t.h2,{id:"create-a-poweruser-iam-group",children:["Create a ",(0,n.jsx)(t.code,{children:"poweruser"})," IAM group"]}),"\n",(0,n.jsx)(t.p,{children:"As a security best practice, we group users into user groups. It's more secure this way because it's easier to change and check permissions for a user."}),"\n",(0,n.jsxs)(t.p,{children:["We're intentionally calling this group ",(0,n.jsx)(t.code,{children:"poweruser"})," and not ",(0,n.jsx)(t.code,{children:"admin"})," because there are permissions the power user doesn't have to have, like changing account settings."]}),"\n",(0,n.jsxs)(t.admonition,{title:"action",type:"info",children:[(0,n.jsxs)(t.p,{children:['As the root user in the AWS Console, open the "IAM" console UI. (',(0,n.jsx)(t.em,{children:"Not"})," IAM Identity Center.)"]}),(0,n.jsxs)(t.p,{children:['In the left panel under "Access management", "User groups", click "Create group". Call the group ',(0,n.jsx)(t.code,{children:"poweruser"}),"."]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(14).A+"",width:"2472",height:"636"})}),"\n",(0,n.jsxs)(t.p,{children:["Now we're going at attach two AWS-managed policies, ",(0,n.jsx)(t.code,{children:"PowerUserAccess"})," and ",(0,n.jsx)(t.code,{children:"IAMFullAccess"}),". ",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-explainpoweruseracess",id:"user-content-fnref-explainpoweruseracess","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),"\n",(0,n.jsx)(t.admonition,{title:"action",type:"info",children:(0,n.jsxs)(t.p,{children:['In the console panel "Attach permissions policies - Optional", search for ',(0,n.jsx)(t.code,{children:"poweruseraccess"})," and check the box."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(7918).A+"",width:"2446",height:"1002"})}),"\n",(0,n.jsx)(t.admonition,{title:"action",type:"info",children:(0,n.jsxs)(t.p,{children:["Do the same for ",(0,n.jsx)(t.code,{children:"iamfullaccess"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(476).A+"",width:"2442",height:"1422"})}),"\n",(0,n.jsx)(t.p,{children:"Complete the create group UI and you'll see"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(918).A+"",width:"3412",height:"2128"})}),"\n",(0,n.jsxs)(t.h2,{id:"create-a-privileged-iam-user-baremetal",children:["Create a privileged IAM user ",(0,n.jsx)(t.code,{children:"baremetal"})]}),"\n",(0,n.jsxs)(t.p,{children:["We're going to create a privileged user so we don't have to log in as the root user and especially so we don't have to create and command-line credentials for the root user. This is a ",(0,n.jsx)(t.em,{children:"requirement"})," for secure AWS accounts."]}),"\n",(0,n.jsx)(t.admonition,{title:"action",type:"info",children:(0,n.jsx)(t.p,{children:"Log in as the root user if needed. With any luck, this will be the last time in a while you'll be logging in as root."})}),"\n",(0,n.jsxs)(t.p,{children:["You have a lot of options for creating a privileged IAM user. It's confusing, especially if you're new to this. ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html",children:"Authentication and access credentials"})," takes you down that rabbit hole."]}),"\n",(0,n.jsx)(t.p,{children:"Or you can follow this short version."}),"\n",(0,n.jsx)(t.h3,{id:"a-short-version",children:"A short version"}),"\n",(0,n.jsxs)(t.admonition,{title:"action",type:"info",children:[(0,n.jsxs)(t.p,{children:["As the root user in the AWS Console, click IAM. (",(0,n.jsx)(t.em,{children:"Not"})," IAM Identity Center.)"]}),(0,n.jsxs)(t.p,{children:['Click "Users" on the left panel. Click "Create user". You can choose any combination of password options. We generally recommend forcing users to change on first log in. You can use a secure service like ',(0,n.jsx)(t.a,{href:"https://flashpaper.io",children:"https://flashpaper.io"})," to encrypt and delete the initial credentials."]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(6238).A+"",width:"3412",height:"2128"})}),"\n",(0,n.jsx)(t.admonition,{title:"action",type:"info",children:(0,n.jsxs)(t.p,{children:["Now add the ",(0,n.jsx)(t.code,{children:"baremetal"})," user to the ",(0,n.jsx)(t.code,{children:"poweruser"})," group we created previously."]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(2518).A+"",width:"3412",height:"2128"})}),"\n",(0,n.jsx)(t.p,{children:"You can download credentials or email instructions. In any case, you can make a note of the Console sign-in link. You can use that link to sign in as an IAM user in the specified account."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(9797).A+"",width:"3412",height:"2128"})}),"\n",(0,n.jsx)(t.p,{children:"When you complete the create user UI, this is what you see."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(6482).A+"",width:"3412",height:"2128"})}),"\n",(0,n.jsxs)(t.h2,{id:"log-in-and-secure-the-baremetal-user",children:["Log in and secure the ",(0,n.jsx)(t.code,{children:"baremetal"})," user"]}),"\n",(0,n.jsx)(t.p,{children:"We got a temporary password, which we will have to change on first login. Let's do that and set up MFA at the same time."}),"\n",(0,n.jsx)(t.admonition,{title:"action",type:"info",children:(0,n.jsxs)(t.p,{children:["Log in as ",(0,n.jsx)(t.code,{children:"baremetal"})," ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/console/",children:"via the AWS Console"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"Or you can use Console sign-in link if you copied it. It will fill out the account number or alias. Your AWS account number is the one you wrote down when you created the account, right? If you don't know it, you can log in as the root user and see it in the top-right menu in the console."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"First Login"}),(0,n.jsx)(t.th,{children:"Change Password"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{src:s(2118).A+"",width:"774",height:"1076"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.img,{src:s(8584).A+"",width:"988",height:"612"})})]})})]}),"\n",(0,n.jsx)(t.p,{children:"Now click the IAM service console."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(8622).A+"",width:"3508",height:"2360"})}),"\n",(0,n.jsx)(t.admonition,{title:"action",type:"info",children:(0,n.jsx)(t.p,{children:'Click "Add MFA" in "Add MFA for yourself".'})}),"\n",(0,n.jsxs)(t.admonition,{title:"best practice",type:"note",children:[(0,n.jsx)(t.p,{children:"You should add multiple MFAs in case you lose access to one. You can have up to five if you think you'll lose four at once."}),(0,n.jsx)(t.p,{children:"We prefer biometrics over hardware or software tokens. Secure and convenient... you can have it all!"})]}),"\n",(0,n.jsx)(t.p,{children:"Here, we added both a biometrics MFA and a backup in our password application."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(6343).A+"",width:"3508",height:"2360"})}),"\n",(0,n.jsxs)(t.h3,{id:"test-mfa-for-the-baremetal-user",children:["Test MFA for the ",(0,n.jsx)(t.code,{children:"baremetal"})," user"]}),"\n",(0,n.jsx)(t.admonition,{title:"action",type:"info",children:(0,n.jsx)(t.p,{children:"Log out of the AWS Console as necessary. Now log back in."})}),"\n",(0,n.jsxs)(t.p,{children:["You'll see a couple of MFA options relating to the MFAs we created for the ",(0,n.jsx)(t.code,{children:"baremetal"})," user."]}),"\n",(0,n.jsx)("img",{src:c,width:"400px"}),"\n",(0,n.jsxs)(t.p,{children:["Test both. If something doesn't work, you can can remove the MFAs as the root user in the account and try adding them again as the ",(0,n.jsx)(t.code,{children:"baremetal"})," user."]}),"\n",(0,n.jsx)(t.h2,{id:"the-upshot",children:"The Upshot"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You created AWS account."}),"\n",(0,n.jsx)(t.li,{children:"You secured the root user for the account with MFA."}),"\n",(0,n.jsxs)(t.li,{children:["You created and secured a privileged user, ",(0,n.jsx)(t.code,{children:"baremetal"}),", in addition to the root user."]}),"\n",(0,n.jsx)(t.li,{children:"You earned a break, because now stuff gets real as we start to build out the account."}),"\n"]}),"\n","\n",(0,n.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,n.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{id:"user-content-fn-bitwarden",children:["\n",(0,n.jsxs)(t.p,{children:["We use ",(0,n.jsx)(t.a,{href:"https://bitwarden.com",children:"Bitwarden"}),". We're not sponsored, endorsed, or supported by Bitwarden. We just like the application. ",(0,n.jsx)(t.a,{href:"#user-content-fnref-bitwarden","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-sequoia",children:["\n",(0,n.jsxs)(t.p,{children:["If you're a Mac person, you're probably on macOS Sequoia. The new Passwords\xa0app is great for a software MFA, passkeys, and so on. ",(0,n.jsx)(t.a,{href:"#user-content-fnref-sequoia","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-explainpoweruseracess",children:["\n",(0,n.jsxs)(t.p,{children:["The AWS-managed IAM policy ",(0,n.jsx)(t.code,{children:"PowerUserAccess"})," allows full access for all services, except IAM, account, and Organization. We don't need permissions for the last two, but definitely need IAM access. Hence we add ",(0,n.jsx)(t.code,{children:"IAMFullAccess"}),". ",(0,n.jsx)(t.a,{href:"#user-content-fnref-explainpoweruseracess","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},2518:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/add-baremetal-user-to-poweruser-group-33d967e78378369fc5f49430d36cbb1e.png"},476:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/attach-iamfullaccess-94282e7317559033262eef48d34de329.png"},7918:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/attach-poweruseraccess-5ae2ea40b6170af5741588c8e63681e9.png"},8622:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/baremetal-user-iam-dashboard-ec48e60317aa4993aafb89b880d1db1b.png"},3435:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/billing-and-cost-management-home-f142a5c92daad411bba96ab263fd9ad3.png"},6343:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/both-mfas-1c14711eb93a688ed92ad3b6840a89a9.png"},6690:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/budgets-0f876a5c6644c22fac81e3241bdd3ba5.png"},6238:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/create-user-1-cf0609b08a14e06d19bacc9c56241504.png"},6482:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/create-user-complete-8e5fc90727efd984fcf08913cdcda7cd.png"},9797:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/create-user-credentials-a053705210984455a670bc47f9917685.png"},14:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/create-user-group-e66fbcfe1e1683f32b9838feaeabae41.png"},2118:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/first-login-d75da73637c1d651292f65098a594961.png"},8584:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/password-change-5fe3a3504111be5f10ddb27b90b88e6f.png"},918:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/poweruser-group-complete-44463d1d894cab2b8e14fba8f9dbcce6.png"},5358:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/root-account-complete-1802f24b324dd24bd85f65d171497f32.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);