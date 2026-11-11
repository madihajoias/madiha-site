const lapidacoes = [
  {
    label: 'Round',
    title: 'Round Brilliant',
    text:
      'É a lapidação redonda brilhante e funciona como a principal referência utilizada pela Calculadora de Joias para estimar diamantes.',
  },
  {
    label: 'Oval',
    title: 'Oval',
    text:
      'Possui proporções e comportamento comercial diferentes do Round Brilliant, por isso não deve ser interpretada automaticamente pela mesma referência.',
  },
  {
    label: 'Emerald',
    title: 'Emerald Cut',
    text:
      'Sua construção em degraus, proporções e aparência fazem com que a leitura comercial seja diferente da lapidação redonda.',
  },
  {
    label: 'Pear',
    title: 'Pear',
    text:
      'A lapidação em formato de gota possui características próprias de proporção, aparência e demanda.',
  },
  {
    label: 'Cushion',
    title: 'Cushion',
    text:
      'O formato cushion possui variações próprias de proporção e desenho, podendo apresentar referências comerciais diferentes.',
  },
  {
    label: 'Princess',
    title: 'Princess',
    text:
      'Mesmo sendo uma lapidação brilhante, o formato quadrado possui comportamento comercial diferente do diamante redondo.',
  },
];

export default function CalculadoraJoiasRoundSection() {
  return (
    <section
      id="diamante-round-brilliant"
      aria-labelledby="calculadora-round-title"
      className="
        relative
        overflow-hidden
        bg-[#54151E]
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
          bg-[radial-gradient(circle_at_15%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(255,255,255,0.035),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[10%]
          top-[12%]
          h-[36vw]
          w-[36vw]
          rounded-full
          bg-[#7A1622]/28
          blur-[120px]
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
                text-[#D6BB8B]
                md:text-[10px]
              "
            >
              Referência do diamante
            </p>

            <h2
              id="calculadora-round-title"
              className="
                mt-6
                max-w-[800px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#F7F3EF]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              A calculadora utiliza como base o Round Brilliant.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#D0C1BE]
                md:text-[15px]
                md:leading-8
              "
            >
              Round Brilliant é o nome utilizado para a tradicional lapidação
              redonda brilhante. É essa referência que orienta a estimativa de
              diamantes dentro da Calculadora de Joias.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.86fr_1.14fr]
          "
        >
          {/* ROUND PRINCIPAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#C7A87A]/22
              bg-[#F7F3EF]
              p-8
              shadow-[0_30px_85px_rgba(20,5,8,0.18)]
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
                bg-[#C7A87A]/14
                blur-[72px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#A17D4F]
                "
              >
                Round Brilliant
              </p>

              <h3
                className="
                  mt-6
                  max-w-[520px]
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#4F1720]
                  md:text-[3.5rem]
                "
              >
                A referência é o diamante redondo.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[520px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#776B6C]
                "
              >
                Quando você informa peso, cor e pureza de um diamante na
                calculadora, a referência utilizada considera o padrão Round
                Brilliant.
              </p>

              <div
                className="
                  mt-9
                  grid
                  gap-3
                  sm:grid-cols-3
                "
              >
                <div
                  className="
                    rounded-[1.45rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
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
                    Formato
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[19px]
                      text-[#4F1720]
                    "
                  >
                    Redondo
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.45rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
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
                    Referência
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[19px]
                      text-[#4F1720]
                    "
                  >
                    Internacional
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.45rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
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
                    Cálculo
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[19px]
                      text-[#4F1720]
                    "
                  >
                    Peso + cor + pureza
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-5
                  rounded-[1.6rem]
                  border
                  border-[#C7A87A]/22
                  bg-[#F2EADF]
                  px-6
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
                  Importante
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
                  Se a sua pedra possui outra lapidação, o resultado da
                  calculadora deve ser interpretado apenas como uma referência,
                  e não como o valor específico daquela lapidação.
                </p>
              </div>
            </div>
          </div>

          {/* OUTRAS LAPIDAÇÕES */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {lapidacoes.slice(1).map((item) => (
              <article
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-7
                  shadow-[0_18px_48px_rgba(20,5,8,0.14),inset_0_1px_0_rgba(255,255,255,0.035)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#C7A87A]/35
                  hover:bg-white/[0.065]
                  md:p-8
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-[#C7A87A]/10
                    blur-[28px]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#D6BB8B]
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[24px]
                      font-normal
                      leading-tight
                      text-[#F7F3EF]
                    "
                  >
                    {item.title}
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
                      text-[#CDBDBA]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}

            <article
              className="
                relative
                overflow-hidden
                rounded-[1.8rem]
                border
                border-[#C7A87A]/24
                bg-[#F7F3EF]/[0.075]
                p-7
                shadow-[0_18px_48px_rgba(20,5,8,0.14)]
                backdrop-blur-xl
                md:p-8
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D6BB8B]
                "
              >
                Outras lapidações
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[24px]
                  font-normal
                  leading-tight
                  text-[#F7F3EF]
                "
              >
                Cada formato pode exigir uma referência própria.
              </h3>

              <p
                className="
                  mt-5
                  text-[11px]
                  font-light
                  leading-6
                  text-[#CDBDBA]
                "
              >
                Proporções, qualidade de lapidação, demanda e liquidez podem
                interferir no comportamento comercial de diferentes formatos.
              </p>
            </article>
          </div>
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
            border-white/10
            bg-white/[0.045]
            p-8
            backdrop-blur-xl
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
                text-[#D6BB8B]
              "
            >
              A referência certa importa
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
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Formatos diferentes não devem ser tratados automaticamente como
              um Round Brilliant.
            </h3>

            <p
              className="
                mt-5
                max-w-[760px]
                text-[11px]
                font-light
                leading-6
                text-[#CDBDBA]
              "
            >
              Para pedras com outras lapidações, a avaliação presencial ajuda a
              interpretar melhor suas características e sua referência
              comercial.
            </p>
          </div>

          <a
            href="#calculadora-x-avaliacao"
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
              shadow-[0_14px_34px_rgba(20,5,8,0.16)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Calculadora x avaliação
          </a>
        </div>
      </div>
    </section>
  );
}