import { LandingRoute, landingMetadata } from "@/components/landing/landing-route";
import type { LandingConfig } from "@/components/landing/types";

const config: LandingConfig = {
  slug: "services/vat-refund",
  eyebrow: "UAE VAT",
  h1: "VAT Refund Services in the UAE",
  subtitle: "Excess Input VAT · VAT311 Refund Request · FTA Review",
  intro:
    "When the VAT on your purchases is more than the VAT on your sales, the difference becomes a credit in your FTA account that you can ask to be paid back. We check your credit balance, prepare the reconciliation and documents the FTA expects, and submit your refund request (Form VAT311) on EmaraTax. Older credits are lost if they are not claimed in time, so check yours now.",
  icon: "calculator",
  hero: { src: "/client-meeting.jpg", alt: "Tax advisers reviewing a VAT refund claim with a client" },
  whatsappText: "Hello Marifah Tax Advisory, I'd like help claiming a VAT refund from the FTA.",
  included: [
    "Review of your EmaraTax credit balance",
    "Check against the five-year time limit",
    "Input and output VAT reconciliation",
    "Invoices and supporting schedules prepared",
    "Refund request (VAT311) submitted",
    "Replies to FTA questions and audit requests",
  ],
  helpTitle: "How We Claim Your Refund",
  help: [
    {
      title: "Check your balance and the time limit",
      body: "From 1 January 2026, excess input VAT can be refunded or used only within five years of the end of the tax period it arose in. Credits whose five years ran out before or during 2026 can still be claimed until 31 December 2026, after which they are lost.",
    },
    {
      title: "Reconcile and document",
      body: "The FTA asks for an output and input tax report with the tax invoices and supporting documents behind your claim. We reconcile your returns to your accounts and remove any input VAT that cannot be recovered before you claim, so the request holds up under review.",
    },
    {
      title: "Submit the request",
      body: "We submit Form VAT311 on EmaraTax and make sure your bank details in the FTA account are correct, so an approved refund can be paid without delay.",
    },
    {
      title: "Handle the FTA review",
      body: "The FTA must decide a refund request within 20 business days of submission, or within a longer period it notifies you of, for example when it needs more information or audits the claim. Once a refund is approved, repayment starts within 5 business days. We prepare any replies the FTA asks for.",
    },
  ],
  table: {
    title: "VAT Refunds: Key Facts",
    columns: ["Item", "Rule"],
    rows: [
      ["Refund form", "VAT311 on EmaraTax"],
      ["Who can claim", "VAT-registered businesses with excess input VAT"],
      ["Time limit", "5 years from the end of the tax period"],
      ["Credits already past 5 years", "Claim by 31 December 2026"],
      ["FTA decision", "20 business days, unless it notifies a longer period"],
      ["Repayment after approval", "Starts within 5 business days"],
    ],
    note: "The five-year limit and the 31 December 2026 transitional deadline come from Federal Decree-Laws No. 16 and No. 17 of 2025, in force from 1 January 2026. Decision and repayment times follow the Tax Procedures Executive Regulation as amended from 1 April 2026. Instead of a refund, you can keep the credit to offset future VAT.",
  },
  pricing: [
    { label: "VAT Refund Claim", price: "Quote after consultation" },
    { label: "VAT Return Filing (four quarterly returns)", price: "AED 1,599" },
  ],
  pricingNote: "* The fee depends on the size of the claim and the periods involved and is confirmed after a free consultation. No hidden charges.",
  faqs: [
    {
      q: "Why does my business have a VAT credit?",
      a: "Usually because you paid more VAT on costs than you charged on sales, for example as an exporter making zero-rated sales, a new business with large set-up costs, or after a major purchase of equipment or property.",
    },
    {
      q: "Will the FTA audit my refund claim?",
      a: "It may. The FTA reviews refund requests and can audit them before paying, and the 2026 changes to the Tax Procedures Law expanded its powers to audit refund claims. A claim backed by a clean reconciliation and proper tax invoices is processed with fewer questions.",
    },
    {
      q: "What happens to VAT credits older than five years?",
      a: "Under the transitional rule, credits whose five-year period expired before 1 January 2026, or expires during 2026, can still be claimed if you submit the refund request by 31 December 2026. After that date they cannot be recovered.",
    },
    {
      q: "Should I claim a refund or carry the credit forward?",
      a: "If you expect to owe VAT in the coming periods, carrying the credit forward to offset it can be simpler. If the credit is large or growing, or is close to the five-year limit, a refund request is usually better. We look at your position and recommend one.",
    },
    {
      q: "Are there other VAT refund schemes?",
      a: "Yes. UAE nationals building a new home, foreign businesses that incur VAT on visits to the UAE and tourists each have separate refund schemes with their own conditions. This service covers refunds for VAT-registered businesses; ask us if you think another scheme applies to you.",
    },
  ],
  cta: {
    title: "Claim the VAT You're Owed",
    body: "Book a free consultation and we'll check your credit balance, the time limits that apply and how much you can claim.",
  },
};

export const metadata = landingMetadata(
  config,
  "VAT Refund UAE | Claim Excess Input VAT (VAT311) | Marifah Tax Advisory",
  "Claim your UAE VAT refund before credits expire: five-year limit, the 31 December 2026 deadline for older credits, VAT311 on EmaraTax and how long the FTA takes to decide.",
);

export default function Page() {
  return (
    <LandingRoute
      config={config}
      serviceName="VAT Refund Services UAE"
      offers={[]}
      areaServed={{ "@type": "Country", name: "United Arab Emirates" }}
    />
  );
}
