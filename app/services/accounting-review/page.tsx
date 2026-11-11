import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/accounting-review",
  eyebrow: "Accounting",
  h1: "Accounting Review for UAE Businesses",
  subtitle: "Books Health Check · Tax Readiness · Corrections",
  intro:
    "An independent check of your books before a tax return, an audit, an investment or a sale. We check that your accounts are complete and correctly recorded, reconcile them to your bank statements and VAT returns, and tell you exactly what to fix before it turns into a penalty or an audit finding.",
  icon: "book",
  hero: {
    src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=85",
    alt: "Tax professionals reviewing a company's accounting records",
  },
  whatsappText: "Hello Marifah Tax Advisory, I'd like an accounting review of my books.",
  included: [
    "Bank and ledger reconciliations checked",
    "VAT returns reconciled to your accounts",
    "Revenue, expenses and balances tested",
    "Related-party transactions identified",
    "Corporate Tax adjustments flagged",
    "Report of issues with recommended corrections",
  ],
  helpTitle: "What We Check",
  help: [
    {
      title: "Completeness and reconciliations",
      body: "We check that every bank account is reconciled, that sales and purchases are fully recorded, and that balances such as receivables, payables, loans and shareholder accounts are supported and make sense.",
    },
    {
      title: "VAT returns against your books",
      body: "We compare what you declared in your VAT returns with your accounts. Differences may mean an error that needs correcting, either in your next return or through a voluntary disclosure, which costs far less than an error the FTA finds.",
    },
    {
      title: "Corporate Tax readiness",
      body: "We flag items your Corporate Tax return will need to adjust, such as fines and penalties, entertainment expenses and payments to related parties and connected persons, and check that your records will support the return.",
    },
    {
      title: "A clear report and fixes",
      body: "You receive a written report listing each issue, why it matters and how to correct it. If you want, we then make the corrections and bring your books up to date.",
    },
  ],
  table: {
    title: "What Errors Can Cost",
    columns: ["Issue", "FTA penalty"],
    rows: [
      ["Incorrect tax return, not fixed by the deadline", "AED 500"],
      ["Under-declared tax you correct yourself", "1% of the difference per month"],
      ["Error found after an FTA audit notice", "15% of the difference + 1% per month"],
      ["Failure to keep required records", "AED 10,000 (AED 20,000 if repeated)"],
    ],
    note: "VAT penalties shown are those in force from 14 April 2026 under Cabinet Decision No. 129 of 2025. Corporate Tax penalties follow Cabinet Decision No. 75 of 2023.",
  },
  pricing: [
    { label: "Accounting Review", price: "Quote after consultation" },
  ],
  pricingNote: "* The fee depends on the period covered and the volume of transactions, and is confirmed after a free consultation. No hidden charges.",
  faqs: [
    {
      q: "Is an accounting review the same as an audit?",
      a: "No. An audit is carried out by an independent licensed auditor and ends with an audit opinion. Our review is a practical check of your books that finds errors and gaps and tells you how to fix them. It is often done before an audit so the audit goes smoothly.",
    },
    {
      q: "When should I get an accounting review?",
      a: "Before filing your first Corporate Tax return, before an audit, when changing accountants, before raising investment or selling the business, or whenever you're not confident your books are right.",
    },
    {
      q: "What if you find an error in a VAT return?",
      a: "If it changes the tax due by AED 10,000 or less, it can usually be corrected in your next return. Larger errors need a voluntary disclosure within 20 business days of becoming aware of them. We explain the right route and can prepare it for you.",
    },
    {
      q: "What do you need from me?",
      a: "Access to your accounting software or your ledgers, bank statements for the period, copies of your VAT returns and the main contracts and invoices. We send a full list after the consultation.",
    },
  ],
  cta: {
    title: "Find the Problems Before the FTA Does",
    body: "Book a free consultation and we'll agree what the review should cover and what it will cost.",
  },
};

export const metadata = landingMetadata(
  config,
  "Accounting Review UAE | Books Health Check & Tax Readiness | Marifah",
  "An independent review of your books: reconciliations, VAT returns against your accounts, Corporate Tax readiness and a clear report of what to fix before it becomes an FTA penalty.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="Accounting Review UAE"
      offers={[]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
