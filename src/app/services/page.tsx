import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { StandardsStrip } from "@/components/StandardsStrip";
import { CTASection } from "@/components/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Independent medical gas pipeline quality control, cleanroom validation and anaesthetic gas exposure monitoring for NHS and private healthcare.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Specialist validation & verification services"
        description="Independent testing across three critical areas of healthcare compliance — delivered to recognised UK and international standards."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <StandardsStrip tone="dark" />

      <CTASection
        title="Not sure which service you need?"
        description="Tell us about your site and systems — we'll advise on the right testing and verification approach."
      />
    </>
  );
}
