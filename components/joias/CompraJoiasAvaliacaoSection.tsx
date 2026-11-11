const etapas = [
  {
    numero: '01',
    label: 'Identificação',
    title: 'Entendemos a peça',
    text:
      'A avaliação começa com uma leitura geral da joia, observando sua composição, características visuais, estrutura e possíveis elementos relevantes.',
  },
  {
    numero: '02',
    label: 'Metal',
    title: 'Peso e teor',
    text:
      'O metal precioso é analisado considerando fatores como peso, teor e composição da peça.',
  },
  {
    numero: '03',
    label: 'Pedras',
    title: 'Diamantes e gemas',
    text:
      'Quando presentes, diamantes, rubis, safiras, esmeraldas e outras gemas podem exigir uma análise própria.',
  },
  {
    numero: '04',
    label: 'Características',
    title: 'Marca, design e conservação',
    text:
      'Dependendo da joia, assinatura, design, acabamento e estado de conservação também podem ser considerados.',
  },
  {
    numero: '05',
    label: 'Proposta',
    title: 'Avaliação comercial',
    text:
      'Após a análise, apresentamos uma proposta de compra com base nas características identificadas na peça.',
  },
];

export default function CompraJoiasAvaliacaoSection() {
  return (
    <section
      id="avaliacao-de-joias"
      aria-labelledby="avaliacao-de-joias-title"
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
          bg-[radial-gradient(circle_at_12%_16%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(90,16,23,0.055),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[8%]
          top-[18%]
          h-[30vw]
          w-[30vw]
          rounded-full
          bg-[#C7A87A]/10
          blur-[100px]
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
              Como avaliamos
            </p>

            <h2
              id="avaliacao-de-joias-title"
              className="
                mt-6
                max-w-[760px]
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
              Uma análise que considera a joia como um todo.
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
              O processo de avaliação busca entender a composição da peça antes
              de qualquer proposta. Metal, pedras e outras características
              relevantes são observados de forma individual.
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
            bg-[#4F1720]
            p-6
            shadow-[0_32px_90px_rgba(55,20,26,0.16),inset_0_1px_0_rgba(255,255,255,0.04)]
            md:p-8
            lg:p-10
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              -left-20
              top-8
              h-72
              w-72
              rounded-full
              bg-[#7A1622]/28
              blur-[80px]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -right-24
              bottom-0
              h-72
              w-72
              rounded-full
              bg-[#C7A87A]/12
              blur-[80px]
            "
          />

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
                  border-white/10
                  bg-white/[0.045]
                  p-6
                  shadow-[0_16px_42px_rgba(20,5,8,0.11),inset_0_1px_0_rgba(255,255,255,0.035)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#C7A87A]/35
                  hover:bg-white/[0.065]
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
                    blur-[26px]
                    transition-transform
                    duration-500
                    group-hover:scale-125
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
                        inline-flex
                        h-10
                        min-w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/28
                        bg-[#C7A87A]/8
                        px-3
                        font-serif
                        text-[15px]
                        text-[#D6BB8B]
                      "
                    >
                      {etapa.numero}
                    </span>

                    <span
                      className="
                        h-px
                        flex-1
                        bg-gradient-to-r
                        from-[#C7A87A]/35
                        to-transparent
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-7
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#D6BB8B]
                    "
                  >
                    {etapa.label}
                  </p>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[23px]
                      font-normal
                      leading-tight
                      text-[#F7F3EF]
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
                      text-[#CDBDBA]
                    "
                  >
                    {etapa.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* FECHAMENTO INTERNO */}
          <div
            className="
              relative
              z-10
              mt-6
              grid
              gap-4
              lg:grid-cols-[1.2fr_0.8fr]
            "
          >
            <div
              className="
                rounded-[1.65rem]
                border
                border-white/10
                bg-white/[0.04]
                px-7
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
                Avaliação individual
              </p>

              <p
                className="
                  mt-3
                  max-w-[760px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#D3C3C0]
                "
              >
                Duas joias visualmente semelhantes podem apresentar
                características diferentes. Por isso, a avaliação é realizada
                de forma individual e presencial.
              </p>
            </div>

            <div
              className="
                rounded-[1.65rem]
                border
                border-[#C7A87A]/18
                bg-[#F7F3EF]/[0.06]
                px-7
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
                Sem compromisso
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
                Você acompanha a análise e decide se deseja prosseguir com a
                venda após conhecer a proposta.
              </p>
            </div>
          </div>
        </div>

        {/* RODAPÉ DA SEÇÃO */}
        <div
          className="
            mt-12
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
            O objetivo é apresentar uma leitura clara da peça antes de qualquer
            decisão de venda.
          </p>

          <a
            href="#joias-com-pedras"
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
            Joias com pedras
          </a>
        </div>
      </div>
    </section>
  );
}