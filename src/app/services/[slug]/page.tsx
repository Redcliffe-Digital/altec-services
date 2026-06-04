import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/Button";
import { getService, services } from "@/data/services";
import { serviceIcons, ArrowIcon, CheckIcon } from "@/components/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon];
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          {service.standards.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-semibold text-teal-300"
            >
              {s}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Intro */}
      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-mist text-teal-600">
              <Icon className="h-8 w-8" />
            </span>
            <p className="mt-6 text-xl leading-relaxed text-ink">
              {service.intro}
            </p>
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-[var(--radius-card)] border border-line bg-mist p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
                Standards we test to
              </h2>
              <ul className="mt-4 space-y-3">
                {service.standards.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-[15px]">
                    <CheckIcon className="h-5 w-5 shrink-0 text-teal-600" />
                    <span className="font-medium text-navy-800">{s}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/contact" className="mt-6 w-full">
                Request a quote
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      {/* Scope */}
      <section className="bg-mist">
        <div className="container-x py-20">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900">
            What&rsquo;s included
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {service.scope.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-soft"
              >
                <h3 className="flex items-center gap-3 text-lg font-bold text-navy-900">
                  <CheckIcon className="h-5 w-5 shrink-0 text-teal-600" />
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-20">
        <h2 className="text-3xl font-bold tracking-tight text-navy-900">
          How we deliver it
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {service.process.map((p, i) => (
            <div key={p.title} className="relative">
              <span className="text-5xl font-extrabold text-mist-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl font-bold text-navy-900">
                {p.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="bg-mist">
        <div className="container-x py-16">
          <h2 className="text-2xl font-bold tracking-tight text-navy-900">
            Other services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((s) => {
              const OtherIcon = serviceIcons[s.icon];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-4 rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-mist text-navy-700 group-hover:bg-teal-500 group-hover:text-white">
                    <OtherIcon className="h-6 w-6" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-bold text-navy-900">
                      {s.shortTitle}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-teal-600">
                      Learn more
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
