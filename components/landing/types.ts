// Content for a keyword landing page (see components/landing/landing-page.tsx).
// Each page in app/<slug>/page.tsx fills one of these in.

export type LandingIcon = "file" | "calculator" | "book" | "building" | "map";

export type LandingConfig = {
  slug: string;
  /** Short label above the H1, e.g. "Abu Dhabi". */
  eyebrow: string;
  h1: string;
  subtitle: string;
  intro: string;
  icon: LandingIcon;
  hero: { src: string; alt: string };
  whatsappText: string;
  included: string[];
  helpTitle: string;
  help: { title: string; body: string }[];
  table?: { title: string; columns: [string, string]; rows: [string, string][]; note?: string };
  pricing: { label: string; price: string; buyOnline?: boolean }[];
  pricingNote?: string;
  /** Show the "buy Corporate Tax Registration online" card. */
  showBuyRegistration?: boolean;
  faqs: { q: string; a: string }[];
  cta: { title: string; body: string };
};

/** Every keyword landing page, used for cross-links in the footer and "Related" section. */
export const LANDING_LINKS = [
  { label: "Corporate Tax Consultants UAE", href: "/corporate-tax-consultants-uae" },
  { label: "Corporate Tax Return Filing UAE", href: "/corporate-tax-return-filing-uae" },
  { label: "VAT Consultancy Dubai", href: "/vat-consultancy-dubai" },
  { label: "Accounting & Bookkeeping Dubai", href: "/accounting-bookkeeping-services-dubai" },
  { label: "Tax Consultants in Abu Dhabi", href: "/tax-consultants-abu-dhabi" },
  { label: "Tax Consultants in Sharjah", href: "/tax-consultants-sharjah" },
];
