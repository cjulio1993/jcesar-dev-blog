export interface Technology {
  name: string;
  icon: string;
  group: 'backend' | 'frontend' | 'data' | 'tools';
}

export interface ProjectBase {
  title: string;
  eyebrow: string;
  stack: string[];
  href?: string;
  repo?: string;
  /** Public / open-source work. `false` marks an anonymized production case study. */
  featured: boolean;
}

export interface Project extends ProjectBase {
  description: string;
  impact: string;
}

export interface SiteCopy {
  nav: { home: string; projects: string; about: string; blog: string; contact: string };
  ui: {
    language: string; theme: string; menu: string; skip: string;
    read: string; viewAll: string; viewProject: string; source: string;
    minRead: string; search: string; noResults: string; all: string;
    backToBlog: string; related: string; updated: string; onThisPage: string;
    readIn: string; draft: string; allTopics: string; articles: string;
    seriesPart: string; seriesPrev: string; seriesNext: string;
    filterOpenSource: string; filterCaseStudies: string;
  };
  meta: { title: string; description: string };
  hero: {
    availability: string; kicker: string; title: string; intro: string;
    primary: string; secondary: string; photoAlt: string; location: string; sceneLabel: string;
  };
  stats: { value: string; label: string }[];
  sections: {
    stackEyebrow: string; stackTitle: string; stackText: string;
    workEyebrow: string; workTitle: string; workText: string;
    experienceEyebrow: string; experienceTitle: string;
    writingEyebrow: string; writingTitle: string; writingText: string;
    ctaTitle: string; ctaText: string; ctaButton: string;
  };
  projects: Project[];
  experience: { period: string; role: string; company: string; text: string }[];
  about: {
    title: string; lead: string; body: string[];
    educationTitle: string; education: string[]; languages: string[];
    principlesTitle: string; principles: { title: string; text: string }[];
  };
  contact: {
    title: string; text: string; response: string;
    emailLabel: string; linkedinLabel: string; githubLabel: string;
  };
  blog: { title: string; text: string; latest: string; seriesEyebrow: string; rss: string };
}
