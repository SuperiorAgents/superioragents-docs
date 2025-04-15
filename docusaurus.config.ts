import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Superior Agents Docs',
  tagline:
    'A next-gen framework for self-improving AI, integrating Darwinian intelligence for autonomous adaptation.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://SuperiorAgents.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/superioragents-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SuperiorAgents', // Usually your GitHub org/user name.
  projectName: 'superioragents-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/superioragents/superior-agents/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/superioragents/superior-agents/edit/main/blog/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/superior_agents_logo.jpg',
    navbar: {
      title: 'Superior Agents Docs',
      logo: {
        alt: 'Superior Agents Logo',
        src: 'img/superior_agents_logo.jpg',
      },
      items: [
        { to: 'docs/category/getting-started', label: 'Documentation', position: 'left' },
        { to: '/blog', label: 'Blogs', position: 'left' },
        { to: '/research', label: 'Research', position: 'left' },        
        {
          href: 'https://github.com/SuperiorAgents/superioragents-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    footer: {
      //style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/docs/category/getting-started',
            },
            {
              label: 'arXiv Research Paper',
              href: 'https://arxiv.org/abs/2504.04711',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/865JrDPU2J',
            },
            {
              label: 'X',
              href: 'https://x.com/Superior_Agents',
            },
          ],
        },
        { 
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SuperiorAgents/superior-agents',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KIP Protocol`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },    
  } satisfies Preset.ThemeConfig,
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "zh"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      }),
    ],
  ],
};

export default config;
