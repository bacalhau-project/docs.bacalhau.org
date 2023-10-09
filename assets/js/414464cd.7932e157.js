"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Network"},a="Network Specification",s={unversionedId:"references/job-specification/network",id:"references/job-specification/network",title:"Network Specification",description:"The Network object offers a method to specify the networking requirements of a Task. It defines the scope and constraints of the network connectivity based on the demands of the task.",source:"@site/docs/references/job-specification/network.md",sourceDirName:"references/job-specification",slug:"/references/job-specification/network",permalink:"/references/job-specification/network",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/job-specification/network.md",tags:[],version:"current",lastUpdatedAt:1696833973,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{sidebar_label:"Network"},sidebar:"documentationSidebar",previous:{title:"Meta",permalink:"/references/job-specification/meta"},next:{title:"Resources",permalink:"/references/job-specification/resources"}},c={},p=[{value:"<code>Network</code> Parameters:",id:"network-parameters",level:2}],l={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"network-specification"},"Network Specification"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Network")," object offers a method to specify the networking requirements of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task"),". It defines the scope and constraints of the network connectivity based on the demands of the task."),(0,i.kt)("h2",{id:"network-parameters"},(0,i.kt)("inlineCode",{parentName:"h2"},"Network")," Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Type")," ",(0,i.kt)("inlineCode",{parentName:"li"},'(string: "None")'),": Indicates the network configuration's nature. There are several network modes available:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"None"),": This mode implies that the task does not necessitate any networking capabilities."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Full"),": Specifies that the task mandates unrestricted, raw IP networking without any imposed filters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP"),": This mode constrains the task to only require HTTP networking with specific domains. In this model:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The job specifier puts forward a job, stipulating the domain(s) it intends to communicate with."),(0,i.kt)("li",{parentName:"ul"},"The compute provider assesses the inherent risk of the job based on these domains and bids accordingly."),(0,i.kt)("li",{parentName:"ul"},"At runtime, the network traffic remains strictly confined to the designated domain(s).")))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A typical command for this might resemble:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"```\n")),(0,i.kt)("p",{parentName:"admonition"},"bacalhau docker run \u2014network=http \u2014domain=crates.io \u2014domain=github.com -i ipfs://Qmy1234myd4t4,dst=/code rust/compile"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"```\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  The primary risks for the compute provider center around possible violations of its terms, its hosting provider's terms, or even prevailing laws in its jurisdiction. This encompasses issues such as unauthorized access or distribution of illicit content and potential cyber-attacks.\n\n  Conversely, the job specifier's primary risk involves operating in a paid environment. External entities might seek to exploit this environment, for instance, through a compromised package download that initiates a cryptomining operation, depleting the allocated, prepaid job time. By limiting traffic strictly to the pre-specified domains, the potential for such cyber threats diminishes considerably.\n\n  While a compute provider might impose its limits through other means, having domains declared upfront allows it to selectively bid on jobs that it can execute without issues, improving the user experience for job specifiers.\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Domains")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(string[]: <optional>)"),": A list of domain strings, relevant primarily when the ",(0,i.kt)("inlineCode",{parentName:"li"},"Type")," is set to ",(0,i.kt)("strong",{parentName:"li"},"HTTP"),". It dictates the specific domains the task can communicate with over HTTP.")),(0,i.kt)("p",null,"Understanding and utilizing these configurations aptly can ensure that tasks are executed in an environment that aligns with their networking requirements, bolstering efficiency and security."))}d.isMDXComponent=!0}}]);