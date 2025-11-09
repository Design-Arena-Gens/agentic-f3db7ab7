import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indian Stock Analyzer - Best Stocks Under ₹50',
  description: 'AI-powered analysis of Indian stocks under ₹50 for strong buy opportunities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
