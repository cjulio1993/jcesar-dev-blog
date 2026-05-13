export type SeoInput = {
  title: string;
  description: string;
  canonical: string;
  type?: 'website' | 'article';
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

export const absoluteUrl = (path: string) => new URL(path, 'https://jcesar.dev.br').toString();

export const buildSeo = ({
  title,
  description,
  canonical,
  type = 'website',
  image = absoluteUrl('/og-default.svg'),
  publishedTime,
  modifiedTime,
  tags = []
}: SeoInput) => ({
  title,
  description,
  canonical,
  type,
  image,
  publishedTime,
  modifiedTime,
  tags
});
