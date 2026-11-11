const pilares = [
  {
    label: 'Privacidade',
    title: 'Atendimento reservado',
    text:
      'A avaliação pode ser conduzida de forma discreta, com atenção às informações da peça e à privacidade do proprietário.',
  },
  {
    label: 'Clareza',
    title: 'Explicação do que está sendo analisado',
    text:
      'Sempre que possível, os principais elementos considerados na leitura da joia são apresentados de forma clara durante o atendimento.',
  },
  {
    label: 'Decisão',
    title: 'Sem pressão para vender',
    text:
      'A avaliação e a apresentação de uma proposta não obrigam a conclusão da venda. A decisão final permanece com o proprietário.',
  },
  {
    label: 'Cuidado',
    title: 'Manuseio compatível com a peça',
    text:
      'Joias antigas podem exigir atenção especial por apresentarem desgaste, estruturas delicadas, pedras soltas ou componentes antigos.',
  },
];

export default function CompraJoiasAntigasSegurancaSection() {
  return (
    <section
      id="seguranca-e-discricao"
      aria-labelledby="seguranca-joias-antigas-title"
      className="
        relative
        overflow-hidden
        bg-[#54151E]
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
          bg-[radial-gradient(circle_at_14%_20%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(255,255,255,0.035),transparent_34%)]
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
            lg:grid-cols-[0.92fr_1.08fr]
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
              id="seguranca-joias-antigas-title"
              className="
                mt-6
                max-w-[820px]
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
              Peças antigas merecem atenção. O atendimento também.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
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
              Joias herdadas, peças de família e itens guardados por muitos anos
              podem envolver tanto valor material quanto importância pessoal.
              Por isso, o atendimento deve ser conduzido com cuidado, clareza e
              discrição.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.92fr_1.08fr]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#C7A87A]/22
              bg-[#F7F3EF]
              p-8
              shadow-[0_30px_85px_rgba(20,5,8,0.18)]
              md:p-10
              lg:p-12
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
                bg-[#C7A87A]/14
                blur-[72px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#A17D4F]
                "
              >
                Atendimento individual
              </p>

              <h3
                className="
                  mt-6
                  max-w-[580px]
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#4F1720]
                  md:text-[3.5rem]
                "
              >
                Nem toda avaliação precisa acontecer com pressa.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[560px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#776B6C]
                "
              >
                Em joias antigas, compreender a peça pode exigir atenção a
                diferentes detalhes antes de qualquer conclusão ou negociação.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A17D4F]">
                    Atendimento
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#4F1720]">
                    Individual
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A17D4F]">
                    Decisão
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#4F1720]">
                    Sempre sua
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-6
                  rounded-[1.65rem]
                  border
                  border-[#C7A87A]/22
                  bg-[#F2EADF]
                  px-6
                  py-6
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#A17D4F]
                  "
                >
                  Antes de qualquer venda
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-light
                    leading-6
                    text-[#776B6C]
                  "
                >
                  O objetivo é que você compreenda melhor a peça e a proposta
                  apresentada antes de tomar uma decisão.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pilares.map((item) => (
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

        <div
          className="
            mt-8
            grid
            gap-8
            overflow-hidden
            rounded-[2.1rem]
            border
            border-white/10
            bg-white/[0.045]
            p-8
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
              Madiha Maison
            </p>

            <h3
              className="
                mt-4
                max-w-[860px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Avaliar primeiro permite decidir com mais informação.
            </h3>

            <p
              className="
                mt-5
                max-w-[780px]
                text-[11px]
                font-light
                leading-6
                text-[#CDBDBA]
              "
            >
              Leve a peça para uma análise presencial e conheça melhor os
              elementos que fazem parte da joia.
            </p>
          </div>

          <a
            href="#avaliacao-presencial"
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
              shadow-[0_14px_34px_rgba(20,5,8,0.16)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Avaliação presencial
          </a>
        </div>
      </div>
    </section>
  );
}