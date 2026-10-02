# Julio Cesar — Portfolio & Blog

Personal website at [jcesar.dev.br](https://jcesar.dev.br), combining a software engineering portfolio with a multilingual technical blog.

## Highlights

- English, Brazilian Portuguese and Spanish routes
- Portfolio based on real projects and anonymized production case studies
- MDX blog with localized posts, reading time and related content
- Responsive light/dark interface with accessible motion
- Client-side article search and project filtering
- SEO metadata, JSON-LD, hreflang, sitemap, robots and RSS feeds
- Automatic deployment to GitHub Pages

## Stack

- Astro 6
- TypeScript
- Tailwind CSS
- MDX content collections
- GitHub Actions / GitHub Pages

## Local development

```bash
npm ci
npm run dev
npm run check
npm run build
```

## Adding a post

Create an `.mdx` file under `src/content/blog/<locale>/` using the schema in `src/content.config.ts`. Localized variants share a `translationKey` and use unique prefixed slugs such as `pt-br/my-post`.

## Replacing the profile photo

Replace `public/profile-placeholder.svg` with a portrait using the same filename, or update the two image references in `HomePage.astro` and `AboutPage.astro`.

## Deployment

Pushes to `main` run type checking, build the static site and deploy `dist/` through GitHub Pages. The custom domain is configured through `public/CNAME`.
