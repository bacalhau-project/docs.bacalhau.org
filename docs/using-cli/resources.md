---
sidebar_label: 'Specifying Hardware Requirements'
sidebar_position: 20
---

# Specifying Hardware Requirements

Not all jobs are created equal. Some jobs require more resources than others or have specific hardware requirements like GPUs. This page describes how to specify hardware requirements for your job.
Currently, there are three hardware parameters that you can configure: memory, CPU and GPU. However, the WASM executor only supports GPU settings.

To specify the parameters, you can use different Bacalhau CLI flags. The following table describes how to specify hardware requirements for each executor.

Flag | Default | Description | Available for Docker | Available for WASM
---------|----------|---------|---------|---------|
 `--memory` | 100MB ([source](https://github.com/bacalhau-project/bacalhau/blob/main/pkg/capacitymanager/capacitymanager.go#L10)) | Job Memory requirement (e.g. 500Mb, 2Gb, 8Gb). | ✓ | ✓
 `--cpu` | 0.1 ([source](https://github.com/bacalhau-project/bacalhau/blob/main/pkg/capacitymanager/capacitymanager.go#L9)) | Job CPU cores (e.g. 500m, 2, 8) | ✓ | X
 `--gpu` | 0 ([source](https://github.com/bacalhau-project/bacalhau/blob/main/pkg/capacitymanager/capacitymanager.go#L11)) | Job GPU requirement (e.g. 1). | ✓ | X

For example, the following command create a Docker job specifying that 8MB is the minimum memory required:

```
bacalhau docker run ubuntu echo Hello World --memory=8MB
```

## How it Works

When you specify hardware requirements, the job will be offered out to the network to see if there are any nodes that can satisfy the requirements. If there are, the job will be scheduled on the node and the executor will be started.

If there are no nodes that can satisfy the requirements, the job will wait for a node to become available, until it times out [after 3 minutes](https://github.com/bacalhau-project/bacalhau/blob/main/pkg/computenode/config.go#L12).

## Limitations

The following limitations currently exist within Bacalhau.

### Memory
* The maximum memory limit depends on the participants in the network

### CPU
* The maximum CPU limit depends on the participants in the network

### GPU
* Only NVIDIA GPUs are supported
* Only a single GPU is supported
* Your container must include the CUDA runtime (cudart) and must be compatible with the CUDA version running on the node

## Also See

* [GPU workload tutorial](docs/next-steps/gpu.md)
