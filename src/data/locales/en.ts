import { sharedProjects } from '../shared';
import type { SiteCopy } from '../types';

const en: SiteCopy = {
  nav: { home: 'Home', projects: 'Projects', about: 'About', blog: 'Writing', contact: 'Contact' },
  ui: {
    language: 'Language', theme: 'Theme', menu: 'Menu', skip: 'Skip to content',
    read: 'Read article', viewAll: 'View all', viewProject: 'View project', source: 'Source code',
    minRead: 'min read', search: 'Search articles', noResults: 'No articles found.',
    all: 'All', backToBlog: 'Back to writing',
    related: 'Keep reading', updated: 'Updated', onThisPage: 'On this page', readIn: 'Also in',
    draft: 'Draft', allTopics: 'All topics', articles: 'articles',
    seriesPart: 'Part', seriesPrev: 'Previous in series', seriesNext: 'Next in series',
    filterOpenSource: 'Open source / portfolio', filterCaseStudies: 'Case studies'
  },
  meta: {
    title: 'Julio Cesar — Software Engineer & Backend Specialist',
    description: 'Software engineer building reliable APIs, financial integrations and developer tools with PHP, Laravel, Vue and Rust.'
  },
  hero: {
    availability: 'Open to international remote opportunities',
    kicker: 'Software Engineer · Backend & Integrations',
    title: 'I turn complex rules into reliable software.',
    intro: 'More than four years building APIs, corporate integrations and web products — from financial workflows in production to open-source developer tooling.',
    primary: 'Explore my work', secondary: 'Read the blog', photoAlt: 'Photo of Julio Cesar',
    location: 'Brazil · Working globally', sceneLabel: 'From code to reality.'
  },
  stats: [
    { value: '4+', label: 'years in software' },
    { value: '50', label: 'simultaneous API connections validated' },
    { value: '3', label: 'languages on this site' },
    { value: '1', label: 'open-source product launched' }
  ],
  sections: {
    stackEyebrow: 'Toolkit', stackTitle: 'Technology is a means. Reliability is the outcome.',
    stackText: 'A production-oriented stack for APIs, modern web interfaces, data and developer tooling.',
    workEyebrow: 'Selected work', workTitle: 'Systems built around real constraints.',
    workText: 'Public projects and anonymized production case studies focused on architecture, resilience and maintainability.',
    experienceEyebrow: 'Experience', experienceTitle: 'A path from business operations to software engineering.',
    writingEyebrow: 'Writing', writingTitle: 'What I learn, I document.',
    writingText: 'Practical notes about backend engineering, architecture, production lessons and building products.',
    ctaTitle: 'Have a hard problem worth solving?', ctaText: 'I am interested in remote software engineering roles, technical collaborations and useful products.', ctaButton: 'Start a conversation'
  },
  projects: [
    { ...sharedProjects.localcodepilot, description: 'A desktop app built in Rust that discovers local projects, recognizes WordPress, diagnoses runtimes and databases, and brings processes, logs, HTTP health checks and confirmed container operations together.', impact: 'Public alpha 7: Windows distribution, experimental universal macOS DMG, built-in help and updates matched to each operating system.' },
    { ...sharedProjects.banking, description: 'A resilient file-delivery workflow for banking integrations, designed with dispatcher/worker processing, retries and a dead-letter queue.', impact: 'Structured logs, correlation IDs and idempotency make failures traceable and safe to recover without duplicate processing.' },
    { ...sharedProjects.taskflow, description: 'A project and task management application built as a complete Laravel and Vue SPA, with a polished board experience.', impact: 'Sanctum authentication, authorization policies and 15 automated tests with 47 assertions.' },
    { ...sharedProjects.platform, description: 'REST and SOAP interfaces that modernize access to an enterprise platform while preserving compatibility with legacy clients.', impact: 'Incremental modernization with authentication, rate limits, contract documentation and production observability.' }
  ],
  experience: [
    { period: '2023 — now', role: 'Software Engineer', company: 'Backend systems & integrations', text: 'Backend services and banking/corporate integrations. API reliability, queues, idempotency, observability, automated tests and gradual modernization of legacy systems.' },
    { period: '2022 — 2023', role: 'PHP Developer', company: 'Web applications', text: 'Web applications, APIs, SQL features and integrations delivered from implementation through production.' },
    { period: '2016 — 2022', role: 'Operations & Team Leadership', company: 'Operations & customer relationships', text: 'Led teams, operations and customer relationships — experience that now shapes pragmatic engineering and product decisions.' }
  ],
  about: {
    title: 'Engineering with context, not just code.',
    lead: 'I am Julio Cesar, a Brazilian software engineer focused on backend systems, APIs and integrations that need to remain understandable under real production pressure.',
    body: [
      'My main stack is PHP with Laravel and Symfony, supported by Vue, JavaScript/TypeScript and relational databases. I work with REST and SOAP integrations, asynchronous processing, authentication, rate limiting, observability and automated testing.',
      'I prefer evolutionary architecture: understand the risks, protect current behavior with tests and modernize in small, reversible steps. This approach has been especially valuable when replacing legacy components without interrupting critical business flows.',
      'Outside work, I build LocalCodePilot in Rust and document what I learn. I care about developer experience, clear communication and software that leaves a codebase better than I found it.'
    ],
    educationTitle: 'Education & languages',
    education: ['MBA in Software Engineering — USP (in progress)', 'Technology degree in Systems Analysis and Development — UNISA'],
    languages: ['Portuguese — native', 'English — intermediate', 'Spanish — intermediate'],
    principlesTitle: 'How I work',
    principles: [
      { title: 'Reliability first', text: 'Failures are expected; recovery, traceability and idempotency are designed in.' },
      { title: 'Modernize safely', text: 'Small steps, contract protection and measurable behavior beat risky rewrites.' },
      { title: 'Business context', text: 'Architecture decisions should reduce risk and create value, not merely add novelty.' },
      { title: 'Share the learning', text: 'Writing makes decisions clearer and turns experience into reusable knowledge.' }
    ]
  },
  contact: { title: 'Let’s build something useful.', text: 'For remote roles, collaborations or a technical conversation, the best way to reach me is LinkedIn or email.', response: 'I usually reply within two business days.', emailLabel: 'Email me', linkedinLabel: 'Connect on LinkedIn', githubLabel: 'Follow the work on GitHub' },
  blog: { title: 'Notes from the workbench.', text: 'Production lessons, architecture decisions and honest notes from building software.', latest: 'Latest article', seriesEyebrow: 'Series', rss: 'Subscribe via RSS' }
};

export default en;
