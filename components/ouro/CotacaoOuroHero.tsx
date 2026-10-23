export default function CotacaoOuroHero() {
  return (
    <section
      id="inicio"
      aria-labelledby="cotacao-ouro-title"
      className="
        relative
        min-h-[115svh]
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
          top-[8%]
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
          min-h-[115svh]
          w-full
          max-w-[90rem]
          items-center
          gap-14
          px-6
          pb-20
          pt-40
          md:px-8
          lg:grid-cols-[0.92fr_1.08fr]
          lg:gap-20
          lg:pb-24
          lg:pt-44
        "
      >
        {/* TEXTO */}
        <div>
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
            Madiha Maison • Cotação do Ouro
          </p>

          <h1
            id="cotacao-ouro-title"
            className="
              mt-6
              max-w-[780px]
              font-serif
              text-[3.4rem]
              font-normal
              leading-[0.98]
              tracking-[-0.035em]
              text-[#765525]
              sm:text-[4.2rem]
              md:text-[5rem]
              lg:text-[5.7rem]
            "
          >
            Cotação
            <br />
            do Ouro
          </h1>

          <p
            className="
              mt-8
              max-w-[620px]
              text-[14px]
              font-light
              leading-8
              text-[#806C50]
              md:text-[16px]
            "
          >
            Consulte referências atualizadas do preço do ouro e entenda
            como a cotação influencia o valor por grama em diferentes
            teores, como 24k, 18k, 14k e outros.
          </p>

          <p
            className="
              mt-5
              max-w-[570px]
              text-[12px]
              font-light
              leading-7
              text-[#927D60]
              md:text-[13px]
            "
          >
            A cotação de mercado é uma referência importante, mas o valor
            comercial de uma peça depende também do teor, peso, composição
            e características do ouro avaliado.
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
              href="#cotacao-por-teor"
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
              Ver cotação por teor
            </a>

            <a
              href="#calculadora-de-ouro"
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
              Calcular meu ouro
            </a>
          </div>

          {/* INDICADORES */}
          <div
            className="
              mt-12
              grid
              max-w-[680px]
              gap-3
              sm:grid-cols-3
            "
          >
            {[
              ['Mercado', 'Atualizado'],
              ['Teores', '24k a 10k'],
              ['Referência', 'Por grama'],
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
                    text-[#68491F]
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* VISUAL DE MERCADO */}
        <div
          className="
            relative
            flex
            min-h-[560px]
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
              h-[520px]
              w-[520px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#F6E8CC]/45
              blur-[80px]
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
                rounded-[3.2rem_3.2rem_5rem_3.2rem]
                border
                border-white/60
                bg-[linear-gradient(145deg,rgba(199,165,108,0.96),rgba(177,136,72,0.95),rgba(154,110,49,0.94),rgba(188,148,84,0.94))]
                px-8
                py-10
                shadow-[0_48px_112px_rgba(77,49,12,0.30),0_17px_46px_rgba(110,72,19,0.20),inset_0_1px_0_rgba(255,255,255,0.48)]
                backdrop-blur-2xl
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
                  Referência de mercado
                </p>

                <p
                  className="
                    mt-6
                    font-serif
                    text-[3rem]
                    leading-none
                    text-[#412907]
                    md:text-[4.4rem]
                  "
                >
                  Ouro
                  <br />
                  por grama
                </p>

                <div
                  className="
                    my-8
                    h-px
                    w-20
                    bg-[#52350F]/25
                  "
                />

                <div className="grid gap-4 sm:grid-cols-2">
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
                      Ouro 24k
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[20px]
                        text-[#412907]
                      "
                    >
                      Referência-base
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
                      Ouro 18k
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[20px]
                        text-[#412907]
                      "
                    >
                      75% de pureza
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
                    Entenda a diferença
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
                    A cotação de mercado representa uma referência do metal.
                    O valor comercial de uma joia ou peça pode variar conforme
                    teor, peso, composição e critérios de avaliação.
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
                w-[235px]
                rounded-[1.8rem]
                border
                border-white/65
                bg-[#F8EBD3]/78
                px-6
                py-5
                shadow-[0_18px_48px_rgba(83,55,18,0.16)]
                backdrop-blur-2xl
                md:-right-6
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
                Madiha Cotações
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
                Mercado + referência
                <br />
                comercial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}