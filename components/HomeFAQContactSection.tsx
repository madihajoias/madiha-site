'use client';

import { useState } from 'react';

const faqs = [
  {
    pergunta: 'Como funciona a avaliação de joias e ouro?',
    resposta:
      'Nossa avaliação é feita de forma totalmente sigilosa no Vogue Square. Utilizamos tecnologia de ponta e expertise de gemologistas para garantir a cotação mais justa do mercado internacional.',
  },
  {
    pergunta: 'Quais tipos de peças a Madiha Maison compra?',
    resposta:
      'Temos foco em alta joalheria, peças assinadas (Cartier, Bulgari, Rolex, Patek Philippe), diamantes, moedas de ouro e ouro 18k a 24k.',
  },
  {
    pergunta: 'O sigilo das minhas transações é garantido?',
    resposta:
      'Absolutamente. A Madiha Maison opera sob rigorosos protocolos de confidencialidade. Suas informações pessoais e peças avaliadas jamais são expostas.',
  },
  {
    pergunta: 'A avaliação para venda tem algum custo?',
    resposta:
      'Não. Nossa avaliação patrimonial é uma cortesia da Maison, feita sem compromisso para que você tome a melhor decisão sobre o seu ativo.',
  },
  {
    pergunta: "Como é feito o pagamento no 'Compro Ouro' e Joias?",
    resposta:
      'Para garantir a sua segurança e discrição, o pagamento da compra é realizado imediatamente à vista, via transferência bancária (TED ou PIX) no ato do fechamento.',
  },
  {
    pergunta: 'Qual a diferença entre Venda Direta e Leilão de Joias?',
    resposta:
      'Na Venda Direta (Compro Joias), o pagamento é imediato. No Leilão, sua peça é exposta a uma carteira de investidores VIPs, o que pode gerar uma rentabilidade maior, porém com um prazo de liquidação do lote.',
  },
  {
    pergunta: 'Como me habilito para os Leilões ao Vivo?',
    resposta:
      "Basta clicar em 'Habilitar Lance' na peça desejada. Nossa equipe de curadoria entrará em contato via WhatsApp para finalizar seu cadastro VIP.",
  },
  {
    pergunta: 'É possível fazer uma pré-avaliação online?',
    resposta:
      'Sim. Você pode enviar fotos e detalhes das suas peças pelo nosso WhatsApp Concierge para uma análise prévia antes de agendar sua visita à Barra da Tijuca.',
  },
  {
    pergunta: 'Vocês emitem certificado de autenticidade?',
    resposta:
      'Sim. Todas as peças arrematadas na Madiha Maison acompanham um laudo gemológico detalhado e nosso certificado de garantia.',
  },
  {
    pergunta: 'Preciso agendar horário para o atendimento?',
    resposta:
      'Sim. Para garantir a segurança e a exclusividade do seu atendimento na nossa sala VIP no Vogue Square, recebemos nossos clientes apenas com horário marcado.',
  },
];

export default function HomeFAQContactSection() {
  const [openFaq, setOpenFaq] =
    useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(
      openFaq === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="home-faq-title"
      className="
        w-full
        border-t
        border-gray-200
        bg-[#F7F3F0]
        py-24
        md:py-32
      "
    >
      <div
        className="
          container
          mx-auto
          flex
          flex-col
          gap-16
          px-6
          lg:flex-row
          lg:gap-24
          lg:px-16
        "
      >
        {/* FAQ */}
        <div
          className="
            flex
            w-full
            flex-col
            lg:w-1/2
          "
        >
          <h3
            className="
              mb-4
              text-[10px]
              font-bold
              uppercase
              tracking-[0.3em]
              text-gray-400
            "
          >
            Concierge Madiha
          </h3>

          <h2
            id="home-faq-title"
            className="
              mb-10
              font-serif
              text-3xl
              text-[#5A1017]
              md:text-4xl
            "
          >
            Perguntas Frequentes
          </h2>

          <div className="flex flex-col gap-2">
            {faqs.map(
              (faq, index) => {
                const isOpen =
                  openFaq === index;

                return (
                  <div
                    key={faq.pergunta}
                    className="
                      group
                      cursor-pointer
                      border-b
                      border-[#5A1017]/10
                      pb-2
                    "
                    onClick={() =>
                      toggleFaq(index)
                    }
                  >
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        py-4
                      "
                    >
                      <h4
                        className={`
                          pr-4
                          font-serif
                          text-sm
                          transition-colors
                          duration-300
                          md:text-base

                          ${
                            isOpen
                              ? 'text-[#5A1017]'
                              : 'text-gray-700 group-hover:text-[#5A1017]'
                          }
                        `}
                      >
                        {faq.pergunta}
                      </h4>

                      <span
                        className="
                          text-xl
                          font-light
                          text-[#5A1017]
                          transition-transform
                          duration-300
                        "
                      >
                        {isOpen
                          ? '−'
                          : '+'}
                      </span>
                    </div>

                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-500
                        ease-in-out

                        ${
                          isOpen
                            ? 'max-h-40 opacity-100'
                            : 'max-h-0 opacity-0'
                        }
                      `}
                    >
                      <p
                        className="
                          pb-4
                          pr-8
                          text-sm
                          font-light
                          leading-relaxed
                          text-gray-500
                        "
                      >
                        {faq.resposta}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* ENDEREÇO */}
        <div
          className="
            sticky
            top-10
            flex
            h-fit
            w-full
            flex-col
            lg:w-1/2
          "
        >
          <div
            className="
              relative
              flex
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-gray-100
              bg-white
              p-8
              shadow-2xl
              md:p-10
            "
          >
            <h3
              className="
                mb-6
                text-[10px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#5A1017]
              "
            >
              Nosso Endereço
            </h3>

            <p
              className="
                mb-2
                font-serif
                text-2xl
                text-[#1A1A1A]
              "
            >
              Vogue Square
            </p>

            <p
              className="
                mb-8
                text-sm
                font-light
                text-gray-500
              "
            >
              Av. das Américas, 8585 -
              Barra da Tijuca
              <br />
              Rio de Janeiro - RJ,
              Brasil
            </p>

            <div
              className="
                mb-8
                flex
                flex-col
                gap-8
                md:flex-row
              "
            >
              <div>
                <h4
                  className="
                    mb-2
                    text-[9px]
                    uppercase
                    tracking-widest
                    text-gray-400
                  "
                >
                  Atendimento VIP
                </h4>

                <p
                  className="
                    text-sm
                    font-light
                    text-gray-700
                  "
                >
                  Seg - Sex: 10h às
                  19h
                  <br />
                  Somente com hora
                  marcada
                </p>
              </div>

              <div>
                <h4
                  className="
                    mb-2
                    text-[9px]
                    uppercase
                    tracking-widest
                    text-gray-400
                  "
                >
                  Contato
                </h4>

                <p
                  className="
                    text-sm
                    font-light
                    text-gray-700
                  "
                >
                  +55 (21) 99353-0012
                  <br />
                  concierge@madihamaison.com
                </p>
              </div>
            </div>

            <div
              className="
                relative
                h-48
                w-full
                overflow-hidden
                rounded-xl
                bg-gray-200
              "
            >
              <iframe
                src="https://maps.google.com/maps?q=Vogue%20Square,%20Barra%20da%20Tijuca,%20Rio%20de%20Janeiro&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    'grayscale(100%) contrast(1.1) opacity(0.8)',
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Vogue Square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}