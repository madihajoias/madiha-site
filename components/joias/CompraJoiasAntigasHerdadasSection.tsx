const situacoes = [
  {
    label: 'Herança',
    title: 'Joias recebidas de familiares',
    text:
      'Peças herdadas de pais, avós ou outros familiares podem reunir metais preciosos, diamantes, gemas e características próprias de época.',
  },
  {
    label: 'Poucas informações',
    title: 'Você não precisa saber exatamente o que possui',
    text:
      'Mesmo sem conhecer o teor do ouro, a origem da peça, a marca ou as pedras, a joia pode ser apresentada para uma avaliação inicial.',
  },
  {
    label: 'Tempo',
    title: 'Joias guardadas há muitos anos',
    text:
      'É comum que peças antigas permaneçam guardadas por décadas e cheguem à avaliação sem documentação ou histórico completo.',
  },
  {
    label: 'Decisão',
    title: 'Avaliar antes de decidir',
    text:
      'Conhecer melhor a composição e as características da peça ajuda a tomar uma decisão mais consciente sobre venda, conservação ou outros caminhos.',
  },
];

export default function CompraJoiasAntigasHerdadasSection() {
  return (
    <section
      id="joias-herdadas"
      aria-labelledby="joias-herdadas-title"
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
          bg-[radial-gradient(circle_at_10%_22%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_90%_78%,rgba(90,16,23,0.05),transparent_32%)]
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
              Joias herdadas e de família
            </p>

            <h2
              id="joias-herdadas-title"
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
              Você não precisa conhecer a história completa para começar.
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
              Muitas joias antigas chegam até seus proprietários por herança.
              É comum não existir mais nota fiscal, certificado, embalagem ou
              informação precisa sobre metal, pedras e origem.
            </p>
          </div>
        </div>

        {/* BLOCO PRINCIPAL */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[1.04fr_0.96fr]
          "
        >
          {/* ESQUERDA */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#5A1017]/10
              bg-[#FCFAF7]
              p-8
              shadow-[0_26px_72px_rgba(54,30,30,0.075)]
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -left-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-[#C7A87A]/13
                blur-[70px]
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
                Um cenário muito comum
              </p>

              <h3
                className="
                  mt-6
                  max-w-[650px]
                  font-serif
                  text-[2.6rem]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-[#4F1720]
                  md:text-[3.45rem]
                "
              >
                “Recebi essas joias da minha família, mas não sei exatamente o
                que são.”
              </h3>

              <p
                className="
                  mt-7
                  max-w-[650px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#776B6C]
                "
              >
                Essa dúvida não impede a avaliação. A própria joia pode fornecer
                informações importantes sobre metal, pedras, marca, construção
                e estado de conservação.
              </p>

              <div
                className="
                  mt-10
                  grid
                  gap-3
                  sm:grid-cols-3
                "
              >
                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[#5A1017]/9
                    bg-[#F7F3EF]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A17D4F]">
                    Sem nota
                  </p>

                  <p className="mt-2 font-serif text-[19px] leading-tight text-[#4F1720]">
                    Pode ser avaliada
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[#5A1017]/9
                    bg-[#F7F3EF]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A17D4F]">
                    Sem certificado
                  </p>

                  <p className="mt-2 font-serif text-[19px] leading-tight text-[#4F1720]">
                    Análise inicial
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[#5A1017]/9
                    bg-[#F7F3EF]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A17D4F]">
                    Sem histórico
                  </p>

                  <p className="mt-2 font-serif text-[19px] leading-tight text-[#4F1720]">
                    A peça orienta
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
                  O primeiro passo
                </p>

                <p
                  className="
                    mt-3
                    max-w-[620px]
                    text-[11px]
                    font-light
                    leading-6
                    text-[#776B6C]
                  "
                >
                  Não é necessário limpar, reformar ou tentar identificar a joia
                  antes da avaliação. Apresentar a peça em seu estado atual
                  permite uma leitura mais cuidadosa de suas características.
                </p>
              </div>
            </div>
          </div>

          {/* DIREITA */}
          <div className="grid gap-4 sm:grid-cols-2">
            {situacoes.map((item, index) => (
              <article
                key={item.label}
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
                  <div className="flex items-center justify-between gap-5">
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.22em]
                        text-[#A17D4F]
                      "
                    >
                      {item.label}
                    </p>

                    <span
                      className="
                        font-serif
                        text-[14px]
                        text-[#C7A87A]
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-5
                      font-serif
                      text-[24px]
                      font-normal
                      leading-tight
                      text-[#4F1720]
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
                      bg-[#C7A87A]/40
                    "
                  />

                  <p
                    className="
                      mt-5
                      text-[11px]
                      font-light
                      leading-6
                      text-[#776B6C]
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
              Antes de decidir o destino da peça
            </p>

            <h3
              className="
                mt-4
                max-w-[870px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Primeiro descubra o que realmente existe na joia.
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
              A avaliação pode ajudar a separar diferentes peças, identificar
              elementos relevantes e entender melhor o conjunto recebido.
            </p>
          </div>

          <a
            href="#pedras-preciosas"
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
            Diamantes e gemas
          </a>
        </div>
      </div>
    </section>
  );
}