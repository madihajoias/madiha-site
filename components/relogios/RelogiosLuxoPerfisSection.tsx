'use client';

import {
  Archive,
  BadgeCheck,
  History,
  ShieldCheck,
  Sparkles,
  Watch,
} from 'lucide-react';

export default function RelogiosLuxoPerfisSection() {
  const perfis = [
    {
      icon: Sparkles,
      numero: '01',
      etiqueta: 'Contemporâneos',
      titulo: 'Relógios novos',
      texto:
        'Modelos atuais podem reunir tecnologias recentes, materiais contemporâneos e referências que representam a linguagem presente de cada maison.',
      detalhe:
        'Coleções atuais • lançamentos • referências contemporâneas',
    },
    {
      icon: Watch,
      numero: '02',
      etiqueta: 'Mercado secundário',
      titulo: 'Relógios usados',
      texto:
        'Um relógio usado pode manter grande relevância quando preserva originalidade, boa conservação, documentação e características valorizadas pelo mercado.',
      detalhe:
        'Conservação • originalidade • documentação • acessórios',
    },
    {
      icon: History,
      numero: '03',
      etiqueta: 'História',
      titulo: 'Relógios vintage',
      texto:
        'Peças de outras épocas podem despertar interesse por sua história, desenho, raridade, referência, materiais e importância dentro da trajetória da marca.',
      detalhe:
        'Época • raridade • procedência • contexto histórico',
    },
  ];

  return (
    <>
      <section
        id="relogios-novos-usados-vintage"
        aria-labelledby="perfis-relogios-luxo-title"
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
            bg-[radial-gradient(circle_at_18%_20%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(90,16,23,0.06),transparent_34%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            luxo-perfis-halo
            pointer-events-none
            absolute
            right-[5%]
            top-[18%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#C7A87A]/8
            blur-[125px]
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
                <Watch
                  size={14}
                  strokeWidth={1.3}
                  className="
                    luxo-perfis-watch
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
                  Diferentes universos
                </p>
              </div>

              <h2
                id="perfis-relogios-luxo-title"
                className="
                  mt-5
                  max-w-[720px]
                  text-[#4F1720]
                "
              >
                Relógios novos, usados e vintage
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
              O universo dos relógios de luxo não se limita às peças novas.
              Modelos usados e vintage também podem ocupar posições de destaque
              quando reúnem história, originalidade, conservação e relevância.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              mt-16
              grid
              gap-5

              lg:grid-cols-3
            "
          >
            {perfis.map(
              ({ icon: Icon, numero, etiqueta, titulo, texto, detalhe }) => (
                <article
                  key={titulo}
                  className="
                    luxo-perfil-card
                    group
                    relative
                    min-h-[390px]
                    overflow-hidden
                    rounded-[2.2rem]
                    border
                    border-[#5A1017]/8
                    bg-white/55
                    p-7
                    shadow-[0_18px_55px_rgba(63,38,26,0.05),inset_0_1px_0_rgba(255,255,255,0.78)]
                    backdrop-blur-xl
                    transition-all
                    duration-500

                    hover:-translate-y-2
                    hover:border-[#C7A87A]/34
                    hover:shadow-[0_28px_75px_rgba(63,38,26,0.10)]

                    md:p-8
                  "
                >
                  {/* LUZ */}
                  <div
                    aria-hidden="true"
                    className="
                      luxo-perfil-light
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

                  <div className="relative z-10 flex h-full flex-col">
                    {/* TOPO */}
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className="
                          luxo-perfil-icon
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

                    {/* TEXTO */}
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

                    {/* RODAPÉ */}
                    <div className="mt-auto pt-7">
                      <div className="h-px w-full bg-gradient-to-r from-[#C7A87A]/45 to-transparent" />

                      <p
                        className="
                          mt-5
                          text-[8px]
                          font-semibold
                          uppercase
                          leading-5
                          tracking-[0.18em]
                          text-[#A17D4F]
                        "
                      >
                        {detalhe}
                      </p>
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>

          {/* BLOCO DESTAQUE */}
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
                luxo-perfis-breath
                pointer-events-none
                absolute
                inset-0
                bg-[#7A1622]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7A87A]/25
                  bg-[#C7A87A]/9
                "
              >
                <Archive
                  size={22}
                  strokeWidth={1.2}
                  className="text-[#D6BB8B]"
                />
              </div>

              <p
                className="
                  mt-6
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#D6BB8B]
                "
              >
                Valor além da idade
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
                Um relógio não perde sua relevância simplesmente porque deixou
                de ser novo.
              </p>
            </div>

            <div
              className="
                relative
                z-10
                mt-7

                lg:mt-0
              "
            >
              <p
                className="
                  max-w-[680px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]

                  md:text-[13px]
                "
              >
                Em muitos casos, a história da referência, a originalidade, a
                conservação e a procura pelo modelo tornam peças usadas ou
                vintage especialmente interessantes dentro do universo da alta
                relojoaria.
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
                  <BadgeCheck
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
                        text-[17px]
                        text-[#F7F3EF]
                      "
                    >
                      Originalidade
                    </p>

                    <p
                      className="
                        mt-2
                        text-[11px]
                        font-light
                        leading-6
                        text-[#CDBDBA]
                      "
                    >
                      Componentes e coerência do conjunto ajudam a contar a
                      história da peça.
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
                        text-[17px]
                        text-[#F7F3EF]
                      "
                    >
                      Conservação
                    </p>

                    <p
                      className="
                        mt-2
                        text-[11px]
                        font-light
                        leading-6
                        text-[#CDBDBA]
                      "
                    >
                      Uso, intervenções e condição geral ajudam a compreender a
                      peça em seu contexto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================
           HALO
        ========================================= */

        .luxo-perfis-halo {
          animation: luxoPerfisHalo 7s ease-in-out infinite;
        }

        @keyframes luxoPerfisHalo {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.8;
            transform: scale(1.08);
          }
        }

        /* =========================================
           ÍCONE CABEÇALHO
        ========================================= */

        .luxo-perfis-watch {
          animation: luxoPerfisWatch 2.6s ease-in-out infinite;
        }

        @keyframes luxoPerfisWatch {
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
           CARDS
        ========================================= */

        .luxo-perfil-icon {
          transition:
            transform 0.5s ease,
            border-color 0.5s ease;
        }

        .luxo-perfil-card:hover .luxo-perfil-icon {
          transform: scale(1.1) rotate(5deg);
          border-color: rgba(199, 168, 122, 0.55);
        }

        .luxo-perfil-light {
          opacity: 0.5;
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .luxo-perfil-card:hover .luxo-perfil-light {
          opacity: 1;
          transform: scale(1.2);
        }

        /* =========================================
           BLOCO FINAL
        ========================================= */

        .luxo-perfis-breath {
          opacity: 0;
          animation: luxoPerfisBreath 6.5s ease-in-out infinite;
        }

        @keyframes luxoPerfisBreath {
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