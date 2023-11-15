"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6123],{2062:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(5893),a=i(1151);const o={sidebar_label:"FAQs",sidebar_position:90,hide_title:!0},s="Bacalhau FAQs",r={id:"troubleshooting/faqs",title:"Bacalhau FAQs",description:"Can I use multiple data sources in the same job?",source:"@site/docs/troubleshooting/faqs.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/faqs",permalink:"/troubleshooting/faqs",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/troubleshooting/faqs.md",tags:[],version:"current",lastUpdatedAt:1700058439,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:90,frontMatter:{sidebar_label:"FAQs",sidebar_position:90,hide_title:!0},sidebar:"documentationSidebar",previous:{title:"Debugging Jobs",permalink:"/troubleshooting/debugging"},next:{title:"CLI Reference",permalink:"/all-flags"}},h={},c=[{value:"Can I use multiple data sources in the same job?",id:"can-i-use-multiple-data-sources-in-the-same-job",level:3},{value:"How can I submit Job requests through CLI to communicate with my Node directly?",id:"how-can-i-submit-job-requests-through-cli-to-communicate-with-my-node-directly",level:3},{value:"Why does my API server listening on <code>/ip4/127.0.0.1/tcp/5001</code> when I invoke IPFS Daemon when fetching an IPFS Multiaddress?",id:"why-does-my-api-server-listening-on-ip4127001tcp5001-when-i-invoke-ipfs-daemon-when-fetching-an-ipfs-multiaddress",level:3},{value:"What to do when I get error connection refused when running Bacalhau API?",id:"what-to-do-when-i-get-error-connection-refused-when-running-bacalhau-api",level:3},{value:"Problem",id:"problem",level:4},{value:"What to do",id:"what-to-do",level:4},{value:"Can I run Bacalhau in a containerized setup (nested containers)?",id:"can-i-run-bacalhau-in-a-containerized-setup-nested-containers",level:3},{value:"Can I run non Docker jobs?",id:"can-i-run-non-docker-jobs",level:3},{value:"How do I run a script that requires installing packages from a package repository like pypi or apt?",id:"how-do-i-run-a-script-that-requires-installing-packages-from-a-package-repository-like-pypi-or-apt",level:3},{value:"How do I see a job\u2019s progress while it\u2019s running?",id:"how-do-i-see-a-jobs-progress-while-its-running",level:2},{value:"How do I get an IPFS peer if I want to start Bacalhau Server?",id:"how-do-i-get-an-ipfs-peer-if-i-want-to-start-bacalhau-server",level:2},{value:"How can I download and query SQLite when it complains about being in read-only directory?",id:"how-can-i-download-and-query-sqlite-when-it-complains-about-being-in-read-only-directory",level:2},{value:"Can I run bacalhau serve on my home machine? What are the requirements?",id:"can-i-run-bacalhau-serve-on-my-home-machine-what-are-the-requirements",level:2},{value:"Can I stop a running job?",id:"can-i-stop-a-running-job",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bacalhau-faqs",children:"Bacalhau FAQs"}),"\n",(0,t.jsx)(n.h3,{id:"can-i-use-multiple-data-sources-in-the-same-job",children:"Can I use multiple data sources in the same job?"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"--input"})," or ",(0,t.jsx)(n.code,{children:"-i"})," flag multiple times with multiple different CIDs, URLs or S3 objects, and give each of them a path to be mounted at."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, doing ",(0,t.jsx)(n.code,{children:"bacalhau run cat/main.wasm -i ipfs://CID1:/input1 -i ipfs://CID2:/input2"})," will result in both the ",(0,t.jsx)(n.code,{children:"input1"})," and ",(0,t.jsx)(n.code,{children:"input2"})," folders being available to your running WASM with the CID contents. You can use ",(0,t.jsx)(n.code,{children:"-i"})," as many times as you need."]}),"\n",(0,t.jsx)(n.h3,{id:"how-can-i-submit-job-requests-through-cli-to-communicate-with-my-node-directly",children:"How can I submit Job requests through CLI to communicate with my Node directly?"}),"\n",(0,t.jsxs)(n.p,{children:["To ensure the CLI can communicate with our node directly (",(0,t.jsx)(n.code,{children:"bacalhau --api-host <MY_NODE_PUBLIC_IP> version"}),"), you need to make sure the ",(0,t.jsx)(n.strong,{children:"1234"})," port is open."]}),"\n",(0,t.jsxs)(n.h3,{id:"why-does-my-api-server-listening-on-ip4127001tcp5001-when-i-invoke-ipfs-daemon-when-fetching-an-ipfs-multiaddress",children:["Why does my API server listening on ",(0,t.jsx)(n.code,{children:"/ip4/127.0.0.1/tcp/5001"})," when I invoke IPFS Daemon when fetching an IPFS Multiaddress?"]}),"\n",(0,t.jsxs)(n.p,{children:["Bacalhau communicates with IPFS via it's API port and not the swarm port which is why it's ",(0,t.jsx)(n.strong,{children:"5001"})," and not ",(0,t.jsx)(n.strong,{children:"4001"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The key thing is whether the IPFS node is running on the same host as the Bacalhau daemon. If it is, then ",(0,t.jsx)(n.strong,{children:"127.0.0.1"})," is enough to route traffic between the two (because they are both on the same node). If IPFS is running on a different node than Bacalhau, then we need to replace ",(0,t.jsx)(n.strong,{children:"127.0.0.1"})," with the IP that the IPFS server is running on."]}),"\n",(0,t.jsx)(n.h3,{id:"what-to-do-when-i-get-error-connection-refused-when-running-bacalhau-api",children:"What to do when I get error connection refused when running Bacalhau API?"}),"\n",(0,t.jsx)(n.h4,{id:"problem",children:"Problem"}),"\n",(0,t.jsxs)(n.p,{children:["When running ",(0,t.jsx)(n.code,{children:"bacalhau --api-host <MY_NODE_PUBLIC_IP> version"}),"  and you get this error message:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'Error running version: publicapi: after posting request: Post "http://127.0.0.1:1234/version": dial tcp 127.0.0.1:1234: connect: connection refused\n'})}),"\n",(0,t.jsx)(n.h4,{id:"what-to-do",children:"What to do"}),"\n",(0,t.jsxs)(n.p,{children:["First, you'll need to check that the bacalhau server is up and running on the same host then it should be connecting using ",(0,t.jsx)(n.code,{children:"127.0.0.1"}),". This can be checked by running ",(0,t.jsx)(n.code,{children:"telnet 127.0.0.1 1234"}),". If telnet is not connecting to ",(0,t.jsx)(n.strong,{children:"127.0.0.1 1234"})," on the machine that bacalhau is running then one of 3 things:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Bacalhau is running on a different machine"}),"\n",(0,t.jsx)(n.li,{children:"it's running on a different port"}),"\n",(0,t.jsx)(n.li,{children:"it's not running"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"can-i-run-bacalhau-in-a-containerized-setup-nested-containers",children:"Can I run Bacalhau in a containerized setup (nested containers)?"}),"\n",(0,t.jsx)(n.p,{children:"We don't support this as it will result in the classic Dind(Docker In Docker) problem."}),"\n",(0,t.jsx)(n.h3,{id:"can-i-run-non-docker-jobs",children:"Can I run non Docker jobs?"}),"\n",(0,t.jsxs)(n.p,{children:["Yes! You can run programs using WebAssembly instead. See the ",(0,t.jsx)(n.a,{href:"https://docs.bacalhau.org/getting-started/wasm-workload-onboarding",children:"onboarding WebAssembly"})," for information on how to do that."]}),"\n",(0,t.jsx)(n.h3,{id:"how-do-i-run-a-script-that-requires-installing-packages-from-a-package-repository-like-pypi-or-apt",children:"How do I run a script that requires installing packages from a package repository like pypi or apt?"}),"\n",(0,t.jsx)(n.p,{children:"Networking is supported by Bacalhau which enables one to run a script that requires packages from external repository. This is only for Docker workloads"}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-see-a-jobs-progress-while-its-running",children:"How do I see a job\u2019s progress while it\u2019s running?"}),"\n",(0,t.jsxs)(n.p,{children:["If your job writes to stdout, or stderr, while it is running, you can view the output with the ",(0,t.jsx)(n.a,{href:"https://docs.bacalhau.org/all-flags/#logs",children:"logs"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-get-an-ipfs-peer-if-i-want-to-start-bacalhau-server",children:"How do I get an IPFS peer if I want to start Bacalhau Server?"}),"\n",(0,t.jsxs)(n.p,{children:["A viable option is to run your own IPFS daemon and fetch your multiaddress as explained ",(0,t.jsx)(n.a,{href:"https://docs.bacalhau.org/running-node/quick-start/#ensure-ipfs-is-running",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"how-can-i-download-and-query-sqlite-when-it-complains-about-being-in-read-only-directory",children:"How can I download and query SQLite when it complains about being in read-only directory?"}),"\n",(0,t.jsx)(n.p,{children:"When downloading content to run your code against, it is written to a read-only directory. Unfortunately, by default, SQLite requires the directory to be writable so that it can create utility files during its use."}),"\n",(0,t.jsxs)(n.p,{children:["If you run your command with the ",(0,t.jsx)(n.code,{children:"immutable"})," setting set to 1, then it will work. From the sqlite3 command you can use ",(0,t.jsx)(n.code,{children:".open 'file:/inputs/database.db?immutable=1'"}),' where you should replace "database.db" with your downloaded database filename.']}),"\n",(0,t.jsx)(n.h2,{id:"can-i-run-bacalhau-serve-on-my-home-machine-what-are-the-requirements",children:"Can I run bacalhau serve on my home machine? What are the requirements?"}),"\n",(0,t.jsxs)(n.p,{children:["You can run ",(0,t.jsx)(n.code,{children:"bacalhau serve"})," on any machine that fits the prerequisites listed ",(0,t.jsx)(n.a,{href:"https://docs.bacalhau.org/running-node/quick-start/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["The walkthrough in the docs has been tested only on Ubuntu 22, bacalhau is being developed on Linux/macOS environments and therefore should work fine there as well. However, Windows hosts are supported with ",(0,t.jsx)(n.a,{href:"https://docs.bacalhau.org/running-node/windows-support/",children:"limitations"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"can-i-stop-a-running-job",children:"Can I stop a running job?"}),"\n",(0,t.jsxs)(n.p,{children:["Yes. Given a valid job ID, you can use the ",(0,t.jsx)(n.a,{href:"https://docs.bacalhau.org/all-flags#cancel",children:"cancel command"})," to cancel the job,\nand stop it from running."]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(7294);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);