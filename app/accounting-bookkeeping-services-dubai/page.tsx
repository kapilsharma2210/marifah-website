import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "accounting-bookkeeping-services-dubai",
  eyebrow: "Accounting & Bookkeeping",
  h1: "Accounting & Bookkeeping Services in Dubai",
  subtitle: "Monthly Bookkeeping · Financial Statements · MIS",
  intro:
    "Clean, up-to-date books every month for Dubai mainland and free zone businesses. We record your transactions, reconcile your bank accounts and prepare financial statements that are ready for your VAT returns, your Corporate Tax return and your auditor. From AED 4,499.",
  icon: "book",
  hero: {
    src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=85",
    alt: "Accounting paperwork and calculator on a desk",
  },
  whatsappText: "Hello Marifah Tax Advisory, I need accounting and bookkeeping services for my business in Dubai.",
  included: [
    "Monthly bookkeeping and journal entries",
    "Bank and card reconciliations",
    "Accounts payable and receivable",
    "Monthly profit & loss and balance sheet",
    "MIS and management reports",
    "Books ready for VAT and Corporate Tax",
  ],
  helpTitle: "What We Do Each Month",
  help: [
    {
      title: "Bookkeeping and reconciliations",
      body: "We record every sale, purchase and expense, reconcile your bank and card statements, and keep your receivables and payables up to date, so you always know who owes you and what you owe.",
    },
    {
      title: "Financial statements",
      body: "Your profit and loss statement and balance sheet are prepared regularly under the accounting standards accepted in the UAE (IFRS, or IFRS for SMEs where your revenue is below AED 50 million).",
    },
    {
      title: "MIS and management reporting",
      body: "Clear reports on revenue, margins, costs and cash flow, so you can make decisions from real numbers rather than your bank balance.",
    },
    {
      title: "Books that are ready for tax",
      body: "Your VAT records feed straight into your quarterly VAT returns, and your Corporate Tax return starts from your accounting net profit. Keeping the books right all year makes both returns faster, cheaper and far less risky.",
    },
    {
      title: "Year-end and audit support",
      body: "We prepare your year-end accounts and work with your auditor where an audit is needed, for example for Qualifying Free Zone Persons, businesses with revenue above AED 50 million, or where your free zone authority requires one.",
    },
  ],
  table: {
    title: "Why Bookkeeping Matters Under UAE Tax Law",
    columns: ["Requirement", "What it means"],
    rows: [
      ["Corporate Tax records", "Keep for 7 years after the tax period"],
      ["VAT records", "Keep for at least 5 years"],
      ["Corporate Tax starting point", "Your accounting net profit"],
      ["Accounting standard", "IFRS, or IFRS for SMEs (revenue under AED 50M)"],
      ["Audited accounts", "Revenue over AED 50M, free zone (QFZP) or tax group"],
    ],
    note: "Even businesses below the VAT threshold or electing Small Business Relief must keep records that support their Corporate Tax return.",
  },
  pricing: [
    { label: "Up to 50 transactions/month", price: "AED 4,499" },
    { label: "Up to 150 transactions/month", price: "AED 5,499" },
    { label: "Higher volume", price: "Get a Quote" },
  ],
  pricingNote: "* Prices depend on your number of transactions. No hidden charges.",
  faqs: [
    {
      q: "Do small businesses in Dubai need to keep accounts?",
      a: "Yes. Every business subject to UAE Corporate Tax must keep accounting records that support its tax return, including businesses with profit under AED 375,000 and those electing Small Business Relief. VAT-registered businesses must also keep records that support every VAT return.",
    },
    {
      q: "Which accounting standard should my business use?",
      a: "Businesses in the UAE prepare their accounts under IFRS. If your revenue is below AED 50 million, you can use IFRS for SMEs instead, which is simpler. We tell you which applies in your free consultation.",
    },
    {
      q: "How long must I keep my accounting records?",
      a: "Corporate Tax records must be kept for 7 years after the end of the tax period they relate to. VAT records must generally be kept for at least 5 years, and longer for some real estate records.",
    },
    {
      q: "Does my business need an audit?",
      a: "For Corporate Tax, audited financial statements are required if your revenue is above AED 50 million, if you are a Qualifying Free Zone Person, or (for years starting on or after 1 January 2025) if you are part of a tax group. Many free zone authorities also ask for audited accounts when you renew your licence.",
    },
    {
      q: "Can you also handle my VAT and Corporate Tax?",
      a: "Yes. Because we keep your books, we can file your quarterly VAT returns and your annual Corporate Tax return from the same records. Our Full Compliance Package covers VAT, Corporate Tax and accounting together.",
    },
    {
      q: "I'm behind on my books. Can you catch them up?",
      a: "Yes. We regularly bring overdue books up to date before a VAT or Corporate Tax deadline. Tell us how far behind you are in your free consultation and we'll give you a quote and a timeline.",
    },
  ],
  cta: {
    title: "Get Your Books in Order",
    body: "Book a free consultation and we'll look at your transaction volume, tell you which package fits and what we need to get started.",
  },
};

export const metadata = landingMetadata(
  config,
  "Accounting & Bookkeeping Services Dubai | From AED 4,499 | Marifah Tax Advisory",
  "Monthly bookkeeping, bank reconciliations, financial statements and MIS reports for Dubai businesses, with books ready for VAT and Corporate Tax. From AED 4,499.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="Accounting & Bookkeeping Services Dubai"
      offers={[
        { name: "Bookkeeping — up to 50 transactions/month", price: "4499" },
        { name: "Bookkeeping — up to 150 transactions/month", price: "5499" },
      ]}
      areaServed={{ "@type": "City", name: "Dubai" }}
    />
  );
}
