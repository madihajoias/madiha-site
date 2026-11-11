const pontos = [
  {
    title: 'Atendimento individual',
    text:
      'A avaliação é conduzida de forma reservada, com atenção à pedra apresentada e ao contexto da negociação.',
  },
  {
    title: 'Discrição',
    text:
      'Joias e diamantes exigem cuidado também na forma de atendimento. O processo prioriza privacidade e clareza.',
  },
  {
    title: 'Análise presencial',
    text:
      'A observação direta da pedra permite conferir características que não podem ser confirmadas apenas por fotos ou descrições.',
  },
  {
    title: 'Decisão sem pressão',
    text:
      'A proposta é apresentada depois da análise, e a decisão de negociar continua sendo sua.',
  },
];

export default function CompraDiamantesSegurancaSection() {
  return (
    <section
      id="seguranca-diamantes"
      aria-labelledby="seguranca-diamantes-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.14),transparent_34%)]
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
              Segurança e discrição
            </p>

            <h2
              id="seguranca-diamantes-title"
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
              Avaliar um diamante também exige confiança no processo.
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
              A experiência precisa ser tão cuidadosa quanto a análise técnica.
              Por isso, o atendimento é individual, reservado e orientado à
              compreensão da pedra antes de qualquer decisão comercial.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DCC08F_100%)]
              p-8
              shadow-[0_28px_72px_rgba(96,72,45,0.09)]
              md:p-10
              lg:p-12
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
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#8C6635]
                "
              >
                Atendimento reservado
              </p>

              <h3
                className="
                  mt-5
                  max-w-[560px]
                  font-serif
                  text-[2.7rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Um ambiente adequado para avaliar peças de valor.
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
                Diamantes, joias e documentos relacionados à peça merecem ser
                tratados com cuidado, organização e discrição durante todo o
                atendimento.
              </p>

              <div
                className="
                  mt-9
                  rounded-[1.55rem]
                  border
                  border-[#8C6635]/14
                  bg-white/25
                  px-6
                  py-6
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8C6635]
                  "
                >
                  O objetivo
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[21px]
                    leading-snug
                    text-[#332A2B]
                  "
                >
                  Fazer você entender a avaliação antes de pensar na negociação.
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {pontos.map((item) => (
              <article
                key={item.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#FCFAF7]
                  p-7
                  shadow-[0_18px_48px_rgba(96,72,45,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#A17D4F]/28
                  hover:shadow-[0_24px_58px_rgba(96,72,45,0.07)]
                  md:p-8
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-[#D6BB8B]/12
                    blur-[28px]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      h-10
                      w-10
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
                        h-2
                        w-2
                        rounded-full
                        bg-[#A17D4F]
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      font-serif
                      text-[24px]
                      leading-tight
                      text-[#332A2B]
                    "
                  >
                    {item.title}
                  </h3>

                  <div
                    aria-hidden="true"
                    className="
                      mt-5
                      h-px
                      w-10
                      bg-[#A17D4F]/30
                    "
                  />

                  <p
                    className="
                      mt-5
                      text-[11px]
                      font-light
                      leading-6
                      text-[#675C5D]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[#332A2B]
            p-8
            shadow-[0_24px_64px_rgba(51,42,43,0.10)]
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
                text-[#D6BB8B]
              "
            >
              Atendimento individual
            </p>

            <h3
              className="
                mt-4
                max-w-[880px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Você apresenta a pedra, entende a análise e só então decide o próximo passo.
            </h3>
          </div>

          <a
            href="#contato-diamantes"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#D6BB8B]
              bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#332A2B]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Solicitar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}