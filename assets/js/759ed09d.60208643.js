"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Stable-Diffusion-CKPT-Inference",sidebar_position:1},i="Stable Diffusion Checkpoint Inference",l={unversionedId:"examples/model-inference/Stable-Diffusion-CKPT-Inference/index",id:"examples/model-inference/Stable-Diffusion-CKPT-Inference/index",title:"Stable Diffusion Checkpoint Inference",description:"Open In Colab",source:"@site/docs/examples/model-inference/Stable-Diffusion-CKPT-Inference/index.md",sourceDirName:"examples/model-inference/Stable-Diffusion-CKPT-Inference",slug:"/examples/model-inference/Stable-Diffusion-CKPT-Inference/",permalink:"/examples/model-inference/Stable-Diffusion-CKPT-Inference/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/Stable-Diffusion-CKPT-Inference/index.md",tags:[],version:"current",lastUpdatedAt:1675858399,formattedLastUpdatedAt:"Feb 8, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Stable-Diffusion-CKPT-Inference",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Model Inference",permalink:"/examples/model-inference/"},next:{title:"Stable Diffusion - CPU",permalink:"/examples/model-inference/stable-diffusion-cpu/"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Buiding a docker container (Optional)",id:"buiding-a-docker-container-optional",level:2},{value:"Converting model weights to CKPT",id:"converting-model-weights-to-ckpt",level:2},{value:"Running on bacalhau",id:"running-on-bacalhau",level:2},{value:"NFT.Storage (Recommneded Option)",id:"nftstorage-recommneded-option",level:3},{value:"Downloading the results",id:"downloading-the-results",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stable-diffusion-checkpoint-inference"},"Stable Diffusion Checkpoint Inference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-inference/Stable-Diffusion-CKPT-Inference/index.ipynb"},(0,a.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-inference/Stable-Diffusion-CKPT-Inference/index.ipynb"},(0,a.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/CompVis/stable-diffusion"},"Stable Diffusion")," is a state of the art text-to-image model that generates images from text and was developed as an open source alternative to ",(0,a.kt)("a",{parentName:"p",href:"https://openai.com/dall-e-2/"},"DALL\xb7E 2"),". It is based on a ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2102.09672"},"Diffusion Probabilistic Model")," and uses a ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1706.03762"},"Transformer")," to generate images from text."),(0,a.kt)("p",null,"This example demonstrates how to use stable diffusion using a finetuned model and run inference on it. The first section describes the development of the code and the container. The second section demonstrates how to convert your model weights to ckpt. The third section demonstrates how to run the job using ",(0,a.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau"),". the first section is optinal as users don't need to build their own containers to use their own custom model"),(0,a.kt)("p",null,"The following image is an example generated by fine-tuned model,it was finetuned on bacalhau to learn how to finetune your own stable diffusion model\nrefer ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/model-training/Stable-Diffusion-Dreambooth"},"https://docs.bacalhau.org/examples/model-training/Stable-Diffusion-Dreambooth")),(0,a.kt)("p",null,"TLDR"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'bacalhau docker run \\\n--gpu 1 \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n-v QmUCJuFZ2v7KvjBGHRP2K1TMPFce3reTkKVGF2BJY5bXdZ:/DavidAronchick.ckpt \\\njsacex/stable-diffusion-ckpt \\\n-- conda run --no-capture-output -n ldm python scripts/txt2img.py --prompt "a photo of aronchick drinking coffee" --plms --ckpt ../DavidAronchick.ckpt --skip_grid --n_samples 1 --skip_grid --outdir ../outputs\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/xnt79th.png",alt:null})),(0,a.kt)("h2",{id:"buiding-a-docker-container-optional"},"Buiding a docker container (Optional)"),(0,a.kt)("p",null,"Note: you can skip this step and move to Running on bacalhau since you don't need build your own container\nyou can use the prebuilt container "),(0,a.kt)("p",null,"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NVIDIA GPU"),(0,a.kt)("li",{parentName:"ul"},"CUDA drivers installed"),(0,a.kt)("li",{parentName:"ul"},"NVIDIA docker installed")),(0,a.kt)("p",null,"First we will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to containerize the code for inference. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM  pytorch/pytorch:1.13.0-cuda11.6-cudnn8-runtime\n\nWORKDIR /\n\nRUN apt update &&  apt install -y git\n\nRUN git clone https://github.com/runwayml/stable-diffusion.git\n\nWORKDIR /stable-diffusion\n\nRUN conda env create -f environment.yaml\n\nSHELL ["conda", "run", "-n", "ldm", "/bin/bash", "-c"]\n\nRUN pip install opencv-python\n\nRUN apt update\n\nRUN apt-get install ffmpeg libsm6 libxext6 libxrender-dev  -y\n')),(0,a.kt)("p",null,"This container is using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pytorch/pytorch:1.13.0-cuda11.6-cudnn8-runtime")," image and the working directory is set. Next the Dockerfile installs the same dependencies from earlier in this notebook. Then we add our custom code and pull the dependent repositories."),(0,a.kt)("p",null,"To Build the docker container run the docker build command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t hub-user/repo-name:tag .\n")),(0,a.kt)("p",null,"Please replace"),(0,a.kt)("p",null,"hub-user with your docker hub username, If you don\u2019t have a docker hub account Follow these instructions to create docker account, and use the username of the account you created"),(0,a.kt)("p",null,"repo-name This is the name of the container, you can name it anything you want"),(0,a.kt)("p",null,"tag This is not required but you can use the latest tag"),(0,a.kt)("p",null,"After you have build the container, the next step is to test it locally and then push it docker hub"),(0,a.kt)("p",null,"Now you can push this repository to the registry designated by its name or tag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," docker push hub-user/repo-name:tag\n")),(0,a.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau but before that you need to check whether your model is a ckpt file or not, if your model is a ckpt file you can skip to the running on bacalhau if not the next section describes how to convert your model into the ckpt format"),(0,a.kt)("h2",{id:"converting-model-weights-to-ckpt"},"Converting model weights to CKPT"),(0,a.kt)("p",null,"donwloading the convert script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget -q https://github.com/TheLastBen/diffusers/raw/main/scripts/convert_diffusers_to_original_stable_diffusion.py\n")),(0,a.kt)("p",null,"converting the model weights into CKPT format, the --half flag cuts the size of the output model from 4GB to 2GB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python convert_diffusers_to_original_stable_diffusion.py --model_path <path-to-the-model-weights>  --checkpoint_path <path-to-save-the-checkpoint>/model.ckpt --half\n")),(0,a.kt)("h2",{id:"running-on-bacalhau"},"Running on bacalhau"),(0,a.kt)("p",null,"To do inference on your own checkpoint on bacalhau you need to first upload it to IPFS"),(0,a.kt)("p",null,"this can be done using a number of IPFS pinning services"),(0,a.kt)("p",null,"In this case we will be using "),(0,a.kt)("h3",{id:"nftstorage-recommneded-option"},(0,a.kt)("a",{parentName:"h3",href:"https://nft.storage/"},"NFT.Storage")," (Recommneded Option)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nft.storage/docs/how-to/nftup/"},"Upload files and directories with NFTUp")," "),(0,a.kt)("p",null,"To upload your dataset using NFTup just drag and drop your directory it will upload it to IPFS"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/g3VM2Kp.png",alt:null})),(0,a.kt)("p",null,"After the checkpoint file has been uploaded copy its CID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"!curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.3.11 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.3.11\nServer Version: v0.3.11\n")),(0,a.kt)("p",null,"The following command mounts the model from IPFS to the docker container and then runs the script to which we specify arguments"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run \\\n--gpu 1 \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n--wait \\\n--id-only \\\n-v QmUCJuFZ2v7KvjBGHRP2K1TMPFce3reTkKVGF2BJY5bXdZ:/DavidAronchick.ckpt \\\njsacex/stable-diffusion-ckpt \\\n-- conda run --no-capture-output -n ldm python scripts/txt2img.py --prompt "a photo of aronchick drinking coffee" --plms --ckpt ../DavidAronchick.ckpt --skip_grid --n_samples 1 --skip_grid --outdir ../outputs \n')),(0,a.kt)("p",null,"Structure of the command"),(0,a.kt)("p",null,"--gpu 1 here we request 1 GPU"),(0,a.kt)("p",null,"-v QmUCJuFZ2v7KvjBGHRP2K1TMPFce3reTkKVGF2BJY5bXdZ:/DavidAronchick.ckpt "),(0,a.kt)("p",null,": -v < CHECKPOINT-CID > :/ < Path-to-mount-the-checkpoint >"),(0,a.kt)("p",null,'-- conda run --no-capture-output -n ldm python scripts/txt2img.py --prompt "a photo of aronchick drinking coffee" --plms --ckpt ../DavidAronchick.ckpt --n_samples 1 --skip_grid --outdir ../outputs  '),(0,a.kt)("p",null,"since we are using conda we need to specify the name of the enviroment which we are going to use in this case its ldm"),(0,a.kt)("p",null,"and the later part is running the python script\nscripts/txt2img.py\nwe provide it the following parameters\nthe prompt you need to specify the session name in the prompt eg the session name here is aronchick"),(0,a.kt)("p",null,' --prompt "a photo of aronchick drinking coffee"'),(0,a.kt)("p",null,"and then specify the sampler you want to use in this case we will use the plms sampler"),(0,a.kt)("p",null,"and then specify the path to our checkpoint\n--ckpt ../DavidAronchick.ckpt"),(0,a.kt)("p",null," --n_samples 1\nand then the no of samples we want to produce"),(0,a.kt)("p",null,"skip creating a grid of images\n--skip_grid "),(0,a.kt)("p",null,"path to store the outputs\n--outdir ../outputs  "),(0,a.kt)("p",null,"The output generated on the same prompt will always be the same for different outputs on the same prompt set the seed parameter to random\n--seed $RANDOM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID} --wide\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED           \x1b[0m\x1b[92;100m ID                                   \x1b[0m\x1b[92;100m JOB                                                                                                                                                                                                                                             \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED                                            \x1b[0m\n\x1b[97;40m 22-11-14-06:33:36 \x1b[0m\x1b[97;40m 6980c043-f8f8-471b-b82b-d71b6a30945e \x1b[0m\x1b[97;40m Docker jsacex/stable-diffusion-ckpt conda run --no-capture-output -n ldm python scripts/txt2img.py --prompt a photo of aronchick drinking coffee --plms --ckpt ../DavidAronchick.ckpt --skip_grid --n_samples 1 --skip_grid --outdir ../outputs \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmVoxqatkEux7NjSZavrJ2gZ9zZG4hxtCjeFJcFWDQcqc1 \x1b[0m\n")),(0,a.kt)("p",null,'Where it says "Completed", that means the job is done, and we can get the results.'),(0,a.kt)("p",null,"To find out more information about your job, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID}\n")),(0,a.kt)("h2",{id:"downloading-the-results"},"Downloading the results"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Fetching results of job '6980c043-f8f8-471b-b82b-d71b6a30945e'...\nResults for job '6980c043-f8f8-471b-b82b-d71b6a30945e' have been written to...\nresults\n\n\n2022/11/14 06:37:14 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n")),(0,a.kt)("p",null,"Viewing the outputs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("results/combined_results/outputs/samples/00001.png")\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"png",src:n(7371).Z,width:"512",height:"512"})))}u.isMDXComponent=!0},7371:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/index_17_0-93ca4dbcb23afc760c01faa65cac5699.png"}}]);