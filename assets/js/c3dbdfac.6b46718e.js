"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[737],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9240:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="BareMetal CDN",s={unversionedId:"cdn/index",id:"cdn/index",title:"BareMetal CDN",description:"We're going to build a Content Delivery Network, CDN, from scratch. A CDN serves web objects like images from locations that are geographically close to consumers.",source:"@site/docs/cdn/index.md",sourceDirName:"cdn",slug:"/cdn/",permalink:"/baremetal.help/docs/cdn/",editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/cdn/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About BareMetal Tutorials",permalink:"/baremetal.help/docs/intro"},next:{title:"Other information",permalink:"/baremetal.help/docs/other-info/"}},u={},p=[{value:"Assumptions",id:"assumptions",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Resources",id:"resources",level:2},{value:"Verification",id:"verification",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"baremetal-cdn"},"BareMetal CDN"),(0,a.kt)("p",null,"We're going to build a Content Delivery Network, CDN, from scratch. A CDN serves web objects like images from locations that are geographically close to consumers."),(0,a.kt)("p",null,"CDNs cache too. So you only need to copy the original to one place and the CDN takes care of copying to edge locations on a cache miss."),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("p",null,'See the general assumptions in "About BareMetal tutorials".'),(0,a.kt)("p",null,"In addition"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You registered a domain (strongly recommended) ","[link]",".")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can serve content from an internal HTTP endpoint without a domain you own, but the URL of that endpoint can change if you delete and recreate the CDN."),(0,a.kt)("p",{parentName:"div"},"If you write applications that rely on the internal URL, you'll have to change them.\nIt's an random internal name created for you by AWS."),(0,a.kt)("p",{parentName:"div"},"If you just want to play with a CDN or don't have a custom domain, your best bet is to use the AWS console ","[link]"," rather than deploy the stack for this tutorial."))),(0,a.kt)("p",null,"In this repo ","[link]",", "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cdk ls\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BareMetalCDN")," is the stack for this tutorial."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The CDN stack requires the following configuration."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"baremetal.help.ts"),", change the common configuration values to your domain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const bareMetalConfig: BareMetalConfig = {\n  domainName: "example.com",\n  cdnEndpoint: "cdn.example.com",\n};\n')),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cdk deploy BareMetalCdn\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,"Blah."),(0,a.kt)("h2",{id:"verification"},"Verification"),(0,a.kt)("p",null,"Blah."))}m.isMDXComponent=!0}}]);