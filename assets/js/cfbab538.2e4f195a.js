"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9525],{1932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var s=n(4848),i=n(8453);n(6889),n(4865),n(9365);const a={},o="Getting Ready to Understand and Run Everything in BareMetal",r={id:"basics/get-ready/index",title:"Getting Ready to Understand and Run Everything in BareMetal",description:"- [ ] These instructions may not be up to date on Windows and Linux",source:"@site/docs/basics/get-ready/index.md",sourceDirName:"basics/get-ready",slug:"/basics/get-ready/",permalink:"/docs/basics/get-ready/",draft:!1,unlisted:!1,editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/basics/get-ready/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Start Here",permalink:"/docs/category/start-here"},next:{title:"Content Delivery Network, CDN",permalink:"/docs/basics/cdn/"}},l={},h=[{value:"Don&#39;t Panic",id:"dont-panic",level:2},{value:"Install the Tools",id:"install-the-tools",level:2},{value:"Using homebrew",id:"using-homebrew",level:3},{value:"Otherwise...",id:"otherwise",level:3},{value:"Prepare your Environment",id:"prepare-your-environment",level:2},{value:"Using the Inscrutable AWS Instructions",id:"using-the-inscrutable-aws-instructions",level:3},{value:"The Same with Pictures",id:"the-same-with-pictures",level:3},{value:"Test things out",id:"test-things-out",level:2},{value:"Why didn&#39;t that Work?",id:"why-didnt-that-work",level:3},{value:"The Upshot",id:"the-upshot",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getting-ready-to-understand-and-run-everything-in-baremetal",children:"Getting Ready to Understand and Run Everything in BareMetal"}),"\n",(0,s.jsx)(t.admonition,{title:"This page has multiple issues",type:"warning",children:(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","These instructions may not be up to date on Windows and Linux"]}),"\n"]})}),"\n","\n",(0,s.jsx)(t.h2,{id:"dont-panic",children:"Don't Panic"}),"\n",(0,s.jsx)(t.p,{children:"You'll need to run code to create BareMetal features like a Content Delivery Network. That's in the next tutorial."}),"\n",(0,s.jsx)(t.p,{children:"While you may not need to know everything about the tools like TypeScript and the Cloud Development Kit (CDK) right away, having a basic understanding can be very beneficial, especially if you want to customize or modify your implementation in the future."}),"\n",(0,s.jsx)(t.h2,{id:"install-the-tools",children:"Install the Tools"}),"\n",(0,s.jsx)(t.p,{children:"You have a couple of good options. You can use a package manager or install by hand. We recommend a package manager and the one we use is homebrew."}),"\n",(0,s.jsx)(t.h3,{id:"using-homebrew",children:"Using homebrew"}),"\n",(0,s.jsx)(t.admonition,{title:"TODO",type:"note",children:(0,s.jsx)(t.p,{children:"This won't work on Windows, only macOS and Linux. You'll need to follow the \"Otherwise...\" instructions on Windows."})}),"\n",(0,s.jsxs)(t.p,{children:["Things will be easier if you use a package manager, especially ",(0,s.jsx)(t.a,{href:"https://brew.sh/",children:"homebrew"}),". You can use it to install the tools you'll need. In any case, we link to each tool's installation instructions at the official docs. You can install the tools however you like, but you might want to go with the \"brew\" version because it's easy to do and easy to stay up to date."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"brew install git node yarn typescript awscli cdk-cli\n"})}),"\n",(0,s.jsx)(t.h3,{id:"otherwise",children:"Otherwise..."}),"\n",(0,s.jsxs)(t.p,{children:["Install ",(0,s.jsx)(t.a,{href:"https://github.com/git-guides/install-git",children:"Git"}),". You'll need this to access and download the BareMetal source code that's at the foundation of repeatable implementations of the architectures."]}),"\n",(0,s.jsxs)(t.p,{children:["Install a good version of ",(0,s.jsx)(t.a,{href:"https://nodejs.org/en/learn/getting-started/how-to-install-nodejs",children:"node"}),". This is one of the tools that is likely to be installed already but may not be up to date."]}),"\n",(0,s.jsxs)(t.p,{children:["Install ",(0,s.jsx)(t.a,{href:"https://yarnpkg.com/",children:"yarn"})," the package manager for JavaScript and TypeScript. The code for each BareMetal tutorial requires you to ",(0,s.jsx)(t.em,{children:"run"})," but not necessarily ",(0,s.jsx)(t.em,{children:"understand"})," what's going on. And running the code will download all the required dependencies for the infrastructure-as-code."]}),"\n",(0,s.jsxs)(t.p,{children:["Now for ",(0,s.jsx)(t.a,{href:"https://www.typescriptlang.org/download/",children:"TypeScript"}),". This is the language the BareMetal scripts are written in."]}),"\n",(0,s.jsxs)(t.p,{children:["Install the latest version of the ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"AWS CLI"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Install ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html",children:"AWS Cloud Development Kit, CDK CLI"}),". All the BareMetal scripts use CDK and you can't get going without this."]}),"\n",(0,s.jsx)(t.h2,{id:"prepare-your-environment",children:"Prepare your Environment"}),"\n",(0,s.jsx)(t.p,{children:"You will need to access AWS accounts with the AWS CLI."}),"\n",(0,s.jsx)(t.p,{children:"There are lots of ways to configure the AWS CLI and the right credentials. Lots! The easiest way to do this is the method using long-term credentials. Long-term credentials are not recommended for the long term. We will show you more secure and robust ways as we develop a better foundation for identity."}),"\n",(0,s.jsx)(t.p,{children:"If you want a simple version, follow the version tht follows with the exact screenshots and clicks you need."}),"\n",(0,s.jsx)(t.h3,{id:"using-the-inscrutable-aws-instructions",children:"Using the Inscrutable AWS Instructions"}),"\n",(0,s.jsx)(t.p,{children:'Even the "simple" version of the AWS instructions is complicated.'}),"\n",(0,s.jsxs)(t.p,{children:["But if you're up for it, follow ",(0,s.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-authentication-user.html",children:"Authenticate with IAM user credentials"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"the-same-with-pictures",children:"The Same with Pictures"}),"\n",(0,s.jsx)(t.admonition,{title:"TODO",type:"note",children:(0,s.jsx)(t.p,{children:"The same with pictures"})}),"\n",(0,s.jsx)(t.h2,{id:"test-things-out",children:"Test things out"}),"\n",(0,s.jsx)(t.p,{children:"Now you have the AWS CLI set up with credentials, you can run a simple command. Try listing the AWS S3 Buckets in your account. You may not have any yet."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"aws s3 ls\n"})}),"\n",(0,s.jsx)(t.p,{children:"Now try creating one"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"aws s3 mb s3://thenameofyourbucket\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Names of S3 buckets are globally unique. And you can't have the bucket called ",(0,s.jsx)(t.code,{children:"thenameofyourbucket"})," because I got there first \ud83e\udd23. Just try something long and random."]}),"\n",(0,s.jsx)(t.p,{children:"Now list your S3 buckets again and you'll see it."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"aws s3 ls\n"})}),"\n",(0,s.jsx)(t.h3,{id:"why-didnt-that-work",children:"Why didn't that Work?"}),"\n",(0,s.jsx)(t.p,{children:"..."}),"\n",(0,s.jsx)(t.h2,{id:"the-upshot",children:"The Upshot"})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9365:(e,t,n)=>{n(6540);n(4848)},4865:(e,t,n)=>{n(6540),n(2303);n(4848)},6889:(e,t,n)=>{n(6540);n(4848)},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);