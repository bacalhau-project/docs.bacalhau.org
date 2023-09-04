"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8041],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return a?o.createElement(m,l(l({ref:t},c),{},{components:a})):o.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:n,l[1]=r;for(var u=2;u<i;u++)l[u]=a[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const i={sidebar_label:"Object Detection - YOLOv5",sidebar_position:2},l="Object Detection with YOLOv5 on Bacalhau",r={unversionedId:"examples/model-inference/object-detection-yolo5/index",id:"examples/model-inference/object-detection-yolo5/index",title:"Object Detection with YOLOv5 on Bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/model-inference/object-detection-yolo5/index.md",sourceDirName:"examples/model-inference/object-detection-yolo5",slug:"/examples/model-inference/object-detection-yolo5/",permalink:"/examples/model-inference/object-detection-yolo5/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/object-detection-yolo5/index.md",tags:[],version:"current",lastUpdatedAt:1693819129,formattedLastUpdatedAt:"Sep 4, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Object Detection - YOLOv5",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Huggingface-Model-Inference",permalink:"/examples/model-inference/Huggingface-Model-Inference/"},next:{title:"S3-Model-Inference",permalink:"/examples/model-inference/S3-Model-Inference/"}},s={},u=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running Object Detection Jobs on Bacalhau",id:"running-object-detection-jobs-on-bacalhau",level:2},{value:"Test Run with Sample Data",id:"test-run-with-sample-data",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing Output",id:"viewing-output",level:2},{value:"Using custom Images as an input",id:"using-custom-images-as-an-input",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs-1",level:3},{value:"Viewing Job Output",id:"viewing-job-output",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"object-detection-with-yolov5-on-bacalhau"},"Object Detection with YOLOv5 on Bacalhau"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,n.kt)("p",null,"The identification and localization of objects in images and videos is a computer vision task called object detection. Several algorithms have emerged in the past few years to tackle the problem. One of the most popular algorithms to date for real-time object detection is ",(0,n.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/yolo-you-only-look-once-real-time-object-detection-explained-492dc9230006"},"YOLO (You Only Look Once)"),", initially proposed by Redmond et al.",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1506.02640"},"[1]")),(0,n.kt)("p",null,"Traditionally, models like YOLO required enormous amounts of training data to yield reasonable results. People might not have access to such high-quality labeled data. Thankfully, open-source communities and researchers have made it possible to utilize pre-trained models to perform inference. In other words, you can use models that have already been trained on large datasets to perform object detection on your own data."),(0,n.kt)("p",null,"In this tutorial you will perform an end-to-end object detection inference, using the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/wiki/Docker-Quickstart"},"YOLOv5 Docker Image developed by Ultralytics.")),(0,n.kt)("h2",{id:"tdlr"},"TD;LR"),(0,n.kt)("p",null,"Performing object detection inference using Yolov5 and Bacalhau"),(0,n.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,n.kt)("h2",{id:"running-object-detection-jobs-on-bacalhau"},"Running Object Detection Jobs on Bacalhau"),(0,n.kt)("p",null,"Bacalhau is a highly scalable decentralized computing platform and is well suited to running massive object detection jobs. In this example, you can take advantage of the GPUs available on the Bacalhau network."),(0,n.kt)("h3",{id:"test-run-with-sample-data"},"Test Run with Sample Data"),(0,n.kt)("p",null,"To get started, let's run a test job with a small sample dataset that is included in the YOLOv5 Docker Image. This will give you a chance to familiarise yourself with the process of running a job on Bacalhau."),(0,n.kt)("p",null,"In addition to the usual Bacalhau flags, you will also see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--gpu 1")," to specify the use of a GPU")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Remember that Bacalhau does not provide any network connectivity when running a job. All assets must be provided at submission time.")),(0,n.kt)("p",null,"The model requires pre-trained weights to run and by default downloads them from within the container. Bacalhau jobs don't have network access so we will pass in the weights at submission time, saving them to ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/src/app/yolov5s.pt"),". You may also provide your own weights here."),(0,n.kt)("p",null,"The container has its own options that we must specify:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--input")," to select which pre-trained weights you desire with details on the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ultralytics/yolov5/releases"},"yolov5 release page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--project")," specifies the output volume that the model will save its results to. Bacalhau defaults to using ",(0,n.kt)("inlineCode",{parentName:"li"},"/outputs")," as the output directory, so we save it there.")),(0,n.kt)("p",null,"For more container flags refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ultralytics/yolov5/blob/master/detect.py#L3-#L25"},(0,n.kt)("inlineCode",{parentName:"a"},"yolov5/detect.py")," file in the YOLO repository"),"."),(0,n.kt)("p",null,"One final additional hack that we have to do is move the weights file to a location with the standard name. As of writing this, Bacalhau downloads the file to a UUID-named file, which the model is not expecting. This is because GitHub 302 redirects the request to a random file in its backend."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--gpu 1 \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n--wait \\\n--id-only \\\n--input https://github.com/ultralytics/yolov5/releases/download/v6.2/yolov5s.pt \\\nultralytics/yolov5:v6.2 \\\n-- /bin/bash -c 'find /inputs -type f -exec cp {} /outputs/yolov5s.pt \\; ; python detect.py --weights /outputs/yolov5s.pt --source $(pwd)/data/images --project /outputs'\n")),(0,n.kt)("p",null,"This should output a UUID (like ",(0,n.kt)("inlineCode",{parentName:"p"},"59c59bfb-4ef8-45ac-9f4b-f0e9afd26e70"),"). This is the ID of the job that was created. You can check the status of the job with the following command:"),(0,n.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,n.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,n.kt)("p",null,"When it says ",(0,n.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,n.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,n.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir results\nbacalhau get ${JOB_ID} --output-dir results\n")),(0,n.kt)("h2",{id:"viewing-output"},"Viewing Output"),(0,n.kt)("p",null,"After the download has finished we can see the results:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("results/outputs/exp/bus.jpg")\ndisplay.Image("results/outputs/exp/zidane.jpg")\n')),(0,n.kt)("h2",{id:"using-custom-images-as-an-input"},"Using custom Images as an input"),(0,n.kt)("p",null,"Now let's use some custom images. First, you will need to ingest your images onto IPFS/Filecoin. For more information about how to do that see the data ingestion section."),(0,n.kt)("p",null,"This example will use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/f445f341fc5e3ab58757efa983a38d6dc709de82abd1444c8817785ecd42a1ac"},"Cyclist Dataset for Object Detection | Kaggle")," dataset."),(0,n.kt)("p",null,"We have already uploaded this dataset to Filecoin under the CID: ",(0,n.kt)("inlineCode",{parentName:"p"},"bafybeicyuddgg4iliqzkx57twgshjluo2jtmlovovlx5lmgp5uoh3zrvpm"),". You can browse to this dataset via ",(0,n.kt)("a",{parentName:"p",href:"https://w3s.link/ipfs/bafybeicyuddgg4iliqzkx57twgshjluo2jtmlovovlx5lmgp5uoh3zrvpm"},"a HTTP IPFS proxy"),"."),(0,n.kt)("p",null,"Let's run a the same job again, but this time use the images above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--gpu 1 \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n--wait \\\n--id-only \\\n--input https://github.com/ultralytics/yolov5/releases/download/v6.2/yolov5s.pt \\\n--input ipfs://bafybeicyuddgg4iliqzkx57twgshjluo2jtmlovovlx5lmgp5uoh3zrvpm:/datasets \\\nultralytics/yolov5:v6.2 \\\n-- /bin/bash -c 'find /inputs -type f -exec cp {} /outputs/yolov5s.pt \\; ; python detect.py --weights /outputs/yolov5s.pt --source /datasets --project /outputs'\n")),(0,n.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,n.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,n.kt)("h3",{id:"checking-the-state-of-your-jobs-1"},"Checking the State of your Jobs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,n.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,n.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf custom-results && mkdir custom-results\nbacalhau get ${JOB_ID} --output-dir custom-results\n")),(0,n.kt)("h3",{id:"viewing-job-output"},"Viewing Job Output"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import glob\nfrom IPython.display import Image, display\nfor file in glob.glob('custom-results/outputs/exp/*.jpg'):\n    display(Image(filename=file))\n")))}d.isMDXComponent=!0}}]);