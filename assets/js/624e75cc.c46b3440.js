"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Gromacs",sidebar_position:4},l="Gromacs",s={unversionedId:"examples/molecular-dynamics/Gromacs/index",id:"examples/molecular-dynamics/Gromacs/index",title:"Gromacs",description:"Open In Colab",source:"@site/docs/examples/molecular-dynamics/Gromacs/index.md",sourceDirName:"examples/molecular-dynamics/Gromacs",slug:"/examples/molecular-dynamics/Gromacs/",permalink:"/examples/molecular-dynamics/Gromacs/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/molecular-dynamics/Gromacs/index.md",tags:[],version:"current",lastUpdatedAt:1680108572,formattedLastUpdatedAt:"Mar 29, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Gromacs",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Genomics",permalink:"/examples/molecular-dynamics/Genomics/"},next:{title:"Simulation with OpenMM",permalink:"/examples/molecular-dynamics/openmm/"}},i={},p=[{value:"Introduction",id:"introduction",level:2},{value:"TD;LR",id:"tdlr",level:2},{value:"Downloading datasets",id:"downloading-datasets",level:3},{value:"Uploading the datasets",id:"uploading-the-datasets",level:3},{value:"Running Bacalhau Job",id:"running-bacalhau-job",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gromacs"},"Gromacs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/Gromacs/BIDS/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=miscellaneous/Gromacs/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"GROMACS is a package for high-performance molecular dynamics and output analysis. Molecular dynamics is a computer simulation method for analyzing the physical movements of atoms and molecules"),(0,r.kt)("p",null,"In this example we will make use of ",(0,r.kt)("a",{parentName:"p",href:"https://manual.gromacs.org/documentation/current/onlinehelp/gmx-pdb2gmx.html#description"},"gmx pdb2gmx")," program to add hydrogens to the molecules and generates coordinates in Gromacs (Gromos) format and a topology in Gromacs format"),(0,r.kt)("h2",{id:"tdlr"},"TD;LR"),(0,r.kt)("p",null,"Running Gromacs package with Bacalhau"),(0,r.kt)("h3",{id:"downloading-datasets"},"Downloading datasets"),(0,r.kt)("p",null,"Datasets can be found here ",(0,r.kt)("a",{parentName:"p",href:"https://www.rcsb.org"},"https://www.rcsb.org"),", In this example we use ",(0,r.kt)("a",{parentName:"p",href:"https://www.rcsb.org/structure/1AKI"},"RCSB PDB - 1AKI")," dataset. After downloading place it in a folder called \u201cinput\u201d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"input\n\u2514\u2500\u2500 1AKI.pdb\n")),(0,r.kt)("h3",{id:"uploading-the-datasets"},"Uploading the datasets"),(0,r.kt)("p",null,"Upload the directory to IPFS using IPFS CLI (",(0,r.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/install/command-line/#official-distributions"},"Installation Instructions"),") ","[Not recommended]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ ipfs add -r input/\nadded QmTCCqPzX3qSJHuMeSma9uCqUnriZ5eJX7MnxebxydL89f input/1AKI.pdb\nadded QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9 input\n 113.59 KiB / 113.59 KiB [============================================================================================] 100.00%\n")),(0,r.kt)("p",null,"Copy the CID in the end which is ",(0,r.kt)("inlineCode",{parentName:"p"},"QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9 ")," Upload the directory to IPFS using ",(0,r.kt)("a",{parentName:"p",href:"https://app.pinata.cloud/"},"Pinata")," (Recommended)"),(0,r.kt)("h2",{id:"running-bacalhau-job"},"Running Bacalhau Job"),(0,r.kt)("p",null,"This command converts coordinate files to topology and FF-compliant coordinate files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bacalhau docker run \\\n-v QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9:/input \\\ngromacs/gromacs \\\n-- /bin/bash -c 'echo 15 | gmx pdb2gmx -f input/1AKI.pdb -o outputs/1AKI_processed.gro -water spc'\n")),(0,r.kt)("p",null,"Lets look at the command above more closely:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," using the docker backend")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-v QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9:/input")," here we mount the CID of the dataset we uploaded to IPFS and mount it to a folder called data on the container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"gromacs/gromacs")," we use the official ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/gromacs/gromacs"},"gromacs - Docker Image")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-f input/1AKI.pdb")," input file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-o output/1AKI_processed.gro")," output file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-water")," Water model to use in this case we use spc"))),(0,r.kt)("p",null,"Additional parameters could be found here ",(0,r.kt)("a",{parentName:"p",href:"https://manual.gromacs.org/documentation/current/onlinehelp/gmx-pdb2gmx.html"},"gmx pdb2gmx \u2014 GROMACS 2022.2 documentation")," "),(0,r.kt)("p",null,"(similar tutorial you can try yourself ",(0,r.kt)("a",{parentName:"p",href:"http://www.mdtutorials.com/gmx/membrane_protein/01_pdb2gmx.html"},"KALP-15 in DPPC - GROMACS Tutorial")," )"),(0,r.kt)("p",null,"Installing Bacalhau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncurl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.2.3 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.2.3\nServer Version: v0.2.3\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--id-only \\\n--wait \\ \n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n-v QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9:/input \\\ngromacs/gromacs\n-- /bin/bash -c 'echo 15 | gmx pdb2gmx -f input/1AKI.pdb -o outputs/1AKI_processed.gro -water spc'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("p",null,"Running the commands will output a UUID. This is the ID of the job that was created. You can check the status of the job with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,r.kt)("p",null,"Where it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("p",null,"To find out more information about your job, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("p",null,"To Download the results of your job, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/\n")),(0,r.kt)("p",null,"Rach repository contains selfexplanatory results."))}u.isMDXComponent=!0}}]);