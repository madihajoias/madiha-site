const etapas = [
  {
    numero: '01',
    label: 'Apresentação',
    title: 'Você apresenta a joia',
    text:
      'A avaliação começa com a apresentação da peça e uma leitura inicial de suas características gerais.',
  },
  {
    numero: '02',
    label: 'Análise',
    title: 'Observamos os principais elementos',
    text:
      'Metal, pedras, marca, design, conservação e outros aspectos relevantes podem ser considerados conforme a peça.',
  },
  {
    numero: '03',
    label: 'Leitura',
    title: 'A joia é entendida como um conjunto',
    text:
      'Os diferentes elementos são analisados em conjunto para evitar uma leitura limitada apenas ao peso do ouro.',
  },
  {
    numero: '04',
    label: 'Explicação',
    title: 'Você acompanha a avaliação',
    text:
      'Os principais pontos observados podem ser explicados durante o atendimento para que você compreenda melhor a peça.',
  },
  {
    numero: '05',
    label: 'Orientação',
    title: 'Você conhece os próximos passos',
    text:
      'Após a avaliação, você pode receber orientações sobre a peça e, quando houver interesse, conhecer uma proposta de compra.',
  },
];

export default function AvaliacaoJoiasProcessoSection() {
  return (
    <section
      id="processo-de-avaliacao"
      aria-labelledby="avaliacao-joias-processo-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
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
          bg-[radial-gradient(circle_at_15%_20%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(90,16,23,0.055),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[8%]
          bottom-[6%]
          h-[32vw]
          w-[32vw]
          rounded-full
          bg-[#C7A87A]/10
          blur-[110px]
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
              Processo de avaliação
            </p>

            <h2
              id="avaliacao-joias-processo-title"
              className="
                mt-6
                max-w-[760px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#4F1720]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Uma análise conduzida de forma clara e individual.
            </h2>
          </div>

          <div
            className="
              max-w-[650px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#776B6C]
                md:text-[15px]
                md:leading-8
              "
            >
              A avaliação acontece por etapas para que a peça possa ser
              compreendida com atenção, sem reduzir a análise a um único
              critério.
            </p>
          </div>
        </div>

        {/* PAINEL PRINCIPAL */}
        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[2.35rem]
            border
            border-[#5A1017]/10
            bg-[#FCFAF7]
            p-5
            shadow-[0_28px_80px_rgba(54,30,30,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]
            md:p-6
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-[#C7A87A]/12
              blur-[72px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-4
              lg:grid-cols-5
            "
          >
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[#5A1017]/9
                  bg-white
                  p-6
                  shadow-[0_14px_36px_rgba(54,30,30,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#C7A87A]/40
                  hover:shadow-[0_22px_50px_rgba(54,30,30,0.075)]
                  md:p-7
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-28
                    w-28
                    rounded-full
                    bg-[#C7A87A]/10
                    blur-[28px]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <span
                      className="
                        inline-flex
                        h-11
                        min-w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/30
                        bg-[#C7A87A]/[0.08]
                        px-3
                        font-serif
                        text-[17px]
                        text-[#A17D4F]
                      "
                    >
                      {etapa.numero}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        h-px
                        flex-1
                        bg-gradient-to-r
                        from-[#C7A87A]/45
                        to-transparent
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-8
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#A17D4F]
                    "
                  >
                    {etapa.label}
                  </p>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[24px]
                      font-normal
                      leading-tight
                      tracking-[-0.02em]
                      text-[#4F1720]
                    "
                  >
                    {etapa.title}
                  </h3>

                  <div
                    aria-hidden="true"
                    className="
                      mt-5
                      h-px
                      w-10
                      bg-[#C7A87A]/35
                    "
                  />

                  <p
                    className="
                      mt-5
                      text-[11px]
                      font-light
                      leading-6
                      text-[#776B6C]
                    "
                  >
                    {etapa.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* FECHAMENTO DO PAINEL */}
          <div
            className="
              relative
              z-10
              mt-4
              grid
              gap-4
              md:grid-cols-2
            "
          >
            <div
              className="
                rounded-[1.65rem]
                border
                border-[#5A1017]/8
                bg-[#F7F3EF]
                px-7
                py-6
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4F]
                "
              >
                Avaliação presencial
              </p>

              <p
                className="
                  mt-3
                  text-[11px]
                  font-light
                  leading-6
                  text-[#776B6C]
                "
              >
                A análise presencial permite observar detalhes que podem não
                ser identificados apenas por fotos.
              </p>
            </div>

            <div
              className="
                rounded-[1.65rem]
                border
                border-[#C7A87A]/18
                bg-[#F3EDE5]
                px-7
                py-6
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4F]
                "
              >
                Sem compromisso
              </p>

              <p
                className="
                  mt-3
                  text-[11px]
                  font-light
                  leading-6
                  text-[#776B6C]
                "
              >
                A avaliação pode ser realizada antes de qualquer decisão sobre
                venda da peça.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}