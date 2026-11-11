import DiamondShape from './DiamondShape';

const classificacao = [
  {
    label: 'Peso',
    value: '1,00 ct',
    description: 'Quilate',
  },
  {
    label: 'Cor',
    value: 'G',
    description: 'Quase incolor',
  },
  {
    label: 'Pureza',
    value: 'VS1',
    description: 'Pequenas inclusões',
  },
  {
    label: 'Lapidação',
    value: 'Round',
    description: 'Brilliant',
  },
];

export default function CompraDiamantesHero() {
  return (
    <section
      id="inicio"
      aria-labelledby="compra-diamantes-title"
      className="
        relative
        min-h-[108svh]
        w-full
        overflow-hidden
        bg-[#F7F3EF]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_14%_18%,rgba(199,168,122,0.18),transparent_31%),radial-gradient(circle_at_82%_62%,rgba(214,187,139,0.20),transparent_34%),linear-gradient(145deg,#FCFAF7_0%,#F7F3EF_48%,#EFE6D8_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[10%]
          top-[8%]
          h-[46vw]
          w-[46vw]
          rounded-full
          bg-[#D6BB8B]/18
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[12%]
          bottom-[0%]
          h-[38vw]
          w-[38vw]
          rounded-full
          bg-[#C7A87A]/10
          blur-[120px]
        "
      />

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
        {/* ESQUERDA */}
        <div className="max-w-[700px]">
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
              Madiha Maison • Diamantes
            </p>
          </div>

          <h1
            id="compra-diamantes-title"
            className="
              mt-7
              max-w-[720px]
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
            Compra de Diamantes e Brilhantes
          </h1>

          <p
            className="
              mt-9
              max-w-[650px]
              text-[14px]
              font-light
              leading-8
              text-[#675C5D]
              md:text-[15px]
            "
          >
            Cada diamante precisa ser entendido antes de ser precificado.
            Peso, cor, pureza, lapidação, certificação e comportamento de
            mercado fazem parte dessa leitura.
          </p>

          <p
            className="
              mt-5
              max-w-[610px]
              text-[12px]
              font-light
              leading-7
              text-[#7D7070]
            "
          >
            Avaliamos diamantes lapidados, brilhantes, pedras soltas e
            diamantes montados em joias, com ou sem certificado.
          </p>

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
              href="#o-que-compramos"
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
              Avaliar meu diamante
            </a>

            <a
              href="#diamante-e-brilhante"
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
              Entender a classificação
            </a>
          </div>

          <div
            className="
              mt-10
              grid
              max-w-[720px]
              gap-3
              sm:grid-cols-3
            "
          >
            {[
              ['Diamantes', 'Soltos ou montados'],
              ['Brilhantes', 'Round Brilliant'],
              ['Documentação', 'Com ou sem certificado'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="
                  rounded-[1.5rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#FCFAF7]/74
                  px-5
                  py-5
                  shadow-[0_14px_38px_rgba(90,65,40,0.045)]
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A17D4F]
                  "
                >
                  {label}
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[17px]
                    leading-tight
                    text-[#332A2B]
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DIREITA */}
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
              bg-[#D6BB8B]/18
              blur-[100px]
            "
          />

          <div className="relative w-full max-w-[610px]">
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.4rem]
                border
                border-[#A17D4F]/18
                bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(247,243,239,0.78))]
                p-7
                shadow-[0_34px_90px_rgba(96,72,45,0.12),inset_0_1px_0_rgba(255,255,255,0.75)]
                backdrop-blur-2xl
                md:p-9
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
                  bg-[#D6BB8B]/16
                  blur-[65px]
                "
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-6">
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
                      Exemplo visual de classificação
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
                      Round Brilliant
                    </h2>

                    <p
                      className="
                        mt-3
                        text-[10px]
                        font-light
                        leading-5
                        text-[#7D7070]
                      "
                    >
                      Brilhante redondo
                    </p>
                  </div>

                  <div
                    className="
                      rounded-full
                      border
                      border-[#A17D4F]/18
                      bg-[#EFE6D8]/70
                      px-4
                      py-2
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#A17D4F]
                      "
                    >
                      Exemplo
                    </span>
                  </div>
                </div>

                <div
                  className="
                    relative
                    mt-7
                    flex
                    min-h-[270px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[1.9rem]
                    border
                    border-[#A17D4F]/12
                    bg-[linear-gradient(145deg,#F8F4ED_0%,#EFE5D5_100%)]
                  "
                >
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      h-52
                      w-52
                      rounded-full
                      bg-[#D6BB8B]/20
                      blur-[55px]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      h-[210px]
                      w-[210px]
                      rounded-full
                      border
                      border-[#A17D4F]/10
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      h-[250px]
                      w-[250px]
                      rounded-full
                      border
                      border-[#A17D4F]/[0.05]
                    "
                  />

                  <DiamondShape
                   shape="round"
                   className="
                   relative
                   z-10
                   h-[210px]
                   w-[210px]
                   text-[#A17D4F]
                   drop-shadow-[0_0_18px_rgba(161,125,79,0.14)]
                   md:h-[230px]
                   md:w-[230px]
                   "
                  />

                  <div
                    className="
                      absolute
                      bottom-5
                      left-1/2
                      -translate-x-1/2
                      rounded-full
                      border
                      border-[#A17D4F]/12
                      bg-[#FCFAF7]/75
                      px-4
                      py-2
                      backdrop-blur-xl
                    "
                  >
                    <p
                      className="
                        whitespace-nowrap
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#A17D4F]
                      "
                    >
                      Vista superior • Facetas simplificadas
                    </p>
                  </div>
                </div>

                <div
                  className="
                    mt-5
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {classificacao.map((item) => (
                    <div
                      key={item.label}
                      className="
                        rounded-[1.45rem]
                        border
                        border-[#A17D4F]/12
                        bg-[#FCFAF7]/78
                        px-5
                        py-5
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
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
                            {item.label}
                          </p>

                          <p
                            className="
                              mt-2
                              font-serif
                              text-[24px]
                              leading-none
                              text-[#332A2B]
                            "
                          >
                            {item.value}
                          </p>
                        </div>

                        <span
                          className="
                            mt-0.5
                            rounded-full
                            border
                            border-[#A17D4F]/10
                            bg-[#EFE6D8]/70
                            px-3
                            py-1.5
                            text-[7px]
                            font-medium
                            uppercase
                            tracking-[0.12em]
                            text-[#77655B]
                          "
                        >
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="
                    mt-5
                    flex
                    flex-col
                    gap-3
                    rounded-[1.5rem]
                    border
                    border-[#A17D4F]/12
                    bg-[#EFE6D8]/55
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
                      Os 4Cs
                    </p>

                    <p
                      className="
                        mt-2
                        text-[10px]
                        font-light
                        text-[#675C5D]
                      "
                    >
                      Carat · Color · Clarity · Cut
                    </p>
                  </div>

                  <a
                    href="#quatro-cs"
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
                    Entender os 4Cs →
                  </a>
                </div>
              </div>
            </div>

            <div
              className="
                absolute
                -bottom-7
                right-3
                w-[250px]
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
                Avaliação individual de diamantes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}