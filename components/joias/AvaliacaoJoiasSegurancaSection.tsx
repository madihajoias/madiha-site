const pontos = [
  {
    label: 'Discrição',
    title: 'Atendimento reservado',
    text:
      'A avaliação acontece em ambiente apropriado para que você apresente suas joias com tranquilidade e privacidade.',
  },
  {
    label: 'Transparência',
    title: 'Você acompanha a análise',
    text:
      'Os principais critérios considerados podem ser explicados durante o atendimento de forma clara e objetiva.',
  },
  {
    label: 'Liberdade',
    title: 'Sem obrigação de venda',
    text:
      'A avaliação pode acontecer sem compromisso. Você decide depois se deseja ou não seguir para uma negociação.',
  },
  {
    label: 'Localização',
    title: 'Vogue Square',
    text:
      'O atendimento presencial acontece na Barra da Tijuca, em um endereço de fácil acesso no Vogue Square.',
  },
];

export default function AvaliacaoJoiasSegurancaSection() {
  return (
    <section
      id="seguranca-avaliacao"
      aria-labelledby="avaliacao-joias-seguranca-title"
      className="
        relative
        overflow-hidden
        bg-[#56151F]
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
              Segurança e transparência
            </p>

            <h2
              id="avaliacao-joias-seguranca-title"
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
              Avaliar uma joia também exige confiança.
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
              A avaliação precisa ser clara, reservada e conduzida com atenção
              aos detalhes da peça e à tranquilidade de quem busca entender
              melhor sua joia.
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
                Sua peça é analisada com atenção, clareza e discrição.
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
                O atendimento presencial permite observar detalhes da joia e
                explicar os principais pontos considerados durante a análise.
              </p>

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
                    Reservado
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
                    Processo
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Transparente
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-9
                  rounded-[1.6rem]
                  border
                  border-[#C7A87A]/22
                  bg-[#F7F3EF]/[0.07]
                  px-6
                  py-6
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
                  Avaliação sem pressão
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
                  A avaliação pode ser feita antes de qualquer decisão de venda.
                  Caso exista interesse posterior, os próximos passos podem ser
                  explicados durante o atendimento.
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
      </div>
    </section>
  );
}