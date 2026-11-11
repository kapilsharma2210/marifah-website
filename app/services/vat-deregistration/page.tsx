import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/vat-deregistration",
  eyebrow: "UAE VAT",
  h1: "VAT Deregistration in the UAE",
  subtitle: "Eligibility · EmaraTax Application · Final VAT Return",
  intro:
    "If your business stops making taxable supplies, or your turnover falls below the VAT thresholds, you may have to cancel your VAT registration. A mandatory application is due within 20 business days, and a late one costs AED 1,000 plus AED 1,000 a month. We confirm whether you must or can deregister, prepare the application and file your final VAT return.",
  icon: "calculator",
  hero: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=85",
    alt: "Signing documents for a UAE VAT deregistration application",
  },
  whatsappText: "Hello Marifah Tax Advisory, I need to deregister my business from UAE VAT.",
  included: [
    "Check of mandatory or voluntary deregistration",
    "Turnover and expense evidence prepared",
    "Outstanding returns and payments cleared",
    "Deregistration application on EmaraTax",
    "Replies to FTA requests for information",
    "Final VAT return after approval",
  ],
  helpTitle: "How VAT Deregistration Works",
  help: [
    {
      title: "When deregistration is mandatory",
      body: "You must apply if you stop making taxable supplies, for example because you close or sell the business, or if your taxable supplies over the past 12 months are below the AED 187,500 voluntary threshold. The application is due within 20 business days of that event.",
    },
    {
      title: "When you can choose to deregister",
      body: "If your taxable supplies are below the AED 375,000 mandatory threshold but above AED 187,500, you can apply to deregister. If you registered voluntarily, you cannot deregister within 12 months of your registration.",
    },
    {
      title: "Clear everything outstanding",
      body: "The FTA approves deregistration only when all returns are filed and all tax and penalties are paid. We check your EmaraTax account and deal with anything outstanding before applying.",
    },
    {
      title: "File the final return",
      body: "After approval, a final VAT return and any tax due must be submitted within 28 days of the deregistration date. VAT is due on business assets and stock you still hold on which you recovered input VAT, so we include them in the final return.",
    },
  ],
  table: {
    title: "VAT Deregistration: Key Rules",
    columns: ["Rule", "Requirement"],
    rows: [
      ["Mandatory if", "Taxable supplies stop, or fall below AED 187,500 a year"],
      ["Voluntary if", "Taxable supplies are below AED 375,000"],
      ["Deadline to apply (mandatory)", "Within 20 business days of the event"],
      ["Voluntary registrants", "Cannot deregister within 12 months of registering"],
      ["Late application penalty", "AED 1,000, then AED 1,000 a month (max AED 10,000)"],
      ["Final return and payment", "Within 28 days of the deregistration date"],
    ],
    note: "The FTA approves deregistration only once all returns are filed and all tax and penalties are paid. Corporate Tax deregistration, if it applies, is a separate application.",
  },
  pricing: [
    { label: "VAT Deregistration and final return", price: "Quote after consultation" },
    { label: "VAT Return Filing (four quarterly returns)", price: "AED 1,599" },
  ],
  pricingNote: "* The fee depends on how many returns are outstanding and is confirmed after a free consultation. No hidden charges.",
  faqs: [
    {
      q: "Does cancelling my trade licence cancel my VAT registration?",
      a: "No. VAT deregistration is a separate application to the FTA on EmaraTax. Until it is approved, you remain registered and must keep filing returns, and the late application penalty can apply.",
    },
    {
      q: "What happens to my stock and business assets?",
      a: "If you recovered input VAT on goods or assets you still hold when your registration is cancelled, VAT is due on them as a deemed supply. We value them and include the VAT in your final return.",
    },
    {
      q: "What is the penalty for applying late?",
      a: "AED 1,000 for missing the deadline, then AED 1,000 for each further month, up to a maximum of AED 10,000. Penalties for late returns or late payment are charged separately.",
    },
    {
      q: "Can I deregister if I still make some taxable sales?",
      a: "Only if your taxable supplies are below AED 375,000 a year and you did not register voluntarily within the last 12 months. If they are above AED 375,000, you must stay registered.",
    },
    {
      q: "What happens to a VAT credit balance when I deregister?",
      a: "You can request a refund of any excess VAT credit through EmaraTax, subject to the five-year time limit for refunds. We check your balance and include the refund request where it applies.",
    },
  ],
  cta: {
    title: "Cancel Your VAT Registration Without Penalties",
    body: "Book a free consultation and we'll confirm whether you must deregister, your deadline and what the final return will include.",
  },
};

export const metadata = landingMetadata(
  config,
  "VAT Deregistration UAE | Application & Final Return | Marifah Tax Advisory",
  "Cancel your UAE VAT registration correctly: mandatory or voluntary deregistration, the 20-business-day deadline, the EmaraTax application and your final VAT return.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="VAT Deregistration UAE"
      offers={[]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
