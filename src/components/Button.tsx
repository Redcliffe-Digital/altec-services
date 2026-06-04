import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal-500 text-white hover:bg-teal-600 shadow-[0_8px_20px_-8px_rgba(20,160,184,0.7)]",
  secondary: "bg-navy-800 text-white hover:bg-navy-900",
  ghost:
    "bg-transparent text-navy-800 ring-1 ring-inset ring-line hover:bg-mist hover:ring-navy-500/40",
  white: "bg-white text-navy-800 hover:bg-mist-200",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200";

function cn(...parts: (string | undefined | false)[]) {
  return parts.filter(Boolean).join(" ");
}

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonLinkProps) {
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  const classes = cn(baseClass, variants[variant], sizes[size], className);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...(rest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
