const pedras = [
  {
    label: 'Diamantes',
    title: 'Características que exigem análise própria',
    text:
      'Quando presentes na joia, diamantes podem exigir uma leitura específica além do valor do metal precioso.',
  },
  {
    label: 'Rubis',
    title: 'Cor, montagem e presença na peça',
    text:
      'Rubis podem ser considerados dentro da avaliação conforme suas características e a forma como fazem parte da joia.',
  },
  {
    label: 'Safiras',
    title: 'Análise integrada à joia',
    text:
      'Safiras podem exigir uma observação própria de acordo com sua aparência, montagem e relevância dentro da peça.',
  },
  {
    label: 'Esmeraldas',
    title: 'Gemas que merecem atenção individual',
    text:
      'Esmeraldas podem exigir uma leitura específica considerando suas características e a forma como estão inseridas na joia.',
  },
];

export default function AvaliacaoJoiasPedrasSection() {
  return (
    <section
      id="avaliacao-de-pedras"
      aria-labelledby="avaliacao-joias-pedras-title"
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
              Diamantes e pedras preciosas
            </p>

            <h2
              id="avaliacao-joias-pedras-title"
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
              A presença de uma gema pode mudar a leitura da joia.
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
              Em determinadas peças, observar apenas o metal não é suficiente.
              Diamantes e pedras preciosas podem exigir uma análise individual
              dentro da avaliação da joia como um todo.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          {/* PAINEL PRINCIPAL */}
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
                Avaliação integrada
              </p>

              <h3
                className="
                  mt-6
                  max-w-[480px]
                  font-serif
                  text-[2.65rem]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  md:text-[3.45rem]
                "
              >
                Metal e pedras precisam ser entendidos em conjunto.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[500px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                "
              >
                A presença de uma gema pode exigir uma leitura mais ampla da
                peça. Dependendo da joia, metal, pedras, montagem e construção
                precisam ser considerados em conjunto.
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
                    Gemas
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Leitura própria
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
                  características da peça apresentada.
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

        {/* TRANSIÇÃO PARA CALCULADORA */}
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
              Uma referência inicial
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
              Conheça uma estimativa inicial antes da avaliação presencial.
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
              A calculadora funciona como uma referência informativa. A análise
              presencial continua sendo necessária para compreender a joia
              completa.
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
              Usar calculadora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}