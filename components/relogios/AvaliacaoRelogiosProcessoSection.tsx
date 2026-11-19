export default function AvaliacaoRelogiosProcessoSection() {
  const etapas = [
    {
      numero: '01',
      titulo: 'Identificação da peça',
      texto:
        'Começamos pela identificação da marca, coleção, modelo, referência e principais características do relógio.',
    },
    {
      numero: '02',
      titulo: 'Inspeção visual',
      texto:
        'Observamos caixa, pulseira, fecho, mostrador, vidro, acabamento, sinais de uso e a integridade geral do conjunto.',
    },
    {
      numero: '03',
      titulo: 'Análise técnica',
      texto:
        'Funcionamento, mecanismo, materiais, componentes e demais elementos relevantes são considerados de acordo com cada peça.',
    },
    {
      numero: '04',
      titulo: 'Documentação e acessórios',
      texto:
        'Quando disponíveis, certificado, cartão, caixa, manual, elos e outros acessórios também podem fazer parte da análise.',
    },
    {
      numero: '05',
      titulo: 'Contextualização',
      texto:
        'As informações técnicas são interpretadas dentro do contexto da marca, referência, conservação e características específicas do relógio.',
    },
    {
      numero: '06',
      titulo: 'Referência comercial',
      texto:
        'Ao final da análise, apresentamos de forma clara as informações consideradas e, quando aplicável, uma referência comercial para a peça.',
    },
  ];

  return (
    <section
      id="processo-de-avaliacao"
      aria-labelledby="processo-relogios-title"
      className="
        relative
        overflow-hidden
        bg-[#4F1720]
        px-6
        py-24
        md:px-8
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
          bg-[radial-gradient(circle_at_15%_20%,rgba(122,22,34,0.78),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(199,168,122,0.13),transparent_30%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#3E1118_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[10%]
          top-[8%]
          h-[42vw]
          w-[42vw]
          rounded-full
          bg-[#7A1622]/30
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[10%]
          bottom-[2%]
          h-[38vw]
          w-[38vw]
          rounded-full
          bg-[#C7A87A]/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[90rem]
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
              Etapas da avaliação
            </p>

            <h2
              id="processo-relogios-title"
              className="
                mt-5
                max-w-[650px]
                text-[#F7F3EF]
              "
            >
              Como funciona a avaliação de um relógio
            </h2>
          </div>

          <div>
            <p
              className="
                max-w-[630px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]
                md:text-[15px]
              "
            >
              O processo combina identificação, inspeção e análise das
              características da peça. Cada etapa ajuda a compreender melhor
              o relógio antes de qualquer definição comercial.
            </p>
          </div>
        </div>

        {/* LINHA */}
        <div
          className="
            my-14
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#C7A87A]/35
            to-transparent
            md:my-16
          "
        />

        {/* ETAPAS */}
        <div
          className="
            grid
            gap-4
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {etapas.map((etapa) => (
            <article
              key={etapa.numero}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.045]
                p-7
                shadow-[0_18px_50px_rgba(20,5,8,0.12),inset_0_1px_0_rgba(255,255,255,0.04)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C7A87A]/30
                hover:bg-white/[0.06]
                md:p-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-14
                  -top-14
                  h-36
                  w-36
                  rounded-full
                  bg-[#C7A87A]/8
                  blur-[44px]
                  transition-all
                  duration-500
                  group-hover:bg-[#C7A87A]/14
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[31px]
                      leading-none
                      text-[#C7A87A]
                    "
                  >
                    {etapa.numero}
                  </span>

                  <div
                    className="
                      h-px
                      flex-1
                      bg-gradient-to-r
                      from-[#C7A87A]/45
                      to-transparent
                    "
                  />
                </div>

                <h3
                  className="
                    mt-7
                    text-[#F7F3EF]
                  "
                >
                  {etapa.titulo}
                </h3>

                <p
                  className="
                    mt-4
                    text-[12px]
                    font-light
                    leading-7
                    text-[#D3C3C0]
                    md:text-[13px]
                  "
                >
                  {etapa.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* BLOCO FINAL */}
        <div
          className="
            mt-14
            rounded-[2rem]
            border
            border-[#C7A87A]/20
            bg-white/[0.045]
            px-7
            py-7
            backdrop-blur-xl
            md:mt-16
            md:px-9
            md:py-8
          "
        >
          <div
            className="
              grid
              gap-5
              md:grid-cols-[auto_1fr]
              md:items-center
              md:gap-8
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#D6BB8B]
              "
            >
              Processo reservado
            </p>

            <p
              className="
                max-w-[900px]
                text-[12px]
                font-light
                leading-7
                text-[#D3C3C0]
                md:text-[13px]
              "
            >
              A avaliação é realizada individualmente e de forma reservada,
              respeitando as particularidades de cada relógio e as informações
              apresentadas pelo proprietário.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}