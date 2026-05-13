import type { CollectionEntry } from 'astro:content';

const WPM = 220;

export const sortedPosts = (posts: CollectionEntry<'blog'>[]) =>
  posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

export const calculateReadingTime = (content: string | undefined) => {
  const words = (content ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WPM));
};

export const postSlug = (post: CollectionEntry<'blog'>) => post.id.replace(/\.mdx?$/, '');

export const postUrl = (post: CollectionEntry<'blog'>) => `/blog/${postSlug(post)}/`;

export const uniqueTags = (posts: CollectionEntry<'blog'>[]) =>
  [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));

export const relatedPosts = (post: CollectionEntry<'blog'>, posts: CollectionEntry<'blog'>[]) =>
  sortedPosts(posts)
    .filter((item) => postSlug(item) !== postSlug(post))
    .map((item) => ({
      post: item,
      score: item.data.tags.reduce((acc, tag) => (post.data.tags.includes(tag) ? acc + 1 : acc), 0)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post);
