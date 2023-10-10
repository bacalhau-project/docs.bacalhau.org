"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"logs"},i="Command: job logs",o={unversionedId:"references/cli/job/logs/index",id:"references/cli/job/logs/index",title:"Command: job logs",description:"Description",source:"@site/docs/references/cli/job/logs/index.md",sourceDirName:"references/cli/job/logs",slug:"/references/cli/job/logs/",permalink:"/references/cli/job/logs/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/cli/job/logs/index.md",tags:[],version:"current",lastUpdatedAt:1696949965,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{sidebar_label:"logs"},sidebar:"documentationSidebar",previous:{title:"list",permalink:"/references/cli/job/list/"},next:{title:"run",permalink:"/references/cli/job/run/"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Flags",id:"flags",level:2},{value:"Global Flags",id:"global-flags",level:2},{value:"Examples",id:"examples",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"command-job-logs"},"Command: ",(0,r.kt)("inlineCode",{parentName:"h1"},"job logs")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau job logs")," command allows users to retrieve logs from a job that has been previously submitted. This command is useful for tracking and debugging the progress and state of a running or completed job."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau job logs [id] [flags]\n")),(0,r.kt)("h2",{id:"flags"},"Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-f"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--follow"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: This flag allows the user to follow the logs in real-time after fetching the current logs. It provides a continuous stream of log updates, similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"tail -f")," in Unix-like systems."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Display help information for the ",(0,r.kt)("inlineCode",{parentName:"li"},"logs")," command.")))),(0,r.kt)("h2",{id:"global-flags"},"Global Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--api-host string"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Specifies the host for the client and server to communicate through REST. This flag is disregarded if the ",(0,r.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_HOST")," environment variable is set."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap.production.bacalhau.org")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--api-port int"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Sets the port for RESTful communication between the client and server. If the ",(0,r.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_PORT")," environment variable is available, this flag is ignored."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"1234")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--log-mode logging-mode"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Determines the desired log format. Available options include ",(0,r.kt)("inlineCode",{parentName:"li"},"default"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"station"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"combined"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"event"),"."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"default")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--repo string"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Specifies the path to the bacalhau repository."),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.bacalhau"))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Display Logs for a Previously Submitted Job with Full ID"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau job logs j-51225160-807e-48b8-88c9-28311c7899e1\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Expected Output:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"[2023-09-24 09:01:32] INFO - Application started successfully.\n[2023-09-24 09:01:33] DEBUG - Initializing database connections.\n[2023-09-24 09:01:35] WARN - API rate limit approaching.\n[2023-09-24 09:02:01] ERROR - Failed to retrieve data from endpoint: /api/v1/data.\n[2023-09-24 09:05:00] INFO - Data sync completed with 4500 new records.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Follow Logs in Real-Time"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau job logs --follow j-51225160-807e-48b8-88c9-28311c7899e1\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Expected Output"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"[2023-09-24 11:30:02] INFO - User 'john_doe' logged in successfully.\n[2023-09-24 11:30:15] DEBUG - Fetching data from cache for key: userSettings_john_doe.\n[2023-09-24 11:31:05] WARN - High memory usage detected: 85% of allocated resources.\n... [Logs continue to appear in real-time] ...\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Display Logs Using a Shortened ID"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Command:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau job logs j-ebd9bf2f\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Expected Output:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"[2023-09-24 10:15:12] INFO - Application initialization sequence started.\n[2023-09-24 10:15:13] DEBUG - Loading configurations from /config/app.json.\n[2023-09-24 10:15:14] INFO - Connected to message broker successfully.\n[2023-09-24 10:16:00] ERROR - Failed to send email notification to user@example.com.\n")))))}u.isMDXComponent=!0}}]);