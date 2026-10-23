'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Onde vender lingotes de ouro no Rio de Janeiro?',
    answer:
      'A Madiha Maison realiza avaliação e compra de lingotes de ouro no Vogue Square, na Barra da Tijuca, Rio de Janeiro. O material é analisado tecnicamente antes da apresentação da proposta comercial.',
  },
  {
    question: 'Vocês compram barras de ouro 24k?',
    answer:
      'Sim. Avaliamos barras de ouro com teor declarado 24k e outras referências de pureza, sempre mediante conferência técnica do peso, teor e características do material.',
  },
  {
    question: 'O que significam as marcações 999 e 999,9?',
    answer:
      'A marcação 999 corresponde nominalmente a 99,9% de ouro, enquanto 999,9 corresponde a 99,99%. Essas informações ajudam na identificação, mas não substituem a avaliação física do material.',
  },
  {
    question: 'Vocês utilizam balança hidrostática na avaliação?',
    answer:
      'Sim. Utilizamos balança de precisão hidrostática como parte do processo técnico, auxiliando na análise das características físicas do lingote ou barra e aumentando a precisão da avaliação.',
  },
  {
    question: 'O certificado do lingote é obrigatório?',
    answer:
      'Não necessariamente. Quando existe, o certificado é uma informação relevante e pode auxiliar na identificação da peça. Mesmo assim, o material continua sendo avaliado fisicamente antes da definição da proposta.',
  },
  {
    question: 'A marcação de pureza no lingote garante o teor?',
    answer:
      'A marcação é uma referência importante, mas não deve ser considerada isoladamente. Peso, densidade, características físicas, integridade e outras informações são analisados durante a avaliação.',
  },
  {
    question: 'Como é calculado o valor de um lingote de ouro?',
    answer:
      'O valor depende principalmente do peso confirmado, da pureza ou teor efetivamente avaliado e da referência comercial do ouro no momento da negociação.',
  },
  {
    question: 'A cotação da bolsa é o valor pago pelo lingote?',
    answer:
      'Não necessariamente. A cotação de mercado funciona como referência. A proposta comercial é definida após a avaliação técnica do material apresentado.',
  },
  {
    question: 'O pagamento é feito na hora?',
    answer:
      'Após a conclusão da avaliação, aceitação da proposta e formalização da venda, o pagamento é realizado imediatamente conforme a forma acordada no atendimento.',
  },
  {
    question: 'A avaliação de lingotes e barras é feita com privacidade?',
    answer:
      'Sim. O atendimento é realizado de forma reservada e discreta, especialmente por se tratar de materiais que podem representar valores elevados.',
  },
];

export default function LingotesBarrasFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="perguntas-frequentes"
      aria-labelledby="lingotes-barras-faq-title"
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
            id="lingotes-barras-faq-title"
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
            Dúvidas sobre venda
            <br />
            de lingotes e barras.
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
            Entenda como funciona a avaliação, a importância da pureza,
            pesagem hidrostática, certificação, cotação e pagamento.
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
              href="#avaliacao-tecnica"
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
              Ver avaliação técnica
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
              Vender meu ouro
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