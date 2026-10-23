export default function LojaOuroPertoHero() {
  const address =
    'Madiha Maison, Av. das Américas, 8585, Sala 490, Vogue Square, Barra da Tijuca, Rio de Janeiro - RJ, 22793-081';

  const directionsUrl =
    'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

  return (
    <section
      id="inicio"
      aria-labelledby="loja-ouro-perto-title"
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
            Madiha Maison • Barra da Tijuca
          </p>

          <h1
            id="loja-ouro-perto-title"
            className="
              mt-6
              max-w-[850px]
              font-serif
              text-[3.3rem]
              font-normal
              leading-[0.98]
              tracking-[-0.035em]
              text-[#765525]
              sm:text-[4.1rem]
              md:text-[4.9rem]
              lg:text-[5.6rem]
            "
          >
            Loja de Ouro
            <br />
            Perto de Mim
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
            Se você está na Barra da Tijuca ou região e procura um local seguro
            para avaliar ou vender ouro, a Madiha Maison atende no Vogue Square,
            na Av. das Américas.
          </p>

          <p
            className="
              mt-5
              max-w-[620px]
              text-[12px]
              font-light
              leading-7
              text-[#927D60]
              md:text-[13px]
            "
          >
            Avaliação técnica, atendimento reservado e referência comercial
            apresentada de forma clara antes de qualquer decisão de venda.
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
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
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
              Como chegar
            </a>

            <a
              href="#avaliacao-local"
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
              Avaliar meu ouro
            </a>
          </div>

          {/* ENDEREÇO */}
          <div
            className="
              mt-8
              inline-flex
              max-w-full
              items-start
              gap-3
              rounded-[1.4rem]
              border
              border-white/60
              bg-white/16
              px-5
              py-4
              backdrop-blur-xl
            "
          >
            <span
              aria-hidden="true"
              className="
                mt-[2px]
                text-[16px]
                text-[#8F6E3F]
              "
            >
              •
            </span>

            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#947244]
                "
              >
                Vogue Square
              </p>

              <p
                className="
                  mt-2
                  text-[11px]
                  font-light
                  leading-6
                  text-[#725D41]
                "
              >
                Av. das Américas, 8585 • Sala 490
                <br />
                Barra da Tijuca • Rio de Janeiro
              </p>
            </div>
          </div>

          {/* INDICADORES */}
          <div
            className="
              mt-10
              grid
              max-w-[760px]
              gap-3
              sm:grid-cols-3
            "
          >
            {[
              ['Localização', 'Vogue Square'],
              ['Avaliação', 'Técnica'],
              ['Pagamento', 'Após aceite'],
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

        {/* VISUAL */}
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
                  Loja de ouro na Barra da Tijuca
                </p>

                <h2
                  className="
                    mt-6
                    max-w-[450px]
                    font-serif
                    text-[2.9rem]
                    font-normal
                    leading-[1.02]
                    text-[#412907]
                    md:text-[3.8rem]
                  "
                >
                  Perto de você.
                  <br />
                  Com avaliação
                  <br />
                  técnica.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[440px]
                    text-[12px]
                    font-light
                    leading-7
                    text-[#4E3515]/80
                  "
                >
                  Atendimento no Vogue Square para avaliação de ouro, joias,
                  lingotes e outros materiais, com processo claro e ambiente
                  reservado.
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
                      Localização
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
                      Av. das Américas
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
                      Atendimento
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
                      Sala reservada
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
                    Antes de vender
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
                    Peso, teor e características da peça são considerados antes
                    da apresentação da referência comercial.
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
                w-[250px]
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
                Vogue Square
                <br />
                Sala 490
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}