import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/corporate-tax-impact-assessment",
  eyebrow: "Corporate Tax",
  h1: "Corporate Tax Impact Assessment",
  subtitle: "Tax Position · Reliefs · Risks · Action Plan",
  intro:
    "Find out how UAE Corporate Tax actually applies to your business before a return is due: roughly what you will pay, which reliefs and elections you can use, and what needs to change in your accounts, contracts or structure. You get a clear written summary with the actions to take and when.",
  icon: "calculator",
  hero: {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85",
    alt: "Financial charts used to assess a business's Corporate Tax position",
  },
  whatsappText: "Hello Marifah Tax Advisory, I'd like a Corporate Tax impact assessment for my business.",
  included: [
    "Review of your business activities and income",
    "Estimate of your taxable income and Corporate Tax",
    "Small Business Relief and free zone eligibility check",
    "Related-party and connected-person transactions reviewed",
    "Gaps in your accounting records identified",
    "Written action plan with deadlines",
  ],
  helpTitle: "What We Assess",
  help: [
    {
      title: "Your estimated tax",
      body: "Corporate Tax is 0% on taxable income up to AED 375,000 and 9% above it. Starting from your accounting profit, we apply the adjustments the law requires, such as fines and penalties that are not deductible, entertainment expenses that are only 50% deductible and exempt income such as qualifying dividends, to estimate what you will owe.",
    },
    {
      title: "Reliefs and elections",
      body: "We check whether you can elect Small Business Relief (revenue of AED 3 million or less, for tax periods ending on or before 31 December 2029), whether a free zone entity can qualify for 0% on its qualifying income, and whether forming a tax group or transferring losses within a group is worth considering.",
    },
    {
      title: "Related parties and connected persons",
      body: "Transactions with related parties must be priced at arm's length, and payments to connected persons, such as owners, directors and their relatives, are deductible only up to market value. We identify these transactions and the documents you will need to support them.",
    },
    {
      title: "Interest and tax losses",
      body: "Net interest expense above AED 12 million a year is deductible only up to 30% of adjusted EBITDA. Tax losses can be carried forward and set against up to 75% of taxable income in later years. We show how these rules affect you.",
    },
    {
      title: "Your records and accounts",
      body: "We check that your financial statements follow IFRS, or IFRS for SMEs if your revenue is AED 50 million or less, whether you need audited accounts, and whether your records will support the return. Corporate Tax records must be kept for 7 years.",
    },
  ],
  table: {
    title: "UAE Corporate Tax at a Glance",
    columns: ["Rule", "What applies"],
    rows: [
      ["Standard rates", "0% up to AED 375,000; 9% above"],
      ["Small Business Relief", "Revenue up to AED 3 million; periods ending by 31 Dec 2029"],
      ["Qualifying Free Zone Person", "0% on qualifying income; 9% on the rest"],
      ["Large multinational groups", "15% Domestic Minimum Top-up Tax"],
      ["Tax losses", "Carried forward; offset up to 75% of taxable income"],
      ["Return and payment", "Within 9 months of the tax period end"],
    ],
    note: "The Domestic Minimum Top-up Tax applies to members of multinational groups with global revenue of EUR 750 million or more, for financial years starting on or after 1 January 2025.",
  },
  pricing: [
    { label: "Corporate Tax Impact Assessment", price: "Quote after consultation" },
    { label: "Corporate Tax Registration", price: "AED 499", buyOnline: true },
    { label: "Corporate Tax Return Filing (per return)", price: "AED 1,999" },
  ],
  pricingNote: "* The assessment fee depends on the size and structure of your business and is confirmed after a free consultation. No hidden charges.",
  faqs: [
    {
      q: "Who needs a Corporate Tax impact assessment?",
      a: "It is most useful before your first return, when your business changes (a new activity, a free zone set-up, a group restructure or new related-party arrangements), and for free zone companies that want to rely on the 0% rate. It turns the law into a clear list of what applies to you.",
    },
    {
      q: "Can my free zone company pay 0% Corporate Tax?",
      a: "Only if it meets every condition to be a Qualifying Free Zone Person: adequate substance in the free zone, qualifying income, non-qualifying revenue within the de minimis limit (5% of total revenue or AED 5 million, whichever is lower), audited financial statements, transfer pricing compliance and no election to be taxed at the standard rate. Income that does not qualify is taxed at 9%.",
    },
    {
      q: "Is Small Business Relief always the best choice?",
      a: "Not always. It treats your taxable income as nil, but tax losses from the years you elect it cannot be carried forward, and Qualifying Free Zone Persons and members of large multinational groups cannot use it. If you expect losses now and profits later, the relief can cost you more than it saves.",
    },
    {
      q: "What do you need from me?",
      a: "Your trade licence, latest financial statements or management accounts, a description of your activities and income streams, your ownership and group structure, and details of transactions with related parties. We send a short checklist after the consultation.",
    },
    {
      q: "What happens after the assessment?",
      a: "You get a written summary of your position and an action plan. You can carry it out yourself or ask us to help with the next steps, such as registration, accounting changes, transfer pricing documentation or your Corporate Tax return.",
    },
  ],
  cta: {
    title: "Know Your Corporate Tax Position Before the Deadline",
    body: "Book a free consultation and we'll tell you what the assessment will cover for your business and what it will cost.",
  },
};

export const metadata = landingMetadata(
  config,
  "Corporate Tax Impact Assessment UAE | Marifah Tax Advisory",
  "Find out how UAE Corporate Tax affects your business: estimated tax, Small Business Relief and free zone eligibility, related-party rules and a written action plan.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="Corporate Tax Impact Assessment UAE"
      offers={[]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
