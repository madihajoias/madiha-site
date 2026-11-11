import DiamondShape from './DiamondShape';

const itens = [
  {
    label: 'Diamantes soltos',
    title: 'Pedras fora de joias',
    text:
      'Diamantes lapidados e soltos podem ser avaliados individualmente, com ou sem documentação disponível.',
    shape: 'round' as const,
  },
  {
    label: 'Brilhantes',
    title: 'Round Brilliant',
    text:
      'Brilhantes redondos podem ser analisados considerando peso, cor, pureza, lapidação e outras características da pedra.',
    shape: 'round' as const,
  },
  {
    label: 'Oval',
    title: 'Diamantes ovais',
    text:
      'Lapidações Oval também podem ser avaliadas, considerando suas proporções, características visuais e comportamento comercial.',
    shape: 'oval' as const,
  },
  {
    label: 'Emerald Cut',
    title: 'Diamantes lapidados em degraus',
    text:
      'Diamantes Emerald Cut possuem leitura visual própria e podem apresentar comportamento diferente de um Round Brilliant.',
    shape: 'emerald' as const,
  },
  {
    label: 'Pear',
    title: 'Diamantes em formato de gota',
    text:
      'Diamantes Pear combinam características de formatos arredondados e alongados e também podem ser analisados individualmente.',
    shape: 'pear' as const,
  },
  {
    label: 'Cushion',
    title: 'Diamantes de cantos arredondados',
    text:
      'Lapidações Cushion podem variar bastante em proporção e aparência, exigindo leitura própria durante a avaliação.',
    shape: 'cushion' as const,
  },
];

const montados = [
  'Anéis com diamantes',
  'Brincos com brilhantes',
  'Colares e pingentes',
  'Pulseiras',
  'Joias antigas com diamantes',
  'Joias assinadas',
  'Peças com várias pedras',
  'Diamantes com certificado',
  'Diamantes sem certificado',
];

export default function CompraDiamantesTiposSection() {
  return (
    <section
      id="o-que-compramos"
      aria-labelledby="o-que-compramos-title"
      className="
        relative
        overflow-hidden
        bg-[#FCFAF7]
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
          bg-[radial-gradient(circle_at_10%_20%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(214,187,139,0.13),transparent_34%)]
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
              O que compramos
            </p>

            <h2
              id="o-que-compramos-title"
              className="
                mt-6
                max-w-[820px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#332A2B]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Diamantes podem chegar de muitas formas.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#675C5D]
                md:text-[15px]
                md:leading-8
              "
            >
              A avaliação não se limita a pedras soltas. Diamantes montados em
              joias, peças antigas, joias assinadas e pedras sem certificado
              também podem ser apresentados para análise.
            </p>
          </div>
        </div>

        {/* FORMATOS */}
        <div
          className="
            mt-16
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {itens.map((item) => (
            <article
              key={`${item.label}-${item.title}`}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.85rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                p-7
                shadow-[0_18px_48px_rgba(96,72,45,0.045)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#A17D4F]/28
                hover:bg-[#FCFAF7]
                hover:shadow-[0_24px_58px_rgba(96,72,45,0.07)]
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
                  bg-[#D6BB8B]/12
                  blur-[28px]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-[1.45rem]
                    border
                    border-[#A17D4F]/12
                    bg-[#EFE6D8]/62
                  "
                >
                  <DiamondShape
                    shape={item.shape}
                    className="
                      h-14
                      w-14
                      text-[#A17D4F]
                      transition-transform
                      duration-500
                      group-hover:scale-[1.05]
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
                    text-[#A17D4F]
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
                    text-[#332A2B]
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
                    bg-[#A17D4F]/30
                  "
                />

                <p
                  className="
                    mt-5
                    text-[11px]
                    font-light
                    leading-6
                    text-[#675C5D]
                  "
                >
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* MONTADOS EM JOIAS */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.2rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F0E0C5_52%,#D9BC8B_100%)]
              p-8
              shadow-[0_26px_68px_rgba(96,72,45,0.08)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-16
                -top-16
                h-64
                w-64
                rounded-full
                bg-white/25
                blur-[70px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#8C6635]
                "
              >
                Diamantes montados
              </p>

              <h3
                className="
                  mt-5
                  max-w-[560px]
                  font-serif
                  text-[2.7rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                A pedra não precisa estar solta para ser avaliada.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[560px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#5F5350]
                "
              >
                Diamantes presentes em anéis, brincos, colares e outras joias
                podem ser analisados considerando também a montagem, o metal e
                as demais características da peça.
              </p>

              <div
                className="
                  mt-8
                  rounded-[1.5rem]
                  border
                  border-[#8C6635]/14
                  bg-white/25
                  px-6
                  py-5
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8C6635]
                  "
                >
                  Importante
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[20px]
                    leading-snug
                    text-[#332A2B]
                  "
                >
                  A montagem pode limitar algumas medições, mas não impede uma
                  análise inicial.
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              rounded-[2.2rem]
              border
              border-[#A17D4F]/12
              bg-[#F7F3EF]
              p-8
              shadow-[0_22px_58px_rgba(96,72,45,0.05)]
              md:p-10
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#A17D4F]
              "
            >
              Também avaliamos
            </p>

            <div
              className="
                mt-7
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {montados.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-[1.35rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#FCFAF7]
                    px-5
                    py-4
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A17D4F]/20
                      bg-[#EFE6D8]
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#A17D4F]
                      "
                    />
                  </span>

                  <span
                    className="
                      text-[10px]
                      font-light
                      leading-5
                      text-[#5F5350]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[#332A2B]
            p-8
            shadow-[0_24px_64px_rgba(51,42,43,0.10)]
            md:p-10
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#D6BB8B]
              "
            >
              Com ou sem certificado
            </p>

            <h3
              className="
                mt-4
                max-w-[880px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Se você tem a pedra, já existe um ponto de partida para a
              avaliação.
            </h3>

            <p
              className="
                mt-5
                max-w-[760px]
                text-[11px]
                font-light
                leading-6
                text-[#D0C1BE]
              "
            >
              Certificados e documentos podem ajudar, mas a ausência deles não
              impede uma análise inicial da pedra ou da joia.
            </p>
          </div>

          <a
            href="#certificado"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#D6BB8B]
              bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#332A2B]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Entender o certificado
          </a>
        </div>
      </div>
    </section>
  );
}