const fundamentos = [
  {
    label: 'Ouro',
    title: 'Peso e teor',
    text:
      'A estimativa do ouro considera o peso informado e o teor selecionado para estabelecer uma referência inicial do metal.',
  },
  {
    label: 'Câmbio',
    title: 'Referência em dólar',
    text:
      'O mercado internacional de diamantes utiliza referências denominadas em dólar. Por isso, a conversão cambial participa do cálculo apresentado em reais.',
  },
  {
    label: 'Mercado',
    title: 'Referência internacional',
    text:
      'Os preços utilizados como base ajudam a acompanhar o comportamento do mercado internacional e construir uma estimativa inicial.',
  },
  {
    label: 'Lapidação',
    title: 'Round Brilliant',
    text:
      'A referência utilizada para os diamantes da calculadora está baseada no formato redondo, especialmente no padrão conhecido como Round Brilliant.',
  },
  {
    label: 'Classificação',
    title: 'Peso, cor e pureza',
    text:
      'O valor de referência varia de acordo com o peso em quilates, a cor e o grau de pureza informado para o diamante.',
  },
  {
    label: 'Quantidade',
    title: 'Número de pedras',
    text:
      'Quando uma joia possui vários diamantes, a quantidade e o peso informado das pedras também participam da estimativa.',
  },
];

export default function CalculadoraJoiasEntendaSection() {
  return (
    <section
      id="como-funciona-calculo"
      aria-labelledby="calculadora-entenda-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(90,16,23,0.055),transparent_34%)]
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
            lg:grid-cols-[0.86fr_1.14fr]
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
              Antes de calcular
            </p>

            <h2
              id="calculadora-entenda-title"
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
              Entenda o que entra no cálculo.
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
              A Calculadora de Joias combina informações fornecidas por você
              com referências de mercado para produzir uma estimativa inicial.
              Cada campo do formulário interfere diretamente no resultado.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {fundamentos.map((item) => (
            <article
              key={item.label}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.8rem]
                border
                border-[#5A1017]/10
                bg-[#FCFAF7]
                p-7
                shadow-[0_18px_48px_rgba(54,30,30,0.055),inset_0_1px_0_rgba(255,255,255,0.7)]
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
                    text-[#776B6C]
                  "
                >
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="
            mt-6
            grid
            gap-6
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#5A1017]/10
            bg-[#4F1720]
            p-8
            shadow-[0_28px_72px_rgba(55,20,26,0.14)]
            md:p-10
            lg:grid-cols-[1.2fr_0.8fr]
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
              Referência, não promessa
            </p>

            <h3
              className="
                mt-4
                max-w-[760px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              A calculadora oferece uma referência. A avaliação confirma a
              peça.
            </h3>

            <p
              className="
                mt-5
                max-w-[760px]
                text-[11px]
                font-light
                leading-6
                text-[#CDBDBA]
              "
            >
              Peso, teor e características dos diamantes precisam corresponder
              à peça real para que a estimativa tenha uma referência mais
              próxima da realidade.
            </p>
          </div>

          <a
            href="#calculadora-de-joias"
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
              shadow-[0_14px_34px_rgba(20,5,8,0.16),inset_0_1px_0_rgba(255,255,255,0.22)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Ir para calculadora
          </a>
        </div>
      </div>
    </section>
  );
}