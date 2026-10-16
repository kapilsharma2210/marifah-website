// Titles and descriptions Google shows for each page.

export const sitePages = {
  about: {
    title: "About Us | Marifah Tax Advisory — UAE Tax Consultants",
    description: "Marifah Tax Advisory helps UAE businesses with Corporate Tax, VAT and accounting. Meet a tax partner focused on clear advice and FTA compliance.",
  },
  services: {
    title: "Our Services | Corporate Tax, VAT & Accounting UAE | Marifah Tax Advisory",
    description: "Corporate Tax registration and filing, VAT registration and returns, bookkeeping and tax advisory for businesses across all Emirates.",
  },
  packages: {
    title: "Packages & Pricing | Flat-Fee UAE Tax Services | Marifah Tax Advisory",
    description: "Transparent flat-fee pricing: Corporate Tax from AED 499, VAT from AED 799, accounting from AED 4,499 and a full compliance package.",
  },
  blog: {
    title: "UAE Tax Insights & Guides | Marifah Tax Advisory",
    description: "Practical guides on UAE Corporate Tax, VAT, e-invoicing, free zones and Small Business Relief from the Marifah Tax Advisory team.",
  },
  contact: {
    title: "Contact Us | Book a Free Tax Consultation | Marifah Tax Advisory",
    description: "Talk to Marifah Tax Advisory on WhatsApp, phone or email. Book a free consultation for Corporate Tax, VAT or accounting in the UAE.",
  },
} as const;

export const servicePages: Record<string, { title: string; description: string }> = {
  "corporate-tax": {
    title: "Corporate Tax Services UAE | Registration & Filing from AED 499 | Marifah",
    description: "FTA Corporate Tax registration, return filing, free zone advisory and deregistration for UAE businesses. Registration from AED 499.",
  },
  "uae-vat": {
    title: "UAE VAT Services | Registration & Return Filing from AED 799 | Marifah",
    description: "VAT registration (TRN), quarterly VAT return filing and VAT advisory across the UAE. Registration from AED 799.",
  },
  "accounting": {
    title: "Accounting & Bookkeeping UAE | From AED 4,499 | Marifah Tax Advisory",
    description: "Monthly bookkeeping, financial statements, MIS reporting and FTA-compliant records for UAE businesses.",
  },
  "full-compliance-package": {
    title: "Full Compliance Package UAE | VAT, Corporate Tax & Accounting | Marifah",
    description: "One package for VAT, Corporate Tax and accounting — everything your UAE business needs to stay FTA compliant.",
  },
};
