"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[504],{3926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(5893),o=n(1151);const s={sidebar_label:"From A URL",sidebar_position:1},i="Copy Data from a URL to a Public Storage",r={id:"data-ingestion/from-url",title:"Copy Data from a URL to a Public Storage",description:"To upload a file from a URL we will use the bacalhau docker run command.",source:"@site/docs/data-ingestion/from-url.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/from-url",permalink:"/data-ingestion/from-url",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/data-ingestion/from-url.md",tags:[],version:"current",lastUpdatedAt:1701669642,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"From A URL",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Data Ingestion",permalink:"/data-ingestion"},next:{title:"Pinning data",permalink:"/data-ingestion/pin"}},l={},c=[{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Get the CID From the Completed Job",id:"get-the-cid-from-the-completed-job",level:2},{value:"Use the CID in a New Bacalhau Job",id:"use-the-cid-in-a-new-bacalhau-job",level:3},{value:"Need Support?",id:"need-support",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"copy-data-from-a-url-to-a-public-storage",children:"Copy Data from a URL to a Public Storage"}),"\n",(0,a.jsxs)(t.p,{children:["To upload a file from a URL we will use the ",(0,a.jsx)(t.code,{children:"bacalhau docker run"})," command."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"%%bash --out job_id\nbacalhau docker run \\\n    --id-only \\\n    --wait \\\n    --input https://raw.githubusercontent.com/filecoin-project/bacalhau/main/README.md \\\n    ghcr.io/bacalhau-project/examples/upload:v1\n"})}),"\n",(0,a.jsx)(t.p,{children:"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."}),"\n",(0,a.jsx)(t.h3,{id:"structure-of-the-command",children:"Structure of the command"}),"\n",(0,a.jsx)(t.p,{children:"Let's look closely at the command above:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"bacalhau docker run"}),": call to bacalhau"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"ghcr.io/bacalhau-project/examples/upload:v1"}),": the name and the tag of the docker image we are using"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:" --input=https://raw.githubusercontent.com/filecoin-project/bacalhau/main/README.md \\"}),": URL path of the input data volumes downloaded from a URL source."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"bacalhau docker run"})," command takes advantage of the ",(0,a.jsx)(t.code,{children:"--input"})," parameter. This will download a file from a public URL and place it in the ",(0,a.jsx)(t.code,{children:"/inputs"})," directory of the container (by default). Then we will use a helper container to move that data to the ",(0,a.jsx)(t.code,{children:"/outputs"})," directory so that it is published to your public storage via Estuary. In our case we are using Filecoin as our public storage."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["You can find out more about the ",(0,a.jsx)(t.a,{href:"https://github.com/bacalhau-project/examples/tree/main/tools/upload",children:"helper container in the examples repository"}),"."]})}),"\n",(0,a.jsx)(t.h2,{id:"checking-the-state-of-your-jobs",children:"Checking the State of your Jobs"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Job status"}),": You can check the status of the job using ",(0,a.jsx)(t.code,{children:"bacalhau list"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"%%bash\nbacalhau list $JOB_ID --output=json | jq '.[0].Status.JobState.Nodes[] | .Shards.\"0\" | select(.RunOutput)'\n"})}),"\n",(0,a.jsxs)(t.p,{children:["When it says ",(0,a.jsx)(t.code,{children:"Published"})," or ",(0,a.jsx)(t.code,{children:"Completed"}),", that means the job is done, and we can get the results."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Job information"}),": You can find out more information about your job by using ",(0,a.jsx)(t.code,{children:"bacalhau describe"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"%%bash\nbacalhau describe  $JOB_ID \n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Job download"}),": You can download your job results directly by using ",(0,a.jsx)(t.code,{children:"bacalhau get"}),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir ./results\nbacalhau get --output-dir ./results $JOB_ID \n"})}),"\n",(0,a.jsx)(t.h2,{id:"viewing-your-job-output",children:"Viewing your Job Output"}),"\n",(0,a.jsxs)(t.p,{children:["Each job creates 3 subfolders: the ",(0,a.jsx)(t.strong,{children:"combined_results"}),", ",(0,a.jsx)(t.strong,{children:"per_shard files"}),", and the ",(0,a.jsx)(t.strong,{children:"raw"})," directory. To view the file, run the following command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"%%bash\nhead -n 15 ./results/combined_results/stdout\n"})}),"\n",(0,a.jsx)(t.h2,{id:"get-the-cid-from-the-completed-job",children:"Get the CID From the Completed Job"}),"\n",(0,a.jsx)(t.p,{children:"To get the output CID from a completed job, run the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"%%bash --out cid\nbacalhau list $JOB_ID --output=json | jq -r '.[0].Status.JobState.Nodes[] | .Shards.\"0\".PublishedResults | select(.CID) | .CID'\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The job will upload the CID to your public storage via Estuary. We will store the ",(0,a.jsx)(t.em,{children:"cid"})," that in an environment variable so that we can reuse it later on."]}),"\n",(0,a.jsx)(t.h3,{id:"use-the-cid-in-a-new-bacalhau-job",children:"Use the CID in a New Bacalhau Job"}),"\n",(0,a.jsxs)(t.p,{children:["Now that we have the CID, we can use it in a new job. This time we will use the ",(0,a.jsx)(t.code,{children:"--input"})," parameter to tell Bacalhau to use the CID we just uploaded."]}),"\n",(0,a.jsxs)(t.p,{children:['In this case, our "job" is just to list the contents of the ',(0,a.jsx)(t.code,{children:"/inputs"}),' directory. You can see that the "input" data is located under ',(0,a.jsx)(t.code,{children:"/inputs/outputs/README.md"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'%%bash --out job_id\nbacalhau docker run \\\n    --id-only \\\n    --wait \\\n    --input ipfs://$CID \\\n    ubuntu -- \\\n    bash -c "set -x; ls -l /inputs; ls -l /inputs/outputs; cat /inputs/outputs/README.md"\n'})}),"\n",(0,a.jsx)(t.p,{children:"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."}),"\n",(0,a.jsx)(t.h2,{id:"need-support",children:"Need Support?"}),"\n",(0,a.jsxs)(t.p,{children:["For questions and feedback, please reach out in our ",(0,a.jsx)(t.a,{href:"https://github.com/filecoin-project/bacalhau/discussions",children:"forum"})]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(7294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);