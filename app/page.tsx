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
  { value: "5000+", label: "Businesses Served" },
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
      { label: "Corporate Tax Registration", price: "AED 399" },
      { label: "Corporate Tax Return Filing", price: "AED 1,499" },
      { label: "Registration + Filing Combo", price: "AED 1,699", highlight: true },
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
    price: "From AED 499",
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
      { label: "VAT Registration (TRN)", price: "AED 499" },
      { label: "VAT Return Filing (four quarter)", price: "AED 1,199" },
      { label: "Registration + Filing Combo", price: "AED 1,599", highlight: true },
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
    price: "From AED 2,499",
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
      { label: "Up to 50 transactions/month", price: "AED 2,499" },
      { label: "Up to 150 transactions/month", price: "AED 3,499" },
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
    price: "AED 4,999",
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
      { label: "Full Compliance Package (all-inclusive)", price: "AED 4,999", highlight: true },
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
    sections: [
      {
        type: "text",
        heading: "What is UAE VAT?",
        body: "Value Added Tax (VAT) is an indirect tax applied at each stage of the supply chain. Introduced in the UAE on 1st January 2018 at a standard rate of 5%, VAT is charged on most goods and services. Businesses collect VAT on behalf of the government and remit it to the Federal Tax Authority (FTA).",
      },
      {
        type: "text",
        heading: "Who Needs to Register for VAT?",
        body: "VAT registration in the UAE falls into two categories. Mandatory Registration applies if your taxable supplies and imports exceed AED 375,000 annually — you must register. Voluntary Registration is available if your taxable supplies, imports, or expenses exceed AED 187,500 annually, which is beneficial for startups and small businesses as it allows them to recover input VAT.",
      },
      {
        type: "checklist",
        heading: "Documents Required",
        items: [
          "Trade License",
          "Emirates ID of owner / manager",
          "Signed Memorandum & Articles of Association (MOA & AOA)",
          "Mobile number & email address",
        ],
      },
      {
        type: "checklist",
        heading: "VAT Compliance Requirements",
        items: [
          "Charge 5% VAT on all applicable goods and services",
          "Maintain proper VAT records and invoices",
          "File VAT returns on time every quarter",
        ],
      },
      {
        type: "alert",
        heading: "Common VAT Mistake to Avoid",
        body: "Late registration alone carries an AED 10,000 penalty from the FTA. Do not wait until your turnover is already above the threshold — start the registration process early.",
      },
      {
        type: "cta",
        heading: "Why Choose Marifah Tax Advisory?",
        body: "We handle your full VAT registration and ongoing compliance in the UAE — from obtaining your TRN to quarterly return filing — so you never have to worry about FTA deadlines.",
      },
    ],
  },
  {
    title: "Corporate Tax in UAE Explained",
    excerpt: "Corporate Tax at 9% is now in full effect. Find out if your business is liable, what steps to take, and how to stay compliant.",
    category: "Corporate Tax",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "UAE Corporate Tax Overview",
        body: "The UAE introduced a federal Corporate Tax of 9% on business profits above AED 375,000, effective for financial years starting on or after 1st June 2023. This is one of the most significant regulatory changes in UAE business history, and every business — mainland or free zone — must understand its obligations.",
      },
      {
        type: "text",
        heading: "Who is Subject to Corporate Tax?",
        body: "Corporate Tax applies to most UAE businesses, including mainland companies, free zone entities (on non-qualifying income), and foreign companies with a permanent establishment in the UAE. Businesses earning below AED 375,000 in net profit are taxed at 0%, but registration with the FTA is still mandatory for all.",
      },
      {
        type: "checklist",
        heading: "Corporate Tax Registration — Key Facts",
        items: [
          "All UAE businesses must register with the FTA, even if exempt",
          "Penalty for non-registration starts at AED 10,000",
          "Free zone companies may qualify for 0% on qualifying income",
          "Annual Corporate Tax returns must be filed within 9 months of year-end",
        ],
      },
      {
        type: "text",
        heading: "Tax Planning Strategies",
        body: "Proper business structuring can legally reduce your tax liability. This includes optimising your free zone status, ensuring qualifying income is correctly classified, reviewing related-party transactions, and maintaining compliant financial records. Our advisors help you plan ahead — not just file after the fact.",
      },
      {
        type: "checklist",
        heading: "Compliance Requirements",
        items: [
          "Maintain accurate books and financial records",
          "File Corporate Tax return on time each year",
          "Follow all FTA guidelines for deductions and exemptions",
        ],
      },
      {
        type: "cta",
        heading: "Marifah Tax Advisory",
        body: "We provide full Corporate Tax registration, return filing, and ongoing advisory for UAE businesses. Our experts ensure you are always compliant — and never overpaying.",
      },
    ],
  },
  {
    title: "5 Costly VAT Mistakes UAE Businesses Make",
    excerpt: "These VAT errors cost UAE businesses thousands in penalties every year. Make sure you are not making any of them.",
    category: "VAT",
    readTime: "3 min read",
    sections: [
      {
        type: "text",
        heading: "Why VAT Mistakes Are So Expensive",
        body: "UAE's Federal Tax Authority (FTA) has a zero-tolerance policy for VAT errors. Penalties are automatic, and they add up fast. Here are the five most common — and costly — mistakes we see UAE businesses make, and how to avoid them.",
      },
      {
        type: "numbered",
        heading: "The 5 Costly Mistakes",
        items: [
          {
            title: "Incorrect VAT Calculation",
            body: "Wrong input or output VAT figures on returns create discrepancies that trigger FTA audits and financial penalties.",
          },
          {
            title: "Late VAT Filing",
            body: "Filing your quarterly VAT return even one day late attracts a minimum AED 1,000 penalty — and AED 2,000 for repeat offences.",
          },
          {
            title: "Poor Record Keeping",
            body: "Missing invoices, unreconciled accounts, or incomplete records mean the FTA can reject your VAT returns outright.",
          },
          {
            title: "Wrong VAT Treatment",
            body: "Confusing zero-rated supplies (0% VAT) with exempt supplies (no VAT recovery) is a very common error that leads to miscalculation.",
          },
          {
            title: "Incorrect Input VAT Claims",
            body: "Claiming VAT back on non-eligible expenses (entertainment, personal costs) is a direct violation of FTA regulations.",
          },
        ],
      },
      {
        type: "alert",
        heading: "The Cost of Getting It Wrong",
        body: "A single VAT audit can result in penalties of AED 10,000 or more, plus interest on unpaid VAT. Prevention is always cheaper than correction.",
      },
      {
        type: "cta",
        heading: "The Solution",
        body: "Marifah Tax Advisory ensures error-free VAT compliance for your business. We review your invoices, reconcile your accounts, and file accurate returns every quarter — so you never face avoidable penalties.",
      },
    ],
  },
];

const pageContent: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
  about: {
    title: "About Marifah Tax Advisory",
    sections: [
      { heading: "Who We Are", body: "Marifah Tax Advisory is a UAE-based tax consultancy firm dedicated to helping businesses navigate the complexities of UAE taxation. Founded by experienced tax professionals, we have built a reputation for accuracy, reliability, and client-first service. Whether you are a startup, SME, or an established enterprise, we are your trusted partner in tax compliance and financial clarity." },
      { heading: "Our Mission", body: "Our mission is simple — to make UAE tax compliance easy, affordable, and stress-free for every business. We believe that no business should suffer penalties or financial losses due to lack of proper tax guidance. We bridge the gap between complex FTA regulations and your business needs, so you can focus on what matters most — growing your business." },
      { heading: "Why Businesses Trust Us", body: "CHECKLIST:Experienced & certified tax professionals|100% FTA-compliant processes|Transparent pricing — no hidden charges|Fast turnaround — registrations done in days|Dedicated support — we answer your calls and emails|Serving 500+ businesses across UAE" },
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
      { heading: "5 VAT Mistakes UAE Businesses Make", body: "CHECKLIST:Late VAT Registration — penalty AED 10,000|Wrong VAT on invoices — creates audit risk|Missing input VAT claims — you lose money|Poor record keeping — FTA can reject your returns|Confusing zero-rated and exempt supplies — leads to miscalculation" },
      { heading: "Is Your Free Zone Business Subject to Corporate Tax?", body: "Many free zone businesses assume they are exempt from Corporate Tax. The reality is more nuanced — Qualifying Free Zone Persons can enjoy 0% tax on qualifying income, but only if they meet strict FTA conditions. Non-qualifying income is taxed at 9%." },
      { heading: "Why Clean Accounting Books Save You Money", body: "Accurate bookkeeping is not just good practice — it is a legal requirement under UAE Corporate Tax law. Businesses must maintain proper financial records for at least 7 years. Clean books also help you claim every legitimate deduction, reducing your taxable income." },
      { heading: "How to Choose the Right Tax Consultant in UAE", body: "Look for: FTA-registered tax agents, transparent pricing, clear communication, proven track record, and personalised service. At Marifah Tax Advisory, we tick every box — real professionals who know your business by name." },
    ],
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
                        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-1">WhatsApp & Phone</p>
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
                        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-1">Email</p>
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
                        <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Business Hours</p>
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
                            <span className="text-red-400 font-medium">Closed</span>
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

useEffect(() => {
  const handlePopState = () => {
    setActivePage(null);
    setSelectedBlog(null);
    setSelectedService(null);
    setTimeout(() => window.scrollTo(0, scrollPosition), 0);
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
    window.history.pushState({ page, type: "page" }, "", `#${page}`);
  } else {
    window.history.pushState({ page: null, type: "home" }, "", window.location.pathname);
  }
};

  const goBack = () => {
  setActivePage(null);
  setSelectedBlog(null);
  setSelectedService(null);
  window.history.pushState({ page: null, type: "home" }, "", window.location.pathname);
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
    const svc = selectedService as typeof services[0];
    const ServiceIcon = svc.icon;
    return (
      <div className="bg-background text-foreground min-h-screen">
        <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <Navbar onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
        </div>

        {/* Hero banner */}
        <div className="relative overflow-hidden bg-card border-b border-primary/10 py-16 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto relative">
            <button onClick={goBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </button>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <ServiceIcon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
                  {svc.tag}
                </span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-bold text-foreground mb-2"
                >
                  {svc.title}
                </motion.h1>
                <p className="text-muted-foreground text-sm tracking-wide">{svc.subtitle}</p>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl text-base border-l-2 border-primary/40 pl-4">
              {svc.desc}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-14 space-y-14">

          {/* What's Included checklist */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">What's Included</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {svc.points.map((pt: string, i: number) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-primary/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service sections */}
          {svc.sections && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
              <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">How We Help</h2>
              <div className="space-y-4">
                {svc.sections.map((sec: { title: string; body: string }, i: number) => (
                  <div key={i} className="bg-card border border-primary/10 rounded-2xl p-6 hover:border-primary/25 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground">{sec.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-10">{sec.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Pricing table */}
          {svc.pricing && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">Transparent Pricing</h2>
              <div className="rounded-2xl border border-primary/20 overflow-hidden">
                {svc.pricing.map((row: { label: string; price: string; highlight?: boolean }, i: number) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-6 py-4 border-b border-primary/10 last:border-0 ${
                      row.highlight ? "bg-primary/10" : "bg-card"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {row.highlight && <BadgeCheck className="w-4 h-4 text-primary shrink-0" />}
                      <span className={`text-sm ${row.highlight ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                        {row.label}
                      </span>
                    </div>
                    <span className={`text-sm font-bold ${row.highlight ? "text-primary text-base" : "text-foreground"}`}>
                      {row.price}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 pl-1">* No hidden charges. What you see is what you pay.</p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Ready to get started?</h3>
              <p className="text-sm text-muted-foreground">Book a free 30-minute consultation — no commitment required.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => setConsultancyOpen(true)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Book Free Consultation
              </button>
              <a
                href={`https://wa.me/${content.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
        <Footer onNav={navigate} />
        <FloatingWhatsApp />
        <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
      </div>
    );
  }


  // ── BLOG DETAIL ──────────────────────────────────────────────────
  if (selectedBlog) {
    const blog = selectedBlog as typeof blogs[0];
    return (
      <div className="bg-background text-foreground min-h-screen">
        <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
          <Navbar onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} />
        </div>

        {/* Hero */}
        <div className="relative overflow-hidden bg-card border-b border-primary/10 py-16 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto relative">
            <button onClick={goBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </button>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {blog.category && (
                <span className="text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              )}
              {blog.readTime && (
                <span className="text-xs text-muted-foreground">{blog.readTime}</span>
              )}
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              {blog.title}
            </motion.h1>
            <p className="text-muted-foreground text-base leading-relaxed max-w-2xl border-l-2 border-primary/40 pl-4">
              {blog.excerpt}
            </p>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-4xl mx-auto px-6 py-14 space-y-10">
          {blog.sections?.map((sec: any, i: number) => {

            // Plain text section
            if (sec.type === "text") return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-primary rounded-full inline-block shrink-0" />
                  {sec.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-4">{sec.body}</p>
              </motion.div>
            );

            // Checklist section
            if (sec.type === "checklist") return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-primary rounded-full inline-block shrink-0" />
                  {sec.heading}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 pl-4">
                  {sec.items?.map((item: string, j: number) => (
                    <div key={j} className="flex items-start gap-3 bg-card border border-primary/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );

            // Numbered list section
            if (sec.type === "numbered") return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <h2 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-primary rounded-full inline-block shrink-0" />
                  {sec.heading}
                </h2>
                <div className="space-y-4 pl-4">
                  {sec.items?.map((item: { title: string; body: string }, j: number) => (
                    <div key={j} className="bg-card border border-primary/10 rounded-2xl p-5 hover:border-primary/25 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-primary font-bold text-xs">{String(j + 1).padStart(2, "0")}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed pl-10">{item.body}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );

            // Alert / warning box
            if (sec.type === "alert") return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <div className="bg-primary/5 border border-primary/25 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-foreground mb-1">{sec.heading}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{sec.body}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );

            // CTA box
            if (sec.type === "cta") return (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">{sec.heading}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{sec.body}</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <button
                      onClick={() => setConsultancyOpen(true)}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      Free Consultation
                    </button>
                    <a
                      href={`https://wa.me/${content.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            );

            return null;
          })}
        </div>

        <Footer onNav={navigate} />
        <FloatingWhatsApp />
        <ConsultancyForm open={consultancyOpen} onOpenChange={setConsultancyOpen} />
      </div>
    );
  }

  // ── HOME PAGE ─   ──  ───────────────────────────────────────────────
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
                  { icon: TrendingUp, text: "5000+ UAE Businesses Served" },
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
  <StatsCounter />
</section>
      function StatsCounter() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
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
  const [display, setDisplay] = useState("0");

  // Parse the raw number and any prefix/suffix from strings like
  // "5000+", "100%", "5+", "AED 0"
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

    // Stagger each counter by its index
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
                  onClick={() => {
  setScrollPosition(window.scrollY);
  setSelectedService(svc);
  window.history.pushState({ type: "service", title: svc.title }, "", `#service`);
}}
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
              <Card className="rounded-2xl bg-card border border-border hover:border-primary transition-all group h-full cursor-pointer" onClick={() => {
  setScrollPosition(window.scrollY);
  setSelectedBlog(b);
  window.history.pushState({ type: "blog", title: b.title }, "", `#blog`);
}}>
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
