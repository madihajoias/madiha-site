import DiamondTweezersIllustration from './DiamondTweezersIllustration';

const indicadores = [
  {
    label: 'Peso',
    value: 'Carat',
  },
  {
    label: 'Cor',
    value: 'Color',
  },
  {
    label: 'Pureza',
    value: 'Clarity',
  },
  {
    label: 'Lapidação',
    value: 'Cut',
  },
];

export default function AvaliacaoDiamantesHero() {
  return (
    <section
      id="inicio"
      aria-labelledby="avaliacao-diamantes-title"
      className="
        relative
        min-h-[108svh]
        w-full
        overflow-hidden
        bg-[#F7F3EF]
      "
    >
      {/* FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_22%,rgba(199,168,122,0.18),transparent_30%),radial-gradient(circle_at_84%_55%,rgba(214,187,139,0.19),transparent_35%),linear-gradient(145deg,#FCFAF7_0%,#F7F3EF_48%,#EFE5D6_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[12%]
          top-[7%]
          h-[46vw]
          w-[46vw]
          rounded-full
          bg-[#D6BB8B]/17
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[12%]
          bottom-[-8%]
          h-[38vw]
          w-[38vw]
          rounded-full
          bg-[#C7A87A]/10
          blur-[110px]
        "
      />

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[108svh]
          w-full
          max-w-[90rem]
          items-center
          gap-14
          px-6
          pb-20
          pt-36
          md:px-8
          md:pt-40
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-16
          lg:pb-24
        "
      >
        {/* TEXTO */}
        <div className="max-w-[720px]">
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#C7A87A]/28
              bg-[#FCFAF7]/75
              px-4
              py-2.5
              shadow-[0_10px_30px_rgba(90,65,40,0.05)]
              backdrop-blur-xl
            "
          >
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A17D4F]
              "
            />

            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#A17D4F]
              "
            >
              Madiha Maison • Análise Gemológica
            </p>
          </div>

          <h1
            id="avaliacao-diamantes-title"
            className="
              mt-7
              max-w-[760px]
              font-serif
              text-[3.35rem]
              font-normal
              leading-[0.9]
              tracking-[-0.05em]
              text-[#332A2B]
              sm:text-[4.15rem]
              md:text-[4.85rem]
              lg:text-[5.35rem]
            "
          >
            Avaliação de Diamantes Lapidados
          </h1>

          <p
            className="
              mt-9
              max-w-[660px]
              text-[14px]
              font-light
              leading-8
              text-[#675C5D]
              md:text-[15px]
            "
          >
            Uma avaliação especializada observa muito além do tamanho aparente
            da pedra. Peso, cor, pureza, proporções, simetria, acabamento e
            comportamento óptico ajudam a construir uma leitura técnica do
            diamante.
          </p>

          <p
            className="
              mt-5
              max-w-[620px]
              text-[12px]
              font-light
              leading-7
              text-[#7D7070]
            "
          >
            A Madiha Maison realiza análise individual de diamantes lapidados,
            soltos ou montados em joias, com atendimento reservado na Barra da
            Tijuca.
          </p>

          {/* BOTÕES */}
          <div
            className="
              mt-10
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <a
              href="#como-avaliamos"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                rounded-full
                border
                border-[#B99154]
                bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#332A2B]
                shadow-[0_16px_40px_rgba(108,77,43,0.15),inset_0_1px_0_rgba(255,255,255,0.35)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_20px_46px_rgba(108,77,43,0.20)]
              "
            >
              Entender a avaliação
            </a>

            <a
              href="#contato-avaliacao-diamantes"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                rounded-full
                border
                border-[#A17D4F]/22
                bg-[#FCFAF7]/80
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#5A1017]
                shadow-[0_10px_30px_rgba(90,65,40,0.04)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#A17D4F]/40
                hover:bg-white
              "
            >
              Solicitar avaliação
            </a>
          </div>

          {/* INDICADORES */}
          <div
            className="
              mt-10
              grid
              max-w-[720px]
              grid-cols-2
              gap-3
              sm:grid-cols-4
            "
          >
            {indicadores.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-[1.45rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#FCFAF7]/72
                  px-5
                  py-5
                  shadow-[0_14px_38px_rgba(90,65,40,0.045)]
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A17D4F]
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[18px]
                    leading-none
                    text-[#332A2B]
                  "
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ILUSTRAÇÃO */}
        <div
          className="
            relative
            flex
            min-h-[620px]
            items-center
            justify-center
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-[540px]
              w-[540px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D6BB8B]/17
              blur-[100px]
            "
          />

          <div
            className="
              relative
              w-full
              max-w-[620px]
            "
          >
            {/* PAINEL */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-[#A17D4F]/18
                bg-[linear-gradient(145deg,rgba(255,255,255,0.90),rgba(247,243,239,0.72))]
                p-5
                shadow-[0_34px_90px_rgba(96,72,45,0.12),inset_0_1px_0_rgba(255,255,255,0.72)]
                backdrop-blur-2xl
                md:p-7
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20
                  h-64
                  w-64
                  rounded-full
                  bg-[#D6BB8B]/18
                  blur-[65px]
                "
              />

              {/* CABEÇALHO DO PAINEL */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-start
                  justify-between
                  gap-5
                  px-2
                  pt-2
                "
              >
                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#A17D4F]
                    "
                  >
                    Observação especializada
                  </p>

                  <h2
                    className="
                      mt-3
                      font-serif
                      text-[2rem]
                      font-normal
                      leading-none
                      tracking-[-0.025em]
                      text-[#332A2B]
                    "
                  >
                    Leitura da pedra
                  </h2>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-[#A17D4F]/18
                    bg-[#EFE6D8]/72
                    px-4
                    py-2
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A17D4F]
                  "
                >
                  Análise
                </span>
              </div>

              {/* SVG PRINCIPAL */}
              <div
                className="
                  relative
                  mt-5
                  flex
                  min-h-[470px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#A17D4F]/10
                  bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.90),rgba(239,230,216,0.72)_55%,rgba(225,208,181,0.48)_100%)]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-[45%]
                    h-[320px]
                    w-[320px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#A17D4F]/[0.07]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-[45%]
                    h-[390px]
                    w-[390px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#A17D4F]/[0.045]
                  "
                />

                <DiamondTweezersIllustration
                  className="
                    relative
                    z-10
                    h-auto
                    w-full
                    max-w-[520px]
                  "
                />

                {/* MARCAÇÃO PESO */}
                <div
                  className="
                    absolute
                    left-5
                    top-7
                    rounded-full
                    border
                    border-[#A17D4F]/14
                    bg-[#FCFAF7]/75
                    px-4
                    py-2.5
                    backdrop-blur-xl
                    md:left-8
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    Peso
                  </p>

                  <p
                    className="
                      mt-1
                      font-serif
                      text-[16px]
                      text-[#332A2B]
                    "
                  >
                    Carat
                  </p>
                </div>

                {/* MARCAÇÃO COR */}
                <div
                  className="
                    absolute
                    right-5
                    top-[28%]
                    rounded-full
                    border
                    border-[#A17D4F]/14
                    bg-[#FCFAF7]/75
                    px-4
                    py-2.5
                    backdrop-blur-xl
                    md:right-8
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    Cor
                  </p>

                  <p
                    className="
                      mt-1
                      font-serif
                      text-[16px]
                      text-[#332A2B]
                    "
                  >
                    Color
                  </p>
                </div>

                {/* MARCAÇÃO PUREZA */}
                <div
                  className="
                    absolute
                    bottom-[24%]
                    left-5
                    rounded-full
                    border
                    border-[#A17D4F]/14
                    bg-[#FCFAF7]/75
                    px-4
                    py-2.5
                    backdrop-blur-xl
                    md:left-8
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    Pureza
                  </p>

                  <p
                    className="
                      mt-1
                      font-serif
                      text-[16px]
                      text-[#332A2B]
                    "
                  >
                    Clarity
                  </p>
                </div>

                {/* MARCAÇÃO LAPIDAÇÃO */}
                <div
                  className="
                    absolute
                    bottom-7
                    right-5
                    rounded-full
                    border
                    border-[#A17D4F]/14
                    bg-[#FCFAF7]/75
                    px-4
                    py-2.5
                    backdrop-blur-xl
                    md:right-8
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    Lapidação
                  </p>

                  <p
                    className="
                      mt-1
                      font-serif
                      text-[16px]
                      text-[#332A2B]
                    "
                  >
                    Cut
                  </p>
                </div>
              </div>

              {/* RODAPÉ DO PAINEL */}
              <div
                className="
                  relative
                  z-10
                  mt-5
                  flex
                  flex-col
                  gap-4
                  rounded-[1.5rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#EFE6D8]/50
                  px-5
                  py-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    Análise presencial
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-light
                      leading-5
                      text-[#675C5D]
                    "
                  >
                    Observação, medição e interpretação da pedra.
                  </p>
                </div>

                <a
                  href="#peso-e-medidas"
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#5A1017]
                    transition-colors
                    duration-300
                    hover:text-[#A17D4F]
                  "
                >
                  Ver critérios →
                </a>
              </div>
            </div>

            {/* CARTÃO FLUTUANTE */}
            <div
              className="
                absolute
                -bottom-7
                right-3
                w-[255px]
                rounded-[1.5rem]
                border
                border-[#A17D4F]/20
                bg-[#EBD7B3]/95
                px-6
                py-5
                shadow-[0_18px_48px_rgba(90,65,40,0.16)]
                backdrop-blur-2xl
                md:-right-5
              "
            >
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#8E6735]
                "
              >
                Madiha Maison
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[20px]
                  leading-[1.05]
                  tracking-[-0.02em]
                  text-[#332A2B]
                "
              >
                Avaliação técnica de diamantes lapidados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}