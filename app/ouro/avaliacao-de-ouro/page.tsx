import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import GoldCalculator from '../../../components/GoldCalculator';

import AvaliacaoOuroHero from '../../../components/ouro/AvaliacaoOuroHero';
import AvaliacaoOuroProcessoSection from '../../../components/ouro/AvaliacaoOuroProcessoSection';
import AvaliacaoOuroCriteriosSection from '../../../components/ouro/AvaliacaoOuroCriteriosSection';
import AvaliacaoOuroAtendimentoSection from '../../../components/ouro/AvaliacaoOuroAtendimentoSection';
import AvaliacaoOuroLocation from '../../../components/ouro/AvaliacaoOuroLocation';
import AvaliacaoOuroFAQ from '../../../components/ouro/AvaliacaoOuroFAQ';
import AvaliacaoOuroWhatsApp from '../../../components/ouro/AvaliacaoOuroWhatsApp';

export const metadata: Metadata = {
  title:
    'Avaliação de Ouro no Rio de Janeiro | Madiha Maison',

  description:
    'Avaliação de ouro com análise técnica de peso, teor, composição e características da peça. Atendimento especializado no Vogue Square, Barra da Tijuca, Rio de Janeiro.',

  keywords: [
    'avaliação de ouro',
    'avaliador de ouro',
    'avaliação de ouro no Rio de Janeiro',
    'avaliação de ouro na Barra da Tijuca',
    'onde avaliar ouro',
    'como avaliar ouro',
    'quanto vale meu ouro',
    'avaliação de ouro 18k',
    'avaliação de ouro branco',
    'Madiha Maison',
    'Vogue Square',
  ],

  alternates: {
    canonical:
      '/ouro/avaliacao-de-ouro',
  },

  openGraph: {
    title:
      'Avaliação de Ouro no Rio de Janeiro | Madiha Maison',

    description:
      'Avalie seu ouro com análise técnica, clareza e atendimento especializado no Vogue Square, Barra da Tijuca.',

    type: 'website',

    locale: 'pt_BR',
  },

  twitter: {
    card:
      'summary_large_image',

    title:
      'Avaliação de Ouro no Rio de Janeiro | Madiha Maison',

    description:
      'Avaliação técnica de ouro no Vogue Square, Barra da Tijuca, com análise de peso, teor e características da peça.',
  },
};

export default function AvaliacaoDeOuroPage() {
  return (
    <>
      <Header />

      <main>
        <AvaliacaoOuroHero />

        <AvaliacaoOuroProcessoSection />

        <AvaliacaoOuroCriteriosSection />

        <GoldCalculator />

        <AvaliacaoOuroAtendimentoSection />

        <AvaliacaoOuroLocation />

        <AvaliacaoOuroFAQ />
      </main>

      <FooterSection />

      <AvaliacaoOuroWhatsApp />
    </>
  );
}