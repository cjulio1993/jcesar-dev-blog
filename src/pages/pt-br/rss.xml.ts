import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postUrl, sortedPosts } from '@/utils/blog';

export async function GET(context: { site: URL }) {
  const posts = sortedPosts(await getCollection('blog'));

  return rss({
    title: 'jcesar.dev.br (PT-BR)',
    description: 'Insights sobre PHP, Laravel, APIs e arquitetura de software.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/pt-br${postUrl(post)}`
    })),
    customData: '<language>pt-br</language>'
  });
}
