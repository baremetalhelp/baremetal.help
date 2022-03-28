"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(a),c=r,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9881:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={sidebar_position:1},u="About BareMetal Tutorials",p={unversionedId:"intro",id:"intro",title:"About BareMetal Tutorials",description:"Clone the GitHub repo for this site, https://github.com/baremetalhelp/baremetal.help",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"BareMetal CDN",permalink:"/docs/cdn/"}},d={},m=[{value:"Other approaches",id:"other-approaches",level:2},{value:"Available BareMetal tutorials",id:"available-baremetal-tutorials",level:2},{value:"Content Delivery Network, CDN",id:"content-delivery-network-cdn",level:3},{value:"A documentation website like this",id:"a-documentation-website-like-this",level:3},{value:"Single Sign-On, SSO",id:"single-sign-on-sso",level:3},{value:"Multi-account AWS Organization",id:"multi-account-aws-organization",level:3},{value:"Nothing special",id:"nothing-special",level:2},{value:"Overall assumptions",id:"overall-assumptions",level:2},{value:"Verify your setup",id:"verify-your-setup",level:2},{value:"Shared configuration",id:"shared-configuration",level:2},{value:"Running infra-as-code",id:"running-infra-as-code",level:2},{value:"TODO",id:"todo",level:2}],s={toc:m};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"about-baremetal-tutorials"},"About BareMetal Tutorials"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Clone the GitHub repo for this site, ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/baremetalhelp/baremetal.help"},"https://github.com/baremetalhelp/baremetal.help")),(0,l.kt)("p",{parentName:"div"},"You're going to need this repo to run any of the code we wrote for the BareMetal Tutorials"))),(0,l.kt)("p",null,'Here are some tutorials for bringing up cloud infrastructure from "bare metal." We assume very little. The focus here is Amazon Web Services, AWS.'),(0,l.kt)("p",null,"For example, to create a Single Sign-On integration in AWS, we do not assume you have an organization, an existing SSO integration, or a directory set up for users and groups."),(0,l.kt)("p",null,"We're clear about any assumptions and we always show you how to prepare for each tutorial. For example, to create a CDN we show you how to register a domain in the AWS console. And for setting up email for your domain, we show you all the things you need to take care of."),(0,l.kt)("p",null,"Each tutorial includes infrastructure-as-code for deploying the tutorial's resources, written in CDK ","[link]",'. CDK has "stacks" as a\nfundamental. There\'s at least one stack for every tutorial.'),(0,l.kt)("p",null,"That means you can run the CDK to create the infrastructure in each tutorial without going through every detail. You might regret that\nwhen things go wrong or you want to know how to use it."),(0,l.kt)("h2",{id:"other-approaches"},"Other approaches"),(0,l.kt)("p",null,"People have been creating Public Cloud infrastructure for as long as it's been around. There are lots of ways to do it. BareMetal is but just one way of many. Here are some examples."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This table is wrong and incomplete. It's also biased heavily on the capabilities of BareMetal rather than things it can't do."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Tooling"),(0,l.kt)("th",{parentName:"tr",align:null},"Framework?"),(0,l.kt)("th",{parentName:"tr",align:null},"Infrastructure-as-Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Driven"),(0,l.kt)("th",{parentName:"tr",align:null},"CI/CD"),(0,l.kt)("th",{parentName:"tr",align:null},"SSO Landing Zone"),(0,l.kt)("th",{parentName:"tr",align:null},"SSO Permissions"),(0,l.kt)("th",{parentName:"tr",align:null},"AWS Organization"),(0,l.kt)("th",{parentName:"tr",align:null},"AWS Accounts"),(0,l.kt)("th",{parentName:"tr",align:null},"Data-Driven"),(0,l.kt)("th",{parentName:"tr",align:null},"GitHub Pages Website"),(0,l.kt)("th",{parentName:"tr",align:null},"GitHub Integration"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/console/"},"AWS Console, 100% Click-Ops")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/cloudformation/"},"Cloudformation")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://aws.amazon.com/cdk/"},"AWS CDK")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.terraform.io"},"Terraform")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/awslabs/aws-bootstrap-kit"},"aws-bootstrap-kit")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/org-formation/org-formation-cli"},"org-formation")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://baremetal.help"},"BareMetal Help")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/controltower/latest/userguide/aft-overview.html"},"Account Factory for Terraform")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"?"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"available-baremetal-tutorials"},"Available BareMetal tutorials"),(0,l.kt)("p",null,"We're adding more all the time. So please check back often to see what's new.\n\u2013\u2014"),(0,l.kt)("h3",{id:"content-delivery-network-cdn"},"Content Delivery Network, CDN"),(0,l.kt)("p",null,"You use a CDN for delivering content like images from edge locations all over the world. A CDN is a cache. You define where the originals live and any configuration you need for different types of content."),(0,l.kt)("h3",{id:"a-documentation-website-like-this"},"A documentation website like this"),(0,l.kt)("p",null,"Using Markdown ","[link]"," and a few tools, you'll be able to create a website just like this from BareMetal. We have infra-as-code for setting up free hosting on GitHub Pages ","[link]",". You can deploy the documentation at your apex domain, just like we did here at ",(0,l.kt)("a",{parentName:"p",href:"https://baremetal.help"},"https://baremetal.help")," . We have GitHub Actions ","[link]"," for deploying documentation updates automatically."),(0,l.kt)("h3",{id:"single-sign-on-sso"},"Single Sign-On, SSO"),(0,l.kt)("p",null,"We show how to build an enterprise-grade Single Sign-On infrastructure from scratch. You'll use a user/group directory on Azure AD and an SSO implementation on AWS that connects to it."),(0,l.kt)("h3",{id:"multi-account-aws-organization"},"Multi-account AWS Organization"),(0,l.kt)("p",null,"ControlTower blah."),(0,l.kt)("h2",{id:"nothing-special"},"Nothing special"),(0,l.kt)("p",null,"There's already so much great documentation for all of the resources you can create in the public cloud. We don't duplicate it, preferring\nto link to relevant documentation along the way."),(0,l.kt)("p",null,"What we ",(0,l.kt)("em",{parentName:"p"},"do")," provide, however, is infrastructure-as-code stacks for all tutorials that share common configuration and written in a way so\nyou can pick and chose what you want. The common configuration means that all your BareMetal stacks are consistent and compatible."),(0,l.kt)("p",null,"We make it super clear when there are dependencies on other tutorials."),(0,l.kt)("h2",{id:"overall-assumptions"},"Overall assumptions"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"You have an AWS account with a privileged IAM user ","[link]","."),(0,l.kt)("li",{parentName:"ol"},"You have credentials for that user ","[link]","."),(0,l.kt)("li",{parentName:"ol"},"You have cloned this repo ","[link]","."),(0,l.kt)("li",{parentName:"ol"},"You have the CDK CLI installed ","[link]",".")),(0,l.kt)("h2",{id:"verify-your-setup"},"Verify your setup"),(0,l.kt)("p",null,"Blah."),(0,l.kt)("h2",{id:"shared-configuration"},"Shared configuration"),(0,l.kt)("p",null,"Blah."),(0,l.kt)("h2",{id:"running-infra-as-code"},"Running infra-as-code"),(0,l.kt)("p",null,"Blah."),(0,l.kt)("h2",{id:"todo"},"TODO"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make configuration fields optional and handle it"),(0,l.kt)("li",{parentName:"ul"},"All the links")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"BareMetal is not really a trademark."))))}c.isMDXComponent=!0}}]);