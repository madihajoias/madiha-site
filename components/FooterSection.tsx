'use client';

import { useState } from 'react';

// ==========================================
// 1. AS 10 PERGUNTAS FREQUENTES
// ==========================================
const faqs = [
  {
    pergunta: "Como funciona a avaliação de joias e ouro?",
    resposta: "Nossa avaliação é feita de forma totalmente sigilosa no Vogue Square. Utilizamos tecnologia de ponta e expertise de gemologistas para garantir a cotação mais justa do mercado internacional."
  },
  {
    pergunta: "Quais tipos de peças a Madiha Maison compra?",
    resposta: "Temos foco em alta joalheria, peças assinadas (Cartier, Bulgari, Rolex, Patek Philippe), diamantes, moedas de ouro e ouro 18k a 24k."
  },
  {
    pergunta: "O sigilo das minhas transações é garantido?",
    resposta: "Absolutamente. A Madiha Maison opera sob rigorosos protocolos de confidencialidade. Suas informações pessoais e peças avaliadas jamais são expostas."
  },
  {
    pergunta: "A avaliação para venda tem algum custo?",
    resposta: "Não. Nossa avaliação patrimonial é uma cortesia da Maison, feita sem compromisso para que você tome a melhor decisão sobre o seu ativo."
  },
  {
    pergunta: "Como é feito o pagamento no 'Compro Ouro' e Joias?",
    resposta: "Para garantir a sua segurança e discrição, o pagamento da compra é realizado imediatamente à vista, via transferência bancária (TED ou PIX) no ato do fechamento."
  },
  {
    pergunta: "Qual a diferença entre Venda Direta e Leilão de Joias?",
    resposta: "Na Venda Direta (Compro Joias), o pagamento é imediato. No Leilão, sua peça é exposta a uma carteira de investidores VIPs, o que pode gerar uma rentabilidade maior, porém com um prazo de liquidação do lote."
  },
  {
    pergunta: "Como me habilito para os Leilões ao Vivo?",
    resposta: "Basta clicar em 'Habilitar Lance' na peça desejada. Nossa equipe de curadoria entrará em contato via WhatsApp para finalizar seu cadastro VIP."
  },
  {
    pergunta: "É possível fazer uma pré-avaliação online?",
    resposta: "Sim. Você pode enviar fotos e detalhes das suas peças pelo nosso WhatsApp Concierge para uma análise prévia antes de agendar sua visita à Barra da Tijuca."
  },
  {
    pergunta: "Vocês emitem certificado de autenticidade?",
    resposta: "Sim. Todas as peças arrematadas na Madiha Maison acompanham um laudo gemológico detalhado e nosso certificado de garantia."
  },
  {
    pergunta: "Preciso agendar horário para o atendimento?",
    resposta: "Sim. Para garantir a segurança e a exclusividade do seu atendimento na nossa sala VIP no Vogue Square, recebemos nossos clientes apenas com horário marcado."
  }
];

// ==========================================
// 2. OS MENUS EXPANSÍVEIS DO RODAPÉ
// ==========================================
const menusRodape = [
  { titulo: "Compro Ouro", links: ["Cotação do Ouro", "Ouro 18k e 24k", "Moedas e Barras"] },
  { titulo: "Compro Joias", links: ["Diamantes", "Joias Assinadas", "Alta Relojoaria"] },
  { titulo: "Avaliação de Joias", links: ["Agendar Atendimento", "Avaliação Online", "Inventários e Heranças"] },
  { titulo: "Leilão de Joias", links: ["Lotes Atuais", "Como Dar Lance", "Resultados Anteriores"] },
  { titulo: "Blog!", links: ["Guia de Diamantes", "Cuidados com Ouro", "Notícias do Mercado"] },
  { titulo: "Contato", links: ["Falar com Concierge", "Agendar Visita", "Ouvidoria"] },
  { titulo: "Redes Sociais", links: ["Instagram", "LinkedIn", "YouTube"] }
];

export default function FooterSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); 
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleMenu = (index: number) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <footer className="w-full flex flex-col font-sans">
      
      {/* PARTE 1: FAQ E MAPA */}
      <div className="w-full bg-[#F7F3F0] py-24 md:py-32 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 flex flex-col">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Concierge Madiha</h3>
            <h2 className="text-3xl md:text-4xl text-[#5A1017] font-serif mb-10">Perguntas Frequentes</h2>
            
            <div className="flex flex-col gap-2">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border-b border-[#5A1017]/10 pb-2 cursor-pointer group"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center py-4">
                    <h4 className={`text-sm md:text-base font-serif transition-colors duration-300 pr-4 ${openFaq === index ? 'text-[#5A1017]' : 'text-gray-700 group-hover:text-[#5A1017]'}`}>
                      {faq.pergunta}
                    </h4>
                    <span className="text-[#5A1017] text-xl font-light transform transition-transform duration-300">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </div>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-sm text-gray-500 font-light leading-relaxed pb-4 pr-8">
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col sticky top-10 h-fit">
            <div className="bg-white p-8 md:p-10 shadow-2xl rounded-2xl border border-gray-100 flex flex-col relative overflow-hidden">
              
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#5A1017] font-bold mb-6">Nosso Endereço</h3>
              
              <p className="text-2xl font-serif text-[#1A1A1A] mb-2">Vogue Square</p>
              <p className="text-sm text-gray-500 font-light mb-8">
                Av. das Américas, 8585 - Barra da Tijuca<br/>
                Rio de Janeiro - RJ, Brasil
              </p>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest text-gray-400 mb-2">Atendimento VIP</h4>
                  <p className="text-sm text-gray-700 font-light">Seg - Sex: 10h às 19h<br/>Somente com hora marcada</p>
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-widest text-gray-400 mb-2">Contato</h4>
                  <p className="text-sm text-gray-700 font-light">+55 (21) 99353-0012<br/>concierge@madihamaison.com</p>
                </div>
              </div>

              <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden relative">
                <iframe 
                  src="https://maps.google.com/maps?q=Vogue%20Square,%20Barra%20da%20Tijuca,%20Rio%20de%20Janeiro&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) contrast(1.1) opacity(0.8)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa Vogue Square"
                ></iframe>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* PARTE 2: RODAPÉ ABSOLUTO */}
      <div className="w-full bg-[#5A1017] text-[#F7F3F0] pt-20 pb-8 border-t border-[#F7F3F0]/20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col">
          
          {/* TÍTULO + ENDEREÇO (Com Animação) */}
          <div className="text-center md:text-left mb-16 animate-reveal">
            <h2 className="text-2xl md:text-3xl font-serif tracking-widest uppercase text-[#F7F3F0] mb-3">
              MADIHA MAISON
            </h2>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-light mb-4">
              Leilão de Joias e Ouro • Compra e Venda de Joias
            </p>
            {/* O NOVO TEXTO DE SEO LOCAL */}
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#F7F3F0]/60 font-light leading-relaxed">
              Vogue Square - Av. das Américas, 8585<br className="md:hidden" />
              Barra da Tijuca, Rio de Janeiro - RJ<br className="md:hidden" />
              CEP: 22793-081
            </p>
          </div>

          {/* MENUS EXPANSÍVEIS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 mb-16 border-t border-b border-[#F7F3F0]/10 py-8">
            {menusRodape.map((menu, index) => (
              <div key={index} className="flex flex-col">
                <button 
                  onClick={() => toggleMenu(index)}
                  className="flex justify-between items-center py-3 w-full text-left group outline-none"
                >
                  <span className={`text-[11px] uppercase tracking-widest font-semibold transition-colors ${openMenu === index ? 'text-[#D4AF37]' : 'text-[#F7F3F0]/80 group-hover:text-white'}`}>
                    {menu.titulo}
                  </span>
                  <span className="text-[#F7F3F0]/50 text-lg lg:hidden">
                    {openMenu === index ? '−' : '+'}
                  </span>
                </button>
                
                <div 
                  className={`flex flex-col gap-3 overflow-hidden transition-all duration-500 ease-in-out lg:max-h-96 lg:opacity-100 ${
                    openMenu === index ? 'max-h-48 opacity-100 mt-2 mb-4' : 'max-h-0 opacity-0 lg:mt-2 lg:mb-4'
                  }`}
                >
                  {menu.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="text-[10px] uppercase tracking-wider text-[#F7F3F0]/50 hover:text-[#D4AF37] transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* COPYRIGHT FINAL */}
          <div className="flex flex-col md:flex-row justify-between items-center text-[9px] tracking-widest text-[#F7F3F0]/30 uppercase text-center md:text-left gap-4">
            <p>&copy; 2026 MADIHA MAISON. Todos os direitos reservados.</p>
            <p>Vogue Square • Barra da Tijuca • RJ</p>
          </div>

        </div>
      </div>

      {/* CSS das Animações */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUpReveal {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal {
          animation: fadeUpReveal 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}} />
    </footer>
  );
}