"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3958],{6084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var s=n(5893),i=n(1151);const r={sidebar_label:"Configuring node persistence",sidebar_position:180,title:"Configuring node persistence",description:"How to configure compute/requester persistence"},o=void 0,d={id:"running-node/persistence",title:"Configuring node persistence",description:"How to configure compute/requester persistence",source:"@site/docs/running-node/persistence.md",sourceDirName:"running-node",slug:"/running-node/persistence",permalink:"/running-node/persistence",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/persistence.md",tags:[],version:"current",lastUpdatedAt:1702252086,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:180,frontMatter:{sidebar_label:"Configuring node persistence",sidebar_position:180,title:"Configuring node persistence",description:"How to configure compute/requester persistence"},sidebar:"documentationSidebar",previous:{title:"GPU Support",permalink:"/running-node/gpu"},next:{title:"Configuring TLS",permalink:"/running-node/configuring-tls"}},a={},c=[{value:"Compute node persistence",id:"compute-node-persistence",level:2},{value:"Requester node persistence",id:"requester-node-persistence",level:2}];function l(e){const t={code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Both compute nodes, and requester nodes, maintain state. How that state is maintained is configurable, although the defaults are likely adequate for most use-cases.  This page describes how to configure the persistence of compute and requester nodes should the defaults not be suitable."}),"\n",(0,s.jsx)(t.h2,{id:"compute-node-persistence",children:"Compute node persistence"}),"\n",(0,s.jsx)(t.p,{children:"The computes nodes maintain information about the work that has been allocated to them, including:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The current state of the execution, and"}),"\n",(0,s.jsx)(t.li,{children:"The original job that resulted in this allocation"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:['This information is used by the compute and requester nodes to ensure allocated jobs are completed successfully.  By default, compute nodes store their state in a bolt-db database and this is located in the bacalhau repository along with configuration data.  For a compute node whose ID is "abc", the database can be found in ',(0,s.jsx)(t.code,{children:"~/.bacalhau/abc-compute/executions.db"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"In some cases, it may be preferable to maintain the state in memory, with the caveat that should the node restart, all state will be lost.  This can be configured using the environment variables in the table below."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Environment Variable"}),(0,s.jsx)(t.th,{children:"Flag alternative"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Effect"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BACALHAU_COMPUTE_STORE_TYPE"}),(0,s.jsx)(t.td,{children:"--compute-execution-store-type"}),(0,s.jsx)(t.td,{children:"boltdb"}),(0,s.jsx)(t.td,{children:"Uses the bolt db execution store (default)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BACALHAU_COMPUTE_STORE_PATH"}),(0,s.jsx)(t.td,{children:"--compute-execution-store-path"}),(0,s.jsx)(t.td,{children:"A path (inc. filename)"}),(0,s.jsxs)(t.td,{children:["Specifies where the boltdb database should be stored. Default is ",(0,s.jsx)(t.code,{children:"~/.bacalhau/{NODE-ID}-compute/executions.db"})," if not set"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BACALHAU_COMPUTE_STORE_TYPE"}),(0,s.jsx)(t.td,{children:"--compute-execution-store-type"}),(0,s.jsx)(t.td,{children:"inmemory"}),(0,s.jsx)(t.td,{children:"Uses the inmemory execution store"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"requester-node-persistence",children:"Requester node persistence"}),"\n",(0,s.jsxs)(t.p,{children:['When running a requester node, it maintains state about the jobs it has been requested to orchestrate and schedule, the evaluation of those jobs, and the executions that have been allocated.  By default, this state is stored in a bolt db database that, with a node ID of "xyz" can be found in  ',(0,s.jsx)(t.code,{children:"~/.bacalhau/xyz-requester/jobs.db"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"It is possible, but not recommended, to run the requester node with an inmemory job store, which will result in lost state when the requester node is restarted."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Environment Variable"}),(0,s.jsx)(t.th,{children:"Flag alternative"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Effect"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BACALHAU_JOB_STORE_TYPE"}),(0,s.jsx)(t.td,{children:"--requester-job-store-type"}),(0,s.jsx)(t.td,{children:"boltdb"}),(0,s.jsx)(t.td,{children:"Uses the bolt db job store (default)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BACALHAU_JOB_STORE_PATH"}),(0,s.jsx)(t.td,{children:"--requester-job-store-path"}),(0,s.jsx)(t.td,{children:"A path (inc. filename)"}),(0,s.jsxs)(t.td,{children:["Specifies where the boltdb database should be stored. Default is ",(0,s.jsx)(t.code,{children:"~/.bacalhau/{NODE-ID}-requester/jobs.db"})," if not set"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"BACALHAU_JOB_STORE_TYPE"}),(0,s.jsx)(t.td,{children:"--requester-job-store-type"}),(0,s.jsx)(t.td,{children:"inmemory"}),(0,s.jsx)(t.td,{children:"Uses the inmemory job store"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var s=n(7294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);