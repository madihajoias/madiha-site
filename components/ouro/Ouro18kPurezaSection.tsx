const pontos = [
  {
    label: '18 quilates',
    title: '18 partes de ouro',
    text:
      'Na escala de 24 partes, o ouro 18k possui 18 partes de ouro e 6 partes de outros metais.',
  },
  {
    label: 'Pureza',
    title: '75% de ouro',
    text:
      'A proporção de ouro corresponde a 75% da composição total da liga.',
  },
  {
    label: 'Liga metálica',
    title: '25% de outros metais',
    text:
      'Os 25% restantes são formados por outros metais, utilizados para aumentar resistência, durabilidade e estabilidade da joia.',
  },
  {
    label: 'Joalheria',
    title: 'Equilíbrio entre valor e resistência',
    text:
      'Essa composição torna o ouro 18k especialmente adequado para joias que precisam combinar valor, acabamento e uso frequente.',
  },
];

export default function Ouro18kPurezaSection() {
  return (
    <section
      id="pureza-do-ouro-18k"
      aria-labelledby="ouro-18k-pureza-title"
      className="
        relative
        overflow-hidden
        bg-[#F5EBDD]
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.84),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(199,168,122,0.15),transparent_34%)]
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
            lg:grid-cols-[0.85fr_1.15fr]
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
              Pureza do ouro 18k
            </p>

            <h2
              id="ouro-18k-pureza-title"
              className="
                mt-6
                max-w-[650px]
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
              O que significa
              <br />
              ouro 18 quilates.
            </h2>
          </div>

          <div
            className="
              max-w-[620px]
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
              A classificação em quilates indica a proporção de ouro presente
              na liga. No ouro 18k, 18 de cada 24 partes correspondem a ouro.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.78fr_1.22fr]
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
              bg-[linear-gradient(145deg,rgba(199,165,108,0.96),rgba(177,136,72,0.95),rgba(154,110,49,0.94),rgba(188,148,84,0.94))]
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
                Escala de quilates
              </p>

              <p
                className="
                  mt-6
                  font-serif
                  text-[5rem]
                  leading-none
                  text-[#412907]
                  md:text-[6.4rem]
                "
              >
                18/24
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[24px]
                  text-[#412907]
                "
              >
                75% de ouro
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
                  max-w-[430px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                Em uma divisão de 24 partes, 18 correspondem a ouro e 6 a
                outros metais. Essa proporção define o teor de 18 quilates.
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
                    Ouro
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[21px]
                      text-[#412907]
                    "
                  >
                    75%
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
                    Outros metais
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[21px]
                      text-[#412907]
                    "
                  >
                    25%
                  </p>
                </div>
              </div>

              {/* BARRA VISUAL */}
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
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
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
                    Composição
                  </p>

                  <p
                    className="
                      text-[9px]
                      font-medium
                      text-[#5F431F]/75
                    "
                  >
                    18k
                  </p>
                </div>

                <div
                  className="
                    mt-4
                    flex
                    h-2
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-[#614114]/15
                  "
                >
                  <div className="h-full w-3/4 bg-[#5C3B0E]/75" />

                  <div className="h-full w-1/4 bg-white/34" />
                </div>

                <div
                  className="
                    mt-3
                    flex
                    justify-between
                    text-[8px]
                    uppercase
                    tracking-[0.12em]
                    text-[#5F431F]/70
                  "
                >
                  <span>75% ouro</span>
                  <span>25% liga</span>
                </div>
              </div>
            </div>
          </div>

          {/* PONTOS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {pontos.map((ponto) => (
              <article
                key={ponto.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/60
                  bg-[#F0E0C7]/34
                  p-7
                  shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.55)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#F4E7D1]/50
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
                      text-[#947244]
                    "
                  >
                    {ponto.label}
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
                    {ponto.title}
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
                    {ponto.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
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
              max-w-[720px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            A presença de outros metais não significa menor qualidade: essa
            combinação é justamente o que fornece características mecânicas
            importantes para o uso em joias.
          </p>

          <a
            href="#composicao-ouro-18k"
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
            Entender a composição
          </a>
        </div>
      </div>
    </section>
  );
}