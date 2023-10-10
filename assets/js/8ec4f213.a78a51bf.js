"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(r,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_label:"Stable Diffusion - CPU",sidebar_position:5},s="Stable Diffusion on a CPU",l={unversionedId:"examples/model-inference/stable-diffusion-cpu/index",id:"examples/model-inference/stable-diffusion-cpu/index",title:"Stable Diffusion on a CPU",description:"stars - badge-generator",source:"@site/docs/examples/model-inference/stable-diffusion-cpu/index.md",sourceDirName:"examples/model-inference/stable-diffusion-cpu",slug:"/examples/model-inference/stable-diffusion-cpu/",permalink:"/examples/model-inference/stable-diffusion-cpu/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/stable-diffusion-cpu/index.md",tags:[],version:"current",lastUpdatedAt:1696949965,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"Stable Diffusion - CPU",sidebar_position:5},sidebar:"documentationSidebar",previous:{title:"Stable Diffusion -CKPT",permalink:"/examples/model-inference/Stable-Diffusion-CKPT-Inference/"},next:{title:"Stable Diffusion - GPU",permalink:"/examples/model-inference/stable-diffusion-gpu/"}},r={},p=[{value:"TL;DR",id:"tldr",level:3},{value:"1. Development",id:"1-development",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Converting Stable Diffusion to a CPU Model Using OpenVINO",id:"converting-stable-diffusion-to-a-cpu-model-using-openvino",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Clone the Repository and Dependencies",id:"clone-the-repository-and-dependencies",level:3},{value:"Generating an Image",id:"generating-an-image",level:3},{value:"2. Running Stable Diffusion (CPU) on Bacalhau",id:"2-running-stable-diffusion-cpu-on-bacalhau",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Generating an Image Using Stable Diffusion on Bacalhau",id:"generating-an-image-using-stable-diffusion-on-bacalhau",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stable-diffusion-on-a-cpu"},"Stable Diffusion on a CPU"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/CompVis/stable-diffusion"},"Stable Diffusion")," is a state of the art text-to-image model that generates images from text and was developed as an open-source alternative to ",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/dall-e-2/"},"DALL\xb7E 2"),". It is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2102.09672"},"Diffusion Probabilistic Model")," and uses a ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1706.03762"},"Transformer")," to generate images from text."),(0,i.kt)("p",null,"This example demonstrates how to use stable diffusion on a CPU and run it on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau")," network. The first section describes the development of the code and the container. The section demonstrates how to run the job using ",(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau"),"."),(0,i.kt)("p",null,"The following image is an example generated by this model."),(0,i.kt)("h3",{id:"tldr"},"TL;DR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1 -- python demo.py --prompt "cod in space" --output ../outputs/cod.png\n')),(0,i.kt)("h2",{id:"1-development"},"1. Development"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CompVis/stable-diffusion"},"original")," text-to-image stable diffusion model was trained on a fleet of GPU machines, at great cost. To use this trained model for inference, you also need to run it on a GPU."),(0,i.kt)("p",null,"However, this isn't always desired or possible. One alternative is to use a project called ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvino.ai/latest/index.html"},"OpenVINO")," from Intel that allows you to convert and optimize models from a variety of frameworks (and ONNX if your framework isn't directly supported) to run on a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvino.ai/latest/openvino_docs_OV_UG_Working_with_devices.html"},"supported")," Intel CPU. This is what we will do in this example."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Heads up! This example takes about 10 minutes to generate an image on an average CPU. Whilst this demonstrates it is possible, it might not be practical.")),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"In order to run this example you need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Debian-flavoured Linux (although you ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/bfirsh/stable-diffusion/tree/apple-silicon-mps-support"},"might be able")," to get it working on M1 macs)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker"))),(0,i.kt)("h3",{id:"converting-stable-diffusion-to-a-cpu-model-using-openvino"},"Converting Stable Diffusion to a CPU Model Using OpenVINO"),(0,i.kt)("p",null,"The first step is to convert the trained stable diffusion models so that they work efficiently on a CPU using OpenVINO. The example is quite complex, so we have created a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/js-ts/stable_diffusion.openvino"},"separate repository")," (which is a fork from Github user ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bes-dev/stable_diffusion.openvino"},"Sergei Belousov"),") to host the code. In summary, the code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Downloads a ",(0,i.kt)("a",{parentName:"li",href:"https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino"},"pre-optimized OpenVINO version")," of ..."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://huggingface.co/CompVis/stable-diffusion-v1-4"},"original")," pre-trained stable diffusion model ..."),(0,i.kt)("li",{parentName:"ul"},"which also leverages OpenAI's ",(0,i.kt)("a",{parentName:"li",href:"https://huggingface.co/openai/clip-vit-large-patch14"},"CLIP transformer")," ..."),(0,i.kt)("li",{parentName:"ul"},"and is then wrapped inside an OpenVINO runtime, which reads in and executes the model.")),(0,i.kt)("p",null,"The core code representing these tasks can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/js-ts/stable_diffusion.openvino/blob/master/stable_diffusion_engine.py"},"in the ",(0,i.kt)("inlineCode",{parentName:"a"},"stable_diffusion_engine.py")," file"),". This is a mashup that creates a pipeline necessary to tokenize the text and run the stable diffusion model. This boilerplate could be simplified by leveraging the more recent version of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huggingface/diffusers"},"diffusers library"),". But let's crack on."),(0,i.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,i.kt)("p",null,"Note that these dependencies are only known to work on Ubuntu-based x64 machines."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nsudo apt-get update\nsudo apt-get install -y libgl1 libglib2.0-0 git-lfs\n")),(0,i.kt)("h3",{id:"clone-the-repository-and-dependencies"},"Clone the Repository and Dependencies"),(0,i.kt)("p",null,"The following commands clone the example repository, and other required repositories, and install the Python dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ngit clone https://github.com/js-ts/stable_diffusion.openvino\ncd stable_diffusion.openvino\ngit lfs install\ngit clone https://huggingface.co/openai/clip-vit-large-patch14\ngit clone https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino\npip3 install -r requirements.txt\n")),(0,i.kt)("h3",{id:"generating-an-image"},"Generating an Image"),(0,i.kt)("p",null,"Now that we have all the dependencies installed, we can call the ",(0,i.kt)("inlineCode",{parentName:"p"},"demo.py")," wrapper, which is a simple CLI, to generate an image from a prompt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'!cd stable_diffusion.openvino && \\\n  python3 demo.py --prompt "hello" --output hello.png\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("stable_diffusion.openvino/hello.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:a(216).Z,width:"512",height:"512"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'!cd stable_diffusion.openvino && \\\n  python3 demo.py --prompt "cat driving a car" --output cat.png\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("stable_diffusion.openvino/cat.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:a(8374).Z,width:"512",height:"512"})),(0,i.kt)("h2",{id:"2-running-stable-diffusion-cpu-on-bacalhau"},"2. Running Stable Diffusion (CPU) on Bacalhau"),(0,i.kt)("p",null,"Now we have a working example, we can convert it into a format that allows us to perform inference in a distributed environment."),(0,i.kt)("p",null,"First we will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to containerize the inference code. The Dockerfile ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/js-ts/stable_diffusion.openvino/blob/master/Dockerfile"},"can be found in the repository"),", but is presented here to aid understanding."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM python:3.9.9-bullseye\n\nWORKDIR /src\n\nRUN apt-get update && \\\n    apt-get install -y \\\n    libgl1 libglib2.0-0 git-lfs\n\nRUN git lfs install\n\nCOPY requirements.txt /src/\n\nRUN pip3 install -r requirements.txt\n\nCOPY stable_diffusion_engine.py demo.py demo_web.py /src/\nCOPY data/ /src/data/\n\nRUN git clone https://huggingface.co/openai/clip-vit-large-patch14\nRUN git clone https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino\n\n# download models\nRUN python3 demo.py --num-inference-steps 1 --prompt "test" --output /tmp/test.jpg\n')),(0,i.kt)("p",null,"This container is using the ",(0,i.kt)("inlineCode",{parentName:"p"},"python:3.9.9-bullseye")," image and the working directory is set. Next, the Dockerfile installs the same dependencies from earlier in this notebook. Then we add our custom code and pull the dependent repositories."),(0,i.kt)("p",null,"We've already pushed this image to GHCR, but for posterity, you'd use a command like this to update it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1 .\n")),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("p",null,"To run this example you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.bacalhau.org/"},"Bacalhau")," installed and running")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,i.kt)("h3",{id:"generating-an-image-using-stable-diffusion-on-bacalhau"},"Generating an Image Using Stable Diffusion on Bacalhau"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau")," is a distributed computing platform that allows you to run jobs on a network of computers. It is designed to be easy to use and to run on a variety of hardware. In this example, we will use it to run the stable diffusion model on a CPU."),(0,i.kt)("p",null,"To submit a job, you can use the Bacalhau CLI. The following command passes a prompt to the model and generates an image in the outputs directory."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This will take about 10 minutes to complete. Go grab a coffee. Or a beer. Or both. If you want to block and wait for the job to complete, add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--wait")," flag."),(0,i.kt)("p",{parentName:"admonition"},"Furthermore, the container itself is about 15GB, so it might take a while to download on the node if it isn't cached.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1 --id-only -- python demo.py --prompt "First Humans On Mars" --output ../outputs/mars.png\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,i.kt)("p",null,"Running the commands will output a UUID that represents the job that was created. You can check the status of the job with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,i.kt)("p",null,"Wait until it says ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed")," and then get the results."),(0,i.kt)("p",null,"To find out more information about your job, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,i.kt)("p",null,"If you see that the job has completed and there are no errors, then you can download the results with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,i.kt)("p",null,"After the download has finished you should\nsee the following contents in the results directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/outputs\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mars.png\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("results/outputs/mars.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:a(3835).Z,width:"512",height:"512"})))}c.isMDXComponent=!0},8374:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_10_0-fea9a9996ca891e993b0f7f5f5cf4d24.png"},3835:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_24_0-c2e2786333fb3f08d08a6a435084100d.png"},216:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_8_0-2b8181632cc5143706e0bd8203496e06.png"}}]);