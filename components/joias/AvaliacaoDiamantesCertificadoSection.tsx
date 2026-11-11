import DiamondTweezersIllustration from './DiamondTweezersIllustration';

const reportFields = [
  {
    label: 'Peso',
    value: '1,00 ct',
  },
  {
    label: 'Cor',
    value: 'G',
  },
  {
    label: 'Pureza',
    value: 'VS1',
  },
  {
    label: 'Formato',
    value: 'Round',
  },
  {
    label: 'Medidas',
    value: '6,40 × 6,42 mm',
  },
  {
    label: 'Fluorescência',
    value: 'None',
  },
];

export default function AvaliacaoDiamantesCertificadoSection() {
  return (
    <section
      id="certificado-avaliacao"
      aria-labelledby="certificado-avaliacao-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(214,187,139,0.14),transparent_34%)]
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
              Certificado e conferência física
            </p>

            <h2
              id="certificado-avaliacao-title"
              className="
                mt-6
                max-w-[850px]
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
              O certificado descreve. A avaliação física confere.
            </h2>
          </div>

          <div className="max-w-[660px] lg:justify-self-end">
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
              Um relatório gemológico organiza informações técnicas importantes,
              mas a avaliação presencial continua sendo essencial para conferir
              se o documento corresponde à pedra apresentada.
            </p>
          </div>
        </div>

        {/* RELATÓRIO X PEDRA */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.95fr_1.05fr]
          "
        >
          {/* RELATÓRIO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.45rem]
              border
              border-[#A17D4F]/14
              bg-[#FCFAF7]
              p-7
              shadow-[0_28px_76px_rgba(96,72,45,0.06)]
              md:p-9
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
                bg-[#D6BB8B]/12
                blur-[65px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  flex-col
                  gap-4
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
                      text-[2.35rem]
                      leading-none
                      tracking-[-0.03em]
                      text-[#332A2B]
                    "
                  >
                    Relatório gemológico
                  </h3>
                </div>

                <span
                  className="
                    inline-flex
                    w-fit
                    rounded-full
                    border
                    border-[#A17D4F]/14
                    bg-[#EFE6D8]/60
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
                  rounded-[1.9rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#F7F3EF]
                  p-6
                  md:p-7
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-6
                    border-b
                    border-[#A17D4F]/10
                    pb-6
                  "
                >
                  <div>
                    <p
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#A17D4F]
                      "
                    >
                      Identificação
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[21px]
                        text-[#332A2B]
                      "
                    >
                      Diamante lapidado
                    </p>
                  </div>

                  <div className="text-right">
                    <p
                      className="
                        text-[7px]
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
                        text-[17px]
                        text-[#332A2B]
                      "
                    >
                      00012345
                    </p>
                  </div>
                </div>

                <div
                  className="
                    mt-6
                    grid
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {reportFields.map((item) => (
                    <div
                      key={item.label}
                      className="
                        rounded-[1.35rem]
                        border
                        border-[#A17D4F]/10
                        bg-[#FCFAF7]
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
                          text-[22px]
                          leading-none
                          text-[#332A2B]
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  className="
                    mt-6
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#EFE6D8]/54
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
                    Observação
                  </p>

                  <p
                    className="
                      mt-3
                      text-[9px]
                      font-light
                      leading-5
                      text-[#675C5D]
                    "
                  >
                    Este layout é apenas ilustrativo e não representa o formato
                    de nenhum laboratório específico.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PEDRA */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.45rem]
              border
              border-[#A17D4F]/14
              bg-[linear-gradient(145deg,#F8F3EB_0%,#EEE1CF_100%)]
              p-7
              shadow-[0_28px_76px_rgba(96,72,45,0.07)]
              md:p-9
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
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
                  Conferência física
                </p>

                <h3
                  className="
                    mt-3
                    font-serif
                    text-[2.35rem]
                    leading-none
                    tracking-[-0.03em]
                    text-[#332A2B]
                  "
                >
                  A pedra apresentada
                </h3>
              </div>

              <span
                className="
                  inline-flex
                  w-fit
                  rounded-full
                  border
                  border-[#A17D4F]/14
                  bg-[#FCFAF7]/60
                  px-4
                  py-2
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8C6635]
                "
              >
                Observação direta
              </span>
            </div>

            <div
              className="
                mt-7
                flex
                min-h-[500px]
                items-center
                justify-center
                overflow-hidden
                rounded-[1.9rem]
                border
                border-[#A17D4F]/10
                bg-[#FCFAF7]/46
                px-3
                py-4
              "
            >
              <DiamondTweezersIllustration
                className="
                  h-auto
                  w-full
                  max-w-[520px]
                "
              />
            </div>
          </div>
        </div>

        {/* FRASE CENTRAL */}
        <div
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[2.3rem]
            border
            border-[#A17D4F]/16
            bg-[linear-gradient(135deg,#E5CBA1_0%,#F3E6D0_50%,#DCC08F_100%)]
            px-8
            py-10
            shadow-[0_26px_70px_rgba(96,72,45,0.08)]
            md:px-12
            md:py-12
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
              bg-white/28
              blur-[75px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-7
              lg:grid-cols-[auto_1fr]
              lg:items-center
            "
          >
            <span
              className="
                font-serif
                text-[4.5rem]
                leading-none
                text-[#B99154]
                md:text-[5.5rem]
              "
            >
              ≠
            </span>

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
                Documento não é a própria pedra
              </p>

              <h3
                className="
                  mt-4
                  max-w-[980px]
                  font-serif
                  text-[2.1rem]
                  leading-[1.04]
                  tracking-[-0.025em]
                  text-[#332A2B]
                  md:text-[2.9rem]
                "
              >
                O certificado descreve características. A avaliação física
                verifica a correspondência entre essas informações e o diamante apresentado.
              </h3>
            </div>
          </div>
        </div>

        {/* O QUE É CONFERIDO */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.84fr_1.16fr]
          "
        >
          <div
            className="
              rounded-[2.15rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DCC08F_100%)]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.07)]
              md:p-10
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
              Durante a conferência
            </p>

            <h3
              className="
                mt-5
                font-serif
                text-[2.5rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              Os dados precisam fazer sentido quando comparados à pedra.
            </h3>

            <p
              className="
                mt-6
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              Medidas, formato e outras características ajudam a verificar se
              o documento apresentado é compatível com o diamante observado.
            </p>
          </div>

          <div
            className="
              rounded-[2.15rem]
              border
              border-[#A17D4F]/12
              bg-[#FCFAF7]
              p-8
              shadow-[0_22px_58px_rgba(96,72,45,0.045)]
              md:p-10
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
              Pontos de correspondência
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Formato e estilo de lapidação',
                'Medidas da pedra',
                'Peso, quando disponível',
                'Características de pureza',
                'Grau de cor informado',
                'Condição geral',
                'Possíveis inscrições',
                'Outras particularidades descritas',
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[1.35rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#F7F3EF]
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
                      border-[#A17D4F]/18
                      bg-[#EFE6D8]
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#A17D4F]
                      "
                    />
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-light
                      leading-5
                      text-[#5F5350]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COM / SEM CERTIFICADO */}
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
                text-[2.25rem]
                leading-none
                text-[#332A2B]
              "
            >
              Existe uma referência técnica prévia.
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
              O documento ajuda a orientar a conferência e fornece dados para
              comparação com a pedra apresentada.
            </p>
          </article>

          <article
            className="
              rounded-[2rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F2E4CD_52%,#DEC296_100%)]
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
                text-[2.25rem]
                leading-none
                text-[#332A2B]
              "
            >
              A avaliação começa pela própria pedra.
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
              A ausência de relatório não impede uma análise inicial das
              características observáveis do diamante.
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
              Além da pedra e do documento
            </p>

            <h3
              className="
                mt-4
                max-w-[900px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              A avaliação também depende de instrumentos adequados para observar, medir e comparar.
            </h3>
          </div>

          <a
            href="#instrumentos-avaliacao"
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
            Ver instrumentos
          </a>
        </div>
      </div>
    </section>
  );
}