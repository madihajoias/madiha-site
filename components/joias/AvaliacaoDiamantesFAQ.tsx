const faqs = [
  {
    question: 'É possível avaliar um diamante montado em joia?',
    answer:
      'Sim. A pedra montada pode ser analisada, embora a estrutura da joia possa limitar algumas medições e ângulos de observação. A avaliação considera aquilo que está acessível e registra essas limitações.',
  },
  {
    question: 'Preciso ter certificado do diamante?',
    answer:
      'Não. A ausência de certificado não impede uma análise inicial da pedra. Quando existe um relatório gemológico, ele pode ser utilizado como referência para conferir informações como formato, medidas, cor e pureza.',
  },
  {
    question: 'A joia precisa ser desmontada para avaliar o diamante?',
    answer:
      'Nem sempre. Em muitos casos é possível obter informações importantes com a pedra ainda montada. Uma desmontagem só faria sentido quando determinada característica não pudesse ser verificada adequadamente na montagem existente.',
  },
  {
    question: 'Quanto tempo leva uma avaliação de diamante?',
    answer:
      'O tempo varia conforme o tipo de pedra, se está solta ou montada, a existência de certificado e o nível de análise necessário. O atendimento é realizado de forma individual, priorizando a observação cuidadosa.',
  },
  {
    question: 'Avaliar o diamante significa receber uma proposta de compra?',
    answer:
      'Não necessariamente. A avaliação técnica tem como objetivo compreender as características da pedra. Uma eventual negociação comercial é uma etapa diferente e depende também de fatores de mercado, demanda e contexto da negociação.',
  },
  {
    question: 'Posso avaliar o diamante apenas para conhecer melhor a pedra?',
    answer:
      'Sim. A avaliação pode ser realizada para esclarecer características, conferir informações de um certificado ou simplesmente compreender melhor um diamante que já pertence ao cliente.',
  },
];

export default function AvaliacaoDiamantesFAQ() {
  return (
    <section
      id="faq-avaliacao-diamantes"
      aria-labelledby="faq-avaliacao-diamantes-title"
      className="
        relative
        overflow-hidden
        bg-[#FCFAF7]
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(214,187,139,0.13),transparent_34%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[90rem]
          px-6
          md:px-8
        "
      >
        {/* CABEÇALHO */}
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-end
            lg:gap-20
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Dúvidas frequentes
            </p>

            <h2
              id="faq-avaliacao-diamantes-title"
              className="
                mt-6
                max-w-[850px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#332A2B]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Perguntas sobre avaliação de diamantes lapidados.
            </h2>
          </div>

          <div className="max-w-[660px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#675C5D]
                md:text-[15px]
                md:leading-8
              "
            >
              Algumas dúvidas são comuns antes de apresentar uma pedra para
              análise. Abaixo estão respostas para os principais pontos sobre
              o processo.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div
          className="
            mt-16
            grid
            gap-4
            lg:grid-cols-2
          "
        >
          {faqs.map((item, index) => (
            <details
              key={item.question}
              className="
                group
                rounded-[1.8rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                px-6
                py-6
                shadow-[0_18px_48px_rgba(96,72,45,0.04)]
                transition-all
                duration-300
                open:border-[#A17D4F]/24
                open:bg-[#FCFAF7]
                open:shadow-[0_22px_56px_rgba(96,72,45,0.06)]
                md:px-7
                md:py-7
              "
            >
              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  gap-6
                  [&::-webkit-details-marker]:hidden
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-5
                  "
                >
                  <span
                    className="
                      mt-0.5
                      font-serif
                      text-[19px]
                      leading-none
                      text-[#C7A87A]
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3
                    className="
                      font-serif
                      text-[21px]
                      leading-[1.15]
                      tracking-[-0.015em]
                      text-[#332A2B]
                      md:text-[23px]
                    "
                  >
                    {item.question}
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A17D4F]/16
                    bg-[#EFE6D8]
                    text-[#8C6635]
                    transition-transform
                    duration-300
                    group-open:rotate-45
                  "
                >
                  +
                </span>
              </summary>

              <div
                className="
                  mt-5
                  border-t
                  border-[#A17D4F]/10
                  pt-5
                  pl-[44px]
                "
              >
                <p
                  className="
                    max-w-[620px]
                    text-[10px]
                    font-light
                    leading-6
                    text-[#675C5D]
                  "
                >
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-12
            grid
            gap-7
            overflow-hidden
            rounded-[2.2rem]
            border
            border-[#A17D4F]/15
            bg-[linear-gradient(135deg,#E6CDA5_0%,#F1E2C8_48%,#DFC294_100%)]
            p-8
            shadow-[0_24px_64px_rgba(96,72,45,0.08)]
            md:p-10
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#8C6635]
              "
            >
              Ainda tem alguma dúvida?
            </p>

            <h3
              className="
                mt-4
                max-w-[900px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#332A2B]
                md:text-[2.7rem]
              "
            >
              Fale com a Madiha Maison antes de apresentar o seu diamante.
            </h3>
          </div>

          <a
            href="#contato-avaliacao-diamantes"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#332A2B]
              bg-[#332A2B]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#F7F3EF]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#473A3B]
            "
          >
            Solicitar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}
