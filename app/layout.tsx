import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { siteConfig } from '@/lib/site-config'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Marifah Tax Advisory | Best UAE VAT & Corporate Tax Consultants',
  description: 'Top-rated UAE tax consultancy. Expert VAT registration, Corporate Tax filing & Accounting services in Dubai, Abu Dhabi & all Emirates. Book a free consultation today.',
  generator: 'Marifah Tax Advisory',
  authors: [{ name: 'Marifah Tax Advisory' }],
  creator: 'Marifah Tax Advisory',
  publisher: 'Marifah Tax Advisory',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.marifahtax.com',
    siteName: 'Marifah Tax Advisory',
    title: 'Marifah Tax Advisory | Best UAE VAT & Corporate Tax Consultants',
    description: 'UAE trusted tax advisory firm. VAT registration, Corporate Tax filing & Accounting across all Emirates. Free consultation available.',
    images: [
      {
        url: 'https://www.marifahtax.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marifah Tax Advisory — UAE Tax Consultants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marifah Tax Advisory | UAE VAT & Corporate Tax Consultants',
    description: 'Expert VAT, Corporate Tax & Accounting services in UAE. Free consultation available.',
    images: ['https://www.marifahtax.com/og-image.jpg'],
  },
  metadataBase: new URL('https://www.marifahtax.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'qy9Z9yKWaVhgUGi_bMXyxeHsqbgUqIWHGLk9qKwv6ZE',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-icon.png',
  },
  other: {
    'msapplication-tap-highlight': 'no',
    'imagetoolbar': 'no',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* SCHEMA 1: LocalBusiness — Google Maps, star ratings, rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://www.marifahtax.com/#organization",
              "name": "Marifah Tax Advisory",
              "alternateName": ["Marefa Tax", "Marifa Tax Advisory", "Marefah Tax"],
              "url": "https://www.marifahtax.com",
              "logo": "https://www.marifahtax.com/logo.png",
              "image": "https://www.marifahtax.com/og-image.jpg",
              "description": "Top-rated UAE tax consultancy providing expert VAT registration, Corporate Tax filing, FTA compliance, and accounting services in Dubai, Abu Dhabi and all Emirates.",
              "telephone": "+971505815245",
              "email": "info@marifahtax.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dubai",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.2048",
                "longitude": "55.2708"
              },
              "areaServed": [
                { "@type": "City", "name": "Dubai" },
                { "@type": "City", "name": "Abu Dhabi" },
                { "@type": "City", "name": "Sharjah" },
                { "@type": "City", "name": "Ajman" },
                { "@type": "City", "name": "Ras Al Khaimah" },
                { "@type": "Country", "name": "United Arab Emirates" }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "AED 499 - AED 6,499",
              "currenciesAccepted": "AED",
              "paymentAccepted": "Cash, Bank Transfer, Online Payment",
              "hasMap": "https://maps.google.com/?q=Marifah+Tax+Advisory+Dubai",
              "sameAs": Object.values(siteConfig.socials).filter(Boolean)
            }),
          }}
        />

        {/* SCHEMA 2: FAQ — shows expandable Q&A dropdowns in Google search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />

        {/* SCHEMA 3: Services List */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                    "name": "UAE VAT Registration Services",
                    "description": "VAT registration with FTA for businesses exceeding the AED 375,000 mandatory threshold.",
                    "provider": { "@id": "https://www.marifahtax.com/#organization" },
                    "areaServed": "UAE",
                    "offers": { "@type": "Offer", "price": "799", "priceCurrency": "AED" }
                  }
                },
                {
                  "@type": "ListItem",
                  "position": 3,
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
                  "position": 4,
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
            }),
          }}
        />

        {/* SCHEMA 4: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.marifahtax.com",
              "name": "Marifah Tax Advisory",
              "description": "UAE's trusted tax advisory firm — VAT, Corporate Tax and Accounting for businesses across all Emirates.",
              "publisher": { "@id": "https://www.marifahtax.com/#organization" }
            }),
          }}
        />

      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
