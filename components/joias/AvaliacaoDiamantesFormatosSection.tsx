import DiamondShape from './DiamondShape';

const formatos = [
  {
    shape: 'round' as const,
    label: 'Round',
    title: 'Round Brilliant',
    focus: 'Simetria radial',
    text:
      'A leitura considera proporções, alinhamento das facetas e comportamento óptico de forma bastante estruturada.',
    detail:
      'Diâmetro, profundidade, mesa e regularidade das facetas ajudam a compor a análise.',
  },
  {
    shape: 'oval' as const,
    label: 'Oval',
    title: 'Oval Cut',
    focus: 'Comprimento x largura',
    text:
      'Formatos alongados exigem atenção especial à relação entre comprimento e largura e à distribuição visual da luz.',
    detail:
      'A presença e intensidade de áreas mais escuras também podem fazer parte da leitura.',
  },
  {
    shape: 'emerald' as const,
    label: 'Emerald',
    title: 'Emerald Cut',
    focus: 'Facetas em degraus',
    text:
      'As facetas largas e lineares deixam proporções e características internas especialmente evidentes.',
    detail:
      'Simetria, transparência visual e regularidade dos degraus ganham grande importância.',
  },
  {
    shape: 'pear' as const,
    label: 'Pear',
    title: 'Pear Cut',
    focus: 'Equilíbrio da silhueta',
    text:
      'A forma de gota exige uma leitura cuidadosa da ponta, dos ombros e do alinhamento geral da pedra.',
    detail:
      'A relação entre simetria e distribuição de luz influencia bastante a aparência final.',
  },
  {
    shape: 'cushion' as const,
    label: 'Cushion',
    title: 'Cushion Cut',
    focus: 'Variação de proporções',
    text:
      'Cushions podem apresentar silhuetas mais quadradas ou alongadas, além de diferentes padrões de facetas.',
    detail:
      'A avaliação precisa considerar a combinação entre forma, profundidade e padrão óptico.',
  },
  {
    shape: 'princess' as const,
    label: 'Princess',
    title: 'Princess Cut',
    focus: 'Geometria e cantos',
    text:
      'O formato quadrado pede atenção à simetria, aos cantos e ao alinhamento das facetas.',
    detail:
      'Proporções e distribuição de brilho podem variar bastante entre pedras visualmente semelhantes.',
  },
];

export default function AvaliacaoDiamantesFormatosSection() {
  return (
    <section
      id="formatos-diamante"
      aria-labelledby="formatos-diamante-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_90%_82%,rgba(214,187,139,0.14),transparent_34%)]
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
              Formatos lapidados
            </p>

            <h2
              id="formatos-diamante-title"
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
              Cada formato exige uma leitura própria.
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
              Proporções consideradas adequadas em um formato não devem ser
              transferidas automaticamente para outro. A geometria da pedra
              muda a forma como medidas, simetria e luz são interpretadas.
            </p>
          </div>
        </div>

        {/* FORMATOS */}
        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {formatos.map((item) => (
            <article
              key={item.shape}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#A17D4F]/12
                bg-[#FCFAF7]
                p-7
                shadow-[0_20px_54px_rgba(96,72,45,0.045)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A17D4F]/28
                hover:shadow-[0_26px_66px_rgba(96,72,45,0.075)]
                md:p-8
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
                  bg-[#D6BB8B]/12
                  blur-[34px]
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
                      h-28
                      w-28
                      items-center
                      justify-center
                      rounded-[1.7rem]
                      border
                      border-[#A17D4F]/12
                      bg-[#EFE6D8]/58
                    "
                  >
                    <DiamondShape
                      shape={item.shape}
                      className="
                        h-20
                        w-20
                        text-[#A17D4F]
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <span
                    className="
                      rounded-full
                      border
                      border-[#A17D4F]/12
                      bg-[#F7F3EF]
                      px-3
                      py-2
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#8C6635]
                    "
                  >
                    {item.label}
                  </span>
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[28px]
                    leading-none
                    tracking-[-0.025em]
                    text-[#332A2B]
                  "
                >
                  {item.title}
                </h3>

                <div
                  className="
                    mt-5
                    inline-flex
                    rounded-full
                    border
                    border-[#A17D4F]/12
                    bg-[#EFE6D8]/54
                    px-4
                    py-2
                  "
                >
                  <span
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    Foco: {item.focus}
                  </span>
                </div>

                <p
                  className="
                    mt-5
                    text-[10px]
                    font-light
                    leading-6
                    text-[#675C5D]
                  "
                >
                  {item.text}
                </p>

                <div
                  aria-hidden="true"
                  className="
                    mt-5
                    h-px
                    w-full
                    bg-[#A17D4F]/10
                  "
                />

                <p
                  className="
                    mt-5
                    text-[9px]
                    font-light
                    leading-5
                    text-[#7D7070]
                  "
                >
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* OVAL / BOW-TIE */}
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
              relative
              overflow-hidden
              rounded-[2.25rem]
              border
              border-[#A17D4F]/14
              bg-[linear-gradient(145deg,#F8F3EB_0%,#EEE1CF_100%)]
              p-8
              shadow-[0_26px_70px_rgba(96,72,45,0.06)]
              md:p-10
            "
          >
            <div
              className="
                grid
                gap-8
                md:grid-cols-[0.8fr_1.2fr]
                md:items-center
              "
            >
              <div className="mx-auto w-full max-w-[250px]">
                <svg
                  viewBox="0 0 280 360"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-auto w-full"
                >
                  <ellipse
                    cx="140"
                    cy="180"
                    rx="82"
                    ry="126"
                    fill="#FCFAF7"
                    fillOpacity="0.52"
                    stroke="#A17D4F"
                    strokeWidth="2"
                  />

                  <path
                    d="M140 54L188 84L219 140L219 220L188 276L140 306L92 276L61 220L61 140L92 84Z"
                    stroke="#A17D4F"
                    strokeWidth="1"
                    opacity="0.65"
                  />

                  <path
                    d="M140 54V306M58 180H222"
                    stroke="#A17D4F"
                    strokeWidth="0.8"
                    opacity="0.3"
                  />

                  <ellipse
                    cx="140"
                    cy="180"
                    rx="42"
                    ry="66"
                    stroke="#A17D4F"
                    strokeWidth="0.8"
                    opacity="0.42"
                  />

                  {/* BOW-TIE */}
                  <path
                    d="M70 145L140 180L70 215Z"
                    fill="#332A2B"
                    fillOpacity="0.14"
                  />

                  <path
                    d="M210 145L140 180L210 215Z"
                    fill="#332A2B"
                    fillOpacity="0.14"
                  />

                  <path
                    d="M74 143L140 180L206 143"
                    stroke="#8C6635"
                    strokeWidth="0.9"
                    opacity="0.45"
                  />

                  <path
                    d="M74 217L140 180L206 217"
                    stroke="#8C6635"
                    strokeWidth="0.9"
                    opacity="0.45"
                  />

                  <path
                    d="M220 180H258"
                    stroke="#A17D4F"
                    strokeWidth="1"
                  />

                  <text
                    x="264"
                    y="176"
                    fill="#8C6635"
                    fontSize="9"
                    letterSpacing="1.4"
                  >
                    CONTRASTE
                  </text>
                </svg>
              </div>

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
                  Exemplo: formatos alongados
                </p>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-[2.5rem]
                    leading-[0.98]
                    tracking-[-0.03em]
                    text-[#332A2B]
                  "
                >
                  Algumas pedras podem apresentar áreas de contraste mais evidentes.
                </h3>

                <p
                  className="
                    mt-6
                    text-[11px]
                    font-light
                    leading-6
                    text-[#675C5D]
                  "
                >
                  Em formatos como Oval, Pear e Marquise, pode surgir uma área
                  central mais escura conhecida informalmente como efeito
                  “bow-tie”. A presença, intensidade e distribuição desse
                  contraste fazem parte da leitura visual.
                </p>

                <div
                  className="
                    mt-7
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/12
                    bg-[#EFE6D8]/56
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
                    Não basta saber o formato. É preciso observar como ele foi executado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RELAÇÃO COMPRIMENTO / LARGURA */}
          <div
            className="
              rounded-[2.25rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DCC08F_100%)]
              p-8
              shadow-[0_26px_70px_rgba(96,72,45,0.07)]
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
              Relação de proporção
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
              Comprimento e largura ajudam a definir a silhueta.
            </h3>

            <div
              className="
                mt-8
                rounded-[1.65rem]
                border
                border-[#8C6635]/12
                bg-white/24
                px-5
                py-7
              "
            >
              <svg
                viewBox="0 0 420 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-auto w-full"
              >
                <ellipse
                  cx="210"
                  cy="110"
                  rx="82"
                  ry="58"
                  fill="#FCFAF7"
                  fillOpacity="0.42"
                  stroke="#8C6635"
                  strokeWidth="1.5"
                />

                <path
                  d="M116 110H304"
                  stroke="#8C6635"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />

                <path
                  d="M210 42V178"
                  stroke="#8C6635"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                />

                <path
                  d="M116 98V122M304 98V122"
                  stroke="#8C6635"
                  strokeWidth="1"
                />

                <path
                  d="M198 42H222M198 178H222"
                  stroke="#8C6635"
                  strokeWidth="1"
                />

                <text
                  x="210"
                  y="205"
                  textAnchor="middle"
                  fill="#8C6635"
                  fontSize="10"
                  letterSpacing="1.5"
                >
                  COMPRIMENTO
                </text>

                <text
                  x="335"
                  y="115"
                  fill="#8C6635"
                  fontSize="10"
                  letterSpacing="1.5"
                >
                  LARGURA
                </text>
              </svg>
            </div>

            <p
              className="
                mt-6
                text-[10px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              Essa relação não deve ser interpretada como uma regra única de
              beleza. Ela ajuda a descrever objetivamente a forma apresentada.
            </p>
          </div>
        </div>

        {/* FRASE EDITORIAL */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/14
            bg-[#332A2B]
            p-8
            shadow-[0_24px_64px_rgba(51,42,43,0.10)]
            md:p-10
          "
        >
          <div
            className="
              grid
              gap-7
              lg:grid-cols-[0.3fr_1.7fr]
              lg:items-center
            "
          >
            <div>
              <span
                className="
                  font-serif
                  text-[5rem]
                  leading-none
                  text-[#D6BB8B]
                  md:text-[6rem]
                "
              >
                6
              </span>

              <p
                className="
                  mt-2
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D6BB8B]
                "
              >
                formatos ilustrados
              </p>
            </div>

            <h3
              className="
                max-w-[1000px]
                font-serif
                text-[2.1rem]
                leading-[1.05]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.8rem]
              "
            >
              O especialista não procura transformar todas as pedras no mesmo padrão. Ele interpreta cada formato dentro da própria geometria.
            </h3>
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
              E quando a pedra está montada?
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
              A joia pode limitar algumas medições, mas ainda permite uma leitura importante da pedra.
            </h3>
          </div>

          <a
            href="#diamante-montado"
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
            Ver diamante montado
          </a>
        </div>
      </div>
    </section>
  );
}