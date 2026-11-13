import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';

import AvaliacaoOnlineHero from '../../../components/servicos/AvaliacaoOnlineHero';
import AvaliacaoOnlineComoFuncionaSection from '../../../components/servicos/AvaliacaoOnlineComoFuncionaSection';
import AvaliacaoOnlineTiposSection from '../../../components/servicos/AvaliacaoOnlineTiposSection';
import AvaliacaoOnlineFotosSection from '../../../components/servicos/AvaliacaoOnlineFotosSection';
import AvaliacaoOnlineLimitesSection from '../../../components/servicos/AvaliacaoOnlineLimitesSection';
import AvaliacaoOnlinePresencialSection from '../../../components/servicos/AvaliacaoOnlinePresencialSection';
import AvaliacaoOnlineCTASection from '../../../components/servicos/AvaliacaoOnlineCTASection';
import AvaliacaoOnlineLocation from '../../../components/servicos/AvaliacaoOnlineLocation';
import AvaliacaoOnlineFAQ from '../../../components/servicos/AvaliacaoOnlineFAQ';

import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Avaliação Online de Joias na Barra da Tijuca | Madiha Maison',

  description:
    'Solicite uma avaliação online de joias pela Madiha Maison. Envie fotos e informações pelo WhatsApp e receba uma orientação inicial antes da avaliação presencial.',

  alternates: {
    canonical: '/servicos/avaliacao-online/',
  },

  openGraph: {
    title: 'Avaliação Online de Joias | Madiha Maison',

    description:
      'Envie fotos de joias, diamantes, peças antigas, assinadas ou herdadas para uma análise inicial da Madiha Maison.',

    type: 'website',

    locale: 'pt_BR',

    url: '/servicos/avaliacao-online/',
  },
};

export default function AvaliacaoOnlinePage() {
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
        <AvaliacaoOnlineHero />

        <AvaliacaoOnlineComoFuncionaSection />

        <AvaliacaoOnlineTiposSection />

        <AvaliacaoOnlineFotosSection />

        <AvaliacaoOnlineLimitesSection />

        <AvaliacaoOnlinePresencialSection />

        <AvaliacaoOnlineCTASection />

        <AvaliacaoOnlineLocation />

        <AvaliacaoOnlineFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}