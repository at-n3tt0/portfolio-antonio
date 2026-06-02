import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atnetto.tech"),
  title: "atnetto.tech — Sites, sistemas, APIs e automação para empresas",
  description:
    "Desenvolvimento web, sites, sistemas, APIs, automação, landing pages, CRM simples, cardápio digital e agendamento online para empresas.",
  keywords: [
    "atnetto.tech",
    "criação de sites",
    "desenvolvimento web",
    "sistemas para empresas",
    "APIs",
    "automação empresarial",
    "landing pages",
    "CRM simples",
    "cardápio digital",
    "agendamento online",
    "Marituba",
    "Belém",
    "Pará",
  ],
  authors: [{ name: "Antonio Neto", url: "https://github.com/at-n3tt0" }],
  openGraph: {
    title: "atnetto.tech — Soluções digitais para empresas",
    description:
      "Sites, sistemas, APIs e automações para empresas que precisam captar leads e organizar processos.",
    url: "https://atnetto.tech",
    siteName: "atnetto.tech",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "atnetto.tech — Soluções digitais para empresas",
    description:
      "Sites, sistemas, APIs e automações para empresas que precisam captar leads e organizar processos.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://atnetto.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      {gtmId ? (
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      ) : null}
      <body>
        {gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
