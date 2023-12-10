"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[40],{1401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=t(5893),i=t(1151);const s={sidebar_label:"IPFS"},r="IPFS Source Specification",c={id:"references/other-specifications/sources/ipfs",title:"IPFS Source Specification",description:"The IPFS Input Source enables users to easily integrate data hosted on the InterPlanetary File System (IPFS) into Bacalhau jobs. By specifying the Content Identifier (CID) of the desired IPFS file or directory, users can have the content fetched and made available in the task's execution environment, ensuring efficient and decentralized data access.",source:"@site/docs/references/other-specifications/sources/ipfs.md",sourceDirName:"references/other-specifications/sources",slug:"/references/other-specifications/sources/ipfs",permalink:"/references/other-specifications/sources/ipfs",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/other-specifications/sources/ipfs.md",tags:[],version:"current",lastUpdatedAt:1702252086,formattedLastUpdatedAt:"Dec 10, 2023",frontMatter:{sidebar_label:"IPFS"},sidebar:"documentationSidebar",previous:{title:"Sources",permalink:"/category/sources"},next:{title:"Local",permalink:"/references/other-specifications/sources/local"}},o={},l=[{value:"Source Specification Parameters",id:"source-specification-parameters",level:2},{value:"Example",id:"example",level:3},{value:"Example (Imperative/CLI)",id:"example-imperativecli",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"ipfs-source-specification",children:"IPFS Source Specification"}),"\n",(0,a.jsxs)(n.p,{children:["The IPFS Input Source enables users to easily integrate data hosted on the ",(0,a.jsx)(n.a,{href:"https://ipfs.tech",children:"InterPlanetary File System (IPFS)"})," into Bacalhau jobs. By specifying the Content Identifier (CID) of the desired IPFS file or directory, users can have the content fetched and made available in the task's execution environment, ensuring efficient and decentralized data access."]}),"\n",(0,a.jsx)(n.h2,{id:"source-specification-parameters",children:"Source Specification Parameters"}),"\n",(0,a.jsx)(n.p,{children:"Here are the parameters that you can define for an IPFS input source:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"CID"})," ",(0,a.jsx)(n.code,{children:"(string: <required>)"}),": The Content Identifier that uniquely pinpoints the file or directory on the IPFS network. Bacalhau retrieves the content associated with this CID for use in the task."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"Below is an example of how to define an IPFS input source in YAML format."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:'InputSources:\n  - Source:\n      Type: "ipfs"\n      Params:\n        CID: "QmY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjY3fZ"\n  - Target: "/data"\n'})}),"\n",(0,a.jsx)(n.p,{children:'In this configuration, the data associated with the specified CID is fetched from the IPFS network and made available in the task\'s environment at the "/data" path.'}),"\n",(0,a.jsx)(n.h3,{id:"example-imperativecli",children:"Example (Imperative/CLI)"}),"\n",(0,a.jsx)(n.p,{children:"Utilizing IPFS as an input source in Bacalhau via the CLI is straightforward. Below are example commands that demonstrate how to define the IPFS input source:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["Mount an IPFS CID to the default ",(0,a.jsx)(n.code,{children:"/inputs"})," directory"]}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bacalhau docker run -i ipfs://QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72 ubuntu ...\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["Mount an IPFS CID to a custom ",(0,a.jsx)(n.code,{children:"/data"})," directory"]}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"bacalhau docker run -i ipfs://QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/data ubuntu ...\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"These commands provide a seamless mechanism to fetch and mount data from IPFS directly into your task's execution environment using the Bacalhau CLI."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(7294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);