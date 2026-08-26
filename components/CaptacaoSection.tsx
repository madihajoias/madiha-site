export default function CaptacaoSection() {
  return (
    <section className="w-full min-h-[140vh] flex flex-col md:flex-row bg-[#F7F3EF]">
      
      {/* Lado Esquerdo: Textos da Avaliação */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center px-12 py-24 md:px-20 lg:px-32">
        
        <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-semibold mb-8">
          Avaliação Profissional
        </span>
        
        <h2 className="text-[#580F1A] text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-snug">
          Compro Ouro, Joias <br /> e Joias de Grife
        </h2>
        
        <p className="text-gray-600 text-sm font-light leading-relaxed mb-12 max-w-md">
          No ambiente seguro e sofisticado do Vogue Square, nossos especialistas realizam avaliações precisas de suas peças. Transforme seu patrimônio em capital com a melhor cotação do mercado, garantindo absoluta discrição.
        </p>

        <button className="border border-[#1A1A1A] px-10 py-4 text-[10px] uppercase tracking-[0.2em] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 cursor-pointer">
          Agendar Atendimento
        </button>

      </div>

      {/* Lado Direito: A SUA IMAGEM DE ALTO LUXO */}
      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/avaliacao.png')" }} 
        >
          {/* Mantive a máscara sutil de vinho para harmonizar a foto com o lado esquerdo */}
          <div className="absolute inset-0 bg-[#580F1A]/5 mix-blend-multiply"></div>
        </div>
      </div>

    </section>
  );
}