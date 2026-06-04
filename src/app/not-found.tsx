import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-600">
        404
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-900">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        Sorry, we couldn&rsquo;t find the page you were looking for. It may have
        moved or no longer exists.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/services" variant="ghost">
          View services
        </ButtonLink>
      </div>
    </section>
  );
}
