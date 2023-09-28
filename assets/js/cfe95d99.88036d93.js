"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[44],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3983:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_label:"S3"},s="S3 Publisher Specification",l={unversionedId:"references/other-specifications/publishers/s3",id:"references/other-specifications/publishers/s3",title:"S3 Publisher Specification",description:"Bacalhau's S3 Publisher provides users with a secure and efficient method to publish task results to any S3-compatible storage service. This publisher supports not just AWS S3, but other S3-compatible services offered by cloud providers like Google Cloud Storage and Azure Blob Storage, as well as open-source options like MinIO. The integration is designed to be highly flexible, ensuring users can choose the storage option that aligns with their needs, privacy preferences, and operational requirements.",source:"@site/docs/references/other-specifications/publishers/s3.md",sourceDirName:"references/other-specifications/publishers",slug:"/references/other-specifications/publishers/s3",permalink:"/references/other-specifications/publishers/s3",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/other-specifications/publishers/s3.md",tags:[],version:"current",lastUpdatedAt:1695912575,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{sidebar_label:"S3"},sidebar:"documentationSidebar",previous:{title:"IPFS",permalink:"/references/other-specifications/publishers/ipfs"},next:{title:"Sources",permalink:"/category/sources"}},o={},p=[{value:"<code>S3 Publisher</code> Parameters",id:"s3-publisher-parameters",level:2},{value:"Publishing Flexibility",id:"publishing-flexibility",level:3},{value:"Published Result Spec",id:"published-result-spec",level:3},{value:"Dynamic Naming for Published S3 Objects",id:"dynamic-naming-for-published-s3-objects",level:3},{value:"Example",id:"example",level:3},{value:"Example (Imperative/CLI)",id:"example-imperativecli",level:3},{value:"Credential Requirements",id:"credential-requirements",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"s3-publisher-specification"},"S3 Publisher Specification"),(0,i.kt)("p",null,"Bacalhau's S3 Publisher provides users with a secure and efficient method to publish task results to any S3-compatible storage service. This publisher supports not just AWS S3, but other S3-compatible services offered by cloud providers like Google Cloud Storage and Azure Blob Storage, as well as open-source options like MinIO. The integration is designed to be highly flexible, ensuring users can choose the storage option that aligns with their needs, privacy preferences, and operational requirements."),(0,i.kt)("h2",{id:"s3-publisher-parameters"},(0,i.kt)("inlineCode",{parentName:"h2"},"S3 Publisher")," Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bucket")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(string: <required>)"),": The name of the S3 bucket where the task results will be stored."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(string: <required>)"),": The object key within the specified bucket where the task results will be stored."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Endpoint")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(string: <optional>)"),": The endpoint URL of the S3 service (useful for S3-compatible services)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Region")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(string: <optional>)"),": The region where the S3 bucket is located."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Compress")," ",(0,i.kt)("inlineCode",{parentName:"li"},"(bool: false)"),": Indicates whether the task results should be compressed before storage.")),(0,i.kt)("h3",{id:"publishing-flexibility"},"Publishing Flexibility"),(0,i.kt)("p",null,"The S3 Publisher is adept at handling both individual files and full directories. Each file within a directory is uploaded as a separate S3 object. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"Compress")," option is enabled, the entire directory is compressed into a single object, enhancing efficiency and reducing storage requirements."),(0,i.kt)("h3",{id:"published-result-spec"},"Published Result Spec"),(0,i.kt)("p",null,"Results published to S3 are stored as objects that can also be used as inputs to other Bacalhau jobs by using ",(0,i.kt)("a",{parentName:"p",href:"../sources/s3"},"S3 Input Source"),". The published result specification includes the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bucket"),": Confirms the name of the bucket containing the stored results."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key"),": Identifies the unique object key within the specified bucket."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Region"),": Notes the AWS region of the bucket."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Endpoint"),": Records the endpoint URL for S3-compatible storage services."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"VersionID"),": The version ID of the stored object, enabling versioning support for retrieving specific versions of stored data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ChecksumSHA256"),": The SHA-256 checksum of the stored object, providing a method to verify data integrity.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"ChecksumSHA256")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"VersionID")," are only returned when the ",(0,i.kt)("inlineCode",{parentName:"p"},"Compress")," option is enabled, offering users a method to verify the integrity of the compressed data and to track different versions of the stored objects."),(0,i.kt)("h3",{id:"dynamic-naming-for-published-s3-objects"},"Dynamic Naming for Published S3 Objects"),(0,i.kt)("p",null,"With the S3 Publisher in Bacalhau, you have the flexibility to use dynamic naming for the objects you publish to S3. This allows you to incorporate specific job and execution details into the object key, making it easier to trace, manage, and organize your published artifacts."),(0,i.kt)("p",null,"Bacalhau supports the following dynamic placeholders that will be replaced with their actual values during the publishing process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{executionID}"),": Replaced with the specific execution ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{jobID}"),": Replaced with the ID of the job."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{date}"),": Replaced with the current date in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"YYYYMMDD"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{time}"),": Replaced with the current time in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"HHMMSS"),".")),(0,i.kt)("p",null,"Additionally, if you are publishing an archive and the object key does not end with ",(0,i.kt)("inlineCode",{parentName:"p"},".tar.gz"),", it will be automatically appended. Conversely, if you're not archiving and the key doesn't end with a ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", a trailing slash will be added."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Imagine you've specified the following object key pattern for publishing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"results/{jobID}/{date}/{time}/\n")),(0,i.kt)("p",null,"Given a job with ID ",(0,i.kt)("inlineCode",{parentName:"p"},"abc123"),", executed on ",(0,i.kt)("inlineCode",{parentName:"p"},"2023-09-26")," at ",(0,i.kt)("inlineCode",{parentName:"p"},"14:05:30"),", the published object key would be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"results/abc123/20230926/140530/\n")),(0,i.kt)("p",null,"This dynamic naming feature offers a powerful way to create organized, intuitive naming conventions for your Bacalhau published objects in S3."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Here\u2019s an example YAML configuration that outlines the process of using the S3 Publisher with Bacalhau:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'Publisher:\n  Type: "s3"\n  Params:\n    Bucket: "my-task-results"\n    Key: "task123/result.tar.gz"\n    Endpoint: "https://s3.us-west-2.amazonaws.com"\n    Compress: true\n')),(0,i.kt)("p",null,"In this configuration, task results will be published to the specified S3 bucket and object key. If you\u2019re using an S3-compatible service, simply update the ",(0,i.kt)("inlineCode",{parentName:"p"},"Endpoint")," parameter with the appropriate URL."),(0,i.kt)("p",null,"The results will be compressed into a single object, and the published result specification will look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'PublishedResult:\n  Type: "s3"\n  Params:\n    Bucket: "my-task-results"\n    Key: "task123/result.tar.gz"\n    Endpoint: "https://s3.us-west-2.amazonaws.com"\n    Region: "us-west-2"\n    ChecksumSHA256: "0x9a3a..."\n    VersionID: "3/L4kqtJlcpXroDTDmJ+rmDbwQaHWyOb..."\n')),(0,i.kt)("h3",{id:"example-imperativecli"},"Example (Imperative/CLI)"),(0,i.kt)("p",null,"The Bacalhau command-line interface (CLI) provides an imperative approach to specify the S3 Publisher. Below are a few examples showcasing how to define an S3 publisher using CLI commands:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Basic Docker job writing to S3 with default configurations"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run -p s3://bucket/key ubuntu ...\n")),(0,i.kt)("p",{parentName:"li"},"This command writes to the S3 bucket using default endpoint and region settings without compressing the result.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Docker job writing to S3 with a specific endpoint and region"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run -p s3://bucket/key,opt=endpoint=http://s3.example.com,opt=region=us-east-1 ubuntu ...\n")),(0,i.kt)("p",{parentName:"li"},"This command specifies a unique endpoint and region for the S3 bucket.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Docker job writing a single archived file to S3"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run -p s3://bucket/key,opt=compress=true ubuntu ...\n")),(0,i.kt)("p",{parentName:"li"},"This command compresses the result into a single archived file before writing it to the S3 bucket.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Using naming placeholders"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run -p s3://bucket/result-{date}-{jobID} ubuntu ...\n")),(0,i.kt)("p",{parentName:"li"},"Dynamic naming placeholders like ",(0,i.kt)("inlineCode",{parentName:"p"},"{date}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{jobID}")," allow for organized naming structures, automatically replacing these placeholders with appropriate values upon execution."))),(0,i.kt)("p",null,"Remember to replace the placeholders like ",(0,i.kt)("inlineCode",{parentName:"p"},"bucket"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"key"),", and other parameters with your specific values. These CLI commands offer a quick and customizable way to submit jobs and specify how the results should be published to S3."),(0,i.kt)("h3",{id:"credential-requirements"},"Credential Requirements"),(0,i.kt)("p",null,"To support this storage provider, no extra dependencies are necessary. However, valid AWS credentials are essential to sign the requests. The storage provider employs the default credentials chain to retrieve credentials, primarily sourcing them from:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Environment variables"),": AWS credentials can be specified using ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," environment variables.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Credentials file"),": The credentials file typically located at ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials")," can also be used to fetch the necessary AWS credentials.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"IAM Roles for Amazon EC2 Instances"),": If you're running your tasks within an Amazon EC2 instance, IAM roles can be utilized to provide the necessary permissions and credentials."))),(0,i.kt)("p",null,"For a more detailed overview on AWS credential management and other ways to provide these credentials, please refer to the AWS official documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/sdkref/latest/guide/standardized-credentials.html"},"standardized credentials"),"."))}d.isMDXComponent=!0}}]);