import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Su Cakes & Dusty Grill Bistro - Where Good Vibes & Great Food Meet",
  description:
    "Experience the perfect blend of Su Cakes & Cookies Pastries and Dusty Grill Bistro in Kitengela. Custom cakes, grilled delights, buffets, and more. Proudly supporting S.D.G.B FC youth empowerment.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
        style={{
          ["--font-geist-sans" as string]: GeistSans.style.fontFamily,
          ["--font-geist-mono" as string]: GeistMono.style.fontFamily,
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
