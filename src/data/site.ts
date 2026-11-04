import type { Locale } from '@/i18n';
import type { SiteCopy } from './types';
import en from './locales/en';
import ptBr from './locales/pt-br';
import es from './locales/es';

export { SITE_URL, socialLinks, technologies } from './shared';
export type { Project, SiteCopy } from './types';

/** All interface copy, one file per locale in `src/data/locales/`. */
export const copy: Record<Locale, SiteCopy> = { en, 'pt-br': ptBr, es };
