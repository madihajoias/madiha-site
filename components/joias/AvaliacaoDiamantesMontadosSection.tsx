function MountedDiamondIllustration() {
  return (
    <svg
      viewBox="0 0 620 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient
          id="ringMetal"
          x1="100"
          y1="100"
          x2="500"
          y2="360"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E8D6B6" />
          <stop offset="45%" stopColor="#B99154" />
          <stop offset="100%" stopColor="#7F613C" />
        </linearGradient>

        <linearGradient
          id="mountedDiamondStroke"
          x1="220"
          y1="60"
          x2="360"
          y2="240"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F0E2C8" />
          <stop offset="48%" stopColor="#B99154" />
          <stop offset="100%" stopColor="#83633B" />
        </linearGradient>

        <radialGradient
          id="mountedDiamondFill"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(290 155) rotate(90) scale(92)"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="62%" stopColor="#F4E9D7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#DFC59A" stopOpacity="0.18" />
        </radialGradient>

        <filter
          id="mountedGlow"
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
        cx="300"
        cy="210"
        rx="170"
        ry="130"
        fill="#D6BB8B"
        fillOpacity="0.14"
        filter="url(#mountedGlow)"
      />

      {/* ARO */}
      <path
        d="
          M170 286
          C188 364 239 402 301 402
          C364 402 415 364 433 286
        "
        stroke="url(#ringMetal)"
        strokeWidth="18"
        strokeLinecap="round"
      />

      <path
        d="
          M182 290
          C200 351 244 381 301 381
          C357 381 401 351 420 290
        "
        stroke="#F5E6CC"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.48"
      />

      {/* CESTA */}
      <path
        d="M232 220L205 284"
        stroke="url(#ringMetal)"
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M348 220L376 284"
        stroke="url(#ringMetal)"
        strokeWidth="11"
        strokeLinecap="round"
      />

      <path
        d="M243 224L260 279"
        stroke="url(#ringMetal)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M337 224L320 279"
        stroke="url(#ringMetal)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* GARRAS */}
      <path
        d="M222 150L236 208"
        stroke="url(#ringMetal)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M358 150L344 208"
        stroke="url(#ringMetal)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M250 116L256 198"
        stroke="url(#ringMetal)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M330 116L324 198"
        stroke="url(#ringMetal)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* DIAMANTE */}
      <circle
        cx="290"
        cy="162"
        r="78"
        fill="url(#mountedDiamondFill)"
        stroke="url(#mountedDiamondStroke)"
        strokeWidth="2"
      />

      <path
        d="
          M290 84
          L333 100
          L365 132
          L368 175
          L346 213
          L310 238
          L270 238
          L234 213
          L212 175
          L215 132
          L247 100
          Z
        "
        stroke="#A17D4F"
        strokeWidth="1.1"
        opacity="0.72"
      />

      <path
        d="M290 84V240M211 162H369M247 100L333 224M333 100L247 224"
        stroke="#A17D4F"
        strokeWidth="0.8"
        opacity="0.34"
      />

      <circle
        cx="290"
        cy="162"
        r="29"
        stroke="#A17D4F"
        strokeWidth="0.8"
        opacity="0.46"
      />

      {/* PINÇA */}
      <path
        d="M528 72C473 106 430 139 390 167"
        stroke="url(#ringMetal)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M548 105C489 127 447 153 397 181"
        stroke="url(#ringMetal)"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <path
        d="M531 74C479 107 435 139 395 166"
        stroke="#F3E4CA"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />

      <path
        d="M551 107C494 129 451 155 402 181"
        stroke="#F3E4CA"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />

      <path
        d="M390 167L376 175"
        stroke="#876844"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M397 181L381 185"
        stroke="#876844"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* PONTOS ACESSÍVEIS */}
      <circle
        cx="365"
        cy="162"
        r="4"
        fill="#A17D4F"
      />

      <circle
        cx="327"
        cy="213"
        r="4"
        fill="#A17D4F"
      />

      {/* ÁREAS LIMITADAS */}
      <circle
        cx="238"
        cy="205"
        r="4"
        fill="#5A1017"
        opacity="0.55"
      />

      <circle
        cx="342"
        cy="205"
        r="4"
        fill="#5A1017"
        opacity="0.55"
      />

      {/* MARCAÇÕES */}
      <path
        d="M365 162H455"
        stroke="#A17D4F"
        strokeWidth="1"
      />

      <text
        x="463"
        y="158"
        fill="#8C6635"
        fontSize="10"
        letterSpacing="1.4"
      >
        ÁREA VISÍVEL
      </text>

      <path
        d="M238 205L130 180"
        stroke="#A17D4F"
        strokeWidth="1"
      />

      <text
        x="120"
        y="176"
        textAnchor="end"
        fill="#8C6635"
        fontSize="10"
        letterSpacing="1.4"
      >
        MONTAGEM
      </text>

      <path
        d="M300 402V430"
        stroke="#C7A87A"
        strokeWidth="1"
      />

      <text
        x="300"
        y="450"
        textAnchor="middle"
        fill="#8C6635"
        fontSize="9"
        letterSpacing="1.6"
      >
        JOIA MONTADA
      </text>
    </svg>
  );
}

const limitacoes = [
  {
    title: 'Peso direto',
    text:
      'A pedra montada normalmente não pode ser pesada isoladamente sem desmontagem.',
  },
  {
    title: 'Profundidade',
    text:
      'Garras e estrutura podem dificultar a medição completa da profundidade.',
  },
  {
    title: 'Cintura',
    text:
      'Parte da cintura pode permanecer encoberta pela montagem.',
  },
  {
    title: 'Inclusões',
    text:
      'Algumas características internas podem ficar parcialmente ocultas dependendo da posição das garras.',
  },
];

const observavel = [
  'Formato da pedra',
  'Parte das proporções',
  'Cor aparente',
  'Características de pureza visíveis',
  'Condição superficial',
  'Simetria visual',
  'Integração com a montagem',
  'Estado geral da joia',
];

export default function AvaliacaoDiamantesMontadosSection() {
  return (
    <section
      id="diamante-montado"
      aria-labelledby="diamante-montado-title"
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
              Diamantes montados
            </p>

            <h2
              id="diamante-montado-title"
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
              A montagem limita algumas medições, mas não impede a análise.
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
              Quando o diamante está preso a um anel, brinco, colar ou outra
              joia, parte da pedra pode permanecer encoberta. Ainda assim, é
              possível obter informações importantes por meio da observação
              cuidadosa das áreas acessíveis.
            </p>
          </div>
        </div>

        {/* BLOCO PRINCIPAL */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          {/* ILUSTRAÇÃO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border
              border-[#A17D4F]/14
              bg-[linear-gradient(145deg,#F8F3EB_0%,#EEE1CF_100%)]
              p-6
              shadow-[0_30px_80px_rgba(96,72,45,0.07)]
              md:p-9
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
                  Observação da pedra montada
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
                  Diamante em anel
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
                mt-7
                flex
                min-h-[510px]
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
              <MountedDiamondIllustration />
            </div>
          </div>

          {/* O QUE MUDA */}
          <div
            className="
              rounded-[2.5rem]
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
              O que pode ficar limitado
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
              A estrutura da joia interfere no acesso físico à pedra.
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
              Isso significa que determinadas informações podem precisar ser
              estimadas ou interpretadas com mais cautela quando o diamante não
              pode ser observado completamente.
            </p>

            <div className="mt-8 grid gap-3">
              {limitacoes.map((item) => (
                <div
                  key={item.title}
                  className="
                    grid
                    grid-cols-[auto_1fr]
                    gap-4
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <div
                    className="
                      flex
                      h-9
                      w-9
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
                        h-2
                        w-2
                        rounded-full
                        bg-[#5A1017]/60
                      "
                    />
                  </div>

                  <div>
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#A17D4F]
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[9px]
                        font-light
                        leading-5
                        text-[#675C5D]
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* O QUE AINDA PODE SER OBSERVADO */}
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
              relative
              overflow-hidden
              rounded-[2.15rem]
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
                Mesmo montado
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[2.55rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                A pedra ainda oferece muitas informações.
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
                A observação combina aquilo que está visível com as limitações
                impostas pela montagem, permitindo uma leitura inicial da pedra
                e da própria joia.
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
                  O importante é distinguir o que foi observado diretamente do que precisou ser estimado.
                </p>
              </div>
            </div>
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
              Informações possíveis
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {observavel.map((item) => (
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

        {/* SOLTO X MONTADO */}
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
              Diamante solto
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
              Maior acesso à geometria da pedra.
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
              A pedra pode ser posicionada, pesada e medida com maior liberdade,
              permitindo observar diferentes regiões e ângulos.
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
              Diamante montado
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
              Leitura adaptada à montagem.
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
              A avaliação considera as áreas acessíveis e registra as limitações
              impostas pela própria joia.
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
              E se houver certificado?
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
              O documento ajuda a orientar a leitura, mas a pedra continua sendo a referência física.
            </h3>
          </div>

          <a
            href="#certificado-avaliacao"
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
            Certificado x pedra
          </a>
        </div>
      </div>
    </section>
  );
}