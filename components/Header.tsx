'use client';

import { useState, useEffect } from 'react';
import { Menu, Search, MapPin, Phone, Heart } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // <-- Aqui está a variável que faltava!

  useEffect(() => {
    setMounted(true); // Avisa ao Next.js que a tela carregou e inicia a animação

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-[#F7F3EF]/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[90rem] mx-auto w-full px-8 py-8 flex items-center justify-between">
        
        {/* Lado Esquerdo: Menu e Pesquisa */}
        <div className="flex items-center gap-6">
          <button className="border-none outline-none bg-transparent text-gray-800 hover:text-[#D4AF37] transition-colors cursor-pointer">
            <Menu strokeWidth={1} size={24} />
          </button>
          <button className="hidden md:flex items-center gap-3 border-none outline-none bg-transparent text-gray-800 hover:text-[#D4AF37] transition-colors cursor-pointer">
            <Search strokeWidth={1} size={18} />
            <span className="text-[10px] uppercase tracking-widest mt-0.5">Pesquisar</span>
          </button>
        </div>

        {/* Centro: A Marca com o Efeito Despertar */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center cursor-pointer flex items-center">
          <h1 
            className={`font-serif uppercase transition-all duration-[2500ms] ease-out ${
              isScrolled ? 'text-[#580F1A]' : 'text-gray-900'
            } text-2xl md:text-[28px] font-normal ${
              mounted ? 'opacity-100 tracking-[0.15em]' : 'opacity-0 tracking-[0.05em]'
            }`}
          >
            Madiha Maison
          </h1>
        </div>

        {/* Lado Direito: Trio de Ícones VIP */}
        <div className="flex items-center gap-5">
          <button className="hidden md:flex border-none outline-none bg-transparent items-center gap-2 text-[10px] uppercase tracking-widest text-gray-800 hover:text-[#D4AF37] transition-colors mt-0.5 mr-2">
            BR - R$ &gt;
          </button>
          
          <button className="border-none outline-none bg-transparent text-gray-800 hover:text-[#D4AF37] transition-colors cursor-pointer">
            <MapPin strokeWidth={1} size={20} />
          </button>
          
          <button className="border-none outline-none bg-transparent text-gray-800 hover:text-[#D4AF37] transition-colors cursor-pointer">
            <Phone strokeWidth={1} size={20} />
          </button>
          
          <button className="border-none outline-none bg-transparent text-gray-800 hover:text-[#D4AF37] transition-colors cursor-pointer relative">
            <Heart strokeWidth={1} size={20} />
            <span className="absolute -top-1 -right-1 bg-[#580F1A] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center hidden">
              0
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}