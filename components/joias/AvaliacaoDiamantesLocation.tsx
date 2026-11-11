export default function AvaliacaoDiamantesLocation() {
  return (
    <section
      id="localizacao-avaliacao-diamantes"
      aria-labelledby="localizacao-avaliacao-diamantes-title"
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
          bg-[radial-gradient(circle_at_10%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(214,187,139,0.14),transparent_34%)]
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
              id="localizacao-avaliacao-diamantes-title"
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
              Avaliação de diamantes no Vogue Square.
            </h2>
          </div>

          <div className="max-w-[660px] lg:justify-self-end">
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
              A Madiha Maison realiza atendimento presencial na Barra da
              Tijuca, permitindo que o diamante seja observado diretamente e
              que as características identificadas sejam explicadas de forma
              clara.
            </p>
          </div>
        </div>

        {/* MAPA + INFORMAÇÕES */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[1.15fr_0.85fr]
          "
        >
          {/* MAPA */}
          <div
            className="
              relative
              min-h-[520px]
              overflow-hidden
              rounded-[2.5rem]
              border
              border-[#A17D4F]/14
              bg-[#EDE3D4]
              shadow-[0_30px_80px_rgba(96,72,45,0.08)]
            "
          >
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

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-20
                bg-gradient-to-b
                from-[#332A2B]/12
                to-transparent
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-5
                left-5
                right-5
                rounded-[1.4rem]
                border
                border-white/50
                bg-[#FCFAF7]/92
                px-5
                py-4
                shadow-[0_18px_44px_rgba(51,42,43,0.14)]
                backdrop-blur-xl
                md:left-6
                md:right-auto
                md:max-w-[340px]
                md:px-6
              "
            >
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4F]
                "
              >
                Madiha Maison
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[21px]
                  text-[#332A2B]
                "
              >
                Vogue Square
              </p>

              <p
                className="
                  mt-1
                  text-[8px]
                  font-light
                  leading-4
                  text-[#675C5D]
                "
              >
                Barra da Tijuca • Rio de Janeiro
              </p>
            </div>
          </div>

          {/* INFORMAÇÕES */}
          <div
            className="
              flex
              flex-col
              rounded-[2.5rem]
              border
              border-[#A17D4F]/12
              bg-[#FCFAF7]
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
              Onde realizar a avaliação
            </p>

            <h3
              className="
                mt-4
                max-w-[560px]
                font-serif
                text-[2.55rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              Um ambiente adequado para observar a pedra com atenção.
            </h3>

            <p
              className="
                mt-6
                text-[11px]
                font-light
                leading-6
                text-[#675C5D]
              "
            >
              O atendimento presencial permite manipular o diamante com
              cuidado, observar diferentes ângulos e realizar medições que não
              seriam possíveis por fotografia ou mensagem.
            </p>

            {/* LOCAL */}
            <div
              className="
                mt-8
                rounded-[1.55rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                p-6
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
                  mt-3
                  font-serif
                  text-[24px]
                  leading-tight
                  text-[#332A2B]
                "
              >
                Vogue Square
              </p>

              <p
                className="
                  mt-2
                  text-[10px]
                  font-light
                  leading-5
                  text-[#675C5D]
                "
              >
                Avenida das Américas
                <br />
                Barra da Tijuca
                <br />
                Rio de Janeiro — RJ
              </p>
            </div>

            {/* BENEFÍCIOS */}
            <div className="mt-5 grid gap-3">
              {[
                {
                  title: 'Atendimento presencial',
                  text:
                    'A pedra pode ser examinada diretamente durante a avaliação.',
                },
                {
                  title: 'Ambiente reservado',
                  text:
                    'Atendimento individual com atenção à privacidade do cliente.',
                },
                {
                  title: 'Barra da Tijuca',
                  text:
                    'Localização no Vogue Square, na Avenida das Américas.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="
                    grid
                    grid-cols-[auto_1fr]
                    gap-4
                    rounded-[1.35rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#FCFAF7]
                    px-5
                    py-4
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      mt-1
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A17D4F]/18
                      bg-[#EFE6D8]
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#A17D4F]
                      "
                    />
                  </span>

                  <div>
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#A17D4F]
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[9px]
                        font-light
                        leading-5
                        text-[#675C5D]
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contato-avaliacao-diamantes"
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
              Solicitar avaliação
            </a>
          </div>
        </div>

        {/* NOTA */}
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
            lg:grid-cols-[auto_1fr]
            lg:items-center
          "
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#8C6635]/16
              bg-white/20
            "
          >
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-8 w-8"
            >
              <path
                d="M32 56C42 44 49 36 49 25C49 15.6 41.4 8 32 8C22.6 8 15 15.6 15 25C15 36 22 44 32 56Z"
                stroke="#8C6635"
                strokeWidth="2"
              />

              <circle
                cx="32"
                cy="25"
                r="6"
                stroke="#8C6635"
                strokeWidth="2"
              />
            </svg>
          </div>

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
              Atendimento na Barra da Tijuca
            </p>

            <h3
              className="
                mt-3
                max-w-[960px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#332A2B]
                md:text-[2.7rem]
              "
            >
              Traga o diamante solto, montado em joia e, caso exista, o certificado ou documentação da pedra.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}