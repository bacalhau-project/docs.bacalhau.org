"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3869],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=o,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1209:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"CUDA",sidebar_position:2},l="Run CUDA programs on Bacalhau",i={unversionedId:"examples/workload-onboarding/CUDA/index",id:"examples/workload-onboarding/CUDA/index",title:"Run CUDA programs on Bacalhau",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/CUDA/index.md",sourceDirName:"examples/workload-onboarding/CUDA",slug:"/examples/workload-onboarding/CUDA/",permalink:"/examples/workload-onboarding/CUDA/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/CUDA/index.md",tags:[],version:"current",lastUpdatedAt:1680108572,formattedLastUpdatedAt:"Mar 29, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"CUDA",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Bacalhau Docker Image",permalink:"/examples/workload-onboarding/bacalhau-docker-image/"},next:{title:"Custom Containers",permalink:"/examples/workload-onboarding/custom-containers/"}},u={},s=[{value:"What is CUDA",id:"what-is-cuda",level:3},{value:"Advantage of GPU over CPU",id:"advantage-of-gpu-over-cpu",level:3},{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running CUDA locally",id:"running-cuda-locally",level:2},{value:"Viewing the programs",id:"viewing-the-programs",level:3},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of Bacalhau Commands",id:"structure-of-bacalhau-commands",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-cuda-programs-on-bacalhau"},"Run CUDA programs on Bacalhau"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/CUDA/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/CUDA/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,o.kt)("h3",{id:"what-is-cuda"},"What is CUDA"),(0,o.kt)("p",null,"In this tutorial, we will look at how to run CUDA programs on Bacalhau. CUDA (Compute Unified Device Architecture) is an extension of C/C++ programming. It is a parallel computing platform and programming model created by NVIDIA. It helps developers speed up their applications by harnessing the power of GPU accelerators."),(0,o.kt)("p",null,"In addition to accelerating high performance computing (HPC) and research applications, CUDA has also been widely adopted across consumer and industrial ecosystems. CUDA also makes it easy for developers to take advantage of all the latest GPU architecture innovations"),(0,o.kt)("h3",{id:"advantage-of-gpu-over-cpu"},"Advantage of GPU over CPU"),(0,o.kt)("p",null,"Architecturally, the CPU is composed of just a few cores with lots of cache memory that can handle a few software threads at a time. In contrast, a GPU is composed of hundreds of cores that can handle thousands of threads simultaneously."),(0,o.kt)("p",null,"Computations like matrix multiplication could be done much faster on GPU than on CPU"),(0,o.kt)("h2",{id:"tdlr"},"TD;LR"),(0,o.kt)("p",null,"Running CUDA programs on Bacalhau"),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("h2",{id:"running-cuda-locally"},"Running CUDA locally"),(0,o.kt)("p",null,"You'll need to have the following installed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NVIDIA GPU"),(0,o.kt)("li",{parentName:"ul"},"CUDA drivers installed"),(0,o.kt)("li",{parentName:"ul"},"nvcc installed")),(0,o.kt)("p",null,"Checking if nvcc is installed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!nvcc --version\n")),(0,o.kt)("p",null,"Downloading the programs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nmkdir inputs outputs\nwget -P inputs https://raw.githubusercontent.com/tristanpenman/cuda-examples/master/00-hello-world.cu\nwget -P inputs https://raw.githubusercontent.com/tristanpenman/cuda-examples/master/02-cuda-hello-world-faster.cu\n")),(0,o.kt)("h3",{id:"viewing-the-programs"},"Viewing the programs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat inputs/00-hello-world.cu\n")),(0,o.kt)("p",null,"This is a standard c++ program which uses loops which are not parallizable so it doesn't use the most of the processing power of the GPU"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%timeit\n!nvcc -o ./outputs/hello ./inputs/00-hello-world.cu; ./outputs/hello\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!cat inputs/02-cuda-hello-world-faster.cu\n")),(0,o.kt)("p",null,"Instead of looping we use Vector addition using CUDA and allocate the memory in advance and copy the memory to the GPU\nusing cudaMemcpy so that it can utilize the HBM (High Bandwidth memory of the GPU)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"!rm -rf outputs/hello\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%timeit\n!nvcc --expt-relaxed-constexpr  -o ./outputs/hello ./inputs/02-cuda-hello-world-faster.cu; ./outputs/hello\n")),(0,o.kt)("p",null,"It takes around 8.67s to run\n00-hello-world.cu\nwhile it takes 1.39s to run\n02-cuda-hello-world-faster.cu"),(0,o.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,o.kt)("p",null,"To submit a job, run the following Bacalhau command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\n bacalhau docker run \\\n--gpu 1 \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n -u https://raw.githubusercontent.com/tristanpenman/cuda-examples/master/02-cuda-hello-world-faster.cu \\\n --id-only \\\n --wait \\\n nvidia/cuda:11.2.0-cudnn8-devel-ubuntu18.04 \\\n-- /bin/bash -c 'nvcc --expt-relaxed-constexpr  -o ./outputs/hello ./inputs/02-cuda-hello-world-faster.cu; ./outputs/hello '\n")),(0,o.kt)("h2",{id:"structure-of-bacalhau-commands"},"Structure of Bacalhau Commands"),(0,o.kt)("p",null,"Let's look closely at the command above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-u < Link-To-The-Program >"),": The program is mounted by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-u")," flag you can specify the link there")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"nvidia/cuda:11.2.0-cudnn8-devel-ubuntu18.04"),": Docker container for executing CUDA programs you need to choose the right CUDA docker container the container should have the tag of devel in them")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"nvcc --expt-relaxed-constexpr  -o ./outputs/hello ./inputs/02-cuda-hello-world-faster.cu"),": Compilation using the nvcc compiler and save it to the outputs directory as hello")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"./outputs/hello"),": Execution hello binary: ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can combine compilation and execution commands. Note that there is ",(0,o.kt)("inlineCode",{parentName:"p"},";")," between the commands:\n",(0,o.kt)("inlineCode",{parentName:"p"},"-- /bin/bash -c 'nvcc --expt-relaxed-constexpr  -o ./outputs/hello ./inputs/02-cuda-hello-world-faster.cu; ./outputs/hello ")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"When a job is submitted, Bacalhau prints out the related `job_id`. We store that in an environment variable so that we can reuse it later on.\n")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"Each job creates 3 subfolders: the ",(0,o.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,o.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,o.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/combined_results/stdout # displays the contents of the file\n")))}d.isMDXComponent=!0}}]);