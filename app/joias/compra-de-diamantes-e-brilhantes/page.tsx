import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import JewelryCalculator from '../../../components/JewelryCalculator';

import CompraDiamantesHero from '../../../components/joias/CompraDiamantesHero';
import CompraDiamantesDiferencaSection from '../../../components/joias/CompraDiamantesDiferencaSection';
import CompraDiamantesQuatroCsSection from '../../../components/joias/CompraDiamantesQuatroCsSection';
import CompraDiamantesTiposSection from '../../../components/joias/CompraDiamantesTiposSection';
import CompraDiamantesCertificadoSection from '../../../components/joias/CompraDiamantesCertificadoSection';
import CompraDiamantesMercadoSection from '../../../components/joias/CompraDiamantesMercadoSection';
import CompraDiamantesCalculadoraSection from '../../../components/joias/CompraDiamantesCalculadoraSection';
import CompraDiamantesProcessoSection from '../../../components/joias/CompraDiamantesProcessoSection';
import CompraDiamantesSegurancaSection from '../../../components/joias/CompraDiamantesSegurancaSection';
import CompraDiamantesCTASection from '../../../components/joias/CompraDiamantesCTASection';
import CompraDiamantesLocation from '../../../components/joias/CompraDiamantesLocation';
import CompraDiamantesFAQ from '../../../components/joias/CompraDiamantesFAQ';

import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Compra de Diamantes e Brilhantes na Barra da Tijuca | Madiha Maison',

  description:
    'Compra e avaliação de diamantes e brilhantes na Barra da Tijuca. Diamantes soltos ou montados, com ou sem certificado, avaliados individualmente pela Madiha Maison.',

  alternates: {
    canonical: '/joias/compra-de-diamantes-e-brilhantes/',
  },

  openGraph: {
    title: 'Compra de Diamantes e Brilhantes | Madiha Maison',

    description:
      'Avaliação e compra de diamantes lapidados, brilhantes e pedras montadas em joias no Vogue Square, Barra da Tijuca.',

    type: 'website',

    locale: 'pt_BR',

    url: '/joias/compra-de-diamantes-e-brilhantes/',
  },
};

export default function CompraDeDiamantesEBrilhantesPage() {
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
        <CompraDiamantesHero />

        <CompraDiamantesDiferencaSection />

        <CompraDiamantesQuatroCsSection />

        <CompraDiamantesTiposSection />

        <CompraDiamantesCertificadoSection />

        <CompraDiamantesMercadoSection />

        <CompraDiamantesCalculadoraSection />

        <div id="calculadora">
          <JewelryCalculator />
        </div>

        <CompraDiamantesProcessoSection />

        <CompraDiamantesSegurancaSection />

        <CompraDiamantesCTASection />

        <CompraDiamantesLocation />

        <CompraDiamantesFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}