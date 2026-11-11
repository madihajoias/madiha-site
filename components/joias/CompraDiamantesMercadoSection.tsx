const fatoresMercado = [
  {
    label: 'Referência internacional',
    title: 'O mercado olha além da joia local',
    text:
      'Diamantes são negociados em um mercado internacional, por isso determinadas referências e comparações costumam considerar valores em dólar.',
  },
  {
    label: 'Câmbio',
    title: 'O dólar participa da conversão',
    text:
      'Quando uma referência internacional está expressa em dólar, o câmbio influencia a leitura em reais e pode alterar a percepção de valor ao longo do tempo.',
  },
  {
    label: 'Liquidez',
    title: 'Nem todo diamante tem a mesma facilidade de negociação',
    text:
      'Formato, classificação, tamanho e procura podem influenciar a rapidez e a facilidade com que uma pedra encontra comprador no mercado.',
  },
  {
    label: 'Demanda',
    title: 'Alguns perfis são mais procurados',
    text:
      'A procura varia conforme características como peso, cor, pureza, formato, certificação e preferência do mercado em determinado momento.',
  },
  {
    label: 'Classificação',
    title: 'Os dados técnicos orientam',
    text:
      'Peso, cor, pureza e lapidação ajudam a organizar a leitura da pedra, mas não determinam isoladamente o preço final de negociação.',
  },
  {
    label: 'Condição comercial',
    title: 'O preço real nasce na negociação',
    text:
      'O valor comercial considera o conjunto da pedra, o momento de mercado, a demanda, a liquidez e as condições específicas da negociação.',
  },
];

export default function CompraDiamantesMercadoSection() {
  return (
    <section
      id="mercado-internacional"
      aria-labelledby="mercado-diamantes-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.13),transparent_34%)]
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
              Mercado internacional
            </p>

            <h2
              id="mercado-diamantes-title"
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
              Classificação técnica e preço comercial não são a mesma coisa.
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
              Os dados gemológicos ajudam a descrever a pedra. O mercado, porém,
              também considera fatores como procura, liquidez, câmbio e momento
              comercial.
            </p>
          </div>
        </div>

        {/* FLUXO VISUAL */}
        <div
          className="
            mt-16
            grid
            gap-4
            md:grid-cols-4
          "
        >
          {[
            ['01', 'Classificação', 'Peso, cor, pureza e lapidação'],
            ['02', 'Referência', 'Mercado internacional'],
            ['03', 'Câmbio', 'Conversão para reais'],
            ['04', 'Negociação', 'Preço comercial'],
          ].map(([numero, titulo, texto]) => (
            <div
              key={numero}
              className="
                rounded-[1.7rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                p-6
                shadow-[0_16px_42px_rgba(96,72,45,0.045)]
              "
            >
              <span
                className="
                  font-serif
                  text-[2.2rem]
                  leading-none
                  text-[#C7A87A]
                "
              >
                {numero}
              </span>

              <p
                className="
                  mt-6
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4F]
                "
              >
                {titulo}
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#332A2B]
                "
              >
                {texto}
              </p>
            </div>
          ))}
        </div>

        {/* BLOCO PRINCIPAL */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
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
                Uma forma simples de entender
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
                A cotação funciona como um termômetro. O preço comercial nasce da negociação.
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
                Uma referência de mercado ajuda a entender o cenário. Mas a
                proposta real depende da pedra apresentada, da demanda e das
                condições comerciais do momento.
              </p>

              <div
                className="
                  mt-9
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <div
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
                    Referência
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[21px]
                      text-[#332A2B]
                    "
                  >
                    Onde o mercado está
                  </p>
                </div>

                <div
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
                    Comercial
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[21px]
                      text-[#332A2B]
                    "
                  >
                    O que pode ser negociado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FATORES */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {fatoresMercado.map((item) => (
              <article
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#F7F3EF]
                  p-7
                  shadow-[0_18px_48px_rgba(96,72,45,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#A17D4F]/28
                  hover:bg-[#FCFAF7]
                  hover:shadow-[0_24px_58px_rgba(96,72,45,0.07)]
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
                    bg-[#D6BB8B]/12
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
                      text-[#A17D4F]
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[24px]
                      leading-tight
                      text-[#332A2B]
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
                      bg-[#A17D4F]/30
                    "
                  />

                  <p
                    className="
                      mt-5
                      text-[11px]
                      font-light
                      leading-6
                      text-[#675C5D]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* COMPARATIVO */}
        <div
          className="
            mt-10
            grid
            gap-5
            lg:grid-cols-2
          "
        >
          <article
            className="
              rounded-[2rem]
              border
              border-[#A17D4F]/12
              bg-[#FCFAF7]
              p-8
              shadow-[0_20px_54px_rgba(96,72,45,0.05)]
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
              Classificação técnica
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[2.2rem]
                leading-none
                text-[#332A2B]
              "
            >
              Descreve características da pedra.
            </h3>

            <p
              className="
                mt-5
                text-[11px]
                font-light
                leading-6
                text-[#675C5D]
              "
            >
              Peso, cor, pureza, lapidação, medidas e outros dados ajudam a
              organizar tecnicamente a leitura do diamante.
            </p>
          </article>

          <article
            className="
              rounded-[2rem]
              border
              border-[#A17D4F]/16
              bg-[#332A2B]
              p-8
              shadow-[0_20px_54px_rgba(51,42,43,0.09)]
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
              Preço comercial
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[2.2rem]
                leading-none
                text-[#F7F3EF]
              "
            >
              Reflete o contexto real de negociação.
            </h3>

            <p
              className="
                mt-5
                text-[11px]
                font-light
                leading-6
                text-[#D0C1BE]
              "
            >
              Além dos dados técnicos, considera demanda, liquidez, momento de
              mercado e condições comerciais da pedra apresentada.
            </p>
          </article>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[linear-gradient(135deg,#EFE0C6_0%,#F7EFE3_50%,#E2CAA2_100%)]
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
              Mercado é contexto
            </p>

            <h3
              className="
                mt-4
                max-w-[880px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#332A2B]
                md:text-[2.7rem]
              "
            >
              O mesmo diamante pode ter leitura técnica estável e condição comercial variável.
            </h3>
          </div>

          <a
            href="#calculadora-diamantes"
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
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Fazer estimativa
          </a>
        </div>
      </div>
    </section>
  );
}