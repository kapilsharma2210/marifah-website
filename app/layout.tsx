import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Marifah Tax Advisory | Best UAE VAT & Corporate Tax Consultants',
  description: 'Top-rated UAE tax consultancy. Expert VAT registration, Corporate Tax filing & Accounting services in Dubai, Abu Dhabi & all Emirates. Book a free consultation today.',
  generator: 'Marifah Tax Advisory',
keywords: [
    // Correct spellings
    'UAE tax consultancy', 'VAT registration UAE', 'corporate tax UAE',
    'tax consultants Dubai', 'accounting services UAE',
    'best tax consultancy UAE', 'top accounting firms UAE', 'VAT filing Dubai',
    'corporate tax registration Dubai', 'bookkeeping UAE', 'tax advisory UAE',
    'VAT consultants Dubai', 'top 10 tax companies UAE', 'UAE FTA compliance',
    'best accounting firm Dubai', 'tax agent UAE', 'corporate tax filing UAE',
    'Marifah Tax Advisory', 'tax consultants Abu Dhabi', 'VAT return filing UAE',
    'top tax consultants UAE', 'best VAT consultants Dubai', 'FTA compliance UAE',
    // Misspelling variations
    'Marefa Tax Advisory', 'Marifa Tax Advisory', 'Marefah Tax Advisory',
    'Mareefa Tax Advisory', 'Mariefa Tax Advisory', 'Maarifa Tax Advisory',
    'marefa tax UAE', 'marifa tax UAE', 'marefah tax Dubai',
    'marefa VAT consultants', 'marifa tax consultants UAE',
    'marefah accounting UAE', 'mareefa tax advisory Dubai',
  ],
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
  alternates: {
    canonical: 'https://www.marifahtax.com',
  },
  verification: {
    google: 'qy9Z9yKWaVhgUGi_bMXyxeHsqbgUqIWHGLk9qKwv6ZE',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
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
        <link rel="canonical" href="https://www.marifahtax.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Marifah Tax Advisory",
              "description": "UAE-based tax consultancy firm offering VAT registration, Corporate Tax filing, and Accounting services across all Emirates.",
              "url": "https://www.marifahtax.com",
              "telephone": "+918860541927",
              "email": "info@marifahtax.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AE",
                "addressRegion": "Dubai"
              },
              "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "UAE"],
              "serviceType": [
                "VAT Registration",
                "VAT Return Filing",
                "Corporate Tax Registration",
                "Corporate Tax Filing",
                "Accounting and Bookkeeping",
                "Tax Advisory"
              ],
              "priceRange": "AED 399 - AED 4,999",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://www.linkedin.com/company/marifahtax",
                "https://www.instagram.com/marifahtax",
                "https://www.facebook.com/marifahtax"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50"
              }
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
