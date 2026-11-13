const pontos = [
  {
    titulo: 'Atendimento reservado',
    texto:
      'Um ambiente profissional para receber você com mais privacidade, atenção e organização.',
    icon: 'privacy',
  },
  {
    titulo: 'Avaliação especializada',
    texto:
      'Atendimento voltado à análise de joias, ouro e peças de valor, com acompanhamento durante o processo.',
    icon: 'jewel',
  },
  {
    titulo: 'Transparência',
    texto:
      'Os critérios relevantes podem ser explicados de forma clara para que você compreenda melhor a avaliação.',
    icon: 'eye',
  },
  {
    titulo: 'Hora marcada',
    texto:
      'Você pode organizar previamente sua visita e ser recebido com um horário reservado para o atendimento.',
    icon: 'clock',
  },
];

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

function ClockIcon() {
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
        r="19"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M32 21V32L40 37"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function iconFor(type: string) {
  switch (type) {
    case 'privacy':
      return <PrivacyIcon />;
    case 'eye':
      return <EyeIcon />;
    case 'clock':
      return <ClockIcon />;
    default:
      return <JewelIcon />;
  }
}

export default function AtendimentoVogueSquareAtendimentoSection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de agendar um atendimento na Madiha Maison no Vogue Square.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="atendimento-madiha-vogue-square"
      aria-labelledby="atendimento-vogue-square-title"
      className="
        relative
        overflow-hidden
        bg-[#FCFAF7]
        py-24
        md:py-28
        lg:py-32
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_14%_18%,rgba(199,168,122,0.12),transparent_30%),radial-gradient(circle_at_86%_82%,rgba(214,187,139,0.10),transparent_34%)]
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
              Atendimento Madiha Maison
            </p>

            <h2
              id="atendimento-vogue-square-title"
              className="
                mt-6
                max-w-[800px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#332A2B]
                sm:text-[3.7rem]
                md:text-[4.3rem]
              "
            >
              Um atendimento profissional dentro do Vogue Square.
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
              A Madiha Maison recebe clientes para avaliações e atendimentos
              relacionados a joias, ouro e peças de valor em um ambiente
              preparado para oferecer discrição e clareza.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {pontos.map((item) => (
            <article
              key={item.titulo}
              className="
                rounded-[2rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                p-7
                shadow-[0_18px_48px_rgba(96,72,45,0.04)]
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
                  text-[25px]
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

        {/* DESTAQUE FINAL */}
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
                Atendimento presencial
              </p>

              <h3
                className="
                  mt-5
                  max-w-[660px]
                  font-serif
                  text-[2.6rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#F7F3EF]
                "
              >
                Você pode chegar ao Vogue Square já com seu atendimento organizado.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[610px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#D0C1BE]
                "
              >
                O agendamento prévio permite que a equipe prepare o atendimento
                e reserve um período adequado para receber você e suas peças.
              </p>
            </div>
          </div>

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
              Agende sua visita
            </p>

            <h3
              className="
                mt-5
                max-w-[560px]
                font-serif
                text-[2.5rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              Venha conhecer a Madiha Maison no Vogue Square.
            </h3>

            <p
              className="
                mt-6
                max-w-[530px]
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              Entre em contato pelo WhatsApp para combinar seu atendimento e
              receber as orientações necessárias para a visita.
            </p>

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
                border-[#332A2B]
                bg-[#332A2B]
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#F7F3EF]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#473A3B]
              "
            >
              Agendar atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}