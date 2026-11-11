const clarityLevels = [
  {
    grade: 'FL',
    label: 'Flawless',
    text: 'Sem inclusões ou características internas visíveis em condições específicas de análise.',
    marks: [],
  },
  {
    grade: 'VVS',
    label: 'Very Very Slightly Included',
    text: 'Características extremamente pequenas e de difícil observação.',
    marks: [
      { x: 105, y: 92, r: 2.2 },
      { x: 135, y: 118, r: 1.5 },
    ],
  },
  {
    grade: 'VS',
    label: 'Very Slightly Included',
    text: 'Pequenas inclusões que podem ser identificadas com observação técnica.',
    marks: [
      { x: 92, y: 88, r: 2.8 },
      { x: 132, y: 112, r: 2.2 },
      { x: 112, y: 142, r: 1.9 },
    ],
  },
  {
    grade: 'SI',
    label: 'Slightly Included',
    text: 'Inclusões mais perceptíveis sob aumento e, em alguns casos, mais fáceis de localizar.',
    marks: [
      { x: 86, y: 84, r: 3.2 },
      { x: 124, y: 102, r: 2.7 },
      { x: 143, y: 131, r: 2.4 },
      { x: 104, y: 146, r: 2.8 },
    ],
  },
];

function MagnifiedDiamond() {
  return (
    <svg
      viewBox="0 0 560 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient
          id="clarityStroke"
          x1="130"
          y1="70"
          x2="400"
          y2="350"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E8D2AB" />
          <stop offset="48%" stopColor="#B99154" />
          <stop offset="100%" stopColor="#7E6039" />
        </linearGradient>

        <radialGradient
          id="clarityFill"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(240 208) rotate(90) scale(145)"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="58%" stopColor="#F6EEE2" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E3CDA8" stopOpacity="0.22" />
        </radialGradient>

        <filter
          id="clarityGlow"
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
        >
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* GLOW */}
      <circle
        cx="240"
        cy="210"
        r="150"
        fill="#D6BB8B"
        fillOpacity="0.14"
        filter="url(#clarityGlow)"
      />

      {/* DIAMANTE */}
      <circle
        cx="240"
        cy="210"
        r="112"
        fill="url(#clarityFill)"
        stroke="url(#clarityStroke)"
        strokeWidth="2"
      />

      <path
        d="
          M240 98
          L302 121
          L346 166
          L351 224
          L320 278
          L268 313
          L212 313
          L160 278
          L129 224
          L134 166
          L178 121
          Z
        "
        stroke="#A17D4F"
        strokeWidth="1.2"
        opacity="0.75"
      />

      <path
        d="
          M240 98V322
          M128 210H352
          M178 121L302 299
          M302 121L178 299
        "
        stroke="#A17D4F"
        strokeWidth="0.9"
        opacity="0.35"
      />

      <path
        d="
          M240 132
          L285 150
          L306 210
          L282 268
          L240 286
          L198 268
          L174 210
          L195 150
          Z
        "
        stroke="#A17D4F"
        strokeWidth="0.9"
        opacity="0.48"
      />

      <circle
        cx="240"
        cy="210"
        r="38"
        stroke="#A17D4F"
        strokeWidth="0.8"
        opacity="0.48"
      />

      {/* INCLUSÕES */}
      <circle cx="205" cy="178" r="4" fill="#5A1017" opacity="0.58" />
      <circle cx="268" cy="194" r="3" fill="#5A1017" opacity="0.5" />
      <circle cx="228" cy="238" r="3.5" fill="#5A1017" opacity="0.52" />
      <circle cx="285" cy="244" r="2.5" fill="#5A1017" opacity="0.44" />

      <path
        d="M195 220C202 214 208 213 217 216"
        stroke="#5A1017"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* MARCAÇÕES DAS INCLUSÕES */}
      <path
        d="M205 178L115 126"
        stroke="#A17D4F"
        strokeWidth="1"
      />

      <circle cx="205" cy="178" r="3" fill="#A17D4F" />

      <text
        x="105"
        y="120"
        textAnchor="end"
        fill="#8C6635"
        fontSize="10"
        letterSpacing="1.6"
      >
        INCLUSÃO
      </text>

      <path
        d="M285 244L404 286"
        stroke="#A17D4F"
        strokeWidth="1"
      />

      <circle cx="285" cy="244" r="3" fill="#A17D4F" />

      <text
        x="414"
        y="291"
        fill="#8C6635"
        fontSize="10"
        letterSpacing="1.6"
      >
        POSIÇÃO
      </text>

      {/* LUPA */}
      <g>
        <circle
          cx="402"
          cy="132"
          r="66"
          stroke="url(#clarityStroke)"
          strokeWidth="6"
        />

        <circle
          cx="402"
          cy="132"
          r="53"
          fill="#FFFFFF"
          fillOpacity="0.16"
          stroke="#EBD8B8"
          strokeWidth="1"
          opacity="0.85"
        />

        <path
          d="M446 181L510 246"
          stroke="url(#clarityStroke)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <path
          d="M449 178L513 243"
          stroke="#F2E3C7"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />

        <text
          x="402"
          y="128"
          textAnchor="middle"
          fill="#8C6635"
          fontSize="17"
          fontFamily="serif"
        >
          10×
        </text>

        <text
          x="402"
          y="148"
          textAnchor="middle"
          fill="#A17D4F"
          fontSize="7"
          letterSpacing="1.4"
        >
          AUMENTO
        </text>
      </g>

      {/* GUIA EXTERNA */}
      <circle
        cx="240"
        cy="210"
        r="142"
        stroke="#C7A87A"
        strokeWidth="0.8"
        strokeDasharray="3 10"
        opacity="0.32"
      />
    </svg>
  );
}

function ClarityDiamond({
  marks,
}: {
  marks: { x: number; y: number; r: number }[];
}) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full"
    >
      <circle
        cx="110"
        cy="110"
        r="78"
        fill="#FCFAF7"
        fillOpacity="0.46"
        stroke="#A17D4F"
        strokeWidth="1.5"
      />

      <path
        d="
          M110 32
          L153 48
          L184 79
          L188 120
          L166 157
          L130 181
          L90 181
          L54 157
          L32 120
          L36 79
          L67 48
          Z
        "
        stroke="#A17D4F"
        strokeWidth="1"
        opacity="0.58"
      />

      <path
        d="M110 32V188M32 110H188M67 48L153 172M153 48L67 172"
        stroke="#A17D4F"
        strokeWidth="0.7"
        opacity="0.28"
      />

      <circle
        cx="110"
        cy="110"
        r="28"
        stroke="#A17D4F"
        strokeWidth="0.8"
        opacity="0.42"
      />

      {marks.map((mark, index) => (
        <circle
          key={index}
          cx={mark.x}
          cy={mark.y}
          r={mark.r}
          fill="#5A1017"
          opacity="0.58"
        />
      ))}
    </svg>
  );
}

export default function AvaliacaoDiamantesPurezaSection() {
  return (
    <section
      id="pureza-diamante"
      aria-labelledby="pureza-diamante-title"
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
              Análise da pureza
            </p>

            <h2
              id="pureza-diamante-title"
              className="
                mt-6
                max-w-[840px]
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
              A pureza procura características dentro e na superfície da pedra.
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
              Pequenas inclusões fazem parte da história natural de muitos
              diamantes. Durante a análise, não importa apenas encontrá-las:
              posição, tamanho, quantidade e facilidade de observação também
              ajudam a construir a leitura.
            </p>
          </div>
        </div>

        {/* GRANDE ILUSTRAÇÃO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
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
                  Observação ampliada
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
                  O que existe dentro da pedra?
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
                Lupa 10×
              </span>
            </div>

            <div
              className="
                mt-7
                flex
                min-h-[500px]
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
              <MagnifiedDiamond />
            </div>
          </div>

          {/* TEXTO LATERAL */}
          <div
            className="
              rounded-[2.5rem]
              border
              border-[#A17D4F]/12
              bg-[#FCFAF7]
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
              O que é observado
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
              Uma inclusão não é interpretada apenas pelo tamanho.
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
              A posição da característica dentro do diamante, o contraste,
              a quantidade e a relação com outras inclusões também fazem parte
              da análise.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: 'Tamanho',
                  text: 'Quanto espaço a característica ocupa dentro da pedra.',
                },
                {
                  title: 'Posição',
                  text: 'Onde ela está localizada em relação às principais facetas.',
                },
                {
                  title: 'Quantidade',
                  text: 'Uma ou várias características podem aparecer na mesma pedra.',
                },
                {
                  title: 'Contraste',
                  text: 'Algumas inclusões se destacam mais visualmente do que outras.',
                },
                {
                  title: 'Natureza',
                  text: 'Diferentes tipos de característica podem aparecer no interior ou superfície.',
                },
                {
                  title: 'Facilidade de observação',
                  text: 'A classificação também considera quão facilmente a característica é percebida.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#F7F3EF]
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

        {/* ESCALA */}
        <div
          className="
            mt-10
            rounded-[2.35rem]
            border
            border-[#A17D4F]/14
            bg-[#FCFAF7]
            p-7
            shadow-[0_24px_64px_rgba(96,72,45,0.05)]
            md:p-9
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
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
                Leitura visual simplificada
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
                Diferentes níveis de facilidade de observação
              </h3>
            </div>

            <p
              className="
                max-w-[490px]
                text-[10px]
                font-light
                leading-5
                text-[#675C5D]
              "
            >
              Os desenhos abaixo são didáticos. Eles mostram uma progressão
              visual e não substituem uma classificação gemológica real.
            </p>
          </div>

          <div
            className="
              mt-8
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {clarityLevels.map((item) => (
              <article
                key={item.grade}
                className="
                  rounded-[1.65rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#F7F3EF]
                  p-5
                "
              >
                <div
                  className="
                    mx-auto
                    w-full
                    max-w-[170px]
                  "
                >
                  <ClarityDiamond marks={item.marks} />
                </div>

                <div className="mt-4 text-center">
                  <p
                    className="
                      font-serif
                      text-[27px]
                      leading-none
                      text-[#332A2B]
                    "
                  >
                    {item.grade}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#A17D4F]
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-4
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
        </div>

        {/* CONCEITO */}
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
              Um detalhe importante
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
              Pureza não significa que a pedra precisa parecer “perfeita”.
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
              Muitas características são extremamente pequenas e exigem
              aumento e observação cuidadosa para serem identificadas.
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
              Observação técnica
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ['Olho nu', 'Primeira leitura visual'],
                ['Lupa 10×', 'Observação ampliada'],
                ['Posicionamento', 'Diferentes ângulos da pedra'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="
                    rounded-[1.4rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#F7F3EF]
                    px-5
                    py-5
                  "
                >
                  <p
                    className="
                      font-serif
                      text-[20px]
                      text-[#332A2B]
                    "
                  >
                    {title}
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
                    {text}
                  </p>
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
              Depois de olhar dentro da pedra
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
              A próxima etapa é entender como a lapidação trabalha com a luz.
            </h3>
          </div>

          <a
            href="#lapidacao-e-luz"
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
            Ver lapidação e luz
          </a>
        </div>
      </div>
    </section>
  );
}