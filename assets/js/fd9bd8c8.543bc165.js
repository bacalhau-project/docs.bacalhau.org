"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5699],{5637:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(5893),i=s(1151);const a={sidebar_label:"Running a job over S3 data ",sidebar_position:3},o="Running a Job over S3 data",r={id:"data-ingestion/s3",title:"Running a Job over S3 data",description:"Here is a quick tutorial on how to copy Data from S3 to a public storage. In this tutorial, we will scrape all the links from a public AWS S3 buckets and then copy the data to IPFS using Bacalhau.",source:"@site/docs/data-ingestion/s3.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/s3",permalink:"/data-ingestion/s3",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/data-ingestion/s3.md",tags:[],version:"current",lastUpdatedAt:1701669642,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Running a job over S3 data ",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Pinning data",permalink:"/data-ingestion/pin"},next:{title:"Process",permalink:"/process"}},c={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the Command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Extract Result CID",id:"extract-result-cid",level:2},{value:"Publishing Results to S3-Compatible Destinations",id:"publishing-results-to-s3-compatible-destinations",level:2},{value:"Publisher Spec",id:"publisher-spec",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Content Identification",id:"content-identification",level:2},{value:"Support for the S3-compatible storage provider",id:"support-for-the-s3-compatible-storage-provider",level:2},{value:"Need Support?",id:"need-support",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"running-a-job-over-s3-data",children:"Running a Job over S3 data"}),"\n",(0,t.jsx)(n.p,{children:"Here is a quick tutorial on how to copy Data from S3 to a public storage. In this tutorial, we will scrape all the links from a public AWS S3 buckets and then copy the data to IPFS using Bacalhau."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(n.p,{children:["To get started, you need to install the Bacalhau client, see more information ",(0,t.jsx)(n.a,{href:"https://docs.bacalhau.org/getting-started/installation",children:"here"})]}),"\n",(0,t.jsx)(n.h2,{id:"running-a-bacalhau-job",children:"Running a Bacalhau Job"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'%%bash --out job_id\nbacalhau docker run \\\n-i "s3://noaa-goes16/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01*:/inputs,opt=region=us-east-1" \\\n--id-only \\\n--wait \\\nalpine \\\n-- sh -c "cp -r /inputs/* /outputs/"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"structure-of-the-command",children:"Structure of the Command"}),"\n",(0,t.jsx)(n.p,{children:"Let's look closely at the command above:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"bacalhau docker run"}),": call to bacalhau"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'-i "s3://noaa-goes16/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01*:/inputs,opt=region=us-east-1'}),": defines S3 objects as inputs to the job. In this case, it will download all objects that match the prefix ",(0,t.jsx)(n.code,{children:"ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01"})," from the bucket ",(0,t.jsx)(n.code,{children:"noaa-goes16"})," in ",(0,t.jsx)(n.code,{children:"us-east-1"})," region, and mount the objects under ",(0,t.jsx)(n.code,{children:"/inputs"})," path inside the docker job."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'-- sh -c "cp -r /inputs/* /outputs/"'}),": copies all files under ",(0,t.jsx)(n.code,{children:"/inputs"})," to ",(0,t.jsx)(n.code,{children:"/outputs"}),", which is by default the result output directory which all of its content will be published to the specified destination, which is IPFS by default"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When a job is submitted, Bacalhau prints out the related ",(0,t.jsx)(n.code,{children:"job_id"}),". We store that in an environment variable so that we can reuse it later on."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"This only works with datasets that are publicly accessible and don't require an AWS account or pay to use buckets."})}),"\n",(0,t.jsx)(n.h2,{id:"checking-the-state-of-your-jobs",children:"Checking the State of your Jobs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job status"}),": You can check the status of the job using ",(0,t.jsx)(n.code,{children:"bacalhau list"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When it says ",(0,t.jsx)(n.code,{children:"Published"})," or ",(0,t.jsx)(n.code,{children:"Completed"}),", that means the job is done, and we can get the results."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job information"}),": You can find out more information about your job by using ",(0,t.jsx)(n.code,{children:"bacalhau describe"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau describe ${JOB_ID}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job download"}),": You can download your job results directly by using ",(0,t.jsx)(n.code,{children:"bacalhau get"}),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir -p results # Temporary directory to store the results\nbacalhau get $JOB_ID --output-dir results # Download the results\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the download has finished you should see the following contents in results directory."}),"\n",(0,t.jsx)(n.h2,{id:"viewing-your-job-output",children:"Viewing your Job Output"}),"\n",(0,t.jsx)(n.p,{children:"To view your file, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nls -1 results/outputs\n"})}),"\n",(0,t.jsx)(n.p,{children:"OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170671748180.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170691603180.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170751219598.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752149454.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752204183.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752234173.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170901216521.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170951807462.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171000619157.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171061215161.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171071918365.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171091517487.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171152112459.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171221432456.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171232313205.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171301618116.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171572234151.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171592127442.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171801512461.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171941452463.nc"}),"\n",(0,t.jsx)(n.h2,{id:"extract-result-cid",children:"Extract Result CID"}),"\n",(0,t.jsx)(n.p,{children:"Installing jq to extract CID from the result description"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"%%bash\nsudo apt update\nsudo apt install jq\nExtracting the CIDs from output json\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"%%bash\nbacalhau describe ${JOB_ID} --json \\\n| jq -r '.State.Executions[].PublishedResults.CID | select (. != null)'\n"})}),"\n",(0,t.jsx)(n.p,{children:"QmYFhG668yJZmtk84SMMdbrz5Uvuh78Q8nLxTgLDWShkhR"}),"\n",(0,t.jsx)(n.h2,{id:"publishing-results-to-s3-compatible-destinations",children:"Publishing Results to S3-Compatible Destinations"}),"\n",(0,t.jsx)(n.p,{children:"You can publish your results to Amazon s3 or other S3-compatible destinations like MinIO, Ceph, or SeaweedFS to conveniently store and share your outputs."}),"\n",(0,t.jsx)(n.h3,{id:"publisher-spec",children:"Publisher Spec"}),"\n",(0,t.jsx)(n.p,{children:"To facilitate publishing results, define publishers and their configurations using the PublisherSpec structure."}),"\n",(0,t.jsx)(n.p,{children:"For S3-compatible destinations, the configuration is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'type PublisherSpec struct {\n    Type   Publisher              `json:"Type,omitempty"`\n    Params map[string]interface{} `json:"Params,omitempty"`\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"For Amazon S3, you can specify the PublisherSpec configuration as shown below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"PublisherSpec:\n  Type: S3\n  Params:\n    Bucket: <bucket>              # Specify the bucket where results will be stored\n    Key: <object-key>             # Define the object key (supports dynamic naming using placeholders)\n    Compress: <true/false>        # Specify whether to publish results as a single gzip file (default: false)\n    Endpoint: <optional>          # Optionally specify the S3 endpoint\n    Region: <optional>            # Optionally specify the S3 region\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(n.p,{children:"Let's explore some examples to illustrate how you can use this:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Publishing results to S3 using default settings"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"bacalhau docker run -p s3://<bucket>/<object-key> ubuntu ...\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Publishing results to S3 with a custom endpoint and region:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"bacalhau docker run -p s3://<bucket>/<object-key>,opt=endpoint=http://s3.example.com,opt=region=us-east-1 ubuntu ...\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Publishing results to S3 as a single compressed file"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"bacalhau docker run -p s3://<bucket>/<object-key>,opt=compress=true ubuntu ...\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Utilizing naming placeholders in the object key"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"bacalhau docker run -p s3://<bucket>/result-{date}-{jobID} ubuntu ...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"content-identification",children:"Content Identification"}),"\n",(0,t.jsx)(n.p,{children:"Tracking content identification and maintaining lineage across different jobs' inputs and outputs can be challenging. To address this, the publisher encodes the SHA-256 checksum of the published results, specifically when publishing a single compressed file."}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of a sample result:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "NodeID": "QmYJ9QN9Pbi6gBKNrXVk5J36KSDGL5eUT6LMLF5t7zyaA7",\n    "Data": {\n        "StorageSource": "S3",\n        "Name": "s3://<bucket>/run3.tar.gz",\n        "S3": {\n            "Bucket": "<bucket>",\n            "Key": "run3.tar.gz",\n            "Checksum": "e0uDqmflfT9b+rMfoCnO5G+cy+8WVTOPUtAqDMnXWbw=",\n            "VersionID": "hZoNdqJsZxE_bFm3UGJuJ0RqkITe9dQ1"\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"support-for-the-s3-compatible-storage-provider",children:"Support for the S3-compatible storage provider"}),"\n",(0,t.jsx)(n.p,{children:"To enable support for the S3-compatible storage provider, no additional dependencies are required. However, valid AWS credentials are necessary to sign the requests. The storage provider uses the default credentials chain, which checks the following sources for credentials:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Environment variables, such as ",(0,t.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"})," and ",(0,t.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})]}),"\n",(0,t.jsxs)(n.li,{children:["Credentials file ",(0,t.jsx)(n.code,{children:"~/.aws/credentials"})]}),"\n",(0,t.jsx)(n.li,{children:"IAM Roles for Amazon EC2 Instances"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"need-support",children:"Need Support?"}),"\n",(0,t.jsxs)(n.p,{children:["For questions, feedback, please reach out in our ",(0,t.jsx)(n.a,{href:"https://github.com/filecoin-project/bacalhau/discussions",children:"forum"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var t=s(7294);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);