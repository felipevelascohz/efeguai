import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "efeguai",
  description: "Pixel art y diseños kawaii",
  generator: 'v0.dev',
  icons: {
      icon: "/favicon1.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}



import './globals.css'