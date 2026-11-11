const colorScale = [
  { grade: 'D', tone: '#FFFDF8' },
  { grade: 'E', tone: '#FFFBEF' },
  { grade: 'F', tone: '#FFF8E8' },
  { grade: 'G', tone: '#FFF5DE' },
  { grade: 'H', tone: '#FFF1D4' },
  { grade: 'I', tone: '#FCECC8' },
  { grade: 'J', tone: '#F8E6BA' },
  { grade: 'K', tone: '#F2DCA8' },
  { grade: 'L', tone: '#EBD294' },
  { grade: 'M', tone: '#E4C67F' },
];

const clarityScale = [
  {
    grade: 'FL',
    label: 'Sem inclusões visíveis',
    marks: [],
  },
  {
    grade: 'IF',
    label: 'Internamente muito limpa',
    marks: [{ x: 61, y: 48, r: 1.2 }],
  },
  {
    grade: 'VVS',
    label: 'Inclusões extremamente pequenas',
    marks: [
      { x: 48, y: 51, r: 1.4 },
      { x: 69, y: 65, r: 1 },
    ],
  },
  {
    grade: 'VS',
    label: 'Pequenas inclusões',
    marks: [
      { x: 44, y: 48, r: 1.7 },
      { x: 70, y: 59, r: 1.5 },
      { x: 58, y: 72, r: 1.2 },
    ],
  },
  {
    grade: 'SI',
    label: 'Inclusões mais perceptíveis',
    marks: [
      { x: 42, y: 45, r: 2 },
      { x: 68, y: 54, r: 1.8 },
      { x: 52, y: 70, r: 1.7 },
      { x: 73, y: 73, r: 1.5 },
    ],
  },
];

function ClarityDiamond({
  marks,
}: {
  marks: { x: number; y: number; r: number }[];
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className="h-24 w-24 text-[#A17D4F]"
    >
      <circle
        cx="60"
        cy="60"
        r="42"
        stroke="currentColor"
        strokeWidth="1.4"
      />

      <path
        d="M60 18L84 28L102 48L102 72L84 92L60 102L36 92L18 72L18 48L36 28Z"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.55"
      />

      <circle
        cx="60"
        cy="60"
        r="18"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.45"
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

function CutDiagram() {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden="true"
      className="w-full max-w-[360px] text-[#A17D4F]"
    >
      <path
        d="M86 55H234"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M86 55L116 112H204L234 55"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M116 112L160 194L204 112"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M116 112H204"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />

      <path
        d="M105 91H215"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.4"
      />

      <circle cx="160" cy="194" r="2.3" fill="currentColor" />

      <text
        x="160"
        y="38"
        textAnchor="middle"
        fill="currentColor"
        fontSize="10"
        letterSpacing="2"
      >
        MESA
      </text>

      <text
        x="60"
        y="87"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9"
        letterSpacing="1.5"
      >
        COROA
      </text>

      <text
        x="260"
        y="116"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9"
        letterSpacing="1.5"
      >
        CINTURA
      </text>

      <text
        x="160"
        y="216"
        textAnchor="middle"
        fill="currentColor"
        fontSize="9"
        letterSpacing="1.5"
      >
        PAVILHÃO
      </text>
    </svg>
  );
}

export default function CompraDiamantesQuatroCsSection() {
  return (
    <section
      id="quatro-cs"
      aria-labelledby="quatro-cs-title"
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
          bg-[radial-gradient(circle_at_10%_18%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.15),transparent_34%)]
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
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.92fr_1.08fr]
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
              Os 4Cs
            </p>

            <h2
              id="quatro-cs-title"
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
              Quatro características ajudam a descrever um diamante.
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
              Carat, Color, Clarity e Cut são referências centrais na
              classificação de diamantes. Nenhuma delas, porém, deve ser
              interpretada isoladamente.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* CARAT */}
          <article
            className="
              rounded-[2.25rem]
              border
              border-[#A17D4F]/14
              bg-[#FCFAF7]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.06)]
              md:p-10
            "
          >
            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#A17D4F]">
              01 • Carat
            </p>

            <h3 className="mt-4 font-serif text-[2.6rem] leading-none text-[#332A2B]">
              Quilate mede peso.
            </h3>

            <p className="mt-5 max-w-[570px] text-[11px] font-light leading-6 text-[#675C5D]">
              Um diamante com mais quilates pesa mais, mas isso não significa
              automaticamente que tenha melhor cor, pureza ou lapidação.
            </p>

            <div
              className="
                mt-9
                flex
                items-end
                justify-around
                gap-5
                rounded-[1.8rem]
                border
                border-[#A17D4F]/10
                bg-[#F3E9DA]
                px-5
                py-8
              "
            >
              {[
                ['0,50 ct', 'h-14 w-14'],
                ['1,00 ct', 'h-20 w-20'],
                ['2,00 ct', 'h-28 w-28'],
              ].map(([label, size]) => (
                <div key={label} className="text-center">
                  <div
                    className={`
                      mx-auto
                      rounded-full
                      border
                      border-[#A17D4F]/45
                      bg-white/50
                      ${size}
                    `}
                  />

                  <p className="mt-4 text-[9px] font-semibold tracking-[0.15em] text-[#8C6635]">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="
                mt-5
                rounded-[1.45rem]
                border
                border-[#A17D4F]/12
                bg-[#EFE6D8]/60
                px-5
                py-5
              "
            >
              <p className="font-serif text-[20px] text-[#332A2B]">
                Quilate mede peso, não qualidade.
              </p>
            </div>
          </article>

          {/* COLOR */}
          <article
            className="
              rounded-[2.25rem]
              border
              border-[#A17D4F]/14
              bg-[#FCFAF7]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.06)]
              md:p-10
            "
          >
            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#A17D4F]">
              02 • Color
            </p>

            <h3 className="mt-4 font-serif text-[2.6rem] leading-none text-[#332A2B]">
              Cor não significa “colorido”.
            </h3>

            <p className="mt-5 max-w-[570px] text-[11px] font-light leading-6 text-[#675C5D]">
              Em diamantes classificados na escala tradicional, a análise
              observa o grau de tonalidade presente na pedra.
            </p>

            <div
              className="
                mt-9
                rounded-[1.8rem]
                border
                border-[#A17D4F]/10
                bg-[#F8F3EB]
                px-5
                py-7
              "
            >
              <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
                {colorScale.map((item) => (
                  <div key={item.grade} className="text-center">
                    <div
                      className="
                        mx-auto
                        h-10
                        w-10
                        rounded-full
                        border
                        border-[#A17D4F]/18
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]
                      "
                      style={{ backgroundColor: item.tone }}
                    />

                    <p className="mt-2 text-[9px] font-semibold text-[#8C6635]">
                      {item.grade}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-6
                  grid
                  gap-3
                  border-t
                  border-[#A17D4F]/10
                  pt-5
                  text-center
                  sm:grid-cols-3
                "
              >
                <div>
                  <p className="font-serif text-[17px] text-[#332A2B]">
                    D–F
                  </p>
                  <p className="mt-1 text-[9px] text-[#776B6C]">
                    Incolor
                  </p>
                </div>

                <div>
                  <p className="font-serif text-[17px] text-[#332A2B]">
                    G–J
                  </p>
                  <p className="mt-1 text-[9px] text-[#776B6C]">
                    Quase incolor
                  </p>
                </div>

                <div>
                  <p className="font-serif text-[17px] text-[#332A2B]">
                    K–M
                  </p>
                  <p className="mt-1 text-[9px] text-[#776B6C]">
                    Tonalidade mais perceptível
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* CLARITY */}
          <article
            className="
              rounded-[2.25rem]
              border
              border-[#A17D4F]/14
              bg-[#FCFAF7]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.06)]
              md:p-10
              lg:col-span-2
            "
          >
            <div
              className="
                grid
                gap-8
                lg:grid-cols-[0.72fr_1.28fr]
                lg:items-center
              "
            >
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#A17D4F]">
                  03 • Clarity
                </p>

                <h3 className="mt-4 font-serif text-[2.6rem] leading-none text-[#332A2B]">
                  Pureza observa inclusões e características internas.
                </h3>

                <p className="mt-5 max-w-[520px] text-[11px] font-light leading-6 text-[#675C5D]">
                  A escala ajuda a comunicar o quanto essas características são
                  difíceis ou fáceis de observar em condições de análise.
                </p>
              </div>

              <div
                className="
                  grid
                  gap-3
                  sm:grid-cols-5
                "
              >
                {clarityScale.map((item) => (
                  <div
                    key={item.grade}
                    className="
                      rounded-[1.5rem]
                      border
                      border-[#A17D4F]/10
                      bg-[#F7F3EF]
                      p-4
                      text-center
                    "
                  >
                    <ClarityDiamond marks={item.marks} />

                    <p className="mt-2 font-serif text-[20px] text-[#332A2B]">
                      {item.grade}
                    </p>

                    <p className="mt-2 text-[8px] font-light leading-4 text-[#776B6C]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* CUT */}
          <article
            className="
              rounded-[2.25rem]
              border
              border-[#A17D4F]/14
              bg-[linear-gradient(135deg,#EAD7B5_0%,#F4E7D2_52%,#E0C79E_100%)]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.08)]
              md:p-10
              lg:col-span-2
            "
          >
            <div
              className="
                grid
                gap-10
                lg:grid-cols-[0.9fr_1.1fr]
                lg:items-center
              "
            >
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#8C6635]">
                  04 • Cut
                </p>

                <h3 className="mt-4 font-serif text-[2.8rem] leading-none text-[#332A2B]">
                  A lapidação organiza a luz dentro da pedra.
                </h3>

                <p className="mt-6 max-w-[560px] text-[11px] font-light leading-6 text-[#5F5350]">
                  Proporções, simetria e acabamento ajudam a determinar como a
                  luz entra, percorre e retorna pelo diamante.
                </p>

                <div
                  className="
                    mt-7
                    rounded-[1.5rem]
                    border
                    border-[#8C6635]/14
                    bg-white/25
                    px-6
                    py-5
                  "
                >
                  <p className="font-serif text-[20px] text-[#332A2B]">
                    Cut não é apenas o formato da pedra.
                  </p>

                  <p className="mt-2 text-[10px] font-light leading-5 text-[#675C5D]">
                    Round, Oval ou Emerald descrevem formatos. A qualidade da
                    lapidação envolve também proporções, simetria e acabamento.
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  justify-center
                  rounded-[1.8rem]
                  border
                  border-[#8C6635]/12
                  bg-white/28
                  px-6
                  py-8
                "
              >
                <CutDiagram />
              </div>
            </div>
          </article>
        </div>

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
            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#D6BB8B]">
              O conjunto importa
            </p>

            <h3
              className="
                mt-4
                max-w-[880px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Dois diamantes com o mesmo peso podem apresentar classificações e
              comportamentos comerciais muito diferentes.
            </h3>
          </div>

          <a
            href="#o-que-compramos"
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
            Ver o que compramos
          </a>
        </div>
      </div>
    </section>
  );
}