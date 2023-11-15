"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9161],{3896:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=s(5893),r=s(1151);const l={sidebar_label:"version"},a="Command: agent version",c={id:"references/cli/agent/version/index",title:"Command: agent version",description:"The bacalhau agent version command is used to obtain the version of the bacalhau agent.",source:"@site/docs/references/cli/agent/version/index.md",sourceDirName:"references/cli/agent/version",slug:"/references/cli/agent/version/",permalink:"/references/cli/agent/version/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/cli/agent/version/index.md",tags:[],version:"current",lastUpdatedAt:1700058439,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{sidebar_label:"version"},sidebar:"documentationSidebar",previous:{title:"node",permalink:"/references/cli/agent/node/"},next:{title:"command: job",permalink:"/references/cli/job/"}},t={},o=[{value:"Description:",id:"description",level:2},{value:"Usage:",id:"usage",level:2},{value:"Flags:",id:"flags",level:2},{value:"Global Flags:",id:"global-flags",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"command-agent-version",children:["Command: ",(0,i.jsx)(n.code,{children:"agent version"})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"bacalhau agent version"})," command is used to obtain the version of the bacalhau agent."]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description:"}),"\n",(0,i.jsx)(n.p,{children:"Using this command, users can quickly retrieve the version of the agent, allowing them to confirm the specific release of the software they are using."}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau agent version [flags]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"flags",children:"Flags:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"-h"}),", ",(0,i.jsx)(n.code,{children:"--help"})]}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Show help for the ",(0,i.jsx)(n.code,{children:"version"})," command."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--output format"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Defines the output format of the command\'s results. Accepted formats include "json" and "yaml".'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--pretty"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Used for pretty printing the output, enhancing readability. This flag is applicable only for the "json" and "yaml" output formats.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"global-flags",children:"Global Flags:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--api-host string"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Designates the host for client-server communication via REST. If the ",(0,i.jsx)(n.code,{children:"BACALHAU_API_HOST"})," environment variable is present, this flag will be disregarded."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'"bootstrap.production.bacalhau.org"'})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--api-port int"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Defines the port for client-server communication through REST. This flag becomes irrelevant if the ",(0,i.jsx)(n.code,{children:"BACALHAU_API_PORT"})," environment variable is specified."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"1234"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--log-mode logging-mode"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Specifies the desired logging format."}),"\n",(0,i.jsxs)(n.li,{children:["Options: ",(0,i.jsx)(n.code,{children:"'default','station','json','combined','event'"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"'default'"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"--repo string"})}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Indicates the path to the bacalhau repository."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:'"'}),'$HOME/.bacalhau"`']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Retrieve the agent version"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"Execute the command to get the agent version:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau agent version\n"})}),"\n",(0,i.jsx)(n.p,{children:"Expected output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Bacalhau v0.0.0-xxxxxxx\nBuildDate 2023-09-22 16:03:44 +0000 UTC\nGitCommit 0fe81cb488f666845ac72c73a4b804aaa658e511\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Retrieve the agent version in JSON format"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau agent version --output json\n"})}),"\n",(0,i.jsx)(n.p,{children:"Expected output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'{"major":"0","minor":"0","gitversion":"v0.0.0-xxxxxxx","gitcommit":"0fe81cb488f666845ac72c73a4b804aaa658e511","builddate":"2023-09-22T16:03:44Z","goos":"linux","goarch":"amd64"}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Retrieve the agent version in Pretty-printed JSON format"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau agent version --output json --pretty\n"})}),"\n",(0,i.jsx)(n.p,{children:"Expected output:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'{\n  "major": "0",\n  "minor": "0",\n  "gitversion": "v0.0.0-xxxxxxx",\n  "gitcommit": "0fe81cb488f666845ac72c73a4b804aaa658e511",\n  "builddate": "2023-09-22T16:03:44Z",\n  "goos": "linux",\n  "goarch": "amd64"\n}\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var i=s(7294);const r={},l=i.createContext(r);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);