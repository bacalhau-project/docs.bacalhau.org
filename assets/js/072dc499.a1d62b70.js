"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Storage Providers",sidebar_position:130},s="Storage Providers",i={unversionedId:"running-node/storage-providers",id:"running-node/storage-providers",title:"Storage Providers",description:"Bacalhau has two ways to make use of external storage providers:",source:"@site/docs/running-node/storage-providers.md",sourceDirName:"running-node",slug:"/running-node/storage-providers",permalink:"/running-node/storage-providers",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/storage-providers.md",tags:[],version:"current",lastUpdatedAt:1697635948,formattedLastUpdatedAt:"Oct 18, 2023",sidebarPosition:130,frontMatter:{sidebar_label:"Storage Providers",sidebar_position:130},sidebar:"documentationSidebar",previous:{title:"Networking",permalink:"/running-node/networking"},next:{title:"Job Selection Policy",permalink:"/running-node/job-selection"}},l={},p=[{value:"Inputs",id:"inputs",level:2},{value:"IPFS",id:"ipfs",level:3},{value:"Publishers",id:"publishers",level:2},{value:"IPFS",id:"ipfs-1",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storage-providers"},"Storage Providers"),(0,a.kt)("p",null,"Bacalhau has two ways to make use of external storage providers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inputs")," storage resources consumed as inputs to jobs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Publishers")," storage resources created with the results of jobs")),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("h3",{id:"ipfs"},"IPFS"),(0,a.kt)("p",null,"To start, you'll need to connect the Bacalhau node to an IPFS server so that you can run jobs that consume CIDs as inputs."),(0,a.kt)("p",null,"You can either ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/install/"},"install IPFS")," and run it locally, or you can connect to a remote IPFS server."),(0,a.kt)("p",null,"In both cases, you should have an ",(0,a.kt)("a",{parentName:"p",href:"https://richardschneider.github.io/net-ipfs-core/articles/multiaddress.html"},"IPFS multiaddress")," for the IPFS server that should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export IPFS_CONNECT=/ip4/10.1.10.10/tcp/80/p2p/QmVcSqVEsvm5RR9mBLjwpb2XjFVn5bPdPL69mL8PH45pPC\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The multiaddress above is just an example - you'll need to get the multiaddress of the IPFS server you want to connect to.")),(0,a.kt)("p",null,"You can then configure your Bacalhau node to use this IPFS server by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ipfs-connect")," argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"serve")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau serve --ipfs-connect $IPFS_CONNECT\n")),(0,a.kt)("p",null,"Or, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"Node.IPFS.Connect")," property in the Bacalhau configuration file."),(0,a.kt)("h2",{id:"publishers"},"Publishers"),(0,a.kt)("h3",{id:"ipfs-1"},"IPFS"),(0,a.kt)("p",null,"The IPFS publisher works using the same setup as above - you'll need to have an\nIPFS server running and a multiaddress for it. You'll then you pass that\nmultiaddress using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ipfs-connect")," argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"serve")," command."),(0,a.kt)("p",null,"If you are publishing to a public IPFS node, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau get")," with no\nfurther arguments to download the results. However, you may experience a delay\nin results becoming available as indexing of new data by public nodes takes\ntime."),(0,a.kt)("p",null,"To speed up the download or to retrieve results from a private IPFS node, pass\nthe swarm multiaddress to ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau get")," to download results."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Set the below environment variable, use the --ipfs-swarm-addrs flag,\n# or set the Node.IPFS.SwarmAddresses config property.\nexport BACALHAU_IPFS_SWARM_ADDRESSES=/ip4/.../tcp/5001/p2p/Qmy...\nbacalhau get $JOB_ID\n")),(0,a.kt)("p",null,"Pass the swarm key to ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau get")," if the IPFS swarm is a private swarm."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Set the below environment variable, use the --ipfs-swarm-key flag,\n# or set the Node.IPFS.SwarmKeyPath config property.\nexport BACALHAU_IPFS_SWARM_KEY=./path/to/swarm.key\nbacalhau get $JOB_ID\n")))}d.isMDXComponent=!0}}]);