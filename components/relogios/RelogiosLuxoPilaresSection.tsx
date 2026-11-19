'use client';

import {
  Crown,
  Gem,
  History,
  Layers3,
  Settings2,
  Sparkles,
} from 'lucide-react';

export default function RelogiosLuxoPilaresSection() {
  const pilares = [
    {
      icon: Settings2,
      numero: '01',
      titulo: 'Movimento',
      texto:
        'A arquitetura do mecanismo, sua construção, precisão, complicações e nível de acabamento ajudam a definir a identidade de um relógio de alta relojoaria.',
    },
    {
      icon: Layers3,
      numero: '02',
      titulo: 'Manufatura',
      texto:
        'Marcas com tradição relojoeira desenvolvem soluções próprias, calibres, componentes e processos que diferenciam suas peças.',
    },
    {
      icon: Gem,
      numero: '03',
      titulo: 'Materiais',
      texto:
        'Ouro, platina, titânio, cerâmica, safira, pedras preciosas e ligas especiais podem contribuir para a construção e o posicionamento da peça.',
    },
    {
      icon: Sparkles,
      numero: '04',
      titulo: 'Acabamento',
      texto:
        'Polimentos, escovamentos, detalhes manuais, mostradores, índices, caixas e pulseiras revelam o cuidado aplicado à execução do relógio.',
    },
    {
      icon: History,
      numero: '05',
      titulo: 'Tradição',
      texto:
        'História, legado, inovação e reconhecimento ao longo do tempo ajudam determinadas maisons a ocupar posições únicas no universo da relojoaria.',
    },
    {
      icon: Crown,
      numero: '06',
      titulo: 'Exclusividade',
      texto:
        'Produção limitada, referências especiais, raridade, demanda e relevância para colecionadores podem tornar determinados modelos ainda mais desejados.',
    },
  ];

  return (
    <>
      <section
        id="o-que-define-um-relogio-de-luxo"
        aria-labelledby="pilares-relogio-luxo-title"
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
            bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(90,16,23,0.06),transparent_34%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            luxo-pilares-halo
            pointer-events-none
            absolute
            left-1/2
            top-[45%]
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
                <Crown
                  size={14}
                  strokeWidth={1.3}
                  className="
                    luxo-pilares-crown
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
                  Alta relojoaria
                </p>
              </div>

              <h2
                id="pilares-relogio-luxo-title"
                className="
                  mt-5
                  max-w-[720px]
                  text-[#4F1720]
                "
              >
                O que torna um relógio realmente luxuoso?
              </h2>
            </div>

            <p
              className="
                max-w-[650px]
                text-[14px]
                font-light
                leading-8
                text-[#725D58]

                md:text-[15px]
              "
            >
              Um relógio de luxo vai muito além do preço. Sua relevância pode
              estar na engenharia, nos materiais, no acabamento, na tradição da
              marca e na capacidade de atravessar gerações.
            </p>
          </div>

          {/* LINHA ANIMADA */}
          <div
            className="
              relative
              my-14
              h-px
              w-full
              overflow-hidden
              bg-[#5A1017]/8

              md:my-16
            "
          >
            <div className="luxo-pilares-line absolute inset-y-0 w-[32%] bg-gradient-to-r from-transparent via-[#C7A87A] to-transparent" />
          </div>

          {/* GRID */}
          <div
            className="
              grid
              gap-4

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {pilares.map(({ icon: Icon, numero, titulo, texto }) => (
              <article
                key={titulo}
                className="
                  luxo-pilar-card
                  group
                  relative
                  min-h-[290px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#5A1017]/8
                  bg-white/55
                  p-7
                  shadow-[0_18px_55px_rgba(63,38,26,0.05),inset_0_1px_0_rgba(255,255,255,0.75)]
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-[#C7A87A]/34
                  hover:shadow-[0_28px_75px_rgba(63,38,26,0.10)]

                  md:p-8
                "
              >
                {/* LUZ INTERNA */}
                <div
                  aria-hidden="true"
                  className="
                    luxo-pilar-light
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#C7A87A]/8
                    blur-[55px]
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    {/* ÍCONE */}
                    <div
                      className="
                        luxo-pilar-icon
                        flex
                        h-14
                        w-14
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
                        size={22}
                        strokeWidth={1.2}
                        className="text-[#A17D4F]"
                      />
                    </div>

                    <span
                      className="
                        font-serif
                        text-[28px]
                        leading-none
                        text-[#C7A87A]/60
                      "
                    >
                      {numero}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-7
                      text-[#4F1720]
                    "
                  >
                    {titulo}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[12px]
                      font-light
                      leading-7
                      text-[#7A6762]

                      md:text-[13px]
                    "
                  >
                    {texto}
                  </p>

                  <div
                    className="
                      mt-7
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-[#C7A87A]/40
                      to-transparent
                    "
                  />
                </div>
              </article>
            ))}
          </div>

          {/* DESTAQUE FINAL */}
          <div
            className="
              relative
              mt-12
              overflow-hidden
              rounded-[2rem]
              border
              border-[#C7A87A]/25
              bg-[#4F1720]
              px-7
              py-8

              md:mt-16
              md:px-10
              md:py-10

              lg:grid
              lg:grid-cols-[0.8fr_1.2fr]
              lg:items-center
              lg:gap-12
            "
          >
            {/* RESPIRAÇÃO DO FUNDO */}
            <div
              aria-hidden="true"
              className="
                luxo-pilares-final-breath
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
                Mais do que aparência
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
                O verdadeiro luxo está nos detalhes que nem sempre aparecem à
                primeira vista.
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
              Dois relógios visualmente semelhantes podem representar universos
              completamente diferentes quando analisamos movimento, acabamento,
              referência, produção, originalidade, materiais e história. É essa
              combinação que torna cada peça singular.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================
           HALO
        ========================================= */

        .luxo-pilares-halo {
          animation: luxoPilaresHalo 6.5s ease-in-out infinite;
        }

        @keyframes luxoPilaresHalo {
          0%,
          100% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(0.94);
          }

          50% {
            opacity: 0.85;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        /* =========================================
           COROA
        ========================================= */

        .luxo-pilares-crown {
          animation: luxoPilaresCrown 2.6s ease-in-out infinite;
        }

        @keyframes luxoPilaresCrown {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.92);
          }

          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        /* =========================================
           LINHA
        ========================================= */

        .luxo-pilares-line {
          left: -35%;
          animation: luxoPilaresLine 5s ease-in-out infinite;
        }

        @keyframes luxoPilaresLine {
          0% {
            left: -35%;
            opacity: 0;
          }

          20% {
            opacity: 0;
          }

          40% {
            opacity: 1;
          }

          70% {
            left: 105%;
            opacity: 0.8;
          }

          100% {
            left: 105%;
            opacity: 0;
          }
        }

        /* =========================================
           ÍCONES
        ========================================= */

        .luxo-pilar-card:hover .luxo-pilar-icon {
          transform: scale(1.1) rotate(5deg);
          border-color: rgba(199, 168, 122, 0.5);
        }

        .luxo-pilar-icon {
          transition:
            transform 0.5s ease,
            border-color 0.5s ease;
        }

        /* =========================================
           LUZ NOS CARDS
        ========================================= */

        .luxo-pilar-light {
          opacity: 0.5;
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .luxo-pilar-card:hover .luxo-pilar-light {
          opacity: 1;
          transform: scale(1.2);
        }

        /* =========================================
           BLOCO FINAL
        ========================================= */

        .luxo-pilares-final-breath {
          opacity: 0;
          animation: luxoPilaresFinalBreath 6.5s ease-in-out infinite;
        }

        @keyframes luxoPilaresFinalBreath {
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