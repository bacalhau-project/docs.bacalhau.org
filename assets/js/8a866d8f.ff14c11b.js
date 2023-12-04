"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3618],{6836:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var n=s(5893),i=s(1151);const t={sidebar_label:"Simple Image Processing",sidebar_position:4,description:"How to process images stored in IPFS with Bacalhau"},o="Simple Image Processing",r={id:"examples/data-engineering/image-processing/index",title:"Simple Image Processing",description:"How to process images stored in IPFS with Bacalhau",source:"@site/docs/examples/data-engineering/image-processing/index.md",sourceDirName:"examples/data-engineering/image-processing",slug:"/examples/data-engineering/image-processing/",permalink:"/examples/data-engineering/image-processing/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/image-processing/index.md",tags:[],version:"current",lastUpdatedAt:1701669642,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Simple Image Processing",sidebar_position:4,description:"How to process images stored in IPFS with Bacalhau"},sidebar:"documentationSidebar",previous:{title:"DuckDB",permalink:"/examples/data-engineering/DuckDB/"},next:{title:"Oceanography - Data Conversion",permalink:"/examples/data-engineering/oceanography-conversion/"}},c={},l=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Display the image",id:"display-the-image",level:3},{value:"Need Support?",id:"need-support",level:2}];function d(e){const a={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"simple-image-processing",children:"Simple Image Processing"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.a,{href:"https://github.com/bacalhau-project/bacalhau",children:(0,n.jsx)(a.img,{src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"})})}),"\n",(0,n.jsxs)(a.p,{children:["In this example tutorial, we will show you how to use Bacalhau to process images on a ",(0,n.jsx)(a.a,{href:"https://ipfs.io/ipfs/QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72/",children:"Landsat dataset"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Bacalhau has the unique capability of operating at a massive scale in a distributed environment. This is made possible because data is naturally sharded across the IPFS network amongst many providers. We can take advantage of this to process images in parallel."}),"\n",(0,n.jsx)(a.h2,{id:"tdlr",children:"TD;LR"}),"\n",(0,n.jsx)(a.p,{children:"Processing of images from a dataset using Bacalhau"}),"\n",(0,n.jsx)(a.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,n.jsxs)(a.p,{children:["To get started, you need to install the Bacalhau client, see more information ",(0,n.jsx)(a.a,{href:"https://docs.bacalhau.org/getting-started/installation",children:"here"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"running-a-bacalhau-job",children:"Running a Bacalhau Job"}),"\n",(0,n.jsxs)(a.p,{children:["To submit a workload to Bacalhau, we will use the ",(0,n.jsx)(a.code,{children:"bacalhau docker run"})," command."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"%%bash --out job_id\nbacalhau docker run \\\n  --wait \\\n  --wait-timeout-secs 100 \\\n  --id-only \\\n  -i ipfs://QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/input_images \\\n  dpokidov/imagemagick:7.1.0-47-ubuntu \\\n  -- magick mogrify -resize 100x100 -quality 100 -path /outputs '/input_images/*.jpg'\n"})}),"\n",(0,n.jsx)(a.p,{children:"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"%env JOB_ID={job_id}\n"})}),"\n",(0,n.jsx)(a.p,{children:"env: JOB_ID=bf785b4d-dcac-4f4a-9c63-cf9906aa2941"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"bacalhau docker run"})," command allows to pass input data volume with a ",(0,n.jsx)(a.code,{children:"-i ipfs://CID:path"})," argument just like Docker, except the left-hand side of the argument is a ",(0,n.jsx)(a.a,{href:"https://github.com/multiformats/cid",children:"content identifier (CID)"}),". This results in Bacalhau mounting a ",(0,n.jsx)(a.em,{children:"data volume"})," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,n.jsx)(a.code,{children:"/inputs"})," inside the container."]}),"\n",(0,n.jsxs)(a.p,{children:["Bacalhau also mounts a data volume to store output data. The ",(0,n.jsx)(a.code,{children:"bacalhau docker run"})," command creates an output data volume mounted at ",(0,n.jsx)(a.code,{children:"/outputs"}),". This is a convenient location to store the results of your job."]}),"\n",(0,n.jsx)(a.h2,{id:"checking-the-state-of-your-jobs",children:"Checking the State of your Jobs"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Job status"}),": You can check the status of the job using ",(0,n.jsx)(a.code,{children:"bacalhau list"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n"})}),"\n",(0,n.jsxs)(a.p,{children:["CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED",(0,n.jsx)(a.br,{}),"\n","00:26:44  bf785b4d  Docker dpokidov/imag...  Completed            ipfs://QmQnern37ueHr..."]}),"\n",(0,n.jsxs)(a.p,{children:["When it says ",(0,n.jsx)(a.code,{children:"Published"})," or ",(0,n.jsx)(a.code,{children:"Completed"}),", that means the job is done, and we can get the results."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Job information"}),": You can find out more information about your job by using ",(0,n.jsx)(a.code,{children:"bacalhau describe"}),"."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"%%bash\nbacalhau describe ${JOB_ID}\n"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Job download"}),": You can download your job results directly by using ",(0,n.jsx)(a.code,{children:"bacalhau get"}),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir results # Temporary directory to store the results\nbacalhau get ${JOB_ID} --output-dir results # Download the results\n"})}),"\n",(0,n.jsx)(a.p,{children:"After the download has finished you should see the following contents in results directory."}),"\n",(0,n.jsx)(a.h2,{id:"viewing-your-job-output",children:"Viewing your Job Output"}),"\n",(0,n.jsx)(a.p,{children:"To view the file, run the following command:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"%%bash\nls -lah results/outputs\n"})}),"\n",(0,n.jsx)(a.h3,{id:"display-the-image",children:"Display the image"}),"\n",(0,n.jsxs)(a.p,{children:["To view the images, we will use ",(0,n.jsx)(a.strong,{children:"glob"})," to return all file paths that match a specific pattern."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"import glob\nfrom IPython.display import Image, display\nfor imageName in glob.glob('results/outputs/*.jpg'):\n    display(Image(filename=imageName))\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"jpeg",src:s(5529).Z+"",width:"100",height:"87"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"jpeg",src:s(4250).Z+"",width:"100",height:"79"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"jpeg",src:s(520).Z+"",width:"100",height:"72"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"jpeg",src:s(330).Z+"",width:"100",height:"89"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"jpeg",src:s(6694).Z+"",width:"100",height:"75"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"jpeg",src:s(9182).Z+"",width:"94",height:"100"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"jpeg",src:s(6328).Z+"",width:"100",height:"88"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"jpeg",src:s(2399).Z+"",width:"100",height:"72"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"jpeg",src:s(3687).Z+"",width:"100",height:"82"})}),"\n",(0,n.jsx)(a.h2,{id:"need-support",children:"Need Support?"}),"\n",(0,n.jsxs)(a.p,{children:["For questions, feedback, please reach out in our ",(0,n.jsx)(a.a,{href:"https://github.com/filecoin-project/bacalhau/discussions",children:"forum"})]})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5529:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/index_21_0-6d86471f6f5224aff3a7681fa856c6c7.jpg"},4250:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/index_21_1-8e2c87e8602032b3effac0d28205f613.jpg"},520:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/index_21_2-d00b83ba4b35b9623cd36739dfed9ce8.jpg"},330:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/index_21_3-eccd956fa658f24f64d54b0b11cb479e.jpg"},6694:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/index_21_4-284579a9a15ee50f872330fa318fecd0.jpg"},9182:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/index_21_5-15ce99181444dd71784a87734fe7e150.jpg"},6328:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/index_21_6-ce1d76e887dbf8925dfa4caff69f2a8e.jpg"},2399:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/index_21_7-8062fe8d98d74f02b0c65b844f9339a0.jpg"},3687:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/index_21_8-cc2844b1f2ae0e1e773774f3219c0025.jpg"},1151:(e,a,s)=>{s.d(a,{Z:()=>r,a:()=>o});var n=s(7294);const i={},t=n.createContext(i);function o(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);