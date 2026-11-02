import type { Metadata } from "next";
import { Calculator, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-app";
import { PenaltyCalculator } from "@/components/penalties/penalty-calculator";
import { PENALTIES, TAX_TABS } from "@/lib/penalties/rules";

const title = "UAE Tax Penalty Calculator 2026 | VAT, Corporate Tax & E-Invoicing | Marifah";
const description =
  "Free UAE tax penalty calculator: work out FTA penalties for late VAT and Corporate Tax registration, late returns, late payment, voluntary disclosures, deregistration and e-invoicing, to the day.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/uae-tax-penalty-calculator" },
  openGraph: { type: "website", url: "/uae-tax-penalty-calculator", title, description },
};

const faqs = [
  {
    q: "What is the penalty for filing a VAT return one day late?",
    a: "AED 1,000 for the first late return, or AED 2,000 if you filed another return late in the previous 24 months. It is a one-off penalty per return, so it is the same whether you are one day or several months late. Any VAT paid late is penalised separately.",
  },
  {
    q: "What is the penalty for a late Corporate Tax return?",
    a: "AED 500 for each month or part of a month for the first 12 months, then AED 1,000 a month from the 13th month. Because part of a month counts as a full month, filing just one day late costs AED 500.",
  },
  {
    q: "How is the late payment penalty calculated?",
    a: "For VAT and Excise Tax (from 14 April 2026) and for Corporate Tax, the penalty is 14% a year on the unpaid tax, charged for each month or part of a month. That is about 1.17% of the unpaid tax per month, starting the day after the due date.",
  },
  {
    q: "What is the penalty for late VAT or Corporate Tax registration?",
    a: "AED 10,000 for each. For Corporate Tax, the FTA's waiver initiative cancels the AED 10,000 if you file your first Corporate Tax return or annual declaration within 7 months of the end of your first tax period.",
  },
  {
    q: "What changed on 14 April 2026?",
    a: "Cabinet Decision No. 129 of 2025 revised the VAT and Excise Tax penalties. Late payment moved from 2% + 4% + 1% a day to 14% a year charged monthly; voluntary disclosures moved from 5%–40% to 1% of the tax difference per month; an error found after an audit notice moved from 50% to 15% plus 1% a month; an incorrect return dropped to AED 500; and failing to update your tax record dropped to AED 1,000.",
  },
  {
    q: "Can a penalty be reduced or waived?",
    a: "You can ask the FTA to reconsider a penalty within the time limit set by the Tax Procedures Law, and the FTA also runs waiver initiatives from time to time. Whether a penalty can be reduced depends on your circumstances, so speak to a tax professional before applying.",
  },
];

const TAX_HEADINGS: Record<string, string> = {
  vat: "VAT penalties",
  ct: "Corporate Tax penalties",
  excise: "Excise Tax penalties",
  einv: "E-invoicing penalties",
};

export default function PenaltyCalculatorPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "UAE Tax Penalty Calculator",
      url: "https://www.marifahtax.com/uae-tax-penalty-calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
      provider: { "@id": "https://www.marifahtax.com/#organization" },
      description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.marifahtax.com/" },
        { "@type": "ListItem", position: 2, name: "UAE Tax Penalty Calculator", item: "https://www.marifahtax.com/uae-tax-penalty-calculator" },
      ],
    },
  ];

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="border-b border-primary/10 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10 md:pt-16">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-5">
            <a href="/" className="hover:text-primary">Home</a><span className="mx-1.5">/</span>
            <span className="text-foreground">Tax Penalty Calculator</span>
          </nav>
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 items-center justify-center shrink-0">
              <Calculator className="w-7 h-7 text-primary" />
            </div>
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Free Tool</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">UAE Tax Penalty Calculator</h1>
              <p className="text-muted-foreground leading-relaxed">
                Work out the FTA penalty for a late registration, return, payment, deregistration or voluntary disclosure, down to a single day late.
                Covers VAT, Corporate Tax, Excise Tax and e-invoicing, using the penalties in force today.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary" /> Updated for Cabinet Decision No. 129 of 2025 (VAT &amp; Excise, from 14 April 2026) and No. 173 of 2026 (e-invoicing)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <PenaltyCalculator />
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed max-w-4xl">
          This calculator gives an estimate based on the published penalty tables. The FTA calculates and imposes the actual penalty, and the amount can depend on facts
          the calculator can't see, such as partial payments, earlier violations or a waiver. It is not legal advice.
        </p>
      </section>

      {/* Full reference — every penalty, readable without JavaScript */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-2xl font-bold text-foreground mb-2">All UAE Tax Penalties at a Glance</h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-3xl">The full list of administrative penalties the FTA can impose, with the legal basis for each.</p>
        <div className="space-y-10">
          {TAX_TABS.map((t) => (
            <div key={t.id}>
              <h3 className="text-xs font-bold tracking-widest uppercase text-gold mb-4">{TAX_HEADINGS[t.id]}</h3>
              <div className="rounded-2xl border border-border overflow-hidden bg-card">
                <table className="w-full text-sm">
                  <thead className="bg-primary/5 text-left">
                    <tr>
                      <th scope="col" className="px-4 sm:px-6 py-3 font-semibold text-foreground">Violation</th>
                      <th scope="col" className="px-4 sm:px-6 py-3 font-semibold text-foreground">Penalty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PENALTIES.filter((p) => p.tax === t.id).map((p) => (
                      <tr key={p.id} className="border-t border-border align-top">
                        <td className="px-4 sm:px-6 py-3 text-foreground w-1/2">{p.title}</td>
                        <td className="px-4 sm:px-6 py-3 text-muted-foreground">{p.display}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground leading-relaxed max-w-4xl">
          Sources: Cabinet Decision No. 40 of 2017 as amended by Nos. 49 of 2021, 108 of 2021 and 129 of 2025 (VAT, Excise Tax and Tax Procedures);
          Cabinet Decision No. 75 of 2023 as amended by No. 10 of 2024 (Corporate Tax); Cabinet Decision No. 173 of 2026 (e-invoicing).
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group bg-card border border-primary/10 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-sm font-semibold text-foreground pr-4">{f.q}</h3>
                <span className="text-primary transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
