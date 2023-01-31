---
sidebar_position: 4
sidebar_label: "Networking"
---

# Accessing the Internet from jobs

By default, Bacalhau jobs do not have any access to the Internet. This is to keep both compute providers and users safe from malicious activity.

However, there are lots of ways to read data from outside the job and write back results.

## Using data volumes

When you submit a Bacalhau job, you can specify Internet locations to download data from and write results to. Both [Docker](../getting-started/docker-workload-onboarding.md) and [WebAssembly](../getting-started/wasm-workload-onboarding.md) jobs support these features.

Jobs can specify an IPFS CID or HTTP(S) URL to download data from. The data will be retrieved before the job starts and made available to the job as a directory on the filesystem. Jobs can specify as many CIDs or URLs as they need. See [the documentation](../all-flags.md) on command line flags `--input-volumes` and `--input-urls` which are accepted by both `bacalhau docker run` and `bacalhau wasm run`.

Jobs can write results back to a temporary IPFS node run by Bacalhau, to a persistent IPFS storage location, or directly to a Filecoin storage provider. By default, jobs will write results to both a Bacalhau IPFS node and persistently to Filecoin via [Estuary](https://estuary.tech). See [the documentation](../all-flags.md) on the `--publisher` command line flag for how to configure this.

To use these features, the data to download has to be known before the job starts. For some workloads, the required data is computed as part of the job or the purpose of the job is to process web results. In these cases, networking may be possible during job execution.

## Accessing the Internet from within jobs

Docker jobs on Bacalhau can specify that they need one of:

* `full` networking (unfiltered networking for any protocol)
* `http` networking (HTTP(S)-only networking to a specified list of domains)
* `none` (no networking at all, the default)

:::tip
This option is separate from the above options for data volumes – specifying `none` will still allow Bacalhau to download and upload data before and after the job.
:::

Jobs using `http` must specify the domains they want to access when the job is submitted. When the job runs, only HTTP requests to those domains will be possible and data transfer will be rate limited to 10Mbit/sec in either direction.

Jobs will be provided with [`http_proxy` and `https_proxy` environment variables](https://about.gitlab.com/blog/2021/01/27/we-need-to-talk-no-proxy/) which contain a TCP address of an HTTP proxy to connect through. Most tools and libraries will use these environment variables by default. If not, they must be used by user code to configure HTTP proxy usage.

The required networking can be specified using the `--network` flag. For `http` networking, the required domains can be specified using the `--domain` flag, multiple times for as many domains as required. Specifying a domain starting with a `.` means that all sub-domains will be included. For example, specifying `.example.com` will cover `some.thing.example.com` as well as `example.com`.

:::caution
Bacalhau jobs are explicitly prevented from starting other Bacalhau jobs, even if a Bacalhau requestor node is specified on the HTTP allowlist.
:::

### Support for networked jobs on the public network

Bacalhau has support for *describing* jobs that can access the Internet during job execution. Whether or not any compute nodes want to *run* jobs that require Internet access is dependent on what compute nodes are currently part of the network.

Compute nodes that join the Bacalhau network do not accept networked jobs by default (i.e. they only accept jobs that specify `--network=none`, which is also the default).

The public compute nodes provided by the Bacalhau Project will accept jobs that require HTTP networking as long as the domains are from [this allowlist](https://github.com/filecoin-project/bacalhau/blob/main/ops/terraform/remote_files/scripts/http-domain-allowlist.txt). Other compute providers with different allowlists may be available.

If you need to access a domain that isn't on the allowlist, you can make a request to the Bacalhau Project team to include your required domains. You can also stand up your own compute node that implements the allowlist you need.
