import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';

import AvaliacaoDiamantesHero from '../../../components/joias/AvaliacaoDiamantesHero';
import AvaliacaoDiamantesEntendaSection from '../../../components/joias/AvaliacaoDiamantesEntendaSection';
import AvaliacaoDiamantesPesoMedidasSection from '../../../components/joias/AvaliacaoDiamantesPesoMedidasSection';
import AvaliacaoDiamantesCorSection from '../../../components/joias/AvaliacaoDiamantesCorSection';
import AvaliacaoDiamantesPurezaSection from '../../../components/joias/AvaliacaoDiamantesPurezaSection';
import AvaliacaoDiamantesLapidacaoSection from '../../../components/joias/AvaliacaoDiamantesLapidacaoSection';
import AvaliacaoDiamantesFormatosSection from '../../../components/joias/AvaliacaoDiamantesFormatosSection';
import AvaliacaoDiamantesMontadosSection from '../../../components/joias/AvaliacaoDiamantesMontadosSection';
import AvaliacaoDiamantesCertificadoSection from '../../../components/joias/AvaliacaoDiamantesCertificadoSection';
import AvaliacaoDiamantesInstrumentosSection from '../../../components/joias/AvaliacaoDiamantesInstrumentosSection';
import AvaliacaoDiamantesProcessoSection from '../../../components/joias/AvaliacaoDiamantesProcessoSection';
import AvaliacaoDiamantesSegurancaSection from '../../../components/joias/AvaliacaoDiamantesSegurancaSection';
import AvaliacaoDiamantesCTASection from '../../../components/joias/AvaliacaoDiamantesCTASection';
import AvaliacaoDiamantesLocation from '../../../components/joias/AvaliacaoDiamantesLocation';
import AvaliacaoDiamantesFAQ from '../../../components/joias/AvaliacaoDiamantesFAQ';

import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Avaliação de Diamantes Lapidados na Barra da Tijuca | Madiha Maison',

  description:
    'Avaliação especializada de diamantes lapidados na Barra da Tijuca. Análise de peso, medidas, cor, pureza, lapidação, proporções, simetria e certificado na Madiha Maison.',

  alternates: {
    canonical: '/joias/avaliacao-de-diamantes-lapidados/',
  },

  openGraph: {
    title: 'Avaliação de Diamantes Lapidados | Madiha Maison',

    description:
      'Avaliação técnica de diamantes lapidados, soltos ou montados em joias, com ou sem certificado, no Vogue Square, Barra da Tijuca.',

    type: 'website',

    locale: 'pt_BR',

    url: '/joias/avaliacao-de-diamantes-lapidados/',
  },
};

export default function AvaliacaoDeDiamantesLapidadosPage() {
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
        <AvaliacaoDiamantesHero />

        {/* O QUE SIGNIFICA AVALIAR UM DIAMANTE */}
        <AvaliacaoDiamantesEntendaSection />

        {/* PESO E MEDIDAS */}
        <AvaliacaoDiamantesPesoMedidasSection />

        {/* COR */}
        <AvaliacaoDiamantesCorSection />

        {/* PUREZA */}
        <AvaliacaoDiamantesPurezaSection />

        {/* LAPIDAÇÃO, PROPORÇÕES E LUZ */}
        <AvaliacaoDiamantesLapidacaoSection />

        {/* FORMATOS */}
        <AvaliacaoDiamantesFormatosSection />

        {/* DIAMANTES MONTADOS EM JOIAS */}
        <AvaliacaoDiamantesMontadosSection />

        {/* CERTIFICADO X AVALIAÇÃO FÍSICA */}
        <AvaliacaoDiamantesCertificadoSection />

        {/* INSTRUMENTOS */}
        <AvaliacaoDiamantesInstrumentosSection />

        {/* PROCESSO DE AVALIAÇÃO */}
        <AvaliacaoDiamantesProcessoSection />

        {/* SEGURANÇA E DISCRIÇÃO */}
        <AvaliacaoDiamantesSegurancaSection />

        {/* CTA PRINCIPAL */}
        <AvaliacaoDiamantesCTASection />

        {/* LOCALIZAÇÃO */}
        <AvaliacaoDiamantesLocation />

        {/* FAQ */}
        <AvaliacaoDiamantesFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}