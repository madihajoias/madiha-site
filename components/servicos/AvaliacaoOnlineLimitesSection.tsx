const onlineItems = [
  'Tipo e formato geral da peça',
  'Estado visual aparente',
  'Fechos e estruturas visíveis',
  'Assinaturas e marcações legíveis',
  'Pedras aparentes',
  'Documentação apresentada',
  'Possível referência de marca',
  'Contexto inicial da joia',
];

const presencialItems = [
  'Peso exato da peça',
  'Teor do metal',
  'Autenticidade',
  'Qualidade técnica das pedras',
  'Condição estrutural detalhada',
  'Medições precisas',
  'Testes específicos',
  'Conferência física definitiva',
];

export default function AvaliacaoOnlineLimitesSection() {
  return (
    <section
      id="limites-avaliacao-online"
      aria-labelledby="limites-avaliacao-online-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_84%,rgba(214,187,139,0.12),transparent_34%)]
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
              Online x presencial
            </p>

            <h2
              id="limites-avaliacao-online-title"
              className="
                mt-6
                max-w-[850px]
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
              Algumas informações aparecem na foto. Outras só podem ser confirmadas ao vivo.
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
              A avaliação online é muito útil para uma primeira leitura da peça,
              mas não deve ser confundida com uma avaliação técnica definitiva.
              A fotografia mostra bastante, mas não substitui testes, medições e
              observação física.
            </p>
          </div>
        </div>

        {/* COMPARAÇÃO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-2
          "
        >
          {/* ONLINE */}
          <article
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#A17D4F]/14
              bg-[#FCFAF7]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.05)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#D6BB8B]/10
                blur-[65px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
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
                    Avaliação online
                  </p>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[2.5rem]
                      leading-[1]
                      tracking-[-0.03em]
                      text-[#332A2B]
                    "
                  >
                    O que podemos observar pelas imagens.
                  </h3>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-[#A17D4F]/14
                    bg-[#EFE6D8]/60
                    px-4
                    py-2
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#8C6635]
                  "
                >
                  Triagem
                </span>
              </div>

              <p
                className="
                  mt-6
                  max-w-[590px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#675C5D]
                "
              >
                Fotos nítidas e informações bem apresentadas permitem organizar
                uma leitura inicial e identificar características que ajudam a
                direcionar o atendimento.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {onlineItems.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[1.35rem]
                      border
                      border-[#A17D4F]/10
                      bg-[#F7F3EF]
                      px-5
                      py-4
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#A17D4F]/18
                        bg-[#EFE6D8]
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#A17D4F]
                        "
                      />
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-light
                        leading-5
                        text-[#5F5350]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* PRESENCIAL */}
          <article
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#A17D4F]/16
              bg-[#332A2B]
              p-8
              shadow-[0_26px_70px_rgba(51,42,43,0.10)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-64
                w-64
                rounded-full
                bg-[#D6BB8B]/[0.06]
                blur-[65px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
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
                    Avaliação presencial
                  </p>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[2.5rem]
                      leading-[1]
                      tracking-[-0.03em]
                      text-[#F7F3EF]
                    "
                  >
                    O que depende da peça em mãos.
                  </h3>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-[#D6BB8B]/16
                    bg-[#F7F3EF]/[0.04]
                    px-4
                    py-2
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#D6BB8B]
                  "
                >
                  Conferência
                </span>
              </div>

              <p
                className="
                  mt-6
                  max-w-[590px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#D0C1BE]
                "
              >
                Peso, teor, autenticidade e outras características precisam de
                instrumentos, testes ou observação física para serem confirmados
                com segurança.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {presencialItems.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[1.35rem]
                      border
                      border-[#D6BB8B]/10
                      bg-[#F7F3EF]/[0.035]
                      px-5
                      py-4
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#D6BB8B]/20
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-[#D6BB8B]
                        "
                      />
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-light
                        leading-5
                        text-[#D0C1BE]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        {/* FRASE CENTRAL */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-[2.25rem]
            border
            border-[#A17D4F]/15
            bg-[linear-gradient(135deg,#E6CDA5_0%,#F1E2C8_48%,#DFC294_100%)]
            px-8
            py-10
            shadow-[0_24px_64px_rgba(96,72,45,0.08)]
            md:px-10
            md:py-12
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[auto_1fr]
              lg:items-center
            "
          >
            <span
              className="
                font-serif
                text-[4rem]
                leading-none
                text-[#B99154]
                md:text-[5rem]
              "
            >
              ≠
            </span>

            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#8C6635]
                "
              >
                Uma distinção importante
              </p>

              <h3
                className="
                  mt-4
                  max-w-[1000px]
                  font-serif
                  text-[2.05rem]
                  leading-[1.04]
                  tracking-[-0.025em]
                  text-[#332A2B]
                  md:text-[2.8rem]
                "
              >
                Avaliação online orienta. Avaliação presencial confirma.
              </h3>

              <p
                className="
                  mt-5
                  max-w-[850px]
                  text-[10px]
                  font-light
                  leading-6
                  text-[#675C5D]
                "
              >
                A etapa online ajuda a organizar informações e decidir o próximo
                passo. Quando a precisão depende de peso, teor, autenticidade ou
                análise técnica, a peça precisa ser examinada fisicamente.
              </p>
            </div>
          </div>
        </div>

        {/* CALCULADORA */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          <div
            className="
              rounded-[2.2rem]
              border
              border-[#A17D4F]/12
              bg-[#FCFAF7]
              p-8
              shadow-[0_22px_58px_rgba(96,72,45,0.045)]
              md:p-10
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#A17D4F]
              "
            >
              Antes de enviar
            </p>

            <h3
              className="
                mt-4
                max-w-[580px]
                font-serif
                text-[2.45rem]
                leading-[1]
                tracking-[-0.025em]
                text-[#332A2B]
              "
            >
              Quer ter uma referência inicial de valor?
            </h3>

            <p
              className="
                mt-6
                text-[11px]
                font-light
                leading-6
                text-[#675C5D]
              "
            >
              A calculadora de joias pode ajudar a obter uma estimativa inicial
              antes do contato. Ela funciona como referência e não substitui a
              avaliação técnica.
            </p>

            <a
              href="/joias/calculadora-de-joias/"
              className="
                mt-8
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
                tracking-[0.2em]
                text-[#F7F3EF]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#473A3B]
              "
            >
              Usar calculadora de joias
            </a>
          </div>

          <div
            className="
              rounded-[2.2rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F2E4CD_50%,#DEC296_100%)]
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
              Depois da estimativa
            </p>

            <h3
              className="
                mt-4
                max-w-[610px]
                font-serif
                text-[2.45rem]
                leading-[1]
                tracking-[-0.025em]
                text-[#332A2B]
              "
            >
              A peça real continua sendo a referência mais importante.
            </h3>

            <p
              className="
                mt-6
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              A calculadora considera dados informados pelo usuário. Fotos e
              atendimento online acrescentam contexto. A avaliação presencial
              é o momento de conferir tecnicamente as informações.
            </p>

            <div
              className="
                mt-8
                rounded-[1.5rem]
                border
                border-[#8C6635]/14
                bg-white/24
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
                Calculadora = estimativa. Online = orientação. Presencial = conferência.
              </p>
            </div>
          </div>
        </div>

        {/* PRÓXIMO BLOCO */}
        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[#332A2B]
            p-8
            shadow-[0_24px_64px_rgba(51,42,43,0.10)]
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
                text-[#D6BB8B]
              "
            >
              Quando avançar
            </p>

            <h3
              className="
                mt-4
                max-w-[900px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Se a peça exigir conferência física, o atendimento pode continuar presencialmente na Madiha Maison.
            </h3>
          </div>

          <a
            href="#presencial-avaliacao-online"
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
              tracking-[0.22em]
              text-[#332A2B]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Online x presencial
          </a>
        </div>
      </div>
    </section>
  );
}