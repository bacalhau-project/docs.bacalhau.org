"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8410],{864:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=a(5893),i=a(1151);const r={sidebar_label:"R Script",sidebar_position:9},s="Running a Simple R Script in Bacalhau",l={id:"examples/workload-onboarding/r-hello-world/index",title:"Running a Simple R Script in Bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/workload-onboarding/r-hello-world/index.md",sourceDirName:"examples/workload-onboarding/r-hello-world",slug:"/examples/workload-onboarding/r-hello-world/",permalink:"/examples/workload-onboarding/r-hello-world/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/r-hello-world/index.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:9,frontMatter:{sidebar_label:"R Script",sidebar_position:9},sidebar:"documentationSidebar",previous:{title:"R Custom Container",permalink:"/examples/workload-onboarding/r-custom-docker-prophet/"},next:{title:"CUDA",permalink:"/examples/workload-onboarding/CUDA/"}},t={},c=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running an R Script Locally",id:"running-an-r-script-locally",level:2},{value:"Running a Job on Bacalhau",id:"running-a-job-on-bacalhau",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Futureproofing your R Scripts",id:"futureproofing-your-r-scripts",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"running-a-simple-r-script-in-bacalhau",children:"Running a Simple R Script in Bacalhau"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/bacalhau-project/bacalhau",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"})})}),"\n",(0,o.jsx)(n.p,{children:"You can use official Docker containers for each language like R or Python. In this example, we will use the official R container and run it on Bacalhau."}),"\n",(0,o.jsx)(n.h2,{id:"tdlr",children:"TD;LR"}),"\n",(0,o.jsx)(n.p,{children:"A quick guide on how to run a hello world script on Bacalhau"}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["To get started, you need to install the Bacalhau client, see more information ",(0,o.jsx)(n.a,{href:"https://docs.bacalhau.org/getting-started/installation",children:"here"})]}),"\n",(0,o.jsx)(n.h2,{id:"running-an-r-script-locally",children:"Running an R Script Locally"}),"\n",(0,o.jsxs)(n.p,{children:["To install R follow these instructions ",(0,o.jsx)(n.a,{href:"https://rstudio-education.github.io/hopr/starting.html",children:"A Installing R and RStudio | Hands-On Programming with R"}),". After R and RStudio is installed, create and run a script called hello.R."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'%%writefile hello.R\nprint("hello world")\n'})}),"\n",(0,o.jsx)(n.p,{children:"Run the script:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\nRscript hello.R\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Next, upload the script to your public storage in our case IPFS.  We've already uploaded the script to IPFS and the CID is: ",(0,o.jsx)(n.code,{children:"QmVHSWhAL7fNkRiHfoEJGeMYjaYZUsKHvix7L54SptR8ie"}),". You can look at this by browsing to one of the HTTP IPFS proxies like ",(0,o.jsx)(n.a,{href:"https://cloudflare-ipfs.com/ipfs/QmVHSWhAL7fNkRiHfoEJGeMYjaYZUsKHvix7L54SptR8ie/",children:"ipfs.io"})," or ",(0,o.jsx)(n.a,{href:"https://w3s.link/ipfs/QmVHSWhAL7fNkRiHfoEJGeMYjaYZUsKHvix7L54SptR8ie",children:"w3s.link"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"running-a-job-on-bacalhau",children:"Running a Job on Bacalhau"}),"\n",(0,o.jsx)(n.p,{children:"Now it's time to run the script on the Bacalhau network. To run a job on Bacalhau, run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash --out job_id\nbacalhau docker run \\\n--wait \\\n--id-only \\\n-i ipfs://QmQRVx3gXVLaRXywgwo8GCTQ63fHqWV88FiwEqCidmUGhk:/hello.R \\\nr-base \\\n-- Rscript hello.R\n"})}),"\n",(0,o.jsx)(n.h3,{id:"structure-of-the-command",children:"Structure of the command"}),"\n",(0,o.jsx)(n.p,{children:"Let's look closely at the command above:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"bacalhau docker run"}),": call to bacalhau"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"-i ipfs://QmQRVx3gXVLaRXywgwo8GCTQ63fHqWV88FiwEqCidmUGhk"}),": CIDs to use on the job. Mounts them at '/inputs' in the execution."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:":/hello.R"}),": the name and the tag of the docker image we are using"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Rscript hello.R"}),": execute the R script"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When a job is submitted, Bacalhau prints out the related ",(0,o.jsx)(n.code,{children:"job_id"}),". We store that in an environment variable so that we can reuse it later on."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"%env JOB_ID={job_id}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"checking-the-state-of-your-jobs",children:"Checking the State of your Jobs"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Job status"}),": You can check the status of the job using ",(0,o.jsx)(n.code,{children:"bacalhau list"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau list --id-filter ${JOB_ID}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When it says ",(0,o.jsx)(n.code,{children:"Published"})," or ",(0,o.jsx)(n.code,{children:"Completed"}),", that means the job is done, and we can get the results."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Job information"}),": You can find out more information about your job by using ",(0,o.jsx)(n.code,{children:"bacalhau describe"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau describe  ${JOB_ID}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Job download"}),": You can download your job results directly by using ",(0,o.jsx)(n.code,{children:"bacalhau get"}),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir results\nbacalhau get ${JOB_ID} --output-dir results\n"})}),"\n",(0,o.jsx)(n.h2,{id:"viewing-your-job-output",children:"Viewing your Job Output"}),"\n",(0,o.jsx)(n.p,{children:"To view the file, run the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\nls results/\n"})}),"\n",(0,o.jsx)(n.p,{children:"Viewing the result"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\ncat results/stdout\n"})}),"\n",(0,o.jsx)(n.h3,{id:"futureproofing-your-r-scripts",children:"Futureproofing your R Scripts"}),"\n",(0,o.jsx)(n.p,{children:"You can generate the job request with the following command. This will allow you to re-run that job in the future."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau describe ${JOB_ID} --spec > job.yaml\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"%%bash\ncat job.yaml\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>s});var o=a(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);