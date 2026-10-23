import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import GoldCalculator from '../../../components/GoldCalculator';

import LingotesBarrasHero from '../../../components/ouro/LingotesBarrasHero';
import LingotesBarrasCompraSection from '../../../components/ouro/LingotesBarrasCompraSection';
import LingotesBarrasAvaliacaoTecnicaSection from '../../../components/ouro/LingotesBarrasAvaliacaoTecnicaSection';
import LingotesBarrasPurezaSection from '../../../components/ouro/LingotesBarrasPurezaSection';
import LingotesBarrasCotacaoSection from '../../../components/ouro/LingotesBarrasCotacaoSection';
import LingotesBarrasSegurancaSection from '../../../components/ouro/LingotesBarrasSegurancaSection';
import LingotesBarrasLocation from '../../../components/ouro/LingotesBarrasLocation';
import LingotesBarrasFAQ from '../../../components/ouro/LingotesBarrasFAQ';
import LingotesBarrasWhatsApp from '../../../components/ouro/LingotesBarrasWhatsApp';

export const metadata: Metadata = {
  title:
    'Compra de Lingotes e Barras de Ouro no Rio de Janeiro | Madiha Maison',

  description:
    'Venda lingotes e barras de ouro com avaliação técnica na Madiha Maison. Utilizamos balança de precisão hidrostática, análise de peso, teor e pureza, com atendimento no Vogue Square.',

  keywords: [
    'compra de lingotes de ouro',
    'compra de barras de ouro',
    'onde vender lingote de ouro',
    'onde vender barra de ouro',
    'compro lingote de ouro',
    'compro barra de ouro',
    'vender lingote de ouro',
    'vender barra de ouro',
    'avaliação de lingote de ouro',
    'avaliação de barra de ouro',
    'preço do lingote de ouro',
    'valor da barra de ouro',
    'quanto vale um lingote de ouro',
    'lingote de ouro 24k',
    'barra de ouro 24k',
    'lingote ouro 999',
    'lingote ouro 999,9',
    'balança hidrostática ouro',
    'balança de precisão hidrostática',
    'compra de lingotes Rio de Janeiro',
    'compra de barras de ouro Rio de Janeiro',
    'vender lingote Barra da Tijuca',
    'Madiha Maison',
    'Vogue Square',
  ],

  alternates: {
    canonical: '/ouro/lingotes-e-barras',
  },

  openGraph: {
    title:
      'Compra de Lingotes e Barras de Ouro | Madiha Maison',

    description:
      'Avaliação técnica de lingotes e barras de ouro com conferência de peso, teor, pureza e balança de precisão hidrostática.',

    type: 'website',
    locale: 'pt_BR',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Compra de Lingotes e Barras de Ouro | Madiha Maison',

    description:
      'Venda seu lingote ou barra de ouro com avaliação técnica e atendimento reservado no Vogue Square.',
  },
};

export default function LingotesEBarrasPage() {
  return (
    <>
      <Header />

      <main>
        <LingotesBarrasHero />

        <LingotesBarrasCompraSection />

        <LingotesBarrasAvaliacaoTecnicaSection />

        <LingotesBarrasPurezaSection />

        <LingotesBarrasCotacaoSection />

        <GoldCalculator />

        <LingotesBarrasSegurancaSection />

        <LingotesBarrasLocation />

        <LingotesBarrasFAQ />
      </main>

      <FooterSection />

      <LingotesBarrasWhatsApp />
    </>
  );
}