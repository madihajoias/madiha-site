'use client';

import {
  ArrowUpRight,
  Building2,
  MapPin,
  Navigation,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function RioJaneiroVogueSquareSection() {
  return (
    <>
      <section
        id="vogue-square"
        aria-labelledby="rio-janeiro-vogue-title"
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
            rio-vogue-halo
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
            grid
            w-full
            max-w-[90rem]
            gap-14

            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* TEXTO */}
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
              <Building2
                size={14}
                strokeWidth={1.3}
                className="
                  rio-vogue-building
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
                Vogue Square • Barra da Tijuca
              </p>
            </div>

            <h2
              id="rio-janeiro-vogue-title"
              className="
                mt-5
                max-w-[700px]
                text-[#4F1720]
              "
            >
              Madiha Maison no Vogue Square
            </h2>

            <p
              className="
                mt-7
                max-w-[640px]
                text-[14px]
                font-light
                leading-8
                text-[#725D58]

                md:text-[15px]
              "
            >
              O Vogue Square é o endereço presencial da Madiha Maison na Barra
              da Tijuca, reunindo atendimento para ouro, joias, diamantes e
              relógios de luxo.
            </p>

            <p
              className="
                mt-5
                max-w-[600px]
                text-[12px]
                font-light
                leading-7
                text-[#7A6762]

                md:text-[13px]
              "
            >
              A localização permite atendimento individual em um ambiente
              reservado, com acesso pela Av. das Américas.
            </p>

            {/* ENDEREÇO */}
            <div
              className="
                mt-9
                overflow-hidden
                rounded-[1.8rem]
                border
                border-[#C7A87A]/28
                bg-white/60
                p-6
                shadow-[0_18px_50px_rgba(63,38,26,0.06)]
                backdrop-blur-xl

                md:p-7
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C7A87A]/28
                    bg-[#EFE4D1]
                  "
                >
                  <MapPin
                    size={20}
                    strokeWidth={1.2}
                    className="text-[#A17D4F]"
                  />
                </div>

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
                    Endereço Madiha Maison
                  </p>

                  <p
                    className="
                      mt-3
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
                      mt-4
                      text-[12px]
                      font-light
                      leading-7
                      text-[#725D58]

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
                </div>
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
                href="/localizacao/vogue-square/"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#4F1720]
                  px-8
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#F7F3EF]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#5A1017]
                "
              >
                Conhecer Vogue Square

                <ArrowUpRight
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

              <a
                href="https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#C7A87A]
                  bg-[#EFE4D1]/75
                  px-8
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#4F1720]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#EFE4D1]
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

          {/* VISUAL */}
          <div
            className="
              relative
              grid
              gap-4

              sm:grid-cols-2
            "
          >
            {/* CARD PRINCIPAL */}
            <article
              className="
                group
                relative
                overflow-hidden
                rounded-[2.2rem]
                border
                border-[#5A1017]/8
                bg-white/60
                p-7
                shadow-[0_22px_65px_rgba(63,38,26,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]
                backdrop-blur-xl

                sm:col-span-2

                md:p-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  rio-vogue-card-light
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-60
                  w-60
                  rounded-full
                  bg-[#C7A87A]/11
                  blur-[65px]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    rio-vogue-icon
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C7A87A]/28
                    bg-[#EFE4D1]
                  "
                >
                  <Building2
                    size={27}
                    strokeWidth={1.15}
                    className="text-[#A17D4F]"
                  />
                </div>

                <p
                  className="
                    mt-8
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#A17D4F]
                  "
                >
                  Endereço no Rio de Janeiro
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[540px]
                    text-[#4F1720]
                  "
                >
                  Um endereço presencial para diferentes especialidades.
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[650px]
                    text-[12px]
                    font-light
                    leading-7
                    text-[#725D58]

                    md:text-[13px]
                  "
                >
                  O Vogue Square funciona como ponto físico da Madiha Maison para
                  clientes que desejam apresentar peças para análise presencial
                  no Rio de Janeiro.
                </p>
              </div>
            </article>

            {/* CARD 1 */}
            <article
              className="
                group
                rounded-[2rem]
                border
                border-[#5A1017]/8
                bg-white/55
                p-7
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#C7A87A]/34
              "
            >
              <MapPin
                size={22}
                strokeWidth={1.2}
                className="text-[#A17D4F]"
              />

              <p
                className="
                  mt-6
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#4F1720]
                "
              >
                Barra da Tijuca
              </p>

              <p
                className="
                  mt-4
                  text-[11px]
                  font-light
                  leading-6
                  text-[#725D58]
                "
              >
                A unidade está localizada na Barra da Tijuca, na Zona Oeste do
                Rio de Janeiro.
              </p>
            </article>

            {/* CARD 2 */}
            <article
              className="
                group
                rounded-[2rem]
                border
                border-[#5A1017]/8
                bg-white/55
                p-7
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#C7A87A]/34
              "
            >
              <Navigation
                size={22}
                strokeWidth={1.2}
                className="text-[#A17D4F]"
              />

              <p
                className="
                  mt-6
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#4F1720]
                "
              >
                Av. das Américas
              </p>

              <p
                className="
                  mt-4
                  text-[11px]
                  font-light
                  leading-6
                  text-[#725D58]
                "
              >
                O Vogue Square está localizado em um dos principais eixos da
                região.
              </p>
            </article>

            {/* CARD 3 */}
            <article
              className="
                group
                rounded-[2rem]
                border
                border-[#5A1017]/8
                bg-white/55
                p-7
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#C7A87A]/34
              "
            >
              <ShieldCheck
                size={22}
                strokeWidth={1.2}
                className="text-[#A17D4F]"
              />

              <p
                className="
                  mt-6
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#4F1720]
                "
              >
                Atendimento reservado
              </p>

              <p
                className="
                  mt-4
                  text-[11px]
                  font-light
                  leading-6
                  text-[#725D58]
                "
              >
                O atendimento presencial permite uma análise individual em
                ambiente apropriado.
              </p>
            </article>

            {/* CARD 4 */}
            <article
              className="
                group
                rounded-[2rem]
                border
                border-[#C7A87A]/30
                bg-[#EFE4D1]/65
                p-7
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:bg-[#EFE4D1]
              "
            >
              <Sparkles
                size={22}
                strokeWidth={1.2}
                className="text-[#A17D4F]"
              />

              <p
                className="
                  mt-6
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#4F1720]
                "
              >
                Sala 490
              </p>

              <p
                className="
                  mt-4
                  text-[11px]
                  font-light
                  leading-6
                  text-[#725D58]
                "
              >
                A Madiha Maison está localizada na sala 490 do Vogue Square.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .rio-vogue-halo {
          animation: rioVogueHalo 7s ease-in-out infinite;
        }

        @keyframes rioVogueHalo {
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

        .rio-vogue-building {
          animation: rioVogueBuilding 2.5s ease-in-out infinite;
        }

        @keyframes rioVogueBuilding {
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

        .rio-vogue-card-light {
          animation: rioVogueCardLight 5.5s ease-in-out infinite;
        }

        @keyframes rioVogueCardLight {
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

        .rio-vogue-icon {
          animation: rioVogueIcon 2.8s ease-in-out infinite;
        }

        @keyframes rioVogueIcon {
          0%,
          100% {
            border-color: rgba(199, 168, 122, 0.28);
            box-shadow: 0 0 0 rgba(199, 168, 122, 0);
          }

          50% {
            border-color: rgba(161, 125, 79, 0.5);
            box-shadow: 0 0 28px rgba(199, 168, 122, 0.16);
          }
        }
      `}</style>
    </>
  );
}