import type { Locale } from '@/i18n';

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
] as const;

const sharedProjects = {
  localcodepilot: {
    title: 'LocalCodePilot',
    eyebrow: 'Open source · Developer tooling',
    stack: ['Rust', 'egui', 'Processes', 'Desktop'],
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
};

export const copy: Record<Locale, any> = {
  en: {
    nav: { home: 'Home', projects: 'Projects', about: 'About', blog: 'Writing', contact: 'Contact' },
    ui: {
      language: 'Language', theme: 'Theme', menu: 'Menu', skip: 'Skip to content',
      read: 'Read article', viewAll: 'View all', viewProject: 'View project', source: 'Source code',
      minRead: 'min read', search: 'Search articles', noResults: 'No articles found.',
      all: 'All', copyEmail: 'Copy email', copied: 'Email copied', backToBlog: 'Back to writing'
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
      primary: 'Explore my work', secondary: 'Read the blog', photoAlt: 'Profile photo placeholder for Julio Cesar',
      photoHint: 'Your photo here', location: 'Brazil · Working globally',
      codeLines: ['design(reliable_systems)', 'ship(production_apis)', 'learn(build_share)']
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
      { ...sharedProjects.localcodepilot, description: 'A desktop app that detects local projects, understands their stacks and starts development processes with status and logs in one place.', impact: 'Launched its first public version as an open-source product, with support for PHP, JavaScript, Python and Rust projects.' },
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
    blog: { title: 'Notes from the workbench.', text: 'Production lessons, architecture decisions and honest notes from building software.', featured: 'Latest articles' }
  },
  'pt-br': {
    nav: { home: 'Início', projects: 'Projetos', about: 'Sobre', blog: 'Artigos', contact: 'Contato' },
    ui: {
      language: 'Idioma', theme: 'Tema', menu: 'Menu', skip: 'Pular para o conteúdo',
      read: 'Ler artigo', viewAll: 'Ver todos', viewProject: 'Ver projeto', source: 'Código-fonte',
      minRead: 'min de leitura', search: 'Buscar artigos', noResults: 'Nenhum artigo encontrado.',
      all: 'Todos', copyEmail: 'Copiar e-mail', copied: 'E-mail copiado', backToBlog: 'Voltar aos artigos'
    },
    meta: {
      title: 'Julio Cesar — Engenheiro de Software & Backend',
      description: 'Engenheiro de software construindo APIs confiáveis, integrações financeiras e ferramentas para desenvolvedores com PHP, Laravel, Vue e Rust.'
    },
    hero: {
      availability: 'Aberto a oportunidades remotas internacionais',
      kicker: 'Engenheiro de Software · Backend & Integrações',
      title: 'Transformo regras complexas em software confiável.',
      intro: 'Mais de quatro anos construindo APIs, integrações corporativas e produtos web — de fluxos financeiros em produção a ferramentas open source para desenvolvedores.',
      primary: 'Conheça meu trabalho', secondary: 'Leia o blog', photoAlt: 'Espaço reservado para a foto de Julio Cesar',
      photoHint: 'Sua foto aqui', location: 'Brasil · Trabalhando globalmente',
      codeLines: ['projetar(sistemas_confiaveis)', 'entregar(apis_em_producao)', 'aprender(criar_compartilhar)']
    },
    stats: [
      { value: '4+', label: 'anos em software' },
      { value: '50', label: 'conexões simultâneas validadas em API' },
      { value: '3', label: 'idiomas neste site' },
      { value: '1', label: 'produto open source lançado' }
    ],
    sections: {
      stackEyebrow: 'Ferramentas', stackTitle: 'Tecnologia é o meio. Confiabilidade é o resultado.',
      stackText: 'Uma stack orientada à produção para APIs, interfaces modernas, dados e ferramentas para desenvolvedores.',
      workEyebrow: 'Trabalhos selecionados', workTitle: 'Sistemas construídos para restrições reais.',
      workText: 'Projetos públicos e estudos de caso de produção anonimizados, com foco em arquitetura, resiliência e manutenção.',
      experienceEyebrow: 'Experiência', experienceTitle: 'Uma trajetória de operações de negócio à engenharia de software.',
      writingEyebrow: 'Artigos', writingTitle: 'O que aprendo, eu documento.',
      writingText: 'Notas práticas sobre backend, arquitetura, aprendizados de produção e construção de produtos.',
      ctaTitle: 'Tem um problema difícil que vale resolver?', ctaText: 'Tenho interesse em posições remotas de engenharia, colaborações técnicas e produtos úteis.', ctaButton: 'Vamos conversar'
    },
    projects: [
      { ...sharedProjects.localcodepilot, description: 'Aplicativo desktop que detecta projetos locais, entende suas stacks e inicia processos de desenvolvimento com status e logs em um só lugar.', impact: 'Primeira versão pública lançada como produto open source, com suporte a projetos PHP, JavaScript, Python e Rust.' },
      { ...sharedProjects.banking, title: 'API de integração financeira', eyebrow: 'Produção · Integração financeira', description: 'Fluxo resiliente de entrega de arquivos para integrações bancárias, com processamento dispatcher/worker, retentativas e dead-letter queue.', impact: 'Logs estruturados, correlation IDs e idempotência tornam falhas rastreáveis e permitem recuperação segura, sem processamento duplicado.' },
      { ...sharedProjects.taskflow, description: 'Aplicação de gestão de projetos e tarefas construída como SPA completa em Laravel e Vue, com experiência refinada de quadro.', impact: 'Autenticação Sanctum, políticas de autorização e 15 testes automatizados com 47 asserções.' },
      { ...sharedProjects.platform, title: 'APIs de integração corporativa', eyebrow: 'Produção · Modernização de plataforma', description: 'Interfaces REST e SOAP que modernizam o acesso a uma plataforma corporativa sem abandonar clientes legados.', impact: 'Modernização gradual com autenticação, rate limiting, documentação de contratos e observabilidade em produção.' }
    ],
    experience: [
      { period: '2023 — atual', role: 'Engenheiro de Software', company: 'Sistemas backend e integrações', text: 'Serviços backend e integrações bancárias/corporativas. Confiabilidade de APIs, filas, idempotência, observabilidade, testes automatizados e modernização gradual de legados.' },
      { period: '2022 — 2023', role: 'Desenvolvedor PHP', company: 'Aplicações web', text: 'Aplicações web, APIs, funcionalidades SQL e integrações entregues da implementação à produção.' },
      { period: '2016 — 2022', role: 'Operações e liderança de equipes', company: 'Operações e relacionamento com clientes', text: 'Liderança de equipes, operações e relacionamento com clientes — experiência que hoje orienta decisões pragmáticas de engenharia e produto.' }
    ],
    about: {
      title: 'Engenharia com contexto, não apenas código.',
      lead: 'Sou Julio Cesar, engenheiro de software brasileiro focado em sistemas backend, APIs e integrações que precisam continuar compreensíveis sob a pressão real da produção.',
      body: [
        'Minha stack principal é PHP com Laravel e Symfony, apoiada por Vue, JavaScript/TypeScript e bancos relacionais. Trabalho com integrações REST e SOAP, processamento assíncrono, autenticação, rate limiting, observabilidade e testes automatizados.',
        'Prefiro arquitetura evolutiva: entender riscos, proteger o comportamento atual com testes e modernizar em passos pequenos e reversíveis. Essa abordagem é especialmente valiosa ao substituir componentes legados sem interromper fluxos críticos.',
        'Fora do trabalho, desenvolvo o LocalCodePilot em Rust e documento o que aprendo. Valorizo experiência do desenvolvedor, comunicação clara e software que deixa o código melhor do que encontrei.'
      ],
      educationTitle: 'Formação e idiomas',
      education: ['MBA em Engenharia de Software — USP (em andamento)', 'Tecnólogo em Análise e Desenvolvimento de Sistemas — UNISA'],
      languages: ['Português — nativo', 'Inglês — intermediário', 'Espanhol — intermediário'],
      principlesTitle: 'Como trabalho',
      principles: [
        { title: 'Confiabilidade primeiro', text: 'Falhas são esperadas; recuperação, rastreabilidade e idempotência entram no projeto.' },
        { title: 'Modernização segura', text: 'Passos pequenos, proteção de contratos e comportamento mensurável vencem reescritas arriscadas.' },
        { title: 'Contexto de negócio', text: 'Decisões de arquitetura devem reduzir risco e criar valor, não apenas adicionar novidade.' },
        { title: 'Compartilhar aprendizado', text: 'Escrever torna decisões mais claras e transforma experiência em conhecimento reutilizável.' }
      ]
    },
    contact: { title: 'Vamos construir algo útil.', text: 'Para vagas remotas, colaborações ou uma conversa técnica, os melhores canais são LinkedIn e e-mail.', response: 'Normalmente respondo em até dois dias úteis.', emailLabel: 'Enviar e-mail', linkedinLabel: 'Conectar no LinkedIn', githubLabel: 'Acompanhar no GitHub' },
    blog: { title: 'Notas da bancada.', text: 'Aprendizados de produção, decisões de arquitetura e relatos honestos sobre construir software.', featured: 'Artigos recentes' }
  },
  es: {
    nav: { home: 'Inicio', projects: 'Proyectos', about: 'Sobre mí', blog: 'Artículos', contact: 'Contacto' },
    ui: {
      language: 'Idioma', theme: 'Tema', menu: 'Menú', skip: 'Saltar al contenido',
      read: 'Leer artículo', viewAll: 'Ver todos', viewProject: 'Ver proyecto', source: 'Código fuente',
      minRead: 'min de lectura', search: 'Buscar artículos', noResults: 'No se encontraron artículos.',
      all: 'Todos', copyEmail: 'Copiar correo', copied: 'Correo copiado', backToBlog: 'Volver a los artículos'
    },
    meta: {
      title: 'Julio Cesar — Ingeniero de Software & Backend',
      description: 'Ingeniero de software que construye APIs confiables, integraciones financieras y herramientas para desarrolladores con PHP, Laravel, Vue y Rust.'
    },
    hero: {
      availability: 'Disponible para oportunidades remotas internacionales',
      kicker: 'Ingeniero de Software · Backend e Integraciones',
      title: 'Convierto reglas complejas en software confiable.',
      intro: 'Más de cuatro años construyendo APIs, integraciones corporativas y productos web — desde flujos financieros en producción hasta herramientas open source para desarrolladores.',
      primary: 'Conoce mi trabajo', secondary: 'Lee el blog', photoAlt: 'Espacio reservado para la foto de Julio Cesar',
      photoHint: 'Tu foto aquí', location: 'Brasil · Trabajando globalmente',
      codeLines: ['diseñar(sistemas_confiables)', 'entregar(apis_en_produccion)', 'aprender(crear_compartir)']
    },
    stats: [
      { value: '4+', label: 'años en software' },
      { value: '50', label: 'conexiones simultáneas validadas en API' },
      { value: '3', label: 'idiomas en este sitio' },
      { value: '1', label: 'producto open source lanzado' }
    ],
    sections: {
      stackEyebrow: 'Herramientas', stackTitle: 'La tecnología es el medio. La confiabilidad es el resultado.',
      stackText: 'Un stack orientado a producción para APIs, interfaces modernas, datos y herramientas para desarrolladores.',
      workEyebrow: 'Trabajo seleccionado', workTitle: 'Sistemas construidos para restricciones reales.',
      workText: 'Proyectos públicos y casos de producción anonimizados, centrados en arquitectura, resiliencia y mantenimiento.',
      experienceEyebrow: 'Experiencia', experienceTitle: 'Un camino desde las operaciones hasta la ingeniería de software.',
      writingEyebrow: 'Artículos', writingTitle: 'Lo que aprendo, lo documento.',
      writingText: 'Notas prácticas sobre backend, arquitectura, lecciones de producción y construcción de productos.',
      ctaTitle: '¿Tienes un problema difícil que vale la pena resolver?', ctaText: 'Me interesan roles remotos de ingeniería, colaboraciones técnicas y productos útiles.', ctaButton: 'Hablemos'
    },
    projects: [
      { ...sharedProjects.localcodepilot, description: 'Aplicación de escritorio que detecta proyectos locales, entiende sus stacks e inicia procesos de desarrollo con estado y logs en un solo lugar.', impact: 'Primera versión pública lanzada como producto open source, compatible con proyectos PHP, JavaScript, Python y Rust.' },
      { ...sharedProjects.banking, title: 'API de integración financiera', eyebrow: 'Producción · Integración financiera', description: 'Flujo resiliente de entrega de archivos para integraciones bancarias, con procesamiento dispatcher/worker, reintentos y dead-letter queue.', impact: 'Logs estructurados, correlation IDs e idempotencia permiten rastrear y recuperar fallos sin procesamiento duplicado.' },
      { ...sharedProjects.taskflow, description: 'Aplicación de gestión de proyectos y tareas construida como SPA completa con Laravel y Vue.', impact: 'Autenticación Sanctum, políticas de autorización y 15 pruebas automatizadas con 47 aserciones.' },
      { ...sharedProjects.platform, title: 'APIs de integración corporativa', eyebrow: 'Producción · Modernización de plataforma', description: 'Interfaces REST y SOAP que modernizan el acceso a una plataforma corporativa sin abandonar clientes heredados.', impact: 'Modernización gradual con autenticación, rate limiting, documentación de contratos y observabilidad.' }
    ],
    experience: [
      { period: '2023 — presente', role: 'Ingeniero de Software', company: 'Sistemas backend e integraciones', text: 'Servicios backend e integraciones bancarias/corporativas. Confiabilidad de APIs, colas, idempotencia, observabilidad, pruebas automatizadas y modernización gradual.' },
      { period: '2022 — 2023', role: 'Desarrollador PHP', company: 'Aplicaciones web', text: 'Aplicaciones web, APIs, funcionalidades SQL e integraciones entregadas desde la implementación hasta producción.' },
      { period: '2016 — 2022', role: 'Operaciones y liderazgo de equipos', company: 'Operaciones y relación con clientes', text: 'Liderazgo de equipos, operaciones y relación con clientes — experiencia que hoy orienta decisiones pragmáticas de ingeniería y producto.' }
    ],
    about: {
      title: 'Ingeniería con contexto, no solo código.',
      lead: 'Soy Julio Cesar, ingeniero de software brasileño enfocado en sistemas backend, APIs e integraciones que deben seguir siendo comprensibles bajo la presión real de producción.',
      body: [
        'Mi stack principal es PHP con Laravel y Symfony, apoyado por Vue, JavaScript/TypeScript y bases de datos relacionales. Trabajo con integraciones REST y SOAP, procesamiento asíncrono, autenticación, rate limiting, observabilidad y pruebas automatizadas.',
        'Prefiero la arquitectura evolutiva: entender riesgos, proteger el comportamiento actual con pruebas y modernizar en pasos pequeños y reversibles. Este enfoque es especialmente valioso al reemplazar componentes heredados sin interrumpir flujos críticos.',
        'Fuera del trabajo, desarrollo LocalCodePilot en Rust y documento lo que aprendo. Valoro la experiencia del desarrollador, la comunicación clara y el software que deja el código mejor de lo que lo encontré.'
      ],
      educationTitle: 'Formación e idiomas',
      education: ['MBA en Ingeniería de Software — USP (en curso)', 'Tecnología en Análisis y Desarrollo de Sistemas — UNISA'],
      languages: ['Portugués — nativo', 'Inglés — intermedio', 'Español — intermedio'],
      principlesTitle: 'Cómo trabajo',
      principles: [
        { title: 'Confiabilidad primero', text: 'Los fallos son esperados; recuperación, trazabilidad e idempotencia se diseñan desde el inicio.' },
        { title: 'Modernización segura', text: 'Pasos pequeños, contratos protegidos y comportamiento medible superan reescrituras arriesgadas.' },
        { title: 'Contexto de negocio', text: 'Las decisiones de arquitectura deben reducir riesgo y crear valor, no solo añadir novedad.' },
        { title: 'Compartir el aprendizaje', text: 'Escribir aclara decisiones y convierte experiencia en conocimiento reutilizable.' }
      ]
    },
    contact: { title: 'Construyamos algo útil.', text: 'Para posiciones remotas, colaboraciones o una conversación técnica, los mejores canales son LinkedIn y correo.', response: 'Normalmente respondo en dos días hábiles.', emailLabel: 'Enviar correo', linkedinLabel: 'Conectar en LinkedIn', githubLabel: 'Seguir el trabajo en GitHub' },
    blog: { title: 'Notas del taller.', text: 'Lecciones de producción, decisiones de arquitectura y notas honestas sobre construir software.', featured: 'Artículos recientes' }
  }
};

