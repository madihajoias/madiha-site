import type { Metadata } from 'next';

import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

import AtendimentoVogueSquareHero from '@/components/servicos/AtendimentoVogueSquareHero';
import AtendimentoVogueSquareLocalizacaoSection from '@/components/servicos/AtendimentoVogueSquareLocalizacaoSection';
import AtendimentoVogueSquareMapaSection from '@/components/servicos/AtendimentoVogueSquareMapaSection';
import AtendimentoVogueSquareAtendimentoSection from '@/components/servicos/AtendimentoVogueSquareAtendimentoSection';
import AtendimentoVogueSquareCTASection from '@/components/servicos/AtendimentoVogueSquareCTASection';
import AtendimentoVogueSquareFAQ from '@/components/servicos/AtendimentoVogueSquareFAQ';

import CompraJoiasWhatsApp from '@/components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title:
    'Madiha Maison no Vogue Square | Barra da Tijuca, Rio de Janeiro',

  description:
    'Conheça a Madiha Maison no Vogue Square, na Barra da Tijuca. Atendimento especializado em joias, ouro e peças de valor em ambiente reservado, com fácil acesso e estrutura completa.',

  alternates: {
    canonical: '/servicos/atendimento-no-vogue-square/',
  },

  openGraph: {
    title: 'Madiha Maison no Vogue Square | Barra da Tijuca',
    description:
      'Atendimento especializado em joias no Vogue Square, Barra da Tijuca, Rio de Janeiro.',
    type: 'website',
    locale: 'pt_BR',
    url: '/servicos/atendimento-no-vogue-square/',
  },
};

export default function AtendimentoNoVogueSquarePage() {
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
        <AtendimentoVogueSquareHero />

        <AtendimentoVogueSquareLocalizacaoSection />

        <AtendimentoVogueSquareMapaSection />

        <AtendimentoVogueSquareAtendimentoSection />

        <AtendimentoVogueSquareCTASection />

        <AtendimentoVogueSquareFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}