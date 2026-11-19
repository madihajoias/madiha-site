'use client';

import { ChevronDown, HelpCircle, MapPin, Sparkles } from 'lucide-react';
import { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Onde a Madiha Maison atende na Barra da Tijuca?',
    resposta:
      'O atendimento presencial da Madiha Maison na Barra da Tijuca acontece no Vogue Square, na Av. das Américas, 8585, sala 490, Rio de Janeiro - RJ.',
  },
  {
    pergunta: 'A Madiha Maison compra ouro na Barra da Tijuca?',
    resposta:
      'Sim. Peças em ouro podem ser apresentadas para análise presencial, incluindo alianças, correntes, pulseiras, brincos, joias antigas e outros itens em ouro.',
  },
  {
    pergunta: 'Posso avaliar joias na Barra da Tijuca?',
    resposta:
      'Sim. A avaliação pode considerar metal, pedras, assinatura, design, acabamento, conservação, época e demais características relevantes da peça.',
  },
  {
    pergunta: 'A Madiha Maison avalia diamantes na Barra?',
    resposta:
      'Sim. Diamantes e joias com pedras preciosas podem ser analisados considerando características como peso, lapidação, cor, pureza, documentação, montagem e contexto da joia.',
  },
  {
    pergunta: 'Vocês avaliam relógios de luxo na Barra da Tijuca?',
    resposta:
      'Sim. Relógios de marcas reconhecidas podem ser analisados considerando referência, movimento, materiais, originalidade, conservação, documentação e acessórios.',
  },
  {
    pergunta: 'É possível vender um relógio em ouro mesmo usado?',
    resposta:
      'Sim. Relógios de marcas reconhecidas em ouro podem ser analisados mesmo em diferentes estados de conservação, inclusive peças usadas e com sinais de desgaste.',
  },
  {
    pergunta: 'Preciso levar documentos ou certificados das peças?',
    resposta:
      'Documentos, certificados, caixas e acessórios podem ajudar a contextualizar a peça, mas a ausência desses itens não impede necessariamente uma análise inicial.',
  },
  {
    pergunta: 'Como chegar à Madiha Maison na Barra da Tijuca?',
    resposta:
      'A Madiha Maison está no Vogue Square, na Av. das Américas, 8585, sala 490. A localização pode ser aberta diretamente no Google Maps para criação da rota.',
  },
];

export default function BarraTijucaFAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  function alternarPergunta(index: number) {
    setAberta((atual) => (atual === index ? null : index));
  }

  return (
    <>
      <section
        id="faq"
        aria-labelledby="barra-tijuca-faq-title"
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
            barra-faq-halo
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
                border-[#C7A87A]/20
                bg-white/[0.045]
                px-4
                py-3
                backdrop-blur-xl
              "
            >
              <HelpCircle
                size={14}
                strokeWidth={1.3}
                className="
                  barra-faq-icon
                  text-[#D6BB8B]
                "
              />

              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#D6BB8B]
                "
              >
                Dúvidas frequentes
              </p>
            </div>

            <h2
              id="barra-tijuca-faq-title"
              className="
                mt-5
                text-[#F7F3EF]
              "
            >
              Perguntas sobre a Madiha Maison na Barra da Tijuca
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[720px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]

                md:text-[15px]
              "
            >
              Informações sobre localização, atendimento, compra de ouro,
              avaliação de joias, diamantes e relógios de luxo na Barra da
              Tijuca.
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
                          ? 'border-[#C7A87A]/36 bg-white/[0.075] shadow-[0_18px_45px_rgba(20,5,8,0.12)]'
                          : 'border-white/10 bg-white/[0.045] hover:border-[#C7A87A]/26 hover:bg-white/[0.06]'
                      }
                    `}
                  >
                    {estaAberta && (
                      <div
                        aria-hidden="true"
                        className="
                          barra-faq-breath
                          pointer-events-none
                          absolute
                          inset-0
                          bg-[#7A1622]
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
                            text-[#F7F3EF]

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
                              ? 'rotate-180 border-[#C7A87A]/45 bg-[#C7A87A]/10'
                              : 'border-white/10 bg-white/[0.04]'
                          }
                        `}
                      >
                        <ChevronDown
                          size={17}
                          strokeWidth={1.3}
                          className="text-[#D6BB8B]"
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
                            border-white/8
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
                              text-[#D3C3C0]

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

          {/* BLOCO FINAL */}
          <div
            className="
              mx-auto
              mt-12
              max-w-[980px]
              overflow-hidden
              rounded-[2rem]
              border
              border-[#C7A87A]/26
              bg-[#C7A87A]/8
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
                    bg-[#C7A87A]/8
                  "
                >
                  <MapPin
                    size={18}
                    strokeWidth={1.2}
                    className="text-[#D6BB8B]"
                  />
                </div>

                <div>
                  <p
                    className="
                      font-serif
                      text-[19px]
                      leading-tight
                      text-[#F7F3EF]

                      md:text-[21px]
                    "
                  >
                    Atendimento na Barra da Tijuca
                  </p>

                  <p
                    className="
                      mt-3
                      max-w-[620px]
                      text-[11px]
                      font-light
                      leading-6
                      text-[#D3C3C0]

                      md:text-[12px]
                    "
                  >
                    A Madiha Maison está no Vogue Square, sala 490, na Av. das
                    Américas.
                  </p>
                </div>
              </div>

              <a
                href="/localizacao/vogue-square/"
                className="
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7A87A]
                  bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                  px-7
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#4F1720]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                "
              >
                Conhecer Vogue Square
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .barra-faq-halo {
          animation: barraFaqHalo 7s ease-in-out infinite;
        }

        @keyframes barraFaqHalo {
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

        .barra-faq-icon {
          animation: barraFaqIcon 2.5s ease-in-out infinite;
        }

        @keyframes barraFaqIcon {
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

        .barra-faq-breath {
          opacity: 0;
          animation: barraFaqBreath 6.5s ease-in-out infinite;
        }

        @keyframes barraFaqBreath {
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