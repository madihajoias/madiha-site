'use client';

import {
  useState,
} from 'react';

const faqs = [
  {
    question:
      'Como funciona a cotação do ouro?',
    answer:
      'A cotação do ouro parte de uma referência de mercado e pode variar ao longo do dia. O valor por grama também depende do teor do metal, como 24k, 18k, 14k ou outros.',
  },
  {
    question:
      'Qual é o preço do grama do ouro hoje?',
    answer:
      'O preço do grama do ouro varia conforme a cotação do mercado e o teor do metal. Nesta página você pode consultar referências atualizadas por teor.',
  },
  {
    question:
      'Qual a diferença entre ouro 24k e ouro 18k?',
    answer:
      'O ouro 24k é utilizado como referência de maior pureza. O ouro 18k contém 75% de ouro na liga, por isso seu valor por grama é diferente.',
  },
  {
    question:
      'A cotação do ouro muda durante o dia?',
    answer:
      'Sim. A cotação pode sofrer variações ao longo do dia de acordo com o mercado. Por isso, os valores exibidos devem ser considerados como referências atualizadas no momento da consulta.',
  },
  {
    question:
      'A cotação exibida é o valor que vou receber pela minha peça?',
    answer:
      'Não necessariamente. A cotação é uma referência de mercado. O valor comercial de uma peça depende também do teor confirmado, peso, composição, estado e demais características verificadas em avaliação.',
  },
  {
    question:
      'Como saber quanto vale meu ouro?',
    answer:
      'Você pode utilizar a calculadora de ouro para obter uma estimativa inicial. Para confirmar o valor, o ideal é realizar uma avaliação técnica da peça.',
  },
  {
    question:
      'O ouro branco usa a mesma cotação do ouro amarelo?',
    answer:
      'A referência do metal parte da cotação-base aplicável ao teor, mas o ouro branco pode seguir regras comerciais específicas na avaliação.',
  },
  {
    question:
      'Onde consultar a cotação do ouro na Barra da Tijuca?',
    answer:
      'Você pode consultar a cotação nesta página e também receber atendimento especializado na Madiha Maison, no Vogue Square, Barra da Tijuca, Rio de Janeiro.',
  },
  {
    question:
      'A Madiha Maison compra ouro com base na cotação?',
    answer:
      'A cotação é utilizada como referência, mas qualquer proposta comercial depende da avaliação técnica da peça, considerando teor, peso e características do ouro.',
  },
  {
    question:
      'Preciso agendar para levar meu ouro para avaliação?',
    answer:
      'O agendamento é recomendado para organizar o atendimento e proporcionar uma experiência mais reservada e individual no Vogue Square.',
  },
];

export default function CotacaoOuroFAQ() {
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
      aria-labelledby="cotacao-ouro-faq-title"
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
            id="cotacao-ouro-faq-title"
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
            cotação do ouro.
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
            Entenda melhor como funciona a cotação, por que o preço muda
            conforme o teor e qual a diferença entre referência de mercado
            e valor comercial.
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
              href="#cotacao-por-teor"
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
              Ver cotação
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