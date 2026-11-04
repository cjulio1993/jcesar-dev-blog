import type { Locale } from '@/i18n';

/**
 * Article series. A post joins one with `series: <id>` in its frontmatter;
 * parts are ordered by `pubDate`. Add new ids here and to the schema enum.
 */
export const series = {
  localcodepilot: {
    href: 'https://localcodepilot.com.br',
    title: {
      en: 'Building LocalCodePilot',
      'pt-br': 'Construindo o LocalCodePilot',
      es: 'Construyendo LocalCodePilot'
    },
    description: {
      en: 'Release notes and behind-the-scenes from an open-source desktop tool, written in Rust, that starts local projects for you.',
      'pt-br': 'Novidades de cada versão e bastidores de uma ferramenta desktop open source, escrita em Rust, que inicia projetos locais por você.',
      es: 'Novedades de cada versión y detrás de escena de una herramienta de escritorio open source, escrita en Rust, que inicia proyectos locales por ti.'
    }
  }
} as const satisfies Record<string, { href?: string; title: Record<Locale, string>; description: Record<Locale, string> }>;

export type SeriesId = keyof typeof series;
export const seriesIds = Object.keys(series) as [SeriesId, ...SeriesId[]];
