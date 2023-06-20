"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_label:"Stable Diffusion - GPU",sidebar_position:6},r="Stable Diffusion on a GPU",l={unversionedId:"examples/model-inference/stable-diffusion-gpu/index",id:"examples/model-inference/stable-diffusion-gpu/index",title:"Stable Diffusion on a GPU",description:"stars - badge-generator",source:"@site/docs/examples/model-inference/stable-diffusion-gpu/index.md",sourceDirName:"examples/model-inference/stable-diffusion-gpu",slug:"/examples/model-inference/stable-diffusion-gpu/",permalink:"/examples/model-inference/stable-diffusion-gpu/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/stable-diffusion-gpu/index.md",tags:[],version:"current",lastUpdatedAt:1687266311,formattedLastUpdatedAt:"Jun 20, 2023",sidebarPosition:6,frontMatter:{sidebar_label:"Stable Diffusion - GPU",sidebar_position:6},sidebar:"documentationSidebar",previous:{title:"Stable Diffusion - CPU",permalink:"/examples/model-inference/stable-diffusion-cpu/"},next:{title:"StyleGAN3",permalink:"/examples/model-inference/StyleGAN3/"}},s={},p=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Quick Test",id:"quick-test",level:3},{value:"Development",id:"development",level:2},{value:"Installing dependencies",id:"installing-dependencies",level:3},{value:"Testing the Code",id:"testing-the-code",level:3},{value:"Write the Script",id:"write-the-script",level:3},{value:"Run the Script",id:"run-the-script",level:3},{value:"Display the Output Image",id:"display-the-output-image",level:3},{value:"Containerize Script using Docker",id:"containerize-script-using-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Display image",id:"display-image",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stable-diffusion-on-a-gpu"},"Stable Diffusion on a GPU"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,i.kt)("p",null,"This example tutorial demonstrates how to use stable diffusion on a GPU and run it on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.bacalhau.org/"},"Bacalhau")," network.",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CompVis/stable-diffusion"},"Stable Diffusion")," is a state of the art text-to-image model that generates images from text and was developed as an open source alternative to ",(0,i.kt)("a",{parentName:"p",href:"https://openai.com/dall-e-2/"},"DALL\xb7E 2"),". It is based on a ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2102.09672"},"Diffusion Probabilistic Model")," and uses a ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1706.03762"},"Transformer")," to generate images from text. "),(0,i.kt)("h2",{id:"tdlr"},"TD;LR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'bacalhau docker run --id-only --gpu 1 ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 -- python main.py --o ./outputs --p "meme about tensorflow"\n')),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,i.kt)("h3",{id:"quick-test"},"Quick Test"),(0,i.kt)("p",null,"Here is an example of an image generated by this model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run --gpu 1 ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 -- python main.py --o ./outputs --p "cod swimming through data"\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6464).Z,width:"512",height:"512"})),(0,i.kt)("h2",{id:"development"},"Development"),(0,i.kt)("p",null,"This stable diffusion example is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fchollet/stable-diffusion-tensorflow"},"Keras/Tensorflow implementation"),". You might also be interested in the Pytorch oriented ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/huggingface/diffusers"},"diffusers library"),"."),(0,i.kt)("h3",{id:"installing-dependencies"},"Installing dependencies"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When you run this code for the first time, it will download the pretrained weights, which may add a short delay.")),(0,i.kt)("p",null,"Based on the requirements ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fchollet/stable-diffusion-tensorflow"},"here"),", we will install the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install git+https://github.com/fchollet/stable-diffusion-tensorflow --upgrade --quiet\npip install tensorflow tensorflow_addons ftfy --upgrade --quiet\npip install tqdm\napt install --allow-change-held-packages libcudnn8=8.1.0.77-1+cuda11.2\n")),(0,i.kt)("h3",{id:"testing-the-code"},"Testing the Code"),(0,i.kt)("p",null,"We have a sample code from this the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fchollet/stable-diffusion-tensorflow"},"Stable Diffusion in TensorFlow/Keras")," repo which we will use to check if the code is working as expected. Our output for this code will be a ",(0,i.kt)("em",{parentName:"p"},"DSLR photograph of an astronaut riding a horse"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When you run this code for the first time, it will download the pretrained weights, which may add a short delay.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from stable_diffusion_tf.stable_diffusion import Text2Image\nfrom PIL import Image\n\ngenerator = Text2Image( \n    img_height=512,\n    img_width=512,\n    jit_compile=False,  # You can try True as well (different performance profile)\n)\nimg = generator.generate(\n    "DSLR photograph of an astronaut riding a horse",\n    num_steps=50,\n    unconditional_guidance_scale=7.5,\n    temperature=1,\n    batch_size=1,\n)\npil_img = Image.fromarray(img[0])\ndisplay(pil_img)\n')),(0,i.kt)("p",null,"When running this code, if you check the GPU RAM usage, you'll see that it's sucked up many GBs and depending on what GPU you're running, it may OOM(Out of memory) if you run this again."),(0,i.kt)("p",null,"You can try and reduce RAM usage by playing with batch sizes (although it is only set to 1 above!) or more carefully controlling the tensorflow session."),(0,i.kt)("p",null,"To clear the GPU memory we will use ",(0,i.kt)("strong",{parentName:"p"},"numba"),". This won't be required when running in a single-shot manner."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install numba\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# clearing the GPU memory \nfrom numba import cuda \ndevice = cuda.get_current_device()\ndevice.reset()\n")),(0,i.kt)("h3",{id:"write-the-script"},"Write the Script"),(0,i.kt)("p",null,"You need a script to execute when we submitting jobs. The code below is a slightly modified version of the code we ran above which we got from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fchollet/stable-diffusion-tensorflow"},"here"),", however this includes more things such as argument parsing ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fchollet/stable-diffusion-tensorflow/blob/master/text2image.py"},"argument parsing")," to be able to customize the generator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile main.py\nimport argparse\nfrom stable_diffusion_tf.stable_diffusion import Text2Image\nfrom PIL import Image\nimport os\nparser = argparse.ArgumentParser(description="Stable Diffusion")\nparser.add_argument("--h",dest="height", type=int,help="height of the image",default=512)\nparser.add_argument("--w",dest="width", type=int,help="width of the image",default=512)\nparser.add_argument("--p",dest="prompt", type=str,help="Description of the image you want to generate",default="cat")\nparser.add_argument("--n",dest="numSteps", type=int,help="Number of Steps",default=50)\nparser.add_argument("--u",dest="unconditionalGuidanceScale", type=float,help="Number of Steps",default=7.5)\nparser.add_argument("--t",dest="temperature", type=int,help="Number of Steps",default=1)\nparser.add_argument("--b",dest="batchSize", type=int,help="Number of Images",default=1)\nparser.add_argument("--o",dest="output", type=str,help="Output Folder where to store the Image",default="./")\n\nargs=parser.parse_args()\nheight=args.height\nwidth=args.width\nprompt=args.prompt\nnumSteps=args.numSteps\nunconditionalGuidanceScale=args.unconditionalGuidanceScale\ntemperature=args.temperature\nbatchSize=args.batchSize\noutput=args.output\n\ngenerator = Text2Image(\n    img_height=height,\n    img_width=width,\n    jit_compile=False,  # You can try True as well (different performance profile)\n)\n\nimg = generator.generate(\n    prompt,\n    num_steps=numSteps,\n    unconditional_guidance_scale=unconditionalGuidanceScale,\n    temperature=temperature,\n    batch_size=batchSize,\n)\nfor i in range(0,batchSize):\n  pil_img = Image.fromarray(img[i])\n  image = pil_img.save(f"{output}/image{i}.png")\n\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For a full list of arguments that you can pass to the script, see more information ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags"},"here"))),(0,i.kt)("h3",{id:"run-the-script"},"Run the Script"),(0,i.kt)("p",null,"After writing the code the next step is to run the script."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython main.py\n")),(0,i.kt)("h3",{id:"display-the-output-image"},"Display the Output Image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("image0.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:a(1252).Z,width:"512",height:"512"})),(0,i.kt)("p",null,"The following presents additional parameters you can try:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'python main.py --p "cat with three eyes'),"  - to set prompt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'python main.py --p "cat with three eyes')," --n 100 - to set number of iterations to 100")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'python stable-diffusion.py --p "cat with three eyes" --b 2')," to set batch size to 2 (No of images to generate)"))),(0,i.kt)("h2",{id:"containerize-script-using-docker"},"Containerize Script using Docker"),(0,i.kt)("p",null,"Docker is the easiest way to run TensorFlow on a GPU since the host machine only requires the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/nvidia-docker/wiki/Frequently-Asked-Questions#how-do-i-install-the-nvidia-driver"},"NVIDIA\xae driver"),". To containerize the inference code, we we will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". The Dockerfile is a text document that contains the commands that specify how the image will be built."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM tensorflow/tensorflow:2.10.0-gpu\n\nRUN apt-get -y update\n\nRUN apt-get -y install --allow-change-held-packages libcudnn8=8.1.0.77-1+cuda11.2 git\n\nRUN python3 -m pip install --upgrade pip\n\nRUN python -m pip install regex tqdm Pillow tensorflow tensorflow_addons ftfy  --upgrade --quiet\n\nRUN pip install git+https://github.com/fchollet/stable-diffusion-tensorflow --upgrade --quiet\n\nADD main.py main.py\n\n# Run once so it downloads and caches the pre-trained weights\nRUN python main.py --n 1\n")),(0,i.kt)("p",null,"The dockerfile leverages the latest official tensorflow GPU image and then installs other dependencies like ",(0,i.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CUDA")," packages and other image related necessities. See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fchollet/stable-diffusion-tensorflow/blob/master/requirements.txt"},"the original repository")," for the expected requirements."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See more information on how to containerize your script/app",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/02_our_app/"},"here"))),(0,i.kt)("h3",{id:"build-the-container"},"Build the container"),(0,i.kt)("p",null,"We will run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,i.kt)("p",null,"Before running the command replace;"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,i.kt)("p",null,"In our case"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 .\n")),(0,i.kt)("h3",{id:"push-the-container"},"Push the container"),(0,i.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,i.kt)("p",null,"In our case"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker push ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 .\n")),(0,i.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,i.kt)("p",null,"To submit a job, run the following Bacalhau command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run --id-only --gpu 1 ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1 -- python main.py --o ./outputs --p "meme about tensorflow"\n')),(0,i.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,i.kt)("p",null,"Let's look closely at the command above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--gpu 1"),": No of GPUs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1"),": the name and the tag of the docker image we are using")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"../outputs"),": path to output")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"python main.py"),": execute script"))),(0,i.kt)("p",null,"The Bacalhau command passes a prompt to the model and generates an image in the outputs directory. The main difference in the example below compared to all the other examples is the addition of the ",(0,i.kt)("inlineCode",{parentName:"p"},"--gpu X")," flag, which tells Bacalhau to only schedule the job on nodes that have ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," GPUs free. You can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/running-node/gpu/#gpu-node-configuration"},"read more about GPU support")," in the documentation. "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This will take about 5 minutes to complete and is mainly due to the cold-start GPU setup time. This is faster than the CPU version, but you might still want to grab some fruit or plan your lunchtime run."),(0,i.kt)("p",{parentName:"admonition"},"Furthermore, the container itself is about 10GB, so it might take a while to download on the node if it isn't cached.")),(0,i.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,i.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,i.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,i.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,i.kt)("p",null,"When it says ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,i.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,i.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,i.kt)("p",null,"After the download has finished you should see the following contents in results directory"),(0,i.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,i.kt)("p",null,"To view the file, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/outputs\n")),(0,i.kt)("h3",{id:"display-image"},"Display image"),(0,i.kt)("p",null,"To display and view your image run the code below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("results/outputs/image0.png")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"png",src:a(9510).Z,width:"512",height:"512"})))}c.isMDXComponent=!0},6464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image0-97d9cc068b5879d6cc88f7ec68535eea.png"},1252:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_18_0-cfecae1fe624c50676c9406eb9b637d7.png"},9510:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_35_0-98ebebd818f711d58152af5f358c7ab4.png"}}]);