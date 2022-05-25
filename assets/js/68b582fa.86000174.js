"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51606:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:3},s="Create AWS Organization",u={unversionedId:"organization/index",id:"organization/index",title:"Create AWS Organization",description:"An AWS Organization is how multiple AWS Accounts are organized into a group hierarchy, with Accounts under Organization Units. This is required for SSO to work.",source:"@site/docs/organization/index.md",sourceDirName:"organization",slug:"/organization/",permalink:"/docs/organization/",editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/organization/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/cdn/"},next:{title:"The Big Picture",permalink:"/docs/sso/intro"}},l={},p=[{value:"Quick Start",id:"quick-start",level:2},{value:"You Have Good Options",id:"you-have-good-options",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-aws-organization"},"Create AWS Organization"),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/organizations/"},"AWS Organization")," is how multiple AWS Accounts are organized into a group hierarchy, with Accounts under Organization Units. This is required for SSO to work."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The tools for creating an organization can be complex and finicky. Each has a lot of ground to cover before you're up and running with an AWS Organization."),(0,a.kt)("p",{parentName:"div"},"If you're not ready to invest the time it'll take to create an AWS Organization using the tools below, you can always create one by hand to get you going. When you feel it's appropriate, you can always recreate the AWS Organization with the tool you want."),(0,a.kt)("p",{parentName:"div"},"This is probably not what you wanted to hear."))),(0,a.kt)("h2",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"There is no quick start. There are no push-button solutions. "),(0,a.kt)("h2",{id:"you-have-good-options"},"You Have Good Options"),(0,a.kt)("p",null,"There are several good tools and a lot of good documentation already written about managing AWS Accounts. "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/controltower/?control-blogs.sort-by=item.additionalFields.createdDate&control-blogs.sort-order=desc"},"AWS ControlTower")," is a good effort, but there's no CLI access. However, many enterprises use ControlTower."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/controltower/latest/userguide/aft-architecture.html"},"Account Factory for Terraform")," (AFT) is a newer addition and is pretty good. Take a look at the walk through and video to see if it's right for you. We think AFT's complexity is a good match for larger enterprises."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/org-formation/org-formation-cli"},"org-formation")," is an infrastructure-as-code approach that's quite clever. This approach may fit your needs as a medium enterprise."))}m.isMDXComponent=!0}}]);