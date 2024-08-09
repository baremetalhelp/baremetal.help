"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3976],{619:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(4848),n=i(8453);const a={sidebar_position:1},o="About BareMetal Tutorials",r={id:"intro",title:"About BareMetal Tutorials",description:"What is BareMetal?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Set Up Your Environment",permalink:"/docs/category/set-up-your-environment"}},l={},c=[{value:"What is BareMetal?",id:"what-is-baremetal",level:2},{value:"A Quick Example",id:"a-quick-example",level:2},{value:"Other Approaches",id:"other-approaches",level:2},{value:"Navigating BareMetal tutorials",id:"navigating-baremetal-tutorials",level:2},{value:"Nothing Special",id:"nothing-special",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"about-baremetal-tutorials",children:"About BareMetal Tutorials"}),"\n",(0,s.jsx)(t.h2,{id:"what-is-baremetal",children:"What is BareMetal?"}),"\n",(0,s.jsx)(t.p,{children:'"Bare metal" is what computer people often say when they mean a computer with nothing installed on it, not even an operating system.'}),"\n",(0,s.jsx)(t.p,{children:"This documentation contains rock-solid tutorials for bringing up enterprise-grade cloud infrastructure from exactly that, bare metal. We assume very little. The focus here is on the preeminent Public Cloud Provider, Amazon Web Services, AWS."}),"\n",(0,s.jsx)(t.p,{children:"We will not judge you if you don't have an AWS Account yet. We'll get you started with that too. It's probably why you're here."}),"\n",(0,s.jsx)(t.admonition,{title:"action",type:"info",children:(0,s.jsx)(t.p,{children:"Whenever you're asked to do something like click or run a shell command, it'll be in an \"ACTION\" box like this."})}),"\n",(0,s.jsx)(t.h2,{id:"a-quick-example",children:"A Quick Example"}),"\n",(0,s.jsx)(t.p,{children:"We mean it when we say we give you infrastructure-as-code for all the things. Not only that, we imbue them with secure-by-default best practices and convenience you've come to expect from modern-day kitchen appliances."}),"\n",(0,s.jsx)(t.p,{children:"For example, here's some infrastructure-as-code from the tutorial and code for a Content Delivery Network, CDN. If you're building an enterprise, you'll definitely need a CDN for delivering static content like images or public data files."}),"\n",(0,s.jsxs)(t.p,{children:["This script happens to be written in TypeScript using ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/cdk/",children:"AWS Cloud Development Kit, CDK"}),". If you're not a CDK or TypeScript person, just scan the keywords. If you use the code we provide as-is, you only have to add some configuration for your enterprise (like your company domain name) to a simple configuration file. That's it."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'  // Find the AWS DNS entry for your domain\n  const hostedZone = HostedZone.fromLookup(this, "hosted-zone", {\n    domainName,\n  });\n\n  // Create an SSL certificate for the CDN endpoint\n  const certificate = new Certificate(this, "certificate", {\n    domainName: cdnEndpoint,\n    validation: CertificateValidation.fromDns(hostedZone),\n  });\n  // Set expiry notification\n  certificate\n    .metricDaysToExpiry()\n    .createAlarm(this, "certificate-expiry-alarm", {\n      comparisonOperator: ComparisonOperator.LESS_THAN_THRESHOLD,\n      evaluationPeriods: 1,\n      threshold: 45, \n    });\n\n  // This is the CDN origin, where you copy resources\n  const origin = new Bucket(this, "origin");\n\n  // And finally pull everything together and make the CDN itself\n  const distribution = new Distribution(this, "distribution", {\n    domainNames: [cdnEndpoint],\n    certificate,\n    defaultBehavior: {\n      origin: new S3Origin(origin),\n    },\n  });\n'})}),"\n",(0,s.jsx)(t.p,{children:"Regardless of whether you're a TypeScript or CDK person, you will notice a few things."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Nothing is hard-coded, not even the domain or the CDN domain prefix."}),"\n",(0,s.jsx)(t.li,{children:"You can see we create just the right SSL certificate with automatic verification that this is for a domain you own via the AWS DNS service, Route53."}),"\n",(0,s.jsxs)(t.li,{children:["And we'll let you know in plenty of time ",(0,s.jsx)(t.em,{children:"before"})," that certificate expires with a custom alert."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Each tutorial includes infrastructure-as-code for deploying that tutorial's resources, written in AWS CDK. CDK has \"stacks\" as a\nfundamental that encapsulate a collection of related resources. There's at least one stack for every tutorial."}),"\n",(0,s.jsx)(t.p,{children:"That means you can run the CDK to create the infrastructure in each tutorial without going through every detail and be pretty confident it'll work for you just like it did for us last time we ran it. Which was probably earlier today."}),"\n",(0,s.jsxs)(t.admonition,{title:"Get the code",type:"note",children:[(0,s.jsx)(t.p,{children:"If you're OK with Git and you have it installed already, clone the GitHub repo for this site. Otherwise we'll take you through it later."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"git clone https://github.com/baremetalhelp/baremetal.help\n"})}),(0,s.jsxs)(t.p,{children:["You're going to need this repo to run any of the code we wrote for the BareMetal Tutorials. This documentation is also in the same repo under ",(0,s.jsx)(t.code,{children:"website"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"other-approaches",children:"Other Approaches"}),"\n",(0,s.jsx)(t.p,{children:"AWS CDK is not the only game in town and there are some good alternatives. We just like the idea of CDK and the language it's written in, TypeScript."}),"\n",(0,s.jsx)(t.p,{children:"But let's be clear. The following are all widely-used and viable options with their own strengths and weaknesses. It's a matter of taste."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Approach"}),(0,s.jsx)(t.th,{children:"Background"}),(0,s.jsx)(t.th,{children:"Pros"}),(0,s.jsx)(t.th,{children:"Cons"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Click-ops"}),(0,s.jsx)(t.td,{children:"We used to drive to the data center, plug wires in and edit configuration files. With public cloud providers' console access, clicking around in the UI is the equivalent."}),(0,s.jsx)(t.td,{children:"Old-school familiarity."}),(0,s.jsx)(t.td,{children:"Old-school fragility."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Terraform"}),(0,s.jsx)(t.td,{children:"Hashicorp Terraform is a general-purpose configuration syntax that can connect to  variety of providers. It's billed as cloud-agnostic, but that's quite misleading."}),(0,s.jsx)(t.td,{children:"It's widely used in existing enterprises for more than just cloud architectures. There's excellent tooling for maintaining Terraform infrastructure, including Terraform cloud."}),(0,s.jsxs)(t.td,{children:["Terraform uses collections of ",(0,s.jsx)(t.em,{children:"resources"})," for each provider, like AWS and Microsoft Azure. Each defined resource is specific to an individual cloud provider, so the resource definitions for Amazon S3 and Azure Blob Storage have nothing to do with each other. Conditionals and loops can get messy because it's only a definition standard, not a full programming language. The definition syntax, HCL, is almost, but not entirely, unlike JSON ",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-adams",id:"user-content-fnref-adams","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AWS CloudFormation"}),(0,s.jsx)(t.td,{children:"This was the original configuration standard for AWS infrastructure. It used to be limited to JSON, which was very hard to maintain. You've been able to use YAML for a long time now and that's way better so you should go this route."}),(0,s.jsx)(t.td,{children:'There is dedicated support in AWS for CloudFormation both as a managed service and in the console UI. The CloudFormation managed service maintains the state for you. The console can get a bit sticky with lots of stacks, especially nested stacks. But "A" for effort.'}),(0,s.jsx)(t.td,{children:"Whether it's JSON or YAML, some things are hard to do like conditionals and loops for the same reason as Terraform. It's just a configuration standard for defining values. Although it's YAML, the syntax for accessing some functions usually breaks IDE formatters."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"AWS CDK, Cloud Development Kit"}),(0,s.jsx)(t.td,{children:"Realizing the limitations of purely-declarative CloudFormation \u2014 and noticing that the resource definitions of name/type/property triples are the same as programming languages \u2014 AWS created proper programming language bindings for CloudFormation resource definitions."}),(0,s.jsx)(t.td,{children:"It's now a programming language, so type-checking, loops, conditionals, and so on are a breeze. You can use standard data-driven techniques to make the code fully parameterized. Although CDK itself is written in TypeScript there are bindings for many popular languages as well as several unpopular ones."}),(0,s.jsxs)(t.td,{children:["It's now a programming language, so you need to set up a development environment. It can be finicky getting compatible versions of dependencies and keeping them up to date. IDE's like ",(0,s.jsx)(t.a,{href:"https://code.visualstudio.com",children:"VS Code"})," have great support for TypeScript and have AWS integration."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"navigating-baremetal-tutorials",children:"Navigating BareMetal tutorials"}),"\n",(0,s.jsx)(t.p,{children:"First, \"Set Up Your Environment\" on the left walks you through creating an AWS Account and development environment. You'll need this to be complete whether you're just deploying the basics or the complete Enterprise Infrastructure."}),"\n",(0,s.jsx)(t.p,{children:"The basics are simpler, self-contained stacks that provide functionality like a Content-Delivery Network."}),"\n",(0,s.jsx)(t.p,{children:"Robust enterprises separate concerns. If you've done this kind of thing before, then you'll know about best practices such as network partitions between application servers and databases. In AWS, it is a best practice to limit the scope of any one AWS account. New accounts are practically free and there are good ways to organize them."}),"\n",(0,s.jsx)(t.p,{children:"Use cases for separate AWS accounts include"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Development, staging, and production deployments"}),"\n",(0,s.jsx)(t.li,{children:"Limiting secure access to sensitive data, like logs"}),"\n",(0,s.jsx)(t.li,{children:"Centralized billing"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"nothing-special",children:"Nothing Special"}),"\n",(0,s.jsx)(t.p,{children:"There's already so much great documentation for all of the resources you can create in the public cloud. We don't duplicate it, and will cheerfully link to the best documentation along the way."}),"\n",(0,s.jsxs)(t.p,{children:["What we ",(0,s.jsx)(t.em,{children:"do"})," provide, however, is infrastructure-as-code stacks for all the enterprise-grade infrastructure that you need to bring up in a bare metal AWS account that share common configuration. They are written in a way that lets\nyou pick and chose what you want. The common configuration means that all your BareMetal stacks are consistent and compatible. Also, if you make a change, you can redeploy all the stacks and update everything with the new values."]}),"\n",(0,s.jsx)(t.p,{children:"We make it super clear when there are dependencies on other tutorials."}),"\n",(0,s.jsx)(t.h1,{id:"to-do",children:"To-Do"}),"\n",(0,s.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Make all configuration fields optional and handle them"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Write tests for all stacks and any other code we may have"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ",'Each tutorial must have at least the following sections: preamble with resource diagram "Assumptions", "Required Configuration", "How to Deploy", "Verification", "Stack Resources" as table, "How it works",']}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Add all the links"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Comments in CDK and data structures"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Separate CDN prefix for domain name"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Add switch for domain verification for SSL Certificate if the domain is not hosted in AWS Route 53"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Pass SSO region to custom resource handlers"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Create and use config for GitHub Pages IP addresses"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Create and apply SCP for required tags and values"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Create Enterprise track and Features track in top-level doc sidebar menu"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Fix doc links. Sometimes we copied the URL from ",(0,s.jsx)(t.code,{children:"http://localhost:3000"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Test whether an empty Managed Services list in Permission Sets work. Otherwise do the same as missing policy. I don't think it's an error to have both missing because we could just be setting things up."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Explore making true constructs for the meat of stacks, even if they're only used once in BareMetal"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",checked:!0,disabled:!0})," ","Use title case for H1 ",(0,s.jsx)(t.em,{children:"and"})," H2 b/c H2 are document headings, sentence case for everything else"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Open source goodness like licensing, semantic versioning, PR template, ..."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","GitHub Actions for stack (hooks per stack if possible)"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Maybe move common config back to top-level and pass explicitly to stacks? Yeah. I think that's right."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Alt text for images"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Do we need custom domain for AD Tenant?"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Clarify potential issues and fixes for each step"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Clarify and be super explicit about the P2 trial license"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Dependency diagram for the enterprise track is wrong: It should reflect options and dependencies better"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Describe what exactly ControlTower is and how to operate it. This should include default SCPs and examples of creating our own."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Still with CT, show best practices for managing accounts. AFT?"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Show how to configure CLI access via AWS config for SSO"]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Create reusable CDK Constructs for common components and publish them separately. Check again whether that's already been done and leverage those if they're any good."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","And when you do that, make them take, for example, either an existing bucket or a bucket configuration for a new one. Better still in that case, pass an existing origin like ",(0,s.jsx)(t.code,{children:"S3Origin"})," instead of the bucket. Otherwise the default will be a bucket configured as origin. I like that better."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Set up billing alarms from day 1."]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Talk about ",(0,s.jsx)(t.a,{href:"https://aws.amazon.com/blogs/opensource/accelerate-aws-single-sign-on-sso-implementation-using-aws-cloud-development-kit-aws-cdk/",children:"https://aws.amazon.com/blogs/opensource/accelerate-aws-single-sign-on-sso-implementation-using-aws-cloud-development-kit-aws-cdk/"})]}),"\n",(0,s.jsxs)(t.li,{className:"task-list-item",children:[(0,s.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Do not create an ",(0,s.jsx)(t.code,{children:"admin"})," user. Make it ",(0,s.jsx)(t.code,{children:"baremetal"})," and assign PowerUserAccess"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:'BareMetal is not really a trademark. But "BareMetal is not really a trademark\u2122" is.'})}),"\n","\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-adams",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.goodreads.com/quotes/20153-after-a-fairly-shaky-start-to-the-day-arthur-s-mind",children:"Douglas Adams, The Hitchhiker\u2019s Guide to the Galaxy"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-adams","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var s=i(6540);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);