import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import GoldCalculator from '../../../components/GoldCalculator';

import CotacaoOuroHero from '../../../components/ouro/CotacaoOuroHero';
import CotacaoOuroFormacaoSection from '../../../components/ouro/CotacaoOuroFormacaoSection';
import CotacaoOuroTeoresSection from '../../../components/ouro/CotacaoOuroTeoresSection';
import CotacaoOuroMercadoSection from '../../../components/ouro/CotacaoOuroMercadoSection';
import CotacaoOuroLocation from '../../../components/ouro/CotacaoOuroLocation';
import CotacaoOuroFAQ from '../../../components/ouro/CotacaoOuroFAQ';
import CotacaoOuroWhatsApp from '../../../components/ouro/CotacaoOuroWhatsApp';

export const metadata: Metadata = {
  title:
    'Cotação do Ouro Hoje no Rio de Janeiro | Madiha Maison',

  description:
    'Consulte a cotação do ouro hoje, preço por grama e valores por teor. Referências para ouro 24k, 22k, 18k, 14k e outros, com atendimento no Vogue Square, Barra da Tijuca.',

  keywords: [
    'cotação do ouro',
    'cotação do ouro hoje',
    'preço do ouro hoje',
    'preço do grama do ouro',
    'quanto vale o grama do ouro',
    'cotação do ouro 24k',
    'cotação do ouro 22k',
    'cotação do ouro 18k',
    'cotação do ouro 14k',
    'preço do ouro no Rio de Janeiro',
    'cotação do ouro Barra da Tijuca',
    'Madiha Maison',
    'Vogue Square',
  ],

  alternates: {
    canonical:
      '/ouro/cotacao-do-ouro',
  },

  openGraph: {
    title:
      'Cotação do Ouro Hoje no Rio de Janeiro | Madiha Maison',

    description:
      'Acompanhe a cotação do ouro por grama e por teor, com referências de mercado e valor comercial atualizado.',

    type: 'website',

    locale: 'pt_BR',
  },

  twitter: {
    card:
      'summary_large_image',

    title:
      'Cotação do Ouro Hoje | Madiha Maison',

    description:
      'Consulte o preço do ouro por grama e por teor, com referência de mercado e valor comercial.',
  },
};

export default function CotacaoDoOuroPage() {
  return (
    <>
      <Header />

      <main>
        <CotacaoOuroHero />

        <CotacaoOuroFormacaoSection />

        <CotacaoOuroTeoresSection />

        <GoldCalculator />

        <CotacaoOuroMercadoSection />

        <CotacaoOuroLocation />

        <CotacaoOuroFAQ />
      </main>

      <FooterSection />

      <CotacaoOuroWhatsApp />
    </>
  );
}