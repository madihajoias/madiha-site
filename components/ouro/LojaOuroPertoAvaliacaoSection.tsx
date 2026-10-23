const etapas = [
  {
    numero: '01',
    label: 'Pesagem',
    title: 'Conferência precisa',
    text:
      'O primeiro passo é verificar o peso da peça ou do material apresentado com equipamento adequado.',
  },
  {
    numero: '02',
    label: 'Teor',
    title: 'Identificação do ouro',
    text:
      'Analisamos o teor do material para identificar referências como 24k, 18k, 14k ou outras composições.',
  },
  {
    numero: '03',
    label: 'Análise',
    title: 'Avaliação técnica',
    text:
      'Características físicas, acabamento, composição e demais informações relevantes entram na análise.',
  },
  {
    numero: '04',
    label: 'Proposta',
    title: 'Referência comercial',
    text:
      'Com a avaliação concluída, apresentamos a proposta de forma clara para que você decida se deseja vender.',
  },
];

export default function LojaOuroPertoAvaliacaoSection() {
  return (
    <section
      id="avaliacao-local"
      aria-labelledby="loja-ouro-avaliacao-title"
      className="
        relative
        overflow-hidden
        bg-[#EEE0C9]
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
          bg-[radial-gradient(circle_at_14%_18%,rgba(255,250,240,0.82),transparent_30%),radial-gradient(circle_at_86%_82%,rgba(163,115,49,0.13),transparent_34%)]
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
                text-[#8C692E]
                md:text-[10px]
              "
            >
              Como funciona a avaliação
            </p>

            <h2
              id="loja-ouro-avaliacao-title"
              className="
                mt-6
                max-w-[700px]
                font-serif
                text-[3rem]
                font-normal
                leading-[1.02]
                tracking-[-0.025em]
                text-[#765525]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Uma loja perto de você.
              <br />
              Uma avaliação técnica de verdade.
            </h2>
          </div>

          <div
            className="
              max-w-[640px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#725D41]
                md:text-[15px]
                md:leading-8
              "
            >
              A proximidade facilita o atendimento, mas a qualidade da
              avaliação é o que realmente importa. Na Madiha Maison, o processo
              considera peso, teor e características do material antes da
              apresentação da proposta.
            </p>
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          {/* PAINEL PRINCIPAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[3rem_3rem_5rem_3rem]
              border
              border-white/60
              bg-[linear-gradient(145deg,rgba(199,165,108,0.98),rgba(177,136,72,0.96),rgba(154,110,49,0.95),rgba(188,148,84,0.95))]
              p-8
              shadow-[0_40px_95px_rgba(83,55,18,0.21),inset_0_1px_0_rgba(255,255,255,0.44)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#FFECC3]/36
                blur-[72px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#5F431F]
                "
              >
                Avaliação acompanhada
              </p>

              <h3
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[2.8rem]
                  font-normal
                  leading-[1.02]
                  text-[#412907]
                  md:text-[3.6rem]
                "
              >
                Você entende
                <br />
                o que está sendo
                <br />
                avaliado.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[470px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                O objetivo é que cada etapa seja clara: o material é conferido,
                analisado e somente depois disso a referência comercial é
                apresentada.
              </p>

              <div
                className="
                  mt-9
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <div
                  className="
                    rounded-[1.4rem]
                    border
                    border-white/28
                    bg-white/10
                    px-5
                    py-5
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#5F431F]
                    "
                  >
                    Processo
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    Transparente
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.4rem]
                    border
                    border-white/28
                    bg-white/10
                    px-5
                    py-5
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#5F431F]
                    "
                  >
                    Atendimento
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    Presencial
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-9
                  rounded-[1.6rem]
                  border
                  border-white/28
                  bg-white/10
                  px-6
                  py-5
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#5F431F]
                  "
                >
                  Sem obrigação de venda
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-light
                    leading-6
                    text-[#4E3515]/78
                  "
                >
                  A decisão de vender acontece somente depois que a avaliação e
                  a proposta são apresentadas.
                </p>
              </div>
            </div>
          </div>

          {/* ETAPAS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/60
                  bg-[#F1E2C8]/38
                  p-7
                  shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.52)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#F4E7D1]/52
                  md:p-8
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-[#D5B27A]/14
                    blur-[30px]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-6
                    "
                  >
                    <div>
                      <p
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-[#947244]
                        "
                      >
                        {etapa.label}
                      </p>

                      <h3
                        className="
                          mt-4
                          font-serif
                          text-[24px]
                          font-normal
                          leading-tight
                          text-[#68491F]
                        "
                      >
                        {etapa.title}
                      </h3>
                    </div>

                    <span
                      className="
                        font-serif
                        text-[32px]
                        leading-none
                        text-[#B38B52]/72
                      "
                    >
                      {etapa.numero}
                    </span>
                  </div>

                  <p
                    className="
                      mt-5
                      text-[11px]
                      font-light
                      leading-6
                      text-[#725D41]
                    "
                  >
                    {etapa.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* REFORÇO TÉCNICO */}
        <div
          className="
            mt-6
            rounded-[2rem]
            border
            border-white/60
            bg-[#F1E2C8]/38
            px-7
            py-8
            shadow-[0_18px_48px_rgba(94,66,27,0.05)]
            backdrop-blur-xl
            md:px-9
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.7fr_1.3fr]
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
                  text-[#947244]
                "
              >
                Precisão
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[27px]
                  leading-tight
                  text-[#68491F]
                "
              >
                Equipamentos adequados
              </h3>
            </div>

            <p
              className="
                text-[11px]
                font-light
                leading-6
                text-[#725D41]
              "
            >
              Conforme o tipo de material, a avaliação pode utilizar recursos
              como balança de precisão e análise das características físicas da
              peça. Em situações específicas, a pesagem hidrostática também
              pode complementar a análise técnica.
            </p>
          </div>
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-[#765525]/12
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              max-w-[740px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            Você pode trazer a peça mesmo sem saber previamente o peso, a
            quilatagem ou o valor aproximado. Essas informações são verificadas
            durante a avaliação.
          </p>

          <a
            href="#calculadora-de-ouro"
            className="
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              rounded-full
              border
              border-[#765525]/22
              bg-white/20
              px-7
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#765525]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/38
            "
          >
            Calcular meu ouro
          </a>
        </div>
      </div>
    </section>
  );
}