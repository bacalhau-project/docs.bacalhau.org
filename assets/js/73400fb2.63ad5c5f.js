"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8569],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return t?n.createElement(m,l(l({ref:a},c),{},{components:t})):n.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=h;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},841:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_label:"Custom Containers",sidebar_position:11},l="How To Work With Custom Containers in Bacalhau",i={unversionedId:"examples/workload-onboarding/custom-containers/index",id:"examples/workload-onboarding/custom-containers/index",title:"How To Work With Custom Containers in Bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/workload-onboarding/custom-containers/index.md",sourceDirName:"examples/workload-onboarding/custom-containers",slug:"/examples/workload-onboarding/custom-containers/",permalink:"/examples/workload-onboarding/custom-containers/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/custom-containers/index.md",tags:[],version:"current",lastUpdatedAt:1696949965,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:11,frontMatter:{sidebar_label:"Custom Containers",sidebar_position:11},sidebar:"documentationSidebar",previous:{title:"Sparkov Data Generation",permalink:"/examples/workload-onboarding/Sparkov-Data-Generation/"},next:{title:"CUDA",permalink:"/examples/workload-onboarding/CUDA/"}},s={},u=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running Containers in Bacalhau",id:"running-containers-in-bacalhau",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:3},{value:"Building Your Own Custom Container For Bacalhau",id:"building-your-own-custom-container-for-bacalhau",level:2},{value:"Running Your Custom Container on Bacalhau",id:"running-your-custom-container-on-bacalhau",level:2}],c={toc:u},d="wrapper";function p(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-work-with-custom-containers-in-bacalhau"},"How To Work With Custom Containers in Bacalhau"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,o.kt)("p",null,"Bacalhau operates by executing jobs within containers. This example shows you how to build and use a custom docker container."),(0,o.kt)("h2",{id:"tdlr"},"TD;LR"),(0,o.kt)("p",null,"Running Custom Containers in Bacalhau"),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("li",{parentName:"ul"},"This example requires Docker. If you don't have Docker installed, you can install it from ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/"},"here"),". Docker commands will not work on hosted notebooks like Google Colab, but the Bacalhau commands will.")),(0,o.kt)("h2",{id:"running-containers-in-bacalhau"},"Running Containers in Bacalhau"),(0,o.kt)("p",null,"You're probably used to running docker commands to run a container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker run docker/whalesay cowsay sup old fashioned container run\n")),(0,o.kt)("p",null,"Bacalhau uses a syntax that is similar to docker and you can use the same containers. The main difference is that input and output data is passed to the container via IPFS, to enable planetary scale. In this example, it doesn't make too much difference except that we need to download the stdout."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," flag tells Bacalhau to wait for the job to finish before returning. This is useful in interactive sessions like this, but you would normally allow jobs to complete in the background and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," command to check on their status."),(0,o.kt)("p",null,"Another difference is that by default Bacalhau overwrites the default entry point for the container so you have to pass all shell commands as arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," command after the ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," flag."),(0,o.kt)("h3",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run --wait --id-only docker/whalesay -- bash -c 'cowsay hello web3 uber-run'\n")),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("p",null,"You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get ${JOB_ID}  --output-dir results\n")),(0,o.kt)("p",null,"Viewing your job output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat ./results/stdout\n")),(0,o.kt)("h2",{id:"building-your-own-custom-container-for-bacalhau"},"Building Your Own Custom Container For Bacalhau"),(0,o.kt)("p",null,"To use your own custom container, you must publish the container to a container registry that is accessible from the Bacalhau network. At this time, only public container registries are supported."),(0,o.kt)("p",null,"To demonstrate this, you will develop and build a simple custom container that comes from an old docker example. I remember seeing cowsay at a Docker conference about a decade ago. I think it's about time we brought it back to life and distribute it across the Bacalhau network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile cod.cow\n$the_cow = <<\"EOC\";\n   $thoughts\n    $thoughts\n                               ,,,,_\n                            \u250c\u03a6\u2593\u256c\u2593\u256c\u2593\u2593\u2593W      @\u2593\u2593\u2592,\n                           \u2560\u2593\u256c\u2593\u256c\u2563\u256c\u256c\u2593\u256c\u2593\u2593   \u2554\u2563\u256c\u256c\u2593\u256c\u2563\u2593,\n                    __,\u250c\u2553\u2550\u2560\u256c\u2560\u256c\u256c\u256c\xd1\u256c\u256c\u256c\xd1\u256c\u256c\xbc,\u2563\u256c\u256c\u2593\u256c\u256c\u2593\u256c\u2593\u2593\u2593\u2510        \u2554W_             ,\u03c6\u2593\u2593\n               ,\xab@\u2592\u2560\u2560\u2560\u2560\u2569\u255a\u2559\u2559\u2569\xdc\u255a\u255a\u255a\u255a\u2569\u2559\u2559\u255a\u2560\u2569\u255a\u255a\u255f\u2593\u2592\u2560\u2560\u256b\u2563\u256c\u256c\u256b\u256c\u2563\u2593,   _\u03c6\u256c\u2593\u256c\u256c\u2593,        ,\u03c6\u2563\u2593\u2593\u256c\u256c\n          _,\u03c6\xc6\u2569\u256c\u2569\u2559\u255a\u2569\u2591\u2559\u2559\u2591\u2591\u2569`=\u2591\u2559\u255a\xbb\xbb\u2566\u2591=\u2553\u2559\xdc1R\u2591\u2502\u2591\u255a\xdc\u2591\u2559\u2559\u255a\u2560\u2560\u2560\u2563\u2563\u256c\u2261\u03a6\u256c\u2580\u256c\u2563\u256c\u256c\u2593\u2593\u2593_   \u2553\u2584\u2593\u2593\u2593\u2593\u2593\u2593\u256c\u258c\n      _,\u03c6\u256c\xd1\u2569\u258c\u2590\u2588[\u2592\u2591\u2591\u2591\u2591R\u2591\u2591\u2580\u2591`,_`!R`````\u2559`-'\u255a\xdc\u2591\u2591\xdc\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2502\u2502\u2502\u2591\u255a\u255a\u2559\u255a\u2569\u2569\u2569\u2563\xd1\u2569\u2560\u2592\u2592\u2569\u2569\u2580\u2593\u2593\u2563\u2593\u2593\u256c\u2560\u258c\n     '\u255a\u2569\xdc\u2559\u2502\u2591\u2591\u2559\xd6\u2592\xdc\u2591\u2591\u2591H\u2591\u2591R \u2592\xa5\u2563\u2563@@@\u2593\u2593\u2593  := '`   `\u2591``````````````````````````]\u2593\u2593\u2593\u256c\u256c\u2560H\n       '\xac\u2550\u2584 `\\\u2591\u2559\xdc\u2591\u2560DjK` \xc5\xbb\xbb\u2559\u2563\u2593\u2593\u2593\u2593\u256c\xd1     -\xbb`       -`      `  ,;\u2553\u2584\u2554\u2557\u221e  ~\u2593\u2593\u2593\u2580\u2593\u2593\u256c\u256c\u256c\u258c\n             '^^^`   _\u2552\u0393   `\u2559\u2580\u2593\u2593\u2568                     _, \u207fD\u2563\u2593\u256c\u2563\u2593\u256c\u2593\u255c      \u2559\u256c\u2593\u2593\u256c\u256c\u2593\u2593\n                 ```\u2514                           _\u2553\u2584@\u2593\u2593\u2593\u255c   `\u255d\u256c\u2593\u2593\u2559           \xb2\u2563\u256c\u2593\u2593\n                        %\u03c6\u2584\u2553_             ~#\u2593\u2560\u2593\u2592\u256c\u2593\u256c\u2593\u2593^        `                \u2559\u2559\n                         `\u2563\u2593\u2593\u2593              \u2560\u256c\u2593\u256c\u2593\u256c\u2580`\n                           \u255a\u2593\u258c               '\u2568\u2580\u255c\nEOC\n")),(0,o.kt)("p",null,"Next, the Dockerfile adds the script and sets the entry point."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Dockerfile\nFROM debian:stretch\nRUN apt-get update && apt-get install -y cowsay\n# "cowsay" installs to /usr/games\nENV PATH $PATH:/usr/games\nRUN echo \'#!/bin/bash\\ncowsay "${@:1}"\' > /usr/bin/codsay && \\\n    chmod +x /usr/bin/codsay\nCOPY cod.cow /usr/share/cowsay/cows/default.cow\n')),(0,o.kt)("p",null,"Now let's build and test the container locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker build -t ghcr.io/bacalhau-project/examples/codsay:latest . 2> /dev/null\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker run --rm ghcr.io/bacalhau-project/examples/codsay:latest codsay I like swimming in data\n")),(0,o.kt)("p",null,"Once your container is working as expected then you should push it to a public container registry. In this example, I'm pushing to Github's container registry, but we'll skip the step below because you probably don't have permission.Remember that the Bacalhau nodes expect your container to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"linux/amd64")," architecture."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\n# docker buildx build --platform linux/amd64,linux/arm64 --push -t ghcr.io/bacalhau-project/examples/codsay:latest .\n")),(0,o.kt)("h2",{id:"running-your-custom-container-on-bacalhau"},"Running Your Custom Container on Bacalhau"),(0,o.kt)("p",null,"Now we're ready to submit a Bacalhau job using your custom container. This code runs a job, downloads the results, and prints the stdout."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command strips the default entry point, so don't forget to run your entry point in the command line arguments.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n    --wait \\\n    --id-only \\\n    ghcr.io/bacalhau-project/examples/codsay:v1.0.0 \\\n    -- bash -c 'codsay Look at all this data'\n")),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("p",null,"Download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau get")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get ${JOB_ID}  --output-dir results\n")),(0,o.kt)("p",null,"View your job output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat ./results/stdout\n")))}p.isMDXComponent=!0}}]);