const perguntas = [
  {
    pergunta: 'Onde fica a Madiha Maison?',
    resposta:
      'A Madiha Maison está no Vogue Square, na Barra da Tijuca, Rio de Janeiro.',
  },
  {
    pergunta: 'Preciso agendar antes de ir ao Vogue Square?',
    resposta:
      'O agendamento é recomendado para organizar o atendimento e reservar um período adequado para receber você.',
  },
  {
    pergunta: 'Posso realizar avaliação de joias no Vogue Square?',
    resposta:
      'Sim. A Madiha Maison realiza atendimentos relacionados à avaliação de joias, ouro e peças de valor em seu espaço no Vogue Square.',
  },
  {
    pergunta: 'O Vogue Square possui estacionamento?',
    resposta:
      'O Vogue Square conta com estrutura de estacionamento para visitantes do complexo.',
  },
  {
    pergunta: 'Como faço para chegar à Madiha Maison?',
    resposta:
      'Você pode consultar a localização pelo mapa da página e abrir a rota diretamente no Google Maps para chegar ao Vogue Square.',
  },
  {
    pergunta: 'O atendimento é reservado?',
    resposta:
      'A Madiha Maison trabalha com atendimento organizado e ambiente profissional, adequado para avaliações e serviços relacionados a peças de valor.',
  },
];

export default function AtendimentoVogueSquareFAQ() {
  return (
    <section
      id="faq-vogue-square"
      aria-labelledby="faq-vogue-square-title"
      className="
        relative
        overflow-hidden
        bg-[#FCFAF7]
        py-24
        md:py-28
        lg:py-32
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_14%_18%,rgba(199,168,122,0.12),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.10),transparent_34%)]
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
              id="faq-vogue-square-title"
              className="
                mt-6
                max-w-[780px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#332A2B]
                sm:text-[3.7rem]
                md:text-[4.3rem]
              "
            >
              Dúvidas sobre a Madiha Maison no Vogue Square.
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
              Informações rápidas sobre localização, atendimento e visita à
              Madiha Maison na Barra da Tijuca.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-4
            lg:grid-cols-2
          "
        >
          {perguntas.map((item, index) => (
            <details
              key={item.pergunta}
              className="
                group
                rounded-[1.8rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                px-6
                py-5
                shadow-[0_16px_42px_rgba(96,72,45,0.035)]
                open:border-[#A17D4F]/22
                open:bg-[#FCFAF7]
                md:px-7
                md:py-6
              "
            >
              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  gap-6
                "
              >
                <div className="flex items-center gap-5">
                  <span
                    className="
                      font-serif
                      text-[20px]
                      text-[#C7A87A]
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3
                    className="
                      font-serif
                      text-[20px]
                      leading-snug
                      text-[#332A2B]
                      md:text-[22px]
                    "
                  >
                    {item.pergunta}
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className="
                    relative
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A17D4F]/16
                  "
                >
                  <span className="absolute h-px w-3.5 bg-[#A17D4F]" />

                  <span
                    className="
                      absolute
                      h-3.5
                      w-px
                      bg-[#A17D4F]
                      transition-transform
                      duration-300
                      group-open:rotate-90
                      group-open:opacity-0
                    "
                  />
                </span>
              </summary>

              <div
                className="
                  ml-0
                  mt-5
                  border-t
                  border-[#A17D4F]/10
                  pt-5
                  md:ml-[45px]
                "
              >
                <p
                  className="
                    max-w-[680px]
                    text-[10px]
                    font-light
                    leading-6
                    text-[#675C5D]
                  "
                >
                  {item.resposta}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div
          className="
            mt-12
            rounded-[2.2rem]
            border
            border-[#A17D4F]/14
            bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DEC296_100%)]
            p-8
            text-center
            shadow-[0_22px_58px_rgba(96,72,45,0.06)]
            md:p-10
          "
        >
          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#8C6635]
            "
          >
            Vogue Square • Barra da Tijuca
          </p>

          <h3
            className="
              mx-auto
              mt-4
              max-w-[900px]
              font-serif
              text-[2.1rem]
              leading-[1.03]
              tracking-[-0.025em]
              text-[#332A2B]
              md:text-[2.8rem]
            "
          >
            Visite a Madiha Maison no Vogue Square.
          </h3>
        </div>
      </div>
    </section>
  );
}