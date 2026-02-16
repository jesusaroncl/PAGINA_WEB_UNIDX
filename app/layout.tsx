import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import { AccessibilityButton } from "@/components/accessibility-button"
import { AccessibilityFilters } from "@/components/accessibility-filters"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'UNID',
  description: 'Universidad líder en educación superior',
  icons: {
    icon: '/images/unid-logo.png',
    shortcut: '/images/unid-logo.png',
    apple: '/images/unid-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <WhatsAppFloat />
          <AccessibilityButton />
          <AccessibilityFilters />
        </LanguageProvider>
      </body>
    </html>
  )
}
