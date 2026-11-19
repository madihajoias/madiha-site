'use client';

import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Onde fica a Madiha Maison no Vogue Square?',
    resposta:
      'A Madiha Maison está localizada no Vogue Square, na Av. das Américas, 8585, sala 490, Barra da Tijuca, Rio de Janeiro - RJ, CEP 22793-081.',
  },
  {
    pergunta: 'Quais serviços a Madiha Maison oferece no Vogue Square?',
    resposta:
      'No Vogue Square, a Madiha Maison oferece atendimento para compra e avaliação de ouro, avaliação de joias, análise de diamantes e pedras preciosas, além de avaliação e negociação de relógios de luxo.',
  },
  {
    pergunta: 'É possível avaliar uma joia diretamente no Vogue Square?',
    resposta:
      'Sim. A Madiha Maison realiza atendimento presencial para análise de joias, considerando materiais, pedras, assinatura, acabamento, conservação e demais características relevantes da peça.',
  },
  {
    pergunta: 'A Madiha Maison compra ouro no Vogue Square?',
    resposta:
      'Sim. Peças em ouro podem ser analisadas individualmente no atendimento da Madiha Maison no Vogue Square. Peso, teor, características, pedras e contexto da peça podem fazer parte da avaliação antes da apresentação de uma proposta.',
  },
  {
    pergunta: 'Posso levar um relógio de luxo para avaliação?',
    resposta:
      'Sim. Relógios de marcas reconhecidas podem ser analisados considerando referência, movimento, materiais, originalidade, conservação, documentação e acessórios.',
  },
  {
    pergunta: 'É necessário ter certificado para avaliar diamantes?',
    resposta:
      'Não necessariamente. Certificados e documentos podem ajudar na análise, mas a ausência de documentação não impede automaticamente uma avaliação inicial da pedra ou da joia.',
  },
  {
    pergunta: 'Preciso agendar antes de ir ao Vogue Square?',
    resposta:
      'O atendimento pode ser alinhado previamente para tornar a visita mais organizada e permitir uma análise mais adequada da peça.',
  },
  {
    pergunta: 'Como chegar à Madiha Maison no Vogue Square?',
    resposta:
      'A Madiha Maison está no Vogue Square, na Av. das Américas, 8585, sala 490, Barra da Tijuca. A rota pode ser aberta diretamente pelo Google Maps para facilitar o deslocamento.',
  },
];

export default function VogueSquareFAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  function alternarPergunta(index: number) {
    setAberta((atual) => (atual === index ? null : index));
  }

  return (
    <>
      <section
        id="faq"
        aria-labelledby="vogue-square-faq-title"
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
            vogue-faq-halo
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
              mx-auto
              max-w-[860px]
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
              <HelpCircle
                size={14}
                strokeWidth={1.3}
                className="
                  vogue-faq-icon
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
                Dúvidas frequentes
              </p>
            </div>

            <h2
              id="vogue-square-faq-title"
              className="
                mt-5
                text-[#4F1720]
              "
            >
              Perguntas sobre a Madiha Maison no Vogue Square
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
              Informações sobre localização, atendimento presencial, ouro,
              joias, diamantes e relógios de luxo na Barra da Tijuca.
            </p>
          </div>

          {/* FAQ */}
          <div
            className="
              mx-auto
              mt-16
              max-w-[980px]
            "
          >
            <div className="space-y-3">
              {perguntas.map((item, index) => {
                const estaAberta = aberta === index;

                return (
                  <article
                    key={item.pergunta}
                    className={`
                      relative
                      overflow-hidden
                      rounded-[1.8rem]
                      border
                      backdrop-blur-xl
                      transition-all
                      duration-500

                      ${
                        estaAberta
                          ? 'border-[#C7A87A]/38 bg-white/75 shadow-[0_18px_45px_rgba(63,38,26,0.06)]'
                          : 'border-[#5A1017]/8 bg-white/55 hover:border-[#C7A87A]/28 hover:bg-white/70'
                      }
                    `}
                  >
                    {/* RESPIRAÇÃO */}
                    {estaAberta && (
                      <div
                        aria-hidden="true"
                        className="
                          vogue-faq-breath
                          pointer-events-none
                          absolute
                          inset-0
                          bg-[#EFE4D1]
                        "
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => alternarPergunta(index)}
                      aria-expanded={estaAberta}
                      className="
                        relative
                        z-10
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-5
                        px-6
                        py-6
                        text-left

                        md:px-8
                        md:py-7
                      "
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="
                            mt-0.5
                            font-serif
                            text-[15px]
                            text-[#C7A87A]
                          "
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <span
                          className="
                            font-serif
                            text-[17px]
                            leading-snug
                            text-[#4F1720]

                            md:text-[19px]
                          "
                        >
                          {item.pergunta}
                        </span>
                      </div>

                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          transition-all
                          duration-500

                          ${
                            estaAberta
                              ? 'rotate-180 border-[#C7A87A]/45 bg-[#EFE4D1]'
                              : 'border-[#5A1017]/10 bg-[#F7F3EF]/80'
                          }
                        `}
                      >
                        <ChevronDown
                          size={17}
                          strokeWidth={1.3}
                          className="text-[#A17D4F]"
                        />
                      </span>
                    </button>

                    <div
                      className={`
                        relative
                        z-10
                        grid
                        transition-all
                        duration-500
                        ease-in-out

                        ${
                          estaAberta
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <div
                          className="
                            border-t
                            border-[#5A1017]/8
                            px-6
                            pb-7
                            pt-5

                            md:px-8
                            md:pb-8
                          "
                        >
                          <p
                            className="
                              max-w-[820px]
                              text-[12px]
                              font-light
                              leading-7
                              text-[#725D58]

                              md:pl-9
                              md:text-[13px]
                            "
                          >
                            {item.resposta}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* RODAPÉ */}
          <div
            className="
              mx-auto
              mt-12
              max-w-[980px]
              overflow-hidden
              rounded-[2rem]
              border
              border-[#C7A87A]/28
              bg-[#EFE4D1]/60
              p-7
              backdrop-blur-xl

              md:p-9
            "
          >
            <div
              className="
                grid
                gap-6

                md:grid-cols-[1fr_auto]
                md:items-center
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
                    bg-[#F7F3EF]/70
                  "
                >
                  <Sparkles
                    size={18}
                    strokeWidth={1.2}
                    className="text-[#A17D4F]"
                  />
                </div>

                <div>
                  <p
                    className="
                      font-serif
                      text-[19px]
                      leading-tight
                      text-[#4F1720]

                      md:text-[21px]
                    "
                  >
                    Quer trazer uma peça para análise?
                  </p>

                  <p
                    className="
                      mt-3
                      max-w-[620px]
                      text-[11px]
                      font-light
                      leading-6
                      text-[#725D58]

                      md:text-[12px]
                    "
                  >
                    A Madiha Maison atende no Vogue Square, sala 490, na Barra
                    da Tijuca.
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#4F1720]
                  px-7
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#F7F3EF]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#5A1017]
                "
              >
                Como chegar
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .vogue-faq-halo {
          animation: vogueFaqHalo 7s ease-in-out infinite;
        }

        @keyframes vogueFaqHalo {
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

        .vogue-faq-icon {
          animation: vogueFaqIcon 2.5s ease-in-out infinite;
        }

        @keyframes vogueFaqIcon {
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

        .vogue-faq-breath {
          opacity: 0;
          animation: vogueFaqBreath 6.5s ease-in-out infinite;
        }

        @keyframes vogueFaqBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.48;
          }
        }
      `}</style>
    </>
  );
}