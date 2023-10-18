"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6657],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7147:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_label:"ResultPath"},o="ResultPath Specification",s={unversionedId:"references/job-specification/result-path",id:"references/job-specification/result-path",title:"ResultPath Specification",description:"A ResultPath denotes a specific location within a Task that contains meaningful output or results. By specifying a ResultPath, you can pinpoint which files or directories are essential and should be retained or published after the task's execution.",source:"@site/docs/references/job-specification/result-path.md",sourceDirName:"references/job-specification",slug:"/references/job-specification/result-path",permalink:"/references/job-specification/result-path",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/job-specification/result-path.md",tags:[],version:"current",lastUpdatedAt:1697635948,formattedLastUpdatedAt:"Oct 18, 2023",frontMatter:{sidebar_label:"ResultPath"},sidebar:"documentationSidebar",previous:{title:"Resources",permalink:"/references/job-specification/resources"},next:{title:"SpecConfig",permalink:"/references/job-specification/spec-config"}},c={},l=[{value:"<code>ResultPath</code> Parameters:",id:"resultpath-parameters",level:2}],p={toc:l},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resultpath-specification"},"ResultPath Specification"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ResultPath")," denotes a specific location within a ",(0,a.kt)("inlineCode",{parentName:"p"},"Task")," that contains meaningful output or results. By specifying a ",(0,a.kt)("inlineCode",{parentName:"p"},"ResultPath"),", you can pinpoint which files or directories are essential and should be retained or published after the task's execution."),(0,a.kt)("h2",{id:"resultpath-parameters"},(0,a.kt)("inlineCode",{parentName:"h2"},"ResultPath")," Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Name"),": A descriptive label or identifier for the result, allowing for easier referencing and understanding of the output's nature or significance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Path"),": Specifies the exact location, either a file or a directory, within the task's environment where the result or output is stored. This ensures that after the task completes, the critical data at this path can be accessed, retained, or published as necessary."))))}f.isMDXComponent=!0}}]);