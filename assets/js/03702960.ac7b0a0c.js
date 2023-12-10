"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6328],{5125:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(5893),i=r(1151);const o={sidebar_label:"Resources"},t="Resources Specification",c={id:"references/job-specification/resources",title:"Resources Specification",description:"The Resources provides a structured way to detail the computational resources a Task requires. By specifying these requirements, you ensure that the task is scheduled on a node with adequate resources, optimizing performance and avoiding potential issues linked to resource constraints.",source:"@site/docs/references/job-specification/resources.md",sourceDirName:"references/job-specification",slug:"/references/job-specification/resources",permalink:"/references/job-specification/resources",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/job-specification/resources.md",tags:[],version:"current",lastUpdatedAt:1702252086,formattedLastUpdatedAt:"Dec 10, 2023",frontMatter:{sidebar_label:"Resources"},sidebar:"documentationSidebar",previous:{title:"Network",permalink:"/references/job-specification/network"},next:{title:"ResultPath",permalink:"/references/job-specification/result-path"}},a={},d=[{value:"<code>Resources</code> Parameters:",id:"resources-parameters",level:2}];function l(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"resources-specification",children:"Resources Specification"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"Resources"})," provides a structured way to detail the computational resources a ",(0,n.jsx)(s.code,{children:"Task"})," requires. By specifying these requirements, you ensure that the task is scheduled on a node with adequate resources, optimizing performance and avoiding potential issues linked to resource constraints."]}),"\n",(0,n.jsxs)(s.h2,{id:"resources-parameters",children:[(0,n.jsx)(s.code,{children:"Resources"})," Parameters:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"CPU"})," ",(0,n.jsx)(s.code,{children:"(string: <optional>)"}),": Defines the CPU resources required for the task. Units can be specified in cores (e.g., ",(0,n.jsx)(s.code,{children:"2"})," for 2 CPU cores) or in milliCPU units (e.g., ",(0,n.jsx)(s.code,{children:"250m"})," or ",(0,n.jsx)(s.code,{children:"0.25"})," for 250 milliCPU units). For instance, if you have half a CPU core, you can represent it as ",(0,n.jsx)(s.code,{children:"500m"})," or ",(0,n.jsx)(s.code,{children:"0.5"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Memory"})," ",(0,n.jsx)(s.code,{children:"(string: <optional>)"}),": Highlights the amount of RAM needed for the task. You can specify the memory in various units such as:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Kb"})," for Kilobytes"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Mb"})," for Megabytes"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Gb"})," for Gigabytes"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Tb"})," for Terabytes"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Disk"})," ",(0,n.jsx)(s.code,{children:"(string: <optional>)"}),": States the disk storage space needed for the task. Similarly, the disk space can be expressed in units like ",(0,n.jsx)(s.code,{children:"Gb"})," for Gigabytes, ",(0,n.jsx)(s.code,{children:"Mb"})," for Megabytes, and so on. As an example, ",(0,n.jsx)(s.code,{children:"10Gb"})," indicates 10 Gigabytes of storage space."]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"GPU"})," ",(0,n.jsx)(s.code,{children:"(string: <optional>)"}),": Denotes the number of GPU units required. For example, ",(0,n.jsx)(s.code,{children:"2"})," signifies the requirement of 2 GPU units. This is crucial for tasks involving heavy computational processes, machine learning models, or tasks that leverage GPU acceleration."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>t});var n=r(7294);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);