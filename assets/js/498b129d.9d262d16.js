"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8270],{6266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(5893),o=t(1151);const s={sidebar_label:"R Custom Container",sidebar_position:8},r="Building and Running your Custom R Containers on Bacalhau",i={id:"examples/workload-onboarding/r-custom-docker-prophet/index",title:"Building and Running your Custom R Containers on Bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/workload-onboarding/r-custom-docker-prophet/index.md",sourceDirName:"examples/workload-onboarding/r-custom-docker-prophet",slug:"/examples/workload-onboarding/r-custom-docker-prophet/",permalink:"/examples/workload-onboarding/r-custom-docker-prophet/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/r-custom-docker-prophet/index.md",tags:[],version:"current",lastUpdatedAt:1701669642,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:8,frontMatter:{sidebar_label:"R Custom Container",sidebar_position:8},sidebar:"documentationSidebar",previous:{title:"Python Pandas",permalink:"/examples/workload-onboarding/python-pandas/"},next:{title:"R Script",permalink:"/examples/workload-onboarding/r-hello-world/"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running Prophet in R Locally",id:"running-prophet-in-r-locally",level:2},{value:"Running R Prophet on Bacalhau",id:"running-r-prophet-on-bacalhau",level:2},{value:"Containerize Script with Docker",id:"containerize-script-with-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Job on Bacalhau",id:"running-a-job-on-bacalhau",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"building-and-running-your-custom-r-containers-on-bacalhau",children:"Building and Running your Custom R Containers on Bacalhau"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/bacalhau-project/bacalhau",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"})})}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(n.p,{children:["This example will walk you through building Time Series Forecasting using ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/prophet",children:"Prophet"}),". Prophet is a forecasting procedure implemented in R and Python. It is fast and provides completely automated forecasts that can be tuned by hand by data scientists and analysts."]}),"\n",(0,a.jsx)(n.h3,{id:"tldr",children:"TL;DR"}),"\n",(0,a.jsx)(n.p,{children:"Quick script to run custom R container in Bacalhau"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'bacalhau docker run -i ipfs://QmY8BAftd48wWRYDf5XnZGkhwqgjpzjyUG3hN1se6SYaFt:/example_wp_log_R.csv ghcr.io/bacalhau-project/examples/r-prophet:0.0.2 -- Rscript Saturating-Forecasts.R "/example_wp_log_R.csv" "/outputs/output0.pdf" "/outputs/output1.pdf"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["To get started, you need to install the Bacalhau client, see more information ",(0,a.jsx)(n.a,{href:"https://docs.bacalhau.org/getting-started/installation",children:"here"})]}),"\n",(0,a.jsx)(n.h2,{id:"running-prophet-in-r-locally",children:"Running Prophet in R Locally"}),"\n",(0,a.jsx)(n.p,{children:"Open R studio or R-supported IDE. If you want to run this on a notebook server, then make sure you use an R kernel. Prophet is a CRAN package so you can use install.packages to install the prophet package."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%%bash\nR -e \"install.packages('prophet',dependencies=TRUE, repos='http://cran.rstudio.com/')\"\n"})}),"\n",(0,a.jsx)(n.p,{children:"After installation is finished, you can download the example data that is stored in IPFS."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%%bash\nwget https://w3s.link/ipfs/QmZiwZz7fXAvQANKYnt7ya838VPpj4agJt5EDvRYp3Deeo/example_wp_log_R.csv\n"})}),"\n",(0,a.jsx)(n.p,{children:"The code below instantiates the library and fits a model to the data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%%bash\nmkdir -p outputs\nmkdir -p R\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'%%writefile Saturating-Forecasts.R\nlibrary(\'prophet\')\n\nargs = commandArgs(trailingOnly=TRUE)\nargs\n\ninput = args[1]\noutput = args[2]\noutput1 = args[3]\n\n\nI <- paste("", input, sep ="")\n\nO <- paste("", output, sep ="")\n\nO1 <- paste("", output1 ,sep ="")\n\n\ndf <- read.csv(I)\n\ndf$cap <- 8.5\nm <- prophet(df, growth = \'logistic\')\n\nfuture <- make_future_dataframe(m, periods = 1826)\nfuture$cap <- 8.5\nfcst <- predict(m, future)\npdf(O)\nplot(m, fcst)\ndev.off()\n\ndf$y <- 10 - df$y\ndf$cap <- 6\ndf$floor <- 1.5\nfuture$cap <- 6\nfuture$floor <- 1.5\nm <- prophet(df, growth = \'logistic\')\nfcst <- predict(m, future)\npdf(O1)\nplot(m, fcst)\ndev.off()\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'%%bash\nRscript Saturating-Forecasts.R "example_wp_log_R.csv" "outputs/output0.pdf" "outputs/output1.pdf"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"running-r-prophet-on-bacalhau",children:"Running R Prophet on Bacalhau"}),"\n",(0,a.jsxs)(n.p,{children:["To use Bacalhau, you need to package your code in an appropriate format. The developers have already pushed a container for you to use, but if you want to build your own, you can follow the steps below. You can view a ",(0,a.jsx)(n.a,{href:"/examples/workload-onboarding/custom-containers/",children:"dedicated container example"})," in the documentation."]}),"\n",(0,a.jsx)(n.h2,{id:"containerize-script-with-docker",children:"Containerize Script with Docker"}),"\n",(0,a.jsxs)(n.p,{children:["To build your own docker container, create a ",(0,a.jsx)(n.code,{children:"Dockerfile"}),", which contains instructions to build your image."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"FROM r-base\nRUN R -e \"install.packages('prophet',dependencies=TRUE, repos='http://cran.rstudio.com/')\"\nRUN mkdir /R\nRUN mkdir /outputs\nCOPY Saturating-Forecasts.R R\nWORKDIR /R\n"})}),"\n",(0,a.jsx)(n.p,{children:"These commands specify how the image will be built, and what extra requirements will be included. We use r-base as the base image and then install the prophet package. We then copy the R script into the container and set the working directory to the R folder."}),"\n",(0,a.jsx)(n.h3,{id:"build-the-container",children:"Build the container"}),"\n",(0,a.jsxs)(n.p,{children:["We will run ",(0,a.jsx)(n.code,{children:"docker build"})," command to build the container;"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"docker build -t <hub-user>/<repo-name>:<tag> .\n"})}),"\n",(0,a.jsx)(n.p,{children:"Before running the command replace;"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"hub-user"})," with your docker hub username, If you don\u2019t have a docker hub account ",(0,a.jsx)(n.a,{href:"https://docs.docker.com/docker-id/",children:"follow these instructions to create docker account"}),", and use the username of the account you created"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"repo-name"})," with the name of the container, you can name it anything you want"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"tag"})," this is not required but you can use the latest tag"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In our case:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker buildx build --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/r-prophet:0.0.1 .\n"})}),"\n",(0,a.jsx)(n.h3,{id:"push-the-container",children:"Push the container"}),"\n",(0,a.jsx)(n.p,{children:"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name, or tag."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"docker push <hub-user>/<repo-name>:<tag>\n"})}),"\n",(0,a.jsx)(n.p,{children:"In our case:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker push --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/r-prophet:0.0.1 .\n"})}),"\n",(0,a.jsx)(n.h2,{id:"running-a-job-on-bacalhau",children:"Running a Job on Bacalhau"}),"\n",(0,a.jsx)(n.p,{children:"The following command passes a prompt to the model and generates the results in the outputs directory. It takes approximately 2 minutes to run."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'%%bash --out job_id\nbacalhau docker run \\\n    --wait \\\n    --id-only \\\n    -i ipfs://QmY8BAftd48wWRYDf5XnZGkhwqgjpzjyUG3hN1se6SYaFt:/example_wp_log_R.csv \\\n    ghcr.io/bacalhau-project/examples/r-prophet:0.0.2 \\\n    -- Rscript Saturating-Forecasts.R "/example_wp_log_R.csv" "/outputs/output0.pdf" "/outputs/output1.pdf"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"structure-of-the-command",children:"Structure of the command"}),"\n",(0,a.jsx)(n.p,{children:"Let's look closely at the command above:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"bacalhau docker run"}),": call to bacalhau"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-i ipfs://QmY8BAftd48wWRYDf5XnZGkhwqgjpzjyUG3hN1se6SYaFt"}),": CIDs to use on the job. Mounts them at '/inputs' in the execution."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ghcr.io/bacalhau-project/examples/r-prophet:0.0.2"}),": the name and the tag of the docker image we are using"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"/example_wp_log_R.csv "}),": path to the input dataset"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"/outputs/output0.pdf...."}),": path to the output"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Rscript Saturating-Forecasts.R"}),": execute the R script"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["When a job is submitted, Bacalhau prints out the related ",(0,a.jsx)(n.code,{children:"job_id"}),". We store that in an environment variable so that we can reuse it later on."]}),"\n",(0,a.jsx)(n.h2,{id:"checking-the-state-of-your-jobs",children:"Checking the State of your Jobs"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Job status"}),": You can check the status of the job using ",(0,a.jsx)(n.code,{children:"bacalhau list"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau list --id-filter ${JOB_ID}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When it says ",(0,a.jsx)(n.code,{children:"Published"})," or ",(0,a.jsx)(n.code,{children:"Completed"}),", that means the job is done, and we can get the results."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Job information"}),": You can find out more information about your job by using ",(0,a.jsx)(n.code,{children:"bacalhau describe"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau describe ${JOB_ID}\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Job download"}),": You can download your job results directly by using ",(0,a.jsx)(n.code,{children:"bacalhau get"}),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n"})}),"\n",(0,a.jsx)(n.h2,{id:"viewing-your-job-output",children:"Viewing your Job Output"}),"\n",(0,a.jsx)(n.p,{children:"To view the file, run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"%%bash\nls results/outputs\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can't natively display PDFs in notebooks, so here are some static images of the PDFs:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"output0.pdf"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(9674).Z+"",width:"636",height:"415"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"output1.pdf"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(7797).Z+"",width:"639",height:"403"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},9674:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/output0-fdc7e804b877fa7fd4b27a98ff3336a2.png"},7797:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/output1-2025ba5cc748c5aa201d469653199e7e.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(7294);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);