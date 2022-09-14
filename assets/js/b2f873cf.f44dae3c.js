"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[457],{8388:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>l,default:()=>p});var o=a(7462),n=(a(7294),a(3905));a(2004);const i={sidebar_label:"Image Processing",sidebar_position:3},r="Image Processing",s={unversionedId:"demos/image-processing",id:"demos/image-processing",title:"Image Processing",description:"Introduction",source:"@site/docs/demos/image-processing.md",sourceDirName:"demos",slug:"/demos/image-processing",permalink:"/demos/image-processing",editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/demos/image-processing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Image Processing",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"List",permalink:"/demos/list"},next:{title:"Introduction",permalink:"/examples/introduction"}},l=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Prerequistes",id:"prerequistes",children:[],level:2},{value:"Submit the workload",id:"submit-the-workload",children:[],level:2},{value:"Get results",id:"get-results",children:[],level:2},{value:"Where to go next?",id:"where-to-go-next",children:[],level:2},{value:"Support",id:"support",children:[],level:2}],u={toc:l};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"image-processing"},"Image Processing"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Often, you will need to process a number of images across an entire data set hosted on IPFS. For example, the entire ",(0,n.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72"},"Landsat data dataset is hosted on IPFS "),". This is many thousands of images, it would be very convenient to run a job against the data without having to download it!"),(0,n.kt)("p",null,"This page is a demo of a data intensive image processing workload run on Bacalhau that transforms very high resolution imagery into thumbnail-size pictures.\nIt is an example of a highly parellizable compute task where a resize function is applied over a large number of files.\nFor a live walk through of this demo please watch the first part of the video below, otherwise feel free to run the demo yourself by following the steps below."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=wkOh05J5qgA"},(0,n.kt)("img",{alt:"image",src:a(5617).Z,width:"1420",height:"808"}))),(0,n.kt)("h2",{id:"prerequistes"},"Prerequistes"),(0,n.kt)("p",null,"Make sure you have the latest ",(0,n.kt)("inlineCode",{parentName:"p"},"bacalhau")," client installed by following the ",(0,n.kt)("a",{parentName:"p",href:"../getting-started/installation"},"getting started instructions"),"."),(0,n.kt)("h2",{id:"submit-the-workload"},"Submit the workload"),(0,n.kt)("p",null,"In this example we will be working against a small ",(0,n.kt)("a",{parentName:"p",href:"https://ipfs.io/ipfs/QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72"},"subset of the dataset"),". We will go through a demo similar to what you may need to do at scale: resizing all the images down to 100x100px."),(0,n.kt)("p",null,"To get started with a new concept, ",(0,n.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," allows you to pass input data volume with a ",(0,n.kt)("inlineCode",{parentName:"p"},"-v CID:path")," argument just like Docker, except the left hand side of the argument is a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)"),".\nThis results in a ",(0,n.kt)("em",{parentName:"p"},"data volume")," and can mount in an entire directory (instead of a single file)."),(0,n.kt)("p",null,"When you set this flag, it then ensures that CID is mounted into the container at the ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," location as an input volume."),(0,n.kt)("p",null,"Data volumes also work on output - by default ",(0,n.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," always creates an output data volume mounted at ",(0,n.kt)("inlineCode",{parentName:"p"},"/outputs"),".\nThis is a convenient location to store the results of your job. See below for an example."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u276f bacalhau docker run \\\n  -v QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/input_images \\\n  dpokidov/imagemagick:7.1.0-47-ubuntu \\\n  -- magick mogrify -resize 100x100 -quality 100 -path /outputs '/input_images/*.jpg'\nf8558cf9-be1c-4f80-89e7-ccc98f6aa0a2\n")),(0,n.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id.\nWe store that in an environment variable so that we can reuse it later on."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u276f export JOB_ID=f8558cf9 # make sure to use the right job id from the `docker run` command above\n\n\u276f bacalhau list --id-filter=${JOB_ID}\n CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED\n 09:21:03  f8558cf9  Docker dpokidov/imag...  Published            /ipfs/bafybeidtitnyf...\n")),(0,n.kt)("p",null,"Since the job state is published/complete, the job result can be downloaded locally.\nWe achieve that in the next section."),(0,n.kt)("h2",{id:"get-results"},"Get results"),(0,n.kt)("p",null,"First, let us create and move into a directory that will store our job outputs.\nSecond, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," verb to download the job outputs into the current directory.\n",(0,n.kt)("em",{parentName:"p"},"This command prints out a number of verbose logs, although these meant for Bacalhau developers you may want to ignore them (this will soon: ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/filecoin-project/bacalhau/issues/614"},"issue #614"),").")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u276f mkdir -p /tmp/img-demo\n\u276f cd /tmp/img-demo\n\n\u276f bacalhau get ${JOB_ID}\n13:00:18.719 | INF bacalhau/get.go:67 > Fetching results of job 'f8558cf9'...\n13:00:23.219 | INF ipfs/downloader.go:115 > Found 1 result shards, downloading to temporary folder.\n13:00:29.594 | INF ipfs/downloader.go:195 > Combining shard from output volume 'outputs' to final location: '/tmp/img-demo'\n")),(0,n.kt)("p",null,"Now, the docker run command above used the ",(0,n.kt)("inlineCode",{parentName:"p"},"outputs")," volume as a results folder so when we download them they will be stored in a homonymous folder within ",(0,n.kt)("inlineCode",{parentName:"p"},"volumes/"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u276f ls -l ./volumes/outputs/\ntotal 384\n-rw-r--r--  1 enricorotundo  staff  14536 Sep 14 13:00 cafires_vir_2021231_lrg.jpg\n-rw-r--r--  1 enricorotundo  staff  34594 Sep 14 13:00 greatsaltlake_oli_2017210_lrg.jpg\n-rw-r--r--  1 enricorotundo  staff  12928 Sep 14 13:00 greecefires_oli_2021222_lrg.jpg\n-rw-r--r--  1 enricorotundo  staff  16705 Sep 14 13:00 haitiearthquake_oli_20212_lrg.jpg\n-rw-r--r--  1 enricorotundo  staff  42427 Sep 14 13:00 iwojima_tmo_2021225_lrg.jpg\n-rw-r--r--  1 enricorotundo  staff  10419 Sep 14 13:00 lakemead_etm_2000220_lrg.jpg\n-rw-r--r--  1 enricorotundo  staff  13467 Sep 14 13:00 lapalma_oli_2021141_lrg.jpg\n-rw-r--r--  1 enricorotundo  staff  13687 Sep 14 13:00 spainfire_oli_2021227_lrg.jpg\n-rw-r--r--  1 enricorotundo  staff  15476 Sep 14 13:00 sulphursprings_oli_2019254_lrg.jpg\n")),(0,n.kt)("h2",{id:"where-to-go-next"},"Where to go next?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../getting-started/workload-onboarding"},"How to run an existing workload on Bacalhau"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../all-flags"},"Check out the Bacalhau CLI Reference page"),".")),(0,n.kt)("h2",{id:"support"},"Support"),(0,n.kt)("p",null,"Please reach out to the ",(0,n.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C02RLM3JHUY"},"Bacalhau team via Slack")," to seek help or in case of any issues."))}p.isMDXComponent=!0},5617:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Bacalhau_Intro_Video-9e36145de2884d59a39856bdab1cf092.png"}}]);