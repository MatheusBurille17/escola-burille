import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escola Burille - Artes Marciais em Pato Branco",
  description: "Escola de artes marciais em Pato Branco - PR. Jiu-Jitsu, Judô, Taekwondo e Move Fight para todas as idades.",
  keywords: ["artes marciais", "jiu-jitsu", "judô", "taekwondo", "pato branco", "academia"],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Escola Burille - Artes Marciais em Pato Branco",
    description: "Escola de artes marciais em Pato Branco - PR. Jiu-Jitsu, Judô, Taekwondo e Move Fight para todas as idades.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
