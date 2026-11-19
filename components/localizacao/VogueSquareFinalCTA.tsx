'use client';

import {
  ArrowUpRight,
  Building2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function VogueSquareFinalCTA() {
  return (
    <>
      <section
        id="cta-final"
        aria-labelledby="vogue-square-final-title"
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
            bg-[radial-gradient(circle_at_18%_20%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(90,16,23,0.06),transparent_34%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            vogue-final-halo
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[620px]
            w-[620px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A87A]/9
            blur-[140px]
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
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.6rem]
              border
              border-[#C7A87A]/26
              bg-[#4F1720]
              px-7
              py-10
              shadow-[0_30px_90px_rgba(63,38,26,0.15)]

              md:px-10
              md:py-12

              lg:px-14
              lg:py-14
            "
          >
            {/* RESPIRAÇÃO */}
            <div
              aria-hidden="true"
              className="
                vogue-final-breath
                pointer-events-none
                absolute
                inset-0
                bg-[#7A1622]
              "
            />

            {/* LUZ */}
            <div
              aria-hidden="true"
              className="
                vogue-final-light
                pointer-events-none
                absolute
                -right-28
                -top-28
                h-72
                w-72
                rounded-full
                bg-[#C7A87A]/15
                blur-[75px]
              "
            />

            <div
              className="
                relative
                z-10
                grid
                gap-10

                lg:grid-cols-[1fr_0.85fr]
                lg:items-center
                lg:gap-16
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
                  <Sparkles
                    size={14}
                    strokeWidth={1.3}
                    className="
                      vogue-final-sparkle
                      text-[#D6BB8B]
                    "
                  />

                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.26em]
                      text-[#D6BB8B]
                    "
                  >
                    Madiha Maison • Vogue Square
                  </p>
                </div>

                <h2
                  id="vogue-square-final-title"
                  className="
                    mt-6
                    max-w-[720px]
                    text-[#F7F3EF]
                  "
                >
                  Sua peça merece uma análise feita de perto.
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[660px]
                    text-[13px]
                    font-light
                    leading-8
                    text-[#D3C3C0]

                    md:text-[14px]
                  "
                >
                  Traga sua joia, peça em ouro, diamante ou relógio de luxo para
                  um atendimento presencial na Madiha Maison, no Vogue Square,
                  Barra da Tijuca.
                </p>

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
                    Como chegar

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
                    href="#servicos"
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
                    Ver serviços

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
                </div>
              </div>

              {/* CARDS LATERAIS */}
              <div
                className="
                  grid
                  gap-4

                  sm:grid-cols-3

                  lg:grid-cols-1
                "
              >
                <div
                  className="
                    group
                    rounded-[1.8rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[#C7A87A]/30
                  "
                >
                  <Building2
                    size={21}
                    strokeWidth={1.2}
                    className="text-[#D6BB8B]"
                  />

                  <p
                    className="
                      mt-5
                      font-serif
                      text-[18px]
                      text-[#F7F3EF]
                    "
                  >
                    Vogue Square
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-light
                      leading-5
                      text-[#CDBDBA]
                    "
                  >
                    Av. das Américas, 8585 • Sala 490.
                  </p>
                </div>

                <div
                  className="
                    group
                    rounded-[1.8rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[#C7A87A]/30
                  "
                >
                  <MapPin
                    size={21}
                    strokeWidth={1.2}
                    className="text-[#D6BB8B]"
                  />

                  <p
                    className="
                      mt-5
                      font-serif
                      text-[18px]
                      text-[#F7F3EF]
                    "
                  >
                    Barra da Tijuca
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-light
                      leading-5
                      text-[#CDBDBA]
                    "
                  >
                    Atendimento presencial no Rio de Janeiro.
                  </p>
                </div>

                <div
                  className="
                    group
                    rounded-[1.8rem]
                    border
                    border-[#C7A87A]/24
                    bg-[#C7A87A]/9
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:bg-[#C7A87A]/13
                  "
                >
                  <ShieldCheck
                    size={21}
                    strokeWidth={1.2}
                    className="text-[#D6BB8B]"
                  />

                  <p
                    className="
                      mt-5
                      font-serif
                      text-[18px]
                      text-[#F7F3EF]
                    "
                  >
                    Atendimento reservado
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-light
                      leading-5
                      text-[#CDBDBA]
                    "
                  >
                    Análise individual de peças especiais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .vogue-final-halo {
          animation: vogueFinalHalo 7s ease-in-out infinite;
        }

        @keyframes vogueFinalHalo {
          0%,
          100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(0.94);
          }

          50% {
            opacity: 0.82;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        .vogue-final-breath {
          opacity: 0;
          animation: vogueFinalBreath 6.5s ease-in-out infinite;
        }

        @keyframes vogueFinalBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.22;
          }
        }

        .vogue-final-light {
          animation: vogueFinalLight 5.5s ease-in-out infinite;
        }

        @keyframes vogueFinalLight {
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

        .vogue-final-sparkle {
          animation: vogueFinalSparkle 2.5s ease-in-out infinite;
        }

        @keyframes vogueFinalSparkle {
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
      `}</style>
    </>
  );
}