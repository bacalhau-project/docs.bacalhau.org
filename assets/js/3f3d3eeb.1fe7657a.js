"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4898],{9120:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(5893),a=r(1151);const i={sidebar_label:"EasyOCR",sidebar_position:8},o="EasyOCR (Optical Character Recognition) on Bacalhau",s={id:"examples/model-inference/EasyOCR/index",title:"EasyOCR (Optical Character Recognition) on Bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/model-inference/EasyOCR/index.md",sourceDirName:"examples/model-inference/EasyOCR",slug:"/examples/model-inference/EasyOCR/",permalink:"/examples/model-inference/EasyOCR/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/EasyOCR/index.md",tags:[],version:"current",lastUpdatedAt:1700058439,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:8,frontMatter:{sidebar_label:"EasyOCR",sidebar_position:8},sidebar:"documentationSidebar",previous:{title:"StyleGAN3",permalink:"/examples/model-inference/StyleGAN3/"},next:{title:"Speech Recognition using Whisper",permalink:"/examples/model-inference/Openai-Whisper/"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"TD",id:"td",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running Easy OCR Locally\u200b",id:"running-easy-ocr-locally",level:2},{value:"Containerize your Script using Docker",id:"containerize-your-script-using-docker",level:2},{value:"Build the Container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Bacalhau Job to Generate Easy OCR output",id:"running-a-bacalhau-job-to-generate-easy-ocr-output",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"easyocr-optical-character-recognition-on-bacalhau",children:"EasyOCR (Optical Character Recognition) on Bacalhau"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/bacalhau-project/bacalhau",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"})})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["In this example tutorial, we use Bacalhau and Easy OCR to digitize paper records or for recognizing characters or extract text data from images stored on IPFS/Filecoin or on the web. ",(0,t.jsx)(n.a,{href:"https://www.jaided.ai/",children:"EasyOCR"})," is a ready-to-use OCR with 80+ supported languages and all popular writing scripts including Latin, Chinese, Arabic, Devanagari, Cyrillic and etc. With easy OCR you use the pre-trained models or use your own fine-tuned model."]}),"\n",(0,t.jsxs)(n.h2,{id:"td",children:["TD",":LR"]}),"\n",(0,t.jsx)(n.p,{children:"Using Bacalhau and Easy OCR to extract text data from images stored on the web."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(n.p,{children:["To get started, you need to install the Bacalhau client, see more information ",(0,t.jsx)(n.a,{href:"https://docs.bacalhau.org/getting-started/installation",children:"here"})]}),"\n",(0,t.jsx)(n.h2,{id:"running-easy-ocr-locally",children:"Running Easy OCR Locally\u200b"}),"\n",(0,t.jsx)(n.p,{children:"Install the required dependencies"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\npip install easyocr\n"})}),"\n",(0,t.jsx)(n.p,{children:"Load the different example images"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nnpx degit JaidedAI/EasyOCR/examples -f\n"})}),"\n",(0,t.jsx)(n.p,{children:"List all the images"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nls -l\n"})}),"\n",(0,t.jsx)(n.p,{children:"total 3508\n-rw-r--r-- 1 root root   59898 Jun 16 22:36 chinese.jpg\n-rw-r--r-- 1 root root   97910 Jun 16 22:36 easyocr_framework.jpeg\n-rw-r--r-- 1 root root 1740957 Jun 16 22:36 english.png\n-rw-r--r-- 1 root root  487995 Jun 16 22:36 example2.png\n-rw-r--r-- 1 root root  127454 Jun 16 22:36 example3.png\n-rw-r--r-- 1 root root  488641 Jun 16 22:36 example.png\n-rw-r--r-- 1 root root  168376 Jun 16 22:36 french.jpg\n-rw-r--r-- 1 root root   42159 Jun 16 22:36 japanese.jpg\n-rw-r--r-- 1 root root  225531 Jun 16 22:36 korean.png\ndrwxr-xr-x 1 root root    4096 Jun 15 13:37 sample_data\n-rw-r--r-- 1 root root   82229 Jun 16 22:36 thai.jpg\n-rw-r--r-- 1 root root   34706 Jun 16 22:36 width_ths.png"}),"\n",(0,t.jsx)(n.p,{children:"To displaying an image from the list"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# show an image\nimport PIL\nfrom PIL import ImageDraw\nim = PIL.Image.open("thai.jpg")\n'})}),"\n",(0,t.jsx)(n.p,{children:"Next, we create a reader to do OCR to get coordinates which represent a rectangle containing text and the text itself"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# If you change to GPU instance, it will be faster. But CPU is enough.\n# (by MENU > Runtime > Change runtime type > GPU, then redo from beginning )\nimport easyocr\nreader = easyocr.Reader(['th','en'])\n# Doing OCR. Get bounding boxes.\nbounds = reader.readtext('thai.jpg')\nbounds\n"})}),"\n",(0,t.jsx)(n.h2,{id:"containerize-your-script-using-docker",children:"Containerize your Script using Docker"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You can skip this step and go straight to running a Bacalhau job"})}),"\n",(0,t.jsxs)(n.p,{children:["We will use the ",(0,t.jsx)(n.code,{children:"Dockerfile"})," that is already created in the ",(0,t.jsx)(n.a,{href:"https://github.com/JaidedAI/EasyOCR",children:"Easy OCR repo"}),". Use the command below to clone the repo"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"git clone https://github.com/JaidedAI/EasyOCR\ncd EasyOCR\n"})}),"\n",(0,t.jsx)(n.h3,{id:"build-the-container",children:"Build the Container"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"docker build"})," command builds Docker images from a Dockerfile."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker build -t hub-user/repo-name:tag .\n"})}),"\n",(0,t.jsx)(n.p,{children:"Before running the command replace;"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"hub-user"})," with your docker hub username, If you don\u2019t have a docker hub account ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/docker-id/",children:"follow these instructions to create docker account"}),", and use the username of the account you created"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"repo-name"})," with the name of the container, you can name it anything you want"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"tag"})," this is not required but you can use the latest tag"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"push-the-container",children:"Push the container"}),"\n",(0,t.jsx)(n.p,{children:"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name, or tag."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker push <hub-user>/<repo-name>:<tag>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"running-a-bacalhau-job-to-generate-easy-ocr-output",children:"Running a Bacalhau Job to Generate Easy OCR output"}),"\n",(0,t.jsx)(n.p,{children:"After the repo image has been pushed to Docker Hub, we can now use the container for running on Bacalhau. To submit a job, run the following Bacalhau command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash --out job_id\nbacalhau docker run \\\n-i ipfs://bafybeibvcllzpfviggluobcfassm3vy4x2a4yanfxtmn4ir7olyzfrgq64:/root/.EasyOCR/model/zh_sim_g2.pth  \\\n-i https://raw.githubusercontent.com/JaidedAI/EasyOCR/ae773d693c3f355aac2e58f0d8142c600172f016/examples/chinese.jpg \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n--gpu 1  \\\n--id-only \\\n--wait \\\njsacex/easyocr \\\n--  easyocr -l ch_sim  en -f ./inputs/chinese.jpg --detail=1 --gpu=True\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since the model and the image aren't present in the container we will mount the image from an URL and the model from IPFS. You can find models to download from ",(0,t.jsx)(n.a,{href:"https://www.jaided.ai/easyocr/modelhub/",children:"here"}),". You can choose the model you want to use in this case we will be using the zh_sim_g2 model"]}),"\n",(0,t.jsx)(n.h3,{id:"structure-of-the-command",children:"Structure of the command"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-i ipfs://bafybeibvc......"}),": Mounting the model from IPFS"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-i https://raw.githubusercontent.com........."})," Mounting the Input Image from a URL"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--gpu 1"}),": Specifying the no of GPUs"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"jsacex/easyocr"}),": Name of the Docker image"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Breaking up the easyocr command"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"--  easyocr -l ch_sim  en -f ./inputs/chinese.jpg --detail=1 --gpu=True"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-l"}),": the name of the model which is ch_sim"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"-f"}),": path to the input Image or directory"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--detail=1"}),":  level of detail"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--gpu=True"}),": we set this flag to true since we are running inference on a GPU, if you run this on a CPU you set this to false"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["When a job is submitted, Bacalhau prints out the related ",(0,t.jsx)(n.code,{children:"job_id"}),". We store that in an environment variable so that we can reuse it later on."]}),"\n",(0,t.jsx)(n.h2,{id:"checking-the-state-of-your-jobs",children:"Checking the State of your Jobs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job status"}),": You can check the status of the job using ",(0,t.jsx)(n.code,{children:"bacalhau list"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau list --id-filter ${JOB_ID}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When it says ",(0,t.jsx)(n.code,{children:"Completed"}),", that means the job is done, and we can get the results."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job information"}),": You can find out more information about your job by using ",(0,t.jsx)(n.code,{children:"bacalhau describe"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau describe ${JOB_ID}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Job download"}),": You can download your job results directly by using ",(0,t.jsx)(n.code,{children:"bacalhau get"}),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the download has finished you should see the following contents in the results directory"}),"\n",(0,t.jsx)(n.h2,{id:"viewing-your-job-output",children:"Viewing your Job Output"}),"\n",(0,t.jsx)(n.p,{children:"To view the file, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"%%bash\nls results/ # list the contents of the current directory \ncat results/stdout # displays the contents of the current directory \n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(7294);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);