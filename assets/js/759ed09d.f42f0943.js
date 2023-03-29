"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},168:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_label:"Stable Diffusion -CKPT",sidebar_position:4},i="Stable Diffusion Checkpoint Inference",l={unversionedId:"examples/model-inference/Stable-Diffusion-CKPT-Inference/index",id:"examples/model-inference/Stable-Diffusion-CKPT-Inference/index",title:"Stable Diffusion Checkpoint Inference",description:"Open In Colab",source:"@site/docs/examples/model-inference/Stable-Diffusion-CKPT-Inference/index.md",sourceDirName:"examples/model-inference/Stable-Diffusion-CKPT-Inference",slug:"/examples/model-inference/Stable-Diffusion-CKPT-Inference/",permalink:"/examples/model-inference/Stable-Diffusion-CKPT-Inference/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/Stable-Diffusion-CKPT-Inference/index.md",tags:[],version:"current",lastUpdatedAt:1680108572,formattedLastUpdatedAt:"Mar 29, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Stable Diffusion -CKPT",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Speech Recognition using Whisper",permalink:"/examples/model-inference/Openai-Whisper/"},next:{title:"Stable Diffusion - CPU",permalink:"/examples/model-inference/stable-diffusion-cpu/"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running Locally",id:"running-locally",level:2},{value:"Containerize your Script using Docker",id:"containerize-your-script-using-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Converting model weights to CKPT",id:"converting-model-weights-to-ckpt",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stable-diffusion-checkpoint-inference"},"Stable Diffusion Checkpoint Inference"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-inference/Stable-Diffusion-CKPT-Inference/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-inference/Stable-Diffusion-CKPT-Inference/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/CompVis/stable-diffusion"},"Stable Diffusion")," is a state of the art text-to-image model that generates images from text and was developed as an open source alternative to ",(0,o.kt)("a",{parentName:"p",href:"https://openai.com/dall-e-2/"},"DALL\xb7E 2"),". It is based on a ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2102.09672"},"Diffusion Probabilistic Model")," and uses a ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1706.03762"},"Transformer")," to generate images from text."),(0,o.kt)("p",null,"This example demonstrates how to use stable diffusion using a finetuned model and run inference on it. The first section describes the development of the code and the container - it is optional as users don't need to build their own containers to use their own custom model. The second section demonstrates how to convert your model weights to ckpt. The third section demonstrates how to run the job using Bacalhau. "),(0,o.kt)("h2",{id:"tdlr"},"TD;LR"),(0,o.kt)("p",null,"Running fine tuned stable diffusion model converted to ckpt on Bacalhau."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"To get started, you need to install:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("li",{parentName:"ul"},"NVIDIA GPU"),(0,o.kt)("li",{parentName:"ul"},"CUDA drivers "),(0,o.kt)("li",{parentName:"ul"},"NVIDIA docker")),(0,o.kt)("h2",{id:"running-locally"},"Running Locally"),(0,o.kt)("p",null,"The following image is an example generated by fine-tuned model,it was finetuned on Bacalhau to learn how to finetune your own stable diffusion model\nrefer ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/model-training/Stable-Diffusion-Dreambooth"},"https://docs.bacalhau.org/examples/model-training/Stable-Diffusion-Dreambooth")),(0,o.kt)("h2",{id:"containerize-your-script-using-docker"},"Containerize your Script using Docker"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can skip this step and go straight to running a Bacalhau job")),(0,o.kt)("p",null,"To build your own docker container, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", which contains instructions to containerize the code for inference. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM  pytorch/pytorch:1.13.0-cuda11.6-cudnn8-runtime\n\nWORKDIR /\n\nRUN apt update &&  apt install -y git\n\nRUN git clone https://github.com/runwayml/stable-diffusion.git\n\nWORKDIR /stable-diffusion\n\nRUN conda env create -f environment.yaml\n\nSHELL ["conda", "run", "-n", "ldm", "/bin/bash", "-c"]\n\nRUN pip install opencv-python\n\nRUN apt update\n\nRUN apt-get install ffmpeg libsm6 libxext6 libxrender-dev  -y\n')),(0,o.kt)("p",null,"This container is using the ",(0,o.kt)("inlineCode",{parentName:"p"},"pytorch/pytorch:1.13.0-cuda11.6-cudnn8-runtime")," image and the working directory is set. Next the Dockerfile installs the same dependencies from earlier in this notebook. Then we add our custom code and pull the dependent repositories."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"See more information on how to containerize your script/app ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/02_our_app/"},"here"))),(0,o.kt)("h3",{id:"build-the-container"},"Build the container"),(0,o.kt)("p",null,"We will run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t hub-user/repo-name:tag .\n")),(0,o.kt)("p",null,"Before running the command replace;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,o.kt)("p",null,"In our case"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t jsacex/stable-diffusion-ckpt\n")),(0,o.kt)("h3",{id:"push-the-container"},"Push the container"),(0,o.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,o.kt)("p",null,"In our case"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push jsacex/stable-diffusion-ckpt\n")),(0,o.kt)("p",null,"After the repo image has been pushed to docker hub, you can now use the container for running on Bacalhau but before that you need to check whether your model is a ckpt file or not, if your model is a ckpt file you can skip to the running on Bacalhau if not the next section describes how to convert your model into the ckpt format."),(0,o.kt)("h2",{id:"converting-model-weights-to-ckpt"},"Converting model weights to CKPT"),(0,o.kt)("p",null,"To download the convert script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget -q https://github.com/TheLastBen/diffusers/raw/main/scripts/convert_diffusers_to_original_stable_diffusion.py\n")),(0,o.kt)("p",null,"To convert the model weights into CKPT format, the ",(0,o.kt)("inlineCode",{parentName:"p"},"--half")," flag cuts the size of the output model from 4GB to 2GB:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python convert_diffusers_to_original_stable_diffusion.py --model_path <path-to-the-model-weights>  --checkpoint_path <path-to-save-the-checkpoint>/model.ckpt --half\n")),(0,o.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,o.kt)("p",null,"To do inference on your own checkpoint on Bacalhau you need to first upload it to your public storage, which can be done be mounted anywhere on your machine. In this case we will be using ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/"},"NFT.Storage")," (Recommended Option). To upload your dataset using ",(0,o.kt)("a",{parentName:"p",href:"https://nft.storage/docs/how-to/nftup/"},"NFTup"),"  just drag and drop your directory it will upload it to IPFS"),(0,o.kt)("p",null,"After the checkpoint file has been uploaded copy its CID."),(0,o.kt)("p",null,"To submit a job, run the following Bacalhau command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run \\\n--gpu 1 \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n--wait \\\n--id-only \\\n-v QmUCJuFZ2v7KvjBGHRP2K1TMPFce3reTkKVGF2BJY5bXdZ:/DavidAronchick.ckpt \\\njsacex/stable-diffusion-ckpt \\\n-- conda run --no-capture-output -n ldm python scripts/txt2img.py --prompt "a photo of aronchick drinking coffee" --plms --ckpt ../DavidAronchick.ckpt --skip_grid --n_samples 1 --skip_grid --outdir ../outputs \n')),(0,o.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,o.kt)("p",null,"Let's look closely at the command above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--gpu")," : here we request 1 GPU")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-v QmUCJuFZ2v7KvjBGHRP2K1TMPFce3reTkKVGF2BJY5bXdZ:/DavidAronchick.ckpt"),":  Path-to-mount-the-checkpoint ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-- conda run --no-capture-output -n ldm"),":  since we are using conda we need to specify the name of the environment which we are going to use in this case its ",(0,o.kt)("inlineCode",{parentName:"p"},"ldm"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"scripts/txt2img.py"),": running the python script")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'--prompt "a photo of aronchick drinking coffee"'),": the prompt you need to specify the session name in the prompt eg the session name here is aronchick")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--plms"),": the sampler you want to use in this case we will use the plms sampler")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--ckpt ../DavidAronchick.ckpt"),": and then specify the path to our checkpoint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--n_samples 1"),": no of samples we want to produce")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--skip_grid "),": skip creating a grid of images")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--outdir ../outputs"),": path to store the outputs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"--seed $RANDOM"),": The output generated on the same prompt will always be the same for different outputs on the same prompt set the seed parameter to random"))),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"Each job creates 3 subfolders: the ",(0,o.kt)("strong",{parentName:"p"},"combined_results"),",",(0,o.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,o.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,o.kt)("p",null,"View the outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("results/combined_results/outputs/samples/00001.png")\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"png",src:n(3947).Z,width:"512",height:"512"})))}d.isMDXComponent=!0},3947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/index_19_0-93ca4dbcb23afc760c01faa65cac5699.png"}}]);