import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Extra Trading-sarl | Système de Clôture Électrique Intelligente',
  description: 'Sécurisez efficacement vos locaux avec notre système de clôture électrique intelligente. Protection 24/7 pour entreprises, résidences, fermes et institutions en Mauritanie.',
  keywords: 'clôture électrique, sécurité Mauritanie, Extra Trading, protection entreprise, système intelligent, Nouakchott',
  authors: [{ name: 'Extra Trading-sarl' }],
  openGraph: {
    title: 'Extra Trading-sarl | Clôture Électrique Intelligente',
    description: 'Système de clôture électrique intelligent pour entreprises, résidences et institutions. Sécurité 24/7.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
