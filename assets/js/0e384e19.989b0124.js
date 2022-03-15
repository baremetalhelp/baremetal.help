"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},u="About BareMetal Tutorials",s={unversionedId:"intro",id:"intro",title:"About BareMetal Tutorials",description:'Here are some tutorials for bringing up cloud infrastructure from "bare metal." We assume very little. The focus here is Amazon Web Services, AWS.',source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:" /baremetal.help/docs/intro",editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"BareMetal CDN",permalink:" /baremetal.help/docs/cdn/"}},c={},p=[{value:"The BareMetal tutorials",id:"the-baremetal-tutorials",level:2},{value:"Content Delivery Network, CDN",id:"content-delivery-network-cdn",level:3},{value:"Nothing special",id:"nothing-special",level:2},{value:"Overall assumptions",id:"overall-assumptions",level:2},{value:"Verify your setup",id:"verify-your-setup",level:2},{value:"Shared configuration",id:"shared-configuration",level:2},{value:"Running infra-as-code",id:"running-infra-as-code",level:2},{value:"TODO",id:"todo",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"about-baremetal-tutorials"},"About BareMetal Tutorials"),(0,a.kt)("p",null,'Here are some tutorials for bringing up cloud infrastructure from "bare metal." We assume very little. The focus here is Amazon Web Services, AWS.'),(0,a.kt)("p",null,"For example, to create a Single Sign-On integration in AWS, we do not assume you have an organization, an existing SSO integration, or a directory set up for users and groups."),(0,a.kt)("p",null,"We're clear about any assumptions and we always show you how to prepare for each tutorial. For example, to create a CDN we show you how to register a domain in the AWS console. And for setting up email for your domain, we show you all the things you need to take care of."),(0,a.kt)("p",null,"Each tutorial includes infrastructure-as-code for deploying the tutorial's resources, written in CDK ","[link]",'. CDK has "stacks" as a\nfundamental. There\'s at least one stack for every tutorial.'),(0,a.kt)("p",null,"That means you can run the CDK to create the infrastructure in each tutorial without going through every detail. You might regret that\nwhen things go wrong or you want to know how to use it. "),(0,a.kt)("h2",{id:"the-baremetal-tutorials"},"The BareMetal tutorials"),(0,a.kt)("h3",{id:"content-delivery-network-cdn"},"Content Delivery Network, CDN"),(0,a.kt)("p",null,"You use a CDN for delivering content like images from edge locations all over the world. A CDN is a cache. You define where the originals live and any configuration you need for different types of content."),(0,a.kt)("h2",{id:"nothing-special"},"Nothing special"),(0,a.kt)("p",null,"There's already so much great documentation for all of the resources you can create in the public cloud. We don't duplicate it, preferring\nto link to relevant documentation along the way."),(0,a.kt)("p",null,"What we ",(0,a.kt)("em",{parentName:"p"},"do")," provide, however, is infrastructure-as-code for all tutorials that shares common configuration and written in a way so\nyou can pick and chose what you want. The common configuration means that all your BareMetal stacks are consistent and compatible."),(0,a.kt)("p",null,"We make it super clear when there are dependencies on other tutorials."),(0,a.kt)("h2",{id:"overall-assumptions"},"Overall assumptions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You have an AWS account with a privileged IAM user ","[link]","."),(0,a.kt)("li",{parentName:"ol"},"You have credentials for that user ","[link]","."),(0,a.kt)("li",{parentName:"ol"},"You have cloned this repo ","[link]","."),(0,a.kt)("li",{parentName:"ol"},"You have the CDK CLI installed ","[link]",".")),(0,a.kt)("h2",{id:"verify-your-setup"},"Verify your setup"),(0,a.kt)("p",null,"Blah."),(0,a.kt)("h2",{id:"shared-configuration"},"Shared configuration"),(0,a.kt)("p",null,"Blah."),(0,a.kt)("h2",{id:"running-infra-as-code"},"Running infra-as-code"),(0,a.kt)("p",null,"Blah."),(0,a.kt)("h2",{id:"todo"},"TODO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make configuration fields optional and handle it"),(0,a.kt)("li",{parentName:"ul"},"All the links")))}f.isMDXComponent=!0}}]);