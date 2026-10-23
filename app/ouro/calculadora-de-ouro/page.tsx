import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import GoldCalculator from '../../../components/GoldCalculator';

import CalculadoraOuroHero from '../../../components/ouro/CalculadoraOuroHero';
import CalculadoraOuroComoUsarSection from '../../../components/ouro/CalculadoraOuroComoUsarSection';
import CalculadoraOuroResultadoSection from '../../../components/ouro/CalculadoraOuroResultadoSection';
import CalculadoraOuroTiposSection from '../../../components/ouro/CalculadoraOuroTiposSection';
import CalculadoraOuroLocation from '../../../components/ouro/CalculadoraOuroLocation';
import CalculadoraOuroFAQ from '../../../components/ouro/CalculadoraOuroFAQ';
import CalculadoraOuroWhatsApp from '../../../components/ouro/CalculadoraOuroWhatsApp';

export const metadata: Metadata = {
  title:
    'Calculadora de Ouro Online | Madiha Maison',

  description:
    'Use a calculadora de ouro da Madiha Maison para estimar o valor do seu ouro por peso, teor e tipo. Simule ouro amarelo e ouro branco com cotação atualizada.',

  keywords: [
    'calculadora de ouro',
    'calculadora de ouro online',
    'calcular valor do ouro',
    'calculadora ouro 18k',
    'calculadora ouro 24k',
    'quanto vale meu ouro',
    'preço do ouro por grama',
    'calculadora de ouro branco',
    'calculadora de ouro amarelo',
    'calculadora de ouro Rio de Janeiro',
    'Madiha Maison',
    'Vogue Square',
  ],

  alternates: {
    canonical:
      '/ouro/calculadora-de-ouro',
  },

  openGraph: {
    title:
      'Calculadora de Ouro Online | Madiha Maison',

    description:
      'Calcule uma estimativa do valor do seu ouro com base no peso, teor, tipo do metal e cotação atualizada.',

    type: 'website',

    locale: 'pt_BR',
  },

  twitter: {
    card:
      'summary_large_image',

    title:
      'Calculadora de Ouro Online | Madiha Maison',

    description:
      'Simule o valor do ouro por peso, teor e tipo com a calculadora da Madiha Maison.',
  },
};

export default function CalculadoraDeOuroPage() {
  return (
    <>
      <Header />

      <main>
        <CalculadoraOuroHero />

        <GoldCalculator />

        <CalculadoraOuroComoUsarSection />

        <CalculadoraOuroResultadoSection />

        <CalculadoraOuroTiposSection />

        <CalculadoraOuroLocation />

        <CalculadoraOuroFAQ />
      </main>

      <FooterSection />

      <CalculadoraOuroWhatsApp />
    </>
  );
}