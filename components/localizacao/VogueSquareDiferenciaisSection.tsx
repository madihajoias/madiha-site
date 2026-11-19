'use client';

import {
  Building2,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from 'lucide-react';

export default function VogueSquareDiferenciaisSection() {
  const diferenciais = [
    {
      icon: ShieldCheck,
      numero: '01',
      titulo: 'Atendimento reservado',
      texto:
        'Um ambiente adequado para conversar sobre peças de valor com discrição, atenção e tranquilidade.',
    },
    {
      icon: UserRoundCheck,
      numero: '02',
      titulo: 'Análise individual',
      texto:
        'Cada joia, relógio, diamante ou peça em ouro é observada conforme suas próprias características.',
    },
    {
      icon: Building2,
      numero: '03',
      titulo: 'Estrutura no Vogue Square',
      texto:
        'A Madiha Maison está instalada em um endereço reconhecido da Barra da Tijuca, com atendimento presencial.',
    },
    {
      icon: MapPin,
      numero: '04',
      titulo: 'Localização estratégica',
      texto:
        'O Vogue Square fica na Av. das Américas, com acesso facilitado para diferentes pontos da Barra da Tijuca.',
    },
    {
      icon: Clock3,
      numero: '05',
      titulo: 'Atendimento organizado',
      texto:
        'A visita pode ser alinhada previamente para tornar a experiência mais objetiva e adequada à análise da peça.',
    },
    {
      icon: Sparkles,
      numero: '06',
      titulo: 'Experiência Madiha Maison',
      texto:
        'O mesmo cuidado aplicado à joalheria também orienta o atendimento para ouro, diamantes e alta relojoaria.',
    },
  ];

  return (
    <>
      <section
        id="diferenciais"
        aria-labelledby="vogue-square-diferenciais-title"
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
            vogue-diferenciais-halo
            pointer-events-none
            absolute
            left-1/2
            top-[46%]
            h-[620px]
            w-[620px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A87A]/8
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
                  border-[#C7A87A]/20
                  bg-white/[0.045]
                  px-4
                  py-3
                  backdrop-blur-xl
                "
              >
                <ShieldCheck
                  size={14}
                  strokeWidth={1.3}
                  className="
                    vogue-diferenciais-shield
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
                  Atendimento presencial
                </p>
              </div>

              <h2
                id="vogue-square-diferenciais-title"
                className="
                  mt-6
                  max-w-[720px]
                  text-[#F7F3EF]
                "
              >
                Por que escolher atendimento no Vogue Square?
              </h2>
            </div>

            <p
              className="
                max-w-[670px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]

                md:text-[15px]
              "
            >
              Mais do que um endereço, o Vogue Square funciona como ponto de
              atendimento da Madiha Maison para quem deseja analisar peças
              especiais com atenção, discrição e orientação individual.
            </p>
          </div>

          {/* GRID */}
          <div
            className="
              mt-16
              grid
              gap-4

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {diferenciais.map(({ icon: Icon, numero, titulo, texto }) => (
              <article
                key={titulo}
                className="
                  vogue-diferencial-card
                  group
                  relative
                  min-h-[290px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-[#C7A87A]/30
                  hover:bg-white/[0.065]

                  md:p-8
                "
              >
                {/* LUZ */}
                <div
                  aria-hidden="true"
                  className="
                    vogue-diferencial-light
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#C7A87A]/10
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
                    <div
                      className="
                        vogue-diferencial-icon
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/26
                        bg-[#C7A87A]/8
                      "
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.2}
                        className="text-[#D6BB8B]"
                      />
                    </div>

                    <span
                      className="
                        font-serif
                        text-[28px]
                        leading-none
                        text-[#C7A87A]/55
                      "
                    >
                      {numero}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-7
                      text-[#F7F3EF]
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
                      text-[#D3C3C0]

                      md:text-[13px]
                    "
                  >
                    {texto}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* BLOCO FINAL */}
          <div
            className="
              relative
              mt-14
              overflow-hidden
              rounded-[2.2rem]
              border
              border-[#C7A87A]/26
              bg-[#C7A87A]/8
              px-7
              py-8
              backdrop-blur-xl

              md:mt-16
              md:px-10
              md:py-10

              lg:grid
              lg:grid-cols-[0.78fr_1.22fr]
              lg:items-center
              lg:gap-14
            "
          >
            {/* RESPIRAÇÃO */}
            <div
              aria-hidden="true"
              className="
                vogue-diferenciais-breath
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
                Presença física
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
                Um endereço real para uma análise que precisa ser feita de
                perto.
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
              Fotografias e informações iniciais podem ajudar no primeiro
              contato, mas determinadas características de joias, relógios,
              ouro e diamantes só podem ser compreendidas com mais precisão
              durante a análise presencial.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .vogue-diferenciais-halo {
          animation: vogueDiferenciaisHalo 7s ease-in-out infinite;
        }

        @keyframes vogueDiferenciaisHalo {
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

        .vogue-diferenciais-shield {
          animation: vogueDiferenciaisShield 2.5s ease-in-out infinite;
        }

        @keyframes vogueDiferenciaisShield {
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

        .vogue-diferencial-icon {
          transition:
            transform 0.5s ease,
            border-color 0.5s ease;
        }

        .vogue-diferencial-card:hover .vogue-diferencial-icon {
          transform: scale(1.08) rotate(4deg);
          border-color: rgba(199, 168, 122, 0.5);
        }

        .vogue-diferencial-light {
          opacity: 0.5;
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        .vogue-diferencial-card:hover .vogue-diferencial-light {
          opacity: 1;
          transform: scale(1.2);
        }

        .vogue-diferenciais-breath {
          opacity: 0;
          animation: vogueDiferenciaisBreath 6.5s ease-in-out infinite;
        }

        @keyframes vogueDiferenciaisBreath {
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