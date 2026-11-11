const pontos = [
  {
    label: 'Mercado internacional',
    title: 'A referência nasce fora do Brasil',
    text:
      'Diamantes são negociados em um mercado global. Por isso, referências internacionais ajudam a estabelecer uma base de comparação para determinadas características da pedra.',
  },
  {
    label: 'Moeda',
    title: 'O dólar participa da referência',
    text:
      'Como boa parte das referências internacionais é expressa em dólar, a conversão cambial faz parte do cálculo apresentado em reais.',
  },
  {
    label: 'Variação',
    title: 'O resultado pode mudar ao longo do tempo',
    text:
      'Mudanças no câmbio e nas referências internacionais podem alterar a estimativa mesmo quando as características informadas da joia permanecem iguais.',
  },
];

export default function CalculadoraJoiasMercadoSection() {
  return (
    <section
      id="mercado-internacional"
      aria-labelledby="calculadora-mercado-title"
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
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[8%]
          bottom-[4%]
          h-[34vw]
          w-[34vw]
          rounded-full
          bg-[#C7A87A]/10
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
              Mercado internacional
            </p>

            <h2
              id="calculadora-mercado-title"
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
              Por que o dólar participa do cálculo?
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
              O mercado de diamantes é internacional. Por isso, muitas das
              referências utilizadas para compreender preços e classificações
              são expressas em dólar antes de serem convertidas para reais.
            </p>
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.86fr_1.14fr]
          "
        >
          {/* CARD PRINCIPAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#5A1017]/10
              bg-[#4F1720]
              p-8
              shadow-[0_30px_85px_rgba(55,20,26,0.15)]
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
                  tracking-[0.26em]
                  text-[#D6BB8B]
                "
              >
                Referência internacional
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
                  text-[#F7F3EF]
                  md:text-[3.5rem]
                "
              >
                A estimativa acompanha um mercado que está em movimento.
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
                Quando a referência internacional ou o câmbio muda, o valor
                convertido para reais também pode mudar.
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
                    border-white/10
                    bg-white/[0.045]
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
                      text-[#D6BB8B]
                    "
                  >
                    Referência
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Internacional
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
                    Conversão
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Dólar → Real
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-4
                  rounded-[1.6rem]
                  border
                  border-[#C7A87A]/22
                  bg-[#F7F3EF]/[0.06]
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
                    text-[#D6BB8B]
                  "
                >
                  Por isso o valor pode variar
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
                  A mesma joia pode apresentar estimativas diferentes em
                  momentos distintos caso ocorram mudanças nas referências de
                  mercado ou no câmbio.
                </p>
              </div>
            </div>
          </div>

          {/* PONTOS */}
          <div
            className="
              grid
              gap-4
            "
          >
            {pontos.map((item, index) => (
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

                <div
                  className="
                    relative
                    z-10
                    grid
                    gap-6
                    md:grid-cols-[auto_1fr]
                    md:items-start
                  "
                >
                  <span
                    className="
                      inline-flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/30
                      bg-[#C7A87A]/[0.08]
                      font-serif
                      text-[15px]
                      text-[#A17D4F]
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
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
                        mt-3
                        font-serif
                        text-[25px]
                        font-normal
                        leading-tight
                        text-[#4F1720]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[650px]
                        text-[11px]
                        font-light
                        leading-6
                        text-[#776B6C]
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-6
            grid
            gap-6
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#5A1017]/10
            bg-[#FCFAF7]
            p-8
            shadow-[0_22px_60px_rgba(54,30,30,0.055)]
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
              Acompanhar o mercado
            </p>

            <h3
              className="
                mt-4
                max-w-[820px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#4F1720]
                md:text-[2.7rem]
              "
            >
              O dólar faz parte da referência, mas não define sozinho o valor
              da joia.
            </h3>
          </div>

          <a
            href="#diamante-round-brilliant"
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
            Entender o diamante
          </a>
        </div>
      </div>
    </section>
  );
}