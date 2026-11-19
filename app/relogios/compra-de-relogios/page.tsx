import type { Metadata } from 'next';

import FooterSection from '../../../components/FooterSection';

import CompraRelogiosHero from '../../../components/relogios/CompraRelogiosHero';
import CompraRelogiosComoFuncionaSection from '../../../components/relogios/CompraRelogiosComoFuncionaSection';
import CompraRelogiosValorSection from '../../../components/relogios/CompraRelogiosValorSection';
import CompraRelogiosTiposSection from '../../../components/relogios/CompraRelogiosTiposSection';
import CompraRelogiosMarcasSection from '../../../components/relogios/CompraRelogiosMarcasSection';
import CompraRelogiosSegurancaSection from '../../../components/relogios/CompraRelogiosSegurancaSection';
import CompraRelogiosLocation from '../../../components/relogios/CompraRelogiosLocation';
import CompraRelogiosMapaSection from '../../../components/relogios/CompraRelogiosMapaSection';
import CompraRelogiosFAQ from '../../../components/relogios/CompraRelogiosFAQ';
import CompraRelogiosFinalCTA from '../../../components/relogios/CompraRelogiosFinalCTA';

import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title: 'Compra de Relógios na Barra da Tijuca | Madiha Maison',

  description:
    'Compra de relógios de luxo na Barra da Tijuca. Venda Rolex, Cartier, Omega, Patek Philippe e outras marcas com avaliação individual e atendimento reservado no Vogue Square.',

  alternates: {
    canonical: '/relogios/compra-de-relogios/',
  },

  openGraph: {
    title: 'Compra de Relógios na Barra da Tijuca | Madiha Maison',

    description:
      'Venda seu relógio de luxo na Barra da Tijuca com avaliação individual, atendimento reservado e proposta comercial na Madiha Maison, no Vogue Square.',

    type: 'website',

    locale: 'pt_BR',

    url: '/relogios/compra-de-relogios/',
  },
};

export default function CompraDeRelogiosPage() {
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
        <CompraRelogiosHero />

        <CompraRelogiosComoFuncionaSection />

        <CompraRelogiosValorSection />

        <CompraRelogiosTiposSection />

        <CompraRelogiosMarcasSection />

        <CompraRelogiosSegurancaSection />

        <CompraRelogiosLocation />

        <CompraRelogiosMapaSection />

        <CompraRelogiosFAQ />

        <CompraRelogiosFinalCTA />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}