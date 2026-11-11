const camposCertificado = [
  {
    label: 'Peso',
    value: '1,00 ct',
    description: 'Peso do diamante em quilates.',
  },
  {
    label: 'Cor',
    value: 'G',
    description: 'Grau de tonalidade dentro da escala de classificação.',
  },
  {
    label: 'Pureza',
    value: 'VS1',
    description: 'Classificação de inclusões e características internas.',
  },
  {
    label: 'Medidas',
    value: '6,4 × 6,4 mm',
    description: 'Dimensões aproximadas da pedra.',
  },
  {
    label: 'Lapidação',
    value: 'Round Brilliant',
    description: 'Formato e estilo de lapidação descritos no relatório.',
  },
  {
    label: 'Fluorescência',
    value: 'None',
    description: 'Resposta observada sob luz ultravioleta.',
  },
];

export default function CompraDiamantesCertificadoSection() {
  return (
    <section
      id="certificado"
      aria-labelledby="certificado-diamante-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.14),transparent_34%)]
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
              Certificado gemológico
            </p>

            <h2
              id="certificado-diamante-title"
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
              O certificado descreve o diamante. A pedra precisa confirmar os dados.
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
              Um relatório gemológico pode trazer informações importantes sobre
              peso, cor, pureza, medidas, lapidação e outras características.
              Esses dados ajudam na análise, mas devem corresponder à pedra apresentada.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.86fr_1.14fr]
          "
        >
          {/* PAINEL EXPLICATIVO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E8D2AD_0%,#F1E1C7_50%,#DCC08F_100%)]
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
                Como interpretar
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
                Um certificado organiza informações técnicas da pedra.
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
                Para quem não trabalha com gemologia, muitos códigos parecem
                abstratos. O importante é entender o que cada campo representa
                e como ele participa da leitura do diamante.
              </p>

              <div
                className="
                  mt-9
                  rounded-[1.6rem]
                  border
                  border-[#8C6635]/14
                  bg-white/25
                  px-6
                  py-6
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
                  Regra simples
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
                  O documento ajuda a descrever. A conferência física ajuda a confirmar.
                </p>
              </div>
            </div>
          </div>

          {/* FICHA VISUAL */}
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
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-start
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#A17D4F]
                  "
                >
                  Exemplo didático
                </p>

                <h3
                  className="
                    mt-3
                    font-serif
                    text-[2.3rem]
                    leading-none
                    tracking-[-0.03em]
                    text-[#332A2B]
                  "
                >
                  Leitura de um relatório
                </h3>
              </div>

              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-[#A17D4F]/12
                  bg-[#EFE6D8]/65
                  px-4
                  py-2
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8C6635]
                "
              >
                Exemplo visual
              </span>
            </div>

            <div
              className="
                mt-8
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {camposCertificado.map((item) => (
                <div
                  key={item.label}
                  className="
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#F7F3EF]
                    px-5
                    py-5
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
                      text-[23px]
                      leading-none
                      text-[#332A2B]
                    "
                  >
                    {item.value}
                  </p>

                  <p
                    className="
                      mt-3
                      text-[9px]
                      font-light
                      leading-5
                      text-[#776B6C]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="
                mt-6
                rounded-[1.55rem]
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
                Para quem é leigo
              </p>

              <p
                className="
                  mt-3
                  text-[10px]
                  font-light
                  leading-5
                  text-[#675C5D]
                "
              >
                Não é necessário decorar códigos ou escalas. O certificado serve
                como uma linguagem padronizada para descrever determinadas
                características da pedra.
              </p>
            </div>
          </div>
        </div>

        {/* COM X SEM CERTIFICADO */}
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
              Com certificado
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
              Já existem dados prévios para conferir.
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
              O relatório pode orientar a análise, desde que corresponda
              corretamente à pedra apresentada.
            </p>
          </article>

          <article
            className="
              rounded-[2rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D2AD_0%,#F2E3CB_52%,#DEC295_100%)]
              p-8
              shadow-[0_20px_54px_rgba(96,72,45,0.07)]
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#8C6635]
              "
            >
              Sem certificado
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
              A avaliação ainda pode começar pela própria pedra.
            </h3>

            <p
              className="
                mt-5
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              A ausência de documentação não significa automaticamente que o
              diamante não possa ser analisado ou considerado em uma negociação.
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
            border-[#A17D4F]/14
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
              Documento e pedra
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
              Certificação ajuda a organizar informações. A avaliação confirma o contexto real.
            </h3>
          </div>

          <a
            href="#mercado-internacional"
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
            Entender o mercado
          </a>
        </div>
      </div>
    </section>
  );
}