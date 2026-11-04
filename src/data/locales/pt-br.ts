import { sharedProjects } from '../shared';
import type { SiteCopy } from '../types';

const ptBr: SiteCopy = {
  nav: { home: 'Início', projects: 'Projetos', about: 'Sobre', blog: 'Artigos', contact: 'Contato' },
  ui: {
    language: 'Idioma', theme: 'Tema', menu: 'Menu', skip: 'Pular para o conteúdo',
    read: 'Ler artigo', viewAll: 'Ver todos', viewProject: 'Ver projeto', source: 'Código-fonte',
    minRead: 'min de leitura', search: 'Buscar artigos', noResults: 'Nenhum artigo encontrado.',
    all: 'Todos', backToBlog: 'Voltar aos artigos',
    related: 'Continue lendo', updated: 'Atualizado em', onThisPage: 'Neste artigo', readIn: 'Também em',
    draft: 'Rascunho', allTopics: 'Todos os temas', articles: 'artigos',
    seriesPart: 'Parte', seriesPrev: 'Anterior na série', seriesNext: 'Próximo na série',
    filterOpenSource: 'Open source / portfólio', filterCaseStudies: 'Estudos de caso'
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
    primary: 'Conheça meu trabalho', secondary: 'Leia o blog', photoAlt: 'Foto de Julio Cesar',
    location: 'Brasil · Trabalhando globalmente', sceneLabel: 'Do código à realidade.'
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
    { ...sharedProjects.localcodepilot, description: 'Aplicativo desktop em Rust que descobre projetos locais, reconhece WordPress, diagnostica runtimes e bancos e reúne processos, logs, saúde HTTP e operações confirmadas de containers.', impact: 'Alpha 7 pública: distribuição Windows, DMG universal experimental para macOS, ajuda integrada e atualizações compatíveis com cada sistema.' },
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
  blog: { title: 'Notas da bancada.', text: 'Aprendizados de produção, decisões de arquitetura e relatos honestos sobre construir software.', latest: 'Artigo mais recente', seriesEyebrow: 'Série', rss: 'Assinar via RSS' }
};

export default ptBr;
