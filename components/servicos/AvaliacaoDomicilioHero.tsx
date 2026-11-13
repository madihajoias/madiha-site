export default function AvaliacaoDomicilioHero() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de solicitar informações sobre a avaliação de joias em domicílio pela Madiha Maison.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      aria-labelledby="avaliacao-domicilio-title"
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
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_14%_18%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(214,187,139,0.12),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[10%]
          top-[12%]
          h-[540px]
          w-[540px]
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
          lg:grid-cols-[0.96fr_1.04fr]
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#A17D4F]" />

            <p
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#8C6635]
              "
            >
              Atendimento exclusivo • Madiha Maison
            </p>
          </div>

          <h1
            id="avaliacao-domicilio-title"
            className="
              mt-7
              max-w-[760px]
              font-serif
              text-[3.7rem]
              font-normal
              leading-[0.92]
              tracking-[-0.045em]
              text-[#332A2B]
              sm:text-[4.6rem]
              md:text-[5.4rem]
              lg:text-[5.8rem]
            "
          >
            Avaliação de joias em domicílio.
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
            Receba um atendimento reservado em seu endereço para avaliação de
            joias, ouro e peças de valor, com discrição, objetividade e atenção
            individual.
          </p>

          <p
            className="
              mt-5
              max-w-[630px]
              text-[10px]
              font-light
              leading-6
              text-[#7B6E6F]
            "
          >
            A avaliação é realizada por profissional especializado em joias e
            ouro, com análise acompanhada e explicação transparente dos
            critérios observados durante o atendimento.
          </p>

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
              Solicitar avaliação em domicílio
            </a>

            <a
              href="#atendimento-domicilio"
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

          <div
            className="
              mt-10
              grid
              gap-3
              sm:grid-cols-2
            "
          >
            {[
              ['Atendimento', 'No seu endereço'],
              ['Especialista', 'Joias e ouro'],
              ['Avaliação', 'Reservada e acompanhada'],
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

        {/* CARTÃO VISUAL */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[2.8rem]
            border
            border-[#C7A87A]/16
            bg-[#332A2B]
            p-7
            shadow-[0_34px_90px_rgba(51,42,43,0.13)]
            md:p-10
          "
        >
          {/* ELEMENTOS DECORATIVOS */}
          <div
            aria-hidden="true"
            className="
              absolute
              -right-24
              -top-24
              h-80
              w-80
              rounded-full
              border
              border-[#D6BB8B]/10
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -right-12
              -top-12
              h-56
              w-56
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
              -left-20
              h-72
              w-72
              rounded-full
              bg-[#5A1017]/16
              blur-[80px]
            "
          />

          {/* PEDRA ABSTRATA */}
          <div
            aria-hidden="true"
            className="
              absolute
              right-8
              top-24
              h-44
              w-44
              rotate-12
              opacity-[0.12]
            "
          >
            <svg
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full text-[#D6BB8B]"
            >
              <path
                d="M80 8L136 48L118 126L80 152L42 126L24 48L80 8Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M24 48H136M42 126L80 48L118 126M80 8L80 152"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M24 48L80 8L136 48L80 48L24 48Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </div>

          <div className="relative z-10">
            {/* TOPO */}
            <div
              className="
                flex
                items-start
                justify-between
                gap-6
              "
            >
              <div>
                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#D6BB8B]
                  "
                >
                  Avaliação privada
                </p>

                <p
                  className="
                    mt-3
                    text-[7px]
                    font-light
                    uppercase
                    tracking-[0.18em]
                    text-[#C6B7B4]
                  "
                >
                  Madiha Maison
                </p>
              </div>

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D6BB8B]/20
                  bg-[#F7F3EF]/[0.035]
                "
              >
                <span
                  className="
                    text-center
                    text-[6px]
                    font-semibold
                    uppercase
                    leading-3
                    tracking-[0.14em]
                    text-[#D6BB8B]
                  "
                >
                  Joias
                  <br />&
                  <br />
                  Ouro
                </span>
              </div>
            </div>

            <div
              className="
                mt-12
                border-t
                border-[#D6BB8B]/12
                pt-9
              "
            >
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#C8B7B4]
                "
              >
                Atendimento em domicílio
              </p>

              <h2
                className="
                  mt-4
                  max-w-[560px]
                  font-serif
                  text-[2.7rem]
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  md:text-[3.2rem]
                "
              >
                O especialista vai até você.
              </h2>

              <p
                className="
                  mt-6
                  max-w-[520px]
                  text-[10px]
                  font-light
                  leading-6
                  text-[#D0C1BE]
                "
              >
                Avaliação de joias e ouro realizada no seu endereço, com
                acompanhamento durante o processo e explicação dos critérios
                utilizados.
              </p>
            </div>

            {/* FLUXO */}
            <div
              className="
                mt-9
                grid
                gap-3
                sm:grid-cols-4
              "
            >
              {[
                ['01', 'Agendamento'],
                ['02', 'Deslocamento'],
                ['03', 'Avaliação'],
                ['04', 'Orientação'],
              ].map(([numero, texto]) => (
                <div
                  key={numero}
                  className="
                    rounded-[1.25rem]
                    border
                    border-[#D6BB8B]/10
                    bg-[#F7F3EF]/[0.035]
                    px-4
                    py-4
                  "
                >
                  <p
                    className="
                      font-serif
                      text-[17px]
                      text-[#D6BB8B]
                    "
                  >
                    {numero}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[6px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#D0C1BE]
                    "
                  >
                    {texto}
                  </p>
                </div>
              ))}
            </div>

            {/* DESTAQUE */}
            <div
              className="
                mt-8
                rounded-[1.7rem]
                border
                border-[#D6BB8B]/14
                bg-[linear-gradient(135deg,rgba(199,168,122,0.08),rgba(247,243,239,0.025))]
                px-6
                py-6
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#5A1017]" />

                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.19em]
                    text-[#D6BB8B]
                  "
                >
                  Atendimento especializado
                </p>
              </div>

              <p
                className="
                  mt-4
                  max-w-[520px]
                  font-serif
                  text-[22px]
                  leading-snug
                  text-[#F7F3EF]
                "
              >
                A peça é avaliada no local, com você acompanhando todo o
                processo.
              </p>
            </div>

            {/* ASSINATURA */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                border-t
                border-[#D6BB8B]/12
                pt-7
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p
                className="
                  text-[7px]
                  font-light
                  uppercase
                  tracking-[0.16em]
                  text-[#BCAAA7]
                "
              >
                Exclusividade no atendimento
              </p>

              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#D6BB8B]
                "
              >
                Transparência na avaliação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}