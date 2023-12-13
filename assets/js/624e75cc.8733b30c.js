"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1357],{589:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=a(5893),t=a(1151);const o={sidebar_label:"Gromacs",sidebar_position:4},i="Gromacs",r={id:"examples/molecular-dynamics/Gromacs/index",title:"Gromacs",description:"stars - badge-generator",source:"@site/docs/examples/molecular-dynamics/Gromacs/index.md",sourceDirName:"examples/molecular-dynamics/Gromacs",slug:"/examples/molecular-dynamics/Gromacs/",permalink:"/examples/molecular-dynamics/Gromacs/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/molecular-dynamics/Gromacs/index.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Gromacs",sidebar_position:4},sidebar:"documentationSidebar",previous:{title:"Genomics",permalink:"/examples/molecular-dynamics/Genomics/"},next:{title:"Simulation with OpenMM",permalink:"/examples/molecular-dynamics/openmm/"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"TD;LR",id:"tdlr",level:2},{value:"Downloading datasets",id:"downloading-datasets",level:3},{value:"Uploading the datasets",id:"uploading-the-datasets",level:3},{value:"Running Bacalhau Job",id:"running-bacalhau-job",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"gromacs",children:"Gromacs"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/bacalhau-project/bacalhau",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"})})}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"GROMACS is a package for high-performance molecular dynamics and output analysis. Molecular dynamics is a computer simulation method for analyzing the physical movements of atoms and molecules"}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we will make use of ",(0,s.jsx)(n.a,{href:"https://manual.gromacs.org/documentation/current/onlinehelp/gmx-pdb2gmx.html#description",children:"gmx pdb2gmx"})," program to add hydrogens to the molecules and generates coordinates in Gromacs (Gromos) format and topology in Gromacs format"]}),"\n",(0,s.jsx)(n.h2,{id:"tdlr",children:"TD;LR"}),"\n",(0,s.jsx)(n.p,{children:"Running Gromacs package with Bacalhau"}),"\n",(0,s.jsx)(n.h3,{id:"downloading-datasets",children:"Downloading datasets"}),"\n",(0,s.jsxs)(n.p,{children:["Datasets can be found here ",(0,s.jsx)(n.a,{href:"https://www.rcsb.org",children:"https://www.rcsb.org"}),", In this example we use ",(0,s.jsx)(n.a,{href:"https://www.rcsb.org/structure/1AKI",children:"RCSB PDB - 1AKI"})," dataset. After downloading place it in a folder called \u201cinput\u201d"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"input\n\u2514\u2500\u2500 1AKI.pdb\n"})}),"\n",(0,s.jsx)(n.h3,{id:"uploading-the-datasets",children:"Uploading the datasets"}),"\n",(0,s.jsxs)(n.p,{children:["Upload the directory to IPFS using IPFS CLI (",(0,s.jsx)(n.a,{href:"https://docs.ipfs.tech/install/command-line/#official-distributions",children:"Installation Instructions"}),") [Not recommended]"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ ipfs add -r input/\nadded QmTCCqPzX3qSJHuMeSma9uCqUnriZ5eJX7MnxebxydL89f input/1AKI.pdb\nadded QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9 input\n 113.59 KiB / 113.59 KiB [============================================================================================] 100.00%\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Copy the CID in the end which is ",(0,s.jsx)(n.code,{children:"QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9 "})," Upload the directory to IPFS using ",(0,s.jsx)(n.a,{href:"https://app.pinata.cloud/",children:"Pinata"})," (Recommended)"]}),"\n",(0,s.jsx)(n.h2,{id:"running-bacalhau-job",children:"Running Bacalhau Job"}),"\n",(0,s.jsx)(n.p,{children:"This command converts coordinate files to topology and FF-compliant coordinate files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"bacalhau docker run \\\n-i ipfs://QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9:/input \\\ngromacs/gromacs \\\n-- /bin/bash -c 'echo 15 | gmx pdb2gmx -f input/1AKI.pdb -o outputs/1AKI_processed.gro -water spc'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Lets look at the command above more closely:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"bacalhau docker run"})," using the docker backend"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-i ipfs://QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9:/input"})," here we mount the CID of the dataset we uploaded to IPFS and mount it to a folder called data on the container"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gromacs/gromacs"})," we use the official ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/gromacs/gromacs",children:"gromacs - Docker Image"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-f input/1AKI.pdb"})," input file"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-o output/1AKI_processed.gro"})," output file"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"-water"})," Water model to use in this case we use spc"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Additional parameters could be found here ",(0,s.jsx)(n.a,{href:"https://manual.gromacs.org/documentation/current/onlinehelp/gmx-pdb2gmx.html",children:"gmx pdb2gmx \u2014 GROMACS 2022.2 documentation"})]}),"\n",(0,s.jsxs)(n.p,{children:["(similar tutorial you can try yourself ",(0,s.jsx)(n.a,{href:"http://www.mdtutorials.com/gmx/membrane_protein/01_pdb2gmx.html",children:"KALP-15 in DPPC - GROMACS Tutorial"})," )"]}),"\n",(0,s.jsx)(n.p,{children:"Installing Bacalhau"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\ncurl -sL https://get.bacalhau.org/install.sh | bash\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.2.3 BACALHAU CLI...\nDownloading ",(0,s.jsx)(n.a,{href:"https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz",children:"https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz"})," ...\nDownloading sig file ",(0,s.jsx)(n.a,{href:"https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz.signature.sha256",children:"https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz.signature.sha256"})," ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.2.3\nServer Version: v0.2.3"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash --out job_id\nbacalhau docker run \\\n--id-only \\\n--wait \\ \n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n-i ipfs://QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9:/input \\\ngromacs/gromacs\n-- /bin/bash -c 'echo 15 | gmx pdb2gmx -f input/1AKI.pdb -o outputs/1AKI_processed.gro -water spc'\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"%env JOB_ID={job_id}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Running the commands will output a UUID. This is the ID of the job that was created. You can check the status of the job with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Where it says ",(0,s.jsx)(n.code,{children:"Completed"}),", that means the job is done, and we can get the results."]}),"\n",(0,s.jsx)(n.p,{children:"To find out more information about your job, run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\nbacalhau describe ${JOB_ID}\n"})}),"\n",(0,s.jsx)(n.p,{children:"To Download the results of your job, run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n"})}),"\n",(0,s.jsx)(n.p,{children:"After the download has finished you should see the following contents in the results directory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"%%bash\nls results/\n"})}),"\n",(0,s.jsx)(n.p,{children:"The Rach repository contains self-explanatory results."})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var s=a(7294);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);