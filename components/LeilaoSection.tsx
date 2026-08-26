'use client';

import { useState, useEffect } from 'react';

export default function LeilaoSection() {
  const [isBidding, setIsBidding] = useState(false);
  const [lanceValue, setLanceValue] = useState('');
  const [timeLeft, setTimeLeft] = useState({ horas: 4, minutos: 15, segundos: 30 });

  // Cronômetro
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.segundos > 0) return { ...prev, segundos: prev.segundos - 1 };
        if (prev.minutos > 0) return { ...prev, minutos: prev.minutos - 1, segundos: 59 };
        return { horas: prev.horas > 0 ? prev.horas - 1 : 0, minutos: 59, segundos: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleEnviarLance = () => {
    if (!lanceValue) return alert("Por favor, digite um valor para o seu lance.");
    const whatsappNumber = "5521993530012"; 
    const mensagem = `Olá, Madiha Maison! Estou acompanhando o leilão ao vivo e gostaria de registrar um lance no valor de R$ ${lanceValue} para o *Lote 01: Anel de Esmeralda*.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
    setIsBidding(false);
    setLanceValue('');
  };

  return (
    <section className="w-full min-h-[140vh] bg-[#5A1017] relative flex flex-col justify-center overflow-hidden font-sans pt-20">
      
      {/* =========================================
          LETREIRO SUPERIOR (TICKER) - MAIOR E EM DESTAQUE
          ========================================= */}
      <div className="absolute top-0 left-0 w-full overflow-hidden bg-black/20 backdrop-blur-md border-b border-[#F7F3F0]/10 py-6 flex items-center z-50">
        <div className="whitespace-nowrap animate-marquee flex items-center text-[#F7F3F0] text-[10px] uppercase tracking-[0.3em]">
          <span className="mx-4 font-semibold">Madiha Maison • Leilão Exclusivo</span>
          <span className="mx-4 text-[#F7F3F0]/30">•</span>
          <span className="mx-4">Lances sob rigoroso sigilo</span>
          <span className="mx-4 text-[#F7F3F0]/30">•</span>
          <span className="mx-4">Vogue Square, Rio de Janeiro</span>
          <span className="mx-4 text-[#F7F3F0]/30">•</span>
          <span className="mx-4">Próximo lote em breve</span>
          <span className="mx-4 text-[#F7F3F0]/30">•</span>
          <span className="mx-4 font-semibold">Madiha Maison • Leilão Exclusivo</span>
          <span className="mx-4 text-[#F7F3F0]/30">•</span>
          <span className="mx-4">Lances sob rigoroso sigilo</span>
          <span className="mx-4 text-[#F7F3F0]/30">•</span>
          <span className="mx-4">Vogue Square, Rio de Janeiro</span>
          <span className="mx-4 text-[#F7F3F0]/30">•</span>
          <span className="mx-4">Próximo lote em breve</span>
        </div>
      </div>

      {/* =========================================
          O EFEITO "MESH GRADIENT"
          ========================================= */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-[#7A1622] rounded-full mix-blend-screen filter blur-[120px] opacity-80 animate-blob"></div>
        <div className="absolute top-[20%] -right-[10%] w-[45vw] h-[45vw] bg-[#3B0A0F] rounded-full mix-blend-multiply filter blur-[120px] opacity-90 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[20%] left-[10%] w-[60vw] h-[60vw] bg-[#8B1A27] rounded-full mix-blend-screen filter blur-[150px] opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between relative z-10 h-full gap-16 md:gap-12 mt-8 md:mt-0">
        
        {/* =========================================
            LADO ESQUERDO: A JOIA COM MOLDURA ARREDONDADA
            ========================================= */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative mt-8 md:mt-0">
           
           <div className="relative animate-float">
             {/* Selo AO VIVO (Sobrepondo a moldura com elegância) */}
             <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white/10 backdrop-blur-md border border-[#F7F3F0]/20 px-5 py-2.5 rounded-full flex items-center gap-3 z-20 shadow-xl">
               <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
               </span>
               <span className="text-[#F7F3F0] text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5">Ao Vivo</span>
             </div>

             {/* MOLDURA: O "quadrado" agora é arredondado e corta as pontas da foto */}
             <div className="w-72 h-72 md:w-[450px] md:h-[450px] bg-white rounded-[2rem] overflow-hidden shadow-[0_40px_50px_rgba(0,0,0,0.4)] border border-[#F7F3F0]/10 flex items-center justify-center relative">
               <img 
                 src="/joias/anel-esmeralda-brilhantes.png" 
                 alt="Anel de Esmeralda" 
                 className="w-full h-full object-cover scale-110" 
                 /* O 'scale-110' aproxima um pouco a foto para garantir que o fundo branco cubra tudo */
               />
               <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] pointer-events-none"></div>
             </div>

             {/* Sombra da flutuação */}
             <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 md:w-56 h-3 bg-[#3B0A0F]/60 blur-xl rounded-full animate-shadow-pulse"></div>
           </div>
        </div>

        {/* =========================================
            LADO DIREITO: O PAINEL DE LANCES
            ========================================= */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          
          <h2 className="text-4xl md:text-5xl text-[#F7F3F0] font-serif mb-4 leading-tight drop-shadow-md">
            Lote 01:<br/>Anel de Esmeralda
          </h2>
          <p className="text-[#F7F3F0]/70 font-light tracking-wide mb-10 text-sm md:text-base max-w-sm">
            Ouro branco, Brilhante e Esmeralda. Peça em exibição ao vivo. Lances sujeitos a aprovação da curadoria.
          </p>

          <div className="flex gap-6 md:gap-8 mb-12 justify-center md:justify-start w-full">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-serif text-[#F7F3F0]">{String(timeLeft.horas).padStart(2, '0')}</span>
              <span className="text-[9px] uppercase tracking-widest text-[#F7F3F0]/50 mt-2">Horas</span>
            </div>
            <span className="text-3xl md:text-4xl font-serif text-[#F7F3F0]/30">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-serif text-[#F7F3F0]">{String(timeLeft.minutos).padStart(2, '0')}</span>
              <span className="text-[9px] uppercase tracking-widest text-[#F7F3F0]/50 mt-2">Minutos</span>
            </div>
            <span className="text-3xl md:text-4xl font-serif text-[#F7F3F0]/30">:</span>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-serif w-12 text-center text-[#F7F3F0]">{String(timeLeft.segundos).padStart(2, '0')}</span>
              <span className="text-[9px] uppercase tracking-widest text-[#F7F3F0]/50 mt-2">Segundos</span>
            </div>
          </div>

          <div className="bg-white/5 p-8 w-full max-w-md backdrop-blur-2xl rounded-[2rem] border border-[#F7F3F0]/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
            <p className="text-[10px] uppercase tracking-widest text-[#F7F3F0]/60 mb-2 font-medium">Lance Atual</p>
            <p className="text-3xl font-serif text-[#F7F3F0] mb-8">R$ 45.000,00</p>

            <div className="relative min-h-[55px] overflow-visible">
              <button 
                onClick={() => setIsBidding(true)}
                className={`absolute inset-0 w-full bg-[#F7F3F0] text-[#5A1017] rounded-full py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ease-in-out hover:bg-white hover:shadow-[0_0_20px_rgba(247,243,240,0.4)]
                  ${isBidding ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}
                `}
              >
                Habilitar Lance &rarr;
              </button>

              <div 
                className={`absolute top-0 left-0 w-full flex flex-col gap-4 transition-all duration-500 ease-in-out
                  ${isBidding ? 'opacity-100 translate-y-0 relative' : 'opacity-0 -translate-y-4 pointer-events-none absolute'}
                `}
              >
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#F7F3F0]/50 font-serif">R$</span>
                  <input 
                    type="text" 
                    placeholder="Ex: 50.000,00"
                    value={lanceValue}
                    onChange={(e) => setLanceValue(e.target.value)}
                    className="w-full bg-black/20 border border-[#F7F3F0]/20 rounded-full text-[#F7F3F0] px-14 py-4 text-lg font-serif outline-none focus:border-[#F7F3F0]/60 transition-colors placeholder:text-[#F7F3F0]/30"
                  />
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setIsBidding(false)} className="px-6 rounded-full text-[10px] text-[#F7F3F0]/60 hover:text-white uppercase tracking-widest transition-colors">
                    Cancelar
                  </button>
                  <button onClick={handleEnviarLance} className="flex-1 bg-[#F7F3F0] text-[#5A1017] rounded-full py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                    Confirmar
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 15s infinite alternate ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes shadow-pulse {
          0% { transform: translateX(-50%) scale(1); opacity: 0.6; }
          50% { transform: translateX(-50%) scale(0.8); opacity: 0.2; }
          100% { transform: translateX(-50%) scale(1); opacity: 0.6; }
        }
        .animate-shadow-pulse { animation: shadow-pulse 6s ease-in-out infinite; }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 25s linear infinite; }
      `}} />
    </section>
  );
}