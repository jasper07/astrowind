import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'What We Do',
      href: getPermalink('/#services'),
      links: [
        {
          text: 'SAP Platform Migration',
          href: getPermalink('/#SAPPlatformMigration'),
        },
        {
          text: 'Clean Core BTP Strategy',
          href: getPermalink('/#CleanCoreBTPStrategy'),
        },
        {
          text: 'Legacy Application Modernization',
          href: getPermalink('/#LegacyApplicationModernization'),
        },
        {
          text: 'DevOps Adoption',
          href: getPermalink('/#DevOpsAdoption'),
        },
        {
          text: 'BTP Multitenant Product Development',
          href: getPermalink('/#BTPMultitenantProductDevelopment'),
        },
        {
          text: 'Application Performance Optimization',
          href: getPermalink('/#ApplicationPerformanceOptimization'),
        },
        {
          text: 'Security and Compliance Readiness',
          href: getPermalink('/#SecurityandComplianceReadiness'),
        },
        {
          text: 'Technical Rescue',
          href: getPermalink('/#TechnicalRescue'),
        },
        {
          text: 'Consulting Partner Oversight',
          href: getPermalink('/#ConsultingPartnerOversight'),
        },
        {
          text: 'Team Recruitment',
          href: getPermalink('/#TeamRecruitment'),
        },
      ],
    },
    {
      text: 'Who We Are',
      href: getPermalink('/#about'),
    },
    {
      text: 'What They Say',
      href: getPermalink('/#testimonials'),
    },
    {
      text: 'Talk To Us!',
      href: getPermalink('/#contact'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    //   links: [
    //     {
    //       text: 'Blog List',
    //       href: getBlogPermalink(),
    //     },
    // //     {
    // //       text: 'Article',
    // //       href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
    // //     },
    // //     {
    // //       text: 'Article (with MDX)',
    // //       href: getPermalink('markdown-elements-demo-post', 'post'),
    // //     },
    // //     {
    // //       text: 'Category Page',
    // //       href: getPermalink('tutorials', 'category'),
    // //     },
    // //     {
    // //       text: 'Tag Page',
    // //       href: getPermalink('astro', 'tag'),
    // //     },
    //   ],
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        // { text: 'Features', href: '#' },
        // { text: 'Security', href: '#' },
        // { text: 'Team', href: '#' },
        // { text: 'Enterprise', href: '#' },
        // { text: 'Customer stories', href: '#' },
        // { text: 'Pricing', href: '#' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        // { text: 'Developer API', href: '#' },
        // { text: 'Partners', href: '#' },
        // { text: 'Atom', href: '#' },
        // { text: 'Electron', href: '#' },
        // { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        // { text: 'Docs', href: '#' },
        // { text: 'Community Forum', href: '#' },
        // { text: 'Professional Services', href: '#' },
        // { text: 'Skills', href: '#' },
        // { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/#about' },
         { text: 'Blog', href: '/blog' },
        // { text: 'Careers', href: '#' },
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/jasper_07' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://https://github.com/jasper07/' },
  ],
  footNote: `
  `,
};
