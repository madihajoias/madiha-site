import DiamondTweezersIllustration from './DiamondTweezersIllustration';

export default function AvaliacaoDiamantesCTASection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de solicitar uma avaliação de diamante lapidado na Madiha Maison.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contato-avaliacao-diamantes"
      aria-labelledby="contato-avaliacao-diamantes-title"
      className="
        relative
        overflow-hidden
        bg-[#332A2B]
        py-24
        md:py-32
        lg:py-36
      "
    >
      {/* FUNDOS */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_18%_20%,rgba(214,187,139,0.12),transparent_32%),radial-gradient(circle_at_86%_76%,rgba(199,168,122,0.10),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[15%]
          top-[8%]
          h-[620px]
          w-[620px]
          rounded-full
          border
          border-[#D6BB8B]/[0.06]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[8%]
          top-[18%]
          h-[430px]
          w-[430px]
          rounded-full
          border
          border-[#D6BB8B]/[0.07]
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
        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.92fr_1.08fr]
            lg:items-center
            lg:gap-16
          "
        >
          {/* CONTEÚDO */}
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#D6BB8B]
                md:text-[10px]
              "
            >
              Avaliação individual
            </p>

            <h2
              id="contato-avaliacao-diamantes-title"
              className="
                mt-6
                max-w-[800px]
                font-serif
                text-[3.2rem]
                font-normal
                leading-[0.96]
                tracking-[-0.04em]
                text-[#F7F3EF]
                sm:text-[4rem]
                md:text-[4.9rem]
              "
            >
              Quer entender melhor o seu diamante?
            </h2>

            <p
              className="
                mt-7
                max-w-[650px]
                text-[13px]
                font-light
                leading-7
                text-[#D0C1BE]
                md:text-[15px]
                md:leading-8
              "
            >
              A Madiha Maison realiza avaliação presencial de diamantes
              lapidados, observando características técnicas da pedra e
              explicando os principais pontos de forma clara.
            </p>

            {/* FORMAS DE APRESENTAÇÃO */}
            <div
              className="
                mt-9
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {[
                'Diamante solto',
                'Diamante montado em joia',
                'Com certificado',
                'Sem certificado',
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[1.35rem]
                    border
                    border-[#D6BB8B]/12
                    bg-[#F7F3EF]/[0.04]
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
                      border-[#D6BB8B]/22
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#D6BB8B]
                      "
                    />
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-light
                      text-[#E0D4D0]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BOTÕES */}
            <div
              className="
                mt-10
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
                  gap-3
                  rounded-full
                  border
                  border-[#D6BB8B]
                  bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_50%,#EED098_100%)]
                  px-8
                  text-center
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#332A2B]
                  shadow-[0_16px_40px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_22px_48px_rgba(0,0,0,0.18)]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    d="M20.5 11.7A8.5 8.5 0 0 1 8 19.2L3.5 20.5L4.8 16A8.5 8.5 0 1 1 20.5 11.7Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M8.4 7.6C8.8 10.7 11.3 13.2 14.4 13.6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>

                Solicitar avaliação
              </a>

              <a
                href="#localizacao-avaliacao-diamantes"
                className="
                  inline-flex
                  min-h-[58px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D6BB8B]/24
                  bg-transparent
                  px-8
                  text-center
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#F7F3EF]
                  transition-all
                  duration-300
                  hover:border-[#D6BB8B]/45
                  hover:bg-[#F7F3EF]/[0.05]
                "
              >
                Ver localização
              </a>
            </div>

            <p
              className="
                mt-6
                max-w-[650px]
                text-[8px]
                font-light
                leading-5
                text-[#AFA09E]
              "
            >
              O contato inicial pode ser feito pelo WhatsApp para informações
              sobre atendimento e apresentação da pedra.
            </p>
          </div>

          {/* ILUSTRAÇÃO */}
          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[680px]
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-1/2
                h-[460px]
                w-[460px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D6BB8B]/[0.07]
                blur-[90px]
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[2.8rem]
                border
                border-[#D6BB8B]/14
                bg-[linear-gradient(145deg,rgba(247,243,239,0.06)_0%,rgba(214,187,139,0.04)_100%)]
                p-6
                shadow-[0_35px_90px_rgba(0,0,0,0.16)]
                backdrop-blur-sm
                md:p-8
              "
            >
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
                      tracking-[0.22em]
                      text-[#D6BB8B]
                    "
                  >
                    Madiha Maison
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[23px]
                      text-[#F7F3EF]
                    "
                  >
                    Avaliação de diamantes
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-[#D6BB8B]/18
                    bg-[#F7F3EF]/[0.04]
                    px-4
                    py-2
                    text-[6px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#D6BB8B]
                  "
                >
                  Presencial
                </span>
              </div>

              <div
                className="
                  mt-4
                  flex
                  min-h-[500px]
                  items-center
                  justify-center
                "
              >
                <DiamondTweezersIllustration
                  showGuides={false}
                  className="
                    h-auto
                    w-full
                    max-w-[560px]
                  "
                />
              </div>

              <div
                className="
                  grid
                  gap-3
                  border-t
                  border-[#D6BB8B]/10
                  pt-6
                  sm:grid-cols-3
                "
              >
                {[
                  ['Observação', 'Detalhes da pedra'],
                  ['Medição', 'Dimensões e proporções'],
                  ['Explicação', 'Leitura compreensível'],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="
                      rounded-[1.2rem]
                      border
                      border-[#D6BB8B]/10
                      bg-[#F7F3EF]/[0.03]
                      px-4
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
                      {title}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[8px]
                        font-light
                        leading-4
                        text-[#CFC0BD]
                      "
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD FLUTUANTE */}
            <div
              className="
                absolute
                -bottom-5
                -left-3
                hidden
                rounded-[1.4rem]
                border
                border-[#D6BB8B]/18
                bg-[#F7F3EF]
                px-6
                py-5
                shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                md:block
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
                  text-[19px]
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
                  text-[#776B6C]
                "
              >
                Barra da Tijuca • Rio de Janeiro
              </p>
            </div>
          </div>
        </div>

        {/* RODAPÉ DA SEÇÃO */}
        <div
          className="
            mt-20
            border-t
            border-[#D6BB8B]/10
            pt-8
          "
        >
          <div
            className="
              grid
              gap-6
              md:grid-cols-3
            "
          >
            {[
              {
                title: 'Diamantes soltos',
                text:
                  'Maior liberdade para pesagem, medição e observação por diferentes ângulos.',
              },
              {
                title: 'Pedras montadas',
                text:
                  'A análise considera as áreas acessíveis e as limitações impostas pela joia.',
              },
              {
                title: 'Com ou sem certificado',
                text:
                  'O documento ajuda quando existe, mas a pedra continua sendo a referência física.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  border-l
                  border-[#D6BB8B]/16
                  pl-5
                "
              >
                <p
                  className="
                    font-serif
                    text-[19px]
                    text-[#F7F3EF]
                  "
                >
                  {item.title}
                </p>

                <p
                  className="
                    mt-3
                    text-[9px]
                    font-light
                    leading-5
                    text-[#BDAFAD]
                  "
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}