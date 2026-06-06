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

### Production: one.com (live at https://www.altecservices.com)

The site is hosted on the client's existing **one.com** plan, which serves static
files over **SFTP** (no SSH on their plan). Deploy = build a static export, then
upload the contents of `out/` to the web root.

**1. Build the static export (root paths, no sub-folder):**

```bash
npm run build:static   # = STATIC_EXPORT=true next build  ->  ./out
```

**2. Upload the contents of `out/` to the one.com web root** with any SFTP client
(FileZilla, Cyberduck, etc.):

- Host: `ssh.czqswarko.service.one`  ·  Port: `22`  ·  User: `czqswarko_ssh`
  (turn on **Allow SFTP access** in the one.com control panel; password is in the
  client's one.com account — keep it out of this repo).
- Web root: `/customers/d/7/5/czqswarko/webroots/www`
  (both `altecservices.com` and `www.altecservices.com` resolve here).
- Upload **everything inside `out/`** (including the `_next/` folder) into that
  directory, overwriting `index.html` / `sitemap.xml`.

DNS already points at one.com, so the new files go live immediately. A backup of
the original One.com builder files was saved locally to
`~/Developer/altec-onecom-backup/`.

> Legacy files from the old builder site (`about.html`, `contact.html`,
> `Services.html`, `sendmail.php`, `onewebmedia/`, `onewebstatic/`) still sit in
> the web root. They're orphaned (the new nav uses `/about/`, `/services/`,
> `/contact/`) and harmless, but can be deleted from the one.com File Manager or
> an SFTP client for tidiness.

### Alternative: Vercel (recommended if you ever leave one.com)

To run as a full Next.js app at the domain root instead:

1. Import the repo at [vercel.com/new](https://vercel.com/new) — auto-detects
   Next.js, no config needed (`STATIC_EXPORT` isn't set on Vercel, so it builds
   normally with image optimisation etc.).
2. Add the `NEXT_PUBLIC_FORMSPREE_ID` environment variable in Vercel.
3. Add the custom domain `altecservices.com` and point DNS as instructed.

> Update `site.url` in `src/data/site.ts` if the production domain changes — it
> feeds canonical URLs, the sitemap and structured data.

## Still to provide (nice-to-haves)

- Photography and any accreditation logos (e.g. IHEEM, UKAS) — currently the design uses the Altec logo, iconography and gradients.
- Confirmation of the About-page copy and exact service standards/wording (the original About page was offline, so this copy was written from the company's stated positioning).
- A branded favicon (currently the default).

> The contact form is **live** — wired to Formspree (`xwvjvzzl`), delivering to
> info@altecservices.com. The form ID is set as the default in
> `src/components/ContactForm.tsx` and can be overridden via the
> `NEXT_PUBLIC_FORMSPREE_ID` env var.
