"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8905],{9055:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>t});var i=s(5893),c=s(1151);const l={sidebar_label:"describe"},r="Command: job describe",d={id:"references/cli/job/describe/index",title:"Command: job describe",description:"Description",source:"@site/docs/references/cli/job/describe/index.md",sourceDirName:"references/cli/job/describe",slug:"/references/cli/job/describe/",permalink:"/references/cli/job/describe/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/cli/job/describe/index.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{sidebar_label:"describe"},sidebar:"documentationSidebar",previous:{title:"command: job",permalink:"/references/cli/job/"},next:{title:"executions",permalink:"/references/cli/job/executions/"}},o={},t=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Flags",id:"flags",level:2},{value:"Global Flags",id:"global-flags",level:2},{value:"Examples",id:"examples",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"command-job-describe",children:["Command: ",(0,i.jsx)(n.code,{children:"job describe"})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"bacalhau job describe"})," command provides a detailed description of a specific job in YAML format. This description can be particularly useful when wanting to understand the attributes and current status of a specific job. To list all available jobs, the ",(0,i.jsx)(n.code,{children:"bacalhau job list"})," command can be used."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"bacalhau job describe [id] [flags]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"flags",children:"Flags"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-h"}),", ",(0,i.jsx)(n.code,{children:"--help"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Display help for the ",(0,i.jsx)(n.code,{children:"describe"})," command."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--output format"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Specifies the desired output format for the command. Supported values are ",(0,i.jsx)(n.code,{children:"json"})," and ",(0,i.jsx)(n.code,{children:"yaml"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"yaml"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--pretty"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Pretty prints the output. This option is applicable only to ",(0,i.jsx)(n.code,{children:"json"})," and ",(0,i.jsx)(n.code,{children:"yaml"})," output formats."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"global-flags",children:"Global Flags"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--api-host string"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Specifies the host for the client and server to communicate through via REST. If the ",(0,i.jsx)(n.code,{children:"BACALHAU_API_HOST"})," environment variable is set, this flag will be ignored."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"bootstrap.production.bacalhau.org"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--api-port int"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Determines the port for the client and server to communicate on using REST. If the ",(0,i.jsx)(n.code,{children:"BACALHAU_API_PORT"})," environment variable is set, this flag will be ignored."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"1234"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--log-mode logging-mode"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Specifies the desired log format. Supported values include ",(0,i.jsx)(n.code,{children:"default"}),", ",(0,i.jsx)(n.code,{children:"station"}),", ",(0,i.jsx)(n.code,{children:"json"}),", ",(0,i.jsx)(n.code,{children:"combined"}),", and ",(0,i.jsx)(n.code,{children:"event"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"default"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--repo string"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: Defines the path to the bacalhau repository."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"$HOME/.bacalhau"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Describe a Job with Full ID"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job describe j-e3f8c209-d683-4a41-b840-f09b88d087b9\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Describe a Job with Shortened ID"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job describe j-47805f5c\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Describe a Job with JSON Output"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job describe --output json --pretty j-b6ad164a\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var i=s(7294);const c={},l=i.createContext(c);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);