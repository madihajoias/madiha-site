import type { Metadata } from 'next';

import FooterSection from '../../../components/FooterSection';
import CompraJoiasWhatsApp from '../../../components/joias/CompraJoiasWhatsApp';

import RioJaneiroHero from '../../../components/localizacao/RioJaneiroHero';
import RioJaneiroServicosSection from '../../../components/localizacao/RioJaneiroServicosSection';
import RioJaneiroOuroSection from '../../../components/localizacao/RioJaneiroOuroSection';
import RioJaneiroJoiasSection from '../../../components/localizacao/RioJaneiroJoiasSection';
import RioJaneiroDiamantesSection from '../../../components/localizacao/RioJaneiroDiamantesSection';
import RioJaneiroRelogiosSection from '../../../components/localizacao/RioJaneiroRelogiosSection';
import RioJaneiroBarraSection from '../../../components/localizacao/RioJaneiroBarraSection';
import RioJaneiroVogueSquareSection from '../../../components/localizacao/RioJaneiroVogueSquareSection';
import RioJaneiroMapaSection from '../../../components/localizacao/RioJaneiroMapaSection';
import RioJaneiroFAQ from '../../../components/localizacao/RioJaneiroFAQ';
import RioJaneiroFinalCTA from '../../../components/localizacao/RioJaneiroFinalCTA';

export const metadata: Metadata = {
  title: 'Joias, Ouro, Diamantes e Relógios no Rio de Janeiro | Madiha Maison',
  description:
    'Madiha Maison no Rio de Janeiro: atendimento especializado para ouro, avaliação de joias, diamantes e relógios de luxo. Atendimento presencial na Barra da Tijuca, no Vogue Square.',
  alternates: {
    canonical: '/localizacao/rio-de-janeiro/',
  },
  openGraph: {
    title:
      'Joias, Ouro, Diamantes e Relógios no Rio de Janeiro | Madiha Maison',
    description:
      'Atendimento especializado para ouro, joias, diamantes e relógios de luxo no Rio de Janeiro. Conheça a Madiha Maison na Barra da Tijuca, no Vogue Square.',
    type: 'website',
    locale: 'pt_BR',
    url: '/localizacao/rio-de-janeiro/',
  },
};

export default function RioDeJaneiroPage() {
  return (
    <>
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

      <main>
        <RioJaneiroHero />

        <RioJaneiroServicosSection />

        <RioJaneiroOuroSection />

        <RioJaneiroJoiasSection />

        <RioJaneiroDiamantesSection />

        <RioJaneiroRelogiosSection />

        <RioJaneiroBarraSection />

        <RioJaneiroVogueSquareSection />

        <RioJaneiroMapaSection />

        <RioJaneiroFAQ />

        <RioJaneiroFinalCTA />
      </main>

      <FooterSection />

      <CompraJoiasWhatsApp />
    </>
  );
}