"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[475],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6543:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"Meta"},o="Meta Specification",l={unversionedId:"references/job-specification/meta",id:"references/job-specification/meta",title:"Meta Specification",description:"In both the Job and Task specifications within Bacalhau, the Meta block is a versatile element used to attach arbitrary metadata. This metadata isn't utilized for filtering or categorizing jobs; there's a separate Labels block specifically designated for that purpose. Instead, the Meta block is instrumental for embedding additional information for operators or external systems, enhancing clarity and context.",source:"@site/docs/references/job-specification/meta.md",sourceDirName:"references/job-specification",slug:"/references/job-specification/meta",permalink:"/references/job-specification/meta",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/job-specification/meta.md",tags:[],version:"current",lastUpdatedAt:1695912575,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{sidebar_label:"Meta"},sidebar:"documentationSidebar",previous:{title:"Label",permalink:"/references/job-specification/label"},next:{title:"Network",permalink:"/references/job-specification/network"}},s={},c=[{value:"<code>Meta</code> Parameters in Job and Task Specs",id:"meta-parameters-in-job-and-task-specs",level:2},{value:"User-Defined Metadata",id:"user-defined-metadata",level:3},{value:"Example:",id:"example",level:4},{value:"Auto-Generated Metadata by Bacalhau",id:"auto-generated-metadata-by-bacalhau",level:2},{value:"Bacalhau Auto-Generated Keys:",id:"bacalhau-auto-generated-keys",level:3},{value:"Example:",id:"example-1",level:4},{value:"Implications and Utility",id:"implications-and-utility",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meta-specification"},"Meta Specification"),(0,r.kt)("p",null,"In both the ",(0,r.kt)("inlineCode",{parentName:"p"},"Job")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Task")," specifications within Bacalhau, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Meta")," block is a versatile element used to attach arbitrary metadata. This metadata isn't utilized for filtering or categorizing jobs; there's a separate ",(0,r.kt)("a",{parentName:"p",href:"./label"},(0,r.kt)("inlineCode",{parentName:"a"},"Labels"))," block specifically designated for that purpose. Instead, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Meta")," block is instrumental for embedding additional information for operators or external systems, enhancing clarity and context."),(0,r.kt)("h2",{id:"meta-parameters-in-job-and-task-specs"},(0,r.kt)("inlineCode",{parentName:"h2"},"Meta")," Parameters in Job and Task Specs"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Meta")," block is comprised of key-value pairs, with both keys and values being strings. These pairs aren't constrained by a predefined structure, offering flexibility for users to annotate jobs and tasks with diverse metadata."),(0,r.kt)("h3",{id:"user-defined-metadata"},"User-Defined Metadata"),(0,r.kt)("p",null,"Users can incorporate any arbitrary key-value pairs to convey descriptive information or context about the job or task."),(0,r.kt)("h4",{id:"example"},"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Meta": {\n    "project": "frontend",\n    "version": "1.2.5",\n    "owner": "team-alpha",\n    "environment": "development"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"project"),": Identifies the associated project."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"version"),": Specifies the version of the application or service."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"owner"),": Names the responsible team or individual."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"environment"),": Indicates the stage in the development lifecycle.")),(0,r.kt)("h2",{id:"auto-generated-metadata-by-bacalhau"},"Auto-Generated Metadata by Bacalhau"),(0,r.kt)("p",null,"Beyond user-defined metadata, Bacalhau automatically injects specific metadata keys for identification and security purposes."),(0,r.kt)("h3",{id:"bacalhau-auto-generated-keys"},"Bacalhau Auto-Generated Keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bacalhau.org/requester.id"),": A unique identifier for the orchestrator that handled the job."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bacalhau.org/requester.publicKey"),": The public key of the requester, aiding in security and validation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"bacalhau.org/client.id"),": The ID for the client submitting the job, enhancing traceability.")),(0,r.kt)("h4",{id:"example-1"},"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"Meta": {\n    "bacalhau.org/requester.id": "QmfZwnVWYjHSchAVxJqXn18Bvd1cpG2ATRYceBBvUGZf2f",\n    "bacalhau.org/requester.publicKey": "CAASpgIwggEiMA0GCSqG...BcyEhfEZKnAgMBAAE=",\n    "bacalhau.org/client.id": "dfadea67ab6d8c65761c3d879119e11f157923036f945d969d19a51066dc663a"\n}\n')),(0,r.kt)("h3",{id:"implications-and-utility"},"Implications and Utility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Identification"),": The metadata aids in uniquely identifying jobs and tasks, connecting them to their originators and executors.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Context Enhancement"),": Metadata can supplement jobs and tasks with additional data, offering insights and context that aren't captured by standard parameters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Security Enhancement"),": Auto-generated keys like the requester's public key contribute to the secure handling and execution of jobs and tasks."))),(0,r.kt)("p",null,"While the ",(0,r.kt)("inlineCode",{parentName:"p"},"Meta")," block is distinct from the ",(0,r.kt)("a",{parentName:"p",href:"./label"},(0,r.kt)("inlineCode",{parentName:"a"},"Labels"))," block used for filtering, its contribution to providing context, security, and traceability is integral in managing and understanding the diverse jobs and tasks within the Bacalhau ecosystem effectively."))}u.isMDXComponent=!0}}]);