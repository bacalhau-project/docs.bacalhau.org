"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"Task"},o="Task Specification",s={unversionedId:"references/job-specification/task",id:"references/job-specification/task",title:"Task Specification",description:"A Task signifies a distinct unit of work within the broader context of a Job. It defines the specifics of how the task should be executed, where the results should be published, what environment variables are needed, among other configurations",source:"@site/docs/references/job-specification/task.md",sourceDirName:"references/job-specification",slug:"/references/job-specification/task",permalink:"/references/job-specification/task",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/job-specification/task.md",tags:[],version:"current",lastUpdatedAt:1695912575,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{sidebar_label:"Task"},sidebar:"documentationSidebar",previous:{title:"State",permalink:"/references/job-specification/state"},next:{title:"Timeouts",permalink:"/references/job-specification/timeouts"}},l={},c=[{value:"<code>Task</code> Parameters",id:"task-parameters",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"task-specification"},"Task Specification"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," signifies a distinct unit of work within the broader context of a ",(0,a.kt)("inlineCode",{parentName:"p"},"Job"),". It defines the specifics of how the task should be executed, where the results should be published, what environment variables are needed, among other configurations"),(0,a.kt)("h2",{id:"task-parameters"},(0,a.kt)("inlineCode",{parentName:"h2"},"Task")," Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name")," ",(0,a.kt)("inlineCode",{parentName:"li"},"(string : <required>)"),": A unique identifier representing the name of the task."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Engine")," ",(0,a.kt)("code",null,"(",(0,a.kt)("a",{href:"./spec-config"},"SpecConfig")," : <required",">",")"),": Configures the execution engine for the task, such as ",(0,a.kt)("a",{parentName:"li",href:"../other-specifications/engines/docker"},"Docker")," or ",(0,a.kt)("a",{parentName:"li",href:"../other-specifications/engines/wasm"},"WebAssembly"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Publisher")," ",(0,a.kt)("code",null,"(",(0,a.kt)("a",{href:"./spec-config"},"SpecConfig")," : <optional",">",")"),": Specifies where the results of the task should be published, such as ",(0,a.kt)("a",{parentName:"li",href:"../other-specifications/publishers/s3"},"S3")," and ",(0,a.kt)("a",{parentName:"li",href:"../other-specifications/publishers/ipfs"},"IPFS")," publishers. Only applicable for tasks of type ",(0,a.kt)("inlineCode",{parentName:"li"},"batch")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ops"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Env")," ",(0,a.kt)("inlineCode",{parentName:"li"},"(map[string]string : nil)"),": A set of environment variables for the driver."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Meta")," ",(0,a.kt)("code",null,"(",(0,a.kt)("a",{href:"./meta"},"Meta")," : nil)"),": Allows association of arbitrary metadata with this task."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"InputSources")," ",(0,a.kt)("code",null,"(",(0,a.kt)("a",{href:"./input-source"},"InputSource"),"[] : <optional",">",")"),": Lists remote artifacts that should be downloaded before task execution and mounted within the task, such as from ",(0,a.kt)("a",{parentName:"li",href:"../other-specifications/sources/s3"},"S3")," or ",(0,a.kt)("a",{parentName:"li",href:"../other-specifications/sources/url"},"HTTP/HTTPs"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ResultPaths")," ",(0,a.kt)("code",null,"(",(0,a.kt)("a",{href:"./result-path"},"ResultPath"),"[] : <optional",">",")"),": Indicates volumes within the task that should be included in the published result. Only applicable for tasks of type ",(0,a.kt)("inlineCode",{parentName:"li"},"batch")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ops"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Resources")," ",(0,a.kt)("code",null,"(",(0,a.kt)("a",{href:"./resources"},"Resources")," : <optional",">",")"),": Details the resources that this task requires."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network")," ",(0,a.kt)("code",null,"(",(0,a.kt)("a",{href:"./network"},"Network")," : <optional",">",")"),": Configurations related to the networking aspects of the task."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Timeouts")," ",(0,a.kt)("code",null,"(",(0,a.kt)("a",{href:"./timeouts"},"Timeouts")," : <optional",">",")"),": Configurations concerning any timeouts associated with the task.")))}f.isMDXComponent=!0}}]);