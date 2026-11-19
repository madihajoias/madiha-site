export default function AvaliacaoRelogiosLocation() {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-relogios-title"
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
          bg-[radial-gradient(circle_at_18%_18%,rgba(122,22,34,0.75),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(199,168,122,0.13),transparent_30%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#3E1118_100%)]
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
          grid
          w-full
          max-w-[90rem]
          gap-14
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* ESQUERDA */}
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
            Madiha Maison • Vogue Square
          </p>

          <h2
            id="localizacao-relogios-title"
            className="
              mt-5
              max-w-[650px]
              text-[#F7F3EF]
            "
          >
            Avaliação de Relógios na Barra da Tijuca
          </h2>

          <p
            className="
              mt-7
              max-w-[610px]
              text-[14px]
              font-light
              leading-8
              text-[#D3C3C0]
              md:text-[15px]
            "
          >
            O atendimento é realizado no Vogue Square, na Barra da Tijuca, em
            ambiente reservado para avaliação individual de relógios de luxo,
            peças de coleção e relógios vintage.
          </p>

          <p
            className="
              mt-5
              max-w-[580px]
              text-[12px]
              font-light
              leading-7
              text-[#C8B8B6]
              md:text-[13px]
            "
          >
            A análise presencial permite observar detalhes de conservação,
            componentes, funcionamento e características que não podem ser
            avaliadas adequadamente apenas por fotografias.
          </p>

          {/* ENDEREÇO */}
          <div
            className="
              mt-9
              rounded-[2rem]
              border
              border-[#C7A87A]/18
              bg-white/[0.045]
              px-7
              py-7
              backdrop-blur-xl
              md:px-8
              md:py-8
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#D6BB8B]
              "
            >
              Endereço
            </p>

            <p
              className="
                mt-4
                font-serif
                text-[21px]
                leading-relaxed
                text-[#F7F3EF]
              "
            >
              Vogue Square
            </p>

            <p
              className="
                mt-2
                text-[12px]
                font-light
                leading-7
                text-[#D3C3C0]
                md:text-[13px]
              "
            >
              Av. das Américas, 8585
              <br />
              Sala 490
              <br />
              Barra da Tijuca • Rio de Janeiro
            </p>
          </div>

          {/* CTAS */}
          <div
            className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
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
              Como chegar
            </a>

            <a
              href="#faq-avaliacao-relogios"
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
              Tirar dúvidas
            </a>
          </div>
        </div>

        {/* DIREITA */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#C7A87A]/10
              blur-[90px]
            "
          />

          <div
            className="
              relative
              overflow-hidden
              rounded-[2.2rem]
              border
              border-white/10
              bg-white/[0.045]
              p-6
              shadow-[0_34px_90px_rgba(20,5,8,0.24),inset_0_1px_0_rgba(255,255,255,0.05)]
              backdrop-blur-2xl
              md:p-8
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
                Atendimento presencial
              </p>

              <h3
                className="
                  mt-6
                  max-w-[500px]
                  text-[#F7F3EF]
                "
              >
                Um ambiente adequado para avaliar sua peça
              </h3>

              <p
                className="
                  mt-6
                  max-w-[480px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                "
              >
                O atendimento presencial facilita a identificação de detalhes
                importantes do relógio e permite uma análise mais completa do
                conjunto.
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
                    Local
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[19px]
                      leading-tight
                      text-[#F7F3EF]
                    "
                  >
                    Vogue Square
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
                    Atendimento
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[19px]
                      leading-tight
                      text-[#F7F3EF]
                    "
                  >
                    Sala reservada
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
                  Antes da visita
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
                  Caso possua caixa, certificado, cartão, nota fiscal, elos ou
                  outros acessórios relacionados ao relógio, eles podem ser
                  apresentados durante a avaliação.
                </p>
              </div>
            </div>
          </div>

          {/* CARD FLUTUANTE */}
          <div
            className="
              absolute
              -bottom-7
              right-4
              w-[225px]
              rounded-[1.5rem]
              border
              border-[#C7A87A]/22
              bg-[#F7F3EF]/96
              px-6
              py-5
              shadow-[0_18px_48px_rgba(20,5,8,0.22)]
              backdrop-blur-2xl
              md:-right-5
              md:w-[245px]
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
              Barra da Tijuca
            </p>

            <p
              className="
                mt-2
                font-serif
                text-[20px]
                leading-[1.05]
                text-[#4F1720]
              "
            >
              Vogue Square • Sala 490
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}