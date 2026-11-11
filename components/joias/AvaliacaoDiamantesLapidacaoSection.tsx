type LightDiamondProps = {
  type: 'shallow' | 'balanced' | 'deep';
  title: string;
  subtitle: string;
};

function LightDiamond({
  type,
  title,
  subtitle,
}: LightDiamondProps) {
  const shallow = type === 'shallow';
  const balanced = type === 'balanced';
  const deep = type === 'deep';

  return (
    <div
      className="
        rounded-[1.7rem]
        border
        border-[#A17D4F]/12
        bg-[#FCFAF7]
        p-5
        text-center
      "
    >
      <svg
        viewBox="0 0 280 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="mx-auto h-auto w-full max-w-[260px]"
      >
        <defs>
          <linearGradient
            id={`diamond-profile-${type}`}
            x1="60"
            y1="50"
            x2="220"
            y2="210"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#E7D2AC" />
            <stop offset="48%" stopColor="#B99154" />
            <stop offset="100%" stopColor="#7F6039" />
          </linearGradient>

          <linearGradient
            id={`light-path-${type}`}
            x1="140"
            y1="20"
            x2="140"
            y2="230"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#EED59F" />
            <stop offset="100%" stopColor="#B99154" />
          </linearGradient>
        </defs>

        {/* GUIAS */}
        <path
          d="M140 20V230"
          stroke="#C7A87A"
          strokeWidth="0.7"
          strokeDasharray="3 8"
          opacity="0.3"
        />

        {/* PERFIL */}
        {shallow && (
          <>
            <path
              d="M55 72H225L200 112H80L55 72Z"
              fill="#FCFAF7"
              fillOpacity="0.42"
              stroke={`url(#diamond-profile-${type})`}
              strokeWidth="2"
            />

            <path
              d="M80 112L140 170L200 112"
              fill="#F4E7D4"
              fillOpacity="0.3"
              stroke={`url(#diamond-profile-${type})`}
              strokeWidth="2"
            />

            <path
              d="M55 72H225"
              stroke="#8C6635"
              strokeWidth="1.5"
            />

            <path
              d="M80 112H200"
              stroke="#8C6635"
              strokeWidth="1.4"
            />

            {/* LUZ ESCAPANDO PELA BASE */}
            <path
              d="M105 30L105 80L125 112L140 145L140 208"
              stroke={`url(#light-path-${type})`}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M175 30L175 80L155 112L140 145"
              stroke={`url(#light-path-${type})`}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M135 201L140 208L145 201"
              stroke="#B99154"
              strokeWidth="2"
            />
          </>
        )}

        {balanced && (
          <>
            <path
              d="M55 72H225L198 118H82L55 72Z"
              fill="#FCFAF7"
              fillOpacity="0.42"
              stroke={`url(#diamond-profile-${type})`}
              strokeWidth="2"
            />

            <path
              d="M82 118L140 214L198 118"
              fill="#F4E7D4"
              fillOpacity="0.3"
              stroke={`url(#diamond-profile-${type})`}
              strokeWidth="2"
            />

            <path
              d="M55 72H225"
              stroke="#8C6635"
              strokeWidth="1.5"
            />

            <path
              d="M82 118H198"
              stroke="#8C6635"
              strokeWidth="1.4"
            />

            {/* RETORNO DE LUZ */}
            <path
              d="M100 30L100 82L126 118L140 176L164 118L180 82L180 30"
              stroke={`url(#light-path-${type})`}
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M94 38L100 30L106 38"
              stroke="#EED59F"
              strokeWidth="2"
            />

            <path
              d="M174 38L180 30L186 38"
              stroke="#EED59F"
              strokeWidth="2"
            />
          </>
        )}

        {deep && (
          <>
            <path
              d="M55 72H225L202 108H78L55 72Z"
              fill="#FCFAF7"
              fillOpacity="0.42"
              stroke={`url(#diamond-profile-${type})`}
              strokeWidth="2"
            />

            <path
              d="M78 108L140 232L202 108"
              fill="#F4E7D4"
              fillOpacity="0.3"
              stroke={`url(#diamond-profile-${type})`}
              strokeWidth="2"
            />

            <path
              d="M55 72H225"
              stroke="#8C6635"
              strokeWidth="1.5"
            />

            <path
              d="M78 108H202"
              stroke="#8C6635"
              strokeWidth="1.4"
            />

            {/* LUZ ESCAPANDO LATERALMENTE */}
            <path
              d="M100 30L100 78L125 108L150 170L210 196"
              stroke={`url(#light-path-${type})`}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M180 30L180 78L155 108L138 165L72 194"
              stroke={`url(#light-path-${type})`}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M202 190L210 196L201 198"
              stroke="#B99154"
              strokeWidth="2"
            />

            <path
              d="M80 188L72 194L81 197"
              stroke="#B99154"
              strokeWidth="2"
            />
          </>
        )}

        {/* FACETAS */}
        <path
          d="M140 72V118"
          stroke="#A17D4F"
          strokeWidth="0.8"
          opacity="0.35"
        />

        <path
          d="M82 118L140 72L198 118"
          stroke="#A17D4F"
          strokeWidth="0.8"
          opacity="0.3"
        />
      </svg>

      <p
        className="
          mt-4
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[#A17D4F]
        "
      >
        {title}
      </p>

      <p
        className="
          mt-2
          font-serif
          text-[21px]
          leading-tight
          text-[#332A2B]
        "
      >
        {subtitle}
      </p>
    </div>
  );
}

export default function AvaliacaoDiamantesLapidacaoSection() {
  return (
    <section
      id="lapidacao-e-luz"
      aria-labelledby="lapidacao-e-luz-title"
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
              Lapidação e comportamento da luz
            </p>

            <h2
              id="lapidacao-e-luz-title"
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
              A lapidação determina como a luz percorre o diamante.
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
              Proporções, ângulos, simetria e acabamento influenciam a entrada,
              o percurso e o retorno da luz. Por isso, dois diamantes com o
              mesmo peso e formato podem apresentar comportamentos visuais
              diferentes.
            </p>
          </div>
        </div>

        {/* DIAGRAMA DE LUZ */}
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
                Comparação visual simplificada
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
                Profundidade e retorno de luz
              </h3>
            </div>

            <p
              className="
                max-w-[500px]
                text-[10px]
                font-light
                leading-5
                text-[#675C5D]
              "
            >
              O desenho abaixo é didático. Ele ajuda a visualizar por que uma
              proporção equilibrada tende a direcionar melhor o retorno de luz.
            </p>
          </div>

          <div
            className="
              mt-8
              grid
              gap-4
              lg:grid-cols-3
            "
          >
            <LightDiamond
              type="shallow"
              title="Muito raso"
              subtitle="Parte da luz pode escapar pela base."
            />

            <div
              className="
                relative
                rounded-[1.8rem]
                border
                border-[#A17D4F]/28
                bg-[linear-gradient(145deg,#E7D1AA_0%,#F2E4CC_52%,#DDC092_100%)]
                p-[1px]
                shadow-[0_20px_54px_rgba(96,72,45,0.09)]
              "
            >
              <div
                className="
                  h-full
                  rounded-[1.75rem]
                  bg-[#FCFAF7]/40
                  p-4
                  backdrop-blur-sm
                "
              >
                <LightDiamond
                  type="balanced"
                  title="Proporção equilibrada"
                  subtitle="A luz tende a retornar pela parte superior."
                />
              </div>

              <span
                className="
                  absolute
                  right-5
                  top-5
                  rounded-full
                  border
                  border-[#8C6635]/15
                  bg-[#E8D1A8]/90
                  px-3
                  py-1.5
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#8C6635]
                "
              >
                Referência visual
              </span>
            </div>

            <LightDiamond
              type="deep"
              title="Muito profundo"
              subtitle="Parte da luz pode escapar lateralmente."
            />
          </div>
        </div>

        {/* CUT NÃO É SHAPE */}
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
                Um ponto importante
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[2.6rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Lapidação e formato não são a mesma coisa.
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
                Round, Oval, Pear ou Emerald descrevem formatos. A análise da
                lapidação considera como as facetas, proporções, simetria e
                acabamento foram executados.
              </p>
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
              Elementos observados
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: 'Proporções',
                  text: 'Relação entre mesa, coroa, cintura, pavilhão e profundidade.',
                },
                {
                  title: 'Simetria',
                  text: 'Alinhamento e regularidade das facetas ao redor da pedra.',
                },
                {
                  title: 'Polimento',
                  text: 'Qualidade do acabamento das superfícies lapidadas.',
                },
                {
                  title: 'Ângulos',
                  text: 'Inclinações diferentes modificam o caminho percorrido pela luz.',
                },
                {
                  title: 'Retorno de luz',
                  text: 'Parte da análise visual está relacionada a como a luz retorna ao observador.',
                },
                {
                  title: 'Distribuição',
                  text: 'Brilho e contraste não aparecem necessariamente de forma uniforme.',
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

        {/* SIMETRIA */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-[2.25rem]
            border
            border-[#A17D4F]/14
            bg-[#332A2B]
            p-8
            shadow-[0_26px_70px_rgba(51,42,43,0.10)]
            md:p-10
          "
        >
          <div
            className="
              grid
              gap-9
              lg:grid-cols-[0.8fr_1.2fr]
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
                Simetria
              </p>

              <h3
                className="
                  mt-4
                  max-w-[570px]
                  font-serif
                  text-[2.5rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#F7F3EF]
                "
              >
                Facetas precisam formar uma estrutura coerente.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#CFC0BD]
                "
              >
                Pequenos desalinhamentos podem alterar o padrão visual da pedra.
                Por isso, a observação também compara regularidade, posição e
                correspondência entre as facetas.
              </p>
            </div>

            <div
              className="
                relative
                flex
                min-h-[330px]
                items-center
                justify-center
                overflow-hidden
                rounded-[1.8rem]
                border
                border-[#D6BB8B]/14
                bg-[#F7F3EF]/[0.04]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  h-[270px]
                  w-[270px]
                  rounded-full
                  border
                  border-[#D6BB8B]/12
                "
              />

              <svg
                viewBox="0 0 340 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="relative z-10 h-[290px] w-[290px]"
              >
                <circle
                  cx="170"
                  cy="170"
                  r="108"
                  stroke="#D6BB8B"
                  strokeWidth="1.5"
                />

                <path
                  d="M170 62L230 86L278 136L278 204L230 254L170 278L110 254L62 204L62 136L110 86Z"
                  stroke="#D6BB8B"
                  strokeWidth="1"
                  opacity="0.78"
                />

                <path
                  d="M170 62V278M62 170H278"
                  stroke="#D6BB8B"
                  strokeWidth="0.9"
                  opacity="0.42"
                />

                <path
                  d="M110 86L230 254M230 86L110 254"
                  stroke="#D6BB8B"
                  strokeWidth="0.9"
                  opacity="0.42"
                />

                <path
                  d="M170 97L222 118L243 170L222 222L170 243L118 222L97 170L118 118Z"
                  stroke="#D6BB8B"
                  strokeWidth="0.9"
                  opacity="0.56"
                />

                <circle
                  cx="170"
                  cy="170"
                  r="39"
                  stroke="#E8D2AB"
                  strokeWidth="0.8"
                  opacity="0.62"
                />

                <path
                  d="M170 62V278"
                  stroke="#F7F3EF"
                  strokeWidth="1"
                  strokeDasharray="3 7"
                  opacity="0.48"
                />
              </svg>

              <span
                className="
                  absolute
                  bottom-6
                  rounded-full
                  border
                  border-[#D6BB8B]/16
                  bg-[#332A2B]/75
                  px-4
                  py-2
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#D6BB8B]
                  backdrop-blur-xl
                "
              >
                Vista superior • alinhamento das facetas
              </span>
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
              Cada formato tem sua própria leitura
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
              Uma boa proporção em um Round não é necessariamente a mesma referência usada em um Oval ou Emerald.
            </h3>
          </div>

          <a
            href="#formatos-diamante"
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
            Ver formatos
          </a>
        </div>
      </div>
    </section>
  );
}