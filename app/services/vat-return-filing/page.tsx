import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/vat-return-filing",
  eyebrow: "UAE VAT",
  h1: "VAT Return Filing in the UAE",
  subtitle: "Reconciliation · VAT201 Return · EmaraTax Submission",
  intro:
    "Your VAT return is due 28 days after the end of each tax period, and any VAT owed must be paid by the same date. We reconcile your sales and purchases, check every input VAT claim, prepare your VAT201 return and file it on EmaraTax before the deadline. Four quarterly returns cost AED 1,599.",
  icon: "calculator",
  hero: {
    src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1600&q=85",
    alt: "Accountant reconciling invoices for a UAE VAT return",
  },
  whatsappText: "Hello Marifah Tax Advisory, I need help filing my UAE VAT returns.",
  included: [
    "Sales and purchase reconciliation",
    "Input VAT check, with blocked items removed",
    "Reverse charge and imports accounted for",
    "VAT201 return prepared and reviewed with you",
    "Return filed on EmaraTax before the deadline",
    "Amount payable and due date confirmed",
  ],
  helpTitle: "How We File Your Return",
  help: [
    {
      title: "Collect and reconcile",
      body: "We work from your sales and purchase invoices, bank statements and customs declarations, and reconcile them to your accounts so the return matches your books.",
    },
    {
      title: "Check your output VAT",
      body: "We confirm each sale is treated correctly as standard-rated at 5%, zero-rated, exempt or outside the scope of VAT, and that standard-rated sales are reported against the right emirate in the return.",
    },
    {
      title: "Check your input VAT",
      body: "VAT on some costs cannot be recovered, such as business entertainment and cars available for personal use. We remove blocked items, check that supplier invoices are valid tax invoices and account for the reverse charge on imports and services bought from abroad.",
    },
    {
      title: "File and confirm",
      body: "We go through the figures with you, file the VAT201 return on EmaraTax and confirm the amount to pay and the deadline. If you are owed VAT, we explain whether to carry the credit forward or request a refund.",
    },
  ],
  table: {
    title: "VAT Returns: Key Facts",
    columns: ["Item", "Rule"],
    rows: [
      ["Return and payment deadline", "28 days after the tax period ends"],
      ["Tax period", "Usually quarterly, as set by the FTA"],
      ["Return form", "VAT201 on EmaraTax"],
      ["Late filing penalty", "AED 1,000 (AED 2,000 if repeated within 24 months)"],
      ["Late payment penalty", "14% a year on unpaid tax, charged monthly"],
      ["Under-declared tax corrected later", "1% of the difference per month"],
    ],
    note: "Penalties shown are those in force from 14 April 2026 under Cabinet Decision No. 129 of 2025. A return is due for every tax period, even when there is nothing to declare.",
  },
  pricing: [
    { label: "VAT Return Filing (four quarterly returns)", price: "AED 1,599" },
    { label: "VAT Registration (not registered yet?)", price: "AED 799" },
  ],
  faqs: [
    {
      q: "Do I need to file a VAT return if I had no sales?",
      a: "Yes. Every VAT-registered business must file a return for each tax period, even if there is nothing to declare. Missing a nil return carries the same late filing penalty as any other return.",
    },
    {
      q: "I found a mistake in a VAT return I already filed. What now?",
      a: "If the error changes the tax due by AED 10,000 or less, it can be corrected in the return for the period in which you found it. If it is more, you must submit a voluntary disclosure within 20 business days of becoming aware of it. Where tax was under-declared, the penalty is 1% of the difference for each month, far lower than if the FTA finds it in an audit.",
    },
    {
      q: "When do I pay the VAT?",
      a: "By the same deadline as the return: 28 days after the end of the tax period. Late payment is charged at 14% a year on the unpaid tax, calculated monthly.",
    },
    {
      q: "Do I file monthly or quarterly?",
      a: "The FTA sets your tax period when you register. Most businesses file quarterly; some larger businesses are assigned monthly periods. You can see your tax periods in your EmaraTax account.",
    },
    {
      q: "What do you need from me each quarter?",
      a: "Your sales and purchase invoices, bank statements, import documents and access to your EmaraTax account. If we also keep your books, we already have most of this.",
    },
    {
      q: "How does e-invoicing affect my VAT returns?",
      a: "Businesses with revenue of AED 50 million or more must issue e-invoices through an Accredited Service Provider from 1 January 2027, and other businesses from 1 July 2027. Your invoices will then be reported to the FTA as you issue them, so your returns must match your e-invoicing data.",
    },
  ],
  cta: {
    title: "Never Miss a VAT Deadline",
    body: "Book a free consultation and we'll take over your VAT returns from the next quarter. Four quarterly returns for AED 1,599.",
  },
};

export const metadata = landingMetadata(
  config,
  "VAT Return Filing UAE | 4 Quarters for AED 1,599 | Marifah Tax Advisory",
  "UAE VAT return filing: sales and purchase reconciliation, input VAT checks and VAT201 submission on EmaraTax before the 28-day deadline. Four quarterly returns for AED 1,599.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="VAT Return Filing UAE"
      offers={[{ name: "VAT Return Filing (four quarterly returns)", price: "1599" }]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
