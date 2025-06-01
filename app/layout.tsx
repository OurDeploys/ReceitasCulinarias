import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sabores do Brasil - Receitas Culinárias",
  description:
    "Descubra receitas deliciosas e tradicionais da culinária brasileira e internacional. Cada prato conta uma história, cada sabor desperta uma memória.",
  keywords: "receitas, culinária, brasileira, comida, gastronomia, cozinha",
  authors: [{ name: "Sabores do Brasil" }],
  openGraph: {
    title: "Sabores do Brasil - Receitas Culinárias",
    description: "Descubra receitas deliciosas e tradicionais da culinária brasileira e internacional.",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
