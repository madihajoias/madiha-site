export default function CompraDiamantesCalculadoraSection() {
  return (
    <section
      id="calculadora-diamantes"
      aria-labelledby="calculadora-diamantes-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.14),transparent_34%)]
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
              Estimativa inicial
            </p>

            <h2
              id="calculadora-diamantes-title"
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
              Faça uma estimativa antes da avaliação presencial.
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
              A calculadora ajuda a organizar uma referência inicial com base
              nas informações fornecidas por você, usando parâmetros de mercado
              para diamantes Round Brilliant.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DCC08F_100%)]
              p-8
              shadow-[0_28px_72px_rgba(96,72,45,0.09)]
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-white/25
                blur-[70px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#8C6635]
                "
              >
                O que entra na estimativa
              </p>

              <h3
                className="
                  mt-5
                  max-w-[560px]
                  font-serif
                  text-[2.7rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Uma leitura inicial baseada em dados informados.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#5F5350]
                "
              >
                O resultado depende das informações inseridas e de referências
                de mercado. Ele serve para orientação inicial e não substitui
                a análise da pedra real.
              </p>

              <div
                className="
                  mt-9
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                {[
                  ['Peso', 'Carat'],
                  ['Cor', 'Color'],
                  ['Pureza', 'Clarity'],
                  ['Lapidação', 'Round Brilliant'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
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
                      {label}
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[21px]
                        text-[#332A2B]
                      "
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#A17D4F]/14
              bg-[#FCFAF7]
              p-8
              shadow-[0_26px_68px_rgba(96,72,45,0.065)]
              md:p-10
              lg:p-12
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#A17D4F]
              "
            >
              Como a referência é construída
            </p>

            <div className="mt-8 grid gap-4">
              {[
                {
                  numero: '01',
                  title: 'Round Brilliant',
                  text:
                    'A referência considera o brilhante redondo como base para determinadas comparações de mercado.',
                },
                {
                  numero: '02',
                  title: 'Referência internacional',
                  text:
                    'Determinadas referências de diamantes são expressas em dólar e seguem o comportamento do mercado internacional.',
                },
                {
                  numero: '03',
                  title: 'Conversão para reais',
                  text:
                    'O câmbio participa da conversão da referência internacional para uma leitura em reais.',
                },
                {
                  numero: '04',
                  title: 'Estimativa',
                  text:
                    'O resultado final é uma referência inicial e não uma proposta comercial definitiva.',
                },
              ].map((item) => (
                <div
                  key={item.numero}
                  className="
                    grid
                    gap-4
                    rounded-[1.55rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#F7F3EF]
                    p-5
                    sm:grid-cols-[auto_1fr]
                    sm:items-start
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[2rem]
                      leading-none
                      text-[#C7A87A]
                    "
                  >
                    {item.numero}
                  </span>

                  <div>
                    <h3
                      className="
                        font-serif
                        text-[22px]
                        leading-tight
                        text-[#332A2B]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[10px]
                        font-light
                        leading-5
                        text-[#675C5D]
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="
                mt-6
                rounded-[1.6rem]
                border
                border-[#A17D4F]/12
                bg-[#EFE6D8]/55
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
                Importante
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[20px]
                  leading-snug
                  text-[#332A2B]
                "
              >
                A calculadora estima. A avaliação presencial confirma.
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[#332A2B]
            p-8
            shadow-[0_24px_64px_rgba(51,42,43,0.10)]
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
                text-[#D6BB8B]
              "
            >
              Use como referência
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
              A estimativa ajuda a compreender o cenário antes de apresentar a pedra.
            </h3>
          </div>

          <a
            href="#calculadora"
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
            Usar calculadora
          </a>
        </div>
      </div>
    </section>
  );
}