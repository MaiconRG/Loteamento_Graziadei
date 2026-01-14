import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loteamento Graziadei | Terrenos em Porto Xavier - RS",
  description:
    "Terrenos urbanos à venda no Loteamento Graziadei em Porto Xavier - RS. Infraestrutura completa, ótima localização e condições facilitadas para construir sua casa própria.",
  keywords: [
    "loteamento graziadei",
    "terrenos em porto xavier",
    "lotes à venda porto xavier",
    "comprar terreno RS",
    "terreno urbano porto xavier",
  ],
  icons: {
    icon: "/ico.svg",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://loteamento-graziadei.vercel.app/",
  },
  openGraph: {
    title: "Loteamento Graziadei | Terrenos à venda em Porto Xavier - RS",
    description:
      "Terrenos prontos para construir em Porto Xavier - RS. Loteamento Graziadei com infraestrutura completa e ótima oportunidade de investimento.",
    url: "https://loteamento-graziadei.vercel.app/",
    siteName: "Loteamento Graziadei",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vista aérea do Loteamento Graziadei em Porto Xavier",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loteamento Graziadei | Porto Xavier - RS",
    description:
      "Terrenos à venda com infraestrutura completa em Porto Xavier - RS.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Landform",
              name: "Loteamento Graziadei",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Porto Xavier",
                addressRegion: "RS",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -27.9073477,
                longitude: -55.1453315,
              },
              url: "https://loteamento-graziadei.vercel.app",
            }),
          }}
        />
      </body>
    </html>
  );
}
