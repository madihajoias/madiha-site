function DiamondMeasurementsIllustration() {
  return (
    <svg
      viewBox="0 0 620 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient
          id="measurementStroke"
          x1="120"
          y1="80"
          x2="500"
          y2="360"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E7D1A7" />
          <stop offset="48%" stopColor="#B99154" />
          <stop offset="100%" stopColor="#806039" />
        </linearGradient>

        <radialGradient
          id="measurementGlow"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(310 220) rotate(90) scale(165)"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.78" />
          <stop offset="52%" stopColor="#E8D2AD" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C7A87A" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse
        cx="310"
        cy="220"
        rx="210"
        ry="155"
        fill="url(#measurementGlow)"
      />

      {/* VISTA SUPERIOR */}
      <g>
        <circle
          cx="205"
          cy="190"
          r="86"
          fill="#FCFAF7"
          fillOpacity="0.46"
          stroke="url(#measurementStroke)"
          strokeWidth="2"
        />

        <path
          d="M205 104L252 122L287 158L290 205L267 246L229 275L181 275L143 246L120 205L123 158L158 122Z"
          stroke="#A17D4F"
          strokeWidth="1.2"
          opacity="0.78"
        />

        <path
          d="M205 104V276M119 190H291M158 122L252 258M252 122L158 258"
          stroke="#A17D4F"
          strokeWidth="0.9"
          opacity="0.42"
        />

        <circle
          cx="205"
          cy="190"
          r="34"
          stroke="#A17D4F"
          strokeWidth="0.9"
          opacity="0.58"
        />

        {/* DIÂMETRO HORIZONTAL */}
        <path
          d="M108 306H302"
          stroke="#A17D4F"
          strokeWidth="1"
          strokeDasharray="4 5"
        />

        <path
          d="M108 299V313M302 299V313"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <path
          d="M114 301L108 306L114 311"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <path
          d="M296 301L302 306L296 311"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <text
          x="205"
          y="329"
          textAnchor="middle"
          fill="#8C6635"
          fontSize="10"
          letterSpacing="2"
        >
          DIÂMETRO
        </text>

        {/* DIÂMETRO VERTICAL */}
        <path
          d="M85 97V283"
          stroke="#A17D4F"
          strokeWidth="1"
          strokeDasharray="4 5"
        />

        <path
          d="M78 97H92M78 283H92"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <path
          d="M80 103L85 97L90 103"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <path
          d="M80 277L85 283L90 277"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <text
          x="60"
          y="200"
          textAnchor="middle"
          fill="#8C6635"
          fontSize="9"
          letterSpacing="1.6"
          transform="rotate(-90 60 200)"
        >
          DIÂMETRO
        </text>
      </g>

      {/* DIVISOR */}
      <path
        d="M340 75V365"
        stroke="#C7A87A"
        strokeWidth="0.8"
        strokeDasharray="3 9"
        opacity="0.45"
      />

      {/* VISTA LATERAL */}
      <g>
        <path
          d="M398 140H542L516 190H424L398 140Z"
          fill="#FCFAF7"
          fillOpacity="0.34"
          stroke="url(#measurementStroke)"
          strokeWidth="2"
        />

        <path
          d="M424 190L470 310L516 190"
          fill="#F4E8D6"
          fillOpacity="0.28"
          stroke="url(#measurementStroke)"
          strokeWidth="2"
        />

        <path
          d="M398 140H542"
          stroke="#8C6635"
          strokeWidth="1.6"
        />

        <path
          d="M424 190H516"
          stroke="#8C6635"
          strokeWidth="1.6"
        />

        <path
          d="M470 140V310"
          stroke="#A17D4F"
          strokeWidth="0.8"
          opacity="0.38"
        />

        <path
          d="M424 190L470 310M516 190L470 310"
          stroke="#A17D4F"
          strokeWidth="1"
          opacity="0.68"
        />

        {/* PROFUNDIDADE */}
        <path
          d="M567 140V310"
          stroke="#A17D4F"
          strokeWidth="1"
          strokeDasharray="4 5"
        />

        <path
          d="M560 140H574M560 310H574"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <path
          d="M562 146L567 140L572 146"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <path
          d="M562 304L567 310L572 304"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <text
          x="592"
          y="230"
          textAnchor="middle"
          fill="#8C6635"
          fontSize="9"
          letterSpacing="1.6"
          transform="rotate(90 592 230)"
        >
          PROFUNDIDADE
        </text>

        {/* CINTURA */}
        <path
          d="M424 208H516"
          stroke="#C7A87A"
          strokeWidth="0.8"
          strokeDasharray="3 5"
          opacity="0.6"
        />

        <text
          x="470"
          y="336"
          textAnchor="middle"
          fill="#8C6635"
          fontSize="10"
          letterSpacing="2"
        >
          VISTA LATERAL
        </text>
      </g>

      {/* TITULOS */}
      <text
        x="205"
        y="64"
        textAnchor="middle"
        fill="#8C6635"
        fontSize="10"
        letterSpacing="2"
      >
        VISTA SUPERIOR
      </text>

      <text
        x="470"
        y="95"
        textAnchor="middle"
        fill="#8C6635"
        fontSize="10"
        letterSpacing="2"
      >
        PROPORÇÕES
      </text>
    </svg>
  );
}

const metricas = [
  {
    label: 'Peso',
    value: 'Quilate',
    text:
      'O peso é expresso em quilates e representa uma medida física da pedra.',
  },
  {
    label: 'Diâmetro',
    value: 'mm',
    text:
      'Em formatos redondos, o diâmetro ajuda a compreender a relação entre peso e aparência.',
  },
  {
    label: 'Profundidade',
    value: '% / mm',
    text:
      'A profundidade participa da análise das proporções e do comportamento da luz.',
  },
  {
    label: 'Comprimento x largura',
    value: 'Ratio',
    text:
      'Em formatos alongados, essa relação ajuda a descrever a silhueta da pedra.',
  },
];

export default function AvaliacaoDiamantesPesoMedidasSection() {
  return (
    <section
      id="peso-e-medidas"
      aria-labelledby="peso-medidas-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_90%_82%,rgba(214,187,139,0.14),transparent_34%)]
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
              Peso e medidas
            </p>

            <h2
              id="peso-medidas-title"
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
              O quilate diz quanto pesa. As medidas mostram como esse peso foi distribuído.
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
              Peso e dimensão precisam ser interpretados em conjunto. Duas
              pedras com o mesmo peso podem apresentar aparência, profundidade
              e proporções bastante diferentes.
            </p>
          </div>
        </div>

        {/* DESENHO TÉCNICO */}
        <div
          className="
            mt-16
            overflow-hidden
            rounded-[2.5rem]
            border
            border-[#A17D4F]/14
            bg-[linear-gradient(145deg,#F8F3EB_0%,#EFE3D0_100%)]
            p-6
            shadow-[0_30px_80px_rgba(96,72,45,0.07)]
            md:p-9
            lg:p-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
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
                Prancha de medição
              </p>

              <h3
                className="
                  mt-3
                  font-serif
                  text-[2.4rem]
                  leading-none
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Dimensões de uma pedra lapidada
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
              Ilustração técnica
            </span>
          </div>

          <div
            className="
              mt-8
              flex
              min-h-[480px]
              items-center
              justify-center
              rounded-[1.9rem]
              border
              border-[#A17D4F]/10
              bg-[#FCFAF7]/52
              px-3
              py-5
              md:px-8
            "
          >
            <DiamondMeasurementsIllustration />
          </div>
        </div>

        {/* MÉTRICAS */}
        <div
          className="
            mt-8
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {metricas.map((item) => (
            <article
              key={item.label}
              className="
                rounded-[1.7rem]
                border
                border-[#A17D4F]/12
                bg-[#FCFAF7]
                p-6
                shadow-[0_16px_42px_rgba(96,72,45,0.04)]
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4F]
                "
              >
                {item.label}
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[28px]
                  leading-none
                  text-[#332A2B]
                "
              >
                {item.value}
              </p>

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
                  text-[10px]
                  font-light
                  leading-5
                  text-[#675C5D]
                "
              >
                {item.text}
              </p>
            </article>
          ))}
        </div>

        {/* EXPLICAÇÃO */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          <div
            className="
              rounded-[2.1rem]
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
              Um exemplo simples
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
              Mais peso não significa necessariamente maior aparência.
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
              Uma pedra mais profunda pode concentrar parte do peso abaixo da
              cintura. Outra, com proporções diferentes, pode apresentar maior
              extensão visual vista de cima.
            </p>
          </div>

          <div
            className="
              rounded-[2.1rem]
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
              Relações observadas
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                'Peso x diâmetro',
                'Profundidade total',
                'Espessura da cintura',
                'Comprimento x largura',
                'Dimensão visual',
                'Proporção da lapidação',
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
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A17D4F]" />
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-light
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
              Medir é apenas parte da leitura
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
              Depois das medidas, a observação avança para cor, pureza e comportamento óptico.
            </h3>
          </div>

          <a
            href="#cor-diamante"
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
            Entender a cor
          </a>
        </div>
      </div>
    </section>
  );
}