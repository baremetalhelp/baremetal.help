"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4560],{4863:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(4848),t=s(8453);const o={sidebar_position:5},r="Set Up User and Group Provisioning",c={id:"enterprise/sso/enable-provisionsing",title:"Set Up User and Group Provisioning",description:"We have some AD Users and AD Groups. We need to set up which ones are synchronized with AWS SSO. Hint: Pretty much all of them.",source:"@site/docs/enterprise/sso/enable-provisionsing.md",sourceDirName:"enterprise/sso",slug:"/enterprise/sso/enable-provisionsing",permalink:"/docs/enterprise/sso/enable-provisionsing",draft:!1,unlisted:!1,editUrl:"https://github.com/baremetalhelp/baremetal.help/docs/enterprise/sso/enable-provisionsing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Set Up Users and Groups",permalink:"/docs/enterprise/sso/users-and-groups"},next:{title:"BareMetal SSO Landing Zone",permalink:"/docs/enterprise/landing-zone/"}},a={},d=[{value:"Assign User and Groups",id:"assign-user-and-groups",level:2},{value:"Provision User and Groups for Synchronization",id:"provision-user-and-groups-for-synchronization",level:2},{value:"Back to AWS SSO Console",id:"back-to-aws-sso-console",level:3},{value:"State of Play",id:"state-of-play",level:2}];function p(e){const n={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"set-up-user-and-group-provisioning",children:"Set Up User and Group Provisioning"}),"\n",(0,i.jsx)(n.p,{children:"We have some AD Users and AD Groups. We need to set up which ones are synchronized with AWS SSO. Hint: Pretty much all of them."}),"\n",(0,i.jsx)(n.h2,{id:"assign-user-and-groups",children:"Assign User and Groups"}),"\n",(0,i.jsxs)(n.p,{children:["The AWS Single Sign-On Enterprise Application requires users and groups to be ",(0,i.jsx)(n.strong,{children:"assigned"})," so that they are synchronized."]}),"\n",(0,i.jsx)(n.p,{children:"Find the AWS Single Sign-on Enterprise Application."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6629).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Enterprise applications".'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2029).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "AWS Single Sign-on".'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2082).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Assign users and groups".'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6747).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Add user/group". The "Users and groups" on the next page.'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(1733).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:"Add all users and groups. I have my user in AD as the owner. It's not at all necessary."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5450).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Select" to add all the assignments. Click "Assign" to make it happen.'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.h2,{id:"provision-user-and-groups-for-synchronization",children:"Provision User and Groups for Synchronization"}),"\n",(0,i.jsx)(n.p,{children:"Now that we have assigned which AD User and Groups will be synchronized to AWS SSO Users and Groups, it's time to set up the synchronization job itself."}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'In the AWS Single Sign-on Enterprise Application, click "Provisioning".'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9310).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Get started"'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(7851).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Select "Automatic".'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5625).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.h3,{id:"back-to-aws-sso-console",children:"Back to AWS SSO Console"}),"\n",(0,i.jsx)(n.p,{children:"AD automatic provisioning requires a Tenant URL and a Secret Token. We get these from the AWS."}),"\n",(0,i.jsx)(n.p,{children:"In the AWS SSO Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(817).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Enable" next to "Automatic Provisioning".'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(304).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsxs)(n.admonition,{title:"action",type:"info",children:[(0,i.jsx)(n.p,{children:'Copy "SCIM endpoint" URL to "Tenant URL" in the AD Provisioning console.'}),(0,i.jsx)(n.p,{children:'Copy "Access token" to "Secret Token" in the AD Provisioning console.'})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(158).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Test Connection".'})}),"\n",(0,i.jsx)(n.p,{children:"Here's what success looks like."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5408).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Save".'})}),"\n",(0,i.jsx)(n.p,{children:"Here's the initial provisioning configuration."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3635).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Start provisioning".'})}),"\n",(0,i.jsx)(n.p,{children:"Nothing will happen for a bit, so put the kettle on."}),"\n",(0,i.jsxs)(n.p,{children:["By default, synchronization runs every 40 minutes. It is not possible to change this delay. But it ",(0,i.jsx)(n.em,{children:"is"}),' possible to "Provision on demand" on a specific AD User. Although this will not\ncreate new SSO Groups, just assign existing ones.']}),"\n",(0,i.jsx)(n.p,{children:"For this step we're only interested in seeing all users and group being synchronized at once to AWS SSO."}),"\n",(0,i.jsx)(n.p,{children:"We're so close we can taste it."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(8189).A+"",width:"500",height:"414"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(7104).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.p,{children:"Oh look. An error. Let's show you how to debug and fix that."}),"\n",(0,i.jsx)(n.p,{children:"First, let's head over to the AWS SSO Console to see what we can find out. Check Users and Groups."}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Open AWS SSO console. Click "Users", then click "Groups".'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(857).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2169).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.p,{children:"It looks like although Annie was synchronized correctly, the Administrator group did not."}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:'Click "Provisioning logs" and find the failure.'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(7583).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{title:"action",type:"info",children:(0,i.jsx)(n.p,{children:"Click the failed entity."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3422).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:'It\'s quite possible some group names are reserved, either in AD or AWS SSO. "Administrator" could be one of those. Let\'s add a new group "SRE" and see what happens.'})}),"\n",(0,i.jsx)(n.p,{children:"Bingo."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2398).A+"",width:"2780",height:"2664"})}),"\n",(0,i.jsx)(n.h2,{id:"state-of-play",children:"State of Play"}),"\n",(0,i.jsx)(n.p,{children:"Tie it all together... TBD"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8189:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/40-minutes-later-56f0cc6806dbb591eda43ead74719600.jpg"},1733:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/add-assignment-199d3a707e76f0794a01ead9ebfad40b.png"},5450:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/add-assignments-3971033d3ed38d0ec7b98ac1daa56dae.png"},6747:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/assign-users-and-groups-0fde130845461782a596c3e504ca3a86.png"},2:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/assignments-complete-9a75cf2272fc46114c1acb5a3737cdff.png"},5625:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/automatic-provisioning-e67007e09a3d4fd1e02abf4c2ee7d5f6.png"},817:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/aws-automatic-provisioning-setup-723798f6ff979e0aadf0dd27e0f82d77.png"},2082:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/aws-single-sign-on-overview-9f13c95fdbc686b93b9dc15a964f2181.png"},2029:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/enterprise-applications-7ff968a2d4687bae8a9cb47913a36e92.png"},6629:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/find-enterprise-applications-cf010bfa56d75fcbe3d5114ec4351c61.png"},3422:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/provisioning-failure-detail-3037183016fc986966c0bff1c9635fcc.png"},7583:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/provisioning-logs-fd8c9e27008492b1a4c3c7aab9c38046.png"},3635:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/provisioning-setup-00cd7ae5edd1e09b8b368f49e593efdb.png"},7104:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/provisioning-with-error-c5b64d14673a3551de6b168c76e92dfe.png"},7851:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/provisioning-f0e1685b4bee75b090d7d5add8e44ad3.png"},304:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/scim-endpoint-and-token-2ac2fda295a370e3215a73682ef9dca3.png"},2398:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/sre-group-sync-0d73b7ee5fc52c62aecb6d3b860cc1de.png"},9310:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/start-provisioning-6bb20773b7132b4fc12bf9752fc4cfed.png"},2169:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/synched-groups-61e5170017e644d7e0844da6e38139df.png"},857:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/synched-users-db4db987bd82407da39f8f93409d0d8f.png"},5408:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/test-scim-connection-success-c8137d75efdae38580d69cff643ccfac.png"},158:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/test-scim-connection-a563228f0a6cdc32e8f0a5a27185f0d3.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var i=s(6540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);