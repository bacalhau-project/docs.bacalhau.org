"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3984],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"Speech Recognition using Whisper",sidebar_position:9},o="Speech Recognition using Whisper",l={unversionedId:"examples/model-inference/Openai-Whisper/index",id:"examples/model-inference/Openai-Whisper/index",title:"Speech Recognition using Whisper",description:"stars - badge-generator",source:"@site/docs/examples/model-inference/Openai-Whisper/index.md",sourceDirName:"examples/model-inference/Openai-Whisper",slug:"/examples/model-inference/Openai-Whisper/",permalink:"/examples/model-inference/Openai-Whisper/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/Openai-Whisper/index.md",tags:[],version:"current",lastUpdatedAt:1694454127,formattedLastUpdatedAt:"Sep 11, 2023",sidebarPosition:9,frontMatter:{sidebar_label:"Speech Recognition using Whisper",sidebar_position:9},sidebar:"documentationSidebar",previous:{title:"EasyOCR",permalink:"/examples/model-inference/EasyOCR/"},next:{title:"Model Training",permalink:"/category/model-training"}},s={},p=[{value:"TD:LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running whisper locally",id:"running-whisper-locally",level:2},{value:"Create the script",id:"create-the-script",level:2},{value:"Containerize Script using Docker",id:"containerize-script-using-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"speech-recognition-using-whisper"},"Speech Recognition using Whisper"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("p",null,"Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. We show that the use of such a large and diverse dataset leads to improved robustness to accents, background noise, and technical language. Moreover, it enables transcription in multiple languages, as well as translation from those languages into English. We are open-sourcing models and inference code to serve as a foundation for building useful applications and for further research on robust speech processing. In this example, we will transcribe an audio clip locally, containerize the script and then run the container on Bacalhau."),(0,r.kt)("p",null,"The advantage of using Bacalhau over managed Automatic Speech Recognition services is that you can run your own containers which can scale to do batch process petabytes of videos or audio for automatic speech recognition"),(0,r.kt)("h2",{id:"tdlr"},"TD:LR"),(0,r.kt)("p",null,"Using OpenAI whisper with Bacalhau to process audio files"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To get started, you need to install:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("li",{parentName:"ul"},"Whisper,"),(0,r.kt)("li",{parentName:"ul"},"pytorch"),(0,r.kt)("li",{parentName:"ul"},"pandas")),(0,r.kt)("h2",{id:"running-whisper-locally"},"Running whisper locally"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install git+https://github.com/openai/whisper.git\npip install torch==1.10.1\npip install pandas\nsudo apt update && sudo apt install ffmpeg\n")),(0,r.kt)("p",null,"Before we create and run the script we need a sample audio file to test the code for that we download a sample audio clip."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nwget https://github.com/js-ts/hello/raw/main/hello.mp3\n")),(0,r.kt)("h2",{id:"create-the-script"},"Create the script"),(0,r.kt)("p",null,"We will create a script that accepts parameters (input file path, output file path, temperature, etc.) and set the default parameters. Also:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the input file is in mp4 format, then the script converts it to wav format."),(0,r.kt)("li",{parentName:"ul"},"Save the transcript in various formats,"),(0,r.kt)("li",{parentName:"ul"},"We load the large model"),(0,r.kt)("li",{parentName:"ul"},"Then pass it the required parameters.\nThis model is not only limited to English and transcription, it supports other languages and also does translation, into the following languages:")),(0,r.kt)("p",null,"Next, let's create a openai-whisper script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile openai-whisper.py\nimport argparse\nimport os\nimport sys\nimport warnings\nimport whisper\nfrom pathlib import Path\nimport subprocess\nimport torch\nimport shutil\nimport numpy as np\nparser = argparse.ArgumentParser(description=\"OpenAI Whisper Automatic Speech Recognition\")\nparser.add_argument(\"-l\",dest=\"audiolanguage\", type=str,help=\"Language spoken in the audio, use Auto detection to let Whisper detect the language. Select from the following languages['Auto detection', 'Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Armenian', 'Assamese', 'Azerbaijani', 'Bashkir', 'Basque', 'Belarusian', 'Bengali', 'Bosnian', 'Breton', 'Bulgarian', 'Burmese', 'Castilian', 'Catalan', 'Chinese', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Estonian', 'Faroese', 'Finnish', 'Flemish', 'French', 'Galician', 'Georgian', 'German', 'Greek', 'Gujarati', 'Haitian', 'Haitian Creole', 'Hausa', 'Hawaiian', 'Hebrew', 'Hindi', 'Hungarian', 'Icelandic', 'Indonesian', 'Italian', 'Japanese', 'Javanese', 'Kannada', 'Kazakh', 'Khmer', 'Korean', 'Lao', 'Latin', 'Latvian', 'Letzeburgesch', 'Lingala', 'Lithuanian', 'Luxembourgish', 'Macedonian', 'Malagasy', 'Malay', 'Malayalam', 'Maltese', 'Maori', 'Marathi', 'Moldavian', 'Moldovan', 'Mongolian', 'Myanmar', 'Nepali', 'Norwegian', 'Nynorsk', 'Occitan', 'Panjabi', 'Pashto', 'Persian', 'Polish', 'Portuguese', 'Punjabi', 'Pushto', 'Romanian', 'Russian', 'Sanskrit', 'Serbian', 'Shona', 'Sindhi', 'Sinhala', 'Sinhalese', 'Slovak', 'Slovenian', 'Somali', 'Spanish', 'Sundanese', 'Swahili', 'Swedish', 'Tagalog', 'Tajik', 'Tamil', 'Tatar', 'Telugu', 'Thai', 'Tibetan', 'Turkish', 'Turkmen', 'Ukrainian', 'Urdu', 'Uzbek', 'Valencian', 'Vietnamese', 'Welsh', 'Yiddish', 'Yoruba'] \",default=\"English\")\nparser.add_argument(\"-p\",dest=\"inputpath\", type=str,help=\"Path of the input file\",default=\"/hello.mp3\")\nparser.add_argument(\"-v\",dest=\"typeverbose\", type=str,help=\"Whether to print out the progress and debug messages. ['Live transcription', 'Progress bar', 'None']\",default=\"Live transcription\")\nparser.add_argument(\"-g\",dest=\"outputtype\", type=str,help=\"Type of file to generate to record the transcription. ['All', '.txt', '.vtt', '.srt']\",default=\"All\")\nparser.add_argument(\"-s\",dest=\"speechtask\", type=str,help=\"Whether to perform X->X speech recognition (`transcribe`) or X->English translation (`translate`). ['transcribe', 'translate']\",default=\"transcribe\")\nparser.add_argument(\"-n\",dest=\"numSteps\", type=int,help=\"Number of Steps\",default=50)\nparser.add_argument(\"-t\",dest=\"decodingtemperature\", type=int,help=\"Temperature to increase when falling back when the decoding fails to meet either of the thresholds below.\",default=0.15 )\nparser.add_argument(\"-b\",dest=\"beamsize\", type=int,help=\"Number of Images\",default=5)\nparser.add_argument(\"-o\",dest=\"output\", type=str,help=\"Output Folder where to store the outputs\",default=\"\")\n\nargs=parser.parse_args()\ndevice = torch.device('cuda:0')\nprint('Using device:', device, file=sys.stderr)\n\nModel = 'large'\nwhisper_model =whisper.load_model(Model)\nvideo_path_local = os.getcwd()+args.inputpath\nfile_name=os.path.basename(video_path_local)\noutput_file_path=args.output\n\nif os.path.splitext(video_path_local)[1] == \".mp4\":\n    video_path_local_wav =os.path.splitext(file_name)[0]+\".wav\"\n    result  = subprocess.run([\"ffmpeg\", \"-i\", str(video_path_local), \"-vn\", \"-acodec\", \"pcm_s16le\", \"-ar\", \"16000\", \"-ac\", \"1\", str(video_path_local_wav)])\n\n# add language parameters\n# Language spoken in the audio, use Auto detection to let Whisper detect the language.\n#  ['Auto detection', 'Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Armenian', 'Assamese', 'Azerbaijani', 'Bashkir', 'Basque', 'Belarusian', 'Bengali', 'Bosnian', 'Breton', 'Bulgarian', 'Burmese', 'Castilian', 'Catalan', 'Chinese', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Estonian', 'Faroese', 'Finnish', 'Flemish', 'French', 'Galician', 'Georgian', 'German', 'Greek', 'Gujarati', 'Haitian', 'Haitian Creole', 'Hausa', 'Hawaiian', 'Hebrew', 'Hindi', 'Hungarian', 'Icelandic', 'Indonesian', 'Italian', 'Japanese', 'Javanese', 'Kannada', 'Kazakh', 'Khmer', 'Korean', 'Lao', 'Latin', 'Latvian', 'Letzeburgesch', 'Lingala', 'Lithuanian', 'Luxembourgish', 'Macedonian', 'Malagasy', 'Malay', 'Malayalam', 'Maltese', 'Maori', 'Marathi', 'Moldavian', 'Moldovan', 'Mongolian', 'Myanmar', 'Nepali', 'Norwegian', 'Nynorsk', 'Occitan', 'Panjabi', 'Pashto', 'Persian', 'Polish', 'Portuguese', 'Punjabi', 'Pushto', 'Romanian', 'Russian', 'Sanskrit', 'Serbian', 'Shona', 'Sindhi', 'Sinhala', 'Sinhalese', 'Slovak', 'Slovenian', 'Somali', 'Spanish', 'Sundanese', 'Swahili', 'Swedish', 'Tagalog', 'Tajik', 'Tamil', 'Tatar', 'Telugu', 'Thai', 'Tibetan', 'Turkish', 'Turkmen', 'Ukrainian', 'Urdu', 'Uzbek', 'Valencian', 'Vietnamese', 'Welsh', 'Yiddish', 'Yoruba']\nlanguage = args.audiolanguage\n# Whether to print out the progress and debug messages.\n# ['Live transcription', 'Progress bar', 'None']\nverbose = args.typeverbose\n#  Type of file to generate to record the transcription.\n# ['All', '.txt', '.vtt', '.srt']\noutput_type = args.outputtype\n# Whether to perform X->X speech recognition (`transcribe`) or X->English translation (`translate`).\n# ['transcribe', 'translate']\ntask = args.speechtask\n# Temperature to use for sampling.\ntemperature = args.decodingtemperature\n#  Temperature to increase when falling back when the decoding fails to meet either of the thresholds below.\ntemperature_increment_on_fallback = 0.2\n#  Number of candidates when sampling with non-zero temperature.\nbest_of = 5\n#  Number of beams in beam search, only applicable when temperature is zero.\nbeam_size = args.beamsize\n# Optional patience value to use in beam decoding, as in [*Beam Decoding with Controlled Patience*](https://arxiv.org/abs/2204.05424), the default (1.0) is equivalent to conventional beam search.\npatience = 1.0\n# Optional token length penalty coefficient (alpha) as in [*Google's Neural Machine Translation System*](https://arxiv.org/abs/1609.08144), set to negative value to uses simple length normalization.\nlength_penalty = -0.05\n# Comma-separated list of token ids to suppress during sampling; '-1' will suppress most special characters except common punctuations.\nsuppress_tokens = \"-1\"\n# Optional text to provide as a prompt for the first window.\ninitial_prompt = \"\"\n# if True, provide the previous output of the model as a prompt for the next window; disabling may make the text inconsistent across windows, but the model becomes less prone to getting stuck in a failure loop.\ncondition_on_previous_text = True\n#  whether to perform inference in fp16.\nfp16 = True\n#  If the gzip compression ratio is higher than this value, treat the decoding as failed.\ncompression_ratio_threshold = 2.4\n# If the average log probability is lower than this value, treat the decoding as failed.\nlogprob_threshold = -1.0\n# If the probability of the <|nospeech|> token is higher than this value AND the decoding has failed due to `logprob_threshold`, consider the segment as silence.\nno_speech_threshold = 0.6\n\nverbose_lut = {\n    'Live transcription': True,\n    'Progress bar': False,\n    'None': None\n}\n\nargs = dict(\n    language = (None if language == \"Auto detection\" else language),\n    verbose = verbose_lut[verbose],\n    task = task,\n    temperature = temperature,\n    temperature_increment_on_fallback = temperature_increment_on_fallback,\n    best_of = best_of,\n    beam_size = beam_size,\n    patience=patience,\n    length_penalty=(length_penalty if length_penalty>=0.0 else None),\n    suppress_tokens=suppress_tokens,\n    initial_prompt=(None if not initial_prompt else initial_prompt),\n    condition_on_previous_text=condition_on_previous_text,\n    fp16=fp16,\n    compression_ratio_threshold=compression_ratio_threshold,\n    logprob_threshold=logprob_threshold,\n    no_speech_threshold=no_speech_threshold\n)\n\ntemperature = args.pop(\"temperature\")\ntemperature_increment_on_fallback = args.pop(\"temperature_increment_on_fallback\")\nif temperature_increment_on_fallback is not None:\n    temperature = tuple(np.arange(temperature, 1.0 + 1e-6, temperature_increment_on_fallback))\nelse:\n    temperature = [temperature]\n\nif Model.endswith(\".en\") and args[\"language\"] not in {\"en\", \"English\"}:\n    warnings.warn(f\"{Model} is an English-only model but receipted '{args['language']}'; using English instead.\")\n    args[\"language\"] = \"en\"\n\nvideo_transcription = whisper.transcribe(\n    whisper_model,\n    str(video_path_local),\n    temperature=temperature,\n    **args,\n)\n\n# Save output\nwriting_lut = {\n    '.txt': whisper.utils.write_txt,\n    '.vtt': whisper.utils.write_vtt,\n    '.srt': whisper.utils.write_txt,\n}\n\nif output_type == \"All\":\n    for suffix, write_suffix in writing_lut.items():\n        transcript_local_path =os.getcwd()+output_file_path+'/'+os.path.splitext(file_name)[0] +suffix\n        with open(transcript_local_path, \"w\", encoding=\"utf-8\") as f:\n            write_suffix(video_transcription[\"segments\"], file=f)\n        try:\n            transcript_drive_path =file_name\n        except:\n            print(f\"**Transcript file created: {transcript_local_path}**\")\nelse:\n    transcript_local_path =output_file_path+'/'+os.path.splitext(file_name)[0] +output_type\n\n    with open(transcript_local_path, \"w\", encoding=\"utf-8\") as f:\n        writing_lut[output_type](video_transcription[\"segments\"], file=f)\n")),(0,r.kt)("p",null,"Let's run the script with the default parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython openai-whisper.py\n")),(0,r.kt)("p",null,"Viewing the outputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat hello.srt\n")),(0,r.kt)("h2",{id:"containerize-script-using-docker"},"Containerize Script using Docker"),(0,r.kt)("p",null,"To build your own docker container, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", which contains instructions on how the image will be built, and what extra requirements will be included."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM  pytorch/pytorch:1.12.1-cuda11.3-cudnn8-runtime\n\nWORKDIR /\n\nRUN apt-get -y update\n\nRUN apt-get -y install git\n\nRUN python3 -m pip install --upgrade pip\n\nRUN python -m pip install regex tqdm Pillow\n\nRUN pip install git+https://github.com/openai/whisper.git\n\nADD hello.mp3 hello.mp3\n\nADD openai-whisper.py openai-whisper.py\n\nRUN python openai-whisper.py\n")),(0,r.kt)("p",null,"We choose ",(0,r.kt)("inlineCode",{parentName:"p"},"pytorch/pytorch:1.12.1-cuda11.3-cudnn8-runtime")," as our base image"),(0,r.kt)("p",null,"And then install all the dependencies, after that we will add the test audio file and our openai-whisper script to the container, we will also run a test command to check whether our script works inside the container and if the container builds successfully"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See more information on how to containerize your script/app ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/02_our_app/"},"here"))),(0,r.kt)("h3",{id:"build-the-container"},"Build the container"),(0,r.kt)("p",null,"We will run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Before running the command replace;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create a Docker account"),", and use the username of the account you created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,r.kt)("p",null,"In our case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t jsacex/whisper\n")),(0,r.kt)("h3",{id:"push-the-container"},"Push the container"),(0,r.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("p",null,"In our case"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker push jsacex/whisper\n")),(0,r.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,r.kt)("p",null,"We will transcribe the moon landing video, which can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://www.nasa.gov/multimedia/hd/apollo11_hdpage.html"},"https://www.nasa.gov/multimedia/hd/apollo11_hdpage.html")),(0,r.kt)("p",null,"Since the downloaded video is in mov format we convert the video to mp4 format and then upload it to our public storage in this case IPFS.\nWe will be using ",(0,r.kt)("a",{parentName:"p",href:"https://nft.storage/"},"NFT.Storage")," (Recommended Option). To upload your dataset using ",(0,r.kt)("a",{parentName:"p",href:"https://nft.storage/docs/how-to/nftup/"},"NFTup"),"  just drag and drop your directory it will upload it to IPFS"),(0,r.kt)("p",null,"After the dataset has been uploaded, copy the CID:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bafybeielf6z4cd2nuey5arckect5bjmelhouvn5rhbjlvpvhp7erkrc4nu")),(0,r.kt)("p",null,"To submit a job, run the following Bacalhau command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n    --id-only \\\n    --gpu 1 \\\n    --timeout 3600 \\\n    --wait-timeout-secs 3600 \\\n    jsacex/whisper \\\n    -i ipfs://bafybeielf6z4cd2nuey5arckect5bjmelhouvn5rhbjlvpvhp7erkrc4nu \\\n    -- python openai-whisper.py -p inputs/Apollo_11_moonwalk_montage_720p.mp4 -o outputs\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,r.kt)("p",null,"Let's look closely at the command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i ipfs://bafybeielf6z4cd2nuey5arckect5bjmelhouvn5r"),": flag to mount the CID which contains our file to the container at the path ",(0,r.kt)("inlineCode",{parentName:"li"},"/inputs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-p inputs/Apollo_11_moonwalk_montage_720p.mp4 "),": the input path of our file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-o outputs"),": the path where to store the outputs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--gpu")," : here we request 1 GPU"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jsacex/whisper"),": the name and the tag of the docker image we are using")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/outputs/Apollo_11_moonwalk_montage_720p.vtt\n")))}c.isMDXComponent=!0}}]);