"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[266],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return v}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),l=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=l(a),v=i,h=c["".concat(r,".").concat(v)]||c[v]||p[v]||o;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=c;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d.mdxType="string"==typeof e?e:i,s[1]=d;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},24515:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return r},default:function(){return v},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),s=["components"],d={sidebar_position:3},r="Same Thing With Pictures",l={unversionedId:"sso/sso-picture-book",id:"sso/sso-picture-book",title:"Same Thing With Pictures",description:"These are the SSO integration instructions you're looking for.",source:"@site/docs/sso/sso-picture-book.md",sourceDirName:"sso",slug:"/sso/sso-picture-book",permalink:"/docs/sso/sso-picture-book",editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/sso/sso-picture-book.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"I Can Follow Instructions",permalink:"/docs/sso/follow-instructions"},next:{title:"Set Up Users and Groups",permalink:"/docs/sso/users-and-groups"}},m={},p=[{value:"Assumptions",id:"assumptions",level:2},{value:"Enable AWS SSO",id:"enable-aws-sso",level:2},{value:"AWS SSO enabled OK",id:"aws-sso-enabled-ok",level:3},{value:"Create Initial AD Tenant",id:"create-initial-ad-tenant",level:2},{value:"Create New Enterprise Application",id:"create-new-enterprise-application",level:2},{value:"AD Enterprise Application created OK",id:"ad-enterprise-application-created-ok",level:3},{value:"Set Up Single Sign-On in AD",id:"set-up-single-sign-on-in-ad",level:2},{value:"Download SSO Metadata from AWS",id:"download-sso-metadata-from-aws",level:2},{value:"Upload SSO Metadata to AD",id:"upload-sso-metadata-to-ad",level:2},{value:"Download SSO Certificate",id:"download-sso-certificate",level:2},{value:"Complete AWS SSO Configuration",id:"complete-aws-sso-configuration",level:2}],c={toc:p};function v(e){var t=e.components,d=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"same-thing-with-pictures"},"Same Thing With Pictures"),(0,o.kt)("p",null,"These are the SSO integration instructions you're looking for."),(0,o.kt)("h2",{id:"assumptions"},"Assumptions"),(0,o.kt)("p",null,'See the general assumptions in "About BareMetal tutorials". ',"[link]"),(0,o.kt)("p",null,"In addition"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You have an Azure account ","[link]"),(0,o.kt)("li",{parentName:"ol"},"An Azure AD tenant in that account and permissions to configure it ","[link]"),(0,o.kt)("li",{parentName:"ol"},"A trial P2 tier license ","[link + terminology]"),(0,o.kt)("li",{parentName:"ol"},"...")),(0,o.kt)("h2",{id:"enable-aws-sso"},"Enable AWS SSO"),(0,o.kt)("p",null,"In the AWS Console, find the Single Sign-On page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enable AWS SSO",src:a(27542).Z,width:"2934",height:"2806"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Enable AWS SSO".'))),(0,o.kt)("h3",{id:"aws-sso-enabled-ok"},"AWS SSO enabled OK"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS SSO enabled",src:a(31360).Z,width:"2934",height:"2806"})),(0,o.kt)("h2",{id:"create-initial-ad-tenant"},"Create Initial AD Tenant"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[link]"," for instructions")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(1632).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Enterprise applications"'))),(0,o.kt)("h2",{id:"create-new-enterprise-application"},"Create New Enterprise Application"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(14556).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "+ New application"'))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Search for "aws"'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(45986).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "AWS Single Sign-on"'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(6553).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Create". It\'ll take a minute or two.'))),(0,o.kt)("h3",{id:"ad-enterprise-application-created-ok"},"AD Enterprise Application created OK"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13128).Z,width:"2780",height:"2664"})),(0,o.kt)("p",null,"TBD: Errors and fixes"),(0,o.kt)("h2",{id:"set-up-single-sign-on-in-ad"},"Set Up Single Sign-On in AD"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(83533).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Set up single sign on". Click "SAML".'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(18486).Z,width:"2780",height:"2664"})),(0,o.kt)("p",null,"Leave this window open. We're doing to generate some metadata in AWS SSO that we\nwill use to configure this."),(0,o.kt)("h2",{id:"download-sso-metadata-from-aws"},"Download SSO Metadata from AWS"),(0,o.kt)("p",null,"Go back to the AWS SSO console."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Settings"'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(11279).Z,width:"2780",height:"2664"})),(0,o.kt)("p",null,"Change the Identity Source."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Actions" menu'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(44052).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "External identity provider". Then "Next".'))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Download metadata file"'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(7375).Z,width:"2780",height:"2664"})),(0,o.kt)("h2",{id:"upload-sso-metadata-to-ad"},"Upload SSO Metadata to AD"),(0,o.kt)("p",null,"Now open the AD window back up."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Upload metadata file", select metadata file you downloaded from AWS, click "Add".'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(60261).Z,width:"2780",height:"2664"})),(0,o.kt)("p",null,"Success looks like this."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(29367).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Save".'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(23527).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "No, I\'ll test later"'))),(0,o.kt)("h2",{id:"download-sso-certificate"},"Download SSO Certificate"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(38140).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'In step 3, click "Download" next to "Certificate (Base64)" to download the SAML signing certificate.'))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"incomplete or broken implementation")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We could not get the Federation Metadata XML download to work. As of this writing, the upload to AWS SSO did not configure things the right way. "),(0,o.kt)("p",{parentName:"div"},"It's no big deal. We just need to copy a few fields by hand."),(0,o.kt)("p",{parentName:"div"},"We also did not install the \"highly recommended\" browser plugin in Step 4. We're not using Chrome, and that's the\nonly browser it supports. Well probably Edge too."))),(0,o.kt)("h2",{id:"complete-aws-sso-configuration"},"Complete AWS SSO Configuration"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'In step 5, open "Configuration URLs".'),(0,o.kt)("p",{parentName:"div"},'Copy "Login URL" in this Azure window to "IdP sign-in URL" in the AWS SSO window.'),(0,o.kt)("p",{parentName:"div"},'Copy "Azure AD identifier" in the Azure window to "IdP issuer URL" in the AWS SSO console.'),(0,o.kt)("p",{parentName:"div"},"Still in the AWS SSO console, upload the SAML signing certificate you downloaded from Azure AD."))),(0,o.kt)("p",null,"This is what the AWS SSO console looks like when you're ready to go."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(22582).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Click "Next".'))),(0,o.kt)("p",null,"Review."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(34779).Z,width:"2780",height:"2664"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"action")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Enter ACCEPT. Click "Change identity source".'))),(0,o.kt)("p",null,"This is what success looks like."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(10352).Z,width:"2780",height:"2664"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TBD do we need to set up automatic provisioning in here? Not sure how it's different from the provisioning in AD.")))}v.isMDXComponent=!0},14556:function(e,t,a){t.Z=a.p+"assets/images/ad-new-application-1843753749e756a0ed3460263f1b1bd3.png"},18486:function(e,t,a){t.Z=a.p+"assets/images/ad-saml-setup-45b50c1feeed06e17c7e614ac4815193.png"},29367:function(e,t,a){t.Z=a.p+"assets/images/add-metadata-success-1cfe11ea8b5db8d3755f8fc773aff91c.png"},60261:function(e,t,a){t.Z=a.p+"assets/images/add-metatdata-478499dc98de9efbf4fb0ccf32201a51.png"},22582:function(e,t,a){t.Z=a.p+"assets/images/aws-sso-config-ready-to-go-90a480970cedad3afafb36b1ff0807fb.png"},31360:function(e,t,a){t.Z=a.p+"assets/images/aws-sso-created-50c155d7515bcadfdb34507694c02762.png"},11279:function(e,t,a){t.Z=a.p+"assets/images/aws-sso-settings-9407b11ee122ca7050550d50aa0e0d5b.png"},44052:function(e,t,a){t.Z=a.p+"assets/images/change-identity-source-e2fb0dadc1b2a4bf24ac284f0a937ea4.png"},34779:function(e,t,a){t.Z=a.p+"assets/images/confirm-idp-config-116a25961ea203280cf1f82d1805b1fe.png"},13128:function(e,t,a){t.Z=a.p+"assets/images/create-ad-application-success-a6d9fb5a2acb1d4967045765a69e7686.png"},6553:function(e,t,a){t.Z=a.p+"assets/images/create-ad-application-dc478925fb27e60e9fd60cf776c67bfe.png"},38140:function(e,t,a){t.Z=a.p+"assets/images/download-certificate-a43fd18b9ac3aac9c8ad96f63082c35b.png"},7375:function(e,t,a){t.Z=a.p+"assets/images/download-metadata-7ad849a129620207ff7edc4232a97e93.png"},1632:function(e,t,a){t.Z=a.p+"assets/images/empty-ad-console-ee35c10540049c6021429ddb6ba1506f.png"},27542:function(e,t,a){t.Z=a.p+"assets/images/enable-sso-884585f3e11ee8062929637f3ba545b3.png"},23527:function(e,t,a){t.Z=a.p+"assets/images/no-ill-test-later-0925d0866e8d4eb32164dbf10e5106ee.png"},45986:function(e,t,a){t.Z=a.p+"assets/images/search-aws-application-0b7cde45e48e15af27c9189c4bdbafb3.png"},83533:function(e,t,a){t.Z=a.p+"assets/images/set-up-ad-single-sign-on-a0567aae3db97891e3f39f5e7cb64456.png"},10352:function(e,t,a){t.Z=a.p+"assets/images/sso-setup-complete-52712a57d549759b2a0bab0100200541.png"}}]);