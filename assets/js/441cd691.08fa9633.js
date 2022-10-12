"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const l={sidebar_label:"Stable-Diffusion-CPU",sidebar_position:1},r="Stable Diffusion",i={unversionedId:"examples/model-inference/stable-diffusion/index",id:"examples/model-inference/stable-diffusion/index",title:"Stable Diffusion",description:"Open In Colab",source:"@site/docs/examples/model-inference/stable-diffusion/index.md",sourceDirName:"examples/model-inference/stable-diffusion",slug:"/examples/model-inference/stable-diffusion/",permalink:"/examples/model-inference/stable-diffusion/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/stable-diffusion/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Stable-Diffusion-CPU",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Model Inference",permalink:"/examples/model-inference/"},next:{title:"Stable-Diffusion-Keras-GPU",permalink:"/examples/model-inference/gpu-keras-stable-diffusion/"}},s={},p=[{value:"<strong>Prompt</strong>",id:"prompt",level:4},{value:"<strong>Output</strong>",id:"output",level:4},{value:"<strong>Running Stable-Diffusion Locally</strong>",id:"running-stable-diffusion-locally",level:2},{value:"<strong>Building and Running on docker</strong>",id:"building-and-running-on-docker",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stable-diffusion"},"Stable Diffusion"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-inference/stable-diffusion/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-inference/stable-diffusion/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/CompVis/stable-diffusion"},"Stable Diffusion")," is a state of the art text-to-image model that generates images from text."),(0,o.kt)("p",null,"it was developed as an open source alternative to ",(0,o.kt)("a",{parentName:"p",href:"https://openai.com/dall-e-2/"},"DALL\xb7E 2")," from OpenAI"),(0,o.kt)("p",null,"To generate an Image you need to provide a prompt which is a description of the Image you want to generate"),(0,o.kt)("h4",{id:"prompt"},(0,o.kt)("strong",{parentName:"h4"},"Prompt")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Speed of Light\n")),(0,o.kt)("h4",{id:"output"},(0,o.kt)("strong",{parentName:"h4"},"Output")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/cCuXiWe.jpg",alt:null})),(0,o.kt)("h2",{id:"running-stable-diffusion-locally"},(0,o.kt)("strong",{parentName:"h2"},"Running Stable-Diffusion Locally")),(0,o.kt)("p",null,"To run stable diffusion locally follow these steps"),(0,o.kt)("p",null,"Clone this repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/js-ts/stable_diffusion.openvino"},"https://github.com/js-ts/stable_diffusion.openvino")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/js-ts/stable_diffusion.openvino\n")),(0,o.kt)("p",null,"After cloning change directory into the repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd stable_diffusion.openvino\n")),(0,o.kt)("p",null,"Installing prerequisites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install -y libgl1 libglib2.0-0 git-lfs\n")),(0,o.kt)("p",null,"Install git lfs to download the model and diffuser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git lfs install\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Error: Failed to call git rev-parse --git-dir --show-toplevel: "fatal: not a git repository (or any of the parent directories): .git\\n"\nGit LFS initialized.\n')),(0,o.kt)("p",null,"Clone the Model and Diffuser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://huggingface.co/openai/clip-vit-large-patch14\ngit clone https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino\n")),(0,o.kt)("p",null,"Install python dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -r stable_diffusion.openvino/requirements.txt\n")),(0,o.kt)("p",null,"Running the program"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'!python3 stable_diffusion.openvino/demo.py --prompt "hello" --output hello.png\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ftfy or spacy is not installed using BERT BasicTokenizer instead of ftfy.\ntcmalloc: large alloc 3438092288 bytes == 0x329b2000 @  0x7fc47fab71e7 0x7fc46de573f6 0x7fc46db1e1e3 0x7fc3e0e50944 0x7fc46dfe649c 0x7fc46dc486e5 0x7fc46dbb3305 0x7fc46e53495e 0x7fc46e564d0e 0x58ec54 0x58fc01 0x51b7fd 0x5b41c5 0x4ba80a 0x537e46 0x58ff66 0x51bbc5 0x58f2a7 0x51740e 0x5b41c5 0x604133 0x606e06 0x606ecc 0x609aa6 0x64d332 0x64d4de 0x7fc47f6b4c87 0x5b561a\n32it [12:36, 23.65s/it]\n")),(0,o.kt)("p",null,"Displaying the Image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("hello.png")\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"png",src:n(7882).Z,width:"512",height:"512"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'python3 stable_diffusion.openvino/demo.py --prompt "cat driving a car" --output cat.png\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ftfy or spacy is not installed using BERT BasicTokenizer instead of ftfy.\ntcmalloc: large alloc 3438092288 bytes == 0x326d8000 @  0x7f388d6e61e7 0x7f387ba863f6 0x7f387b74d1e3 0x7f37eef65944 0x7f387bc1549c 0x7f387b8776e5 0x7f387b7e2305 0x7f387c16395e 0x7f387c193d0e 0x58ec54 0x58fc01 0x51b7fd 0x5b41c5 0x4ba80a 0x537e46 0x58ff66 0x51bbc5 0x58f2a7 0x51740e 0x5b41c5 0x604133 0x606e06 0x606ecc 0x609aa6 0x64d332 0x64d4de 0x7f388d2e3c87 0x5b561a\n32it [14:44, 27.64s/it]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("cat.png")\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"png",src:n(7515).Z,width:"512",height:"512"})),(0,o.kt)("h2",{id:"building-and-running-on-docker"},(0,o.kt)("strong",{parentName:"h2"},"Building and Running on docker")),(0,o.kt)("p",null,"In this step you will create a  ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to create your Docker deployment. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is a text document that contains the commands used to assemble the image."),(0,o.kt)("p",null,"First, create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,o.kt)("p",null,"Next, add your desired configuration to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". These commands specify how the image will be built, and what extra requirements will be included."),(0,o.kt)("p",null,"Dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'FROM python:3.9.9-bullseye\n\nWORKDIR /src\n\nRUN apt-get update && \\\n    apt-get install -y \\\n    libgl1 libglib2.0-0 git-lfs\n\nRUN git lfs install\n\nCOPY requirements.txt /src/\n\nRUN pip3 install -r requirements.txt\n\n\nCOPY stable_diffusion_engine.py demo.py demo_web.py /src/\nCOPY data/ /src/data/\n\nRUN git clone https://huggingface.co/openai/clip-vit-large-patch14\nRUN git clone https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino\n\n# download models\nRUN python3 demo.py --num-inference-steps 1 --prompt "test" --output /tmp/test.jpg\n')),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"python:3.9.9-bullseye")," image, and we will choose the src directory in the container as our work directory, we run the same commands for installing dependencies that we used locally, but we also add files and directories which are present on our local machine, we also run a test command, in the end, to check whether the script works"),(0,o.kt)("p",null,"To Build the docker container run the docker build command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,o.kt)("p",null,"Please replace"),(0,o.kt)("p",null,"<","hub-user> with your docker hub username, If you don\u2019t have a docker hub account ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"Follow these instructions to create docker account"),", and use the username of the account you created"),(0,o.kt)("p",null,"<","repo-name> This is the name of the container, you can name it anything you want"),(0,o.kt)("p",null,"<","tag> This is not required but you can use the latest tag"),(0,o.kt)("p",null,"After you have build the container, the next step is to test it locally and then push it docker hub"),(0,o.kt)("p",null,"Before pushing you first need to create a repo which you can create by following the instructions here ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/repos/"},"https://docs.docker.com/docker-hub/repos/")),(0,o.kt)("p",null,"Now you can push this repository to the registry designated by its name or tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," docker push <hub-user>/<repo-name>:<tag>\n")),(0,o.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'bacalhau docker run \\\njsacex/stable-diffusion \\\n-- python demo.py --prompt "First Humans On Mars" --output ../outputs/mars.png\n')),(0,o.kt)("p",null,"Insalling bacalhau"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.2.3 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.2.3\nServer Version: v0.2.3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo $(bacalhau docker run jsacex/stable-diffusion --id-only  --wait --wait-timeout-secs 1000 -- python demo.py --prompt "First Humans On Mars" --output ../outputs/mars.png) > job_id.txt\ncat job_id.txt\n')),(0,o.kt)("p",null,"Running the commands will output a UUID (like ",(0,o.kt)("inlineCode",{parentName:"p"},"54506541-4eb9-45f4-a0b1-ea0aecd34b3e"),"). This is the ID of the job that was created. You can check the status of the job with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter $(cat job_id.txt)\n")),(0,o.kt)("p",null,'Where it says "',(0,o.kt)("inlineCode",{parentName:"p"},"Published "),'", that means the job is done, and we can get the results.'),(0,o.kt)("p",null,"To find out more information about your job, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe $(cat job_id.txt)\n")),(0,o.kt)("p",null,"Since there is no error we can\u2019t see any error instead we see the state of our job to be complete, that means\nwe can download the results!\nwe create a temporary directory to save our results"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir results\n")),(0,o.kt)("p",null,"To Download the results of your job, run "),(0,o.kt)("hr",null),(0,o.kt)("p",null,"the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau get  $(cat job_id.txt)  --output-dir results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\x1b[90m12:19:36.609 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mbacalhau/get.go:67\x1b[0m\x1b[36m >\x1b[0m Fetching results of job 'ab354ccc-f02e-4262-ad0b-f33ec78803cc'...\n2022/09/18 12:19:37 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n\x1b[90m12:19:47.364 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:115\x1b[0m\x1b[36m >\x1b[0m Found 1 result shards, downloading to temporary folder.\n\x1b[90m12:19:51.091 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:195\x1b[0m\x1b[36m >\x1b[0m Combining shard from output volume 'outputs' to final location: '/content/results'\n")),(0,o.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ls results/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shards  stderr  stdout  volumes\n")),(0,o.kt)("p",null,"By Inspecting the Downloaded Results"),(0,o.kt)("p",null,"We can find that our generated image is located in /volumes/outputs/mars.png"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 shards\n\u2502   \u2514\u2500\u2500 job-2c281c1b-1a3e-4863-830f-8c48d117f6ea-shard-0-host-QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL\n\u2502       \u251c\u2500\u2500 exitCode\n\u2502       \u251c\u2500\u2500 stderr\n\u2502       \u2514\u2500\u2500 stdout\n\u251c\u2500\u2500 stderr\n\u251c\u2500\u2500 stdout\n\u2514\u2500\u2500 volumes\n    \u2514\u2500\u2500 outputs\n        \u2514\u2500\u2500 mars.png\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("results/volumes/outputs/mars.png")\n')))}u.isMDXComponent=!0},7882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index_19_0-148b1dbe1ad1c86497f5ad93a4f57643.png"},7515:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index_21_0-7dc304be42626f7003e08a4a3969929f.png"}}]);