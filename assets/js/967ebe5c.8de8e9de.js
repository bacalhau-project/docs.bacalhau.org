"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[56],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"Constraint"},o="Constraint Specification",s={unversionedId:"references/job-specification/constraint",id:"references/job-specification/constraint",title:"Constraint Specification",description:"A Constraint represents a condition that must be met for a compute node to be eligible to run a given job. Operators have the flexibility to manually define node labels when initiating a node using the bacalhau serve command. Additionally, Bacalhau boasts features like automatic resource detection and dynamic labeling, further enhancing its capability.",source:"@site/docs/references/job-specification/constraint.md",sourceDirName:"references/job-specification",slug:"/references/job-specification/constraint",permalink:"/references/job-specification/constraint",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/job-specification/constraint.md",tags:[],version:"current",lastUpdatedAt:1696949965,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{sidebar_label:"Constraint"},sidebar:"documentationSidebar",previous:{title:"Job",permalink:"/references/job-specification/job"},next:{title:"InputSource",permalink:"/references/job-specification/input-source"}},l={},c=[{value:"<code>Constraint</code> Parameters:",id:"constraint-parameters",level:3},{value:"Example:",id:"example",level:3},{value:"Notes:",id:"notes",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"constraint-specification"},"Constraint Specification"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Constraint")," represents a condition that must be met for a compute node to be eligible to run a given job. Operators have the flexibility to manually define node labels when initiating a node using the bacalhau serve command. Additionally, Bacalhau boasts features like automatic resource detection and dynamic labeling, further enhancing its capability."),(0,i.kt)("p",null,"By defining constraints, you can ensure that jobs are scheduled on nodes that have the necessary requirements or conditions. "),(0,i.kt)("h3",{id:"constraint-parameters"},(0,i.kt)("inlineCode",{parentName:"h3"},"Constraint")," Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key"),": The name of the attribute or property to check on the compute node. This could be anything from a specific hardware feature, operating system version, or any other node property.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Operator"),": Determines the kind of comparison to be made against the ",(0,i.kt)("inlineCode",{parentName:"p"},"Key"),"'s value, which can be:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"in"),": Checks if the Key's value exists within the provided list of values. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"notin"),": Ensures the Key's value doesn't match any in the provided list of values. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exists"),": Verifies that a value for the specified Key is present, regardless of its actual value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"!"),": Confirms the absence of the specified Key. i.e DoesNotExist "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gt"),": Assesses if the Key's value is greater than the provided value. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lt"),": Assesses if the Key's value is less than the provided value. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"=")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"=="),": Both are used to compare the Key's value for an exact match with the provided value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"!="),": Ensures the Key's value is not the same as the provided value.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Values (optional)"),": A list of values that the node attribute, specified by the ",(0,i.kt)("inlineCode",{parentName:"li"},"Key"),", is compared against using the ",(0,i.kt)("inlineCode",{parentName:"li"},"Operator"),". This is not needed for operators like ",(0,i.kt)("inlineCode",{parentName:"li"},"exists")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"!"),".")),(0,i.kt)("h3",{id:"example"},"Example:"),(0,i.kt)("p",null,"Consider a scenario where a job should only run on nodes with a GPU and an operating system version greater than ",(0,i.kt)("inlineCode",{parentName:"p"},"2.0"),". The constraints for such a requirement might look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'constraints:\n  - key: "hardware.gpu"\n    operator: "exists"\n  - key: "Operating-System"\n    operator: "="\n    values: ["linux"]\n  - key: "region"\n    operator: "in"\n    values: ["eu-west-1,eu-west-2"]\n')),(0,i.kt)("p",null,"In this example, the first constraint checks if the node has a GPU, the second constraint ensures the OS is linux, and deployed in eu-west-1 or eu-west-2`."),(0,i.kt)("h3",{id:"notes"},"Notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Constraints are evaluated as a logical AND, meaning all constraints must be satisfied for a node to be eligible.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using too many specific constraints can lead to a job not being scheduled if no nodes satisfy all the conditions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It's essential to balance the specificity of constraints with the broader needs and resources available in the cluster."))))}d.isMDXComponent=!0}}]);