'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'O que significa ouro 18k?',
    answer:
      'O ouro 18k possui 18 partes de ouro em um total de 24, o que corresponde a 75% de ouro na composição e 25% de outros metais.',
  },
  {
    question: 'O que significa a marcação 750 no ouro?',
    answer:
      'A marcação 750 indica que a liga possui 750 partes de ouro em cada 1000 partes do material, equivalendo a 75% de ouro ou 18 quilates.',
  },
  {
    question: 'Ouro 18k e ouro 750 são a mesma coisa?',
    answer:
      'Sim. As duas formas indicam o mesmo teor: 75% de ouro na composição da liga.',
  },
  {
    question: 'Qual a diferença entre ouro 18k e ouro 24k?',
    answer:
      'O ouro 18k contém 75% de ouro e 25% de outros metais. O ouro 24k possui teor muito mais elevado e funciona como referência de maior pureza dentro da escala de quilates.',
  },
  {
    question: 'Quanto vale o grama do ouro 18k?',
    answer:
      'O valor do ouro 18k por grama varia conforme a cotação do mercado e a referência comercial aplicada ao teor. Nesta página, você pode acompanhar uma referência atualizada e utilizar a calculadora.',
  },
  {
    question: 'A cotação do ouro 18k muda durante o dia?',
    answer:
      'Sim. Como o preço do ouro acompanha o mercado, os valores podem mudar ao longo do dia. Uma nova consulta pode apresentar uma referência diferente.',
  },
  {
    question: 'Ouro amarelo 18k e ouro branco 18k têm a mesma quantidade de ouro?',
    answer:
      'Sim. Ambos possuem teor de 18k, equivalente a 75% de ouro. A diferença de aparência está relacionada principalmente aos metais utilizados nos 25% restantes da liga.',
  },
  {
    question: 'Como saber se uma joia é realmente ouro 18k?',
    answer:
      'Marcações como 18k ou 750 podem indicar o teor, mas não substituem uma avaliação técnica quando houver dúvida sobre a composição real da peça.',
  },
  {
    question: 'Posso calcular o valor do meu ouro 18k online?',
    answer:
      'Sim. A calculadora da Madiha Maison permite selecionar o teor 18k e informar o peso em gramas para obter uma estimativa comercial inicial.',
  },
  {
    question: 'Onde posso avaliar ouro 18k no Rio de Janeiro?',
    answer:
      'A Madiha Maison realiza avaliação presencial no Vogue Square, na Barra da Tijuca, Rio de Janeiro, com conferência de peso, teor e composição da peça.',
  },
];

export default function Ouro18kFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="ouro-18k-faq-title"
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
            id="ouro-18k-faq-title"
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
            ouro 18k.
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
            Entenda o teor 18k, a marcação 750, preço por grama, composição,
            diferenças entre cores e como funciona a avaliação de uma joia.
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
              href="#cotacao-ouro-18k"
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
              Ver cotação 18k
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
              Avaliar ouro 18k
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