"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5522],{3148:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var t=n(5893),s=n(1151);const i={sidebar_label:"BIDS",sidebar_position:1},o="Running BIDS Apps on Bacalhau",r={id:"examples/molecular-dynamics/BIDS/index",title:"Running BIDS Apps on Bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/molecular-dynamics/BIDS/index.md",sourceDirName:"examples/molecular-dynamics/BIDS",slug:"/examples/molecular-dynamics/BIDS/",permalink:"/examples/molecular-dynamics/BIDS/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/molecular-dynamics/BIDS/index.md",tags:[],version:"current",lastUpdatedAt:1702252086,formattedLastUpdatedAt:"Dec 10, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"BIDS",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Molecular Dynamics",permalink:"/category/molecular-dynamics"},next:{title:"Coresets On Bacalhau",permalink:"/examples/molecular-dynamics/Coreset/"}},l={},d=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Downloading datasets",id:"downloading-datasets",level:2},{value:"Uploading the datasets to IPFS",id:"uploading-the-datasets-to-ipfs",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"running-bids-apps-on-bacalhau",children:"Running BIDS Apps on Bacalhau"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/bacalhau-project/bacalhau",children:(0,t.jsx)(a.img,{src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"})})}),"\n",(0,t.jsxs)(a.p,{children:["In this example tutorial, we will look at how to run BIDS App on Bacalhau. BIDS (Brain Imaging Data Structure) is an emerging standard for organizing and describing neuroimaging datasets.  ",(0,t.jsx)(a.a,{href:"https://bids-apps.neuroimaging.io/about/",children:"BIDS App"})," is a container image capturing a neuroimaging pipeline that takes a BIDS formatted dataset as input. Each BIDS App has the same core set of command line arguments, making them easy to run and integrate into automated platforms. BIDS Apps are constructed in a way that does not depend on any software outside of the image other than the container engine."]}),"\n",(0,t.jsx)(a.h2,{id:"tdlr",children:"TD;LR"}),"\n",(0,t.jsx)(a.p,{children:"Running imaging data structure with Bacalhau"}),"\n",(0,t.jsx)(a.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(a.p,{children:["To get started, you need to install the Bacalhau client, see more information ",(0,t.jsx)(a.a,{href:"https://docs.bacalhau.org/getting-started/installation",children:"here"})]}),"\n",(0,t.jsx)(a.h2,{id:"downloading-datasets",children:"Downloading datasets"}),"\n",(0,t.jsxs)(a.p,{children:["For this tutorial, download file ",(0,t.jsx)(a.code,{children:"ds005.tar"})," from this Bids dataset ",(0,t.jsx)(a.a,{href:"https://drive.google.com/drive/folders/0B2JWN60ZLkgkMGlUY3B4MXZIZW8?resourcekey=0-EYVSOlRbxeFKO8NpjWWM3w",children:"folder"})," and untar it in a directory. ",(0,t.jsx)(a.code,{children:"ds005"})," will be our input directory in the following example."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"data\n\u2514\u2500\u2500 ds005\n"})}),"\n",(0,t.jsx)(a.h2,{id:"uploading-the-datasets-to-ipfs",children:"Uploading the datasets to IPFS"}),"\n",(0,t.jsxs)(a.p,{children:['The simplest way to upload the data to IPFS is to use a third-party service to "pin" data to the IPFS network, to ensure that the data exists and is available. To do this you need an account with a pinning service like ',(0,t.jsx)(a.a,{href:"https://web3.storage/docs/how-tos/pinning-services-api/",children:"web3.storage"})," or ",(0,t.jsx)(a.a,{href:"https://app.pinata.cloud/pinmanager",children:"Pinata"})," or ",(0,t.jsx)(a.a,{href:"https://nft.storage/docs/how-to/nftup/",children:"nft.storage"}),". Once registered you can use their UI or API or SDKs to upload files."]}),"\n",(0,t.jsxs)(a.p,{children:["When you pin your data, you'll get a CID which is in a format like this ",(0,t.jsx)(a.code,{children:"QmaNyzSpJCt1gMCQLd3QugihY6HzdYmA8QMEa45LDBbVPz"}),". Copy the CID as it will be used to access your data"]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["Alternatively, you can upload your dataset to IPFS using ",(0,t.jsx)(a.a,{href:"https://docs.ipfs.tech/install/command-line/#official-distributions",children:"IPFS CLI"}),", but the recommended approach is to use a pinning service as we have mentioned above."]})}),"\n",(0,t.jsx)(a.h2,{id:"running-a-bacalhau-job",children:"Running a Bacalhau Job"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"%%bash --out job_id\nbacalhau docker run \\\n--id-only \\ \n--wait \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n-i ipfs://QmaNyzSpJCt1gMCQLd3QugihY6HzdYmA8QMEa45LDBbVPz:/data \\\nnipreps/mriqc:latest \n-- mriqc ../data/ds005 ../outputs participant --participant_label 01 02 03\n"})}),"\n",(0,t.jsx)(a.h3,{id:"structure-of-the-command",children:"Structure of the command"}),"\n",(0,t.jsx)(a.p,{children:"Let's look closely at the command above:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"bacalhau docker run"}),": call to bacalhau"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"-i ipfs://QmaNyzSpJCt1gMCQLd3QugihY6HzdYmA8QMEa45LDBbVPz:/data"}),": mount the CID of the dataset that is uploaded to IPFS and mount it to a folder called data on the container"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"nipreps/mriqc:latest"}),": the name and the tag of the docker image we are using"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"../data/ds005"}),": path to input dataset"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"../outputs"}),": path to the output"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"participant --participant_label 01 02 03"}),": run the participant level in subjects 001 002 003"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"When a job is submitted, Bacalhau prints out the related job_id. We store that in an environment variable so that we can reuse it later on."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"%env JOB_ID={job_id}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"checking-the-state-of-your-jobs",children:"Checking the State of your Jobs"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Job status"}),": You can check the status of the job using ",(0,t.jsx)(a.code,{children:"bacalhau list"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n"})}),"\n",(0,t.jsxs)(a.p,{children:["When it says ",(0,t.jsx)(a.code,{children:"Completed"}),", that means the job is done, and we can get the results."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Job information"}),": You can find out more information about your job by using ",(0,t.jsx)(a.code,{children:"bacalhau describe"}),"."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"%%bash\nbacalhau describe ${JOB_ID}\n"})}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Job download"}),": You can download your job results directly by using ",(0,t.jsx)(a.code,{children:"bacalhau get"}),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n"})}),"\n",(0,t.jsx)(a.p,{children:"After the download has finished you should see the following contents in the results directory"}),"\n",(0,t.jsx)(a.h2,{id:"viewing-your-job-output",children:"Viewing your Job Output"}),"\n",(0,t.jsx)(a.p,{children:"To view the file, run the following command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"%%bash\nls results/ # list the contents of the current directory \ncat results/stdout # displays the contents of the current directory \n"})})]})}function h(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>o});var t=n(7294);const s={},i=t.createContext(s);function o(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);