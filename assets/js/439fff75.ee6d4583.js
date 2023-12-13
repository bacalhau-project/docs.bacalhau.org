"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[968],{8083:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var i=s(5893),l=s(1151);const t={sidebar_label:"list"},c="Command: config list",a={id:"references/cli/config/list",title:"Command: config list",description:"Description",source:"@site/docs/references/cli/config/list.md",sourceDirName:"references/cli/config",slug:"/references/cli/config/list",permalink:"/references/cli/config/list",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/cli/config/list.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{sidebar_label:"list"},sidebar:"documentationSidebar",previous:{title:"default",permalink:"/references/cli/config/default"},next:{title:"set",permalink:"/references/cli/config/set"}},r={},o=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Flags",id:"flags",level:2},{value:"Examples",id:"examples",level:2},{value:"Listing the Bacalhau nodes configuration settings",id:"listing-the-bacalhau-nodes-configuration-settings",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"command-config-list",children:["Command: ",(0,i.jsx)(n.code,{children:"config list"})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"bacalhau config list"})," command lists the configuration keys and values of the bacalhau node. This command is useful for understanding how configuration keys map to their respective values, aiding in the use of the ",(0,i.jsx)(n.code,{children:"bacalhau config set"})," command."]}),"\n",(0,i.jsx)(n.p,{children:"Note: Configuration values displayed by this command represent the settings that will be applied when the bacalhau node is next restarted. It is important to note that these values may not reflect the current operational configuration of an active bacalhau node. The displayed configuration is relevant and accurate for a node that is either not currently running or that has been restarted after the execution of this command."}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau config list [flags]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"flags",children:"Flags"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-h"}),", ",(0,i.jsx)(n.code,{children:"--help"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Displays help information for the ",(0,i.jsx)(n.code,{children:"list"})," sub-command."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--hide-header"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: Do not print the column headers when displaying the results."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--no-style"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: Removes all styling from the table output, displaying raw data."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--output format"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: Determines the format in which the output is displayed. Available formats include Table, JSON, and YAML."}),"\n",(0,i.jsxs)(n.li,{children:["Options: ",(0,i.jsx)(n.code,{children:"json"}),", ",(0,i.jsx)(n.code,{children:"yaml"}),", ",(0,i.jsx)(n.code,{children:"table"})]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"table"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--pretty"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: Formats the output for enhanced readability. This flag is relevant only when using JSON or YAML output formats."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--wide"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: Prints full values in the table results without truncating any information."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"false"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.h3,{id:"listing-the-bacalhau-nodes-configuration-settings",children:"Listing the Bacalhau nodes configuration settings"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Basic Usage"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Command"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ bacalhau config list\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:" KEY          VALUE                                    \n <key_name> <key_value>\n...                      \n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Output in JSON format"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Command"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ bacalhau config list --output json --pretty\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Output"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "Key": "<key_name>",\n    "Value": <key_value>\n  },\n  ...\n]\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var i=s(7294);const l={},t=i.createContext(l);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);