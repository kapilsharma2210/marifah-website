"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageCircle, Mail, Phone, Linkedin, Instagram, Facebook,
  CheckCircle, BadgeCheck, Calculator, ArrowRight, ShieldCheck,
  Clock, Users, Award, ChevronDown, Star
} from "lucide-react";
import { ConsultancyForm } from "@/components/consultancy-form";

const content = { brand: "MARIFAH TAX ADVISORY", whatsapp: "971505815245" };

type PageKey = "about" | "services" | "packages" | "blog" | "contact";

function Navbar({ onNav, onConsultancy }: { onNav: (p: PageKey | null) => void; onConsultancy: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <a href="/" className="font-bold text-lg tracking-widest text-primary cursor-pointer shrink-0">
          {content.brand}
        </a>
        <div className="hidden lg:flex items-center gap-6">
          <a href="/" className="text-sm text-foreground hover:text-primary transition-colors font-medium">Home</a>
          <a href="/#about" className="text-sm text-foreground hover:text-primary transition-colors">About</a>
          <a href="/#services" className="text-sm text-foreground hover:text-primary transition-colors">Services</a>
          <a href="/#packages" className="text-sm text-foreground hover:text-primary transition-colors">Packages</a>
          <a href="/#blog" className="text-sm text-foreground hover:text-primary transition-colors">Insights</a>
          <a href="/#contact" className="text-sm text-foreground hover:text-primary transition-colors">Contact</a>
          <button
            onClick={onConsultancy}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Free Consultation
          </button>
        </div>
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
            <span className="block w-6 h-0.5 bg-current" />
          </div>
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-t border-primary/10 px-6 py-4 space-y-3 bg-background">
          {["Home", "About", "Services", "Packages", "Insights", "Contact"].map((item) => (
            <a key={item} href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
              className="block text-sm text-foreground hover:text-primary transition-colors py-1"
              onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
          <button onClick={() => { onConsultancy(); setMobileOpen(false); }}
            className="w-full bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold mt-2">
            Free Consultation
          </button>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="text-primary font-bold text-base tracking-widest mb-4">{content.brand}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            UAE's trusted tax advisory firm — VAT, Corporate Tax & Accounting for businesses across all Emirates.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="text-foreground font-semibold mb-5 text-sm tracking-wide">Services</h4>
          <ul className="space-y-3">
            {["Corporate Tax Registration", "Corporate Tax Filing", "VAT Registration", "VAT Return Filing", "Accounting & Bookkeeping"].map(s => (
              <li key={s}><a href="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-foreground font-semibold mb-5 text-sm tracking-wide">Company</h4>
          <ul className="space-y-3">
            {["About", "Services", "Packages", "Blog", "Contact"].map(p => (
              <li key={p}><a href={`/#${p.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{p}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-foreground font-semibold mb-5 text-sm tracking-wide">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />info@marifahtax.com</p>
            <p className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />+{content.whatsapp}</p>
          </div>
          <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors">
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-primary/10 py-5 px-6 flex flex-col md:flex-row justify-between items-center gap-2 max-w-7xl mx-auto">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Marifah Tax Advisory. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={`https://wa.me/${content.whatsapp}?text=Hello%20Marifah%20Tax%20Advisory%2C%20I%20need%20assistance%20with%20UAE%20VAT%20services.`}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300">
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium">WhatsApp Us</span>
    </a>
  );
}

const pricing = [
  { label: "VAT Registration (TRN)", price: "AED 499" },
  { label: "VAT Return Filing (four quarters)", price: "AED 1,199" },
  { label: "Registration + Filing Combo", price: "AED 1,599", highlight: true },
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

const testimonials = [
  { name: "Ahmed Al Mansouri", role: "CEO, Dubai Trading Co.", text: "Marifah handled our VAT registration and filing seamlessly. We never had to worry about FTA deadlines again. Highly recommended!", stars: 5 },
  { name: "Priya Sharma", role: "Director, Horizon Consulting", text: "Professional, responsive, and very knowledgeable. They saved us from a potential AED 20,000 penalty with their timely advice.", stars: 5 },
  { name: "Omar Khalid", role: "Owner, Al Noor Retail", text: "Best tax consultancy in UAE. Their VAT package is great value — covers everything our business needs.", stars: 5 },
];

export default function VATConsultancyDubai() {
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background text-foreground min-h-screen">

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
              { "@type": "Offer", "name": "VAT Registration", "price": "499", "priceCurrency": "AED" },
              { "@type": "Offer", "name": "VAT Return Filing", "price": "1199", "priceCurrency": "AED" },
              { "@type": "Offer", "name": "VAT Registration + Filing Combo", "price": "1599", "priceCurrency": "AED" }
            ]
          })
        }}
      />

      <Navbar onNav={() => {}} onConsultancy={() => setConsultancyOpen(true)} />

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
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
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
            Trusted by 5,000+ UAE businesses for VAT registration, return filing, and FTA compliance. From AED 499. We handle every step — so you never face an FTA penalty.
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
          <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">What&apos;s Included</h2>
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
          <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">How We Help</h2>
          <div className="space-y-4">
            {[
              { title: "VAT Registration (TRN)", body: "We obtain your Tax Registration Number from the FTA — typically within 3–5 working days. We handle document preparation, EmaraTax submission, and follow-up." },
              { title: "Quarterly VAT Return Filing", body: "Accurate input/output VAT reconciliation and timely return submission before every FTA deadline. You get a summary report after every filing." },
              { title: "VAT Advisory & Consultancy", body: "Not sure which supplies are zero-rated vs exempt? We advise on VAT treatment for your specific business — retail, real estate, healthcare, export." },
              { title: "VAT Deregistration", body: "If your taxable turnover falls below AED 375,000, we manage the full deregistration process and final VAT return with FTA." },
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
          <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">How VAT Registration Works</h2>
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
          <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">Transparent Pricing</h2>
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
          <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">VAT Penalties to Avoid</h2>
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
          <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">What Our Clients Say</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card border border-primary/10 rounded-2xl p-5 hover:border-primary/30 transition-colors">
                <div className="flex gap-0.5 mb-3">
                  {Array(t.stars).fill(0).map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }}>
          <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">Frequently Asked Questions</h2>
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
          className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col items-start gap-5"
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

      <Footer />
      <FloatingWhatsApp />
      <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
    </div>
  );
}
