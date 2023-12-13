"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3805],{7815:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var n=a(5893),s=a(1151);const l={sidebar_label:"Label"},t="Labels Specification",c={id:"references/job-specification/label",title:"Labels Specification",description:"The Labels block within a Job specification plays a crucial role in Bacalhau, serving as a mechanism for filtering jobs. By attaching specific labels to jobs, users can quickly and effectively filter and manage jobs via both the Command Line Interface (CLI) and Application Programming Interface (API) based on various criteria.",source:"@site/docs/references/job-specification/label.md",sourceDirName:"references/job-specification",slug:"/references/job-specification/label",permalink:"/references/job-specification/label",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/job-specification/label.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{sidebar_label:"Label"},sidebar:"documentationSidebar",previous:{title:"InputSource",permalink:"/references/job-specification/input-source"},next:{title:"Meta",permalink:"/references/job-specification/meta"}},o={},r=[{value:"<code>Labels</code> Parameters",id:"labels-parameters",level:2},{value:"Filtering Operators",id:"filtering-operators",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Practical Applications",id:"practical-applications",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"labels-specification",children:"Labels Specification"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"Labels"})," block within a ",(0,n.jsx)(i.code,{children:"Job"})," specification plays a crucial role in Bacalhau, serving as a mechanism for filtering jobs. By attaching specific labels to jobs, users can quickly and effectively filter and manage jobs via both the Command Line Interface (CLI) and Application Programming Interface (API) based on various criteria."]}),"\n",(0,n.jsxs)(i.h2,{id:"labels-parameters",children:[(0,n.jsx)(i.code,{children:"Labels"})," Parameters"]}),"\n",(0,n.jsxs)(i.p,{children:["Labels are essentially key-value pairs attached to jobs, allowing for detailed categorizations and filtrations. Each label consists of a ",(0,n.jsx)(i.code,{children:"Key"})," and a ",(0,n.jsx)(i.code,{children:"Value"}),". These labels can be filtered using operators to pinpoint specific jobs fitting certain criteria."]}),"\n",(0,n.jsx)(i.h3,{id:"filtering-operators",children:"Filtering Operators"}),"\n",(0,n.jsx)(i.p,{children:"Jobs can be filtered using the following operators:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"in"}),": Checks if the key's value matches any within a specified list of values."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"notin"}),": Validates that the key's value isn\u2019t within a provided list of values."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"exists"}),": Checks for the presence of a specified key, regardless of its value."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"!"}),": Validates the absence of a specified key. (i.e., DoesNotExist)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"gt"}),": Checks if the key's value is greater than a specified value."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"lt"}),": Checks if the key's value is less than a specified value."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"= & =="}),": Used for exact match comparisons between the key\u2019s value and a specified value."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"!="}),": Validates that the key\u2019s value doesn't match a specified value."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,n.jsx)(i.p,{children:'Filter jobs with a label whose key is "environment" and value is "development":'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"bacalhau job list --labels 'environment=development'\n"})}),"\n",(0,n.jsx)(i.p,{children:'Filter jobs with a label whose key is "version" and value is greater than "2.0":'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"bacalhau job list --labels 'version gt 2.0'\n"})}),"\n",(0,n.jsx)(i.p,{children:'Filter jobs with a label "project" existing:'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"bacalhau job list --labels 'project'\n"})}),"\n",(0,n.jsx)(i.p,{children:'Filter jobs without a "project" label:'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"bacalhau job list --labels '!project'\n"})}),"\n",(0,n.jsx)(i.h3,{id:"practical-applications",children:"Practical Applications"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Job Management"}),": Enables efficient management of jobs by categorizing them based on distinct attributes or criteria."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Automation"}),": Facilitates the automation of job deployment and management processes by allowing scripts and tools to target specific categories of jobs."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Monitoring & Analytics"}),": Enhances monitoring and analytics by grouping jobs into meaningful categories, allowing for detailed insights and analysis."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(i.p,{children:["The ",(0,n.jsx)(i.code,{children:"Labels"})," block is instrumental in the enhanced management, filtering, and operation of jobs within Bacalhau. By understanding and utilizing the available operators and label parameters effectively, users can optimize their workflow, automate processes, and achieve detailed insights into their jobs."]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,i,a)=>{a.d(i,{Z:()=>c,a:()=>t});var n=a(7294);const s={},l=n.createContext(s);function t(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);