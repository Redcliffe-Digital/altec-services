export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  icon: "gas" | "cleanroom" | "anaesthetic";
  standards: string[];
  intro: string;
  scope: { title: string; detail: string }[];
  process: { title: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "medical-gas-pipeline",
    title: "Medical Gas Pipeline Quality Control",
    shortTitle: "Medical Gas Pipelines",
    tagline: "Patient safety is paramount.",
    summary:
      "Independent quality control testing and commissioning of medical, dental and laboratory gas pipeline systems, confirming the right gas, at the right purity, pressure and flow, at every terminal.",
    icon: "gas",
    standards: [
      "HTM 02-01",
      "HTM 08-06",
      "ISO 7396-1",
      "European Pharmacopoeia",
    ],
    intro:
      "Medical gas pipeline systems (MGPS) deliver life-critical supplies to clinical areas. As an independent Quality Controller we verify the identity, quality, adequacy and continuity of supply of new installations and modifications, providing the assurance that clinical teams and estates departments rely on.",
    scope: [
      {
        title: "Identity & cross-connection testing",
        detail:
          "Confirming that every terminal unit delivers the correct gas, eliminating the risk of cross-connection.",
      },
      {
        title: "Purity & quality analysis",
        detail:
          "Sampling and analysis against European Pharmacopoeia limits for moisture, particulates and contaminants.",
      },
      {
        title: "Pressure, flow & performance",
        detail:
          "Verifying system pressures, flow rates and performance under load across the pipeline network.",
      },
      {
        title: "Commissioning & verification",
        detail:
          "Witnessing pressure tests and completing full verification exercises in line with HTM 02-01.",
      },
    ],
    process: [
      {
        title: "Scope & method statement",
        detail:
          "We agree the scope and produce a site-specific method statement and permit-to-work approach.",
      },
      {
        title: "On-site testing",
        detail:
          "Systematic testing of terminals, area valve service units and plant against the relevant standards.",
      },
      {
        title: "Documentation & sign-off",
        detail:
          "A clear, auditable certification pack that supports your safety case and handover.",
      },
    ],
  },
  {
    slug: "cleanroom-validation",
    title: "Cleanroom & Clean Air Device Validation",
    shortTitle: "Cleanroom Validation",
    tagline: "Controlled environments, verified performance.",
    summary:
      "Validation and routine testing of cleanrooms and clean air devices, covering filter integrity, air velocity, pressure cascades and microbial monitoring, to keep critical environments in compliance.",
    icon: "cleanroom",
    standards: ["BS EN ISO 14644", "EU cGMP"],
    intro:
      "Cleanrooms, isolators and laminar flow devices protect products and patients from contamination. We provide independent validation and periodic requalification so you can demonstrate ongoing control of your critical environments.",
    scope: [
      {
        title: "HEPA filter integrity",
        detail:
          "DOP/PAO filter integrity testing to detect leaks and confirm installed filtration performance.",
      },
      {
        title: "Airflow & air velocity",
        detail:
          "Air velocity measurement, air change rate calculation and airflow visualisation studies.",
      },
      {
        title: "Pressure differentials",
        detail:
          "Verification of pressure cascades between adjoining rooms to maintain containment and protection.",
      },
      {
        title: "Particle & microbial sampling",
        detail:
          "Airborne particle counting and microbial contamination sampling against your classification.",
      },
    ],
    process: [
      {
        title: "Qualification planning",
        detail:
          "We define the test schedule and acceptance criteria aligned to ISO 14644 and EU cGMP.",
      },
      {
        title: "Testing & measurement",
        detail:
          "Calibrated instrumentation and documented methods across all in-scope rooms and devices.",
      },
      {
        title: "Reporting & certification",
        detail:
          "Results benchmarked against acceptance criteria with clear pass/fail certification.",
      },
    ],
  },
  {
    slug: "anaesthetic-gas-exposure",
    title: "Anaesthetic Gas Exposure Control",
    shortTitle: "Anaesthetic Gas Exposure",
    tagline: "Protecting the people who care for patients.",
    summary:
      "Personal exposure monitoring for anaesthetic gases and testing of control measures, protecting theatre and recovery staff and demonstrating COSHH compliance.",
    icon: "anaesthetic",
    standards: ["COSHH", "HSE EH40 Workplace Exposure Limits"],
    intro:
      "Staff working in theatres, recovery and dental settings can be exposed to waste anaesthetic gases. We measure personal exposure and assess the effectiveness of control measures so you can protect employees and meet your duties under COSHH.",
    scope: [
      {
        title: "Personal exposure monitoring",
        detail:
          "Sampling of individual staff exposure to nitrous oxide and volatile anaesthetic agents over the working period.",
      },
      {
        title: "Control measure testing",
        detail:
          "Assessment of anaesthetic gas scavenging systems (AGSS) and theatre ventilation performance.",
      },
      {
        title: "Risk assessment support",
        detail:
          "Findings benchmarked against HSE Workplace Exposure Limits to support your COSHH risk assessments.",
      },
      {
        title: "Practical recommendations",
        detail:
          "Clear, prioritised actions where exposures or control measures fall short.",
      },
    ],
    process: [
      {
        title: "Survey design",
        detail:
          "We plan a representative monitoring strategy covering the relevant roles and activities.",
      },
      {
        title: "On-site sampling",
        detail:
          "Discreet personal and background sampling during normal clinical activity.",
      },
      {
        title: "Reporting & guidance",
        detail:
          "A clear report with results against exposure limits and actionable recommendations.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
