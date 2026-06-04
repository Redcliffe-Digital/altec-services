import { ButtonLink } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { StandardsStrip } from "@/components/StandardsStrip";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";
import { site } from "@/data/site";
import {
  ArrowIcon,
  CheckIcon,
  ClockIcon,
  DocumentIcon,
  IndependentIcon,
  ShieldCheckIcon,
} from "@/components/icons";

const trust = [
  {
    icon: IndependentIcon,
    title: "Genuinely independent",
    body: "We don't install or supply systems — so our testing and verification is impartial and conflict-free.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Patient & staff safety first",
    body: "From medical gases to anaesthetic exposure, our work protects the people who depend on your facilities.",
  },
  {
    icon: DocumentIcon,
    title: "Audit-ready documentation",
    body: "Clear, traceable certification packs that stand up to scrutiny and support your safety case.",
  },
  {
    icon: ClockIcon,
    title: "Responsive & flexible",
    body: "We work around clinical schedules to minimise disruption to live healthcare environments.",
  },
];

const stats = [
  { value: "NHS & private", label: "Healthcare clients served" },
  { value: "3", label: "Specialist service areas" },
  { value: "100%", label: "Independent & impartial" },
  { value: "UK-wide", label: "On-site coverage" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(55rem 30rem at 85% -10%, rgba(20,160,184,0.35), transparent), radial-gradient(40rem 30rem at -10% 110%, rgba(15,77,115,0.55), transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="container-x relative grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Independent. Impartial. Accredited standards.
            </span>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Independent validation &amp; verification for the{" "}
              <span className="text-teal-400">NHS</span> and private healthcare
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Quality control of medical gas pipelines, cleanroom validation and
              anaesthetic gas exposure monitoring — delivered to HTM, ISO and
              COSHH standards by specialists who put patient safety first.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Request a quote
                <ArrowIcon className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/services" variant="white" size="lg">
                Explore our services
              </ButtonLink>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              {[
                "HTM 02-01 medical gas testing",
                "ISO 14644 cleanroom validation",
                "COSHH exposure monitoring",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-teal-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                Why facilities choose Altec
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-navy-950/60 p-5">
                    <p className="text-2xl font-extrabold text-white">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-white/60">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-teal-500/15 p-5">
                <p className="text-sm leading-relaxed text-white/85">
                  &ldquo;Patient safety is paramount.&rdquo; Every test we carry
                  out is about protecting patients and the staff who care for
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StandardsStrip />

      {/* Services */}
      <section className="container-x py-20">
        <SectionHeading
          align="center"
          eyebrow="What we do"
          title="Specialist testing for critical healthcare environments"
          description="Three focused service areas, each delivered independently to the relevant UK and international standards."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Trust / why us */}
      <section className="bg-mist">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Altec Services"
              title="The independent assurance your facility relies on"
              description="As a specialist validation and verification provider, our only job is to confirm your systems are safe and compliant — with no commercial interest in the equipment itself."
            />
            <ButtonLink href="/about" variant="ghost" className="mt-8">
              More about us
              <ArrowIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {trust.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-soft"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-mist text-teal-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-x py-20">
        <SectionHeading
          align="center"
          eyebrow="How we work"
          title="A clear, methodical process — every time"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Scope & plan",
              body: "We define the scope, agree acceptance criteria and produce a site-specific method statement.",
            },
            {
              step: "02",
              title: "Test on site",
              body: "Calibrated instrumentation and documented methods, scheduled to minimise clinical disruption.",
            },
            {
              step: "03",
              title: "Report & certify",
              body: "Results benchmarked against the standards, with clear, auditable certification.",
            },
          ].map((p) => (
            <div key={p.step} className="relative">
              <span className="text-5xl font-extrabold text-mist-200">
                {p.step}
              </span>
              <h3 className="mt-2 text-xl font-bold text-navy-900">
                {p.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />

      <p className="sr-only">
        Contact {site.name} on {site.phone} or {site.email}.
      </p>
    </>
  );
}
