'use client';

import {
  MapPin,
  Navigation,
  Route,
  Sparkles,
} from 'lucide-react';

export default function BarraTijucaMapaSection() {
  return (
    <>
      <section
        id="mapa"
        aria-labelledby="barra-tijuca-mapa-title"
        className="
          relative
          overflow-hidden
          bg-[#F7F3EF]
          px-5
          py-24

          sm:px-6

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
            bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(90,16,23,0.06),transparent_34%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            barra-mapa-halo
            pointer-events-none
            absolute
            left-1/2
            top-[48%]
            h-[580px]
            w-[580px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A87A]/8
            blur-[135px]
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
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#C7A87A]/24
                  bg-[#EFE4D1]/70
                  px-4
                  py-3
                "
              >
                <MapPin
                  size={14}
                  strokeWidth={1.3}
                  className="
                    barra-mapa-pin
                    text-[#A17D4F]
                  "
                />

                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#A17D4F]
                  "
                >
                  Localização na Barra da Tijuca
                </p>
              </div>

              <h2
                id="barra-tijuca-mapa-title"
                className="
                  mt-5
                  max-w-[720px]
                  text-[#4F1720]
                "
              >
                Encontre a Madiha Maison na Barra da Tijuca
              </h2>
            </div>

            <p
              className="
                max-w-[670px]
                text-[14px]
                font-light
                leading-8
                text-[#725D58]

                md:text-[15px]
              "
            >
              O atendimento presencial da Madiha Maison acontece no Vogue
              Square, na Av. das Américas, com acesso por uma das principais
              vias da Barra da Tijuca.
            </p>
          </div>

          {/* MAPA + INFORMAÇÕES */}
          <div
            className="
              mt-16
              grid
              gap-5

              lg:grid-cols-[1.35fr_0.65fr]
              lg:items-stretch
            "
          >
            {/* MAPA */}
            <div
              className="
                relative
                min-h-[430px]
                overflow-hidden
                rounded-[2.3rem]
                border
                border-[#5A1017]/8
                bg-white/60
                shadow-[0_25px_70px_rgba(63,38,26,0.08)]
                backdrop-blur-xl

                sm:min-h-[500px]

                lg:min-h-[540px]
              "
            >
              <iframe
                title="Mapa da Madiha Maison na Barra da Tijuca"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5923754482!2d-43.39869498874111!3d-23.00201224119506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbf2521f3707%3A0xa54921f2f3d36fd8!2sMadiha%20Maison!5e0!3m2!1spt-BR!2sbr!4v1791309377339!5m2!1spt-BR!2sbr"
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
            </div>

            {/* INFORMAÇÕES */}
            <div
              className="
                flex
                flex-col
                gap-4
              "
            >
              {/* CARD PRINCIPAL */}
              <article
                className="
                  barra-mapa-main-card
                  relative
                  flex-1
                  overflow-hidden
                  rounded-[2.2rem]
                  border
                  border-[#C7A87A]/28
                  bg-[#4F1720]
                  p-7
                  shadow-[0_25px_70px_rgba(63,38,26,0.12)]

                  md:p-8
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    barra-mapa-card-light
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-60
                    w-60
                    rounded-full
                    bg-[#C7A87A]/14
                    blur-[65px]
                  "
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div
                    className="
                      barra-mapa-icon
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/28
                      bg-[#C7A87A]/9
                    "
                  >
                    <Route
                      size={27}
                      strokeWidth={1.15}
                      className="text-[#D6BB8B]"
                    />
                  </div>

                  <p
                    className="
                      mt-7
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#D6BB8B]
                    "
                  >
                    Madiha Maison
                  </p>

                  <h3
                    className="
                      mt-4
                      text-[#F7F3EF]
                    "
                  >
                    Vogue Square
                  </h3>

                  <p
                    className="
                      mt-5
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
                    Barra da Tijuca
                    <br />
                    Rio de Janeiro - RJ
                    <br />
                    CEP 22793-081
                  </p>

                  <div className="mt-auto pt-8">
                    <a
                      href="https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        inline-flex
                        min-h-[52px]
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        border
                        border-[#C7A87A]
                        bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                        px-6
                        text-center
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#4F1720]
                        transition-all
                        duration-300

                        hover:-translate-y-1

                        sm:text-[9px]
                      "
                    >
                      Abrir no Google Maps

                      <Navigation
                        size={14}
                        strokeWidth={1.4}
                        className="
                          transition-transform
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </a>
                  </div>
                </div>
              </article>

              {/* CARD SECUNDÁRIO */}
              <article
                className="
                  rounded-[1.8rem]
                  border
                  border-[#C7A87A]/28
                  bg-[#EFE4D1]/65
                  p-6
                  backdrop-blur-xl
                "
              >
                <div className="flex items-start gap-4">
                  <Sparkles
                    size={19}
                    strokeWidth={1.2}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#A17D4F]
                    "
                  />

                  <div>
                    <p
                      className="
                        font-serif
                        text-[18px]
                        leading-tight
                        text-[#4F1720]
                      "
                    >
                      Atendimento presencial
                    </p>

                    <p
                      className="
                        mt-3
                        text-[11px]
                        font-light
                        leading-6
                        text-[#725D58]
                      "
                    >
                      Ouro, joias, diamantes e relógios de luxo podem ser
                      apresentados para análise no endereço da Madiha Maison.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* LINK PARA PÁGINA ESPECÍFICA */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-5
              rounded-[1.8rem]
              border
              border-[#5A1017]/8
              bg-white/55
              p-6
              backdrop-blur-xl

              md:flex-row
              md:items-center
              md:justify-between
              md:px-8
            "
          >
            <div className="flex items-start gap-4">
              <MapPin
                size={19}
                strokeWidth={1.2}
                className="
                  mt-0.5
                  shrink-0
                  text-[#A17D4F]
                "
              />

              <div>
                <p
                  className="
                    font-serif
                    text-[18px]
                    leading-tight
                    text-[#4F1720]
                  "
                >
                  Quer conhecer o endereço em mais detalhes?
                </p>

                <p
                  className="
                    mt-2
                    max-w-[700px]
                    text-[11px]
                    font-light
                    leading-6
                    text-[#725D58]
                  "
                >
                  Veja a página específica da Madiha Maison no Vogue Square,
                  com localização, serviços e informações sobre o atendimento.
                </p>
              </div>
            </div>

            <a
              href="/localizacao/vogue-square/"
              className="
                inline-flex
                min-h-[50px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#C7A87A]
                px-7
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#4F1720]
                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#EFE4D1]

                md:text-[9px]
              "
            >
              Ver Vogue Square
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .barra-mapa-halo {
          animation: barraMapaHalo 7s ease-in-out infinite;
        }

        @keyframes barraMapaHalo {
          0%,
          100% {
            opacity: 0.42;
            transform: translate(-50%, -50%) scale(0.94);
          }

          50% {
            opacity: 0.82;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        .barra-mapa-pin {
          animation: barraMapaPin 2.5s ease-in-out infinite;
        }

        @keyframes barraMapaPin {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        .barra-mapa-card-light {
          animation: barraMapaCardLight 5.5s ease-in-out infinite;
        }

        @keyframes barraMapaCardLight {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.86;
            transform: scale(1.08);
          }
        }

        .barra-mapa-icon {
          animation: barraMapaIcon 2.8s ease-in-out infinite;
        }

        @keyframes barraMapaIcon {
          0%,
          100% {
            border-color: rgba(199, 168, 122, 0.28);
            box-shadow: 0 0 0 rgba(199, 168, 122, 0);
          }

          50% {
            border-color: rgba(214, 187, 139, 0.58);
            box-shadow: 0 0 28px rgba(199, 168, 122, 0.15);
          }
        }
      `}</style>
    </>
  );
}