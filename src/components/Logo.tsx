import Link from "next/link";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const wordColor = tone === "light" ? "text-white" : "text-navy-900";
  const subColor = tone === "light" ? "text-white/70" : "text-muted";
  return (
    <Link
      href="/"
      aria-label="Altec Services — home"
      className={["group inline-flex items-center gap-3", className]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-navy-700 to-teal-500 text-white shadow-soft">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight ${wordColor}`}
        >
          Altec<span className="text-teal-500"> Services</span>
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${subColor}`}
        >
          Validation &amp; Verification
        </span>
      </span>
    </Link>
  );
}
