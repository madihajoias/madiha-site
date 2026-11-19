export default function AvaliacaoRelogiosCriteriosSection() {
  const criterios = [
    {
      numero: '01',
      titulo: 'Marca e referência',
      texto:
        'A identificação correta da marca, coleção, modelo e referência é um dos primeiros passos para compreender o relógio e suas características.',
    },
    {
      numero: '02',
      titulo: 'Movimento',
      texto:
        'O tipo de mecanismo, seu funcionamento e suas particularidades fazem parte da análise técnica da peça.',
    },
    {
      numero: '03',
      titulo: 'Materiais',
      texto:
        'Caixa, pulseira, fecho, mostrador e demais elementos podem apresentar diferentes materiais e acabamentos que precisam ser considerados.',
    },
    {
      numero: '04',
      titulo: 'Estado de conservação',
      texto:
        'Condição estética, sinais de uso, integridade dos componentes e eventuais intervenções ajudam a compor uma leitura mais completa.',
    },
    {
      numero: '05',
      titulo: 'Documentação e acessórios',
      texto:
        'Certificado, cartão, caixa, manual, elos adicionais e outros acessórios podem contribuir para a identificação e contextualização da peça.',
    },
    {
      numero: '06',
      titulo: 'Procedência',
      texto:
        'Informações disponíveis sobre origem, histórico e aquisição podem ser relevantes durante o processo de avaliação.',
    },
  ];

  return (
    <section
      id="criterios-de-avaliacao"
      aria-labelledby="criterios-relogios-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
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
          bg-[radial-gradient(circle_at_12%_20%,rgba(199,168,122,0.14),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(90,16,23,0.07),transparent_34%)]
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
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Avaliação técnica
            </p>

            <h2
              id="criterios-relogios-title"
              className="
                mt-5
                max-w-[620px]
                text-[#4F1720]
              "
            >
              O que analisamos em um relógio
            </h2>
          </div>

          <div>
            <p
              className="
                max-w-[620px]
                text-[14px]
                font-light
                leading-8
                text-[#725D58]
                md:text-[15px]
              "
            >
              A avaliação considera o relógio como um conjunto. Identificação,
              mecanismo, materiais, conservação e documentação ajudam a
              compreender melhor cada peça antes da apresentação de qualquer
              referência comercial.
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
            via-[#A17D4F]/30
            to-transparent
            md:my-16
          "
        />

        {/* CARDS */}
        <div
          className="
            grid
            gap-4
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {criterios.map((criterio) => (
            <article
              key={criterio.numero}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#5A1017]/8
                bg-white/45
                p-7
                shadow-[0_18px_55px_rgba(63,38,26,0.05),inset_0_1px_0_rgba(255,255,255,0.75)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C7A87A]/30
                hover:shadow-[0_24px_65px_rgba(63,38,26,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]
                md:p-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#C7A87A]/8
                  blur-[45px]
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
                    justify-between
                    gap-4
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[30px]
                      leading-none
                      text-[#C7A87A]
                    "
                  >
                    {criterio.numero}
                  </span>

                  <div
                    className="
                      h-px
                      flex-1
                      bg-gradient-to-r
                      from-[#C7A87A]/40
                      to-transparent
                    "
                  />
                </div>

                <h3
                  className="
                    mt-7
                    text-[#4F1720]
                  "
                >
                  {criterio.titulo}
                </h3>

                <p
                  className="
                    mt-4
                    text-[12px]
                    font-light
                    leading-7
                    text-[#7A6762]
                    md:text-[13px]
                  "
                >
                  {criterio.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-14
            rounded-[2rem]
            border
            border-[#C7A87A]/22
            bg-[#EFE4D1]/65
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
                text-[#A17D4F]
              "
            >
              Análise individual
            </p>

            <p
              className="
                max-w-[850px]
                text-[12px]
                font-light
                leading-7
                text-[#6E5A54]
                md:text-[13px]
              "
            >
              Nem todos os critérios possuem o mesmo peso em todos os relógios.
              A análise é adaptada às características específicas de cada peça.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}