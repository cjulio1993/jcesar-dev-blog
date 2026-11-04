import { getCollection, type CollectionEntry } from 'astro:content';
import { localeMeta, localizedPath, type Locale } from '@/i18n';

export type Post = CollectionEntry<'blog'>;
export type Alternates = Partial<Record<Locale, string>>;

const WPM = 220;

/** Drafts are visible while writing (`npm run dev`) and never reach a build. */
const isVisible = (post: Post) => import.meta.env.DEV || !post.data.draft;

const byNewest = (a: Post, b: Post) => b.data.pubDate.getTime() - a.data.pubDate.getTime();

export const getPosts = async () => (await getCollection('blog')).filter(isVisible).sort(byNewest);

export const postsForLocale = (posts: Post[], locale: Locale) => posts.filter((post) => post.data.locale === locale);

export const calculateReadingTime = (content: string | undefined) => {
  const words = (content ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WPM));
};

/** `pt-br/apis-confiaveis.mdx` → `apis-confiaveis`. The file name is the URL. */
export const postSlug = (post: Post) => post.id.replace(/\.mdx?$/, '').split('/').pop()!;

export const postUrl = (post: Post) => `${localizedPath(post.data.locale, 'blog')}${postSlug(post)}/`;

export const uniqueTags = (posts: Post[]) =>
  [...new Set(posts.flatMap((post) => post.data.tags))].sort((a, b) => a.localeCompare(b));

/** URL of this article in every locale it was translated to (used by hreflang and the language switcher). */
export const postAlternates = (post: Post, allPosts: Post[]): Alternates =>
  Object.fromEntries(
    allPosts
      .filter((item) => item.data.translationKey === post.data.translationKey)
      .map((item) => [item.data.locale, postUrl(item)])
  );

/** Same-locale parts of the post's series, oldest first. */
export const seriesParts = (post: Post, allPosts: Post[]) =>
  post.data.series
    ? postsForLocale(allPosts, post.data.locale)
        .filter((item) => item.data.series === post.data.series)
        .sort((a, b) => -byNewest(a, b))
    : [];

export const relatedPosts = (post: Post, allPosts: Post[], exclude: Post[] = []) =>
  postsForLocale(allPosts, post.data.locale)
    .filter((item) => item.id !== post.id && !exclude.some((other) => other.id === item.id))
    .map((item) => ({
      post: item,
      score:
        item.data.tags.filter((tag) => post.data.tags.includes(tag)).length +
        (post.data.series && item.data.series === post.data.series ? 2 : 0)
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post);

/** Shared `getStaticPaths` for `src/pages/[locale]/blog/[slug].astro`. */
export const blogStaticPaths = async (locale: Locale) => {
  const allPosts = await getPosts();
  return postsForLocale(allPosts, locale).map((post) => ({
    params: { slug: postSlug(post) },
    props: { post, allPosts }
  }));
};

/** Frontmatter dates are UTC midnight; format in UTC so 2026-10-06 never shows as Oct 5 in Brazil. */
export const formatPostDate = (date: Date, locale: Locale, style: 'medium' | 'long' = 'medium') =>
  date.toLocaleDateString(localeMeta[locale].intl, { dateStyle: style, timeZone: 'UTC' });
