---
sidebar_label: 'FAQs'
sidebar_position: 90
hide_title: true
---

# FAQs

### Can I use multiple data sources in the same job?
You can use the `--input-volumes` or `-v` flag multiple times with multiple different CIDs, and give each of them a path to be mounted at. 

For example, doing `bacalhau run cat/main.wasm -v CID1:/input1 -v CID2:/input2` will result in both the `input1` and `input2` folders being available to your running WASM with the CID contents. You can use `-v` as many times as you need. 

### How can I submit Job requests through CLI to communicate with my Node directly?

To ensure the CLI can communicate with our node directly (`bacalhau --api-host <MY_NODE_PUBLIC_IP> version`), you need to make sure the **1234** port is open.

### Why does my API server listening on `/ip4/127.0.0.1/tcp/5001` when I invoke IPFS Daemon when fetching an IPFS Multiaddress?

Bacalhau communicates with IPFS via it's API port and not the swarm port which is why it's **5001** and not **4001**.

The key thing is whether the IPFS node is running on the same host as the Bacalhau daemon. If it is, then **127.0.0.1** is enough to route traffic between the two (because they are both on the same node). If IPFS is running on a different node than Bacalhau, then we need to replace **127.0.0.1** with the IP that the IPFS server is running on.

### What to do when I get error connection refused when running Bacalhau API?

#### Problem
When running `bacalhau --api-host <MY_NODE_PUBLIC_IP> version`  and you get this error message: 

```bash
Error running version: publicapi: after posting request: Post "http://127.0.0.1:1234/version": dial tcp 127.0.0.1:1234: connect: connection refused
```

#### What to do
First, you'll need to check that the bacalhau server is up and running on the same host then it should be connecting using `127.0.0.1`. This can be checked by running `telnet 127.0.0.1 1234`. If telnet is not connecting to **127.0.0.1 1234** on the machine that bacalhau is running then one of 3 things:

- Bacalhau is running on a different machine
- it's running on a different port
- it's not running

### Can I run Bacalhau in a containerized setup (nested containers)?

We don't support this as it will result in the classic Dind(Docker In Docker) problem. 

### Can I start a bacalhau cluster without connecting to the global network?

### Can I use non-docker jobs?

### Can I just use a script (like python or JavaScript) without building a container?

### How do I run a script that requires installing packages from a package repository like pypi or apt?

### Can I stop a job?

### How do I see a job’s progress while it’s running?

### I keep getting “error, job waiting” - why?

### How do I get an IPFS peer if I want to start  Bacalhau Serve?

### Can I run bacalhau serve on my home machine? What are the requirements?

### Is there payment for running a job?
