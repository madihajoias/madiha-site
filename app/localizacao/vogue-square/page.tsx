import type { Metadata } from 'next';

import FooterSection from '../../../components/FooterSection';

import VogueSquareHero from '../../../components/localizacao/VogueSquareHero';
import VogueSquareServicosSection from '../../../components/localizacao/VogueSquareServicosSection';
import VogueSquareOuroSection from '../../../components/localizacao/VogueSquareOuroSection';
import VogueSquareJoiasSection from '../../../components/localizacao/VogueSquareJoiasSection';
import VogueSquareDiamantesSection from '../../../components/localizacao/VogueSquareDiamantesSection';
import VogueSquareRelogiosSection from '../../../components/localizacao/VogueSquareRelogiosSection';
import VogueSquareDiferenciaisSection from '../../../components/localizacao/VogueSquareDiferenciaisSection';
import VogueSquareEnderecoSection from '../../../components/localizacao/VogueSquareEnderecoSection';
import VogueSquareMapaSection from '../../../components/localizacao/VogueSquareMapaSection';
import VogueSquareFAQ from '../../../components/localizacao/VogueSquareFAQ';
import VogueSquareFinalCTA from '../../../components/localizacao/VogueSquareFinalCTA';

import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title: 'Madiha Maison no Vogue Square | Barra da Tijuca',

  description:
    'Conheça a Madiha Maison no Vogue Square, Barra da Tijuca. Atendimento para ouro, joias, diamantes e relógios de luxo na Av. das Américas, sala 490.',

  alternates: {
    canonical: '/localizacao/vogue-square/',
  },

  openGraph: {
    title: 'Madiha Maison no Vogue Square | Barra da Tijuca',

    description:
      'Atendimento especializado em ouro, joias, diamantes e relógios de luxo no Vogue Square, Barra da Tijuca, Rio de Janeiro.',

    type: 'website',

    locale: 'pt_BR',

    url: '/localizacao/vogue-square/',
  },
};

export default function VogueSquarePage() {
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
        <VogueSquareHero />

        {/* SERVIÇOS NO VOGUE SQUARE */}
        <VogueSquareServicosSection />

        {/* COMPRA DE OURO */}
        <VogueSquareOuroSection />

        {/* AVALIAÇÃO DE JOIAS */}
        <VogueSquareJoiasSection />

        {/* DIAMANTES */}
        <VogueSquareDiamantesSection />

        {/* RELÓGIOS DE LUXO */}
        <VogueSquareRelogiosSection />

        {/* DIFERENCIAIS */}
        <VogueSquareDiferenciaisSection />

        {/* ENDEREÇO E COMO CHEGAR */}
        <VogueSquareEnderecoSection />

        {/* GOOGLE MAPS */}
        <VogueSquareMapaSection />

        {/* FAQ */}
        <VogueSquareFAQ />

        {/* CTA FINAL */}
        <VogueSquareFinalCTA />
      </main>

      {/* FOOTER */}
      <FooterSection />

      {/* WHATSAPP */}
      <CompraJoiasWhatsApp />
    </>
  );
}