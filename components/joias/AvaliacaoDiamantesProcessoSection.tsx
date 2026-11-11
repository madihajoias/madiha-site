const etapas = [
  {
    numero: '01',
    titulo: 'Receber a pedra',
    subtitulo: 'Primeiro contato',
    texto:
      'O diamante é apresentado solto ou montado em joia, com ou sem certificado ou documentação complementar.',
  },
  {
    numero: '02',
    titulo: 'Observar',
    subtitulo: 'Leitura inicial',
    texto:
      'A pedra é examinada visualmente, considerando formato, aparência geral, características internas e condição superficial.',
  },
  {
    numero: '03',
    titulo: 'Medir',
    subtitulo: 'Dados objetivos',
    texto:
      'Peso, dimensões e proporções ajudam a transformar a observação em informações mensuráveis.',
  },
  {
    numero: '04',
    titulo: 'Analisar',
    subtitulo: 'Interpretação técnica',
    texto:
      'Cor, pureza, lapidação, simetria, acabamento e demais características são interpretadas em conjunto.',
  },
  {
    numero: '05',
    titulo: 'Explicar',
    subtitulo: 'Resultado compreensível',
    texto:
      'As principais conclusões da avaliação são apresentadas de forma clara, sem exigir conhecimento gemológico do cliente.',
  },
];

export default function AvaliacaoDiamantesProcessoSection() {
  return (
    <section
      id="processo-avaliacao-diamantes"
      aria-labelledby="processo-avaliacao-diamantes-title"
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
              Processo de avaliação
            </p>

            <h2
              id="processo-avaliacao-diamantes-title"
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
              A avaliação acontece em etapas, não em um único olhar.
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
              Cada etapa acrescenta informação. Primeiro se observa, depois se
              mede, compara e interpreta. O objetivo é transformar detalhes
              técnicos em uma leitura clara da pedra apresentada.
            </p>
          </div>
        </div>

        {/* ETAPAS */}
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[41px]
              hidden
              h-px
              bg-[#C7A87A]/28
              lg:block
            "
          />

          <div
            className="
              relative
              grid
              gap-4
              md:grid-cols-2
              lg:grid-cols-5
            "
          >
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                className="
                  group
                  relative
                  rounded-[1.85rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#FCFAF7]
                  p-7
                  shadow-[0_18px_48px_rgba(96,72,45,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#A17D4F]/28
                  hover:shadow-[0_24px_58px_rgba(96,72,45,0.07)]
                "
              >
                <div
                  className="
                    flex
                    h-[56px]
                    w-[56px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A17D4F]/26
                    bg-[#EFE6D8]
                    shadow-[0_8px_22px_rgba(96,72,45,0.06)]
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[21px]
                      text-[#8C6635]
                    "
                  >
                    {etapa.numero}
                  </span>
                </div>

                <p
                  className="
                    mt-7
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A17D4F]
                  "
                >
                  {etapa.subtitulo}
                </p>

                <h3
                  className="
                    mt-3
                    font-serif
                    text-[26px]
                    leading-tight
                    text-[#332A2B]
                  "
                >
                  {etapa.titulo}
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
                    text-[10px]
                    font-light
                    leading-6
                    text-[#675C5D]
                  "
                >
                  {etapa.texto}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* BLOCO EXPLICATIVO */}
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
              relative
              overflow-hidden
              rounded-[2.2rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DCC08F_100%)]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.07)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-16
                -top-16
                h-64
                w-64
                rounded-full
                bg-white/25
                blur-[65px]
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
                Leitura progressiva
              </p>

              <h3
                className="
                  mt-5
                  max-w-[600px]
                  font-serif
                  text-[2.6rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Cada informação confirma ou modifica a leitura anterior.
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
                Uma medida pode explicar uma aparência visual. Uma inclusão pode
                justificar determinada classificação. Uma proporção pode ajudar
                a entender o comportamento da luz.
              </p>

              <div
                className="
                  mt-8
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
                    font-serif
                    text-[20px]
                    leading-snug
                    text-[#332A2B]
                  "
                >
                  A avaliação é construída por evidências que se complementam.
                </p>
              </div>
            </div>
          </div>

          {/* RESULTADO */}
          <div
            className="
              rounded-[2.2rem]
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
              Ao final da análise
            </p>

            <h3
              className="
                mt-4
                max-w-[620px]
                font-serif
                text-[2.45rem]
                leading-[1]
                tracking-[-0.025em]
                text-[#332A2B]
              "
            >
              O resultado precisa ser compreensível para quem não é gemólogo.
            </h3>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Características observadas',
                'Medidas relevantes',
                'Limitações da análise',
                'Informações do certificado',
                'Aspectos de lapidação',
                'Condição da pedra',
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

        {/* AVALIAÇÃO X NEGOCIAÇÃO */}
        <div
          id="avaliacao-x-negociacao"
          className="
            mt-10
            grid
            gap-5
            lg:grid-cols-2
          "
        >
          <article
            className="
              rounded-[2.05rem]
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
              Avaliação
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[2.3rem]
                leading-none
                text-[#332A2B]
              "
            >
              Entender as características da pedra.
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
              A avaliação técnica organiza informações sobre o diamante e ajuda
              a explicar aquilo que foi observado, medido e interpretado.
            </p>
          </article>

          <article
            className="
              rounded-[2.05rem]
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
              Negociação
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[2.3rem]
                leading-none
                text-[#F7F3EF]
              "
            >
              Considerar valor e contexto comercial.
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
              Uma eventual proposta comercial envolve outras variáveis, como
              mercado, demanda, liquidez e condição específica de negociação.
            </p>
          </article>
        </div>

        {/* DESTAQUE */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-[2.25rem]
            border
            border-[#A17D4F]/14
            bg-[linear-gradient(135deg,#E5CBA1_0%,#F3E6D0_50%,#DCC08F_100%)]
            px-8
            py-10
            shadow-[0_26px_70px_rgba(96,72,45,0.08)]
            md:px-10
            md:py-12
          "
        >
          <div
            className="
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
              5
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
                etapas de leitura
              </p>

              <h3
                className="
                  mt-4
                  max-w-[1000px]
                  font-serif
                  text-[2.1rem]
                  leading-[1.04]
                  tracking-[-0.025em]
                  text-[#332A2B]
                  md:text-[2.9rem]
                "
              >
                Receber, observar, medir, analisar e explicar: um processo pensado para transformar detalhe técnico em entendimento.
              </h3>
            </div>
          </div>
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
              Atendimento individual
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
              Depois de compreender a pedra, você decide qual será o próximo passo.
            </h3>
          </div>

          <a
            href="#seguranca-avaliacao-diamantes"
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
            Segurança e discrição
          </a>
        </div>
      </div>
    </section>
  );
}