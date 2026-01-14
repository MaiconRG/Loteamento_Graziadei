import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loteamento Graziadei",
  description: "Loteamento Graziadei - Seu lugar perfeito",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
