"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useRef, useMemo } from "react";
import {
  ArrowLeft, MessageCircle, Mail, Phone, Linkedin, Instagram, Facebook,
  ChevronDown, Search, ShieldCheck, Clock, Users, Award, FileText,
  Calculator, BookOpen, Package, Star, CheckCircle, ArrowRight,
  TrendingUp, Building2, Globe, BadgeCheck, PhoneCall, ChevronRight
} from "lucide-react";
import { ConsultancyForm } from "@/components/consultancy-form";
import { submitEnquiry, whatsappLink, type Enquiry } from "@/lib/contact";
import { CartButton } from "@/components/cart/cart-button";
import { AddToCartButton, BuyRegistrationCard } from "@/components/cart/add-to-cart-button";
import { CT_REGISTRATION_ID } from "@/lib/checkout/products";
import { ServicesOverview } from "@/components/content/services-overview";
import { BlogIndex } from "@/components/content/blog-index";
import { BlogArticle } from "@/components/content/blog-article";
import { ServiceDetail } from "@/components/content/service-detail";
import { AboutPage } from "@/components/content/about-page";
import { sitePages } from "@/lib/site-pages";
import { siteConfig } from "@/lib/site-config";
import { blogs, blogSlug, findBlog } from "@/lib/blog-data";
import { slugify } from "@/lib/blog-data";

const content = {
  brand: "MARIFAH TAX ADVISORY",
  whatsapp: "971505815245",
};

// ─── DATA ────────────────────────────────────────────────────────

const stats = [
  { value: "2000+", label: "Businesses Served" },
  { value: "100%", label: "FTA Compliant" },
  { value: "3+", label: "Years Experience" },
  { value: "AED 0", label: "Hidden Charges" },
];

const services = [
  {
    icon: FileText,
    tag: "High Demand",
    title: "Corporate Tax",
    subtitle: "Registration · Filing · Advisory",
    desc: "UAE's 9% corporate tax regime demands precision. We manage your end-to-end FTA compliance — registration, return filing, and year-round advisory — so your business never faces avoidable penalties.",
    points: [
      "FTA corporate tax registration",
      "Accurate return preparation & submission",
      "Tax impact & liability assessment",
      "Free zone eligibility review",
      "Deregistration & ongoing support",
    ],
    price: "From AED 499",
    sections: [
      {
        title: "Corporate Tax Registration",
        body: "Register your business with the Federal Tax Authority before the deadline. Penalties for non-registration start at AED 10,000.",
      },
      {
        title: "Return Filing",
        body: "We prepare and submit accurate Corporate Tax returns on your behalf — no errors, no delays.",
      },
      {
        title: "Free Zone Advisory",
        body: "Qualifying Free Zone Persons can benefit from a 0% rate on qualifying income. We assess your eligibility and structure your filing accordingly.",
      },
    ],
    pricing: [
      { label: "Corporate Tax Registration", price: "AED 499", productId: CT_REGISTRATION_ID },
      { label: "Corporate Tax Return Filing", price: "AED 2,199" },
      { label: "Registration + Filing Combo", price: "AED 2,599", highlight: true },
    ],
  },
  {
    icon: Calculator,
    tag: "High Demand",
    title: "UAE VAT",
    subtitle: "Registration · Filing · Advisory",
    desc: "From obtaining your Tax Registration Number to filing quarterly VAT returns — we handle every step with accuracy and meet every FTA deadline, keeping your business fully compliant at all times.",
    points: [
      "VAT registration (TRN) with FTA",
      "Quarterly VAT return preparation & filing",
      "Input/output VAT reconciliation",
      "VAT advisory & invoice review",
      "VAT refund assistance",
    ],
    price: "From AED 799",
    sections: [
      {
        title: "VAT Registration",
        body: "We obtain your Tax Registration Number (TRN) from the FTA — typically within 3–5 working days.",
      },
      {
        title: "Quarterly VAT Filing",
        body: "Accurate input/output VAT reconciliation and timely return submission to avoid late penalties.",
      },
      {
        title: "VAT Advisory",
        body: "Invoice review, zero-rated vs. exempt classification, and ongoing guidance as FTA regulations evolve.",
      },
    ],
    pricing: [
      { label: "VAT Registration (TRN)", price: "AED 799" },
      { label: "VAT Return Filing (four quarter)", price: "AED 1,599" },
      { label: "Registration + Filing Combo", price: "AED 1,999", highlight: true },
    ],
  },
  {
    icon: BookOpen,
    tag: "High Demand",
    title: "Accounting",
    subtitle: "Monthly Bookkeeping · Reporting",
    desc: "Clean, audit-ready books every single month. We manage your accounts, prepare financial statements, and give you clear visibility into your business finances — so decisions are always data-driven.",
    points: [
      "Monthly bookkeeping & journal entries",
      "Profit & loss, balance sheet preparation",
      "Bank reconciliation",
      "MIS & management reporting",
      "FTA-compliant record maintenance",
    ],
    price: "From AED 4,499",
    sections: [
      {
        title: "Monthly Bookkeeping",
        body: "Accurate recording of all transactions, bank reconciliation, and accounts payable/receivable management — every month without fail.",
      },
      {
        title: "Financial Statements",
        body: "Profit & loss statements, balance sheets, and cash flow reports prepared to accounting standards.",
      },
      {
        title: "MIS Reporting",
        body: "Management information reports that give you a real-time picture of your business performance.",
      },
      {
        title: "FTA-Compliant Records",
        body: "UAE law requires businesses to maintain financial records for 7 years. We ensure yours are always audit-ready.",
      },
    ],
    pricing: [
      { label: "Up to 50 transactions/month", price: "AED 4,499" },
      { label: "Up to 150 transactions/month", price: "AED 5,499" },
      { label: "Custom (high volume)", price: "Get a Quote", highlight: true },
    ],
  },
  {
    icon: Package,
    tag: "Best Value",
    title: "Full Compliance Package",
    subtitle: "VAT · Corporate Tax · Accounting",
    desc: "One firm, one invoice, total compliance. Our most popular package bundles VAT, Corporate Tax, and monthly Accounting under a single affordable retainer — giving your business complete peace of mind.",
    points: [
      "VAT registration & quarterly filing",
      "Corporate tax registration & return filing",
      "Monthly bookkeeping & financial statements",
      "Dedicated tax advisor assigned",
      "Priority support & deadline reminders",
    ],
    price: "AED 6,499",
    sections: [
      {
        title: "What's Included",
        body: "VAT registration and quarterly return filing. Corporate Tax registration and annual return filing. Monthly bookkeeping and financial statement preparation. Dedicated tax advisor — one person who knows your business. Priority support, compliance calendar, and deadline reminders year-round.",
      },
      {
        title: "Why This Package?",
        body: "Buying individually would cost significantly more. This bundle gives you complete FTA compliance at one predictable price — no surprises, no extra invoices.",
      },
    ],
    pricing: [
      { label: "Full Compliance Package (all-inclusive)", price: "AED 6,499", highlight: true },
    ],
  },
];

const whyUs = [
  { icon: ShieldCheck, title: "Tax Experts", desc: "Fully compliant with the Federal Tax Authority. We stay updated with every regulation change so you don't have to." },
  { icon: Clock, title: "Fast Turnaround", desc: "VAT & Corporate Tax registrations completed within days. We respect your deadlines as much as you do." },
  { icon: Users, title: "Dedicated Advisor", desc: "You get a dedicated tax advisor — not a call centre. One person who knows your business inside out." },
  { icon: Award, title: "Transparent Pricing", desc: "No hidden charges. No surprises. Clear flat-fee pricing for every service. What you see is what you pay." },
  { icon: TrendingUp, title: "Tax Planning", desc: "We don't just file — we advise. Our experts help structure your business to legally minimise your tax liability." },
  { icon: Globe, title: "Serving All UAE", desc: "Dubai, Abu Dhabi, Sharjah, and all Emirates. We serve businesses across the entire UAE." },
];

const process = [
  { step: "01", title: "Free Consultation", desc: "Book a free 30-minute call. We understand your business and identify exactly what you need." },
  { step: "02", title: "Document Collection", desc: "We guide you on what documents are needed. Simple checklist — no confusion, no back and forth." },
  { step: "03", title: "We Handle Everything", desc: "Our experts file, register, and manage everything with FTA on your behalf. You relax." },
  { step: "04", title: "Stay Compliant", desc: "Ongoing support, reminders for deadlines, and year-round compliance monitoring for your business." },
];

const testimonials = [
  { name: "Ahmed Al Mansouri", role: "CEO, Dubai Trading Co.", text: "Marifah handled our VAT registration and filing seamlessly. We never had to worry about FTA deadlines again. Highly recommended!", stars: 5 },
  { name: "Priya Sharma", role: "Director, Horizon Consulting", text: "Professional, responsive, and very knowledgeable. They saved us from a potential AED 20,000 penalty with their timely advice.", stars: 5 },
  { name: "Omar Khalid", role: "Owner, Al Noor Retail", text: "Best tax consultancy in UAE. Their full package is great value — covers everything our business needs at a very fair price.", stars: 5 },
  { name: "Sara Mathew", role: "CFO, TechStart Dubai", text: "Switched from another firm to Marifah and the difference is night and day. Fast, accurate, and always available when we need them.", stars: 5 },
];

const faqs = [
  { q: "Is Corporate Tax mandatory for all UAE businesses?", a: "Yes. Every UAE business that is a taxable person must register for Corporate Tax with the FTA and file a return, whatever its profit. Profit up to AED 375,000 is taxed at 0% and profit above that at 9%. Even exempt businesses may need to register. The penalty for late registration is AED 10,000." },
  { q: "How long does VAT registration take?", a: "With Marifah, VAT registration (TRN) is typically completed within 3–5 working days once all documents are submitted. We guide you through every step." },
  { q: "What documents are needed for Corporate Tax registration?", a: "Trade License, Emirates ID of owner/manager, Memorandum of Association, financial statements, and EmaraTax portal access. We provide a full checklist after your free consultation." },
  { q: "Can free zone companies avoid Corporate Tax?", a: "Qualifying Free Zone Persons (QFZPs) can enjoy 0% on qualifying income — but strict FTA conditions apply. Non-qualifying income is taxed at 9%. Our experts assess your eligibility." },
  { q: "What happens if I file VAT returns late?", a: "Late VAT filing attracts penalties starting at AED 1,000 for the first offence, increasing to AED 2,000 for subsequent offences. Interest also applies on unpaid VAT amounts." },
];

const pageContent: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
  // The About page has its own layout and content: see lib/about-data.ts and components/content/about-page.tsx.
  about: {
    title: "About Marifah Tax Advisory",
    sections: [],
  },
  services: {
    title: "Our Services",
    sections: [
      { heading: "Corporate Tax Services", body: "UAE introduced a 9% Corporate Tax on business profits above AED 375,000 effective June 2023. Our experts handle your entire Corporate Tax journey — from registration with FTA, to accurate filing, tax impact assessment, deregistration, and ongoing advisory. We ensure your business meets every FTA requirement on time, avoiding costly penalties." },
      { heading: "UAE VAT Services", body: "VAT at 5% applies to most goods and services in UAE. Whether you need VAT registration, quarterly return filing, VAT refund assistance, or deregistration — our team has you covered. We review your invoices, reconcile your VAT accounts, and file accurate returns so you are always compliant with FTA." },
      { heading: "Accounting & Bookkeeping", body: "Clean books are the foundation of a healthy business. Our accounting team provides monthly bookkeeping, financial statement preparation, MIS reporting, and accounting review services. We use modern accounting software to give you real-time visibility of your business finances." },
      { heading: "Tax Consultancy & Advisory", body: "Every business is unique, and so is its tax situation. Our senior advisors provide personalised tax planning strategies to legally minimise your tax liability, structure your business efficiently, and protect your profits." },
      { heading: "Why Act Now?", body: "FTA penalties for non-compliance start at AED 1,000 and can go up to AED 50,000 or more. Every day of delay increases your risk. Our team is ready to get your business fully compliant — quickly and affordably. Book a free consultation today." },
    ],
  },
  packages: {
    title: "Our Packages & Pricing",
    sections: [
      { heading: "pricing-cards", body: "" },
    ],
  },
  blog: {
    title: "Tax Insights & Knowledge Hub",
    sections: [],
  },
  contact: {
    title: "Contact Marifah Tax Advisory",
    sections: [
      { heading: "Get in Touch", body: "We are here to help your business stay compliant and grow with confidence. Whether you have a quick question or need a full tax review, our team is ready to assist." },
      { heading: "CONTACT_CARDS", body: "" },
      { heading: "Book a Free Consultation", body: "Book a free 30-minute consultation with our tax experts. We will review your business situation, identify your compliance requirements, and recommend the best solution — completely free, with no obligation." },
  ],
  },
};
type Blog = { title: string; excerpt?: string; category?: string; readTime?: string; sections?: any[] };
type ServicePlan = typeof services[0];
type PageKey = keyof typeof pageContent;

// ─── SHARED COMPONENTS ───────────────────────────────────────────

function Navbar({ onNav, onConsultancy }: { onNav: (p: PageKey | null) => void; onConsultancy: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="flex justify-between items-center gap-3 px-4 sm:px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <a
          href="/"
          className="font-bold text-base sm:text-lg tracking-widest text-gold cursor-pointer shrink-0"
          onClick={(e) => { e.preventDefault(); onNav(null); setMobileOpen(false); }}
        >
          {content.brand}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 list-none">
          <li><button onClick={() => onNav(null)} className="text-sm text-foreground hover:text-primary transition-colors font-medium">Home</button></li>
          <li><a href="/about" onClick={(e) => { e.preventDefault(); onNav("about"); }} className="text-sm text-foreground hover:text-primary transition-colors">About</a></li>
          <li className="relative group">
            <button className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
              Services <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-card border border-border rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 w-[700px] p-7 grid grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">Corporate Tax</p>
                <ul className="space-y-2.5">
                  {["Corporate Tax Registration", "UAE Corporate Tax Filing", "Corporate Tax Advisory", "Tax Impact Assessment", "Corporate Tax Deregistration", "Tax Agency Services"].map(item => (
                    <li key={item}><a href="/services/corporate-tax" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-left w-full"><ChevronRight className="w-3 h-3 text-primary shrink-0" />{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">UAE VAT</p>
                <ul className="space-y-2.5">
                  {["VAT Registration Services", "VAT Consultancy & Advisory", "VAT Return Filing", "VAT Deregistration", "VAT Refund Services"].map(item => (
                    <li key={item}><a href="/services/uae-vat" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-left w-full"><ChevronRight className="w-3 h-3 text-primary shrink-0" />{item}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-gold border-l-2 border-gold pl-3 mb-4">Accounting</p>
                <ul className="space-y-2.5">
                  {["Bookkeeping & Accounting", "Financial Statements", "MIS Reporting", "Accounting Review"].map(item => (
                    <li key={item}><a href="/services/accounting" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-left w-full"><ChevronRight className="w-3 h-3 text-primary shrink-0" />{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li><a href="/packages" onClick={(e) => { e.preventDefault(); onNav("packages"); }} className="text-sm text-foreground hover:text-primary transition-colors">Packages</a></li>
          <li><a href="/blog" onClick={(e) => { e.preventDefault(); onNav("blog"); }} className="text-sm text-foreground hover:text-primary transition-colors">Blog</a></li>
          <li><a href="/contact" onClick={(e) => { e.preventDefault(); onNav("contact"); }} className="text-sm text-foreground hover:text-primary transition-colors">Contact</a></li>
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`https://wa.me/${content.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="text-sm">{`+${content.whatsapp}`}</span>
          </a>
          <CartButton />
          <Button
            onClick={onConsultancy}
            className="hidden lg:flex bg-primary text-primary-foreground rounded-full px-5 py-2 text-sm hover:bg-primary/90 font-medium"
          >
            Free Consultation
          </Button>
          {/* Hamburger button - mobile only */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-primary/10 px-6 py-4 flex flex-col gap-1">
          {[
            { label: "Home", page: null },
            { label: "About", page: "about" },
            { label: "Services", page: "services" },
            { label: "Packages", page: "packages" },
            { label: "Blog", page: "blog" },
            { label: "Contact", page: "contact" },
          ].map(({ label, page }) => (
            <button
              key={label}
              onClick={() => { onNav(page as PageKey | null); setMobileOpen(false); }}
              className="text-left text-base text-foreground hover:text-primary py-3 border-b border-primary/10 last:border-0 transition-colors"
            >
              {label}
            </button>
          ))}
          <Button
            onClick={() => { onConsultancy(); setMobileOpen(false); }}
            className="mt-3 w-full bg-primary text-primary-foreground rounded-full py-2 text-sm hover:bg-primary/90"
          >
            Free Consultation
          </Button>
        </div>
      )}
    </nav>
  );
}

function Footer({ onNav }: { onNav: (p: PageKey | null) => void }) {
  return (
    <footer className="dark bg-background text-foreground border-t border-primary/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="text-gold font-bold text-base tracking-widest mb-4">{content.brand}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            UAE's trusted tax advisory firm — VAT, Corporate Tax & Accounting for businesses across all Emirates.
          </p>
          <div className="flex gap-4">
            {[
              { url: siteConfig.socials.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { url: siteConfig.socials.instagram, Icon: Instagram, label: "Instagram" },
              { url: siteConfig.socials.facebook, Icon: Facebook, label: "Facebook" },
            ].filter(s => s.url).map(({ url, Icon, label }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"><Icon className="w-4 h-4" /></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-5 text-sm tracking-wide">Services</h4>
          <ul className="space-y-3">
            {[
              { s: "Corporate Tax Registration", slug: "corporate-tax" },
              { s: "Corporate Tax Filing", slug: "corporate-tax" },
              { s: "VAT Registration", slug: "uae-vat" },
              { s: "VAT Return Filing", slug: "uae-vat" },
              { s: "Accounting & Bookkeeping", slug: "accounting" },
            ].map(({ s, slug }) => (
              <li key={s}><a href={`/services/${slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-5 text-sm tracking-wide">Company</h4>
          <ul className="space-y-3">
            {(["about", "services", "packages", "blog", "contact"] as PageKey[]).map(p => (
              <li key={p}><button onClick={() => onNav(p)} className="text-sm text-muted-foreground hover:text-primary transition-colors capitalize text-left">{p}</button></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-foreground font-semibold mb-5 text-sm tracking-wide">Contact</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary" />info@marifahtax.com</p>
            <p className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />+{content.whatsapp}</p>
          </div>
          <a
            href={`https://wa.me/${content.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-primary/10 py-5 px-6 flex flex-col md:flex-row justify-between items-center gap-2 max-w-7xl mx-auto">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Marifah Tax Advisory. All Rights Reserved.</p>
      </div>
    </footer >
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${content.whatsapp}?text=Hello%20Marifah%20Tax%20Advisory%2C%20I%20need%20assistance%20with%20UAE%20tax%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium">WhatsApp Us</span>
    </a>
  );
}

// ─── INNER PAGE LAYOUT ───────────────────────────────────────────

function InnerPage({ pageKey, onBack, onNav, onConsultancy, onBlog, onService }: {
  pageKey: PageKey;
  onBack: () => void;
  onNav: (p: PageKey | null) => void;
  onConsultancy: () => void;
  onBlog: (b: any) => void;
  onService: (s: ServicePlan) => void;
}) {
  const page = pageContent[pageKey];
  const wide = pageKey === "blog" || pageKey === "services";
  const width = wide ? "max-w-6xl" : "max-w-4xl";
  const intro =
    pageKey === "services" ? sitePages.services.description : pageKey === "blog" ? sitePages.blog.description : null;
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Navbar onNav={onNav} onConsultancy={onConsultancy} />
      </div>

      {/* Page Hero */}
      <div className="bg-card border-b border-primary/10 py-14 px-4 sm:px-6">
        <div className={`${width} mx-auto`}>
          <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {page.title}
          </motion.h1>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
          {intro && <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">{intro}</p>}
        </div>
      </div>

      <div className="px-4 sm:px-6 py-14">
      <div className={`${width} mx-auto`}>
        <div className="space-y-12">
          {pageKey === "services" ? (
            <ServicesOverview
              services={services}
              sections={page.sections}
              slugOf={serviceSlug}
              onService={(s) => onService(s as ServicePlan)}
              onConsultancy={onConsultancy}
              whatsapp={content.whatsapp}
            />
          ) : pageKey === "blog" ? (
            <BlogIndex blogs={blogs} onBlog={onBlog} />
          ) : pageKey === "packages" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Corporate Tax */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="rounded-2xl border border-primary/20 bg-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">Corporate Tax</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-bold text-primary">AED 499 <span className="text-sm font-normal text-muted-foreground">/ registration</span></p>
                  <p className="text-lg font-semibold text-foreground">AED 2,199 <span className="text-sm font-normal text-muted-foreground">/ return filing</span></p>
                </div>
                <p className="text-muted-foreground text-sm">Full corporate tax compliance handled by certified experts.</p>
                <div className="border-t border-primary/10 pt-4 flex flex-col gap-2">
                  {["FTA corporate tax registration", "Annual tax return filing", "Free zone eligibility assessment", "Dedicated tax advisor"].map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-2 flex flex-col gap-2">
                  <AddToCartButton label="Add Registration to Cart" className="w-full" />
                  <p className="text-xs text-muted-foreground text-center">Buy Corporate Tax Registration online · Pay by card</p>
                </div>
              </motion.div>

              {/* VAT */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="rounded-2xl border border-primary/20 bg-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">VAT Services</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-bold text-primary">AED 799 <span className="text-sm font-normal text-muted-foreground">/ registration</span></p>
                  <p className="text-lg font-semibold text-foreground">AED 1,599 <span className="text-sm font-normal text-muted-foreground">/ return filing</span></p>
                </div>
                <p className="text-muted-foreground text-sm">VAT registration, filing and full FTA compliance.</p>
                <div className="border-t border-primary/10 pt-4 flex flex-col gap-2">
                  {["TRN registration with FTA", "Quarterly VAT return filing", "Input/output VAT reconciliation", "VAT advisory & invoice review"].map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Accounting */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="rounded-2xl border border-primary/20 bg-card p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">Accounting & Bookkeeping</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-bold text-primary">AED 4,499 <span className="text-sm font-normal text-muted-foreground">starting from</span></p>
                  <p className="text-xs text-muted-foreground">*Prices may vary depending on number of transactions</p>
                </div>
                <p className="text-muted-foreground text-sm">Complete bookkeeping and financial management for your business.</p>
                <div className="border-t border-primary/10 pt-4 flex flex-col gap-2">
                  {["Monthly journal entries", "Bank reconciliation", "Accounts payable/receivable mgmt", "Monthly financial statements"].map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Full Compliance */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }} className="rounded-2xl border-2 border-primary bg-card p-6 flex flex-col gap-4 relative">
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Best Value
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">Full Compliance Package</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-bold text-primary">AED 6,499 <span className="text-sm font-normal text-muted-foreground">/ year</span></p>
                  <p className="text-xs text-muted-foreground">VAT · Corporate Tax · Accounting — all included</p>
                </div>
                <p className="text-muted-foreground text-sm">One firm, one invoice, total compliance. Our most popular package.</p>
                <div className="border-t border-primary/10 pt-4 flex flex-col gap-2">
                  {["VAT registration & quarterly filing", "Corporate tax registration & filing", "Monthly bookkeeping & statements", "Dedicated advisor + priority support"].map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            page.sections.map((section, i) => {
              const isChecklist = section.body.startsWith("CHECKLIST:");
              const checklistItems = isChecklist
                ? section.body.replace("CHECKLIST:", "").split("|")
                : [];
              if (section.heading === "CONTACT_CARDS") return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {/* Phone / WhatsApp */}
                    <a href={`https://wa.me/971505815245`} target="_blank" rel="noopener noreferrer"
                      className="flex flex-col gap-3 bg-card border border-primary/15 rounded-2xl p-6 hover:border-primary/40 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-gold mb-1">WhatsApp & Phone</p>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">+971505815245</p>
                        <p className="text-xs text-muted-foreground mt-1">Responds within 1 hour</p>
                      </div>
                    </a>
                    {/* Email */}
                    <a href="mailto:info@marifahtax.com"
                      className="flex flex-col gap-3 bg-card border border-primary/15 rounded-2xl p-6 hover:border-primary/40 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-gold mb-1">Email</p>
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">info@marifahtax.com</p>
                        <p className="text-xs text-muted-foreground mt-1">Responds within 24 hours</p>
                      </div>
                    </a>
                    {/* Business Hours */}
                    <div className="flex flex-col gap-3 bg-card border border-primary/15 rounded-2xl p-6">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-gold mb-2">Business Hours</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Mon – Fri</span>
                            <span className="text-foreground font-medium">9:00 AM – 6:00 PM</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Saturday</span>
                            <span className="text-foreground font-medium">10:00 AM – 2:00 PM</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Sunday</span>
                            <span className="text-red-600 font-medium">Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );

              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-1.5 h-5 bg-primary rounded-full inline-block shrink-0"></span>
                    {section.heading}
                  </h2>
                  {isChecklist ? (
                    <div className="grid sm:grid-cols-2 gap-3 pl-2">
                      {checklistItems.map((item, j) => (
                        <div key={j} className="flex items-start gap-3 bg-card border border-primary/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{item.trim()}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line pl-5">{section.body}</p>
                  )}
                </motion.div>
              );
            })
          )}
        </div>

        {/* Bottom CTA (the services page has its own "Why Act Now?" call to action) */}
        {pageKey !== "services" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 p-10 rounded-2xl border border-primary/20 bg-card text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Ready to Get Started?</p>
          <h3 className="text-2xl font-bold text-foreground mb-4">Book Your Free Consultation</h3>
          <p className="text-muted-foreground mb-7 max-w-md mx-auto">No obligation. No pressure. Just expert advice from UAE's trusted tax professionals.</p>
          <Button onClick={onConsultancy} className="bg-primary text-primary-foreground rounded-full px-8 py-3 hover:bg-primary/90 text-base">
            <MessageCircle className="w-4 h-4 mr-2" />Book Free Consultation
          </Button>
        </motion.div>
        )}
      </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────

function GoogleReviewButton() {
  if (!siteConfig.googleReviewUrl) return null;
  return (
    <a href={siteConfig.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border bg-background text-sm text-muted-foreground px-5 py-2.5 rounded-full hover:border-primary/40 transition-all">
      <span>View all reviews on Google</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </a>
  );
}
function StatsCounter() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((s, i) => (
        <StatItem key={i} stat={s} index={i} inView={inView} />
      ))}
    </div>
  );
}
function StatItem({
  stat,
  index,
  inView,
}: {
  stat: { value: string; label: string };
  index: number;
  inView: boolean;
}) {
  const [display, setDisplay] = useState(stat.value);

  const parsed = useMemo(() => {
    const raw = stat.value;
    const prefix = raw.startsWith("AED ") ? "AED " : "";
    const stripped = raw.replace("AED ", "");
    const suffix = stripped.replace(/[0-9]/g, "");
    const num = parseInt(stripped.replace(/\D/g, ""), 10) || 0;
    return { prefix, suffix, num };
  }, [stat.value]);

  useEffect(() => {
    if (!inView) return;
    const delay = index * 150;
    const duration = 1800;
    const startTime = performance.now() + delay;
    let frame: number;

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      if (now < startTime) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);
      const current = Math.round(eased * parsed.num);
      setDisplay(`${parsed.prefix}${current.toLocaleString()}${parsed.suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed, index]);

  return (
    <div
      className="text-center transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(12px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <p className="text-2xl md:text-3xl font-bold text-primary tabular-nums">
        {display}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
    </div>
  );
}

export const serviceSlug = (svc: { title: string }) => slugify(svc.title);

/** Site header + footer for standalone pages such as the cart and checkout. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const go = (p: PageKey | null) => {
    window.location.href = p ? `/${p}` : "/";
  };
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Navbar onNav={go} onConsultancy={() => setConsultancyOpen(true)} />
      </div>
      <main className="flex-1">{children}</main>
      <Footer onNav={go} />
      {/* Hidden on phones so it doesn't cover the checkout form */}
      <div className="hidden md:block">
        <FloatingWhatsApp />
      </div>
      <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
    </div>
  );
}

export function SiteApp({
  initialPage = null,
  initialBlogSlug = null,
  initialServiceSlug = null,
}: {
  initialPage?: string | null;
  initialBlogSlug?: string | null;
  initialServiceSlug?: string | null;
}) {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(() => (initialBlogSlug ? findBlog(initialBlogSlug) : null));
  const [selectedService, setSelectedService] = useState<ServicePlan | null>(
    () => (initialServiceSlug ? services.find((s) => serviceSlug(s) === initialServiceSlug) ?? null : null)
  );
  const [activePage, setActivePage] = useState<PageKey | null>(
    (initialBlogSlug ? "blog" : initialPage) as PageKey | null
  );
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [contactEnquiry, setContactEnquiry] = useState<Enquiry | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (selectedBlog || selectedService || activePage) window.scrollTo(0, 0);
  }, [selectedBlog, selectedService, activePage]);

  useEffect(() => {
    const handlePopState = () => {
      const parts = window.location.pathname.split("/").filter(Boolean);
      const [first, second] = parts;
      if (first === "blog" && second) {
        setSelectedService(null);
        setActivePage("blog" as PageKey);
        setSelectedBlog(findBlog(second));
        window.scrollTo(0, 0);
      } else if (first === "services" && second) {
        setSelectedBlog(null);
        setActivePage(null);
        setSelectedService(services.find((sv) => serviceSlug(sv) === second) ?? null);
        window.scrollTo(0, 0);
      } else if (first && first in pageContent) {
        setSelectedBlog(null);
        setSelectedService(null);
        setActivePage(first as PageKey);
        window.scrollTo(0, 0);
      } else {
        setActivePage(null);
        setSelectedBlog(null);
        setSelectedService(null);
        setTimeout(() => window.scrollTo(0, scrollPosition), 0);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [scrollPosition]);

  const navigate = (page: PageKey | null) => {
    setScrollPosition(window.scrollY);
    setActivePage(page);
    setSelectedBlog(null);
    setSelectedService(null);
    if (page) {
      window.history.pushState({ page, type: "page" }, "", `/${page}`);
    } else {
      window.history.pushState({ page: null, type: "home" }, "", "/");
    }
  };

  const goBack = () => {
    if (selectedBlog) {
      setSelectedBlog(null);
      if (activePage === "blog") {
        window.history.pushState({ page: "blog", type: "page" }, "", "/blog");
      } else {
        setActivePage(null);
        window.history.pushState({ page: null, type: "home" }, "", "/");
        setTimeout(() => window.scrollTo(0, scrollPosition), 0);
      }
      window.scrollTo(0, 0);
      return;
    }
    if (selectedService) {
      setSelectedService(null);
      setActivePage(null);
      window.history.pushState({ page: null, type: "home" }, "", "/");
      setTimeout(() => window.scrollTo(0, scrollPosition), 0);
      return;
    }
    if (activePage) {
      setActivePage(null);
      window.history.pushState({ page: null, type: "home" }, "", "/");
      setTimeout(() => window.scrollTo(0, scrollPosition), 0);
      return;
    }
  };

  // Homepage contact form: emailed to info@marifahtax.com via /api/contact (WhatsApp if email fails).
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (contactStatus === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const enquiry: Enquiry = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("requirement") || "").trim(),
      service: "General enquiry",
      source: "homepage contact form",
      website: String(fd.get("website") || ""),
    };
    setContactEnquiry(enquiry);
    setContactStatus("sending");
    const ok = await submitEnquiry(enquiry);
    setContactStatus(ok ? "sent" : "failed");
    if (ok) form.reset();
  };

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  const openService = (svc: ServicePlan) => {
    setScrollPosition(window.scrollY);
    setSelectedBlog(null);
    setSelectedService(svc);
    window.history.pushState({ type: "service", title: svc.title }, "", `/services/${serviceSlug(svc)}`);
  };

  const openBlog = (b: Blog) => {
    setSelectedService(null);
    setActivePage("blog" as PageKey);
    setSelectedBlog(b);
    window.history.pushState({ type: "blog", title: b.title }, "", `/blog/${blogSlug(b)}`);
    window.scrollTo(0, 0);
  };

  // ── ABOUT US — its own structured layout ─────────────────────────
  if (activePage === "about" && !selectedBlog && !selectedService) {
    return (
      <div className="bg-background text-foreground min-h-screen">
        <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <Navbar onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
        </div>
        <AboutPage
          services={services}
          stats={stats}
          slugOf={serviceSlug}
          onService={(s) => openService(s as ServicePlan)}
          onAllServices={() => navigate("services")}
          onConsultancy={() => setConsultancyOpen(true)}
          whatsapp={content.whatsapp}
        />
        <Footer onNav={navigate} />
        <FloatingWhatsApp />
        <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
      </div>
    );
  }

  // ── INNER PAGES — only when no blog/service detail is open ───────
  if (activePage && pageContent[activePage] && !selectedBlog && !selectedService) {
    return (
      <>
        <InnerPage pageKey={activePage} onBack={goBack} onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} onBlog={openBlog} onService={openService} />
        <Footer onNav={navigate} />
        <FloatingWhatsApp />
        <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
      </>
    );
  }
  // ── SERVICE DETAIL ───────────────────────────────────────────────
  if (selectedService) {
    const svc = selectedService as typeof services[0];
    const image =
      svc.title === "Corporate Tax"
        ? "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=90"
        : svc.title === "UAE VAT"
        ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=90"
        : svc.title === "Accounting"
        ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=90"
        : "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=90";
    return (
      <div className="bg-background text-foreground min-h-screen">
        <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <Navbar onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
        </div>
        <ServiceDetail
          svc={svc}
          image={image}
          services={services}
          slugOf={serviceSlug}
          onAllServices={() => navigate("services")}
          onService={(s) => openService(s as ServicePlan)}
          onConsultancy={() => setConsultancyOpen(true)}
          whatsapp={content.whatsapp}
        />
        <Footer onNav={navigate} />
        <FloatingWhatsApp />
        <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
      </div>
    );
  }

  // ── BLOG DETAIL ──────────────────────────────────────────────────
  if (selectedBlog) {
    return (
      <div className="bg-background text-foreground min-h-screen">
        <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <Navbar onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
        </div>
        <BlogArticle
          blog={selectedBlog}
          allBlogs={blogs}
          onAllArticles={() => navigate("blog")}
          onBlog={(b) => openBlog(b as Blog)}
          onConsultancy={() => setConsultancyOpen(true)}
          whatsapp={content.whatsapp}
        />
        <Footer onNav={navigate} />
        <FloatingWhatsApp />
        <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
      </div>
    );
  }

  // ── HOME PAGE ─   ──  ───────────────────────────────────────────────
  return (
    <div className="bg-background text-foreground font-sans">
      <style>{`
        img {
          -webkit-user-drag: none;
          user-drag: none;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>

      {/* Sticky Navbar */}
      <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Navbar onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 md:py-36 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <BadgeCheck className="w-3.5 h-3.5" /> Marifah Tax Advisory
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              UAE Tax Compliance,<br />
              <span className="text-gold">Made Simple.</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
              Corporate Tax, VAT, and Accounting solutions for UAE businesses. Stay compliant, avoid penalties, and focus on growing your business.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Button onClick={() => setConsultancyOpen(true)} className="bg-primary text-primary-foreground rounded-full px-7 py-3 hover:bg-primary/90 text-base font-medium shadow-lg hover:scale-105 transition-all">
                Book Free Consultation
              </Button>
              <Button onClick={() => navigate("services")} variant="outline" className="rounded-full px-7 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base transition-all">
                Our Services <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-5">
              {["No Hidden Fees", "FTA Compliant", "Fast Turnaround"].map(tag => (
                <span key={tag} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero Right — Image + Stats Card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
                alt="Tax professionals reviewing financial documents"
                className="w-full h-56 object-cover rounded-t-3xl border border-primary/20 border-b-0"
              />
              <div className="relative bg-card border border-primary/20 rounded-b-3xl p-8 space-y-6">
                <p className="text-xs font-bold tracking-widest uppercase text-gold">Why Marifah?</p>
                {[
                  { icon: ShieldCheck, text: "100% FTA Compliant Process" },
                  { icon: Clock, text: "Registration in 3–5 Working Days" },
                  { icon: Users, text: "Dedicated Tax Advisor Assigned" },
                  { icon: Award, text: "Transparent, Flat-Fee Pricing" },
                  { icon: TrendingUp, text: "2000+ UAE Businesses Served" },
                  { icon: Building2, text: "Serving All Emirates" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{item.text}</span>
                    </div>
                  );
                })}
                <Button onClick={scrollToContact} className="w-full bg-primary text-primary-foreground rounded-full hover:bg-primary/90 mt-2">
                  Get Started Today
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     {/* ── STATS BAR ── */}
<section className="dark py-10 bg-background">
  <StatsCounter />
</section>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Everything your business needs to stay 100% FTA compliant — under one roof, at one firm.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card
                  onClick={() => {
  setScrollPosition(window.scrollY);
  setSelectedService(svc);
  window.history.pushState({ type: "service", title: svc.title }, "", `/services/${serviceSlug(svc)}`);
}}
                    className="cursor-pointer rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 h-full group overflow-hidden flex flex-col p-0"
                >
                  {/* Image with tag badge inside */}
                  <div className="relative overflow-hidden shrink-0 -mt-px">
                    <img
                      src={[
                        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=90",
                        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
                        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
                        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",  
                      ][i]}
                      alt={svc.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                    {svc.tag && (
                      <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full z-10">
                        {svc.tag}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-7 flex flex-col flex-1 pt-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-foreground text-lg font-bold mb-1">{svc.title}</h3>
                    <p className="text-muted-foreground text-xs mb-4">{svc.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{svc.desc}</p>
                    <div className="mt-6 pt-4 border-t border-primary/10 flex items-center justify-between">
                      <span className="text-sm font-bold text-primary">{svc.price}</span>
                      <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 md:py-28 px-6 bg-card border-y border-primary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Our Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Marifah?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">UAE businesses trust us with their tax compliance. Here is exactly why.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 rounded-2xl overflow-hidden border border-primary/10">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=90"
              alt="Business professionals in a meeting"
              className="w-full h-72 md:h-96 object-cover object-center"
            />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Getting your business tax-compliant with Marifah is straightforward and hassle-free.</p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-primary/10 z-0" />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0 overflow-hidden">
              <svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <motion.line
                  x1="0" y1="2" x2="100%" y2="2"
                  stroke="var(--primary)"
                  strokeWidth="2"
                  strokeDasharray="8 7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {process.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center" style={{ width: "25%" }}>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className={`mb-6 text-center px-2 ${i % 2 !== 0 ? "invisible" : ""}`}
                >
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary">Step {step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>

                {i % 2 === 0 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.2 }}
                    className="w-px h-10 bg-primary/30 origin-bottom"
                    style={{ marginBottom: "-1px" }}
                  />
                )}

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.1, type: "spring", stiffness: 250 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -inset-3 rounded-full bg-primary/10"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                  <div className="relative w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/40 ring-4 ring-background flex items-center justify-center z-10">
                    <span className="text-primary-foreground font-bold text-base">{step.step}</span>
                  </div>
                </motion.div>

                {i % 2 !== 0 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.2 }}
                    className="w-px h-10 bg-primary/30 origin-top"
                    style={{ marginTop: "-1px" }}
                  />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className={`mt-6 text-center px-2 ${i % 2 === 0 ? "invisible" : ""}`}
                >
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary">Step {step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>

              </div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical timeline */}
        <div className="lg:hidden relative pl-10">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-primary/15" />
          <motion.div
            className="absolute left-4 top-2 w-px bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ height: "calc(100% - 1rem)" }}
          />
          {process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="absolute -left-10 top-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-md shadow-primary/30 ring-2 ring-background z-10">
                {step.step}
              </div>
              <div className="bg-card border border-primary/10 rounded-2xl p-5 hover:border-primary/30 transition-all hover:shadow-md">
                <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-2.5 py-0.5 mb-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary">Step {step.step}</span>
                </div>
                <h3 className="text-foreground font-bold mb-1.5">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
     {/* ── TESTIMONIALS ── */}
<section className="py-20 md:py-28 px-6 bg-card border-y border-primary/10">
  <div className="max-w-7xl mx-auto">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
      <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Client Reviews</p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
      <p className="text-muted-foreground max-w-xl mx-auto">Real feedback from businesses we have helped across UAE.</p>

      {/* Google Rating Badge */}
      <div className="inline-flex items-center gap-3 mt-6 bg-background border border-border rounded-2xl px-5 py-3 shadow-sm">
        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-foreground">4.9</span>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FBBC05">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">Google Reviews</span>
        </div>
        <div className="w-px h-5 bg-border" />
        <span className="text-xs text-muted-foreground">50+ verified reviews</span>
      </div>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials.map((t, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
          <Card className="rounded-2xl bg-background border border-border h-full hover:border-primary/30 transition-all duration-300 hover:shadow-sm">
            <CardContent className="p-6 flex flex-col h-full">

              {/* Top row — Google icon + stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="#FBBC05">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Review text */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow italic">"{t.text}"</p>

              {/* Reviewer info with avatar photo */}
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <img
                  src={[
                    "https://images.pexels.com/photos/32064778/pexels-photo-32064778.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop&crop=face",
                    "https://images.pexels.com/photos/12373136/pexels-photo-12373136.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop&crop=face",
                    "https://images.pexels.com/photos/28426637/pexels-photo-28426637.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop&crop=face",
                    "https://images.pexels.com/photos/28442315/pexels-photo-28442315.jpeg?auto=compress&cs=tinysrgb&w=96&h=96&fit=crop&crop=face",
                  ][i]}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover shrink-0 ring-2 ring-primary/10"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="w-9 h-9 rounded-full bg-primary/20 items-center justify-center text-primary font-bold text-xs shrink-0"
                  style={{ display: "none" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-foreground text-xs font-semibold">{t.name}</p>
                    <svg className="w-3 h-3 text-blue-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-[11px]">{t.role}</p>
                </div>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ── BLOG ── */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Knowledge Hub</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest Insights</h2>
          </div>
          <button onClick={() => navigate("blog")} className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium shrink-0">
            View All Articles <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogs.slice(0, 6).map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="rounded-2xl bg-card border border-border hover:border-primary transition-all group h-full cursor-pointer overflow-hidden p-0" onClick={() => {
  setScrollPosition(window.scrollY);
  setSelectedBlog(b);
  window.history.pushState({ type: "blog", title: b.title }, "", `/blog/${blogSlug(b)}`);
}}>
                <div className="relative overflow-hidden shrink-0 -mt-px">
                  <img
                    src={[
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1400&q=90",
  "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1400&q=90",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=90",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=90",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=90",
  "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1400&q=90",
][i % 6]}
                    alt={b.title}
                    className="w-full h-52 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-7 flex flex-col flex-1 pt-5">
                  <div className="flex items-center gap-3 mb-5">
                    {b.category && <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full">{b.category}</span>}
                    {b.readTime && <span className="text-[11px] text-muted-foreground">{b.readTime}</span>}
                  </div>
                  <h3 className="text-foreground font-bold mb-3 group-hover:text-primary transition-colors leading-snug">{b.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-grow">{b.excerpt}</p>
                  <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 px-6 bg-card border-t border-primary/10">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-3">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything UAE businesses want to know about tax compliance.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="bg-background border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-foreground font-medium text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className="px-6 pb-5" hidden={openFaq !== i}>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="dark rounded-3xl border border-primary/30 bg-background p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Act Now — Don't Risk Penalties</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">FTA Penalties Start at AED 1,000</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Non-compliance penalties can reach AED 50,000+. Get your business fully compliant today with a free consultation from our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setConsultancyOpen(true)} className="bg-primary text-primary-foreground rounded-full px-8 py-3 hover:bg-primary/90 text-base font-medium shadow-lg hover:scale-105 transition-all">
                <MessageCircle className="w-5 h-5 mr-2" />Book Free Consultation
              </Button>
              <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-primary text-primary rounded-full px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all text-base font-medium">
                <Phone className="w-4 h-4" />Call Us Now
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="py-20 md:py-24 px-6 bg-card border-t border-primary/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-2xl overflow-hidden border border-primary/10 mb-8">
              <img
                src="https://images.pexels.com/photos/7691739/pexels-photo-7691739.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=2"
                alt="UAE tax consultation meeting"
                className="w-full h-72 object-cover object-center"
              />
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Request a Free Consultation</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fill in the form and one of our tax experts will reach out within 1 hour. No obligation, no pressure — just expert guidance tailored to your business.
            </p>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: `+${content.whatsapp}` },
                { icon: Mail, label: "Email", value: "info@marifahtax.com" },
                { icon: Clock, label: "Business Hours", value: "Mon–Fri: 9AM–6PM (UAE Time)" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                      <p className="text-foreground text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-background border border-primary/20 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="relative grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Full Name" required className="bg-card border-border" />
                  <Input name="phone" type="tel" placeholder="Phone Number" required className="bg-card border-border" />
                </div>
                <Input name="email" type="email" placeholder="Email Address" required className="bg-card border-border" />
                <Textarea name="requirement" placeholder="What do you need help with? (e.g. VAT Registration, Corporate Tax Filing...)" required className="bg-card border-border min-h-[120px]" />
                {/* Spam trap: hidden from people, bots fill it in */}
                <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] w-px h-px opacity-0" />
                {contactStatus === "sent" && (
                  <div role="status" className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-foreground flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Thank you{contactEnquiry?.name ? `, ${contactEnquiry.name.split(" ")[0]}` : ""}! We&apos;ve received your request and will contact you within 1 business hour.</span>
                  </div>
                )}
                {contactStatus === "failed" && (
                  <div role="alert" className="rounded-xl border border-gold/30 bg-gold/[0.07] px-4 py-3 text-sm text-foreground">
                    <p>We couldn&apos;t send your request just now. Please send it on WhatsApp instead. Your details are already filled in.</p>
                    <a href={whatsappLink(contactEnquiry ?? undefined)} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-primary">
                      <MessageCircle className="w-4 h-4" />Send on WhatsApp
                    </a>
                  </div>
                )}
                <Button type="submit" disabled={contactStatus === "sending"} className="bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 py-3 text-base font-medium disabled:opacity-70 disabled:hover:scale-100">
                  {contactStatus === "sending" ? "Sending…" : "Send Request"}
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  We respond within 1 hour during business hours. Prefer WhatsApp?{" "}
                  <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">Chat with us</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onNav={navigate} />
      <FloatingWhatsApp />
      <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
    </div>
  );
}
