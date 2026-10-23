'use client';

import {
  useState,
} from 'react';

const faqs = [
  {
    question:
      'Como funciona a avaliação de ouro?',
    answer:
      'A avaliação considera informações como peso, teor, composição, características da peça e materiais agregados. Após a análise, é apresentada uma referência comercial de forma clara e individualizada.',
  },
  {
    question:
      'Como saber o teor do ouro?',
    answer:
      'O teor indica a proporção de ouro presente na liga. Exemplos comuns são 24k, 22k, 18k, 14k, 12k e 10k. A confirmação deve ser feita por meio de avaliação técnica da peça.',
  },
  {
    question:
      'Quais teores de ouro podem ser avaliados?',
    answer:
      'A Madiha Maison realiza avaliação de ouro em diferentes teores, incluindo 24k, 22k, 18k, 16k, 14k, 12k e 10k, conforme as características de cada peça.',
  },
  {
    question:
      'Ouro branco também pode ser avaliado?',
    answer:
      'Sim. Peças de ouro branco também podem ser avaliadas. Nesse caso, são consideradas as características específicas da liga e as regras comerciais aplicáveis ao tipo de ouro.',
  },
  {
    question:
      'Preciso vender depois da avaliação?',
    answer:
      'Não. A avaliação não obriga o cliente a realizar a venda. Ela permite conhecer melhor as características da peça e receber uma referência antes de decidir.',
  },
  {
    question:
      'Ouro quebrado ou usado pode ser avaliado?',
    answer:
      'Sim. Joias e peças de ouro usadas, quebradas, antigas ou fora de uso podem ser analisadas. O estado da peça é considerado durante o processo de avaliação.',
  },
  {
    question:
      'A calculadora de ouro substitui a avaliação presencial?',
    answer:
      'Não. A calculadora oferece uma estimativa inicial baseada no peso, teor e cotação. A avaliação presencial é necessária para confirmar as características reais da peça.',
  },
  {
    question:
      'Onde fazer avaliação de ouro na Barra da Tijuca?',
    answer:
      'A Madiha Maison realiza avaliação de ouro no Vogue Square, na Barra da Tijuca, Rio de Janeiro, com atendimento especializado e individual.',
  },
  {
    question:
      'Preciso agendar a avaliação?',
    answer:
      'O agendamento é recomendado para organizar o atendimento e proporcionar uma experiência mais reservada e individual.',
  },
  {
    question:
      'A avaliação de ouro tem custo?',
    answer:
      'As condições da avaliação podem variar conforme o tipo de atendimento e a peça analisada. Entre em contato com a Madiha Maison para confirmar as condições antes da visita.',
  },
];

export default function AvaliacaoOuroFAQ() {
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
      aria-labelledby="avaliacao-ouro-faq-title"
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
            id="avaliacao-ouro-faq-title"
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
            avaliação de ouro.
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
            Reunimos as principais informações para quem deseja entender
            melhor como funciona uma avaliação de ouro antes de comparecer
            ao atendimento.
          </p>

          <a
            href="#localizacao"
            className="
              mt-9
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
            Ver localização
          </a>
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
                  className="
                    py-2
                  "
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