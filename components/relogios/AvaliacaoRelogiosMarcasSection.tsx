export default function AvaliacaoRelogiosMarcasSection() {
  const marcas = [
    'Rolex',
    'Cartier',
    'Omega',
    'Patek Philippe',
    'Audemars Piguet',
    'Vacheron Constantin',
    'IWC',
    'Jaeger-LeCoultre',
    'Breitling',
    'TAG Heuer',
    'Panerai',
    'Bulgari',
  ];

  return (
    <section
      aria-labelledby="marcas-relogios-title"
      className="
        relative
        overflow-hidden
        bg-[#4F1720]
        px-6
        py-24
        md:px-8
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
          bg-[radial-gradient(circle_at_18%_18%,rgba(122,22,34,0.74),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(199,168,122,0.13),transparent_30%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#3E1118_100%)]
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
          bg-[#7A1622]/28
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
          w-full
          max-w-[90rem]
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
              Marcas e fabricantes
            </p>

            <h2
              id="marcas-relogios-title"
              className="
                mt-5
                max-w-[650px]
                text-[#F7F3EF]
              "
            >
              Relógios de luxo e alta relojoaria
            </h2>
          </div>

          <div>
            <p
              className="
                max-w-[620px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]
                md:text-[15px]
              "
            >
              A Madiha Maison avalia relógios de marcas reconhecidas, peças de
              coleção e exemplares de alta relojoaria, considerando as
              características específicas de cada fabricante, modelo e
              referência.
            </p>
          </div>
        </div>

        {/* LINHA */}
        <div
          className="
            my-14
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#C7A87A]/35
            to-transparent
            md:my-16
          "
        />

        {/* MARCAS */}
        <div
          className="
            grid
            grid-cols-2
            gap-3
            sm:grid-cols-3
            lg:grid-cols-4
          "
        >
          {marcas.map((marca) => (
            <div
              key={marca}
              className="
                group
                relative
                flex
                min-h-[112px]
                items-center
                justify-center
                overflow-hidden
                rounded-[1.5rem]
                border
                border-white/10
                bg-white/[0.045]
                px-5
                py-6
                text-center
                shadow-[0_16px_38px_rgba(20,5,8,0.10),inset_0_1px_0_rgba(255,255,255,0.04)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C7A87A]/35
                hover:bg-white/[0.065]
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-12
                  -top-12
                  h-28
                  w-28
                  rounded-full
                  bg-[#C7A87A]/8
                  blur-[40px]
                  transition-all
                  duration-500
                  group-hover:bg-[#C7A87A]/15
                "
              />

              <p
                className="
                  relative
                  z-10
                  font-serif
                  text-[19px]
                  leading-tight
                  text-[#F7F3EF]
                  md:text-[20px]
                "
              >
                {marca}
              </p>
            </div>
          ))}
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-14
            rounded-[2rem]
            border
            border-[#C7A87A]/18
            bg-white/[0.045]
            px-7
            py-7
            backdrop-blur-xl
            md:mt-16
            md:px-9
            md:py-8
          "
        >
          <div
            className="
              grid
              gap-5
              md:grid-cols-[auto_1fr]
              md:items-center
              md:gap-8
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
              Outras marcas
            </p>

            <p
              className="
                max-w-[880px]
                text-[12px]
                font-light
                leading-7
                text-[#D3C3C0]
                md:text-[13px]
              "
            >
              A relação acima é apenas uma referência. Relógios de outras
              marcas, fabricantes independentes e peças vintage também podem
              ser analisados individualmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}