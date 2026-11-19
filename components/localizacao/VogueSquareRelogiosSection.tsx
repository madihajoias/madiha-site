'use client';

import {
  ArrowUpRight,
  BadgeCheck,
  Crown,
  ShieldCheck,
  Sparkles,
  Watch,
} from 'lucide-react';

export default function VogueSquareRelogiosSection() {
  return (
    <>
      <section
        id="relogios-de-luxo"
        aria-labelledby="vogue-square-relogios-title"
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
            vogue-relogios-halo
            pointer-events-none
            absolute
            left-1/2
            top-[48%]
            h-[560px]
            w-[560px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A87A]/8
            blur-[130px]
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
          {/* ================================
              TEXTO
          ================================= */}
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
              <Watch
                size={14}
                strokeWidth={1.3}
                className="
                  vogue-relogios-watch
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
                Relógios de Luxo • Vogue Square
              </p>
            </div>

            <h2
              id="vogue-square-relogios-title"
              className="
                mt-5
                max-w-[700px]
                text-[#4F1720]
              "
            >
              Relógios de luxo na Barra da Tijuca
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
              A Madiha Maison recebe relógios de marcas reconhecidas para
              análise de referência, movimento, materiais, originalidade,
              conservação, documentação e demais características da peça.
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
              O atendimento no Vogue Square permite avaliar peças atuais,
              usadas, vintage e relógios em ouro em um ambiente reservado.
            </p>

            {/* DESTAQUE */}
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
                  <Crown
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
                    Alta relojoaria
                  </p>

                  <p
                    className="
                      mt-3
                      font-serif
                      text-[21px]
                      leading-tight
                      text-[#4F1720]

                      md:text-[23px]
                    "
                  >
                    Marca e referência são apenas o começo da análise.
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
                    Movimento, materiais, originalidade, conservação e
                    documentação ajudam a compreender melhor cada relógio.
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
                href="/relogios/relogios-de-luxo/"
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
                Conhecer relógios de luxo

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
                href="/relogios/compra-de-relogios/"
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
                Vender meu relógio

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

          {/* ================================
              VISUAL
          ================================= */}
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
                vogue-relogios-main-card
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
                  vogue-relogios-card-light
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
                    vogue-relogios-icon-wrap
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      vogue-relogios-ring
                      absolute
                      inset-0
                      rounded-full
                      border
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      vogue-relogios-ring-secondary
                      absolute
                      inset-[6px]
                      rounded-full
                      border
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      vogue-relogios-icon-bg
                      absolute
                      inset-[4px]
                      rounded-full
                    "
                  />

                  <Watch
                    size={27}
                    strokeWidth={1.15}
                    className="
                      vogue-relogios-main-icon
                      relative
                      z-10
                    "
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
                  Avaliação individual
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[520px]
                    text-[#4F1720]
                  "
                >
                  Cada relógio possui uma combinação própria de características.
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
                  Modelo, referência, calibre, materiais, época, originalidade,
                  acessórios e estado de conservação podem fazer diferença na
                  leitura da peça.
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
              <BadgeCheck
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
                Marca e referência
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
                Uma mesma maison pode reunir referências muito diferentes entre
                si.
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
              <Watch
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
                Movimento
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
                Calibre, construção e funcionamento ajudam a identificar a peça
                em seu contexto.
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
                Conservação
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
                Uso, desgaste, intervenções e condição geral fazem parte da
                análise.
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
              <Crown
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
                Relógios em ouro
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
                Relógios de marcas reconhecidas em ouro podem ser analisados
                mesmo em diferentes estados de conservação.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .vogue-relogios-halo {
          animation: vogueRelogiosHalo 7s ease-in-out infinite;
        }

        @keyframes vogueRelogiosHalo {
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

        .vogue-relogios-watch {
          animation: vogueRelogiosWatch 2.5s ease-in-out infinite;
        }

        @keyframes vogueRelogiosWatch {
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

        .vogue-relogios-card-light {
          animation: vogueRelogiosCardLight 5.5s ease-in-out infinite;
        }

        @keyframes vogueRelogiosCardLight {
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

        .vogue-relogios-ring {
          border-color: rgba(161, 125, 79, 0.42);
          animation: vogueRelogiosRing 2.4s ease-in-out infinite;
        }

        .vogue-relogios-ring-secondary {
          border-color: rgba(199, 168, 122, 0.26);
          animation: vogueRelogiosRingSecondary 2.4s ease-in-out infinite;
        }

        .vogue-relogios-icon-bg {
          background: rgba(199, 168, 122, 0.13);
          animation: vogueRelogiosIconBackground 2.4s ease-in-out infinite;
        }

        .vogue-relogios-main-icon {
          color: #a17d4f;
          animation: vogueRelogiosMainIcon 2.4s ease-in-out infinite;
        }

        @keyframes vogueRelogiosRing {
          0%,
          100% {
            transform: scale(1);
            border-color: rgba(161, 125, 79, 0.42);
            box-shadow: 0 0 0 0 rgba(199, 168, 122, 0);
          }

          50% {
            transform: scale(1.16);
            border-color: rgba(90, 16, 23, 0.45);
            box-shadow: 0 0 0 8px rgba(199, 168, 122, 0.045);
          }
        }

        @keyframes vogueRelogiosRingSecondary {
          0%,
          100% {
            transform: scale(1);
            border-color: rgba(199, 168, 122, 0.26);
          }

          50% {
            transform: scale(1.07);
            border-color: rgba(161, 125, 79, 0.5);
          }
        }

        @keyframes vogueRelogiosIconBackground {
          0%,
          100% {
            background: rgba(199, 168, 122, 0.13);
          }

          50% {
            background: rgba(199, 168, 122, 0.23);
          }
        }

        @keyframes vogueRelogiosMainIcon {
          0%,
          100% {
            color: #a17d4f;
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(161, 125, 79, 0));
          }

          50% {
            color: #5a1017;
            transform: scale(1.08);
            filter: drop-shadow(0 0 9px rgba(199, 168, 122, 0.35));
          }
        }
      `}</style>
    </>
  );
}