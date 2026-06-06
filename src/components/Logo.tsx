import Link from "next/link";
import Image from "next/image";
import logo from "../../public/altec-logo.png";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Altec Services — home"
      className={["inline-flex items-center", className]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={logo}
        alt="Altec — Analytical &amp; Technical Services"
        priority
        className={[
          "h-10 w-auto",
          // Logo artwork is dark/blue on transparent — invert to white on
          // dark backgrounds (e.g. the footer) so it stays legible.
          tone === "light" ? "brightness-0 invert" : "",
        ].join(" ")}
      />
    </Link>
  );
}
