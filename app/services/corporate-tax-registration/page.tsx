import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/corporate-tax-registration",
  eyebrow: "Corporate Tax",
  h1: "Corporate Tax Registration in the UAE",
  subtitle: "Eligibility Check · EmaraTax Application · Tax Registration Number",
  intro:
    "Every UAE company and free zone entity must register for Corporate Tax with the Federal Tax Authority, even if it expects to pay no tax. We check your documents, submit your registration on EmaraTax, answer any FTA questions and send you your Corporate Tax Registration Number, all for a flat fee of AED 499.",
  icon: "file",
  hero: { src: "/document-review.jpg", alt: "Business owner reviewing Corporate Tax registration documents" },
  whatsappText: "Hello Marifah Tax Advisory, I need to register my business for UAE Corporate Tax.",
  included: [
    "Check of who in your business must register",
    "Document checklist and review",
    "EmaraTax account set up if you don't have one",
    "Application prepared and submitted to the FTA",
    "Replies to any FTA requests for information",
    "Registration number and first tax period confirmed",
  ],
  helpTitle: "How Registration Works",
  help: [
    {
      title: "Confirm who must register",
      body: "All UAE companies must register, whether on the mainland or in a free zone, including those that expect to elect Small Business Relief or claim the 0% free zone rate. Foreign companies with a permanent establishment in the UAE must register too. Individuals running a business must register once their business turnover passes AED 1 million in a calendar year.",
    },
    {
      title: "Gather your documents",
      body: "You need your trade licence, Memorandum or Articles of Association, the Emirates ID and passport of the authorised signatory, and proof of their authority to act, such as a power of attorney or board resolution. We send you a short checklist and review everything before it is submitted.",
    },
    {
      title: "Submit on EmaraTax",
      body: "We prepare the application, submit it through your EmaraTax account and follow it up. If the FTA asks for more information, we prepare the reply so the application keeps moving.",
    },
    {
      title: "Receive your registration number",
      body: "Once the FTA approves the application, it issues your Corporate Tax Registration Number. We confirm your first tax period and the date your first return is due, so you know exactly what comes next.",
    },
  ],
  table: {
    title: "Corporate Tax Registration Deadlines",
    columns: ["Who", "Deadline"],
    rows: [
      ["Company incorporated on or after 1 March 2024", "Within 3 months of incorporation"],
      ["UAE-resident individual with business turnover over AED 1 million", "By 31 March of the following year"],
      ["Foreign company with a UAE permanent establishment (from 1 March 2024)", "Within 6 months of it existing"],
      ["Company incorporated before 1 March 2024", "Deadlines have passed: register now"],
      ["Late registration penalty", "AED 10,000"],
      ["FTA registration fee", "None"],
    ],
    note: "Under the FTA's waiver initiative, the AED 10,000 penalty can be waived if you file your first Corporate Tax return, or annual declaration, within 7 months of the end of your first tax period. Check your eligibility against the FTA's current guidance.",
  },
  pricing: [
    { label: "Corporate Tax Registration", price: "AED 499", buyOnline: true },
    { label: "Corporate Tax Return Filing (per return)", price: "AED 1,999" },
  ],
  pricingNote: "* Flat fee with no hidden charges. You can buy registration online and we start as soon as we receive your documents.",
  showBuyRegistration: true,
  faqs: [
    {
      q: "Do I need to register if my business makes little or no profit?",
      a: "Yes. Registration does not depend on profit. Every UAE company and free zone entity must register, including businesses that make a loss or expect to elect Small Business Relief. Small Business Relief itself is claimed in the Corporate Tax return, so you need to be registered to use it.",
    },
    {
      q: "Do free zone companies need to register for Corporate Tax?",
      a: "Yes. All free zone entities must register, including those that expect to be Qualifying Free Zone Persons paying 0% on their qualifying income. The 0% rate is claimed in the return, not by skipping registration.",
    },
    {
      q: "I missed my registration deadline. What should I do?",
      a: "Register as soon as possible. The penalty for late registration is AED 10,000, but the FTA's waiver initiative can remove it if you file your first return, or annual declaration, within 7 months of the end of your first tax period. We can check whether you still qualify.",
    },
    {
      q: "Is Corporate Tax registration the same as VAT registration?",
      a: "No. They are separate registrations with separate numbers. A VAT registration does not register you for Corporate Tax, and Corporate Tax applies to companies whatever their turnover, while VAT registration depends on the VAT thresholds.",
    },
    {
      q: "How long does registration take?",
      a: "Most registrations are completed within 3–5 working days once we have your documents. The FTA can take longer if it asks for more information, and we reply to those requests for you.",
    },
    {
      q: "Does the FTA charge a fee for Corporate Tax registration?",
      a: "No. The FTA does not charge a fee to register. Our AED 499 covers checking your documents, preparing and submitting the application and handling any FTA requests until you receive your registration number.",
    },
  ],
  cta: {
    title: "Register Your Business for Corporate Tax",
    body: "Buy registration online for AED 499 or book a free consultation if you're not sure what applies to you. We'll handle the application from start to finish.",
  },
};

export const metadata = landingMetadata(
  config,
  "Corporate Tax Registration UAE | AED 499 Flat Fee | Marifah Tax Advisory",
  "UAE Corporate Tax registration for AED 499: eligibility check, EmaraTax application and your Corporate Tax Registration Number. Deadlines, documents and the AED 10,000 penalty explained.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="Corporate Tax Registration UAE"
      offers={[{ name: "Corporate Tax Registration", price: "499" }]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
