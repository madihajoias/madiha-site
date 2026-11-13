'use client';

import { useState } from 'react';

const faqs = [
  {
    pergunta: 'A avaliação online tem custo?',
    resposta:
      'A análise inicial online pode ser solicitada pelo WhatsApp. O objetivo é entender melhor a peça e orientar os próximos passos antes de uma eventual avaliação presencial.',
  },
  {
    pergunta: 'Preciso ter certificado da joia?',
    resposta:
      'Não. O certificado ajuda quando existe, mas não é obrigatório para iniciar a avaliação online. Fotos da peça, marcações e outras informações já podem ser suficientes para uma primeira leitura.',
  },
  {
    pergunta: 'Quais fotos devo enviar?',
    resposta:
      'O ideal é enviar fotos da frente, verso, fechos, marcações, assinaturas, pedras e documentos disponíveis. Quanto mais nítidas e completas forem as imagens, melhor será a análise inicial.',
  },
  {
    pergunta: 'É possível saber o valor apenas pelas fotos?',
    resposta:
      'As imagens podem ajudar a construir uma referência inicial, mas o valor definitivo pode depender de peso, teor do metal, autenticidade, qualidade das pedras, conservação e outras características que exigem conferência física.',
  },
  {
    pergunta: 'Quanto tempo leva para receber uma orientação?',
    resposta:
      'O prazo depende da quantidade de informações enviadas e da complexidade da peça. Após o envio, a equipe analisa o material e orienta o próximo passo pelo atendimento.',
  },
  {
    pergunta: 'A avaliação online substitui a presencial?',
    resposta:
      'Não. A avaliação online funciona como uma triagem inicial. Quando forem necessários testes, medições ou confirmação de autenticidade, a peça deverá ser examinada presencialmente.',
  },
  {
    pergunta: 'Preciso vender a joia depois da avaliação?',
    resposta:
      'Não. A avaliação serve para ajudar você a entender melhor a peça. A decisão de avançar com venda ou outro atendimento continua sendo sua.',
  },
  {
    pergunta: 'Posso enviar joias antigas ou herdadas?',
    resposta:
      'Sim. Joias antigas, herdadas, assinadas, com pedras, em ouro ou outros tipos de peças podem ser apresentadas para uma primeira análise online.',
  },
];

export default function AvaliacaoOnlineFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq-avaliacao-online"
      aria-labelledby="faq-avaliacao-online-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        py-24
        md:py-32
        lg:py-36
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.11),transparent_34%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[90rem]
          px-6
          md:px-8
        "
      >
        {/* CABEÇALHO */}
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.86fr_1.14fr]
            lg:items-end
            lg:gap-20
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Perguntas frequentes
            </p>

            <h2
              id="faq-avaliacao-online-title"
              className="
                mt-6
                max-w-[820px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#332A2B]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Antes de enviar sua peça, esclareça as principais dúvidas.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#675C5D]
                md:text-[15px]
                md:leading-8
              "
            >
              A avaliação online é uma forma simples de iniciar o atendimento.
              Aqui estão algumas das dúvidas mais comuns sobre fotos, análise,
              presencial e próximos passos.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.72fr_1.28fr]
          "
        >
          {/* LATERAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F0E0C6_52%,#DCC08F_100%)]
              p-8
              shadow-[0_28px_70px_rgba(96,72,45,0.08)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-white/24
                blur-[70px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#8C6635]
                "
              >
                Avaliação Online
              </p>

              <h3
                className="
                  mt-5
                  max-w-[540px]
                  font-serif
                  text-[2.6rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Comece com o que você tem.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[520px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#5F5350]
                "
              >
                Não é necessário conhecer todas as características da joia antes
                de entrar em contato. Fotos e algumas informações já permitem
                iniciar a conversa.
              </p>

              <div
                className="
                  mt-8
                  rounded-[1.5rem]
                  border
                  border-[#8C6635]/14
                  bg-white/25
                  px-6
                  py-5
                "
              >
                <p
                  className="
                    font-serif
                    text-[20px]
                    leading-snug
                    text-[#332A2B]
                  "
                >
                  Foto primeiro. Orientação depois. Presencial quando necessário.
                </p>
              </div>
            </div>
          </div>

          {/* ACCORDION */}
          <div
            className="
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#A17D4F]/12
              bg-[#FCFAF7]
              shadow-[0_24px_64px_rgba(96,72,45,0.045)]
            "
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.pergunta}
                  className="
                    border-b
                    border-[#A17D4F]/10
                    last:border-b-0
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-6
                      px-6
                      py-6
                      text-left
                      md:px-8
                      md:py-7
                    "
                  >
                    <div
                      className="
                        flex
                        items-start
                        gap-5
                      "
                    >
                      <span
                        className="
                          pt-1
                          font-serif
                          text-[18px]
                          text-[#C7A87A]
                        "
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className="
                          font-serif
                          text-[20px]
                          leading-[1.15]
                          text-[#332A2B]
                          md:text-[22px]
                        "
                      >
                        {faq.pergunta}
                      </span>
                    </div>

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#A17D4F]/16
                        text-[20px]
                        font-light
                        text-[#8C6635]
                        transition-transform
                        duration-300

                        ${isOpen ? 'rotate-45' : ''}
                      `}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-500
                      ease-in-out

                      ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          px-6
                          pb-7
                          pl-[69px]
                          pr-8
                          md:px-8
                          md:pb-8
                          md:pl-[82px]
                        "
                      >
                        <p
                          className="
                            max-w-[780px]
                            text-[10px]
                            font-light
                            leading-6
                            text-[#675C5D]
                            md:text-[11px]
                          "
                        >
                          {faq.resposta}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-[2.2rem]
            border
            border-[#A17D4F]/14
            bg-[#332A2B]
            p-8
            shadow-[0_26px_70px_rgba(51,42,43,0.10)]
            md:p-10
          "
        >
          <div
            className="
              grid
              gap-7
              lg:grid-cols-[1fr_auto]
              lg:items-center
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D6BB8B]
                "
              >
                Ainda ficou alguma dúvida?
              </p>

              <h3
                className="
                  mt-4
                  max-w-[860px]
                  font-serif
                  text-[2rem]
                  leading-[1.04]
                  tracking-[-0.025em]
                  text-[#F7F3EF]
                  md:text-[2.7rem]
                "
              >
                Envie sua peça e converse diretamente com a equipe da Madiha Maison.
              </h3>
            </div>

            <a
              href="#contato-avaliacao-online"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-full
                border
                border-[#D6BB8B]
                bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#332A2B]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Solicitar avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}