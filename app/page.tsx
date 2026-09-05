import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CaptacaoSection from '../components/CaptacaoSection';
import VitrineSection from '../components/VitrineSection';
import GoldCalculator from '../components/GoldCalculator';
import LeilaoSection from '../components/LeilaoSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 0. Cabeçalho com a borboleta */}
      <Header />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Captação */}
      <CaptacaoSection />

      {/* 3. Vitrine de Joias e Madiha Journal */}
      <VitrineSection />

      {/* 4. Calculadora de Ouro */}
      <GoldCalculator />

      {/* 5. Leilão Ao Vivo */}
      <LeilaoSection />

      {/* 6. Concierge, FAQ, Mapa e Rodapé */}
      <FooterSection />
    </main>
  );
}