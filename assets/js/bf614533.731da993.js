"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5849:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Examples",sidebar_position:3,jupyter:{jupytext:{notebook_metadata_filter:"sidebar_label,sidebar_position",text_representation:{extension:".md",format_name:"markdown",format_version:"1.3",jupytext_version:"1.14.1"}},kernelspec:{display_name:"Python 3.9.7 64-bit ('3.9.7')",language:"python",name:"python3"}}},i="Examples",s={unversionedId:"examples/index",id:"examples/index",title:"Examples",description:"Bacalhau comes pre-loaded with exciting examples to showcase its abilities and help get you started.",source:"@site/docs/examples/index.md",sourceDirName:"examples",slug:"/examples/",permalink:"/examples/",editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Examples",sidebar_position:3,jupyter:{jupytext:{notebook_metadata_filter:"sidebar_label,sidebar_position",text_representation:{extension:".md",format_name:"markdown",format_version:"1.3",jupytext_version:"1.14.1"}},kernelspec:{display_name:"Python 3.9.7 64-bit ('3.9.7')",language:"python",name:"python3"}}},sidebar:"documentationSidebar",previous:{title:"Development",permalink:"/development"},next:{title:"Workload Onboarding",permalink:"/examples/workload-onboarding/"}},l=[{value:"Organisation",id:"organisation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],p={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Bacalhau comes pre-loaded with exciting examples to showcase its abilities and help get you started."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use the navigation bar on the left to browse through the examples. You can also view the raw codebase by visiting our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/examples"},"examples repository"),"."))),(0,r.kt)("h2",{id:"organisation"},"Organisation"),(0,r.kt)("p",null,"Examples are organised by task. Each task has a number of examples that showcase different ways to solve the same problem."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We're adding examples all the time. Check back soon for more!"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Each example is a self-contained Jupyter notebook that can be run locally or on your favourite jupyter host."),(0,r.kt)("p",null,"Data is typically stored externally in GCS (for remote data examples) or IPFS (for local data examples)."),(0,r.kt)("p",null,"The examples execute on the Bacalhau public network (a.k.a. ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet"),")."))}c.isMDXComponent=!0}}]);