const etapas = [
  {
    numero: '01',
    label: 'Apresentação',
    title: 'Mostre a joia como ela está',
    text:
      'Você pode apresentar a peça mesmo sem nota fiscal, certificado, informação de origem ou conhecimento prévio sobre metal e pedras.',
  },
  {
    numero: '02',
    label: 'Análise',
    title: 'A peça é observada individualmente',
    text:
      'Metal, teor, peso, pedras, marca, construção, conservação e outros elementos relevantes podem ser considerados durante a avaliação.',
  },
  {
    numero: '03',
    label: 'Identificação',
    title: 'Entendemos os elementos que compõem a joia',
    text:
      'A avaliação busca separar aquilo que pertence ao metal, às gemas, à assinatura, ao design e às características próprias da peça.',
  },
  {
    numero: '04',
    label: 'Proposta',
    title: 'A negociação considera a peça analisada',
    text:
      'Quando houver interesse na compra, a proposta é apresentada com base nas características observadas e nas condições comerciais do momento.',
  },
  {
    numero: '05',
    label: 'Decisão',
    title: 'Você decide se deseja vender',
    text:
      'A apresentação da proposta não obriga a venda. A decisão final permanece com o proprietário da joia.',
  },
];

export default function CompraJoiasAntigasProcessoSection() {
  return (
    <section
      id="processo-de-compra"
      aria-labelledby="processo-compra-joias-antigas-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(90,16,23,0.05),transparent_34%)]
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
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Como funciona a compra
            </p>

            <h2
              id="processo-compra-joias-antigas-title"
              className="
                mt-6
                max-w-[820px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#4F1720]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Um processo claro, da apresentação da peça até a sua decisão.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#776B6C]
                md:text-[15px]
                md:leading-8
              "
            >
              A compra de uma joia antiga começa pela compreensão da peça.
              Antes de qualquer negociação, é importante identificar aquilo que
              realmente está sendo apresentado.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-5
          "
        >
          {etapas.map((etapa, index) => (
            <article
              key={etapa.numero}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.85rem]
                border
                border-[#5A1017]/10
                bg-[#FCFAF7]
                p-7
                shadow-[0_18px_48px_rgba(54,30,30,0.055)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C7A87A]/35
                hover:shadow-[0_24px_58px_rgba(54,30,30,0.08)]
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
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="
                      font-serif
                      text-[2.15rem]
                      leading-none
                      text-[#C7A87A]
                    "
                  >
                    {etapa.numero}
                  </span>

                  {index < etapas.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="
                        hidden
                        h-px
                        flex-1
                        bg-gradient-to-r
                        from-[#C7A87A]/40
                        to-transparent
                        lg:block
                      "
                    />
                  )}
                </div>

                <p
                  className="
                    mt-8
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#A17D4F]
                  "
                >
                  {etapa.label}
                </p>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-[24px]
                    font-normal
                    leading-tight
                    text-[#4F1720]
                  "
                >
                  {etapa.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-[11px]
                    font-light
                    leading-6
                    text-[#776B6C]
                  "
                >
                  {etapa.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="
            mt-8
            grid
            gap-8
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#5A1017]/10
            bg-[#4F1720]
            p-8
            shadow-[0_28px_72px_rgba(55,20,26,0.14)]
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
              Sem obrigação de venda
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
              Primeiro você entende a peça. Depois decide o que fazer com ela.
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
              A avaliação e a apresentação de uma proposta não significam que
              você precisa concluir a venda.
            </p>
          </div>

          <a
            href="#seguranca-e-discricao"
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
            Segurança e discrição
          </a>
        </div>
      </div>
    </section>
  );
}