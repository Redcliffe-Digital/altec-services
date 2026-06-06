import type { NextConfig } from "next";

// Build modes, selected by env var:
//
// 1. Default (no env)   -> normal Next.js app. Used by local dev (`npm run dev`)
//                          and any server host such as Vercel. Serves at root.
// 2. STATIC_EXPORT=true -> static export to ./out at the DOMAIN ROOT.
//                          This is the production build for one.com.
//                          Run it with `npm run build:static`.
//
// === Reverting to Vercel ===
// Deploy the repo to Vercel as-is — STATIC_EXPORT isn't set there, so it runs as
// a normal Next.js app at the root (server features, image optimisation, etc.).
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      images: { unoptimized: true },
      trailingSlash: true,
    }
  : {};

export default nextConfig;
