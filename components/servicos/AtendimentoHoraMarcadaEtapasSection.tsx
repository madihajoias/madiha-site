const etapas = [
  {
    numero: '01',
    titulo: 'Agende pelo WhatsApp',
    texto:
      'Escolha um horário e informe que deseja realizar um atendimento presencial na Madiha Maison.',
  },
  {
    numero: '02',
    titulo: 'Conte sobre a peça',
    texto:
      'Se possível, informe previamente o tipo de joia, ouro, diamante, relógio ou outro item que deseja apresentar.',
  },
  {
    numero: '03',
    titulo: 'Compareça no horário',
    texto:
      'O atendimento acontece no Vogue Square, com horário reservado para receber você com mais tranquilidade.',
  },
  {
    numero: '04',
    titulo: 'Acompanhe a avaliação',
    texto:
      'A peça é analisada e os critérios observados podem ser explicados durante o atendimento.',
  },
  {
    numero: '05',
    titulo: 'Decida com tranquilidade',
    texto:
      'Depois de compreender a avaliação e as possibilidades apresentadas, você decide se deseja avançar.',
  },
];

export default function AtendimentoHoraMarcadaEtapasSection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de agendar um atendimento com hora marcada na Madiha Maison.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="etapas-atendimento-hora-marcada"
      aria-labelledby="etapas-atendimento-title"
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
          bg-[radial-gradient(circle_at_12%_20%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.11),transparent_34%)]
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
              Como funciona
            </p>

            <h2
              id="etapas-atendimento-title"
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
              Do agendamento à decisão, um processo simples e acompanhado.
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
              O objetivo do horário marcado é tornar o atendimento mais
              organizado, claro e confortável desde o primeiro contato até o
              encerramento da avaliação.
            </p>
          </div>
        </div>

        {/* ETAPAS */}
        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-5
          "
        >
          {etapas.map((item) => (
            <article
              key={item.numero}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#A17D4F]/12
                bg-[#FCFAF7]
                p-7
                shadow-[0_18px_48px_rgba(96,72,45,0.045)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A17D4F]/26
                hover:shadow-[0_24px_60px_rgba(96,72,45,0.07)]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#D6BB8B]/10
                  blur-[40px]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                "
              />

              <div className="relative z-10">
                <span
                  className="
                    font-serif
                    text-[28px]
                    leading-none
                    text-[#C7A87A]
                  "
                >
                  {item.numero}
                </span>

                <div
                  aria-hidden="true"
                  className="
                    mt-7
                    h-px
                    w-10
                    bg-[#A17D4F]/28
                  "
                />

                <h3
                  className="
                    mt-6
                    font-serif
                    text-[25px]
                    leading-[1.02]
                    tracking-[-0.02em]
                    text-[#332A2B]
                  "
                >
                  {item.titulo}
                </h3>

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
              </div>
            </article>
          ))}
        </div>

        {/* BLOCO DE TRANSPARÊNCIA */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[1fr_1fr]
          "
        >
          <div
            className="
              rounded-[2.3rem]
              border
              border-[#A17D4F]/14
              bg-[#332A2B]
              p-8
              shadow-[0_26px_70px_rgba(51,42,43,0.10)]
              md:p-10
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#D6BB8B]
              "
            >
              Durante a avaliação
            </p>

            <h3
              className="
                mt-5
                max-w-[620px]
                font-serif
                text-[2.5rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#F7F3EF]
              "
            >
              A peça permanece dentro de um processo claro e acompanhado.
            </h3>

            <p
              className="
                mt-6
                max-w-[590px]
                text-[11px]
                font-light
                leading-6
                text-[#D0C1BE]
              "
            >
              Sempre que aplicável, peso, características, materiais, pedras e
              outros elementos relevantes podem ser apresentados de forma
              compreensível durante o atendimento.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ['Peça', 'Acompanhada'],
                ['Critérios', 'Explicados'],
                ['Informações', 'Claras'],
                ['Decisão', 'Sem obrigação'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="
                    rounded-[1.3rem]
                    border
                    border-[#D6BB8B]/10
                    bg-[#F7F3EF]/[0.035]
                    px-5
                    py-4
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#D6BB8B]
                    "
                  >
                    {label}
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[18px]
                      text-[#F7F3EF]
                    "
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AGENDAMENTO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#A17D4F]/15
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DEC296_100%)]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.07)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-white/24
                blur-[70px]
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
                Hora marcada
              </p>

              <h3
                className="
                  mt-5
                  max-w-[590px]
                  font-serif
                  text-[2.5rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Mais atenção à sua peça e menos tempo de espera.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#5F5350]
                "
              >
                O agendamento permite organizar o atendimento previamente e
                reservar um período adequado para receber você e examinar a
                peça com mais tranquilidade.
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
                  Agendar não cria compromisso de venda. Apenas organiza o
                  atendimento.
                </p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
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
              Atendimento presencial
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
              Conheça o espaço onde você será atendido no Vogue Square.
            </h3>
          </div>

          <a
            href="#vogue-square-atendimento"
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
            Ver atendimento
          </a>
        </div>
      </div>
    </section>
  );
}