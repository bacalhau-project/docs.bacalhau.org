---
sidebar_label: InputSource
---

# InputSource Specification

An `InputSource` defines where and how to retrieve specific artifacts needed for a [`Task`](task), such as files or data, and where to mount them within the task's context. This ensures the necessary data is present before the task's execution begins.

Bacalhau's `InputSource` is designed with flexibility at its core. As of now, it natively supports fetching data from remote sources like S3 and IPFS and can also mount local directories. The beauty of Bacalhau lies in its consistent and intuitive `InputSource` structure, making the integration of additional input types straightforward.

## `InputSource` Parameters:

- **Source** <code>(<a href="./spec-config">SpecConfig</a> : \<required\>)</code>: Specifies the origin of the artifact, which could be a URL, an S3 bucket, or other locations.

- **Alias** `(string: <optional>)`: An optional identifier for this input source. It's particularly useful for dynamic operations within a task, such as dynamically importing data in WebAssembly using an alias.

- **Target** `(string: <required>)`: Defines the path inside the task's environment where the retrieved artifact should be mounted or stored. This ensures that the task can access the data during its execution.

## Usage Examples
```YAML
InputSources:
  - Source:
      Type: s3
      Params:
        Bucket: my_bucket
        Region: us-west-1
    Target: /my_s3_data
  - Source:
      Type: localDirectory
      Params:
        SourcePath: /path/to/local/directory
        ReadWrite: true
    Target: /my_local_data
```

In this example, the first input source fetches data from an S3 bucket and mounts it at `/my_s3_data` within the task. The second input source mounts a local directory at `/my_local_data` and allows the task to read and write data to it.