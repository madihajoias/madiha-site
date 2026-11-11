const situacoes = [
  {
    label: 'Joias antigas',
    title: 'Peças antigas ou herdadas',
    text:
      'Joias antigas podem reunir características de metal, pedras, design, assinatura e conservação que não aparecem em uma estimativa automática.',
  },
  {
    label: 'Marcas reconhecidas',
    title: 'Joias assinadas',
    text:
      'Peças de marcas reconhecidas podem exigir uma leitura específica de assinatura, procedência, construção e mercado.',
  },
  {
    label: 'Sem certificado',
    title: 'Diamantes sem documentação',
    text:
      'Quando não há certificado, peso, cor, pureza e outras características da pedra precisam ser confirmadas presencialmente.',
  },
  {
    label: 'Outras lapidações',
    title: 'Diamantes que não são Round Brilliant',
    text:
      'Oval, Emerald, Pear, Cushion, Princess e outras lapidações podem ter referências comerciais diferentes da utilizada pela calculadora.',
  },
  {
    label: 'Teor desconhecido',
    title: 'Quando você não sabe o teor do ouro',
    text:
      'Se não há certeza sobre a liga da peça, a avaliação presencial ajuda a confirmar essa informação antes de qualquer interpretação de valor.',
  },
  {
    label: 'Peças complexas',
    title: 'Joias com várias pedras',
    text:
      'Peças com diferentes diamantes, gemas coloridas ou montagens complexas podem exigir uma análise individual de cada elemento.',
  },
];

export default function CalculadoraJoiasQuandoAvaliarSection() {
  return (
    <section
      id="quando-avaliar"
      aria-labelledby="calculadora-quando-avaliar-title"
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
          bg-[radial-gradient(circle_at_14%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(255,255,255,0.035),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[8%]
          top-[10%]
          h-[36vw]
          w-[36vw]
          rounded-full
          bg-[#7A1622]/28
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
                text-[#D6BB8B]
                md:text-[10px]
              "
            >
              Quando procurar avaliação
            </p>

            <h2
              id="calculadora-quando-avaliar-title"
              className="
                mt-6
                max-w-[800px]
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
              Algumas joias precisam ser vistas de perto.
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
              A calculadora funciona muito bem como ponto de partida. Porém,
              existem situações em que a peça precisa ser analisada
              presencialmente para que suas características sejam confirmadas.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-16
            grid
            gap-4
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {situacoes.map((item, index) => (
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
                <div className="flex items-center gap-4">
                  <span
                    className="
                      inline-flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/28
                      bg-[#C7A87A]/[0.08]
                      font-serif
                      text-[15px]
                      text-[#D6BB8B]
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      flex-1
                      bg-gradient-to-r
                      from-[#C7A87A]/40
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
                  {item.label}
                </p>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-[25px]
                    font-normal
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  {item.title}
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
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            mt-8
            grid
            gap-6
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#C7A87A]/20
            bg-[#F7F3EF]
            p-8
            shadow-[0_28px_72px_rgba(20,5,8,0.16)]
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
                text-[#A17D4F]
              "
            >
              Quando a estimativa não é suficiente
            </p>

            <h3
              className="
                mt-4
                max-w-[850px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#4F1720]
                md:text-[2.7rem]
              "
            >
              A avaliação presencial ajuda a entender aquilo que a calculadora
              não consegue enxergar.
            </h3>

            <p
              className="
                mt-5
                max-w-[780px]
                text-[11px]
                font-light
                leading-6
                text-[#776B6C]
              "
            >
              Metal, pedras, marca, design, conservação e características
              específicas da peça podem exigir uma leitura individual.
            </p>
          </div>

          <a
            href="/joias/avaliacao-de-joias/"
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
              shadow-[0_14px_34px_rgba(54,30,30,0.10)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Conhecer avaliação
          </a>
        </div>
      </div>
    </section>
  );
}