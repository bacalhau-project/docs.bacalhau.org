"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1728:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_label:"Simple Image Processing",sidebar_position:1,description:"How to process images stored in IPFS with Bacalhau"},r="Simple Image Processing",s={unversionedId:"examples/data-engineering/image-processing/index",id:"examples/data-engineering/image-processing/index",title:"Simple Image Processing",description:"How to process images stored in IPFS with Bacalhau",source:"@site/docs/examples/data-engineering/image-processing/index.md",sourceDirName:"examples/data-engineering/image-processing",slug:"/examples/data-engineering/image-processing/",permalink:"/examples/data-engineering/image-processing/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/image-processing/index.md",tags:[],version:"current",lastUpdatedAt:1676283943,formattedLastUpdatedAt:"Feb 13, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Simple Image Processing",sidebar_position:1,description:"How to process images stored in IPFS with Bacalhau"},sidebar:"documentationSidebar",previous:{title:"DuckDB",permalink:"/examples/data-engineering/DuckDB/"},next:{title:"Simple Parallel Workloads",permalink:"/examples/data-engineering/simple-parallel-workloads/"}},l={},p=[{value:"Prerequistes",id:"prerequistes",level:2},{value:"Submit the workload",id:"submit-the-workload",level:2},{value:"Get results",id:"get-results",level:2},{value:"Where to go next?",id:"where-to-go-next",level:2},{value:"Support",id:"support",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simple-image-processing"},"Simple Image Processing"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/image-processing/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering%2Fimage-processing%2Findex.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,i.kt)("p",null,"In this example, we will show you how to use Bacalhau to process images on a ",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72/"},"Landsat dataset"),"."),(0,i.kt)("p",null,"Bacalhau has the unique capability of operating at a massive scale in a distributed environment. This is made possible because data is naturally sharded across the IPFS network amongst many providers. We can take advantage of this to process images in parallel."),(0,i.kt)("p",null,"However, before we do that, this notebook shows you how to use Bacalhau to process images using a ",(0,i.kt)("a",{parentName:"p",href:"https://cloudflare-ipfs.com/ipfs/QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72"},"much smaller subset"),". This is useful for testing and debugging your code."),(0,i.kt)("p",null,"For a live walk-through of this demo please watch the first part of the video below, otherwise feel free to run the demo yourself by following the steps below."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=wkOh05J5qgA"},(0,i.kt)("img",{alt:"Bacalhau Intro Video",src:a(8134).Z,width:"852",height:"485"}))),(0,i.kt)("h2",{id:"prerequistes"},"Prerequistes"),(0,i.kt)("p",null,"Make sure you have the latest ",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau")," client installed by following the ",(0,i.kt)("a",{parentName:"p",href:"../../../getting-started/installation"},"getting started instructions"),", or using the installation command below (which installs Bacalhau local to the notebook)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"env: PATH=./:./:./:/home/gitpod/.pyenv/versions/3.8.13/bin:/home/gitpod/.pyenv/libexec:/home/gitpod/.pyenv/plugins/python-build/bin:/home/gitpod/.pyenv/plugins/pyenv-virtualenv/bin:/home/gitpod/.pyenv/plugins/pyenv-update/bin:/home/gitpod/.pyenv/plugins/pyenv-installer/bin:/home/gitpod/.pyenv/plugins/pyenv-doctor/bin:/home/gitpod/.pyenv/shims:/ide/bin/remote-cli:/home/gitpod/.nix-profile/bin:/home/gitpod/.local/bin:/home/gitpod/.sdkman/candidates/maven/current/bin:/home/gitpod/.sdkman/candidates/java/current/bin:/home/gitpod/.sdkman/candidates/gradle/current/bin:/workspace/.cargo/bin:/home/gitpod/.rvm/gems/ruby-3.1.2/bin:/home/gitpod/.rvm/gems/ruby-3.1.2@global/bin:/home/gitpod/.rvm/rubies/ruby-3.1.2/bin:/home/gitpod/.pyenv/plugins/pyenv-virtualenv/shims:/home/gitpod/.pyenv/shims:/workspace/go/bin:/home/gitpod/.nix-profile/bin:/ide/bin/remote-cli:/home/gitpod/go/bin:/home/gitpod/go-packages/bin:/home/gitpod/.nvm/versions/node/v16.18.1/bin:/home/gitpod/.yarn/bin:/home/gitpod/.pnpm:/home/gitpod/.pyenv/bin:/workspace/.rvm/bin:/home/gitpod/.cargo/bin:/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin/:/home/gitpod/.local/bin:/usr/games:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/home/gitpod/.nvm/versions/node/v16.18.1/bin:/home/gitpod/.rvm/bin\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau version\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Client Version: v0.3.15\nServer Version: v0.3.15\n")),(0,i.kt)("h2",{id:"submit-the-workload"},"Submit the workload"),(0,i.kt)("p",null,"To submit a workload to Bacalhau you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. This allows you to pass input data volume with a ",(0,i.kt)("inlineCode",{parentName:"p"},"-v CID:path")," argument just like Docker, except the left-hand side of the argument is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)"),". This results in Bacalhau mounting a ",(0,i.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,i.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,i.kt)("p",null,"Bacalhau also mounts a data volume to store output data. By default ",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," creates an output data volume mounted at ",(0,i.kt)("inlineCode",{parentName:"p"},"/outputs"),". This is a convenient location to store the results of your job. See below for an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n  --wait \\\n  --wait-timeout-secs 100 \\\n  --id-only \\\n  -v QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/input_images \\\n  dpokidov/imagemagick:7.1.0-47-ubuntu \\\n  -- magick mogrify -resize 100x100 -quality 100 -path /outputs '/input_images/*.jpg'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"env: JOB_ID=0e4119fd-12f9-42f5-8cd2-54a0d270541e\n")),(0,i.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id.\nWe store that in an environment variable so that we can reuse it later on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED               \n 13:17:34  0e4119fd  Docker dpokidov/imag...  Completed            /ipfs/QmQnern37ueHrs... \n")),(0,i.kt)("p",null,"Since the job state is published/complete, the job is ready to be downloaded."),(0,i.kt)("h2",{id:"get-results"},"Get results"),(0,i.kt)("p",null,"First, let us create a new directory that will store our job outputs.\nSecond, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," verb to download the job outputs into the directory specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"--output-dir")," argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir results\nbacalhau get ${JOB_ID} --output-dir results\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Fetching results of job '0e4119fd-12f9-42f5-8cd2-54a0d270541e'...\nResults for job '0e4119fd-12f9-42f5-8cd2-54a0d270541e' have been written to...\nresults\n")),(0,i.kt)("p",null,"The docker run command above used the ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," volume as a results folder so when we download them they will be stored in a  folder within ",(0,i.kt)("inlineCode",{parentName:"p"},"volumes/outputs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ls -lah results/combined_results/outputs\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"total 196K\ndrwxr-xr-x 2 gitpod gitpod 4.0K Dec 14 13:22 .\ndrwxr-xr-x 3 gitpod gitpod   49 Dec 14 13:22 ..\n-rw-r--r-- 3 gitpod gitpod  15K Dec 14 13:22 cafires_vir_2021231_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  34K Dec 14 13:22 greatsaltlake_oli_2017210_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  13K Dec 14 13:22 greecefires_oli_2021222_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  17K Dec 14 13:22 haitiearthquake_oli_20212_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  42K Dec 14 13:22 iwojima_tmo_2021225_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  11K Dec 14 13:22 lakemead_etm_2000220_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  14K Dec 14 13:22 lapalma_oli_2021141_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  14K Dec 14 13:22 spainfire_oli_2021227_lrg.jpg\n-rw-r--r-- 3 gitpod gitpod  16K Dec 14 13:22 sulphursprings_oli_2019254_lrg.jpg\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import glob\nfrom IPython.display import Image, display\nfor imageName in glob.glob('results/combined_results/outputs/*.jpg'):\n    display(Image(filename=imageName))\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(731).Z,width:"100",height:"87"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(1597).Z,width:"100",height:"79"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(5188).Z,width:"100",height:"72"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(8891).Z,width:"100",height:"89"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(5424).Z,width:"100",height:"75"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(3933).Z,width:"94",height:"100"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(4845).Z,width:"100",height:"88"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(9538).Z,width:"100",height:"72"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"jpeg",src:a(122).Z,width:"100",height:"82"})),(0,i.kt)("h2",{id:"where-to-go-next"},"Where to go next?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/"},"Take a look at other examples")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/docker-workload-onboarding"},"How to run an existing workload on Bacalhau")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/all-flags"},"Check out the Bacalhau CLI Reference page"))),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"Please reach out to the ",(0,i.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C02RLM3JHUY"},"Bacalhau team via Slack")," to seek help or in case of any issues."))}u.isMDXComponent=!0},731:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_0-6d86471f6f5224aff3a7681fa856c6c7.jpg"},1597:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_1-8e2c87e8602032b3effac0d28205f613.jpg"},5188:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_2-d00b83ba4b35b9623cd36739dfed9ce8.jpg"},8891:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_3-eccd956fa658f24f64d54b0b11cb479e.jpg"},5424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_4-284579a9a15ee50f872330fa318fecd0.jpg"},3933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_5-15ce99181444dd71784a87734fe7e150.jpg"},4845:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_6-ce1d76e887dbf8925dfa4caff69f2a8e.jpg"},9538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_7-8062fe8d98d74f02b0c65b844f9339a0.jpg"},122:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_15_8-cc2844b1f2ae0e1e773774f3219c0025.jpg"},8134:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Bacalhau_Intro_Video_thumbnail-9888836176b5ecba4f0ecca234e791b6.jpg"}}]);