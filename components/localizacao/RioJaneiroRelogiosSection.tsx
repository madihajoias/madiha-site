'use client';

import {
  ArrowUpRight,
  BadgeCheck,
  Crown,
  ShieldCheck,
  Sparkles,
  Watch,
} from 'lucide-react';

export default function RioJaneiroRelogiosSection() {
  return (
    <>
      <section
        id="relogios-de-luxo"
        aria-labelledby="rio-janeiro-relogios-title"
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
            rio-relogios-halo
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
              <Watch
                size={14}
                strokeWidth={1.3}
                className="
                  rio-relogios-watch
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
                Relógios de Luxo • Rio de Janeiro
              </p>
            </div>

            <h2
              id="rio-janeiro-relogios-title"
              className="
                mt-5
                max-w-[700px]
                text-[#4F1720]
              "
            >
              Relógios de luxo no Rio de Janeiro
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
              A Madiha Maison oferece atendimento no Rio de Janeiro para
              análise de relógios de marcas reconhecidas, considerando
              referência, movimento, materiais, originalidade, conservação e
              documentação.
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
              Relógios contemporâneos, usados, vintage e peças em ouro podem
              exigir leituras diferentes conforme marca, modelo, configuração e
              estado de conservação.
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
                    A referência do relógio é apenas uma parte da análise.
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
                    Movimento, materiais, época, originalidade, acessórios e
                    conservação também ajudam a compreender melhor a peça.
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
                  rio-relogios-card-light
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
                    rio-relogios-icon
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
                  <Watch
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
                  Leitura do relógio
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[540px]
                    text-[#4F1720]
                  "
                >
                  Marca, referência, movimento e condição precisam ser vistos em
                  conjunto.
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
                  Um relógio pode reunir diferentes materiais, configurações,
                  calibres, acessórios e particularidades que ajudam a
                  contextualizar a peça.
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
                A identificação correta do modelo ajuda a contextualizar o
                relógio dentro de sua coleção e período.
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
                Movimento e calibre
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
                Construção, calibre e funcionamento ajudam a compreender
                características técnicas da peça.
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
                Uso, desgaste, alterações e intervenções também fazem parte da
                análise do relógio.
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
                Compramos relógios de marcas reconhecidas em ouro, inclusive
                peças em diferentes estados de conservação.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .rio-relogios-halo {
          animation: rioRelogiosHalo 7s ease-in-out infinite;
        }

        @keyframes rioRelogiosHalo {
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

        .rio-relogios-watch {
          animation: rioRelogiosWatch 2.5s ease-in-out infinite;
        }

        @keyframes rioRelogiosWatch {
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

        .rio-relogios-card-light {
          animation: rioRelogiosCardLight 5.5s ease-in-out infinite;
        }

        @keyframes rioRelogiosCardLight {
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

        .rio-relogios-icon {
          animation: rioRelogiosIcon 2.8s ease-in-out infinite;
        }

        @keyframes rioRelogiosIcon {
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