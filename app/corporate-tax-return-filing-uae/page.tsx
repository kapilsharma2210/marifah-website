import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "corporate-tax-return-filing-uae",
  eyebrow: "Corporate Tax Filing",
  h1: "Corporate Tax Return Filing in the UAE",
  subtitle: "Preparation · Review · EmaraTax Submission",
  intro:
    "We prepare your annual UAE Corporate Tax return from your financial statements, work out your taxable income, check every relief you can claim and file it with the FTA on EmaraTax before your deadline. One flat fee of AED 1,999 per return, with no hidden charges.",
  icon: "file",
  hero: {
    src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=85",
    alt: "Tax professionals reviewing financial documents for a Corporate Tax return",
  },
  whatsappText: "Hello Marifah Tax Advisory, I need help filing my UAE Corporate Tax return.",
  included: [
    "Review of your financial statements",
    "Taxable income calculation and adjustments",
    "Small Business Relief or Free Zone check",
    "Tax loss and exempt income review",
    "Return filed on EmaraTax before the deadline",
    "Filing confirmation and payment guidance",
  ],
  helpTitle: "How We File Your Return",
  help: [
    {
      title: "Review your accounts",
      body: "Your return starts from your accounting net profit, so we first check that your financial statements are complete and prepared under an accepted accounting standard. If your books need work first, our accounting team can bring them up to date.",
    },
    {
      title: "Calculate your taxable income",
      body: "We adjust your accounting profit for the items the Corporate Tax Law treats differently, such as fines and penalties, which are not deductible, entertainment expenses, which are only 50% deductible, and exempt income such as qualifying dividends.",
    },
    {
      title: "Check every relief you can claim",
      body: "We check whether you can elect Small Business Relief, claim the 0% rate as a Qualifying Free Zone Person or use tax losses from earlier periods, and make sure each election is made correctly in the return.",
    },
    {
      title: "File on EmaraTax and confirm",
      body: "We go through the figures with you before anything is submitted, file the return on the FTA's EmaraTax portal and send you the confirmation, the amount due and how to pay it.",
    },
  ],
  table: {
    title: "Corporate Tax Return: Key Facts",
    columns: ["Item", "Rule"],
    rows: [
      ["Filing deadline", "Within 9 months of your tax period end"],
      ["Example", "Year ending 31 Dec 2025 → due by 30 Sep 2026"],
      ["Tax rate", "0% up to AED 375,000; 9% above"],
      ["Who must file", "Every registered business, even with no tax due"],
      ["Late filing penalty", "AED 500/month (first 12 months), then AED 1,000/month"],
      ["Record keeping", "Keep records for 7 years"],
    ],
    note: "A return is due even if you made a loss or elected Small Business Relief. The tax due is paid by the same 9-month deadline.",
  },
  pricing: [
    { label: "Corporate Tax Return Filing (per return)", price: "AED 1,999" },
    { label: "Corporate Tax Registration (not registered yet?)", price: "AED 499", buyOnline: true },
  ],
  pricingNote: "* Filing starts with a free consultation so we can confirm what your return needs. No hidden charges.",
  faqs: [
    {
      q: "When is my UAE Corporate Tax return due?",
      a: "Within 9 months of the end of your tax period, which is normally your financial year. If your financial year ends on 31 December 2025, your return and any tax due must be submitted by 30 September 2026.",
    },
    {
      q: "Do I need to file if my business made a loss or owes no tax?",
      a: "Yes. Every business registered for Corporate Tax must file a return for each tax period, including when it made a loss, earned under AED 375,000 or elected Small Business Relief. Filing a loss return also lets you carry the loss forward to later years.",
    },
    {
      q: "Can I elect Small Business Relief?",
      a: "UAE resident businesses with revenue of AED 3 million or less in the current and every earlier tax period can elect Small Business Relief, so their taxable income is treated as nil. In 2026 the relief was extended to tax periods ending on or before 31 December 2029. Qualifying Free Zone Persons and members of large multinational groups cannot elect it. The election is made in the return.",
    },
    {
      q: "Do I need audited financial statements?",
      a: "You need audited financial statements if your revenue is above AED 50 million, if you are a Qualifying Free Zone Person or, for financial years starting on or after 1 January 2025, if you file as a tax group. Other businesses can file from their management accounts, though your free zone authority may require an audit separately.",
    },
    {
      q: "What do you need from me to file the return?",
      a: "Your financial statements (or your trial balance and ledgers if they are not final), trade licence, Corporate Tax registration number, access to your EmaraTax account, and details of any transactions with related parties. We send you a short checklist after your free consultation.",
    },
    {
      q: "What happens if I file late?",
      a: "The FTA charges AED 500 for each month or part of a month the return is late for the first 12 months, and AED 1,000 per month after that. Late payment of the tax due is penalised separately, so filing on time saves money twice.",
    },
  ],
  cta: {
    title: "Get Your Corporate Tax Return Filed On Time",
    body: "Book a free consultation and we'll confirm your deadline, the reliefs you can claim and exactly what we need from you. Flat fee of AED 1,999 per return.",
  },
};

export const metadata = landingMetadata(
  config,
  "Corporate Tax Return Filing UAE | AED 1,999 Flat Fee | Marifah Tax Advisory",
  "UAE Corporate Tax return filing for AED 1,999: taxable income calculation, Small Business Relief and free zone checks, and EmaraTax submission before your deadline.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="Corporate Tax Return Filing UAE"
      offers={[{ name: "Corporate Tax Return Filing", price: "1999" }]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
