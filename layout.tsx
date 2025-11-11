import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ciberseguridad y IA en Banca | Protección Bancaria Digital",
  description: "Información educativa sobre el impacto de la ciberseguridad y la inteligencia artificial en la seguridad bancaria. Aprende a protegerte de fraudes bancarios.",
  keywords: "ciberseguridad, banca, inteligencia artificial, fraudes bancarios, seguridad digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
