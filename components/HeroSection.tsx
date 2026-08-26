export default function HeroSection() {
  return (
    // Fundo bege super claro para o menu transparente sumir nele
    <section className="relative w-full min-h-[90vh] bg-[#FAF8F5] flex items-center justify-center pt-24 overflow-hidden">
      
      <div className="max-w-[90rem] mx-auto w-full px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Lado Esquerdo - Espaço para a Joia (Igual a Borboleta) */}
        <div className="w-full md:w-1/2 flex justify-center relative">
           {/* Uma caixa de vidro temporária simulando a foto de uma joia */}
           <div className="w-[300px] h-[400px] md:w-[450px] md:h-[550px] rounded-[100px] bg-white shadow-xl flex items-center justify-center border border-[#D4AF37]/20 overflow-hidden relative">
              <span className="text-gray-400 font-serif italic absolute z-10">Imagem da Joia Aqui</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F7F3EF] to-white"></div>
           </div>
        </div>

        {/* Lado Direito - Textos Elegantes */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
          
          <h2 className="text-[#1A1A1A] text-4xl md:text-6xl font-serif mb-6 leading-tight">
            A Arte do Leilão <br className="hidden md:block" /> e da Avaliação
          </h2>
          
          <p className="text-gray-600 text-xs md:text-sm font-light tracking-[0.15em] uppercase mb-12 max-w-lg leading-relaxed">
            Transforme suas joias e ouro em capital com a segurança e discrição do Vogue Square.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="border-none outline-none px-6 py-3 border-b border-[#1A1A1A] text-[#1A1A1A] text-xs uppercase tracking-widest hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all cursor-pointer">
              Ver Leilão Atual
            </button>
            
            <button className="border-none outline-none px-6 py-3 border-b border-transparent text-gray-500 text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-all cursor-pointer">
              Avaliar Minha Joia
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}