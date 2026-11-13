import type { Metadata } from 'next';

import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

import AtendimentoHoraMarcadaHero from '@/components/servicos/AtendimentoHoraMarcadaHero';
import AtendimentoHoraMarcadaPilaresSection from '@/components/servicos/AtendimentoHoraMarcadaPilaresSection';
import AtendimentoHoraMarcadaEtapasSection from '@/components/servicos/AtendimentoHoraMarcadaEtapasSection';
import AtendimentoHoraMarcadaVogueSection from '@/components/servicos/AtendimentoHoraMarcadaVogueSection';
import AtendimentoHoraMarcadaPreparacaoSection from '@/components/servicos/AtendimentoHoraMarcadaPreparacaoSection';
import AtendimentoHoraMarcadaCTASection from '@/components/servicos/AtendimentoHoraMarcadaCTASection';
import AtendimentoHoraMarcadaLocation from '@/components/servicos/AtendimentoHoraMarcadaLocation';
import AtendimentoHoraMarcadaFAQ from '@/components/servicos/AtendimentoHoraMarcadaFAQ';

import CompraJoiasWhatsApp from '@/components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Atendimento com Hora Marcada na Barra da Tijuca | Madiha Maison',

  description:
    'Agende um atendimento com hora marcada na Madiha Maison, no Vogue Square, Barra da Tijuca. Avaliação presencial com segurança, privacidade, transparência e acompanhamento.',

  alternates: {
    canonical: '/servicos/atendimento-com-hora-marcada/',
  },

  openGraph: {
    title: 'Atendimento com Hora Marcada | Madiha Maison',
    description:
      'Atendimento presencial no Vogue Square com hora marcada, ambiente reservado e avaliação acompanhada.',
    type: 'website',
    locale: 'pt_BR',
    url: '/servicos/atendimento-com-hora-marcada/',
  },
};

export default function AtendimentoComHoraMarcadaPage() {
  return (
    <>
      {/* FUNDO DO HEADER */}
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

      <main>
        <AtendimentoHoraMarcadaHero />

        <AtendimentoHoraMarcadaPilaresSection />

        <AtendimentoHoraMarcadaEtapasSection />

        <AtendimentoHoraMarcadaVogueSection />

        <AtendimentoHoraMarcadaPreparacaoSection />

        <AtendimentoHoraMarcadaCTASection />

        <AtendimentoHoraMarcadaLocation />

        <AtendimentoHoraMarcadaFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}