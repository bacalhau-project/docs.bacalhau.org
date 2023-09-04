"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_label:"Specifying Hardware Requirements",sidebar_position:20},i="Specifying Hardware Requirements",l={unversionedId:"getting-started/resources",id:"getting-started/resources",title:"Specifying Hardware Requirements",description:"Not all jobs are created equal. Some jobs require more resources than others or have specific hardware requirements like GPUs. This page describes how to specify hardware requirements for your job.",source:"@site/docs/getting-started/resources.md",sourceDirName:"getting-started",slug:"/getting-started/resources",permalink:"/getting-started/resources",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/resources.md",tags:[],version:"current",lastUpdatedAt:1693819129,formattedLastUpdatedAt:"Sep 4, 2023",sidebarPosition:20,frontMatter:{sidebar_label:"Specifying Hardware Requirements",sidebar_position:20},sidebar:"documentationSidebar",previous:{title:"Onboard WebAssembly Workload",permalink:"/getting-started/wasm-workload-onboarding"},next:{title:"Examples",permalink:"/examples"}},s={},c=[{value:"Docker Executor",id:"docker-executor",level:2},{value:"How it Works",id:"how-it-works",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Also See",id:"also-see",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"specifying-hardware-requirements"},"Specifying Hardware Requirements"),(0,n.kt)("p",null,"Not all jobs are created equal. Some jobs require more resources than others or have specific hardware requirements like GPUs. This page describes how to specify hardware requirements for your job."),(0,n.kt)("p",null,"Please bear in mind that each executor is implemented independently and these docs might be slightly out of date. Double check the man page for the executor you are using with ",(0,n.kt)("inlineCode",{parentName:"p"},"bacalhau [executor] --help"),"."),(0,n.kt)("h2",{id:"docker-executor"},"Docker Executor"),(0,n.kt)("p",null,"The following table describes how to specify hardware requirements for the Docker executor."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Flag"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--cpu")),(0,n.kt)("td",{parentName:"tr",align:null},"0.1 (",(0,n.kt)("a",{parentName:"td",href:"https://github.com/bacalhau-project/bacalhau/blob/main/pkg/capacitymanager/capacitymanager.go#L9"},"source"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"Job CPU cores (e.g. 500m, 2, 8)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--memory")),(0,n.kt)("td",{parentName:"tr",align:null},"100MB (",(0,n.kt)("a",{parentName:"td",href:"https://github.com/bacalhau-project/bacalhau/blob/main/pkg/capacitymanager/capacitymanager.go#L10"},"source"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"Job Memory requirement (e.g. 500Mb, 2Gb, 8Gb).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--gpu")),(0,n.kt)("td",{parentName:"tr",align:null},"0 (",(0,n.kt)("a",{parentName:"td",href:"https://github.com/bacalhau-project/bacalhau/blob/main/pkg/capacitymanager/capacitymanager.go#L11"},"source"),")"),(0,n.kt)("td",{parentName:"tr",align:null},"Job GPU requirement (e.g. 1).")))),(0,n.kt)("h3",{id:"how-it-works"},"How it Works"),(0,n.kt)("p",null,"When you specify hardware requirements, the job will be offered out to the network to see if there are any nodes that can satisfy the requirements. If there are, the job will be scheduled on the node and the executor will be started."),(0,n.kt)("p",null,"If there are no nodes that can satisfy the requirements, the job will wait for a node to become available, until it times out ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/blob/main/pkg/computenode/config.go#L12"},"after 3 minutes"),"."),(0,n.kt)("h3",{id:"limitations"},"Limitations"),(0,n.kt)("p",null,"The following limitations currently exist within Bacalhau."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Maximum CPU and memory limits depend on the participants in the network"),(0,n.kt)("li",{parentName:"ul"},"See ",(0,n.kt)("a",{parentName:"li",href:"/next-steps/gpu"},"the dedicated page")," on GPUs to see GPU limitations")),(0,n.kt)("h3",{id:"also-see"},"Also See"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/next-steps/gpu"},"GPU workload tutorial"))))}d.isMDXComponent=!0}}]);