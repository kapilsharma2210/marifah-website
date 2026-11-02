import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ConsultationPrompt } from '@/components/consultation-prompt'
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
        <ConsultationPrompt />
        <Analytics />
      </body>
    </html>
  )
}
