import type { Metadata } from 'next';

import FooterSection from '../../../components/FooterSection';

import BarraTijucaHero from '../../../components/localizacao/BarraTijucaHero';
import BarraTijucaServicosSection from '../../../components/localizacao/BarraTijucaServicosSection';
import BarraTijucaOuroSection from '../../../components/localizacao/BarraTijucaOuroSection';
import BarraTijucaJoiasSection from '../../../components/localizacao/BarraTijucaJoiasSection';
import BarraTijucaDiamantesSection from '../../../components/localizacao/BarraTijucaDiamantesSection';
import BarraTijucaRelogiosSection from '../../../components/localizacao/BarraTijucaRelogiosSection';
import BarraTijucaVogueSquareSection from '../../../components/localizacao/BarraTijucaVogueSquareSection';
import BarraTijucaMapaSection from '../../../components/localizacao/BarraTijucaMapaSection';
import BarraTijucaFAQ from '../../../components/localizacao/BarraTijucaFAQ';
import BarraTijucaFinalCTA from '../../../components/localizacao/BarraTijucaFinalCTA';

import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title: 'Joias, Ouro e Relógios na Barra da Tijuca | Madiha Maison',

  description:
    'Madiha Maison na Barra da Tijuca: compra e avaliação de ouro, avaliação de joias, diamantes e relógios de luxo. Atendimento presencial no Vogue Square.',

  alternates: {
    canonical: '/localizacao/barra-da-tijuca/',
  },

  openGraph: {
    title: 'Joias, Ouro e Relógios na Barra da Tijuca | Madiha Maison',

    description:
      'Atendimento especializado para ouro, joias, diamantes e relógios de luxo na Barra da Tijuca. Conheça a Madiha Maison no Vogue Square.',

    type: 'website',

    locale: 'pt_BR',

    url: '/localizacao/barra-da-tijuca/',
  },
};

export default function BarraDaTijucaPage() {
  return (
    <>
      {/*
        HEADER GLOBAL

        O Header já está incluído no app/layout.tsx.
        Portanto, não adicionamos outro Header nesta página.
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
        <BarraTijucaHero />

        {/* SERVIÇOS */}
        <BarraTijucaServicosSection />

        {/* COMPRA DE OURO */}
        <BarraTijucaOuroSection />

        {/* AVALIAÇÃO DE JOIAS */}
        <BarraTijucaJoiasSection />

        {/* DIAMANTES */}
        <BarraTijucaDiamantesSection />

        {/* RELÓGIOS DE LUXO */}
        <BarraTijucaRelogiosSection />

        {/* VOGUE SQUARE */}
        <BarraTijucaVogueSquareSection />

        {/* MAPA */}
        <BarraTijucaMapaSection />

        {/* FAQ */}
        <BarraTijucaFAQ />

        {/* CTA FINAL */}
        <BarraTijucaFinalCTA />
      </main>

      {/* FOOTER */}
      <FooterSection />

      {/* WHATSAPP */}
      <CompraJoiasWhatsApp />
    </>
  );
}