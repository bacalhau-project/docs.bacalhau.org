"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3391],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||r;return t?n.createElement(m,l(l({ref:a},s),{},{components:t})):n.createElement(m,l({ref:a},s))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9560:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_label:"Bacalhau Docker Image",sidebar_position:1,description:"How to use the Bacalhau Docker image"},l="Bacalhau Docker Image",i={unversionedId:"examples/workload-onboarding/bacalhau-docker-image/index",id:"examples/workload-onboarding/bacalhau-docker-image/index",title:"Bacalhau Docker Image",description:"How to use the Bacalhau Docker image",source:"@site/docs/examples/workload-onboarding/bacalhau-docker-image/index.md",sourceDirName:"examples/workload-onboarding/bacalhau-docker-image",slug:"/examples/workload-onboarding/bacalhau-docker-image/",permalink:"/examples/workload-onboarding/bacalhau-docker-image/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/bacalhau-docker-image/index.md",tags:[],version:"current",lastUpdatedAt:1686142259,formattedLastUpdatedAt:"Jun 7, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Bacalhau Docker Image",sidebar_position:1,description:"How to use the Bacalhau Docker image"},sidebar:"documentationSidebar",previous:{title:"Workload Onboarding",permalink:"/category/workload-onboarding"},next:{title:"Reading-From-Multiple-S3-Buckets",permalink:"/examples/workload-onboarding/Reading-From-Multiple-S3-Buckets/"}},u={},c=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Pull the Docker image",id:"pull-the-docker-image",level:2},{value:"Check version",id:"check-version",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Sumbit a Job With Output Files",id:"sumbit-a-job-with-output-files",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Need Support?",id:"need-support",level:2}],s={toc:c},p="wrapper";function h(e){let{components:a,...r}=e;return(0,o.kt)(p,(0,n.Z)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bacalhau-docker-image"},"Bacalhau Docker Image"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,o.kt)("p",null,"This example shows you how to run some common client-side Bacalhau tasks using the Bacalhau Docker image."),(0,o.kt)("h2",{id:"tdlr"},"TD;LR"),(0,o.kt)("p",null,"Running Docker image on Bacalhau"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,o.kt)("h2",{id:"pull-the-docker-image"},"Pull the Docker image"),(0,o.kt)("p",null,"The first step is to pull the Bacalhau Docker image from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/bacalhau-project/packages/container/package/bacalhau"},"Github container registry"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker pull ghcr.io/bacalhau-project/bacalhau:latest\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"latest: Pulling from bacalhau-project/bacalhau\nDigest: sha256:d80f1fe751886a29e0d5ae265a88abbfcd5c59e36247473b66aba93ea24f45aa\nStatus: Image is up to date for ghcr.io/bacalhau-project/bacalhau:latest\nghcr.io/bacalhau-project/bacalhau:latest\n")),(0,o.kt)("p",null,"You can also pull a specific version of the image, e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ghcr.io/bacalhau-project/bacalhau:v0.3.16\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},'Remember that the "latest" tag is just a string. It doesn\'t refer to the latest version of the Bacalhau client, it refers to an image that has the "latest" tag. Therefore, if your machine has already downloaded the "latest" image, it won\'t download it again. To force a download, you can use the ',(0,o.kt)("inlineCode",{parentName:"p"},"--no-cache")," flag.")),(0,o.kt)("h2",{id:"check-version"},"Check version"),(0,o.kt)("p",null,"Check the version of the Bacalhau client you are using."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker run -t ghcr.io/bacalhau-project/bacalhau:latest version\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Client Version: v0.3.29\nServer Version: v0.3.29\n")),(0,o.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,o.kt)("p",null,"To submit a bi to Bacalhau, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\ndocker run -t ghcr.io/bacalhau-project/bacalhau:latest \\\n    docker run \\\n        --id-only \\\n        --wait \\\n        ubuntu:latest -- \\\n            sh -c 'uname -a && echo \"Hello from Docker Bacalhau!\"'\n")),(0,o.kt)("p",null,"In this example, I run an ubuntu-based job that echo's some stuff."),(0,o.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--id-only......"),": Output only the job id")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ubuntu:latest.")," Ubuntu container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ghcr.io/bacalhau-project/bacalhau:latest "),": Name of the Bacalhau Docker image"))),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env: JOB_ID=738e0b39-8f73-4f01-ab46-245e8479ad65\n")),(0,o.kt)("p",null,"To print out the content of the Job ID, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash\ndocker run -t ghcr.io/bacalhau-project/bacalhau:latest \\\n    describe $JOB_ID \\\n        | grep -A 2 "stdout: |"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      stdout: |\n        Linux 914f42609298 5.19.0-1022-gcp #24~22.04.1-Ubuntu SMP Sun Apr 23 09:51:08 UTC 2023 x86_64 x86_64 x86_64 GNU/Linux\n        Hello from Docker Bacalhau!\n")),(0,o.kt)("h2",{id:"sumbit-a-job-with-output-files"},"Sumbit a Job With Output Files"),(0,o.kt)("p",null,"One inconvenience that you'll see is that you'll need to mount directories into the container to access files. This is because the container is running in a separate environment to your host machine. Let's take a look at the example below:"),(0,o.kt)("p",null,"The first part of the example should look familiar, except for the Docker commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\ndocker run -t ghcr.io/bacalhau-project/bacalhau:latest \\\n    docker run \\\n        --id-only \\\n        --wait \\\n        --gpu 1 \\\n        ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 -- \\\n            python main.py --o ./outputs --p "A Docker whale and a cod having a conversation about the state of the ocean"\n')),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"env: JOB_ID=bd141e1a-0f68-4a20-886f-c2b30c01b614\n")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker run -t ghcr.io/bacalhau-project/bacalhau:latest \\\n    list $JOB_ID \\\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker run -t ghcr.io/bacalhau-project/bacalhau:latest \\\n    describe $JOB_ID \\\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau get ${JOB_ID} --output-dir result\n")),(0,o.kt)("p",null,"After the download has finished you should see the following contents in results directory. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"png",src:t(1375).Z,width:"512",height:"512"})),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"If have questions or need support or guidance, please reach out to the ",(0,o.kt)("a",{parentName:"p",href:"https://filecoin.io/slack"},"Bacalhau team via Slack (#bacalhau channel)")))}h.isMDXComponent=!0},1375:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/index_25_0-07e2458df29809575f6b44eb5701788a.png"}}]);