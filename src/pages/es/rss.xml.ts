import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postUrl, postsForLocale } from '@/utils/blog';

export async function GET(context: { site: URL }) {
  const posts = postsForLocale(await getCollection('blog'), 'es');
  return rss({
    title: 'jcesar.dev.br (ES)',
    description: 'Artículos sobre backend, APIs, arquitectura y productos de software.',
    site: context.site,
    items: posts.map((post) => ({ title: post.data.title, description: post.data.description, pubDate: post.data.pubDate, link: postUrl(post) })),
    customData: '<language>es</language>'
  });
}
