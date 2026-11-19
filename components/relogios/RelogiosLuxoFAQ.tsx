'use client';

import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';

const perguntas = [
  {
    pergunta: 'O que caracteriza um relógio de luxo?',
    resposta:
      'Um relógio de luxo costuma reunir tradição relojoeira, qualidade de construção, movimento, acabamento, materiais, design, inovação e identidade de marca. O preço, isoladamente, não define a relevância de uma peça.',
  },
  {
    pergunta: 'Quais marcas são consideradas relógios de luxo?',
    resposta:
      'Marcas como Rolex, Patek Philippe, Audemars Piguet, Vacheron Constantin, Cartier, Omega, Jaeger-LeCoultre, IWC, Breitling, TAG Heuer, Panerai e Bulgari fazem parte do universo da alta relojoaria e dos relógios de luxo, cada uma com características e posicionamentos próprios.',
  },
  {
    pergunta: 'Relógios de luxo usados continuam tendo valor?',
    resposta:
      'Sim. Um relógio usado pode continuar relevante dependendo da marca, referência, movimento, originalidade, conservação, documentação, acessórios, demanda e características específicas da peça.',
  },
  {
    pergunta: 'Relógios vintage podem ser considerados de luxo?',
    resposta:
      'Sim. Relógios vintage podem reunir valor histórico, técnico e colecionável. A época de fabricação, referência, originalidade, raridade, conservação e importância dentro da trajetória da marca podem influenciar sua relevância.',
  },
  {
    pergunta: 'Relógio de luxo em ouro pode ser vendido mesmo com desgaste?',
    resposta:
      'Sim. A Madiha Maison compra relógios de marcas reconhecidas em ouro em qualquer estado de conservação. Peças usadas, antigas, desgastadas, paradas, sem caixa ou sem documentação podem ser analisadas individualmente.',
  },
  {
    pergunta: 'Caixa e documentos são obrigatórios para avaliar um relógio?',
    resposta:
      'Não necessariamente. Caixa, certificado, nota fiscal e demais documentos podem ajudar na análise, mas a ausência desses itens não impede automaticamente que o relógio seja avaliado.',
  },
  {
    pergunta: 'Como saber qual é a referência do meu relógio?',
    resposta:
      'A referência pode aparecer em documentos, certificados, etiquetas, gravações da caixa ou em outras características da peça. Quando essa informação não está disponível, uma análise presencial pode ajudar na identificação.',
  },
  {
    pergunta: 'Onde avaliar um relógio de luxo na Barra da Tijuca?',
    resposta:
      'A Madiha Maison realiza atendimento relacionado a relógios de luxo no Vogue Square, na Av. das Américas, 8585, sala 490, Barra da Tijuca, Rio de Janeiro.',
  },
];

export default function RelogiosLuxoFAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  function alternarPergunta(index: number) {
    setAberta((atual) => (atual === index ? null : index));
  }

  return (
    <>
      <section
        id="faq"
        aria-labelledby="relogios-luxo-faq-title"
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
            luxo-faq-halo
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
                  luxo-faq-icon
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
                Dúvidas frequentes
              </p>
            </div>

            <h2
              id="relogios-luxo-faq-title"
              className="
                mt-6
                text-[#F7F3EF]
              "
            >
              Perguntas sobre relógios de luxo
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
              Entenda melhor alguns dos principais aspectos relacionados a
              marcas, referências, relógios usados, vintage, ouro, avaliação e
              negociação.
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
                          ? 'border-[#C7A87A]/32 bg-white/[0.07]'
                          : 'border-white/10 bg-white/[0.04] hover:border-[#C7A87A]/24 hover:bg-white/[0.055]'
                      }
                    `}
                  >
                    {/* RESPIRAÇÃO APENAS NO ITEM ABERTO */}
                    {estaAberta && (
                      <div
                        aria-hidden="true"
                        className="
                          luxo-faq-breath
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
                            text-[#C7A87A]/70
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
                              ? 'rotate-180 border-[#C7A87A]/45 bg-[#C7A87A]/12'
                              : 'border-white/12 bg-white/[0.035]'
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
                              pl-0
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

          {/* RODAPÉ DO FAQ */}
          <div
            className="
              mx-auto
              mt-12
              max-w-[980px]
              overflow-hidden
              rounded-[2rem]
              border
              border-[#C7A87A]/24
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
                    bg-[#C7A87A]/10
                  "
                >
                  <Sparkles
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
                    Tem um relógio e quer entender melhor sua peça?
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
                    Conheça o processo de avaliação ou veja como funciona a
                    compra de relógios pela Madiha Maison.
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  flex-col
                  gap-3

                  sm:flex-row

                  md:flex-col

                  lg:flex-row
                "
              >
                <a
                  href="/relogios/avaliacao-de-relogios/"
                  className="
                    inline-flex
                    min-h-[50px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.045]
                    px-6
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#F7F3EF]
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#C7A87A]/35
                  "
                >
                  Avaliação de relógios
                </a>

                <a
                  href="/relogios/compra-de-relogios/"
                  className="
                    inline-flex
                    min-h-[50px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C7A87A]
                    bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                    px-6
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#4F1720]
                    transition-all
                    duration-300

                    hover:-translate-y-1
                  "
                >
                  Vender meu relógio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .luxo-faq-halo {
          animation: luxoFaqHalo 7s ease-in-out infinite;
        }

        @keyframes luxoFaqHalo {
          0%,
          100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(0.94);
          }

          50% {
            opacity: 0.82;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        .luxo-faq-icon {
          animation: luxoFaqIcon 2.5s ease-in-out infinite;
        }

        @keyframes luxoFaqIcon {
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

        .luxo-faq-breath {
          opacity: 0;
          animation: luxoFaqBreath 6.5s ease-in-out infinite;
        }

        @keyframes luxoFaqBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.2;
          }
        }
      `}</style>
    </>
  );
}