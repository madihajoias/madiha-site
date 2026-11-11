const pilares = [
  {
    numero: '01',
    titulo: 'Atendimento individual',
    texto:
      'Cada avaliação é conduzida de forma personalizada, considerando a pedra apresentada e o contexto específico da joia.',
  },
  {
    numero: '02',
    titulo: 'Discrição',
    texto:
      'O atendimento é realizado de maneira reservada, com atenção ao conforto e à privacidade do cliente.',
  },
  {
    numero: '03',
    titulo: 'Análise presencial',
    texto:
      'A observação direta permite examinar detalhes físicos que não podem ser avaliados adequadamente apenas por fotografias.',
  },
  {
    numero: '04',
    titulo: 'Sem obrigação de negociação',
    texto:
      'Compreender as características do diamante não obriga o cliente a vender, negociar ou tomar qualquer decisão imediata.',
  },
];

export default function AvaliacaoDiamantesSegurancaSection() {
  return (
    <section
      id="seguranca-avaliacao-diamantes"
      aria-labelledby="seguranca-avaliacao-diamantes-title"
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
          bg-[radial-gradient(circle_at_14%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.13),transparent_34%)]
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
              Segurança e discrição
            </p>

            <h2
              id="seguranca-avaliacao-diamantes-title"
              className="
                mt-6
                max-w-[860px]
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
              Uma avaliação técnica também precisa transmitir confiança.
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
              Diamantes e joias de valor exigem cuidado não apenas na análise,
              mas também na forma como o atendimento acontece. Clareza,
              privacidade e ausência de pressão fazem parte desse processo.
            </p>
          </div>
        </div>

        {/* PILARES */}
        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {pilares.map((item) => (
            <article
              key={item.numero}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                p-7
                shadow-[0_20px_54px_rgba(96,72,45,0.045)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A17D4F]/26
                hover:bg-[#FCFAF7]
                hover:shadow-[0_26px_66px_rgba(96,72,45,0.07)]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#D6BB8B]/12
                  blur-[38px]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                "
              />

              <div className="relative z-10">
                <span
                  className="
                    font-serif
                    text-[26px]
                    leading-none
                    text-[#C7A87A]
                  "
                >
                  {item.numero}
                </span>

                <div
                  aria-hidden="true"
                  className="
                    mt-6
                    h-px
                    w-10
                    bg-[#A17D4F]/28
                  "
                />

                <h3
                  className="
                    mt-6
                    font-serif
                    text-[26px]
                    leading-[1.05]
                    tracking-[-0.02em]
                    text-[#332A2B]
                  "
                >
                  {item.titulo}
                </h3>

                <p
                  className="
                    mt-5
                    text-[10px]
                    font-light
                    leading-6
                    text-[#675C5D]
                  "
                >
                  {item.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* BLOCO PRINCIPAL */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.92fr_1.08fr]
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
              shadow-[0_26px_70px_rgba(96,72,45,0.07)]
              md:p-10
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
                bg-white/24
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
                Antes de qualquer decisão
              </p>

              <h3
                className="
                  mt-5
                  max-w-[600px]
                  font-serif
                  text-[2.65rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Primeiro, compreender a pedra.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[580px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#5F5350]
                "
              >
                A avaliação pode existir apenas para esclarecer características,
                conferir informações ou compreender melhor um diamante que já
                pertence ao cliente.
              </p>

              <div
                className="
                  mt-8
                  rounded-[1.55rem]
                  border
                  border-[#8C6635]/14
                  bg-white/24
                  px-6
                  py-6
                "
              >
                <p
                  className="
                    font-serif
                    text-[21px]
                    leading-snug
                    text-[#332A2B]
                  "
                >
                  Avaliar não significa vender.
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
                  A decisão sobre qualquer etapa posterior continua sendo do
                  proprietário da pedra.
                </p>
              </div>
            </div>
          </div>

          {/* EXPERIÊNCIA DE ATENDIMENTO */}
          <div
            className="
              rounded-[2.3rem]
              border
              border-[#A17D4F]/12
              bg-[#F7F3EF]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.05)]
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
              Durante o atendimento
            </p>

            <h3
              className="
                mt-4
                max-w-[620px]
                font-serif
                text-[2.5rem]
                leading-[1]
                tracking-[-0.025em]
                text-[#332A2B]
              "
            >
              O processo deve ser claro do início ao fim.
            </h3>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: 'Pedra na sua presença',
                  text:
                    'A análise presencial favorece uma experiência mais transparente.',
                },
                {
                  title: 'Explicação clara',
                  text:
                    'Os principais pontos podem ser explicados sem excesso de termos técnicos.',
                },
                {
                  title: 'Tempo para decidir',
                  text:
                    'Não é necessário tomar uma decisão comercial no momento da avaliação.',
                },
                {
                  title: 'Atendimento reservado',
                  text:
                    'O processo é conduzido com discrição e atenção individual.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#A17D4F]
                      "
                    />

                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#A17D4F]
                      "
                    >
                      {item.title}
                    </p>
                  </div>

                  <p
                    className="
                      mt-3
                      text-[9px]
                      font-light
                      leading-5
                      text-[#675C5D]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MANIFESTO */}
        <div
          className="
            relative
            mt-10
            overflow-hidden
            rounded-[2.35rem]
            border
            border-[#D6BB8B]/16
            bg-[#332A2B]
            px-8
            py-11
            shadow-[0_28px_74px_rgba(51,42,43,0.11)]
            md:px-12
            md:py-14
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              -right-28
              -top-28
              h-80
              w-80
              rounded-full
              bg-[#D6BB8B]/[0.06]
              blur-[80px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-8
              lg:grid-cols-[0.32fr_1.68fr]
              lg:items-center
            "
          >
            <div>
              <div
                className="
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D6BB8B]/24
                "
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-14 w-14"
                >
                  <path
                    d="M50 9L80 20V44C80 65 68 82 50 91C32 82 20 65 20 44V20L50 9Z"
                    stroke="#D6BB8B"
                    strokeWidth="2"
                  />

                  <path
                    d="M36 50L46 60L66 38"
                    stroke="#D6BB8B"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

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
                Madiha Maison
              </p>

              <h3
                className="
                  mt-4
                  max-w-[1050px]
                  font-serif
                  text-[2.15rem]
                  leading-[1.05]
                  tracking-[-0.025em]
                  text-[#F7F3EF]
                  md:text-[3rem]
                "
              >
                Conhecimento técnico tem mais valor quando vem acompanhado de clareza, discrição e liberdade de decisão.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[840px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#D0C1BE]
                "
              >
                A avaliação deve ajudar o cliente a compreender melhor aquilo
                que possui, sem transformar informação técnica em pressão
                comercial.
              </p>
            </div>
          </div>
        </div>

        {/* TRANSIÇÃO PARA CTA */}
        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[linear-gradient(135deg,#E6CDA5_0%,#F1E2C8_48%,#DFC294_100%)]
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
              Quer avaliar uma pedra?
            </p>

            <h3
              className="
                mt-4
                max-w-[900px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#332A2B]
                md:text-[2.7rem]
              "
            >
              Você pode apresentar seu diamante para uma análise individual na Madiha Maison.
            </h3>
          </div>

          <a
            href="#contato-avaliacao-diamantes"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#332A2B]
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
              hover:bg-[#473A3B]
            "
          >
            Solicitar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}