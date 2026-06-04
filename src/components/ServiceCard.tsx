import Link from "next/link";
import type { Service } from "@/data/services";
import { serviceIcons, ArrowIcon } from "@/components/icons";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-card"
    >
      <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-mist text-navy-700 transition-colors group-hover:bg-teal-500 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="text-xl font-bold text-navy-900">{service.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
        {service.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.standards.slice(0, 3).map((s) => (
          <span
            key={s}
            className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-navy-700"
          >
            {s}
          </span>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600">
        Learn more
        <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
