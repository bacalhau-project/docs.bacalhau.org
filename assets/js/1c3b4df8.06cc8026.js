"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Running-Jupyter-Notebook",sidebar_position:3},r="Running Jupyter Notebooks on bacalhau",l={unversionedId:"examples/workload-onboarding/Running-Jupyter-Notebook/index",id:"examples/workload-onboarding/Running-Jupyter-Notebook/index",title:"Running Jupyter Notebooks on bacalhau",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/Running-Jupyter-Notebook/index.md",sourceDirName:"examples/workload-onboarding/Running-Jupyter-Notebook",slug:"/examples/workload-onboarding/Running-Jupyter-Notebook/",permalink:"/examples/workload-onboarding/Running-Jupyter-Notebook/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/Running-Jupyter-Notebook/index.md",tags:[],version:"current",lastUpdatedAt:1696949965,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Running-Jupyter-Notebook",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Reading-From-Multiple-S3-Buckets",permalink:"/examples/workload-onboarding/Reading-From-Multiple-S3-Buckets/"},next:{title:"Prolog Script",permalink:"/examples/workload-onboarding/Prolog-Hello-World/"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"1. Executing a Simple Hello World Notebook",id:"1-executing-a-simple-hello-world-notebook",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"2. Running Notebook to Train an MNIST Model",id:"2-running-notebook-to-train-an-mnist-model",level:2},{value:"Building the container (optional)",id:"building-the-container-optional",level:3},{value:"Prerequisite",id:"prerequisite-1",level:4},{value:"Running the job on Bacalhau",id:"running-the-job-on-bacalhau",level:3},{value:"Prerequisite",id:"prerequisite-2",level:4},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs-1",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-jupyter-notebooks-on-bacalhau"},"Running Jupyter Notebooks on bacalhau"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/Running-Jupyter-Notebook/index.ipynb"},(0,a.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/Running-Jupyter-Notebook/index.ipynb"},(0,a.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Jupyter Notebooks have become an essential tool for data scientists, researchers, and developers for interactive computing and the development of data-driven projects. They provide an efficient way to share code, equations, visualizations, and narrative text with support for multiple programming languages. In this tutorial, we will introduce you to running Jupyter Notebooks on Bacalhau, a powerful and flexible container orchestration platform. By leveraging Bacalhau, you can execute Jupyter Notebooks in a scalable and efficient manner using Docker containers, without the need for manual setup or configuration."),(0,a.kt)("p",null,"In the following sections, we will explore two examples of executing Jupyter Notebooks on Bacalhau:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Executing a Simple Hello World Notebook: We will begin with a basic example to familiarize you with the process of running a Jupyter Notebook on Bacalhau. We will execute a simple "Hello, World!" notebook to demonstrate the steps required for running a notebook in a containerized environment.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Notebook to Train an MNIST Model: In this section, we will dive into a more advanced example. We will execute a Jupyter Notebook that trains a machine-learning model on the popular MNIST dataset. This will showcase the potential of Bacalhau to handle more complex tasks while providing you with insights into utilizing containerized environments for your data science projects."))),(0,a.kt)("h2",{id:"1-executing-a-simple-hello-world-notebook"},"1. Executing a Simple Hello World Notebook"),(0,a.kt)("p",null,"There are no external dependencies that we need to install all dependencies are already there in the container"),(0,a.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--wait \\\n--id-only \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n-w /inputs \\\n-i https://raw.githubusercontent.com/js-ts/hello-notebook/main/hello.ipynb \\\njsacex/jupyter \\\n-- jupyter nbconvert --execute --to notebook --output /outputs/hello_output.ipynb hello.ipynb\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-i"),": This flag stands for \"input\" and is used to provide the URL of the input Jupyter Notebook you want to execute. In this case, we are using a public gist containing the 'hello.ipynb' notebook."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://gist.githubusercontent.com/js-ts/54d1015af4cb2ec5882ada2180ec042c/raw/a4c07357db014572da2ff27628a3669bfb99ba4d/hello.ipynb"),": This is the URL of the input Jupyter Notebook."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jupyter/base-notebook"),": This is the name of the Docker image used for running the Jupyter Notebook. It is a minimal Jupyter Notebook stack based on the official Jupyter Docker Stacks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--"),": This double dash is used to separate the Bacalhau command options from the command that will be executed inside the Docker container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jupyter nbconvert"),": This is the primary command used to convert and execute Jupyter Notebooks. It allows for the conversion of notebooks to various formats, including execution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--execute"),": This flag tells ",(0,a.kt)("inlineCode",{parentName:"li"},"nbconvert")," to execute the notebook and store the results in the output file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--to notebook"),": This option specifies the output format. In this case, we want to keep the output as a Jupyter Notebook."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--output /outputs/hello_output.ipynb"),": This option specifies the path and filename for the output Jupyter Notebook, which will contain the results of the executed input notebook."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/inputs/hello.ipynb"),": This is the path of the input Jupyter Notebook inside the Docker container.")),(0,a.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,a.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,a.kt)("p",null,"When it says ",(0,a.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,a.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,a.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir results # Temporary directory to store the results\nbacalhau get ${JOB_ID} --output-dir results # Download the results\n")),(0,a.kt)("p",null,"After the download has finished you should see the following contents in the results directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/outputs\n")),(0,a.kt)("h2",{id:"2-running-notebook-to-train-an-mnist-model"},"2. Running Notebook to Train an MNIST Model"),(0,a.kt)("h3",{id:"building-the-container-optional"},"Building the container (optional)"),(0,a.kt)("h4",{id:"prerequisite-1"},"Prerequisite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install Docker on your local machine."),(0,a.kt)("li",{parentName:"ul"},"Sign up for a DockerHub account if you don't already have one.\nSteps")),(0,a.kt)("p",null,"Step 1: Create a Dockerfile\nCreate a new file named Dockerfile in your project directory with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"# Use the official Python image as the base image\nFROM tensorflow/tensorflow:nightly-gpu\n\n# Set the working directory in the container\nWORKDIR /\n\nRUN apt-get update -y\n\nCOPY mnist.ipynb .\n# Install the Python packages\nCOPY requirements.txt .\n\nRUN python3 -m pip install --upgrade pip\n\n# Install the Python packages\nRUN pip install --no-cache-dir -r requirements.txt\n\nRUN pip install -U scikit-learn\n")),(0,a.kt)("p",null,"This Dockerfile creates a Docker image based on the official TensorFlow GPU-enabled image, sets the working directory to the root, updates the package list, and copies an IPython notebook (mnist.ipynb) and a requirements.txt file. It then upgrades pip and installs Python packages from the requirements.txt file, along with scikit-learn. The resulting image provides an environment ready for running the mnist.ipynb notebook with TensorFlow and scikit-learn, as well as other specified dependencies."),(0,a.kt)("p",null,"Step 2: Build the Docker Image\nIn your terminal, navigate to the directory containing the Dockerfile and run the following command to build the Docker image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t your-dockerhub-username/jupyter-mnist-tensorflow:latest .\n")),(0,a.kt)("p",null,'Replace "your-dockerhub-username" with your actual DockerHub username. This command will build the Docker image and tag it with your DockerHub username and the name "your-dockerhub-username/jupyter-mnist-tensorflow".'),(0,a.kt)("p",null,"Step 3: Push the Docker Image to DockerHub\nOnce the build process is complete, Next, push the Docker image to DockerHub using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker push your-dockerhub-username/jupyter-mnist-tensorflow\n")),(0,a.kt)("p",null,'Again, replace "your-dockerhub-username" with your actual DockerHub username. This command will push the Docker image to your DockerHub repository.'),(0,a.kt)("h3",{id:"running-the-job-on-bacalhau"},"Running the job on Bacalhau"),(0,a.kt)("h4",{id:"prerequisite-2"},"Prerequisite"),(0,a.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--wait \\\n--id-only \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n --gpu 1 \\\n-i gitlfs://huggingface.co/datasets/VedantPadwal/mnist.git \\\njsacex/jupyter-tensorflow-mnist:v02 \\\n-- jupyter nbconvert --execute --to notebook --output /outputs/mnist_output.ipynb mnist.ipynb\n")),(0,a.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--gpu 1"),": Flag to specify the number of GPUs to use for the execution. In this case, 1 GPU will be used.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"-i gitlfs://huggingface.co/datasets/VedantPadwal/mnist.git"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"-i")," flag is used to clone the MNIST dataset from Hugging Face's repository using Git LFS. The files will be mounted inside the container.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"jsacex/jupyter-tensorflow-mnist:v02"),": The name and the tag of the Docker image.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"--"),": Double hyphen is used to separate the Docker command-line options from the command that will be executed inside the container.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"jupyter nbconvert --execute --to notebook --output /outputs/mnist_output.ipynb mnist.ipynb"),": The command to be executed inside the container. In this case, it runs the ",(0,a.kt)("inlineCode",{parentName:"p"},"jupyter nbconvert")," command to execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"mnist.ipynb")," notebook and save the output as ",(0,a.kt)("inlineCode",{parentName:"p"},"mnist_output.ipynb")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/outputs")," directory."))),(0,a.kt)("h2",{id:"checking-the-state-of-your-jobs-1"},"Checking the State of your Jobs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,a.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,a.kt)("p",null,"When it says ",(0,a.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,a.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,a.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir results # Temporary directory to store the results\nbacalhau get ${JOB_ID} --output-dir results # Download the results\n")),(0,a.kt)("p",null,"After the download has finished you should see the following contents in the results directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/outputs\n")),(0,a.kt)("p",null,"The outputs include our trained model and the jupyter notebook with the output cells"))}d.isMDXComponent=!0}}]);