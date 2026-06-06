import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Altec Services for independent medical gas testing, cleanroom validation and anaesthetic gas exposure monitoring. Call +44 (0) 121 285 3691 or email info@altecservices.com.",
};

const contactMethods = [
  {
    icon: PhoneIcon,
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: MailIcon,
    label: "Email us",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Message us directly",
    href: site.whatsappHref,
  },
  {
    icon: MapPinIcon,
    label: "Postal address",
    value: site.address.full,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your requirements"
        description="Tell us about your site and systems and we'll respond promptly with the right approach and a quote. For urgent matters, please call us directly."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-soft sm:p-9">
              <h2 className="text-2xl font-bold text-navy-900">
                Send us an enquiry
              </h2>
              <p className="mt-2 text-muted">
                Fields marked with <span className="text-teal-600">*</span> are
                required.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Details */}
          <aside className="lg:col-span-5">
            <h2 className="text-2xl font-bold text-navy-900">
              Get in touch directly
            </h2>
            <ul className="mt-6 space-y-4">
              {contactMethods.map((m) => {
                const Icon = m.icon;
                const external = m.href?.startsWith("http");
                const inner = (
                  <>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-mist text-teal-600 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-wider text-muted">
                        {m.label}
                      </span>
                      <span className="mt-0.5 block font-semibold text-navy-900">
                        {m.value}
                      </span>
                    </span>
                  </>
                );
                return (
                  <li key={m.label}>
                    {m.href ? (
                      <a
                        href={m.href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="group flex items-start gap-4 rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-soft transition-colors hover:border-teal-400/60"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="group flex items-start gap-4 rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-soft">
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
