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
          id: 'using-cli/tutorial-s3-input',
          className: 'tutorial-icon'
        },
        {type: 'ref', id: 'tutorials/workload-onboarding/bacalhau-docker-image/index'},
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
        'using-cli/gpu'
      ],
    },
    {
      type: 'doc',
      id: 'architecture',
      className: 'architecture-icon'
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
        'running-node/quick-start',
        'running-node/quick-start-docker',
        'running-node/networking',
        'running-node/storage-providers',
        'running-node/job-selection',
        'running-node/resource-limits',
        'running-node/test-network',
        'running-node/gpu',
        'running-node/windows-support',
        'running-node/observability'
      ],
    },
    {
      type: 'doc',
      id: 'private-cluster',
      className: 'private-cluster-icon'
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
        'sdk/python-sdk'
      ],
    },
    {
      type: 'category',
      label: 'FAQS',
      className: 'faqs-icon',
      link: {
        type: 'generated-index',
        title: 'Troubleshooting',
        slug: '/troubleshooting',
      },
      collapsed: true,
      items: [
        'troubleshooting/debugging',
        'troubleshooting/faqs',   
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
      label: 'Workload Onboarding',
      link: {
        type: 'generated-index',
        description: "This directory contains examples relating to performing common tasks with Bacalhau.",
      },
      items: [
        'tutorials/workload-onboarding/bacalhau-docker-image/index',
        'tutorials/workload-onboarding/Reading-From-Multiple-S3-Buckets/index',
        'tutorials/workload-onboarding/Running-Jupyter-Notebook/index',
        'tutorials/workload-onboarding/Prolog-Hello-World/index',
        'tutorials/workload-onboarding/Python-Custom-Container/index',
        'tutorials/workload-onboarding/python-pandas/index',
        'tutorials/workload-onboarding/r-custom-docker-prophet/index',
        'tutorials/workload-onboarding/r-hello-world/index',
        'tutorials/workload-onboarding/CUDA/index',
        'tutorials/workload-onboarding/rust-wasm/index',
        'tutorials/workload-onboarding/Sparkov-Data-Generation/index',
        'tutorials/workload-onboarding/custom-containers/index',
        'tutorials/workload-onboarding/CUDA/index',
        'tutorials/workload-onboarding/trivial-python/index',
        'tutorials/workload-onboarding/python-script/index',
      ],
    },
    {
      type: 'category',
      label: 'Data Engineering',
      link: {
        type: 'generated-index',
        description: "This directory contains examples relating to data engineering workloads. The goal is to provide a range of examples that show you how to work with Bacalhau in a variety of use cases.",
      },
      items: [
        'tutorials/data-engineering/blockchain-etl/index',
        'tutorials/data-engineering/csv-to-avro-or-parquet/index',
        'tutorials/data-engineering/DuckDB/index',
        'tutorials/data-engineering/image-processing/index',
        'tutorials/data-engineering/oceanography-conversion/index',
        'tutorials/data-engineering/simple-parallel-workloads/index',
      ],
    },
    {
      type: 'category',
      label: 'Model Inference',
      link: {
        type: 'generated-index',
        description: "This directory contains examples relating to model inference workloads.",
      },
      items: [
        'tutorials/model-inference/Huggingface-Model-Inference/index',
        'tutorials/model-inference/object-detection-yolo5/index',
        'tutorials/model-inference/S3-Model-Inference/index',
        'tutorials/model-inference/Stable-Diffusion-CKPT-Inference/index',
        'tutorials/model-inference/stable-diffusion-cpu/index',
        'tutorials/model-inference/stable-diffusion-gpu/index',
        'tutorials/model-inference/StyleGAN3/index',
        'tutorials/model-inference/EasyOCR/index',
        'tutorials/model-inference/Openai-Whisper/index',
      ],
    },
    {
      type: 'category',
      label: 'Model Training',
      link: {
        type: 'generated-index',
        description: "This directory contains examples relating to model training workloads.",
      },
      items: [
        'tutorials/model-training/Stable-Diffusion-Dreambooth/index',
        'tutorials/model-training/Training-Pytorch-Model/index',
        'tutorials/model-training/Training-Tensorflow-Model/index',
      ],
    },
    {
      type: 'category',
      label: 'Molecular Dynamics',
      link: {
        type: 'generated-index',
        description: "This directory contains examples relating to performing common tasks with Bacalhau.",
      },
      items: [
        'tutorials/molecular-dynamics/BIDS/index',
        'tutorials/molecular-dynamics/Coreset/index',
        'tutorials/molecular-dynamics/Genomics/index',
        'tutorials/molecular-dynamics/Gromacs/index',
        'tutorials/molecular-dynamics/openmm/index',
      ],
    }
  ]
}
