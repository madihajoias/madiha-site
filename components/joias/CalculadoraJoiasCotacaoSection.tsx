const fluxo = [
  {
    numero: '01',
    label: 'Referência',
    title: 'Cotação de mercado',
    text:
      'A cotação ajuda a indicar o comportamento e o nível de preços utilizado como referência pelo mercado.',
  },
  {
    numero: '02',
    label: 'Análise',
    title: 'Características da peça',
    text:
      'Metal, peso, teor, diamantes e outras características precisam ser confirmados na peça real.',
  },
  {
    numero: '03',
    label: 'Negociação',
    title: 'Preço comercial',
    text:
      'O preço comercial representa as condições efetivamente consideradas em uma operação de compra ou venda.',
  },
];

const fatores = [
  'Características reais do diamante',
  'Peso e classificação confirmados',
  'Qualidade da lapidação',
  'Documentação ou certificação',
  'Liquidez da pedra',
  'Demanda do mercado',
  'Condições comerciais',
  'Momento da negociação',
];

export default function CalculadoraJoiasCotacaoSection() {
  return (
    <section
      id="cotacao-e-preco-comercial"
      aria-labelledby="calculadora-cotacao-title"
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
          bg-[radial-gradient(circle_at_14%_20%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.035),transparent_34%)]
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
            lg:grid-cols-[0.9fr_1.1fr]
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
              Cotação x preço comercial
            </p>

            <h2
              id="calculadora-cotacao-title"
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
              A cotação funciona como um termômetro do mercado.
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
              Ela ajuda a entender onde o mercado se encontra em determinado
              momento, mas não representa automaticamente o preço pelo qual uma
              joia ou um diamante será comprado ou vendido.
            </p>
          </div>
        </div>

        {/* FLUXO */}
        <div
          className="
            mt-16
            grid
            gap-4
            lg:grid-cols-3
          "
        >
          {fluxo.map((item) => (
            <article
              key={item.numero}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.9rem]
                border
                border-white/10
                bg-white/[0.045]
                p-7
                shadow-[0_20px_52px_rgba(20,5,8,0.15),inset_0_1px_0_rgba(255,255,255,0.04)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C7A87A]/35
                hover:bg-white/[0.065]
                md:p-8
              "
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <span
                    className="
                      inline-flex
                      h-11
                      min-w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/28
                      bg-[#C7A87A]/[0.08]
                      px-3
                      font-serif
                      text-[16px]
                      text-[#D6BB8B]
                    "
                  >
                    {item.numero}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      flex-1
                      bg-gradient-to-r
                      from-[#C7A87A]/40
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
                    text-[#D6BB8B]
                  "
                >
                  {item.label}
                </p>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-[25px]
                    font-normal
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  {item.title}
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
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* COTAÇÃO X PREÇO */}
        <div
          className="
            mt-6
            grid
            gap-6
            lg:grid-cols-2
          "
        >
          {/* COTAÇÃO */}
          <article
            className="
              relative
              overflow-hidden
              rounded-[2.25rem]
              border
              border-white/10
              bg-white/[0.045]
              p-8
              shadow-[0_28px_78px_rgba(20,5,8,0.17)]
              backdrop-blur-xl
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
                bg-[#C7A87A]/10
                blur-[65px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#D6BB8B]
                "
              >
                Cotação de referência
              </p>

              <h3
                className="
                  mt-5
                  max-w-[520px]
                  font-serif
                  text-[2.5rem]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#F7F3EF]
                  md:text-[3.25rem]
                "
              >
                Mostra onde o mercado está.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[520px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                "
              >
                A cotação é um parâmetro de mercado. Ela permite acompanhar uma
                referência de preço em determinado momento, mas não deve ser
                confundida com uma oferta de compra.
              </p>

              <div
                className="
                  mt-9
                  rounded-[1.6rem]
                  border
                  border-[#C7A87A]/22
                  bg-[#F7F3EF]/[0.06]
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
                    text-[#D6BB8B]
                  "
                >
                  Termômetro do mercado
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-light
                    leading-6
                    text-[#D3C3C0]
                  "
                >
                  Assim como um termômetro indica a temperatura, a cotação ajuda
                  a mostrar o nível de preços do mercado naquele momento.
                </p>
              </div>
            </div>
          </article>

          {/* PREÇO COMERCIAL */}
          <article
            className="
              rounded-[2.25rem]
              border
              border-[#C7A87A]/18
              bg-[#F7F3EF]
              p-8
              shadow-[0_28px_78px_rgba(20,5,8,0.17)]
              md:p-10
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#A17D4F]
              "
            >
              Preço comercial
            </p>

            <h3
              className="
                mt-5
                max-w-[600px]
                font-serif
                text-[2.5rem]
                font-normal
                leading-[0.98]
                tracking-[-0.03em]
                text-[#4F1720]
                md:text-[3.25rem]
              "
            >
              Reflete uma negociação real.
            </h3>

            <p
              className="
                mt-7
                max-w-[610px]
                text-[12px]
                font-light
                leading-7
                text-[#776B6C]
              "
            >
              O preço comercial pode ser diferente da referência apresentada
              pela calculadora porque considera a peça real e as condições
              específicas da negociação.
            </p>

            <div
              className="
                mt-9
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {fatores.map((item) => (
                <div
                  key={item}
                  className="
                    rounded-[1.45rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="
                        mt-[7px]
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#C7A87A]
                      "
                    />

                    <p
                      className="
                        text-[10px]
                        font-light
                        leading-5
                        text-[#776B6C]
                      "
                    >
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-6
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#C7A87A]/20
            bg-[#F7F3EF]/[0.07]
            p-8
            backdrop-blur-xl
            md:p-10
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[1fr_auto_1fr]
              lg:items-center
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#D6BB8B]
                "
              >
                Cotação
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[26px]
                  leading-tight
                  text-[#F7F3EF]
                "
              >
                Referência de mercado
              </p>
            </div>

            <div
              aria-hidden="true"
              className="
                hidden
                h-px
                w-20
                bg-gradient-to-r
                from-transparent
                via-[#C7A87A]/55
                to-transparent
                lg:block
              "
            />

            <div className="lg:text-right">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#D6BB8B]
                "
              >
                Preço comercial
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[26px]
                  leading-tight
                  text-[#F7F3EF]
                "
              >
                Condição real de negociação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}