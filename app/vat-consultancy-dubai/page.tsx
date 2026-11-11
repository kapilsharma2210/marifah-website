"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageCircle, ArrowRight, CheckCircle, BadgeCheck, Calculator, ChevronDown,
} from "lucide-react";
import { ConsultancyForm } from "@/components/consultancy-form";
import { SiteShell } from "@/components/site-app";
import { relatedServices } from "@/lib/service-menu";
import { FEATURED_REVIEWS } from "@/lib/reviews/data";
import { ReviewCard } from "@/components/reviews/review-card";

const content = { brand: "MARIFAH TAX ADVISORY", whatsapp: "971505815245" };

const pricing: { label: string; price: string; buyOnline?: boolean; highlight?: boolean }[] = [
  { label: "VAT Registration (TRN)", price: "AED 799" },
  { label: "VAT Return Filing (four quarters)", price: "AED 1,599" },
];

const included = [
  "VAT registration (TRN) with FTA",
  "Quarterly VAT return preparation & filing",
  "Input/output VAT reconciliation",
  "VAT advisory & invoice review",
  "VAT refund assistance",
  "Dedicated VAT advisor assigned",
];

const steps = [
  { step: "01", title: "Free Consultation", desc: "We review your business turnover and confirm whether mandatory or voluntary registration applies." },
  { step: "02", title: "Document Collection", desc: "Trade Licence, MOA, bank account details, Emirates ID, and 12-month turnover summary." },
  { step: "03", title: "FTA Application", desc: "We submit your registration on EmaraTax, answer any FTA queries, and track the application." },
  { step: "04", title: "TRN Issued (Day 3–5)", desc: "Your Tax Registration Number is issued. You are now legally VAT-registered in the UAE." },
];

const penalties = [
  { violation: "Late VAT registration", penalty: "AED 10,000" },
  { violation: "Late VAT return filing (1st offence)", penalty: "AED 1,000" },
  { violation: "Late VAT return filing (repeat)", penalty: "AED 2,000" },
  { violation: "Late VAT payment", penalty: "14% per annum" },
  { violation: "Incorrect VAT return", penalty: "AED 3,000 – 5,000" },
  { violation: "Failure to display TRN", penalty: "AED 10,000" },
];

const faqs = [
  { q: "What is the VAT registration threshold in UAE?", a: "AED 375,000 in taxable turnover in the previous 12 months triggers mandatory VAT registration. Voluntary registration is possible above AED 187,500." },
  { q: "How long does VAT registration take?", a: "3–5 working days when documents are correctly submitted. We manage the full process end to end." },
  { q: "What is a Tax Registration Number (TRN)?", a: "A TRN is your unique 15-digit VAT identification number issued by the FTA. You must display it on all tax invoices. Failure to do so attracts an AED 10,000 penalty." },
  { q: "Can I claim back VAT paid on business expenses?", a: "Yes. Input VAT on business expenses can be offset against output VAT you collect. This is calculated in your VAT return. We ensure you claim every dirham you are entitled to." },
  { q: "Do free zone companies pay UAE VAT?", a: "Generally yes, unless operating in a Designated Zone. The treatment depends on where your customers are based and the nature of your supply." },
];

export default function VATConsultancyDubai() {
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <SiteShell>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "VAT Consultancy Dubai",
            "description": "Complete UAE VAT consultancy — registration, quarterly return filing, FTA compliance, and advisory for Dubai and all Emirates businesses.",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Marifah Tax Advisory",
              "url": "https://www.marifahtax.com",
              "telephone": "+971505815245",
              "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" }
            },
            "areaServed": [
              { "@type": "City", "name": "Dubai" },
              { "@type": "City", "name": "Abu Dhabi" },
              { "@type": "Country", "name": "United Arab Emirates" }
            ],
            "offers": [
              { "@type": "Offer", "name": "VAT Registration", "price": "799", "priceCurrency": "AED" },
              { "@type": "Offer", "name": "VAT Return Filing", "price": "1599", "priceCurrency": "AED" }
            ]
          })
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-primary/10">
        <div className="relative h-72 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=90"
            alt="VAT Consultancy Dubai"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/90" />
        </div>
        <div className="max-w-4xl mx-auto relative px-4 sm:px-6 pb-10">
          <div className="flex items-start gap-4 mt-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
                High Demand
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight"
              >
                VAT Consultancy Dubai — Expert UAE VAT Services
              </motion.h1>
              <p className="text-muted-foreground text-sm tracking-wide">Registration · Filing · Advisory</p>
            </div>
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed text-sm sm:text-base border-l-2 border-primary/40 pl-4">
            Trusted by 2000+ UAE businesses for VAT registration, return filing, and FTA compliance. From AED 799. We handle every step — so you never face an FTA penalty.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => setConsultancyOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book Free Consultation
            </button>
            <a
              href={`https://wa.me/${content.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-14">

        {/* WHAT'S INCLUDED */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {included.map((pt, i) => (
              <div key={i} className="flex items-start gap-3 bg-card border border-primary/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{pt}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* HOW WE HELP */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">How We Help</h2>
          <div className="space-y-4">
            {[
              { title: "VAT Registration (TRN)", body: "We obtain your Tax Registration Number from the FTA — typically within 3–5 working days. We handle document preparation, EmaraTax submission, and follow-up." },
              { title: "Quarterly VAT Return Filing", body: "Accurate input/output VAT reconciliation and timely return submission before every FTA deadline. You get a summary report after every filing." },
              { title: "VAT Advisory & Consultancy", body: "Not sure which supplies are zero-rated vs exempt? We advise on VAT treatment for your specific business — retail, real estate, healthcare, export." },
              { title: "VAT Deregistration", body: "If you stop making taxable supplies, your turnover drops below the AED 187,500 voluntary threshold, or you qualify to deregister voluntarily below AED 375,000, we manage the deregistration application and final VAT return with the FTA." },
              { title: "VAT Refund Assistance", body: "Exporters and eligible businesses can claim VAT refunds from the UAE FTA. We prepare and submit your refund application with full documentation." },
            ].map((sec, i) => (
              <div key={i} className="bg-card border border-primary/10 rounded-2xl p-6 hover:border-primary/25 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{sec.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed sm:pl-10">{sec.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* HOW IT WORKS */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">How VAT Registration Works</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <div key={i} className="bg-card border border-primary/10 rounded-2xl p-5 hover:border-primary/25 transition-colors">
                <span className="text-3xl font-black text-primary/20 leading-none block mb-2">{s.step}</span>
                <h3 className="text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PRICING */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">Transparent Pricing</h2>
          <div className="rounded-2xl border border-primary/20 overflow-hidden">
            {pricing.map((row, i) => (
              <div key={i} className={`flex items-center justify-between px-4 sm:px-6 py-4 border-b border-primary/10 last:border-0 ${row.highlight ? "bg-primary/10" : "bg-card"}`}>
                <div className="flex items-center gap-3">
                  {row.highlight && <BadgeCheck className="w-4 h-4 text-primary shrink-0" />}
                  <span className={`text-sm ${row.highlight ? "text-foreground font-semibold" : "text-muted-foreground"}`}>{row.label}</span>
                </div>
                <span className={`text-sm font-bold ${row.highlight ? "text-primary text-base" : "text-foreground"}`}>{row.price}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 pl-1">* No hidden charges. What you see is what you pay.</p>
        </motion.div>

        {/* PENALTIES TABLE */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">VAT Penalties to Avoid</h2>
          <div className="rounded-2xl border border-primary/20 overflow-hidden">
            <div className="grid grid-cols-2 bg-primary/10 px-4 sm:px-6 py-3 border-b border-primary/20">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Violation</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary text-right">FTA Penalty</span>
            </div>
            {penalties.map((row, i) => (
              <div key={i} className="grid grid-cols-2 px-4 sm:px-6 py-3 border-b border-primary/10 last:border-0 bg-card hover:bg-primary/5 transition-colors">
                <span className="text-sm text-muted-foreground">{row.violation}</span>
                <span className="text-sm font-semibold text-foreground text-right">{row.penalty}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 pl-1">Our clients have never faced an FTA penalty on our watch. We monitor all deadlines and file every return before the due date — guaranteed.</p>
        </motion.div>

        {/* TESTIMONIALS */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">What Our Clients Say</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {FEATURED_REVIEWS.slice(0, 3).map((r) => (
              <ReviewCard key={r.id} review={r} clamp />
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
            <a href="/reviews" className="text-primary hover:underline">Read all reviews →</a>
            <a href="/reviews#write" className="text-primary hover:underline">Write a review</a>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/25 transition-colors">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col items-start gap-5"
        >
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">Get Your UAE VAT Sorted — Today</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t wait for an FTA penalty notice. Book a free 30-minute consultation — we&apos;ll review your situation and tell you exactly what needs to be done.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => setConsultancyOpen(true)}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
            >
              Book Free Consultation
            </button>
            <a
              href={`https://wa.me/${content.whatsapp}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </motion.div>

      </div>

      {/* RELATED SERVICES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-4">
        <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">Related Services</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {(relatedServices("/vat-consultancy-dubai") ?? []).map((l) => (
            <a key={l.href} href={l.href} className="group flex items-center justify-between gap-3 bg-card border border-primary/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{l.label}</span>
              <ArrowRight className="w-4 h-4 text-primary shrink-0" />
            </a>
          ))}
        </div>
      </section>

      <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
    </SiteShell>
  );
}
