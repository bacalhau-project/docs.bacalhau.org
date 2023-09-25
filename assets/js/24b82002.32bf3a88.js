"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[809],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(o),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7127:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_label:"Architecture",sidebar_position:1},i="Architecture",s={unversionedId:"getting-started/architecture",id:"getting-started/architecture",title:"Architecture",description:"Bacalhau is a peer-to-peer network of nodes that allows for decentralized communication between computers. There are two nodes types in the network:",source:"@site/docs/getting-started/architecture.md",sourceDirName:"getting-started",slug:"/getting-started/architecture",permalink:"/getting-started/architecture",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/architecture.md",tags:[],version:"current",lastUpdatedAt:1695634352,formattedLastUpdatedAt:"Sep 25, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Architecture",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"Installation",permalink:"/getting-started/installation"}},l={},u=[{value:"System Components",id:"system-components",level:2},{value:"Core Components",id:"core-components",level:2},{value:"Requester node",id:"requester-node",level:3},{value:"Compute node",id:"compute-node",level:3},{value:"Interface",id:"interface",level:2},{value:"Transport",id:"transport",level:3},{value:"Executor",id:"executor",level:3},{value:"Storage Provider",id:"storage-provider",level:3},{value:"Publisher",id:"publisher",level:3},{value:"Job Lifecycle",id:"job-lifecycle",level:2},{value:"Job Submission",id:"job-submission",level:3},{value:"Job Acceptance",id:"job-acceptance",level:3},{value:"Job Execution",id:"job-execution",level:3},{value:"Publishing",id:"publishing",level:3},{value:"Networking",id:"networking",level:3},{value:"Input / Output Volumes",id:"input--output-volumes",level:3}],c={toc:u},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Bacalhau is a peer-to-peer network of nodes that allows for decentralized communication between computers. There are two nodes types in the network:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Requester Node:")," responsible for handling user requests, discovering and ranking compute nodes, forwarding jobs to compute nodes, and monitoring the job lifecycle."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compute Node:")," responsible for executing jobs and producing results. Different compute nodes can be used for different types of jobs, depending on their capabilities and resources.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:o(7274).Z,title:"Bacalhau Architecture",width:"814",height:"610"})),(0,r.kt)("p",null,"The requester and compute nodes together form a p2p network and use gossiping to discover each other, share information about node capabilities, available resources and health status."),(0,r.kt)("p",null,"To interact with the Bacalhau network, users can use the Bacalhau CLI (command-line interface) to send requests to a requester node in the network. These requests are sent using the JSON format over HTTP, a widely-used protocol for transmitting data over the internet."),(0,r.kt)("h2",{id:"system-components"},"System Components"),(0,r.kt)("p",null,"Bacalhau's architecture involves two main sections which are the ",(0,r.kt)("strong",{parentName:"p"},"core components")," and ",(0,r.kt)("strong",{parentName:"p"},"interfaces"),"."),(0,r.kt)("h2",{id:"core-components"},"Core Components"),(0,r.kt)("p",null,"The core components are responsible for handling requests and connecting different nodes. It consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requester-node"},"Requester node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#compute-node"},"Compute node"))),(0,r.kt)("h3",{id:"requester-node"},"Requester node"),(0,r.kt)("p",null,"In the Bacalhau network, the requester node is responsible for handling requests from clients using JSON over HTTP. This node serves as the main custodian of jobs that are submitted to it."),(0,r.kt)("p",null,"When a job is submitted to a requester node, it selects compute nodes that are capable and suitable to execute the job, and communicate with them directly. It is important to note that there is only ever a single requester node for a given job, which is the node that the job was originally submitted to."),(0,r.kt)("p",null,"Overall, the requester node plays a crucial role in the Bacalhau network, serving as the main point of contact for clients and the primary handler of jobs that are submitted to the network."),(0,r.kt)("h3",{id:"compute-node"},"Compute node"),(0,r.kt)("p",null,"In the Bacalhau network, the compute node plays a critical role in the process of executing jobs and producing results. While the requester does its best to be up-to-date with the network status, it is the compute node that is responsible for determining whether it can execute a job or not. This model allows for a more decentralized approach to job orchestration as the network will function properly even if the requester nodes have stale view of the network, or if concurrent requesters are allocating jobs to the same compute nodes. "),(0,r.kt)("p",null,"Once the compute node has run the job and produced results, it will publish the results to a remote destination as specified in the job specification (e.g. S3), and notify the requester of the job completion. The compute node has a collection of named executors, storage sources, and publishers, and it will choose the most appropriate ones based on the job specifications."),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("p",null,"The interface handles the distribution, execution, storage and publishing of jobs."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transport"},"Transport")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#executor"},"Executor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#storage-provider"},"Storage Provider")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#verifier"},"Verifier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#publisher"},"Publisher"))),(0,r.kt)("h3",{id:"transport"},"Transport"),(0,r.kt)("p",null,"The transport interface is responsible for sending messages about jobs that are created, accepted, and executed  to other compute nodes. It also manages the identity of individual Bacalhau nodes to ensure that messages are only delivered to authorized nodes, which improves network security."),(0,r.kt)("p",null,"To achieve this, the transport interface uses a protocol called ",(0,r.kt)("strong",{parentName:"p"},"bprotocol"),", which is a point-to-point scheduling protocol that runs over ",(0,r.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"libp2p")," and is used to distribute job messages efficiently to other nodes on the network. This is our upgrade to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/publish-subscribe/"},"GossipSub")," handler as it ensures that messages are delivered to the right nodes without causing network congestion, thereby making communication between nodes more scalable and efficient."),(0,r.kt)("h3",{id:"executor"},"Executor"),(0,r.kt)("p",null,"The executor is a critical component of the Bacalhau network that handles the execution of jobs and ensures that the storage used by the job is local. One of its main responsibilities is to present the input and output storage volumes into the job when it is run."),(0,r.kt)("p",null,"The executor performs two primary functions: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"presenting the storage volumes in a format that is suitable for the executor, and,"),(0,r.kt)("li",{parentName:"ul"},"running the job.")),(0,r.kt)("p",null,"When the job is completed, the executor will merge the stdout, stderr, and named output volumes into a results folder that is then published to a remote location."),(0,r.kt)("p",null,"Overall, the executor plays a crucial role in the Bacalhau network by ensuring that jobs are executed properly, and their results are published accurately."),(0,r.kt)("h3",{id:"storage-provider"},"Storage Provider"),(0,r.kt)("p",null,"In a peer-to-peer network like Bacalhau, storage providers play a crucial role in presenting an upstream storage source. There can be different storage providers available in the network, each with its own way of manifesting the CID (Content IDentifier) to the executor."),(0,r.kt)("p",null,"For instance, there can be a POSIX storage provider that presents the CID as a POSIX filesystem, or a library storage provider that streams the contents of the CID via a library call."),(0,r.kt)("p",null,"Therefore, the storage providers and Executor implementations are loosely coupled, allowing the POSIX and library storage providers to be used across multiple executors, wherever it is deemed appropriate."),(0,r.kt)("h3",{id:"publisher"},"Publisher"),(0,r.kt)("p",null,"The publisher is responsible for uploading the final results of a job to a remote location where clients can access them, such as S3 or IPFS"),(0,r.kt)("h2",{id:"job-lifecycle"},"Job Lifecycle"),(0,r.kt)("p",null,"The job lifecycle involves several steps that are handled by different components of the network, from job submission to job download."),(0,r.kt)("h3",{id:"job-submission"},"Job Submission"),(0,r.kt)("p",null,"Jobs submitted via the Bacalhau CLI are forwarded to a Bacalhau network node at ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap.production.bacalhau.org")," via port 1234 by default. This Bacalhau node will act as the requester node for the duration of the job lifecycle. Jobs can also be submitted to any requester node on the Bacalhau network."),(0,r.kt)("p",null,"When jobs are submitted to the requester node, the requester will select few compute nodes that are capable to execute the job and ask them to run. The job will have a ",(0,r.kt)("inlineCode",{parentName:"p"},"concurrency")," setting, which refers to how many different nodes you may want to run this job.  "),(0,r.kt)("p",null,"The job might also mention the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes")," (for example some CIDs). The compute node can choose to bid on the job if the data for the volume resides locally in the compute node, or it can choose to bid anyway. Bacalhau supports the use of external HTTP or exec hooks to decide if a node wants to bid on a job. This means that a node operator can give granular rules about the jobs they are willing to run."),(0,r.kt)("h3",{id:"job-acceptance"},"Job Acceptance"),(0,r.kt)("p",null,"As bids from compute nodes arrive back at the originating requester node, it can choose which bids to accept and which ones to reject. This can be based on the previous reputation of each compute node or any other factors the requester node might take into account (like locality, hardware resources, cost etc). The requester node will also have the same http or exec hooks to decide if it wants to accept a bid from a given compute node. "),(0,r.kt)("h3",{id:"job-execution"},"Job Execution"),(0,r.kt)("p",null,"As accepted bids are received by compute nodes, they will ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," the job using the executor for that job, and the storage providers that the executor has mapped in."),(0,r.kt)("p",null,"For example, a job could use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," executor, ",(0,r.kt)("inlineCode",{parentName:"p"},"WASM")," executor, or a library storage volumes. This would result in a POSIX mount of the storage into a running container or a WASM-style ",(0,r.kt)("inlineCode",{parentName:"p"},"syscall")," to stream the storage bytes into the WASM runtime. Each executor will deal with storage in a different way, so even though each job mentions the storage volumes, they would both end up with different implementations at runtime."),(0,r.kt)("h3",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"Once results are ready, the publisher will publish the raw results folder currently residing on the compute node. The publisher interface mainly consists of a single function, which has the task of uploading the local results folder somewhere and returning a storage reference to where it has been uploaded."),(0,r.kt)("h3",{id:"networking"},"Networking"),(0,r.kt)("p",null,"It is possible to run Bacalhau completely disconnected from the main Bacalhau network so that you can run private workloads without risking running on public nodes or inadvertently sharing your data outside of your organization. The isolated network will not connect to the public Bacalhau network nor connect to a public network. Read more on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/next-steps/private-cluster"},"networking")),(0,r.kt)("h3",{id:"input--output-volumes"},"Input / Output Volumes"),(0,r.kt)("p",null,"A job includes the concept of input and output volumes, and the Docker executor implements support for these. This means you can specify your CIDs, URLs, and/or S3 objects as input paths and also write results to an output volume. This can be seen in the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau docker run \\\n  -i s3://mybucket/logs-2023-04*:/input \\\n  -o apples:/output_folder \\\n  ubuntu \\\n  bash -c 'ls /input > /output_folder/file.txt'\n")),(0,r.kt)("p",null,"The above example demonstrates an input volume flag ",(0,r.kt)("inlineCode",{parentName:"p"},"-i s3://mybucket/logs-2023-04*"),", which mounts all S3 objects in bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"mybucket")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"logs-2023-04")," prefix within the docker container at location ",(0,r.kt)("inlineCode",{parentName:"p"},"/input")," (root)."),(0,r.kt)("p",null,"Output volumes are mounted to the Docker container at the location specified. In the example above, any content written to ",(0,r.kt)("inlineCode",{parentName:"p"},"/output_folder"),' will be made available within the "apples" folder in the job results CID.'),(0,r.kt)("p",null,"Once the job has run on the executor, the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"stderr")," will be added to any named output volumes the job has used (in this case apples), and all those entities will be packaged into the results folder which is then published to a remote location by the publisher."))}h.isMDXComponent=!0},7274:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/architecture-purpose-1bc716632846a654d7cfaa0bac58b496.jpg"}}]);