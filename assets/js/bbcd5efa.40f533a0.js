"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9345],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<s;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6973:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const s={sidebar_label:"From S3",sidebar_position:3},r="Copy Data from S3 to IPFS",i={unversionedId:"examples/data-ingestion/s3-to-ipfs/index",id:"examples/data-ingestion/s3-to-ipfs/index",title:"Copy Data from S3 to IPFS",description:"Open In Colab",source:"@site/docs/examples/data-ingestion/s3-to-ipfs/index.md",sourceDirName:"examples/data-ingestion/s3-to-ipfs",slug:"/examples/data-ingestion/s3-to-ipfs/",permalink:"/examples/data-ingestion/s3-to-ipfs/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-ingestion/s3-to-ipfs/index.md",tags:[],version:"current",lastUpdatedAt:1676466867,formattedLastUpdatedAt:"Feb 15, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"From S3",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Pinning to Filecoin",permalink:"/examples/data-ingestion/pinning/"},next:{title:"How To's",permalink:"/examples/workload-onboarding/"}},l={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Getting the URLs from AWS S3 bucket",id:"getting-the-urls-from-aws-s3-bucket",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Copying the data from AWS S3 to IPFS",id:"copying-the-data-from-aws-s3-to-ipfs",level:2},{value:"List the outputs of the jobs in json format",id:"list-the-outputs-of-the-jobs-in-json-format",level:3},{value:"Need Support?",id:"need-support",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"copy-data-from-s3-to-ipfs"},"Copy Data from S3 to IPFS"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-ingestion/s3-to-ipfs/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-ingestion/s3-to-ipfs/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,"In this tutorial, to copy Data from S3 to IPFS, we will scrape all the links from a public AWS S3 buckets and then copy the data to IPFS using Bacalhau. "),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("h2",{id:"getting-the-urls-from-aws-s3-bucket"},"Getting the URLs from AWS S3 bucket"),(0,o.kt)("p",null,"If your bucket has more than 1000 files, with the command below, you can submit a Bacalhau job to extract the URL list of the files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n-u https://noaa-goes16.s3.amazonaws.com/ \\\n-v QmR1qXs8Y8T7G6F2Yy91sDTWG6WAhoFrCjMGRvy7N1y5LC:/extract.py \\\n--id-only \\\n--wait \\\npython \\\n-- /bin/bash -c 'python3 extract.py https://noaa-goes16.s3.amazonaws.com/  /inputs'\n")),(0,o.kt)("p",null,"Before running the command above, replace the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-u  https://noaa-goes16.s3.amazonaws.com/"),": we replace the placeholders with ",(0,o.kt)("inlineCode",{parentName:"p"},"noaa-goes16")," which is the name of the bucket we want to extract URLs from")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-v QmR1qXs8Y8T7G6F2Yy91sDTWG6WAhoFrCjMGRvy7N1y5LC:/extract.py \\"),": Mounting the scrapper script, this script extracts the links from the XML document tree")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-- /bin/bash -c 'python3 extract.py https://noaa-goes16.s3.amazonaws.com/  /inputs'"),": Executing the scrapper script"))),(0,o.kt)("p",null,"The command above extracts the path of the file in the bucket, we added the URL as a prefix to the path ",(0,o.kt)("inlineCode",{parentName:"p"},"https://noaa-goes16.s3.amazonaws.com/"),"  then provided the path where the XML document tree of the URL is mounted which is ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")),(0,o.kt)("p",null,"When a job is sumbitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"There are certain limitations to this step, as this only works with datasets that are publicly accessible and don't require an AWS account or pay to use buckets and possibly only limited to first 1000 URLs.")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED           \x1b[0m\x1b[92;100m ID                                   \x1b[0m\x1b[92;100m JOB                                                                                          \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED                                            \x1b[0m\n\x1b[97;40m 22-11-13-13:52:12 \x1b[0m\x1b[97;40m 12e1b4d9-00b0-4824-bbd1-6d75083dcae0 \x1b[0m\x1b[97;40m Docker python /bin/bash -c python3 extract.py https://noaa-goes16.s3.amazonaws.com/  /inputs \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmaxiCCJ5vuwEfA2x7VVvMUXHxHN6iYNPhmvFhXSyUyNYx \x1b[0m\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results # Temporary directory to store the results\nbacalhau get $JOB_ID --output-dir results # Download the results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fetching results of job '12e1b4d9-00b0-4824-bbd1-6d75083dcae0'...\nResults for job '12e1b4d9-00b0-4824-bbd1-6d75083dcae0' have been written to...\nresults\n\n\n2022/11/13 13:53:09 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n")),(0,o.kt)("p",null,"After the download has finished you should see the following contents in results directory."),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"Each job creates 3 subfolders: the ",(0,o.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,o.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,o.kt)("strong",{parentName:"p"},"raw")," directory. To view your file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nhead -10 results/combined_results/stdout\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170671748180.nc\nhttps://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170691603180.nc\nhttps://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170751219598.nc\nhttps://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752149454.nc\nhttps://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752204183.nc\nhttps://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752234173.nc\nhttps://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170901216521.nc\nhttps://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170951807462.nc\nhttps://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171000619157.nc\nhttps://noaa-goes16.s3.amazonaws.com/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171061215161.nc\n")),(0,o.kt)("h2",{id:"copying-the-data-from-aws-s3-to-ipfs"},"Copying the data from AWS S3 to IPFS"),(0,o.kt)("p",null,"From the output of the job we ran above, we extracted the links that we want.next is to save them to IPFS using Bacalhau."),(0,o.kt)("p",null,"Selecting the first ten links"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nhead -10 results/combined_results/stdout > links.txt\n")),(0,o.kt)("p",null,"Selecting all the links"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat results/combined_results/stdout > links.txt\n")),(0,o.kt)("p",null,"Creating a script to submit jobs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile move.sh\n#!/usr/bin/env bash\nwhile read URL; do\n  bacalhau docker run --input-urls="${URL}" \\\n  --id-only \\\n  --wait \\\n  docker.io/bacalhauproject/uploader:v0.9.14\ndone < links.txt\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Overwriting move.sh\n")),(0,o.kt)("p",null,"Running the script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbash move.sh\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"c5c0b6dd-ce86-4b19-b666-43e3ed6fb0b4\n0a599b27-3063-46a4-82ae-244e653e0187\n2c8b7427-ee96-49b4-9516-c8596669b15f\n2cd130c1-c007-4715-a3e5-6c2d81456c09\n8c68e7be-5f85-4f2e-9cb8-3c2bb91748ae\n2850f638-6541-4ee4-9c4a-9d650699671f\nd6fb611c-a5c8-4515-9fae-53f7c7a0cfec\n6e453d0e-0baf-4905-9fa8-5ce54e5d4b65\n8177fe99-920d-4410-9cc6-bd9d0bf70f8e\n9c1acb25-6fec-4d14-a91a-4a1f60f985b9\n")),(0,o.kt)("h3",{id:"list-the-outputs-of-the-jobs-in-json-format"},"List the outputs of the jobs in json format"),(0,o.kt)("p",null,"In this case, we will move the first 10 URLs and set the no of jobs to 10 ",(0,o.kt)("inlineCode",{parentName:"p"},"-n 10"),". If you have submitted the whole list you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"-n")," to 1000"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list -n 10 --output json > output.json\n")),(0,o.kt)("p",null,"Installing jq to extract CID from the results"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nsudo apt update\nsudo apt install jq\n")),(0,o.kt)("p",null,"Extracting the CIDs from output json"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash\njq \'.[] ."JobState" ."Nodes"\' output.json > output-shards.json\njq \'.[]."Shards"."0"."PublishedResults"."CID" | select( . != null )\'  output-shards.json\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"QmV2uYcS7TqQGDvsLnoC2yn1inKoec9vVyTa548Gg6VTkr"\n"QmaZXQSxFDMjneyCv7ZjXdgWTNbLwPRmSEy3PMPjByeQZw"\n"QmQkafCQoSCevLN6hJKCJYRK67z3VEsFWk7qSq85GW9NUt"\n"QmZFzHeACRcqfPwTCzCfsikDLixX1NdBXCG6RHH1iiuCiY"\n"QmdZQ8vmzWRuzn9jVgzRxKnBhLsX1TQwvfT6QZdNDzcCsR"\n"QmVTL12jSTNR62zyM8zX7jVSCp1Mb5B2PUV1xkct4vo1SP"\n"QmaN5p8zteJ868cbmThTHd4yumB5eetWxXoLbcP4hWBzF1"\n"Qme3kw2tbNfmFPHXydDK9dKLzwfry8b2dxD5s4L1ij9QAL"\n"QmYki5KZQHroo1zzYWfPYrnNRDec8MVjkrvSRBCQqMzvHY"\n"QmNjarM2oxMPwN4cpQcy6NhuNbe4opHyfdce149oYkasjG"\n')),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"For questions, feedback, please reach out in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}u.isMDXComponent=!0}}]);