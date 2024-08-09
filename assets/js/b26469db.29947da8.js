"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[204],{9060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=n(4848),i=n(8453);n(6889),n(4865),n(9365);const o=n.p+"assets/images/security-credentials-link-d0a3340981bc658c2ecd8b28f5ba88f2.png",a={},r="Get Ready Run Everything in BareMetal",l={id:"setup/environment/index",title:"Get Ready Run Everything in BareMetal",description:"Setting up you development environment will only work if you've completed the previous tutorial Account Best-Practice Setup",source:"@site/docs/setup/environment/index.md",sourceDirName:"setup/environment",slug:"/setup/environment/",permalink:"/docs/setup/environment/",draft:!1,unlisted:!1,editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/setup/environment/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Account Best-Practice Setup",permalink:"/docs/setup/newaccount/"},next:{title:"Environment Configuration",permalink:"/docs/setup/configuration/"}},c={},d=[{value:"Don&#39;t Panic",id:"dont-panic",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Step-by-Step",id:"step-by-step",level:2},{value:"Install the Tools with a Package Manger",id:"install-the-tools-with-a-package-manger",level:3},{value:"Using <code>homebrew</code>",id:"using-homebrew",level:4},{value:"Otherwise, Install by Hand",id:"otherwise-install-by-hand",level:3},{value:"Prepare your Environment",id:"prepare-your-environment",level:2},{value:"Log in as <code>baremetal</code>",id:"log-in-as-baremetal",level:3},{value:"Set up the CLI",id:"set-up-the-cli",level:2},{value:"Test things out",id:"test-things-out",level:2},{value:"Why didn&#39;t that Work?",id:"why-didnt-that-work",level:3},{value:"The Upshot",id:"the-upshot",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"get-ready-run-everything-in-baremetal",children:"Get Ready Run Everything in BareMetal"}),"\n","\n","\n",(0,s.jsx)(t.admonition,{title:"make sure you've set up your AWS account correctly",type:"warning",children:(0,s.jsxs)(t.p,{children:["Setting up you development environment will only work if you've completed the previous tutorial ",(0,s.jsx)(t.a,{href:"./newaccount/",children:"Account Best-Practice Setup"})]})}),"\n",(0,s.jsx)(t.h2,{id:"dont-panic",children:"Don't Panic"}),"\n",(0,s.jsx)(t.p,{children:"This is going to feel like a lot."}),"\n",(0,s.jsx)(t.p,{children:"You'll need the right environment to deploy BareMetal features. There is some setup required, but the good news is once it's done it'll see you through to the end."}),"\n",(0,s.jsxs)(t.admonition,{title:"you can also just follow along and read the code",type:"note",children:[(0,s.jsx)(t.p,{children:"Perhaps you're just getting to know the ropes and aren't ready to deploy anything yet. Tagging along is just fine. We worked hard to make all the scripts readable."}),(0,s.jsx)(t.p,{children:"While you may not need to know everything about the tools like TypeScript and the Cloud Development Kit (CDK) right away, having a basic understanding can be very beneficial, especially if you want to customize or modify your implementation in the future."})]}),"\n",(0,s.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(t.p,{children:"If you've done something like this before, here are the basics. Each tutorial relies on at least these. Additional requirements are listed in each tutorial as needed."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["You have an AWS account and have ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html",children:"created a privileged IAM user"}),", ",(0,s.jsx)(t.code,{children:"baremetal"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["You have created credentials for the ",(0,s.jsx)(t.code,{children:"baremetal"})," user and have ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html",children:"stored them on your computer"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["You have installed the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"latest AWS command-ine tools, CLI"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["You have installed the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html",children:"latest AWS CDK CLI"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"step-by-step",children:"Step-by-Step"}),"\n",(0,s.jsx)(t.p,{children:"So the quick start was a bit ambitious. Try this instead."}),"\n",(0,s.jsx)(t.h3,{id:"install-the-tools-with-a-package-manger",children:"Install the Tools with a Package Manger"}),"\n",(0,s.jsxs)(t.p,{children:["You have a couple of good options. You can use a package manager or install by hand. We recommend a package manager and the one we use is  ",(0,s.jsx)(t.a,{href:"https://brew.sh/",children:(0,s.jsx)(t.code,{children:"homebrew"})}),"."]}),"\n",(0,s.jsxs)(t.h4,{id:"using-homebrew",children:["Using ",(0,s.jsx)(t.code,{children:"homebrew"})]}),"\n",(0,s.jsx)(t.admonition,{title:"todo",type:"note",children:(0,s.jsx)(t.p,{children:"This won't work on Windows, only macOS and Linux. You'll need to follow the \"Otherwise...\" instructions on Windows."})}),"\n",(0,s.jsxs)(t.p,{children:["Things will be easier if you use a package manager, especially ",(0,s.jsx)(t.a,{href:"https://brew.sh/",children:(0,s.jsx)(t.code,{children:"homebrew"})}),". You can use it to install the tools you'll need. In any case, we link to each tool's installation instructions at the official docs. You can install the tools however you like, but you might want to go with the ",(0,s.jsx)(t.code,{children:"homebrew"})," version because it's easy to do and easy to stay up to date."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"brew install git node yarn typescript awscli aws-cli\n"})}),"\n",(0,s.jsx)(t.h3,{id:"otherwise-install-by-hand",children:"Otherwise, Install by Hand"}),"\n",(0,s.jsxs)(t.p,{children:["Install ",(0,s.jsx)(t.a,{href:"https://github.com/git-guides/install-git",children:(0,s.jsx)(t.code,{children:"git"})}),". You'll need this to access and download the BareMetal source code that's at the foundation of repeatable implementations of the architectures."]}),"\n",(0,s.jsxs)(t.p,{children:["Install a current version of ",(0,s.jsx)(t.a,{href:"https://nodejs.org/en/learn/getting-started/how-to-install-nodejs",children:(0,s.jsx)(t.code,{children:"node"})}),". This is one of the tools that is likely to be installed already but may not be up to date."]}),"\n",(0,s.jsxs)(t.p,{children:["Install ",(0,s.jsx)(t.a,{href:"https://yarnpkg.com/",children:(0,s.jsx)(t.code,{children:"yarn"})})," the package manager for JavaScript and TypeScript. The code for each BareMetal tutorial requires you to ",(0,s.jsx)(t.em,{children:"run"})," but not necessarily ",(0,s.jsx)(t.em,{children:"understand"})," what's going on. And running the code will download all the required dependencies for the infrastructure-as-code."]}),"\n",(0,s.jsxs)(t.p,{children:["Now ",(0,s.jsx)(t.a,{href:"https://www.typescriptlang.org/download/",children:"TypeScript"}),". This is the language the BareMetal scripts are written in because that's the source language the infrastructure-as-code is written in."]}),"\n",(0,s.jsxs)(t.p,{children:["Install the latest version of the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"AWS CLI"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Install ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html",children:"AWS Cloud Development Kit, CDK CLI"}),". All the BareMetal scripts use CDK and you can't get going without this."]}),"\n",(0,s.jsx)(t.h2,{id:"prepare-your-environment",children:"Prepare your Environment"}),"\n",(0,s.jsx)(t.p,{children:"You will need to access AWS accounts with the AWS CLI."}),"\n",(0,s.jsx)(t.p,{children:"There are lots of ways to configure the AWS CLI and the right credentials. Lots! The easiest way to do this is the method using long-term credentials. Long-term credentials are not recommended for the long term. We will show you more secure and robust ways as we develop a better foundation for identity."}),"\n",(0,s.jsx)(t.p,{children:"If you want a simple version, follow the version that follows with the exact screenshots and clicks you need."}),"\n",(0,s.jsxs)(t.h3,{id:"log-in-as-baremetal",children:["Log in as ",(0,s.jsx)(t.code,{children:"baremetal"})]}),"\n",(0,s.jsx)(t.admonition,{title:"action",type:"info",children:(0,s.jsxs)(t.p,{children:["In the AWS Console, log in as the ",(0,s.jsx)(t.code,{children:"baremetal"})," user, not the root user. We definitely don't want to create credentials for the root user. That's a serious security antipattern."]})}),"\n",(0,s.jsx)(t.p,{children:'After you log in, click "Security credentials" from the top-right menu in the AWS Console UI.'}),"\n",(0,s.jsx)("img",{src:o,width:"400px"}),"\n",(0,s.jsx)(t.p,{children:"Scroll down to Access Keys."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(1374).A+"",width:"2900",height:"2198"})}),"\n",(0,s.jsxs)(t.admonition,{title:"action",type:"info",children:[(0,s.jsx)(t.p,{children:'Click "Create access key".'}),(0,s.jsx)(t.p,{children:'Select "Command Line Interface (CLI)", read "Alternatives recommended", and check the box that you want to proceed anyway.'}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"We will come back to the recommendations in a future tutorial dedicated to the topic."})})]}),"\n",(0,s.jsx)(t.p,{children:"Complete the UI and see this."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(3833).A+"",width:"2896",height:"2342"})}),"\n",(0,s.jsx)(t.p,{children:"Don't close this page."}),"\n",(0,s.jsx)(t.h2,{id:"set-up-the-cli",children:"Set up the CLI"}),"\n",(0,s.jsx)(t.p,{children:"Finally."}),"\n",(0,s.jsxs)(t.admonition,{title:"action",type:"info",children:[(0,s.jsxs)(t.p,{children:["Assuming you have installed the AWS command-line tool, enter ",(0,s.jsx)(t.code,{children:"aws configure"})," in a terminal and enter the keys but copying from the page you didn't close as follows."]}),(0,s.jsxs)(t.p,{children:["You can set the default region and CLI output format if you like. We like ",(0,s.jsx)(t.code,{children:"us-east-1"})," and ",(0,s.jsx)(t.code,{children:"json"}),"."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ aws configure\nAWS Access Key ID [None]: AKIAYDHJWGRG2BYMTGO3\nAWS Secret Access Key [None]: ABC-super-secret-XYZ\nDefault region name [None]: us-east-1\nDefault output format [None]: json\n"})})]}),"\n",(0,s.jsxs)(t.p,{children:["This will store credentials in a file ",(0,s.jsx)(t.code,{children:"~/.aws/credentials"}),", which you can verify as follows."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ cat ~/.aws/credentials\n[default]\naws_access_key_id = AKIAYDHJWGRG2BYMTGO3\naws_secret_access_key = ABC-super-secret-XYZ\n"})}),"\n",(0,s.jsx)(t.h2,{id:"test-things-out",children:"Test things out"}),"\n",(0,s.jsx)(t.p,{children:"Now you have the AWS CLI set up with credentials, you can run a simple command. Try listing the AWS S3 Buckets in your account. You may not have any yet."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"aws s3 ls\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now try creating one"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"aws s3 mb s3://thenameofyourbucket\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Names of S3 buckets are globally unique. And you can't have the bucket called ",(0,s.jsx)(t.code,{children:"thenameofyourbucket"})," because I got there first. Just try something long and random, like a ",(0,s.jsx)(t.a,{href:"https://www.uuidtools.com/v4",children:"UUID"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Now list your S3 buckets again and you'll see it."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"aws s3 ls\n"})}),"\n",(0,s.jsx)(t.h3,{id:"why-didnt-that-work",children:"Why didn't that Work?"}),"\n",(0,s.jsx)(t.p,{children:"Some things to look for"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You did not create an ",(0,s.jsx)(t.code,{children:"baremetal"})," user"]}),"\n",(0,s.jsxs)(t.li,{children:["You did not create CLI access keys for the ",(0,s.jsx)(t.code,{children:"baremetal"})," user"]}),"\n",(0,s.jsxs)(t.li,{children:["You did not initialize the AWS CLI with access keys for the ",(0,s.jsx)(t.code,{children:"baremetal"})," user"]}),"\n",(0,s.jsx)(t.li,{children:"We botched these instructions"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"the-upshot",children:"The Upshot"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n(6540);n(4848)},4865:(e,t,n)=>{n(6540),n(2303);n(4848)},6889:(e,t,n)=>{n(6540);n(4848)},3833:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/keys-created-9edf56aa711fe01593df17d5be601b2e.png"},1374:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/security-credentials-ui-5cf3843787585e6ca393197fd12750c2.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(6540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);