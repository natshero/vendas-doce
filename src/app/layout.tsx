import type { Metadata } from "next";
import { Poppins, Inter, Playfair_Display } from "next/font/google";
import { productConfig } from "@/config/product";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://seu-dominio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Método Verão Lucrativo — 50 Sobremesas Geladas para Fazer e Vender",
  description:
    "Aprenda receitas, organização, precificação e estratégias práticas para começar a vender sobremesas geladas durante o verão.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Método Verão Lucrativo — 50 Sobremesas Geladas para Fazer e Vender",
    description:
      "Aprenda receitas, organização, precificação e estratégias práticas para começar a vender sobremesas geladas durante o verão.",
    url: siteUrl,
    siteName: productConfig.nome,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: productConfig.imagens.ogImage,
        width: 1200,
        height: 630,
        alt: productConfig.nome,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Método Verão Lucrativo — 50 Sobremesas Geladas para Fazer e Vender",
    description:
      "Aprenda receitas, organização, precificação e estratégias práticas para começar a vender sobremesas geladas durante o verão.",
    images: [productConfig.imagens.ogImage],
  },
  icons: {
    icon: productConfig.imagens.favicon,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productConfig.nome,
  description: productConfig.descricaoCurta,
  category: productConfig.categoria,
  offers: {
    "@type": "Offer",
    price: productConfig.preco,
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: productConfig.checkoutUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <MetaPixel />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
