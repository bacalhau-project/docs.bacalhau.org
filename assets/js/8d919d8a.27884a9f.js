"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,b=c["".concat(l,".").concat(d)]||c[d]||h[d]||s;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={},o="Scripting Bacalhau with Python",i={unversionedId:"examples/workload-onboarding/python-script/index",id:"examples/workload-onboarding/python-script/index",title:"Scripting Bacalhau with Python",description:"stars - badge-generator",source:"@site/docs/examples/workload-onboarding/python-script/index.md",sourceDirName:"examples/workload-onboarding/python-script",slug:"/examples/workload-onboarding/python-script/",permalink:"/examples/workload-onboarding/python-script/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/python-script/index.md",tags:[],version:"current",lastUpdatedAt:1696949965,formattedLastUpdatedAt:"Oct 10, 2023",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Python File",permalink:"/examples/workload-onboarding/trivial-python/"},next:{title:"Data Engineering",permalink:"/category/data-engineering"}},l={},p=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Executing Bacalhau Jobs with Python Scripts",id:"executing-bacalhau-jobs-with-python-scripts",level:2},{value:"Next Steps",id:"next-steps",level:3}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scripting-bacalhau-with-python"},"Scripting Bacalhau with Python"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("p",null,"Bacalhau allows you to easily execute batch jobs via the CLI. But sometimes you need to do more than that. You might need to execute a script that requires user input, or you might need to execute a script that requires a lot of parameters. In any case, you probably want to execute your jobs in a repeatable manner."),(0,r.kt)("p",null,"This example demonstrates a simple Python script that is able to orchestrate the execution of lots of jobs in a repeatable manner."),(0,r.kt)("h2",{id:"tdlr"},"TD;LR"),(0,r.kt)("p",null,"Running Python script in Bacalhau"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"executing-bacalhau-jobs-with-python-scripts"},"Executing Bacalhau Jobs with Python Scripts"),(0,r.kt)("p",null,"To demonstrate this example, I will use the data generated from the ",(0,r.kt)("a",{parentName:"p",href:"/examples/data-engineering/blockchain-etl/"},"ethereum analysis example"),". This produced a list of hashes that I will iterate over and execute a job for each one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile hashes.txt\nbafybeihvtzberlxrsz4lvzrzvpbanujmab3hr5okhxtbgv2zvonqos2l3i\nbafybeifb25fgxrzu45lsc47gldttomycqcsao22xa2gtk2ijbsa5muzegq\nbafybeig4wwwhs63ly6wbehwd7tydjjtnw425yvi2tlzt3aii3pfcj6hvoq\nbafybeievpb5q372q3w5fsezflij3wlpx6thdliz5xowimunoqushn3cwka\nbafybeih6te26iwf5kzzby2wqp67m7a5pmwilwzaciii3zipvhy64utikre\nbafybeicjd4545xph6rcyoc74wvzxyaz2vftapap64iqsp5ky6nz3f5yndm\n")),(0,r.kt)("p",null,"Now let's run the following script. You can execute this script anywhere with ",(0,r.kt)("inlineCode",{parentName:"p"},"python bacalhau.py"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile bacalhau.py\nimport json, glob, os, multiprocessing, shutil, subprocess, tempfile, time\n\n# checkStatusOfJob checks the status of a Bacalhau job\ndef checkStatusOfJob(job_id: str) -> str:\n    assert len(job_id) > 0\n    p = subprocess.run(\n        ["bacalhau", "list", "--output", "json", "--id-filter", job_id],\n        stdout=subprocess.PIPE,\n        stderr=subprocess.PIPE,\n        text=True,\n    )\n    r = parseJobStatus(p.stdout)\n    if r == "":\n        print("job status is empty! %s" % job_id)\n    elif r == "Completed":\n        print("job completed: %s" % job_id)\n    else:\n        print("job not completed: %s - %s" % (job_id, r))\n\n    return r\n\n\n# submitJob submits a job to the Bacalhau network\ndef submitJob(cid: str) -> str:\n    assert len(cid) > 0\n    p = subprocess.run(\n        [\n            "bacalhau",\n            "docker",\n            "run",\n            "--id-only",\n            "--wait=false",\n            "--input",\n            "ipfs://" + cid + ":/inputs/data.tar.gz",\n            "ghcr.io/bacalhau-project/examples/blockchain-etl:0.0.6",\n        ],\n        stdout=subprocess.PIPE,\n        stderr=subprocess.PIPE,\n        text=True,\n    )\n    if p.returncode != 0:\n        print("failed (%d) job: %s" % (p.returncode, p.stdout))\n    job_id = p.stdout.strip()\n    print("job submitted: %s" % job_id)\n\n    return job_id\n\n\n# getResultsFromJob gets the results from a Bacalhau job\ndef getResultsFromJob(job_id: str) -> str:\n    assert len(job_id) > 0\n    temp_dir = tempfile.mkdtemp()\n    print("getting results for job: %s" % job_id)\n    for i in range(0, 5): # try 5 times\n        p = subprocess.run(\n            [\n                "bacalhau",\n                "get",\n                "--output-dir",\n                temp_dir,\n                job_id,\n            ],\n            stdout=subprocess.PIPE,\n            stderr=subprocess.PIPE,\n            text=True,\n        )\n        if p.returncode == 0:\n            break\n        else:\n            print("failed (exit %d) to get job: %s" % (p.returncode, p.stdout))\n\n    return temp_dir\n\n\n# parseJobStatus parses the status of a Bacalhau job\ndef parseJobStatus(result: str) -> str:\n    if len(result) == 0:\n        return ""\n    r = json.loads(result)\n    if len(r) > 0:\n        return r[0]["State"]["State"]\n    return ""\n\n\n# parseHashes splits lines from a text file into a list\ndef parseHashes(filename: str) -> list:\n    assert os.path.exists(filename)\n    with open(filename, "r") as f:\n        hashes = f.read().splitlines()\n    return hashes\n\n\ndef main(file: str, num_files: int = -1):\n    # Use multiprocessing to work in parallel\n    count = multiprocessing.cpu_count()\n    with multiprocessing.Pool(processes=count) as pool:\n        hashes = parseHashes(file)[:num_files]\n        print("submitting %d jobs" % len(hashes))\n        job_ids = pool.map(submitJob, hashes)\n        assert len(job_ids) == len(hashes)\n\n        print("waiting for jobs to complete...")\n        while True:\n            job_statuses = pool.map(checkStatusOfJob, job_ids)\n            total_finished = sum(map(lambda x: x == "Completed", job_statuses))\n            if total_finished >= len(job_ids):\n                break\n            print("%d/%d jobs completed" % (total_finished, len(job_ids)))\n            time.sleep(2)\n\n        print("all jobs completed, saving results...")\n        results = pool.map(getResultsFromJob, job_ids)\n        print("finished saving results")\n\n        # Do something with the results\n        shutil.rmtree("results", ignore_errors=True)\n        os.makedirs("results", exist_ok=True)\n        for r in results:\n            path = os.path.join(r, "outputs", "*.csv")\n            csv_file = glob.glob(path)\n            for f in csv_file:\n                print("moving %s to results" % f)\n                shutil.move(f, "results")\n\nif __name__ == "__main__":\n    main("hashes.txt", 10)\n\n')),(0,r.kt)("p",null,"This code has a few interesting features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the value in the ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," call to change the number of jobs to execute"),(0,r.kt)("li",{parentName:"ul"},"Because all jobs are complete at different times, there's a loop to check that all jobs have been completed before downloading the results -- if you don't do this you'll likely see an error when trying to download the results"),(0,r.kt)("li",{parentName:"ul"},"When downloading the results, the IPFS get often times out, so I wrapped that in a loop")),(0,r.kt)("p",null,"Let's run it!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython bacalhau.py\n")),(0,r.kt)("p",null,"Hopefully, the results directory contains all the combined results from the jobs we just executed. Here's we're expecting to see CSV files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -l results\n")),(0,r.kt)("p",null,"Success! We've now executed a bunch of jobs in parallel using Python. This is a great way to execute lots of jobs in a repeatable manner. You can alter the file above for your purposes."),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"You might also be interested in the following examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/examples/data-engineering/blockchain-etl/"},"Analysing Ethereum Data with Python"))))}h.isMDXComponent=!0}}]);