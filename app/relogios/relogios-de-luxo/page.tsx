import type { Metadata } from 'next';

import FooterSection from '../../../components/FooterSection';

import RelogiosLuxoHero from '../../../components/relogios/RelogiosLuxoHero';
import RelogiosLuxoPilaresSection from '../../../components/relogios/RelogiosLuxoPilaresSection';
import RelogiosLuxoMarcasSection from '../../../components/relogios/RelogiosLuxoMarcasSection';
import RelogiosLuxoPerfisSection from '../../../components/relogios/RelogiosLuxoPerfisSection';
import RelogiosLuxoOuroSection from '../../../components/relogios/RelogiosLuxoOuroSection';
import RelogiosLuxoConversaoSection from '../../../components/relogios/RelogiosLuxoConversaoSection';
import RelogiosLuxoLocation from '../../../components/relogios/RelogiosLuxoLocation';
import RelogiosLuxoMapaSection from '../../../components/relogios/RelogiosLuxoMapaSection';
import RelogiosLuxoFAQ from '../../../components/relogios/RelogiosLuxoFAQ';
import RelogiosLuxoFinalCTA from '../../../components/relogios/RelogiosLuxoFinalCTA';

import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title: 'Relógios de Luxo no Rio de Janeiro | Madiha Maison',

  description:
    'Conheça o universo dos relógios de luxo, alta relojoaria, grandes marcas, relógios usados, vintage e em ouro. Avaliação e compra de relógios na Barra da Tijuca, no Vogue Square.',

  alternates: {
    canonical: '/relogios/relogios-de-luxo/',
  },

  openGraph: {
    title: 'Relógios de Luxo no Rio de Janeiro | Madiha Maison',

    description:
      'Alta relojoaria, grandes marcas, relógios usados, vintage e em ouro. Conheça a Madiha Maison no Vogue Square, Barra da Tijuca.',

    type: 'website',

    locale: 'pt_BR',

    url: '/relogios/relogios-de-luxo/',
  },
};

export default function RelogiosDeLuxoPage() {
  return (
    <>
      {/*
        FAIXA CLARA ABAIXO DO HEADER GLOBAL

        O Header já está no app/layout.tsx.
        Portanto NÃO adicionamos outro Header aqui.
      */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[90]
          h-[72px]
          w-full
          border-b
          border-[#5A1017]/8
          bg-[#F7F3EF]/95
          backdrop-blur-xl

          md:h-[92px]
        "
      />

      <main>
        {/* HERO */}
        <RelogiosLuxoHero />

        {/* O QUE DEFINE UM RELÓGIO DE LUXO */}
        <RelogiosLuxoPilaresSection />

        {/* GRANDES MARCAS */}
        <RelogiosLuxoMarcasSection />

        {/* NOVOS, USADOS E VINTAGE */}
        <RelogiosLuxoPerfisSection />

        {/* RELÓGIOS DE LUXO EM OURO */}
        <RelogiosLuxoOuroSection />

        {/* AVALIAÇÃO OU VENDA */}
        <RelogiosLuxoConversaoSection />

        {/* LOCALIZAÇÃO */}
        <RelogiosLuxoLocation />

        {/* GOOGLE MAPS */}
        <RelogiosLuxoMapaSection />

        {/* FAQ */}
        <RelogiosLuxoFAQ />

        {/* CTA FINAL */}
        <RelogiosLuxoFinalCTA />
      </main>

      {/* FOOTER GLOBAL DA PÁGINA */}
      <FooterSection />

      {/* WHATSAPP */}
      <CompraJoiasWhatsApp />
    </>
  );
}