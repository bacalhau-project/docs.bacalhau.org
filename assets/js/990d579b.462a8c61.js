"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3159],{7657:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=o(5893),n=o(1151);const s={sidebar_label:"Job types",sidebar_position:0,title:"Job types",description:"The different job types available in Bacalhau"},a=void 0,r={id:"topic-guides/job-types",title:"Job types",description:"The different job types available in Bacalhau",source:"@site/docs/topic-guides/job-types.md",sourceDirName:"topic-guides",slug:"/topic-guides/job-types",permalink:"/topic-guides/job-types",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/topic-guides/job-types.md",tags:[],version:"current",lastUpdatedAt:1700058439,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:0,frontMatter:{sidebar_label:"Job types",sidebar_position:0,title:"Job types",description:"The different job types available in Bacalhau"},sidebar:"documentationSidebar",previous:{title:"Topic Guides",permalink:"/topic-guides/"},next:{title:"Data Ingestion",permalink:"/data-ingestion"}},c={},l=[{value:"Batch Jobs",id:"batch-jobs",level:2},{value:"Ops Jobs",id:"ops-jobs",level:2},{value:"Daemon Jobs",id:"daemon-jobs",level:2},{value:"Service Jobs",id:"service-jobs",level:2}];function d(e){const t={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Bacalhau has recently introduced different job types in v1.1,\nproviding more control and flexibility over the orchestration and scheduling of those jobs - depending on their type."}),"\n",(0,i.jsx)(t.p,{children:"Despite the differences in job types, all jobs benefit from core functionalities provided by Bacalhau, including:```"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Node selection"})," - the appropriate nodes are selected based on several criteria, including resource availability, priority and feedback from the nodes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Job monitoring"})," - jobs are monitored to ensure they complete, and that they stay in a healthy state."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Retries"})," - within limits, Bacalhau will retry certain jobs a set number of times should it fail to complete successfully when requested."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"batch-jobs",children:"Batch Jobs"}),"\n",(0,i.jsx)(t.p,{children:"Batch jobs are executed on demand, running on a specified number of Bacalhau nodes. These jobs either run until completion or until they reach a timeout. They are designed to carry out a single, discrete task before finishing."}),"\n",(0,i.jsx)(t.p,{children:"Ideal for intermittent yet intensive data dives, for instance performing computation over large datasets before publishing the response.  This approach eliminates the continuous processing overhead, focusing on specific, in-depth investigations and computation."}),"\n",(0,i.jsx)(t.h2,{id:"ops-jobs",children:"Ops Jobs"}),"\n",(0,i.jsx)(t.p,{children:"Similar to batch jobs, ops jobs have a broader reach. They are executed on all nodes that align with the job specification, but otherwise behave like batch jobs."}),"\n",(0,i.jsx)(t.p,{children:"Ops jobs are perfect for urgent investigations, granting direct access to logs on host machines, where previously you may have had to wait for the logs to arrive at a central locartion before being able to query them. They can also be used for delivering configuration files for other systems should you wish to deploy an update to many machines at once."}),"\n",(0,i.jsx)(t.h2,{id:"daemon-jobs",children:"Daemon Jobs"}),"\n",(0,i.jsx)(t.p,{children:"Daemon jobs run continuously on all nodes that meet the criteria given in the job specification. Should any new compute nodes join the cluster after the job was started, and should they meet the criteria, the job will be scheduled to run on that node too."}),"\n",(0,i.jsx)(t.p,{children:"A good application of daemon jobs is to handle continuously generated data on every compute node.  This might be from edge devices like sensors, or cameras, or from logs where they are generated. The data can then be aggregated and compressed them before sending it onwards.  For logs, the aggregated data can be relayed at regular intervals to platforms like Kafka or Kinesis, or directly to other logging services with edge devices potentially delivering results via MQTT."}),"\n",(0,i.jsx)(t.h2,{id:"service-jobs",children:"Service Jobs"}),"\n",(0,i.jsx)(t.p,{children:"Service jobs run continuously on a specified number of nodes that meet the criteria given in the job specification. Bacalhau's orchestrator selects the optimal nodes to run the job, and continuously monitors its health, performance. If required it will reschedule on other nodes."}),"\n",(0,i.jsx)(t.p,{children:"This job type is good for long running consumers such as streaming or queueing services, or real-time event listeners."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>r,a:()=>a});var i=o(7294);const n={},s=i.createContext(n);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);