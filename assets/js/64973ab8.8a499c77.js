"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9124],{5421:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=i(5893),l=i(1151);const a={},r="command: agent",c={id:"references/cli/agent/index",title:"command: agent",description:"Description",source:"@site/docs/references/cli/agent/index.md",sourceDirName:"references/cli/agent",slug:"/references/cli/agent/",permalink:"/references/cli/agent/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/cli/agent/index.md",tags:[],version:"current",lastUpdatedAt:1702252086,formattedLastUpdatedAt:"Dec 10, 2023",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Commands CLI (Experimental)",permalink:"/references/cli/"},next:{title:"alive",permalink:"/references/cli/agent/alive/"}},t={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Available Commands",id:"available-commands",level:2},{value:"Flags",id:"flags",level:2},{value:"Global Flags",id:"global-flags",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"command-agent",children:["command: ",(0,s.jsx)(n.code,{children:"agent"})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"bacalhau agent"})," command is a parent command that offers sub-commands to query information about the Bacalhau agent. This can be useful for debugging, monitoring, or managing the agent's behavior and health."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"bacalhau agent [command]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"available-commands",children:"Available Commands"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"./alive",children:"alive"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Description: Retrieves the agent's liveness and health information. This can be helpful to determine if the agent is running and healthy."}),"\n",(0,s.jsxs)(n.li,{children:["Usage:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bacalhau agent alive\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"./node",children:"node"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Description: Gathers the agent's node-related information. This might include details about the machine or environment where the agent is running, available resources, supported engines, etc."}),"\n",(0,s.jsxs)(n.li,{children:["Usage:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bacalhau agent node\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"./version",children:"version"})}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Description: Retrieves the Bacalhau version of the agent. This can be beneficial for ensuring compatibility or checking for updates."}),"\n",(0,s.jsxs)(n.li,{children:["Usage:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bacalhau agent version\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For more detailed information on any of the sub-commands, you can use the command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bacalhau agent [command] --help\n"})}),"\n",(0,s.jsx)(n.h2,{id:"flags",children:"Flags"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"-h"}),", ",(0,s.jsx)(n.code,{children:"--help"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Description: Displays help information for the ",(0,s.jsx)(n.code,{children:"agent"})," command."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"global-flags",children:"Global Flags"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--api-host string"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Description: Specifies the host used for RESTful communication between the client and server. The flag is disregarded if the ",(0,s.jsx)(n.code,{children:"BACALHAU_API_HOST"})," environment variable is set."]}),"\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"bootstrap.production.bacalhau.org"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--api-port int"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Description: Specifies the port for REST communication. If the ",(0,s.jsx)(n.code,{children:"BACALHAU_API_PORT"})," environment variable is set, this flag will be ignored."]}),"\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"1234"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--log-mode logging-mode"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Description: Sets the desired log format. Options are: ",(0,s.jsx)(n.code,{children:"default"}),", ",(0,s.jsx)(n.code,{children:"station"}),", ",(0,s.jsx)(n.code,{children:"json"}),", ",(0,s.jsx)(n.code,{children:"combined"}),", and ",(0,s.jsx)(n.code,{children:"event"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"default"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--repo string"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Description: Defines the path to the bacalhau repository."}),"\n",(0,s.jsx)(n.li,{children:"Default: ``$HOME/.bacalhau`"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(7294);const l={},a=s.createContext(l);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);