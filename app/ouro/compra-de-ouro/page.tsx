import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import GoldCalculator from '../../../components/GoldCalculator';

import CompraOuroHero from '../../../components/ouro/CompraOuroHero';
import CompraOuroAvaliacaoSection from '../../../components/ouro/CompraOuroAvaliacaoSection';
import SegurancaCotacaoSection from '../../../components/ouro/SegurancaCotacaoSection';
import PagamentoAtendimentoSection from '../../../components/ouro/PagamentoAtendimentoSection';
import CompraOuroLocation from '../../../components/ouro/CompraOuroLocation';
import CompraOuroFAQ from '../../../components/ouro/CompraOuroFAQ';
import CompraOuroWhatsApp from '../../../components/ouro/CompraOuroWhatsApp';

export const metadata: Metadata = {
  title:
    'Compra de Ouro no Rio de Janeiro | Madiha Maison',

  description:
    'Compra de ouro com avaliação técnica, cotação atualizada, segurança, discrição e atendimento especializado no Vogue Square, Barra da Tijuca, Rio de Janeiro.',

  alternates: {
    canonical:
      '/ouro/compra-de-ouro',
  },

  openGraph: {
    title:
      'Compra de Ouro no Rio de Janeiro | Madiha Maison',

    description:
      'Venda seu ouro com avaliação técnica, segurança, cotação atualizada e atendimento especializado no Vogue Square.',

    type: 'website',

    locale: 'pt_BR',
  },
};

export default function CompraDeOuroPage() {
  return (
    <>
      <Header />

      <main>
        <CompraOuroHero />

        <CompraOuroAvaliacaoSection />

        <SegurancaCotacaoSection />

        <GoldCalculator />

        <PagamentoAtendimentoSection />

        <CompraOuroLocation />

        <CompraOuroFAQ />
      </main>

      <FooterSection />

      <CompraOuroWhatsApp />
    </>
  );
}