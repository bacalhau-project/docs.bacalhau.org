---
sidebar_label: 'Configuration'
sidebar_position: 160
description: How to configure your Bacalhau node.
---

# Configuration Overview

Bacalhau employs the [viper](https://github.com/spf13/viper) and [cobra](https://github.com/spf13/cobra) libraries for configuration management. Users can configure their Bacalhau node through a combination of command-line flags, environment variables, and the dedicated configuration file.

## The Bacalhau Repo

Bacalhau manages its configuration, metadata, and internal state within a specialized repository named `.bacalhau`. Serving as the heart of the Bacalhau node, this repository holds the data and settings that determine node behavior. It's located on the user's filesystem, and by default, Bacalhau initializes this repository at the `$HOME/.bacalhau` location.

To customize this location, users can:

1. Set the `BACALHAU_DIR` environment variable.
2. Utilize the `--repo` flag and specify their desired path.

Upon executing a Bacalhau command for the first time, the system will initialize the `.bacalhau` repository. If such a repository already exists, Bacalhau will seamlessly access its contents.

**Structure of a Newly Initialized `.bacalhau`** Repository

Below is the structure of a freshly initialized `.bacalhau` repository:

```shell
$ tree ~/.bacalhau
├── QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv-compute
│   ├── executions.db
│   └── jobStats.json
├── QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv-requester
│   └── jobs.db
├── config.yaml
├── executor_storages
├── libp2p_private_key
├── plugins
├── repo.version
└── user_id.pem
```

This repository comprises four directories and seven files:

- - **Files**:
  
    1. `user_id.pem`:
       - This file houses the Bacalhau node's user private key, used for signing requests to a Requester Node.
       - Format: RSA private key.
    2. `repo.version`:
       - Indicates the version of the Bacalhau node's repository.
       - Format: JSON, e.g., `{"Version":1}`.
    3. `libp2p_private_key`:
       - Stores the Bacalhau node's [libp2p](https://libp2p.io/) private key, essential for its network identity. The NodeID of a Bacalhau node is derived from this key.
       - Format: Base64 encoded RSA private key.
    4. `config.yaml`:
       - Contains configuration settings for the Bacalhau node.
       - Format: YAML.
  
    **Directories**:
  
    1. `QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv-compute`:
       - Houses the [BoltDB](https://github.com/etcd-io/bbolt) `executions.db` database, which aids the Compute node in state persistence. Additionally, the `jobStats.json` file records the Compute Node's completed jobs tally.
       - Note: The segment `QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv` is a unique NodeID for each Bacalhau node, derived from the `libp2p_private_key`.
    2. `QmdGUjsMHEgtAfdtw7U62yPEcAZFtA33tKMsczLToegZtv-requester`:
       - Contains the [BoltDB](https://github.com/etcd-io/bbolt) `jobs.db` database for the Requester node's state persistence.
       - Note: NodeID derivation is similar to the Compute directory.
    3. `executor_storages`:
       - Storage for data handled by Bacalhau storage drivers.
    4. `plugins`:
       - Houses binaries that allow the Compute node to execute specific tasks.
       - Note: This feature is currently experimental and isn't active during standard node operations.

## Configuring a Bacalhau Node

Within a `.bacalhau` repository, a `config.yaml` file may be present. This file serves as the configuration source for the bacalhau node and adheres to the YAML format. 

**Note:** On the initialization of a new `.bacalhau` repository, Bacalhau will generate a `config.yaml` file. However, if Bacalhau is opening an existing repository, it will not create this file if it's absent.

 Although the `config.yaml` file is optional, its presence allows Bacalhau to load custom configurations; otherwise, Bacalhau operates with its built-in default values. 

Modifications to the `config.yaml` file will not be dynamically loaded by the Bacalhau node. A restart of the node is imperative for any changes to take effect. Bacalhau determines its configuration based on the following precedence order, with each item superseding the subsequent:

1. Flag
2. Environment Variable
3. Config File
4. Defaults

**Relationship Between `config.yaml` and Bacalhau Environment Variables** 

Bacalhau establishes a direct relationship between the leaf keys within the `config.yaml` file and corresponding environment variables. For leaf keys, the environment variable name is constructed by capitalizing each segment of the key, and then joining them with underscores, prefixed with `BACALHAU_`. 

For example, a YAML leaf key with the path `Node.Ipfs.Connect` translates to the environment variable `BACALHAU_NODE_IPFS_CONNECT`. 

It's important to emphasize that this transformation applies exclusively to leaf keys. Nodes with nested values within the `config.yaml` are not represented as environment variables in this manner.

### Environments

- Bacalhau leverages the `BACALHAU_ENVIRONMENT` environment variable to determine the specific environment configuration when initializing a repository. Notably, if a `.bacalhau` repository has already been initialized, the `BACALHAU_ENVIRONMENT` setting will be disregarded.

  By default, if the `BACALHAU_ENVIRONMENT` variable is not explicitly set by the user, Bacalhau will adopt the `production` environment settings.

  Below is a breakdown of the configurations associated with each environment:

  #### 1. Production (public network)

  - **Environment Variable:** `BACALHAU_ENVIRONMENT=production`
  - Configurations:
    - `Node.ClientAPI.Host`: `"bootstrap.production.bacalhau.org"`
    - `Node.Client.API.Host`: `1234`
    - *...other configurations specific to this environment...*

  #### 2. Staging (staging network)

  - **Environment Variable:** `BACALHAU_ENVIRONMENT=staging`
  - Configurations:
    - `Node.ClientAPI.Host`: `"bootstrap.staging.bacalhau.org"`
    - `Node.Client.API.Host`: `1234`
    - *...other configurations specific to this environment...*

  #### 3. Development (development network)

  - **Environment Variable:** `BACALHAU_ENVIRONMENT=development`
  - Configurations:
    - `Node.ClientAPI.Host`: `"bootstrap.development.bacalhau.org"`
    - `Node.Client.API.Host`: `1234`
    - *...other configurations specific to this environment...*

  #### 4. Local (private or local networks)

  - **Environment Variable:** `BACALHAU_ENVIRONMENT=local`
  - Configurations:
    - `Node.ClientAPI.Host`: `"0.0.0.0"`
    - `Node.Client.API.Host`: `1234`
    - *...other configurations specific to this environment...*

  ------

  **Note**: The above configurations provided for each environment are not exhaustive. Consult the specific environment documentation for a [comprehensive list of configurations](https://github.com/bacalhau-project/bacalhau/tree/main/pkg/config/configenv).

## Usage Examples

**How to initialize a Bacalhau Server for a local private network**

```
$ env BACALHAU_ENVIRONMENT=local ./bin/darwin_arm64/bacalhau serve 
INF pkg/repo/fs.go:187 > Initializing repo at '/Users/frrist/.bacalhau' for environment 'local'
```

**How to initialize a Bacalhau Server with a custom repo path**

```
$ bacalhau --repo=/path/to/repo serve
INF pkg/repo/fs.go:187 > Initializing repo at '/path/to/repo' for environment 'production'
```

Or

```
$ export BACALHAU_DIR=/path/to/repo
$ bacalhau serve
INF pkg/repo/fs.go:187 > Initializing repo at '/path/to/repo' for environment 'production'
```

**How to start a Bacalhau Server with DEBUG logs**

```
$ env LOG_LEVEL=debug ./bin/darwin_arm64/bacalhau serve
DBG pkg/system/environment.go:53 > Defaulting to production environment: os.Args: [./bin/darwin_arm64/bacalhau serve]

```
