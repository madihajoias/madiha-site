import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import JewelryCalculator from '../../../components/JewelryCalculator';

import CompraJoiasHero from '../../../components/joias/CompraJoiasHero';
import CompraJoiasMarcasTicker from '../../../components/joias/CompraJoiasMarcasTicker';
import CompraJoiasDiferencialSection from '../../../components/joias/CompraJoiasDiferencialSection';
import CompraJoiasTiposSection from '../../../components/joias/CompraJoiasTiposSection';
import CompraJoiasAvaliacaoSection from '../../../components/joias/CompraJoiasAvaliacaoSection';
import CompraJoiasPedrasSection from '../../../components/joias/CompraJoiasPedrasSection';
import CompraJoiasProcessoSection from '../../../components/joias/CompraJoiasProcessoSection';
import CompraJoiasSegurancaSection from '../../../components/joias/CompraJoiasSegurancaSection';
import CompraJoiasLocation from '../../../components/joias/CompraJoiasLocation';
import CompraJoiasFAQ from '../../../components/joias/CompraJoiasFAQ';
import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Compra de Joias na Barra da Tijuca | Madiha Maison',

  description:
    'Venda suas joias na Barra da Tijuca com avaliação especializada. A Madiha Maison compra joias de ouro, diamantes, pedras preciosas, joias antigas e peças de marcas reconhecidas no Vogue Square.',

  alternates: {
    canonical:
      '/joias/compra-de-joias/',
  },

  openGraph: {
    title:
      'Compra de Joias na Barra da Tijuca | Madiha Maison',

    description:
      'Avaliação e compra de joias no Vogue Square. Ouro, diamantes, pedras preciosas, joias antigas e peças de marcas reconhecidas.',

    type: 'website',

    locale: 'pt_BR',

    url:
      '/joias/compra-de-joias/',
  },
};

export default function CompraDeJoiasPage() {
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
        <CompraJoiasHero />

        <CompraJoiasMarcasTicker />

        <CompraJoiasDiferencialSection />

        <CompraJoiasTiposSection />

        <CompraJoiasAvaliacaoSection />

        <CompraJoiasPedrasSection />

        <div id="calculadora-de-joias">
          <JewelryCalculator />
        </div>

        <CompraJoiasProcessoSection />

        <CompraJoiasSegurancaSection />

        <CompraJoiasLocation />

        <CompraJoiasFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}