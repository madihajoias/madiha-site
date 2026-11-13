export default function AvaliacaoOnlineLocation() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de agendar uma avaliação presencial na Madiha Maison após a avaliação online.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="localizacao-avaliacao-online"
      aria-labelledby="localizacao-avaliacao-online-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.11),transparent_34%)]
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
              Atendimento presencial
            </p>

            <h2
              id="localizacao-avaliacao-online-title"
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
              Quando precisar trazer a peça, estamos no Vogue Square.
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
              Se a análise online indicar a necessidade de uma conferência
              física, o atendimento pode continuar presencialmente na Madiha
              Maison, na Barra da Tijuca.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          {/* INFORMAÇÕES */}
          <div
            className="
              rounded-[2.3rem]
              border
              border-[#A17D4F]/14
              bg-[#F7F3EF]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.05)]
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
              Madiha Maison
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
              Vogue Square
            </h3>

            <p
              className="
                mt-6
                max-w-[540px]
                text-[11px]
                font-light
                leading-6
                text-[#675C5D]
              "
            >
              Atendimento presencial mediante organização prévia, oferecendo
              continuidade à avaliação iniciada online quando a peça precisa ser
              examinada fisicamente.
            </p>

            <div className="mt-8 grid gap-3">
              <div
                className="
                  rounded-[1.45rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]
                  px-5
                  py-5
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
                  Localização
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[20px]
                    leading-snug
                    text-[#332A2B]
                  "
                >
                  Vogue Square
                  <br />
                  Barra da Tijuca
                  <br />
                  Rio de Janeiro
                </p>
              </div>

              <div
                className="
                  rounded-[1.45rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]
                  px-5
                  py-5
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
                  Atendimento
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[20px]
                    leading-snug
                    text-[#332A2B]
                  "
                >
                  Presencial com agendamento
                </p>
              </div>
            </div>

            <div
              className="
                mt-8
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
                  min-h-[54px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B99154]
                  bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
                  px-7
                  text-center
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#332A2B]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_18px_42px_rgba(96,72,45,0.12)]
                "
              >
                Agendar atendimento
              </a>

              <a
                href="#faq-avaliacao-online"
                className="
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A17D4F]/18
                  bg-[#FCFAF7]
                  px-7
                  text-center
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#5F5350]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#A17D4F]/32
                "
              >
                Ver perguntas frequentes
              </a>
            </div>
          </div>

          {/* MAPA */}
          <div
            className="
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#A17D4F]/14
              bg-[#F7F3EF]
              shadow-[0_24px_64px_rgba(96,72,45,0.05)]
            "
          >
            <div className="relative min-h-[520px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5923754482!2d-43.39869498874111!3d-23.00201224119506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbf2521f3707%3A0xa54921f2f3d36fd8!2sMadiha%20Maison!5e0!3m2!1spt-BR!2sbr!4v1791309377339!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Madiha Maison no Vogue Square"
                className="
                  absolute
                  inset-0
                  h-full
                  min-h-[520px]
                  w-full
                  border-0
                "
              />
            </div>
          </div>
        </div>

        {/* FAIXA FINAL */}
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
              Dúvidas sobre a avaliação online?
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
              Veja as principais perguntas antes de enviar sua peça.
            </h3>
          </div>

          <a
            href="#faq-avaliacao-online"
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
            Perguntas frequentes
          </a>
        </div>
      </div>
    </section>
  );
}