"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";
import { PhoneIcon } from "@/components/icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change (adjust state during render — no effect)
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-shadow",
        scrolled
          ? "bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={[
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                isActive(item.href)
                  ? "text-navy-900"
                  : "text-muted hover:text-navy-900",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-teal-600"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phone}
          </a>
          <ButtonLink href="/contact">Request a quote</ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy-900 ring-1 ring-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={[
                  "rounded-lg px-3 py-3 text-base font-semibold",
                  isActive(item.href)
                    ? "bg-mist text-navy-900"
                    : "text-muted hover:bg-mist hover:text-navy-900",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 px-3 text-sm font-semibold text-navy-800"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phone}
              </a>
              <ButtonLink href="/contact" size="lg" className="w-full">
                Request a quote
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
