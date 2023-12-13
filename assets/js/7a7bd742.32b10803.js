"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6776],{7722:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var t=s(5893),c=s(1151);const i={sidebar_label:"Local"},n="Local Source Specification",o={id:"references/other-specifications/sources/local",title:"Local Source Specification",description:"The Local input source allows Bacalhau jobs to access files and directories that are already present on the compute node. This is especially useful for utilizing locally stored datasets, configuration files, logs, or other necessary resources without the need to fetch them from a remote source, ensuring faster job initialization and execution.",source:"@site/docs/references/other-specifications/sources/local.md",sourceDirName:"references/other-specifications/sources",slug:"/references/other-specifications/sources/local",permalink:"/references/other-specifications/sources/local",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/other-specifications/sources/local.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{sidebar_label:"Local"},sidebar:"documentationSidebar",previous:{title:"IPFS",permalink:"/references/other-specifications/sources/ipfs"},next:{title:"S3",permalink:"/references/other-specifications/sources/s3"}},l={},r=[{value:"Source Specification Parameters",id:"source-specification-parameters",level:2},{value:"Allow-listing Local Paths",id:"allow-listing-local-paths",level:3},{value:"Example",id:"example",level:3},{value:"Example (Imperative/CLI)",id:"example-imperativecli",level:3}];function h(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"local-source-specification",children:"Local Source Specification"}),"\n",(0,t.jsx)(a.p,{children:"The Local input source allows Bacalhau jobs to access files and directories that are already present on the compute node. This is especially useful for utilizing locally stored datasets, configuration files, logs, or other necessary resources without the need to fetch them from a remote source, ensuring faster job initialization and execution."}),"\n",(0,t.jsx)(a.h2,{id:"source-specification-parameters",children:"Source Specification Parameters"}),"\n",(0,t.jsx)(a.p,{children:"Here are the parameters that you can define for a Local input source:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"SourcePath"})," ",(0,t.jsx)(a.code,{children:"(string: <required>)"}),": The absolute path on the compute node where the Local or file is located. Bacalhau will access this path to read data, and if permitted, write data as well."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"ReadWrite"})," ",(0,t.jsx)(a.code,{children:"(bool: false)"}),": A boolean flag that, when set to true, gives Bacalhau both read and write access to the specified Local or file. If set to false, Bacalhau will have read-only access."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"allow-listing-local-paths",children:"Allow-listing Local Paths"}),"\n",(0,t.jsxs)(a.p,{children:["For security reasons, direct access to local paths must be explicitly allowed when running the Bacalhau compute node. This is achieved using the ",(0,t.jsx)(a.code,{children:"--allow-listed-local-paths"})," flag followed by a comma-separated list of the paths, or path patterns, that should be accessible. Each path can be suffixed with permissions as well:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:":rw"})," - Read-Write access."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:":ro"})," - Read-Only access (default if no suffix is provided)."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"For instance:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'bacalhau serve --allow-listed-local-paths "/etc/config:rw,/etc/*.conf:ro"\n'})}),"\n",(0,t.jsx)(a.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(a.p,{children:"Below is an example of how to define a Local input source in YAML format."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:'InputSources:\n  - Source:\n      Type: "localDirectory"\n      Params:\n        SourcePath: "/etc/config"\n        ReadWrite: true\n    Target: "/config"\n'})}),"\n",(0,t.jsxs)(a.p,{children:['In this example, Bacalhau is configured to access the Local "/etc/config" on the compute node. The contents of this directory are made available at the "/config" path within the task\'s environment, with read and write access. Adjusting the ',(0,t.jsx)(a.code,{children:"ReadWrite"})," flag to false would enable read-only access, preventing modifications to the local data from within the Bacalhau task."]}),"\n",(0,t.jsx)(a.h3,{id:"example-imperativecli",children:"Example (Imperative/CLI)"}),"\n",(0,t.jsx)(a.p,{children:"When using the Bacalhau CLI to define the local input source, you can employ the following imperative approach. Below are example commands demonstrating how to define the local input source with various configurations:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsxs)(a.strong,{children:["Mount readonly file to ",(0,t.jsx)(a.code,{children:"/config"})]}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"bacalhau docker run -i file:///etc/config:/config ubuntu ...\n"})}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsxs)(a.strong,{children:["Mount writable file to default ",(0,t.jsx)(a.code,{children:"/input"})]}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"bacalhau docker run -i file:///var/checkpoints:/myCheckpoints,opt=rw=true ubuntu ...\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,c.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>o,a:()=>n});var t=s(7294);const c={},i=t.createContext(c);function n(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:n(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);