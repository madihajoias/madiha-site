function TweezersIcon() {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M42 28C56 70 68 102 83 132"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M138 28C124 70 112 102 97 132"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M83 132L77 145"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M97 132L103 145"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="90"
        cy="151"
        r="16"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.6"
      />
    </svg>
  );
}

function LoupeIcon() {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <circle
        cx="76"
        cy="76"
        r="42"
        stroke="currentColor"
        strokeWidth="5"
      />

      <circle
        cx="76"
        cy="76"
        r="31"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.45"
      />

      <path
        d="M106 106L145 145"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <text
        x="76"
        y="73"
        textAnchor="middle"
        fill="currentColor"
        fontSize="18"
        fontFamily="serif"
      >
        10×
      </text>

      <text
        x="76"
        y="91"
        textAnchor="middle"
        fill="currentColor"
        fontSize="6"
        letterSpacing="1.4"
      >
        AUMENTO
      </text>
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <rect
        x="35"
        y="72"
        width="110"
        height="72"
        rx="12"
        stroke="currentColor"
        strokeWidth="3"
      />

      <rect
        x="58"
        y="90"
        width="64"
        height="24"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.7"
      />

      <path
        d="M57 72L68 45H112L123 72"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path
        d="M72 45H108"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <text
        x="90"
        y="106"
        textAnchor="middle"
        fill="currentColor"
        fontSize="10"
        fontFamily="serif"
      >
        1.000 ct
      </text>
    </svg>
  );
}

function CaliperIcon() {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M35 42V138"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M35 55H132"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M35 121H118"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M132 55V94"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M118 93V121"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <rect
        x="84"
        y="67"
        width="50"
        height="38"
        rx="6"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M95 86H122"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 4"
        opacity="0.55"
      />

      <path
        d="M48 70H75M48 84H68M48 98H75M48 112H68"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.5"
      />
    </svg>
  );
}

function LightIcon() {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M58 45H122L111 72H69L58 45Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path
        d="M90 72V111"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M73 110H107"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M61 127H119"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M74 74L62 104"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />

      <path
        d="M90 74V105"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />

      <path
        d="M106 74L118 104"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.55"
      />

      <circle
        cx="90"
        cy="119"
        r="10"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
    </svg>
  );
}

const instrumentos = [
  {
    title: 'Pinça gemológica',
    subtitle: 'Manipulação precisa',
    text:
      'Permite segurar e posicionar a pedra com controle, facilitando a observação por diferentes ângulos.',
    icon: <TweezersIcon />,
  },
  {
    title: 'Lupa 10×',
    subtitle: 'Observação ampliada',
    text:
      'Ajuda a localizar características internas e superficiais que podem não ser percebidas a olho nu.',
    icon: <LoupeIcon />,
  },
  {
    title: 'Balança de precisão',
    subtitle: 'Peso em quilates',
    text:
      'Quando a pedra está solta, a pesagem fornece uma leitura direta do peso em quilates.',
    icon: <ScaleIcon />,
  },
  {
    title: 'Paquímetro',
    subtitle: 'Dimensões',
    text:
      'Auxilia na medição de diâmetro, comprimento, largura e outras dimensões relevantes.',
    icon: <CaliperIcon />,
  },
  {
    title: 'Iluminação controlada',
    subtitle: 'Leitura visual',
    text:
      'Condições de luz adequadas ajudam a observar tonalidade, contraste, reflexos e outras características.',
    icon: <LightIcon />,
  },
];

export default function AvaliacaoDiamantesInstrumentosSection() {
  return (
    <section
      id="instrumentos-avaliacao"
      aria-labelledby="instrumentos-avaliacao-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(214,187,139,0.13),transparent_34%)]
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
              Instrumentos de avaliação
            </p>

            <h2
              id="instrumentos-avaliacao-title"
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
              Observar, medir e comparar exige ferramentas adequadas.
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
              A avaliação combina observação visual com instrumentos que ajudam
              a manipular a pedra, ampliar detalhes, registrar dimensões e
              compreender melhor suas características.
            </p>
          </div>
        </div>

        {/* INSTRUMENTOS */}
        <div
          className="
            mt-16
            grid
            gap-4
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {instrumentos.map((item, index) => (
            <article
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.9rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                p-6
                shadow-[0_18px_48px_rgba(96,72,45,0.04)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A17D4F]/28
                hover:bg-[#FCFAF7]
                hover:shadow-[0_24px_58px_rgba(96,72,45,0.07)]
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
                  bg-[#D6BB8B]/12
                  blur-[30px]
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
                    gap-4
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[25px]
                      leading-none
                      text-[#C7A87A]
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span
                    className="
                      rounded-full
                      border
                      border-[#A17D4F]/12
                      bg-[#EFE6D8]/60
                      px-3
                      py-1.5
                      text-[6px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#8C6635]
                    "
                  >
                    {item.subtitle}
                  </span>
                </div>

                <div
                  className="
                    mx-auto
                    mt-7
                    flex
                    h-[150px]
                    w-[150px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A17D4F]/12
                    bg-[#FCFAF7]/58
                    p-5
                    text-[#A17D4F]
                    transition-transform
                    duration-500
                    group-hover:scale-[1.04]
                  "
                >
                  {item.icon}
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[23px]
                    leading-tight
                    text-[#332A2B]
                  "
                >
                  {item.title}
                </h3>

                <div
                  aria-hidden="true"
                  className="
                    mt-5
                    h-px
                    w-10
                    bg-[#A17D4F]/28
                  "
                />

                <p
                  className="
                    mt-5
                    text-[9px]
                    font-light
                    leading-5
                    text-[#675C5D]
                  "
                >
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* COMO SE COMPLEMENTAM */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.9fr_1.1fr]
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
                Ferramentas complementares
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
                Nenhum instrumento responde sozinho por toda a avaliação.
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
                A leitura surge da combinação entre observação, medição,
                comparação e interpretação das informações obtidas.
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
                  Instrumento mede. Especialista interpreta.
                </p>
              </div>
            </div>
          </div>

          {/* FLUXO DOS INSTRUMENTOS */}
          <div
            className="
              rounded-[2.2rem]
              border
              border-[#A17D4F]/12
              bg-[#F7F3EF]
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
              Uma sequência possível
            </p>

            <div className="mt-7 grid gap-3">
              {[
                ['01', 'Posicionar', 'Pinça gemológica'],
                ['02', 'Observar', 'Olho nu e lupa 10×'],
                ['03', 'Medir', 'Balança e paquímetro'],
                ['04', 'Comparar', 'Iluminação e referências'],
                ['05', 'Interpretar', 'Leitura do conjunto'],
              ].map(([number, action, instrument]) => (
                <div
                  key={number}
                  className="
                    grid
                    grid-cols-[auto_1fr_auto]
                    items-center
                    gap-4
                    rounded-[1.4rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#FCFAF7]
                    px-5
                    py-4
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[19px]
                      text-[#C7A87A]
                    "
                  >
                    {number}
                  </span>

                  <div>
                    <p
                      className="
                        font-serif
                        text-[19px]
                        text-[#332A2B]
                      "
                    >
                      {action}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[8px]
                        font-light
                        text-[#776B6C]
                      "
                    >
                      {instrument}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="
                      text-[18px]
                      text-[#A17D4F]
                    "
                  >
                    →
                  </span>
                </div>
              ))}
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
              Depois dos instrumentos
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
              O resultado da avaliação nasce da sequência completa de observação e interpretação.
            </h3>
          </div>

          <a
            href="#processo-avaliacao-diamantes"
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
            Ver processo
          </a>
        </div>
      </div>
    </section>
  );
}