import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import JewelryCalculator from '../../../components/JewelryCalculator';

import AvaliacaoJoiasHero from '../../../components/joias/AvaliacaoJoiasHero';
import AvaliacaoJoiasDiferencialSection from '../../../components/joias/AvaliacaoJoiasDiferencialSection';
import AvaliacaoJoiasCriteriosSection from '../../../components/joias/AvaliacaoJoiasCriteriosSection';
import AvaliacaoJoiasTiposSection from '../../../components/joias/AvaliacaoJoiasTiposSection';
import AvaliacaoJoiasPedrasSection from '../../../components/joias/AvaliacaoJoiasPedrasSection';
import AvaliacaoJoiasProcessoSection from '../../../components/joias/AvaliacaoJoiasProcessoSection';
import AvaliacaoJoiasSegurancaSection from '../../../components/joias/AvaliacaoJoiasSegurancaSection';
import AvaliacaoJoiasLocation from '../../../components/joias/AvaliacaoJoiasLocation';
import AvaliacaoJoiasFAQ from '../../../components/joias/AvaliacaoJoiasFAQ';

import CompraJoiasMarcasTicker from '../../../components/joias/CompraJoiasMarcasTicker';
import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Avaliação de Joias na Barra da Tijuca | Madiha Maison',

  description:
    'Avaliação de joias na Barra da Tijuca, Rio de Janeiro. A Madiha Maison analisa ouro, diamantes, pedras preciosas, joias antigas e peças de marcas reconhecidas no Vogue Square.',

  alternates: {
    canonical:
      '/joias/avaliacao-de-joias/',
  },

  openGraph: {
    title:
      'Avaliação de Joias na Barra da Tijuca | Madiha Maison',

    description:
      'Avaliação especializada de joias, ouro, diamantes e pedras preciosas no Vogue Square, Barra da Tijuca.',

    type: 'website',

    locale: 'pt_BR',

    url:
      '/joias/avaliacao-de-joias/',
  },
};

export default function AvaliacaoDeJoiasPage() {
  return (
    <>
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

      <Header />

      <main className="min-h-screen bg-[#F7F3EF]">
        <AvaliacaoJoiasHero />

        <AvaliacaoJoiasDiferencialSection />

        <AvaliacaoJoiasCriteriosSection />

        <AvaliacaoJoiasTiposSection />

        <CompraJoiasMarcasTicker />

        <AvaliacaoJoiasPedrasSection />

        <div id="calculadora-de-joias">
          <JewelryCalculator />
        </div>

        <AvaliacaoJoiasProcessoSection />

        <AvaliacaoJoiasSegurancaSection />

        <AvaliacaoJoiasLocation />

        <AvaliacaoJoiasFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}