'use client';

import { useState, useEffect } from 'react';

// ==========================================
// 1. DADOS DAS JOIAS (Lado Esquerdo)
// ==========================================
const joias = [
  { id: 0, titulo: "Anel Borboleta", material: "Ouro amarelo, Brilhantes", preco: "R$ 15.000,00", imagem: "/joias/anel-borboleta.png" },
  { id: 1, titulo: "Anel Cobra", material: "Ouro Amarelo, Pedra Preciosa, Diamante Marrom", preco: "R$ 16.000,00", imagem: "/joias/anel-cobra-brilhantes.png" },
  { id: 2, titulo: "Anel Solitário Brilhante", material: "Ouro Branco e Brilhante", preco: "VENDIDO", imagem: "/joias/anel-diamante.jpg" },
  { id: 3, titulo: "Anel de Esmeralda", material: "Ouro branco, Brilhante e Esmeralda", preco: "LEILOADO", imagem: "/joias/anel-esmeralda-brilhantes.png" },
  { id: 4, titulo: "Colar Borboleta de Brilhantes", material: "Ouro amarelo e Brilhantes", preco: "Sob Consulta", imagem: "/joias/colar-borboleta-brilhantes.jpg" },
  { id: 5, titulo: "Colar Coração de Esmeralda", material: "Ouro Amarelo e Esmeralda Colombiana", preco: "Sob Consulta", imagem: "/joias/colar-coracoes.png" },
  { id: 6, titulo: "Par de Brincos Safira", material: "Ouro Amarelo, Brilhantes e Safira", preco: "EM BREVE", imagem: "/joias/par-de-brincos.png" }
];

// ==========================================
// 2. O MAPA DO LIVRO (As suas 8 Imagens!)
// ==========================================
const paginasRevista = [
  // FOLHA 0
  {
    id: 0,
    frente: { tipo: 'capa', imagem: '/revista/simples-1.jpg' }, 
    verso: { tipo: 'simples', imagem: '/revista/simples-2.jpg' } 
  },
  // FOLHA 1
  {
    id: 1,
    frente: { tipo: 'simples', imagem: '/revista/simples-3.jpg' }, 
    verso: { tipo: 'dupla-esq', imagem: '/revista/dupla-1.jpg' } 
  },
  // FOLHA 2
  {
    id: 2,
    frente: { tipo: 'dupla-dir', imagem: '/revista/dupla-1.jpg' }, 
    verso: { tipo: 'simples', imagem: '/revista/simples-4.jpg' } 
  },
  // FOLHA 3
  {
    id: 3,
    frente: { tipo: 'texto', imagem: '' }, 
    verso: { tipo: 'dupla-esq', imagem: '/revista/dupla-2.jpg' } 
  },
  // FOLHA 4
  {
    id: 4,
    frente: { tipo: 'dupla-dir', imagem: '/revista/dupla-2.jpg' }, 
    verso: { tipo: 'dupla-esq', imagem: '/revista/dupla-3.jpg' } 
  },
  // FOLHA 5
  {
    id: 5,
    frente: { tipo: 'dupla-dir', imagem: '/revista/dupla-3.jpg' }, 
    verso: { tipo: 'contracapa', imagem: '/revista/simples-5.jpg' } 
  }
];

export default function VitrineSection() {
  const [joiaAtiva, setJoiaAtiva] = useState(0);
  
  const [step, setStep] = useState(0);
  const totalSteps = paginasRevista.length + 1;

  // Cronômetro da Revista
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((atual) => (atual + 1) % totalSteps);
    }, 4500);
    return () => clearInterval(timer);
  }, [totalSteps]);

  const getWrapperTransform = () => {
    if (step === 0) return 'translateX(-25%) scale(1)';
    if (step > 0 && step < totalSteps - 1) return 'translateX(0%) scale(0.85)';
    if (step === totalSteps - 1) return 'translateX(25%) scale(1)';
    return 'translateX(-25%) scale(1)';
  };

  // ==========================================
  // MOTOR DE RENDERIZAÇÃO (Com Bookending)
  // ==========================================
  const renderConteudo = (dados: { tipo: string, imagem: string }, isFrente: boolean) => {
    const sombra = isFrente ? "inset 15px 0 30px -15px rgba(0,0,0,0.4)" : "inset -15px 0 30px -15px rgba(0,0,0,0.4)";

    // A Nova Página de Texto Editorial
    if (dados.tipo === 'texto') {
      return (
        <div className="w-full h-full bg-[#F7F3EF] flex items-center justify-center p-8 relative">
          <div className="text-center z-10">
            <h4 className="text-xl font-serif text-[#580F1A] mb-4 tracking-widest">MADIHA MAISON</h4>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-4"></div>
            <p className="text-[9px] text-gray-500 uppercase tracking-widest leading-relaxed">
              Alta Joalheria<br/>Vogue Square
            </p>
          </div>
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: sombra }}></div>
        </div>
      );
    }

    // Capa, Contracapa e Simples
    if (dados.tipo === 'capa' || dados.tipo === 'contracapa' || dados.tipo === 'simples') {
      return (
        <div className="w-full h-full relative bg-white flex flex-col">
          
          {/* BARRA DA CAPA (Topo) */}
          {dados.tipo === 'capa' && (
            <div className="absolute top-0 left-0 w-full p-4 border-b border-gray-100 flex justify-between z-20 bg-white">
              <span className="text-[10px] uppercase text-gray-400 font-semibold tracking-widest">2026</span>
              <span className="text-[10px] text-[#580F1A] font-serif uppercase tracking-[0.2em] font-bold">Madiha Maison</span>
            </div>
          )}

          <img src={dados.imagem} className="w-full h-full object-cover absolute inset-0 z-0" />
          
          {/* BARRA DA CONTRACAPA (Base) */}
          {dados.tipo === 'contracapa' && (
            <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-100 flex justify-between z-20 bg-white">
              <span className="text-[10px] uppercase text-gray-400 font-semibold tracking-widest">Barra da Tijuca</span>
              <span className="text-[10px] text-[#580F1A] font-serif uppercase tracking-[0.2em] font-bold">Vogue Square</span>
            </div>
          )}

          <div className="absolute inset-0 pointer-events-none z-10" style={{ boxShadow: sombra }}></div>
        </div>
      );
    }

    // Dupla Esquerda
    if (dados.tipo === 'dupla-esq') {
      return (
        <div className="w-full h-full relative bg-white">
          <img src={dados.imagem} className="w-full h-full object-cover object-left" />
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: sombra }}></div>
        </div>
      );
    }
    
    // Dupla Direita
    if (dados.tipo === 'dupla-dir') {
      return (
        <div className="w-full h-full relative bg-white">
          <img src={dados.imagem} className="w-full h-full object-cover object-right" />
          <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: sombra }}></div>
        </div>
      );
    }
  };

  return (
    <section className="w-full min-h-[140vh] flex flex-col md:flex-row bg-[#F7F3EF]">
      
      {/* Lado Esquerdo: Vitrine */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-24 relative z-10">
        <div className="w-64 h-64 md:w-80 md:h-80 mb-16 relative flex items-center justify-center">
          <img 
            src={joias[joiaAtiva].imagem} 
            alt={joias[joiaAtiva].titulo}
            className="w-full h-full object-contain drop-shadow-2xl transition-opacity duration-500 hover:scale-105"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599643478524-fb66f7cecb66?q=80&w=500'; }}
          />
        </div>
        <div className="text-center min-h-[120px]">
          <h3 className="text-[#1A1A1A] text-xl md:text-2xl font-serif mb-3 transition-all duration-500">{joias[joiaAtiva].titulo}</h3>
          <p className="text-gray-500 text-xs md:text-sm font-light mb-4 uppercase tracking-wider">{joias[joiaAtiva].material}</p>
          <p className="text-[#580F1A] text-sm tracking-widest font-semibold">{joias[joiaAtiva].preco}</p>
        </div>
        <div className="flex items-center gap-3 mt-12">
          {joias.map((_, index) => (
            <button key={index} onClick={() => setJoiaAtiva(index)} className={`rounded-full transition-all duration-300 ${joiaAtiva === index ? 'w-2 h-2 bg-[#580F1A]' : 'w-1.5 h-1.5 bg-gray-300'}`} />
          ))}
        </div>
      </div>

      {/* Lado Direito: Revista */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#EAE6DF] min-h-[50vh] md:min-h-full overflow-hidden relative cursor-pointer" onClick={() => setStep((s) => (s + 1) % totalSteps)}>
        <div className="relative w-[500px] h-[350px] md:w-[600px] md:h-[420px]" style={{ perspective: '2200px' }}>
          
          <div className="w-full h-full absolute top-0 left-0 transition-transform duration-1000 ease-in-out" style={{ transform: getWrapperTransform(), transformStyle: 'preserve-3d' }}>
            
            {paginasRevista.map((folha, idx) => {
              const isTurned = step > idx;
              const zIndex = isTurned ? idx : paginasRevista.length - idx; 

              return (
                <div 
                  key={folha.id}
                  className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-1000 ease-in-out origin-left shadow-2xl"
                  style={{ transform: isTurned ? 'rotateY(-180deg)' : 'rotateY(0deg)', transformStyle: 'preserve-3d', zIndex: zIndex }}
                >
                  <div className="absolute inset-0 backface-hidden bg-white">
                    {renderConteudo(folha.frente, true)}
                  </div>
                  <div className="absolute inset-0 backface-hidden bg-[#EAE6DF]" style={{ transform: 'rotateY(180deg)' }}>
                    {renderConteudo(folha.verso, false)}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: `.backface-hidden { -webkit-backface-visibility: hidden; backface-visibility: hidden; }`}} />
      </div>

    </section>
  );
}