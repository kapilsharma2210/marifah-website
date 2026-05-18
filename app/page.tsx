"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import {
  ArrowLeft, MessageCircle, Mail, Phone, Linkedin, Instagram, Facebook,
  ChevronDown, Search, ShieldCheck, Clock, Users, Award, FileText,
  Calculator, BookOpen, Package, Star, CheckCircle, ArrowRight,
  TrendingUp, Building2, Globe, BadgeCheck, PhoneCall, ChevronRight
} from "lucide-react";
import { ConsultancyForm } from "@/components/consultancy-form";

const content = {
  brand: "MARIFAH TAX ADVISORY",
  whatsapp: "971505815245",
};

// ─── DATA ────────────────────────────────────────────────────────

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "100%", label: "FTA Compliant" },
  { value: "5+", label: "Years Experience" },
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
    price: "From AED 399",
    content: `## Corporate Tax Registration\n\n✔ Register your business with the Federal Tax Authority before the deadline. Penalties for non-registration start at AED 10,000.\n\n## Return Filing\n\n✔ We prepare and submit accurate Corporate Tax returns on your behalf — no errors, no delays.\n\n## Free Zone Advisory\n\n✔ Qualifying Free Zone Persons can benefit from a 0% rate on qualifying income. We assess your eligibility and structure your filing accordingly.\n\n## Pricing\n\n✔ Registration: AED 399\n\n✔ Return Filing: AED 1,199\n\n✔ Registration + Filing Combo: AED 1,499`,
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
    price: "From AED 499",
    content: `## VAT Registration\n\n✔ We obtain your Tax Registration Number (TRN) from the FTA — typically within 3–5 working days.\n\n## Quarterly VAT Filing\n\n✔ Accurate input/output VAT reconciliation and timely return submission to avoid late penalties.\n\n## VAT Advisory\n\n✔ Invoice review, zero-rated vs. exempt classification, and ongoing guidance as FTA regulations evolve.\n\n## Pricing\n\n✔ VAT Registration: AED 499\n\n✔ VAT Return Filing: AED 1,199\n\n✔ Registration + Filing Combo: AED 1,499`,
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
    price: "From AED 2,499",
    content: `## Monthly Bookkeeping\n\n✔ Accurate recording of all transactions, bank reconciliation, and accounts payable/receivable management — every month without fail.\n\n## Financial Statements\n\n✔ Profit & loss statements, balance sheets, and cash flow reports prepared to accounting standards.\n\n## MIS Reporting\n\n✔ Management information reports that give you a real-time picture of your business performance.\n\n## FTA-Compliant Records\n\n✔ UAE law requires businesses to maintain financial records for 7 years. We ensure yours are always audit-ready.\n\n## Pricing\n\n✔ From AED 2,499 (up to 50 transactions)\n\n✔ Custom pricing available for higher transaction volumes`,
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
    price: "AED 4,999",
    content: `## What's Included\n\n✔ VAT registration and quarterly return filing\n\n✔ Corporate Tax registration and annual return filing\n\n✔ Monthly bookkeeping and financial statement preparation\n\n✔ Dedicated tax advisor — one person who knows your business\n\n✔ Priority support, compliance calendar, and deadline reminders year-round\n\n## Why This Package?\n\n✔ Buying individually would cost significantly more. This bundle gives you complete FTA compliance at one predictable price — no surprises, no extra invoices.\n\n## Pricing\n\n✔ AED 4,999 — all-inclusive`,
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
  { q: "Is Corporate Tax mandatory for all UAE businesses?", a: "Yes. All UAE businesses with net profit exceeding AED 375,000 must register and file Corporate Tax with FTA. Even exempt businesses must register. Penalties for non-registration start at AED 10,000." },
  { q: "How long does VAT registration take?", a: "With Marifah, VAT registration (TRN) is typically completed within 3–5 working days once all documents are submitted. We guide you through every step." },
  { q: "What documents are needed for Corporate Tax registration?", a: "Trade License, Emirates ID of owner/manager, Memorandum of Association, financial statements, and EmaraTax portal access. We provide a full checklist after your free consultation." },
  { q: "Can free zone companies avoid Corporate Tax?", a: "Qualifying Free Zone Persons (QFZPs) can enjoy 0% on qualifying income — but strict FTA conditions apply. Non-qualifying income is taxed at 9%. Our experts assess your eligibility." },
  { q: "What happens if I file VAT returns late?", a: "Late VAT filing attracts penalties starting at AED 1,000 for the first offence, increasing to AED 2,000 for subsequent offences. Interest also applies on unpaid VAT amounts." },
];

const blogs = [
  {
    title: "UAE VAT Registration Guide",
    excerpt: "VAT registration is mandatory if your turnover exceeds AED 375,000. Here is everything you need to know to register correctly.",
    category: "VAT",
    readTime: "4 min read",
    content: `## What is UAE VAT:\n\nValue Added Tax (VAT) is an indirect tax applied at each stage of the supply chain. Introduced in the UAE on 1st January 2018 at a standard rate of 5%, VAT is charged on most goods and services.\nBusinesses collect VAT on behalf of the government and remit it to the Federal Tax Authority (FTA).\n\n## Who Needs to Register for VAT?:\n\nVAT registration in the UAE is categorized into two types:\n1. Mandatory Registration\nA business must register for VAT if:\nIts taxable supplies and imports exceed AED 375,000 annually.\n\n2. Voluntary Registration\nA business can opt for VAT registration if:\nIts taxable supplies, imports, or expenses exceed AED 187,500 annually.\nVoluntary registration is beneficial for startups and small businesses as it allows them to recover input VAT.\n\n✔ Voluntary registration is available above AED 187,500.\n\n## Documents Required:\n\n✔ Trade License\n\n✔ Emirates ID\n\n✔ Signed AOA & MOA\n\n✔ Mobile Number & Email ID.\n\n## VAT Compliance Requirements:\n\n✔ Businesses must charge 5% VAT\n\n✔ Maintain records\n\n✔ File VAT Returns Timely.\n\n## Common VAT Mistakes:\n\n✔ Late registration leads to AED 10,000 penalty.\n\n## Why Choose Marifah Tax Advisory:\n\n✔ We handle full VAT registration & compliance in UAE.`,
  },
  {
    title: "Corporate Tax in UAE Explained",
    excerpt: "Corporate Tax at 9% is now in full effect. Find out if your business is liable, what steps to take, and how to stay compliant.",
    category: "Corporate Tax",
    readTime: "5 min read",
    content: `## UAE Corporate Tax Overview\n\n✔ Corporate tax is 9% on income above AED 375,000.\n\n## Who is Subject to Corporate Tax\n\n✔ Applies to most UAE businesses including mainland and free zones.\n\n## Corporate Tax Registration UAE\n\n✔ Businesses must register with FTA to avoid penalties.\n\n## Tax Planning Strategies\n\n✔ Proper structuring reduces tax liability.\n\n## Compliance Requirements\n\n✔ Maintain books\n\n✔ File Corporate Tax Return Timely\n\n✔ Follow FTA rules.\n\n## Marifah Tax Advisory\n\nWe provide full corporate tax advisory & compliance.`,
  },
  {
    title: "5 Costly VAT Mistakes UAE Businesses Make",
    excerpt: "These VAT errors cost UAE businesses thousands in penalties every year. Make sure you are not making any of them.",
    category: "VAT",
    readTime: "3 min read",
    content: `## Incorrect VAT Calculation\n\n✔ Wrong input/output VAT leads to penalties.\n\n## Late VAT Filing UAE\n\n✔ Late returns attract AED 1,000+ penalties.\n\n## Poor Record Keeping\n\n✔ Missing invoices create audit issues.\n\n## Wrong VAT Treatment\n\n✔ Confusion between zero-rated & exempt supplies.\n\n## Input VAT Errors\n\n✔ Claiming VAT on non-eligible expenses.\n\n## Solution\n\n☆ Marifah Tax Advisory ensures error-free VAT compliance.`,
  },
];

const pageContent: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
  about: {
    title: "About Marifah Tax Advisory",
    sections: [
      { heading: "Who We Are", body: "Marifah Tax Advisory is a UAE-based tax consultancy firm dedicated to helping businesses navigate the complexities of UAE taxation. Founded by experienced tax professionals, we have built a reputation for accuracy, reliability, and client-first service. Whether you are a startup, SME, or an established enterprise, we are your trusted partner in tax compliance and financial clarity." },
      { heading: "Our Mission", body: "Our mission is simple — to make UAE tax compliance easy, affordable, and stress-free for every business. We believe that no business should suffer penalties or financial losses due to lack of proper tax guidance. We bridge the gap between complex FTA regulations and your business needs, so you can focus on what matters most — growing your business." },
      { heading: "Why Businesses Trust Us", body: "✔ Experienced & certified tax professionals\n✔ 100% FTA-compliant processes\n✔ Transparent pricing — no hidden charges\n✔ Fast turnaround — registrations done in days\n✔ Dedicated support — we answer your calls and emails\n✔ Serving 500+ businesses across UAE" },
      { heading: "Our Expertise", body: "We specialise in UAE Corporate Tax, VAT Registration & Filing, Accounting & Bookkeeping, and Tax Advisory. Our team stays updated with every FTA regulation change so that your business is always compliant and never caught off guard." },
      { heading: "Our Promise to You", body: "When you choose Marifah Tax Advisory, you are not just hiring a tax firm — you are gaining a committed partner who genuinely cares about your business success. We go beyond filing returns. We advise, we plan, and we protect your business from unnecessary tax burdens and FTA penalties." },
    ],
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
    sections: [
      { heading: "UAE Corporate Tax — What Every Business Must Know", body: "The UAE Federal Corporate Tax at 9% is now in full effect for businesses with financial years starting June 2023 onwards. If your business earns above AED 375,000 in net profit, you are liable to register, calculate, and file your Corporate Tax return with the FTA. Missing the registration deadline alone attracts an AED 10,000 penalty." },
      { heading: "5 VAT Mistakes UAE Businesses Make", body: "1. Late VAT Registration — penalty AED 10,000\n2. Wrong VAT on invoices — creates audit risk\n3. Missing input VAT claims — you lose money\n4. Poor record keeping — FTA can reject your returns\n5. Confusing zero-rated and exempt supplies — leads to miscalculation" },
      { heading: "Is Your Free Zone Business Subject to Corporate Tax?", body: "Many free zone businesses assume they are exempt from Corporate Tax. The reality is more nuanced — Qualifying Free Zone Persons can enjoy 0% tax on qualifying income, but only if they meet strict FTA conditions. Non-qualifying income is taxed at 9%." },
      { heading: "Why Clean Accounting Books Save You Money", body: "Accurate bookkeeping is not just good practice — it is a legal requirement under UAE Corporate Tax law. Businesses must maintain proper financial records for at least 7 years. Clean books also help you claim every legitimate deduction, reducing your taxable income." },
      { heading: "How to Choose the Right Tax Consultant in UAE", body: "Look for: FTA-registered tax agents, transparent pricing, clear communication, proven track record, and personalised service. At Marifah Tax Advisory, we tick every box — real professionals who know your business by name." },
    ],
  },
  contact: {
    title: "Contact Marifah Tax Advisory",
    sections: [
      { heading: "Get in Touch", body: "We are here to help your business stay compliant and grow with confidence. Whether you have a quick question or need a full tax review, our team is ready to assist." },
      { heading: "WhatsApp & Phone", body: "📞 +971505815245\n\nCall or WhatsApp us directly. Our team typically responds within 1 hour during business hours." },
      { heading: "Email", body: "📧 info@marifahtax.com\n\nSend us your query and we will respond within 24 hours." },
      { heading: "Business Hours", body: "Monday to Friday: 9:00 AM – 6:00 PM (UAE Time)\nSaturday: 10:00 AM – 2:00 PM\nSunday: Closed" },
      { heading: "Book a Free Consultation", body: "Book a free 30-minute consultation with our tax experts. We will review your business situation, identify your compliance requirements, and recommend the best solution — completely free, with no obligation." },
    ],
  },
};

type Blog = { title: string; excerpt?: string; category?: string; readTime?: string; content: string };
type ServicePlan = typeof services[0];
type PageKey = keyof typeof pageContent;

// ─── SHARED COMPONENTS ───────────────────────────────────────────

function Navbar({ onNav, onConsultancy }: { onNav: (p: PageKey | null) => void; onConsultancy: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-7xl mx-auto">
        <h1
          className="font-bold text-lg tracking-widest text-primary cursor-pointer shrink-0"
          onClick={() => { onNav(null); setMobileOpen(false); }}
        >
          {content.brand}
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 list-none">
          <li><button onClick={() => onNav(null)} className="text-sm text-foreground hover:text-primary transition-colors font-medium">Home</button></li>
          <li><button onClick={() => onNav("about")} className="text-sm text-foreground hover:text-primary transition-colors">About</button></li>
          <li className="relative group">
            <button className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors">
              Services <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-card border border-border rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 w-[700px] p-7 grid grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary border-l-2 border-primary pl-3 mb-4">Corporate Tax</p>
                <ul className="space-y-2.5">
                  {["Corporate Tax Registration", "UAE Corporate Tax Filing", "Corporate Tax Advisory", "Tax Impact Assessment", "Corporate Tax Deregistration"].map(item => (
                    <li key={item}><button onClick={() => onNav("services")} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-left w-full"><ChevronRight className="w-3 h-3 text-primary shrink-0" />{item}</button></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary border-l-2 border-primary pl-3 mb-4">UAE VAT</p>
                <ul className="space-y-2.5">
                  {["VAT Registration Services", "VAT Consultancy & Advisory", "VAT Return Filing", "VAT Deregistration", "VAT Refund Services"].map(item => (
                    <li key={item}><button onClick={() => onNav("services")} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-left w-full"><ChevronRight className="w-3 h-3 text-primary shrink-0" />{item}</button></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-primary border-l-2 border-primary pl-3 mb-4">Accounting</p>
                <ul className="space-y-2.5">
                  {["Bookkeeping & Accounting", "Financial Statements", "MIS Reporting", "Accounting Review", "Tax Agency Services"].map(item => (
                    <li key={item}><button onClick={() => onNav("services")} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-left w-full"><ChevronRight className="w-3 h-3 text-primary shrink-0" />{item}</button></li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li><button onClick={() => onNav("packages")} className="text-sm text-foreground hover:text-primary transition-colors">Packages</button></li>
          <li><button onClick={() => onNav("blog")} className="text-sm text-foreground hover:text-primary transition-colors">Blog</button></li>
          <li><button onClick={() => onNav("contact")} className="text-sm text-foreground hover:text-primary transition-colors">Contact</button></li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${content.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="text-sm">{`+${content.whatsapp}`}</span>
          </a>
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
              <li key={s}><button onClick={() => onNav("services")} className="text-sm text-muted-foreground hover:text-primary transition-colors text-left">{s}</button></li>
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
        <p className="text-xs text-muted-foreground">UAE VAT Registration No. —  Tax Agent</p>
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

function InnerPage({ pageKey, onBack, onNav, onConsultancy }: {
  pageKey: PageKey;
  onBack: () => void;
  onNav: (p: PageKey | null) => void;
  onConsultancy: () => void;
}) {
  const page = pageContent[pageKey];
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Navbar onNav={onNav} onConsultancy={onConsultancy} />
      </div>

      {/* Page Hero */}
      <div className="bg-card border-b border-primary/10 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {page.title}
          </motion.h1>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <div className="space-y-12">
          {pageKey === "packages" ? (
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
                  <p className="text-2xl font-bold text-primary">AED 399 <span className="text-sm font-normal text-muted-foreground">/ registration</span></p>
                  <p className="text-lg font-semibold text-foreground">AED 1,499 <span className="text-sm font-normal text-muted-foreground">/ return filing</span></p>
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
                  <p className="text-2xl font-bold text-primary">AED 499 <span className="text-sm font-normal text-muted-foreground">/ registration</span></p>
                  <p className="text-lg font-semibold text-foreground">AED 1,199 <span className="text-sm font-normal text-muted-foreground">/ return filing</span></p>
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
                  <p className="text-2xl font-bold text-primary">AED 2,499 <span className="text-sm font-normal text-muted-foreground">starting from</span></p>
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
                  <p className="text-2xl font-bold text-primary">AED 4,999 <span className="text-sm font-normal text-muted-foreground">/ year</span></p>
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
            page.sections.map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0"></span>
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line pl-5">{section.body}</p>
              </motion.div>
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 p-10 rounded-2xl border border-primary/20 bg-card text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Ready to Get Started?</p>
          <h3 className="text-2xl font-bold text-foreground mb-4">Book Your Free Consultation</h3>
          <p className="text-muted-foreground mb-7 max-w-md mx-auto">No obligation. No pressure. Just expert advice from UAE's trusted tax professionals.</p>
          <Button onClick={onConsultancy} className="bg-primary text-primary-foreground rounded-full px-8 py-3 hover:bg-primary/90 text-base">
            <MessageCircle className="w-4 h-4 mr-2" />Book Free Consultation
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────

export default function MarifahWebsite() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [selectedService, setSelectedService] = useState<ServicePlan | null>(null);
  const [activePage, setActivePage] = useState<PageKey | null>(null);
  const [consultancyOpen, setConsultancyOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (selectedBlog || selectedService || activePage) window.scrollTo(0, 0);
  }, [selectedBlog, selectedService, activePage]);

  const navigate = (page: PageKey | null) => {
    setScrollPosition(window.scrollY);
    setActivePage(page);
    setSelectedBlog(null);
    setSelectedService(null);
  };

  const goBack = () => {
    setActivePage(null);
    setSelectedBlog(null);
    setSelectedService(null);
    setTimeout(() => window.scrollTo(0, scrollPosition), 0);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const msg = formData.get("requirement") as string;
    const whatsappMessage = `Hello Marifah Tax Advisory,\n\nThis is ${name}.\nEmail: ${email}\nPhone: ${phone}\n\nRequirement: ${msg}`;
    window.open(`https://wa.me/${content.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`);
  };

  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  // ── INNER PAGES ─────────────────────────────────────────────────
  if (activePage && pageContent[activePage]) {
    return (
      <>
        <InnerPage pageKey={activePage} onBack={goBack} onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
        <Footer onNav={navigate} />
        <FloatingWhatsApp />
        <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
      </>
    );
  }

  // ── SERVICE DETAIL ───────────────────────────────────────────────
  if (selectedService) {
    const sections = selectedService.content.split("\n\n");
    return (
      <div className="bg-background text-foreground min-h-screen">
        <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <Navbar onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
        </div>
        <div className="bg-card border-b border-primary/10 py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={goBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">{selectedService.title}</motion.h1>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-14 space-y-6">
          {sections.map((sec, i) => {
            if (sec.startsWith("##")) return <h2 key={i} className="text-xl font-semibold text-foreground flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span>{sec.replace("## ", "")}</h2>;
            return <p key={i} className="text-muted-foreground leading-relaxed whitespace-pre-line pl-5">{sec}</p>;
          })}
        </div>
        <Footer onNav={navigate} />
        <FloatingWhatsApp />
        <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
      </div>
    );
  }

  // ── BLOG DETAIL ──────────────────────────────────────────────────
  if (selectedBlog) {
    const sections = selectedBlog.content.split("\n\n");
    return (
      <div className="bg-background text-foreground min-h-screen">
        <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <Navbar onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
        </div>
        <div className="bg-card border-b border-primary/10 py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <button onClick={goBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            {selectedBlog.category && <span className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 px-3 py-1 rounded-full mb-4 inline-block">{selectedBlog.category}</span>}
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-3">{selectedBlog.title}</motion.h1>
            <div className="w-16 h-1 bg-primary rounded-full"></div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-14 space-y-6">
          {sections.map((sec, i) => {
            if (sec.startsWith("##")) return <h2 key={i} className="text-xl font-semibold text-foreground flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span>{sec.replace("## ", "")}</h2>;
            return <p key={i} className="text-muted-foreground leading-relaxed whitespace-pre-line pl-5">{sec}</p>;
          })}
        </div>
        <Footer onNav={navigate} />
        <FloatingWhatsApp />
        <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
      </div>
    );
  }

  // ── HOME PAGE ─���──��───────────────────────────────────────────────
  return (
    <div className="bg-background text-foreground font-sans">

      {/* Sticky Navbar */}
      <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Navbar onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 md:py-36 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <BadgeCheck className="w-3.5 h-3.5" /> Marifah Tax Advisory
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              UAE Tax Compliance,<br />
              <span className="text-primary">Made Simple.</span>
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

          {/* Hero Right — Stats Card */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-primary/20 rounded-3xl p-8 space-y-6">
                <p className="text-xs font-bold tracking-widest uppercase text-primary">Why Marifah?</p>
                {[
                  { icon: ShieldCheck, text: "100% FTA Compliant Process" },
                  { icon: Clock, text: "Registration in 3–5 Working Days" },
                  { icon: Users, text: "Dedicated Tax Advisor Assigned" },
                  { icon: Award, text: "Transparent, Flat-Fee Pricing" },
                  { icon: TrendingUp, text: "500+ UAE Businesses Served" },
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
      <section className="py-8 border-y border-primary/10 bg-card">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Everything your business needs to stay 100% FTA compliant — under one roof, at one firm.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card
                  onClick={() => { setScrollPosition(window.scrollY); setSelectedService(svc); }}
                  className="cursor-pointer rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 h-full group relative overflow-hidden"
                >
                  {svc.tag && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                      {svc.tag}
                    </div>
                  )}
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-foreground text-lg font-bold mb-1">{svc.title}</h3>
                    <p className="text-muted-foreground text-xs mb-4">{svc.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{svc.desc}</p>
                    <ul className="space-y-1.5 mb-6">
                      {svc.points.map(pt => (
                        <li key={pt} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />{pt}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm font-bold text-primary">{svc.price}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">View Details <ArrowRight className="w-3 h-3" /></span>
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
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Our Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Marifah?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Hundreds of UAE businesses trust us with their tax compliance. Here is exactly why.</p>
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
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Getting your business tax-compliant with Marifah is straightforward and hassle-free.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-full h-px border-t border-dashed border-primary/30 z-0" style={{ width: "calc(100% - 2rem)" }} />
              )}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-5">
                  {step.step}
                </div>
                <h3 className="text-foreground font-semibold mb-2">{step.title}</h3>
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
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Client Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real feedback from businesses we have helped across UAE.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="rounded-2xl bg-background border border-border h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow italic">"{t.text}"</p>
                    <div className="flex items-center gap-3 border-t border-border pt-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-foreground text-xs font-semibold">{t.name}</p>
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
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Knowledge Hub</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest Insights</h2>
          </div>
          <button onClick={() => navigate("blog")} className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 font-medium shrink-0">
            View All Articles <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogs.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="rounded-2xl bg-card border border-border hover:border-primary transition-all group h-full cursor-pointer" onClick={() => { setScrollPosition(window.scrollY); setSelectedBlog(b); }}>
                <CardContent className="p-7 flex flex-col h-full">
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
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Common Questions</p>
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
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-primary/30 bg-primary/5 p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Act Now — Don't Risk Penalties</p>
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
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">Get In Touch</p>
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
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Full Name" required className="bg-card border-border" />
                  <Input name="phone" type="tel" placeholder="Phone Number" required className="bg-card border-border" />
                </div>
                <Input name="email" type="email" placeholder="Email Address" required className="bg-card border-border" />
                <Textarea name="requirement" placeholder="What do you need help with? (e.g. VAT Registration, Corporate Tax Filing...)" required className="bg-card border-border min-h-[120px]" />
                <Button type="submit" className="bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 py-3 text-base font-medium">
                  <MessageCircle className="w-4 h-4 mr-2" />Send via WhatsApp
                </Button>
                <p className="text-xs text-center text-muted-foreground">We respond within 1 hour during business hours.</p>
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
