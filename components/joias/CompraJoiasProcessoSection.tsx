const etapas = [
  {
    numero: '01',
    label: 'Apresente',
    title: 'Traga suas joias',
    text:
      'Apresente as peças que deseja avaliar. Não é necessário saber previamente o teor do ouro, identificar as pedras ou conhecer todos os detalhes da joia.',
  },
  {
    numero: '02',
    label: 'Avaliação',
    title: 'Acompanhe a análise',
    text:
      'A joia é analisada individualmente considerando os elementos relevantes para a peça apresentada.',
  },
  {
    numero: '03',
    label: 'Proposta',
    title: 'Receba uma oferta',
    text:
      'Depois da avaliação, apresentamos uma proposta de compra com base na análise realizada.',
  },
  {
    numero: '04',
    label: 'Decisão',
    title: 'Você decide',
    text:
      'A proposta é apresentada sem obrigação de venda. A decisão de concluir ou não a negociação permanece com você.',
  },
  {
    numero: '05',
    label: 'Conclusão',
    title: 'Venda e pagamento',
    text:
      'Se a proposta for aceita, a negociação é concluída e o pagamento é realizado conforme as condições acordadas no atendimento.',
  },
];

export default function CompraJoiasProcessoSection() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="compra-joias-processo-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
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
          bg-[radial-gradient(circle_at_15%_20%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(90,16,23,0.055),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[8%]
          bottom-[4%]
          h-[32vw]
          w-[32vw]
          rounded-full
          bg-[#C7A87A]/10
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
              Como funciona
            </p>

            <h2
              id="compra-joias-processo-title"
              className="
                mt-6
                max-w-[780px]
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
              Vender suas joias pode ser simples.
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
                text-[#776B6C]
                md:text-[15px]
                md:leading-8
              "
            >
              O processo acontece de forma direta e transparente. Você
              apresenta suas joias, acompanha a avaliação, recebe a proposta e
              decide se deseja concluir a venda.
            </p>
          </div>
        </div>

        {/* PAINEL PRINCIPAL */}
        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[2.35rem]
            border
            border-[#5A1017]/10
            bg-[#FCFAF7]
            p-5
            shadow-[0_28px_80px_rgba(54,30,30,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]
            md:p-6
          "
        >
          {/* LUZ SUAVE */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
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

          {/* ETAPAS */}
          <div
            className="
              relative
              z-10
              grid
              gap-4
              lg:grid-cols-5
            "
          >
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[#5A1017]/9
                  bg-white
                  p-6
                  shadow-[0_14px_36px_rgba(54,30,30,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#C7A87A]/40
                  hover:shadow-[0_22px_50px_rgba(54,30,30,0.075)]
                  md:p-7
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-28
                    w-28
                    rounded-full
                    bg-[#C7A87A]/10
                    blur-[28px]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">
                  {/* NÚMERO */}
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <span
                      className="
                        inline-flex
                        h-11
                        min-w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/30
                        bg-[#C7A87A]/[0.08]
                        px-3
                        font-serif
                        text-[17px]
                        text-[#A17D4F]
                      "
                    >
                      {etapa.numero}
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        h-px
                        flex-1
                        bg-gradient-to-r
                        from-[#C7A87A]/45
                        to-transparent
                      "
                    />
                  </div>

                  {/* LABEL */}
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

                  {/* TÍTULO */}
                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[24px]
                      font-normal
                      leading-tight
                      tracking-[-0.02em]
                      text-[#4F1720]
                    "
                  >
                    {etapa.title}
                  </h3>

                  {/* LINHA */}
                  <div
                    aria-hidden="true"
                    className="
                      mt-5
                      h-px
                      w-10
                      bg-[#C7A87A]/35
                    "
                  />

                  {/* TEXTO */}
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

          {/* RODAPÉ DO PAINEL */}
          <div
            className="
              relative
              z-10
              mt-4
              grid
              gap-4
              md:grid-cols-2
            "
          >
            <div
              className="
                rounded-[1.65rem]
                border
                border-[#5A1017]/8
                bg-[#F7F3EF]
                px-7
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
                Avaliação sem compromisso
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
                Você pode conhecer a proposta antes de decidir se deseja
                prosseguir com a venda.
              </p>
            </div>

            <div
              className="
                rounded-[1.65rem]
                border
                border-[#C7A87A]/18
                bg-[#F3EDE5]
                px-7
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
                Atendimento presencial
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
                A avaliação acontece no Vogue Square, na Barra da Tijuca, em
                ambiente reservado.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-[#5A1017]/10
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              max-w-[760px]
              text-[11px]
              font-light
              leading-6
              text-[#817475]
            "
          >
            A proposta é apresentada somente depois da análise das peças.
          </p>

          <a
            href="#localizacao"
            className="
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              rounded-full
              border
              border-[#5A1017]/15
              bg-[#FCFAF7]
              px-7
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#4F1720]
              shadow-[0_10px_30px_rgba(54,30,30,0.05)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#C7A87A]
              hover:text-[#A17D4F]
            "
          >
            Agendar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}