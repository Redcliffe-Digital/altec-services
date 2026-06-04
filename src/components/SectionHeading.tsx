import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={[
        "max-w-2xl",
        isCenter ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow && (
        <p
          className={[
            "mb-3 text-sm font-semibold uppercase tracking-[0.14em]",
            tone === "light" ? "text-teal-300" : "text-teal-600",
          ].join(" ")}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={[
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "light" ? "text-white" : "text-navy-900",
        ].join(" ")}
      >
        {title}
      </h2>
      {description && (
        <p
          className={[
            "mt-4 text-lg leading-relaxed",
            tone === "light" ? "text-white/80" : "text-muted",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}
