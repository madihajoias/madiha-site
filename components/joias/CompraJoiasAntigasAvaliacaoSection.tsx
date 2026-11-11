const criterios = [
  {
    label: 'Metal',
    title: 'Peso e teor',
    text:
      'O metal precioso continua sendo uma parte importante da análise, especialmente peso, teor e composição da peça.',
  },
  {
    label: 'Diamantes',
    title: 'Pedras que exigem leitura própria',
    text:
      'Diamantes podem precisar de análise individual de peso, cor, pureza, lapidação e montagem dentro da joia.',
  },
  {
    label: 'Gemas',
    title: 'Rubis, safiras e esmeraldas',
    text:
      'Pedras preciosas podem alterar significativamente a leitura da peça e não devem ser tratadas apenas como parte do peso total.',
  },
  {
    label: 'Marca',
    title: 'Assinatura e procedência',
    text:
      'Joias assinadas ou associadas a marcas reconhecidas podem exigir uma leitura diferente de uma peça sem identificação de marca.',
  },
  {
    label: 'Design',
    title: 'Construção e características da peça',
    text:
      'Desenho, acabamento, técnicas de fabricação e características de época podem fazer parte da análise.',
  },
  {
    label: 'Conservação',
    title: 'Estado atual da joia',
    text:
      'Desgaste, reparos, alterações, peças faltantes e condição geral podem influenciar a interpretação da joia.',
  },
];

export default function CompraJoiasAntigasAvaliacaoSection() {
  return (
    <section
      id="como-avaliamos"
      aria-labelledby="compra-joias-antigas-avaliacao-title"
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
              Avaliação de joias antigas
            </p>

            <h2
              id="compra-joias-antigas-avaliacao-title"
              className="
                mt-6
                max-w-[840px]
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
              Uma joia antiga não deve ser avaliada apenas pelo peso do ouro.
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
              O ouro é importante, mas pode ser apenas uma parte da peça.
              Diamantes, gemas, assinatura, design, construção e conservação
              também podem fazer parte da análise.
            </p>
          </div>
        </div>

        {/* PAINEL PRINCIPAL */}
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
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-24
                -top-24
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
                Leitura completa da peça
              </p>

              <h3
                className="
                  mt-6
                  max-w-[520px]
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#4F1720]
                  md:text-[3.5rem]
                "
              >
                O metal é apenas o começo.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[520px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#776B6C]
                "
              >
                Em algumas joias antigas, avaliar somente o ouro pode ignorar
                elementos importantes que fazem parte da peça.
              </p>

              <div
                className="
                  mt-9
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
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
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    Valor do metal
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#4F1720]
                    "
                  >
                    Peso + teor
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
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    Valor da peça
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#4F1720]
                    "
                  >
                    Conjunto da joia
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-5
                  rounded-[1.6rem]
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
                  Antes de vender
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
                  Entender o que existe na peça é importante antes de reduzir
                  uma joia antiga simplesmente ao valor do metal.
                </p>
              </div>
            </div>
          </div>

          {/* CRITÉRIOS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {criterios.map((item) => (
              <article
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
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

        {/* FECHAMENTO */}
        <div
          className="
            mt-8
            grid
            gap-6
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
              Cada peça precisa ser entendida
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
              Antiga não significa automaticamente valiosa — e peso não conta
              toda a história.
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
              O valor depende das características reais da joia e da forma como
              seus diferentes elementos se relacionam.
            </p>
          </div>

          <a
            href="#joias-herdadas"
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
            Joias herdadas
          </a>
        </div>
      </div>
    </section>
  );
}