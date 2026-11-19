'use client';

import {
  ChevronDown,
  CircleHelp,
  MapPin,
  ShieldCheck,
  Watch,
} from 'lucide-react';
import { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Onde vender relógio de luxo na Barra da Tijuca?',
    resposta:
      'A Madiha Maison realiza avaliação e compra de relógios de luxo no Vogue Square, na Barra da Tijuca, Rio de Janeiro. O atendimento é presencial, reservado e feito de forma individual.',
  },
  {
    pergunta: 'Vocês compram relógio sem caixa ou certificado?',
    resposta:
      'Sim. A ausência de caixa, certificado ou documentação não impede necessariamente a avaliação. Marca, referência, materiais, conservação, originalidade e características da peça também são considerados.',
  },
  {
    pergunta: 'Vocês compram relógio parado ou com defeito?',
    resposta:
      'Relógios podem ser avaliados mesmo quando apresentam sinais de uso, estão parados ou necessitam de manutenção. A condição da peça será considerada durante a análise.',
  },
  {
    pergunta: 'Vocês compram relógios de ouro usados?',
    resposta:
      'Sim. Compramos relógios de marcas reconhecidas em ouro, inclusive peças usadas, antigas, desgastadas ou em diferentes estados de conservação.',
  },
  {
    pergunta: 'Vocês compram relógios Rolex, Cartier e Omega?',
    resposta:
      'Avaliamos relógios de marcas reconhecidas como Rolex, Cartier, Omega, Patek Philippe, Audemars Piguet, Vacheron Constantin, IWC, Breitling, TAG Heuer e outras marcas de alta relojoaria.',
  },
  {
    pergunta: 'Como é definido o valor do relógio?',
    resposta:
      'A análise considera fatores como marca, modelo, referência, movimento, materiais, originalidade, estado de conservação, documentação, acessórios e contexto comercial da peça.',
  },
  {
    pergunta: 'Preciso vender o relógio depois da avaliação?',
    resposta:
      'Não. A avaliação e a apresentação da proposta não obrigam a venda. A negociação só prossegue caso você concorde com as condições apresentadas.',
  },
  {
    pergunta: 'Relógios antigos ou vintage podem ser vendidos?',
    resposta:
      'Sim. Relógios antigos, vintage, referências descontinuadas e peças de coleção podem ser analisados individualmente de acordo com suas características.',
  },
];

export default function CompraRelogiosFAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section
      id="faq-compra-relogios"
      aria-labelledby="faq-compra-relogios-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        px-6
        py-24
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
          bg-[radial-gradient(circle_at_18%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_84%_76%,rgba(90,16,23,0.06),transparent_34%)]
        "
      />

      {/* HALO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[20%]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#C7A87A]/8
          blur-[120px]
          motion-safe:animate-[pulse_7s_ease-in-out_infinite]
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
            lg:grid-cols-[0.8fr_1.2fr]
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
                bg-[#EFE4D1]/65
                px-4
                py-3
              "
            >
              <CircleHelp
                size={14}
                strokeWidth={1.3}
                className="text-[#A17D4F]"
              />

              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#A17D4F]
                "
              >
                Dúvidas frequentes
              </p>
            </div>

            <h2
              id="faq-compra-relogios-title"
              className="
                mt-5
                max-w-[620px]
                text-[#4F1720]
              "
            >
              Perguntas sobre venda de relógios
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
            Reunimos algumas das dúvidas mais comuns de quem deseja avaliar ou
            vender um relógio de luxo na Barra da Tijuca.
          </p>
        </div>

        {/* FAQ */}
        <div
          className="
            mt-14
            grid
            gap-5
            lg:grid-cols-[1.2fr_0.8fr]
            lg:gap-8
            md:mt-16
          "
        >
          {/* ACCORDION */}
          <div className="space-y-3">
            {perguntas.map((item, index) => {
              const ativo = aberto === index;

              return (
                <div
                  key={item.pergunta}
                  className="
                    overflow-hidden
                    rounded-[1.6rem]
                    border
                    border-[#5A1017]/8
                    bg-white/55
                    shadow-[0_16px_45px_rgba(63,38,26,0.04)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#C7A87A]/30
                  "
                >
                  <button
                    type="button"
                    aria-expanded={ativo}
                    onClick={() => setAberto(ativo ? null : index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      px-6
                      py-6
                      text-left
                      md:px-7
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          hidden
                          font-serif
                          text-[17px]
                          text-[#C7A87A]
                          sm:block
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
                          md:text-[18px]
                        "
                      >
                        {item.pergunta}
                      </span>
                    </div>

                    <div
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/28
                        bg-[#EFE4D1]
                        transition-all
                        duration-300
                        ${ativo ? 'rotate-180' : 'rotate-0'}
                      `}
                    >
                      <ChevronDown
                        size={16}
                        strokeWidth={1.4}
                        className="text-[#A17D4F]"
                      />
                    </div>
                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        ativo
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          border-t
                          border-[#5A1017]/7
                          px-6
                          pb-6
                          pt-5
                          md:px-7
                        "
                      >
                        <p
                          className="
                            max-w-[760px]
                            text-[12px]
                            font-light
                            leading-7
                            text-[#725D58]
                            md:text-[13px]
                          "
                        >
                          {item.resposta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CARD LATERAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.2rem]
              border
              border-[#C7A87A]/24
              bg-[#4F1720]
              p-8
              shadow-[0_26px_70px_rgba(63,38,26,0.13)]
              md:p-9
              lg:sticky
              lg:top-32
              lg:h-fit
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                bg-[#C7A87A]/14
                blur-[60px]
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
                  border-[#C7A87A]/28
                  bg-[#C7A87A]/10
                  motion-safe:animate-[pulse_4s_ease-in-out_infinite]
                "
              >
                <Watch
                  size={24}
                  strokeWidth={1.2}
                  className="text-[#D6BB8B]"
                />
              </div>

              <p
                className="
                  mt-7
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D6BB8B]
                "
              >
                Venda seu relógio
              </p>

              <p
                className="
                  mt-4
                  font-serif
                  text-[24px]
                  leading-tight
                  text-[#F7F3EF]
                "
              >
                Ainda está em dúvida se o seu relógio pode ser avaliado?
              </p>

              <p
                className="
                  mt-5
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                  md:text-[13px]
                "
              >
                Leve a peça para uma análise individual. Relógios de luxo,
                vintage, modelos de coleção e relógios de marcas reconhecidas
                em ouro podem ser avaliados presencialmente.
              </p>

              <div
                className="
                  mt-7
                  flex
                  items-start
                  gap-3
                  rounded-[1.4rem]
                  border
                  border-[#C7A87A]/18
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

                <p
                  className="
                    text-[11px]
                    font-light
                    leading-6
                    text-[#D3C3C0]
                  "
                >
                  Avaliação sem obrigação de venda e atendimento reservado.
                </p>
              </div>

              <div
                className="
                  mt-4
                  flex
                  items-start
                  gap-3
                  rounded-[1.4rem]
                  border
                  border-[#C7A87A]/18
                  bg-white/[0.045]
                  p-5
                "
              >
                <MapPin
                  size={17}
                  strokeWidth={1.2}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#D6BB8B]
                  "
                />

                <p
                  className="
                    text-[11px]
                    font-light
                    leading-6
                    text-[#D3C3C0]
                  "
                >
                  Vogue Square • Av. das Américas, 8585 • Sala 490 • Barra da
                  Tijuca.
                </p>
              </div>

              <a
                href="#localizacao"
                className="
                  mt-8
                  inline-flex
                  min-h-[54px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7A87A]
                  bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                  px-7
                  text-center
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.21em]
                  text-[#4F1720]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >
                Avaliar meu relógio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}