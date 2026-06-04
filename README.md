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

## Deployment (recommended: Vercel)

1. Push this repo to GitHub (`Redcliffe-Digital/altec-services`).
2. Import the repo at [vercel.com/new](https://vercel.com/new) — it auto-detects Next.js, no config needed.
3. Add the `NEXT_PUBLIC_FORMSPREE_ID` environment variable.
4. Deploy. Then add the custom domain `altecservices.com` under Project → Settings → Domains and point DNS as instructed by Vercel.

> Update `site.url` in `src/data/site.ts` if the production domain ever changes (it feeds canonical URLs, the sitemap and structured data).

## Still to provide (placeholders in place)

- Real Formspree form ID.
- Photography and any accreditation logos (e.g. IHEEM, UKAS) — currently the design uses iconography and gradients.
- Confirmation of the About-page copy and exact service standards/wording before go-live (the original About page was offline, so this copy was written from the company's stated positioning).
- A branded favicon (currently the default).
