"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4078],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"Agent"},i="Agent API Documentation",l={unversionedId:"references/api/agent",id:"references/api/agent",title:"Agent API Documentation",description:"The Bacalhau Agent APIs provide a convenient means to retrieve information about the Bacalhau node you are communicating with, whether it serves as the orchestrator or functions as a compute node. These APIs offer valuable insights into the node's health, capabilities, and deployed Bacalhau version.",source:"@site/docs/references/api/agent.md",sourceDirName:"references/api",slug:"/references/api/agent",permalink:"/references/api/agent",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/api/agent.md",tags:[],version:"current",lastUpdatedAt:1696949965,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{sidebar_label:"Agent"},sidebar:"documentationSidebar",previous:{title:"Bacalhau API Documentation",permalink:"/references/api/"},next:{title:"Jobs",permalink:"/references/api/jobs"}},s={},p=[{value:"Is Alive",id:"is-alive",level:2},{value:"Deployed Bacalhau Version",id:"deployed-bacalhau-version",level:2},{value:"Node Info",id:"node-info",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"agent-api-documentation"},"Agent API Documentation"),(0,r.kt)("p",null,"The Bacalhau Agent APIs provide a convenient means to retrieve information about the Bacalhau node you are communicating with, whether it serves as the orchestrator or functions as a compute node. These APIs offer valuable insights into the node's health, capabilities, and deployed Bacalhau version."),(0,r.kt)("h2",{id:"is-alive"},"Is Alive"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v1/agent/alive")),(0,r.kt)("p",null,"This API can be used to determine if the agent is operational and responding as expected."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Status": "OK"\n}\n')),(0,r.kt)("h2",{id:"deployed-bacalhau-version"},"Deployed Bacalhau Version"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v1/agent/version")),(0,r.kt)("p",null,"This API provides details about the Bacalhau version, including major and minor version numbers, Git version, Git commit, build date, and platform information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Major": "1",\n  "Minor": "1",\n  "GitVersion": "v1.1.0",\n  "GitCommit": "970e1a0f23c7eb739a097aa8212f7964434bcd97",\n  "BuildDate": "2023-09-25T07:59:00Z",\n  "GOOS": "linux",\n  "GOARCH": "amd64"\n}\n')),(0,r.kt)("h2",{id:"node-info"},"Node Info"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoint:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /api/v1/agent/node")),(0,r.kt)("p",null,"This API provides detailed information about the node, including its peer ID and network addresses, node type (e.g., Compute), labels, compute node capabilities, and the deployed Bacalhau version."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "PeerInfo": {\n    "ID": "QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL",\n    "Addrs": [\n      "/ip4/35.245.245.245/tcp/1235"\n    ]\n  },\n  "NodeType": "Compute",\n  "Labels": {\n    "Architecture": "amd64",\n    "Operating-System": "linux",\n    "git-lfs": "True",\n    "owner": "bacalhau"\n  },\n  "ComputeNodeInfo": {\n    "ExecutionEngines": [\n      "docker",\n      "wasm"\n    ],\n    "Publishers": [\n      "noop",\n      "ipfs",\n      "s3"\n    ],\n    "StorageSources": [\n      "repoclonelfs",\n      "s3",\n      "ipfs",\n      "urldownload",\n      "inline",\n      "repoclone"\n    ],\n    "MaxCapacity": {\n      "CPU": 12.8,\n      "Memory": 53931121049,\n      "Disk": 721417073459,\n      "GPU": 0\n    },\n    "AvailableCapacity": {\n      "CPU": 12.8,\n      "Memory": 53931121049,\n      "Disk": 721417073459,\n      "GPU": 0\n    },\n    "MaxJobRequirements": {\n      "CPU": 12.8,\n      "Memory": 53931121049,\n      "Disk": 721417073459,\n      "GPU": 0\n    },\n    "RunningExecutions": 0,\n    "EnqueuedExecutions": 0\n  },\n  "BacalhauVersion": {\n    "Major": "1",\n    "Minor": "1",\n    "GitVersion": "v1.1.0",\n    "GitCommit": "970e1a0f23c7eb739a097aa8212f7964434bcd97",\n    "BuildDate": "2023-09-25T07:59:00Z",\n    "GOOS": "linux",\n    "GOARCH": "amd64"\n  }\n}\n')))}d.isMDXComponent=!0}}]);