const situacoes = [
  {
    titulo: 'Várias peças',
    texto:
      'Quando há um conjunto maior de joias, ouro ou outras peças de valor, o atendimento em domicílio pode tornar a avaliação mais prática e organizada.',
    icon: 'collection',
  },
  {
    titulo: 'Joias herdadas',
    texto:
      'Peças recebidas por herança muitas vezes vêm acompanhadas de dúvidas sobre materiais, pedras, origem e valor, tornando uma avaliação especializada especialmente útil.',
    icon: 'inheritance',
  },
  {
    titulo: 'Peças antigas',
    texto:
      'Joias antigas podem exigir mais atenção à construção, estado, materiais aparentes, assinaturas e características específicas da peça.',
    icon: 'antique',
  },
  {
    titulo: 'Menor deslocamento',
    texto:
      'Para quem prefere evitar transportar joias ou ouro, a visita do especialista permite que a análise aconteça no endereço previamente combinado.',
    icon: 'home',
  },
  {
    titulo: 'Atendimento reservado',
    texto:
      'Uma alternativa para clientes que valorizam discrição, atenção individual e um contato mais direto durante a avaliação.',
    icon: 'privacy',
  },
  {
    titulo: 'Peças de maior relevância',
    texto:
      'Determinadas joias, diamantes, coleções ou peças especiais podem justificar um atendimento mais personalizado e cuidadosamente preparado.',
    icon: 'diamond',
  },
];

function CollectionIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M14 23L21 14H35L42 23L28 44L14 23Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M29 31L35 23H49L55 31L42 50L29 31Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M14 23H42M29 31H55"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function InheritanceIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M32 14C24 14 18 19 18 26C18 37 32 48 32 48C32 48 46 37 46 26C46 19 40 14 32 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <circle
        cx="32"
        cy="27"
        r="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function AntiqueIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <circle
        cx="32"
        cy="32"
        r="18"
        stroke="currentColor"
        strokeWidth="1.6"
      />

      <path
        d="M32 21V32L39 37"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M32 10V15M54 32H49M32 54V49M10 32H15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M13 30L32 14L51 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M18 28V49H46V28"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M27 49V37H37V49"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrivacyIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M32 9L49 15V28C49 40.5 42.5 50 32 55C21.5 50 15 40.5 15 28V15L32 9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      <path
        d="M25 31V27C25 23.1 28.1 20 32 20C35.9 20 39 23.1 39 27V31"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <rect
        x="23"
        y="31"
        width="18"
        height="13"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function DiamondIcon() {
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

function iconFor(type: string) {
  switch (type) {
    case 'collection':
      return <CollectionIcon />;
    case 'inheritance':
      return <InheritanceIcon />;
    case 'antique':
      return <AntiqueIcon />;
    case 'home':
      return <HomeIcon />;
    case 'privacy':
      return <PrivacyIcon />;
    default:
      return <DiamondIcon />;
  }
}

export default function AvaliacaoDomicilioIndicacoesSection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de saber se a avaliação em domicílio é indicada para as minhas peças.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="indicacoes-avaliacao-domicilio"
      aria-labelledby="indicacoes-avaliacao-title"
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
          bg-[radial-gradient(circle_at_14%_20%,rgba(199,168,122,0.12),transparent_30%),radial-gradient(circle_at_86%_80%,rgba(214,187,139,0.10),transparent_34%)]
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
              Quando faz sentido
            </p>

            <h2
              id="indicacoes-avaliacao-title"
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
              Existem situações em que avaliar as peças no seu endereço é mais adequado.
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
              A avaliação em domicílio pode ser especialmente interessante
              quando há várias peças, joias herdadas, itens antigos ou uma
              preferência por não transportar bens de valor.
            </p>
          </div>
        </div>

        {/* SITUAÇÕES */}
        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {situacoes.map((item) => (
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
                hover:border-[#A17D4F]/25
                hover:bg-[#FCFAF7]
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
                  bg-[#D6BB8B]/10
                  blur-[40px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[64px]
                  w-[64px]
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
                  relative
                  z-10
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
                  relative
                  z-10
                  mt-5
                  h-px
                  w-10
                  bg-[#A17D4F]/28
                "
              />

              <p
                className="
                  relative
                  z-10
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

        {/* BLOCO DE DECISÃO */}
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
              rounded-[2.4rem]
              border
              border-[#A17D4F]/15
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DEC296_100%)]
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
              Avaliação personalizada
            </p>

            <h3
              className="
                mt-5
                max-w-[670px]
                font-serif
                text-[2.6rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              Nem toda avaliação precisa começar com um deslocamento até a loja.
            </h3>

            <p
              className="
                mt-6
                max-w-[620px]
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              Dependendo da quantidade, características das peças e contexto do
              cliente, o atendimento em domicílio pode oferecer uma experiência
              mais prática, reservada e adequada.
            </p>

            <div
              className="
                mt-8
                rounded-[1.55rem]
                border
                border-[#8C6635]/14
                bg-white/25
                px-6
                py-6
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
                O primeiro contato ajuda a entender se o atendimento em
                domicílio é a modalidade mais indicada para o seu caso.
              </p>
            </div>
          </div>

          <div
            className="
              relative
              overflow-hidden
              rounded-[2.4rem]
              border
              border-[#A17D4F]/14
              bg-[#332A2B]
              p-8
              shadow-[0_28px_76px_rgba(51,42,43,0.11)]
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

            <div className="relative z-10">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D6BB8B]
                "
              >
                Fale com a Madiha Maison
              </p>

              <h3
                className="
                  mt-5
                  max-w-[580px]
                  font-serif
                  text-[2.55rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#F7F3EF]
                "
              >
                Conte brevemente quais peças você deseja avaliar.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[550px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#D0C1BE]
                "
              >
                A equipe pode solicitar algumas informações iniciais para
                compreender o contexto e orientar a melhor forma de atendimento.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  'Tipo de peça',
                  'Quantidade aproximada',
                  'Fotos, quando disponíveis',
                  'Região do atendimento',
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[1.3rem]
                      border
                      border-[#D6BB8B]/10
                      bg-[#F7F3EF]/[0.035]
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
                        border-[#D6BB8B]/18
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D6BB8B]" />
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-light
                        text-[#E1D5D2]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  min-h-[56px]
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
                  tracking-[0.2em]
                  text-[#332A2B]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                Consultar atendimento
              </a>
            </div>
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
              Solicitar atendimento
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
              Fale com a Madiha Maison e verifique a disponibilidade para
              avaliação em domicílio.
            </h3>
          </div>

          <a
            href="#contato-avaliacao-domicilio"
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
            Solicitar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}