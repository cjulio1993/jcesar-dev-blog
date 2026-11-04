import type { ProjectBase, Technology } from './types';

export const SITE_URL = 'https://jcesar.dev.br';

export const socialLinks = {
  github: 'https://github.com/cjulio1993',
  linkedin: 'https://www.linkedin.com/in/julio-cesar-70938b60',
  localCodePilot: 'https://localcodepilot.com.br',
  email: 'mailto:juliocs78383@gmail.com'
};

export const technologies = [
  { name: 'Python', icon: 'python/python-original.svg', group: 'backend' },
  { name: 'PHP', icon: 'php/php-original.svg', group: 'backend' },
  { name: 'Laravel', icon: 'laravel/laravel-original.svg', group: 'backend' },
  { name: 'Symfony', icon: 'symfony/symfony-original.svg', group: 'backend' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg', group: 'frontend' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg', group: 'frontend' },
  { name: 'Vue.js', icon: 'vuejs/vuejs-original.svg', group: 'frontend' },
  { name: 'Rust', icon: 'rust/rust-original.svg', group: 'tools' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg', group: 'backend' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg', group: 'data' },
  { name: 'MySQL', icon: 'mysql/mysql-original.svg', group: 'data' },
  { name: 'Microsoft SQL Server', icon: 'microsoftsqlserver/microsoftsqlserver-original.svg', group: 'data' },
  { name: 'Docker', icon: 'docker/docker-original.svg', group: 'tools' },
  { name: 'Git', icon: 'git/git-original.svg', group: 'tools' }
] as const satisfies readonly Technology[];


export const sharedProjects = {
  localcodepilot: {
    title: 'LocalCodePilot',
    eyebrow: 'Open source · Developer tooling',
    stack: ['Rust', 'egui', 'Docker / Podman', 'HTTP', 'Desktop'],
    href: 'https://localcodepilot.com.br',
    repo: 'https://github.com/cjulio1993/LocalCodePilot',
    featured: true
  },
  banking: {
    title: 'Financial Integration API',
    eyebrow: 'Production · Financial integration',
    stack: ['PHP', 'Laravel/Symfony', 'Queues', 'SQL Server'],
    featured: true
  },
  taskflow: {
    title: 'TaskFlow',
    eyebrow: 'Portfolio · Full stack',
    stack: ['Laravel', 'Vue 3', 'Sanctum', 'Pest'],
    featured: true
  },
  platform: {
    title: 'Enterprise Platform APIs',
    eyebrow: 'Production · Platform modernization',
    stack: ['REST', 'SOAP', 'OpenAPI', 'Observability'],
    featured: false
  }
} satisfies Record<string, ProjectBase>;
