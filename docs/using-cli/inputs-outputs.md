---
title: 'Inputs and Outputs'
sidebar_position: 3
description: How to use docker containers with Bacalhau
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Inputs

Consider that you have a Docker image with a script that counts the number of lines of a file, and you want to execute it on Bacalhau.

<img src="/img/using-cli/inputs-outputs/line-counter.svg" width="200" className="img-center" />

The script needs access to the files in order to count their lines, so a straightforward way is to include the files in the Docker image.

<img src="/img/using-cli/inputs-outputs/line-counter-files.svg" width="350" className="img-center" />

However, with that approach you can not dynamically provide files to the script. 
Therefore, you can not the reuse the Docker image.

The Bacalhau CLI solves this problem by providing the `--input` option, which allows you to specify several inputs files.
These inputs are passed to the Docker container (or the WASM program) at runtime (in Docker terminology, _mounted_).
You can specify input files from different sources: **your local filesystem, an external URL, IPFS or AWS S3**.

<img src="/img/using-cli/inputs-outputs/inputs-sources.svg" width="600" className="img-center" />

Usually, when you specify an input, you should provide:
- An **external location**, where Bacalhau can download the file. This should be publicly accessible by the Bacalhau network.
- An **internal path** within your Docker or WASM program, where Bacalhau will make the file accessible to your computation.

However, the **internal path** is not mandatory. If you do not provide an internal path, Bacalhau defaults to the `/inputs` directory within your Docker or WASM program.

The following command represents the general syntax for providing inputs for both Docker and WASM programs.

<Tabs
defaultValue="Docker"
values={[
{label: 'Docker', value: 'Docker'},
{label: 'WASM', value: 'WASM'},
]}>
<TabItem value="Docker">

    bacalhau docker run \
    --input <EXTERNAL_LOCATION>:<INTERNAL_LOCATION>

</TabItem>
<TabItem value="WASM">

    bacalhau wasm run \
    --input <EXTERNAL_LOCATION>:<INTERNAL_LOCATION>

</TabItem>
</Tabs>

The external location must specify what kind of data you want to provide:

- **HTTP(s):** `--input=https://<ANY_WEBSITE>`. URL directories are NOT supported, only **single files**
- **IPFS:** `--input=ipfs://<CID>`. CID subpaths are NOT supported, only **directories**
- **S3:** `--input=s3://<BUCKET>`. S3 keys and prefixes are supported (e.g. `s3://bucket/logs-2023-04*` for all April 2023 logs)

For example, the following command creates a Docker job that executes a Python script provided as input.
The Python script is hosted on an external website, so you provide the URL.

```bash
bacalhau docker run \
  --input https://raw.githubusercontent.com/bacalhau-project/examples/151eebe895151edd83468e3d8b546612bf96cd05/workload-onboarding/trivial-python/hello-world.py \
  python:3.10-slim -- python3 /inputs/hello-world.py
```

* `bacalhau docker run`: Runs a Docker job
* `--input https://raw.githubusercontent.com/bacalhau-project/examples/151eebe895151edd83468e3d8b546612bf96cd05/workload-onboarding/trivial-python/hello-world.py`:
Specifies a URL where Bacalhau should download the input file. In this case, the input file is a Python script.
* `python:3.10-slim -- python3 /inputs/hello-world.py`: 
  * `python:3.10-slim`: the Docker image to run. In this case, a Python 3.10 image.
  * `-- python3 /inputs/hello-world.py`: entrypoint of the application, which executes the Python script.
  The `hello-world.py` script (which was provided as an input) is available at the `/inputs` folder.

## Outputs

Once the job is executed by the Bacalhau Network, you need a way to read the results.
By default, Bacalhau will store the results of your job on the IPFS public network.

<img src="/img/using-cli/inputs-outputs/outputs.svg" width="700" className="img-center" />

When you run the `bacalhau get <JOB_ID>` command, you are fetching the output data of the job from its storage (i.e. from IPFS).

It is possible to store the output data in the Filecoin network by using [Estuary](https://estuary.tech/), however, it is not supported in the public Bacalhau network.