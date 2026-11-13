const pilares = [
  {
    numero: '01',
    titulo: 'Segurança',
    texto:
      'O atendimento acontece em ambiente profissional e reservado, com atenção à privacidade da peça e de todas as informações envolvidas na avaliação.',
  },
  {
    numero: '02',
    titulo: 'Transparência',
    texto:
      'Os critérios da avaliação são explicados de forma clara. Você acompanha o processo e entende as informações antes de qualquer decisão.',
  },
  {
    numero: '03',
    titulo: 'Comodidade',
    texto:
      'Com hora marcada, o atendimento é organizado para reduzir esperas e permitir mais atenção à peça durante a análise.',
  },
];

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M60 18L91 30V53C91 76 78 94 60 102C42 94 29 76 29 53V30L60 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M46 59L56 69L76 47"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TransparencyIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <circle
        cx="49"
        cy="49"
        r="25"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M67 67L89 89"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M38 49H60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />

      <path
        d="M49 38V60"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <circle
        cx="60"
        cy="60"
        r="39"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M60 38V61L75 71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M60 17V25M103 60H95M60 103V95M17 60H25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

const icons = [
  <ShieldIcon key="shield" />,
  <TransparencyIcon key="transparency" />,
  <ClockIcon key="clock" />,
];

export default function AtendimentoHoraMarcadaPilaresSection() {
  return (
    <section
      id="como-funciona-atendimento"
      aria-labelledby="pilares-atendimento-title"
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
          bg-[radial-gradient(circle_at_14%_20%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_86%_80%,rgba(214,187,139,0.11),transparent_34%)]
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
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Por que agendar
            </p>

            <h2
              id="pilares-atendimento-title"
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
              Mais organização, segurança e clareza durante a avaliação.
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
              O horário marcado ajuda a preparar o atendimento e cria um
              ambiente mais adequado para avaliar a peça com atenção,
              privacidade e transparência.
            </p>
          </div>
        </div>

        {/* PILARES */}
        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-3
          "
        >
          {pilares.map((item, index) => (
            <article
              key={item.titulo}
              className="
                group
                relative
                overflow-hidden
                rounded-[2.2rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                p-8
                shadow-[0_20px_54px_rgba(96,72,45,0.045)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A17D4F]/25
                hover:bg-[#FCFAF7]
                md:p-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-16
                  -top-16
                  h-48
                  w-48
                  rounded-full
                  bg-[#D6BB8B]/10
                  blur-[50px]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-6
                  "
                >
                  <div
                    className="
                      flex
                      h-[74px]
                      w-[74px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A17D4F]/16
                      bg-[#EFE6D8]
                      p-4
                      text-[#A17D4F]
                    "
                  >
                    {icons[index]}
                  </div>

                  <span
                    className="
                      font-serif
                      text-[26px]
                      text-[#C7A87A]
                    "
                  >
                    {item.numero}
                  </span>
                </div>

                <h3
                  className="
                    mt-8
                    font-serif
                    text-[2.1rem]
                    leading-[1]
                    tracking-[-0.025em]
                    text-[#332A2B]
                  "
                >
                  {item.titulo}
                </h3>

                <div
                  aria-hidden="true"
                  className="
                    mt-5
                    h-px
                    w-12
                    bg-[#A17D4F]/28
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
                  {item.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* TRANSPARÊNCIA */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          <div
            className="
              rounded-[2.3rem]
              border
              border-[#A17D4F]/15
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DEC296_100%)]
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
              Transparência durante a avaliação
            </p>

            <h3
              className="
                mt-5
                max-w-[650px]
                font-serif
                text-[2.6rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              Você entende o processo antes de decidir.
            </h3>

            <p
              className="
                mt-6
                max-w-[620px]
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              A peça é analisada com você presente. Informações relevantes,
              características observadas e critérios utilizados podem ser
              apresentados ao longo do atendimento.
            </p>

            <div
              className="
                mt-8
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {[
                ['Acompanhamento', 'Você participa'],
                ['Critérios', 'Explicados'],
                ['Informações', 'Sem ocultação'],
                ['Decisão', 'No seu tempo'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="
                    rounded-[1.35rem]
                    border
                    border-[#8C6635]/12
                    bg-white/24
                    px-5
                    py-4
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#8C6635]
                    "
                  >
                    {label}
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[18px]
                      text-[#332A2B]
                    "
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SEGURANÇA */}
          <div
            className="
              rounded-[2.3rem]
              border
              border-[#A17D4F]/14
              bg-[#332A2B]
              p-8
              shadow-[0_26px_70px_rgba(51,42,43,0.10)]
              md:p-10
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
              Atendimento reservado
            </p>

            <h3
              className="
                mt-5
                max-w-[540px]
                font-serif
                text-[2.5rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#F7F3EF]
              "
            >
              Segurança também faz parte da experiência.
            </h3>

            <p
              className="
                mt-6
                max-w-[520px]
                text-[11px]
                font-light
                leading-6
                text-[#D0C1BE]
              "
            >
              O atendimento com hora marcada ajuda a manter o processo mais
              organizado e discreto, especialmente quando envolve joias,
              diamantes, ouro ou outros bens de valor.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                'Ambiente profissional',
                'Privacidade no atendimento',
                'Peça acompanhada durante a análise',
                'Processo organizado',
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[1.3rem]
                    border
                    border-[#D6BB8B]/10
                    bg-[#F7F3EF]/[0.035]
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
                      border-[#D6BB8B]/18
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D6BB8B]" />
                  </span>

                  <span
                    className="
                      text-[9px]
                      font-light
                      leading-5
                      text-[#E1D5D2]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TRANSIÇÃO */}
        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[#FCFAF7]
            p-8
            shadow-[0_20px_54px_rgba(96,72,45,0.04)]
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
                text-[#A17D4F]
              "
            >
              Próximo passo
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
              Veja como funciona o atendimento desde o agendamento até a avaliação.
            </h3>
          </div>

          <a
            href="#etapas-atendimento-hora-marcada"
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
            Como funciona
          </a>
        </div>
      </div>
    </section>
  );
}