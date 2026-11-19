'use client';

import {
  ArrowUpRight,
  BadgeCheck,
  HandCoins,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Watch,
} from 'lucide-react';

export default function RelogiosLuxoConversaoSection() {
  return (
    <>
      <section
        id="avaliacao-e-venda"
        aria-labelledby="relogios-luxo-conversao-title"
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
            luxo-conversao-halo
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
            w-full
            max-w-[90rem]
          "
        >
          {/* CABEÇALHO */}
          <div
            className="
              mx-auto
              max-w-[850px]
              text-center
            "
          >
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
                  luxo-conversao-sparkle
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
                Avaliar ou vender
              </p>
            </div>

            <h2
              id="relogios-luxo-conversao-title"
              className="
                mt-5
                text-[#4F1720]
              "
            >
              O que você deseja fazer com seu relógio?
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[720px]
                text-[14px]
                font-light
                leading-8
                text-[#725D58]

                md:text-[15px]
              "
            >
              A Madiha Maison oferece caminhos diferentes para quem deseja
              compreender melhor uma peça ou seguir diretamente para uma
              negociação.
            </p>
          </div>

          {/* CARDS PRINCIPAIS */}
          <div
            className="
              mt-16
              grid
              gap-5

              lg:grid-cols-2
            "
          >
            {/* =================================
                AVALIAÇÃO
            ================================= */}
            <article
              className="
                luxo-conversao-card
                group
                relative
                overflow-hidden
                rounded-[2.3rem]
                border
                border-[#5A1017]/8
                bg-white/60
                p-7
                shadow-[0_22px_65px_rgba(63,38,26,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[#C7A87A]/34
                hover:shadow-[0_30px_80px_rgba(63,38,26,0.10)]

                md:p-10
              "
            >
              {/* LUZ */}
              <div
                aria-hidden="true"
                className="
                  luxo-conversao-light
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-60
                  w-60
                  rounded-full
                  bg-[#C7A87A]/10
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
                      luxo-conversao-icon
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/30
                      bg-[#EFE4D1]
                    "
                  >
                    <SearchCheck
                      size={26}
                      strokeWidth={1.2}
                      className="text-[#A17D4F]"
                    />
                  </div>

                  <span
                    className="
                      font-serif
                      text-[30px]
                      text-[#C7A87A]/60
                    "
                  >
                    01
                  </span>
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
                  Quero compreender a peça
                </p>

                <h3
                  className="
                    mt-4
                    text-[#4F1720]
                  "
                >
                  Avaliação de Relógios
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[600px]
                    text-[12px]
                    font-light
                    leading-7
                    text-[#725D58]

                    md:text-[13px]
                  "
                >
                  A avaliação considera marca, referência, movimento,
                  materiais, originalidade, conservação, documentação,
                  acessórios e demais características relevantes.
                </p>

                <div
                  className="
                    mt-7
                    grid
                    gap-3

                    sm:grid-cols-2
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-[1.4rem]
                      border
                      border-[#5A1017]/8
                      bg-[#F7F3EF]/70
                      p-5
                    "
                  >
                    <BadgeCheck
                      size={17}
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
                          text-[16px]
                          text-[#4F1720]
                        "
                      >
                        Análise individual
                      </p>

                      <p
                        className="
                          mt-2
                          text-[10px]
                          font-light
                          leading-5
                          text-[#7A6762]
                        "
                      >
                        Cada relógio é observado em seu próprio contexto.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-[1.4rem]
                      border
                      border-[#5A1017]/8
                      bg-[#F7F3EF]/70
                      p-5
                    "
                  >
                    <ShieldCheck
                      size={17}
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
                          text-[16px]
                          text-[#4F1720]
                        "
                      >
                        Sem obrigação de venda
                      </p>

                      <p
                        className="
                          mt-2
                          text-[10px]
                          font-light
                          leading-5
                          text-[#7A6762]
                        "
                      >
                        Conheça a análise antes de tomar qualquer decisão.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="/relogios/avaliacao-de-relogios/"
                  className="
                    group/button
                    mt-8
                    inline-flex
                    min-h-[54px]
                    w-full
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
                  Conhecer a avaliação

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                    className="
                      transition-transform
                      duration-300

                      group-hover/button:-translate-y-0.5
                      group-hover/button:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </article>

            {/* =================================
                VENDA
            ================================= */}
            <article
              className="
                luxo-conversao-card
                group
                relative
                overflow-hidden
                rounded-[2.3rem]
                border
                border-[#C7A87A]/26
                bg-[#4F1720]
                p-7
                shadow-[0_26px_75px_rgba(63,38,26,0.14)]
                transition-all
                duration-500

                hover:-translate-y-2
                hover:border-[#C7A87A]/42
                hover:shadow-[0_34px_90px_rgba(63,38,26,0.20)]

                md:p-10
              "
            >
              {/* RESPIRAÇÃO */}
              <div
                aria-hidden="true"
                className="
                  luxo-conversao-breath
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
                  luxo-conversao-dark-light
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
                    flex
                    items-start
                    justify-between
                    gap-5
                  "
                >
                  <div
                    className="
                      luxo-conversao-icon-dark
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/30
                      bg-[#C7A87A]/9
                    "
                  >
                    <HandCoins
                      size={26}
                      strokeWidth={1.2}
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
                    02
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
                  Quero negociar a peça
                </p>

                <h3
                  className="
                    mt-4
                    text-[#F7F3EF]
                  "
                >
                  Compra de Relógios
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[600px]
                    text-[12px]
                    font-light
                    leading-7
                    text-[#D3C3C0]

                    md:text-[13px]
                  "
                >
                  Para quem deseja vender, a análise é seguida pela apresentação
                  de uma proposta comercial de acordo com as características da
                  peça.
                </p>

                <div
                  className="
                    mt-7
                    grid
                    gap-3

                    sm:grid-cols-2
                  "
                >
                  <div
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-[1.4rem]
                      border
                      border-white/10
                      bg-white/[0.045]
                      p-5
                    "
                  >
                    <Watch
                      size={17}
                      strokeWidth={1.2}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#D6BB8B]
                      "
                    />

                    <div>
                      <p
                        className="
                          font-serif
                          text-[16px]
                          text-[#F7F3EF]
                        "
                      >
                        Relógios de luxo
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
                        Grandes marcas, vintage e peças de coleção.
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-[1.4rem]
                      border
                      border-white/10
                      bg-white/[0.045]
                      p-5
                    "
                  >
                    <ShieldCheck
                      size={17}
                      strokeWidth={1.2}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#D6BB8B]
                      "
                    />

                    <div>
                      <p
                        className="
                          font-serif
                          text-[16px]
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
                        Negociação conduzida com discrição.
                      </p>
                    </div>
                  </div>
                </div>

                {/* OURO */}
                <div
                  className="
                    mt-5
                    rounded-[1.5rem]
                    border
                    border-[#C7A87A]/24
                    bg-[#C7A87A]/9
                    p-5
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
                    Relógios em ouro
                  </p>

                  <p
                    className="
                      mt-3
                      text-[11px]
                      font-light
                      leading-6
                      text-[#D3C3C0]
                    "
                  >
                    Compramos relógios de marcas reconhecidas em ouro em
                    qualquer estado de conservação.
                  </p>
                </div>

                <a
                  href="/relogios/compra-de-relogios/"
                  className="
                    group/button
                    mt-8
                    inline-flex
                    min-h-[54px]
                    w-full
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
                  Quero vender meu relógio

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                    className="
                      transition-transform
                      duration-300

                      group-hover/button:-translate-y-0.5
                      group-hover/button:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </article>
          </div>

          {/* RODAPÉ DA SEÇÃO */}
          <div
            className="
              mt-12
              flex
              flex-col
              items-center
              text-center
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#C7A87A]/25
                bg-[#EFE4D1]/70
              "
            >
              <Watch
                size={19}
                strokeWidth={1.2}
                className="text-[#A17D4F]"
              />
            </div>

            <p
              className="
                mt-5
                max-w-[700px]
                font-serif
                text-[20px]
                leading-tight
                text-[#4F1720]

                md:text-[22px]
              "
            >
              Avaliar e vender são etapas diferentes — e você pode escolher
              apenas o caminho que fizer sentido para sua peça.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================
           HALO
        ========================================= */

        .luxo-conversao-halo {
          animation: luxoConversaoHalo 7s ease-in-out infinite;
        }

        @keyframes luxoConversaoHalo {
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

        /* =========================================
           SPARKLE
        ========================================= */

        .luxo-conversao-sparkle {
          animation: luxoConversaoSparkle 2.5s ease-in-out infinite;
        }

        @keyframes luxoConversaoSparkle {
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
           CARDS
        ========================================= */

        .luxo-conversao-light {
          opacity: 0.5;
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .luxo-conversao-card:hover .luxo-conversao-light {
          opacity: 1;
          transform: scale(1.18);
        }

        .luxo-conversao-icon,
        .luxo-conversao-icon-dark {
          transition:
            transform 0.5s ease,
            border-color 0.5s ease;
        }

        .luxo-conversao-card:hover .luxo-conversao-icon,
        .luxo-conversao-card:hover .luxo-conversao-icon-dark {
          transform: scale(1.08) rotate(4deg);
        }

        /* =========================================
           CARD ESCURO
        ========================================= */

        .luxo-conversao-breath {
          opacity: 0;
          animation: luxoConversaoBreath 6.5s ease-in-out infinite;
        }

        @keyframes luxoConversaoBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.22;
          }
        }

        .luxo-conversao-dark-light {
          animation: luxoConversaoDarkLight 5.5s ease-in-out infinite;
        }

        @keyframes luxoConversaoDarkLight {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.85;
            transform: scale(1.08);
          }
        }
      `}</style>
    </>
  );
}