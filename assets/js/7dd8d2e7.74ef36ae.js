"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6627],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),i=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},c=function(e){var n=i(e.components);return t.createElement(s.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=i(a),d=l,h=p["".concat(s,".").concat(d)]||p[d]||_[d]||r;return a?t.createElement(h,u(u({ref:n},c),{},{components:a})):t.createElement(h,u({ref:n},c))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,u=new Array(r);u[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var i=2;i<r;i++)u[i]=a[i];return t.createElement.apply(null,u)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6104:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>_,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var t=a(7462),l=(a(7294),a(3905));const r={sidebar_label:"Sparkov-Data-Generation",sidebar_position:2},u="Generate Synthetic Data using Sparkov Data Generation technique",o={unversionedId:"examples/workload-onboarding/Sparkov-Data-Generation/index",id:"examples/workload-onboarding/Sparkov-Data-Generation/index",title:"Generate Synthetic Data using Sparkov Data Generation technique",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/Sparkov-Data-Generation/index.md",sourceDirName:"examples/workload-onboarding/Sparkov-Data-Generation",slug:"/examples/workload-onboarding/Sparkov-Data-Generation/",permalink:"/examples/workload-onboarding/Sparkov-Data-Generation/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/Sparkov-Data-Generation/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Sparkov-Data-Generation",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Python - Hello World",permalink:"/examples/workload-onboarding/trivial-python/"},next:{title:"Python - Pandas",permalink:"/examples/workload-onboarding/python-pandas/"}},s={},i=[{value:"Introduction",id:"introduction",level:2},{value:"Running Locally\u200b",id:"running-locally",level:2},{value:"Building a Docker container (Optional)",id:"building-a-docker-container-optional",level:3},{value:"Dockerfile",id:"dockerfile",level:3},{value:"Running on Bacalhau",id:"running-on-bacalhau",level:2}],c={toc:i};function _(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"generate-synthetic-data-using-sparkov-data-generation-technique"},"Generate Synthetic Data using Sparkov Data Generation technique"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/Sparkov-Data-Generation/index.ipynb"},(0,l.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/Sparkov-Data-Generation/index.ipynb"},(0,l.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null," A synthetic Dataset is generated by algorithms or simulations\nwhich has similar characteristics of real world data. Collecting real world data especially the data which contains sensitive user data like credit card information is not possible due to security and privacy concerns, If a data scientist needs to train  a model to detect credit fraud\nThey can use synthetically generated data instead of using the real data without compromising privacy of users"),(0,l.kt)("p",null,"The advantage of using bacalhau is that you can generate terabytes of synthetic data without\nHaving to install any dependencies or store the data locally"),(0,l.kt)("p",null,"In this example we will generate synthetic credit card transaction data using the Sparkov program. and store the results to IPFS"),(0,l.kt)("h2",{id:"running-locally"},"Running Locally\u200b"),(0,l.kt)("p",null,"Installing dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/js-ts/Sparkov_Data_Generation/\npip3 install -r Sparkov_Data_Generation/requirements.txt\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Looking in indexes: https://pypi.org/simple, https://us-python.pkg.dev/colab-wheels/public/simple/\nCollecting Faker==13.12.0\n  Downloading Faker-13.12.0-py3-none-any.whl (1.6 MB)\nRequirement already satisfied: numpy==1.21.6 in /usr/local/lib/python3.7/dist-packages (from -r Sparkov_Data_Generation/requirements.txt (line 2)) (1.21.6)\nRequirement already satisfied: typing-extensions>=3.10.0.2 in /usr/local/lib/python3.7/dist-packages (from Faker==13.12.0->-r Sparkov_Data_Generation/requirements.txt (line 1)) (4.1.1)\nRequirement already satisfied: python-dateutil>=2.4 in /usr/local/lib/python3.7/dist-packages (from Faker==13.12.0->-r Sparkov_Data_Generation/requirements.txt (line 1)) (2.8.2)\nRequirement already satisfied: six>=1.5 in /usr/local/lib/python3.7/dist-packages (from python-dateutil>=2.4->Faker==13.12.0->-r Sparkov_Data_Generation/requirements.txt (line 1)) (1.15.0)\nInstalling collected packages: Faker\nSuccessfully installed Faker-13.12.0\n\n\nCloning into 'Sparkov_Data_Generation'...\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"%cd Sparkov_Data_Generation\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/content/Sparkov_Data_Generation\n")),(0,l.kt)("p",null,"Creating a tmp directory to store the outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ../outputs\n")),(0,l.kt)("p",null,"Running the script"),(0,l.kt)("p",null,"Parameters"),(0,l.kt)("p",null,"-n  Number of customers to generate"),(0,l.kt)("p",null,"-o path to store the outputs"),(0,l.kt)("p",null,' Start date "01-01-2022" '),(0,l.kt)("p",null,' End date "10-01-2022"'),(0,l.kt)("p",null,"To see the full list of options, use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python datagen.py -h\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'usage: datagen.py [-h] [-n NB_CUSTOMERS] [-seed [SEED]] [-config [CONFIG]]\n                  [-c CUSTOMER_FILE] [-o OUTPUT]\n                  start_date end_date\n\nCustomer Generator\n\npositional arguments:\n  start_date            Transactions start date\n  end_date              Transactions start date\n\noptional arguments:\n  -h, --help            show this help message and exit\n  -n NB_CUSTOMERS, --nb_customers NB_CUSTOMERS\n                        Number of customers to generate\n  -seed [SEED]          Random generator seed\n  -config [CONFIG]      Profile config file (typically\n                        profiles/main_config.json")\n  -c CUSTOMER_FILE, --customer_file CUSTOMER_FILE\n                        Customer file generated with the datagen_customer\n                        script\n  -o OUTPUT, --output OUTPUT\n                        Output Folder path\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'python3 datagen.py -n 1000 -o ../outputs "01-01-2022" "10-01-2022"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Num CPUs: 2\nprofile: adults_50up_male_urban.json, chunk size: 200,                 chunk: 0-199\nprofile: adults_50up_male_urban.json, chunk size: 200,                 chunk: 200-399\nprofile: adults_50up_male_urban.json, chunk size: 200,                 chunk: 400-599\nprofile: adults_50up_male_urban.json, chunk size: 200,                 chunk: 600-799\nprofile: adults_50up_male_urban.json, chunk size: 200,                 chunk: 800-999\nprofile: adults_50up_female_urban.json, chunk size: 200,                 chunk: 0-199\nprofile: adults_50up_female_urban.json, chunk size: 200,                 chunk: 200-399\nprofile: adults_50up_female_urban.json, chunk size: 200,                 chunk: 400-599\nprofile: adults_50up_female_urban.json, chunk size: 200,                 chunk: 600-799\nprofile: adults_50up_female_urban.json, chunk size: 200,                 chunk: 800-999\nprofile: adults_50up_male_rural.json, chunk size: 200,                 chunk: 0-199\nprofile: adults_50up_male_rural.json, chunk size: 200,                 chunk: 200-399\nprofile: adults_50up_male_rural.json, chunk size: 200,                 chunk: 400-599\nprofile: adults_50up_male_rural.json, chunk size: 200,                 chunk: 600-799\nprofile: adults_50up_male_rural.json, chunk size: 200,                 chunk: 800-999\nprofile: adults_50up_female_rural.json, chunk size: 200,                 chunk: 0-199\nprofile: adults_50up_female_rural.json, chunk size: 200,                 chunk: 200-399\nprofile: adults_50up_female_rural.json, chunk size: 200,                 chunk: 400-599\nprofile: adults_50up_female_rural.json, chunk size: 200,                 chunk: 600-799\nprofile: adults_50up_female_rural.json, chunk size: 200,                 chunk: 800-999\nprofile: adults_2550_male_urban.json, chunk size: 200,                 chunk: 0-199\nprofile: adults_2550_male_urban.json, chunk size: 200,                 chunk: 200-399\nprofile: adults_2550_male_urban.json, chunk size: 200,                 chunk: 400-599\nprofile: adults_2550_male_urban.json, chunk size: 200,                 chunk: 600-799\nprofile: adults_2550_male_urban.json, chunk size: 200,                 chunk: 800-999\nprofile: adults_2550_female_urban.json, chunk size: 200,                 chunk: 0-199\nprofile: adults_2550_female_urban.json, chunk size: 200,                 chunk: 200-399\nprofile: adults_2550_female_urban.json, chunk size: 200,                 chunk: 400-599\nprofile: adults_2550_female_urban.json, chunk size: 200,                 chunk: 600-799\nprofile: adults_2550_female_urban.json, chunk size: 200,                 chunk: 800-999\nprofile: adults_2550_male_rural.json, chunk size: 200,                 chunk: 0-199\nprofile: adults_2550_male_rural.json, chunk size: 200,                 chunk: 200-399\nprofile: adults_2550_male_rural.json, chunk size: 200,                 chunk: 400-599\nprofile: adults_2550_male_rural.json, chunk size: 200,                 chunk: 600-799\nprofile: adults_2550_male_rural.json, chunk size: 200,                 chunk: 800-999\nprofile: adults_2550_female_rural.json, chunk size: 200,                 chunk: 0-199\nprofile: adults_2550_female_rural.json, chunk size: 200,                 chunk: 200-399\nprofile: adults_2550_female_rural.json, chunk size: 200,                 chunk: 400-599\nprofile: adults_2550_female_rural.json, chunk size: 200,                 chunk: 600-799\nprofile: adults_2550_female_rural.json, chunk size: 200,                 chunk: 800-999\nprofile: young_adults_male_urban.json, chunk size: 200,                 chunk: 0-199\nprofile: young_adults_male_urban.json, chunk size: 200,                 chunk: 200-399\nprofile: young_adults_male_urban.json, chunk size: 200,                 chunk: 400-599\nprofile: young_adults_male_urban.json, chunk size: 200,                 chunk: 600-799\nprofile: young_adults_male_urban.json, chunk size: 200,                 chunk: 800-999\nprofile: young_adults_female_urban.json, chunk size: 200,                 chunk: 0-199\nprofile: young_adults_female_urban.json, chunk size: 200,                 chunk: 200-399\nprofile: young_adults_female_urban.json, chunk size: 200,                 chunk: 400-599\nprofile: young_adults_female_urban.json, chunk size: 200,                 chunk: 600-799\nprofile: young_adults_female_urban.json, chunk size: 200,                 chunk: 800-999\nprofile: young_adults_male_rural.json, chunk size: 200,                 chunk: 0-199\nprofile: young_adults_male_rural.json, chunk size: 200,                 chunk: 200-399\nprofile: young_adults_male_rural.json, chunk size: 200,                 chunk: 400-599\nprofile: young_adults_male_rural.json, chunk size: 200,                 chunk: 600-799\nprofile: young_adults_male_rural.json, chunk size: 200,                 chunk: 800-999\nprofile: young_adults_female_rural.json, chunk size: 200,                 chunk: 0-199\nprofile: young_adults_female_rural.json, chunk size: 200,                 chunk: 200-399\nprofile: young_adults_female_rural.json, chunk size: 200,                 chunk: 400-599\nprofile: young_adults_female_rural.json, chunk size: 200,                 chunk: 600-799\nprofile: young_adults_female_rural.json, chunk size: 200,                 chunk: 800-999\n")),(0,l.kt)("h3",{id:"building-a-docker-container-optional"},"Building a Docker container (Optional)"),(0,l.kt)("p",null,"Note: you can skip this section entirely and directly go to running on bacalhau"),(0,l.kt)("p",null,"To use Bacalhau, you need to package your code in an appropriate format. The developers have already pushed a container for you to use, but if you want to build your own, you can follow the steps below. You can view a ",(0,l.kt)("a",{parentName:"p",href:"/examples/workload-onboarding/custom-containers/"},"dedicated container example")," in the documentation."),(0,l.kt)("h3",{id:"dockerfile"},"Dockerfile"),(0,l.kt)("p",null,"In this step, you will create a ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to create an image. The ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is a text document that contains the commands used to assemble the image. First, create the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"FROM python:3.8\n\nRUN apt update && apt install git\n\nRUN git clone https://github.com/js-ts/Sparkov_Data_Generation/\n\nWORKDIR /Sparkov_Data_Generation/\n\nRUN pip3 install -r requirements.txt\n")),(0,l.kt)("p",null,"To Build the docker container run the docker build command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker build -t hub-user/repo-name:tag .\n")),(0,l.kt)("p",null,"Please replace"),(0,l.kt)("p",null,"hub-user with your docker hub username, If you don\u2019t have a docker hub account Follow these instructions to create docker account, and use the username of the account you created"),(0,l.kt)("p",null,"repo-name This is the name of the container, you can name it anything you want"),(0,l.kt)("p",null,"tag This is not required but you can use the latest tag"),(0,l.kt)("p",null,"After you have build the container, the next step is to test it locally and then push it docker hub"),(0,l.kt)("p",null,"Now you can push this repository to the registry designated by its name or tag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," docker push hub-user/repo-name:tag\n")),(0,l.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,l.kt)("h2",{id:"running-on-bacalhau"},"Running on Bacalhau"),(0,l.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,l.kt)("p",null,"This command is similar to what we have run locally "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.3.11 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.3.11\nServer Version: v0.3.11\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'bacalhau docker run \\\n--id-only \\\n--wait \\\njsacex/sparkov-data-generation \\\n--  python3 datagen.py -n 1000 -o ../outputs "01-01-2022" "10-01-2022"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"env: JOB_ID=d986b432-9af6-4463-93d2-362dbccb8379\n")),(0,l.kt)("p",null,"Running the commands will output a UUID that represents the job that was created. You can check the status of the job with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 12:03:03 \x1b[0m\x1b[97;40m d986b432 \x1b[0m\x1b[97;40m Docker jsacex/sparko... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmQSfVLAZGoy8K... \x1b[0m\n")),(0,l.kt)("p",null,'Where it says "',(0,l.kt)("inlineCode",{parentName:"p"},"Completed "),'", that means the job is done, and we can get the results.'),(0,l.kt)("p",null,"To find out more information about your job, run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID}\n")),(0,l.kt)("p",null,"If you see that the job has completed and there are no errors, then you can download the results with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Fetching results of job 'd986b432-9af6-4463-93d2-362dbccb8379'...\nResults for job 'd986b432-9af6-4463-93d2-362dbccb8379' have been written to...\nresults\n\n\n2022/11/12 12:05:30 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n")),(0,l.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls results/combined_results/outputs\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"adults_2550_female_rural_000-199.csv\nadults_2550_female_rural_200-399.csv\nadults_2550_female_rural_400-599.csv\nadults_2550_female_rural_600-799.csv\nadults_2550_female_rural_800-999.csv\nadults_2550_female_urban_000-199.csv\nadults_2550_female_urban_200-399.csv\nadults_2550_female_urban_400-599.csv\nadults_2550_female_urban_600-799.csv\nadults_2550_female_urban_800-999.csv\nadults_2550_male_rural_000-199.csv\nadults_2550_male_rural_200-399.csv\nadults_2550_male_rural_400-599.csv\nadults_2550_male_rural_600-799.csv\nadults_2550_male_rural_800-999.csv\nadults_2550_male_urban_000-199.csv\nadults_2550_male_urban_200-399.csv\nadults_2550_male_urban_400-599.csv\nadults_2550_male_urban_600-799.csv\nadults_2550_male_urban_800-999.csv\nadults_50up_female_rural_000-199.csv\nadults_50up_female_rural_200-399.csv\nadults_50up_female_rural_400-599.csv\nadults_50up_female_rural_600-799.csv\nadults_50up_female_rural_800-999.csv\nadults_50up_female_urban_000-199.csv\nadults_50up_female_urban_200-399.csv\nadults_50up_female_urban_400-599.csv\nadults_50up_female_urban_600-799.csv\nadults_50up_female_urban_800-999.csv\nadults_50up_male_rural_000-199.csv\nadults_50up_male_rural_200-399.csv\nadults_50up_male_rural_400-599.csv\nadults_50up_male_rural_600-799.csv\nadults_50up_male_rural_800-999.csv\nadults_50up_male_urban_000-199.csv\nadults_50up_male_urban_200-399.csv\nadults_50up_male_urban_400-599.csv\nadults_50up_male_urban_600-799.csv\nadults_50up_male_urban_800-999.csv\ncustomers.csv\nyoung_adults_female_rural_000-199.csv\nyoung_adults_female_rural_200-399.csv\nyoung_adults_female_rural_400-599.csv\nyoung_adults_female_rural_600-799.csv\nyoung_adults_female_rural_800-999.csv\nyoung_adults_female_urban_000-199.csv\nyoung_adults_female_urban_200-399.csv\nyoung_adults_female_urban_400-599.csv\nyoung_adults_female_urban_600-799.csv\nyoung_adults_female_urban_800-999.csv\nyoung_adults_male_rural_000-199.csv\nyoung_adults_male_rural_200-399.csv\nyoung_adults_male_rural_400-599.csv\nyoung_adults_male_rural_600-799.csv\nyoung_adults_male_rural_800-999.csv\nyoung_adults_male_urban_000-199.csv\nyoung_adults_male_urban_200-399.csv\nyoung_adults_male_urban_400-599.csv\nyoung_adults_male_urban_600-799.csv\nyoung_adults_male_urban_800-999.csv\n")))}_.isMDXComponent=!0}}]);