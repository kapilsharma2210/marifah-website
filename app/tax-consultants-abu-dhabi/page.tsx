import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "tax-consultants-abu-dhabi",
  eyebrow: "Abu Dhabi",
  h1: "Tax Consultants in Abu Dhabi",
  subtitle: "Corporate Tax · VAT · Accounting",
  intro:
    "Corporate Tax, VAT and accounting for businesses on the Abu Dhabi mainland and in ADGM, KEZAD, Masdar City and the other Abu Dhabi free zones. We work with you by phone, WhatsApp and email, so there's no need to travel. Corporate Tax registration from AED 499.",
  icon: "map",
  hero: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85",
    alt: "Modern office building exterior",
  },
  whatsappText: "Hello Marifah Tax Advisory, I need tax services for my business in Abu Dhabi.",
  included: [
    "Corporate Tax registration — AED 499",
    "Corporate Tax return filing — AED 1,999",
    "VAT registration (TRN) — AED 799",
    "Quarterly VAT return filing",
    "Free zone (QFZP) eligibility review",
    "Monthly accounting and bookkeeping",
  ],
  helpTitle: "How We Help Abu Dhabi Businesses",
  help: [
    {
      title: "Corporate Tax registration",
      body: "We register your company for Corporate Tax on EmaraTax, whether it holds an Abu Dhabi mainland licence or a free zone licence. Registration is required even if you expect to pay no tax, and late registration carries an AED 10,000 penalty.",
    },
    {
      title: "Corporate Tax return filing",
      body: "We prepare your annual return from your financial statements, calculate your taxable income, check Small Business Relief and free zone treatment, and file before the 9-month deadline. Flat fee of AED 1,999.",
    },
    {
      title: "VAT registration and returns",
      body: "We obtain your TRN once your taxable supplies pass the AED 375,000 mandatory threshold (or earlier, voluntarily, from AED 187,500), then prepare and file your VAT returns every quarter.",
    },
    {
      title: "Free zone advice: ADGM, KEZAD, Masdar City and more",
      body: "Free zone companies are not automatically exempt. The 0% rate only applies to qualifying income if your company meets every Qualifying Free Zone Person condition, including adequate substance and audited accounts. We review your activities and income before you file.",
    },
    {
      title: "Accounting and bookkeeping",
      body: "Monthly books, reconciliations and financial statements so your VAT and Corporate Tax returns are accurate and your records are ready for an audit.",
    },
  ],
  table: {
    title: "Abu Dhabi Businesses: Same Federal Tax Rules",
    columns: ["Your business", "What applies"],
    rows: [
      ["Abu Dhabi mainland company", "Corporate Tax registration required"],
      ["ADGM, KEZAD, Masdar City, twofour54", "Register; 0% only if QFZP conditions are met"],
      ["Corporate Tax rate", "0% up to AED 375,000; 9% above"],
      ["VAT registration", "Mandatory above AED 375,000 of taxable supplies"],
      ["Where you file", "FTA EmaraTax — the same in every emirate"],
    ],
    note: "Corporate Tax and VAT are federal taxes, so an Abu Dhabi business follows exactly the same rules and deadlines as one in Dubai or Sharjah.",
  },
  pricing: [
    { label: "Corporate Tax Registration", price: "AED 499", buyOnline: true },
    { label: "Corporate Tax Return Filing", price: "AED 1,999" },
    { label: "VAT Registration (TRN)", price: "AED 799" },
    { label: "VAT Return Filing (four quarters)", price: "AED 1,599" },
    { label: "Accounting & Bookkeeping", price: "From AED 4,499" },
  ],
  showBuyRegistration: true,
  faqs: [
    {
      q: "Is Corporate Tax different in Abu Dhabi?",
      a: "No. UAE Corporate Tax is a federal tax administered by the Federal Tax Authority, so the same 0% and 9% rates, registration rules and filing deadlines apply in Abu Dhabi as in every other emirate.",
    },
    {
      q: "Do ADGM companies pay UAE Corporate Tax?",
      a: "ADGM is a financial free zone, and its companies are within the scope of UAE Corporate Tax. They must register and file a return. A company can benefit from the 0% rate on qualifying income only if it meets all the Qualifying Free Zone Person conditions; other income is taxed at 9%.",
    },
    {
      q: "My company is in KEZAD or Masdar City. Is it exempt?",
      a: "Not automatically. Every free zone company must register for Corporate Tax. Whether it pays 0% depends on whether it meets the Qualifying Free Zone Person conditions and what kind of income it earns. We review this for you before your first return.",
    },
    {
      q: "Do I need to visit your office?",
      a: "No. We work with Abu Dhabi clients by phone, WhatsApp and email, and you send documents online. Registrations and returns are filed on the FTA's EmaraTax portal, so everything can be done without travelling.",
    },
    {
      q: "What is the penalty for registering late?",
      a: "Missing your Corporate Tax registration deadline carries an AED 10,000 administrative penalty, and late VAT registration has its own AED 10,000 penalty. If you're not sure whether you're late, contact us and we'll check your deadline.",
    },
  ],
  cta: {
    title: "Talk to a Tax Professional About Your Abu Dhabi Business",
    body: "Book a free consultation and we'll tell you which Corporate Tax and VAT obligations apply to your company and what needs to be done next.",
  },
};

export const metadata = landingMetadata(
  config,
  "Tax Consultants in Abu Dhabi | Corporate Tax & VAT | Marifah Tax Advisory",
  "Corporate Tax registration (AED 499), return filing (AED 1,999), VAT and accounting for Abu Dhabi mainland, ADGM, KEZAD and Masdar City businesses.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="Tax Consultants in Abu Dhabi"
      offers={[
        { name: "Corporate Tax Registration", price: "499" },
        { name: "Corporate Tax Return Filing", price: "1999" },
        { name: "VAT Registration", price: "799" },
        { name: "VAT Return Filing (four quarters)", price: "1599" },
      ]}
      areaServed={{ "@type": "City", name: "Abu Dhabi" }}
    />
  );
}
