export const site = {
  name: "Altec Services",
  legalName: "Altec Services",
  tagline:
    "Independent validation & verification for the NHS and private healthcare",
  description:
    "Altec Services provides independent quality control, validation and verification of medical gas pipeline systems, cleanrooms and anaesthetic gas exposure control for NHS and private healthcare across the UK.",
  url: "https://www.altecservices.com",
  phone: "+44 (0) 121 285 3691",
  phoneHref: "tel:+441212853691",
  email: "info@altecservices.com",
  emailHref: "mailto:info@altecservices.com",
  whatsappHref: "https://wa.me/441212853691",
  address: {
    line1: "33 Bodenham Road",
    city: "Birmingham",
    country: "United Kingdom",
    full: "33 Bodenham Road, Birmingham, United Kingdom",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=33+Bodenham+Road+Birmingham+UK",
  },
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
