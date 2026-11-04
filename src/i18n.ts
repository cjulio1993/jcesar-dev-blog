export type Locale = 'en' | 'pt-br' | 'es';

export const locales: Locale[] = ['en', 'pt-br', 'es'];

export const localeMeta = {
  en: { html: 'en', intl: 'en-US', label: 'English', short: 'EN', prefix: '' },
  'pt-br': { html: 'pt-BR', intl: 'pt-BR', label: 'Português', short: 'PT', prefix: '/pt-br' },
  es: { html: 'es', intl: 'es-ES', label: 'Español', short: 'ES', prefix: '/es' }
} as const;

export const localeFromPath = (pathname: string): Locale => {
  if (pathname.startsWith('/pt-br')) return 'pt-br';
  if (pathname.startsWith('/es')) return 'es';
  return 'en';
};

export const localizedPath = (locale: Locale, path = '/') => {
  const suffix = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  return `${localeMeta[locale].prefix}${suffix}`;
};

export const switchLocalePath = (pathname: string, locale: Locale) => {
  const withoutLocale = pathname.replace(/^\/(pt-br|es)(?=\/|$)/, '') || '/';
  return `${localeMeta[locale].prefix}${withoutLocale}` || '/';
};


/**
 * Where each locale's version of the current page lives.
 * Pages whose URLs differ per locale (blog posts) pass `alternates`;
 * every other page shares its path across locales.
 * Locales without a translation fall back to that locale's blog index in the switcher
 * and are omitted from hreflang.
 */
export const pageAlternates = (pathname: string, alternates?: Partial<Record<Locale, string>>) =>
  locales.map((locale) => {
    const href = alternates ? alternates[locale] : switchLocalePath(pathname, locale);
    return { locale, href, exists: Boolean(href), switchHref: href ?? localizedPath(locale, 'blog') };
  });
