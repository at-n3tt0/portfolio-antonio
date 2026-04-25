import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "netto.tech — Soluções completas em TI para empresas e residências",
  description:
    "Desenvolvimento de sistemas, manutenção de computadores, redes e suporte técnico em Marituba, Pará. Atendimento presencial e remoto para todo o Brasil.",
  keywords: [
    "netto.tech",
    "at_netto.tech",
    "TI Marituba",
    "Desenvolvimento de Sistemas",
    "Manutenção de Computadores",
    "Redes e Infraestrutura",
    "Suporte Técnico",
    "Laravel",
    "Marituba",
    "Pará",
  ],
  authors: [{ name: "Antonio Neto", url: "https://github.com/at-n3tt0" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
