const pilares = [
  {
    titulo: 'Discrição',
    texto:
      'O atendimento é conduzido de forma reservada, respeitando o ambiente do cliente e a natureza das peças apresentadas.',
    icon: 'privacy',
  },
  {
    titulo: 'Agendamento prévio',
    texto:
      'A visita é combinada antecipadamente, com confirmação de endereço, disponibilidade e condições do atendimento.',
    icon: 'calendar',
  },
  {
    titulo: 'Peça acompanhada',
    texto:
      'A avaliação acontece no local, com você presente e acompanhando as etapas relevantes da análise.',
    icon: 'jewel',
  },
  {
    titulo: 'Transparência',
    texto:
      'Os critérios utilizados podem ser explicados ao longo do processo para que a avaliação seja compreendida com clareza.',
    icon: 'eye',
  },
];

function PrivacyIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M32 9L49 15V28C49 40.5 42.5 50 32 55C21.5 50 15 40.5 15 28V15L32 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M25 31V27C25 23.1 28.1 20 32 20C35.9 20 39 23.1 39 27V31"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <rect
        x="23"
        y="31"
        width="18"
        height="13"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <rect
        x="14"
        y="17"
        width="36"
        height="33"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M22 12V21M42 12V21M14 27H50"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M25 37L30 42L40 32"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function JewelIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M15 24L23 14H41L49 24L32 51L15 24Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M15 24H49M23 14L32 24L41 14M32 24V51"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M10 32C15 23 23 18 32 18C41 18 49 23 54 32C49 41 41 46 32 46C23 46 15 41 10 32Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="32"
        cy="32"
        r="7"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
    </svg>
  );
}

function iconFor(type: string) {
  switch (type) {
    case 'privacy':
      return <PrivacyIcon />;
    case 'calendar':
      return <CalendarIcon />;
    case 'eye':
      return <EyeIcon />;
    default:
      return <JewelIcon />;
  }
}

export default function AvaliacaoDomicilioSegurancaSection() {
  return (
    <section
      id="seguranca-avaliacao-domicilio"
      aria-labelledby="seguranca-avaliacao-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.10),transparent_34%)]
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
              Segurança e privacidade
            </p>

            <h2
              id="seguranca-avaliacao-title"
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
              Um atendimento reservado exige cuidado em cada etapa.
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
              A avaliação em domicílio é organizada previamente para tornar o
              atendimento mais discreto, objetivo e adequado ao contexto de
              joias, ouro e outros bens de valor.
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
              key={item.titulo}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#A17D4F]/12
                bg-[#FCFAF7]
                p-7
                shadow-[0_18px_48px_rgba(96,72,45,0.04)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A17D4F]/25
                hover:shadow-[0_24px_60px_rgba(96,72,45,0.065)]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-14
                  -top-14
                  h-36
                  w-36
                  rounded-full
                  bg-[#D6BB8B]/10
                  blur-[40px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[64px]
                  w-[64px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A17D4F]/16
                  bg-[#EFE6D8]
                  p-3.5
                  text-[#A17D4F]
                "
              >
                {iconFor(item.icon)}
              </div>

              <h3
                className="
                  relative
                  z-10
                  mt-7
                  font-serif
                  text-[26px]
                  leading-[1.02]
                  text-[#332A2B]
                "
              >
                {item.titulo}
              </h3>

              <div
                aria-hidden="true"
                className="
                  relative
                  z-10
                  mt-5
                  h-px
                  w-10
                  bg-[#A17D4F]/28
                "
              />

              <p
                className="
                  relative
                  z-10
                  mt-5
                  text-[9px]
                  font-light
                  leading-5
                  text-[#675C5D]
                "
              >
                {item.texto}
              </p>
            </article>
          ))}
        </div>

        {/* BLOCO PRINCIPAL */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
          {/* ESCURO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.4rem]
              border
              border-[#A17D4F]/14
              bg-[#332A2B]
              p-8
              shadow-[0_28px_76px_rgba(51,42,43,0.11)]
              md:p-10
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
                border
                border-[#D6BB8B]/10
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-28
                -left-20
                h-72
                w-72
                rounded-full
                bg-[#5A1017]/18
                blur-[80px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D6BB8B]
                "
              >
                Peças de valor
              </p>

              <h3
                className="
                  mt-5
                  max-w-[670px]
                  font-serif
                  text-[2.65rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#F7F3EF]
                "
              >
                Menos deslocamento. Mais controle sobre o atendimento.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[620px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#D0C1BE]
                "
              >
                Para alguns clientes, evitar o transporte de joias ou ouro até
                outro endereço é uma vantagem importante. O atendimento em
                domicílio permite que a avaliação aconteça no local previamente
                combinado.
              </p>

              <div
                className="
                  mt-8
                  grid
                  gap-3
                  sm:grid-cols-3
                "
              >
                {[
                  ['Deslocamento', 'Reduzido'],
                  ['Atendimento', 'Agendado'],
                  ['Avaliação', 'Acompanhada'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      rounded-[1.35rem]
                      border
                      border-[#D6BB8B]/10
                      bg-[#F7F3EF]/[0.035]
                      px-5
                      py-4
                    "
                  >
                    <p
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#D6BB8B]
                      "
                    >
                      {label}
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[17px]
                        text-[#F7F3EF]
                      "
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DOURADO */}
          <div
            className="
              rounded-[2.4rem]
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
              Transparência durante a análise
            </p>

            <h3
              className="
                mt-5
                max-w-[580px]
                font-serif
                text-[2.55rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              A segurança também está em entender o que está acontecendo.
            </h3>

            <p
              className="
                mt-6
                max-w-[550px]
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              A avaliação é acompanhada pelo cliente e as informações
              relevantes podem ser explicadas ao longo do processo, reduzindo
              dúvidas e deixando os critérios mais claros.
            </p>

            <div
              className="
                mt-8
                rounded-[1.55rem]
                border
                border-[#8C6635]/14
                bg-white/25
                px-6
                py-6
              "
            >
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8C6635]
                "
              >
                Princípio do atendimento
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
                A peça permanece no seu ambiente enquanto a avaliação é
                realizada.
              </p>
            </div>
          </div>
        </div>

        {/* TRANSIÇÃO */}
        <div
          className="
            mt-10
            grid
            gap-7
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
              Quando faz sentido
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
              Existem situações em que a avaliação em domicílio pode ser a
              escolha mais adequada.
            </h3>
          </div>

          <a
            href="#indicacoes-avaliacao-domicilio"
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
            Ver situações
          </a>
        </div>
      </div>
    </section>
  );
}