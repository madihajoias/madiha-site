const perguntas = [
  {
    pergunta: 'Como funciona a avaliação de joias em domicílio?',
    resposta:
      'O atendimento começa pelo WhatsApp, com algumas informações iniciais sobre as peças. Após essa análise, o atendimento pode ser organizado para o endereço combinado, onde a avaliação é realizada de forma acompanhada e transparente.',
  },
  {
    pergunta: 'Quem realiza a avaliação em domicílio?',
    resposta:
      'A avaliação é conduzida por profissional especializado em joias e ouro, com atenção às características da peça, materiais, estado e demais elementos relevantes para a análise.',
  },
  {
    pergunta: 'A avaliação também pode ser feita em peças de ouro?',
    resposta:
      'Sim. O atendimento pode incluir avaliação de joias de ouro, peças em ouro, joias antigas, peças herdadas, diamantes, brilhantes e outros itens relacionados à joalheria.',
  },
  {
    pergunta: 'Preciso enviar fotos antes do atendimento?',
    resposta:
      'As fotos podem ser solicitadas para ajudar na análise inicial e na organização do atendimento. Elas não substituem a avaliação presencial realizada no local.',
  },
  {
    pergunta: 'É necessário levar ou transportar as joias?',
    resposta:
      'Na avaliação em domicílio, o profissional vai até o endereço previamente combinado, reduzindo a necessidade de transportar as peças para outro local.',
  },
  {
    pergunta: 'Posso acompanhar a avaliação?',
    resposta:
      'Sim. O atendimento é acompanhado e os critérios relevantes podem ser explicados durante o processo, para que você compreenda melhor a análise realizada.',
  },
  {
    pergunta: 'A avaliação em domicílio me obriga a vender as peças?',
    resposta:
      'Não. A avaliação não cria obrigação de venda. Você pode receber as informações apresentadas e decidir com tranquilidade o que deseja fazer depois.',
  },
  {
    pergunta: 'A avaliação em domicílio atende toda a cidade do Rio de Janeiro?',
    resposta:
      'A disponibilidade depende da região, da agenda e das características do atendimento. O primeiro contato pelo WhatsApp permite verificar a possibilidade de atendimento para o endereço informado.',
  },
];

export default function AvaliacaoDomicilioFAQ() {
  return (
    <section
      id="faq-avaliacao-domicilio"
      aria-labelledby="faq-avaliacao-domicilio-title"
      className="
        relative
        overflow-hidden
        bg-[#FCFAF7]
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
              id="faq-avaliacao-domicilio-title"
              className="
                mt-6
                max-w-[800px]
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
              Dúvidas sobre avaliação de joias em domicílio.
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
              Reunimos as principais informações sobre o atendimento, a
              avaliação de joias e ouro e a forma de solicitar uma visita.
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
            Avaliação especializada
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
            Fale com a Madiha Maison e verifique a disponibilidade para
            avaliação de joias em domicílio.
          </h3>
        </div>
      </div>
    </section>
  );
}