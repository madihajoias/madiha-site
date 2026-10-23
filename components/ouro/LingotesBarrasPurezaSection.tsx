const referencias = [
  {
    label: '24k',
    title: 'Referência de pureza',
    text:
      'O ouro 24k representa a referência máxima dentro da escala de quilates e é normalmente associado a materiais de alta pureza.',
  },
  {
    label: '999',
    title: '99,9% de ouro',
    text:
      'A marcação 999 indica, em termos nominais, 999 partes de ouro em cada 1000 partes do material.',
  },
  {
    label: '999,9',
    title: '99,99% de ouro',
    text:
      'A marcação 999,9 é utilizada em materiais de pureza ainda mais elevada e costuma aparecer em lingotes refinados.',
  },
  {
    label: 'Certificação',
    title: 'Informação complementar',
    text:
      'Selos, inscrições e certificados ajudam na identificação, mas precisam ser considerados em conjunto com a avaliação física do material.',
  },
];

export default function LingotesBarrasPurezaSection() {
  return (
    <section
      id="pureza-lingotes-barras"
      aria-labelledby="lingotes-barras-pureza-title"
      className="
        relative
        overflow-hidden
        bg-[#F4E8D6]
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
          bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.82),transparent_30%),radial-gradient(circle_at_86%_82%,rgba(170,125,61,0.14),transparent_34%)]
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
                text-[#8F6E3F]
                md:text-[10px]
              "
            >
              Pureza e teor
            </p>

            <h2
              id="lingotes-barras-pureza-title"
              className="
                mt-6
                max-w-[700px]
                font-serif
                text-[3rem]
                font-normal
                leading-[1.02]
                tracking-[-0.025em]
                text-[#765525]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              24k, 999
              <br />
              e 999,9.
            </h2>
          </div>

          <div
            className="
              max-w-[640px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#806C50]
                md:text-[15px]
                md:leading-8
              "
            >
              Lingotes e barras podem apresentar diferentes marcações de
              pureza. Essas referências são importantes, mas devem ser
              analisadas junto com peso, densidade, origem e características
              físicas do material.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* PAINEL PRINCIPAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[3rem_3rem_5rem_3rem]
              border
              border-white/60
              bg-[linear-gradient(145deg,rgba(199,165,108,0.98),rgba(177,136,72,0.96),rgba(154,110,49,0.95),rgba(188,148,84,0.95))]
              p-8
              shadow-[0_38px_90px_rgba(83,55,18,0.20),inset_0_1px_0_rgba(255,255,255,0.42)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-24
                -top-28
                h-72
                w-72
                rounded-full
                bg-[#FFECC3]/34
                blur-[70px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#5F431F]
                "
              >
                Referência de pureza
              </p>

              <p
                className="
                  mt-6
                  font-serif
                  text-[5rem]
                  leading-none
                  text-[#412907]
                  md:text-[6.2rem]
                "
              >
                999,9
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[24px]
                  text-[#412907]
                "
              >
                Alta pureza nominal
              </p>

              <div
                className="
                  my-8
                  h-px
                  w-20
                  bg-[#52350F]/25
                "
              />

              <p
                className="
                  max-w-[450px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                Marcações como 999 ou 999,9 informam a pureza declarada do
                material. Elas são relevantes, mas não devem ser analisadas
                isoladamente durante uma operação de compra.
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
                    rounded-[1.4rem]
                    border
                    border-white/28
                    bg-white/10
                    px-5
                    py-5
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#5F431F]
                    "
                  >
                    999
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[21px]
                      text-[#412907]
                    "
                  >
                    99,9%
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.4rem]
                    border
                    border-white/28
                    bg-white/10
                    px-5
                    py-5
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#5F431F]
                    "
                  >
                    999,9
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[21px]
                      text-[#412907]
                    "
                  >
                    99,99%
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-9
                  rounded-[1.6rem]
                  border
                  border-white/28
                  bg-white/10
                  px-6
                  py-5
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#5F431F]
                  "
                >
                  A marcação não basta
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-light
                    leading-6
                    text-[#4E3515]/78
                  "
                >
                  A avaliação considera também peso, densidade, integridade,
                  características físicas e demais informações disponíveis
                  sobre o lingote ou barra.
                </p>
              </div>
            </div>
          </div>

          {/* REFERÊNCIAS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {referencias.map((item) => (
              <article
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/60
                  bg-[#F1E2C8]/38
                  p-7
                  shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.52)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#F4E7D1]/52
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
                    bg-[#D5B27A]/14
                    blur-[30px]
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
                      text-[#947244]
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
                      text-[#68491F]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[11px]
                      font-light
                      leading-6
                      text-[#725D41]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CERTIFICADO / MARCAÇÃO */}
        <div
          className="
            mt-6
            grid
            gap-4
            md:grid-cols-2
          "
        >
          <article
            className="
              rounded-[2rem]
              border
              border-white/60
              bg-[#F1E2C8]/38
              p-7
              shadow-[0_18px_48px_rgba(94,66,27,0.05)]
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
                text-[#947244]
              "
            >
              Marcação
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[25px]
                text-[#68491F]
              "
            >
              Informação gravada no material
            </h3>

            <p
              className="
                mt-4
                text-[11px]
                font-light
                leading-6
                text-[#725D41]
              "
            >
              Peso, teor, fabricante, número de série ou outras inscrições
              podem ajudar a compreender a origem e as características
              declaradas do lingote ou barra.
            </p>
          </article>

          <article
            className="
              rounded-[2rem]
              border
              border-white/70
              bg-white/22
              p-7
              shadow-[0_18px_48px_rgba(94,66,27,0.05)]
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
                text-[#947244]
              "
            >
              Certificado
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[25px]
                text-[#68491F]
              "
            >
              Relevante, mas complementar
            </h3>

            <p
              className="
                mt-4
                text-[11px]
                font-light
                leading-6
                text-[#725D41]
              "
            >
              Quando existente, a documentação é considerada durante a
              avaliação, mas a análise física do material continua sendo uma
              etapa fundamental do processo.
            </p>
          </article>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-[#765525]/12
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              max-w-[740px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            A pureza declarada influencia diretamente a referência de valor,
            mas precisa ser analisada em conjunto com as características reais
            do material apresentado.
          </p>

          <a
            href="#cotacao-lingotes-barras"
            className="
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              rounded-full
              border
              border-[#765525]/22
              bg-white/20
              px-7
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#765525]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/38
            "
          >
            Ver referência de valor
          </a>
        </div>
      </div>
    </section>
  );
}