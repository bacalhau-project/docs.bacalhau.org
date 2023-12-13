"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[809],{2957:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=o(5893),r=o(1151);const s={sidebar_label:"Architecture",sidebar_position:1},i="Architecture",a={id:"getting-started/architecture",title:"Architecture",description:"Bacalhau is a peer-to-peer network of nodes that allows for decentralized communication between computers. There are two nodes types in the network:",source:"@site/docs/getting-started/architecture.md",sourceDirName:"getting-started",slug:"/getting-started/architecture",permalink:"/getting-started/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/architecture.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Architecture",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Getting Started",permalink:"/getting-started"},next:{title:"Installation",permalink:"/getting-started/installation"}},c={},l=[{value:"System Components",id:"system-components",level:2},{value:"Core Components",id:"core-components",level:2},{value:"Requester node",id:"requester-node",level:3},{value:"Compute node",id:"compute-node",level:3},{value:"Interface",id:"interface",level:2},{value:"Transport",id:"transport",level:3},{value:"Executor",id:"executor",level:3},{value:"Storage Provider",id:"storage-provider",level:3},{value:"Publisher",id:"publisher",level:3},{value:"Job Lifecycle",id:"job-lifecycle",level:2},{value:"Job Submission",id:"job-submission",level:3},{value:"Job Acceptance",id:"job-acceptance",level:3},{value:"Job Execution",id:"job-execution",level:3},{value:"Publishing",id:"publishing",level:3},{value:"Networking",id:"networking",level:3},{value:"Input / Output Volumes",id:"input--output-volumes",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Bacalhau is a peer-to-peer network of nodes that allows for decentralized communication between computers. There are two nodes types in the network:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Requester Node:"})," responsible for handling user requests, discovering and ranking compute nodes, forwarding jobs to compute nodes, and monitoring the job lifecycle."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Compute Node:"})," responsible for executing jobs and producing results. Different compute nodes can be used for different types of jobs, depending on their capabilities and resources."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:o(7274).Z+"",title:"Bacalhau Architecture",width:"814",height:"610"})}),"\n",(0,n.jsx)(t.p,{children:"The requester and compute nodes together form a p2p network and use gossiping to discover each other, share information about node capabilities, available resources and health status."}),"\n",(0,n.jsx)(t.p,{children:"To interact with the Bacalhau network, users can use the Bacalhau CLI (command-line interface) to send requests to a requester node in the network. These requests are sent using the JSON format over HTTP, a widely-used protocol for transmitting data over the internet."}),"\n",(0,n.jsx)(t.h2,{id:"system-components",children:"System Components"}),"\n",(0,n.jsxs)(t.p,{children:["Bacalhau's architecture involves two main sections which are the ",(0,n.jsx)(t.strong,{children:"core components"})," and ",(0,n.jsx)(t.strong,{children:"interfaces"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"core-components",children:"Core Components"}),"\n",(0,n.jsx)(t.p,{children:"The core components are responsible for handling requests and connecting different nodes. It consists of:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#requester-node",children:"Requester node"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#compute-node",children:"Compute node"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"requester-node",children:"Requester node"}),"\n",(0,n.jsx)(t.p,{children:"In the Bacalhau network, the requester node is responsible for handling requests from clients using JSON over HTTP. This node serves as the main custodian of jobs that are submitted to it."}),"\n",(0,n.jsx)(t.p,{children:"When a job is submitted to a requester node, it selects compute nodes that are capable and suitable to execute the job, and communicate with them directly. It is important to note that there is only ever a single requester node for a given job, which is the node that the job was originally submitted to."}),"\n",(0,n.jsx)(t.p,{children:"Overall, the requester node plays a crucial role in the Bacalhau network, serving as the main point of contact for clients and the primary handler of jobs that are submitted to the network."}),"\n",(0,n.jsx)(t.h3,{id:"compute-node",children:"Compute node"}),"\n",(0,n.jsx)(t.p,{children:"In the Bacalhau network, the compute node plays a critical role in the process of executing jobs and producing results. While the requester does its best to be up-to-date with the network status, it is the compute node that is responsible for determining whether it can execute a job or not. This model allows for a more decentralized approach to job orchestration as the network will function properly even if the requester nodes have stale view of the network, or if concurrent requesters are allocating jobs to the same compute nodes."}),"\n",(0,n.jsx)(t.p,{children:"Once the compute node has run the job and produced results, it will publish the results to a remote destination as specified in the job specification (e.g. S3), and notify the requester of the job completion. The compute node has a collection of named executors, storage sources, and publishers, and it will choose the most appropriate ones based on the job specifications."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.p,{children:"The interface handles the distribution, execution, storage and publishing of jobs."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#transport",children:"Transport"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#executor",children:"Executor"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#storage-provider",children:"Storage Provider"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#verifier",children:"Verifier"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#publisher",children:"Publisher"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"transport",children:"Transport"}),"\n",(0,n.jsx)(t.p,{children:"The transport interface is responsible for sending messages about jobs that are created, accepted, and executed  to other compute nodes. It also manages the identity of individual Bacalhau nodes to ensure that messages are only delivered to authorized nodes, which improves network security."}),"\n",(0,n.jsxs)(t.p,{children:["To achieve this, the transport interface uses a protocol called ",(0,n.jsx)(t.strong,{children:"bprotocol"}),", which is a point-to-point scheduling protocol that runs over ",(0,n.jsx)(t.a,{href:"https://libp2p.io/",children:"libp2p"})," and is used to distribute job messages efficiently to other nodes on the network. This is our upgrade to the ",(0,n.jsx)(t.a,{href:"https://docs.libp2p.io/concepts/publish-subscribe/",children:"GossipSub"})," handler as it ensures that messages are delivered to the right nodes without causing network congestion, thereby making communication between nodes more scalable and efficient."]}),"\n",(0,n.jsx)(t.h3,{id:"executor",children:"Executor"}),"\n",(0,n.jsx)(t.p,{children:"The executor is a critical component of the Bacalhau network that handles the execution of jobs and ensures that the storage used by the job is local. One of its main responsibilities is to present the input and output storage volumes into the job when it is run."}),"\n",(0,n.jsx)(t.p,{children:"The executor performs two primary functions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"presenting the storage volumes in a format that is suitable for the executor, and,"}),"\n",(0,n.jsx)(t.li,{children:"running the job."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When the job is completed, the executor will merge the stdout, stderr, and named output volumes into a results folder that is then published to a remote location."}),"\n",(0,n.jsx)(t.p,{children:"Overall, the executor plays a crucial role in the Bacalhau network by ensuring that jobs are executed properly, and their results are published accurately."}),"\n",(0,n.jsx)(t.h3,{id:"storage-provider",children:"Storage Provider"}),"\n",(0,n.jsx)(t.p,{children:"In a peer-to-peer network like Bacalhau, storage providers play a crucial role in presenting an upstream storage source. There can be different storage providers available in the network, each with its own way of manifesting the CID (Content IDentifier) to the executor."}),"\n",(0,n.jsx)(t.p,{children:"For instance, there can be a POSIX storage provider that presents the CID as a POSIX filesystem, or a library storage provider that streams the contents of the CID via a library call."}),"\n",(0,n.jsx)(t.p,{children:"Therefore, the storage providers and Executor implementations are loosely coupled, allowing the POSIX and library storage providers to be used across multiple executors, wherever it is deemed appropriate."}),"\n",(0,n.jsx)(t.h3,{id:"publisher",children:"Publisher"}),"\n",(0,n.jsx)(t.p,{children:"The publisher is responsible for uploading the final results of a job to a remote location where clients can access them, such as S3 or IPFS"}),"\n",(0,n.jsx)(t.h2,{id:"job-lifecycle",children:"Job Lifecycle"}),"\n",(0,n.jsx)(t.p,{children:"The job lifecycle involves several steps that are handled by different components of the network, from job submission to job download."}),"\n",(0,n.jsx)(t.h3,{id:"job-submission",children:"Job Submission"}),"\n",(0,n.jsxs)(t.p,{children:["Jobs submitted via the Bacalhau CLI are forwarded to a Bacalhau network node at ",(0,n.jsx)(t.code,{children:"bootstrap.production.bacalhau.org"})," via port 1234 by default. This Bacalhau node will act as the requester node for the duration of the job lifecycle. Jobs can also be submitted to any requester node on the Bacalhau network."]}),"\n",(0,n.jsxs)(t.p,{children:["When jobs are submitted to the requester node, the requester will select few compute nodes that are capable to execute the job and ask them to run. The job will have a ",(0,n.jsx)(t.code,{children:"concurrency"})," setting, which refers to how many different nodes you may want to run this job."]}),"\n",(0,n.jsxs)(t.p,{children:["The job might also mention the use of ",(0,n.jsx)(t.code,{children:"volumes"})," (for example some CIDs). The compute node can choose to bid on the job if the data for the volume resides locally in the compute node, or it can choose to bid anyway. Bacalhau supports the use of external HTTP or exec hooks to decide if a node wants to bid on a job. This means that a node operator can give granular rules about the jobs they are willing to run."]}),"\n",(0,n.jsx)(t.h3,{id:"job-acceptance",children:"Job Acceptance"}),"\n",(0,n.jsx)(t.p,{children:"As bids from compute nodes arrive back at the originating requester node, it can choose which bids to accept and which ones to reject. This can be based on the previous reputation of each compute node or any other factors the requester node might take into account (like locality, hardware resources, cost etc). The requester node will also have the same http or exec hooks to decide if it wants to accept a bid from a given compute node."}),"\n",(0,n.jsx)(t.h3,{id:"job-execution",children:"Job Execution"}),"\n",(0,n.jsxs)(t.p,{children:["As accepted bids are received by compute nodes, they will ",(0,n.jsx)(t.code,{children:"execute"})," the job using the executor for that job, and the storage providers that the executor has mapped in."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, a job could use the ",(0,n.jsx)(t.code,{children:"docker"})," executor, ",(0,n.jsx)(t.code,{children:"WASM"})," executor, or a library storage volumes. This would result in a POSIX mount of the storage into a running container or a WASM-style ",(0,n.jsx)(t.code,{children:"syscall"})," to stream the storage bytes into the WASM runtime. Each executor will deal with storage in a different way, so even though each job mentions the storage volumes, they would both end up with different implementations at runtime."]}),"\n",(0,n.jsx)(t.h3,{id:"publishing",children:"Publishing"}),"\n",(0,n.jsx)(t.p,{children:"Once results are ready, the publisher will publish the raw results folder currently residing on the compute node. The publisher interface mainly consists of a single function, which has the task of uploading the local results folder somewhere and returning a storage reference to where it has been uploaded."}),"\n",(0,n.jsx)(t.h3,{id:"networking",children:"Networking"}),"\n",(0,n.jsxs)(t.p,{children:["It is possible to run Bacalhau completely disconnected from the main Bacalhau network so that you can run private workloads without risking running on public nodes or inadvertently sharing your data outside of your organization. The isolated network will not connect to the public Bacalhau network nor connect to a public network. Read more on ",(0,n.jsx)(t.a,{href:"https://docs.bacalhau.org/next-steps/private-cluster",children:"networking"})]}),"\n",(0,n.jsx)(t.h3,{id:"input--output-volumes",children:"Input / Output Volumes"}),"\n",(0,n.jsx)(t.p,{children:"A job includes the concept of input and output volumes, and the Docker executor implements support for these. This means you can specify your CIDs, URLs, and/or S3 objects as input paths and also write results to an output volume. This can be seen in the following example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"bacalhau docker run \\\n  -i s3://mybucket/logs-2023-04*:/input \\\n  -o apples:/output_folder \\\n  ubuntu \\\n  bash -c 'ls /input > /output_folder/file.txt'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The above example demonstrates an input volume flag ",(0,n.jsx)(t.code,{children:"-i s3://mybucket/logs-2023-04*"}),", which mounts all S3 objects in bucket ",(0,n.jsx)(t.code,{children:"mybucket"})," with ",(0,n.jsx)(t.code,{children:"logs-2023-04"})," prefix within the docker container at location ",(0,n.jsx)(t.code,{children:"/input"})," (root)."]}),"\n",(0,n.jsxs)(t.p,{children:["Output volumes are mounted to the Docker container at the location specified. In the example above, any content written to ",(0,n.jsx)(t.code,{children:"/output_folder"}),' will be made available within the "apples" folder in the job results CID.']}),"\n",(0,n.jsxs)(t.p,{children:["Once the job has run on the executor, the contents of ",(0,n.jsx)(t.code,{children:"stdout"})," and ",(0,n.jsx)(t.code,{children:"stderr"})," will be added to any named output volumes the job has used (in this case apples), and all those entities will be packaged into the results folder which is then published to a remote location by the publisher."]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7274:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/architecture-purpose-1bc716632846a654d7cfaa0bac58b496.jpg"},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>i});var n=o(7294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);