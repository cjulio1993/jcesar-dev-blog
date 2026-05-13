# jcesar.dev.br

Modern developer blog built with **Astro + TailwindCSS** focused on PHP, Laravel, backend engineering, APIs, and software architecture.

## Tech stack

- Astro (latest)
- TailwindCSS
- MDX content collections
- Fully static output optimized for Vercel/Netlify
- RSS + Sitemap + SEO metadata

## Features

- Home, Blog, Post, About, Projects, Contact pages
- MDX blog posts with typed content collections
- Syntax highlighting with Shiki (light + dark theme)
- Reading time, featured posts, related posts
- Tag filtering, pagination and client-side search
- Canonical URLs, Open Graph, Twitter cards, structured data (JSON-LD)
- RSS feed, sitemap and robots.txt
- Dark mode with persisted preference
- Mobile-first responsive design and animated interactions

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Project structure

```text
src/
	components/      # Reusable UI components
	content/blog/    # MD/MDX posts
	layouts/         # Base and post layouts
	pages/           # Route pages + RSS + robots
	styles/          # Global Tailwind styles
	utils/           # Blog + SEO helpers
```

## Deployment

The project is static (`output: "static"`) and ready for free hosting:

- Vercel: automatic deploy via `.github/workflows/ci-cd.yml`
- Netlify: connect repository and set build command `npm run build`, publish directory `dist`
- Netlify config is included in `netlify.toml`

Required Vercel secrets for the workflow:

- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `VERCEL_TOKEN`
