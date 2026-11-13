const beneficios = [
  {
    numero: '01',
    titulo: 'Atendimento no seu endereço',
    texto:
      'A avaliação acontece onde você estiver, mediante agendamento prévio e confirmação das condições do atendimento.',
  },
  {
    numero: '02',
    titulo: 'Mais privacidade',
    texto:
      'Uma alternativa para quem prefere evitar deslocamentos com joias, ouro ou outras peças de valor.',
  },
  {
    numero: '03',
    titulo: 'Atenção individual',
    texto:
      'O atendimento é direcionado à sua peça, ao seu contexto e às informações relevantes para a avaliação.',
  },
  {
    numero: '04',
    titulo: 'Processo transparente',
    texto:
      'Os critérios observados podem ser explicados durante a avaliação, para que você compreenda o processo com clareza.',
  },
];

export default function AvaliacaoDomicilioAtendimentoSection() {
  return (
    <section
      id="atendimento-domicilio"
      aria-labelledby="atendimento-domicilio-title"
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
          bg-[radial-gradient(circle_at_12%_20%,rgba(199,168,122,0.12),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(214,187,139,0.10),transparent_34%)]
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
              Atendimento em domicílio
            </p>

            <h2
              id="atendimento-domicilio-title"
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
              Avaliação especializada sem precisar transportar suas peças.
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
              O serviço foi pensado para clientes que valorizam discrição,
              praticidade e um atendimento mais reservado durante a avaliação
              de joias, ouro e peças de valor.
            </p>
          </div>
        </div>

        {/* BENEFÍCIOS */}
        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {beneficios.map((item) => (
            <article
              key={item.numero}
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
                aria-hidden="true"
                className="
                  absolute
                  -right-14
                  -top-14
                  h-36
                  w-36
                  rounded-full
                  bg-[#D6BB8B]/10
                  blur-[38px]
                "
              />

              <div className="relative z-10">
                <span
                  className="
                    font-serif
                    text-[27px]
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

        {/* DESTAQUE */}
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
              Avaliação no local
            </p>

            <h3
              className="
                mt-5
                max-w-[660px]
                font-serif
                text-[2.6rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              A peça permanece com você durante o atendimento.
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
              O profissional realiza a análise no endereço combinado, permitindo
              que você acompanhe as etapas relevantes e receba as explicações
              necessárias durante a avaliação.
            </p>
          </div>

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
              Para quem valoriza
            </p>

            <div className="mt-7 grid gap-3">
              {[
                'Privacidade no atendimento',
                'Menor necessidade de deslocamento',
                'Atenção individual à peça',
                'Explicações durante a avaliação',
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[1.35rem]
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
                      leading-5
                      text-[#E1D5D2]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="
                mt-8
                rounded-[1.5rem]
                border
                border-[#D6BB8B]/12
                bg-[#D6BB8B]/[0.05]
                px-6
                py-5
              "
            >
              <p
                className="
                  font-serif
                  text-[19px]
                  leading-snug
                  text-[#F7F3EF]
                "
              >
                Exclusividade sem perder objetividade.
              </p>
            </div>
          </div>
        </div>

        {/* PRÓXIMA SEÇÃO */}
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
              Próximo passo
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
              Entenda como funciona a avaliação de joias em domicílio.
            </h3>
          </div>

          <a
            href="#processo-avaliacao-domicilio"
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
            Como funciona
          </a>
        </div>
      </div>
    </section>
  );
}