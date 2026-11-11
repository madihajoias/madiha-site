const address =
  'Madiha Maison, Av. das Américas, 8585, Sala 490, Vogue Square, Barra da Tijuca, Rio de Janeiro - RJ, 22793-081';

const encodedAddress =
  encodeURIComponent(address);

const mapUrl =
  `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

const directionsUrl =
  'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
  '5521993530012';

const whatsappMessage =
  'Olá, Madiha Maison! Gostaria de informações sobre avaliação e compra de joias.';

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

export default function CompraJoiasLocation() {
  return (
    <section
      id="localizacao"
      aria-labelledby="compra-joias-location-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
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
          bg-[radial-gradient(circle_at_14%_16%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(90,16,23,0.055),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[10%]
          top-[12%]
          h-[32vw]
          w-[32vw]
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
              Localização
            </p>

            <h2
              id="compra-joias-location-title"
              className="
                mt-6
                max-w-[760px]
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
              Atendimento no Vogue Square, na Barra da Tijuca.
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
                text-[#776B6C]
                md:text-[15px]
                md:leading-8
              "
            >
              A Madiha Maison realiza atendimento presencial para avaliação e
              compra de joias em um espaço reservado no Vogue Square, na Barra
              da Tijuca, Rio de Janeiro.
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
          {/* PAINEL DE ENDEREÇO */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#5A1017]/10
              bg-[#4F1720]
              p-8
              shadow-[0_30px_85px_rgba(55,20,26,0.16),inset_0_1px_0_rgba(255,255,255,0.04)]
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
                Madiha Maison
              </p>

              <h3
                className="
                  mt-6
                  max-w-[500px]
                  font-serif
                  text-[2.65rem]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  md:text-[3.4rem]
                "
              >
                Atendimento na Barra da Tijuca.
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
                Um endereço de fácil acesso para receber suas joias em ambiente
                reservado e adequado para avaliação presencial.
              </p>

              {/* ENDEREÇO EM DESTAQUE */}
              <div
                className="
                  mt-9
                  rounded-[1.7rem]
                  border
                  border-[#C7A87A]/24
                  bg-[#F7F3EF]/[0.085]
                  px-6
                  py-6
                  shadow-[0_16px_38px_rgba(20,5,8,0.12),inset_0_1px_0_rgba(255,255,255,0.045)]
                  backdrop-blur-xl
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
                  Endereço
                </p>

                <p
                  className="
                    mt-4
                    font-serif
                    text-[24px]
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  Av. das Américas, 8585
                </p>

                <div
                  className="
                    mt-5
                    space-y-1.5
                    text-[12px]
                    font-light
                    leading-6
                    text-[#E6DCD8]
                  "
                >
                  <p>
                    Sala 490 · Vogue Square
                  </p>

                  <p>
                    Barra da Tijuca · Rio de Janeiro – RJ
                  </p>

                  <p>
                    CEP 22793-081
                  </p>
                </div>
              </div>

              {/* INFORMAÇÕES */}
              <div
                className="
                  mt-4
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
                    Local
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Vogue Square
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
                    Região
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Barra da Tijuca
                  </p>
                </div>
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
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C7A87A]
                    bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                    px-7
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#4F1720]
                    shadow-[0_14px_34px_rgba(20,5,8,0.16),inset_0_1px_0_rgba(255,255,255,0.22)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >
                  Abrir no Google Maps
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.05]
                    px-7
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#F7F3EF]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#C7A87A]/45
                    hover:bg-white/[0.075]
                  "
                >
                  Falar com a Madiha
                </a>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div
            className="
              relative
              min-h-[560px]
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#5A1017]/10
              bg-[#EDE4DB]
              shadow-[0_28px_76px_rgba(54,30,30,0.10)]
              lg:min-h-full
            "
          >
            <iframe
              src={mapUrl}
              title="Mapa da Madiha Maison no Vogue Square"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="
                absolute
                inset-0
                h-full
                w-full
                border-0
              "
            />

            {/* IDENTIFICAÇÃO SOBRE O MAPA */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-5
                left-5
                right-5
                z-10
                rounded-[1.65rem]
                border
                border-white/50
                bg-[#F7F3EF]/95
                px-6
                py-5
                shadow-[0_18px_48px_rgba(30,16,18,0.16)]
                backdrop-blur-xl
                md:left-7
                md:right-auto
                md:w-[360px]
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
                Madiha Maison
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[22px]
                  leading-tight
                  text-[#4F1720]
                "
              >
                Vogue Square
              </p>

              <p
                className="
                  mt-3
                  text-[10px]
                  font-light
                  leading-5
                  text-[#776B6C]
                "
              >
                Av. das Américas, 8585 · Sala 490
                <br />
                Barra da Tijuca · Rio de Janeiro
              </p>
            </div>
          </div>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-12
            grid
            gap-6
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#5A1017]/10
            bg-[#FCFAF7]
            p-8
            shadow-[0_22px_60px_rgba(54,30,30,0.055),inset_0_1px_0_rgba(255,255,255,0.75)]
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
                tracking-[0.25em]
                text-[#A17D4F]
              "
            >
              Avaliação presencial
            </p>

            <h3
              className="
                mt-4
                max-w-[780px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#4F1720]
                md:text-[2.7rem]
              "
            >
              Traga suas joias para uma avaliação individual.
            </h3>

            <p
              className="
                mt-5
                max-w-[760px]
                text-[11px]
                font-light
                leading-6
                text-[#776B6C]
              "
            >
              Nossa equipe recebe suas peças no Vogue Square para uma análise
              presencial e apresentação da proposta de compra.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
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
              shadow-[0_14px_34px_rgba(54,30,30,0.10),inset_0_1px_0_rgba(255,255,255,0.22)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Solicitar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}