import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bodoni_Moda,
} from "next/font/google";

import "./globals.css";

import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-madiha-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madiha Maison | Leilão de Joias e Compra de Ouro no RJ",

  description:
    "Avaliação discreta e segura de joias e ouro. Atendimento exclusivo no Vogue Square, Barra da Tijuca. Participe dos nossos leilões de alta joalheria.",

  metadataBase: new URL("https://www.leilaodejoiaseouro.com.br"),

  openGraph: {
    title: "Madiha Maison | Leilão de Joias e Compra de Ouro",

    description:
      "Transforme suas joias e ouro em capital com discrição e segurança.",

    url: "https://www.leilaodejoiaseouro.com.br",

    siteName: "Madiha Maison",

    locale: "pt_BR",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${bodoniModa.variable}
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        {children}
      </body>
    </html>
  );
}