import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "tax-consultants-sharjah",
  eyebrow: "Sharjah",
  h1: "Tax Consultants in Sharjah",
  subtitle: "Corporate Tax · VAT · Accounting",
  intro:
    "Corporate Tax, VAT and accounting for Sharjah mainland companies and businesses in SAIF Zone, Hamriyah Free Zone, Sharjah Media City (Shams) and the other Sharjah free zones. We work with you by phone, WhatsApp and email. Corporate Tax registration from AED 499.",
  icon: "map",
  hero: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85",
    alt: "Bright modern office interior",
  },
  whatsappText: "Hello Marifah Tax Advisory, I need tax services for my business in Sharjah.",
  included: [
    "Corporate Tax registration — AED 499",
    "Corporate Tax return filing — AED 1,999",
    "VAT registration (TRN) — AED 799",
    "Quarterly VAT return filing",
    "Free zone (QFZP) eligibility review",
    "Monthly accounting and bookkeeping",
  ],
  helpTitle: "How We Help Sharjah Businesses",
  help: [
    {
      title: "Corporate Tax registration",
      body: "We register your company for Corporate Tax on EmaraTax, whether it is licensed on the Sharjah mainland or in a Sharjah free zone. Registration is required even if no tax is due, and missing the deadline carries an AED 10,000 penalty.",
    },
    {
      title: "Corporate Tax return filing",
      body: "We prepare your annual return from your financial statements, calculate your taxable income, apply Small Business Relief or free zone treatment where you qualify, and file before the 9-month deadline. Flat fee of AED 1,999.",
    },
    {
      title: "VAT registration and returns",
      body: "Many Sharjah trading and manufacturing businesses cross the AED 375,000 VAT threshold quickly. We obtain your TRN, then prepare and file your quarterly VAT returns, including the input VAT you can recover on purchases and imports.",
    },
    {
      title: "Free zone advice: SAIF Zone, Hamriyah, Shams and more",
      body: "Being in a free zone does not exempt you from Corporate Tax. The 0% rate applies only to qualifying income and only if your company meets every Qualifying Free Zone Person condition. We check your activities, customers and income before you file.",
    },
    {
      title: "Accounting and bookkeeping",
      body: "Monthly bookkeeping, reconciliations and financial statements, so your VAT and Corporate Tax figures come from accurate records and you are ready for your free zone's audit requirements.",
    },
  ],
  table: {
    title: "Sharjah Businesses: Same Federal Tax Rules",
    columns: ["Your business", "What applies"],
    rows: [
      ["Sharjah mainland company", "Corporate Tax registration required"],
      ["SAIF Zone, Hamriyah, Shams, SPC, SRTIP", "Register; 0% only if QFZP conditions are met"],
      ["Corporate Tax rate", "0% up to AED 375,000; 9% above"],
      ["VAT registration", "Mandatory above AED 375,000 of taxable supplies"],
      ["Where you file", "FTA EmaraTax — the same in every emirate"],
    ],
    note: "Corporate Tax and VAT are federal taxes, so a Sharjah business follows exactly the same rules and deadlines as one in Dubai or Abu Dhabi.",
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
      q: "Is Corporate Tax different in Sharjah?",
      a: "No. Corporate Tax is a federal tax administered by the Federal Tax Authority. Sharjah businesses follow the same 0% and 9% rates, registration rules and filing deadlines as businesses in every other emirate.",
    },
    {
      q: "My company is in SAIF Zone or Hamriyah Free Zone. Do I pay Corporate Tax?",
      a: "Your company must register and file a Corporate Tax return. It can pay 0% on qualifying income only if it meets all the Qualifying Free Zone Person conditions, which include having adequate substance in the free zone, earning qualifying income and keeping audited financial statements. Other income is taxed at 9%.",
    },
    {
      q: "Do Sharjah Media City (Shams) freelancers need to register?",
      a: "Companies licensed in Sharjah Media City must register for Corporate Tax. A freelancer working as an individual must register once their business turnover exceeds AED 1 million in a calendar year. We'll confirm your position in a free consultation.",
    },
    {
      q: "Do I need to visit your office?",
      a: "No. We work with Sharjah clients by phone, WhatsApp and email, and you share documents online. Registrations and returns are filed on the FTA's EmaraTax portal, so nothing requires a visit.",
    },
    {
      q: "When must my Sharjah business register for VAT?",
      a: "VAT registration is mandatory once your taxable supplies and imports exceed AED 375,000 in the last 12 months, or are expected to in the next 30 days. You can register voluntarily from AED 187,500. Late VAT registration carries an AED 10,000 penalty.",
    },
  ],
  cta: {
    title: "Talk to a Tax Professional About Your Sharjah Business",
    body: "Book a free consultation and we'll tell you which Corporate Tax and VAT obligations apply to your company and what needs to be done next.",
  },
};

export const metadata = landingMetadata(
  config,
  "Tax Consultants in Sharjah | Corporate Tax & VAT | Marifah Tax Advisory",
  "Corporate Tax registration (AED 499), return filing (AED 1,999), VAT and accounting for Sharjah mainland, SAIF Zone, Hamriyah and Shams businesses.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="Tax Consultants in Sharjah"
      offers={[
        { name: "Corporate Tax Registration", price: "499" },
        { name: "Corporate Tax Return Filing", price: "1999" },
        { name: "VAT Registration", price: "799" },
        { name: "VAT Return Filing (four quarters)", price: "1599" },
      ]}
      areaServed={{ "@type": "City", name: "Sharjah" }}
    />
  );
}
