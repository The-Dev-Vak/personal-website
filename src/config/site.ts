/**
 * ⭐ SINGLE SOURCE OF TRUTH ⭐
 *
 * Everything configurable about the site lives here: domain, links, copy,
 * location, credential counts. No URLs or personal strings are hardcoded
 * anywhere else. To launch, swap the `TODO:` values below and update
 * `public/CNAME` to match `domain`.
 */

export const SITE = {
  // ── Identity ───────────────────────────────────────────────────────────
  name: 'Kaveh Alemi',
  role: 'cloud architect, founder & technical seller',
  // The line the whole site serves.
  pitch: 'I make secure cloud simple to run, then help people buy it.',
  // Short variants (reuse across meta, OG, LinkedIn).
  tagline: 'Secure cloud, made simple. And I ship.',
  description:
    'Kaveh Alemi, cloud architect, founder, and technical seller. ' +
    'Secure cloud (landing zones, compliance, Kubernetes) at Microsoft and AWS, ' +
    'across 20+ engagements with Canadian government and enterprise; ' +
    'building latchkey (AI-powered CI/CD) and WordDrop (App Store).',
  location: 'Vancouver, BC',
  focus: 'cloud solutions architecture & technical pre-sales',

  // ── Domain / hosting ───────────────────────────────────────────────────
  // Custom domain kaveha.com (served at root). Mirror in public/CNAME.
  domain: 'kaveha.com',
  // Full canonical origin. Used for sitemap, OG, JSON-LD.
  url: 'https://kaveha.com',
  // '' because the custom domain serves at the root.
  base: '',

  // ── Links (one place to edit) ──────────────────────────────────────────
  // email is real; the rest are TODO until provided.
  links: {
    email: 'kvalemi98@gmail.com',
    github: 'https://github.com/The-Dev-Vak',
    linkedin: 'https://www.linkedin.com/in/kvalemi/',
    appStore: 'https://apps.apple.com/us/app/worddrop-improve-vocabulary/id6757763797',
    latchkey: 'https://latchkey.dev',
  },

  // ── Assets ─────────────────────────────────────────────────────────────
  photo: '/img/kaveh.jpg',
  photoAlt: 'Kaveh Alemi',
  resumePdf: '/resume.pdf', // currently the copied "Profile (2).pdf", confirm this is the right file
  ogImage: '/og.svg', // TODO: ideally export a real 1200×630 og.png for best social support

  // ── Credentials (rendered as mono tags) ────────────────────────────────
  creds: [
    '11x AWS Certified',
    '4x Azure Certified',
    'AWS Security SME',
    'AWS Containers SME',
    'MSCS · Georgia Tech · 4.0',
    'BSc Data Science · SFU',
    '1 publication',
    '1 patent',
  ],

  // ── Homepage anchor nav ────────────────────────────────────────────────
  nav: [
    { label: 'about', href: '#about' },
    { label: 'work', href: '#experience' },
    { label: 'projects', href: '#projects' },
    { label: 'skills', href: '#skills' },
    { label: 'certs', href: '#certifications' },
    { label: 'contact', href: '#contact' },
  ],
} as const;

export type SiteConfig = typeof SITE;
