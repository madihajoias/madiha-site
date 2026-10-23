import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import GoldCalculator from '../../../components/GoldCalculator';

import Ouro24kHero from '../../../components/ouro/Ouro24kHero';
import Ouro24kPurezaSection from '../../../components/ouro/Ouro24kPurezaSection';
import Ouro24kComparativoSection from '../../../components/ouro/Ouro24kComparativoSection';
import Ouro24kCotacaoSection from '../../../components/ouro/Ouro24kCotacaoSection';
import Ouro24kAvaliacaoSection from '../../../components/ouro/Ouro24kAvaliacaoSection';
import Ouro24kLocation from '../../../components/ouro/Ouro24kLocation';
import Ouro24kFAQ from '../../../components/ouro/Ouro24kFAQ';
import Ouro24kWhatsApp from '../../../components/ouro/Ouro24kWhatsApp';

export const metadata: Metadata = {
  title:
    'Ouro 24k: Preço, Pureza e Valor por Grama | Madiha Maison',

  description:
    'Entenda o que é ouro 24k, sua pureza, preço por grama, diferença para ouro 18k e como funciona a avaliação. Consulte cotação e calcule o valor do ouro.',

  keywords: [
    'ouro 24k',
    'ouro 24 quilates',
    'preço do ouro 24k',
    'valor do ouro 24k',
    'ouro 24k por grama',
    'cotação ouro 24k',
    'quanto vale ouro 24k',
    'ouro 24k é puro',
    'diferença ouro 24k e 18k',
    'avaliar ouro 24k',
    'vender ouro 24k',
    'ouro 24k Rio de Janeiro',
    'ouro 24k Barra da Tijuca',
    'Madiha Maison',
    'Vogue Square',
  ],

  alternates: {
    canonical: '/ouro/ouro-24k',
  },

  openGraph: {
    title:
      'Ouro 24k: Preço, Pureza e Valor por Grama | Madiha Maison',

    description:
      'Consulte informações sobre ouro 24k, cotação por grama, pureza, comparação com ouro 18k e avaliação técnica.',

    type: 'website',

    locale: 'pt_BR',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Ouro 24k: Preço e Valor por Grama | Madiha Maison',

    description:
      'Entenda o ouro 24k, consulte a cotação e calcule uma estimativa do valor por peso e teor.',
  },
};

export default function Ouro24kPage() {
  return (
    <>
      <Header />

      <main>
        <Ouro24kHero />

        <Ouro24kPurezaSection />

        <Ouro24kComparativoSection />

        <Ouro24kCotacaoSection />

        <GoldCalculator />

        <Ouro24kAvaliacaoSection />

        <Ouro24kLocation />

        <Ouro24kFAQ />
      </main>

      <FooterSection />

      <Ouro24kWhatsApp />
    </>
  );
}