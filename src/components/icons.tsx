import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function GasIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M9 3h6v3l-1 1v3.5a4 4 0 0 1 4 4V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4.5a4 4 0 0 1 4-4V7L9 6z" />
      <path d="M6 14.5h12" />
      <path d="M12 16v2.5" />
    </svg>
  );
}

export function CleanroomIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 12h18M3 16.5h18" />
      <path d="M9 21v-5h6v5" />
    </svg>
  );
}

export function AnaestheticIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 21a6 6 0 0 0 6-6c0-3.5-3-6.5-6-11-3 4.5-6 7.5-6 11a6 6 0 0 0 6 6z" />
      <path d="M12 17.5a2.5 2.5 0 0 0 2.5-2.5" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IndependentIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7l-2 5a3 3 0 0 0 6 0z" />
      <path d="M19 7l-2 5a3 3 0 0 0 6 0z" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 16.5h6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M3 21l1.6-4.2A8 8 0 1 1 12 20a7.9 7.9 0 0 1-4-1.1z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.2 1.2-.7.1-.4-.1-.7-.5-.9l-1.2-.6c-.3-.1-.6 0-.8.2l-.3.4c-1-.4-1.8-1.2-2.2-2.2l.4-.3c.2-.2.3-.5.2-.8l-.6-1.2c-.2-.4-.5-.6-.9-.5-.5.2-.7.6-.7 1.2z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

export const serviceIcons = {
  gas: GasIcon,
  cleanroom: CleanroomIcon,
  anaesthetic: AnaestheticIcon,
};
