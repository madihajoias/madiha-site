import type { Metadata } from 'next';

import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

import AvaliacaoDomicilioHero from '@/components/servicos/AvaliacaoDomicilioHero';
import AvaliacaoDomicilioAtendimentoSection from '@/components/servicos/AvaliacaoDomicilioAtendimentoSection';
import AvaliacaoDomicilioProcessoSection from '@/components/servicos/AvaliacaoDomicilioProcessoSection';
import AvaliacaoDomicilioEspecialistaSection from '@/components/servicos/AvaliacaoDomicilioEspecialistaSection';
import AvaliacaoDomicilioSegurancaSection from '@/components/servicos/AvaliacaoDomicilioSegurancaSection';
import AvaliacaoDomicilioIndicacoesSection from '@/components/servicos/AvaliacaoDomicilioIndicacoesSection';
import AvaliacaoDomicilioCTASection from '@/components/servicos/AvaliacaoDomicilioCTASection';
import AvaliacaoDomicilioFAQ from '@/components/servicos/AvaliacaoDomicilioFAQ';

import CompraJoiasWhatsApp from '@/components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Avaliação de Joias em Domicílio no Rio de Janeiro | Madiha Maison',

  description:
    'Solicite avaliação de joias em domicílio no Rio de Janeiro. Atendimento reservado para joias, ouro e peças de valor, realizado por especialista com transparência e acompanhamento.',

  alternates: {
    canonical: '/servicos/avaliacao-em-domicilio/',
  },

  openGraph: {
    title: 'Avaliação de Joias em Domicílio | Madiha Maison',
    description:
      'Atendimento especializado para avaliação de joias e ouro em domicílio, com privacidade, acompanhamento e transparência.',
    type: 'website',
    locale: 'pt_BR',
    url: '/servicos/avaliacao-em-domicilio/',
  },
};

export default function AvaliacaoEmDomicilioPage() {
  return (
    <>
      {/* FUNDO FIXO DO HEADER */}
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
        <AvaliacaoDomicilioHero />

        <AvaliacaoDomicilioAtendimentoSection />

        <AvaliacaoDomicilioProcessoSection />

        <AvaliacaoDomicilioEspecialistaSection />

        <AvaliacaoDomicilioSegurancaSection />

        <AvaliacaoDomicilioIndicacoesSection />

        <AvaliacaoDomicilioCTASection />

        <AvaliacaoDomicilioFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}