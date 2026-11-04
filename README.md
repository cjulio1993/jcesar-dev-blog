# Julio Cesar — Portfolio & Blog

Personal website at [jcesar.dev.br](https://jcesar.dev.br), combining a software engineering portfolio with a multilingual technical blog.

## Highlights

- English, Brazilian Portuguese and Spanish routes, with per-article language switching
- Portfolio based on real projects and anonymized production case studies
- MDX blog with series, topic filters, search, table of contents and reading progress
- Responsive light/dark interface with accessible motion
- SEO metadata, JSON-LD, hreflang, sitemap, robots and RSS feeds
- Automatic deployment to Vercel

## Stack

Astro 6 · TypeScript · Tailwind CSS (typography plugin) · MDX content collections · GitHub Actions / Vercel

## Local development

```bash
npm ci
npm run dev     # drafts are visible here, with a "Draft" badge
npm run check
npm run build   # drafts are never built
```

## Project structure

```text
src/
  content/blog/<locale>/<slug>.mdx   Posts. The file name is the URL slug.
  content.config.ts                  Post frontmatter schema
  data/
    locales/{en,pt-br,es}.ts         All interface copy and portfolio text, one file per language
    shared.ts                        Links, technologies and language-independent project data
    series.ts                        Article series (title/description per language)
    types.ts                         Types that keep the three locale files in sync
  components/
    pages/                           One component per page, shared by the three locale routes
    mdx/                             Components available inside posts (Callout, Table)
  layouts/                           BaseLayout (SEO, header, footer) and PostLayout
  pages/                             Thin locale routes: `/`, `/pt-br/`, `/es/`
  styles/
    tokens.css                       Colors, fonts and radii (light + dark)
    base.css                         Reset, layout, header, buttons, cards, footer
    pages.css                        Home, projects, about, contact
    hero-scene.css                   Animated scene beside the home hero
    blog.css                         Blog index, post cards, article and long-form typography
  utils/                             Blog helpers, RSS and SEO
```

## Writing a post

Create `src/content/blog/<locale>/<slug>.mdx`:

```mdx
---
title: "LocalCodePilot alpha 8: ..."
description: "One or two sentences used in cards, SEO and RSS."
pubDate: 2026-11-10
tags: [Rust, Open Source, Developer Tools]
locale: pt-br
translationKey: localcodepilot-alpha-8   # same value in every translation
series: localcodepilot                    # optional, see src/data/series.ts
draft: true                               # remove on publish day
---
```

- **Translations** share a `translationKey`. The language switcher and hreflang use it, so slugs can differ per language.
- **Series** parts are ordered by `pubDate`; each part shows the series box and previous/next links.
- **Drafts** appear only in `npm run dev`. Keep unreleased product news as drafts on a branch until the release is public.
- **Updates** to an existing post: change the text and set `updatedDate`. A new release gets a **new post**; never overwrite the previous release's article.
- `heroImage` (optional) sets the social preview image; otherwise `/og-default.svg` is used.

### Components inside posts

Markdown tables scroll horizontally on phones automatically. `<details><summary>…</summary>…</details>` works for optional technical depth. For highlighted notes:

```mdx
import Callout from '@/components/mdx/Callout.astro';

<Callout type="warning" title="Windows SmartScreen">
Click **More info**, then **Run anyway**.
</Callout>
```

`type` is `info` (default), `warning` or `tip`.

## Editing portfolio text

Edit `src/data/locales/<locale>.ts`. TypeScript (`npm run check`) fails if a language is missing a key. Language-independent project data (stack, links) lives in `src/data/shared.ts`.

## Deployment

GitHub Actions runs type checking and builds the static site on pushes and pull requests to `main`. Deployment is handled by the Vercel integration; the custom domain is configured in Vercel.
