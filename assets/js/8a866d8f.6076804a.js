"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1728:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_label:"Simple Image Processing",sidebar_position:4,description:"How to process images stored in IPFS with Bacalhau"},o="Simple Image Processing",s={unversionedId:"examples/data-engineering/image-processing/index",id:"examples/data-engineering/image-processing/index",title:"Simple Image Processing",description:"How to process images stored in IPFS with Bacalhau",source:"@site/docs/examples/data-engineering/image-processing/index.md",sourceDirName:"examples/data-engineering/image-processing",slug:"/examples/data-engineering/image-processing/",permalink:"/examples/data-engineering/image-processing/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/image-processing/index.md",tags:[],version:"current",lastUpdatedAt:1693819129,formattedLastUpdatedAt:"Sep 4, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Simple Image Processing",sidebar_position:4,description:"How to process images stored in IPFS with Bacalhau"},sidebar:"documentationSidebar",previous:{title:"DuckDB",permalink:"/examples/data-engineering/DuckDB/"},next:{title:"Oceanography - Data Conversion",permalink:"/examples/data-engineering/oceanography-conversion/"}},l={},p=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Display the image",id:"display-the-image",level:3},{value:"Need Support?",id:"need-support",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simple-image-processing"},"Simple Image Processing"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,i.kt)("p",null,"In this example tutorial, we will show you how to use Bacalhau to process images on a ",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72/"},"Landsat dataset"),". "),(0,i.kt)("p",null,"Bacalhau has the unique capability of operating at a massive scale in a distributed environment. This is made possible because data is naturally sharded across the IPFS network amongst many providers. We can take advantage of this to process images in parallel."),(0,i.kt)("h2",{id:"tdlr"},"TD;LR"),(0,i.kt)("p",null,"Processing of images from a dataset using Bacalhau"),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,i.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,i.kt)("p",null,"To submit a workload to Bacalhau, we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n  --wait \\\n  --wait-timeout-secs 100 \\\n  --id-only \\\n  -i ipfs://QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/input_images \\\n  dpokidov/imagemagick:7.1.0-47-ubuntu \\\n  -- magick mogrify -resize 100x100 -quality 100 -path /outputs '/input_images/*.jpg'\n")),(0,i.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"env: JOB_ID=bf785b4d-dcac-4f4a-9c63-cf9906aa2941\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command allows to pass input data volume with a ",(0,i.kt)("inlineCode",{parentName:"p"},"-i ipfs://CID:path")," argument just like Docker, except the left-hand side of the argument is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)"),". This results in Bacalhau mounting a ",(0,i.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,i.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,i.kt)("p",null,"Bacalhau also mounts a data volume to store output data. The ",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command creates an output data volume mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/outputs"),". This is a convenient location to store the results of your job. "),(0,i.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,i.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED               \n 00:26:44  bf785b4d  Docker dpokidov/imag...  Completed            ipfs://QmQnern37ueHr... \n")),(0,i.kt)("p",null,"When it says ",(0,i.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,i.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,i.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir results # Temporary directory to store the results\nbacalhau get ${JOB_ID} --output-dir results # Download the results\n")),(0,i.kt)("p",null,"After the download has finished you should see the following contents in results directory."),(0,i.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,i.kt)("p",null,"To view the file, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -lah results/outputs\n")),(0,i.kt)("h3",{id:"display-the-image"},"Display the image"),(0,i.kt)("p",null,"To view the images, we will use ",(0,i.kt)("strong",{parentName:"p"},"glob")," to return all file paths that match a specific pattern. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import glob\nfrom IPython.display import Image, display\nfor imageName in glob.glob('results/outputs/*.jpg'):\n    display(Image(filename=imageName))\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(5529).Z,width:"100",height:"87"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(4250).Z,width:"100",height:"79"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(520).Z,width:"100",height:"72"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(330).Z,width:"100",height:"89"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(6694).Z,width:"100",height:"75"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(9182).Z,width:"94",height:"100"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(6328).Z,width:"100",height:"88"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(2399).Z,width:"100",height:"72"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(3687).Z,width:"100",height:"82"})),(0,i.kt)("h2",{id:"need-support"},"Need Support?"),(0,i.kt)("p",null,"For questions, feedback, please reach out in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}d.isMDXComponent=!0},5529:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_21_0-6d86471f6f5224aff3a7681fa856c6c7.jpg"},4250:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_21_1-8e2c87e8602032b3effac0d28205f613.jpg"},520:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_21_2-d00b83ba4b35b9623cd36739dfed9ce8.jpg"},330:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_21_3-eccd956fa658f24f64d54b0b11cb479e.jpg"},6694:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_21_4-284579a9a15ee50f872330fa318fecd0.jpg"},9182:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_21_5-15ce99181444dd71784a87734fe7e150.jpg"},6328:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_21_6-ce1d76e887dbf8925dfa4caff69f2a8e.jpg"},2399:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_21_7-8062fe8d98d74f02b0c65b844f9339a0.jpg"},3687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_21_8-cc2844b1f2ae0e1e773774f3219c0025.jpg"}}]);