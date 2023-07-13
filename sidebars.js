/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  documentationSidebar: [
    {

    },
    {
      type: 'doc',
      id: 'intro',
      className: 'intro-icon',
    },
    {
      type: 'doc',
      id: 'getting-started',
      className: 'getting-started-icon'
    },
    {
      type: 'category',
      label: 'Using the CLI',
      className: 'category-icon',
      link: {
        type: 'generated-index',
        title: 'Using the CLI',
        slug: '/using-cli',
        description: "Bacalhau comes pre-loaded with exciting examples to showcase its abilities and help get you started.",
      },
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'using-cli/inputs-outputs',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id: 'using-cli/docker-workload-onboarding',
          className: 'docker-icon'
        },
        {
          type: 'doc',
          id: 'using-cli/wasm-workload-onboarding',
          className: 'wasm-icon'
        },
        {
          type: 'doc',
          id: 'using-cli/networking',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id: 'using-cli/resources',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id: 'all-flags',
          className: 'lecture-icon'
        }
      ],
    },
    {
      type: 'doc',
      id: 'architecture',
      className: 'architecture-icon'
    },
    {
      type: 'doc',
      id: 'private-cluster',
      className: 'private-cluster-icon'
    },
    {
      type: 'category',
      label: 'Joining the Public Network',
      link: {
        type: 'generated-index',
        title: 'Running node',
        slug: '/running-node',
      },
      className: 'public-network-icon',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id:  'running-node/quick-start',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id:  'running-node/quick-start-docker',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id:  'running-node/networking',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id:  'running-node/storage-providers',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id:  'running-node/job-selection',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id:  'running-node/resource-limits',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id:  'running-node/test-network',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id:  'running-node/gpu',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id:  'running-node/windows-support',
          className: 'lecture-icon'
        },
        {
          type: 'doc',
          id:  'running-node/observability',
          className: 'lecture-icon'
        },
      ],
    },
    {
      type: 'category',
      label: 'SDK',
      className: 'sdk-icon',
      link: {
        type: 'generated-index',
        title: 'Running node',
        slug: '/sdk',
      },
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'sdk/python-sdk',
          className: 'python-sdk-icon'
        },
      ],
    },
    {
      type: 'category',
      label: 'Help',
      className: 'help-icon',
      link: {
        type: 'generated-index',
        title: 'Troubleshooting',
        slug: '/troubleshooting',
      },
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'troubleshooting/debugging',
          className: 'debugging-icon'
        },
        {
          type: 'doc',
          id: 'troubleshooting/faqs',
          className: 'faqs-icon'
        },
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      className: 'integrations-icon',
      link: {
        type: 'generated-index',
        title: 'Integration',
        slug: '/integration',
      },
      collapsed: true,
      items: [
        'integration/apache-airflow',
        'integration/amplify'
      ],
    },
    {
      type: 'category',
      label: 'Community',
      link: {
        type: 'generated-index',
        title: 'Community',
        slug: '/community',
      },
      collapsed: true,
      items: [
        'community/compute-landscape',
        'community/development',
        'community/style-guide',
        'community/ways-to-contribute',
      ],
    },
  ],
  tutorials: [
    {
      type: 'doc',
      id: 'tutorials/index',
      className: 'intro-icon',
    },
    {
      type: 'doc',
      id: 'tutorials/bacalhau-docker-image/index',
      className: 'bacalhau-icon',
    },
    {
      type: 'doc',
      id: 'tutorials/custom-containers/index',
      className: 'bacalhau-icon',
    },
    {
      type: 'category',
      label: 'Case Studies',
      link: {
        type: 'generated-index',
        description: "Case Studies",
      },
      items: [
        'tutorials/case-studies/duckdb-log-processing/index',
      ],
    },
    {
      type: 'category',
      label: 'Programming Languages',
      className: "programming-icon",
      link: {
        type: 'generated-index',
        description: "This directory contains examples relating to performing common tasks with Bacalhau.",
      },
      items: [
        {
          type: 'doc',
          id: 'tutorials/programming-languages/Prolog-Hello-World/index',
          className: 'prolog-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/programming-languages/Python-Custom-Container/index',
          className: 'python-sdk-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/programming-languages/python-pandas/index',
          className: 'python-sdk-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/programming-languages/r-custom-docker-prophet/index',
          className: 'r-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/programming-languages/r-hello-world/index',
          className: 'r-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/programming-languages/rust-wasm/index',
          className: 'rust-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/programming-languages/trivial-python/index',
          className: 'python-sdk-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/programming-languages/python-script/index',
          className: 'python-sdk-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/programming-languages/oceanography-conversion/index',
          className: 'python-sdk-icon'
        },
      ],
    },
    {
      type: 'category',
      label: 'Data Engineering',
      link: {
        type: 'generated-index',
        description: "This directory contains examples relating to data engineering workloads. The goal is to provide a range of examples that show you how to work with Bacalhau in a variety of use cases.",
      },
      className: "data-processing-icon",
      items: [
        {
          type: 'doc',
          id: 'tutorials/data-engineering/blockchain-etl/index',
          className: 'ethereum-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/data-engineering/csv-to-avro-or-parquet/index',
          className: 'parquet-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/data-engineering/DuckDB/index',
          className: 'duckdb-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/data-engineering/image-processing/index',
          className: 'image-processing-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/data-engineering/simple-parallel-workloads/index',
          className: 'video-processing-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/data-engineering/Reading-From-Multiple-S3-Buckets/index',
          className: 'aws-s3-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/data-engineering/Running-Jupyter-Notebook/index',
          className: 'jupyter-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/data-engineering/Sparkov-Data-Generation/index',
          className: 'general-data-processing-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/data-engineering/CUDA/index',
          className: 'nvidia-icon'
        },
        'tutorials/data-engineering/gpu-workload/index',
      ],
    },
    {
      type: 'category',
      label: 'Machine Learning',
      link: {
        type: 'generated-index',
        description: "This directory contains examples relating to machine learning workloads.",
      },
      className: "machine-learning-icon",
      items: [
        {
          type: 'doc',
          id: 'tutorials/machine-learning/Huggingface-Model-Inference/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/object-detection-yolo5/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/S3-Model-Inference/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/Stable-Diffusion-CKPT-Inference/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/stable-diffusion-cpu/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/stable-diffusion-gpu/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/StyleGAN3/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/EasyOCR/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/Openai-Whisper/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/Stable-Diffusion-Dreambooth/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/Training-Pytorch-Model/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/Training-Tensorflow-Model/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/BIDS/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/Coreset/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/Genomics/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/Gromacs/index',
          className: 'folder-icon'
        },
        {
          type: 'doc',
          id: 'tutorials/machine-learning/openmm/index',
          className: 'folder-icon'
        },
      ],
    },
  ]
}
