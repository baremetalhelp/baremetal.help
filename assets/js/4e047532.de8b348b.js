"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[322],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},u="BareMetal documentation",s={unversionedId:"docusaurus/index",id:"docusaurus/index",title:"BareMetal documentation",description:"This documentation is the the docs folder. We're using the Docusaurus tool [link]. Here are instructions for creating your own documentation like this from BareMetal.",source:"@site/docs/docusaurus/index.md",sourceDirName:"docusaurus",slug:"/docusaurus/",permalink:"/docs/docusaurus/",editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/docusaurus/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"BareMetal CDN",permalink:"/docs/cdn/"},next:{title:"Other information",permalink:"/docs/other-info/"}},c={},p=[{value:"Assumptions",id:"assumptions",level:2},{value:"The result",id:"the-result",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Resources",id:"resources",level:2},{value:"Verification",id:"verification",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"baremetal-documentation"},"BareMetal documentation"),(0,o.kt)("p",null,"This documentation is the the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder. We're using the Docusaurus tool ","[link]",". Here are instructions for creating your own documentation like this from BareMetal."),(0,o.kt)("h2",{id:"assumptions"},"Assumptions"),(0,o.kt)("p",null,'See the general assumptions in "About BareMetal tutorials".'),(0,o.kt)("p",null,"In addition"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"... TBD")),(0,o.kt)("h2",{id:"the-result"},"The result"),(0,o.kt)("p",null,"You'll have the following resources"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A fully-working documentation site from a standard template."),(0,o.kt)("li",{parentName:"ol"},"The ability to run and make changes locally, where you can see changes immediately."),(0,o.kt)("li",{parentName:"ol"},"A command to push to GitHub Pages ","[link]"," ")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can serve content from an internal HTTP endpoint without a domain you own, but the URL of that endpoint can change if you delete and recreate the CDN."),(0,o.kt)("p",{parentName:"div"},"If you write applications that rely on the internal URL, you'll have to change them.\nIt's an random internal name created for you by AWS."),(0,o.kt)("p",{parentName:"div"},"If you just want to play with a CDN or don't have a custom domain, your best bet is to use the AWS console ","[link]"," rather than deploy the stack for this tutorial."))),(0,o.kt)("p",null,"In this repo ","[link]",", "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdk ls\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BareMetalCDN")," is the stack for this tutorial."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The CDN stack requires the following configuration."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"baremetal.help.ts"),", change the common configuration values to your domain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const bareMetalConfig: BareMetalConfig = {\n  domainName: "example.com",\n  cdnEndpoint: "cdn.example.com",\n};\n')),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdk deploy BareMetalCdn\n")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Blah."),(0,o.kt)("h2",{id:"verification"},"Verification"),(0,o.kt)("p",null,"Blah."))}m.isMDXComponent=!0}}]);