"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageCircle, ArrowRight, CheckCircle, BadgeCheck, FileText, ChevronDown,
} from "lucide-react";
import { ConsultancyForm } from "@/components/consultancy-form";
import { SiteShell } from "@/components/site-app";
import { relatedServices } from "@/lib/service-menu";
import { AddToCartButton, BuyRegistrationCard } from "@/components/cart/add-to-cart-button";
import { FEATURED_REVIEWS } from "@/lib/reviews/data";
import { ReviewCard } from "@/components/reviews/review-card";

const content = { brand: "MARIFAH TAX ADVISORY", whatsapp: "971505815245" };

const pricing: { label: string; price: string; buyOnline?: boolean; highlight?: boolean }[] = [
  { label: "Corporate Tax Registration", price: "AED 499", buyOnline: true },
  { label: "Corporate Tax Return Filing", price: "AED 1,999" },
];

const included = [
  "FTA corporate tax registration",
  "Accurate return preparation & submission",
  "Tax impact & liability assessment",
  "Free zone eligibility review",
  "Small Business Relief election",
  "Deregistration & ongoing support",
];

const whoMustRegister = [
  { type: "UAE Mainland LLC", required: "Yes — mandatory" },
  { type: "Free Zone Company", required: "Yes — mandatory" },
  { type: "Branch of Foreign Company", required: "Yes — mandatory" },
  { type: "Sole Proprietorship", required: "Yes — if commercial" },
  { type: "Natural Person (individual)", required: "If business income > AED 1M" },
  { type: "Government Entity", required: "No (unless specified)" },
];

const faqs = [
  { q: "Is Corporate Tax mandatory for all UAE businesses?", a: "Yes. All UAE businesses with net profit exceeding AED 375,000 must register and file Corporate Tax with FTA. Even exempt businesses must register. Penalties for non-registration start at AED 10,000." },
  { q: "What is the corporate tax rate in UAE?", a: "0% on taxable income up to AED 375,000. 9% on taxable income above AED 375,000. A 15% rate applies to large multinationals under OECD Pillar Two rules (revenue above AED 3.15 billion)." },
  { q: "When do I need to file my corporate tax return?", a: "Within 9 months of your financial year-end. For example, if your year ends 31 December 2024, your return is due by 30 September 2025." },
  { q: "What documents are needed for Corporate Tax registration?", a: "Trade Licence, Emirates ID of owner/manager, Memorandum of Association, financial statements, and EmaraTax portal access. We provide a full checklist after your free consultation." },
  { q: "Can free zone companies avoid Corporate Tax?", a: "Qualifying Free Zone Persons (QFZPs) can enjoy 0% on qualifying income — but strict FTA conditions apply. Non-qualifying income is taxed at 9%. Our experts assess your eligibility." },
  { q: "Are dividends and capital gains taxable?", a: "Dividends from UAE subsidiaries and qualifying capital gains on shares are generally exempt under the Participation Exemption — subject to specific conditions." },
];

export default function CorporateTaxConsultantsUAE() {
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
            "name": "Corporate Tax Consultants UAE",
            "description": "End-to-end UAE corporate tax consultancy — registration, annual return filing, FTA compliance, and strategic tax advisory for mainland and free zone businesses.",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Marifah Tax Advisory",
              "url": "https://www.marifahtax.com",
              "telephone": "+971505815245",
              "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" }
            },
            "areaServed": { "@type": "Country", "name": "United Arab Emirates" },
            "offers": [
              { "@type": "Offer", "name": "Corporate Tax Registration", "price": "499", "priceCurrency": "AED" },
              { "@type": "Offer", "name": "Corporate Tax Return Filing", "price": "1999", "priceCurrency": "AED" }
            ]
          })
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-primary/10">
        <div className="relative h-72 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=90"
            alt="Corporate Tax Consultants UAE"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/90" />
        </div>
        <div className="max-w-4xl mx-auto relative px-4 sm:px-6 pb-10">
          <div className="flex items-start gap-4 mt-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
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
                Corporate Tax Consultants UAE — End-to-End FTA Compliance
              </motion.h1>
              <p className="text-muted-foreground text-sm tracking-wide">Registration · Filing · Advisory</p>
            </div>
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed text-sm sm:text-base border-l-2 border-primary/40 pl-4">
            UAE&apos;s 9% Corporate Tax is live. Registration is mandatory for ALL businesses. We manage your end-to-end FTA compliance — so you never face an AED 10,000 penalty. From AED 499.
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
              { title: "Corporate Tax Registration — AED 499", body: "We register your business with the FTA for Corporate Tax via the EmaraTax portal. Document preparation, submission, and follow-up all handled. Turnaround: 3–5 working days." },
              { title: "Corporate Tax Return Filing — AED 1,999", body: "We prepare your annual Corporate Tax return based on your audited or management accounts, calculate your taxable income correctly, and file before the FTA deadline." },
              { title: "Tax Impact Assessment", body: "Not sure how Corporate Tax affects your business? We analyse your current financials and project your tax liability — so there are no surprises at year-end." },
              { title: "Free Zone Eligibility Review", body: "Qualifying Free Zone Persons can benefit from a 0% rate on qualifying income. We assess your eligibility and structure your filing accordingly." },
              { title: "Small Business Relief Election", body: "If your revenue is under AED 3 million, you may qualify to elect Small Business Relief and pay 0% tax. We assess your eligibility and file the election correctly with FTA." },
              { title: "Corporate Tax Deregistration", body: "If your business ceases, merges, or no longer meets registration criteria, we manage the full deregistration process with FTA." },
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

        {/* WHO MUST REGISTER */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">Who Must Register?</h2>
          <div className="rounded-2xl border border-primary/20 overflow-hidden">
            <div className="grid grid-cols-2 bg-primary/10 px-4 sm:px-6 py-3 border-b border-primary/20">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Business Type</span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary text-right">Registration</span>
            </div>
            {whoMustRegister.map((row, i) => (
              <div key={i} className="grid grid-cols-2 px-4 sm:px-6 py-3 border-b border-primary/10 last:border-0 bg-card hover:bg-primary/5 transition-colors">
                <span className="text-sm text-muted-foreground">{row.type}</span>
                <span className="text-sm font-semibold text-foreground text-right">{row.required}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 pl-1">Important: Registration is mandatory for ALL entities — even if you owe zero tax.</p>
        </motion.div>

        {/* PRICING */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-gold mb-5">Transparent Pricing</h2>
          <div className="rounded-2xl border border-primary/20 overflow-hidden">
            {pricing.map((row, i) => (
              <div key={i} className={`flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-primary/10 last:border-0 ${row.highlight ? "bg-primary/10" : "bg-card"}`}>
                <div className="flex items-center gap-3 min-w-0">
                  {row.highlight && <BadgeCheck className="w-4 h-4 text-primary shrink-0" />}
                  <span className={`text-sm ${row.highlight ? "text-foreground font-semibold" : "text-muted-foreground"}`}>{row.label}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-sm font-bold ${row.highlight ? "text-primary text-base" : "text-foreground"}`}>{row.price}</span>
                  {"buyOnline" in row && row.buyOnline && <AddToCartButton size="sm" />}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 pl-1">* No hidden charges. What you see is what you pay.</p>
        </motion.div>

        {/* BUY ONLINE */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.21 }}>
          <BuyRegistrationCard />
        </motion.div>

        {/* TESTIMONIALS */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}>
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
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
          transition={{ delay: 0.26 }}
          className="bg-card border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col items-start gap-5"
        >
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">Register Your Business for Corporate Tax — Today</h3>
            <p className="text-sm text-muted-foreground">The FTA is actively issuing penalties for late registration. Don&apos;t risk AED 10,000. Our team registers your business in 3–5 working days.</p>
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
          {(relatedServices("/corporate-tax-consultants-uae") ?? []).map((l) => (
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
