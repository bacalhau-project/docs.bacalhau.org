---
sidebar_label: 'Private Cluster'
sidebar_position: 5
---
# Private Cluster

It is possible to run Bacalhau completely disconnected from the main Bacalhau network, so that you can run private
workloads without risking running on public nodes. The isolated network will not connect to the public Bacalhau network
nor connect to the public IPFS network. To simplify the process, we will run IPFS in-process rather than externally [^1].

:::info
The in-process IPFS is easier to set up, but an IPFS server is better for production. The in-process IPFS
will use a temporary directory for its repository and so the contents will be lost on shutdown.
:::

## How to set up In-Process IPFS

The first step is to s

- Start up the initial node, which we will use as the `requester node`. This node will connect to nothing but will listen for connections.

```bash
bacalhau serve --node-type requester --private-internal-ipfs --peer none
```

- To connect another node to this private one, run the following command in your shell:

```
bacalhau serve --private-internal-ipfs --peer /ip4/192.168.1.224/tcp/1235/p2p/QmWg7m5GyAhocrd8o18dtntua7dQeEHpuHxC3niRH4pnvE --ipfs-swarm-addr /ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2
```
The command `bacalhau serve --private-internal-ipfs --peer ...`) is used to start up compute nodes and add them to the cluster.

- To use this requester node from the client, run the following commands in your shell:

```
export BACALHAU_IPFS_SWARM_ADDRESSES=/ip4/192.168.1.224/tcp/53291/p2p/QmdCLbe2pUoGjCzffd75U8w1LTiVpSap88rNjzXsBhWkL2
export BACALHAU_API_HOST=0.0.0.0
export BACALHAU_API_PORT=1234
```

The command `export BACALHAU_IPFS_SWARM_ADDRESSES=...` is used send jobs into the cluster from the command line client.


