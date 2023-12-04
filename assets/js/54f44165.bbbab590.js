"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[152],{6549:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>T,contentTitle:()=>L,default:()=>E,frontMatter:()=>B,metadata:()=>D,toc:()=>V});var n=t(5893),r=t(1151),l=t(7294),o=t(6905),s=t(2466),i=t(6550),c=t(469),u=t(1980),h=t(7392),d=t(12);function b(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??function(e){return b(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,h.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function j(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=p(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[i,u]=j({queryString:t,groupId:n}),[h,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,d.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),f=(()=>{const e=i??h;return m({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var x=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:a,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),h=e=>{const a=e.currentTarget,t=c.indexOf(a),n=i[t].value;n!==r&&(u(a),l(n))},d=e=>{let a=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:l}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>c.push(e),onKeyDown:d,onClick:h,...l,className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function w(e){let{lazy:a,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function k(e){const a=f(e);return(0,n.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,n.jsx)(v,{...e,...a}),(0,n.jsx)(w,{...e,...a})]})}function y(e){const a=(0,x.Z)();return(0,n.jsx)(k,{...e,children:b(e.children)},String(a))}const I={tabItem:"tabItem_Ymn6"};function C(e){let{children:a,hidden:t,className:r}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)(I.tabItem,r),hidden:t,children:a})}const B={sidebar_label:"Installation",sidebar_position:2},L="Getting Started with Bacalhau",D={id:"getting-started/installation",title:"Getting Started with Bacalhau",description:"In this tutorial, you'll learn how to install and run a job with the Bacalhau client using the Bacalhau CLI or Docker.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/installation.md",tags:[],version:"current",lastUpdatedAt:1701669642,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Installation",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Architecture",permalink:"/getting-started/architecture"},next:{title:"Onboard Docker Workload",permalink:"/getting-started/docker-workload-onboarding"}},T={},V=[{value:"The Bacalhau Client",id:"the-bacalhau-client",level:2},{value:"Install the Bacalhau CLI",id:"install-the-bacalhau-cli",level:3},{value:"Verify the Installation",id:"verify-the-installation",level:3},{value:"Let&#39;s submit a Hello World job",id:"lets-submit-a-hello-world-job",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Where to go next?",id:"where-to-go-next",level:2},{value:"Need Support?",id:"need-support",level:2}];function S(e){const a={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"getting-started-with-bacalhau",children:"Getting Started with Bacalhau"}),"\n",(0,n.jsx)(a.p,{children:"In this tutorial, you'll learn how to install and run a job with the Bacalhau client using the Bacalhau CLI or Docker."}),"\n",(0,n.jsx)(a.h2,{id:"the-bacalhau-client",children:"The Bacalhau Client"}),"\n",(0,n.jsx)(a.p,{children:"The Bacalhau client is a command-line interface (CLI) that allows you to submit jobs to the Bacalhau.  The Bacalhau client is available for Linux, macOS, and Windows. You can also run the Bacalhau client in a Docker container."}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["By default, you will submit to the Bacalhau public network, but the same CLI can be configured to submit to a private Bacalhau network. For more information, please read Running ",(0,n.jsx)(a.a,{href:"../next-steps/private-cluster",children:"Bacalhau on a Private Network"}),"."]})}),"\n",(0,n.jsx)(a.h3,{id:"install-the-bacalhau-cli",children:"Install the Bacalhau CLI"}),"\n",(0,n.jsxs)(a.p,{children:["You can install or update the Bacalhau CLI or pull a Docker image by running the commands in a terminal.\nYou may need sudo mode or root password to install the local Bacalhau binary to ",(0,n.jsx)(a.code,{children:"/usr/local/bin"}),":"]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["Using the ",(0,n.jsx)(a.strong,{children:"CLI"}),": Windows users can download the ",(0,n.jsx)(a.a,{href:"https://github.com/bacalhau-project/bacalhau/releases",children:"latest release tarball from Github"})," and extract ",(0,n.jsx)(a.code,{children:"bacalhau.exe"})," to anywhere on the PATH."]})}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["To run a specific version of Bacalhau using Docker, use the command docker run -it ghcr.io/bacalhau-project/bacalhau",":v1",'.0.3, where "v1.0.3" is the version you want to run; note that the "latest" tag will not re-download the image if you have an older version. For more information on running the Docker image, check out the ',(0,n.jsx)(a.a,{href:"/examples/workload-onboarding/bacalhau-docker-image/",children:"Bacalhau docker image example"}),"."]})}),"\n","\n","\n",(0,n.jsxs)(y,{defaultValue:"CLI",values:[{label:"CLI",value:"CLI"},{label:"Docker",value:"Docker"}],children:[(0,n.jsx)(C,{value:"CLI",children:(0,n.jsxs)(a.p,{children:["curl -sL ",(0,n.jsx)(a.a,{href:"https://get.bacalhau.org/install.sh",children:"https://get.bacalhau.org/install.sh"})," | bash"]})}),(0,n.jsx)(C,{value:"Docker",children:(0,n.jsxs)(a.p,{children:["docker image rm -f ghcr.io/bacalhau-project/bacalhau",":latest"," # Remove old image if it exists\ndocker pull ghcr.io/bacalhau-project/bacalhau",":latest"]})})]}),"\n",(0,n.jsx)(a.h3,{id:"verify-the-installation",children:"Verify the Installation"}),"\n",(0,n.jsxs)(a.p,{children:["To run and Bacalhau client command with Docker, prefix it with ",(0,n.jsx)(a.code,{children:"docker run ghcr.io/bacalhau-project/bacalhau:latest"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["To verify installation and check the version of the client and server, use the ",(0,n.jsx)(a.code,{children:"version"})," command, you can run the command:"]}),"\n",(0,n.jsxs)(y,{defaultValue:"CLI",values:[{label:"CLI",value:"CLI"},{label:"Docker",value:"Docker"}],children:[(0,n.jsx)(C,{value:"CLI",children:(0,n.jsx)(a.p,{children:"bacalhau version"})}),(0,n.jsx)(C,{value:"Docker",children:(0,n.jsxs)(a.p,{children:["docker run -it ghcr.io/bacalhau-project/bacalhau",":latest"," version"]})})]}),"\n",(0,n.jsxs)(a.p,{children:["If you're wondering which server is being used, the Bacalhau Project has a ",(0,n.jsx)(a.a,{href:"https://docs.bacalhau.org/#our-vision",children:"public Bacalhau server network"})," that's shared with the community. This server allows you to launch your jobs from your computer without maintaining a compute cluster on your own."]}),"\n",(0,n.jsx)(a.h2,{id:"lets-submit-a-hello-world-job",children:"Let's submit a Hello World job"}),"\n",(0,n.jsxs)(a.p,{children:["To submit a job in Bacalhau, we will use the ",(0,n.jsx)(a.code,{children:"bacalhau docker run"})," command. Let's take a quick look at its syntax:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.code,{children:"bacalhau docker run [FLAGS] IMAGE[:TAG] [COMMAND]"})}),"\n",(0,n.jsxs)(a.p,{children:["The command below submits a Hello World job that runs an ",(0,n.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Echo_(command)",children:"echo"})," program within an ",(0,n.jsx)(a.a,{href:"https://hub.docker.com/_/ubuntu",children:"Ubuntu container"}),":"]}),"\n",(0,n.jsxs)(y,{defaultValue:"CLI",values:[{label:"CLI",value:"CLI"},{label:"Docker",value:"Docker"}],children:[(0,n.jsx)(C,{value:"CLI",children:(0,n.jsx)(a.p,{children:"bacalhau docker run ubuntu echo Hello World"})}),(0,n.jsx)(C,{value:"Docker",children:(0,n.jsxs)(a.p,{children:["docker run -t ghcr.io/bacalhau-project/bacalhau",":latest"," ",(0,n.jsx)(a.br,{}),"\n","docker run ",(0,n.jsx)(a.br,{}),"\n","--id-only ",(0,n.jsx)(a.br,{}),"\n","--wait ",(0,n.jsx)(a.br,{}),"\n","ubuntu",":latest"," -- ",(0,n.jsx)(a.br,{}),"\n","sh -c 'uname -a && echo \"Hello from Docker Bacalhau!\"'"]})})]}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["While this command is designed to resemble Docker's run command which you may be familiar with, Bacalhau introduces a whole new set of ",(0,n.jsx)(a.a,{href:"https://docs.bacalhau.org/all-flags#docker-run",children:"flags (see CLI Reference)"})," to support its computing model."]})}),"\n",(0,n.jsx)(a.p,{children:"After the above command is run, the job is submitted to the public network, which processes the job and Bacalhau prints out the related job id:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"Job successfully submitted. Job ID: 3b39baee-5714-4f17-aa71-1f5824665ad6\nChecking job status...\n"})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"job_id"})," above is shown in its full form. For convenience, you can use the shortened version, in this case: ",(0,n.jsx)(a.code,{children:"3b39baee"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"checking-the-state-of-your-jobs",children:"Checking the State of your Jobs"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Job status"}),": You can check the status of the job using ",(0,n.jsx)(a.code,{children:"bacalhau list"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"bacalhau list --id-filter 3b39baee\n"})}),"\n",(0,n.jsxs)(a.p,{children:["When it says ",(0,n.jsx)(a.code,{children:"Completed"}),", that means the job is done, and we can get the results."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:" CREATED   ID        JOB                      STATE      VERIFIED  COMPLETED\n 07:20:32  3b39baee  Docker ubuntu echo H...  Published            /ipfs/bafybeidu4zm6w...\n"})}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:["For a comprehensive list of flags you can pass to the list command check out ",(0,n.jsx)(a.a,{href:"../all-flags#list",children:"the related CLI Reference page"}),"."]})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Job information"}),": You can find out more information about your job by using ",(0,n.jsx)(a.code,{children:"bacalhau describe"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"bacalhau describe 3b39baee\n"})}),"\n",(0,n.jsx)(a.p,{children:"This outputs all information about the job, including stdout, stderr, where the job was scheduled, and so on."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Job download"}),": You can download your job results directly by using ",(0,n.jsx)(a.code,{children:"bacalhau get"}),". In the command below, we created a directory called ",(0,n.jsx)(a.code,{children:"myfolder"})," and download our job output to be stored in that directory."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"bacalhau get 3b39baee\n"})}),"\n",(0,n.jsx)(a.p,{children:"After the download has finished you should see the following contents in the results directory."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"$ tree job-3b39baee\njob-3b39baee\n\u251c\u2500\u2500 exitCode\n\u251c\u2500\u2500 outputs\n\u251c\u2500\u2500 stderr\n\u2514\u2500\u2500 stdout\n"})}),"\n",(0,n.jsx)(a.h2,{id:"viewing-your-job-output",children:"Viewing your Job Output"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"$ cat job-3b39baee/stdout\n"})}),"\n",(0,n.jsxs)(a.p,{children:["That should print out the string ",(0,n.jsx)(a.code,{children:"Hello World"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["With that, you have just successfully run a job on the Bacalhau network! ","\ud83d\udc1f"]}),"\n",(0,n.jsx)(a.h2,{id:"where-to-go-next",children:"Where to go next?"}),"\n",(0,n.jsx)(a.p,{children:"Here are a few resources that provide a deeper dive into running jobs with Bacalhau:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/getting-started/docker-workload-onboarding",children:"How to run an existing workload on Bacalhau"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/examples/data-engineering/image-processing/",children:"Walk through a more data intensive demo"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"/all-flags",children:"Check out the Bacalhau CLI Reference page"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"need-support",children:"Need Support?"}),"\n",(0,n.jsxs)(a.p,{children:["If have questions or need support or guidance, please reach out to the ",(0,n.jsx)(a.a,{href:"https://bit.ly/bacalhau-project-slack",children:"Bacalhau team via Slack (#bacalhau channel)"})]})]})}function E(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>o});var n=t(7294);const r={},l=n.createContext(r);function o(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);