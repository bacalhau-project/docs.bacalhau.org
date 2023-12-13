"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1728],{9380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(5893),i=n(1151);const a={sidebar_label:"WebAssembly Observability",sidebar_position:4},o="Observability for WebAssembly Workloads in Bacalhau",r={id:"integration/wasm-observe",title:"Observability for WebAssembly Workloads in Bacalhau",description:"Gain deeper insights into the WebAssembly (Wasm) jobs running on Bacalhau compute nodes using the",source:"@site/docs/integration/wasm-observe.md",sourceDirName:"integration",slug:"/integration/wasm-observe",permalink:"/integration/wasm-observe",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/integration/wasm-observe.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"WebAssembly Observability",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Lilypad for Web3",permalink:"/integration/lilypad"},next:{title:"Community",permalink:"/community"}},l={},d=[{value:"Features",id:"features",level:2},{value:"Installing the SDK",id:"installing-the-sdk",level:2},{value:"Usage",id:"usage",level:2},{value:"Automatic Instrumentation",id:"automatic-instrumentation",level:3},{value:"Manual Instrumentation",id:"manual-instrumentation",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"observability-for-webassembly-workloads-in-bacalhau",children:"Observability for WebAssembly Workloads in Bacalhau"}),"\n",(0,s.jsxs)(t.p,{children:["Gain deeper insights into the WebAssembly (Wasm) jobs running on Bacalhau compute nodes using the\n",(0,s.jsx)(t.a,{href:"https://dev.dylibso.com/docs/category/observe-sdk/",children:"Observe SDK"}),", an open-source library that unlocks modern observability for WebAssembly. This feature supplements the ",(0,s.jsx)(t.a,{href:"/running-node/observability/",children:"host-level observability"})," data with additional traces extracted from within the Wasm modules running on compute nodes in a Bacalhau network."]}),"\n",(0,s.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Extract telemetry data from Wasm workloads. Currently supports tracing, with logs and metrics coming soon."}),"\n",(0,s.jsxs)(t.li,{children:["Data can be sent to the ",(0,s.jsx)(t.a,{href:"/running-node/observability/#viewing",children:"same viewing destinations"})," (ie. sinks) that are supported for the host-level data."]}),"\n",(0,s.jsx)(t.li,{children:"Utilizes the same Trace ID as the host-level data, allowing for seamless visibility into the end-to-end execution of the job."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"installing-the-sdk",children:"Installing the SDK"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The Observe SDK is integrated with the default WebAssembly ",(0,s.jsx)(t.a,{href:"/getting-started/architecture/#executor",children:"Executor"})," provided by Bacalhau, so node operators are not required to integrate the SDK itself as long as a custom / pluggable Executor is not being used."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"(Optional)"})," For node operators using a custom Executer see ",(0,s.jsx)(t.a,{href:"https://dev.dylibso.com/docs/observe/adapters/golang/opentelemetry",children:"here"})," for instructions on how to integrate the Observe SDK."]}),"\n",(0,s.jsxs)(t.li,{children:["The SDK uses the same environment variables noted ",(0,s.jsx)(t.a,{href:"/running-node/observability/#viewing",children:"here"})," for sending data out to a viewing destination."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(t.p,{children:["If you are running a Wasm-based workload on the Bacalhau network, your module must be instrumented in order to send its telemetry data to the ",(0,s.jsx)(t.a,{href:"https://github.com/dylibso/observe-sdk/tree/main/observe-api",children:"host interfaces"})," provided by the Observe SDK. Modules can be instrumented ",(0,s.jsx)(t.strong,{children:"automatically"})," or ",(0,s.jsx)(t.strong,{children:"manually"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"automatic-instrumentation",children:"Automatic Instrumentation"}),"\n",(0,s.jsxs)(t.p,{children:["Wasm modules can be automatically instrumented using an ",(0,s.jsx)(t.a,{href:"https://dev.dylibso.com/docs/observe/instrumentation/automatic/",children:"instrumentation compiler"})," provided by ",(0,s.jsx)(t.a,{href:"https://dylibso.com/",children:"Dylibso"}),". This method removes the need for manual instrumentation (see below) but does not preclude it (ie. both methods can be used together without issue)"]}),"\n",(0,s.jsx)(t.h3,{id:"manual-instrumentation",children:"Manual Instrumentation"}),"\n",(0,s.jsxs)(t.p,{children:["In order to manually instrument a Wasm module, calls are made to the ",(0,s.jsx)(t.a,{href:"https://github.com/dylibso/observe-sdk/tree/main/observe-api",children:"Observe API"})," function interfaces through language bindings specific to the source language used to create the Wasm module. Examples of these bindings are available for ",(0,s.jsx)(t.a,{href:"https://github.com/dylibso/observe-sdk/blob/main/observe-api/test/c/main.c",children:"C"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/dylibso/observe-sdk/blob/main/observe-api/test/rust/src/main.rs",children:"Rust"}),". Additional language bindings are planned but you can also build your own if desired. If going the former route, Dylibso can ",(0,s.jsx)(t.a,{href:"https://dev.dylibso.com/support",children:"assist"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Note: Currently, only the ",(0,s.jsx)(t.code,{children:"span_enter"}),", ",(0,s.jsx)(t.code,{children:"span_exit"}),", and ",(0,s.jsx)(t.code,{children:"span_tag"})," interfaces are implemented, with support for logging and metrics available in the future."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);