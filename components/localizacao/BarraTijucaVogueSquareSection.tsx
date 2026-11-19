'use client';

import {
  ArrowUpRight,
  Building2,
  MapPin,
  Navigation,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function BarraTijucaVogueSquareSection() {
  return (
    <>
      <section
        id="vogue-square"
        aria-labelledby="barra-tijuca-vogue-title"
        className="
          relative
          overflow-hidden
          bg-[#4F1720]
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
            bg-[radial-gradient(circle_at_18%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(122,22,34,0.62),transparent_34%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            barra-vogue-halo
            pointer-events-none
            absolute
            right-[4%]
            top-[18%]
            h-[540px]
            w-[540px]
            rounded-full
            bg-[#C7A87A]/9
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

            lg:grid-cols-[0.9fr_1.1fr]
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
                border-[#C7A87A]/20
                bg-white/[0.045]
                px-4
                py-3
                backdrop-blur-xl
              "
            >
              <Building2
                size={14}
                strokeWidth={1.3}
                className="
                  barra-vogue-building
                  text-[#D6BB8B]
                "
              />

              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#D6BB8B]
                "
              >
                Madiha Maison • Vogue Square
              </p>
            </div>

            <h2
              id="barra-tijuca-vogue-title"
              className="
                mt-6
                max-w-[680px]
                text-[#F7F3EF]
              "
            >
              Atendimento da Madiha Maison no Vogue Square
            </h2>

            <p
              className="
                mt-7
                max-w-[620px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]

                md:text-[15px]
              "
            >
              Na Barra da Tijuca, o atendimento presencial da Madiha Maison
              acontece no Vogue Square, na Av. das Américas.
            </p>

            <p
              className="
                mt-5
                max-w-[600px]
                text-[12px]
                font-light
                leading-7
                text-[#C8B8B6]

                md:text-[13px]
              "
            >
              O espaço reúne atendimento para ouro, joias, diamantes e relógios
              de luxo em um único endereço, com análise individual e ambiente
              reservado.
            </p>

            {/* ENDEREÇO */}
            <div
              className="
                relative
                mt-9
                overflow-hidden
                rounded-[1.8rem]
                border
                border-[#C7A87A]/28
                bg-[#C7A87A]/9
                p-6
                backdrop-blur-xl

                md:p-7
              "
            >
              <div
                aria-hidden="true"
                className="
                  barra-vogue-breath
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[#7A1622]
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  items-start
                  gap-4
                "
              >
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
                    bg-[#C7A87A]/9
                  "
                >
                  <MapPin
                    size={20}
                    strokeWidth={1.2}
                    className="text-[#D6BB8B]"
                  />
                </div>

                <div>
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
                      mt-3
                      font-serif
                      text-[22px]
                      leading-tight
                      text-[#F7F3EF]
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
                  border
                  border-[#C7A87A]
                  bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                  px-8
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#4F1720]
                  transition-all
                  duration-300

                  hover:-translate-y-1
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
                  border-white/15
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

                  hover:-translate-y-1
                  hover:border-[#C7A87A]/38
                  hover:bg-white/[0.07]
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
                border-[#C7A87A]/24
                bg-white/[0.05]
                p-7
                shadow-[0_28px_75px_rgba(20,5,8,0.16)]
                backdrop-blur-xl

                sm:col-span-2

                md:p-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  barra-vogue-card-light
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

              <div className="relative z-10">
                <div
                  className="
                    barra-vogue-icon
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
                  <Building2
                    size={27}
                    strokeWidth={1.15}
                    className="text-[#D6BB8B]"
                  />
                </div>

                <p
                  className="
                    mt-8
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#D6BB8B]
                  "
                >
                  Madiha Maison na Barra
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[540px]
                    text-[#F7F3EF]
                  "
                >
                  Um ponto de atendimento para diferentes categorias de peças.
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[650px]
                    text-[12px]
                    font-light
                    leading-7
                    text-[#D3C3C0]

                    md:text-[13px]
                  "
                >
                  A presença no Vogue Square concentra o atendimento da Madiha
                  Maison na Barra da Tijuca para joias, ouro, diamantes e
                  relógios.
                </p>
              </div>
            </article>

            {/* CARD 1 */}
            <article
              className="
                group
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.045]
                p-7
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#C7A87A]/30
              "
            >
              <MapPin
                size={22}
                strokeWidth={1.2}
                className="text-[#D6BB8B]"
              />

              <p
                className="
                  mt-6
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#F7F3EF]
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
                  text-[#D3C3C0]
                "
              >
                Localização em um dos principais eixos da Barra da Tijuca.
              </p>
            </article>

            {/* CARD 2 */}
            <article
              className="
                group
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.045]
                p-7
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#C7A87A]/30
              "
            >
              <ShieldCheck
                size={22}
                strokeWidth={1.2}
                className="text-[#D6BB8B]"
              />

              <p
                className="
                  mt-6
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#F7F3EF]
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
                  text-[#D3C3C0]
                "
              >
                Ambiente apropriado para apresentação e análise de peças
                especiais.
              </p>
            </article>

            {/* CARD 3 */}
            <article
              className="
                group
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.045]
                p-7
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#C7A87A]/30
              "
            >
              <Navigation
                size={22}
                strokeWidth={1.2}
                className="text-[#D6BB8B]"
              />

              <p
                className="
                  mt-6
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#F7F3EF]
                "
              >
                Fácil localização
              </p>

              <p
                className="
                  mt-4
                  text-[11px]
                  font-light
                  leading-6
                  text-[#D3C3C0]
                "
              >
                O endereço pode ser localizado diretamente pelo Google Maps.
              </p>
            </article>

            {/* CARD 4 */}
            <article
              className="
                group
                rounded-[2rem]
                border
                border-[#C7A87A]/24
                bg-[#C7A87A]/9
                p-7
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:bg-[#C7A87A]/13
              "
            >
              <Sparkles
                size={22}
                strokeWidth={1.2}
                className="text-[#D6BB8B]"
              />

              <p
                className="
                  mt-6
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#F7F3EF]
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
                  text-[#D3C3C0]
                "
              >
                A Madiha Maison está localizada na sala 490 do Vogue Square.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .barra-vogue-halo {
          animation: barraVogueHalo 7s ease-in-out infinite;
        }

        @keyframes barraVogueHalo {
          0%,
          100% {
            opacity: 0.42;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.82;
            transform: scale(1.08);
          }
        }

        .barra-vogue-building {
          animation: barraVogueBuilding 2.5s ease-in-out infinite;
        }

        @keyframes barraVogueBuilding {
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

        .barra-vogue-breath {
          opacity: 0;
          animation: barraVogueBreath 6.5s ease-in-out infinite;
        }

        @keyframes barraVogueBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.22;
          }
        }

        .barra-vogue-card-light {
          animation: barraVogueCardLight 5.5s ease-in-out infinite;
        }

        @keyframes barraVogueCardLight {
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

        .barra-vogue-icon {
          animation: barraVogueIcon 2.8s ease-in-out infinite;
        }

        @keyframes barraVogueIcon {
          0%,
          100% {
            border-color: rgba(199, 168, 122, 0.28);
            box-shadow: 0 0 0 rgba(214, 187, 139, 0);
          }

          50% {
            border-color: rgba(247, 243, 239, 0.55);
            box-shadow: 0 0 28px rgba(214, 187, 139, 0.12);
          }
        }
      `}</style>
    </>
  );
}