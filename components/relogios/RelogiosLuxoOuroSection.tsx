'use client';

import {
  BadgeCheck,
  Gem,
  ShieldCheck,
  Sparkles,
  Watch,
} from 'lucide-react';

export default function RelogiosLuxoOuroSection() {
  return (
    <>
      <section
        id="relogios-de-luxo-em-ouro"
        aria-labelledby="relogios-luxo-ouro-title"
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
            bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(122,22,34,0.62),transparent_34%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            luxo-ouro-halo
            pointer-events-none
            absolute
            right-[4%]
            top-[20%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#C7A87A]/9
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

            lg:grid-cols-[0.9fr_1.1fr]
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
                border-[#C7A87A]/20
                bg-white/[0.045]
                px-4
                py-3
                backdrop-blur-xl
              "
            >
              <Gem
                size={14}
                strokeWidth={1.3}
                className="
                  luxo-ouro-gem
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
                Ouro e alta relojoaria
              </p>
            </div>

            <h2
              id="relogios-luxo-ouro-title"
              className="
                mt-6
                max-w-[680px]
                text-[#F7F3EF]
              "
            >
              Relógios de luxo em ouro
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
              O ouro ocupa um espaço importante na história da alta relojoaria.
              Presente em caixas, pulseiras, fechos e detalhes, ele combina
              valor material com tradição, acabamento e identidade.
            </p>

            <p
              className="
                mt-5
                max-w-[590px]
                text-[12px]
                font-light
                leading-7
                text-[#C8B8B6]

                md:text-[13px]
              "
            >
              Em determinados relógios, o material é apenas uma parte da
              história. Marca, referência, movimento, originalidade e contexto
              também ajudam a compreender a relevância da peça.
            </p>

            {/* DESTAQUE COMERCIAL */}
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
                  luxo-ouro-breath
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[#7A1622]
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#D6BB8B]
                  "
                >
                  Compra de relógios em ouro
                </p>

                <p
                  className="
                    mt-4
                    font-serif
                    text-[22px]
                    leading-tight
                    text-[#F7F3EF]

                    md:text-[25px]
                  "
                >
                  Compramos relógios de marcas reconhecidas em ouro em qualquer
                  estado de conservação.
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
                  Peças usadas, antigas, desgastadas, paradas, sem caixa ou sem
                  documentação podem ser analisadas individualmente.
                </p>
              </div>
            </div>

            {/* CTA */}
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
                href="/relogios/compra-de-relogios/"
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
                  transition-all
                  duration-300

                  hover:-translate-y-1
                "
              >
                Vender relógio em ouro
              </a>

              <a
                href="/relogios/avaliacao-de-relogios/"
                className="
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
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

                  hover:border-[#C7A87A]/40
                  hover:bg-white/[0.07]
                "
              >
                Avaliar minha peça
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
                luxo-ouro-main-card
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
                  luxo-ouro-card-light
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-60
                  w-60
                  rounded-full
                  bg-[#C7A87A]/12
                  blur-[65px]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-5
                  "
                >
                  <div
                    className="
                      luxo-ouro-icon
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
                    <Watch
                      size={27}
                      strokeWidth={1.15}
                      className="text-[#D6BB8B]"
                    />
                  </div>

                  <span
                    className="
                      font-serif
                      text-[30px]
                      text-[#C7A87A]/55
                    "
                  >
                    Au
                  </span>
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
                  Material + relojoaria
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[520px]
                    text-[#F7F3EF]
                  "
                >
                  O ouro faz parte da peça, mas não conta toda a história.
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
                  Marca, referência, movimento, construção, época e
                  originalidade podem ter tanta importância quanto o próprio
                  metal na compreensão de um relógio de luxo.
                </p>
              </div>
            </article>

            {/* CARD 1 */}
            <article
              className="
                group
                relative
                overflow-hidden
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
              <div className="relative z-10">
                <BadgeCheck
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
                  Ouro amarelo, branco e rosé
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
                  Diferentes ligas e tonalidades aparecem em caixas, pulseiras e
                  componentes de relógios de luxo.
                </p>
              </div>
            </article>

            {/* CARD 2 */}
            <article
              className="
                group
                relative
                overflow-hidden
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
              <div className="relative z-10">
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
                  Estado de conservação
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
                  Sinais de uso ou desgaste não impedem necessariamente a
                  análise de uma peça de marca em ouro.
                </p>
              </div>
            </article>

            {/* CARD 3 */}
            <article
              className="
                group
                relative
                overflow-hidden
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
              <div className="relative z-10">
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
                  Peças antigas
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
                  Relógios antigos podem reunir valor material, histórico e
                  relojoeiro em uma única peça.
                </p>
              </div>
            </article>

            {/* CARD 4 */}
            <article
              className="
                group
                relative
                overflow-hidden
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
              <div className="relative z-10">
                <Gem
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
                  Diamantes e pedras
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
                  Modelos com diamantes e outras pedras podem exigir análise
                  conjunta entre relojoaria, materiais e ornamentação.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================
           HALO
        ========================================= */

        .luxo-ouro-halo {
          animation: luxoOuroHalo 7s ease-in-out infinite;
        }

        @keyframes luxoOuroHalo {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.82;
            transform: scale(1.08);
          }
        }

        /* =========================================
           ÍCONE CABEÇALHO
        ========================================= */

        .luxo-ouro-gem {
          animation: luxoOuroGem 2.5s ease-in-out infinite;
        }

        @keyframes luxoOuroGem {
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

        /* =========================================
           RESPIRAÇÃO
        ========================================= */

        .luxo-ouro-breath {
          opacity: 0;
          animation: luxoOuroBreath 6.5s ease-in-out infinite;
        }

        @keyframes luxoOuroBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.22;
          }
        }

        /* =========================================
           CARD PRINCIPAL
        ========================================= */

        .luxo-ouro-card-light {
          opacity: 0.5;
          animation: luxoOuroCardLight 5.5s ease-in-out infinite;
        }

        @keyframes luxoOuroCardLight {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.08);
          }
        }

        .luxo-ouro-icon {
          animation: luxoOuroIcon 2.8s ease-in-out infinite;
        }

        @keyframes luxoOuroIcon {
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