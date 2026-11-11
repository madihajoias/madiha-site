function DiamondAnatomyIllustration() {
  return (
    <svg
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient
          id="anatomyDiamond"
          x1="145"
          y1="95"
          x2="370"
          y2="330"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E8D3AE" />
          <stop offset="45%" stopColor="#B99154" />
          <stop offset="100%" stopColor="#82623A" />
        </linearGradient>

        <linearGradient
          id="anatomyFill"
          x1="260"
          y1="80"
          x2="260"
          y2="345"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.82" />
          <stop offset="45%" stopColor="#F1E4CE" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#D4B780" stopOpacity="0.18" />
        </linearGradient>

        <filter
          id="anatomyGlow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* GLOW */}
      <ellipse
        cx="260"
        cy="205"
        rx="150"
        ry="125"
        fill="#D6BB8B"
        fillOpacity="0.15"
        filter="url(#anatomyGlow)"
      />

      {/* GUIAS */}
      <circle
        cx="260"
        cy="205"
        r="150"
        stroke="#C7A87A"
        strokeWidth="0.8"
        strokeDasharray="3 10"
        opacity="0.34"
      />

      <path
        d="M260 42V70"
        stroke="#C7A87A"
        strokeWidth="1"
        opacity="0.5"
      />

      <path
        d="M260 340V374"
        stroke="#C7A87A"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* DIAMANTE DE PERFIL */}
      <g>
        <path
          d="
            M154 126
            L366 126
            L330 190
            L260 334
            L190 190
            Z
          "
          fill="url(#anatomyFill)"
          stroke="url(#anatomyDiamond)"
          strokeWidth="2"
        />

        {/* MESA */}
        <path
          d="M205 126H315"
          stroke="#8E6B3D"
          strokeWidth="2"
        />

        {/* COROA */}
        <path
          d="M154 126L190 190"
          stroke="#A17D4F"
          strokeWidth="1.2"
        />

        <path
          d="M366 126L330 190"
          stroke="#A17D4F"
          strokeWidth="1.2"
        />

        <path
          d="M205 126L190 190"
          stroke="#B99967"
          strokeWidth="0.9"
          opacity="0.7"
        />

        <path
          d="M315 126L330 190"
          stroke="#B99967"
          strokeWidth="0.9"
          opacity="0.7"
        />

        {/* CINTURA */}
        <path
          d="M190 190H330"
          stroke="#8E6B3D"
          strokeWidth="2"
        />

        <path
          d="M190 194H330"
          stroke="#C7A87A"
          strokeWidth="0.8"
          opacity="0.7"
        />

        {/* PAVILHÃO */}
        <path
          d="M190 190L260 334L330 190"
          stroke="#A17D4F"
          strokeWidth="1.2"
        />

        <path
          d="M214 190L260 334"
          stroke="#B99967"
          strokeWidth="0.9"
          opacity="0.65"
        />

        <path
          d="M306 190L260 334"
          stroke="#B99967"
          strokeWidth="0.9"
          opacity="0.65"
        />

        <path
          d="M238 190L260 334"
          stroke="#B99967"
          strokeWidth="0.8"
          opacity="0.4"
        />

        <path
          d="M282 190L260 334"
          stroke="#B99967"
          strokeWidth="0.8"
          opacity="0.4"
        />
      </g>

      {/* MARCAÇÕES ESQUERDA */}
      <g>
        <path
          d="M205 108H100"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <circle
          cx="205"
          cy="108"
          r="3"
          fill="#A17D4F"
        />

        <text
          x="94"
          y="104"
          textAnchor="end"
          fill="#8C6635"
          fontSize="11"
          letterSpacing="2"
        >
          MESA
        </text>

        <path
          d="M174 151H82"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <circle
          cx="174"
          cy="151"
          r="3"
          fill="#A17D4F"
        />

        <text
          x="76"
          y="147"
          textAnchor="end"
          fill="#8C6635"
          fontSize="11"
          letterSpacing="2"
        >
          COROA
        </text>

        <path
          d="M190 192H82"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <circle
          cx="190"
          cy="192"
          r="3"
          fill="#A17D4F"
        />

        <text
          x="76"
          y="188"
          textAnchor="end"
          fill="#8C6635"
          fontSize="11"
          letterSpacing="2"
        >
          CINTURA
        </text>
      </g>

      {/* MARCAÇÕES DIREITA */}
      <g>
        <path
          d="M309 242H420"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <circle
          cx="309"
          cy="242"
          r="3"
          fill="#A17D4F"
        />

        <text
          x="426"
          y="238"
          fill="#8C6635"
          fontSize="11"
          letterSpacing="2"
        >
          PAVILHÃO
        </text>

        <path
          d="M260 334H420"
          stroke="#A17D4F"
          strokeWidth="1"
        />

        <circle
          cx="260"
          cy="334"
          r="3"
          fill="#A17D4F"
        />

        <text
          x="426"
          y="330"
          fill="#8C6635"
          fontSize="11"
          letterSpacing="2"
        >
          CULETA
        </text>
      </g>

      {/* SETA DE ALTURA */}
      <g opacity="0.66">
        <path
          d="M390 126V334"
          stroke="#C7A87A"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        <path
          d="M384 132L390 126L396 132"
          stroke="#C7A87A"
          strokeWidth="1"
        />

        <path
          d="M384 328L390 334L396 328"
          stroke="#C7A87A"
          strokeWidth="1"
        />

        <text
          x="404"
          y="232"
          fill="#A17D4F"
          fontSize="9"
          letterSpacing="1.5"
          transform="rotate(90 404 232)"
        >
          PROFUNDIDADE
        </text>
      </g>
    </svg>
  );
}

const pontos = [
  {
    label: 'Mesa',
    text:
      'A faceta superior é uma das principais áreas de entrada e retorno da luz.',
  },
  {
    label: 'Coroa',
    text:
      'A parte superior influencia a maneira como a luz se distribui pelas facetas.',
  },
  {
    label: 'Cintura',
    text:
      'É a região de transição entre a parte superior e inferior do diamante.',
  },
  {
    label: 'Pavilhão',
    text:
      'A parte inferior participa diretamente do caminho e do retorno da luz.',
  },
  {
    label: 'Proporções',
    text:
      'Altura, largura, ângulos e relações entre as partes interferem na leitura da lapidação.',
  },
  {
    label: 'Facetas',
    text:
      'O alinhamento e a organização das superfícies ajudam a construir o comportamento óptico.',
  },
];

export default function AvaliacaoDiamantesEntendaSection() {
  return (
    <section
      id="como-avaliamos"
      aria-labelledby="como-avaliamos-title"
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
          bg-[radial-gradient(circle_at_12%_20%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_90%_78%,rgba(214,187,139,0.12),transparent_34%)]
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
              Como avaliamos
            </p>

            <h2
              id="como-avaliamos-title"
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
              A leitura começa pela estrutura do diamante.
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
              Um diamante lapidado é formado por diferentes regiões e facetas.
              A relação entre essas partes ajuda a compreender proporções,
              acabamento e comportamento óptico.
            </p>
          </div>
        </div>

        {/* BLOCO PRINCIPAL */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* DESENHO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.4rem]
              border
              border-[#A17D4F]/14
              bg-[linear-gradient(145deg,#F8F3EB_0%,#EFE3D1_100%)]
              p-6
              shadow-[0_28px_76px_rgba(96,72,45,0.07)]
              md:p-9
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
                bg-white/36
                blur-[80px]
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
                    Anatomia simplificada
                  </p>

                  <h3
                    className="
                      mt-3
                      font-serif
                      text-[2.3rem]
                      leading-none
                      tracking-[-0.03em]
                      text-[#332A2B]
                    "
                  >
                    Diamante lapidado
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
                  Vista lateral
                </span>
              </div>

              <div
                className="
                  mt-6
                  flex
                  min-h-[470px]
                  items-center
                  justify-center
                  rounded-[1.9rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]/48
                  px-4
                  py-6
                "
              >
                <DiamondAnatomyIllustration />
              </div>
            </div>
          </div>

          {/* EXPLICAÇÃO */}
          <div
            className="
              rounded-[2.4rem]
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
              O que o especialista observa
            </p>

            <h3
              className="
                mt-4
                max-w-[560px]
                font-serif
                text-[2.5rem]
                leading-[1]
                tracking-[-0.025em]
                text-[#332A2B]
              "
            >
              Nenhuma parte da pedra é observada isoladamente.
            </h3>

            <p
              className="
                mt-6
                max-w-[580px]
                text-[11px]
                font-light
                leading-6
                text-[#675C5D]
              "
            >
              A avaliação considera como diferentes elementos se relacionam
              entre si. Proporções inadequadas, assimetrias ou características
              internas podem alterar a leitura do conjunto.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {pontos.map((item) => (
                <div
                  key={item.label}
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
                        tracking-[0.18em]
                        text-[#A17D4F]
                      "
                    >
                      {item.label}
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

        {/* FAIXA CONCEITUAL */}
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
              Uma leitura de conjunto
            </p>

            <h3
              className="
                mt-4
                max-w-[920px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#332A2B]
                md:text-[2.7rem]
              "
            >
              Peso, proporção e acabamento precisam conversar entre si.
            </h3>

            <p
              className="
                mt-5
                max-w-[760px]
                text-[10px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              Por isso, a avaliação técnica não se resume a olhar um único
              número ou classificação.
            </p>
          </div>

          <a
            href="#peso-e-medidas"
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
            Ver peso e medidas
          </a>
        </div>
      </div>
    </section>
  );
}