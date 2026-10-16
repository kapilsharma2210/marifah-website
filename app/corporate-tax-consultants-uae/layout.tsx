import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporate Tax Consultants UAE | Registration & Filing | Marifah Tax Advisory',
  description: 'UAE Corporate Tax registration, return filing and advisory from AED 499. End-to-end FTA compliance for mainland and free zone businesses.',
  alternates: { canonical: '/corporate-tax-consultants-uae' },
  openGraph: { url: '/corporate-tax-consultants-uae' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
