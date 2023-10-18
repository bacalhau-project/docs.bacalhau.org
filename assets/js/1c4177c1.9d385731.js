"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"node"},l="Command: agent node",o={unversionedId:"references/cli/agent/node/index",id:"references/cli/agent/node/index",title:"Command: agent node",description:"Description",source:"@site/docs/references/cli/agent/node/index.md",sourceDirName:"references/cli/agent/node",slug:"/references/cli/agent/node/",permalink:"/references/cli/agent/node/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/cli/agent/node/index.md",tags:[],version:"current",lastUpdatedAt:1697635948,formattedLastUpdatedAt:"Oct 18, 2023",frontMatter:{sidebar_label:"node"},sidebar:"documentationSidebar",previous:{title:"alive",permalink:"/references/cli/agent/alive/"},next:{title:"version",permalink:"/references/cli/agent/version/"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Flags",id:"flags",level:2},{value:"Global Flags",id:"global-flags",level:2},{value:"Examples",id:"examples",level:2}],u={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-agent-node"},"Command: ",(0,r.kt)("inlineCode",{parentName:"h1"},"agent node")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau agent node")," command retrieves information about the agent's node, providing insights into the agent's environment and aiding in debugging."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau agent node [flags]\n")),(0,r.kt)("h2",{id:"flags"},"Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Displays help information for the ",(0,r.kt)("inlineCode",{parentName:"li"},"node")," sub-command."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--output format"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Defines the output format (either JSON or YAML)."),(0,r.kt)("li",{parentName:"ul"},"Options: ",(0,r.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"yaml")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"yaml")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--pretty"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Beautifies the output when using JSON or YAML formats.")))),(0,r.kt)("h2",{id:"global-flags"},"Global Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--api-host string"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The host for REST communication. Overrides the ",(0,r.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_HOST")," environment variable."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap.production.bacalhau.org")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--api-port int"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The port for REST communication. Overridden if ",(0,r.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_PORT")," environment variable is set."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1234")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--log-mode logging-mode"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specifies the log format. Choices are: ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"station"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"combined"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"event"),"."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"default")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--repo string"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Path to the bacalhau repository."),(0,r.kt)("li",{parentName:"ul"},"Default: `",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.bacalhau"))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Retrieve Node Information in Default Format (YAML)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau agent node\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Retrieve Node Information in JSON Format")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau agent node --output json\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Retrieve Node Information in Pretty-printed JSON Format")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau agent node --output json --pretty\n")))))}d.isMDXComponent=!0}}]);