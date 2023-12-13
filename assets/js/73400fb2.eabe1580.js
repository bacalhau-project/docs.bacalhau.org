"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8569],{4001:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=a(5893),t=a(1151);const s={sidebar_label:"Custom Containers",sidebar_position:11},r="How To Work With Custom Containers in Bacalhau",i={id:"examples/workload-onboarding/custom-containers/index",title:"How To Work With Custom Containers in Bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/workload-onboarding/custom-containers/index.md",sourceDirName:"examples/workload-onboarding/custom-containers",slug:"/examples/workload-onboarding/custom-containers/",permalink:"/examples/workload-onboarding/custom-containers/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/custom-containers/index.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:11,frontMatter:{sidebar_label:"Custom Containers",sidebar_position:11},sidebar:"documentationSidebar",previous:{title:"Sparkov Data Generation",permalink:"/examples/workload-onboarding/Sparkov-Data-Generation/"},next:{title:"CUDA",permalink:"/examples/workload-onboarding/CUDA/"}},c={},l=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running Containers in Bacalhau",id:"running-containers-in-bacalhau",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:3},{value:"Building Your Own Custom Container For Bacalhau",id:"building-your-own-custom-container-for-bacalhau",level:2},{value:"Running Your Custom Container on Bacalhau",id:"running-your-custom-container-on-bacalhau",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"how-to-work-with-custom-containers-in-bacalhau",children:"How To Work With Custom Containers in Bacalhau"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/bacalhau-project/bacalhau",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"})})}),"\n",(0,o.jsx)(n.p,{children:"Bacalhau operates by executing jobs within containers. This example shows you how to build and use a custom docker container."}),"\n",(0,o.jsx)(n.h2,{id:"tdlr",children:"TD;LR"}),"\n",(0,o.jsx)(n.p,{children:"Running Custom Containers in Bacalhau"}),"\n",(0,o.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To get started, you need to install the Bacalhau client, see more information ",(0,o.jsx)(n.a,{href:"https://docs.bacalhau.org/getting-started/installation",children:"here"})]}),"\n",(0,o.jsxs)(n.li,{children:["This example requires Docker. If you don't have Docker installed, you can install it from ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/install/",children:"here"}),". Docker commands will not work on hosted notebooks like Google Colab, but the Bacalhau commands will."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"running-containers-in-bacalhau",children:"Running Containers in Bacalhau"}),"\n",(0,o.jsx)(n.p,{children:"You're probably used to running docker commands to run a container."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\ndocker run docker/whalesay cowsay sup old fashioned container run\n"})}),"\n",(0,o.jsx)(n.p,{children:"Bacalhau uses a syntax that is similar to docker and you can use the same containers. The main difference is that input and output data is passed to the container via IPFS, to enable planetary scale. In this example, it doesn't make too much difference except that we need to download the stdout."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"--wait"})," flag tells Bacalhau to wait for the job to finish before returning. This is useful in interactive sessions like this, but you would normally allow jobs to complete in the background and use the ",(0,o.jsx)(n.code,{children:"list"})," command to check on their status."]}),"\n",(0,o.jsxs)(n.p,{children:["Another difference is that by default Bacalhau overwrites the default entry point for the container so you have to pass all shell commands as arguments to the ",(0,o.jsx)(n.code,{children:"run"})," command after the ",(0,o.jsx)(n.code,{children:"--"})," flag."]}),"\n",(0,o.jsx)(n.h3,{id:"running-a-bacalhau-job",children:"Running a Bacalhau Job"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash --out job_id\nbacalhau docker run --wait --id-only docker/whalesay -- bash -c 'cowsay hello web3 uber-run'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When a job is submitted, Bacalhau prints out the related ",(0,o.jsx)(n.code,{children:"job_id"}),". We store that in an environment variable so that we can reuse it later on."]}),"\n",(0,o.jsxs)(n.p,{children:["You can download your job results directly by using ",(0,o.jsx)(n.code,{children:"bacalhau get"}),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir -p results\nbacalhau get ${JOB_ID}  --output-dir results\n"})}),"\n",(0,o.jsx)(n.p,{children:"Viewing your job output"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\ncat ./results/stdout\n"})}),"\n",(0,o.jsx)(n.h2,{id:"building-your-own-custom-container-for-bacalhau",children:"Building Your Own Custom Container For Bacalhau"}),"\n",(0,o.jsx)(n.p,{children:"To use your own custom container, you must publish the container to a container registry that is accessible from the Bacalhau network. At this time, only public container registries are supported."}),"\n",(0,o.jsx)(n.p,{children:"To demonstrate this, you will develop and build a simple custom container that comes from an old docker example. I remember seeing cowsay at a Docker conference about a decade ago. I think it's about time we brought it back to life and distribute it across the Bacalhau network."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"%%writefile cod.cow\n$the_cow = <<\"EOC\";\n   $thoughts\n    $thoughts\n                               ,,,,_\n                            \u250c\u03a6\u2593\u256c\u2593\u256c\u2593\u2593\u2593W      @\u2593\u2593\u2592,\n                           \u2560\u2593\u256c\u2593\u256c\u2563\u256c\u256c\u2593\u256c\u2593\u2593   \u2554\u2563\u256c\u256c\u2593\u256c\u2563\u2593,\n                    __,\u250c\u2553\u2550\u2560\u256c\u2560\u256c\u256c\u256c\xd1\u256c\u256c\u256c\xd1\u256c\u256c\xbc,\u2563\u256c\u256c\u2593\u256c\u256c\u2593\u256c\u2593\u2593\u2593\u2510        \u2554W_             ,\u03c6\u2593\u2593\n               ,\xab@\u2592\u2560\u2560\u2560\u2560\u2569\u255a\u2559\u2559\u2569\xdc\u255a\u255a\u255a\u255a\u2569\u2559\u2559\u255a\u2560\u2569\u255a\u255a\u255f\u2593\u2592\u2560\u2560\u256b\u2563\u256c\u256c\u256b\u256c\u2563\u2593,   _\u03c6\u256c\u2593\u256c\u256c\u2593,        ,\u03c6\u2563\u2593\u2593\u256c\u256c\n          _,\u03c6\xc6\u2569\u256c\u2569\u2559\u255a\u2569\u2591\u2559\u2559\u2591\u2591\u2569`=\u2591\u2559\u255a\xbb\xbb\u2566\u2591=\u2553\u2559\xdc1R\u2591\u2502\u2591\u255a\xdc\u2591\u2559\u2559\u255a\u2560\u2560\u2560\u2563\u2563\u256c\u2261\u03a6\u256c\u2580\u256c\u2563\u256c\u256c\u2593\u2593\u2593_   \u2553\u2584\u2593\u2593\u2593\u2593\u2593\u2593\u256c\u258c\n      _,\u03c6\u256c\xd1\u2569\u258c\u2590\u2588[\u2592\u2591\u2591\u2591\u2591R\u2591\u2591\u2580\u2591`,_`!R`````\u2559`-'\u255a\xdc\u2591\u2591\xdc\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2502\u2502\u2502\u2591\u255a\u255a\u2559\u255a\u2569\u2569\u2569\u2563\xd1\u2569\u2560\u2592\u2592\u2569\u2569\u2580\u2593\u2593\u2563\u2593\u2593\u256c\u2560\u258c\n     '\u255a\u2569\xdc\u2559\u2502\u2591\u2591\u2559\xd6\u2592\xdc\u2591\u2591\u2591H\u2591\u2591R \u2592\xa5\u2563\u2563@@@\u2593\u2593\u2593  := '`   `\u2591``````````````````````````]\u2593\u2593\u2593\u256c\u256c\u2560H\n       '\xac\u2550\u2584 `\\\u2591\u2559\xdc\u2591\u2560DjK` \xc5\xbb\xbb\u2559\u2563\u2593\u2593\u2593\u2593\u256c\xd1     -\xbb`       -`      `  ,;\u2553\u2584\u2554\u2557\u221e  ~\u2593\u2593\u2593\u2580\u2593\u2593\u256c\u256c\u256c\u258c\n             '^^^`   _\u2552\u0393   `\u2559\u2580\u2593\u2593\u2568                     _, \u207fD\u2563\u2593\u256c\u2563\u2593\u256c\u2593\u255c      \u2559\u256c\u2593\u2593\u256c\u256c\u2593\u2593\n                 ```\u2514                           _\u2553\u2584@\u2593\u2593\u2593\u255c   `\u255d\u256c\u2593\u2593\u2559           \xb2\u2563\u256c\u2593\u2593\n                        %\u03c6\u2584\u2553_             ~#\u2593\u2560\u2593\u2592\u256c\u2593\u256c\u2593\u2593^        `                \u2559\u2559\n                         `\u2563\u2593\u2593\u2593              \u2560\u256c\u2593\u256c\u2593\u256c\u2580`\n                           \u255a\u2593\u258c               '\u2568\u2580\u255c\nEOC\n"})}),"\n",(0,o.jsx)(n.p,{children:"Next, the Dockerfile adds the script and sets the entry point."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'%%writefile Dockerfile\nFROM debian:stretch\nRUN apt-get update && apt-get install -y cowsay\n# "cowsay" installs to /usr/games\nENV PATH $PATH:/usr/games\nRUN echo \'#!/bin/bash\\ncowsay "${@:1}"\' > /usr/bin/codsay && \\\n    chmod +x /usr/bin/codsay\nCOPY cod.cow /usr/share/cowsay/cows/default.cow\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now let's build and test the container locally."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\ndocker build -t ghcr.io/bacalhau-project/examples/codsay:latest . 2> /dev/null\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\ndocker run --rm ghcr.io/bacalhau-project/examples/codsay:latest codsay I like swimming in data\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Once your container is working as expected then you should push it to a public container registry. In this example, I'm pushing to Github's container registry, but we'll skip the step below because you probably don't have permission.Remember that the Bacalhau nodes expect your container to have a ",(0,o.jsx)(n.code,{children:"linux/amd64"})," architecture."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\n# docker buildx build --platform linux/amd64,linux/arm64 --push -t ghcr.io/bacalhau-project/examples/codsay:latest .\n"})}),"\n",(0,o.jsx)(n.h2,{id:"running-your-custom-container-on-bacalhau",children:"Running Your Custom Container on Bacalhau"}),"\n",(0,o.jsx)(n.p,{children:"Now we're ready to submit a Bacalhau job using your custom container. This code runs a job, downloads the results, and prints the stdout."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"bacalhau docker run"})," command strips the default entry point, so don't forget to run your entry point in the command line arguments."]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash --out job_id\nbacalhau docker run \\\n    --wait \\\n    --id-only \\\n    ghcr.io/bacalhau-project/examples/codsay:v1.0.0 \\\n    -- bash -c 'codsay Look at all this data'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When a job is submitted, Bacalhau prints out the related ",(0,o.jsx)(n.code,{children:"job_id"}),". We store that in an environment variable so that we can reuse it later on."]}),"\n",(0,o.jsxs)(n.p,{children:["Download your job results directly by using ",(0,o.jsx)(n.code,{children:"bacalhau get"})," command."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir -p results\nbacalhau get ${JOB_ID}  --output-dir results\n"})}),"\n",(0,o.jsx)(n.p,{children:"View your job output"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\ncat ./results/stdout\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>r});var o=a(7294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);