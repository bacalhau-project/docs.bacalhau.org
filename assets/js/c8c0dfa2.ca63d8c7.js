"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[40],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},392:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"IPFS"},o="IPFS Source Specification",c={unversionedId:"references/other-specifications/sources/ipfs",id:"references/other-specifications/sources/ipfs",title:"IPFS Source Specification",description:"The IPFS Input Source enables users to easily integrate data hosted on the InterPlanetary File System (IPFS) into Bacalhau jobs. By specifying the Content Identifier (CID) of the desired IPFS file or directory, users can have the content fetched and made available in the task's execution environment, ensuring efficient and decentralized data access.",source:"@site/docs/references/other-specifications/sources/ipfs.md",sourceDirName:"references/other-specifications/sources",slug:"/references/other-specifications/sources/ipfs",permalink:"/references/other-specifications/sources/ipfs",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/other-specifications/sources/ipfs.md",tags:[],version:"current",lastUpdatedAt:1695912575,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{sidebar_label:"IPFS"},sidebar:"documentationSidebar",previous:{title:"Sources",permalink:"/category/sources"},next:{title:"Local",permalink:"/references/other-specifications/sources/local"}},s={},l=[{value:"Source Specification Parameters",id:"source-specification-parameters",level:2},{value:"Example",id:"example",level:3},{value:"Example (Imperative/CLI)",id:"example-imperativecli",level:3}],p={toc:l},u="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ipfs-source-specification"},"IPFS Source Specification"),(0,r.kt)("p",null,"The IPFS Input Source enables users to easily integrate data hosted on the ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.tech"},"InterPlanetary File System (IPFS)")," into Bacalhau jobs. By specifying the Content Identifier (CID) of the desired IPFS file or directory, users can have the content fetched and made available in the task's execution environment, ensuring efficient and decentralized data access."),(0,r.kt)("h2",{id:"source-specification-parameters"},"Source Specification Parameters"),(0,r.kt)("p",null,"Here are the parameters that you can define for an IPFS input source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CID")," ",(0,r.kt)("inlineCode",{parentName:"li"},"(string: <required>)"),": The Content Identifier that uniquely pinpoints the file or directory on the IPFS network. Bacalhau retrieves the content associated with this CID for use in the task.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Below is an example of how to define an IPFS input source in YAML format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'InputSources:\n  - Source:\n      Type: "ipfs"\n      Params:\n        CID: "QmY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjY3fZ"\n  - Target: "/data"\n')),(0,r.kt)("p",null,'In this configuration, the data associated with the specified CID is fetched from the IPFS network and made available in the task\'s environment at the "/data" path.'),(0,r.kt)("h3",{id:"example-imperativecli"},"Example (Imperative/CLI)"),(0,r.kt)("p",null,"Utilizing IPFS as an input source in Bacalhau via the CLI is straightforward. Below are example commands that demonstrate how to define the IPFS input source:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mount an IPFS CID to the default ",(0,r.kt)("inlineCode",{parentName:"strong"},"/inputs")," directory"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run -i ipfs://QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72 ubuntu ...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Mount an IPFS CID to a custom ",(0,r.kt)("inlineCode",{parentName:"strong"},"/data")," directory"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run -i ipfs://QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/data ubuntu ...\n")))),(0,r.kt)("p",null,"These commands provide a seamless mechanism to fetch and mount data from IPFS directly into your task's execution environment using the Bacalhau CLI."))}f.isMDXComponent=!0}}]);