"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2417],{5735:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(5893),n=s(1151);const r={sidebar_label:"IPFS"},a="IPFS Publisher Specification",l={id:"references/other-specifications/publishers/ipfs",title:"IPFS Publisher Specification",description:"The IPFS Publisher in Bacalhau amplifies the versatility of task result storage by integrating with the InterPlanetary File System (IPFS). IPFS is a protocol and network designed to create a peer-to-peer method of storing and sharing hypermedia in a distributed file system. Bacalhau's seamless integration with IPFS ensures that users have a decentralized option for publishing their task results, enhancing accessibility and resilience while reducing dependence on a single point of failure.",source:"@site/docs/references/other-specifications/publishers/ipfs.md",sourceDirName:"references/other-specifications/publishers",slug:"/references/other-specifications/publishers/ipfs",permalink:"/references/other-specifications/publishers/ipfs",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/other-specifications/publishers/ipfs.md",tags:[],version:"current",lastUpdatedAt:1702252086,formattedLastUpdatedAt:"Dec 10, 2023",frontMatter:{sidebar_label:"IPFS"},sidebar:"documentationSidebar",previous:{title:"Publishers",permalink:"/category/publishers"},next:{title:"S3",permalink:"/references/other-specifications/publishers/s3"}},c={},o=[{value:"<code>IPFS</code> Publisher Parameters",id:"ipfs-publisher-parameters",level:2},{value:"Published Result Specification",id:"published-result-specification",level:2},{value:"Result Parameters",id:"result-parameters",level:3}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"ipfs-publisher-specification",children:"IPFS Publisher Specification"}),"\n",(0,t.jsxs)(i.p,{children:["The IPFS Publisher in Bacalhau amplifies the versatility of task result storage by integrating with the ",(0,t.jsx)(i.a,{href:"https://ipfs.tech/",children:"InterPlanetary File System (IPFS)"}),". IPFS is a protocol and network designed to create a peer-to-peer method of storing and sharing hypermedia in a distributed file system. Bacalhau's seamless integration with IPFS ensures that users have a decentralized option for publishing their task results, enhancing accessibility and resilience while reducing dependence on a single point of failure."]}),"\n",(0,t.jsxs)(i.h2,{id:"ipfs-publisher-parameters",children:[(0,t.jsx)(i.code,{children:"IPFS"})," Publisher Parameters"]}),"\n",(0,t.jsx)(i.p,{children:"For the IPFS publisher, no specific parameters need to be defined in the publisher specification. The user only needs to indicate the publisher type as IPFS, and Bacalhau handles the rest. Here is an example of how to set up an IPFS Publisher in a job specification."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"Publisher:\n  Type: ipfs\n\n"})}),"\n",(0,t.jsx)(i.h2,{id:"published-result-specification",children:"Published Result Specification"}),"\n",(0,t.jsx)(i.p,{children:"Once the job is executed, the results are published to IPFS, and a unique CID (Content Identifier) is generated for each file or piece of data. This CID acts as an address to the file in the IPFS network and can be used to access the file globally."}),"\n",(0,t.jsx)(i.h3,{id:"result-parameters",children:"Result Parameters"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["CID ",(0,t.jsx)(i.code,{children:"(string)"}),": This is the unique content identifier generated by IPFS, which can be used to access the published content from anywhere in the world. Every data piece stored on IPFS has its unique CID.\nHere's a sample of how the published result might appear:"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:'PublishedResult:\n  Type: ipfs\n  Params:\n    CID: "QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco"\n'})}),"\n",(0,t.jsx)(i.p,{children:"In this example, the task results will be stored in IPFS, and can be referenced and retrieved using the specified CID. This is indicative of Bacalhau's commitment to offering flexible, reliable, and decentralized options for result storage, catering to a diverse set of user needs and preferences."})]})}function d(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>l,a:()=>a});var t=s(7294);const n={},r=t.createContext(n);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);