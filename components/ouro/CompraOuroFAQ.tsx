'use client';

import { useState } from 'react';

const faqs = [
  {
    pergunta: 'Como funciona a avaliação do ouro?',
    resposta:
      'A avaliação considera o peso, o teor do ouro e as características da peça. Após a análise técnica, a Madiha Maison apresenta uma proposta comercial para que você decida se deseja realizar a venda.',
  },
  {
    pergunta: 'Quais teores de ouro a Madiha Maison avalia?',
    resposta:
      'Avaliamos diferentes teores de ouro, incluindo 24k, 22k, 18k, 16k, 14k, 12k e 10k. O teor identificado é considerado juntamente com o peso e a cotação comercial aplicável.',
  },
  {
    pergunta: 'Como saber quanto vale meu ouro?',
    resposta:
      'O valor depende principalmente do peso, do teor e da cotação comercial do ouro no momento da avaliação. Você também pode usar nossa Calculadora de Ouro para obter uma estimativa inicial.',
  },
  {
    pergunta: 'Onde vender ouro na Barra da Tijuca?',
    resposta:
      'A Madiha Maison realiza compra e avaliação de ouro em seu escritório no Vogue Square, na Barra da Tijuca, Rio de Janeiro, com atendimento especializado e discreto.',
  },
  {
    pergunta: 'A avaliação de ouro tem algum custo?',
    resposta:
      'A avaliação para uma possível venda é realizada sem compromisso. Após receber a proposta, você decide se deseja ou não concluir a negociação.',
  },
  {
    pergunta: 'Sou obrigado a vender após a avaliação?',
    resposta:
      'Não. A avaliação e a apresentação da proposta não obrigam você a realizar a venda. A decisão permanece inteiramente com o cliente.',
  },
  {
    pergunta: 'O pagamento é feito imediatamente?',
    resposta:
      'Após a conclusão da avaliação e o aceite da proposta, o pagamento é realizado de forma imediata conforme a modalidade disponível no atendimento.',
  },
  {
    pergunta: 'Vocês compram ouro usado ou danificado?',
    resposta:
      'Sim. Peças de ouro podem ser avaliadas mesmo quando usadas, antigas, quebradas ou fora de uso. O valor é determinado a partir das características identificadas durante a avaliação.',
  },
  {
    pergunta: 'Preciso agendar horário?',
    resposta:
      'O atendimento pode ser realizado com hora marcada no escritório da Madiha Maison no Vogue Square, proporcionando mais conforto, organização e discrição.',
  },
  {
    pergunta: 'Posso calcular meu ouro antes de ir até a Madiha Maison?',
    resposta:
      'Sim. A Calculadora de Ouro da Madiha Maison permite informar o peso e o teor para consultar uma estimativa baseada na cotação utilizada pela plataforma. A confirmação do valor depende da avaliação presencial.',
  },
];

export default function CompraOuroFAQ() {
  const [openFaq, setOpenFaq] =
    useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(
      openFaq === index ? null : index
    );
  };

  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="compra-ouro-faq-title"
      className="
        relative
        overflow-hidden
        bg-[#EFE4D1]
        py-24
        md:py-32
        lg:py-36
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_85%_15%,rgba(199,165,108,0.18),transparent_30%),radial-gradient(circle_at_10%_85%,rgba(255,250,239,0.58),transparent_32%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[90rem]
          gap-14
          px-6
          md:px-8
          lg:grid-cols-[0.68fr_1.32fr]
          lg:gap-20
        "
      >
        {/* CABEÇALHO */}
        <div>
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#8F6E3F]
              md:text-[10px]
            "
          >
            Compra de Ouro • Dúvidas
          </p>

          <h2
            id="compra-ouro-faq-title"
            className="
              mt-6
              font-serif
              text-[3rem]
              font-normal
              leading-[1.02]
              tracking-[-0.025em]
              text-[#765525]
              sm:text-[3.7rem]
              md:text-[4.4rem]
            "
          >
            Perguntas
            <br />
            Frequentes
          </h2>

          <p
            className="
              mt-7
              max-w-[390px]
              text-[13px]
              font-light
              leading-7
              text-[#806C50]
            "
          >
            Informações sobre avaliação,
            cotação, pagamento e atendimento
            para quem deseja vender ouro.
          </p>
        </div>

        {/* FAQ */}
        <div
          className="
            overflow-hidden
            rounded-[2.5rem]
            border
            border-white/60
            bg-[#F2E5CF]/42
            px-6
            shadow-[0_26px_70px_rgba(91,61,21,0.08),inset_0_1px_0_rgba(255,255,255,0.55)]
            backdrop-blur-xl
            md:px-9
          "
        >
          {faqs.map((faq, index) => {
            const isOpen =
              openFaq === index;

            return (
              <div
                key={faq.pergunta}
                className="
                  border-b
                  border-[#765525]/12
                  last:border-b-0
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    toggleFaq(index)
                  }
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-8
                    py-7
                    text-left
                    md:py-8
                  "
                >
                  <span
                    className={`
                      font-serif
                      text-[19px]
                      font-normal
                      leading-snug
                      transition-colors
                      md:text-[22px]

                      ${
                        isOpen
                          ? 'text-[#68491F]'
                          : 'text-[#765D3D] hover:text-[#68491F]'
                      }
                    `}
                  >
                    {faq.pergunta}
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#765525]/20
                      font-light
                      text-[#765525]
                    "
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-out

                    ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        max-w-[760px]
                        pb-8
                        pr-10
                        text-[12px]
                        font-light
                        leading-7
                        text-[#806C50]
                        md:text-[13px]
                      "
                    >
                      {faq.resposta}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}