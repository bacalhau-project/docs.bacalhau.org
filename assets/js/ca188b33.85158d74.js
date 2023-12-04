"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3491],{9700:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(5893),t=n(1151);const o={sidebar_label:"Amplify",sidebar_position:1,description:"Bacalhau Amplify is a tool for automatically explaining, enriching, and enhancing your data."},r="Bacalhau Amplify",s={id:"integration/amplify",title:"Bacalhau Amplify",description:"Bacalhau Amplify is a tool for automatically explaining, enriching, and enhancing your data.",source:"@site/docs/integration/amplify.md",sourceDirName:"integration",slug:"/integration/amplify",permalink:"/integration/amplify",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/integration/amplify.md",tags:[],version:"current",lastUpdatedAt:1701669642,formattedLastUpdatedAt:"Dec 4, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Amplify",sidebar_position:1,description:"Bacalhau Amplify is a tool for automatically explaining, enriching, and enhancing your data."},sidebar:"documentationSidebar",previous:{title:"Apache Airflow",permalink:"/integration/apache-airflow"},next:{title:"Lilypad for Web3",permalink:"/integration/lilypad"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Bacalhau Amplify?",id:"what-is-bacalhau-amplify",level:3},{value:"Who is Bacalhau Amplify For?",id:"who-is-bacalhau-amplify-for",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Beginners -- Use the UI and the Hosted Service",id:"beginners----use-the-ui-and-the-hosted-service",level:3},{value:"Developers -- As a Service -- Use the Amplify API",id:"developers----as-a-service----use-the-amplify-api",level:3},{value:"On-Prem Developers -- Use the Amplify Container",id:"on-prem-developers----use-the-amplify-container",level:3},{value:"Advanced Users -- Use the Amplify Binary",id:"advanced-users----use-the-amplify-binary",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Database",id:"database",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Creating New Workflows and Jobs",id:"creating-new-workflows-and-jobs",level:3},{value:"Developer Documentation",id:"developer-documentation",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"bacalhau-amplify",children:"Bacalhau Amplify"}),"\n",(0,i.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(a.p,{children:"Bacalhau Amplify is a tool for automatically explaining, enriching and enhancing your data. This document explains how it works and how to use it."}),"\n",(0,i.jsx)(a.h3,{id:"what-is-bacalhau-amplify",children:"What is Bacalhau Amplify?"}),"\n",(0,i.jsx)(a.p,{children:"Amplify is both a service and a tool that leverages the power of Bacalhau to automatically run a wide range of data engineering tasks on your data."}),"\n",(0,i.jsx)(a.p,{children:"It works by running a separate service, the Amplify daemon, that hosts a bundled UI and API, and all of the logic to manage jobs and communicate with executors."}),"\n",(0,i.jsx)(a.p,{children:"It is designed to be easily extended and used in a variety of deployment scenarios."}),"\n",(0,i.jsx)(a.h3,{id:"who-is-bacalhau-amplify-for",children:"Who is Bacalhau Amplify For?"}),"\n",(0,i.jsx)(a.p,{children:"Amplify is for anyone who wants to automatically run data engineering tasks on their data. You can choose to use the hosted service or deploy it yourself."}),"\n",(0,i.jsx)(a.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(a.p,{children:"There are four ways you can leverage Amplify, depending on your needs."}),"\n",(0,i.jsx)(a.h3,{id:"beginners----use-the-ui-and-the-hosted-service",children:"Beginners -- Use the UI and the Hosted Service"}),"\n",(0,i.jsx)(a.p,{children:"If you're just getting started with Bacalhau, or you don't want to manage your own infrastructure, you can use the hosted Amplify UI."}),"\n",(0,i.jsxs)(a.p,{children:["To get started, visit ",(0,i.jsx)(a.a,{href:"http://amplify.bacalhau.org",children:"amplify.bacalhau.org"})," and click on the ",(0,i.jsx)(a.code,{children:"Submit a Job"})," button on the dashboard."]}),"\n",(0,i.jsx)(a.admonition,{type:"tip",children:(0,i.jsx)(a.p,{children:"This currently only accepts a CID as an input."})}),"\n",(0,i.jsx)(a.h3,{id:"developers----as-a-service----use-the-amplify-api",children:"Developers -- As a Service -- Use the Amplify API"}),"\n",(0,i.jsx)(a.p,{children:"If you're a developer and you want to integrate Amplify into your own application, you can use the Amplify API."}),"\n",(0,i.jsxs)(a.p,{children:["You can ",(0,i.jsx)(a.a,{href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/bacalhau-project/amplify/main/api/openapi.yaml",children:"browse the OpenAPI specification on the Swagger Editor"}),"."]}),"\n",(0,i.jsx)(a.h3,{id:"on-prem-developers----use-the-amplify-container",children:"On-Prem Developers -- Use the Amplify Container"}),"\n",(0,i.jsx)(a.p,{children:"If you're a developer and you want to run Amplify on your own infrastructure, you can use the Amplify container."}),"\n",(0,i.jsx)(a.p,{children:"To start Amplify as a service, like the hosted version, run:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"docker run -p 8080:8080 ghcr.io/bacalhau-project/amplify:latest serve\n"})}),"\n",(0,i.jsx)(a.p,{children:"To run a single job without starting the service, run:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"docker run ghcr.io/bacalhau-project/amplify:latest run QmS8ioZzB8foNEwFmJZTVJT1se5ycgRuc1Ey5fjHfZi5wb\n"})}),"\n",(0,i.jsx)(a.admonition,{type:"tip",children:(0,i.jsx)(a.p,{children:"You can replace that CID with your own!"})}),"\n",(0,i.jsx)(a.h3,{id:"advanced-users----use-the-amplify-binary",children:"Advanced Users -- Use the Amplify Binary"}),"\n",(0,i.jsxs)(a.p,{children:["If you're an advanced user and you want to bundle amplify, then you can use the Amplify binary, or indeed the raw ",(0,i.jsx)(a.a,{href:"https://github.com/bacalhau-project/amplify/",children:"Go code"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["You can find the most recent binary builds on the ",(0,i.jsx)(a.a,{href:"https://github.com/bacalhau-project/amplify/releases",children:"releases page"}),"."]}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Download the latest version for your platform."}),"\n",(0,i.jsx)(a.li,{children:"Untar the file."}),"\n",(0,i.jsx)(a.li,{children:"Make the binary executable and place it in a location that is on the PATH."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"Now you can run the binary:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"amplify serve # for the service\n# or\namplify run QmS8ioZzB8foNEwFmJZTVJT1se5ycgRuc1Ey5fjHfZi5wb # for a single job\n"})}),"\n",(0,i.jsx)(a.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(a.p,{children:"Amplify can be configured using parameters or environment variables."}),"\n",(0,i.jsxs)(a.p,{children:["Get the most recent configuration options by passing ",(0,i.jsx)(a.code,{children:"-h"})," to the subcommand of your choice:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"docker run ghcr.io/bacalhau-project/amplify:latest serve -h\n"})}),"\n",(0,i.jsx)(a.h3,{id:"database",children:"Database"}),"\n",(0,i.jsx)(a.p,{children:"By default, Amplify runs with an in-memory database. But that implementation is very bare-bones and obviously, you will lose historical information when it restarts. We recommend running Amplify with a PostgreSQL database."}),"\n",(0,i.jsxs)(a.p,{children:["The instructions below describe how to start a PostgreSQL database using Docker. You can also use a managed database service like ",(0,i.jsx)(a.a,{href:"https://aws.amazon.com/rds/postgresql/",children:"Amazon RDS"})," or ",(0,i.jsx)(a.a,{href:"https://cloud.google.com/sql/docs/postgres",children:"Google Cloud SQL"}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["Start a PostgreSQL database and then point Amplify to it using the ",(0,i.jsx)(a.code,{children:"AMPLIFY_DB_URI"})," environment variable:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:'docker network create anet\ndocker run -p 5432:5432 --network=anet --name amplify-postgres -e POSTGRES_DB=amplify -e POSTGRES_PASSWORD=mysecretpassword -d postgres\ndocker run -p 8080:8080 --network=anet --env AMPLIFY_DB_URI="postgres://postgres:mysecretpassword@amplify-postgres.anet/amplify?sslmode=disable" ghcr.io/bacalhau-project/amplify:latest serve\n'})}),"\n",(0,i.jsx)(a.h3,{id:"triggers",children:"Triggers"}),"\n",(0,i.jsx)(a.p,{children:"Amplify workflows are executed via a trigger. As of May 2023, Amplify supports the following triggers:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"API -- A trigger that accepts a POST request with a CID as the body."}),"\n",(0,i.jsx)(a.li,{children:"IPFS-Search.com -- A trigger that watches an IPFS-Search.com index for new IPFS CIDs. This must be enabled in the configuration."}),"\n"]}),"\n",(0,i.jsx)(a.h3,{id:"creating-new-workflows-and-jobs",children:"Creating New Workflows and Jobs"}),"\n",(0,i.jsxs)(a.p,{children:["It's really easy to add new workflows and jobs to Amplify. You can see the ",(0,i.jsxs)(a.a,{href:"https://github.com/bacalhau-project/amplify/blob/main/config.yaml",children:["existing workflows and jobs in the ",(0,i.jsx)(a.code,{children:"config.yaml"})," file in the repository"]}),"."]}),"\n",(0,i.jsxs)(a.p,{children:["Jobs are simply Docker containers that are executed in Bacalhau. Workflows connect jobs into an execution graph. To find out more please read the ",(0,i.jsx)(a.a,{href:"https://github.com/bacalhau-project/amplify/tree/main/docs",children:"developer documentation"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"developer-documentation",children:"Developer Documentation"}),"\n",(0,i.jsxs)(a.p,{children:["All of the documentation intended for a developer audience is located in the ",(0,i.jsx)(a.a,{href:"https://github.com/bacalhau-project/amplify/tree/main/docs",children:"developer documentation of the repository"}),"."]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>s,a:()=>r});var i=n(7294);const t={},o=i.createContext(t);function r(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);