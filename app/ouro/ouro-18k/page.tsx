import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import GoldCalculator from '../../../components/GoldCalculator';

import Ouro18kHero from '../../../components/ouro/Ouro18kHero';
import Ouro18kPurezaSection from '../../../components/ouro/Ouro18kPurezaSection';
import Ouro18kComposicaoSection from '../../../components/ouro/Ouro18kComposicaoSection';
import Ouro18kComparativoSection from '../../../components/ouro/Ouro18kComparativoSection';
import Ouro18kCotacaoSection from '../../../components/ouro/Ouro18kCotacaoSection';
import Ouro18kAvaliacaoSection from '../../../components/ouro/Ouro18kAvaliacaoSection';
import Ouro18kLocation from '../../../components/ouro/Ouro18kLocation';
import Ouro18kFAQ from '../../../components/ouro/Ouro18kFAQ';
import Ouro18kWhatsApp from '../../../components/ouro/Ouro18kWhatsApp';

export const metadata: Metadata = {
  title:
    'Ouro 18k: Preço, Valor por Grama e Pureza | Madiha Maison',

  description:
    'Entenda o que é ouro 18k, sua pureza de 75%, marcação 750, preço por grama, diferença para ouro 24k e como funciona a avaliação na Madiha Maison.',

  keywords: [
    'ouro 18k',
    'ouro 18 quilates',
    'ouro 750',
    'preço do ouro 18k',
    'valor do ouro 18k',
    'ouro 18k por grama',
    'cotação ouro 18k',
    'quanto vale ouro 18k',
    'ouro 18k é puro',
    'ouro 18k é bom',
    'diferença ouro 18k e 24k',
    'ouro amarelo 18k',
    'ouro branco 18k',
    'avaliar ouro 18k',
    'vender ouro 18k',
    'ouro 18k Rio de Janeiro',
    'ouro 18k Barra da Tijuca',
    'Madiha Maison',
    'Vogue Square',
  ],

  alternates: {
    canonical: '/ouro/ouro-18k',
  },

  openGraph: {
    title:
      'Ouro 18k: Preço, Pureza e Valor por Grama | Madiha Maison',

    description:
      'Consulte informações sobre ouro 18k, teor 750, valor por grama, composição, diferença para ouro 24k e avaliação técnica.',

    type: 'website',
    locale: 'pt_BR',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Ouro 18k: Preço e Valor por Grama | Madiha Maison',

    description:
      'Entenda o ouro 18k, consulte a cotação e calcule uma estimativa do valor com base no peso e teor.',
  },
};

export default function Ouro18kPage() {
  return (
    <>
      <Header />

      <main>
        <Ouro18kHero />

        <Ouro18kPurezaSection />

        <Ouro18kComposicaoSection />

        <Ouro18kComparativoSection />

        <Ouro18kCotacaoSection />

        <GoldCalculator />

        <Ouro18kAvaliacaoSection />

        <Ouro18kLocation />

        <Ouro18kFAQ />
      </main>

      <FooterSection />

      <Ouro18kWhatsApp />
    </>
  );
}