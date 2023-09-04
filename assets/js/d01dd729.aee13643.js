"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,p(p({ref:t},u),{},{components:n})):r.createElement(h,p({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Private Cluster",sidebar_position:5},p="Private Cluster",i={unversionedId:"next-steps/private-cluster",id:"next-steps/private-cluster",title:"Private Cluster",description:"It is possible to run Bacalhau completely disconnected from the main Bacalhau network so that you can run private workloads without risking running on public nodes or inadvertently sharing your data outside of your organization. The isolated network will not connect to the public Bacalhau network nor connect to a public network. To do this, we will run our network in-process rather than externally.",source:"@site/docs/next-steps/private-cluster.md",sourceDirName:"next-steps",slug:"/next-steps/private-cluster",permalink:"/next-steps/private-cluster",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/next-steps/private-cluster.md",tags:[],version:"current",lastUpdatedAt:1693819129,formattedLastUpdatedAt:"Sep 4, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"Private Cluster",sidebar_position:5},sidebar:"documentationSidebar",previous:{title:"Networking",permalink:"/next-steps/networking"},next:{title:"Running Node",permalink:"/running-node"}},l={},s=[{value:"Initial Requester Node",id:"initial-requester-node",level:2},{value:"Compute Nodes",id:"compute-nodes",level:2},{value:"Submitting Jobs",id:"submitting-jobs",level:2},{value:"Public IPFS Network",id:"public-ipfs-network",level:2},{value:"Deploy a private cluster",id:"deploy-a-private-cluster",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"private-cluster"},"Private Cluster"),(0,o.kt)("p",null,"It is possible to run Bacalhau completely disconnected from the main Bacalhau network so that you can run private workloads without risking running on public nodes or inadvertently sharing your data outside of your organization. The isolated network will not connect to the public Bacalhau network nor connect to a public network. To do this, we will run our network in-process rather than externally."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A private network and storage is easier to set up, but a separate public server is better for production. The private network and storage will use a temporary directory for its repository and so the contents will be lost on shutdown.")),(0,o.kt)("h2",{id:"initial-requester-node"},"Initial Requester Node"),(0,o.kt)("p",null,"The first step is to start up the initial node, which we will use as the ",(0,o.kt)("inlineCode",{parentName:"p"},"requester node"),". This node will connect to nothing but will listen for connections."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau serve --node-type requester --private-internal-ipfs --peer none\n")),(0,o.kt)("p",null,"This will produce output similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'16:34:17.154 | INF pkg/libp2p/host.go:69 > started libp2p host [host-id:QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE] [listening-addresses:["/ip4/192.168.1.224/tcp/1235","/ip4/127.0.0.1/tcp/1235","/ip4/192.168.1.224/udp/1235/quic","/ip4/127.0.0.1/udp/1235/quic","/ip6/::1/tcp/1235","/ip6/::1/udp/1235/quic"]] [p2p-addresses:["/ip4/192.168.1.224/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip4/127.0.0.1/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip4/192.168.1.224/udp/1235/quic/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip4/127.0.0.1/udp/1235/quic/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip6/::1/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE","/ip6/::1/udp/1235/quic/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE"]]\n16:34:17.555 | INF cmd/bacalhau/serve.go:506 > Internal IPFS node available [NodeID:QmWg7m5G] [ipfs_swarm_addresses:["/ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2","/ip4/127.0.0.1/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2"]]\n')),(0,o.kt)("p",null,"To connect another node to this private one, run the following command in your shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau serve --private-internal-ipfs --peer /ip4/192.168.1.224/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE --ipfs-swarm-addr /ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2\n\nTo use this requester node from the client, run the following commands in your shell:\nexport BACALHAU_IPFS_SWARM_ADDRESSES=/ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2\nexport BACALHAU_API_HOST=0.0.0.0\nexport BACALHAU_API_PORT=1234\n")),(0,o.kt)("h2",{id:"compute-nodes"},"Compute Nodes"),(0,o.kt)("p",null,"To connect another node to this private one, run the following command in your shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau serve --private-internal-ipfs --peer /ip4/<ip-address>/tcp/1235/p2p/<peer-id> --ipfs-swarm-addr /ip4/<ip-address>/tcp/<port>/p2p/<peer-id>\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The exact command will be different on each computer and is outputted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau serve --node-type requester ...")," command")),(0,o.kt)("p",null,"The command ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau serve --private-internal-ipfs --peer ...")," starts up a compute node and adds it to the cluster."),(0,o.kt)("h2",{id:"submitting-jobs"},"Submitting Jobs"),(0,o.kt)("p",null,"To use this cluster from the client, run the following commands in your shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export BACALHAU_IPFS_SWARM_ADDRESSES=/ip4/<ip-address>/tcp/<port>/p2p/<peer-id>\nexport BACALHAU_API_HOST=0.0.0.0\nexport BACALHAU_API_PORT=1234\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The exact command will be different on each computer and is outputted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau serve --node-type requester ...")," command")),(0,o.kt)("p",null,"The command ",(0,o.kt)("inlineCode",{parentName:"p"},"export BACALHAU_IPFS_SWARM_ADDRESSES=...")," sends jobs into the cluster from the command line client."),(0,o.kt)("h2",{id:"public-ipfs-network"},"Public IPFS Network"),(0,o.kt)("p",null,"Instructions for connecting to the public IPFS network via the private Bacalhau cluster:"),(0,o.kt)("p",null,"On all nodes, start ipfs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ipfs init\n")),(0,o.kt)("p",null,"Then run the following command in your shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export IPFS_CONNECT=$(ipfs id |grep tcp |grep 127.0.0.1 |sed s/4001/5001/|sed s/,//g |sed 's/\"//g')\n")),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"first node")," execute the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export LOG_LEVEL=debug\nbacalhau serve --peer none --ipfs-connect $IPFS_CONNECT --node-type requester,compute\n")),(0,o.kt)("p",null,"Monitor the output log for:\n",(0,o.kt)("inlineCode",{parentName:"p"},"11:16:03.827 | DBG pkg/transport/bprotocol/compute_handler.go:39 > ComputeHandler started on host QmWXAaSHbbP7mU4GrqDhkgUkX9EscfAHPMCHbrBSUi4A35")),(0,o.kt)("p",null,"On ",(0,o.kt)("strong",{parentName:"p"},"all other nodes")," execute the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export PEER_ADDR=/ip4/<public-ip>/tcp/1235/p2p/<above>\n")),(0,o.kt)("p",null,"Replace the values in the command above with your own value"),(0,o.kt)("p",null,"Here is our example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export PEER_ADDR=/ip4/192.18.129.124/tcp/1235/p2p/QmWXAaSHbbP7mU4GrqDhkgUkX9EscfAHPMCHbrBSUi4A35\nbacalhau serve --peer $PEER_ADDR --ipfs-connect $IPFS_CONNECT --node-type compute\n")),(0,o.kt)("p",null,"Then from any client set the following before invoking your Bacalhau job:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export BACALHAU_API_HOST=address-of-first-node\n")),(0,o.kt)("h2",{id:"deploy-a-private-cluster"},"Deploy a private cluster"),(0,o.kt)("p",null,"A private cluster is a network of Bacalhau nodes completely isolated from any public node.\nThat means you can safely process private jobs and data on your cloud or on-premise hosts!"),(0,o.kt)("p",null,"Good news. Spinning up a private cluster is really a piece of cake \ud83c\udf70:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Bacalhau ",(0,o.kt)("inlineCode",{parentName:"li"},"curl -sL https://get.bacalhau.org/install.sh | bash")," on every host"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau serve"),' only on one host, this will be our "bootstrap" machine'),(0,o.kt)("li",{parentName:"ol"},'Copy and paste the command it outputs under the "',(0,o.kt)("em",{parentName:"li"},"To connect another node to this private one, run the following command in your shell..."),'" line to the ',(0,o.kt)("strong",{parentName:"li"},"other hosts")),(0,o.kt)("li",{parentName:"ol"},'Copy and paste the env vars it outputs under the "',(0,o.kt)("em",{parentName:"li"},"To use this requester node from the client, run the following commands in your shell..."),'" line to a ',(0,o.kt)("strong",{parentName:"li"},"client machine")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau docker run ubuntu echo hello")," on the client machine"),(0,o.kt)("li",{parentName:"ol"},"That's all folks! \ud83c\udf89")),(0,o.kt)("p",null,"Optionally, set up ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systemd"},"systemd")," units make Bacalhau daemons permanent, here's an example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/blob/main/ops/terraform/remote_files/configs/bacalhau.service"},"systemd service file"),"."),(0,o.kt)("p",null,"Please contact us on ",(0,o.kt)("a",{parentName:"p",href:"https://bit.ly/bacalhau-project-slack/"},"Slack")," ",(0,o.kt)("inlineCode",{parentName:"p"},"#bacalhau")," channel for questions and feedback!"))}d.isMDXComponent=!0}}]);