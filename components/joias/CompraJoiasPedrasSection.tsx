const pedras = [
  {
    label: 'Diamantes',
    title: 'Brilho, proporção e características próprias',
    text:
      'Joias com diamantes podem exigir uma análise específica da pedra, além da avaliação do ouro e da estrutura da peça.',
  },
  {
    label: 'Rubis',
    title: 'Cor e presença dentro da joia',
    text:
      'Rubis podem fazer parte da leitura da peça conforme suas características, montagem e relevância dentro da composição.',
  },
  {
    label: 'Safiras',
    title: 'Avaliação integrada à peça',
    text:
      'Safiras e outras gemas podem ser consideradas dentro de uma análise mais ampla da joia apresentada.',
  },
  {
    label: 'Esmeraldas',
    title: 'Gemas que merecem atenção própria',
    text:
      'Esmeraldas podem exigir uma observação específica de acordo com sua aparência, montagem e características gerais.',
  },
];

export default function CompraJoiasPedrasSection() {
  return (
    <section
      id="joias-com-pedras"
      aria-labelledby="joias-com-pedras-title"
      className="
        relative
        overflow-hidden
        bg-[#56151F]
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
          bg-[radial-gradient(circle_at_16%_20%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_84%_78%,rgba(255,255,255,0.035),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[8%]
          top-[22%]
          h-[34vw]
          w-[34vw]
          rounded-full
          bg-[#7A1622]/30
          blur-[110px]
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
              Joias com pedras
            </p>

            <h2
              id="joias-com-pedras-title"
              className="
                mt-6
                max-w-[760px]
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
              Metal e pedras devem ser entendidos em conjunto.
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
                text-[#D0C1BE]
                md:text-[15px]
                md:leading-8
              "
            >
              Uma joia com diamantes ou pedras preciosas não deve ser observada
              apenas pelo peso do ouro. Dependendo da peça, as gemas também
              podem exigir uma análise individual.
            </p>
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          {/* PAINEL ESQUERDO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
              border
              border-white/10
              bg-white/[0.045]
              p-8
              shadow-[0_30px_85px_rgba(20,5,8,0.18),inset_0_1px_0_rgba(255,255,255,0.04)]
              backdrop-blur-2xl
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
                bg-[#C7A87A]/12
                blur-[72px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#D6BB8B]
                "
              >
                Avaliação completa
              </p>

              <h3
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[2.65rem]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  md:text-[3.45rem]
                "
              >
                A pedra também faz parte da identidade da joia.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[480px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                "
              >
                Em determinadas peças, observar apenas o metal pode deixar de
                lado características importantes. A presença de uma gema pode
                exigir uma leitura mais ampla da joia.
              </p>

              {/* MINI CARDS */}
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
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#D6BB8B]
                    "
                  >
                    Metal
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Peso e teor
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#D6BB8B]
                    "
                  >
                    Pedras
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Análise própria
                  </p>
                </div>
              </div>

              {/* NOTA */}
              <div
                className="
                  mt-9
                  rounded-[1.55rem]
                  border
                  border-[#C7A87A]/18
                  bg-[#F7F3EF]/[0.055]
                  px-6
                  py-5
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#D6BB8B]
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
                    text-[#D3C3C0]
                  "
                >
                  A presença de uma pedra não significa automaticamente maior
                  valor. Cada gema precisa ser entendida dentro das
                  características da joia apresentada.
                </p>
              </div>
            </div>
          </div>

          {/* CARDS DAS PEDRAS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {pedras.map((pedra) => (
              <article
                key={pedra.label}
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
                  hover:shadow-[0_24px_60px_rgba(20,5,8,0.18)]
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
                    {pedra.label}
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
                    {pedra.title}
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
                    {pedra.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BLOCO DE TRANSIÇÃO PARA A CALCULADORA */}
        <div
          className="
            mt-6
            grid
            gap-6
            lg:grid-cols-[1.25fr_0.75fr]
          "
        >
          <div
            className="
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.04]
              px-8
              py-8
              shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
              backdrop-blur-xl
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
              Primeiro passo
            </p>

            <h3
              className="
                mt-4
                max-w-[760px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.05]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.6rem]
              "
            >
              Conheça uma estimativa inicial do metal presente na sua joia.
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
              A calculadora abaixo funciona como uma referência inicial para o
              ouro. A avaliação presencial continua sendo necessária para
              entender a joia completa.
            </p>
          </div>

          <div
            className="
              flex
              items-center
              justify-center
              rounded-[2rem]
              border
              border-[#C7A87A]/22
              bg-[#F7F3EF]/[0.06]
              p-8
              backdrop-blur-xl
            "
          >
            <a
              href="#calculadora-de-joias"
              className="
                inline-flex
                min-h-[54px]
                w-full
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
                shadow-[0_14px_34px_rgba(20,5,8,0.18),inset_0_1px_0_rgba(255,255,255,0.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Calcular valor do ouro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}