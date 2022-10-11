---
sidebar_label: "Custom Containers"
sidebar_position: 10
---
# How To Work With Custom Containers in Bacalhau

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/custom-containers/index.ipynb)
[![Open In Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/custom-containers/index.ipynb)

Bacalhau operates by executing jobs within containers. This example shows you how to build and use a custom docker container.

This example requires Docker. If you don't have Docker installed, you can install it from [here](https://docs.docker.com/install/). Docker commands will not work on hosted notebooks like Google Colab, but the Bacalhau commands will.

## Running Containers in Bacalhau

You're probably used to running docker commands to run a container.


```bash
docker run docker/whalesay cowsay sup old fashioned container run
```

     _________________________________ 
    < sup old fashioned container run >
     --------------------------------- 
        \
         \
          \     
                        ##        .            
                  ## ## ##       ==            
               ## ## ## ##      ===            
           /""""""""""""""""___/ ===        
      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~   
           \______ o          __/            
            \    \        __/             
              \____\______/   


    WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested


Bacalhau uses a syntax that is similar to docker and you can use the same containers. The main difference is that input and output data is passed to the container via IPFS, to enable planetary scale. In this example, it doesn't make too much difference except that we need to download the stdout.

The `--wait` flag tells Bacalhau to wait for the job to finish before returning. This is useful in interactive sessions like this, but you would normally allow jobs to complete in the background and use the `list` command to check on their status.

Another difference is that by default Bacalhau overwrites the default entrypoint for the container so you have to pass all shell commands as arguments to the `run` command after the `--` flag.


```bash
bacalhau docker run docker/whalesay -- cowsay hello web3 uber-run
```

    Job successfully submitted. Job ID: 4d82226d-c43a-4f40-bf31-6c856472f3ec
    Checking job status... (Enter Ctrl+C to exit at any time, your job will continue running):
    
    	       Creating job for submission ... done ✅
    	       Finding node(s) for the job ... done ✅
    	             Node accepted the job ... done ✅
    	                                   ... done ✅
    	   Job finished, verifying results ... done ✅
    	      Results accepted, publishing ... done ✅
    	                                  
    Results CID: QmPdbcfRma2MTSNkmJqRMuJ5BQfSwh3vY89G9vbaV5ZsyW
    Job Results By Node:
    Node QmXaXu9N:
      Shard 0:
        Status: Cancelled
        No RunOutput for this shard
    Node QmYgxZiy:
      Shard 0:
        Status: Completed
        Container Exit Code: 0
        Stdout:
          _____________________ 
    < hello web3 uber-run >
     --------------------- 
        \
         \
          \     
                        ##        .            
                  ## ## ##       ==            
               ## ## ## ##      ===            
           /""""""""""""""""___/ ===        
      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~   
           \______ o          __/            
            \    \        __/             
              \____\______/
        Stderr: <NONE>
    Node QmdZQ7Zb:
      Shard 0:
        Status: Cancelled
        No RunOutput for this shard
    
    To download the results, execute:
      bacalhau get 4d82226d-c43a-4f40-bf31-6c856472f3ec
    
    To get more details about the run, execute:
      bacalhau describe 4d82226d-c43a-4f40-bf31-6c856472f3ec


## Using Your Own Custom Container

To use your own custom container, you must publish the container to a container registry that is accessible from the Bacalhau network. At this time, only public container registries are supported.

To demonstrate this, you will develop and build a simple custom container that comes from an old docker example. I remember seeing cowsay at a Docker conference about a decade ago. I think it's about time we brought it back to life and distribute it across the Bacalhau network.


```python
%%writefile cod.cow
$the_cow = <<"EOC";
   $thoughts
    $thoughts
                               ,,,,_
                            ┌Φ▓╬▓╬▓▓▓W      @▓▓▒,
                           ╠▓╬▓╬╣╬╬▓╬▓▓   ╔╣╬╬▓╬╣▓,
                    __,┌╓═╠╬╠╬╬╬Ñ╬╬╬Ñ╬╬¼,╣╬╬▓╬╬▓╬▓▓▓┐        ╔W_             ,φ▓▓
               ,«@▒╠╠╠╠╩╚╙╙╩Ü╚╚╚╚╩╙╙╚╠╩╚╚╟▓▒╠╠╫╣╬╬╫╬╣▓,   _φ╬▓╬╬▓,        ,φ╣▓▓╬╬
          _,φÆ╩╬╩╙╚╩░╙╙░░╩`=░╙╚»»╦░=╓╙Ü1R░│░╚Ü░╙╙╚╠╠╠╣╣╬≡Φ╬▀╬╣╬╬▓▓▓_   ╓▄▓▓▓▓▓▓╬▌
      _,φ╬Ñ╩▌▐█[▒░░░░R░░▀░`,_`!R`````╙`-'╚Ü░░Ü░░░░░░░│││░╚╚╙╚╩╩╩╣Ñ╩╠▒▒╩╩▀▓▓╣▓▓╬╠▌
     '╚╩Ü╙│░░╙Ö▒Ü░░░H░░R ▒¥╣╣@@@▓▓▓  := '`   `░``````````````````````````]▓▓▓╬╬╠H
       '¬═▄ `\░╙Ü░╠DjK` Å»»╙╣▓▓▓▓╬Ñ     -»`       -`      `  ,;╓▄╔╗∞  ~▓▓▓▀▓▓╬╬╬▌
             '^^^`   _╒Γ   `╙▀▓▓╨                     _, ⁿD╣▓╬╣▓╬▓╜      ╙╬▓▓╬╬▓▓
                 ```└                           _╓▄@▓▓▓╜   `╝╬▓▓╙           ²╣╬▓▓
                        %φ▄╓_             ~#▓╠▓▒╬▓╬▓▓^        `                ╙╙
                         `╣▓▓▓              ╠╬▓╬▓╬▀`
                           ╚▓▌               '╨▀╜
EOC
```

    Overwriting cod.cow


Next, the Dockerfile adds the script and sets the entrypoint.


```python
%%writefile Dockerfile
FROM debian:stretch
RUN apt-get update && apt-get install -y cowsay
# "cowsay" installs to /usr/games
ENV PATH $PATH:/usr/games
RUN echo '#!/bin/bash\ncowsay "${@:1}"' > /usr/bin/codsay && \
    chmod +x /usr/bin/codsay
COPY cod.cow /usr/share/cowsay/cows/default.cow
```

    Overwriting Dockerfile


Now let's build and test the container locally.


```bash
docker build -t ghcr.io/bacalhau-project/examples/codsay:latest . 2> /dev/null
```


```bash
docker run --rm ghcr.io/bacalhau-project/examples/codsay:latest codsay I like swimming in data
```

     _________________________
    < I like swimming in data >
     -------------------------
       \
        \
                                   ,,,,_
                                ┌Φ▓╬▓╬▓▓▓W      @▓▓▒,
                               ╠▓╬▓╬╣╬╬▓╬▓▓   ╔╣╬╬▓╬╣▓,
                        __,┌╓═╠╬╠╬╬╬Ñ╬╬╬Ñ╬╬¼,╣╬╬▓╬╬▓╬▓▓▓┐        ╔W_             ,φ▓▓
                   ,«@▒╠╠╠╠╩╚╙╙╩Ü╚╚╚╚╩╙╙╚╠╩╚╚╟▓▒╠╠╫╣╬╬╫╬╣▓,   _φ╬▓╬╬▓,        ,φ╣▓▓╬╬
              _,φÆ╩╬╩╙╚╩░╙╙░░╩`=░╙╚»»╦░=╓╙Ü1R░│░╚Ü░╙╙╚╠╠╠╣╣╬≡Φ╬▀╬╣╬╬▓▓▓_   ╓▄▓▓▓▓▓▓╬▌
          _,φ╬Ñ╩▌▐█[▒░░░░R░░▀░`,_`!R`````╙`-'╚Ü░░Ü░░░░░░░│││░╚╚╙╚╩╩╩╣Ñ╩╠▒▒╩╩▀▓▓╣▓▓╬╠▌
         '╚╩Ü╙│░░╙Ö▒Ü░░░H░░R ▒¥╣╣@@@▓▓▓  := '`   `░``````````````````````````]▓▓▓╬╬╠H
           '¬═▄ `░╙Ü░╠DjK` Å»»╙╣▓▓▓▓╬Ñ     -»`       -`      `  ,;╓▄╔╗∞  ~▓▓▓▀▓▓╬╬╬▌
                 '^^^`   _╒Γ   `╙▀▓▓╨                     _, ⁿD╣▓╬╣▓╬▓╜      ╙╬▓▓╬╬▓▓
                     ```└                           _╓▄@▓▓▓╜   `╝╬▓▓╙           ²╣╬▓▓
                            %φ▄╓_             ~#▓╠▓▒╬▓╬▓▓^        `                ╙╙
                             `╣▓▓▓              ╠╬▓╬▓╬▀`
                               ╚▓▌               '╨▀╜


Once your container is working as expected then you should push it to a public container registry. In this example, I'm pushing to Github's container registry, but we'll skip the step below because you probably don't have permission.Remember that the Bacalhau nodes expect your container to have a `linux/amd64` architecture.


```bash
# docker buildx build --platform linux/amd64,linux/arm64 --push -t ghcr.io/bacalhau-project/examples/codsay:latest .
```

## Running Your Custom Container on Bacalhau

Now we're ready to submit a Bacalhau job using your custom container. This code runs a job, downloads the results and prints the stdout.

:::tip
The `bacalhau docker run` command strips the default entrypoint, so don't forget to run your entrypoint in the command line arguments.
:::


```bash
bacalhau docker run \
  ghcr.io/bacalhau-project/examples/codsay:v1.0.0 \
  -- codsay Look at all this data
```

    Job successfully submitted. Job ID: 7da4b33c-248b-4702-9e31-35b6f58eefab
    Checking job status... (Enter Ctrl+C to exit at any time, your job will continue running):
    
    	       Creating job for submission ... done ✅
    	       Finding node(s) for the job ... done ✅
    	             Node accepted the job ... done ✅
    	                                   ... done ✅
    	   Job finished, verifying results ... done ✅
    	      Results accepted, publishing ... done ✅
    	                                  
    Results CID: QmaJCxwRQx3ZL8amPSVu4SbYD8kgwxWkGwdcMubUTDCQwC
    Job Results By Node:
    Node QmXaXu9N:
      Shard 0:
        Status: Cancelled
        No RunOutput for this shard
    Node QmYgxZiy:
      Shard 0:
        Status: Completed
        Container Exit Code: 0
        Stdout:
          _______________________
    < Look at all this data >
     -----------------------
       \
        \
                                   ,,,,_
                                ┌Φ▓╬▓╬▓▓▓W      @▓▓▒,
                               ╠▓╬▓╬╣╬╬▓╬▓▓   ╔╣╬╬▓╬╣▓,
                        __,┌╓═╠╬╠╬╬╬Ñ╬╬╬Ñ╬╬¼,╣╬╬▓╬╬▓╬▓▓▓┐        ╔W_             ,φ▓▓
                   ,«@▒╠╠╠╠╩╚╙╙╩Ü╚╚╚╚╩╙╙╚╠╩╚╚╟▓▒╠╠╫╣╬╬╫╬╣▓,   _φ╬▓╬╬▓,        ,φ╣▓▓╬╬
              _,φÆ╩╬╩╙╚╩░╙╙░░╩`=░╙╚»»╦░=╓╙Ü1R░│░╚Ü░╙╙╚╠╠╠╣╣╬≡Φ╬▀╬╣╬╬▓▓▓_   ╓▄▓▓▓▓▓▓╬▌
          _,φ╬Ñ╩▌▐█[▒░░░░R░░▀░`,_`!R`````╙`-'╚Ü░░Ü░░░░░░░│││░╚╚╙╚╩╩╩╣Ñ╩╠▒▒╩╩▀▓▓╣▓▓╬╠▌
         '╚╩Ü╙│░░╙Ö▒Ü░░░H░░R ▒¥╣╣@@@▓▓▓  := '`   `░``````````````````````````]▓▓▓╬╬╠H
           '¬═▄ `░╙Ü░╠DjK` Å»»╙╣▓▓▓▓╬Ñ     -»`       -`      `  ,;╓▄╔╗∞  ~▓▓▓▀▓▓╬╬╬▌
                 '^^^`   _╒Γ   `╙▀▓▓╨                     _, ⁿD╣▓╬╣▓╬▓╜      ╙╬▓▓╬╬▓▓
                     ```└                           _╓▄@▓▓▓╜   `╝╬▓▓╙           ²╣╬▓▓
                            %!φ(MISSING)▄╓_             ~#▓╠▓▒╬▓╬▓▓^        `                ╙╙
                             `╣▓▓▓              ╠╬▓╬▓╬▀`
                               ╚▓▌               '╨▀╜
        Stderr: <NONE>
    Node QmdZQ7Zb:
      Shard 0:
        Status: Cancelled
        No RunOutput for this shard
    
    To download the results, execute:
      bacalhau get 7da4b33c-248b-4702-9e31-35b6f58eefab
    
    To get more details about the run, execute:
      bacalhau describe 7da4b33c-248b-4702-9e31-35b6f58eefab
