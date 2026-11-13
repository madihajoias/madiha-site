const pontos = [
  {
    titulo: 'Joias',
    texto:
      'Análise das características gerais da peça, construção, materiais aparentes, estado e elementos relevantes para a avaliação.',
    icon: 'jewel',
  },
  {
    titulo: 'Ouro',
    texto:
      'Observação técnica do metal e das características necessárias para orientar a avaliação de peças em ouro.',
    icon: 'gold',
  },
  {
    titulo: 'Pedras',
    texto:
      'Quando presentes, gemas e brilhantes são observados dentro do contexto da peça e das possibilidades do atendimento.',
    icon: 'stone',
  },
  {
    titulo: 'Transparência',
    texto:
      'Os critérios relevantes podem ser explicados durante o processo para que você compreenda melhor a avaliação.',
    icon: 'eye',
  },
];

function JewelIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M15 24L23 14H41L49 24L32 51L15 24Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M15 24H49M23 14L32 24L41 14M32 24V51"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoldIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M18 39L23 24H41L46 39H18Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M22 39L26 48H38L42 39"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M28 29H36"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StoneIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M17 26L24 16H40L47 26L32 49L17 26Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M17 26H47M24 16L32 26L40 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M10 32C15 23 23 18 32 18C41 18 49 23 54 32C49 41 41 46 32 46C23 46 15 41 10 32Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="32"
        cy="32"
        r="7"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
    </svg>
  );
}

function SpecialistIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <circle
        cx="40"
        cy="29"
        r="11"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M20 61C22.5 48.5 30 43 40 43C50 43 57.5 48.5 60 61"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <circle
        cx="57"
        cy="22"
        r="8"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M63 28L69 34"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function iconFor(type: string) {
  switch (type) {
    case 'gold':
      return <GoldIcon />;
    case 'stone':
      return <StoneIcon />;
    case 'eye':
      return <EyeIcon />;
    default:
      return <JewelIcon />;
  }
}

export default function AvaliacaoDomicilioEspecialistaSection() {
  return (
    <section
      id="especialista-avaliacao-domicilio"
      aria-labelledby="especialista-avaliacao-title"
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
          bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_86%_82%,rgba(214,187,139,0.10),transparent_34%)]
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
              Avaliação especializada
            </p>

            <h2
              id="especialista-avaliacao-title"
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
              Atendimento realizado por especialista em joias e ouro.
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
              A avaliação em domicílio é conduzida por profissional com
              conhecimento técnico aplicado à análise de joias, metais e
              elementos que compõem a peça.
            </p>
          </div>
        </div>

        {/* BLOCO PRINCIPAL */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.88fr_1.12fr]
          "
        >
          {/* ESPECIALISTA */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.4rem]
              border
              border-[#A17D4F]/14
              bg-[#332A2B]
              p-8
              shadow-[0_30px_80px_rgba(51,42,43,0.11)]
              md:p-10
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
                border
                border-[#D6BB8B]/10
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-28
                -left-24
                h-72
                w-72
                rounded-full
                bg-[#5A1017]/16
                blur-[80px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-[92px]
                  w-[92px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D6BB8B]/18
                  bg-[#F7F3EF]/[0.035]
                  p-5
                  text-[#D6BB8B]
                "
              >
                <SpecialistIcon />
              </div>

              <p
                className="
                  mt-8
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D6BB8B]
                "
              >
                Conhecimento aplicado à peça
              </p>

              <h3
                className="
                  mt-5
                  max-w-[620px]
                  font-serif
                  text-[2.8rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#F7F3EF]
                "
              >
                Técnica com uma comunicação clara.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[580px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#D0C1BE]
                "
              >
                O objetivo não é apenas observar a peça, mas também comunicar
                de maneira compreensível os elementos relevantes identificados
                durante a avaliação.
              </p>

              <div
                className="
                  mt-8
                  rounded-[1.6rem]
                  border
                  border-[#D6BB8B]/12
                  bg-[#D6BB8B]/[0.05]
                  px-6
                  py-6
                "
              >
                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.19em]
                    text-[#D6BB8B]
                  "
                >
                  Transparência
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[21px]
                    leading-snug
                    text-[#F7F3EF]
                  "
                >
                  Você acompanha a avaliação e entende o que está sendo
                  considerado.
                </p>
              </div>
            </div>
          </div>

          {/* ÁREAS OBSERVADAS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {pontos.map((item) => (
              <article
                key={item.titulo}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#F7F3EF]
                  p-7
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
                    h-[62px]
                    w-[62px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A17D4F]/16
                    bg-[#EFE6D8]
                    p-3.5
                    text-[#A17D4F]
                  "
                >
                  {iconFor(item.icon)}
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[26px]
                    leading-[1.02]
                    text-[#332A2B]
                  "
                >
                  {item.titulo}
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
                  {item.texto}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* LIMITES TÉCNICOS / OBJETIVIDADE */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-2
          "
        >
          <div
            className="
              rounded-[2.2rem]
              border
              border-[#A17D4F]/14
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DEC296_100%)]
              p-8
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
              Objetividade
            </p>

            <h3
              className="
                mt-5
                max-w-[650px]
                font-serif
                text-[2.45rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              Cada peça é analisada dentro do seu próprio contexto.
            </h3>

            <p
              className="
                mt-6
                max-w-[610px]
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              Tipo de joia, materiais, estado, características construtivas,
              pedras, marcas e demais elementos relevantes podem fazer parte da
              análise, conforme a peça apresentada.
            </p>
          </div>

          <div
            className="
              rounded-[2.2rem]
              border
              border-[#A17D4F]/14
              bg-[#F7F3EF]
              p-8
              shadow-[0_20px_54px_rgba(96,72,45,0.04)]
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
              Clareza
            </p>

            <h3
              className="
                mt-5
                max-w-[650px]
                font-serif
                text-[2.45rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              Informação técnica sem tornar o processo complicado.
            </h3>

            <p
              className="
                mt-6
                max-w-[610px]
                text-[11px]
                font-light
                leading-6
                text-[#675C5D]
              "
            >
              Sempre que aplicável, os aspectos considerados na avaliação são
              apresentados de forma direta, permitindo que você compreenda a
              análise antes de tomar qualquer decisão.
            </p>
          </div>
        </div>

        {/* TRANSIÇÃO */}
        <div
          className="
            mt-10
            grid
            gap-7
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[#FCFAF7]
            p-8
            shadow-[0_20px_54px_rgba(96,72,45,0.04)]
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
                text-[#A17D4F]
              "
            >
              Segurança e discrição
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
              O atendimento em domicílio também exige cuidado com privacidade e
              segurança.
            </h3>
          </div>

          <a
            href="#seguranca-avaliacao-domicilio"
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
            Segurança do atendimento
          </a>
        </div>
      </div>
    </section>
  );
}