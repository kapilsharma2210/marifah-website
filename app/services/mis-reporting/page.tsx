import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/mis-reporting",
  eyebrow: "Accounting",
  h1: "MIS Reporting for UAE Businesses",
  subtitle: "Monthly Management Reports · KPIs · Cash Flow",
  intro:
    "Management information (MIS) reports turn your accounts into decisions: how much you made last month, where your cash is going, and which customers, products or branches are actually profitable. We build a monthly report pack around the questions you need answered, prepared from up-to-date books.",
  icon: "book",
  hero: { src: "/team-discussion.jpg", alt: "Managers discussing a monthly management report" },
  whatsappText: "Hello Marifah Tax Advisory, I'm interested in monthly MIS reporting for my business.",
  included: [
    "Monthly profit and loss against budget and last year",
    "Cash flow and cash position summary",
    "Receivables and payables ageing",
    "Profitability by branch, product or customer",
    "VAT and Corporate Tax set-aside tracking",
    "Short commentary on what changed and why",
  ],
  helpTitle: "How MIS Reporting Works",
  help: [
    {
      title: "Agree what you need to see",
      body: "We start with the decisions you make each month and the numbers behind them, then agree a short list of reports and key figures, such as gross margin, overheads, cash runway or collection days.",
    },
    {
      title: "Close the month",
      body: "Reliable reports need reliable books. We make sure the month is closed properly, with bank reconciliations, accruals and sales and purchases recorded, before any report is produced.",
    },
    {
      title: "Prepare the report pack",
      body: "Each month you receive the same clear pack, comparing actual results with budget and the previous period, with short notes explaining the main movements.",
    },
    {
      title: "Keep tax in view",
      body: "We track the VAT you will owe at the next return and an estimate of your Corporate Tax for the year, so the payments never come as a surprise.",
    },
  ],
  table: {
    title: "What a Typical Monthly MIS Pack Covers",
    columns: ["Report", "What it tells you"],
    rows: [
      ["Profit and loss", "Results against budget and last year"],
      ["Cash flow", "Where cash came from and went"],
      ["Receivables ageing", "Who owes you, and for how long"],
      ["Payables ageing", "What you owe, and when it's due"],
      ["Segment profitability", "Which branches, products or clients make money"],
      ["Tax set-aside", "VAT due at the next return; Corporate Tax estimate"],
    ],
    note: "Reports are tailored to your business; this is a typical starting point.",
  },
  pricing: [
    { label: "Monthly MIS Reporting", price: "Quote after consultation" },
  ],
  pricingNote: "* The fee depends on the number of reports and the volume of transactions, and is confirmed after a free consultation. No hidden charges.",
  faqs: [
    {
      q: "Is MIS reporting required by law?",
      a: "No. Management reports are for your own decisions and are not filed with the FTA. What the law does require is proper accounting records: for Corporate Tax they must be kept for 7 years, and they are also the base for good MIS.",
    },
    {
      q: "How often will I receive reports?",
      a: "Most businesses choose monthly reports, delivered after the month is closed. Quarterly reporting also works for smaller or more stable businesses.",
    },
    {
      q: "Do you need to keep my books to prepare MIS reports?",
      a: "Not necessarily, but your books must be up to date and reconciled each month. Many clients combine MIS with our monthly bookkeeping so the reports are ready sooner.",
    },
    {
      q: "Which accounting software do you work with?",
      a: "We can work from the main cloud and desktop accounting packages used in the UAE. Tell us what you use during the consultation and we'll confirm.",
    },
  ],
  cta: {
    title: "See Your Numbers Clearly Every Month",
    body: "Book a free consultation and we'll suggest the reports that would help you most and what they'd cost.",
  },
};

export const metadata = landingMetadata(
  config,
  "MIS Reporting Services UAE | Monthly Management Reports | Marifah",
  "Monthly MIS and management reports for UAE businesses: profit and loss against budget, cash flow, receivables and payables, profitability and VAT and Corporate Tax tracking.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="MIS Reporting UAE"
      offers={[]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
