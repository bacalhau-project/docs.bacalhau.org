module.exports = {
  tutorialsSidebar: [
    {
      type: 'category',
      label: 'Examples',
      className: 'tutorials-icon',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Case Studies',
          link: {
            type: 'generated-index',
            description: "Case Studies",
          },
          items: [
            'case-studies/duckdb-log-processing/index',
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
            'workload-onboarding/bacalhau-docker-image/index',
            'workload-onboarding/Reading-From-Multiple-S3-Buckets/index',
            'workload-onboarding/Running-Jupyter-Notebook/index',
            'workload-onboarding/Prolog-Hello-World/index',
            'workload-onboarding/Python-Custom-Container/index',
            'workload-onboarding/python-pandas/index',
            'workload-onboarding/r-custom-docker-prophet/index',
            'workload-onboarding/r-hello-world/index',
            'workload-onboarding/CUDA/index',
            'workload-onboarding/rust-wasm/index',
            'workload-onboarding/Sparkov-Data-Generation/index',
            'workload-onboarding/custom-containers/index',
            'workload-onboarding/CUDA/index',
            'workload-onboarding/trivial-python/index',
            'workload-onboarding/python-script/index',
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
            'data-engineering/blockchain-etl/index',
            'data-engineering/csv-to-avro-or-parquet/index',
            'data-engineering/DuckDB/index',
            'data-engineering/image-processing/index',
            'data-engineering/oceanography-conversion/index',
            'data-engineering/simple-parallel-workloads/index',
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
            'model-inference/Huggingface-Model-Inference/index',
            'model-inference/object-detection-yolo5/index',
            'model-inference/S3-Model-Inference/index',
            'model-inference/Stable-Diffusion-CKPT-Inference/index',
            'model-inference/stable-diffusion-cpu/index',
            'model-inference/stable-diffusion-gpu/index',
            'model-inference/StyleGAN3/index',
            'model-inference/EasyOCR/index',
            'model-inference/Openai-Whisper/index',
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
            'model-training/Stable-Diffusion-Dreambooth/index',
            'model-training/Training-Pytorch-Model/index',
            'model-training/Training-Tensorflow-Model/index',
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
            'molecular-dynamics/BIDS/index',
            'molecular-dynamics/Coreset/index',
            'molecular-dynamics/Genomics/index',
            'molecular-dynamics/Gromacs/index',
            'molecular-dynamics/openmm/index',
          ],
        },
      ],
    },
  ]
}
