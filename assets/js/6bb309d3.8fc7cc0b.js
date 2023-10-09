"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5888],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=i,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_label:"Configuration",sidebar_position:160,description:"How to configure your Bacalhau node."},o="Configuration Overview",l={unversionedId:"running-node/configuration",id:"running-node/configuration",title:"Configuration Overview",description:"How to configure your Bacalhau node.",source:"@site/docs/running-node/configuration.md",sourceDirName:"running-node",slug:"/running-node/configuration",permalink:"/running-node/configuration",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/configuration.md",tags:[],version:"current",lastUpdatedAt:1696833973,formattedLastUpdatedAt:"Oct 9, 2023",sidebarPosition:160,frontMatter:{sidebar_label:"Configuration",sidebar_position:160,description:"How to configure your Bacalhau node."}},p={},s=[{value:"The Bacalhau Repo",id:"the-bacalhau-repo",level:2},{value:"Below is the structure of a freshly initialized <code>.bacalhau</code> repository:",id:"below-is-the-structure-of-a-freshly-initialized-bacalhau-repository",level:3},{value:"Files",id:"files",level:4},{value:"Directories",id:"directories",level:4},{value:"Configuring a Bacalhau Node",id:"configuring-a-bacalhau-node",level:2},{value:"Relationship Between <code>config.yaml</code> and Bacalhau Environment Variables",id:"relationship-between-configyaml-and-bacalhau-environment-variables",level:3},{value:"Environments",id:"environments",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"How to initialize a Bacalhau Server for a local private network",id:"how-to-initialize-a-bacalhau-server-for-a-local-private-network",level:3},{value:"How to initialize a Bacalhau Server with a custom repo path",id:"how-to-initialize-a-bacalhau-server-with-a-custom-repo-path",level:3},{value:"How to start a Bacalhau Server with DEBUG logs",id:"how-to-start-a-bacalhau-server-with-debug-logs",level:3}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration-overview"},"Configuration Overview"),(0,i.kt)("p",null,"Bacalhau employs the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spf13/viper"},"viper")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spf13/cobra"},"cobra")," libraries for configuration management. Users can configure their Bacalhau node through a combination of command-line flags, environment variables, and the dedicated configuration file."),(0,i.kt)("h2",{id:"the-bacalhau-repo"},"The Bacalhau Repo"),(0,i.kt)("p",null,"Bacalhau manages its configuration, metadata, and internal state within a specialized repository named ",(0,i.kt)("inlineCode",{parentName:"p"},".bacalhau"),". Serving as the heart of the Bacalhau node, this repository holds the  data and settings that determine node behavior. It's located on the  filesystem, and by default, Bacalhau initializes this repository at ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.bacalhau"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME")," is the home directory of the user running the bacalhau process."),(0,i.kt)("p",null,"To customize this location, users can:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"BACALHAU_DIR")," environment variable to specify their desired path."),(0,i.kt)("li",{parentName:"ol"},"Utilize the ",(0,i.kt)("inlineCode",{parentName:"li"},"--repo")," command line flag to specify their desired path.")),(0,i.kt)("p",null,"Upon executing a Bacalhau command for the first time, the system will initialize the ",(0,i.kt)("inlineCode",{parentName:"p"},".bacalhau")," repository. If such a repository already exists, Bacalhau will seamlessly access its contents."),(0,i.kt)("p",null,"Structure of a Newly Initialized ",(0,i.kt)("inlineCode",{parentName:"p"},".bacalhau")," Repository"),(0,i.kt)("h3",{id:"below-is-the-structure-of-a-freshly-initialized-bacalhau-repository"},"Below is the structure of a freshly initialized ",(0,i.kt)("inlineCode",{parentName:"h3"},".bacalhau")," repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree ~/.bacalhau\n\u251c\u2500\u2500 QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv-compute/\n\u2502   \u251c\u2500\u2500 executions.db\n\u2502   \u2514\u2500\u2500 jobStats.json\n\u251c\u2500\u2500 QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv-requester/\n\u2502   \u2514\u2500\u2500 jobs.db\n\u251c\u2500\u2500 config.yaml\n\u251c\u2500\u2500 executor_storages/\n\u251c\u2500\u2500 libp2p_private_key\n\u251c\u2500\u2500 plugins/\n\u251c\u2500\u2500 repo.version\n\u2514\u2500\u2500 user_id.pem\n")),(0,i.kt)("p",null,"This repository comprises four directories and seven files:"),(0,i.kt)("h4",{id:"files"},"Files"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"user_id.pem"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This file houses the Bacalhau node user's cryptographic private key, used for signing requests sent to a Requester Node."),(0,i.kt)("li",{parentName:"ul"},"Format: PEM."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"repo.version"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Indicates the version of the Bacalhau node's repository."),(0,i.kt)("li",{parentName:"ul"},"Format: JSON, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},'{"Version":1}'),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"libp2p_private_key"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Stores the Bacalhau node's ",(0,i.kt)("a",{parentName:"li",href:"https://libp2p.io/"},"libp2p")," private key, essential for its network identity. The NodeID of a Bacalhau node is derived from this key."),(0,i.kt)("li",{parentName:"ul"},"Format: Base64 encoded RSA private key."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"config.yaml"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains configuration settings for the Bacalhau node."),(0,i.kt)("li",{parentName:"ul"},"Format: YAML.")))),(0,i.kt)("h4",{id:"directories"},"Directories"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv-compute"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/etcd-io/bbolt"},"BoltDB")," ",(0,i.kt)("inlineCode",{parentName:"li"},"executions.db")," database, which aids the Compute node in state persistence. Additionally, the ",(0,i.kt)("inlineCode",{parentName:"li"},"jobStats.json")," file records the Compute Node's completed jobs tally."),(0,i.kt)("li",{parentName:"ul"},"Note: The segment ",(0,i.kt)("inlineCode",{parentName:"li"},"QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv")," is a unique NodeID for each Bacalhau node, derived from the ",(0,i.kt)("inlineCode",{parentName:"li"},"libp2p_private_key"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv-requester"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Contains the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/etcd-io/bbolt"},"BoltDB")," ",(0,i.kt)("inlineCode",{parentName:"li"},"jobs.db")," database for the Requester node's state persistence."),(0,i.kt)("li",{parentName:"ul"},"Note: NodeID derivation is similar to the Compute directory."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"executor_storages"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Storage for data handled by Bacalhau storage drivers."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"plugins"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Houses binaries that allow the Compute node to execute specific tasks."),(0,i.kt)("li",{parentName:"ul"},"Note: This feature is currently experimental and isn't active during standard node operations.")))),(0,i.kt)("h2",{id:"configuring-a-bacalhau-node"},"Configuring a Bacalhau Node"),(0,i.kt)("p",null,"Within a ",(0,i.kt)("inlineCode",{parentName:"p"},".bacalhau")," repository, a ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file may be present. This file serves as the configuration source for the bacalhau node and adheres to the YAML format."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," On the initialization of a new ",(0,i.kt)("inlineCode",{parentName:"p"},".bacalhau")," repository, Bacalhau will generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file. However, if Bacalhau is opening an existing repository, it will not create this file if it's absent."),(0,i.kt)("p",null," Although the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file is optional, its presence allows Bacalhau to load custom configurations; otherwise, Bacalhau is configured with built-in default values, environment variables and command line flags."),(0,i.kt)("p",null,"Modifications to the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file will not be dynamically loaded by the Bacalhau node. A restart of the node is required for any changes to take effect. Bacalhau determines its configuration based on the following precedence order, with each item superseding the subsequent:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Command-line Flag"),(0,i.kt)("li",{parentName:"ol"},"Environment Variable"),(0,i.kt)("li",{parentName:"ol"},"Config File"),(0,i.kt)("li",{parentName:"ol"},"Defaults")),(0,i.kt)("h3",{id:"relationship-between-configyaml-and-bacalhau-environment-variables"},"Relationship Between ",(0,i.kt)("inlineCode",{parentName:"h3"},"config.yaml")," and Bacalhau Environment Variables"),(0,i.kt)("p",null,"Bacalhau establishes a direct relationship between the value-bearing keys within the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml")," file and corresponding environment variables. For these keys that have no further sub-keys, the environment variable name is constructed by capitalizing each segment of the key, and then joining them with underscores, prefixed with ",(0,i.kt)("inlineCode",{parentName:"p"},"BACALHAU_"),"."),(0,i.kt)("p",null,"For example, a YAML key with the path ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.IPFS.Connect")," translates to the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"BACALHAU_NODE_IPFS_CONNECT")," and is represented in a file like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Node:\n    IPFS:\n        Connect: value\n")),(0,i.kt)("p",null,"There is no corresponding environment variable for either ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Node.IPFS"),".\nConfig values may also have other environment variables that set them for\nsimplicity or to maintain backwards compatibility."),(0,i.kt)("h3",{id:"environments"},"Environments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Bacalhau leverages the ",(0,i.kt)("inlineCode",{parentName:"p"},"BACALHAU_ENVIRONMENT")," environment variable to determine the specific environment configuration when initializing a repository. Notably, if a ",(0,i.kt)("inlineCode",{parentName:"p"},".bacalhau")," repository has already been initialized, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BACALHAU_ENVIRONMENT")," setting will be ignored."),(0,i.kt)("p",{parentName:"li"},"By default, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"BACALHAU_ENVIRONMENT")," variable is not explicitly set by the user, Bacalhau will adopt the ",(0,i.kt)("inlineCode",{parentName:"p"},"production")," environment settings."),(0,i.kt)("p",{parentName:"li"},"Below is a breakdown of the configurations associated with each environment:"),(0,i.kt)("h4",{parentName:"li",id:"1-production-public-network"},"1. Production (public network)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Environment Variable:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"BACALHAU_ENVIRONMENT=production")),(0,i.kt)("li",{parentName:"ul"},"Configurations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node.ClientAPI.Host"),": ",(0,i.kt)("inlineCode",{parentName:"li"},'"bootstrap.production.bacalhau.org"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node.Client.API.Host"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"1234")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"...other configurations specific to this environment..."))))),(0,i.kt)("h4",{parentName:"li",id:"2-staging-staging-network"},"2. Staging (staging network)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Environment Variable:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"BACALHAU_ENVIRONMENT=staging")),(0,i.kt)("li",{parentName:"ul"},"Configurations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node.ClientAPI.Host"),": ",(0,i.kt)("inlineCode",{parentName:"li"},'"bootstrap.staging.bacalhau.org"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node.Client.API.Host"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"1234")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"...other configurations specific to this environment..."))))),(0,i.kt)("h4",{parentName:"li",id:"3-development-development-network"},"3. Development (development network)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Environment Variable:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"BACALHAU_ENVIRONMENT=development")),(0,i.kt)("li",{parentName:"ul"},"Configurations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node.ClientAPI.Host"),": ",(0,i.kt)("inlineCode",{parentName:"li"},'"bootstrap.development.bacalhau.org"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node.Client.API.Host"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"1234")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"...other configurations specific to this environment..."))))),(0,i.kt)("h4",{parentName:"li",id:"4-local-private-or-local-networks"},"4. Local (private or local networks)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Environment Variable:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"BACALHAU_ENVIRONMENT=local")),(0,i.kt)("li",{parentName:"ul"},"Configurations:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node.ClientAPI.Host"),": ",(0,i.kt)("inlineCode",{parentName:"li"},'"0.0.0.0"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node.Client.API.Host"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"1234")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"...other configurations specific to this environment..."))))),(0,i.kt)("hr",{parentName:"li"}),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note"),": The above configurations provided for each environment are not exhaustive. Consult the specific environment documentation for a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/tree/main/pkg/config/configenv"},"comprehensive list of configurations"),"."))),(0,i.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,i.kt)("h3",{id:"how-to-initialize-a-bacalhau-server-for-a-local-private-network"},"How to initialize a Bacalhau Server for a local private network"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ env BACALHAU_ENVIRONMENT=local ./bin/darwin_arm64/bacalhau serve\nINF pkg/repo/fs.go:187 > Initializing repo at '/Users/frrist/.bacalhau' for environment 'local'\n")),(0,i.kt)("h3",{id:"how-to-initialize-a-bacalhau-server-with-a-custom-repo-path"},"How to initialize a Bacalhau Server with a custom repo path"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ bacalhau --repo=/path/to/repo serve\nINF pkg/repo/fs.go:187 > Initializing repo at '/path/to/repo' for environment 'production'\n")),(0,i.kt)("p",null,"Or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ export BACALHAU_DIR=/path/to/repo\n$ bacalhau serve\nINF pkg/repo/fs.go:187 > Initializing repo at '/path/to/repo' for environment 'production'\n")),(0,i.kt)("h3",{id:"how-to-start-a-bacalhau-server-with-debug-logs"},"How to start a Bacalhau Server with DEBUG logs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ env LOG_LEVEL=debug ./bin/darwin_arm64/bacalhau serve\nDBG pkg/system/environment.go:53 > Defaulting to production environment: os.Args: [./bin/darwin_arm64/bacalhau serve]\n\n")))}m.isMDXComponent=!0}}]);