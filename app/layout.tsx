import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // 1. Importamos a caixa do nosso Menu!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Injetamos o SEO VIP da Madiha Maison
export const metadata: Metadata = {
  title: "Madiha Maison | Leilão de Joias e Compra de Ouro no RJ",
  description: "Avaliação discreta e segura de joias e ouro. Atendimento exclusivo no Vogue Square, Barra da Tijuca. Participe dos nossos leilões de alta joalheria.",
  metadataBase: new URL('https://www.leilaodejoiaseouro.com.br'),
  openGraph: {
    title: 'Madiha Maison | Leilão de Joias e Compra de Ouro',
    description: 'Transforme suas joias e ouro em capital com discrição e segurança.',
    url: 'https://www.leilaodejoiaseouro.com.br',
    siteName: 'Madiha Maison',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR" // 3. Ajustado para o Brasil
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 4. Encaixamos o menu no topo do corpo do site */}
        <Header/> 
        
        {/* O conteúdo do resto do site aparece aqui embaixo */}
        {children}
      </body>
    </html>
  );
}