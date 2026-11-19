export default function AvaliacaoRelogiosHero() {
  return (
    <section
      id="inicio"
      aria-labelledby="avaliacao-relogios-title"
      className="
        relative
        min-h-[112svh]
        w-full
        overflow-hidden
        bg-[#EFE4D1]
      "
    >
      {/* FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_16%_18%,rgba(255,253,248,0.96)_0%,rgba(244,235,219,0.94)_31%,rgba(232,215,187,0.96)_67%,rgba(222,199,159,0.95)_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[10%]
          top-[7%]
          h-[46vw]
          w-[46vw]
          rounded-full
          bg-[#FFF4DE]/35
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[8%]
          top-[18%]
          h-[48vw]
          w-[48vw]
          rounded-full
          bg-[#CDA86D]/22
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[112svh]
          w-full
          max-w-[90rem]
          items-center
          gap-14
          px-6
          pb-20
          pt-40
          md:px-8
          lg:grid-cols-[0.94fr_1.06fr]
          lg:gap-20
          lg:pb-24
          lg:pt-44
        "
      >
        {/* TEXTO */}
        <div className="min-w-0">
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#8F6E3F]
              md:text-[10px]
            "
          >
            Madiha Maison • Avaliação de Relógios
          </p>

          <h1
            id="avaliacao-relogios-title"
            className="
              mt-6
              max-w-[820px]
              text-[#765525]
            "
          >
            Avaliação de Relógios
          </h1>

          <p
            className="
              mt-8
              max-w-[650px]
              text-[14px]
              font-light
              leading-8
              text-[#806C50]
              md:text-[16px]
            "
          >
            Avaliamos relógios de luxo considerando marca, modelo, referência,
            estado de conservação, funcionamento, materiais e características
            específicas de cada peça.
          </p>

          <p
            className="
              mt-5
              max-w-[610px]
              text-[12px]
              font-light
              leading-7
              text-[#927D60]
              md:text-[13px]
            "
          >
            O atendimento é realizado de forma individual e reservada no Vogue
            Square, na Barra da Tijuca, permitindo uma análise cuidadosa antes
            de qualquer decisão comercial.
          </p>

          {/* CTAS */}
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
              href="#criterios-de-avaliacao"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-full
                bg-[linear-gradient(135deg,#98703A_0%,#AE8246_48%,#936936_100%)]
                px-8
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white
                shadow-[0_13px_28px_rgba(67,42,8,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Como avaliamos
            </a>

            <a
              href="#localizacao"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-full
                border
                border-[#765525]/25
                bg-white/18
                px-8
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#765525]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:bg-white/32
              "
            >
              Agendar avaliação
            </a>
          </div>

          {/* INDICADORES */}
          <div
            className="
              mt-12
              grid
              max-w-[760px]
              gap-3
              sm:grid-cols-3
            "
          >
            {[
              ['Análise', 'Individual'],
              ['Relógios', 'Luxo e coleção'],
              ['Atendimento', 'Reservado'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="
                  rounded-[1.35rem]
                  border
                  border-white/60
                  bg-[#EAD8B8]/30
                  px-5
                  py-5
                  shadow-[0_14px_38px_rgba(100,70,27,0.06),inset_0_1px_0_rgba(255,255,255,0.55)]
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#937144]
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
                    text-[#68491F]
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL */}
        <div
          className="
            relative
            flex
            min-h-[560px]
            w-full
            min-w-0
            items-center
            justify-center
            lg:min-h-[700px]
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#F6E8CC]/45
              blur-[80px]
              sm:h-[520px]
              sm:w-[520px]
            "
          />

          <div
            className="
              relative
              w-full
              max-w-[560px]
            "
          >
            {/* CARD PRINCIPAL */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[3rem_3rem_4.5rem_3rem]
                border
                border-white/60
                bg-[linear-gradient(145deg,rgba(199,165,108,0.96),rgba(177,136,72,0.95),rgba(154,110,49,0.94),rgba(188,148,84,0.94))]
                px-7
                py-10
                shadow-[0_48px_112px_rgba(77,49,12,0.30),0_17px_46px_rgba(110,72,19,0.20),inset_0_1px_0_rgba(255,255,255,0.48)]
                backdrop-blur-2xl
                sm:px-8
                md:px-10
                md:py-12
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-[#FFECC3]/35
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
                    text-[#68491F]
                  "
                >
                  Avaliação especializada
                </p>

                <h2
                  className="
                    mt-6
                    max-w-[470px]
                    text-[#412907]
                  "
                >
                  Cada relógio tem sua própria história.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[450px]
                    text-[12px]
                    font-light
                    leading-7
                    text-[#4E3515]/80
                  "
                >
                  Marca, modelo, referência, mecanismo, materiais, conservação,
                  acessórios e procedência podem influenciar a análise de um
                  relógio.
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
                      rounded-[1.4rem]
                      border
                      border-white/30
                      bg-white/12
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
                        text-[#5F431F]
                      "
                    >
                      Identificação
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[19px]
                        leading-tight
                        text-[#412907]
                      "
                    >
                      Marca + referência
                    </p>
                  </div>

                  <div
                    className="
                      rounded-[1.4rem]
                      border
                      border-white/30
                      bg-white/12
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
                        text-[#5F431F]
                      "
                    >
                      Condição
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[19px]
                        leading-tight
                        text-[#412907]
                      "
                    >
                      Estado da peça
                    </p>
                  </div>
                </div>

                <div
                  className="
                    mt-8
                    rounded-[1.6rem]
                    border
                    border-white/28
                    bg-white/10
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
                      text-[#5F431F]
                    "
                  >
                    Avaliação completa
                  </p>

                  <p
                    className="
                      mt-3
                      text-[11px]
                      font-light
                      leading-6
                      text-[#4E3515]/80
                    "
                  >
                    A análise busca compreender o relógio como um conjunto,
                    considerando os elementos que podem contribuir para sua
                    identificação e referência comercial.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD FLUTUANTE */}
            <div
              className="
                absolute
                -bottom-8
                right-4
                w-[225px]
                rounded-[1.8rem]
                border
                border-white/65
                bg-[#F8EBD3]/78
                px-6
                py-5
                shadow-[0_18px_48px_rgba(83,55,18,0.16)]
                backdrop-blur-2xl
                md:-right-6
                md:w-[245px]
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#8F6E3F]
                "
              >
                Madiha Maison
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#68491F]
                "
              >
                Avaliação de Relógios
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}