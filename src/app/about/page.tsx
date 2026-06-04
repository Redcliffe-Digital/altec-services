import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/Button";
import {
  CheckIcon,
  IndependentIcon,
  ShieldCheckIcon,
  DocumentIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Altec Services is an independent validation and verification provider for the NHS and private healthcare, based in Birmingham, UK.",
};

const values = [
  {
    icon: IndependentIcon,
    title: "Independence",
    body: "We test and verify only — we have no commercial interest in the systems we assess, so our findings are impartial.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Safety",
    body: "Everything we do is rooted in protecting patients and the clinical teams who care for them.",
  },
  {
    icon: DocumentIcon,
    title: "Rigour",
    body: "Calibrated equipment, documented methods and traceable certification against the relevant standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="An independent partner in healthcare compliance"
        description="Altec Services provides impartial validation and verification for the NHS and private healthcare — helping facilities demonstrate that critical systems are safe, compliant and fit for purpose."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Intro */}
      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Who we are"
              title="Specialists in validation & verification"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Based in Birmingham and working across the UK, Altec Services is
                an independent validation and verification service for the NHS
                and private healthcare. We focus on three critical areas: the
                quality control of medical gas pipeline systems, the validation
                of cleanrooms and clean air devices, and the monitoring of staff
                exposure to anaesthetic gases.
              </p>
              <p>
                Because we don&rsquo;t install, supply or maintain the systems we
                assess, our verification is genuinely impartial. Our clients
                value that independence — it means our reports reflect the true
                performance of their systems and stand up to scrutiny from
                regulators, authorising engineers and auditors alike.
              </p>
              <p>
                From new installations and major modifications through to routine
                requalification, we provide the clear, auditable evidence that
                healthcare facilities need to keep patients and staff safe.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-[var(--radius-card)] border border-line bg-mist p-8">
              <h2 className="text-lg font-bold text-navy-900">
                What sets us apart
              </h2>
              <ul className="mt-5 space-y-4">
                {[
                  "Genuinely independent — testing and verification only",
                  "Specialists in HTM, ISO and COSHH compliance",
                  "Work scheduled around live clinical environments",
                  "Clear, audit-ready certification on every project",
                  "Trusted by NHS and private healthcare providers",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                    <span className="text-[15px] leading-relaxed text-navy-800">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist">
        <div className="container-x py-20">
          <SectionHeading
            align="center"
            eyebrow="Our values"
            title="The principles behind every project"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-[var(--radius-card)] border border-line bg-white p-7 text-center shadow-soft"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-mist text-teal-600">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/services" variant="ghost">
              See what we do
            </ButtonLink>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
