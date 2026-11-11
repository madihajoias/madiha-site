const colorGrades = [
  {
    grade: 'D',
    tone: '#FFFDF8',
    label: 'Incolor',
  },
  {
    grade: 'E',
    tone: '#FFFBEF',
    label: 'Incolor',
  },
  {
    grade: 'F',
    tone: '#FFF8E8',
    label: 'Incolor',
  },
  {
    grade: 'G',
    tone: '#FFF4DD',
    label: 'Quase incolor',
  },
  {
    grade: 'H',
    tone: '#FFF0D3',
    label: 'Quase incolor',
  },
  {
    grade: 'I',
    tone: '#FBEBC7',
    label: 'Quase incolor',
  },
  {
    grade: 'J',
    tone: '#F7E5B8',
    label: 'Quase incolor',
  },
  {
    grade: 'K',
    tone: '#F1DCA7',
    label: 'Tonalidade perceptível',
  },
  {
    grade: 'L',
    tone: '#EAD193',
    label: 'Tonalidade perceptível',
  },
  {
    grade: 'M',
    tone: '#E2C57C',
    label: 'Tonalidade perceptível',
  },
];

function DiamondInTweezers({
  tone,
  grade,
}: {
  tone: string;
  grade: string;
}) {
  return (
    <svg
      viewBox="0 0 140 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient
          id={`tweezer-${grade}`}
          x1="20"
          y1="20"
          x2="120"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E7D5B5" />
          <stop offset="50%" stopColor="#B99154" />
          <stop offset="100%" stopColor="#7D603B" />
        </linearGradient>

        <radialGradient
          id={`diamond-${grade}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(70 104) rotate(90) scale(48)"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.86" />
          <stop offset="62%" stopColor={tone} stopOpacity="0.9" />
          <stop offset="100%" stopColor={tone} />
        </radialGradient>
      </defs>

      {/* PINÇA */}
      <path
        d="M32 17C40 56 48 83 57 102"
        stroke={`url(#tweezer-${grade})`}
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M108 17C100 56 92 83 83 102"
        stroke={`url(#tweezer-${grade})`}
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M34 18C42 55 50 81 59 99"
        stroke="#F2E3C8"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />

      <path
        d="M106 18C98 55 90 81 81 99"
        stroke="#F2E3C8"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* PONTAS */}
      <path
        d="M57 102L53 111"
        stroke="#8C6B42"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M83 102L87 111"
        stroke="#8C6B42"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* DIAMANTE */}
      <circle
        cx="70"
        cy="134"
        r="34"
        fill={`url(#diamond-${grade})`}
        stroke="#A17D4F"
        strokeWidth="1.4"
      />

      <path
        d="M70 100L88 108L101 123L103 141L94 157L80 166L60 166L46 157L37 141L39 123L52 108Z"
        stroke="#A17D4F"
        strokeWidth="0.9"
        opacity="0.62"
      />

      <path
        d="M70 100V168M36 134H104M52 108L88 160M88 108L52 160"
        stroke="#A17D4F"
        strokeWidth="0.7"
        opacity="0.32"
      />

      <circle
        cx="70"
        cy="134"
        r="14"
        stroke="#A17D4F"
        strokeWidth="0.8"
        opacity="0.45"
      />

      {/* CONTATO */}
      <circle cx="53" cy="111" r="2.4" fill="#A17D4F" />
      <circle cx="87" cy="111" r="2.4" fill="#A17D4F" />

      {/* REFLEXOS */}
      <path
        d="M51 119L60 111"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.7"
      />

      <circle
        cx="54"
        cy="128"
        r="2.3"
        fill="#FFFFFF"
        opacity="0.7"
      />

      {/* BASE */}
      <path
        d="M43 190H97"
        stroke="#C7A87A"
        strokeWidth="0.8"
        opacity="0.35"
      />

      <text
        x="70"
        y="211"
        textAnchor="middle"
        fill="#8C6635"
        fontSize="16"
        fontFamily="serif"
      >
        {grade}
      </text>
    </svg>
  );
}

export default function AvaliacaoDiamantesCorSection() {
  return (
    <section
      id="cor-diamante"
      aria-labelledby="cor-diamante-title"
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
          bg-[radial-gradient(circle_at_14%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(214,187,139,0.13),transparent_34%)]
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
              Análise da cor
            </p>

            <h2
              id="cor-diamante-title"
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
              A cor é observada pela presença — ou ausência — de tonalidade.
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
              Em diamantes dentro da escala tradicional de cor, pequenas
              diferenças de tonalidade podem alterar a classificação mesmo
              quando não são imediatamente percebidas por quem observa a pedra
              sem comparação.
            </p>
          </div>
        </div>

        {/* ESCALA VISUAL */}
        <div
          className="
            mt-16
            overflow-hidden
            rounded-[2.5rem]
            border
            border-[#A17D4F]/14
            bg-[linear-gradient(145deg,#F8F3EB_0%,#EEE1CF_100%)]
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
                Escala visual simplificada
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
                Comparação de tonalidade
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
              D → M
            </span>
          </div>

          <div
            className="
              mt-8
              rounded-[1.95rem]
              border
              border-[#A17D4F]/10
              bg-[#FCFAF7]/48
              px-4
              py-7
              md:px-7
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-3
                sm:grid-cols-5
                lg:grid-cols-10
              "
            >
              {colorGrades.map((item) => (
                <div
                  key={item.grade}
                  className="
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/10
                    bg-white/34
                    px-2
                    py-3
                    text-center
                  "
                >
                  <DiamondInTweezers
                    tone={item.tone}
                    grade={item.grade}
                  />

                  <p
                    className="
                      mt-2
                      text-[7px]
                      font-light
                      leading-4
                      text-[#776B6C]
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="
                mt-7
                grid
                gap-3
                border-t
                border-[#A17D4F]/10
                pt-6
                sm:grid-cols-3
              "
            >
              <div
                className="
                  rounded-[1.35rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]/54
                  px-5
                  py-4
                  text-center
                "
              >
                <p className="font-serif text-[19px] text-[#332A2B]">
                  D–F
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-light
                    text-[#776B6C]
                  "
                >
                  Incolor
                </p>
              </div>

              <div
                className="
                  rounded-[1.35rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]/54
                  px-5
                  py-4
                  text-center
                "
              >
                <p className="font-serif text-[19px] text-[#332A2B]">
                  G–J
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-light
                    text-[#776B6C]
                  "
                >
                  Quase incolor
                </p>
              </div>

              <div
                className="
                  rounded-[1.35rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]/54
                  px-5
                  py-4
                  text-center
                "
              >
                <p className="font-serif text-[19px] text-[#332A2B]">
                  K–M
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-light
                    text-[#776B6C]
                  "
                >
                  Tonalidade mais perceptível
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* COMO A COR É OBSERVADA */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.86fr_1.14fr]
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
                Comparação controlada
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
                A diferença pode ser sutil demais para uma observação isolada.
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
                Iluminação, fundo e comparação ajudam a reduzir interferências
                visuais e tornam pequenas diferenças de tonalidade mais fáceis
                de perceber.
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
                  Avaliar cor é comparar, não apenas olhar.
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              rounded-[2.15rem]
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
              Condições de observação
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: 'Iluminação',
                  text: 'A luz precisa permitir uma leitura consistente da tonalidade.',
                },
                {
                  title: 'Fundo neutro',
                  text: 'Cores próximas podem interferir na percepção visual da pedra.',
                },
                {
                  title: 'Comparação',
                  text: 'Referências ajudam a tornar diferenças sutis mais perceptíveis.',
                },
                {
                  title: 'Posicionamento',
                  text: 'A orientação da pedra interfere na forma como a cor é percebida.',
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
                        tracking-[0.18em]
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

        {/* OBSERVAÇÃO */}
        <div
          className="
            mt-10
            rounded-[2rem]
            border
            border-[#A17D4F]/12
            bg-[#EFE6D8]/52
            px-7
            py-7
            md:px-9
          "
        >
          <div
            className="
              grid
              gap-5
              lg:grid-cols-[auto_1fr]
              lg:items-center
            "
          >
            <span
              className="
                font-serif
                text-[3rem]
                leading-none
                text-[#C7A87A]
              "
            >
              D–M
            </span>

            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4F]
                "
              >
                Importante
              </p>

              <p
                className="
                  mt-2
                  max-w-[960px]
                  text-[10px]
                  font-light
                  leading-6
                  text-[#675C5D]
                "
              >
                A ilustração acima foi criada para explicar visualmente a
                progressão de tonalidade. A classificação real depende da
                observação da pedra em condições apropriadas.
              </p>
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
              A próxima leitura acontece dentro da pedra
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
              Depois da cor, a avaliação procura características internas e superficiais.
            </h3>
          </div>

          <a
            href="#pureza-diamante"
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
            Entender a pureza
          </a>
        </div>
      </div>
    </section>
  );
}