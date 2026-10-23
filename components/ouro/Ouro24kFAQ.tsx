'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'O que significa ouro 24k?',
    answer:
      'Ouro 24k é a referência de maior pureza dentro da classificação por quilates. Ele representa um teor muito elevado de ouro e serve como base de comparação para outros teores, como 18k e 14k.',
  },
  {
    question: 'O ouro 24k é ouro puro?',
    answer:
      'O ouro 24k é considerado a principal referência de ouro puro no mercado. Na prática, ele possui teor muito elevado de ouro, próximo da pureza máxima utilizada nessa classificação.',
  },
  {
    question: 'Qual a diferença entre ouro 24k e ouro 18k?',
    answer:
      'O ouro 24k representa a referência máxima de pureza, enquanto o ouro 18k contém 75% de ouro e 25% de outros metais utilizados na liga.',
  },
  {
    question: 'Quanto vale o grama do ouro 24k?',
    answer:
      'O valor do ouro 24k por grama varia conforme a cotação do mercado. Nesta página, a Madiha Maison apresenta uma referência atualizada e também disponibiliza uma calculadora para simulações.',
  },
  {
    question: 'A cotação do ouro 24k muda durante o dia?',
    answer:
      'Sim. O preço do ouro pode variar ao longo do dia conforme as condições de mercado. Por isso, uma consulta realizada em outro momento pode apresentar um valor diferente.',
  },
  {
    question: 'A cotação da bolsa é o valor que vou receber pelo meu ouro?',
    answer:
      'Não necessariamente. A cotação da bolsa funciona como uma referência teórica de mercado. O valor comercial de uma peça depende de peso, teor, composição e das características confirmadas na avaliação.',
  },
  {
    question: 'Como saber se uma peça é realmente ouro 24k?',
    answer:
      'Marcações e informações de origem podem ajudar, mas a confirmação mais confiável é feita por avaliação técnica. Quando houver dúvida sobre o teor, o ideal é analisar a peça presencialmente.',
  },
  {
    question: 'Posso usar a calculadora para ouro 24k?',
    answer:
      'Sim. A calculadora da Madiha Maison permite selecionar o teor 24k e informar o peso em gramas para obter uma estimativa comercial inicial.',
  },
  {
    question: 'O peso total da peça corresponde ao peso de ouro?',
    answer:
      'Nem sempre. Pedras, fechos, soldas, componentes e outros materiais podem fazer parte do peso total. Por isso, uma avaliação técnica é importante para compreender a composição da peça.',
  },
  {
    question: 'Onde posso avaliar ouro 24k no Rio de Janeiro?',
    answer:
      'A Madiha Maison realiza avaliação de ouro no Vogue Square, na Barra da Tijuca, Rio de Janeiro, com conferência de peso, teor e características da peça.',
  },
];

export default function Ouro24kFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="ouro-24k-faq-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F0E5]
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
            id="ouro-24k-faq-title"
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
            ouro 24k.
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
            Tire dúvidas sobre pureza, cotação, valor por grama, diferença
            entre teores e avaliação técnica do ouro 24 quilates.
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
              href="#cotacao-ouro-24k"
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
              Ver cotação 24k
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
              Avaliar ouro 24k
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