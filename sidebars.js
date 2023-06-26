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
        'using-cli/networking',
        'using-cli/resources',
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
}
