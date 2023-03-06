"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return a?o.createElement(d,i(i({ref:t},c),{},{components:a})):o.createElement(d,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_label:"Examples",sidebar_position:20},i="Examples",l={unversionedId:"examples/index",id:"examples/index",title:"Examples",description:"Bacalhau comes pre-loaded with exciting examples to showcase its abilities and help get you started.",source:"@site/docs/examples/index.md",sourceDirName:"examples",slug:"/examples/",permalink:"/examples/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/index.md",tags:[],version:"current",lastUpdatedAt:1678140487,formattedLastUpdatedAt:"Mar 6, 2023",sidebarPosition:20,frontMatter:{sidebar_label:"Examples",sidebar_position:20},sidebar:"documentationSidebar",previous:{title:"Debugging Jobs",permalink:"/troubleshooting/debugging"},next:{title:"Data Ingestion",permalink:"/examples/data-ingestion/"}},s={},p=[{value:"Organisation",id:"organisation",level:2},{value:"Usage",id:"usage",level:2},{value:"Structure",id:"structure",level:3},{value:"Syntax primer",id:"syntax-primer",level:3},{value:"Interactive mode",id:"interactive-mode",level:3},{value:"Run examples locally",id:"run-examples-locally",level:4},{value:"Use a hosted Jupyter service (recommended!)",id:"use-a-hosted-jupyter-service-recommended",level:4},{value:"Developer Information",id:"developer-information",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Bacalhau comes pre-loaded with exciting examples to showcase its abilities and help get you started."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Use the navigation bar on the left to browse through the examples. You can also view the raw codebase by visiting our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/examples"},"examples repository"),".")),(0,n.kt)("h2",{id:"organisation"},"Organisation"),(0,n.kt)("p",null,"Examples are organised by task. Each task has a number of examples that showcase different ways to solve the same problem."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"We're adding examples all the time. Check back soon for more!")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Each example walks you through a specific task and aims at being as self-contained as possible.\nFor starters, we recommended to start from examples whose prerequistes include only the Bacalhau client (e.g. ",(0,n.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/Prolog-Hello-World/"},"Python Hello World"),").\nFirst read through an example to grasp its objectives and syntax, once you feel confident with those you may want to run it ",(0,n.kt)("em",{parentName:"p"},"interactively"),"."),(0,n.kt)("h3",{id:"structure"},"Structure"),(0,n.kt)("p",null,'Right at the top you\'ll see colorful badges reading "Open in Colab" or "launch binder". These are shortcuts to execute an example in interactive mode (more on this below).'),(0,n.kt)("p",null,"After a brief introduction, each example lists a number of prerequistes. These can span from a simple Bacalhau client installation to installing a Docker daemon or NVIDIA drivers.\nClearly, there's a limit as in what you can install on a machine to just try out a Bacalhau example.\nFor instance, you cannot install NVIDIA driver on a Macbook Pro simply because they don't ship with NVIDIA GPUs.\nLuckily, that is no problem because for the vast majority of the examples are provided with pre-packaged cloud runtime environments (more on this in the interactive mode section)."),(0,n.kt)("p",null,"Data is typically stored externally in ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Google_Cloud_Storage"},"Google Cloud Storae (GCS)")," (for remote data examples) or ",(0,n.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/"},"IPFS")," (for local data examples).\nSometimes examples ship with datasets stored locally and you may find references of the likes of ",(0,n.kt)("inlineCode",{parentName:"p"},"./data/train.csv"),"."),(0,n.kt)("p",null,"Typically each example ends by downloading your Bacalhau job's outputs locally.\nThis may feel repetitive but it's helpful to display the actual results of your job!"),(0,n.kt)("h3",{id:"syntax-primer"},"Syntax primer"),(0,n.kt)("p",null,"Spread across each example you'll find ",(0,n.kt)("strong",{parentName:"p"},"blocks")," like the one below.\nAs you go trough an example, you'll need to understand the nature these blocks and how to interpret them."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Hello reader, I'm a block!\n")),(0,n.kt)("p",null,"Our examples are written in ",(0,n.kt)("a",{parentName:"p",href:"https://jupyterlab.readthedocs.io/en/stable/index.html"},"Jupyter notebooks"),", a rich format that pulls together descriptive text, various ",(0,n.kt)("strong",{parentName:"p"},"blocks")," and the possibility to run bash commands from within a notebook.\nThis gives you the power to interactively run our examples (more on this below - last teaser about this, promised \ud83d\ude04)!\nAn advantage of notebooks is that once you \"run it\", it'll store the bash commands' output in a dedicated block.\nThanks to that, the static webpages you find in ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/"},"https://docs.bacalhau.org/examples/"),' are effectively "snapshots" of previous runs.\nThis way, you don\'t necessarily need to run an example to see what it outputs!'),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To achieve the above, ",(0,n.kt)("em",{parentName:"p"},"some")," blocks are annotated with the following ",(0,n.kt)("a",{parentName:"p",href:"https://ipython.readthedocs.io/en/stable/interactive/magics.html#cell-magics"},"cell magics"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"%%bash")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"%%writefile"),".\nThese tell Jupyter how to run the commands within a block.\nIf you're just reading through the static webpage, these annotations shall inform you that block aims at either execute bash commands, or write the content of that block to a file on disk.")),(0,n.kt)("p",null,"Thus, blocks can be:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"simple text snippets: these are used to display generic text in a dedicated block."),(0,n.kt)("li",{parentName:"ul"},"bash commands (annotated with ",(0,n.kt)("inlineCode",{parentName:"li"},"%%bash")," in the first line): these can be run in the interactive mode! If you wish to use your own terminal to launch these commands, just ignore the ",(0,n.kt)("inlineCode",{parentName:"li"},"%%bash")," line."),(0,n.kt)("li",{parentName:"ul"},"write to file (annotated with ",(0,n.kt)("inlineCode",{parentName:"li"},"%%writefile <path/file-name>")," in the first line): these inform you the remainder of the example will expect ",(0,n.kt)("inlineCode",{parentName:"li"},"<path/file-name>")," to be stored on disk. We use these blocks to:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Firstly, show you what's inside a file - for instance, this may display the content of a python script."),(0,n.kt)("li",{parentName:"ul"},"Secondly, when running an example in interactive mode, Jupyter will effectively write out the content of the block to disk, in ",(0,n.kt)("inlineCode",{parentName:"li"},"<path/file-name>"),".")))),(0,n.kt)("p",null,"Since our examples are runnable, we render the effective run in static web pages to give you a glimpse of what to expect if you run it yourself.\nThis means we're able to show you what the output of a command is, right below the command block.\nFor instance, when you run into two consecutive blocks (see below), the former represents a command block and the latter depicts its output."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"%%bash\ndate\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Wed Feb 15 13:21:35 CET 2029\n")),(0,n.kt)("h3",{id:"interactive-mode"},"Interactive mode"),(0,n.kt)("p",null,"If you're trying to run an example by yourself, this section contains the instructions you're looking for.\nAs stated previously, our examples are written in Jupyter notebook and this gives you the possibility to run its steps one by one, edit them, or simply run them all in a sequence from top to bottom.\nThis is convenient because while the accompanying text guides you through the example (and hopefully provides enough context), you have to possibility to edit and re-run each step."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Are you not familiar with Jupyter notebooks but wish to run our examples interactively?\nPlease stop right here and take a moment to learn more about it in its ",(0,n.kt)("a",{parentName:"p",href:"https://jupyterlab.readthedocs.io/en/stable/index.html"},"official docs"),".\nThis ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=jZ952vChhuI"},"video on YouTube (7min)")," is a perfect quick introduction to Jupyter Notebook.\nSee also ",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/50982686/what-is-the-difference-between-jupyter-notebook-and-jupyterlab/"},"the difference between Jupyter Notebook and JupyterLab"),".")),(0,n.kt)("p",null,"Finally, how to run our examples interactively?\nYou have two options:"),(0,n.kt)("h4",{id:"run-examples-locally"},"Run examples locally"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Pick an example you'd like to run"),(0,n.kt)("li",{parentName:"ol"},"Find the corrseponding ",(0,n.kt)("inlineCode",{parentName:"li"},".ipynb")," file in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bacalhau-project/examples"},"https://github.com/bacalhau-project/examples")),(0,n.kt)("li",{parentName:"ol"},"Pull the example repo locally: ",(0,n.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/bacalhau-project/examples.git")),(0,n.kt)("li",{parentName:"ol"},"Install Jupyter Notebook or preferably ",(0,n.kt)("a",{parentName:"li",href:"https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html"},"install JupyterLab")," locally"),(0,n.kt)("li",{parentName:"ol"},"Launch JupyterLab, run ",(0,n.kt)("inlineCode",{parentName:"li"},"jupyter lab")," in a terminal (see the ",(0,n.kt)("a",{parentName:"li",href:"https://jupyterlab.readthedocs.io/en/stable/getting_started/starting.html"},"official docs for more details"),")"),(0,n.kt)("li",{parentName:"ol"},"Use the ",(0,n.kt)("a",{parentName:"li",href:"https://jupyterlab.readthedocs.io/en/stable/user/interface.html"},"Jupyter interface")," to interact with the example of your choice")),(0,n.kt)("p",null,"Can you run notebooks in VS Code? Install ",(0,n.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter"},"the related extension"),", then clone the repo as in the steps above."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Spare yourself the hustle of installing all the above and use a hosted Jupyter service instead (see section below).")),(0,n.kt)("h4",{id:"use-a-hosted-jupyter-service-recommended"},"Use a hosted Jupyter service (recommended!)"),(0,n.kt)("p",null,"Most examples come with badges on the top of the page ",(0,n.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Google Colab logo"})," ",(0,n.kt)("img",{src:"https://mybinder.org/badge.svg",alt:"mybinder.org logo"}),".\nThose badges are clicckable and they'll open a Colab/Binder workspace (in the cloud) with the notebook and related files ready-to-go.\nThey typically work out-of-the-box and perfectly support installing tools like the Bacalhau client or a python library.\nHowever, it must be noted they may complain when trying to install advanced pre-requisites that require system-level components (e.g. Docker). When you run into that case, you'll have to resort to running the notebook and installing all of its dependencies locally (see section above)."),(0,n.kt)("h2",{id:"developer-information"},"Developer Information"),(0,n.kt)("p",null,"All of the examples are open source and available on GitHub. The examples exist in a separate repository located at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/examples/"},"https://github.com/bacalhau-project/examples/"),". Please see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/examples/README.md"},"README.md for more instructions on how to contribute"),"."),(0,n.kt)("p",null,"Note that the code for the rest of the documentation (this website) ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/docs.bacalhau.org/"},"is located in a separate repository"),"."))}u.isMDXComponent=!0}}]);