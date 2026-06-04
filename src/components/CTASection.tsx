import { ButtonLink } from "@/components/Button";
import { site } from "@/data/site";
import { PhoneIcon } from "@/components/icons";

type Props = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to ensure compliance and patient safety?",
  description = "Talk to an independent specialist about validation, verification and testing for your site.",
}: Props) {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-[28px] bg-navy-900 px-6 py-14 text-center shadow-card sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-navy-600/40 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/80">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg">
              Request a quote
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="white" size="lg">
              <PhoneIcon className="h-5 w-5" />
              {site.phone}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
