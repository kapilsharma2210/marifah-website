import { SiteApp } from "@/components/site-app";
import { allPublicReviews } from "@/lib/reviews/server";

// Re-checked every 5 minutes so newly approved reviews appear on the homepage.
export const revalidate = 300;

// Structured data that describes the homepage only (its FAQ section and service list).
// Kept here rather than in app/layout.tsx so it isn't repeated on every page.
const faqSchema = {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is Corporate Tax mandatory for all UAE businesses?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Every UAE business that is a taxable person must register for Corporate Tax with the FTA and file a return, whatever its profit. Taxable income up to AED 375,000 is taxed at 0% and income above that at 9%. Businesses with revenue of AED 3 million or less may elect Small Business Relief for eligible tax periods. Free zone companies must meet the Qualifying Free Zone Person conditions to benefit from the 0% rate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does VAT registration take in the UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "VAT registration in the UAE typically takes 3 to 5 working days when all documents are correctly submitted to the Federal Tax Authority (FTA) via the EmaraTax portal. Marifah Tax Advisory completes VAT registrations within this timeframe and handles the entire process on your behalf."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What documents are needed for Corporate Tax registration in UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For UAE Corporate Tax registration, you need: Trade Licence copy, Memorandum of Association (MOA), Emirates ID and passport copies of all owners/directors, company bank account details, and financial year start date. Our team guides you through the exact checklist and submits everything to the FTA on your behalf."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can free zone companies avoid Corporate Tax in UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Free zone companies are NOT automatically exempt from UAE Corporate Tax. To qualify for the 0% Qualifying Free Zone Person (QFZP) rate, your company must meet 5 specific conditions set by the FTA — including deriving income only from qualifying activities and maintaining adequate substance. We assess your eligibility and structure your compliance accordingly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if I file VAT returns late in UAE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Late VAT return filing in UAE attracts an immediate penalty of AED 1,000 for the first offence, rising to AED 2,000 for repeated violations within 24 months. Additional penalties of 2% per month apply on any unpaid VAT. The FTA may also block your EmaraTax account. Marifah handles all filing deadlines proactively so you never face these penalties."
                  }
                }
              ]
            };

const servicesSchema = {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "UAE Tax Services by Marifah Tax Advisory",
              "description": "Complete tax compliance services for UAE businesses",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "item": {
                    "@type": "Service",
                    "name": "Corporate Tax Registration UAE",
                    "description": "End-to-end FTA corporate tax registration for UAE mainland and free zone businesses.",
                    "provider": { "@id": "https://www.marifahtax.com/#organization" },
                    "areaServed": "UAE",
                    "offers": { "@type": "Offer", "price": "499", "priceCurrency": "AED" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "item": {
                    "@type": "Service",
                    "name": "Corporate Tax Return Filing UAE",
                    "description": "Annual Corporate Tax return preparation and filing with the FTA through EmaraTax.",
                    "provider": { "@id": "https://www.marifahtax.com/#organization" },
                    "areaServed": "UAE",
                    "offers": { "@type": "Offer", "price": "1999", "priceCurrency": "AED" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "item": {
                    "@type": "Service",
                    "name": "UAE VAT Registration Services",
                    "description": "VAT registration with FTA for businesses exceeding the AED 375,000 mandatory threshold.",
                    "provider": { "@id": "https://www.marifahtax.com/#organization" },
                    "areaServed": "UAE",
                    "offers": { "@type": "Offer", "price": "799", "priceCurrency": "AED" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "item": {
                    "@type": "Service",
                    "name": "VAT Return Filing UAE",
                    "description": "Accurate quarterly VAT return filing on EmaraTax portal.",
                    "provider": { "@id": "https://www.marifahtax.com/#organization" },
                    "areaServed": "UAE"
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "item": {
                    "@type": "Service",
                    "name": "Bookkeeping and Accounting UAE",
                    "description": "Monthly bookkeeping, financial statements, MIS reporting, and audit-ready accounts.",
                    "provider": { "@id": "https://www.marifahtax.com/#organization" },
                    "areaServed": "UAE",
                    "offers": { "@type": "Offer", "price": "4499", "priceCurrency": "AED" }
                  }
                }
              ]
            };

export default async function Home() {
  const reviews = await allPublicReviews();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
      <SiteApp reviews={reviews} />
    </>
  );
}
