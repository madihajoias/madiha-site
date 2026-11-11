import DiamondShape from './DiamondShape';

const lapidacoes = [
  {
    shape: 'round' as const,
    name: 'Round',
    subtitle: 'Brilliant',
    description: 'Brilhante redondo',
  },
  {
    shape: 'oval' as const,
    name: 'Oval',
    subtitle: 'Oval Cut',
    description: 'Formato alongado',
  },
  {
    shape: 'emerald' as const,
    name: 'Emerald',
    subtitle: 'Emerald Cut',
    description: 'Facetas em degraus',
  },
  {
    shape: 'pear' as const,
    name: 'Pear',
    subtitle: 'Pear Cut',
    description: 'Formato de gota',
  },
  {
    shape: 'cushion' as const,
    name: 'Cushion',
    subtitle: 'Cushion Cut',
    description: 'Quadrado arredondado',
  },
  {
    shape: 'princess' as const,
    name: 'Princess',
    subtitle: 'Princess Cut',
    description: 'Formato quadrado',
  },
];

export default function CompraDiamantesDiferencaSection() {
  return (
    <section
      id="diamante-e-brilhante"
      aria-labelledby="diamante-brilhante-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(214,187,139,0.14),transparent_34%)]
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
            lg:grid-cols-[0.92fr_1.08fr]
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
              Entendendo os termos
            </p>

            <h2
              id="diamante-brilhante-title"
              className="
                mt-6
                max-w-[820px]
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
              Diamante e brilhante não significam exatamente a mesma coisa.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
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
              Diamante é a gema. Brilhante é uma forma de lapidação. Entender
              essa diferença ajuda a interpretar melhor uma avaliação e evita
              tratar todos os diamantes lapidados como se fossem iguais.
            </p>
          </div>
        </div>

        {/* DIAMANTE X BRILHANTE */}
        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-2
          "
        >
          <article
            className="
              relative
              overflow-hidden
              rounded-[2.25rem]
              border
              border-[#A17D4F]/14
              bg-[#F7F3EF]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.07)]
              md:p-10
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

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-[1.4rem]
                  border
                  border-[#A17D4F]/16
                  bg-[#EFE6D8]/65
                "
              >
                <span
                  className="
                    font-serif
                    text-[27px]
                    text-[#A17D4F]
                  "
                >
                  D
                </span>
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
                A gema
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[2.8rem]
                  leading-none
                  tracking-[-0.035em]
                  text-[#332A2B]
                "
              >
                Diamante
              </h3>

              <p
                className="
                  mt-6
                  max-w-[580px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#675C5D]
                "
              >
                É o material gemológico. Antes de chegar a uma joia, o diamante
                pode ser lapidado em diferentes formatos e proporções.
              </p>

              <div
                className="
                  mt-8
                  rounded-[1.5rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#FCFAF7]
                  px-6
                  py-5
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
                  Forma simples de lembrar
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
                  Diamante é aquilo que a pedra é.
                </p>
              </div>
            </div>
          </article>

          <article
            className="
              relative
              overflow-hidden
              rounded-[2.25rem]
              border
              border-[#C7A87A]/26
              bg-[linear-gradient(145deg,#EAD6B0_0%,#F3E5CB_52%,#DCC193_100%)]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.10)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-16
                -top-16
                h-64
                w-64
                rounded-full
                bg-white/30
                blur-[70px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-[1.4rem]
                  border
                  border-[#8C6635]/18
                  bg-white/25
                "
              >
                <DiamondShape
                  shape="round"
                  className="
                    h-11
                    w-11
                    text-[#8C6635]
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
                  text-[#8C6635]
                "
              >
                Uma lapidação
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[2.8rem]
                  leading-none
                  tracking-[-0.035em]
                  text-[#332A2B]
                "
              >
                Brilhante
              </h3>

              <p
                className="
                  mt-6
                  max-w-[580px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#5F5350]
                "
              >
                No uso joalheiro, o termo costuma se referir ao diamante com
                lapidação brilhante redonda, conhecida como Round Brilliant.
              </p>

              <div
                className="
                  mt-8
                  rounded-[1.5rem]
                  border
                  border-[#8C6635]/14
                  bg-white/25
                  px-6
                  py-5
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8C6635]
                  "
                >
                  Forma simples de lembrar
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
                  Brilhante descreve como o diamante foi lapidado.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* FRASE CENTRAL */}
        <div
          className="
            mt-6
            rounded-[2rem]
            border
            border-[#A17D4F]/14
            bg-[#332A2B]
            px-7
            py-8
            shadow-[0_22px_58px_rgba(51,42,43,0.10)]
            md:px-10
          "
        >
          <div
            className="
              grid
              gap-6
              lg:grid-cols-[auto_1fr]
              lg:items-center
            "
          >
            <span
              className="
                font-serif
                text-[4rem]
                leading-none
                text-[#D6BB8B]
              "
            >
              01
            </span>

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
                Conceito essencial
              </p>

              <p
                className="
                  mt-3
                  max-w-[940px]
                  font-serif
                  text-[1.9rem]
                  leading-[1.08]
                  tracking-[-0.025em]
                  text-[#F7F3EF]
                  md:text-[2.3rem]
                "
              >
                Todo brilhante é um diamante lapidado, mas nem todo diamante
                lapidado possui formato Round Brilliant.
              </p>
            </div>
          </div>
        </div>

        {/* LAPIDAÇÕES */}
        <div className="mt-20">
          <div
            className="
              flex
              flex-col
              gap-6
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#A17D4F]
                "
              >
                Formatos mais conhecidos
              </p>

              <h3
                className="
                  mt-4
                  max-w-[760px]
                  font-serif
                  text-[2.5rem]
                  leading-[1]
                  tracking-[-0.03em]
                  text-[#332A2B]
                  md:text-[3.2rem]
                "
              >
                Um diamante pode assumir diferentes formas depois da lapidação.
              </h3>
            </div>

            <p
              className="
                max-w-[430px]
                text-[11px]
                font-light
                leading-6
                text-[#776B6C]
              "
            >
              O formato é apenas uma parte da avaliação. Peso, cor, pureza,
              qualidade da lapidação e comportamento comercial também precisam
              ser considerados.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-4
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
            "
          >
            {lapidacoes.map((item) => (
              <article
                key={item.name}
                className="
                  group
                  rounded-[1.75rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#F7F3EF]
                  p-5
                  text-center
                  shadow-[0_16px_42px_rgba(96,72,45,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#A17D4F]/28
                  hover:bg-[#FCFAF7]
                  hover:shadow-[0_22px_50px_rgba(96,72,45,0.07)]
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    aspect-square
                    max-w-[125px]
                    items-center
                    justify-center
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#EFE6D8]/58
                    transition-colors
                    duration-500
                    group-hover:bg-[#E7D5B7]/65
                  "
                >
                  <DiamondShape
                    shape={item.shape}
                    className="
                      h-[78%]
                      w-[78%]
                      text-[#A17D4F]
                      transition-transform
                      duration-500
                      group-hover:scale-[1.04]
                    "
                  />
                </div>

                <p
                  className="
                    mt-5
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A17D4F]
                  "
                >
                  {item.subtitle}
                </p>

                <h4
                  className="
                    mt-2
                    font-serif
                    text-[20px]
                    text-[#332A2B]
                  "
                >
                  {item.name}
                </h4>

                <p
                  className="
                    mt-2
                    text-[9px]
                    font-light
                    leading-5
                    text-[#776B6C]
                  "
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* CHAMADA */}
        <div
          className="
            mt-12
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/16
            bg-[linear-gradient(135deg,#EFE1C9_0%,#F7EFE3_50%,#E4CEA8_100%)]
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
              O formato é só o começo
            </p>

            <h3
              className="
                mt-4
                max-w-[850px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#332A2B]
                md:text-[2.7rem]
              "
            >
              Agora precisamos entender o que faz dois diamantes do mesmo
              tamanho terem valores diferentes.
            </h3>
          </div>

          <a
            href="#quatro-cs"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#A17D4F]
              bg-[#332A2B]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#F7F3EF]
              shadow-[0_14px_34px_rgba(51,42,43,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Entender os 4Cs
          </a>
        </div>
      </div>
    </section>
  );
}