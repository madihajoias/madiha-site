'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Onde vender ouro perto de mim na Barra da Tijuca?',
    answer:
      'A Madiha Maison realiza avaliação e compra de ouro no Vogue Square, na Av. das Américas, Barra da Tijuca. O atendimento é presencial, reservado e feito após análise técnica do material.',
  },
  {
    question: 'A Madiha Maison compra ouro?',
    answer:
      'Sim. Avaliamos peças em ouro de diferentes teores, incluindo ouro 24k, 18k, 14k e outras composições, além de joias, peças antigas, materiais danificados, lingotes e barras.',
  },
  {
    question: 'Vocês compram ouro 18k e 24k?',
    answer:
      'Sim. Ouro 18k e 24k podem ser avaliados. O valor depende do peso, do teor confirmado e da referência comercial utilizada no momento da análise.',
  },
  {
    question: 'Posso vender joias quebradas ou antigas?',
    answer:
      'Sim. Correntes rompidas, alianças deformadas, brincos sem par, joias antigas e outras peças fora de uso podem continuar tendo valor relacionado ao ouro presente em sua composição.',
  },
  {
    question: 'Preciso saber a quilatagem antes de ir à loja?',
    answer:
      'Não. Você pode levar a peça mesmo sem saber se é 24k, 18k, 14k ou outro teor. Essas informações podem ser verificadas durante a avaliação presencial.',
  },
  {
    question: 'Como funciona a avaliação do ouro?',
    answer:
      'O processo normalmente envolve conferência de peso, identificação do teor, análise das características da peça e definição da referência comercial antes da apresentação da proposta.',
  },
  {
    question: 'A avaliação é feita na minha presença?',
    answer:
      'O atendimento é conduzido de forma transparente e as principais etapas da análise são apresentadas ao cliente durante o processo.',
  },
  {
    question: 'Posso avaliar meu ouro sem obrigação de vender?',
    answer:
      'Sim. A proposta é apresentada após a avaliação e a decisão de concluir ou não a venda permanece com o cliente.',
  },
  {
    question: 'Como saber quanto vale meu ouro antes de ir à loja?',
    answer:
      'Você pode utilizar a calculadora de ouro disponível nesta página para obter uma estimativa inicial. O valor final depende da avaliação presencial do material.',
  },
  {
    question: 'A cotação do ouro é o mesmo valor pago pela peça?',
    answer:
      'Não necessariamente. A cotação funciona como referência. A proposta de compra considera o material efetivamente avaliado, incluindo peso, teor e características da peça.',
  },
  {
    question: 'O pagamento é feito na hora?',
    answer:
      'Após a conclusão da avaliação, aceitação da proposta e formalização da venda, o pagamento é realizado conforme a forma acordada no atendimento.',
  },
  {
    question: 'É seguro levar ouro para avaliação?',
    answer:
      'A Madiha Maison realiza atendimento em ambiente reservado no Vogue Square, com foco em privacidade, discrição e acompanhamento do processo de avaliação.',
  },
  {
    question: 'Onde fica a Madiha Maison?',
    answer:
      'A Madiha Maison fica no Vogue Square, Av. das Américas, 8585, Sala 490, Barra da Tijuca, Rio de Janeiro – RJ, CEP 22793-081.',
  },
  {
    question: 'Como chegar à Madiha Maison?',
    answer:
      'O Vogue Square está localizado na Av. das Américas, na Barra da Tijuca. Você pode utilizar o mapa disponível nesta página para abrir a rota diretamente no Google Maps.',
  },
];

export default function LojaOuroPertoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="loja-ouro-perto-faq-title"
      className="
        relative
        overflow-hidden
        bg-[#F5EBDD]
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
          bg-[radial-gradient(circle_at_12%_15%,rgba(199,168,122,0.12),transparent_28%),radial-gradient(circle_at_88%_85%,rgba(118,85,37,0.08),transparent_32%)]
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
          lg:grid-cols-[0.72fr_1.28fr]
          lg:gap-20
        "
      >
        {/* INTRO */}
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
            Perguntas frequentes
          </p>

          <h2
            id="loja-ouro-perto-faq-title"
            className="
              mt-6
              max-w-[560px]
              font-serif
              text-[3rem]
              font-normal
              leading-[1.02]
              tracking-[-0.025em]
              text-[#765525]
              sm:text-[3.7rem]
              md:text-[4.3rem]
            "
          >
            Dúvidas sobre
            <br />
            vender ouro perto de você.
          </h2>

          <p
            className="
              mt-7
              max-w-[500px]
              text-[13px]
              font-light
              leading-7
              text-[#806C50]
              md:text-[15px]
              md:leading-8
            "
          >
            Veja como funciona a avaliação, quais tipos de ouro podem ser
            analisados, como consultar uma estimativa e onde encontrar a
            Madiha Maison na Barra da Tijuca.
          </p>

          <div
            className="
              mt-9
              flex
              flex-col
              gap-3
              sm:flex-row
              lg:flex-col
              lg:items-start
            "
          >
            <a
              href="#localizacao"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-full
                bg-[linear-gradient(135deg,#98703A_0%,#AE8246_48%,#936936_100%)]
                px-7
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white
                shadow-[0_13px_28px_rgba(67,42,8,0.16)]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Ver localização
            </a>

            <a
              href="#calculadora-de-ouro"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-full
                border
                border-[#765525]/22
                bg-white/18
                px-7
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#765525]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/36
              "
            >
              Calcular meu ouro
            </a>
          </div>
        </div>

        {/* ACCORDION */}
        <div
          className="
            divide-y
            divide-[#765525]/12
            border-y
            border-[#765525]/12
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="py-2"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-8
                    py-6
                    text-left
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[20px]
                      font-normal
                      leading-snug
                      text-[#68491F]
                      md:text-[23px]
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#765525]/18
                      bg-white/20
                      text-[20px]
                      font-light
                      text-[#765525]
                      transition-transform
                      duration-300

                      ${isOpen ? 'rotate-45' : ''}
                    `}
                  >
                    +
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
                        max-w-[780px]
                        pb-7
                        pr-12
                        text-[12px]
                        font-light
                        leading-7
                        text-[#806C50]
                        md:text-[13px]
                      "
                    >
                      {faq.answer}
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