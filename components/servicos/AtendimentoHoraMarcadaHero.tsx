export default function AtendimentoHoraMarcadaHero() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de agendar um atendimento com hora marcada na Madiha Maison.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      aria-labelledby="atendimento-hora-marcada-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        pb-24
        pt-36
        md:pb-28
        md:pt-44
        lg:min-h-[820px]
        lg:pb-32
        lg:pt-48
      "
    >
      {/* FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_15%_18%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_84%_76%,rgba(214,187,139,0.12),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[12%]
          top-[12%]
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-[#C7A87A]/[0.08]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[90rem]
          gap-14
          px-6
          md:px-8
          lg:grid-cols-[0.95fr_1.05fr]
          lg:items-center
          lg:gap-16
        "
      >
        {/* TEXTO */}
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#A17D4F]/14
              bg-[#FCFAF7]/70
              px-4
              py-2.5
            "
          >
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A17D4F]
              "
            />

            <p
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#8C6635]
              "
            >
              Vogue Square • Barra da Tijuca
            </p>
          </div>

          <h1
            id="atendimento-hora-marcada-title"
            className="
              mt-7
              max-w-[720px]
              font-serif
              text-[3.7rem]
              font-normal
              leading-[0.92]
              tracking-[-0.045em]
              text-[#332A2B]
              sm:text-[4.6rem]
              md:text-[5.4rem]
              lg:text-[5.9rem]
            "
          >
            Atendimento com hora marcada.
          </h1>

          <p
            className="
              mt-8
              max-w-[650px]
              text-[13px]
              font-light
              leading-7
              text-[#675C5D]
              md:text-[15px]
              md:leading-8
            "
          >
            Agende seu horário para ser atendido com mais tranquilidade,
            privacidade e atenção na Madiha Maison, no Vogue Square.
          </p>

          <p
            className="
              mt-5
              max-w-[620px]
              text-[10px]
              font-light
              leading-6
              text-[#7B6E6F]
            "
          >
            A avaliação é conduzida de forma segura, transparente e acompanhada,
            com explicação dos critérios antes de qualquer decisão.
          </p>

          {/* CTA */}
          <div
            className="
              mt-9
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-[58px]
                items-center
                justify-center
                rounded-full
                border
                border-[#B99154]
                bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_50%,#EED098_100%)]
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#332A2B]
                shadow-[0_16px_42px_rgba(96,72,45,0.10)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_22px_52px_rgba(96,72,45,0.15)]
              "
            >
              Agendar atendimento
            </a>

            <a
              href="#como-funciona-atendimento"
              className="
                inline-flex
                min-h-[58px]
                items-center
                justify-center
                rounded-full
                border
                border-[#A17D4F]/20
                bg-[#FCFAF7]/70
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#5F5350]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#A17D4F]/36
                hover:bg-[#FCFAF7]
              "
            >
              Como funciona
            </a>
          </div>

          {/* INDICADORES */}
          <div
            className="
              mt-10
              grid
              gap-3
              sm:grid-cols-2
            "
          >
            {[
              ['Local', 'Vogue Square'],
              ['Atendimento', 'Com hora marcada'],
              ['Avaliação', 'Segura e acompanhada'],
              ['Processo', 'Claro e transparente'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="
                  rounded-[1.35rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]/70
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
                    text-[#A17D4F]
                  "
                >
                  {label}
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[18px]
                    text-[#332A2B]
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CARD VISUAL */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[2.6rem]
            border
            border-[#A17D4F]/15
            bg-[linear-gradient(145deg,#E7D1AA_0%,#F5EBDD_52%,#DEC296_100%)]
            p-7
            shadow-[0_32px_86px_rgba(96,72,45,0.09)]
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
              bg-white/25
              blur-[70px]
            "
          />

          <div className="relative z-10">
            <div
              className="
                flex
                items-start
                justify-between
                gap-5
              "
            >
              <div>
                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#8C6635]
                  "
                >
                  Madiha Maison
                </p>

                <h2
                  className="
                    mt-3
                    font-serif
                    text-[2.2rem]
                    leading-none
                    tracking-[-0.03em]
                    text-[#332A2B]
                  "
                >
                  Atendimento reservado
                </h2>
              </div>

              <span
                className="
                  rounded-full
                  border
                  border-[#A17D4F]/14
                  bg-[#FCFAF7]/60
                  px-4
                  py-2
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#8C6635]
                "
              >
                Agendamento
              </span>
            </div>

            {/* CARTÃO */}
            <div
              className="
                mt-8
                rounded-[2rem]
                border
                border-[#8C6635]/14
                bg-[#FCFAF7]/65
                p-7
                backdrop-blur-sm
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                  border-b
                  border-[#A17D4F]/12
                  pb-5
                "
              >
                <div>
                  <p
                    className="
                      text-[6px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    Localização
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[19px]
                      text-[#332A2B]
                    "
                  >
                    Vogue Square
                  </p>
                </div>

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A17D4F]/14
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-[#A17D4F]" />
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  ['Horário', 'Reservado'],
                  ['Privacidade', 'Atendimento discreto'],
                  ['Avaliação', 'Acompanhada'],
                  ['Decisão', 'Sem pressão'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-6
                      rounded-[1.2rem]
                      border
                      border-[#A17D4F]/10
                      bg-white/35
                      px-5
                      py-4
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#8C6635]
                      "
                    >
                      {label}
                    </span>

                    <span
                      className="
                        text-right
                        font-serif
                        text-[16px]
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
                  mt-6
                  rounded-[1.35rem]
                  border
                  border-[#8C6635]/12
                  bg-[#D6BB8B]/10
                  px-5
                  py-5
                "
              >
                <p
                  className="
                    font-serif
                    text-[18px]
                    leading-snug
                    text-[#332A2B]
                  "
                >
                  Você acompanha a avaliação e entende os critérios antes de
                  decidir.
                </p>
              </div>
            </div>

            {/* FLUXO */}
            <div
              className="
                mt-7
                grid
                gap-3
                sm:grid-cols-3
              "
            >
              {[
                ['01', 'Agende'],
                ['02', 'Avalie'],
                ['03', 'Decida'],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="
                    rounded-[1.3rem]
                    border
                    border-[#8C6635]/12
                    bg-white/24
                    px-5
                    py-4
                  "
                >
                  <p
                    className="
                      font-serif
                      text-[18px]
                      text-[#A17D4F]
                    "
                  >
                    {number}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#5F5350]
                    "
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}