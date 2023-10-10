"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6084],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(g,o(o({ref:n},s),{},{components:t})):a.createElement(g,o({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1448:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_label:"Huggingface-Model-Inference",sidebar_position:1},o="Running Inference on Dolly 2.0 Model with Hugging Face",l={unversionedId:"examples/model-inference/Huggingface-Model-Inference/index",id:"examples/model-inference/Huggingface-Model-Inference/index",title:"Running Inference on Dolly 2.0 Model with Hugging Face",description:"Open In Colab",source:"@site/docs/examples/model-inference/Huggingface-Model-Inference/index.md",sourceDirName:"examples/model-inference/Huggingface-Model-Inference",slug:"/examples/model-inference/Huggingface-Model-Inference/",permalink:"/examples/model-inference/Huggingface-Model-Inference/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/Huggingface-Model-Inference/index.md",tags:[],version:"current",lastUpdatedAt:1696949965,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Huggingface-Model-Inference",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Model Inference",permalink:"/category/model-inference"},next:{title:"Object Detection - YOLOv5",permalink:"/examples/model-inference/object-detection-yolo5/"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Running locally",id:"running-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing dependencies",id:"installing-dependencies",level:3},{value:"Building the container (optional)",id:"building-the-container-optional",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Running Inference on Bacalhau",id:"running-inference-on-bacalhau",level:2},{value:"Prerequisite",id:"prerequisite-1",level:3},{value:"Structure of the command",id:"structure-of-the-command",level:3}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-inference-on-dolly-20-model-with-hugging-face"},"Running Inference on Dolly 2.0 Model with Hugging Face"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-inference/Huggingface-Model-Inference/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-inference/Huggingface-Model-Inference/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Dolly 2.0, the groundbreaking, open-source, instruction-following Large Language Model (LLM) that has been fine-tuned on a human-generated instruction dataset, licensed for both research and commercial purposes. Developed using the EleutherAI Pythia model family, this 12-billion-parameter language model is built exclusively on a high-quality, human-generated instruction following dataset, contributed by Databricks employees."),(0,r.kt)("p",null,"Dolly 2.0 package is open source, including the training code, dataset, and model weights, all available for commercial use. This unprecedented move empowers organizations to create, own, and customize robust LLMs capable of engaging in human-like interactions, without the need for API access fees or sharing data with third parties."),(0,r.kt)("h2",{id:"running-locally"},"Running locally"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A NVIDIA GPU"),(0,r.kt)("li",{parentName:"ul"},"Python")),(0,r.kt)("h3",{id:"installing-dependencies"},"Installing dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip -q install git+https://github.com/huggingface/transformers # need to install from github\npip -q install accelerate>=0.12.0\n")),(0,r.kt)("p",null,"Creating the inference script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile inference.py\nimport argparse\nimport torch\nfrom transformers import pipeline\n\ndef main(prompt_string, model_version):\n\n    # use dolly-v2-12b if you\'re using Colab Pro+, using pythia-2.8b for Free Colab\n    generate_text = pipeline(model=model_version, \n                            torch_dtype=torch.bfloat16, \n                            trust_remote_code=True,\n                            device_map="auto")\n\n    print(generate_text(prompt_string))\n\nif __name__ == "__main__":\n    parser = argparse.ArgumentParser()\n    parser.add_argument("--prompt", type=str, required=True, help="The prompt to be used in the GPT model")\n    parser.add_argument("--model_version", type=str, default="./databricks/dolly-v2-12b", help="The model version to be used")\n    args = parser.parse_args()\n    main(args.prompt, args.model_version)\n\n')),(0,r.kt)("h2",{id:"building-the-container-optional"},"Building the container (optional)"),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install Docker on your local machine."),(0,r.kt)("li",{parentName:"ul"},"Sign up for a DockerHub account if you don't already have one.\nSteps")),(0,r.kt)("p",null,"Step 1: Create a Dockerfile\nCreate a new file named Dockerfile in your project directory with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM huggingface/transformers-pytorch-deepspeed-nightly-gpu\n\nRUN apt-get update -y\n\nRUN pip -q install git+https://github.com/huggingface/transformers\n\nRUN pip -q install accelerate>=0.12.0 \n\nWORKDIR /\n\n# COPY ./dolly_inference.py .\n")),(0,r.kt)("p",null,"This Dockerfile sets up a container with the necessary dependencies and installs the Segment Anything Model from its GitHub repository."),(0,r.kt)("p",null,"Step 2: Build the Docker Image\nIn your terminal, navigate to the directory containing the Dockerfile and run the following command to build the Docker image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t your-dockerhub-username/sam:lite .\n")),(0,r.kt)("p",null,'Replace your-dockerhub-username with your actual DockerHub username. This command will build the Docker image and tag it with your DockerHub username and the name "sam".'),(0,r.kt)("p",null,"Step 3: Push the Docker Image to DockerHub\nOnce the build process is complete, Next, push the Docker image to DockerHub using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker push your-dockerhub-username/sam:lite\n")),(0,r.kt)("p",null,"Again, replace your-dockerhub-username with your actual DockerHub username. This command will push the Docker image to your DockerHub repository."),(0,r.kt)("h2",{id:"running-inference-on-bacalhau"},"Running Inference on Bacalhau"),(0,r.kt)("h3",{id:"prerequisite-1"},"Prerequisite"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'bacalhau docker run \\\n--gpu 1 \\\n-w /inputs \\\n-i gitlfs://huggingface.co/databricks/dolly-v2-3b.git \\\n-i https://gist.githubusercontent.com/js-ts/d35e2caa98b1c9a8f176b0b877e0c892/raw/3f020a6e789ceef0274c28fc522ebf91059a09a9/inference.py \\\njsacex/dolly_inference:latest \\\n -- python inference.py --prompt "Where is Earth located ?" --model_version "./databricks/dolly-v2-3b"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"docker run"),": Docker command to run a container from a specified image.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--gpu 1"),": Flag to specify the number of GPUs to use for the execution. In this case, 1 GPU will be used.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-w /inputs"),": Flag to set the working directory inside the container to ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-i gitlfs://huggingface.co/databricks/dolly-v2-3b.git"),": Flag to clone the Dolly V2-3B model from Hugging Face's repository using Git LFS. The files will be mounted to ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs/databricks/dolly-v2-3b"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-i https://gist.githubusercontent.com/js-ts/d35e2caa98b1c9a8f176b0b877e0c892/raw/3f020a6e789ceef0274c28fc522ebf91059a09a9/inference.py"),": Flag to download the ",(0,r.kt)("inlineCode",{parentName:"p"},"inference.py")," script from the provided URL. The file will be mounted to ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs/inference.py"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jsacex/dolly_inference:latest"),": The name and the tag of the Docker image.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The command to run inference on the model: ",(0,r.kt)("inlineCode",{parentName:"p"},'python inference.py --prompt "Where is Earth located ?" --model_version "./databricks/dolly-v2-3b"'),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"inference.py"),": The Python script that runs the inference process using the Dolly V2-3B model.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'--prompt "Where is Earth located ?"'),": Specifies the text prompt to be used for the inference.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'--model_version "./databricks/dolly-v2-3b"'),": Specifies the path to the Dolly V2-3B model. In this case, the model files are mounted to ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs/databricks/dolly-v2-3b"),"."))))))}d.isMDXComponent=!0}}]);