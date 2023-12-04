"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2528],{934:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=o(5893),i=o(1151);const r={sidebar_label:"Resource Limits",sidebar_position:150},s="Resource Limits",l={id:"running-node/resource-limits",title:"Resource Limits",description:"These are the flags that control the capacity of the Bacalhau node, and the limits for jobs that might be run.",source:"@site/docs/running-node/resource-limits.md",sourceDirName:"running-node",slug:"/running-node/resource-limits",permalink:"/running-node/resource-limits",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/resource-limits.md",tags:[],version:"current",lastUpdatedAt:1701669642,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:150,frontMatter:{sidebar_label:"Resource Limits",sidebar_position:150},sidebar:"documentationSidebar",previous:{title:"Job Selection Policy",permalink:"/running-node/job-selection"},next:{title:"Timeouts",permalink:"/running-node/timeouts"}},a={},c=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"resource-limits",children:"Resource Limits"}),"\n",(0,n.jsx)(t.p,{children:"These are the flags that control the capacity of the Bacalhau node, and the limits for jobs that might be run."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"  --limit-job-cpu string                 Job CPU core limit for single job (e.g. 500m, 2, 8).\n  --limit-job-gpu string                 Job GPU limit for single job (e.g. 1, 2, or 8).\n  --limit-job-memory string              Job Memory limit for single job  (e.g. 500Mb, 2Gb, 8Gb).\n  --limit-total-cpu string               Total CPU core limit to run all jobs (e.g. 500m, 2, 8).\n  --limit-total-gpu string               Total GPU limit to run all jobs (e.g. 1, 2, or 8).\n  --limit-total-memory string            Total Memory limit to run all jobs  (e.g. 500Mb, 2Gb, 8Gb).\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"--limit-total-*"})," flags control the total system resources you want to give to the network.  If left blank, the system will attempt to detect these values automatically."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"--limit-job-*"})," flags control the maximum amount of resources a single job can consume for it to be selected for execution."]}),"\n",(0,n.jsx)(t.p,{children:"Resource limits are not supported for nodes running on Windows, and will be silently ignored."})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>s});var n=o(7294);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);