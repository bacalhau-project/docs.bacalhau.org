"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2706],{6153:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=i(5893),t=i(1151);const a={sidebar_label:"Stable Diffusion - CPU",sidebar_position:5},o="Stable Diffusion on a CPU",l={id:"examples/model-inference/stable-diffusion-cpu/index",title:"Stable Diffusion on a CPU",description:"stars - badge-generator",source:"@site/docs/examples/model-inference/stable-diffusion-cpu/index.md",sourceDirName:"examples/model-inference/stable-diffusion-cpu",slug:"/examples/model-inference/stable-diffusion-cpu/",permalink:"/examples/model-inference/stable-diffusion-cpu/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/stable-diffusion-cpu/index.md",tags:[],version:"current",lastUpdatedAt:1701669642,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"Stable Diffusion - CPU",sidebar_position:5},sidebar:"documentationSidebar",previous:{title:"Stable Diffusion -CKPT",permalink:"/examples/model-inference/Stable-Diffusion-CKPT-Inference/"},next:{title:"Stable Diffusion - GPU",permalink:"/examples/model-inference/stable-diffusion-gpu/"}},r={},d=[{value:"TL;DR",id:"tldr",level:3},{value:"1. Development",id:"1-development",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Converting Stable Diffusion to a CPU Model Using OpenVINO",id:"converting-stable-diffusion-to-a-cpu-model-using-openvino",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Clone the Repository and Dependencies",id:"clone-the-repository-and-dependencies",level:3},{value:"Generating an Image",id:"generating-an-image",level:3},{value:"2. Running Stable Diffusion (CPU) on Bacalhau",id:"2-running-stable-diffusion-cpu-on-bacalhau",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Generating an Image Using Stable Diffusion on Bacalhau",id:"generating-an-image-using-stable-diffusion-on-bacalhau",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"stable-diffusion-on-a-cpu",children:"Stable Diffusion on a CPU"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/bacalhau-project/bacalhau",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/CompVis/stable-diffusion",children:"Stable Diffusion"})," is a state of the art text-to-image model that generates images from text and was developed as an open-source alternative to ",(0,s.jsx)(n.a,{href:"https://openai.com/dall-e-2/",children:"DALL\xb7E 2"}),". It is based on a ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/2102.09672",children:"Diffusion Probabilistic Model"})," and uses a ",(0,s.jsx)(n.a,{href:"https://arxiv.org/abs/1706.03762",children:"Transformer"})," to generate images from text."]}),"\n",(0,s.jsxs)(n.p,{children:["This example demonstrates how to use stable diffusion on a CPU and run it on the ",(0,s.jsx)(n.a,{href:"https://www.bacalhau.org/",children:"Bacalhau"})," network. The first section describes the development of the code and the container. The section demonstrates how to run the job using ",(0,s.jsx)(n.a,{href:"https://www.bacalhau.org/",children:"Bacalhau"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"The following image is an example generated by this model."}),"\n",(0,s.jsx)(n.h3,{id:"tldr",children:"TL;DR"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'bacalhau docker run ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1 -- python demo.py --prompt "cod in space" --output ../outputs/cod.png\n'})}),"\n",(0,s.jsx)(n.h2,{id:"1-development",children:"1. Development"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/CompVis/stable-diffusion",children:"original"})," text-to-image stable diffusion model was trained on a fleet of GPU machines, at great cost. To use this trained model for inference, you also need to run it on a GPU."]}),"\n",(0,s.jsxs)(n.p,{children:["However, this isn't always desired or possible. One alternative is to use a project called ",(0,s.jsx)(n.a,{href:"https://docs.openvino.ai/latest/index.html",children:"OpenVINO"})," from Intel that allows you to convert and optimize models from a variety of frameworks (and ONNX if your framework isn't directly supported) to run on a ",(0,s.jsx)(n.a,{href:"https://docs.openvino.ai/latest/openvino_docs_OV_UG_Working_with_devices.html",children:"supported"})," Intel CPU. This is what we will do in this example."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Heads up! This example takes about 10 minutes to generate an image on an average CPU. Whilst this demonstrates it is possible, it might not be practical."})}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"In order to run this example you need:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Debian-flavoured Linux (although you ",(0,s.jsx)(n.a,{href:"https://github.com/bfirsh/stable-diffusion/tree/apple-silicon-mps-support",children:"might be able"})," to get it working on M1 macs)"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"converting-stable-diffusion-to-a-cpu-model-using-openvino",children:"Converting Stable Diffusion to a CPU Model Using OpenVINO"}),"\n",(0,s.jsxs)(n.p,{children:["The first step is to convert the trained stable diffusion models so that they work efficiently on a CPU using OpenVINO. The example is quite complex, so we have created a ",(0,s.jsx)(n.a,{href:"https://github.com/js-ts/stable_diffusion.openvino",children:"separate repository"})," (which is a fork from Github user ",(0,s.jsx)(n.a,{href:"https://github.com/bes-dev/stable_diffusion.openvino",children:"Sergei Belousov"}),") to host the code. In summary, the code:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Downloads a ",(0,s.jsx)(n.a,{href:"https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino",children:"pre-optimized OpenVINO version"})," of ..."]}),"\n",(0,s.jsxs)(n.li,{children:["the ",(0,s.jsx)(n.a,{href:"https://huggingface.co/CompVis/stable-diffusion-v1-4",children:"original"})," pre-trained stable diffusion model ..."]}),"\n",(0,s.jsxs)(n.li,{children:["which also leverages OpenAI's ",(0,s.jsx)(n.a,{href:"https://huggingface.co/openai/clip-vit-large-patch14",children:"CLIP transformer"})," ..."]}),"\n",(0,s.jsx)(n.li,{children:"and is then wrapped inside an OpenVINO runtime, which reads in and executes the model."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The core code representing these tasks can be found ",(0,s.jsxs)(n.a,{href:"https://github.com/js-ts/stable_diffusion.openvino/blob/master/stable_diffusion_engine.py",children:["in the ",(0,s.jsx)(n.code,{children:"stable_diffusion_engine.py"})," file"]}),". This is a mashup that creates a pipeline necessary to tokenize the text and run the stable diffusion model. This boilerplate could be simplified by leveraging the more recent version of the ",(0,s.jsx)(n.a,{href:"https://github.com/huggingface/diffusers",children:"diffusers library"}),". But let's crack on."]}),"\n",(0,s.jsx)(n.h3,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Note that these dependencies are only known to work on Ubuntu-based x64 machines."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\nsudo apt-get update\nsudo apt-get install -y libgl1 libglib2.0-0 git-lfs\n"})}),"\n",(0,s.jsx)(n.h3,{id:"clone-the-repository-and-dependencies",children:"Clone the Repository and Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"The following commands clone the example repository, and other required repositories, and install the Python dependencies."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\ngit clone https://github.com/js-ts/stable_diffusion.openvino\ncd stable_diffusion.openvino\ngit lfs install\ngit clone https://huggingface.co/openai/clip-vit-large-patch14\ngit clone https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino\npip3 install -r requirements.txt\n"})}),"\n",(0,s.jsx)(n.h3,{id:"generating-an-image",children:"Generating an Image"}),"\n",(0,s.jsxs)(n.p,{children:["Now that we have all the dependencies installed, we can call the ",(0,s.jsx)(n.code,{children:"demo.py"})," wrapper, which is a simple CLI, to generate an image from a prompt."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'!cd stable_diffusion.openvino && \\\n  python3 demo.py --prompt "hello" --output hello.png\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import IPython.display as display\ndisplay.Image("stable_diffusion.openvino/hello.png")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"png",src:i(216).Z+"",width:"512",height:"512"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'!cd stable_diffusion.openvino && \\\n  python3 demo.py --prompt "cat driving a car" --output cat.png\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import IPython.display as display\ndisplay.Image("stable_diffusion.openvino/cat.png")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"png",src:i(8374).Z+"",width:"512",height:"512"})}),"\n",(0,s.jsx)(n.h2,{id:"2-running-stable-diffusion-cpu-on-bacalhau",children:"2. Running Stable Diffusion (CPU) on Bacalhau"}),"\n",(0,s.jsx)(n.p,{children:"Now we have a working example, we can convert it into a format that allows us to perform inference in a distributed environment."}),"\n",(0,s.jsxs)(n.p,{children:["First we will create a ",(0,s.jsx)(n.code,{children:"Dockerfile"})," to containerize the inference code. The Dockerfile ",(0,s.jsx)(n.a,{href:"https://github.com/js-ts/stable_diffusion.openvino/blob/master/Dockerfile",children:"can be found in the repository"}),", but is presented here to aid understanding."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Dockerfile",children:'FROM python:3.9.9-bullseye\n\nWORKDIR /src\n\nRUN apt-get update && \\\n    apt-get install -y \\\n    libgl1 libglib2.0-0 git-lfs\n\nRUN git lfs install\n\nCOPY requirements.txt /src/\n\nRUN pip3 install -r requirements.txt\n\nCOPY stable_diffusion_engine.py demo.py demo_web.py /src/\nCOPY data/ /src/data/\n\nRUN git clone https://huggingface.co/openai/clip-vit-large-patch14\nRUN git clone https://huggingface.co/bes-dev/stable-diffusion-v1-4-openvino\n\n# download models\nRUN python3 demo.py --num-inference-steps 1 --prompt "test" --output /tmp/test.jpg\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This container is using the ",(0,s.jsx)(n.code,{children:"python:3.9.9-bullseye"})," image and the working directory is set. Next, the Dockerfile installs the same dependencies from earlier in this notebook. Then we add our custom code and pull the dependent repositories."]}),"\n",(0,s.jsx)(n.p,{children:"We've already pushed this image to GHCR, but for posterity, you'd use a command like this to update it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker buildx build --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1 .\n"})}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites-1",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"To run this example you will need:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.bacalhau.org/",children:"Bacalhau"})," installed and running"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"generating-an-image-using-stable-diffusion-on-bacalhau",children:"Generating an Image Using Stable Diffusion on Bacalhau"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.bacalhau.org/",children:"Bacalhau"})," is a distributed computing platform that allows you to run jobs on a network of computers. It is designed to be easy to use and to run on a variety of hardware. In this example, we will use it to run the stable diffusion model on a CPU."]}),"\n",(0,s.jsx)(n.p,{children:"To submit a job, you can use the Bacalhau CLI. The following command passes a prompt to the model and generates an image in the outputs directory."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["This will take about 10 minutes to complete. Go grab a coffee. Or a beer. Or both. If you want to block and wait for the job to complete, add the ",(0,s.jsx)(n.code,{children:"--wait"})," flag."]}),(0,s.jsx)(n.p,{children:"Furthermore, the container itself is about 15GB, so it might take a while to download on the node if it isn't cached."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'%%bash --out job_id\nbacalhau docker run ghcr.io/bacalhau-project/examples/stable-diffusion-cpu:0.0.1 --id-only -- python demo.py --prompt "First Humans On Mars" --output ../outputs/mars.png\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"%env JOB_ID={job_id}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running the commands will output a UUID that represents the job that was created. You can check the status of the job with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau list --id-filter ${JOB_ID}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Wait until it says ",(0,s.jsx)(n.code,{children:"Completed"})," and then get the results."]}),"\n",(0,s.jsx)(n.p,{children:"To find out more information about your job, run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau describe ${JOB_ID}\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you see that the job has completed and there are no errors, then you can download the results with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the download has finished you should\nsee the following contents in the results directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\nls results/outputs\n"})}),"\n",(0,s.jsx)(n.p,{children:"mars.png"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import IPython.display as display\ndisplay.Image("results/outputs/mars.png")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"png",src:i(3835).Z+"",width:"512",height:"512"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8374:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/index_10_0-fea9a9996ca891e993b0f7f5f5cf4d24.png"},3835:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/index_24_0-c2e2786333fb3f08d08a6a435084100d.png"},216:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/index_8_0-2b8181632cc5143706e0bd8203496e06.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var s=i(7294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);