"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9849],{724:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var i=s(5893),l=s(1151);const c={sidebar_label:"run"},r="Command: job run",a={id:"references/cli/job/run/index",title:"Command: job run",description:"Description",source:"@site/docs/references/cli/job/run/index.md",sourceDirName:"references/cli/job/run",slug:"/references/cli/job/run/",permalink:"/references/cli/job/run/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/references/cli/job/run/index.md",tags:[],version:"current",lastUpdatedAt:1702038777,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{sidebar_label:"run"},sidebar:"documentationSidebar",previous:{title:"logs",permalink:"/references/cli/job/logs/"},next:{title:"stop",permalink:"/references/cli/job/stop/"}},t={},o=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Flags",id:"flags",level:2},{value:"Global Flags",id:"global-flags",level:2},{value:"Examples",id:"examples",level:2},{value:"Templating",id:"templating",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"command-job-run",children:["Command: ",(0,i.jsx)(n.code,{children:"job run"})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"bacalhau job run"})," command facilitates the initiation of a job from a file or directly from the standard input (stdin). The command supports both JSON and YAML data formats. This command is particularly useful for quickly executing a job without the need for manual configurations."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"bacalhau job run [flags]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"flags",children:"Flags"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--dry-run"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: With this flag, the job will not be submitted. Instead, it will display what would have been submitted, providing a way to preview before actual submission."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-f"}),", ",(0,i.jsx)(n.code,{children:"--follow"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: If provided, the command will continuously display the output from the job as it runs."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--id-only"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: On successful job submission, only the Job ID will be printed."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--no-template"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Disable the templating feature. When this flag is set, the job spec will be used as-is, without any placeholder replacements"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--node-details"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Displays details of all nodes. Note that this flag is overridden if ",(0,i.jsx)(n.code,{children:"--id-only"})," is provided."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--show-warnings"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: Shows any warnings that occur during the job submission."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-E"}),", ",(0,i.jsx)(n.code,{children:"--template-envs"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Specify a regular expression pattern for selecting environment variables to be included as template variables in the job spec.\ne.g. ",(0,i.jsx)(n.code,{children:'--template-envs ".*"'})," will include all environment variables."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-V"}),", ",(0,i.jsx)(n.code,{children:"--template-vars"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Replace a placeholder in the job spec with a value. e.g. ",(0,i.jsx)(n.code,{children:"--template-vars foo=bar"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--wait"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: Waits for the job to finish execution. To set this to false, use --wait=false"}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--wait-timeout-secs int"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: If ",(0,i.jsx)(n.code,{children:"--wait"})," is provided, this flag sets the maximum time (in seconds) the command will wait for the job to finish before it terminates."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"600"})," seconds"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"-h"}),", ",(0,i.jsx)(n.code,{children:"--help"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Displays help information for the ",(0,i.jsx)(n.code,{children:"run"})," command."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"global-flags",children:"Global Flags"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--api-host string"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Specifies the host used for RESTful communication between the client and server. The flag is disregarded if ",(0,i.jsx)(n.code,{children:"BACALHAU_API_HOST"})," environment variable is set."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"bootstrap.production.bacalhau.org"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--api-port int"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Determines the port for REST communication. If ",(0,i.jsx)(n.code,{children:"BACALHAU_API_PORT"})," environment variable is set, this flag will be ignored."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"1234"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--log-mode logging-mode"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Description: Selects the desired log format. Options include: ",(0,i.jsx)(n.code,{children:"default"}),", ",(0,i.jsx)(n.code,{children:"station"}),", ",(0,i.jsx)(n.code,{children:"json"}),", ",(0,i.jsx)(n.code,{children:"combined"}),", and ",(0,i.jsx)(n.code,{children:"event"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"default"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"--repo string"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Description: Defines the path to the bacalhau repository."}),"\n",(0,i.jsxs)(n.li,{children:["Default: ",(0,i.jsx)(n.code,{children:"$HOME/.bacalhau"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Sample Job (",(0,i.jsx)(n.code,{children:"job.yaml"}),")"]})}),"\n",(0,i.jsx)(n.p,{children:"A sample job used in the following examples is provided below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat job.yaml\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"name: A Simple Docker Job\ntype: batch\ncount: 1\ntasks:\n  - name: My main task\n    engine:\n      type: docker\n      params:\n        Image: ubuntu:latest\n        Entrypoint:\n          - /bin/bash\n        Parameters:\n          - -c\n          - echo Hello Bacalhau!\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This configuration describes a batch job that runs a Docker task. It utilizes the ",(0,i.jsx)(n.code,{children:"ubuntu:latest"})," image and executes the command ",(0,i.jsx)(n.code,{children:"echo Hello Bacalhau!"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Running a Job using a YAML Configuration"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["To run a job with a configuration provided in a ",(0,i.jsx)(n.code,{children:"job.yaml"})," file:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job run job.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Expected Output:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"Job successfully submitted. Job ID: j-2d0f513a-9eb1-49c2-8bc8-246c6fb41520\nChecking job status... (Enter Ctrl+C to exit at any time, your job will continue running):\n\n Communicating with the network  ................  done \u2705  0.1s\n    Creating job for submission  ................  done \u2705  0.6s\n\nTo get more details about the run, execute:\n bacalhau job describe j-2d0f513a-9eb1-49c2-8bc8-246c6fb41520\n\nTo get more details about the run executions, execute:\n bacalhau job executions j-2d0f513a-9eb1-49c2-8bc8-246c6fb41520\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Running a Job and Following its Logs"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job run job.yaml --follow\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Expected Output:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"Job successfully submitted. Job ID: j-b89df816-7564-4f04-b270-e6cda89eda72\nWaiting for logs... (Enter Ctrl+C to exit at any time, your job will continue running):\n\nHello Bacalhau!\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Running a Job Without Waiting"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job run job.yaml --wait=false\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Expected Output:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"j-3fd396b3-e92e-42ca-bd87-0dc9eb15e6f9\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fetching Only the Job ID Upon Submission"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job run job.yaml --id-only\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Expected Output:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"j-5976ffb6-3465-4fec-8b3b-2c822cbaf417\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Fetching Only the Job ID and Wait for Completion"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job run job.yaml --id-only --wait\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Expected Output:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"j-293f1302-3298-4aca-b06d-33fd1e3f9d2c\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Running a Job with Node Details"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job run job.yaml --node-details\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Expected Output:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"Job successfully submitted. Job ID: j-05e65dd3-4e9e-4e20-a104-3c91ba934435\nChecking job status... (Enter Ctrl+C to exit at any time, your job will continue running):\n\n Communicating with the network  ................  done \u2705  0.1s\n    Creating job for submission  ................  done \u2705  0.6s\n\nJob Results By Node:\n\u2022 Node QmVXwmdZ:\n Hello Bacalhau!\n\nTo get more details about the run, execute:\n bacalhau job describe j-05e65dd3-4e9e-4e20-a104-3c91ba934435\n\nTo get more details about the run executions, execute:\n bacalhau job executions j-05e65dd3-4e9e-4e20-a104-3c91ba934435\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Rerunning a previously submitting job"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Command:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"bacalhau job describe j-05e65dd3-4e9e-4e20-a104-3c91ba934435 | bacalhau job run\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Expected Output:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"Reading from /dev/stdin; send Ctrl-d to stop.Job successfully submitted. Job ID: j-d8625929-83f4-411a-b9aa-7bcfecb27a8b\nChecking job status... (Enter Ctrl+C to exit at any time, your job will continue running):\n\n Communicating with the network  ................  done \u2705  0.1s\n    Creating job for submission  ................  done \u2705  0.6s\n\nTo get more details about the run, execute:\n bacalhau job describe j-d8625929-83f4-411a-b9aa-7bcfecb27a8b\n\nTo get more details about the run executions, execute:\n bacalhau job executions j-d8625929-83f4-411a-b9aa-7bcfecb27a8b\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"templating",children:"Templating"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"bacalhau job run"})," providing users with the ability to dynamically inject variables into their job specifications. This feature is particularly useful when running multiple jobs with varying parameters such as S3 buckets, prefixes, and time ranges without the need to edit each job specification file manually. You can find more information about templating ",(0,i.jsx)(n.a,{href:"/topic-guides/job-templating",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var i=s(7294);const l={},c=i.createContext(l);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);