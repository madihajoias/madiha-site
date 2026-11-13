const itensParaLevar = [
  {
    numero: '01',
    titulo: 'A peça',
    texto:
      'Leve a joia, ouro, diamante, relógio ou outro item que deseja apresentar para avaliação.',
  },
  {
    numero: '02',
    titulo: 'Certificados',
    texto:
      'Se houver certificados, laudos ou documentos técnicos, eles podem ajudar na contextualização da peça.',
  },
  {
    numero: '03',
    titulo: 'Embalagens e referências',
    texto:
      'Caixas, estojos, cartões, números de referência ou materiais relacionados podem trazer informações adicionais.',
  },
  {
    numero: '04',
    titulo: 'Histórico conhecido',
    texto:
      'Informações sobre origem, compra, herança ou manutenção da peça podem ser úteis quando disponíveis.',
  },
];

const etapasAvaliacao = [
  'Recepção da peça',
  'Observação inicial',
  'Conferência de características',
  'Medições e verificações, quando aplicáveis',
  'Explicação dos critérios',
  'Apresentação das possibilidades',
];

export default function AtendimentoHoraMarcadaPreparacaoSection() {
  return (
    <section
      id="o-que-levar-atendimento"
      aria-labelledby="preparacao-atendimento-title"
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
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.88fr_1.12fr]
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
              Antes de vir
            </p>

            <h2
              id="preparacao-atendimento-title"
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
              Traga a peça e, se tiver, as informações que ajudam a contar sua
              história.
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
              Não é necessário ter toda a documentação para ser atendido.
              Certificados, referências e informações adicionais apenas ajudam
              a contextualizar melhor a peça durante a avaliação.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {itensParaLevar.map((item) => (
            <article
              key={item.numero}
              className="
                rounded-[2rem]
                border
                border-[#A17D4F]/12
                bg-[#FCFAF7]
                p-7
                shadow-[0_18px_48px_rgba(96,72,45,0.045)]
              "
            >
              <span className="font-serif text-[27px] text-[#C7A87A]">
                {item.numero}
              </span>

              <div
                aria-hidden="true"
                className="mt-6 h-px w-10 bg-[#A17D4F]/28"
              />

              <h3
                className="
                  mt-5
                  font-serif
                  text-[25px]
                  leading-[1.02]
                  text-[#332A2B]
                "
              >
                {item.titulo}
              </h3>

              <p
                className="
                  mt-4
                  text-[9px]
                  font-light
                  leading-5
                  text-[#675C5D]
                "
              >
                {item.texto}
              </p>
            </article>
          ))}
        </div>

        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.92fr_1.08fr]
          "
        >
          <div
            className="
              rounded-[2.3rem]
              border
              border-[#A17D4F]/15
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DEC296_100%)]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.07)]
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
              Durante a avaliação
            </p>

            <h3
              className="
                mt-5
                max-w-[600px]
                font-serif
                text-[2.6rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              Um processo que você pode acompanhar.
            </h3>

            <p
              className="
                mt-6
                max-w-[560px]
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              A avaliação não acontece de forma isolada. Você permanece
              presente e pode acompanhar as etapas relevantes, entendendo o que
              está sendo observado na peça.
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
                Informação clara antes de qualquer decisão.
              </p>
            </div>
          </div>

          <div
            className="
              rounded-[2.3rem]
              border
              border-[#A17D4F]/14
              bg-[#332A2B]
              p-8
              shadow-[0_26px_70px_rgba(51,42,43,0.10)]
              md:p-10
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#D6BB8B]
              "
            >
              Uma sequência possível
            </p>

            <div className="mt-7 grid gap-3">
              {etapasAvaliacao.map((item, index) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-5
                    rounded-[1.35rem]
                    border
                    border-[#D6BB8B]/10
                    bg-[#F7F3EF]/[0.035]
                    px-5
                    py-4
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[18px]
                      text-[#D6BB8B]
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span
                    className="
                      text-[9px]
                      font-light
                      leading-5
                      text-[#E1D5D2]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="
                mt-8
                rounded-[1.5rem]
                border
                border-[#D6BB8B]/12
                bg-[#D6BB8B]/[0.05]
                px-6
                py-5
              "
            >
              <p
                className="
                  font-serif
                  text-[19px]
                  leading-snug
                  text-[#F7F3EF]
                "
              >
                A apresentação de uma avaliação ou proposta não cria obrigação
                de venda.
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[#FCFAF7]
            p-8
            shadow-[0_20px_54px_rgba(96,72,45,0.04)]
            md:p-10
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
                text-[#A17D4F]
              "
            >
              Pronto para agendar?
            </p>

            <h3
              className="
                mt-4
                max-w-[900px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#332A2B]
                md:text-[2.7rem]
              "
            >
              Reserve um horário para ser atendido com mais tranquilidade no
              Vogue Square.
            </h3>
          </div>

          <a
            href="#contato-atendimento-hora-marcada"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#332A2B]
              bg-[#332A2B]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#F7F3EF]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#473A3B]
            "
          >
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}