const etapas = [
  {
    numero: '01',
    titulo: 'Envie as fotos',
    texto:
      'Fotografe a peça de frente, verso e em detalhes. Se houver pedras, fechos, assinaturas ou marcações, registre também essas áreas.',
  },
  {
    numero: '02',
    titulo: 'Informe os detalhes',
    texto:
      'Conte o que souber sobre a joia: material, peso aproximado, origem, tempo de uso, certificado, marca ou outras informações relevantes.',
  },
  {
    numero: '03',
    titulo: 'Receba uma análise inicial',
    texto:
      'A equipe da Madiha Maison observa as informações enviadas e orienta sobre os próximos passos possíveis para a peça.',
  },
  {
    numero: '04',
    titulo: 'Agende se for necessário',
    texto:
      'Quando a conferência física for importante, o atendimento presencial pode ser realizado no Vogue Square, na Barra da Tijuca.',
  },
];

export default function AvaliacaoOnlineComoFuncionaSection() {
  return (
    <section
      id="como-funciona-avaliacao-online"
      aria-labelledby="como-funciona-avaliacao-online-title"
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
          bg-[radial-gradient(circle_at_10%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_90%_84%,rgba(214,187,139,0.12),transparent_34%)]
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
              Como funciona
            </p>

            <h2
              id="como-funciona-avaliacao-online-title"
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
              Uma primeira leitura em quatro passos simples.
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
              A avaliação online foi pensada para facilitar o primeiro contato.
              Você apresenta a peça, envia as principais informações e recebe
              uma orientação inicial antes de decidir se deseja avançar.
            </p>
          </div>
        </div>

        {/* LINHA DO PROCESSO */}
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="
              absolute
              left-[12%]
              right-[12%]
              top-[37px]
              hidden
              h-px
              bg-[#C7A87A]/24
              lg:block
            "
          />

          <div
            className="
              relative
              grid
              gap-5
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                className="
                  group
                  relative
                  rounded-[2rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#F7F3EF]
                  p-7
                  shadow-[0_18px_48px_rgba(96,72,45,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#A17D4F]/26
                  hover:bg-[#FCFAF7]
                  hover:shadow-[0_24px_60px_rgba(96,72,45,0.07)]
                "
              >
                <div
                  className="
                    flex
                    h-[56px]
                    w-[56px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A17D4F]/22
                    bg-[#EFE6D8]
                    shadow-[0_8px_24px_rgba(96,72,45,0.05)]
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[21px]
                      text-[#8C6635]
                    "
                  >
                    {etapa.numero}
                  </span>
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[27px]
                    leading-[1.02]
                    tracking-[-0.02em]
                    text-[#332A2B]
                  "
                >
                  {etapa.titulo}
                </h3>

                <div
                  aria-hidden="true"
                  className="
                    mt-5
                    h-px
                    w-10
                    bg-[#A17D4F]/28
                  "
                />

                <p
                  className="
                    mt-5
                    text-[10px]
                    font-light
                    leading-6
                    text-[#675C5D]
                  "
                >
                  {etapa.texto}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* EXPLICAÇÃO VISUAL */}
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
              relative
              overflow-hidden
              rounded-[2.25rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F2E4CD_50%,#DEC296_100%)]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.07)]
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
                bg-white/22
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
                O objetivo da etapa online
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
                Entender melhor a peça antes de qualquer decisão.
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
                Fotografias e informações ajudam a identificar características
                visíveis, contexto e documentação da joia. Isso permite uma
                primeira orientação de forma prática.
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
                  Primeiro entender. Depois decidir.
                </p>
              </div>
            </div>
          </div>

          {/* ONLINE NÃO SUBSTITUI PRESENCIAL */}
          <div
            className="
              rounded-[2.25rem]
              border
              border-[#A17D4F]/12
              bg-[#F7F3EF]
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
              Importante
            </p>

            <h3
              className="
                mt-4
                max-w-[620px]
                font-serif
                text-[2.4rem]
                leading-[1]
                tracking-[-0.025em]
                text-[#332A2B]
              "
            >
              A análise online é uma triagem inicial.
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
              Algumas características não podem ser confirmadas apenas por
              fotografia. Peso, teor do metal, autenticidade, qualidade de
              pedras e condição física podem exigir uma avaliação presencial.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ['Online', 'Fotos e informações'],
                ['Presencial', 'Conferência física'],
                ['Inicial', 'Orientação'],
                ['Definitivo', 'Análise técnica'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="
                    rounded-[1.35rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#FCFAF7]
                    px-5
                    py-4
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#A17D4F]
                    "
                  >
                    {title}
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[18px]
                      text-[#332A2B]
                    "
                  >
                    {text}
                  </p>
                </div>
              ))}
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
              Próximo passo
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
              Veja quais tipos de joias podem ser apresentados para uma avaliação online.
            </h3>
          </div>

          <a
            href="#tipos-avaliacao-online"
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
            Ver tipos de peças
          </a>
        </div>
      </div>
    </section>
  );
}