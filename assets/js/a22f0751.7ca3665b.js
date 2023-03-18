"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=a,g=c["".concat(u,".").concat(h)]||c[h]||p[h]||i;return n?o.createElement(g,r(r({ref:t},d),{},{components:n})):o.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Debugging Jobs",sidebar_position:1,description:"How to troubleshoot and debug failed Bacalhau jobs"},r="Debugging Failed Jobs",l={unversionedId:"troubleshooting/debugging",id:"troubleshooting/debugging",title:"Debugging Failed Jobs",description:"How to troubleshoot and debug failed Bacalhau jobs",source:"@site/docs/troubleshooting/debugging.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/debugging",permalink:"/troubleshooting/debugging",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/troubleshooting/debugging.md",tags:[],version:"current",lastUpdatedAt:1679163633,formattedLastUpdatedAt:"Mar 18, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Debugging Jobs",sidebar_position:1,description:"How to troubleshoot and debug failed Bacalhau jobs"},sidebar:"documentationSidebar",previous:{title:"Private Cluster",permalink:"/next-steps/private-cluster"},next:{title:"Examples",permalink:"/examples/"}},u={},s=[{value:"1. What Does a Job Failure Look Like?",id:"1-what-does-a-job-failure-look-like",level:2},{value:"2. Inspecting the Status of the Job",id:"2-inspecting-the-status-of-the-job",level:2},{value:"3. Common Error 1 - <code>Executable file not found</code>",id:"3-common-error-1---executable-file-not-found",level:2},{value:"4. Common Error 2 - <code>exit code was not zero: 1</code>",id:"4-common-error-2---exit-code-was-not-zero-1",level:2},{value:"5. Debugging Via Sanity Checks",id:"5-debugging-via-sanity-checks",level:2},{value:"6. Debugging Via Logging",id:"6-debugging-via-logging",level:2},{value:"8. Debugging by Running Locally",id:"8-debugging-by-running-locally",level:2},{value:"7. Debugging Via Simple Jobs",id:"7-debugging-via-simple-jobs",level:2},{value:"Support",id:"support",level:2},{value:"Contributing",id:"contributing",level:2}],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"debugging-failed-jobs"},"Debugging Failed Jobs"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"An expert is a person who has made all the mistakes that can be made in a very narrow field." \u2015 Niels Bohr')),(0,a.kt)("p",null,"Bacalhau is a decentralized compute network that anyone can join. The network comprises of a smorgasbord of hardware provided by a hodgepodge of providers. In addition, its users are diverse and their jobs are unique. The permutations involved mean that there's a pretty good chance that something will go wrong at some point."),(0,a.kt)("p",null,"Being decentralized also means that you can't follow standard debugging practices such as SSH'ing into a node or spinning up a REPL environment. This page describes a few hints and tips that we've found useful when debugging failed jobs."),(0,a.kt)("h2",{id:"1-what-does-a-job-failure-look-like"},"1. What Does a Job Failure Look Like?"),(0,a.kt)("p",null,"A failing job could be described as anything that didn't meet your expectations. But clearly much of that is outside of the scope of the network."),(0,a.kt)("p",null,"When it comes to Bacalhau, a failing job is one that has failed to complete successfully. If you run a job in the foreground you might see a message saying:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Error while executing the job.\n")),(0,a.kt)("p",null,"Or when you list the jobs you might see a state of ",(0,a.kt)("inlineCode",{parentName:"p"},"ERROR"),", like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED               \n11:05:47  bab5f64c  Docker ubuntu echo "...  Error    \n')),(0,a.kt)("h2",{id:"2-inspecting-the-status-of-the-job"},"2. Inspecting the Status of the Job"),(0,a.kt)("p",null,"When you first suspect that your job has failed, the first thing you should do is inspect the status. The ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau describe $JOB_ID")," command presents everything that is known about a job from the perspective of the network."),(0,a.kt)("p",null,"Look through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Shards")," of the job and see if any of them have a ",(0,a.kt)("inlineCode",{parentName:"p"},"State")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"RunOutput")," field provides the juicy details of what went wrong."),(0,a.kt)("h2",{id:"3-common-error-1---executable-file-not-found"},"3. Common Error 1 - ",(0,a.kt)("inlineCode",{parentName:"h2"},"Executable file not found")),(0,a.kt)("p",null,"One of the most common reasons for failure is that the entrypoint for a job doesn't exist. The ",(0,a.kt)("inlineCode",{parentName:"p"},"stderr")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"runnerError")," will look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'JobState:\n  Nodes:\n    QmXMzb3GQRMyUyVvUB53nfkZ1sURTVxuR8BPowey7a3WKk:\n      Shards:\n        "0":\n          NodeId: QmXMzb3GQRMyUyVvUB53nfkZ1sURTVxuR8BPowey7a3WKk\n          PublishedResults: {}\n          RunOutput:\n            exitCode: 0\n            runnerError: \'Executable file not found: Error response from daemon: failed\n              to create shim task: OCI runtime create failed: runc create failed:\n              unable to start container process: exec: "echo \\"Something spooky\\"\n              &>2 && exit 1": executable file not found in $PATH: unknown: Executable\n              file not found: Error response from daemon: failed to create shim task:\n              OCI runtime create failed: runc create failed: unable to start container\n              process: exec: "echo \\"Something spooky\\" &>2 && exit 1": executable\n              file not found in $PATH: unknown\'\n')),(0,a.kt)("p",null,"This is usually caused by a mistake in the path to the executable or quotes. To fix this, you'll need to edit the command and make sure it's a valid command."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Try enclosing your command in a bash -c '...' (or equivalent shell) to make sure that your command is parsed by the process in the container, not your shell.")),(0,a.kt)("h2",{id:"4-common-error-2---exit-code-was-not-zero-1"},"4. Common Error 2 - ",(0,a.kt)("inlineCode",{parentName:"h2"},"exit code was not zero: 1")),(0,a.kt)("p",null,"If your program exits with a non-zero exit code, the job will report a failure. The ",(0,a.kt)("inlineCode",{parentName:"p"},"exitCode")," field will present the code. Inspect the ",(0,a.kt)("inlineCode",{parentName:"p"},"stderr")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")," to see what went wrong. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"JobState:\n  Nodes:\n    QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG:\n      Shards:\n        \"0\":\n          NodeId: QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG\n          PublishedResults: {}\n          RunOutput:\n            exitCode: 1\n            runnerError: 'exit code was not zero: 1'\n            stderr: |\n              Something spooky happened and I got scared\n")),(0,a.kt)("p",null,"Typically this is caused by a user error in the code. But you can sometimes see it due to a hardware (e.g. an out of memory error) or Docker error (e.g. wrong container architecture)."),(0,a.kt)("h2",{id:"5-debugging-via-sanity-checks"},"5. Debugging Via Sanity Checks"),(0,a.kt)("p",null,"If you're not sure what went wrong, you can try adding some sanity checks to your command or code. Here is a list of common command line commands that we use to make sure everything is in its right place:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ls -lah /inputs > /outputs/ls.txt")," - list the contents of a directory and write to the outputs (or stdout) to double check that files/binaries really exist"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"md5sum /inputs/data.tar.gz > /outputs/checksum.txt")," - calculate the checksum of a file and write to the outputs (or stdout) to double check that the file is what you expect")),(0,a.kt)("p",null,"Inside your code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use your language's assert functionality to check that the inputs are what you expect")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Seriously, we've seen all sorts of wonderful things go wrong. Like\nCIDs presenting a corrupted file. It's worth checking everything!")),(0,a.kt)("p",null,"More tips:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Debugging"},"Wikipedia"))),(0,a.kt)("h2",{id:"6-debugging-via-logging"},"6. Debugging Via Logging"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"The most effective debugging tool is still careful thought, coupled with judiciously placed print statements." \u2014 Brian Kernighan, "Unix for Beginners" (1979)')),(0,a.kt)("p",null,"Since Bacalhau jobs have no external access, you can't rely on remote metric solutions or writing checkpoints to disk. Instead, liberally apply print statements like you're decorating a 1970's Christmas tree."),(0,a.kt)("p",null,"At the command line:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cp /inputs/data.tar.gz /outputs/data.tar.gz")," - copy a file to the outputs so you can download and inspect it later"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"echo")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"cat")," commands to list out pertinent information")),(0,a.kt)("p",null,"Inside your code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use a logging framework if you have one - structure the output to make it more searchable"),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"print"),"-like debugging statements to trace the path of execution within your code. When you think you've added enough, add more."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"print")," out the hardware resources observed by your code, to ensure that hardware is visible and behaving as expected (e.g. GPU information)"),(0,a.kt)("li",{parentName:"ul"},"For longer-running or hardware intensive jobs, ",(0,a.kt)("inlineCode",{parentName:"li"},"print")," status updates and current consumption metrics to ensure that the job is progressing as expected")),(0,a.kt)("p",null,"More tips: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://adamj.eu/tech/2021/10/08/tips-for-debugging-with-print/"},"Tips for debugging with print()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firstmncsa.org/2018/12/09/debugging-print-statements-and-logging/"},"Debugging: print statements and logging")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://news.ycombinator.com/item?id=26925570"},"Flame war: The unreasonable effectiveness of print debugging"))),(0,a.kt)("h2",{id:"8-debugging-by-running-locally"},"8. Debugging by Running Locally"),(0,a.kt)("p",null,"It might sound obvious but run a test job locally first. You'll often have much better visibility into what's going on and you can use your local tools to debug."),(0,a.kt)("h2",{id:"7-debugging-via-simple-jobs"},"7. Debugging Via Simple Jobs"),(0,a.kt)("p",null,"Before running a Bacalhau job for real, it's worth taking the time to slowly baby-step your way to the final command. This is especially true if you're new to Bacalhau or if you're not sure what the inputs will look like."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your first job should be a simple ",(0,a.kt)("inlineCode",{parentName:"li"},"ubuntu")," based ",(0,a.kt)("inlineCode",{parentName:"li"},"ls")," command to make sure that the inputs are where you expect them to be"),(0,a.kt)("li",{parentName:"ul"},"Your second job should be a similarly simple ",(0,a.kt)("inlineCode",{parentName:"li"},"ls"),"-like job, but using your code/container"),(0,a.kt)("li",{parentName:"ul"},'Your third job should use your code, but run some kind of "inspect" or "list" or "sanity check" like job to double check that your job has everything it needs to do before it starts. A "hello world" if you will.'),(0,a.kt)("li",{parentName:"ul"},"Finally, try and run the actual job."),(0,a.kt)("li",{parentName:"ul"},"If the job fails, try to tailor a job that tests the specific issue you're facing.")),(0,a.kt)("p",null,"In essence, you should try and derisk the job by intentionally testing all the normal things that can go wrong, like data not being in the right place or in the wrong format."),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("p",null,"If you're still having trouble, please reach out to the ",(0,a.kt)("a",{parentName:"p",href:"https://filecoin.io/slack"},"Bacalhau team via Slack (#bacalhau channel)")),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"If you have any hints or tips to add, then please submit a PR to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/docs.bacalhau.org/"},"the Bacalhau Documentation repository"),"."))}p.isMDXComponent=!0}}]);