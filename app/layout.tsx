import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yash Pathak - Portfolio',
  description: 'Mumbai-based technologist passionate about crafting impactful digital experiences',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  )
}
