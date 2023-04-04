"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9671],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),u=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=u(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=n,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return t?r.createElement(m,i(i({ref:a},c),{},{components:t})):r.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9881:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),n=(t(7294),t(3905));const o={sidebar_label:"Home",sidebar_position:1,slug:"/",hide_title:!0},i=void 0,l={unversionedId:"intro",id:"intro",title:"intro",description:"Bacalhau is a platform for fast, cost efficient, and secure computation by running jobs where the data is generated and stored. With Bacalhau, you can streamline your existing workflows without the need of extensive rewriting by running  arbitrary Docker containers and WebAssembly (wasm) images as tasks. This architecture is also referred to as Compute Over Data (or CoD). Bacalhau was coined from the Portuguese word for salted Cod fish.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1680616711,formattedLastUpdatedAt:"Apr 4, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Home",sidebar_position:1,slug:"/",hide_title:!0},sidebar:"documentationSidebar",next:{title:"Architecture",permalink:"/getting-started/architecture"}},s={},u=[{value:"Why Bacalhau?",id:"why-bacalhau",level:2},{value:"Fast Track \u23f1\ufe0f",id:"fast-track-\ufe0f",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Data ingestion",id:"data-ingestion",level:3},{value:"Security on Bacalhau",id:"security-on-bacalhau",level:3},{value:"Workloads is Bacalhau best suited for",id:"workloads-is-bacalhau-best-suited-for",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Roadmap",id:"roadmap",level:2},{value:"Community",id:"community",level:2},{value:"Next Steps",id:"next-steps",level:2}],c={toc:u},p="wrapper";function h(e){let{components:a,...t}=e;return(0,n.kt)(p,(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"img/bacalhau-horizontal.jpg",alt:"Bacalhau Logo",width:"300"})),(0,n.kt)("h1",{id:"what-is-bacalhau"},"What is Bacalhau?"),(0,n.kt)("p",null,"Bacalhau is a platform for fast, cost efficient, and secure computation by running jobs where the data is generated and stored. With Bacalhau, you can streamline your existing workflows without the need of extensive rewriting by running  arbitrary Docker containers and WebAssembly (wasm) images as tasks. This architecture is also referred to as ",(0,n.kt)("strong",{parentName:"p"},"Compute Over Data")," (or CoD). ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",{parentName:"em",href:"https://translate.google.com/?sl=pt&tl=en&text=bacalhau&op=translate"},"Bacalhau")," was coined from the Portuguese word for salted Cod fish"),". "),(0,n.kt)("p",null,"Bacalhau seeks to transform data processing for large-scale datasets to improve cost and efficiency, and to open up data processing to larger audiences. Our goals is to create an open, collaborative compute ecosystem that enables unparalleled collaboration. ",(0,n.kt)("strong",{parentName:"p"},"At the moment we are free volunteer network, enjoy;)")),(0,n.kt)("h2",{id:"why-bacalhau"},"Why Bacalhau?"),(0,n.kt)("p",null,"\u26a1\ufe0f Jobs in Bacalhau are processed where the data was created and all ",(0,n.kt)("strong",{parentName:"p"},"jobs are parallel by default"),"."),(0,n.kt)("p",null,"\ud83d\udd10 You can run ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/next-steps/private-cluster"},"private workloads")," to ",(0,n.kt)("strong",{parentName:"p"},"reduce the chance of leaking private information")," or inadvertently sharing your data outside of your organization."),(0,n.kt)("p",null,"\ud83d\udcb8 Bacalhau ",(0,n.kt)("strong",{parentName:"p"},"reduces ingress/egress costs")," since jobs are processed closer to the source. "),(0,n.kt)("p",null,"\ud83e\udd13  You can ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/#how-it-works"},"mount your data anywhere")," on your machine, and Bacalhau will be able to run against that data."),(0,n.kt)("p",null,"\ud83d\udca5 You can integrate with services running on nodes to run a jobs, such as on ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/data-engineering/DuckDB/"},"DuckDB"),"."),(0,n.kt)("p",null,"\ud83d\udcda Bacalhau operates on a network of ",(0,n.kt)("strong",{parentName:"p"},"open compute resources")," made available to serve any data processing workload. With Bacalhau you can batch process petabytes (quadrillion bytes) of data."),(0,n.kt)("p",null,"\ud83c\udf86 You can auto-generate art using a ",(0,n.kt)("a",{parentName:"p",href:"https://www.waterlily.ai/"},"Stable Diffusion AI model")," trained on the chosen artist\u2019s original works."),(0,n.kt)("h2",{id:"fast-track-\ufe0f"},"Fast Track \u23f1\ufe0f"),(0,n.kt)("p",null,"Understand Bacalhau in 1 minute "),(0,n.kt)("p",null,"Install the bacalhau client:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,n.kt)("p",null,'Submit a "Hello World" job:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run ubuntu echo Hello World\n")),(0,n.kt)("p",null,"The job runs on the global Bacalhau network."),(0,n.kt)("p",null,"Download your result:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau get 63d08ff0..... # make sure to use the right job id from the docker run command\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For a more detailed tutorial, check out our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"Getting Started tutorial"),".")),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The goal of the Bacalhau project is to make it easy to perform distributed computation next to where the data resides. In order to do this, first you need to ingest some data. "),(0,n.kt)("h3",{id:"data-ingestion"},"Data ingestion"),(0,n.kt)("p",null,"Data is identified by its content identifier (CID) and can be accessed by anyone who knows the CID. Here are some options that can help you mount your data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/data-ingestion/from-url"},"Copy data from a URL to public storage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/data-ingestion/pin"},"Pin Data to public storage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/data-ingestion/s3"},"Copy Data from S3 Bucket to public storage"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The options are not limited to the above mentioned. You can mount your data anywhere on your machine, and Bacalhau will be able to run against that data")),(0,n.kt)("h3",{id:"security-on-bacalhau"},"Security on Bacalhau"),(0,n.kt)("p",null,"You can also use things like env variable, endpoints, etc to provide credentials."),(0,n.kt)("h3",{id:"workloads-is-bacalhau-best-suited-for"},"Workloads is Bacalhau best suited for"),(0,n.kt)("p",null,"For running on the public web (this is not for private workloads) you should choose a trusted provider (e.g. GCP, AWS, etc) to provide the compute, and provision your nodes"),(0,n.kt)("h3",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"Basically, anywhere you have more than 10 devices with/generating data around 100GB, you're probably running into a compute over data problem. Bacalhau can serve in various industries such as: security, web serving, financial services, IoT, Edge, Fog, multi-cloud, etc. "),(0,n.kt)("p",null,"Bacalhau shines when it comes to data-intensive applications like ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/data-engineering/"},"data engineering"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/model-training/"},"model training"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/model-inference/"},"model inference"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/model-training/"},"model training"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/molecular-dynamics/"},"model dynanmics"),", etc."),(0,n.kt)("p",null,"Here are some example tutorials on how you can process your data with Bacalhau:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/model-inference/stable-diffusion-gpu/"},"Stable Diffusion AI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/model-inference/StyleGAN3/"},"Generate Realistic Images using StyleGAN3 and Bacalhau")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/model-inference/object-detection-yolo5/"},"Object Detection with YOLOv5 on Bacalhau")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/miscellaneous/Genomics/"},"Running Genomics on Bacalhau")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/model-training/Training-Pytorch-Model/"},"Training Pytorch Model with Bacalhau"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For more tutorials, visit our ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/"},"example page"))),(0,n.kt)("h2",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"Our mission is to transform the way that compute is run globally. You can find Bacalhau's ",(0,n.kt)("a",{parentName:"p",href:"https://starmap.site/roadmap/github.com/bacalhau-project/bacalhau/issues/1151"},"Public Roadmap here"),"!"),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"Bacalhau has a very friendly community and we are always happy to help you get started:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/bacalhau-project/bacalhau/discussions"},"GitHub Discussions")," \u2013 ask anything about the project, give feedback or answer questions that will help other users."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://filecoin.io/slack"},"Join the Slack Community")," and go to ",(0,n.kt)("strong",{parentName:"li"},"#bacalhau")," channel \u2013 it is the easiest way engage with other members in the community and get help."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/community/ways-to-contribute"},"Contributing")," \u2013 learn how to contribute to the Bacalhau project.")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"\ud83d\udc49 Continue with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"Bacalhau Getting Started guide")," to learn how to install and run a job with the Bacalhau client."),(0,n.kt)("p",null,"\ud83d\udc49 Or jump directly to try out the different ",(0,n.kt)("a",{parentName:"p",href:"/examples/"},"Examples")," that showcases Bacalhau abilities."))}h.isMDXComponent=!0}}]);