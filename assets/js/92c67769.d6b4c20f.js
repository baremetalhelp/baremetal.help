"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1384],{410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(4848),o=t(8453);const r={},s="Configure your Enterprise",i={id:"setup/configuration/index",title:"Configure your Enterprise",description:"You have an AWS Account and a privileged, secure user, baremetal.",source:"@site/docs/setup/configuration/index.md",sourceDirName:"setup/configuration",slug:"/setup/configuration/",permalink:"/docs/setup/configuration/",draft:!1,unlisted:!1,editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/setup/configuration/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment Setup",permalink:"/docs/setup/environment/"},next:{title:"Foundation Infrastructure",permalink:"/docs/category/foundation-infrastructure"}},c={},l=[{value:"Shared Configuration",id:"shared-configuration",level:2},{value:"Consistent and Universal Resource Tagging",id:"consistent-and-universal-resource-tagging",level:2},{value:"The Upshot",id:"the-upshot",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"configure-your-enterprise",children:"Configure your Enterprise"}),"\n",(0,a.jsxs)(n.p,{children:["You have an AWS Account and a privileged, secure user, ",(0,a.jsx)(n.code,{children:"baremetal"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can successfully run the ",(0,a.jsx)(n.code,{children:"aws"})," CLI and perform simple operations like listing nd creating S3 Buckets."]}),"\n",(0,a.jsx)(n.p,{children:"Now it's time to configure how you want your enterprise to look. What's your company domain name?"}),"\n",(0,a.jsx)(n.h2,{id:"shared-configuration",children:"Shared Configuration"}),"\n",(0,a.jsx)(n.p,{children:"We make it easy to define common configuration used across all stacks. That way everything's consistent."}),"\n",(0,a.jsxs)(n.p,{children:["All of the CDK stacks are referenced in the main file ",(0,a.jsx)(n.code,{children:"./bin/baremetal.help.ts"}),". And that's where the common configuration lives. Change the constants in that file to match your enterprise."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'// Some constants you\'ll change for your enterprise\n//\nconst enterpriseName = "baremetal"; // CHANGE ME\nconst domainName = "baremetal.help"; // CHANGE ME\n'})}),"\n",(0,a.jsx)(n.h2,{id:"consistent-and-universal-resource-tagging",children:"Consistent and Universal Resource Tagging"}),"\n",(0,a.jsxs)(n.p,{children:["Resource tagging is at the very core of Public Cloud best practices. In the file ",(0,a.jsx)(n.code,{children:"./config/common-tags.ts"}),", edit ",(0,a.jsx)(n.code,{children:"COMMON_TAGS"})," key/value tags. Your Organization creates a custom policy for required tags and values. For example, departmental charge back requires consistent tagging."]}),"\n",(0,a.jsx)(n.p,{children:"You can even create policies that will not allow resources to be created without specific tags. So if you're a developer and have forgotten to add a required tag, your deployment will fail. That'll show them!"}),"\n",(0,a.jsx)(n.p,{children:"Here's the tags we use. But your enterprise will want more as a best practice. But start here"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'export const COMMON_TAGS = {\n    repo: "https://github.com/baremetalhelp/baremetal.help",\n    owner: "stephen@baremetal.help",\n    environment: process.env.ENVIRONMENT || "unknown-environment",\n    description: "BareMetal enterprise foundation",\n};\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can add whatever you like here. All stacks inherit all these tags. You can add or change a tag and redeploy any affected stacks and the tags will be updated in place."}),"\n",(0,a.jsx)(n.p,{children:"There are other best-practice tags. Let's ask around."}),"\n",(0,a.jsx)(n.admonition,{title:"ask claude!",type:"info",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Use a consistent naming convention:\n\nProject: [project-name]\nEnvironment: [dev/test/staging/prod]\nOwner: [team-name or email]\n\nInclude cost allocation tags:\n\nCostCenter: [cost-center-code]\nBusiness Unit: [business-unit-name]\n\nAdd operational tags:\n\nCreatedBy: [username or service]\nCreatedDate: [YYYY-MM-DD]\nLastModifiedBy: [username or service]\nLastModifiedDate: [YYYY-MM-DD]\n\nInclude compliance and security tags:\n\nCompliance: [compliance-standard]\nDataClassification: [public/confidential/restricted]\n\nAdd application-specific tags:\n\nApplication: [application-name]\nVersion: [version-number]\n\nUse lifecycle management tags:\n\nTerminationDate: [YYYY-MM-DD]\nBackup: [yes/no]\n\nConsider automation tags:\n\nAutoStop: [yes/no]\nAutoStart: [yes/no]\n\nAdd stack-specific tags:\n\nStackName: [stack-name]\nStackId: [stack-id]\n\nRemember to use consistent capitalization and formatting for your tags. \nAlso, ensure that you're following any specific tagging policies your organization may have in place.\n"})})}),"\n",(0,a.jsx)(n.h2,{id:"the-upshot",children:"The Upshot"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"As the last step for getting ready to deploy BareMetal infrastructure, you declared a couple of constants specific to your enterprise that are common across all your BareMetal features."}),"\n",(0,a.jsx)(n.li,{children:"You defined a robust resource tagging strategy from day one, so full attribution of resources and stacks is easily discoverable."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var a=t(6540);const o={},r=a.createContext(o);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);