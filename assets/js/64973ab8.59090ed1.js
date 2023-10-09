"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9124],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=r,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={},l="command: agent",o={unversionedId:"references/cli/agent/index",id:"references/cli/agent/index",title:"command: agent",description:"Description",source:"@site/docs/references/cli/agent/index.md",sourceDirName:"references/cli/agent",slug:"/references/cli/agent/",permalink:"/references/cli/agent/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/cli/agent/index.md",tags:[],version:"current",lastUpdatedAt:1696833973,formattedLastUpdatedAt:"Oct 9, 2023",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Commands CLI (Experimental)",permalink:"/references/cli/"},next:{title:"alive",permalink:"/references/cli/agent/alive/"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Available Commands",id:"available-commands",level:2},{value:"Flags",id:"flags",level:2},{value:"Global Flags",id:"global-flags",level:2}],s={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-agent"},"command: ",(0,r.kt)("inlineCode",{parentName:"h1"},"agent")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau agent")," command is a parent command that offers sub-commands to query information about the Bacalhau agent. This can be useful for debugging, monitoring, or managing the agent's behavior and health."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau agent [command]\n")),(0,r.kt)("h2",{id:"available-commands"},"Available Commands"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./alive"},"alive")),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Retrieves the agent's liveness and health information. This can be helpful to determine if the agent is running and healthy."),(0,r.kt)("li",{parentName:"ul"},"Usage:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau agent alive\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./node"},"node")),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Gathers the agent's node-related information. This might include details about the machine or environment where the agent is running, available resources, supported engines, etc."),(0,r.kt)("li",{parentName:"ul"},"Usage:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau agent node\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"./version"},"version")),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Retrieves the Bacalhau version of the agent. This can be beneficial for ensuring compatibility or checking for updates."),(0,r.kt)("li",{parentName:"ul"},"Usage:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau agent version\n")))))),(0,r.kt)("p",null,"For more detailed information on any of the sub-commands, you can use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau agent [command] --help\n")),(0,r.kt)("h2",{id:"flags"},"Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-h"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--help"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Displays help information for the ",(0,r.kt)("inlineCode",{parentName:"li"},"agent")," command.")))),(0,r.kt)("h2",{id:"global-flags"},"Global Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--api-host string"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Specifies the host used for RESTful communication between the client and server. The flag is disregarded if the ",(0,r.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_HOST")," environment variable is set."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap.production.bacalhau.org")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--api-port int"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Specifies the port for REST communication. If the ",(0,r.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_PORT")," environment variable is set, this flag will be ignored."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1234")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--log-mode logging-mode"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Sets the desired log format. Options are: ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"station"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"combined"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"event"),"."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"default")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--repo string"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Defines the path to the bacalhau repository."),(0,r.kt)("li",{parentName:"ul"},"Default: `",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.bacalhau"))))))}u.isMDXComponent=!0}}]);