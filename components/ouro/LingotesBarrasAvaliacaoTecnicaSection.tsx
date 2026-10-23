const etapas = [
  {
    numero: '01',
    titulo: 'Pesagem de precisão',
    texto:
      'O lingote ou barra é pesado com equipamento de precisão para estabelecer uma referência confiável de massa antes das demais verificações.',
  },
  {
    numero: '02',
    titulo: 'Análise hidrostática',
    texto:
      'Utilizamos balança de precisão hidrostática para auxiliar na análise técnica do material e obter uma leitura mais precisa de suas características físicas.',
  },
  {
    numero: '03',
    titulo: 'Conferência de teor',
    texto:
      'Marcações como 24k, 999 ou 999,9 ajudam na identificação, mas o teor precisa ser analisado dentro do conjunto de informações disponíveis.',
  },
  {
    numero: '04',
    titulo: 'Avaliação comercial',
    texto:
      'Com peso, teor e características confirmadas, a referência comercial é calculada de acordo com o material efetivamente avaliado.',
  },
];

export default function LingotesBarrasAvaliacaoTecnicaSection() {
  return (
    <section
      id="avaliacao-tecnica"
      aria-labelledby="lingotes-avaliacao-title"
      className="
        relative
        overflow-hidden
        bg-[#EAD9BC]
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
          bg-[radial-gradient(circle_at_14%_16%,rgba(255,250,240,0.76),transparent_30%),radial-gradient(circle_at_86%_84%,rgba(163,115,49,0.14),transparent_34%)]
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
                text-[#8C692E]
                md:text-[10px]
              "
            >
              Avaliação técnica
            </p>

            <h2
              id="lingotes-avaliacao-title"
              className="
                mt-6
                max-w-[720px]
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
              Precisão na avaliação
              <br />
              de lingotes e barras.
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
                text-[#725D41]
                md:text-[15px]
                md:leading-8
              "
            >
              A avaliação de ouro físico exige mais do que uma simples leitura
              de peso. Utilizamos balança de precisão hidrostática como parte
              do processo técnico para uma análise mais confiável do material.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
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
              shadow-[0_40px_95px_rgba(83,55,18,0.21),inset_0_1px_0_rgba(255,255,255,0.44)]
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
                Balança de precisão hidrostática
              </p>

              <h3
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[2.8rem]
                  font-normal
                  leading-[1.02]
                  text-[#412907]
                  md:text-[3.6rem]
                "
              >
                Mais informação
                <br />
                para avaliar com
                <br />
                maior precisão.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[470px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                A pesagem hidrostática auxilia na análise das propriedades
                físicas do material e complementa a avaliação tradicional de
                peso, teor e características visuais.
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
                    Método
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    Hidrostático
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
                    Objetivo
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    Mais precisão
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
                  Análise completa
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
                  Nenhum dado é analisado isoladamente. A pesagem hidrostática
                  é utilizada em conjunto com outras verificações técnicas para
                  formar uma leitura mais consistente do material.
                </p>
              </div>
            </div>
          </div>

          {/* ETAPAS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
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
                      font-serif
                      text-[34px]
                      leading-none
                      text-[#B38B52]
                    "
                  >
                    {etapa.numero}
                  </p>

                  <h3
                    className="
                      mt-5
                      font-serif
                      text-[24px]
                      font-normal
                      leading-tight
                      text-[#68491F]
                    "
                  >
                    {etapa.titulo}
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
                    {etapa.texto}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BLOCO TÉCNICO */}
        <div
          className="
            mt-6
            grid
            gap-4
            md:grid-cols-3
          "
        >
          {[
            {
              label: 'Peso',
              value: 'Conferência precisa',
              text:
                'A massa do material é verificada com equipamento adequado antes da análise comercial.',
            },
            {
              label: 'Densidade',
              value: 'Informação complementar',
              text:
                'A análise hidrostática auxilia na obtenção de informações físicas adicionais sobre o material.',
            },
            {
              label: 'Teor',
              value: 'Confirmação técnica',
              text:
                'Marcações e certificados são considerados, mas não substituem a avaliação do material apresentado.',
            },
          ].map((item) => (
            <article
              key={item.label}
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
                {item.label}
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[23px]
                  leading-tight
                  text-[#68491F]
                "
              >
                {item.value}
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
            </article>
          ))}
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
            O objetivo é reduzir incertezas antes da definição do valor
            comercial, utilizando diferentes informações técnicas sobre o
            lingote ou barra apresentado.
          </p>

          <a
            href="#pureza-lingotes-barras"
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
            Entender pureza e teor
          </a>
        </div>
      </div>
    </section>
  );
}