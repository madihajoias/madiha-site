'use client';

import {
  ArrowUpRight,
  BadgeCheck,
  Gem,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function BarraTijucaJoiasSection() {
  return (
    <>
      <section
        id="avaliacao-de-joias"
        aria-labelledby="barra-tijuca-joias-title"
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
            barra-joias-halo
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
              <Sparkles
                size={14}
                strokeWidth={1.3}
                className="
                  barra-joias-sparkle
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
                Avaliação de Joias • Barra da Tijuca
              </p>
            </div>

            <h2
              id="barra-tijuca-joias-title"
              className="
                mt-5
                max-w-[700px]
                text-[#4F1720]
              "
            >
              Avaliação de joias na Barra da Tijuca
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
              Joias podem reunir valor material, técnico, histórico e estético.
              Por isso, cada peça deve ser observada considerando sua composição
              e suas características próprias.
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
              Metais, pedras, assinatura, acabamento, conservação, época e
              construção podem contribuir para uma análise mais completa da
              joia.
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
                  <Gem
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
                    Leitura da peça
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
                    Uma joia deve ser compreendida além do peso do metal.
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
                    Pedras, assinatura, design, estado de conservação e
                    características de fabricação também podem fazer diferença.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/joias/avaliacao-de-joias/"
              className="
                group
                mt-8
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
              Conhecer avaliação de joias

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
                barra-joias-main-card
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
                  barra-joias-card-light
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
                    barra-joias-icon
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
                  <SearchCheck
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
                  Análise individual
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[520px]
                    text-[#4F1720]
                  "
                >
                  Cada detalhe pode ajudar a compreender melhor a joia.
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
                  A combinação entre material, gemas, design, acabamento,
                  procedência e conservação pode revelar informações importantes
                  sobre a peça apresentada.
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
                Assinatura e procedência
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
                Marcas, características de fabricação e documentação podem
                ajudar a contextualizar uma peça.
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
              <Gem
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
                Diamantes e gemas
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
                Pedras presentes na joia podem exigir uma leitura própria além
                da análise do metal.
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
                Estado da peça
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
                Conservação, sinais de uso, intervenções e alterações também
                podem fazer parte da análise.
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
                Design e acabamento
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
                Construção, proporções e qualidade de acabamento ajudam a
                completar a leitura da joia.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .barra-joias-halo {
          animation: barraJoiasHalo 7s ease-in-out infinite;
        }

        @keyframes barraJoiasHalo {
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

        .barra-joias-sparkle {
          animation: barraJoiasSparkle 2.5s ease-in-out infinite;
        }

        @keyframes barraJoiasSparkle {
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

        .barra-joias-card-light {
          animation: barraJoiasCardLight 5.5s ease-in-out infinite;
        }

        @keyframes barraJoiasCardLight {
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

        .barra-joias-icon {
          animation: barraJoiasIcon 2.8s ease-in-out infinite;
        }

        @keyframes barraJoiasIcon {
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