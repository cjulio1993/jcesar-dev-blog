# jcesar.dev.br

Modern developer blog built with **Astro + TailwindCSS** focused on PHP, Laravel, backend engineering, APIs, and software architecture.

## Tech stack

- Astro (latest)
- TailwindCSS
- MDX content collections
- Fully static output optimized for Vercel/Netlify
- RSS + Sitemap + SEO metadata

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Deployment

The project is static (`output: "static"`) and ready for free hosting:

- Vercel: automatic deploy via `.github/workflows/ci-cd.yml`
- Netlify: connect repository and set build command `npm run build`, publish directory `dist`

Required Vercel secrets for the workflow:

- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
- `VERCEL_TOKEN`
