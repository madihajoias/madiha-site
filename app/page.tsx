import HeroSection from '../components/HeroSection';
import CaptacaoSection from '../components/CaptacaoSection';
import VitrineSection from '../components/VitrineSection';
import LeilaoSection from '../components/LeilaoSection';
import FooterSection from '../components/FooterSection'; // <-- Importamos o Rodapé Final

export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* 1. Hero Section (Início) */}
      <HeroSection />

      {/* 2. Captação (Compro Ouro) */}
      <CaptacaoSection />

      {/* 3. A Vitrine de Joias e Revista Madiha Journal */}
      <VitrineSection />

      {/* 4. O Leilão Ao Vivo */}
      <LeilaoSection />

      {/* 5. Concierge, FAQ, Mapa e Rodapé Final */}
      <FooterSection />

    </main>
  );
}