'use client';

import {
  useState,
} from 'react';

const faqs = [
  {
    question:
      'Como funciona a calculadora de ouro?',
    answer:
      'A calculadora utiliza o peso informado, o teor selecionado, o tipo de ouro e a cotação disponível para apresentar uma estimativa comercial inicial.',
  },
  {
    question:
      'Quais teores posso calcular?',
    answer:
      'Para ouro amarelo, a calculadora permite simulações em 24k, 22k, 18k, 16k, 14k, 12k e 10k. Para ouro branco, estão disponíveis 18k, 16k, 14k, 12k e 10k.',
  },
  {
    question:
      'Posso calcular ouro branco?',
    answer:
      'Sim. A calculadora possui uma opção específica para ouro branco e aplica a regra comercial correspondente ao tipo e teor selecionados.',
  },
  {
    question:
      'A calculadora mostra o valor exato da minha peça?',
    answer:
      'Não. O resultado é uma estimativa inicial. O valor final depende da confirmação de peso, teor, composição, materiais agregados e demais características verificadas em uma avaliação técnica.',
  },
  {
    question:
      'Preciso saber o teor do ouro para usar a calculadora?',
    answer:
      'Sim, o teor é uma das informações utilizadas no cálculo. Se você não souber se a peça é 18k, 14k ou outro teor, utilize a simulação apenas como referência até realizar uma avaliação.',
  },
  {
    question:
      'Como saber o peso do meu ouro?',
    answer:
      'A calculadora utiliza o peso em gramas. Uma balança doméstica pode fornecer apenas uma referência aproximada, enquanto a avaliação presencial permite uma conferência mais precisa.',
  },
  {
    question:
      'Qual a diferença entre valor comercial e referência da bolsa?',
    answer:
      'A referência da bolsa representa um valor teórico do metal no mercado. O valor comercial utilizado na simulação considera a referência aplicável ao teor selecionado e pode ser diferente do valor teórico.',
  },
  {
    question:
      'A cotação da calculadora é atualizada?',
    answer:
      'A ferramenta consulta a cotação utilizada pelo sistema no momento da simulação. Como o preço do ouro pode variar ao longo do dia, uma nova consulta pode apresentar valores diferentes.',
  },
  {
    question:
      'Posso usar a calculadora antes de vender meu ouro?',
    answer:
      'Sim. A calculadora foi criada justamente para fornecer uma referência inicial antes de uma avaliação ou eventual decisão de venda.',
  },
  {
    question:
      'Onde posso confirmar o resultado da calculadora?',
    answer:
      'A Madiha Maison realiza avaliação presencial no Vogue Square, na Barra da Tijuca, Rio de Janeiro, para confirmar peso, teor e demais características do ouro.',
  },
];

export default function CalculadoraOuroFAQ() {
  const [
    openIndex,
    setOpenIndex,
  ] =
    useState<number | null>(
      0
    );

  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="calculadora-ouro-faq-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F0E5]
        py-24
        md:py-32
        lg:py-36
      "
    >
      {/* FUNDO */}
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
            id="calculadora-ouro-faq-title"
            className="
              mt-6
              max-w-[520px]
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
            a calculadora de ouro.
          </h2>

          <p
            className="
              mt-7
              max-w-[480px]
              text-[13px]
              font-light
              leading-7
              text-[#806C50]
              md:text-[15px]
              md:leading-8
            "
          >
            Entenda como utilizar a ferramenta, interpretar a estimativa e
            saber quando é necessária uma avaliação presencial.
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
              href="#calculadora-de-ouro"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-full
                border
                border-[#765525]/22
                bg-white/22
                px-7
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#765525]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/40
              "
            >
              Usar calculadora
            </a>

            <a
              href="#localizacao"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-full
                border
                border-[#765525]/22
                bg-white/10
                px-7
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#765525]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/32
              "
            >
              Solicitar avaliação
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
          {faqs.map(
            (
              faq,
              index
            ) => {
              const isOpen =
                openIndex ===
                index;

              return (
                <div
                  key={
                    faq.question
                  }
                  className="py-2"
                >
                  <button
                    type="button"
                    aria-expanded={
                      isOpen
                    }
                    onClick={() =>
                      setOpenIndex(
                        isOpen
                          ? null
                          : index
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
                      {
                        faq.question
                      }
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

                        ${
                          isOpen
                            ? 'rotate-45'
                            : ''
                        }
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
                          max-w-[760px]
                          pb-7
                          pr-12
                          text-[12px]
                          font-light
                          leading-7
                          text-[#806C50]
                          md:text-[13px]
                        "
                      >
                        {
                          faq.answer
                        }
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}