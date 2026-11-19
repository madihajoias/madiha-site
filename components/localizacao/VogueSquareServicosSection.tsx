'use client';

import {
  ArrowUpRight,
  Gem,
  Landmark,
  Sparkles,
  Watch,
} from 'lucide-react';

export default function VogueSquareServicosSection() {
  const servicos = [
    {
      icon: Landmark,
      numero: '01',
      etiqueta: 'Ouro',
      titulo: 'Compra e avaliação de ouro',
      texto:
        'Atendimento para análise de peças em ouro, joias antigas, peças sem uso e outros itens que possam ser avaliados individualmente.',
      href: '/ouro/compra-de-ouro/',
      cta: 'Conhecer compra de ouro',
    },
    {
      icon: Sparkles,
      numero: '02',
      etiqueta: 'Joias',
      titulo: 'Avaliação de joias',
      texto:
        'Joias são analisadas considerando materiais, pedras, acabamento, estado da peça, assinatura, características e contexto.',
      href: '/joias/avaliacao-de-joias/',
      cta: 'Conhecer avaliação de joias',
    },
    {
      icon: Gem,
      numero: '03',
      etiqueta: 'Diamantes',
      titulo: 'Diamantes e pedras preciosas',
      texto:
        'Avaliação individual de diamantes e outras gemas considerando características da pedra, montagem, documentação e contexto da peça.',
      href: '/diamantes/',
      cta: 'Conhecer diamantes',
    },
    {
      icon: Watch,
      numero: '04',
      etiqueta: 'Relógios',
      titulo: 'Relógios de luxo',
      texto:
        'Atendimento para relógios de marcas reconhecidas, com análise de referência, movimento, materiais, conservação e documentação.',
      href: '/relogios/relogios-de-luxo/',
      cta: 'Conhecer relógios de luxo',
    },
  ];

  return (
    <>
      <section
        id="servicos"
        aria-labelledby="vogue-square-servicos-title"
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
            vogue-servicos-halo
            pointer-events-none
            absolute
            left-1/2
            top-[45%]
            h-[600px]
            w-[600px]
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
                <Sparkles
                  size={14}
                  strokeWidth={1.3}
                  className="
                    vogue-servicos-sparkle
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
                  Serviços Madiha Maison
                </p>
              </div>

              <h2
                id="vogue-square-servicos-title"
                className="
                  mt-5
                  max-w-[720px]
                  text-[#4F1720]
                "
              >
                Serviços disponíveis no Vogue Square
              </h2>
            </div>

            <p
              className="
                max-w-[680px]
                text-[14px]
                font-light
                leading-8
                text-[#725D58]

                md:text-[15px]
              "
            >
              No mesmo endereço, a Madiha Maison reúne atendimento para
              diferentes categorias de peças especiais, sempre com análise
              individual e orientação adequada a cada caso.
            </p>
          </div>

          {/* GRID DE SERVIÇOS */}
          <div
            className="
              mt-16
              grid
              gap-5

              md:grid-cols-2
            "
          >
            {servicos.map(
              ({
                icon: Icon,
                numero,
                etiqueta,
                titulo,
                texto,
                href,
                cta,
              }) => (
                <article
                  key={titulo}
                  className="
                    vogue-servico-card
                    group
                    relative
                    min-h-[390px]
                    overflow-hidden
                    rounded-[2.2rem]
                    border
                    border-[#5A1017]/8
                    bg-white/60
                    p-7
                    shadow-[0_18px_55px_rgba(63,38,26,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]
                    backdrop-blur-xl
                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:border-[#C7A87A]/34
                    hover:shadow-[0_28px_75px_rgba(63,38,26,0.10)]

                    md:p-8

                    lg:p-9
                  "
                >
                  {/* LUZ */}
                  <div
                    aria-hidden="true"
                    className="
                      vogue-servico-light
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-52
                      w-52
                      rounded-full
                      bg-[#C7A87A]/9
                      blur-[60px]
                    "
                  />

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      flex-col
                    "
                  >
                    {/* TOPO */}
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
                          vogue-servico-icon
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#C7A87A]/28
                          bg-[#EFE4D1]
                          shadow-[0_10px_30px_rgba(90,16,23,0.07)]
                        "
                      >
                        <Icon
                          size={24}
                          strokeWidth={1.15}
                          className="text-[#A17D4F]"
                        />
                      </div>

                      <span
                        className="
                          font-serif
                          text-[30px]
                          leading-none
                          text-[#C7A87A]/55
                        "
                      >
                        {numero}
                      </span>
                    </div>

                    {/* CONTEÚDO */}
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
                      {etiqueta}
                    </p>

                    <h3
                      className="
                        mt-3
                        text-[#4F1720]
                      "
                    >
                      {titulo}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-[570px]
                        text-[12px]
                        font-light
                        leading-7
                        text-[#725D58]

                        md:text-[13px]
                      "
                    >
                      {texto}
                    </p>

                    {/* CTA */}
                    <div className="mt-auto pt-8">
                      <a
                        href={href}
                        className="
                          group/button
                          inline-flex
                          items-center
                          gap-3
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#4F1720]
                          transition-colors
                          duration-300

                          hover:text-[#A17D4F]
                        "
                      >
                        {cta}

                        <span
                          className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#C7A87A]/30
                            bg-[#EFE4D1]/70
                            transition-all
                            duration-300

                            group-hover/button:translate-x-1
                            group-hover/button:border-[#C7A87A]/55
                            group-hover/button:bg-[#EFE4D1]
                          "
                        >
                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.3}
                            className="text-[#A17D4F]"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>

          {/* BLOCO FINAL */}
          <div
            className="
              relative
              mt-14
              overflow-hidden
              rounded-[2.2rem]
              border
              border-[#C7A87A]/25
              bg-[#4F1720]
              px-7
              py-8

              md:mt-16
              md:px-10
              md:py-10

              lg:grid
              lg:grid-cols-[0.82fr_1.18fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* RESPIRAÇÃO */}
            <div
              aria-hidden="true"
              className="
                vogue-servicos-final-breath
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
                Atendimento em um só endereço
              </p>

              <p
                className="
                  mt-4
                  max-w-[520px]
                  font-serif
                  text-[23px]
                  leading-tight
                  text-[#F7F3EF]

                  md:text-[27px]
                "
              >
                Diferentes categorias, a mesma atenção aos detalhes.
              </p>
            </div>

            <p
              className="
                relative
                z-10
                mt-6
                max-w-[680px]
                text-[12px]
                font-light
                leading-7
                text-[#D3C3C0]

                md:text-[13px]

                lg:mt-0
              "
            >
              Ouro, joias, diamantes e relógios exigem critérios diferentes de
              análise. Por isso, cada peça é observada conforme sua natureza,
              características, estado e contexto.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .vogue-servicos-halo {
          animation: vogueServicosHalo 7s ease-in-out infinite;
        }

        @keyframes vogueServicosHalo {
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

        .vogue-servicos-sparkle {
          animation: vogueServicosSparkle 2.5s ease-in-out infinite;
        }

        @keyframes vogueServicosSparkle {
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

        .vogue-servico-icon {
          transition:
            transform 0.5s ease,
            border-color 0.5s ease;
        }

        .vogue-servico-card:hover .vogue-servico-icon {
          transform: scale(1.08) rotate(4deg);
          border-color: rgba(199, 168, 122, 0.55);
        }

        .vogue-servico-light {
          opacity: 0.5;
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .vogue-servico-card:hover .vogue-servico-light {
          opacity: 1;
          transform: scale(1.2);
        }

        .vogue-servicos-final-breath {
          opacity: 0;
          animation: vogueServicosFinalBreath 6.5s ease-in-out infinite;
        }

        @keyframes vogueServicosFinalBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.22;
          }
        }
      `}</style>
    </>
  );
}