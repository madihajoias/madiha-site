const etapas = [
  {
    numero: '01',
    titulo: 'Solicite o atendimento',
    texto:
      'Entre em contato pelo WhatsApp e informe que deseja uma avaliação de joias ou ouro em domicílio.',
  },
  {
    numero: '02',
    titulo: 'Envie informações iniciais',
    texto:
      'Se possível, encaminhe fotos e uma breve descrição das peças para contextualizar o atendimento antes da visita.',
  },
  {
    numero: '03',
    titulo: 'Confirme o endereço',
    texto:
      'Após a análise inicial, o atendimento é organizado de acordo com o local, disponibilidade e características das peças.',
  },
  {
    numero: '04',
    titulo: 'Receba o especialista',
    texto:
      'O profissional responsável pela avaliação vai até o endereço previamente combinado.',
  },
  {
    numero: '05',
    titulo: 'Acompanhe a avaliação',
    texto:
      'As peças são analisadas no local e os critérios relevantes podem ser explicados durante o processo.',
  },
  {
    numero: '06',
    titulo: 'Receba a orientação',
    texto:
      'Ao final, você recebe as informações necessárias para compreender a avaliação e decidir com tranquilidade.',
  },
];

export default function AvaliacaoDomicilioProcessoSection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de solicitar uma avaliação de joias em domicílio pela Madiha Maison.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="processo-avaliacao-domicilio"
      aria-labelledby="processo-avaliacao-domicilio-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.10),transparent_34%)]
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
              Como funciona
            </p>

            <h2
              id="processo-avaliacao-domicilio-title"
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
              Da solicitação à avaliação, um atendimento organizado e reservado.
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
              Antes da visita, a equipe reúne informações básicas sobre as peças
              e o atendimento. Isso ajuda a preparar o deslocamento e tornar a
              avaliação mais objetiva.
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
            lg:grid-cols-3
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
                hover:border-[#A17D4F]/25
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
                  blur-[42px]
                "
              />

              <div className="relative z-10">
                <span
                  className="
                    font-serif
                    text-[28px]
                    text-[#C7A87A]
                  "
                >
                  {item.numero}
                </span>

                <div
                  aria-hidden="true"
                  className="
                    mt-6
                    h-px
                    w-10
                    bg-[#A17D4F]/28
                  "
                />

                <h3
                  className="
                    mt-5
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
                    mt-4
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

        {/* BLOCO INFERIOR */}
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
              border-[#A17D4F]/15
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
              Antes da visita
            </p>

            <h3
              className="
                mt-5
                max-w-[650px]
                font-serif
                text-[2.55rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#F7F3EF]
              "
            >
              Uma análise inicial ajuda a preparar melhor o atendimento.
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
              Fotos, quantidade aproximada de peças e informações básicas podem
              ser solicitadas antes do deslocamento. Esse contato inicial ajuda
              a entender a necessidade do cliente e organizar a visita.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['Fotos', 'Quando disponíveis'],
                ['Quantidade', 'Informação inicial'],
                ['Endereço', 'Confirmado previamente'],
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
                      tracking-[0.16em]
                      text-[#D6BB8B]
                    "
                  >
                    {label}
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[16px]
                      text-[#F7F3EF]
                    "
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              rounded-[2.3rem]
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
              No endereço
            </p>

            <h3
              className="
                mt-5
                max-w-[560px]
                font-serif
                text-[2.55rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              O foco passa a ser exclusivamente a avaliação das peças.
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
              O profissional realiza a análise no local combinado, mantendo o
              atendimento direcionado às peças apresentadas e às informações
              necessárias para compreender a avaliação.
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
                A avaliação acontece com você presente e acompanhando o processo.
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
              Solicitar atendimento
            </a>
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
              Avaliação especializada
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
              Conheça quem conduz a avaliação de joias e ouro em domicílio.
            </h3>
          </div>

          <a
            href="#especialista-avaliacao-domicilio"
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
            Avaliação especializada
          </a>
        </div>
      </div>
    </section>
  );
}