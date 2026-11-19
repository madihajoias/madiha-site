'use client';

import {
  ArrowUpRight,
  BadgeCheck,
  FileCheck2,
  Gem,
  SearchCheck,
  Sparkles,
} from 'lucide-react';

export default function BarraTijucaDiamantesSection() {
  return (
    <>
      <section
        id="diamantes"
        aria-labelledby="barra-tijuca-diamantes-title"
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
            barra-diamantes-halo
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
              <Gem
                size={14}
                strokeWidth={1.3}
                className="
                  barra-diamantes-gem
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
                Diamantes • Barra da Tijuca
              </p>
            </div>

            <h2
              id="barra-tijuca-diamantes-title"
              className="
                mt-6
                max-w-[680px]
                text-[#F7F3EF]
              "
            >
              Diamantes na Barra da Tijuca
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
              A Madiha Maison realiza atendimento para análise de diamantes e
              joias com pedras preciosas na Barra da Tijuca, observando as
              características próprias de cada gema.
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
              Peso, lapidação, cor, pureza, proporções, documentação, montagem e
              contexto da joia podem contribuir para uma leitura mais completa
              da peça apresentada.
            </p>

            {/* DESTAQUE */}
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
                  barra-diamantes-breath
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
                  Características da gema
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
                  Pequenos detalhes podem alterar significativamente a leitura
                  de um diamante.
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
                  Por isso, a análise deve considerar o conjunto de
                  características da pedra e não apenas seu tamanho aparente.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/diamantes/"
              className="
                group
                mt-8
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
              Conhecer diamantes

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
                  barra-diamantes-card-light
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
                    barra-diamantes-icon
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
                  <SearchCheck
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
                  Análise do diamante
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[520px]
                    text-[#F7F3EF]
                  "
                >
                  A gema deve ser compreendida como um conjunto de
                  características.
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
                  Lapidação, proporções, cor, pureza, peso e eventuais
                  características internas ajudam a construir a análise da
                  pedra.
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
              <BadgeCheck
                size={22}
                strokeWidth={1.2}
                className="text-[#D6BB8B]"
              />

              <p className="mt-6 font-serif text-[20px] leading-tight text-[#F7F3EF]">
                Lapidação
              </p>

              <p className="mt-4 text-[11px] font-light leading-6 text-[#D3C3C0]">
                Proporções e acabamento influenciam a interação da gema com a
                luz.
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
              <SearchCheck
                size={22}
                strokeWidth={1.2}
                className="text-[#D6BB8B]"
              />

              <p className="mt-6 font-serif text-[20px] leading-tight text-[#F7F3EF]">
                Cor e pureza
              </p>

              <p className="mt-4 text-[11px] font-light leading-6 text-[#D3C3C0]">
                Aspectos visuais e internos fazem parte da leitura técnica do
                diamante.
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
              <FileCheck2
                size={22}
                strokeWidth={1.2}
                className="text-[#D6BB8B]"
              />

              <p className="mt-6 font-serif text-[20px] leading-tight text-[#F7F3EF]">
                Documentação
              </p>

              <p className="mt-4 text-[11px] font-light leading-6 text-[#D3C3C0]">
                Certificados e documentos podem ajudar a contextualizar
                informações da pedra.
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

              <p className="mt-6 font-serif text-[20px] leading-tight text-[#F7F3EF]">
                Montagem e joia
              </p>

              <p className="mt-4 text-[11px] font-light leading-6 text-[#D3C3C0]">
                Quando está montado, o diamante também deve ser observado dentro
                do contexto da joia.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .barra-diamantes-halo {
          animation: barraDiamantesHalo 7s ease-in-out infinite;
        }

        @keyframes barraDiamantesHalo {
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

        .barra-diamantes-gem {
          animation: barraDiamantesGem 2.5s ease-in-out infinite;
        }

        @keyframes barraDiamantesGem {
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

        .barra-diamantes-breath {
          opacity: 0;
          animation: barraDiamantesBreath 6.5s ease-in-out infinite;
        }

        @keyframes barraDiamantesBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.22;
          }
        }

        .barra-diamantes-card-light {
          animation: barraDiamantesCardLight 5.5s ease-in-out infinite;
        }

        @keyframes barraDiamantesCardLight {
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

        .barra-diamantes-icon {
          animation: barraDiamantesIcon 2.8s ease-in-out infinite;
        }

        @keyframes barraDiamantesIcon {
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