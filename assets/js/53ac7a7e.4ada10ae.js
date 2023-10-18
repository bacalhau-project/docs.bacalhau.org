"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6773],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_label:"SpecConfig"},o="SpecConfig Specification",c={unversionedId:"references/job-specification/spec-config",id:"references/job-specification/spec-config",title:"SpecConfig Specification",description:"SpecConfig provides a unified structure to specify configurations for various components in Bacalhau, including engines, publishers, and input sources. Its flexible design allows seamless integration with multiple systems like Docker, WebAssembly (Wasm), AWS S3, and local directories, among others.",source:"@site/docs/references/job-specification/spec-config.md",sourceDirName:"references/job-specification",slug:"/references/job-specification/spec-config",permalink:"/references/job-specification/spec-config",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/job-specification/spec-config.md",tags:[],version:"current",lastUpdatedAt:1697635948,formattedLastUpdatedAt:"Oct 18, 2023",frontMatter:{sidebar_label:"SpecConfig"},sidebar:"documentationSidebar",previous:{title:"ResultPath",permalink:"/references/job-specification/result-path"},next:{title:"State",permalink:"/references/job-specification/state"}},s={},p=[{value:"<code>SpecConfig</code> Parameters",id:"specconfig-parameters",level:2},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Docker Engine",id:"docker-engine",level:3},{value:"S3 Publisher",id:"s3-publisher",level:3},{value:"Local Directory Input Source",id:"local-directory-input-source",level:3}],l={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"specconfig-specification"},"SpecConfig Specification"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SpecConfig")," provides a unified structure to specify configurations for various components in Bacalhau, including engines, publishers, and input sources. Its flexible design allows seamless integration with multiple systems like Docker, WebAssembly (Wasm), AWS S3, and local directories, among others."),(0,a.kt)("h2",{id:"specconfig-parameters"},(0,a.kt)("inlineCode",{parentName:"h2"},"SpecConfig")," Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Type")," ",(0,a.kt)("inlineCode",{parentName:"p"},"(string : <required>)"),": Specifies the type of the configuration. Examples include ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm")," for execution engines, ",(0,a.kt)("inlineCode",{parentName:"p"},"S3")," for input sources and publishers, etc.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Params")," ",(0,a.kt)("inlineCode",{parentName:"p"},"(map[string]any : <optional>)"),": A set of key-value pairs that provide the specific configurations for the chosen type. The keys and values are flexible and depend on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Type"),". For instance, parameters for a Docker engine might include image name and version, while an S3 publisher would require configurations like the bucket name and AWS region. If not provided, it defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"."))),(0,a.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,a.kt)("p",null,"Here are a few hypothetical examples to demonstrate how you might define ",(0,a.kt)("inlineCode",{parentName:"p"},"SpecConfig")," for different components:"),(0,a.kt)("h3",{id:"docker-engine"},"Docker Engine"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Type": "docker",\n  "Params": {\n    "Image": "my_app_image",\n    "Entrypoint": "my_app_entrypoint",\n  }\n}\n')),(0,a.kt)("p",null,"Full Docker spec can be found ",(0,a.kt)("a",{parentName:"p",href:"../other-specifications/engines/docker"},"here"),"."),(0,a.kt)("h3",{id:"s3-publisher"},"S3 Publisher"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Type": "s3",\n  "Params": {\n    "Bucket": "my_bucket",\n    "Region": "us-west-1"\n  }\n}\n')),(0,a.kt)("p",null,"Full S3 Publisher can be found ",(0,a.kt)("a",{parentName:"p",href:"../other-specifications/publishers/s3"},"here"),"."),(0,a.kt)("h3",{id:"local-directory-input-source"},"Local Directory Input Source"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Type": "localDirectory",\n  "Params": {\n    "SourcePath": "/path/to/local/directory",\n    "ReadWrite": true,\n  }\n}\n')),(0,a.kt)("p",null,"Full local source can be found ",(0,a.kt)("a",{parentName:"p",href:"../other-specifications/sources/local"},"here"),"."),(0,a.kt)("p",null,"Remember, the exact keys and values in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Params")," map will vary depending on the specific requirements of the component being configured. Always refer to the individual component's documentation to understand the available parameters."))}f.isMDXComponent=!0}}]);