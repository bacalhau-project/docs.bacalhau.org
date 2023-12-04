"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1541],{4992:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=o(5893),r=o(1151);const i={sidebar_label:"Quick Start",sidebar_position:100,toc_max_heading_level:4},t="Join as Compute Provider",a={id:"running-node/quick-start",title:"Join as Compute Provider",description:"Bacalhau is a peer-to-peer network of computing providers that will run jobs submitted by users. A Compute Provider (CP) is anyone who is running a Bacalhau compute node participating in the Bacalhau compute network, regardless of whether they are hosting any Filecoin data.",source:"@site/docs/running-node/quick-start.md",sourceDirName:"running-node",slug:"/running-node/quick-start",permalink:"/running-node/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/quick-start.md",tags:[],version:"current",lastUpdatedAt:1701669642,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:100,frontMatter:{sidebar_label:"Quick Start",sidebar_position:100,toc_max_heading_level:4},sidebar:"documentationSidebar",previous:{title:"Running a Node",permalink:"/running-node"},next:{title:"Quick Start Using Docker",permalink:"/running-node/quick-start-docker"}},c={},l=[{value:"Quick start (Ubuntu 22.04)",id:"quick-start-ubuntu-2204",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install Docker",id:"install-docker",level:4},{value:"Ensure your Storage Server is Running",id:"ensure-your-storage-server-is-running",level:4},{value:"Configure firewall",id:"configure-firewall",level:4},{value:"Install the Bacalhau Binary",id:"install-the-bacalhau-binary",level:3},{value:"Run bacalhau",id:"run-bacalhau",level:3},{value:"Check your node works",id:"check-your-node-works",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"join-as-compute-provider",children:"Join as Compute Provider"}),"\n",(0,s.jsx)(n.p,{children:"Bacalhau is a peer-to-peer network of computing providers that will run jobs submitted by users. A Compute Provider (CP) is anyone who is running a Bacalhau compute node participating in the Bacalhau compute network, regardless of whether they are hosting any Filecoin data."}),"\n",(0,s.jsx)(n.p,{children:"This section will show you how to configure and run a Bacalhau node and start accepting and running jobs."}),"\n",(0,s.jsxs)(n.p,{children:["To bootstrap your node and join the network as a CP you can leap right into the ",(0,s.jsx)(n.a,{href:"#quick-start-ubuntu-2204",children:"Ubuntu 22.04 quick start"})," below, or find more setup details in these guides:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.bacalhau.org/running-node/networking",children:"Networking"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.bacalhau.org/running-node/storage-providers",children:"Storage Providers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.bacalhau.org/running-node/job-selection",children:"Job Selection Policy"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.bacalhau.org/running-node/resource-limits",children:"Resource Limits"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.bacalhau.org/running-node/gpu",children:"GPU Support"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.bacalhau.org/running-node/windows-support",children:"Windows Support"})," (with limitations)"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you run on a different system than Ubuntu, drop us a message on ",(0,s.jsx)(n.a,{href:"https://bit.ly/bacalhau-project-slack/archives/C02RLM3JHUY",children:"Slack"}),"!\nWe'll add instructions for your favorite OS."]})}),"\n",(0,s.jsx)(n.h2,{id:"quick-start-ubuntu-2204",children:"Quick start (Ubuntu 22.04)"}),"\n",(0,s.jsx)(n.p,{children:"Estimated time for completion: 10 min."}),"\n",(0,s.jsx)(n.p,{children:"Tested on: Ubuntu 22.04 LTS (x86/64) running on a GCP e2-standard-4 (4 vCPU, 16 GB memory) instance with 40 GB disk size."}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Docker Engine - to take on Docker workloads"}),"\n",(0,s.jsx)(n.li,{children:"Connection to storage provider - for storing job's results"}),"\n",(0,s.jsx)(n.li,{children:"Firewall - to ensure your node can communicate with the rest of the network"}),"\n",(0,s.jsx)(n.li,{children:"Physical hardware, Virtual Machine, or cloud-based host. A Bacalhau compute node is not intended to be run from within a Docker container."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"install-docker",children:"Install Docker"}),"\n",(0,s.jsx)(n.p,{children:"To run docker-based workloads, you should have docker installed and running."}),"\n",(0,s.jsx)(n.p,{children:"If you already have it installed and want to configure the connection to Docker with the following environment variables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DOCKER_HOST"})," to set the URL to the docker server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DOCKER_API_VERSION"}),' to set the version of the API to reach, leave empty for "latest".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DOCKER_CERT_PATH"})," to load the TLS certificates from."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DOCKER_TLS_VERIFY"})," to enable or disable TLS verification, off by default."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If you do not have Docker on your system, you can follow the official ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"docker installation instructions"})," or just use the snippet below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# install dependencies\nsudo apt-get update\nsudo apt-get install \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n\n# add package repo and key\nsudo mkdir -p /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\n# install docker\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now make ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/#:~:text=The%20Docker%20daemon%20always%20runs,members%20of%20the%20docker%20group",children:"Docker manageable by a non-root user"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo groupadd docker\nsudo usermod -aG docker $USER\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ensure-your-storage-server-is-running",children:"Ensure your Storage Server is Running"}),"\n",(0,s.jsx)(n.p,{children:"We will need to connect our Bacalhau node to a storage server for this we will be using IPFS server so we can run jobs that consume CIDs as inputs."}),"\n",(0,s.jsx)(n.p,{children:"You can either install and run it locally or you can connect to a remote IPFS server."}),"\n",(0,s.jsxs)(n.p,{children:["In both cases - we should have a ",(0,s.jsx)(n.a,{href:"https://richardschneider.github.io/net-ipfs-core/articles/multiaddress.html",children:"multiaddress"})," for our IPFS server that should look something like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export IPFS_CONNECT=/ip4/10.1.10.10/tcp/80/p2p/QmVcSqVEsvm5RR9mBLjwpb2XjFVn5bPdPL69mL8PH45pPC\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"The multiaddress above is just an example - you need to get the multiaddress of the server you want to connect to."})}),"\n",(0,s.jsxs)(n.p,{children:["To install a single IPFS node locally on Ubuntu you can follow the ",(0,s.jsx)(n.a,{href:"https://docs.ipfs.tech/install/ipfs-desktop/#ubuntu",children:"official instructions"}),", or follow the steps below. We advise running the same IPFS version as the Bacalhau main network."]}),"\n",(0,s.jsx)(n.p,{children:"Using the command below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export IPFS_VERSION=$(wget -q -O - https://raw.githubusercontent.com/filecoin-project/bacalhau/main/ops/terraform/production.tfvars | grep --color=never ipfs_version | awk -F'\"' '{print $2}')\n"})}),"\n",(0,s.jsx)(n.p,{children:"Install:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'wget "https://dist.ipfs.tech/go-ipfs/${IPFS_VERSION}/go-ipfs_${IPFS_VERSION}_linux-amd64.tar.gz"\ntar -xvzf "go-ipfs_${IPFS_VERSION}_linux-amd64.tar.gz"\ncd go-ipfs\nsudo bash install.sh\nipfs --version\n'})}),"\n",(0,s.jsx)(n.p,{children:"Configure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo mkdir -p /data/ipfs\nexport IPFS_PATH=/data/ipfs\nsudo chown $(id -un):$(id -gn) ${IPFS_PATH} # change ownership of ipfs directory\nipfs init\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now launch the IPFS daemon ",(0,s.jsx)(n.strong,{children:"in a separate terminal"})," (make sure to export the ",(0,s.jsx)(n.code,{children:"IPFS_PATH"})," environment variable there as well):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ipfs daemon\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you want to run the IPFS daemon as a ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Systemd",children:"systemd"})," service, here's an example ",(0,s.jsx)(n.a,{href:"https://github.com/bacalhau-project/bacalhau/blob/main/ops/terraform/remote_files/configs/ipfs.service",children:"systemd service file"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Don't forget we need to fetch an ",(0,s.jsx)(n.a,{href:"https://richardschneider.github.io/net-ipfs-core/articles/multiaddress.html",children:"IPFS multiaddress"})," pointing to our local node."]}),"\n",(0,s.jsx)(n.p,{children:"Use the following command to print out a number of addresses."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ipfs id\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n        "ID": "12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n        "PublicKey": "CAESIL9gmDyR6IgM7ym1JmJ8JKL7NvEgIEGaWwssanl1ieuW",\n        "Addresses": [\n                "/ip4/10.128.0.11/tcp/4001/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n                "/ip4/10.128.0.11/udp/4001/quic/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n                "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n                "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n                ...\n        ],\n        "AgentVersion": "go-ipfs/0.12.2/",\n        "ProtocolVersion": "ipfs/0.1.0",\n        "Protocols": [\n                "/ipfs/bitswap",\n                ...\n                "/p2p/id/delta/1.0.0",\n                "/x/"\n        ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["I pick the record that combines ",(0,s.jsx)(n.code,{children:"127.0.0.1"})," and ",(0,s.jsx)(n.code,{children:"tcp"})," but I replace port ",(0,s.jsx)(n.code,{children:"4001"})," with ",(0,s.jsx)(n.code,{children:"5001"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export IPFS_CONNECT=/ip4/127.0.0.1/tcp/5001/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F\n"})}),"\n",(0,s.jsx)(n.h4,{id:"configure-firewall",children:"Configure firewall"}),"\n",(0,s.jsxs)(n.p,{children:["To ensure that our node can communicate with other nodes on the network - we need to make sure the ",(0,s.jsx)(n.strong,{children:"1235"})," port is open."]}),"\n",(0,s.jsxs)(n.p,{children:["(Optional) To ensure the CLI can communicate with our node directly (i.e. ",(0,s.jsx)(n.code,{children:"bacalhau --api-host <MY_NODE_PUBLIC_IP> version"}),") - we need to make sure the ",(0,s.jsx)(n.strong,{children:"1234"})," port is open."]}),"\n",(0,s.jsxs)(n.p,{children:["Firewall configuration is very specific to your network and we can't provide generic instructions for this step but if you need any help feel free to reach out on ",(0,s.jsx)(n.a,{href:"https://bit.ly/bacalhau-project-slack/archives/C02RLM3JHUY",children:"Slack!"})]}),"\n",(0,s.jsx)(n.h3,{id:"install-the-bacalhau-binary",children:"Install the Bacalhau Binary"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/getting-started/installation#install-the-bacalhau-client",children:"Install the bacalhau binary"})," to run ",(0,s.jsx)(n.code,{children:"bacalhau serve"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["If you want to run Bacalhau as a ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Systemd",children:"systemd"})," service, here's an example ",(0,s.jsx)(n.a,{href:"https://github.com/bacalhau-project/bacalhau/blob/main/ops/terraform/remote_files/configs/bacalhau.service",children:"systemd service file"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"run-bacalhau",children:"Run bacalhau"}),"\n",(0,s.jsx)(n.p,{children:"Now we can run our bacalhau node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"LOG_LEVEL=debug BACALHAU_ENVIRONMENT=production \\\n  bacalhau serve \\\n    --node-type compute \\\n    --ipfs-connect $IPFS_CONNECT \\\n    --private-internal-ipfs=false \\\n    --peer env\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you can run the following Docker command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it --rm \\\n  -e LOG_LEVEL=debug \\\n  -e BACALHAU_ENVIRONMENT=production \\\n  ghcr.io/bacalhau-project/bacalhau:latest serve \\\n    --node-type compute \\\n    --ipfs-connect $IPFS_CONNECT \\\n    --private-internal-ipfs=false \\\n    --peer env\n"})}),"\n",(0,s.jsxs)(n.p,{children:["These commands join this node to the public Bacalhau network, congrats! ","\ud83c\udf89"]}),"\n",(0,s.jsx)(n.h3,{id:"check-your-node-works",children:"Check your node works"}),"\n",(0,s.jsx)(n.p,{children:"Even though the CLI (by default) submits jobs, each node listens for events on the global network and possibly bids for taking a job: your logs should therefore show the activity of your node bidding for incoming jobs."}),"\n",(0,s.jsx)(n.p,{children:"To quickly check your node runs properly, let's submit the following dummy job:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bacalhau docker run ubuntu echo Test\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you see logs of your compute node bidding for the job above it means you've successfully joined Bacalhau as a Compute Provider!"}),"\n",(0,s.jsx)(n.h3,{id:"whats-next",children:"What's next?"}),"\n",(0,s.jsxs)(n.p,{children:["At this point, you probably have a number of questions for us. What incentive should you expect for running a public Bacalhau node?\nPlease contact us on ",(0,s.jsx)(n.a,{href:"https://bit.ly/bacalhau-project-slack/archives/C02RLM3JHUY",children:"Slack"})," to further discuss this topic and for sharing your valuable feedback."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>t});var s=o(7294);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);