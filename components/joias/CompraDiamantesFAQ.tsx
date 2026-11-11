const perguntas = [
  {
    question: 'A Madiha Maison compra diamantes sem certificado?',
    answer:
      'Sim. A ausência de certificado não impede uma avaliação inicial. A pedra pode ser analisada pelas próprias características, como peso, medidas, cor, pureza, lapidação e condição geral.',
  },
  {
    question: 'É possível avaliar um diamante ainda montado em uma joia?',
    answer:
      'Sim. Diamantes montados em anéis, brincos, colares e outras joias podem ser apresentados para avaliação. A montagem pode limitar algumas medições, mas não impede uma análise inicial da peça.',
  },
  {
    question: 'Diamante e brilhante são a mesma coisa?',
    answer:
      'Não exatamente. Diamante é a gema. Brilhante é um estilo de lapidação, normalmente associado ao formato redondo Round Brilliant. Portanto, um diamante pode ter outras lapidações, como Oval, Emerald, Pear, Cushion ou Princess.',
  },
  {
    question: 'O que influencia o valor de um diamante?',
    answer:
      'Peso em quilates, cor, pureza, lapidação, formato, medidas, certificação, condição da pedra, demanda e liquidez de mercado podem participar da avaliação. O valor comercial é resultado da análise do conjunto.',
  },
  {
    question: 'O certificado determina quanto o diamante vale?',
    answer:
      'Não. O certificado descreve características técnicas da pedra e pode ajudar na avaliação, mas não representa sozinho um preço de compra ou de venda. O contexto comercial também precisa ser considerado.',
  },
  {
    question: 'A calculadora informa o valor exato do meu diamante?',
    answer:
      'Não. A calculadora oferece uma estimativa inicial baseada nas informações inseridas e em referências utilizadas no cálculo. A confirmação das características e uma eventual proposta dependem da análise da pedra.',
  },
  {
    question: 'Diamantes maiores sempre valem mais?',
    answer:
      'Não necessariamente. O peso em quilates é apenas uma das características consideradas. Dois diamantes com o mesmo peso podem apresentar diferenças importantes de cor, pureza, lapidação, formato e condição comercial.',
  },
  {
    question: 'Vocês avaliam somente diamantes Round Brilliant?',
    answer:
      'Não. Também podem ser apresentados diamantes em outras lapidações e formatos, como Oval, Emerald, Pear, Cushion e Princess. Cada formato possui características próprias de avaliação.',
  },
  {
    question: 'Posso levar uma joia antiga com vários diamantes?',
    answer:
      'Sim. Joias antigas, peças com múltiplos diamantes e joias assinadas podem ser apresentadas. Nesse caso, a análise pode considerar tanto as pedras quanto outros elementos relevantes da própria joia.',
  },
  {
    question: 'Preciso vender o diamante depois da avaliação?',
    answer:
      'Não. A avaliação e a eventual proposta não obrigam você a concluir a negociação. A decisão de vender permanece com você.',
  },
];

export default function CompraDiamantesFAQ() {
  return (
    <section
      id="faq-diamantes"
      aria-labelledby="faq-diamantes-title"
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
          bg-[radial-gradient(circle_at_10%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_90%_82%,rgba(214,187,139,0.13),transparent_34%)]
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
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-20
          "
        >
          {/* CABEÇALHO */}
          <div className="lg:sticky lg:top-32 lg:self-start">
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
              id="faq-diamantes-title"
              className="
                mt-6
                max-w-[650px]
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
              Perguntas sobre avaliação e compra de diamantes.
            </h2>

            <p
              className="
                mt-7
                max-w-[520px]
                text-[12px]
                font-light
                leading-7
                text-[#675C5D]
                md:text-[14px]
              "
            >
              Reunimos algumas das dúvidas mais comuns sobre diamantes,
              brilhantes, certificados, avaliação e negociação.
            </p>

            <div
              className="
                mt-8
                rounded-[1.65rem]
                border
                border-[#A17D4F]/14
                bg-[linear-gradient(145deg,#E8D3AF_0%,#F1E3CA_52%,#DEC397_100%)]
                px-6
                py-6
                shadow-[0_18px_48px_rgba(96,72,45,0.06)]
              "
            >
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#8C6635]
                "
              >
                Ainda tem uma dúvida?
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[21px]
                  leading-snug
                  text-[#332A2B]
                "
              >
                Cada diamante tem particularidades que podem exigir uma análise
                individual.
              </p>

              <a
                href="#contato-diamantes"
                className="
                  mt-6
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#332A2B]
                  bg-[#332A2B]
                  px-6
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
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

          {/* PERGUNTAS */}
          <div className="grid gap-3">
            {perguntas.map((item, index) => (
              <details
                key={item.question}
                className="
                  group
                  overflow-hidden
                  rounded-[1.65rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#F7F3EF]
                  shadow-[0_14px_38px_rgba(96,72,45,0.035)]
                  transition-all
                  duration-300
                  open:border-[#A17D4F]/25
                  open:bg-[#FCFAF7]
                  open:shadow-[0_20px_48px_rgba(96,72,45,0.055)]
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
                    px-6
                    py-6
                    [&::-webkit-details-marker]:hidden
                    md:px-7
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
                        text-[15px]
                        text-[#B6945D]
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3
                      className="
                        font-serif
                        text-[20px]
                        font-normal
                        leading-snug
                        text-[#332A2B]
                        md:text-[22px]
                      "
                    >
                      {item.question}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="
                      relative
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A17D4F]/18
                      bg-[#EFE6D8]
                    "
                  >
                    <span
                      className="
                        absolute
                        h-px
                        w-3
                        bg-[#8C6635]
                      "
                    />

                    <span
                      className="
                        absolute
                        h-3
                        w-px
                        bg-[#8C6635]
                        transition-transform
                        duration-300
                        group-open:rotate-90
                        group-open:opacity-0
                      "
                    />
                  </span>
                </summary>

                <div
                  className="
                    border-t
                    border-[#A17D4F]/10
                    px-6
                    pb-7
                    pt-5
                    md:px-7
                  "
                >
                  <p
                    className="
                      max-w-[820px]
                      pl-0
                      text-[11px]
                      font-light
                      leading-6
                      text-[#675C5D]
                      md:pl-10
                      md:text-[12px]
                      md:leading-7
                    "
                  >
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-16
            overflow-hidden
            rounded-[2.2rem]
            border
            border-[#A17D4F]/15
            bg-[#332A2B]
            px-8
            py-10
            shadow-[0_26px_70px_rgba(51,42,43,0.10)]
            md:px-10
            md:py-12
          "
        >
          <div
            className="
              grid
              gap-7
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
                  text-[#D6BB8B]
                "
              >
                Madiha Maison
              </p>

              <h3
                className="
                  mt-4
                  max-w-[880px]
                  font-serif
                  text-[2rem]
                  leading-[1.04]
                  tracking-[-0.025em]
                  text-[#F7F3EF]
                  md:text-[2.7rem]
                "
              >
                Para uma resposta sobre a sua pedra, a análise precisa ser
                individual.
              </h3>
            </div>

            <a
              href="#contato-diamantes"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-full
                border
                border-[#D6BB8B]
                bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#332A2B]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Avaliar meu diamante
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}