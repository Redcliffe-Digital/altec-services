"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/data/services";
import { ArrowIcon, CheckIcon } from "@/components/icons";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
const ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink shadow-sm placeholder:text-muted/70 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30";
const labelClass = "mb-1.5 block text-sm font-semibold text-navy-900";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields
    if (data.get("company_website")) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!FORMSPREE_ID) {
      setStatus("error");
      setError(
        "The contact form is not yet configured. Please email us directly while we finish setup.",
      );
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        const message =
          json?.errors?.map((e: { message: string }) => e.message).join(", ") ||
          "Something went wrong. Please try again or email us directly.";
        setError(message);
        setStatus("error");
      }
    } catch {
      setError(
        "We couldn't send your message. Please check your connection or email us directly.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-[var(--radius-card)] border border-teal-400/40 bg-mist p-10 text-center"
      >
        <span className="grid h-14 w-14 place-items-center rounded-full bg-teal-500 text-white">
          <CheckIcon className="h-7 w-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy-900">
          Thank you — your enquiry has been sent.
        </h3>
        <p className="mt-2 max-w-md text-muted">
          A member of the Altec Services team will be in touch shortly. For
          anything urgent, please call us directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-teal-600 hover:text-teal-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company_website">Leave this field empty</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full name <span className="text-teal-600">*</span>
          </label>
          <input
            className={inputClass}
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="organisation">
            Organisation
          </label>
          <input
            className={inputClass}
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            placeholder="NHS Trust / Hospital / Company"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email <span className="text-teal-600">*</span>
          </label>
          <input
            className={inputClass}
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.org"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            className={inputClass}
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="07000 000000"
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="service">
          Service of interest
        </label>
        <select
          className={inputClass}
          id="service"
          name="service"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service…
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General enquiry">General enquiry</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          How can we help? <span className="text-teal-600">*</span>
        </label>
        <textarea
          className={`${inputClass} min-h-32 resize-y`}
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your site, systems and what you need testing…"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_-8px_rgba(20,160,184,0.7)] transition-colors hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
        {status !== "submitting" && <ArrowIcon className="h-5 w-5" />}
      </button>

      <p className="text-xs text-muted">
        By submitting this form you consent to Altec Services contacting you
        about your enquiry. We never share your details with third parties.
      </p>
    </form>
  );
}
