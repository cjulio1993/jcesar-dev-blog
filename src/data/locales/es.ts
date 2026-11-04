import { sharedProjects } from '../shared';
import type { SiteCopy } from '../types';

const es: SiteCopy = {
  nav: { home: 'Inicio', projects: 'Proyectos', about: 'Sobre mí', blog: 'Artículos', contact: 'Contacto' },
  ui: {
    language: 'Idioma', theme: 'Tema', menu: 'Menú', skip: 'Saltar al contenido',
    read: 'Leer artículo', viewAll: 'Ver todos', viewProject: 'Ver proyecto', source: 'Código fuente',
    minRead: 'min de lectura', search: 'Buscar artículos', noResults: 'No se encontraron artículos.',
    all: 'Todos', backToBlog: 'Volver a los artículos',
    related: 'Sigue leyendo', updated: 'Actualizado el', onThisPage: 'En este artículo', readIn: 'También en',
    draft: 'Borrador', allTopics: 'Todos los temas', articles: 'artículos',
    seriesPart: 'Parte', seriesPrev: 'Anterior en la serie', seriesNext: 'Siguiente en la serie',
    filterOpenSource: 'Open source / portafolio', filterCaseStudies: 'Casos de estudio'
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
    primary: 'Conoce mi trabajo', secondary: 'Lee el blog', photoAlt: 'Foto de Julio Cesar',
    location: 'Brasil · Trabajando globalmente', sceneLabel: 'Del código a la realidad.'
  },
  stats: [
    { value: '4+', label: 'años en software' },
    { value: '5.000+', label: 'solicitudes por minuto en una API financiera en producción' },
    { value: '15+', label: 'lenguajes que LocalCodePilot inicia' },
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
    { ...sharedProjects.localcodepilot, description: 'Aplicación de escritorio open source en Rust: haz clic en Iniciar y el proyecto arranca. Reconoce proyectos de más de 15 lenguajes, prepara las dependencias e incluso instala el lenguaje que falta, con procesos, puertos, registros y contenedores en un solo lugar.', impact: 'Alpha 8 pública: instalador para Windows, inicio automático validado de punta a punta en Windows 11 y preparación del entorno con winget.' },
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
  blog: { title: 'Notas del taller.', text: 'Lecciones de producción, decisiones de arquitectura y notas honestas sobre construir software.', latest: 'Artículo más reciente', seriesEyebrow: 'Serie', rss: 'Suscribirse vía RSS' }
};

export default es;
