import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/vat-registration",
  eyebrow: "UAE VAT",
  h1: "VAT Registration in the UAE",
  subtitle: "Threshold Check · EmaraTax Application · Tax Registration Number",
  intro:
    "If your taxable supplies and imports passed AED 375,000 in the last 12 months, or will in the next 30 days, you must apply for VAT registration within 30 days. We check whether registration is mandatory or voluntary for you, prepare the turnover evidence the FTA asks for and submit your application on EmaraTax, all for a flat fee of AED 799.",
  icon: "calculator",
  hero: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=85",
    alt: "Invoices and a calculator used to check the UAE VAT registration threshold",
  },
  whatsappText: "Hello Marifah Tax Advisory, I need to register my business for UAE VAT.",
  included: [
    "Mandatory or voluntary threshold check",
    "Turnover and expense declaration prepared",
    "Document checklist and review",
    "Application submitted on EmaraTax",
    "Replies to FTA requests for information",
    "TRN, first tax period and first return date confirmed",
  ],
  helpTitle: "How VAT Registration Works",
  help: [
    {
      title: "Check your threshold",
      body: "Registration is mandatory once your taxable supplies and imports exceed AED 375,000 over the previous 12 months, or are expected to in the next 30 days. You can register voluntarily from AED 187,500 of taxable supplies, imports or taxable expenses. Zero-rated sales count towards the threshold; exempt sales do not.",
    },
    {
      title: "Prepare your evidence",
      body: "The FTA asks for your trade licence, Memorandum or Articles of Association, the Emirates ID and passport of the owners and authorised signatory, bank details and a turnover declaration supported by invoices or accounts. If you import or export, your customs registration is needed too.",
    },
    {
      title: "Submit and follow up",
      body: "We submit the application on EmaraTax and track it. If the FTA asks for more information or clearer evidence, we prepare the reply so the application isn't held up.",
    },
    {
      title: "Get ready to charge VAT",
      body: "From your effective registration date you must charge 5% VAT on taxable sales, issue tax invoices showing your TRN and keep proper records. We explain what changes in your invoicing from day one and when your first return is due.",
    },
  ],
  table: {
    title: "VAT Registration: Key Facts",
    columns: ["Item", "Rule"],
    rows: [
      ["Mandatory threshold", "AED 375,000 of taxable supplies and imports"],
      ["Voluntary threshold", "AED 187,500 of supplies, imports or taxable expenses"],
      ["Measured over", "The previous 12 months, or the next 30 days"],
      ["Deadline to apply", "Within 30 days of exceeding the threshold"],
      ["Late registration penalty", "AED 10,000"],
      ["Non-resident businesses", "No threshold if no one else accounts for the VAT"],
    ],
    note: "If you register late, the FTA can also assess VAT from the date you should have been registered, with late payment penalties on top.",
  },
  pricing: [
    { label: "VAT Registration (TRN)", price: "AED 799" },
    { label: "VAT Return Filing (four quarterly returns)", price: "AED 1,599" },
  ],
  faqs: [
    {
      q: "Do zero-rated sales count towards the VAT threshold?",
      a: "Yes. Standard-rated and zero-rated supplies, plus imports, count towards the AED 375,000 mandatory threshold. Exempt supplies, such as most local passenger transport or bare land, do not.",
    },
    {
      q: "Can I register for VAT voluntarily?",
      a: "Yes, once your taxable supplies, imports or taxable expenses exceed AED 187,500 over 12 months or are expected to in the next 30 days. Registering lets you recover VAT on your costs, but you must then charge VAT and file returns, and you cannot deregister within 12 months of a voluntary registration.",
    },
    {
      q: "Do free zone companies need to register for VAT?",
      a: "Yes, on the same thresholds as mainland businesses. Some supplies of goods within Designated Zones are treated as outside the UAE for VAT, which affects what counts towards your threshold, so we check this when we assess your turnover.",
    },
    {
      q: "What happens if I register late?",
      a: "The penalty for late registration is AED 10,000. The FTA can also register you from the date you should have registered and assess the VAT you should have charged since then, with late payment penalties. Registering as soon as you pass the threshold avoids both.",
    },
    {
      q: "How long does VAT registration take?",
      a: "Most registrations are completed within 3–5 working days once we have complete documents. The FTA can take longer if it asks for more information, and we reply to those requests for you.",
    },
    {
      q: "Do I need a separate registration for each branch?",
      a: "No. A company registers once and its branches are covered by the same TRN. Related companies can also apply to register together as a VAT group, which we can advise on.",
    },
  ],
  cta: {
    title: "Get Your VAT Registration Done Right",
    body: "Book a free consultation and we'll confirm whether you must register, by when, and what the FTA will ask for. Flat fee of AED 799.",
  },
};

export const metadata = landingMetadata(
  config,
  "VAT Registration UAE | AED 799 Flat Fee | Marifah Tax Advisory",
  "UAE VAT registration for AED 799: threshold check (AED 375,000 mandatory, AED 187,500 voluntary), EmaraTax application and your TRN. Deadlines and penalties explained.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="VAT Registration UAE"
      offers={[{ name: "VAT Registration", price: "799" }]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
