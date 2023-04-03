---
sidebar_label: 'Job Selection Policy'
sidebar_position: 140
---

# Job selection policy

When running a node, you can choose which jobs you want to run. This is done by passing a combination of `--job-selection` type flags to `bacalhau serve`.

```
  --job-selection-data-locality string   Only accept jobs that reference data we have locally ("local") or anywhere ("anywhere"). (default "local")
  --job-selection-probe-exec string      Use the result of a exec an external program to decide if we should take on the job.
  --job-selection-probe-http string      Use the result of a HTTP POST to decide if we should take on the job.
  --job-selection-reject-stateless       Reject jobs that don't specify any data.
```

These are the flags that control how the bacalhau node selects jobs to run.

The `--job-selection-data-locality` flag (which can be "local" or "anywhere") controls whether the data used for a job has a actually live on the IPFS server you are connected to.

The `--job-selection-reject-stateless` controls whether you want to accept jobs that don't use any data volumes.

## Job selection hooks

If you want more control over making the decision to take on jobs, you can use the `--job-selection-probe-exec` and `--job-selection-probe-http` flags.

These are external programs that are passed the following data structure, so that they can make a decision about whether or not to take on a job:

```json
{
  "node_id": "XXX",
  "job_id": "XXX",
  "spec": {
    "engine": "docker",
    "verifier": "ipfs",
    "job_spec_vm": {
      "image": "ubuntu:latest",
      "entrypoint": ["cat", "/file.txt"]
    },
    "inputs": [{
      "engine": "ipfs",
      "cid": "XXX",
      "path": "/file.txt"
    }]
  }
}
```

The `exec` probe will run a script that will be given the job data on `stdin`. It must exit with status code 0 if the job should be run.

The `http` probe will POST the job data to a URL. It must return a 200 status code if the job should be run.