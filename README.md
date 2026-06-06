# Altec Services

Marketing website for **Altec Services** — an independent validation & verification provider for the NHS and private healthcare (medical gas pipeline QC, cleanroom validation, and anaesthetic gas exposure monitoring).

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**.

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in the Formspree ID (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io), which emails submissions — no backend to host.

1. Create a free Formspree account and a new form, with notifications going to **info@altecservices.com**.
2. Copy the form ID from the endpoint URL `https://formspree.io/f/XXXXXXXX`.
3. Set it as an env var:

   ```
   NEXT_PUBLIC_FORMSPREE_ID=XXXXXXXX
   ```

   - Locally: in `.env.local`.
   - On Vercel: Project → Settings → Environment Variables.

Until an ID is set, the form shows a friendly "not yet configured" message instead of failing silently. The form includes a honeypot field for basic spam protection.

## Editing content

- **Company / contact details:** `src/data/site.ts` (phone, email, address, social links, WhatsApp).
- **Services:** `src/data/services.ts` — a single typed source that drives the service cards, the `/services` overview and each `/services/[slug]` detail page. Add/edit a service object here and everything updates.
- **Pages:** `src/app/*` (home `page.tsx`, `about`, `services`, `services/[slug]`, `contact`).
- **Shared UI:** `src/components/*` (Header, Footer, Hero, cards, ContactForm, etc.).
- **Theme / brand colours:** `src/app/globals.css` (`@theme` block — navy + teal palette, fonts, shadows).

## Deployment

### Current: GitHub Pages

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on every
push to `main`. It builds a **static export** with a `/altec-services` base path
(GitHub Pages serves the repo from a sub-folder).

Live URL: https://redcliffe-digital.github.io/altec-services/

One-time setup in the repo on GitHub:

1. **Settings → Pages → Build and deployment → Source: "GitHub Actions".**
   (This is the key step — if Source is left on "Deploy from a branch" it just
   serves the raw README, which is the bug we hit.)
2. *(Optional, for the contact form)* **Settings → Secrets and variables →
   Actions → New repository secret:** `NEXT_PUBLIC_FORMSPREE_ID` = your form ID.
3. Push to `main` (or re-run the workflow from the **Actions** tab). Done.

The `GITHUB_PAGES=true` env var (set only in the workflow) is what switches
`next.config.ts` into static-export + base-path mode. Local dev is unaffected.

### Reverting to Vercel (recommended for production / custom domain)

GitHub Pages can only serve a static site under a sub-path. To run as a full
Next.js app at the domain root with `altecservices.com`:

1. Import the repo at [vercel.com/new](https://vercel.com/new) — it auto-detects
   Next.js, no config needed. Because `GITHUB_PAGES` is **not** set on Vercel,
   `next.config.ts` builds normally at `/` with no base path.
2. Add the `NEXT_PUBLIC_FORMSPREE_ID` environment variable in Vercel.
3. Add the custom domain `altecservices.com` under Project → Settings → Domains
   and point DNS as instructed.
4. *(Optional)* Delete `.github/workflows/deploy.yml` and switch GitHub Pages off
   so you're not deploying to two places.

> Update `site.url` in `src/data/site.ts` if the production domain changes — it
> feeds canonical URLs, the sitemap and structured data.

## Still to provide (placeholders in place)

- Real Formspree form ID.
- Photography and any accreditation logos (e.g. IHEEM, UKAS) — currently the design uses iconography and gradients.
- Confirmation of the About-page copy and exact service standards/wording before go-live (the original About page was offline, so this copy was written from the company's stated positioning).
- A branded favicon (currently the default).
