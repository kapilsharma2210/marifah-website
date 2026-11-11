import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/corporate-tax-deregistration",
  eyebrow: "Corporate Tax",
  h1: "Corporate Tax Deregistration in the UAE",
  subtitle: "Final Return · Outstanding Dues · EmaraTax Application",
  intro:
    "If your business has stopped trading, or your company has been dissolved or liquidated, you must apply to deregister from Corporate Tax within 3 months. The FTA approves deregistration only once every return is filed and all tax and penalties are paid, so we bring your account up to date, prepare the final return and submit the application for you.",
  icon: "file",
  hero: { src: "/office-desk.jpg", alt: "Empty office after a business closed and applied for Corporate Tax deregistration" },
  whatsappText: "Hello Marifah Tax Advisory, I need to deregister my business from UAE Corporate Tax.",
  included: [
    "Check that deregistration applies and the cessation date",
    "Review of your EmaraTax account for missing returns or dues",
    "Final Corporate Tax return prepared and filed",
    "Deregistration application and supporting documents",
    "Replies to FTA requests for information",
    "VAT deregistration handled alongside, if you are registered",
  ],
  helpTitle: "How Deregistration Works",
  help: [
    {
      title: "Confirm the cessation date",
      body: "The 3-month deadline runs from the date the business ceased, or the date the company was dissolved or liquidated. We confirm the right date from your documents, such as the licence cancellation or liquidation papers, because it decides both your deadline and your final tax period.",
    },
    {
      title: "Bring your account up to date",
      body: "The FTA will not deregister a business with missing returns or unpaid amounts. We check your EmaraTax account and prepare any returns that are still outstanding, so nothing holds up the application.",
    },
    {
      title: "File the final return",
      body: "A Corporate Tax return is required for the final tax period, up to the date the business ceased. We prepare it from your closing accounts and work out any tax due.",
    },
    {
      title: "Apply and follow up",
      body: "We submit the deregistration application on EmaraTax with the supporting evidence and respond to any FTA questions until it is approved.",
    },
  ],
  table: {
    title: "Corporate Tax Deregistration: Key Rules",
    columns: ["Rule", "Requirement"],
    rows: [
      ["Deadline to apply", "Within 3 months of ceasing business"],
      ["Condition for approval", "All returns filed; all tax and penalties paid"],
      ["Late application penalty", "AED 1,000, then AED 1,000 a month (max AED 10,000)"],
      ["Final return", "Required for the period up to cessation"],
      ["Record keeping", "Keep records for 7 years"],
      ["VAT", "Deregistered separately, if you are VAT-registered"],
    ],
    note: "Cancelling your trade licence does not deregister you from Corporate Tax. The deregistration application to the FTA is a separate step.",
  },
  pricing: [
    { label: "Corporate Tax Deregistration", price: "Quote after consultation" },
    { label: "Final Corporate Tax Return (if needed)", price: "AED 1,999" },
  ],
  pricingNote: "* The fee depends on how many returns are outstanding and is confirmed after a free consultation. No hidden charges.",
  faqs: [
    {
      q: "When do I need to deregister from Corporate Tax?",
      a: "When your business ceases, or your company is dissolved or liquidated. You must apply within 3 months of that date. A company that still exists and holds a valid licence generally remains a taxable person and keeps filing returns, even if it is not trading.",
    },
    {
      q: "Does cancelling my trade licence deregister me automatically?",
      a: "No. Deregistration is a separate application to the FTA on EmaraTax. If you cancel your licence without deregistering, the 3-month deadline still runs and the late application penalty can apply.",
    },
    {
      q: "What happens if I apply late?",
      a: "The penalty is AED 1,000 for missing the deadline, then AED 1,000 for each further month, up to a maximum of AED 10,000. Any late filing or late payment penalties on outstanding returns are charged separately.",
    },
    {
      q: "Why was my deregistration application rejected?",
      a: "Usually because a return is missing or tax or penalties are still unpaid. The FTA approves deregistration only once your account is fully up to date. We check this before applying so the application goes through the first time.",
    },
    {
      q: "Do I also need to deregister from VAT?",
      a: "Yes, if you are VAT-registered. VAT deregistration is a separate application with its own deadline of 20 business days and its own final return. We can handle both together.",
    },
  ],
  cta: {
    title: "Close Your Corporate Tax Registration Properly",
    body: "Book a free consultation and we'll confirm your deadline, check your account for anything outstanding and tell you exactly what the deregistration involves.",
  },
};

export const metadata = landingMetadata(
  config,
  "Corporate Tax Deregistration UAE | Final Return & FTA Application | Marifah",
  "Deregister from UAE Corporate Tax within 3 months of ceasing business. We clear outstanding returns, file the final return and submit your EmaraTax deregistration application.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="Corporate Tax Deregistration UAE"
      offers={[]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
