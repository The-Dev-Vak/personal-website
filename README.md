# kaveha.com

Personal website for **Kaveh Alemi** — infrastructure & security engineer, founder.

> _"I make hard, secure systems feel simple — and I ship."_

Clean, editorial design with tasteful terminal touches. Hand-built, fast, static.
The build is part of the portfolio: a GitHub Actions pipeline ships the site to
GitHub Pages on every push to `main`.

## Stack

- **[Astro](https://astro.build)** + TypeScript — zero JS shipped by default; islands only where needed (the terminal hero).
- **Tailwind CSS v4** (CSS-first config in `src/styles/global.css`).
- **MDX** for project case studies.
- Self-hosted **Inter** + **JetBrains Mono** via `@fontsource` (no external font requests).
- Sitemap + JSON-LD `Person` schema + OG tags for SEO.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built site locally
```

## ⭐ Edit everything in one place: `src/config/site.ts`

Domain, all links, photo, résumé file, copy, credential tags, and nav all live in
`src/config/site.ts`. **Nothing is hardcoded elsewhere.** Search the file for `TODO`
to find what still needs real values:

| What | Where in `site.ts` | Status |
| --- | --- | --- |
| GitHub URL | `links.github` | **TODO** |
| LinkedIn URL | `links.linkedin` | **TODO** |
| WordDrop App Store URL | `links.appStore` | **TODO** |
| latchkey.dev | `links.latchkey` | confirm |
| Email | `links.email` | ✅ set |
| Photo | `photo` | **placeholder** (`public/photo.svg`) — drop a real `photo.jpg` in `public/` and update |
| Résumé PDF | `resumePdf` | copied from `Profile (2).pdf` → `public/resume.pdf` — **confirm this is correct** |
| OG image | `ogImage` | **placeholder** (`public/og.svg`) — ideally export a real `1200×630` `og.png` |

## Content sources

- `src/data/experience.ts` — timeline (from `resume.md`, metric-first).
- `src/data/projects.ts` — project cards.
- `src/pages/projects/*.mdx` — latchkey & WordDrop case studies (drafts — refine the prose).
- `src/pages/resume.astro` — web résumé (mirrors the PDF).

## Deploy (GitHub Pages — GitHub Actions source)

1. **Settings → Pages → Build and deployment → Source: GitHub Actions** (the default).
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds with
   `withastro/action` and publishes via `actions/deploy-pages`. The deploy shows up
   under the repo's Actions tab and on the Pages settings screen.

### Custom domain (kaveha.com)

Already configured: `src/config/site.ts` (`domain`, `url`, `base: ''`) and
`public/CNAME` are set to `kaveha.com`. To finish:

1. At your DNS provider, point the apex domain at GitHub Pages with four `A` records:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   (and/or the matching `AAAA` records for IPv6).
2. In **Settings → Pages**, enter `kaveha.com` as the custom domain and enable
   **Enforce HTTPS** (once the cert provisions).

### Serving on the github.io URL instead

To skip the custom domain and serve at `the-dev-vak.github.io/kaveh-personal-website`,
set `base: '/kaveh-personal-website'` and `url` accordingly in `site.ts`, and delete
`public/CNAME`. `withBase()` already prefixes every internal link and asset.

## Accessibility & performance

- Semantic landmarks, skip link, keyboard-navigable terminal, focus-visible rings.
- `prefers-reduced-motion` honored: no type-on, no scroll reveals, instant content.
- Light "paper" theme (`#FAFAF7`) with the electric-blue accent (`#1F47FF`).
- Mostly static HTML, lazy-loaded images, self-hosted fonts — built to score 95+ on Lighthouse.
