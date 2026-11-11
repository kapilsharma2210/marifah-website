import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/financial-statements",
  eyebrow: "Accounting",
  h1: "Financial Statements Preparation in the UAE",
  subtitle: "IFRS · Year-End Accounts · Ready for Audit and Corporate Tax",
  intro:
    "Your Corporate Tax return starts from the net profit in your financial statements, so they need to be complete and prepared under the right accounting standard. We prepare your year-end financial statements under IFRS or IFRS for SMEs, ready for your auditor, your licensing authority, your bank and the FTA.",
  icon: "book",
  hero: { src: "/office-workspace.jpg", alt: "Office where year-end financial statements are prepared" },
  whatsappText: "Hello Marifah Tax Advisory, I need my financial statements prepared.",
  included: [
    "Year-end adjustments and closing entries",
    "Statement of financial position (balance sheet)",
    "Statement of profit or loss",
    "Statements of cash flows and changes in equity",
    "Notes and accounting policies",
    "Support with your auditor's questions",
  ],
  helpTitle: "How We Prepare Your Statements",
  help: [
    {
      title: "Use the right standard",
      body: "For Corporate Tax, financial statements must follow IFRS. Businesses with revenue of AED 50 million or less may use IFRS for SMEs instead, and those with revenue of AED 3 million or less may prepare them on a cash basis. We confirm which applies to you.",
    },
    {
      title: "Close the year properly",
      body: "We post the year-end adjustments that monthly books often miss: accruals and prepayments, depreciation, stock counts, provisions, and balances with related parties and shareholders, so the profit figure is right.",
    },
    {
      title: "Know whether you need an audit",
      body: "For Corporate Tax, audited statements are required if your revenue is above AED 50 million, if you are a Qualifying Free Zone Person, or, for financial years starting on or after 1 January 2025, if you file as a tax group. Your licensing authority or bank may require an audit even when the tax law does not.",
    },
    {
      title: "Make them work for your tax return",
      body: "Your accounting profit is the starting point of your Corporate Tax return. We flag items that need adjusting for tax, such as fines, entertainment and related-party transactions, so the return is straightforward.",
    },
  ],
  table: {
    title: "Which Rules Apply to Your Financial Statements",
    columns: ["Your business", "Requirement for Corporate Tax"],
    rows: [
      ["Revenue above AED 50 million", "IFRS, and audited statements"],
      ["Revenue of AED 50 million or less", "IFRS or IFRS for SMEs"],
      ["Revenue of AED 3 million or less", "Cash basis allowed"],
      ["Qualifying Free Zone Person", "Audited statements"],
      ["Tax group (years from 1 Jan 2025)", "Audited special purpose statements"],
      ["Record keeping", "Keep records for 7 years"],
    ],
    note: "Based on Ministerial Decisions No. 114 of 2023 (accounting standards) and No. 84 of 2025 (audited financial statements).",
  },
  pricing: [
    { label: "Year-end Financial Statements", price: "Quote after consultation" },
    { label: "Corporate Tax Return Filing (per return)", price: "AED 1,999" },
  ],
  pricingNote: "* The fee depends on the size of your business and the state of your books, and is confirmed after a free consultation. No hidden charges.",
  faqs: [
    {
      q: "Do you audit financial statements?",
      a: "No. An audit must be carried out by an independent, licensed auditor. We prepare your financial statements and work with your auditor, answering their questions and providing the schedules they need, so the audit goes smoothly.",
    },
    {
      q: "Do I need financial statements if I elect Small Business Relief?",
      a: "Yes. You still file a Corporate Tax return and must keep proper records. Businesses with revenue of AED 3 million or less may prepare their statements on a cash basis, which is simpler.",
    },
    {
      q: "Can you prepare statements for previous years?",
      a: "Yes. If earlier years were never finalised, we can rebuild and prepare them from your bank statements, invoices and other records, which is often needed before filing a first Corporate Tax return.",
    },
    {
      q: "What do you need from me?",
      a: "Your trial balance or bookkeeping records, bank statements for the year, details of fixed assets, loans and stock, and any contracts with related parties. If we already keep your books, we have most of this.",
    },
    {
      q: "What is IFRS for SMEs?",
      a: "A simplified version of IFRS with fewer disclosures and simpler rules. For Corporate Tax purposes it can be used by businesses with revenue of AED 50 million or less.",
    },
  ],
  cta: {
    title: "Get Year-End Accounts You Can Rely On",
    body: "Book a free consultation and we'll confirm which standard applies, whether you need an audit and what we need from you.",
  },
};

export const metadata = landingMetadata(
  config,
  "Financial Statements Preparation UAE | IFRS & Audit Ready | Marifah",
  "Year-end financial statements under IFRS or IFRS for SMEs, ready for your auditor and your UAE Corporate Tax return. Which standard applies and when an audit is required.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="Financial Statements Preparation UAE"
      offers={[]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
