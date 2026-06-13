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
  // ── ARTICLE 1 ──────────────────────────────────────────────────
  {
    title: "Corporate Tax Registration Deadline UAE 2025–2026",
    excerpt: "Miss the FTA registration deadline and face an automatic AED 10,000 penalty. Here are the exact deadlines for every entity type — and the current penalty waiver you can still use.",
    category: "Corporate Tax",
    readTime: "6 min read",
    sections: [
      {
        type: "text",
        heading: "Why the Registration Deadline Matters",
        body: "UAE Corporate Tax was introduced under Federal Decree-Law No. 47 of 2022, effective for financial years starting on or after 1 June 2023. Every UAE business — whether or not it owes any tax — must register with the Federal Tax Authority (FTA) on EmaraTax. Missing your deadline triggers a fixed AED 10,000 administrative penalty under Cabinet Decision No. 10 of 2024, regardless of your profit level.",
      },
      {
        type: "text",
        heading: "Deadlines by Entity Type",
        body: "For existing juridical persons (companies) registered before 1 March 2024, the deadline was tied to the month of trade licence issuance — ranging from 31 May 2024 to 31 December 2024. For new companies incorporated on or after 1 March 2024, the deadline is 3 months from the date of incorporation. For natural persons (sole proprietors, freelancers) whose taxable turnover from business exceeded AED 1 million in 2024, the deadline was 31 March 2025. For non-resident persons with a Permanent Establishment in the UAE who exceed AED 1 million turnover, registration must be completed within 3 months of meeting the conditions.",
      },
      {
        type: "checklist",
        heading: "Key Registration Facts",
        items: [
          "All UAE businesses must register — even if turnover is below AED 375,000",
          "Registration is done on the FTA's EmaraTax portal (tax.gov.ae)",
          "Penalty for late registration: AED 10,000 (fixed, automatic)",
          "New companies incorporated from 1 March 2024: register within 3 months",
          "Natural persons: deadline was 31 March 2025 for FY 2024",
          "Tax return must be filed within 9 months of the financial year-end",
        ],
      },
      {
        type: "text",
        heading: "2025–2026 Penalty Waiver — Act Now",
        body: "The FTA introduced a penalty waiver initiative effective from 14 April 2025. If you missed your registration deadline, you can have the AED 10,000 penalty waived — provided you file your first Corporate Tax return (or annual declaration if exempt) within 7 months from the end of your first tax period. For most businesses with a 31 December 2024 financial year-end, this means filing by 31 July 2025. The waiver applies even if you have already received the penalty. After the waiver window closes, the AED 10,000 fine remains and is not automatically reversible.",
      },
      {
        type: "text",
        heading: "2026 Penalty Framework Update",
        body: "Under Cabinet Decision No. 129 of 2025, effective 14 April 2026, the late payment penalty framework was restructured. The late payment penalty is now 14% per annum, replacing the previous 2% day-1 plus 4% monthly structure. The AED 10,000 late registration penalty itself was not changed. All businesses must also pay any tax due within the same 9-month filing window — there are no instalment options in the standard regime.",
      },
      {
        type: "alert",
        heading: "Critical: Do Not Confuse Registration with Filing",
        body: "Registration (getting your Corporate Tax number) and filing your return are two separate FTA obligations with two separate deadlines. Both carry penalties. Register first on EmaraTax, then file your return within 9 months of your financial year-end.",
      },
      {
        type: "cta",
        heading: "Need Help Registering Before the Deadline?",
        body: "Marifah Tax Advisory completes FTA Corporate Tax Registration within days. We also check your penalty waiver eligibility and file your first return accurately. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 2 ──────────────────────────────────────────────────
  {
    title: "VAT Registration Requirements UAE 2025",
    excerpt: "VAT registration is mandatory once your taxable turnover exceeds AED 375,000. Here is every requirement, document, threshold, and deadline — fully updated for 2025.",
    category: "VAT",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "UAE VAT — The Basics",
        body: "Value Added Tax (VAT) was introduced in the UAE on 1 January 2018 under Federal Decree-Law No. 8 of 2017, at a standard rate of 5%. Businesses collect VAT on taxable supplies on behalf of the government and remit the net amount to the Federal Tax Authority (FTA) through periodic returns filed on EmaraTax.",
      },
      {
        type: "text",
        heading: "Registration Thresholds",
        body: "Mandatory VAT registration applies when your taxable supplies and imports in the previous 12 months exceed AED 375,000 — or when you expect to exceed AED 375,000 in the next 30 days. You must register within 30 days of crossing the threshold. Voluntary VAT registration is available if your taxable supplies, imports, or eligible expenses exceed AED 187,500 annually. Non-resident businesses making taxable supplies in the UAE must register regardless of turnover, unless the supply falls under the reverse charge mechanism.",
      },
      {
        type: "checklist",
        heading: "Documents Required for VAT Registration",
        items: [
          "Valid Trade Licence",
          "Emirates ID of owner / authorised manager",
          "Memorandum and Articles of Association (MOA & AOA)",
          "Bank account details (IBAN)",
          "Mobile number and email address linked to EmaraTax",
          "Financial statements or sales evidence showing turnover threshold met",
          "Customs registration number (if applicable)",
        ],
      },
      {
        type: "checklist",
        heading: "Ongoing VAT Compliance Requirements",
        items: [
          "Charge 5% VAT on all standard-rated taxable supplies",
          "Issue tax invoices compliant with FTA requirements",
          "File VAT returns every quarter (28 days after end of tax period)",
          "Maintain all VAT records for a minimum of 5 years",
          "Apply reverse charge on imported services from unregistered foreign suppliers",
          "Report zero-rated and exempt supplies separately in each return",
        ],
      },
      {
        type: "text",
        heading: "Penalties for Non-Registration and Late Filing",
        body: "Failing to register within 30 days of exceeding the AED 375,000 threshold results in a fixed AED 10,000 penalty. Late registration also triggers retroactive VAT liability on all taxable supplies from the date registration was due. The penalty for late VAT return filing is AED 1,000 for the first offence and AED 2,000 for repeat offences within 24 months. Under the updated framework effective 14 April 2026 (Cabinet Decision No. 129 of 2025), the late payment penalty is now 14% per annum.",
      },
      {
        type: "text",
        heading: "2026 VAT Law Update — Federal Decree-Law No. 16 of 2025",
        body: "From 1 January 2026, the requirement to issue a self-invoice for standard reverse charge imports has been removed under Federal Decree-Law No. 16 of 2025. However, the obligation to declare and pay the VAT on reverse charge transactions remains fully in force. Record-keeping penalty amounts were also updated under Cabinet Decision No. 129 of 2025: AED 5,000 for first offence (reduced from AED 10,000) and AED 10,000 for repeat offences.",
      },
      {
        type: "alert",
        heading: "Common Mistake — Waiting Until You Have Already Exceeded the Threshold",
        body: "You are required to monitor your rolling 12-month taxable turnover continuously. The 30-day window to register starts from the day you cross AED 375,000 — not from the end of the financial year. Late registration carries both a penalty and a retroactive VAT liability, making it one of the most expensive compliance mistakes UAE businesses make.",
      },
      {
        type: "cta",
        heading: "Get Your TRN in 3–5 Working Days",
        body: "Marifah Tax Advisory handles your complete VAT registration with the FTA — from document preparation to TRN issuance. We ensure your application is accurate, complete, and approved without delays. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 3 ──────────────────────────────────────────────────
  {
    title: "How to File VAT Return UAE — Step by Step 2025",
    excerpt: "A complete step-by-step guide to filing your UAE VAT return on EmaraTax — deadlines, boxes explained, common errors, and penalties to avoid.",
    category: "VAT",
    readTime: "7 min read",
    sections: [
      {
        type: "text",
        heading: "VAT Return Filing — Overview",
        body: "Every VAT-registered business in the UAE must file a VAT return with the Federal Tax Authority (FTA) at the end of each tax period. For most businesses, the tax period is quarterly. The return must be filed and any tax due must be paid within 28 days of the end of the tax period. VAT returns are filed exclusively through the EmaraTax portal at tax.gov.ae.",
      },
      {
        type: "checklist",
        heading: "Before You File — Prepare These",
        items: [
          "All sales invoices issued during the period (output VAT)",
          "All purchase invoices with valid VAT numbers (input VAT)",
          "Import declarations / customs documents",
          "Credit notes issued or received",
          "Reverse charge records for imported services",
          "Bank statements for reconciliation",
        ],
      },
      {
        type: "text",
        heading: "Step 1 — Log In to EmaraTax",
        body: "Go to tax.gov.ae and log in to your EmaraTax account using your registered UAE Pass or username and password. Select your VAT registration (TRN) from the dashboard and click 'File Return' for the relevant tax period.",
      },
      {
        type: "text",
        heading: "Step 2 — Complete Box 1 to Box 3 (Sales / Output VAT)",
        body: "Box 1: Enter the total value of your standard-rated supplies (sales at 5% VAT) and the VAT collected. Box 2: Enter zero-rated supplies (exports, international transport, certain food items, etc.) — these are taxable but at 0%. Box 3: Enter any exempt supplies (residential property sales, local passenger transport, bare land) — no VAT charged and no input VAT recovery on related costs.",
      },
      {
        type: "text",
        heading: "Step 3 — Complete Box 4 to Box 7 (Purchases / Input VAT)",
        body: "Box 4: Total standard-rated expenses/purchases made during the period and the input VAT you are recovering. Box 5: Enter imports subject to VAT paid at customs. Box 6: Enter imports of services subject to reverse charge mechanism — declare both output and input VAT here. Box 7: Report any out-of-scope supplies not subject to UAE VAT.",
      },
      {
        type: "text",
        heading: "Step 4 — Review the Net VAT Position",
        body: "EmaraTax will automatically calculate your net VAT due (output VAT minus input VAT). If output exceeds input, you owe that amount to the FTA. If input exceeds output, you have a VAT credit — you may carry it forward to the next period or submit a refund request. Always cross-check the calculated figure against your own accounting records before submitting.",
      },
      {
        type: "text",
        heading: "Step 5 — Submit and Pay",
        body: "Once you are satisfied the return is accurate, click 'Submit'. Payment of VAT due must reach the FTA within 28 days of the tax period end. Payment methods accepted on EmaraTax include credit/debit card, local bank transfer via GIBAN, eDebit, and e-Dirham card. The payment deadline is the same as the filing deadline — you cannot file and pay separately on different dates.",
      },
      {
        type: "checklist",
        heading: "Common Mistakes That Trigger FTA Penalties",
        items: [
          "Claiming input VAT on non-business expenses (e.g., entertainment, personal vehicles)",
          "Missing the 28-day filing deadline — AED 1,000 first offence, AED 2,000 repeat",
          "Failing to report reverse charge on imported services",
          "Issuing non-compliant tax invoices (missing TRN, wrong VAT amount)",
          "Errors in Box 3 (classifying standard-rated supplies as exempt)",
          "Late payment penalty: 14% per annum from 14 April 2026 (Cabinet Decision No. 129 of 2025)",
        ],
      },
      {
        type: "alert",
        heading: "Nil Returns — Do Not Skip",
        body: "Even if you made no sales and no purchases in a quarter, you must still file a nil VAT return before the deadline. Failing to file a nil return carries the same AED 1,000 penalty as missing any other return.",
      },
      {
        type: "cta",
        heading: "Let Marifah Handle Your VAT Filing",
        body: "Our team prepares and submits accurate VAT returns on your behalf — every quarter, on time, with full reconciliation. Never miss an FTA deadline again. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 4 ──────────────────────────────────────────────────
  {
    title: "Free Zone Corporate Tax UAE — Complete Guide 2025–2026",
    excerpt: "Free zone companies are NOT automatically exempt from UAE Corporate Tax. Here is the complete guide to Qualifying Free Zone Person (QFZP) status, the 5 conditions, and what happens if you fail.",
    category: "Corporate Tax",
    readTime: "8 min read",
    sections: [
      {
        type: "text",
        heading: "The Core Misconception",
        body: "Many free zone business owners assume their free zone licence automatically exempts them from UAE Corporate Tax. It does not. Under Federal Decree-Law No. 47 of 2022, free zone entities are subject to UAE Corporate Tax. However, entities that qualify as a Qualifying Free Zone Person (QFZP) can access a 0% Corporate Tax rate on their qualifying income. The 0% rate is earned through compliance with five specific conditions — it is not automatic.",
      },
      {
        type: "text",
        heading: "The 5 QFZP Conditions (All Must Be Met)",
        body: "To be treated as a QFZP and access the 0% rate on qualifying income, a free zone entity must satisfy all five of the following conditions every year: (1) Maintain adequate substance in the UAE free zone — real offices, employees, and management decisions made locally. (2) Derive qualifying income as defined under Ministerial Decision No. 229 of 2025 — including services to foreign clients, intra-group services meeting conditions, certain IP income, and income from regulated financial services. (3) Pass the De Minimis test — non-qualifying income must not exceed the lower of AED 5 million or 5% of total revenue. (4) No mainland election — the entity must not have elected to be treated as a standard mainland taxable person. (5) Comply with transfer pricing rules under Article 34 (arm's-length transactions with related parties) and Article 55 (general anti-abuse rule) of the CT Law.",
      },
      {
        type: "text",
        heading: "What Happens if You Fail Even One Condition",
        body: "QFZP status is all-or-nothing. If a free zone entity fails any single QFZP condition, it loses QFZP status for the entire tax year — not just for the income that caused the failure. The entity then becomes subject to 9% Corporate Tax on all taxable income above AED 375,000 for that year and the four subsequent tax years. This is one of the most severe consequence structures in the UAE CT Law and is the primary reason why free zone entities must actively manage their QFZP position year-round.",
      },
      {
        type: "checklist",
        heading: "Activities That Qualify for the 0% Rate (Ministerial Decision No. 229 of 2025)",
        items: [
          "Manufacturing and processing of goods within the free zone",
          "Holding shares and other securities for investment purposes",
          "Treasury and financing services to related parties (meeting conditions)",
          "Distribution of goods and materials in a Designated Zone",
          "Logistics services within the free zone",
          "Fund management services regulated by UAE authorities",
          "Reinsurance services regulated in the UAE",
          "Back-office and headquarters services to related parties",
          "Ship registration and management services",
        ],
      },
      {
        type: "checklist",
        heading: "Activities That Do NOT Qualify (Non-Qualifying Income at 9%)",
        items: [
          "Transactions with UAE mainland customers (above de minimis limits)",
          "Immovable property income in the UAE (outside Designated Zones)",
          "Income from excluded activities (e.g., banking, insurance without FTA approval)",
          "Revenue from intellectual property created under a tax planning structure",
        ],
      },
      {
        type: "text",
        heading: "Audited Financial Statements — Mandatory for QFZPs",
        body: "Under Ministerial Decision No. 84 of 2025, all free zone entities claiming QFZP status must prepare audited financial statements in accordance with IFRS or IFRS for SMEs — regardless of company size or revenue. This is the single most common compliance gap: many free zone companies with lower revenues had not previously commissioned an audit. Without audited statements, QFZP status cannot be claimed.",
      },
      {
        type: "text",
        heading: "Small Business Relief and Free Zones",
        body: "Free zone entities with revenue below AED 3 million may elect Small Business Relief (SBR), which treats the entity as having no taxable income. SBR is available for tax periods ending on or before 31 December 2026 as a transitional measure. However, electing SBR means the entity cannot simultaneously claim QFZP benefits for that period. For most free zone entities with predominantly qualifying income, maintaining QFZP status at 0% is more advantageous than electing SBR — but this should be assessed on a case-by-case basis.",
      },
      {
        type: "text",
        heading: "Corporate Tax Return Deadlines for Free Zone Companies",
        body: "Free zone entities must file their Corporate Tax return within 9 months of the end of their tax period. For a company with a financial year ending 31 December 2025, the return deadline is 30 September 2026. The return must accurately declare QFZP status, distinguish qualifying and non-qualifying income, and be supported by audited financials. Records must be retained for at least 7 years.",
      },
      {
        type: "alert",
        heading: "DMCC, JAFZA, IFZA, DIFC, ADGM — All Subject to the Same Rules",
        body: "QFZP conditions apply uniformly across all UAE free zones, including DMCC, JAFZA, IFZA, DIFC, and ADGM. Your free zone authority does not administer Corporate Tax — the FTA does. Compliance must be demonstrated to the FTA, not your free zone authority.",
      },
      {
        type: "cta",
        heading: "Assess Your Free Zone QFZP Eligibility",
        body: "Marifah Tax Advisory conducts full QFZP eligibility assessments for free zone businesses. We review your income sources, substance levels, and related-party transactions to confirm whether you qualify for the 0% rate — and manage your CT return filing accurately. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 5 ──────────────────────────────────────────────────
  {
    title: "DMCC Corporate Tax — What Every Member Needs to Know",
    excerpt: "DMCC companies are not automatically exempt from UAE Corporate Tax. Here is a clear, accurate guide to QFZP eligibility, DMCC-specific activities, and your 2026 filing deadline.",
    category: "Corporate Tax",
    readTime: "6 min read",
    sections: [
      {
        type: "text",
        heading: "DMCC and UAE Corporate Tax",
        body: "The Dubai Multi Commodities Centre (DMCC) is one of the UAE's largest and most prestigious free zones. However, DMCC membership does not exempt a company from UAE Corporate Tax under Federal Decree-Law No. 47 of 2022. DMCC entities are subject to the same Corporate Tax framework as all other UAE businesses. The 0% rate on qualifying income is available — but only if the entity qualifies as a Qualifying Free Zone Person (QFZP) under the five-condition test administered by the Federal Tax Authority.",
      },
      {
        type: "text",
        heading: "Which DMCC Activities Qualify for 0%?",
        body: "Under Ministerial Decision No. 229 of 2025, qualifying income for DMCC entities typically includes: income from commodities trading between free zone/foreign parties in a Designated Zone, logistics and warehousing services within the free zone, back-office and headquarters services to foreign or related group entities, holding company income (dividends and capital gains from qualifying shareholdings), and fund management services regulated by the SCA or DFSA.",
      },
      {
        type: "checklist",
        heading: "DMCC QFZP Compliance Checklist",
        items: [
          "Physical office space in DMCC (not a virtual/flexi-desk arrangement)",
          "Employed staff in the UAE with sufficient expertise for the business activities",
          "Board meetings and key management decisions made in the UAE",
          "Non-qualifying income below AED 5 million or 5% of total revenue (de minimis)",
          "Audited IFRS financial statements prepared for the tax period",
          "Transfer pricing documentation for all related-party transactions",
          "Corporate Tax return filed within 9 months of financial year-end",
        ],
      },
      {
        type: "text",
        heading: "DMCC Commodities Trading — The Designated Zone Issue",
        body: "Many DMCC members trade commodities. For trading income to qualify for the 0% rate, goods must be traded within or through a Designated Zone (DZ) as defined by the FTA. DMCC's Almas Tower and related physical trading facilities are part of a Designated Zone, but the classification is activity-specific. Commodities trading with UAE mainland buyers can push the entity beyond the de minimis non-qualifying income limit, risking full loss of QFZP status.",
      },
      {
        type: "text",
        heading: "2026 Filing Deadline",
        body: "For DMCC entities with a financial year running 1 January to 31 December 2025, the Corporate Tax return deadline is 30 September 2026. The return must be filed on EmaraTax. Any Corporate Tax due must be paid by the same date — there are no instalments. Late payment from 14 April 2026 carries a penalty of 14% per annum under Cabinet Decision No. 129 of 2025.",
      },
      {
        type: "alert",
        heading: "DMCC Does Not File Tax Returns on Your Behalf",
        body: "DMCC as a free zone authority manages your trade licence and membership. It has no role in your UAE Corporate Tax registration or return filing. Your CT registration and annual returns must be submitted directly to the FTA on EmaraTax. Many DMCC companies discovered this only after receiving AED 10,000 late registration penalties.",
      },
      {
        type: "cta",
        heading: "DMCC Corporate Tax — Get It Right",
        body: "Marifah Tax Advisory specialises in Corporate Tax compliance for DMCC and other UAE free zone entities. We assess your QFZP eligibility, prepare audited-aligned documentation, and file your return accurately before the September deadline. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 6 ──────────────────────────────────────────────────
  {
    title: "UAE Corporate Tax for Small Business — Complete Guide 2025",
    excerpt: "Small Business Relief allows eligible UAE businesses to pay 0% Corporate Tax. Here is who qualifies, how to elect it, and what changes after 31 December 2026.",
    category: "Corporate Tax",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "UAE Corporate Tax Rates for Small Businesses",
        body: "Under Federal Decree-Law No. 47 of 2022, UAE Corporate Tax is charged at 0% on taxable income up to AED 375,000 and 9% on taxable income above AED 375,000. This means a business with AED 374,999 in net profit pays zero Corporate Tax. A business with AED 500,000 in net profit pays 9% only on AED 125,000 (the amount above the threshold) — which equals AED 11,250.",
      },
      {
        type: "text",
        heading: "Small Business Relief (SBR) — The Additional Protection",
        body: "Beyond the standard 0%/9% threshold structure, the UAE CT Law provides Small Business Relief for eligible businesses. Under SBR, a qualifying business is treated as having no taxable income for the relevant tax period — it pays zero Corporate Tax and has simplified compliance obligations. SBR is available for tax periods ending on or before 31 December 2026. It is a transitional measure and is not permanent.",
      },
      {
        type: "checklist",
        heading: "SBR Eligibility Conditions",
        items: [
          "Must be a UAE tax resident person (not a non-resident or exempt person)",
          "Revenue for the current tax period must not exceed AED 3 million",
          "Revenue in each previous tax period since 1 June 2023 must also not have exceeded AED 3 million",
          "Must actively elect SBR in the Corporate Tax return — it is not applied automatically",
          "Large multinationals subject to Pillar Two rules (Qualifying MNE Groups) are not eligible for SBR",
        ],
      },
      {
        type: "text",
        heading: "What 'Revenue' Means for SBR",
        body: "Revenue for SBR purposes means the gross income of the business in the tax period — not net profit. A business with AED 2.9 million in gross revenue but AED 2.8 million in expenses still qualifies for SBR (as long as previous periods also met the AED 3 million test). Once revenue exceeds AED 3 million in any period, SBR is lost and cannot be elected again.",
      },
      {
        type: "text",
        heading: "SBR Does Not Eliminate Registration",
        body: "Electing Small Business Relief does not exempt a business from registering with the FTA. All UAE businesses must register for Corporate Tax. The penalty for non-registration is AED 10,000, regardless of whether you ultimately owe any tax. Register on EmaraTax, then elect SBR in your return if eligible.",
      },
      {
        type: "text",
        heading: "After 2026 — What Small Businesses Should Prepare For",
        body: "SBR is a transitional relief available only for tax periods ending on or before 31 December 2026. From the 2027 tax year, there is currently no legislative extension of SBR. Small businesses with revenue below AED 375,000 in net profit will still pay 0% under the standard rates — but businesses between AED 375,000 and AED 3 million in taxable income will need to file full Corporate Tax returns and may owe tax at 9% on the income above the threshold.",
      },
      {
        type: "alert",
        heading: "SBR Cannot Be Combined with QFZP Status",
        body: "Free zone entities cannot elect Small Business Relief and claim QFZP (0% qualifying income) status in the same tax period. Electing SBR means the entity is treated as not having qualifying income — so QFZP benefits do not apply. For most free zone entities with qualifying income, maintaining QFZP status is more advantageous.",
      },
      {
        type: "cta",
        heading: "Is Your Business Eligible for Small Business Relief?",
        body: "Marifah Tax Advisory reviews your revenue, structure, and tax period to determine whether SBR applies — and files your return correctly. We ensure you do not over-pay Corporate Tax or miss an election that could save you thousands. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 7 ──────────────────────────────────────────────────
  {
    title: "Penalty for Late VAT Registration UAE — Full Guide 2025–2026",
    excerpt: "Late VAT registration in the UAE carries an automatic AED 10,000 penalty — plus retroactive VAT liability. Here is exactly what the FTA charges, and how to avoid it.",
    category: "VAT",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "The AED 10,000 Late Registration Penalty",
        body: "Under the UAE VAT law (Federal Decree-Law No. 8 of 2017) and the administrative penalties framework (Cabinet Decision No. 49 of 2021, updated by Cabinet Decision No. 129 of 2025 from 14 April 2026), any business that fails to register for VAT within 30 days of crossing the AED 375,000 mandatory threshold is subject to a fixed administrative penalty of AED 10,000. This penalty is imposed by the FTA and appears directly in your EmaraTax account.",
      },
      {
        type: "text",
        heading: "The Hidden Cost — Retroactive VAT Liability",
        body: "The AED 10,000 penalty is only part of the cost. When a business registers late, the FTA calculates VAT liability from the date the business should have registered — not from the date of actual registration. This means you may owe 5% VAT on all taxable supplies made during the gap period, plus late payment penalties on that amount. For a business that was already generating AED 500,000 in annual revenue, the retroactive VAT exposure alone can be significantly higher than the initial registration penalty.",
      },
      {
        type: "checklist",
        heading: "Full Penalty Schedule — VAT Non-Compliance",
        items: [
          "Late VAT registration: AED 10,000 (fixed, one-time)",
          "Late VAT return filing (first offence): AED 1,000",
          "Late VAT return filing (repeat within 24 months): AED 2,000",
          "Late VAT payment (from 14 April 2026): 14% per annum under Cabinet Decision No. 129 of 2025",
          "Failure to maintain required VAT records (first offence): AED 5,000",
          "Failure to maintain records (repeat within 24 months): AED 10,000",
          "Non-compliant tax invoice issued (first offence): AED 2,500",
          "Non-compliant tax invoice (repeat within 24 months): AED 5,000",
        ],
      },
      {
        type: "text",
        heading: "Is There a Waiver for Late VAT Registration?",
        body: "Unlike Corporate Tax (which has a formal penalty waiver initiative for 2025), there is no automatic waiver for late VAT registration penalties. Businesses that have received a penalty may submit a formal reconsideration request (Ta'arrud) to the FTA, but these are assessed on a case-by-case basis and are not guaranteed. The strongest grounds for reconsideration are genuine force majeure circumstances — not administrative oversight. Prevention is the only reliable strategy.",
      },
      {
        type: "text",
        heading: "When Must You Register — The 30-Day Rule",
        body: "The registration clock starts on the day your taxable supplies and imports exceed AED 375,000 in the previous 12 months — or the day you have a reasonable basis to expect they will exceed AED 375,000 in the next 30 days. You must submit your VAT registration application within 30 days of either trigger. The FTA monitors business data and issues registration requirements proactively — do not assume you will receive a formal notice before the penalty is applied.",
      },
      {
        type: "alert",
        heading: "Voluntary Registration Can Protect You Earlier",
        body: "If your taxable supplies or expenses exceed AED 187,500 annually, you may register for VAT voluntarily. Voluntary registration allows you to recover input VAT on business expenses, improves your business credibility, and — most importantly — means you are already registered and compliant before you cross the AED 375,000 mandatory threshold. Many fast-growing UAE businesses benefit significantly from early voluntary registration.",
      },
      {
        type: "cta",
        heading: "Avoid the Penalty — Register Today",
        body: "Marifah Tax Advisory completes VAT registration with the FTA in as little as 3–5 working days. We review your turnover position, confirm your threshold status, and file a complete, accurate application. Contact us before the FTA contacts you.",
      },
    ],
  },

  // ── ARTICLE 8 ──────────────────────────────────────────────────
  {
    title: "Difference Between VAT Exempt and Zero Rated in UAE",
    excerpt: "Zero-rated and VAT-exempt supplies are both charged at 0% — but they are completely different in law. Getting this wrong can cost you thousands in disallowed input VAT.",
    category: "VAT",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "Why the Difference Matters",
        body: "Both zero-rated and VAT-exempt supplies result in 0% VAT being charged to the customer. However, they are treated very differently under UAE VAT law, and misclassifying a supply can result in disallowed input VAT deductions, incorrect VAT returns, and FTA penalties. Understanding the distinction is fundamental to accurate VAT compliance.",
      },
      {
        type: "text",
        heading: "Zero-Rated Supplies — 0% VAT, Full Input VAT Recovery",
        body: "A zero-rated supply is a taxable supply — it is within the scope of UAE VAT, but the rate applied is 0% instead of 5%. The critical point: because the supply is technically 'taxable', the business making the supply can recover all input VAT on costs directly related to making that supply. Zero-rated supplies must be reported in your VAT return. Failing to report zero-rated supplies is a VAT error, not an exemption from reporting.",
      },
      {
        type: "checklist",
        heading: "Examples of Zero-Rated Supplies in UAE",
        items: [
          "Exports of goods outside the UAE",
          "International transport of goods and passengers",
          "Supply of certain food items (basic food staples as defined by Cabinet Decision)",
          "Supply of certain medicines and medical equipment (as listed by the Ministry of Health)",
          "Investment-grade precious metals (gold, silver, platinum of 99%+ purity)",
          "First supply of residential buildings (within 3 years of completion)",
          "Educational services and related goods/services (qualifying institutions)",
          "Healthcare services and preventive healthcare services",
        ],
      },
      {
        type: "text",
        heading: "VAT Exempt Supplies — No VAT, No Input VAT Recovery",
        body: "A VAT-exempt supply is outside the standard VAT mechanism. No VAT is charged to the customer, but — critically — the supplier also cannot recover any input VAT on costs related to making that exempt supply. This makes exempt supplies more restrictive than zero-rated supplies. Businesses that make a mixture of taxable and exempt supplies must apply a partial input VAT recovery calculation.",
      },
      {
        type: "checklist",
        heading: "Examples of VAT Exempt Supplies in UAE",
        items: [
          "Supply of bare land",
          "Supply of residential buildings (subsequent supply, not first supply)",
          "Local passenger transport (metro, taxis, buses)",
          "Financial services where the fee is implicit (e.g., margin in currency exchange, interest)",
          "Life insurance and reinsurance",
        ],
      },
      {
        type: "text",
        heading: "The Partial Exemption Problem",
        body: "If your business makes both taxable supplies and exempt supplies, you face a partial exemption calculation. You cannot recover input VAT on overhead costs in full — you must apportion the input VAT based on the ratio of taxable to total supplies. This calculation is done in your VAT return and must be reviewed annually. Businesses in real estate, financial services, and healthcare are most commonly affected.",
      },
      {
        type: "text",
        heading: "Out-of-Scope Supplies — A Third Category",
        body: "There is a third category that is neither zero-rated nor exempt: out-of-scope supplies. These are supplies that fall entirely outside the UAE VAT framework — for example, salaries, grants, or supplies made outside the UAE. Out-of-scope supplies are not reported in your VAT return. Input VAT on costs related to out-of-scope activities is generally not recoverable.",
      },
      {
        type: "alert",
        heading: "Common Error — Treating Zero-Rated as Exempt",
        body: "The most costly misclassification is treating a zero-rated supply (such as an export) as VAT-exempt. This means you fail to report the supply in your return AND fail to claim back the input VAT on related costs. For exporters with significant input VAT, this can mean losing tens of thousands of dirhams in recoverable tax unnecessarily.",
      },
      {
        type: "cta",
        heading: "Is Your VAT Classification Correct?",
        body: "Marifah Tax Advisory reviews your supply classification, VAT return accuracy, and input VAT recovery position. Correct classification from the start avoids costly FTA assessments. Contact us for a free VAT review.",
      },
    ],
  },

  // ── ARTICLE 9 ──────────────────────────────────────────────────
  {
    title: "How to Open EmaraTax Account UAE — Step by Step",
    excerpt: "EmaraTax is the FTA's official portal for all UAE tax registrations and filings. Here is a complete, current guide to creating your account and navigating it correctly.",
    category: "VAT",
    readTime: "5 min read",
    sections: [
      {
        type: "text",
        heading: "What is EmaraTax?",
        body: "EmaraTax (tax.gov.ae) is the Federal Tax Authority's official digital platform for all UAE tax compliance activities. It replaced the previous FTA e-Services portal in 2022. All VAT registrations, Corporate Tax registrations, tax return filings, refund applications, and penalty payments are processed through EmaraTax. You cannot file UAE taxes without an EmaraTax account.",
      },
      {
        type: "text",
        heading: "Step 1 — Go to the EmaraTax Portal",
        body: "Open a browser and go to tax.gov.ae. Click 'Sign Up' to create a new account. Do not use any third-party website or app — the FTA's official portal is the only legitimate way to register and file. If you already have an existing FTA e-Services account from before 2022, you can log in using your old credentials and your data will have been migrated.",
      },
      {
        type: "text",
        heading: "Step 2 — Create Your UAE Pass or EmaraTax Account",
        body: "EmaraTax supports login via UAE Pass (the UAE government's digital identity platform). If you have a UAE Pass, you can link it directly. If not, register on EmaraTax using your email address and a secure password. You will receive a verification email — verify your account before proceeding.",
      },
      {
        type: "text",
        heading: "Step 3 — Add Your Entity",
        body: "After logging in, click 'Add Taxable Person' or 'Register a New Taxable Person'. You will need to enter your trade licence details, Emirates ID or passport number (for the authorised signatory), and business contact information. If you are registering a company with multiple shareholders, you will need the Emirates ID or passport details of each shareholder above the threshold set by the FTA.",
      },
      {
        type: "checklist",
        heading: "Information Required to Set Up EmaraTax",
        items: [
          "Trade licence number and issuing authority",
          "Emirates ID of owner / authorised manager (with expiry date)",
          "Passport copy for non-UAE-national owners",
          "Business mobile number and email address",
          "Bank account IBAN (required for VAT refund processing)",
          "Business activity description matching trade licence",
          "Memorandum and Articles of Association (MOA & AOA) for companies",
        ],
      },
      {
        type: "text",
        heading: "Step 4 — Register for VAT or Corporate Tax",
        body: "Once your entity profile is set up in EmaraTax, you can apply for VAT registration, Corporate Tax registration, or both. Click on the relevant registration type from your dashboard. Complete the application form accurately — errors in the form can delay approval or result in the FTA requesting additional documents. The FTA aims to process complete VAT registration applications within 20 working days.",
      },
      {
        type: "text",
        heading: "Step 5 — Manage Your Tax Obligations on EmaraTax",
        body: "Once registered, your EmaraTax dashboard becomes your compliance hub. You can view your upcoming return deadlines, file VAT returns, file Corporate Tax returns, make tax payments (via credit card, GIBAN, eDebit, or e-Dirham), submit voluntary disclosures, view penalty notices, and track correspondence from the FTA. Set up email notifications to ensure you never miss a deadline.",
      },
      {
        type: "checklist",
        heading: "Common EmaraTax Issues and How to Avoid Them",
        items: [
          "Mismatched Emirates ID details — ensure name matches exactly as on FTA records",
          "Using an expired trade licence — renew before starting registration",
          "Wrong authorised signatory — only an authorised manager or owner can sign",
          "Not linking your UAE Pass — causes login issues for future filings",
          "Failing to update contact details — you miss FTA notifications and deadline reminders",
        ],
      },
      {
        type: "alert",
        heading: "Third Party Access — Tax Agents",
        body: "If you appoint a registered UAE Tax Agent (like Marifah Tax Advisory) to manage your account, they can be granted access to your EmaraTax profile. This allows the agent to file returns, respond to FTA queries, and manage your compliance — without you needing to log in for every action. Tax agent access is set up from within your EmaraTax dashboard under 'Linkage to Tax Agent'.",
      },
      {
        type: "cta",
        heading: "Let Us Set Up and Manage Your EmaraTax Account",
        body: "Marifah Tax Advisory handles your full EmaraTax setup, VAT registration, Corporate Tax registration, and ongoing filing — all in one place. Contact us for a free consultation.",
      },
    ],
  },

  // ── ARTICLE 10 ──────────────────────────────────────────────────
  {
    title: "Corporate Tax for Freelancers UAE — Complete Guide 2025",
    excerpt: "UAE freelancers with annual business income above AED 1 million must register for Corporate Tax. Here is exactly what applies, what doesn't, and how to stay compliant.",
    category: "Corporate Tax",
    readTime: "6 min read",
    sections: [
      {
        type: "text",
        heading: "Do UAE Freelancers Pay Corporate Tax?",
        body: "Yes — but with an important threshold. Under Federal Decree-Law No. 47 of 2022, UAE Corporate Tax applies to natural persons (individuals) who conduct a business or business activity in the UAE. A freelancer, sole proprietor, or self-employed individual is a natural person for Corporate Tax purposes. However, Corporate Tax for natural persons only applies if the individual's annual business turnover (gross revenue from the business activity) exceeds AED 1 million in a Gregorian calendar year.",
      },
      {
        type: "text",
        heading: "The AED 1 Million Threshold — What It Means",
        body: "Unlike companies (juridical persons), individuals are not subject to Corporate Tax if their business revenue is AED 1 million or below in a calendar year. This is a gross revenue test — not a profit test. A freelancer earning AED 900,000 with AED 800,000 in expenses is below the threshold and pays no Corporate Tax. A freelancer earning AED 1,100,000 in gross revenue exceeds the threshold, must register, and pays 9% on net profit above AED 375,000.",
      },
      {
        type: "checklist",
        heading: "Freelancer Corporate Tax — Key Facts",
        items: [
          "Threshold: AED 1 million in annual gross business turnover",
          "Tax rate: 9% on net profit above AED 375,000 (after allowable deductions)",
          "First tax period for natural persons: Gregorian calendar year 2024",
          "Registration deadline (if above AED 1 million in 2024): 31 March 2025",
          "For new freelancers exceeding AED 1 million: register within 3 months",
          "Tax return due: 9 months after the end of the calendar year (i.e., 30 September 2026 for FY 2025)",
          "Personal employment income, dividends as an employee, and investment income are NOT business income",
        ],
      },
      {
        type: "text",
        heading: "What Income Counts for the AED 1 Million Test?",
        body: "Business income that counts toward the AED 1 million threshold includes income from freelance services, consulting, contracting, rental income from real estate held as a business activity, and any other income from carrying on a business. Income that does NOT count includes salary from employment, investment returns on personal assets (dividends, interest on personal savings), and income from one-time personal asset sales. If you are unsure whether your income constitutes 'business income', the FTA's guidance recommends considering whether the activity is conducted with regularity, continuity, and for profit.",
      },
      {
        type: "text",
        heading: "Freelancers on Freelance Visas vs. Company Owners",
        body: "UAE freelancers working under a freelance permit (issued by free zones like Dubai Media City, twofour54, IFZA, etc.) are natural persons for Corporate Tax purposes and are subject to the AED 1 million threshold. Freelancers who have incorporated a company (LLC or free zone entity) are NOT natural persons for this threshold — the company is a juridical person subject to standard CT rules from AED 375,000 net profit, regardless of the business scale.",
      },
      {
        type: "text",
        heading: "Allowable Deductions for Freelancers",
        body: "Freelancers subject to Corporate Tax can deduct business expenses that are wholly and exclusively incurred for the purposes of the business. Allowable deductions include office rent, equipment costs, software subscriptions, business travel, professional fees, and staff costs. Personal expenses, entertainment above specified limits, and expenses without documentary evidence cannot be deducted. Maintaining clean accounting records is essential — the FTA can audit your claimed deductions for up to 7 years.",
      },
      {
        type: "text",
        heading: "Small Business Relief for Freelancers",
        body: "Freelancers whose gross revenue exceeds AED 1 million (making them subject to CT) but does not exceed AED 3 million may be eligible to elect Small Business Relief, effectively treating their taxable income as nil. SBR must be actively elected in the CT return and is available only for tax periods ending on or before 31 December 2026. Once revenue exceeds AED 3 million in any period, SBR eligibility is permanently lost.",
      },
      {
        type: "alert",
        heading: "Registration Penalty Still Applies Even If No Tax Is Owed",
        body: "If your gross business revenue exceeded AED 1 million in 2024, you were required to register for Corporate Tax by 31 March 2025. If you did not, the AED 10,000 late registration penalty applies — even if your net profit is below AED 375,000 and you ultimately owe zero Corporate Tax. The penalty is for missing the registration deadline, not for owing tax.",
      },
      {
        type: "cta",
        heading: "Freelancer? Let Us Handle Your Corporate Tax",
        body: "Marifah Tax Advisory helps UAE freelancers determine their Corporate Tax obligations, assess SBR eligibility, and manage FTA registration and return filing — at a price designed for individual professionals. Contact us for a free consultation.",
      },
    ],
  },
];
const pageContent: Record<string, { title: string; sections: { heading: string; body: string }[] }> = {
  about: {
    title: "About Marifah Tax Advisory",
    sections: [
      { heading: "ABOUT_HERO_IMAGE", body: "" },
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

function InnerPage({ pageKey, onBack, onNav, onConsultancy, onBlog }: {
  pageKey: PageKey;
  onBack: () => void;
  onNav: (p: PageKey | null) => void;
  onConsultancy: () => void;
  onBlog: (b: any) => void;
}) {
  const page = pageContent[pageKey];
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="border-b border-primary/20 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Navbar onNav={onNav} onConsultancy={onConsultancy} />
      </div>

      {/* Page Hero */}
      <div className="bg-card border-b border-primary/10 py-14 px-6">
        <div className={`${pageKey === "blog" ? "max-w-7xl" : "max-w-4xl"} mx-auto`}>
          <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {page.title}
          </motion.h1>
          <div className="w-16 h-1 bg-primary rounded-full"></div>
        </div>
      </div>

      <div className={`${pageKey === "blog" ? "max-w-7xl" : "max-w-4xl"} mx-auto px-6 py-14`}>
        <div className="space-y-12">
          {pageKey === "blog" ? (
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {blogs.map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                    <Card
                      className="rounded-2xl bg-background border border-border hover:border-primary transition-all group h-full cursor-pointer"
                      onClick={() => onBlog(b)}
                    >
                      <CardContent className="p-7 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4">
                          {b.category && (
                            <span className="text-[10px] font-bold tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                              {b.category}
                            </span>
                          )}
                          {b.readTime && (
                            <span className="text-[11px] text-muted-foreground">{b.readTime}</span>
                          )}
                        </div>
                        <h3 className="text-foreground font-bold mb-3 group-hover:text-primary transition-colors leading-snug text-base">
                          {b.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-grow">{b.excerpt}</p>
                        <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
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
              if (section.heading === "ABOUT_HERO_IMAGE") return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <div className="relative rounded-2xl overflow-hidden border border-primary/10 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=90"
                      alt="Dubai skyline — UAE business hub"
                      className="w-full h-80 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-6 right-6">
                      <p className="text-white text-sm font-medium opacity-90">Dubai, United Arab Emirates</p>
                      <p className="text-white/70 text-xs mt-0.5">Serving businesses across all Emirates</p>
                    </div>
                  </div>
                </motion.div>
              );

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

function GoogleReviewButton() {
  return (
    <a href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border bg-background text-sm text-muted-foreground px-5 py-2.5 rounded-full hover:border-primary/40 transition-all">
      <span>View all reviews on Google</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </a>
  );
}

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

export default function Home() {
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
      const hash = window.location.hash;
      if (hash === "#blog") {
        setSelectedBlog(null);
        setSelectedService(null);
        setActivePage("blog" as PageKey);
        window.scrollTo(0, 0);
      } else if (hash === "#service") {
        setSelectedBlog(null);
        setSelectedService(null);
        setActivePage(null);
        setTimeout(() => window.scrollTo(0, scrollPosition), 0);
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
      window.history.pushState({ page, type: "page" }, "", `#${page}`);
    } else {
      window.history.pushState({ page: null, type: "home" }, "", window.location.pathname);
    }
  };

  const goBack = () => {
    if (selectedBlog) {
      setSelectedBlog(null);
      if (activePage === "blog") {
        window.history.pushState({ page: "blog", type: "page" }, "", `#blog`);
      } else {
        setActivePage(null);
        window.history.pushState({ page: null, type: "home" }, "", window.location.pathname);
        setTimeout(() => window.scrollTo(0, scrollPosition), 0);
      }
      window.scrollTo(0, 0);
      return;
    }
    if (selectedService) {
      setSelectedService(null);
      setActivePage(null);
      window.history.pushState({ page: null, type: "home" }, "", window.location.pathname);
      setTimeout(() => window.scrollTo(0, scrollPosition), 0);
      return;
    }
    if (activePage) {
      setActivePage(null);
      window.history.pushState({ page: null, type: "home" }, "", window.location.pathname);
      setTimeout(() => window.scrollTo(0, scrollPosition), 0);
      return;
    }
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

  // ── INNER PAGES — only when no blog/service detail is open ───────
  if (activePage && pageContent[activePage] && !selectedBlog && !selectedService) {
    return (
      <>
        <InnerPage pageKey={activePage} onBack={goBack} onNav={navigate} onConsultancy={() => setConsultancyOpen(true)} onBlog={(b) => { setSelectedBlog(b); window.history.pushState({ type: "blog", title: b.title }, "", `#blog`); }} />
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
        <div className="relative overflow-hidden border-b border-primary/10">
          <div className="relative h-72 w-full overflow-hidden">
            <img
              src={
                svc.title === "Corporate Tax"
                  ? "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=90"
                  : svc.title === "UAE VAT"
                  ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=90"
                  : svc.title === "Accounting"
                  ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=90"
                  : "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=90"
              }
              alt={svc.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/90" />
          </div>
          <div className="absolute inset-0 pointer-events-none" />
          <div className="max-w-4xl mx-auto relative px-4 sm:px-6 pb-8">
            <button onClick={goBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Insights
            </button>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <ServiceIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div className="min-w-0">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
                  {svc.tag}
                </span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight"
                >
                  {svc.title}
                </motion.h1>
                <p className="text-muted-foreground text-sm tracking-wide">{svc.subtitle}</p>
              </div>
            </div>
            <p className="mt-5 text-muted-foreground leading-relaxed text-sm sm:text-base border-l-2 border-primary/40 pl-4">
              {svc.desc}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10 sm:space-y-14">

          {/* What's Included checklist */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-5">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {svc.points.map((pt: string, i: number) => (
                <div key={i} className="flex items-start gap-3 bg-card border border-primary/10 rounded-xl px-4 py-3 hover:border-primary/30 transition-colors w-full">
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
                    <p className="text-muted-foreground text-sm leading-relaxed pl-0 sm:pl-10">{sec.body}</p>
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
                    className={`flex items-center justify-between px-4 sm:px-6 py-4 border-b border-primary/10 last:border-0 ${
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
            className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col items-start gap-5"
          >
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Ready to get started?</h3>
              <p className="text-sm text-muted-foreground">Book a free 30-minute consultation — no commitment required.</p>
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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary/10 transition-colors w-full sm:w-auto"
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
                    className="cursor-pointer rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 h-full group overflow-hidden flex flex-col p-0"
                >
                  {/* Image with tag badge inside */}
                  <div className="relative overflow-hidden shrink-0 -mt-px">
                    <img
                      src={[
                        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
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
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Our Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Marifah?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Hundreds of UAE businesses trust us with their tax compliance. Here is exactly why.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 rounded-2xl overflow-hidden border border-primary/10">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1400&q=90"
              alt="Marifah tax advisory team in a professional meeting"
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
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Getting your business tax-compliant with Marifah is straightforward and hassle-free.</p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">

          {/* Full width timeline row */}
          <div className="relative flex items-center justify-between">

            {/* Background track line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-primary/10 z-0" />

            {/* Animated dotted overlay line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-0 overflow-hidden">
              <svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <motion.line
                  x1="0" y1="2" x2="100%" y2="2"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeDasharray="8 7"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />
              </svg>
            </div>

            {/* Steps */}
            {process.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center" style={{ width: "25%" }}>

                {/* Top label — odd steps */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className={`mb-6 text-center px-2 ${i % 2 !== 0 ? "invisible" : ""}`}
                >
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-2">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary">Step {step.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>

                {/* Connector line top */}
                {i % 2 === 0 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: i * 0.2 }}
                    className="w-px h-10 bg-primary/30 origin-bottom"
                    style={{ marginBottom: "-1px" }}
                  />
                )}

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.1, type: "spring", stiffness: 250 }}
                  className="relative"
                >
                  {/* Outer glow ring */}
                  <motion.div
                    className="absolute -inset-3 rounded-full bg-primary/10"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                  {/* Main dot */}
                  <div className="relative w-14 h-14 rounded-full bg-primary shadow-lg shadow-primary/40 ring-4 ring-background flex items-center justify-center z-10">
                    <span className="text-primary-foreground font-bold text-base">{step.step}</span>
                  </div>
                </motion.div>

                {/* Connector line bottom */}
                {i % 2 !== 0 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.3, delay: i * 0.2 }}
                    className="w-px h-10 bg-primary/30 origin-top"
                    style={{ marginTop: "-1px" }}
                  />
                )}

                {/* Bottom label — even steps */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
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
          {/* Vertical track */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-primary/15" />
          {/* Animated fill */}
          <motion.div
            className="absolute left-4 top-2 w-px bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ height: "calc(100% - 1rem)" }}
          />
          {process.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-8 last:mb-0"
            >
              {/* Dot */}
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
      <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Client Reviews</p>
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
                  src={`https://i.pravatar.cc/48?img=${[10, 25, 33, 47][i]}`}
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
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Knowledge Hub</p>
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
  window.history.pushState({ type: "blog", title: b.title }, "", `#blog`);
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
            <div className="rounded-2xl overflow-hidden border border-primary/10 mb-8">
              <img
                src="https://images.unsplash.com/photo-1664575602807-e002fc20892c?w=800&q=80"
                alt="UAE tax consultation meeting"
                className="w-full h-72 object-cover object-center"
              />
            </div>
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
