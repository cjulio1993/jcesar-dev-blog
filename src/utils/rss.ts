import rss from '@astrojs/rss';
import type { Locale } from '@/i18n';
import { getPosts, postUrl, postsForLocale } from '@/utils/blog';

const feeds: Record<Locale, { title: string; description: string; language: string }> = {
  en: { title: 'jcesar.dev.br', description: 'Backend engineering, APIs, architecture and building software products.', language: 'en-us' },
  'pt-br': { title: 'jcesar.dev.br (PT-BR)', description: 'Backend, APIs, arquitetura e construção de produtos de software.', language: 'pt-br' },
  es: { title: 'jcesar.dev.br (ES)', description: 'Backend, APIs, arquitectura y construcción de productos de software.', language: 'es' }
};

export const buildFeed = async (locale: Locale, site: URL) => {
  const feed = feeds[locale];
  const posts = postsForLocale(await getPosts(), locale).filter((post) => !post.data.draft);
  return rss({
    title: feed.title,
    description: feed.description,
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: postUrl(post)
    })),
    customData: `<language>${feed.language}</language>`
  });
};
