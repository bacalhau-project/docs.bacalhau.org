"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},587:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"stop"},o="Command: job stop",l={unversionedId:"references/cli/job/stop/index",id:"references/cli/job/stop/index",title:"Command: job stop",description:"Description",source:"@site/docs/references/cli/job/stop/index.md",sourceDirName:"references/cli/job/stop",slug:"/references/cli/job/stop/",permalink:"/references/cli/job/stop/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/cli/job/stop/index.md",tags:[],version:"current",lastUpdatedAt:1696949965,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{sidebar_label:"stop"},sidebar:"documentationSidebar",previous:{title:"run",permalink:"/references/cli/job/run/"},next:{title:"command: node",permalink:"/references/cli/node/"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Flags",id:"flags",level:2},{value:"Global Flags",id:"global-flags",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-job-stop"},"Command: ",(0,r.kt)("inlineCode",{parentName:"h1"},"job stop")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau job stop")," command allows users to terminate a previously submitted job. This is useful in scenarios where there's a need to halt a running job, perhaps due to misconfiguration or changed priorities."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau job stop [id] [flags]\n")),(0,r.kt)("h2",{id:"flags"},"Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--quiet"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: If provided, the command will not display any output, neither to the standard output (stdout) nor to the standard error (stderr)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Displays help information for the ",(0,r.kt)("inlineCode",{parentName:"li"},"stop")," command.")))),(0,r.kt)("h2",{id:"global-flags"},"Global Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--api-host string"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Specifies the host used for RESTful communication between the client and server. The flag is disregarded if ",(0,r.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_HOST")," environment variable is set."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap.production.bacalhau.org")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--api-port int"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Determines the port for REST communication. If ",(0,r.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_PORT")," environment variable is set, this flag will be ignored."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1234")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--log-mode logging-mode"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Selects the desired log format. Options include: ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"station"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"combined"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"event"),"."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"default")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--repo string"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Defines the path to the bacalhau repository."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.bacalhau"))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stop a Specific Job"),":"),(0,r.kt)("p",{parentName:"li"},"If you wish to halt the execution of a job, you can utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"stop")," command. Here's how you can achieve that:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau job stop j-10eb97de-14cd-4db4-96ec-561bb943309a\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Expected Output:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"Checking job status\n\n    Connecting to network  ................  done \u2705  0.0s\n      Verifying job state  ................  done \u2705  0.2s\n              Stopping job ................  done \u2705  0.1s\n\nJob stop successfully submitted with evaluation ID: 397fd425-8b1a-491e-952a-0632492e7ece\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Silently Stop a Job"),":"),(0,r.kt)("p",{parentName:"li"},"If you prefer to terminate a job without seeing any verbose feedback or messages, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--quiet")," option can be used."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau job stop j-63b5ec0c-b5bf-4398-a152-b46c07abe52a --quiet\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Expected Output:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"[No output displayed as the operation is run quietly.]\n")))))}u.isMDXComponent=!0}}]);