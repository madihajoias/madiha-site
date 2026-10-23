const criterios = [
  {
    label: 'Peso',
    title: 'Peso líquido do ouro',
    text:
      'A pesagem ajuda a determinar a quantidade de metal presente na peça e serve como uma das bases para a avaliação.',
  },
  {
    label: 'Teor',
    title: 'Pureza do ouro',
    text:
      'O teor indica a proporção de ouro presente na liga, como 24k, 22k, 18k, 14k ou outros teores compatíveis.',
  },
  {
    label: 'Liga',
    title: 'Composição do metal',
    text:
      'A composição da liga pode variar de acordo com o tipo de ouro e os metais utilizados na sua formação.',
  },
  {
    label: 'Cor',
    title: 'Ouro amarelo ou branco',
    text:
      'O tipo de ouro também é considerado na análise. Ouro amarelo e ouro branco possuem regras comerciais distintas.',
  },
  {
    label: 'Estado',
    title: 'Condição da peça',
    text:
      'Peças usadas, antigas, quebradas ou fora de uso podem ser avaliadas. O estado da peça é observado durante o processo.',
  },
  {
    label: 'Elementos',
    title: 'Materiais agregados',
    text:
      'Pedras, fechos, componentes não metálicos e outros elementos podem precisar ser considerados separadamente na análise.',
  },
];

export default function AvaliacaoOuroCriteriosSection() {
  return (
    <section
      id="criterios-avaliacao"
      aria-labelledby="criterios-avaliacao-title"
      className="
        relative
        overflow-hidden
        bg-[#E9D8BA]
        py-24
        md:py-32
        lg:py-36
      "
    >
      {/* FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_14%_22%,rgba(255,250,240,0.72),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(170,122,57,0.16),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          top-12
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#F6E5C6]/34
          blur-[90px]
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
                text-[#8C692E]
                md:text-[10px]
              "
            >
              Critérios da avaliação
            </p>

            <h2
              id="criterios-avaliacao-title"
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
              O que é analisado
              <br />
              no seu ouro.
            </h2>
          </div>

          <div
            className="
              max-w-[610px]
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
              Uma avaliação adequada considera diferentes características
              do metal. Peso e teor são fundamentais, mas não são os únicos
              elementos observados durante a análise.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-8
          "
        >
          {/* PAINEL PRINCIPAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[3rem_3rem_5rem_3rem]
              border
              border-white/55
              bg-[linear-gradient(145deg,rgba(197,163,105,0.95),rgba(170,128,66,0.94),rgba(148,103,45,0.92))]
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
                Base técnica
              </p>

              <h3
                className="
                  mt-5
                  max-w-[420px]
                  font-serif
                  text-[2.6rem]
                  font-normal
                  leading-[1.02]
                  text-[#412907]
                  md:text-[3.4rem]
                "
              >
                Peso + teor
                <br />
                + composição
              </h3>

              <p
                className="
                  mt-7
                  max-w-[430px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                A combinação dessas informações permite compreender melhor
                as características do ouro antes da apresentação de qualquer
                referência de valor.
              </p>

              <div
                className="
                  mt-10
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
                    Ouro amarelo
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    24k a 10k
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
                    Ouro branco
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    18k a 10k
                  </p>
                </div>
              </div>

              <a
                href="#calculadora-de-ouro"
                className="
                  mt-10
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/12
                  px-7
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#412907]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/22
                "
              >
                Consultar estimativa
              </a>
            </div>
          </div>

          {/* CRITÉRIOS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {criterios.map((criterio) => (
              <article
                key={criterio.label}
                className="
                  rounded-[2rem]
                  border
                  border-white/58
                  bg-[#F1E2C8]/38
                  p-7
                  shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.52)]
                  backdrop-blur-xl
                  transition-all
                  duration-400
                  hover:-translate-y-1
                  hover:bg-[#F4E7D0]/48
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
                  {criterio.label}
                </p>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-[23px]
                    font-normal
                    leading-tight
                    text-[#68491F]
                  "
                >
                  {criterio.title}
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
                  {criterio.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* OBSERVAÇÃO */}
        <div
          className="
            mt-14
            rounded-[1.7rem]
            border
            border-[#765525]/10
            bg-white/16
            px-6
            py-5
            backdrop-blur-xl
            md:px-8
          "
        >
          <p
            className="
              text-[10px]
              font-light
              leading-6
              text-[#725D41]
            "
          >
            A análise final depende da verificação presencial da peça.
            Resultados obtidos pela calculadora funcionam como referência
            inicial e não substituem a avaliação técnica.
          </p>
        </div>
      </div>
    </section>
  );
}