"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"DuckDB",sidebar_position:3},l="Using Bacalhau with DuckDB",i={unversionedId:"examples/data-engineering/DuckDB/index",id:"examples/data-engineering/DuckDB/index",title:"Using Bacalhau with DuckDB",description:"stars - badge-generator",source:"@site/docs/examples/data-engineering/DuckDB/index.md",sourceDirName:"examples/data-engineering/DuckDB",slug:"/examples/data-engineering/DuckDB/",permalink:"/examples/data-engineering/DuckDB/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/DuckDB/index.md",tags:[],version:"current",lastUpdatedAt:1693819129,formattedLastUpdatedAt:"Sep 4, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"DuckDB",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"csv-to-avro-or-parquet",permalink:"/examples/data-engineering/csv-to-avro-or-parquet/"},next:{title:"Simple Image Processing",permalink:"/examples/data-engineering/image-processing/"}},u={},s=[{value:"TD;lR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Containerize Script using Docker",id:"containerize-script-using-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Running Arbitrary SQL commands",id:"running-arbitrary-sql-commands",level:2},{value:"Structure of the command",id:"structure-of-the-command-1",level:3},{value:"Viewing your Job Output",id:"viewing-your-job-output-1",level:2},{value:"Need Support?",id:"need-support",level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-bacalhau-with-duckdb"},"Using Bacalhau with DuckDB"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("p",null,"DuckDB is a relational table-oriented database management system that supports SQL queries for producing analytical results. It also comes with various features that are useful for data analytics."),(0,r.kt)("p",null,"DuckDB is suited for the following use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Processing and storing tabular datasets, e.g. from CSV or Parquet files"),(0,r.kt)("li",{parentName:"ul"},"Interactive data analysis, e.g. Joining & aggregate multiple large tables"),(0,r.kt)("li",{parentName:"ul"},"Concurrent large changes, to multiple large tables, e.g. appending rows, adding/removing/updating columns"),(0,r.kt)("li",{parentName:"ul"},"Large result set transfer to client")),(0,r.kt)("p",null,"In this example tutorial, we will show how to use DuckDB with Bacalhau. The advantage of using DuckDB with Bacalhau is that you don\u2019t need to install, and there is no need to download the datasets since the datasets are\nalready there on IPFS or on the web."),(0,r.kt)("h2",{id:"tdlr"},"TD;lR"),(0,r.kt)("p",null,"Running a relational database(DUCKDB) on Bacalhau"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"containerize-script-using-docker"},"Containerize Script using Docker"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can skip this entirely and directly go to running on Bacalhau.")),(0,r.kt)("p",null,"If you want any additional dependencies to be installed along with DuckDB, you need to build your own container."),(0,r.kt)("p",null,"To build your own docker container, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", which contains instructions to build your DuckDB docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM mcr.microsoft.com/vscode/devcontainers/python:3.9\n\nRUN apt-get update && apt-get install -y nodejs npm g++\n\n# Install dbt\nRUN pip3 --disable-pip-version-check --no-cache-dir install duckdb==0.4.0 dbt-duckdb==1.1.4 \\\n    && rm -rf /tmp/pip-tmp\n\n# Install duckdb cli\nRUN wget https://github.com/duckdb/duckdb/releases/download/v0.4.0/duckdb_cli-linux-amd64.zip \\\n    && unzip duckdb_cli-linux-amd64.zip -d /usr/local/bin \\\n    && rm duckdb_cli-linux-amd64.zip\n\n# Configure Workspace\nENV DBT_PROFILES_DIR=/workspaces/datadex\nWORKDIR /workspaces/datadex\n\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See more information on how to containerize your script/app ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/02_our_app/"},"here"))),(0,r.kt)("h3",{id:"build-the-container"},"Build the container"),(0,r.kt)("p",null,"We will run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Before running the command replace;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,r.kt)("p",null,"In our case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t davidgasquez/datadex:v0.2.0\n")),(0,r.kt)("h3",{id:"push-the-container"},"Push the container"),(0,r.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("p",null,"In our case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker push davidgasquez/datadex:v0.2.0\n")),(0,r.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,r.kt)("p",null,"After the repo image has been pushed to Docker Hub, we can now use the container for running on Bacalhau. To submit a job, run the following Bacalhau command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--workdir /inputs/ \\\n--wait \\\n--id-only \\\ndavidgasquez/datadex:v0.2.0 -- /bin/bash -c 'duckdb -s \"select 1\"'\n")),(0,r.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,r.kt)("p",null,"Let's look closely at the command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"davidgasquez/datadex:v0.2.0 "),": the name and the tag of the docker image we are using")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/inputs/"),": path to input dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"'duckdb -s \"select 1\"'"),": execute DuckDB"))),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"Each job creates 3 subfolders: the ",(0,r.kt)("strong",{parentName:"p"},"combined_results"),",",(0,r.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,r.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/stdout  # displays the contents of the file\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2510\n\u2502 1 \u2502\n\u251c\u2500\u2500\u2500\u2524\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"running-arbitrary-sql-commands"},"Running Arbitrary SQL commands"),(0,r.kt)("p",null,"Below is the ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command to to run arbitrary SQL commands over the yellow taxi trips dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n -i ipfs://bafybeiejgmdpwlfgo3dzfxfv3cn55qgnxmghyv7vcarqe3onmtzczohwaq \\\n  --workdir /inputs \\\n  --id-only \\\n  --wait \\\n  davidgasquez/duckdb:latest \\\n  -- duckdb -s \"select count(*) from '0_yellow_taxi_trips.parquet'\"\n\n")),(0,r.kt)("h3",{id:"structure-of-the-command-1"},"Structure of the command"),(0,r.kt)("p",null,"Let's look closely at the command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-i ipfs://bafybeiejgmdpwlfgo3dzfxfv3cn55qgnxmghyv7vcarqe3onmtzczohwaq \\"),": CIDs to use on the job. Mounts them at '/inputs' in the execution.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"davidgasquez/duckdb:latest"),": the name and the tag of the docker image we are using")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/inputs"),": path to input dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"duckdb -s"),": execute DuckDB"))),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("h2",{id:"viewing-your-job-output-1"},"Viewing your Job Output"),(0,r.kt)("p",null,"Each job creates 3 subfolders: the ",(0,r.kt)("strong",{parentName:"p"},"combined_results"),",",(0,r.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,r.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/stdout\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 count_star() \u2502\n\u2502    int64     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502     24648499 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"need-support"},"Need Support?"),(0,r.kt)("p",null,"For questions, and feedback, please reach out in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}p.isMDXComponent=!0}}]);