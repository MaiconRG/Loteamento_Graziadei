import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu site",
  description: "Descrição do projeto",
  icons: {
    icon: "/ico.svg", // ou /favicon.ico se preferir
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
