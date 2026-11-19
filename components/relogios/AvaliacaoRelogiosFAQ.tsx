export default function AvaliacaoRelogiosFAQ() {
  const perguntas = [
    {
      pergunta: 'Quais relógios podem ser avaliados?',
      resposta:
        'A Madiha Maison avalia relógios de luxo, peças de coleção, modelos contemporâneos e relógios vintage. Cada peça é analisada individualmente conforme marca, referência, materiais, conservação e demais características relevantes.',
    },
    {
      pergunta: 'É necessário ter certificado ou caixa original?',
      resposta:
        'Não. A avaliação pode ser realizada mesmo sem certificado, caixa ou acessórios. Quando disponíveis, esses itens ajudam a contextualizar melhor a peça e podem contribuir para a análise.',
    },
    {
      pergunta: 'Relógios com sinais de uso podem ser avaliados?',
      resposta:
        'Sim. Marcas de uso, desgaste, polimentos, reparos e outras intervenções fazem parte da análise do estado de conservação do relógio.',
    },
    {
      pergunta: 'A avaliação considera apenas a marca do relógio?',
      resposta:
        'Não. Marca e referência são importantes, mas também são considerados fatores como mecanismo, materiais, originalidade dos componentes, conservação, documentação e características específicas da peça.',
    },
    {
      pergunta: 'Relógios vintage também podem ser avaliados?',
      resposta:
        'Sim. Relógios vintage podem exigir uma leitura específica, considerando idade, referência, conservação, componentes, intervenções e contexto da peça.',
    },
    {
      pergunta: 'Onde é realizada a avaliação de relógios?',
      resposta:
        'O atendimento é realizado presencialmente na Madiha Maison, no Vogue Square, Av. das Américas, 8585, Sala 490, Barra da Tijuca, Rio de Janeiro.',
    },
  ];

  return (
    <section
      id="faq-avaliacao-relogios"
      aria-labelledby="faq-relogios-title"
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
          bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_84%_74%,rgba(90,16,23,0.06),transparent_34%)]
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
              id="faq-relogios-title"
              className="
                mt-5
                max-w-[650px]
                text-[#4F1720]
              "
            >
              Dúvidas sobre avaliação de relógios
            </h2>
          </div>

          <div>
            <p
              className="
                max-w-[620px]
                text-[14px]
                font-light
                leading-8
                text-[#725D58]
                md:text-[15px]
              "
            >
              Reunimos algumas das principais dúvidas sobre o processo de
              avaliação, documentação, conservação e atendimento presencial.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div
          className="
            mt-14
            grid
            gap-4
            md:mt-16
            lg:grid-cols-2
          "
        >
          {perguntas.map((item, index) => (
            <article
              key={item.pergunta}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#5A1017]/8
                bg-white/48
                p-7
                shadow-[0_18px_55px_rgba(63,38,26,0.05),inset_0_1px_0_rgba(255,255,255,0.75)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C7A87A]/30
                hover:shadow-[0_24px_65px_rgba(63,38,26,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]
                md:p-8
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-16
                  -top-16
                  h-36
                  w-36
                  rounded-full
                  bg-[#C7A87A]/8
                  blur-[44px]
                  transition-all
                  duration-500
                  group-hover:bg-[#C7A87A]/14
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    items-start
                    gap-5
                  "
                >
                  <span
                    className="
                      shrink-0
                      font-serif
                      text-[28px]
                      leading-none
                      text-[#C7A87A]
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3
                      className="
                        text-[#4F1720]
                      "
                    >
                      {item.pergunta}
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
                      {item.resposta}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-14
            rounded-[2rem]
            border
            border-[#C7A87A]/22
            bg-[#EFE4D1]/65
            px-7
            py-7
            backdrop-blur-xl
            md:mt-16
            md:px-9
            md:py-8
          "
        >
          <div
            className="
              grid
              gap-5
              md:grid-cols-[auto_1fr]
              md:items-center
              md:gap-8
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#A17D4F]
              "
            >
              Ainda tem dúvidas?
            </p>

            <p
              className="
                max-w-[850px]
                text-[12px]
                font-light
                leading-7
                text-[#6E5A54]
                md:text-[13px]
              "
            >
              Entre em contato com a Madiha Maison para esclarecer dúvidas
              específicas sobre sua peça antes de agendar a avaliação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}