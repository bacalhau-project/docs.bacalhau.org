"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"R Custom Container",sidebar_position:8},l="Building and Running your Custom R Containers on Bacalhau",i={unversionedId:"examples/workload-onboarding/r-custom-docker-prophet/index",id:"examples/workload-onboarding/r-custom-docker-prophet/index",title:"Building and Running your Custom R Containers on Bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/workload-onboarding/r-custom-docker-prophet/index.md",sourceDirName:"examples/workload-onboarding/r-custom-docker-prophet",slug:"/examples/workload-onboarding/r-custom-docker-prophet/",permalink:"/examples/workload-onboarding/r-custom-docker-prophet/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/r-custom-docker-prophet/index.md",tags:[],version:"current",lastUpdatedAt:1687266311,formattedLastUpdatedAt:"Jun 20, 2023",sidebarPosition:8,frontMatter:{sidebar_label:"R Custom Container",sidebar_position:8},sidebar:"documentationSidebar",previous:{title:"Python Pandas",permalink:"/examples/workload-onboarding/python-pandas/"},next:{title:"R Script",permalink:"/examples/workload-onboarding/r-hello-world/"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"TL;DR",id:"tldr",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running Prophet in R Locally",id:"running-prophet-in-r-locally",level:2},{value:"Running R Prophet on Bacalhau",id:"running-r-prophet-on-bacalhau",level:2},{value:"Containerize Script with Docker",id:"containerize-script-with-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Job on Bacalhau",id:"running-a-job-on-bacalhau",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-and-running-your-custom-r-containers-on-bacalhau"},"Building and Running your Custom R Containers on Bacalhau"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This example will walk you through building Time Series Forecasting using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/prophet"},"Prophet"),". Prophet is a forecasting procedure implemented in R and Python. It is fast and provides completely automated forecasts that can be tuned by hand by data scientists and analysts."),(0,r.kt)("h3",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Quick script to run custom R container in Bacalhau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run -i ipfs://QmY8BAftd48wWRYDf5XnZGkhwqgjpzjyUG3hN1se6SYaFt:/example_wp_log_R.csv ghcr.io/bacalhau-project/examples/r-prophet:0.0.2 -- Rscript Saturating-Forecasts.R "/example_wp_log_R.csv" "/outputs/output0.pdf" "/outputs/output1.pdf"\n')),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"running-prophet-in-r-locally"},"Running Prophet in R Locally"),(0,r.kt)("p",null,"Open R studio or R supported IDE. If you want to run this on a notebook server, then make sure you use an R kernel. Prophet is a CRAN package so you can use install.packages to install the prophet package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nR -e \"install.packages('prophet',dependencies=TRUE, repos='http://cran.rstudio.com/')\"\n")),(0,r.kt)("p",null,"After installation is finished, you can download the example data that is stored in IPFS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nwget https://w3s.link/ipfs/QmZiwZz7fXAvQANKYnt7ya838VPpj4agJt5EDvRYp3Deeo/example_wp_log_R.csv\n")),(0,r.kt)("p",null,"The code below instantiates the library and fits a model to the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nmkdir -p outputs\nmkdir -p R\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Saturating-Forecasts.R\nlibrary(\'prophet\')\n\nargs = commandArgs(trailingOnly=TRUE)\nargs\n\ninput = args[1]\noutput = args[2]\noutput1 = args[3]\n\n\nI <- paste("", input, sep ="")\n\nO <- paste("", output, sep ="")\n\nO1 <- paste("", output1 ,sep ="")\n\n\ndf <- read.csv(I)\n\ndf$cap <- 8.5\nm <- prophet(df, growth = \'logistic\')\n\nfuture <- make_future_dataframe(m, periods = 1826)\nfuture$cap <- 8.5\nfcst <- predict(m, future)\npdf(O)\nplot(m, fcst)\ndev.off()\n\ndf$y <- 10 - df$y\ndf$cap <- 6\ndf$floor <- 1.5\nfuture$cap <- 6\nfuture$floor <- 1.5\nm <- prophet(df, growth = \'logistic\')\nfcst <- predict(m, future)\npdf(O1)\nplot(m, fcst)\ndev.off()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash\nRscript Saturating-Forecasts.R "example_wp_log_R.csv" "outputs/output0.pdf" "outputs/output1.pdf"\n')),(0,r.kt)("h2",{id:"running-r-prophet-on-bacalhau"},"Running R Prophet on Bacalhau"),(0,r.kt)("p",null,"To use Bacalhau, you need to package your code in an appropriate format. The developers have already pushed a container for you to use, but if you want to build your own, you can follow the steps below. You can view a ",(0,r.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/custom-containers/"},"dedicated container example")," in the documentation."),(0,r.kt)("h2",{id:"containerize-script-with-docker"},"Containerize Script with Docker"),(0,r.kt)("p",null,"To build your own docker container, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", which contains instructions to build your image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM r-base\nRUN R -e \"install.packages('prophet',dependencies=TRUE, repos='http://cran.rstudio.com/')\"\nRUN mkdir /R\nRUN mkdir /outputs\nCOPY Saturating-Forecasts.R R\nWORKDIR /R\n")),(0,r.kt)("p",null,"These commands specify how the image will be built, and what extra requirements will be included. We use r-base as the base image, and then install the prophet package. We then copy the R script into the container and set the working directory to the R folder."),(0,r.kt)("h3",{id:"build-the-container"},"Build the container"),(0,r.kt)("p",null,"We will run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Before running the command replace;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,r.kt)("p",null,"In our case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/r-prophet:0.0.1 .\n")),(0,r.kt)("h3",{id:"push-the-container"},"Push the container"),(0,r.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("p",null,"In our case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker push --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/r-prophet:0.0.1 .\n")),(0,r.kt)("h2",{id:"running-a-job-on-bacalhau"},"Running a Job on Bacalhau"),(0,r.kt)("p",null,"The following command passes a prompt to the model and generates the results in the outputs directory. It takes approximately 2 minutes to run."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run \\\n    --wait \\\n    --id-only \\\n    -i ipfs://QmY8BAftd48wWRYDf5XnZGkhwqgjpzjyUG3hN1se6SYaFt:/example_wp_log_R.csv \\\n    ghcr.io/bacalhau-project/examples/r-prophet:0.0.2 \\\n    -- Rscript Saturating-Forecasts.R "/example_wp_log_R.csv" "/outputs/output0.pdf" "/outputs/output1.pdf"\n')),(0,r.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,r.kt)("p",null,"Let's look closely at the command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-i ipfs://QmY8BAftd48wWRYDf5XnZGkhwqgjpzjyUG3hN1se6SYaFt"),": CIDs to use on the job. Mounts them at '/inputs' in the execution.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ghcr.io/bacalhau-project/examples/r-prophet:0.0.2"),": the name and the tag of the docker image we are using")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/example_wp_log_R.csv "),": path to input dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/outputs/output0.pdf...."),": path to output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Rscript Saturating-Forecasts.R"),": execute the R script"))),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/outputs\n")),(0,r.kt)("p",null,"You can't natively display PDFs in notebooks, so here are some static images of the PDFS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"output0.pdf")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9674).Z,width:"636",height:"415"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"output1.pdf")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7797).Z,width:"639",height:"403"})))}d.isMDXComponent=!0},9674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/output0-fdc7e804b877fa7fd4b27a98ff3336a2.png"},7797:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/output1-2025ba5cc748c5aa201d469653199e7e.png"}}]);