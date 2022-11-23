---
sidebar_label: "EasyOCR"
sidebar_position: 10
---
# EasyOCR (Optical Character Recognition) on bacalhau

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-inference/EasyOCR/index.ipynb)
[![Open In Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-inference/EasyOCR/index.ipynb)

## Introduction

EasyOCR is a ready-to-use OCR with 80+ supported languages and all popular writing scripts including Latin, Chinese, Arabic, Devanagari, Cyrillic and etc. it is developed by https://www.jaided.ai/


<img src="https://github.com/JaidedAI/EasyOCR/raw/master/examples/example2.png">


EasyOCR is leveraging recent works in academic and other open source projects to create a ready-to-use product with state-of-the-art performance. 
with easy OCR you use the pretrained models or use your own fine tuned model 

It can be used to digitalize paper records or for recognizing characters in images stored on IPFS/Filecoin or on the web

## Running Locally​


Installing dependencies


```bash
pip install easyocr
```

    Collecting easyocr
    [?25l  Downloading https://files.pythonhosted.org/packages/9d/b4/6a402a7ec3890e94313a7d2804190713e2c942371b39c7ccd9070280bc36/easyocr-1.3.2-py3-none-any.whl (63.2MB)
    [K     |████████████████████████████████| 63.2MB 114kB/s 
    [?25hRequirement already satisfied: torchvision>=0.5 in /usr/local/lib/python3.7/dist-packages (from easyocr) (0.10.0+cu102)
    Requirement already satisfied: numpy in /usr/local/lib/python3.7/dist-packages (from easyocr) (1.19.5)
    Requirement already satisfied: scikit-image in /usr/local/lib/python3.7/dist-packages (from easyocr) (0.16.2)
    Collecting python-bidi
      Downloading https://files.pythonhosted.org/packages/33/b0/f942d146a2f457233baaafd6bdf624eba8e0f665045b4abd69d1b62d097d/python_bidi-0.4.2-py2.py3-none-any.whl
    Requirement already satisfied: torch in /usr/local/lib/python3.7/dist-packages (from easyocr) (1.9.0+cu102)
    Requirement already satisfied: scipy in /usr/local/lib/python3.7/dist-packages (from easyocr) (1.4.1)
    Requirement already satisfied: PyYAML in /usr/local/lib/python3.7/dist-packages (from easyocr) (3.13)
    Requirement already satisfied: opencv-python in /usr/local/lib/python3.7/dist-packages (from easyocr) (4.1.2.30)
    Requirement already satisfied: Pillow in /usr/local/lib/python3.7/dist-packages (from easyocr) (7.1.2)
    Requirement already satisfied: matplotlib!=3.0.0,>=2.0.0 in /usr/local/lib/python3.7/dist-packages (from scikit-image->easyocr) (3.2.2)
    Requirement already satisfied: imageio>=2.3.0 in /usr/local/lib/python3.7/dist-packages (from scikit-image->easyocr) (2.4.1)
    Requirement already satisfied: PyWavelets>=0.4.0 in /usr/local/lib/python3.7/dist-packages (from scikit-image->easyocr) (1.1.1)
    Requirement already satisfied: networkx>=2.0 in /usr/local/lib/python3.7/dist-packages (from scikit-image->easyocr) (2.5.1)
    Requirement already satisfied: six in /usr/local/lib/python3.7/dist-packages (from python-bidi->easyocr) (1.15.0)
    Requirement already satisfied: typing-extensions in /usr/local/lib/python3.7/dist-packages (from torch->easyocr) (3.7.4.3)
    Requirement already satisfied: python-dateutil>=2.1 in /usr/local/lib/python3.7/dist-packages (from matplotlib!=3.0.0,>=2.0.0->scikit-image->easyocr) (2.8.1)
    Requirement already satisfied: cycler>=0.10 in /usr/local/lib/python3.7/dist-packages (from matplotlib!=3.0.0,>=2.0.0->scikit-image->easyocr) (0.10.0)
    Requirement already satisfied: pyparsing!=2.0.4,!=2.1.2,!=2.1.6,>=2.0.1 in /usr/local/lib/python3.7/dist-packages (from matplotlib!=3.0.0,>=2.0.0->scikit-image->easyocr) (2.4.7)
    Requirement already satisfied: kiwisolver>=1.0.1 in /usr/local/lib/python3.7/dist-packages (from matplotlib!=3.0.0,>=2.0.0->scikit-image->easyocr) (1.3.1)
    Requirement already satisfied: decorator<5,>=4.3 in /usr/local/lib/python3.7/dist-packages (from networkx>=2.0->scikit-image->easyocr) (4.4.2)
    Installing collected packages: python-bidi, easyocr
    Successfully installed easyocr-1.3.2 python-bidi-0.4.2


load example images


```bash
npx degit JaidedAI/EasyOCR/examples -f
```

    [K[?25hnpx: installed 1 in 2.792s
    [36m> destination directory is not empty. Using --force, continuing[39m
    [36m> cloned [1mJaidedAI/EasyOCR[22m#[1mHEAD[22m[39m


list them


```bash
ls -l
```

    total 3508
    -rw-r--r-- 1 root root   59898 Jun 16 22:36 chinese.jpg
    -rw-r--r-- 1 root root   97910 Jun 16 22:36 easyocr_framework.jpeg
    -rw-r--r-- 1 root root 1740957 Jun 16 22:36 english.png
    -rw-r--r-- 1 root root  487995 Jun 16 22:36 example2.png
    -rw-r--r-- 1 root root  127454 Jun 16 22:36 example3.png
    -rw-r--r-- 1 root root  488641 Jun 16 22:36 example.png
    -rw-r--r-- 1 root root  168376 Jun 16 22:36 french.jpg
    -rw-r--r-- 1 root root   42159 Jun 16 22:36 japanese.jpg
    -rw-r--r-- 1 root root  225531 Jun 16 22:36 korean.png
    drwxr-xr-x 1 root root    4096 Jun 15 13:37 sample_data
    -rw-r--r-- 1 root root   82229 Jun 16 22:36 thai.jpg
    -rw-r--r-- 1 root root   34706 Jun 16 22:36 width_ths.png



```python
# show an image
import PIL
from PIL import ImageDraw
im = PIL.Image.open("thai.jpg")
im
```




    
![png](index_files/index_12_0.png)
    




```python
# Create a reader to do OCR.
# If you change to GPU instance, it will be faster. But CPU is enough.
# (by MENU > Runtime > Change runtime type > GPU, then redo from beginning )
import easyocr
reader = easyocr.Reader(['th','en'])
```

    CUDA not available - defaulting to CPU. Note: This module is much faster with a GPU.
    Downloading detection model, please wait. This may take several minutes depending upon your network connection.


    

    Downloading recognition model, please wait. This may take several minutes depending upon your network connection.


    


```python
# Doing OCR. Get bounding boxes.
bounds = reader.readtext('thai.jpg')
bounds
```

    /usr/local/lib/python3.7/dist-packages/torch/nn/functional.py:718: UserWarning: Named tensors and all their associated APIs are an experimental feature and subject to change. Please do not use them for anything important until they are released as stable. (Triggered internally at  /pytorch/c10/core/TensorImpl.h:1156.)
      return torch.max_pool2d(input, kernel_size, stride, padding, dilation, ceil_mode)





    [([[142, 232], [500, 232], [500, 361], [142, 361]],
      'เส้นทางลัด',
      0.5458776426550863),
     ([[177, 483], [385, 483], [385, 573], [177, 573]],
      'เพชรบุรี',
      0.8813348319724021)]



we get cordinates which represent a rectangle containing text and the text itself

After that we will build a DOCKERFILE to containernize this script and then run it on bacalhau

# Building docker container (Optional)
Note* you can directly skip to running on bacalhau ands use the prebuild docker image






In this step you will create docker container using the dockerfile in the Easy OCR repo

Steps to build the container

clone the repo
```
git clone https://github.com/JaidedAI/EasyOCR
cd EasyOCR
```
Builing the container


To Build the docker container run the docker build command


```
docker build -t <hub-user>/<repo-name>:<tag> .
```


Please replace

&lt;hub-user> with your docker hub username, If you don’t have a docker hub account [Follow these instructions to create docker account](https://docs.docker.com/docker-id/), and use the username of the account you created

&lt;repo-name> This is the name of the container, you can name it anything you want

&lt;tag> This is not required but you can use the latest tag

After you have build the container, the next step is to test it locally and then push it docker hub

Now you can push this repository to the registry designated by its name or tag.


```
 docker push <hub-user>/<repo-name>:<tag>
```


After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau

## **Running the container on bacalhau**

After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau


This command is similar to what we have run locally but we change the output directory to the outputs folder so that the results are saved to IPFS


We use the --gpu flag to denote the no of GPU we are going to use

Since the model and the image aren't present in the container we will mount the image from an URL and the model from IPFS

you can find models to download from here
https://www.jaided.ai/easyocr/modelhub/

choose the model you want to use in this case we will be using the zh_sim_g2 model



```python
!curl -sL https://get.bacalhau.org/install.sh | bash
```

    Your system is linux_amd64
    No BACALHAU detected. Installing fresh BACALHAU CLI...
    Getting the latest BACALHAU CLI...
    Installing v0.3.11 BACALHAU CLI...
    Downloading https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz ...
    Downloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz.signature.sha256 ...
    Verified OK
    Extracting tarball ...
    NOT verifying Bin
    bacalhau installed into /usr/local/bin successfully.
    Client Version: v0.3.11
    Server Version: v0.3.11



```bash
bacalhau docker run \
-v bafybeibvcllzpfviggluobcfassm3vy4x2a4yanfxtmn4ir7olyzfrgq64:/root/.EasyOCR/model/zh_sim_g2.pth  \
-u https://raw.githubusercontent.com/JaidedAI/EasyOCR/ae773d693c3f355aac2e58f0d8142c600172f016/examples/chinese.jpg \
--timeout 3600 \
--wait-timeout-secs 3600 \
--gpu 1  \
--id-only \
--wait \
jsacex/easyocr \
--  easyocr -l ch_sim  en -f ./inputs/chinese.jpg --detail=1 --gpu=True

```

Structure of the command

Mounting the model from IPFS
-v bafybeibvcllzpfviggluobcfassm3vy4x2a4yanfxtmn4ir7olyzfrgq64:/root/.EasyOCR/model/zh_sim_g2.pth 

Mounting the Input Image from a URL
-u https://raw.githubusercontent.com/JaidedAI/EasyOCR/ae773d693c3f355aac2e58f0d8142c600172f016/examples/chinese.jpg

Specifying the no of GPUs
--gpu 1

Name of the Docker Image
jsacex/easyocr

The easyocr command

--  easyocr -l ch_sim  en -f ./inputs/chinese.jpg --detail=1 --gpu=True

-l the name of the model which is ch_sim

-f path to the input Image or directory

--detail=1 level of detail

--gpu=True we set this flag to true since we are running inference on a GPU, if you run this on a CPU you set this to false 



```bash
bacalhau list --id-filter ${JOB_ID}
```

    [92;100m CREATED  [0m[92;100m ID       [0m[92;100m JOB                     [0m[92;100m STATE     [0m[92;100m VERIFIED [0m[92;100m PUBLISHED               [0m
    [97;40m 14:27:53 [0m[97;40m b8267063 [0m[97;40m Docker jsacex/easyoc... [0m[97;40m Completed [0m[97;40m          [0m[97;40m /ipfs/QmaDS3cmVCoUsC... [0m


Where it says "Completed", that means the job is done, and we can get the results.

To find out more information about your job, run the following command:



```bash
bacalhau describe ${JOB_ID}
```

    APIVersion: V1alpha1
    ClientID: 0300a78f6fc2abdb3a0deae5f76d7712ce90ab630bbc8c06174665d2c8382df8
    CreatedAt: "2022-11-11T14:27:53.36526863Z"
    Deal:
      Concurrency: 1
    ExecutionPlan:
      ShardsTotal: 1
    ID: b8267063-37af-4aec-a65d-201a449dec89
    JobState:
      Nodes:
        QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG:
          Shards:
            "0":
              NodeId: QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG
              PublishedResults:
                CID: QmaDS3cmVCoUsCTdJ7gjHKFGYebscyvX8BXkHSj5csFJAW
                Name: job-b8267063-37af-4aec-a65d-201a449dec89-shard-0-host-QmVAb7r2pKWCuyLpYWoZr9syhhFnTWeFaByHdb8PkkhLQG
                StorageSource: IPFS
              RunOutput:
                exitCode: 0
                runnerError: ""
                stderr: ""
                stderrtruncated: false
                stdout: |-
                  ([[86, 80], [134, 80], [134, 128], [86, 128]], '西', 0.811562076983595)
                  ([[189, 75], [469, 75], [469, 165], [189, 165]], '愚园路', 0.9578677631869957)
                  ([[517, 81], [565, 81], [565, 123], [517, 123]], '东', 0.9941697709627171)
                  ([[78, 126], [136, 126], [136, 156], [78, 156]], '315', 0.9999933927534448)
                  ([[514, 126], [574, 126], [574, 156], [514, 156]], '309', 0.9999631096149034)
                  ([[79, 173], [125, 173], [125, 213], [79, 213]], 'W', 0.3243953926139511)
                  ([[226, 170], [414, 170], [414, 220], [226, 220]], 'Yuyuan Rd。', 0.8594614233742836)
                  ([[529, 173], [569, 173], [569, 213], [529, 213]], 'E', 0.5594370749422559)
                stdouttruncated: false
              State: Completed
              Status: 'Got results proposal of length: 0'
              VerificationResult:
                Complete: true
                Result: true
    RequesterNodeID: QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3
    RequesterPublicKey: CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDF5pYaTdt4UwzslPRDr8XFXv1clttGGIWENlnECLVqswrQVp5xrMsI/57MrJUsMADsz6a/cip9LOxiym3bZVIeZ5WmbrFp48F0Wb7RCELAsUcl/zx4FHCK+A2FKqmuhpY9NyVNGupIDBUCPvCWsDb87Ur//a9BdCOETuab4577e3vFCa3fE+9jn5Fuhoa0m5Z7GfuZtU0W2FX6nc4VIfseMWrWpHD+Bqe/kXs+8RFBVW2AYyzO8lCcHtRC4Lb1Ml1V5hcoAN1pe5yfVuPlT9qyAgCnH3nIIWtvEYz8BnSDgXXTHdT+N+6lrm9oMglNh7TpT6ZbmpioIbJalelAyhG3AgMBAAE=
    Spec:
      Docker:
        Entrypoint:
        - easyocr
        - -l
        - ch_sim
        - en
        - -f
        - ./inputs/chinese.jpg
        - --detail=1
        - --gpu=True
        Image: jsacex/easyocr
      Engine: Docker
      Language:
        JobContext: {}
      Publisher: Estuary
      Resources:
        GPU: "1"
      Sharding:
        BatchSize: 1
        GlobPatternBasePath: /inputs
      Verifier: Noop
      Wasm: {}
      inputs:
      - StorageSource: URLDownload
        URL: https://raw.githubusercontent.com/JaidedAI/EasyOCR/ae773d693c3f355aac2e58f0d8142c600172f016/examples/chinese.jpg
        path: /inputs
      - CID: bafybeibvcllzpfviggluobcfassm3vy4x2a4yanfxtmn4ir7olyzfrgq64
        StorageSource: IPFS
        path: /root/.EasyOCR/model/zh_sim_g2.pth
      outputs:
      - Name: outputs
        StorageSource: IPFS
        path: /outputs



```bash
rm -rf results && mkdir -p results
bacalhau get $JOB_ID --output-dir results
```

    Fetching results of job 'b8267063-37af-4aec-a65d-201a449dec89'...
    Results for job 'b8267063-37af-4aec-a65d-201a449dec89' have been written to...
    results


    2022/11/11 14:28:48 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.


After the download has finished you should see the following contents in results directory


```bash
ls results/
```

    combined_results
    per_shard
    raw


Viewing the outputs


```bash
cat results/combined_results/stdout
```

    ([[86, 80], [134, 80], [134, 128], [86, 128]], '西', 0.811562076983595)
    ([[189, 75], [469, 75], [469, 165], [189, 165]], '愚园路', 0.9578677631869957)
    ([[517, 81], [565, 81], [565, 123], [517, 123]], '东', 0.9941697709627171)
    ([[78, 126], [136, 126], [136, 156], [78, 156]], '315', 0.9999933927534448)
    ([[514, 126], [574, 126], [574, 156], [514, 156]], '309', 0.9999631096149034)
    ([[79, 173], [125, 173], [125, 213], [79, 213]], 'W', 0.3243953926139511)
    ([[226, 170], [414, 170], [414, 220], [226, 220]], 'Yuyuan Rd。', 0.8594614233742836)
    ([[529, 173], [569, 173], [569, 213], [529, 213]], 'E', 0.5594370749422559)

