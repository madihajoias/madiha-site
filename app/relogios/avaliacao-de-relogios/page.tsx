import type { Metadata } from 'next';

import FooterSection from '../../../components/FooterSection';

import AvaliacaoRelogiosHero from '../../../components/relogios/AvaliacaoRelogiosHero';
import AvaliacaoRelogiosCriteriosSection from '../../../components/relogios/AvaliacaoRelogiosCriteriosSection';
import AvaliacaoRelogiosMarcasSection from '../../../components/relogios/AvaliacaoRelogiosMarcasSection';
import AvaliacaoRelogiosEstadoSection from '../../../components/relogios/AvaliacaoRelogiosEstadoSection';
import AvaliacaoRelogiosProcessoSection from '../../../components/relogios/AvaliacaoRelogiosProcessoSection';
import AvaliacaoRelogiosSegurancaSection from '../../../components/relogios/AvaliacaoRelogiosSegurancaSection';
import AvaliacaoRelogiosLocation from '../../../components/relogios/AvaliacaoRelogiosLocation';
import AvaliacaoRelogiosMapaSection from '../../../components/relogios/AvaliacaoRelogiosMapaSection';
import AvaliacaoRelogiosFAQ from '../../../components/relogios/AvaliacaoRelogiosFAQ';

import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Avaliação de Relógios na Barra da Tijuca | Madiha Maison',

  description:
    'Avaliação de relógios de luxo na Barra da Tijuca. Análise de marca, referência, mecanismo, materiais, conservação, documentação e características da peça na Madiha Maison, no Vogue Square.',

  alternates: {
    canonical:
      '/relogios/avaliacao-de-relogios/',
  },

  openGraph: {
    title:
      'Avaliação de Relógios na Barra da Tijuca | Madiha Maison',

    description:
      'Avaliação especializada de relógios de luxo, relógios vintage e peças de coleção no Vogue Square, Barra da Tijuca.',

    type: 'website',

    locale: 'pt_BR',

    url:
      '/relogios/avaliacao-de-relogios/',
  },
};

export default function AvaliacaoDeRelogiosPage() {
  return (
    <>
      {/* FAIXA CLARA SOB O HEADER GLOBAL */}
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

      <main className="min-h-screen bg-[#F7F3EF]">
        <AvaliacaoRelogiosHero />

        <AvaliacaoRelogiosCriteriosSection />

        <AvaliacaoRelogiosMarcasSection />

        <AvaliacaoRelogiosEstadoSection />

        <AvaliacaoRelogiosProcessoSection />

        <AvaliacaoRelogiosSegurancaSection />

        <AvaliacaoRelogiosLocation />

        <AvaliacaoRelogiosMapaSection />

        <AvaliacaoRelogiosFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}