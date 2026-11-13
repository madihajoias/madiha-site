const fotos = [
  {
    numero: '01',
    titulo: 'Frente da peça',
    texto:
      'Fotografe a joia inteira, centralizada e bem iluminada, evitando cortar partes importantes.',
  },
  {
    numero: '02',
    titulo: 'Verso',
    texto:
      'O verso pode revelar estrutura, acabamento, encaixes, fechos, gravações e outras informações úteis.',
  },
  {
    numero: '03',
    titulo: 'Marcações',
    texto:
      'Aproxime a câmera de contrastes, números, assinaturas, quilates, referências ou inscrições existentes.',
  },
  {
    numero: '04',
    titulo: 'Pedras',
    texto:
      'Faça fotos próximas das pedras, mostrando formato, montagem e detalhes visíveis sem excesso de zoom digital.',
  },
  {
    numero: '05',
    titulo: 'Certificado',
    texto:
      'Se houver certificado, nota, embalagem original ou documentação, fotografe as informações de forma legível.',
  },
];

function JewelryPhotoGuide({
  type,
}: {
  type: 'front' | 'back' | 'mark' | 'stone' | 'certificate';
}) {
  if (type === 'certificate') {
    return (
      <svg
        viewBox="0 0 240 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-full w-full"
      >
        <rect
          x="55"
          y="28"
          width="130"
          height="134"
          rx="12"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M78 58H160M78 78H145M78 98H153M78 118H132"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.58"
        />

        <circle
          cx="151"
          cy="126"
          r="16"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.8"
        />

        <path
          d="M145 126L150 131L159 120"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />
      </svg>
    );
  }

  if (type === 'mark') {
    return (
      <svg
        viewBox="0 0 240 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-full w-full"
      >
        <circle
          cx="104"
          cy="94"
          r="48"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M81 94H127"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.55"
        />

        <text
          x="104"
          y="88"
          textAnchor="middle"
          fill="currentColor"
          fontSize="12"
          fontFamily="serif"
        >
          18K
        </text>

        <text
          x="104"
          y="105"
          textAnchor="middle"
          fill="currentColor"
          fontSize="8"
          letterSpacing="1.2"
          opacity="0.65"
        >
          750
        </text>

        <circle
          cx="154"
          cy="52"
          r="22"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.7"
        />

        <path
          d="M168 66L190 88"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    );
  }

  if (type === 'stone') {
    return (
      <svg
        viewBox="0 0 240 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="h-full w-full"
      >
        <circle
          cx="118"
          cy="94"
          r="48"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="
            M118 46
            L144 56
            L164 76
            L166 102
            L152 126
            L130 142
            L106 142
            L84 126
            L70 102
            L72 76
            L92 56
            Z
          "
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
        />

        <path
          d="M118 46V142M70 94H166M92 56L144 126M144 56L92 126"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.42"
        />

        <circle
          cx="118"
          cy="94"
          r="18"
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.5"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 240 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M78 46C91 69 101 80 120 82C139 80 149 69 162 46"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      <path
        d="M120 82V104"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="120"
        cy="125"
        r="26"
        stroke="currentColor"
        strokeWidth="2"
      />

      {type === 'back' && (
        <>
          <path
            d="M94 125H146"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />

          <path
            d="M120 99V151"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.4"
          />
        </>
      )}

      {type === 'front' && (
        <>
          <circle
            cx="120"
            cy="125"
            r="16"
            stroke="currentColor"
            strokeWidth="0.9"
            opacity="0.55"
          />

          <path
            d="M120 99V151M94 125H146M102 107L138 143M138 107L102 143"
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.42"
          />
        </>
      )}
    </svg>
  );
}

const guias = [
  {
    label: 'Frente',
    type: 'front' as const,
    titulo: 'Mostre a peça inteira',
    texto:
      'Use um enquadramento que permita compreender o formato completo da joia.',
  },
  {
    label: 'Verso',
    type: 'back' as const,
    titulo: 'Fotografe o outro lado',
    texto:
      'Estrutura, acabamento e sistemas de fechamento podem aparecer melhor no verso.',
  },
  {
    label: 'Marcação',
    type: 'mark' as const,
    titulo: 'Aproxime os detalhes',
    texto:
      'Assinaturas, teor, referências e números devem ficar legíveis sempre que possível.',
  },
  {
    label: 'Pedras',
    type: 'stone' as const,
    titulo: 'Registre as pedras',
    texto:
      'Fotografe de perto, mas sem perder nitidez ou esconder a relação da pedra com a montagem.',
  },
  {
    label: 'Documentos',
    type: 'certificate' as const,
    titulo: 'Inclua certificados',
    texto:
      'Documentos podem ajudar a contextualizar marca, referência, material e características da peça.',
  },
];

export default function AvaliacaoOnlineFotosSection() {
  return (
    <section
      id="como-fotografar-avaliacao-online"
      aria-labelledby="como-fotografar-avaliacao-online-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(214,187,139,0.12),transparent_34%)]
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
              Como fotografar sua joia
            </p>

            <h2
              id="como-fotografar-avaliacao-online-title"
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
              Boas fotos ajudam a enxergar detalhes importantes.
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
              Não é necessário equipamento profissional. Luz adequada,
              enquadramento simples e imagens nítidas já ajudam bastante na
              primeira leitura da peça.
            </p>
          </div>
        </div>

        {/* GUIAS VISUAIS */}
        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {guias.map((item) => (
            <article
              key={item.label}
              className="
                group
                rounded-[1.9rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                p-6
                shadow-[0_18px_48px_rgba(96,72,45,0.04)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A17D4F]/26
                hover:bg-[#FCFAF7]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >
                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A17D4F]
                  "
                >
                  {item.label}
                </p>

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#A17D4F]
                  "
                />
              </div>

              <div
                className="
                  mt-6
                  flex
                  h-[165px]
                  items-center
                  justify-center
                  rounded-[1.5rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]/60
                  p-4
                  text-[#A17D4F]
                "
              >
                <JewelryPhotoGuide type={item.type} />
              </div>

              <h3
                className="
                  mt-6
                  font-serif
                  text-[22px]
                  leading-[1.05]
                  text-[#332A2B]
                "
              >
                {item.titulo}
              </h3>

              <p
                className="
                  mt-4
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

        {/* PASSO A PASSO DETALHADO */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          <div
            className="
              rounded-[2.3rem]
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
              Uma sequência recomendada
            </p>

            <div className="mt-7 grid gap-3">
              {fotos.map((item) => (
                <div
                  key={item.numero}
                  className="
                    grid
                    grid-cols-[auto_1fr]
                    gap-5
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[21px]
                      text-[#C7A87A]
                    "
                  >
                    {item.numero}
                  </span>

                  <div>
                    <p
                      className="
                        font-serif
                        text-[19px]
                        text-[#332A2B]
                      "
                    >
                      {item.titulo}
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
                      {item.texto}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LUZ / FUNDO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
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
                Luz e enquadramento
              </p>

              <h3
                className="
                  mt-5
                  max-w-[540px]
                  font-serif
                  text-[2.55rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Simples costuma funcionar melhor.
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
                Prefira luz natural suave ou iluminação uniforme. Evite flash
                muito forte, reflexos excessivos, filtros e fundos com muitos
                elementos.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  ['Luz', 'Clara e uniforme'],
                  ['Fundo', 'Neutro e simples'],
                  ['Foco', 'Sobre a joia'],
                  ['Zoom', 'Evite exageros'],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-5
                      rounded-[1.35rem]
                      border
                      border-[#8C6635]/12
                      bg-white/24
                      px-5
                      py-4
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#8C6635]
                      "
                    >
                      {title}
                    </span>

                    <span
                      className="
                        font-serif
                        text-[17px]
                        text-[#332A2B]
                      "
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

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
                  Mais importante que uma foto bonita é uma foto que mostre a peça com clareza.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TRANSIÇÃO */}
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
              Depois das imagens
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
              Algumas informações podem ser observadas online. Outras dependem da peça em mãos.
            </h3>
          </div>

          <a
            href="#limites-avaliacao-online"
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
            O que podemos analisar
          </a>
        </div>
      </div>
    </section>
  );
}