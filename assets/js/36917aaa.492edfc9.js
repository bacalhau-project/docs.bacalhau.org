"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9728:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"S3-Model-Inference",sidebar_position:3},o="Running Inference on a Model stored on S3",l={unversionedId:"examples/model-inference/S3-Model-Inference/index",id:"examples/model-inference/S3-Model-Inference/index",title:"Running Inference on a Model stored on S3",description:"Open In Colab",source:"@site/docs/examples/model-inference/S3-Model-Inference/index.md",sourceDirName:"examples/model-inference/S3-Model-Inference",slug:"/examples/model-inference/S3-Model-Inference/",permalink:"/examples/model-inference/S3-Model-Inference/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/S3-Model-Inference/index.md",tags:[],version:"current",lastUpdatedAt:1687266311,formattedLastUpdatedAt:"Jun 20, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"S3-Model-Inference",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Object Detection - YOLOv5",permalink:"/examples/model-inference/object-detection-yolo5/"},next:{title:"Stable Diffusion -CKPT",permalink:"/examples/model-inference/Stable-Diffusion-CKPT-Inference/"}},s={},p=[{value:"Running Locally",id:"running-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Downloading the Datasets",id:"downloading-the-datasets",level:3},{value:"Creating the Inference Script",id:"creating-the-inference-script",level:3},{value:"Running the inference script",id:"running-the-inference-script",level:3},{value:"Running inference on bacalhau",id:"running-inference-on-bacalhau",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Viewing the output",id:"viewing-the-output",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-inference-on-a-model-stored-on-s3"},"Running Inference on a Model stored on S3"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-inference/S3-Model-Inference/index.ipynb"},(0,a.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-inference/S3-Model-Inference/index.ipynb"},(0,a.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,a.kt)("p",null,"In this example, we will demonstrate how to run inference on a model stored on Amazon S3. We will use a PyTorch model trained on the MNIST dataset."),(0,a.kt)("h2",{id:"running-locally"},"Running Locally"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python"),(0,a.kt)("li",{parentName:"ul"},"PyTorch")),(0,a.kt)("h3",{id:"downloading-the-datasets"},"Downloading the Datasets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nwget https://sagemaker-sample-files.s3.amazonaws.com/datasets/image/MNIST/model/pytorch-training-2020-11-21-22-02-56-203/model.tar.gz\nwget https://raw.githubusercontent.com/js-ts/mnist-test/main/digit.png\n")),(0,a.kt)("h3",{id:"creating-the-inference-script"},"Creating the Inference Script"),(0,a.kt)("p",null,"This script is designed to load a pretrained PyTorch model for MNIST digit classification from a tar.gz file, extract it, and use the model to perform inference on a given input image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile inference.py\nimport torch\nimport torchvision.transforms as transforms\nfrom PIL import Image\nfrom torch.autograd import Variable\nimport argparse\nimport tarfile\n\nclass CustomModel(torch.nn.Module):\n    def __init__(self):\n        super(CustomModel, self).__init__()\n        self.conv1 = torch.nn.Conv2d(1, 10, 5)\n        self.conv2 = torch.nn.Conv2d(10, 20, 5)\n        self.fc1 = torch.nn.Linear(320, 50)\n        self.fc2 = torch.nn.Linear(50, 10)\n\n    def forward(self, x):\n        x = torch.relu(self.conv1(x))\n        x = torch.max_pool2d(x, 2)\n        x = torch.relu(self.conv2(x))\n        x = torch.max_pool2d(x, 2)\n        x = torch.flatten(x, 1)\n        x = torch.relu(self.fc1(x))\n        x = self.fc2(x)\n        output = torch.log_softmax(x, dim=1)\n        return output\n\ndef extract_tar_gz(file_path, output_dir):\n    with tarfile.open(file_path, 'r:gz') as tar:\n        tar.extractall(path=output_dir)\n\n# Parse command-line arguments\nparser = argparse.ArgumentParser()\nparser.add_argument('--tar_gz_file_path', type=str, required=True, help='Path to the tar.gz file')\nparser.add_argument('--output_directory', type=str, required=True, help='Output directory to extract the tar.gz file')\nparser.add_argument('--image_path', type=str, required=True, help='Path to the input image file')\nargs = parser.parse_args()\n\n# Extract the tar.gz file\ntar_gz_file_path = args.tar_gz_file_path\noutput_directory = args.output_directory\nextract_tar_gz(tar_gz_file_path, output_directory)\n\n# Load the model\nmodel_path = f\"{output_directory}/model.pth\"\nmodel = CustomModel()\nmodel.load_state_dict(torch.load(model_path, map_location=torch.device(\"cpu\")))\nmodel.eval()\n\n# Transformations for the MNIST dataset\ntransform = transforms.Compose([\n    transforms.Resize((28, 28)),\n    transforms.Grayscale(num_output_channels=1),\n    transforms.ToTensor(),\n    transforms.Normalize((0.1307,), (0.3081,)),\n])\n\n# Function to run inference on an image\ndef run_inference(image, model):\n    image_tensor = transform(image).unsqueeze(0)  # Apply transformations and add batch dimension\n    input = Variable(image_tensor)\n\n    # Perform inference\n    output = model(input)\n    _, predicted = torch.max(output.data, 1)\n    return predicted.item()\n\n# Example usage\nimage_path = args.image_path\nimage = Image.open(image_path)\npredicted_class = run_inference(image, model)\nprint(f\"Predicted class: {predicted_class}\")\n\n")),(0,a.kt)("h3",{id:"running-the-inference-script"},"Running the inference script"),(0,a.kt)("p",null,"To use this script, you need to provide the paths to the tar.gz file containing the pretrained model, the output directory where the model will be extracted, and the input image file for which you want to perform inference. The script will output the predicted digit (class) for the given input image."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython inference.py --tar_gz_file_path ./model.tar.gz --output_directory ./model --image_path ./digit.png\n")),(0,a.kt)("h2",{id:"running-inference-on-bacalhau"},"Running inference on bacalhau"),(0,a.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--wait \\\n--id-only \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n-w /inputs \\\n-i src=s3://sagemaker-sample-files/datasets/image/MNIST/model/pytorch-training-2020-11-21-22-02-56-203/model.tar.gz,dst=/model/,opt=region=us-east-1 \\\n-i git://github.com/js-ts/mnist-test.git \\\npytorch/pytorch \\\n -- python /inputs/js-ts/mnist-test/inference.py --tar_gz_file_path /model/model.tar.gz --output_directory /model-pth --image_path /inputs/js-ts/mnist-test/image.png\n")),(0,a.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-w /inputs")," Setting the current working directory at /inputs in the container")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-i src=s3://sagemaker-sample-files/datasets/image/MNIST/model/pytorch-training-2020-11-21-22-02-56-203/model.tar.gz,dst=/model/,opt=region=us-east-1"),": Mounting the s3 bucket at the destination path provided\n",(0,a.kt)("inlineCode",{parentName:"p"},"/model/")," and specifying the region where the bucket is located ",(0,a.kt)("inlineCode",{parentName:"p"},"opt=region=us-east-1"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-i git://github.com/js-ts/mnist-test.git"),": Flag to mount the source code repo from GitHub. It would mount the repo at ",(0,a.kt)("inlineCode",{parentName:"p"},"/inputs/js-ts/mnist-test"),"\nin this case it also contains the test image.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"pytorch/pytorch"),": The name of the Docker image.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-- python /inputs/js-ts/mnist-test/inference.py --tar_gz_file_path /model/model.tar.gz --output_directory /model-pth --image_path /inputs/js-ts/mnist-test/image.png"),": The command to run inference on the model."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/model/model.tar.gz")," is the path to the model file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/model-pth")," is the output directory for the model.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"/inputs/js-ts/mnist-test/image.png")," is the path to the input image."))))),(0,a.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."),(0,a.kt)("h3",{id:"viewing-the-output"},"Viewing the output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau logs ${JOB_ID}\n")))}u.isMDXComponent=!0}}]);