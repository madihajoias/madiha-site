const calculadoraItens = [
  'Estimativa inicial',
  'Peso e teor do ouro',
  'Diamantes informados pelo usuário',
  'Referência Round Brilliant',
  'Conversão com base em dólar',
  'Resultado imediato',
];

const avaliacaoItens = [
  'Confirmação das características reais',
  'Análise do metal',
  'Análise das pedras',
  'Leitura da joia como um conjunto',
  'Marca, design e conservação',
  'Interpretação comercial da peça',
];

export default function CalculadoraJoiasComparativoSection() {
  return (
    <section
      id="calculadora-x-avaliacao"
      aria-labelledby="calculadora-comparativo-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(90,16,23,0.055),transparent_34%)]
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
              Duas etapas diferentes
            </p>

            <h2
              id="calculadora-comparativo-title"
              className="
                mt-6
                max-w-[800px]
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
              Calculadora de Joias x Avaliação Presencial.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
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
              A calculadora ajuda a criar uma referência inicial. A avaliação
              presencial permite confirmar as características reais da peça e
              interpretar elementos que não podem ser verificados em um
              formulário online.
            </p>
          </div>
        </div>

        {/* COMPARATIVO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-2
            lg:items-stretch
          "
        >
          {/* CALCULADORA */}
          <article
            className="
              relative
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#5A1017]/10
              bg-[#FCFAF7]
              p-8
              shadow-[0_28px_78px_rgba(54,30,30,0.07)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
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
                flex
                h-full
                flex-col
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#A17D4F]
                "
              >
                Online
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#4F1720]
                  md:text-[3.5rem]
                "
              >
                Calculadora de Joias
              </h3>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#776B6C]
                "
              >
                Ideal para obter uma primeira referência utilizando dados que
                você já conhece sobre a sua joia.
              </p>

              <div className="mt-9 space-y-3">
                {calculadoraItens.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[1.4rem]
                      border
                      border-[#5A1017]/9
                      bg-white
                      px-5
                      py-4
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/35
                        bg-[#C7A87A]/[0.08]
                        text-[12px]
                        text-[#A17D4F]
                      "
                    >
                      ✓
                    </span>

                    <p
                      className="
                        text-[11px]
                        font-light
                        leading-5
                        text-[#776B6C]
                      "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-9">
                <a
                  href="#calculadora-de-joias"
                  className="
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C7A87A]
                    bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                    px-8
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#4F1720]
                    shadow-[0_14px_34px_rgba(54,30,30,0.10)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >
                  Usar calculadora
                </a>
              </div>
            </div>
          </article>

          {/* AVALIAÇÃO */}
          <article
            className="
              relative
              flex
              h-full
              flex-col
              overflow-hidden
              rounded-[2.35rem]
              border
              border-white/10
              bg-[#4F1720]
              p-8
              shadow-[0_30px_85px_rgba(55,20,26,0.16)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
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
                flex
                h-full
                flex-col
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#D6BB8B]
                "
              >
                Presencial
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  md:text-[3.5rem]
                "
              >
                Avaliação da Joia
              </h3>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                "
              >
                Indicada quando é necessário confirmar os dados da peça e
                compreender características que podem influenciar sua leitura.
              </p>

              <div className="mt-9 space-y-3">
                {avaliacaoItens.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[1.4rem]
                      border
                      border-white/10
                      bg-white/[0.045]
                      px-5
                      py-4
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/30
                        bg-[#C7A87A]/[0.08]
                        text-[12px]
                        text-[#D6BB8B]
                      "
                    >
                      ✓
                    </span>

                    <p
                      className="
                        text-[11px]
                        font-light
                        leading-5
                        text-[#D3C3C0]
                      "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-9">
                <a
                  href="/joias/avaliacao-de-joias/"
                  className="
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#F7F3EF]/18
                    bg-white/[0.05]
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
                    hover:border-[#C7A87A]/45
                    hover:bg-white/[0.075]
                  "
                >
                  Conhecer avaliação
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* CONCLUSÃO */}
        <div
          className="
            mt-6
            grid
            gap-6
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#5A1017]/10
            bg-[#FCFAF7]
            p-8
            shadow-[0_22px_60px_rgba(54,30,30,0.055)]
            md:p-10
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#A17D4F]
              "
            >
              Uma etapa complementa a outra
            </p>

            <h3
              className="
                mt-4
                max-w-[850px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#4F1720]
                md:text-[2.7rem]
              "
            >
              Comece pela estimativa e avance para a avaliação quando precisar
              entender a peça em profundidade.
            </h3>
          </div>

          <a
            href="#quando-avaliar"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#C7A87A]
              bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#4F1720]
              shadow-[0_14px_34px_rgba(54,30,30,0.10)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Quando avaliar
          </a>
        </div>
      </div>
    </section>
  );
}