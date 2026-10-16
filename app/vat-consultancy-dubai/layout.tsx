import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VAT Consultancy Dubai | VAT Registration & Return Filing | Marifah Tax Advisory',
  description: 'UAE VAT registration (TRN), quarterly return filing and VAT advisory from AED 799. Fast, FTA-compliant VAT services in Dubai and all Emirates.',
  alternates: { canonical: '/vat-consultancy-dubai' },
  openGraph: { url: '/vat-consultancy-dubai' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
