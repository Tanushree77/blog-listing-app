import "./globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/Navbar"
import { Providers } from "./providers"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Blog Listing App",
  description: "A simple blog listing application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow dark:bg-gray-800 container mx-auto px-4 py-8">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}

