import type { Metadata } from 'next';

import Header from '../../../components/Header';
import FooterSection from '../../../components/FooterSection';
import GoldCalculator from '../../../components/GoldCalculator';

import LojaOuroPertoHero from '../../../components/ouro/LojaOuroPertoHero';
import LojaOuroPertoLocalizacaoRapidaSection from '../../../components/ouro/LojaOuroPertoLocalizacaoRapidaSection';
import LojaOuroPertoServicosSection from '../../../components/ouro/LojaOuroPertoServicosSection';
import LojaOuroPertoAvaliacaoSection from '../../../components/ouro/LojaOuroPertoAvaliacaoSection';
import LojaOuroPertoSegurancaSection from '../../../components/ouro/LojaOuroPertoSegurancaSection';
import LojaOuroPertoRegioesSection from '../../../components/ouro/LojaOuroPertoRegioesSection';
import LojaOuroPertoFAQ from '../../../components/ouro/LojaOuroPertoFAQ';
import LojaOuroPertoWhatsApp from '../../../components/ouro/LojaOuroPertoWhatsApp';

export const metadata: Metadata = {
  title:
    'Loja de Ouro Perto de Mim na Barra da Tijuca | Madiha Maison',

  description:
    'Procurando uma loja de ouro perto de você? A Madiha Maison realiza avaliação e compra de ouro no Vogue Square, Barra da Tijuca, com atendimento reservado e avaliação técnica.',

  keywords: [
    'loja de ouro perto de mim',
    'loja de ouro próxima',
    'onde vender ouro perto de mim',
    'compra de ouro perto de mim',
    'quem compra ouro perto de mim',
    'avaliador de ouro perto de mim',
    'loja que compra ouro perto de mim',
    'loja de ouro Barra da Tijuca',
    'compra de ouro Barra da Tijuca',
    'vender ouro Barra da Tijuca',
    'onde vender ouro Barra da Tijuca',
    'avaliador de ouro Barra da Tijuca',
    'compra de ouro Av das Américas',
    'vender ouro Av das Américas',
    'loja de ouro Vogue Square',
    'compra de ouro Vogue Square',
    'vender ouro Vogue Square',
    'lugar seguro para vender ouro',
    'onde vender ouro no Rio de Janeiro',
    'compra de ouro Rio de Janeiro',
    'ouro 18k',
    'ouro 24k',
    'joias de ouro',
    'joias antigas',
    'Madiha Maison',
    'Vogue Square',
  ],

  alternates: {
    canonical: '/ouro/loja-de-ouro-perto-de-mim',
  },

  openGraph: {
    title:
      'Loja de Ouro Perto de Mim na Barra da Tijuca | Madiha Maison',

    description:
      'Avaliação e compra de ouro no Vogue Square, na Barra da Tijuca. Atendimento reservado, análise técnica e localização estratégica na Av. das Américas.',

    type: 'website',
    locale: 'pt_BR',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Loja de Ouro Perto de Mim | Madiha Maison',

    description:
      'Encontre a Madiha Maison no Vogue Square, Barra da Tijuca, para avaliação e venda de ouro com atendimento reservado.',
  },
};

export default function LojaDeOuroPertoDeMimPage() {
  return (
    <>
      <Header />

      <main>
        <LojaOuroPertoHero />

        <LojaOuroPertoLocalizacaoRapidaSection />

        <LojaOuroPertoServicosSection />

        <LojaOuroPertoAvaliacaoSection />

        <GoldCalculator />

        <LojaOuroPertoSegurancaSection />

        <LojaOuroPertoRegioesSection />

        <LojaOuroPertoFAQ />
      </main>

      <FooterSection />

      <LojaOuroPertoWhatsApp />
    </>
  );
}