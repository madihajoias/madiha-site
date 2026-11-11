export default function CompraJoiasAntigasHero() {
  return (
    <section
      id="inicio"
      aria-labelledby="compra-joias-antigas-title"
      className="
        relative
        min-h-[108svh]
        w-full
        overflow-hidden
        bg-[#4F1720]
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_16%_20%,rgba(122,22,34,0.78),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(199,168,122,0.14),transparent_32%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#3E1118_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[8%]
          top-[8%]
          h-[42vw]
          w-[42vw]
          rounded-full
          bg-[#7A1622]/35
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[10%]
          bottom-[4%]
          h-[38vw]
          w-[38vw]
          rounded-full
          bg-[#C7A87A]/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[108svh]
          w-full
          max-w-[90rem]
          items-center
          gap-14
          px-6
          pb-20
          pt-36
          md:px-8
          md:pt-40
          lg:grid-cols-[0.96fr_1.04fr]
          lg:gap-16
          lg:pb-24
          lg:pt-40
        "
      >
        {/* ESQUERDA */}
        <div className="max-w-[710px]">
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
            Madiha Maison • Compra de Joias Antigas
          </p>

          <h1
            id="compra-joias-antigas-title"
            className="
              mt-6
              max-w-[700px]
              font-serif
              text-[3.4rem]
              font-normal
              leading-[0.9]
              tracking-[-0.05em]
              text-[#F7F3EF]
              sm:text-[4.2rem]
              md:text-[5rem]
              lg:text-[5.55rem]
            "
          >
            Compra de Joias Antigas
          </h1>

          <p
            className="
              mt-9
              max-w-[650px]
              text-[14px]
              font-light
              leading-8
              text-[#E1D6D2]
              md:text-[15px]
            "
          >
            Joias antigas carregam história. A avaliação precisa enxergar além
            do peso do metal para compreender melhor aquilo que realmente faz
            parte da peça.
          </p>

          <p
            className="
              mt-5
              max-w-[610px]
              text-[12px]
              font-light
              leading-7
              text-[#C8B8B6]
            "
          >
            Peças herdadas, joias de família, diamantes, pedras preciosas,
            marcas reconhecidas e joias guardadas há muitos anos podem exigir
            uma leitura individual antes de qualquer decisão de venda.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <a
              href="#como-avaliamos"
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
                shadow-[0_14px_34px_rgba(20,5,8,0.22),inset_0_1px_0_rgba(255,255,255,0.22)]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Avaliar minhas joias antigas
            </a>

            <a
              href="#o-que-consideramos"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-full
                border
                border-[#F7F3EF]/18
                bg-white/[0.045]
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#F7F3EF]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#C7A87A]/55
                hover:bg-white/[0.075]
              "
            >
              Como funciona a avaliação
            </a>
          </div>

          <div
            className="
              mt-10
              grid
              max-w-[710px]
              gap-3
              sm:grid-cols-3
            "
          >
            {[
              ['Origem', 'Herdadas e antigas'],
              ['Análise', 'Metal + pedras'],
              ['Atendimento', 'Individual'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="
                  rounded-[1.45rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  px-5
                  py-5
                  shadow-[0_16px_38px_rgba(20,5,8,0.10),inset_0_1px_0_rgba(255,255,255,0.04)]
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
                  {label}
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[17px]
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DIREITA */}
        <div
          className="
            relative
            flex
            min-h-[540px]
            items-center
            justify-center
            lg:min-h-[650px]
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#C7A87A]/10
              blur-[90px]
            "
          />

          <div className="relative w-full max-w-[570px]">
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.25rem]
                border
                border-white/10
                bg-white/[0.04]
                px-8
                py-10
                shadow-[0_34px_90px_rgba(20,5,8,0.24),inset_0_1px_0_rgba(255,255,255,0.05)]
                backdrop-blur-2xl
                md:px-10
                md:py-11
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#D6BB8B]
                "
              >
                Uma leitura além do metal
              </p>

              <h2
                className="
                  mt-6
                  max-w-[480px]
                  font-serif
                  text-[1.95rem]
                  font-normal
                  leading-[1.08]
                  tracking-[-0.02em]
                  text-[#E7DBD6]
                  sm:text-[2.05rem]
                  md:text-[2.25rem]
                  lg:text-[2.4rem]
                "
              >
                A idade da joia é apenas uma parte da história.
              </h2>

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
                Uma peça antiga pode reunir metal precioso, diamantes, gemas,
                assinatura, design e características próprias de construção e
                conservação.
              </p>

              <div
                className="
                  mt-9
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                <div
                  className="
                    rounded-[1.45rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#D6BB8B]">
                    Peça
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#F7F3EF]">
                    História + construção
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.45rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#D6BB8B]">
                    Valor
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#F7F3EF]">
                    Além do peso
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-8
                  rounded-[1.5rem]
                  border
                  border-[#C7A87A]/18
                  bg-[#F7F3EF]/[0.055]
                  px-6
                  py-5
                "
              >
                <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#D6BB8B]">
                  Importante
                </p>

                <p className="mt-3 text-[11px] font-light leading-6 text-[#D3C3C0]">
                  Uma joia antiga não é necessariamente mais valiosa apenas por
                  sua idade. O conjunto da peça precisa ser analisado.
                </p>
              </div>
            </div>

            <div
              className="
                absolute
                -bottom-7
                right-4
                w-[250px]
                rounded-[1.5rem]
                border
                border-[#C7A87A]/22
                bg-[#F7F3EF]/96
                px-6
                py-5
                shadow-[0_18px_48px_rgba(20,5,8,0.22)]
                backdrop-blur-2xl
                md:-right-5
              "
            >
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#A17D4F]">
                Madiha Maison
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[20px]
                  leading-[1.05]
                  tracking-[-0.02em]
                  text-[#4F1720]
                "
              >
                Compra de Joias Antigas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}