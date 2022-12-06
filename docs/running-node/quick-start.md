---
sidebar_label: 'Quick Start'
sidebar_position: 100
toc_max_heading_level: 4
---

# Start a non-production computer provider

Bacalhau is a peer-to-peer network of compute providers that will run jobs submitted by users. A Compute Provider (CP) is anyone who is running a Bacalhau compute node participating in the Bacalhau compute network, regardless of whether they are hosting any Filecoin data.

This section will run a bacalhau node and start accepting and running jobs.

More indepth information can be found in [Running a production compute provider](start-compute-provider.md)


## Quick start

Estimated time for completion: 1 min.

### Pre-requisite - install Docker

Either install and use [Docker desktop](https://www.docker.com/products/docker-desktop/) 
or on Linux install [Docker](https://get.docker.com/) using the non-production quick installer:

```bash
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sh get-docker.sh
```

### Start the Bacalhau quickstart container

```bash
docker run \
    -dit \
    --name bacalhau \
    --restart always \
    --net host \
    --volume bacalhau-data:/data \
    --volume /run/docker.sock:/run/docker.sock \
    --volume /tmp:/tmp \
        bacalhau:quickstart
```

This will start a `bacalhau-ipfs` container which it will use to communicate with the global ipfs network, and then the `bacalhau` container that you can send jobs to.

:::info

The `bacalhau:quickstart` image has been built using ***../Dockerfile and is kept up to date with the latest production release of bacalhau.

:::

#### Ensure IPFS is running

We will need to connect our bacalhau node to an IPFS server so we can run jobs that consume CIDs as inputs.

The following `docker exec` command will use the local `bacalhau-ipfs` container to request the IPFS welcoms document.


```
sven@p1:~/src/ipfs/bacalhau$ docker exec -it bacalhau-ipfs  ipfs cat /ipfs/QmQPeNsJPyVWPFDVHb77w8G42Fvo15z4bG2X8D2GhfbSXc/readme
Hello and Welcome to IPFS!

██╗██████╗ ███████╗███████╗
██║██╔══██╗██╔════╝██╔════╝
██║██████╔╝█████╗  ███████╗
██║██╔═══╝ ██╔══╝  ╚════██║
██║██║     ██║     ███████║
╚═╝╚═╝     ╚═╝     ╚══════╝

If you're seeing this, you have successfully installed
IPFS and are now interfacing with the ipfs merkledag!

 -------------------------------------------------------
| Warning:                                              |
|   This is alpha software. Use at your own discretion! |
|   Much is missing or lacking polish. There are bugs.  |
|   Not yet secure. Read the security notes for more.   |
 -------------------------------------------------------

Check out some of the other files in this directory:

  ./about
  ./help
  ./quick-start     <-- usage examples
  ./readme          <-- this file
  ./security-notes
```

### Test your bacalhau service

# To see that bacalhau is running your docker job locally, you can run 'docker events` in another terminal, and you should see the container 'create', 'start', 'die', and 'destroy' events for a container with a name starting with 'bacalhau'

```bash
docker exec -it \
    --env BACALHAU_API_HOST=127.0.0.1 \
    --env BACALHAU_API_PORT=1234 \
    bacalhau \
     bacalhau docker run ubuntu echo hello
```


### Install the bacalhau binary locally

TODO: something `docker cp` where we make the container contain all OS&ARCH clients? or a wget/curl? or a `docker exec... ` 


### Check your node works

TODO: adjust this depending on local client, or `docker exec`

Even though the cli (by default) submits jobs to [the bootstrap nodes](/about-bacalhau/architecture.md#job-submission), each node listens for events on the global network and possibly bids for taking a job: your logs should therefore show activity of your node bidding for incoming jobs.

To quick check your node runs properly, let's submit the following dummy job:

```bash
bacalhau docker run ubuntu echo Test
```

If you see logs of your computenode bidding for the job above it means you've successfully joined Bacalhau as a Compute Provider!

TODO: this doesn't tell me how to see this, or even if it's likely

### What's next?

At this point you probably have a number of questions for us. What incentive should you expect for running a public Bacalhau node?
Please contact us on [Slack](https://filecoinproject.slack.com/archives/C02RLM3JHUY) to further discuss this topic and for sharing your valuable feedback.
