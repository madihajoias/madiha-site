import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import JewelryCalculator from '../../../components/JewelryCalculator';

import CalculadoraJoiasHero from '../../../components/joias/CalculadoraJoiasHero';
import CalculadoraJoiasEntendaSection from '../../../components/joias/CalculadoraJoiasEntendaSection';
import CalculadoraJoiasResultadoSection from '../../../components/joias/CalculadoraJoiasResultadoSection';
import CalculadoraJoiasCotacaoSection from '../../../components/joias/CalculadoraJoiasCotacaoSection';
import CalculadoraJoiasMercadoSection from '../../../components/joias/CalculadoraJoiasMercadoSection';
import CalculadoraJoiasRoundSection from '../../../components/joias/CalculadoraJoiasRoundSection';
import CalculadoraJoiasComparativoSection from '../../../components/joias/CalculadoraJoiasComparativoSection';
import CalculadoraJoiasQuandoAvaliarSection from '../../../components/joias/CalculadoraJoiasQuandoAvaliarSection';
import CalculadoraJoiasCTASection from '../../../components/joias/CalculadoraJoiasCTASection';
import CalculadoraJoiasLocation from '../../../components/joias/CalculadoraJoiasLocation';
import CalculadoraJoiasFAQ from '../../../components/joias/CalculadoraJoiasFAQ';

import CompraJoiasMarcasTicker from '../../../components/joias/CompraJoiasMarcasTicker';
import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

export const metadata: Metadata = {
  title: 'Calculadora de Joias | Madiha Maison',

  description:
    'Use a Calculadora de Joias da Madiha Maison para obter uma estimativa inicial de ouro e diamantes com referências de mercado e informações fornecidas por você.',

  alternates: {
    canonical: '/joias/calculadora-de-joias/',
  },

  openGraph: {
    title: 'Calculadora de Joias | Madiha Maison',

    description:
      'Faça uma estimativa inicial da sua joia e entenda como ouro, diamantes, dólar e referências de mercado participam do cálculo.',

    type: 'website',

    locale: 'pt_BR',

    url: '/joias/calculadora-de-joias/',
  },
};

export default function CalculadoraDeJoiasPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F7F3EF]">
        <CalculadoraJoiasHero />

        <CalculadoraJoiasEntendaSection />

        <div id="calculadora-de-joias">
          <JewelryCalculator />
        </div>

        <CalculadoraJoiasResultadoSection />

        <CalculadoraJoiasCotacaoSection />

        <CalculadoraJoiasMercadoSection />

        <CalculadoraJoiasRoundSection />

        <CalculadoraJoiasComparativoSection />

        <CalculadoraJoiasQuandoAvaliarSection />

        <CompraJoiasMarcasTicker />

        <CalculadoraJoiasCTASection />

        <CalculadoraJoiasLocation />

        <CalculadoraJoiasFAQ />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}