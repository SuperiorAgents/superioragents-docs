import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    // 1. Getting Started
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        title: 'Getting Started',
        description: 'Introduction, use cases, and community for Superior Agents.',
      },
      items: [
        'getting-started/intro-superioragents',
        'getting-started/usecase-superioragents',
        'getting-started/community-superioragents',
      ],
    },
    // 2. Architecture & Design
    {
      type: 'category',
      label: 'Architecture & Design',
      link: {
        type: 'generated-index',
        title: 'Architecture & Design',
        description: 'System overview and design details.',
      },
      items: [
        // Top-level overview page for Architecture & Design
        'architecture-design/system-overview',
        // Core Components subcategory
        {
          type: 'category',
          label: 'Core Components',
          link: {
            type: 'generated-index',
            title: 'Core Components',
            description: 'The core components of Superior Agents.',
          },
          items: [
            'architecture-design/core-components/self-improvement',
            'architecture-design/core-components/intelligence-evaluation',
            'architecture-design/core-components/intelligence-generalization',
            'architecture-design/core-components/experimental-environment',
          ],
        },
        // Learning Loops & Feedback subcategory
        {
          type: 'category',
          label: 'Learning Loops & Feedback',
          link: {
            type: 'generated-index',
            title: 'Learning Loops & Feedback',
            description: 'Feedback mechanisms and learning loops for Superior Agents.',
          },
          items: [
            'architecture-design/learning-loops-feedback/real-time-metrics',
          ],
        },
      ],
    },
    // 3. Technical Reference
    {
      type: 'category',
      label: 'Technical Reference',
      items: [
        {
          type: 'category',
          label: 'Installation',
          link: {
            type: 'generated-index',
            title: 'Installation',
            description: 'Guides and configuration for installation.',
          },
          items: [
            'technical-reference/installation/dependency-setup'
          ],
        },
        {
          type: 'category',
          label: 'Agent Setup',
          link: {
            type: 'generated-index',
            title: 'Agent Setup',
            description: 'Guides for setting up agents.',
          },
          items: [
            'technical-reference/agent-setup/trading-agent',
            'technical-reference/agent-setup/marketing-agent'
          ],
        },
        {
          type: 'category',
          label: 'Running Agents',
          link: {
            type: 'generated-index',
            title: 'Running Agents',
            description: 'Guides for running agents.',
          },
          items: [
            'technical-reference/running-agent/cli-commands',
            'technical-reference/running-agent/fastapi-setup',
            'technical-reference/running-agent/docker-container',
          ],
        },
        {
          type: 'category',
          label: 'Alternative: GUI Setup',
          link: {
            type: 'generated-index',
            title: 'Alternative: GUI Setup',
            description: 'Guides for setting up agents through a web based interface.',
          },
          items: [
            'technical-reference/gui-setup/web-based-agent',
            'technical-reference/gui-setup/role-prompt',
          ],
        },
      ],
    },
    // 4. Use Cases (bottom)
    {
      type: 'category',
      label: 'Use Cases',
      link: {
        type: 'generated-index',
        title: 'Use Cases',
        description: 'Real-world use cases for Superior Agents.',
      },
      items: [
        'use-cases/usecase-overview',
        {
          type: 'category',
          label: 'Case Study',
          link: {
            type: 'generated-index',
            title: 'Case Study',
            description: 'Case studies on Superior Agents in action.',
          },
          items: [
            'use-cases/case-study/cybersecurity-agent',
            'use-cases/case-study/marketing-agent',
          ],
        },
        {
          type: 'category',
          label: 'Monetization Model',
          link: {
            type: 'generated-index',
            title: 'Monetization Model',
            description: 'Insights into monetization strategies using Superior Agents.',
          },
          items: [
            'use-cases/monetization-model/agent-service',
            'use-cases/monetization-model/tokenized-agent',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
