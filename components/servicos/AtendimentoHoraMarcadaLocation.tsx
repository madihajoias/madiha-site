export default function AtendimentoHoraMarcadaLocation() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de agendar um atendimento com hora marcada na Madiha Maison no Vogue Square.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const googleMapsHref =
    'https://www.google.com/maps/search/?api=1&query=Madiha+Maison+Vogue+Square+Barra+da+Tijuca';

  return (
    <section
      id="localizacao-atendimento-hora-marcada"
      aria-labelledby="localizacao-atendimento-title"
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
              Onde estamos
            </p>

            <h2
              id="localizacao-atendimento-title"
              className="
                mt-6
                max-w-[760px]
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
              Atendimento no Vogue Square, na Barra da Tijuca.
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
              A Madiha Maison recebe seus clientes no Vogue Square para
              avaliações presenciais com hora marcada, em um ambiente
              profissional, reservado e preparado para atendimentos que exigem
              atenção e discrição.
            </p>
          </div>
        </div>

        {/* MAPA + INFORMAÇÕES */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          {/* MAPA */}
          <div
            className="
              overflow-hidden
              rounded-[2.5rem]
              border
              border-[#A17D4F]/14
              bg-[#FCFAF7]
              shadow-[0_26px_70px_rgba(96,72,45,0.07)]
            "
          >
            <div
              className="
                relative
                min-h-[480px]
                w-full
                md:min-h-[560px]
              "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5923754482!2d-43.39869498874111!3d-23.00201224119506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbf2521f3707%3A0xa54921f2f3d36fd8!2sMadiha%20Maison!5e0!3m2!1spt-BR!2sbr!4v1791309377339!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: 'absolute',
                  inset: 0,
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Madiha Maison no Vogue Square"
              />
            </div>
          </div>

          {/* CARD */}
          <div
            className="
              flex
              flex-col
              justify-between
              rounded-[2.5rem]
              border
              border-[#A17D4F]/14
              bg-[#332A2B]
              p-8
              shadow-[0_28px_76px_rgba(51,42,43,0.11)]
              md:p-10
              lg:p-12
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#D6BB8B]
                "
              >
                Madiha Maison
              </p>

              <h3
                className="
                  mt-5
                  max-w-[580px]
                  font-serif
                  text-[2.8rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#F7F3EF]
                "
              >
                Vogue Square
              </h3>

              <p
                className="
                  mt-3
                  font-serif
                  text-[1.7rem]
                  text-[#D6BB8B]
                "
              >
                Barra da Tijuca • Rio de Janeiro
              </p>

              <div
                className="
                  mt-8
                  h-px
                  w-full
                  bg-[#D6BB8B]/12
                "
              />

              <div className="mt-8 grid gap-3">
                {[
                  ['Atendimento', 'Com hora marcada'],
                  ['Avaliação', 'Presencial e acompanhada'],
                  ['Ambiente', 'Reservado e profissional'],
                  ['Processo', 'Seguro e transparente'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      rounded-[1.4rem]
                      border
                      border-[#D6BB8B]/10
                      bg-[#F7F3EF]/[0.035]
                      px-5
                      py-5
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

              <div
                className="
                  mt-7
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
                  Recomendamos confirmar o horário antes de se deslocar até a
                  Madiha Maison.
                </p>
              </div>
            </div>

            {/* BOTÕES */}
            <div
              className="
                mt-9
                flex
                flex-col
                gap-3
                sm:flex-row
                lg:flex-col
                xl:flex-row
              "
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[56px]
                  flex-1
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D6BB8B]
                  bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
                  px-7
                  text-center
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#332A2B]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                Agendar atendimento
              </a>

              <a
                href={googleMapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[56px]
                  flex-1
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D6BB8B]/20
                  bg-[#F7F3EF]/[0.035]
                  px-7
                  text-center
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#F7F3EF]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#D6BB8B]/40
                  hover:bg-[#F7F3EF]/[0.06]
                "
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* FAIXA INFERIOR */}
        <div
          className="
            mt-10
            grid
            gap-6
            rounded-[2.15rem]
            border
            border-[#A17D4F]/14
            bg-[#FCFAF7]
            p-8
            shadow-[0_20px_54px_rgba(96,72,45,0.04)]
            md:grid-cols-3
            md:p-10
          "
        >
          {[
            ['Local', 'Vogue Square'],
            ['Região', 'Barra da Tijuca'],
            ['Modalidade', 'Atendimento agendado'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="
                border-[#A17D4F]/12
                md:border-r
                md:last:border-r-0
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
                {label}
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[22px]
                  text-[#332A2B]
                "
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}