"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[152],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,m=d["".concat(u,".").concat(p)]||d[p]||h[p]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7746:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>E,contentTitle:()=>T,default:()=>L,frontMatter:()=>C,metadata:()=>D,toc:()=>x});var n=a(7462),r=a(7294),o=a(3905),l=a(6010),i=a(2466),u=a(6550),s=a(1980),c=a(7392),d=a(12);function h(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??h(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=b({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=u??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,o]),tabValues:o}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),n=s[a].value;n!==o&&(d(t),u(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}const I={tabItem:"tabItem_Ymn6"};function j(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(I.tabItem,n),hidden:a},t)}const C={sidebar_label:"Installation",sidebar_position:2},T="Getting Started with Bacalhau",D={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Getting Started with Bacalhau",description:"In this tutorial, you'll learn how to install and run a job with the Bacalhau client using the Bacalhau CLI or Docker.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedAt:1687266311,formattedLastUpdatedAt:"Jun 20, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Installation",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Architecture",permalink:"/getting-started/architecture"},next:{title:"Onboard Docker Workload",permalink:"/getting-started/docker-workload-onboarding"}},E={},x=[{value:"The Bacalhau Client",id:"the-bacalhau-client",level:2},{value:"Install the Bacalhau CLI",id:"install-the-bacalhau-cli",level:3},{value:"Verify the Installation",id:"verify-the-installation",level:3},{value:"Let&#39;s submit a Hello World job",id:"lets-submit-a-hello-world-job",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Where to go next?",id:"where-to-go-next",level:2},{value:"Need Support?",id:"need-support",level:2}],O={toc:x},B="wrapper";function L(e){let{components:t,...a}=e;return(0,o.kt)(B,(0,n.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-bacalhau"},"Getting Started with Bacalhau"),(0,o.kt)("p",null,"In this tutorial, you'll learn how to install and run a job with the Bacalhau client using the Bacalhau CLI or Docker."),(0,o.kt)("h2",{id:"the-bacalhau-client"},"The Bacalhau Client"),(0,o.kt)("p",null,"The Bacalhau client is a command-line interface (CLI) that allows you to submit jobs to the Bacalhau network. The Bacalhau client is available for Linux, macOS, and Windows. You can also run the Bacalhau client in a Docker container. "),(0,o.kt)("h3",{id:"install-the-bacalhau-cli"},"Install the Bacalhau CLI"),(0,o.kt)("p",null,"You can install or update the Bacalhau CLI or pull a Docker image by running the commands in a terminal.\nYou may need sudo mode or root password to install the local Bacalhau binary to ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),":"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Using the ",(0,o.kt)("strong",{parentName:"p"},"CLI"),": Windows users can download the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/releases"},"latest release tarball from Github")," and extract ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau.exe")," to anywhere on the PATH. ")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'To run a specific version of Bacalhau using Docker, use the command docker run -it ghcr.io/bacalhau-project/bacalhau:v0.3.23, where "v0.3.23" is the version you want to run; note that the "latest" tag will not re-download the image if you have an older version. For more information on running the Docker image, check out the ',(0,o.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/bacalhau-docker-image/"},"Bacalhau docker image example"),".")),(0,o.kt)(N,{defaultValue:"CLI",values:[{label:"CLI",value:"CLI"},{label:"Docker",value:"Docker"}],mdxType:"Tabs"},(0,o.kt)(j,{value:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -sL https://get.bacalhau.org/install.sh | bash\n"))),(0,o.kt)(j,{value:"Docker",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker image rm -f ghcr.io/bacalhau-project/bacalhau:latest # Remove old image if it exists\ndocker pull ghcr.io/bacalhau-project/bacalhau:latest\n")))),(0,o.kt)("h3",{id:"verify-the-installation"},"Verify the Installation"),(0,o.kt)("p",null,"To run and Bacalhau client command with Docker, prefix it with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run ghcr.io/bacalhau-project/bacalhau:latest"),". "),(0,o.kt)("p",null,"To verify installation and check the version of the client and server, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," command, you can run the command:"),(0,o.kt)(N,{defaultValue:"CLI",values:[{label:"CLI",value:"CLI"},{label:"Docker",value:"Docker"}],mdxType:"Tabs"},(0,o.kt)(j,{value:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau version\n"))),(0,o.kt)(j,{value:"Docker",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it ghcr.io/bacalhau-project/bacalhau:latest version\n")))),(0,o.kt)("p",null,"If you're wondering which server is being used, the Bacalhau Project has a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/#our-vision"},"public Bacalhau server network")," that's shared with the community. This server allows you to launch your jobs from your computer without maintaining a compute cluster on your own."),(0,o.kt)("h2",{id:"lets-submit-a-hello-world-job"},"Let's submit a Hello World job"),(0,o.kt)("p",null,"To submit a job in Bacalhau, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. Let's take a quick look at its syntax:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run [FLAGS] IMAGE[:TAG] [COMMAND]")),(0,o.kt)("p",null,"The command below submits a Hello World job that runs an ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Echo_(command)"},"echo")," program within an ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/ubuntu"},"Ubuntu container"),":"),(0,o.kt)(N,{defaultValue:"CLI",values:[{label:"CLI",value:"CLI"},{label:"Docker",value:"Docker"}],mdxType:"Tabs"},(0,o.kt)(j,{value:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau docker run ubuntu echo Hello World\n"))),(0,o.kt)(j,{value:"Docker",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%%bash --out job_id\ndocker run -t ghcr.io/bacalhau-project/bacalhau:latest \\\ndocker run \\\n    --id-only \\\n    --wait \\\n    ubuntu:latest -- \\\n        sh -c 'uname -a && echo \"Hello from Docker Bacalhau!\"'\n")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"While this command is designed to resemble Docker's run command which you may be familiar with, Bacalhau introduces a whole new set of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags#docker-run"},"flags (see CLI Reference)")," to support its computing model.")),(0,o.kt)("p",null,"After the above command is run, the job is submitted to the public network, which processes the job and Bacalhau prints out the related job id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Job successfully submitted. Job ID: 3b39baee-5714-4f17-aa71-1f5824665ad6\nChecking job status...\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id")," above is shown in its full form. For convenience, you can use the shortened version, in this case: ",(0,o.kt)("inlineCode",{parentName:"p"},"3b39baee"),". For ease, we store the ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id")," in an environment variable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ export JOB_ID=3b39baee # make sure to use the right job id from the docker run command\n")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID}\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," CREATED   ID        JOB                      STATE      VERIFIED  COMPLETED\n 07:20:32  3b39baee  Docker ubuntu echo H...  Published            /ipfs/bafybeidu4zm6w...\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For a comprehensive list of flags you can pass to the list command check out ",(0,o.kt)("a",{parentName:"p",href:"../all-flags#list"},"the related CLI Reference page"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory called ",(0,o.kt)("inlineCode",{parentName:"li"},"myfolder")," and download our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd Downloads\n$ mkdir -p /tmp/myfolder\n$ cd /tmp/myfolder\n\nbacalhau get $JOB_ID\n")),(0,o.kt)("p",null,"After the download has finished you should see the following contents in results directory"),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"Each job creates 3 subfolders: the ",(0,o.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,o.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,o.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat /tmp/myfolder/job-id/stdout\n")),(0,o.kt)("p",null,"That should print out the string ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello World"),"."),(0,o.kt)("p",null,"With that, you have just successfully run a job on the Bacalhau network! \ud83d\udc1f"),(0,o.kt)("h2",{id:"where-to-go-next"},"Where to go next?"),(0,o.kt)("p",null,"Here are a few resources that provides a deeper dive into running jobs with Bacalhau:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/getting-started/docker-workload-onboarding"},"How to run an existing workload on Bacalhau")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/examples/data-engineering/image-processing/"},"Walk through a more data intensive demo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/all-flags"},"Check out the Bacalhau CLI Reference page"))),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"If have questions or need support or guidance, please reach out to the ",(0,o.kt)("a",{parentName:"p",href:"https://bit.ly/bacalhau-project-slack"},"Bacalhau team via Slack (#bacalhau channel)")))}L.isMDXComponent=!0}}]);