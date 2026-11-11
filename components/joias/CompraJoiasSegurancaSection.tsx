const pontos = [
  {
    label: 'Privacidade',
    title: 'Atendimento reservado',
    text:
      'A avaliação é realizada em ambiente adequado para que você possa apresentar suas joias com tranquilidade.',
  },
  {
    label: 'Transparência',
    title: 'Você acompanha a análise',
    text:
      'O processo é conduzido de forma clara, permitindo que você entenda os principais pontos considerados na avaliação.',
  },
  {
    label: 'Decisão',
    title: 'Sem obrigação de venda',
    text:
      'A proposta é apresentada após a análise. Você decide se deseja ou não prosseguir com a negociação.',
  },
  {
    label: 'Localização',
    title: 'Vogue Square',
    text:
      'O atendimento acontece na Barra da Tijuca, em uma localização de fácil acesso no Vogue Square.',
  },
];

export default function CompraJoiasSegurancaSection() {
  return (
    <section
      id="seguranca"
      aria-labelledby="compra-joias-seguranca-title"
      className="
        relative
        overflow-hidden
        bg-[#56151F]
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
          bg-[radial-gradient(circle_at_15%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(255,255,255,0.035),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[8%]
          top-[16%]
          h-[34vw]
          w-[34vw]
          rounded-full
          bg-[#7A1622]/30
          blur-[110px]
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
                text-[#D6BB8B]
                md:text-[10px]
              "
            >
              Segurança e discrição
            </p>

            <h2
              id="compra-joias-seguranca-title"
              className="
                mt-6
                max-w-[760px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#F7F3EF]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Um atendimento pensado para uma decisão tranquila.
            </h2>
          </div>

          <div
            className="
              max-w-[650px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#D0C1BE]
                md:text-[15px]
                md:leading-8
              "
            >
              A venda de uma joia envolve confiança. Por isso, o atendimento é
              conduzido de forma reservada, transparente e sem pressão para que
              você possa conhecer a avaliação antes de decidir.
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
          {/* PAINEL PRINCIPAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
              border
              border-white/10
              bg-white/[0.045]
              p-8
              shadow-[0_30px_85px_rgba(20,5,8,0.18),inset_0_1px_0_rgba(255,255,255,0.04)]
              backdrop-blur-2xl
              md:p-10
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
                bg-[#C7A87A]/12
                blur-[72px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#D6BB8B]
                "
              >
                Madiha Maison
              </p>

              <h3
                className="
                  mt-6
                  max-w-[500px]
                  font-serif
                  text-[2.65rem]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  md:text-[3.45rem]
                "
              >
                Sua joia é analisada com atenção e discrição.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[500px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                "
              >
                O atendimento é realizado presencialmente para permitir uma
                análise adequada das peças e uma conversa clara sobre a proposta
                apresentada.
              </p>

              {/* MINI CARDS */}
              <div
                className="
                  mt-9
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#D6BB8B]
                    "
                  >
                    Ambiente
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Atendimento reservado
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#D6BB8B]
                    "
                  >
                    Negociação
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Decisão sem pressão
                  </p>
                </div>
              </div>

              {/* LOCAL */}
              <div
                className="
                  mt-9
                  rounded-[1.6rem]
                  border
                  border-[#C7A87A]/22
                  bg-[#F7F3EF]/[0.07]
                  px-6
                  py-6
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#D6BB8B]
                  "
                >
                  Atendimento na Barra da Tijuca
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[21px]
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  Vogue Square
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-light
                    leading-6
                    text-[#D3C3C0]
                  "
                >
                  Av. das Américas, 8585
                  <br />
                  Sala 490
                  <br />
                  Barra da Tijuca · Rio de Janeiro – RJ
                </p>
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {pontos.map((item) => (
              <article
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.85rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-7
                  shadow-[0_18px_48px_rgba(20,5,8,0.14),inset_0_1px_0_rgba(255,255,255,0.035)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#C7A87A]/35
                  hover:bg-white/[0.065]
                  hover:shadow-[0_24px_60px_rgba(20,5,8,0.18)]
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
                    bg-[#C7A87A]/10
                    blur-[28px]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#D6BB8B]
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[24px]
                      font-normal
                      leading-tight
                      text-[#F7F3EF]
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
                      bg-[#C7A87A]/35
                    "
                  />

                  <p
                    className="
                      mt-5
                      text-[11px]
                      font-light
                      leading-6
                      text-[#CDBDBA]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-12
            grid
            gap-6
            overflow-hidden
            rounded-[2.1rem]
            border
            border-white/10
            bg-white/[0.04]
            p-8
            shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
            backdrop-blur-xl
            md:p-10
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#D6BB8B]
              "
            >
              Atendimento presencial
            </p>

            <h3
              className="
                mt-4
                max-w-[760px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Conheça o espaço da Madiha Maison.
            </h3>

            <p
              className="
                mt-5
                max-w-[760px]
                text-[11px]
                font-light
                leading-6
                text-[#CDBDBA]
              "
            >
              Estamos no Vogue Square, na Barra da Tijuca, Rio de Janeiro.
            </p>
          </div>

          <a
            href="#localizacao"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#C7A87A]
              bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#4F1720]
              shadow-[0_14px_34px_rgba(20,5,8,0.16),inset_0_1px_0_rgba(255,255,255,0.22)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Ver localização
          </a>
        </div>
      </div>
    </section>
  );
}