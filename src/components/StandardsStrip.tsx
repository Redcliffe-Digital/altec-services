const standards = [
  "HTM 02-01",
  "ISO 7396-1",
  "HTM 08-06",
  "BS EN ISO 14644",
  "EU cGMP",
  "COSHH",
  "European Pharmacopoeia",
];

export function StandardsStrip({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <section
      aria-label="Standards we work to"
      className={isDark ? "bg-navy-900" : "bg-mist"}
    >
      <div className="container-x py-10">
        <p
          className={[
            "text-center text-sm font-semibold uppercase tracking-[0.14em]",
            isDark ? "text-teal-300" : "text-muted",
          ].join(" ")}
        >
          Testing to recognised UK &amp; international standards
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {standards.map((s) => (
            <span
              key={s}
              className={[
                "text-base font-bold tracking-tight sm:text-lg",
                isDark ? "text-white/85" : "text-navy-800/80",
              ].join(" ")}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
