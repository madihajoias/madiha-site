const pedras = [
  {
    label: 'Diamantes',
    title: 'Brilhantes e outras lapidações',
    text:
      'Diamantes podem exigir uma análise própria de peso, cor, pureza, lapidação, proporções e montagem dentro da joia.',
  },
  {
    label: 'Rubis',
    title: 'Cor, transparência e características da gema',
    text:
      'Rubis podem variar significativamente em qualidade e aparência, por isso precisam ser observados individualmente dentro da peça.',
  },
  {
    label: 'Safiras',
    title: 'Azuis e outras variedades',
    text:
      'Safiras podem apresentar diferentes tonalidades, intensidades de cor e características internas que participam da leitura da joia.',
  },
  {
    label: 'Esmeraldas',
    title: 'Uma gema que exige atenção',
    text:
      'Esmeraldas podem apresentar inclusões, tratamentos e características próprias que precisam ser consideradas com cuidado durante a avaliação.',
  },
  {
    label: 'Outras gemas',
    title: 'Pedras que também podem ter relevância',
    text:
      'Dependendo da peça, outras gemas naturais ou materiais ornamentais também podem contribuir para a composição e a leitura da joia antiga.',
  },
  {
    label: 'Montagem',
    title: 'A pedra faz parte de um conjunto',
    text:
      'O valor e a importância de uma gema não devem ser analisados isoladamente da montagem, do design, da época e da construção da joia.',
  },
];

export default function CompraJoiasAntigasPedrasSection() {
  return (
    <section
      id="pedras-preciosas"
      aria-labelledby="compra-joias-antigas-pedras-title"
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
          bg-[radial-gradient(circle_at_14%_20%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(255,255,255,0.035),transparent_34%)]
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
                text-[#D6BB8B]
                md:text-[10px]
              "
            >
              Diamantes e pedras preciosas
            </p>

            <h2
              id="compra-joias-antigas-pedras-title"
              className="
                mt-6
                max-w-[820px]
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
              As pedras também precisam ser entendidas individualmente.
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
              Em joias antigas, diamantes e gemas podem representar uma parte
              relevante da peça. Por isso, não devem ser considerados apenas
              como parte do peso total do conjunto.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#C7A87A]/22
              bg-[#F7F3EF]
              p-8
              shadow-[0_30px_85px_rgba(20,5,8,0.18)]
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-[#C7A87A]/14
                blur-[72px]
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
                A joia não é apenas metal
              </p>

              <h3
                className="
                  mt-6
                  max-w-[560px]
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#4F1720]
                  md:text-[3.5rem]
                "
              >
                Uma pedra pequena pode exigir uma leitura muito maior.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[550px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#776B6C]
                "
              >
                Cor, pureza, lapidação, peso, origem aparente, conservação e
                montagem podem influenciar a forma como uma gema participa da
                análise da joia.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A17D4F]">
                    Diamantes
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#4F1720]">
                    Peso + qualidade
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A17D4F]">
                    Gemas
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#4F1720]">
                    Cor + características
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
                  Importante
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
                  A aparência visual não é suficiente para determinar com
                  segurança a natureza ou o valor de uma pedra. A análise
                  presencial continua sendo essencial.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pedras.map((item) => (
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
                  <p
                    className="
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
                      text-[24px]
                      font-normal
                      leading-tight
                      text-[#F7F3EF]
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
                      text-[#CDBDBA]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="
            mt-8
            grid
            gap-8
            overflow-hidden
            rounded-[2.1rem]
            border
            border-white/10
            bg-white/[0.045]
            p-8
            backdrop-blur-xl
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
              A pedra pode mudar a leitura da peça
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
              Diamantes e gemas não devem desaparecer dentro do peso do ouro.
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
              Quando presentes, precisam ser considerados como elementos
              próprios dentro da avaliação da joia antiga.
            </p>
          </div>

          <a
            href="#joias-assinadas"
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
            Joias assinadas
          </a>
        </div>
      </div>
    </section>
  );
}