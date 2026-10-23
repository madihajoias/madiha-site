const pontos = [
  {
    label: 'Clareza',
    title: 'Entenda a avaliação',
    text:
      'As informações consideradas na análise são apresentadas de forma clara para que você compreenda como o valor foi construído.',
  },
  {
    label: 'Liberdade',
    title: 'Sem obrigação de venda',
    text:
      'Receber uma avaliação não obriga você a vender a peça. A decisão comercial permanece sempre com o cliente.',
  },
  {
    label: 'Discrição',
    title: 'Atendimento individual',
    text:
      'O atendimento é realizado de forma reservada, com foco em segurança, conforto e confidencialidade durante todo o processo.',
  },
];

export default function AvaliacaoOuroAtendimentoSection() {
  return (
    <section
      id="atendimento-avaliacao"
      aria-labelledby="atendimento-avaliacao-title"
      className="
        relative
        overflow-hidden
        bg-[#F1E5D1]
        py-24
        md:py-32
        lg:py-36
      "
    >
      {/* FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.76),transparent_28%),radial-gradient(circle_at_88%_80%,rgba(190,147,82,0.16),transparent_34%)]
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
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* TEXTO */}
        <div>
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#8F6E3F]
              md:text-[10px]
            "
          >
            Atendimento especializado
          </p>

          <h2
            id="atendimento-avaliacao-title"
            className="
              mt-6
              max-w-[650px]
              font-serif
              text-[3rem]
              font-normal
              leading-[1.02]
              tracking-[-0.025em]
              text-[#765525]
              sm:text-[3.7rem]
              md:text-[4.4rem]
            "
          >
            Avaliar antes
            <br />
            de decidir.
          </h2>

          <p
            className="
              mt-7
              max-w-[560px]
              text-[13px]
              font-light
              leading-7
              text-[#806C50]
              md:text-[15px]
              md:leading-8
            "
          >
            A avaliação é uma etapa de compreensão. Antes de qualquer
            negociação, você pode conhecer melhor as características do
            seu ouro e receber uma referência comercial baseada na análise
            da peça.
          </p>

          <p
            className="
              mt-5
              max-w-[540px]
              text-[11px]
              font-light
              leading-6
              text-[#8F795B]
            "
          >
            O atendimento presencial permite esclarecer dúvidas,
            confirmar informações técnicas e entender os próximos passos
            com tranquilidade.
          </p>

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
              href="#localizacao"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-full
                bg-[linear-gradient(135deg,#98703A_0%,#AE8246_48%,#936936_100%)]
                px-8
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white
                shadow-[0_13px_28px_rgba(67,42,8,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Agendar avaliação
            </a>

            <a
              href="#perguntas-frequentes"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-full
                border
                border-[#765525]/22
                bg-white/18
                px-8
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#765525]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/36
              "
            >
              Tirar dúvidas
            </a>
          </div>
        </div>

        {/* PAINEL */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[3rem_3rem_5rem_3rem]
            border
            border-white/60
            bg-[#E8D4B2]/42
            p-7
            shadow-[0_28px_75px_rgba(94,66,27,0.08),inset_0_1px_0_rgba(255,255,255,0.58)]
            backdrop-blur-2xl
            md:p-9
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-[#F7E7C8]/40
              blur-[70px]
            "
          />

          <div className="relative z-10">
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#8C692E]
              "
            >
              Madiha Maison
            </p>

            <h3
              className="
                mt-4
                max-w-[520px]
                font-serif
                text-[2.4rem]
                font-normal
                leading-[1.05]
                text-[#68491F]
                md:text-[3rem]
              "
            >
              Informação técnica
              <br />
              com atendimento próximo.
            </h3>

            <div
              className="
                mt-9
                space-y-4
              "
            >
              {pontos.map((ponto) => (
                <article
                  key={ponto.label}
                  className="
                    rounded-[1.7rem]
                    border
                    border-white/55
                    bg-[#F3E5CF]/42
                    px-6
                    py-6
                    shadow-[0_12px_34px_rgba(95,65,23,0.05),inset_0_1px_0_rgba(255,255,255,0.50)]
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#947244]
                    "
                  >
                    {ponto.label}
                  </p>

                  <h4
                    className="
                      mt-3
                      font-serif
                      text-[21px]
                      font-normal
                      text-[#68491F]
                    "
                  >
                    {ponto.title}
                  </h4>

                  <p
                    className="
                      mt-3
                      text-[11px]
                      font-light
                      leading-6
                      text-[#725D41]
                    "
                  >
                    {ponto.text}
                  </p>
                </article>
              ))}
            </div>

            <div
              className="
                mt-8
                border-t
                border-[#765525]/12
                pt-7
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#947244]
                "
              >
                Atendimento presencial
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[20px]
                  text-[#68491F]
                "
              >
                Vogue Square • Barra da Tijuca
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}