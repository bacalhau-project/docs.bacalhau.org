"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6478],{2621:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(5893),s=n(1151);const r={sidebar_label:"Rust WASM",sidebar_position:10},i="Running Rust programs as WebAssembly (WASM)",o={id:"examples/workload-onboarding/rust-wasm/index",title:"Running Rust programs as WebAssembly (WASM)",description:"stars - badge-generator",source:"@site/docs/examples/workload-onboarding/rust-wasm/index.md",sourceDirName:"examples/workload-onboarding/rust-wasm",slug:"/examples/workload-onboarding/rust-wasm/",permalink:"/examples/workload-onboarding/rust-wasm/",draft:!1,unlisted:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/rust-wasm/index.md",tags:[],version:"current",lastUpdatedAt:1702309452,formattedLastUpdatedAt:"Dec 11, 2023",sidebarPosition:10,frontMatter:{sidebar_label:"Rust WASM",sidebar_position:10},sidebar:"documentationSidebar",previous:{title:"CUDA",permalink:"/examples/workload-onboarding/CUDA/"},next:{title:"Sparkov Data Generation",permalink:"/examples/workload-onboarding/Sparkov-Data-Generation/"}},l={},d=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Develop a Rust Program Locally",id:"develop-a-rust-program-locally",level:2},{value:"Running WASM on Bacalhau",id:"running-wasm-on-bacalhau",level:2},{value:"Viewing Job Output",id:"viewing-job-output",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"running-rust-programs-as-webassembly-wasm",children:"Running Rust programs as WebAssembly (WASM)"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://github.com/bacalhau-project/bacalhau",children:(0,t.jsx)(a.img,{src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"})})}),"\n",(0,t.jsxs)(a.p,{children:["Bacalhau supports running jobs as a ",(0,t.jsx)(a.a,{href:"https://webassembly.org/",children:"WebAssembly (WASM)"})," program rather than using a Docker container. This example demonstrates how to compile a ",(0,t.jsx)(a.a,{href:"https://www.rust-lang.org/",children:"Rust"})," project into WebAssembly and run the program on Bacalhau."]}),"\n",(0,t.jsx)(a.h2,{id:"tdlr",children:"TD;LR"}),"\n",(0,t.jsx)(a.p,{children:"Run WASM job on Bacalhau"}),"\n",(0,t.jsx)(a.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["To get started, you need to install the Bacalhau client, see more information ",(0,t.jsx)(a.a,{href:"https://docs.bacalhau.org/getting-started/installation",children:"here"})]}),"\n",(0,t.jsxs)(a.li,{children:["A working Rust installation with the ",(0,t.jsx)(a.code,{children:"wasm32-wasi"})," target. For example, you can use ",(0,t.jsx)(a.a,{href:"https://rustup.rs/",children:(0,t.jsx)(a.code,{children:"rustup"})})," to install Rust and configure it to build WASM targets."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"For those using the notebook, these are installed in hidden cells below."}),"\n",(0,t.jsx)(a.h2,{id:"develop-a-rust-program-locally",children:"Develop a Rust Program Locally"}),"\n",(0,t.jsxs)(a.p,{children:["We can use ",(0,t.jsx)(a.code,{children:"cargo"})," (which will have been installed by ",(0,t.jsx)(a.code,{children:"rustup"}),") to start a new project and compile it."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"%%bash\ncargo init my-program\n"})}),"\n",(0,t.jsx)(a.p,{children:"We can then write a Rust program. Rust programs that run on Bacalhau can read and write files, access a simple clock, and make use of pseudo-random numbers. They cannot memory-map files or run code on multiple threads."}),"\n",(0,t.jsxs)(a.p,{children:["The below program will make use of the Rust ",(0,t.jsx)(a.code,{children:"imageproc"})," create to resize an image through seam carving, based on ",(0,t.jsx)(a.a,{href:"https://github.com/image-rs/imageproc/blob/master/examples/seam_carving.rs",children:"an example from their repository"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'%%writefile ./my-program/src/main.rs \nuse image::{open, GrayImage, Luma, Pixel};\nuse imageproc::definitions::Clamp;\nuse imageproc::gradients::sobel_gradient_map;\nuse imageproc::map::map_colors;\nuse imageproc::seam_carving::*;\nuse std::path::Path;\n\nfn main() {\n    let input_path = "inputs/image0.JPG";\n    let output_dir = "outputs/";\n\n    let input_path = Path::new(&input_path);\n    let output_dir = Path::new(&output_dir);\n\n    // Load image and convert to grayscale\n    let input_image = open(input_path)\n        .expect(&format!("Could not load image at {:?}", input_path))\n        .to_rgb8();\n\n    // Save original image in output directory\n    let original_path = output_dir.join("original.png");\n    input_image.save(&original_path).unwrap();\n\n    // We will reduce the image width by this amount, removing one seam at a time.\n    let seams_to_remove: u32 = input_image.width() / 6;\n\n    let mut shrunk = input_image.clone();\n    let mut seams = Vec::new();\n\n    // Record each removed seam so that we can draw them on the original image later.\n    for i in 0..seams_to_remove {\n        if i % 100 == 0 {\n            println!("Removing seam {}", i);\n        }        \n        let vertical_seam = find_vertical_seam(&shrunk);\n        shrunk = remove_vertical_seam(&mut shrunk, &vertical_seam);\n        seams.push(vertical_seam);\n    }\n\n    // Draw the seams on the original image.\n    let gray_image = map_colors(&input_image, |p| p.to_luma());\n    let annotated = draw_vertical_seams(&gray_image, &seams);\n    let annotated_path = output_dir.join("annotated.png");\n    annotated.save(&annotated_path).unwrap();\n\n    // Draw the seams on the gradient magnitude image.\n    let gradients = sobel_gradient_map(&input_image, |p| {\n        let mean = (p[0] + p[1] + p[2]) / 3;\n        Luma([mean as u32])\n    });\n    let clamped_gradients: GrayImage = map_colors(&gradients, |p| Luma([Clamp::clamp(p[0])]));\n    let annotated_gradients = draw_vertical_seams(&clamped_gradients, &seams);\n    let gradients_path = output_dir.join("gradients.png");\n    clamped_gradients.save(&gradients_path).unwrap();\n    let annotated_gradients_path = output_dir.join("annotated_gradients.png");\n    annotated_gradients.save(&annotated_gradients_path).unwrap();\n\n    // Save the shrunk image.\n    let shrunk_path = output_dir.join("shrunk.png");\n    shrunk.save(&shrunk_path).unwrap();\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["We also need to install the ",(0,t.jsx)(a.code,{children:"imageproc"})," and ",(0,t.jsx)(a.code,{children:"image"})," libraries and switch off the default features to make sure that multi-threading is disabled."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'%%writefile ./my-program/Cargo.toml\n[package]\nname = "my-program"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies.image]\nversion = "0.24.4"\ndefault-features = false\nfeatures = ["png", "jpeg", "bmp"]\n\n[dependencies.imageproc]\nversion = "0.23.0"\ndefault-features = false\n'})}),"\n",(0,t.jsxs)(a.p,{children:["We can now build the Rust program into a WASM blob using ",(0,t.jsx)(a.code,{children:"cargo"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"%%bash\ncd my-program && cargo build --target wasm32-wasi --release\n"})}),"\n",(0,t.jsxs)(a.p,{children:["This will generate a WASM file at ",(0,t.jsx)(a.code,{children:"./my-program/target/wasm32-wasi/my-program.wasm"})," which can now be run on Bacalhau."]}),"\n",(0,t.jsx)(a.h2,{id:"running-wasm-on-bacalhau",children:"Running WASM on Bacalhau"}),"\n",(0,t.jsx)(a.p,{children:"Now that we have a WASM binary, we can upload it to IPFS and use it as input to a Bacalhau job."}),"\n",(0,t.jsx)(a.p,{children:"The -i switch allows specifying a URI to be mounted as a named volume in the job, which can be an IPFS CID, HTTP URL, or S3 object."}),"\n",(0,t.jsx)(a.p,{children:"For this example, we are using an image of the Statue of Liberty that has been pinned to a storage facility."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"%%bash --out job_id\nbacalhau wasm run ./my-program/target/wasm32-wasi/release/my-program.wasm _start \\\n    --id-only \\\n    -i ipfs://bafybeifdpl6dw7atz6uealwjdklolvxrocavceorhb3eoq6y53cbtitbeu:/inputs\n"})}),"\n",(0,t.jsx)(a.p,{children:"We can now get the results. When we view the files, we can see the original image, the resulting shrunk image, and the seams that were removed."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"%env JOB_ID={job_id}\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"%%bash\nrm -rf wasm_results && mkdir -p wasm_results\nbacalhau get ${JOB_ID} --output-dir wasm_results\n"})}),"\n",(0,t.jsx)(a.h2,{id:"viewing-job-output",children:"Viewing Job Output"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'import IPython.display as display\ndisplay.Image("./wasm_results/outputs/original.png")\n'})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"png",src:n(7100).Z+"",width:"1024",height:"910"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'display.Image("./wasm_results/outputs/annotated_gradients.png")\n'})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"png",src:n(7817).Z+"",width:"1024",height:"910"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'display.Image("./wasm_results/outputs/shrunk.png")\n'})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.img,{alt:"png",src:n(3178).Z+"",width:"854",height:"910"})})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7100:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/index_18_0-71638aed0115d5bcc05fe121fce8d93a.png"},7817:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/index_19_0-210fd212e58be3cae39a9debd38a666a.png"},3178:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/index_20_0-220da7754eb4e335100d52c0ac75ce2f.png"},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>i});var t=n(7294);const s={},r=t.createContext(s);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);