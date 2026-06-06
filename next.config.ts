import type { NextConfig } from "next";

// GitHub Pages serves this repo from a sub-path (/altec-services) and can only
// host static files, so we statically export and prefix asset/links with the
// repo name. The GITHUB_PAGES env var is set only by the deploy workflow, so
// local dev and any root-domain host (e.g. Vercel) build normally at "/".
//
// === To revert to Vercel (or any host serving at the domain root) ===
// 1. Just deploy the repo to Vercel as-is — it ignores this whole block
//    because GITHUB_PAGES is not set, so there's no basePath and it runs as a
//    normal Next.js app (server features, image optimisation, etc.).
// 2. Optionally delete `.github/workflows/deploy.yml` and turn off GitHub Pages.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "altec-services";

const nextConfig: NextConfig = isGithubPages
  ? {
      output: "export",
      basePath: `/${repo}`,
      assetPrefix: `/${repo}/`,
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
