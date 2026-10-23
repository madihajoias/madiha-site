const steps = [
  {
    number: '01',
    title: 'Identificação da peça',
    text:
      'O atendimento começa com a identificação do tipo de peça, características visuais e informações relevantes para a análise.',
  },
  {
    number: '02',
    title: 'Conferência do peso',
    text:
      'A peça é pesada em equipamento de precisão para determinar o peso considerado na avaliação do metal.',
  },
  {
    number: '03',
    title: 'Verificação do teor',
    text:
      'O teor do ouro é identificado para determinar a proporção de ouro presente na liga, como 18k, 14k ou outros teores.',
  },
  {
    number: '04',
    title: 'Análise das características',
    text:
      'São observados composição, estado da peça, elementos agregados e demais características que possam influenciar a avaliação.',
  },
  {
    number: '05',
    title: 'Apresentação da avaliação',
    text:
      'Após a análise, você recebe as informações sobre o metal e a referência comercial correspondente, de forma clara e individualizada.',
  },
];

export default function AvaliacaoOuroProcessoSection() {
  return (
    <section
      id="processo-avaliacao"
      aria-labelledby="processo-avaliacao-title"
      className="
        relative
        overflow-hidden
        bg-[#F4E9D7]
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
          bg-[radial-gradient(circle_at_10%_18%,rgba(255,255,255,0.82),transparent_30%),radial-gradient(circle_at_88%_76%,rgba(199,168,122,0.16),transparent_34%)]
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
            lg:grid-cols-[0.82fr_1.18fr]
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
                text-[#8F6E3F]
                md:text-[10px]
              "
            >
              Como funciona
            </p>

            <h2
              id="processo-avaliacao-title"
              className="
                mt-6
                max-w-[620px]
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
              Um processo técnico,
              <br />
              claro e individual.
            </h2>
          </div>

          <div
            className="
              max-w-[620px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#806C50]
                md:text-[15px]
                md:leading-8
              "
            >
              A avaliação de ouro não se resume apenas ao peso. O processo
              considera diferentes informações para compreender corretamente
              o metal e apresentar uma análise coerente com as características
              da peça.
            </p>
          </div>
        </div>

        {/* ETAPAS */}
        <div
          className="
            mt-16
            grid
            gap-4
            md:grid-cols-2
            xl:grid-cols-5
          "
        >
          {steps.map((step) => (
            <article
              key={step.number}
              className="
                group
                relative
                min-h-[320px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/60
                bg-[#ECDABC]/32
                p-7
                shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.56)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-[#F0E1C8]/50
                md:p-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-10
                  -top-12
                  h-28
                  w-28
                  rounded-full
                  bg-[#D5B27A]/16
                  blur-[28px]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#9B7A4C]
                  "
                >
                  Etapa {step.number}
                </p>

                <div
                  className="
                    mt-7
                    h-px
                    w-12
                    bg-[#765525]/25
                  "
                />

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[24px]
                    font-normal
                    leading-tight
                    text-[#68491F]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-[12px]
                    font-light
                    leading-7
                    text-[#806C50]
                  "
                >
                  {step.text}
                </p>

                <p
                  className="
                    mt-auto
                    pt-10
                    font-serif
                    text-[2.8rem]
                    leading-none
                    text-[#765525]/12
                  "
                >
                  {step.number}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-[#765525]/12
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              max-w-[680px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            A avaliação presencial permite confirmar peso, teor e demais
            características do ouro antes da definição de qualquer proposta
            comercial.
          </p>

          <a
            href="#calculadora-de-ouro"
            className="
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              rounded-full
              border
              border-[#765525]/22
              bg-white/20
              px-7
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#765525]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/38
            "
          >
            Consultar estimativa
          </a>
        </div>
      </div>
    </section>
  );
}