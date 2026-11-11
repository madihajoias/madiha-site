import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import JewelryCalculator from '../../../components/JewelryCalculator';

import CompraJoiasAntigasHero from '../../../components/joias/CompraJoiasAntigasHero';
import CompraJoiasAntigasTiposSection from '../../../components/joias/CompraJoiasAntigasTiposSection';
import CompraJoiasAntigasAvaliacaoSection from '../../../components/joias/CompraJoiasAntigasAvaliacaoSection';
import CompraJoiasAntigasHerdadasSection from '../../../components/joias/CompraJoiasAntigasHerdadasSection';
import CompraJoiasAntigasPedrasSection from '../../../components/joias/CompraJoiasAntigasPedrasSection';
import CompraJoiasAntigasAssinadasSection from '../../../components/joias/CompraJoiasAntigasAssinadasSection';
import CompraJoiasAntigasConservacaoSection from '../../../components/joias/CompraJoiasAntigasConservacaoSection';
import CompraJoiasAntigasDocumentacaoSection from '../../../components/joias/CompraJoiasAntigasDocumentacaoSection';
import CompraJoiasAntigasCalculadoraSection from '../../../components/joias/CompraJoiasAntigasCalculadoraSection';
import CompraJoiasAntigasProcessoSection from '../../../components/joias/CompraJoiasAntigasProcessoSection';
import CompraJoiasAntigasSegurancaSection from '../../../components/joias/CompraJoiasAntigasSegurancaSection';
import CompraJoiasAntigasCTASection from '../../../components/joias/CompraJoiasAntigasCTASection';
import CompraJoiasAntigasLocation from '../../../components/joias/CompraJoiasAntigasLocation';
import CompraJoiasAntigasFAQ from '../../../components/joias/CompraJoiasAntigasFAQ';

import CompraJoiasMarcasTicker from '../../../components/joias/CompraJoiasMarcasTicker';
import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Compra de Joias Antigas na Barra da Tijuca | Madiha Maison',

  description:
    'Compra e avaliação de joias antigas, herdadas, assinadas e com pedras preciosas na Barra da Tijuca. Atendimento especializado e reservado na Madiha Maison.',

  alternates: {
    canonical: '/joias/compra-de-joias-antigas/',
  },

  openGraph: {
    title: 'Compra de Joias Antigas | Madiha Maison',

    description:
      'Avaliação especializada de joias antigas, joias herdadas, peças assinadas e joias com pedras preciosas no Vogue Square, Barra da Tijuca.',

    type: 'website',

    locale: 'pt_BR',

    url: '/joias/compra-de-joias-antigas/',
  },
};

export default function CompraDeJoiasAntigasPage() {
  return (
    <>
      {/* FAIXA CLARA SOB O HEADER */}
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
        {/* HERO */}
        <CompraJoiasAntigasHero />

        {/* TIPOS DE JOIAS ANTIGAS */}
        <CompraJoiasAntigasTiposSection />

        {/* COMO AVALIAMOS */}
        <CompraJoiasAntigasAvaliacaoSection />

        {/* JOIAS HERDADAS */}
        <CompraJoiasAntigasHerdadasSection />

        {/* PEDRAS PRECIOSAS */}
        <CompraJoiasAntigasPedrasSection />

        {/* JOIAS ASSINADAS */}
        <CompraJoiasAntigasAssinadasSection />

        {/* ESTADO DE CONSERVAÇÃO */}
        <CompraJoiasAntigasConservacaoSection />

        {/* DOCUMENTAÇÃO E HISTÓRICO */}
        <CompraJoiasAntigasDocumentacaoSection />

        {/* INTRODUÇÃO À CALCULADORA */}
        <CompraJoiasAntigasCalculadoraSection />

        {/* CALCULADORA DE JOIAS */}
        <div id="calculadora">
          <JewelryCalculator />
        </div>

        {/* PROCESSO */}
        <CompraJoiasAntigasProcessoSection />

        {/* MARCAS */}
        <CompraJoiasMarcasTicker />

        {/* SEGURANÇA */}
        <CompraJoiasAntigasSegurancaSection />

        {/* CTA */}
        <CompraJoiasAntigasCTASection />

        {/* LOCALIZAÇÃO */}
        <CompraJoiasAntigasLocation />

        {/* FAQ */}
        <CompraJoiasAntigasFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}