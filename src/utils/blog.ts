import type { CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n';
import { localizedPath } from '@/i18n';

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

export const cleanPostSlug = (post: CollectionEntry<'blog'>) =>
  post.data.slug?.split('/').pop() ?? postSlug(post).split('/').pop() ?? postSlug(post);

export const postUrl = (post: CollectionEntry<'blog'>) =>
  `${localizedPath(post.data.locale as Locale, 'blog')}${cleanPostSlug(post)}/`;

export const postsForLocale = (posts: CollectionEntry<'blog'>[], locale: Locale) =>
  sortedPosts(posts).filter((post) => post.data.locale === locale);

export const uniqueTags = (posts: CollectionEntry<'blog'>[]) =>
  [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));

export const relatedPosts = (post: CollectionEntry<'blog'>, posts: CollectionEntry<'blog'>[]) =>
  sortedPosts(posts)
    .filter((item) => cleanPostSlug(item) !== cleanPostSlug(post) && item.data.locale === post.data.locale)
    .map((item) => ({
      post: item,
      score: item.data.tags.reduce((acc, tag) => (post.data.tags.includes(tag) ? acc + 1 : acc), 0)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post);
