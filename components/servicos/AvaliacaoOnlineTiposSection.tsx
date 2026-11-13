const tipos = [
  {
    numero: '01',
    titulo: 'Joias de ouro',
    texto:
      'Anéis, correntes, pulseiras, brincos, pingentes e outras peças em ouro podem ser apresentadas para uma primeira análise visual.',
  },
  {
    numero: '02',
    titulo: 'Diamantes e brilhantes',
    texto:
      'Pedras soltas ou montadas em joias podem ser fotografadas para uma leitura inicial de formato, aparência e documentação.',
  },
  {
    numero: '03',
    titulo: 'Joias antigas',
    texto:
      'Peças antigas, herdadas ou com história familiar podem ser apresentadas com fotos de detalhes, fechos, marcas e estado geral.',
  },
  {
    numero: '04',
    titulo: 'Joias assinadas',
    texto:
      'Peças com assinatura, gravação, numeração ou documentação de marcas reconhecidas podem ser analisadas inicialmente pelas informações enviadas.',
  },
  {
    numero: '05',
    titulo: 'Peças herdadas',
    texto:
      'Joias recebidas por herança podem ser apresentadas mesmo quando o proprietário ainda não conhece todos os detalhes da peça.',
  },
  {
    numero: '06',
    titulo: 'Relógios',
    texto:
      'Relógios podem ser enviados para uma triagem inicial com fotografias do mostrador, caixa, pulseira, referência e documentos disponíveis.',
  },
];

export default function AvaliacaoOnlineTiposSection() {
  return (
    <section
      id="tipos-avaliacao-online"
      aria-labelledby="tipos-avaliacao-online-title"
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
          bg-[radial-gradient(circle_at_12%_20%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.12),transparent_34%)]
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
              O que você pode enviar
            </p>

            <h2
              id="tipos-avaliacao-online-title"
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
              Diferentes tipos de peças podem começar pela avaliação online.
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
              Não é necessário conhecer previamente todos os detalhes da joia.
              Fotografias bem feitas e algumas informações já permitem iniciar
              uma leitura e orientar o próximo passo.
            </p>
          </div>
        </div>

        {/* CATEGORIAS */}
        <div
          className="
            mt-16
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {tipos.map((item, index) => (
            <article
              key={item.titulo}
              className={`
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                p-7
                shadow-[0_18px_48px_rgba(96,72,45,0.045)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_26px_64px_rgba(96,72,45,0.07)]

                ${
                  index === 0 || index === 3
                    ? `
                      border-[#A17D4F]/16
                      bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DEC296_100%)]
                    `
                    : `
                      border-[#A17D4F]/12
                      bg-[#FCFAF7]
                    `
                }
              `}
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-16
                  -top-16
                  h-40
                  w-40
                  rounded-full
                  bg-[#D6BB8B]/12
                  blur-[38px]
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
                    gap-5
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[27px]
                      leading-none
                      text-[#C7A87A]
                    "
                  >
                    {item.numero}
                  </span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#A17D4F]/14
                      bg-[#F7F3EF]/60
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
                </div>

                <div
                  aria-hidden="true"
                  className="
                    mt-8
                    h-px
                    w-12
                    bg-[#A17D4F]/28
                  "
                />

                <h3
                  className="
                    mt-6
                    font-serif
                    text-[2rem]
                    leading-[1]
                    tracking-[-0.025em]
                    text-[#332A2B]
                  "
                >
                  {item.titulo}
                </h3>

                <p
                  className="
                    mt-5
                    text-[10px]
                    font-light
                    leading-6
                    text-[#675C5D]
                  "
                >
                  {item.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* DESTAQUE */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          <div
            className="
              rounded-[2.2rem]
              border
              border-[#A17D4F]/14
              bg-[#332A2B]
              p-8
              shadow-[0_24px_64px_rgba(51,42,43,0.10)]
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
              Não sabe exatamente o que tem?
            </p>

            <h3
              className="
                mt-5
                max-w-[560px]
                font-serif
                text-[2.55rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#F7F3EF]
              "
            >
              Você não precisa classificar a peça antes de falar conosco.
            </h3>

            <p
              className="
                mt-6
                max-w-[540px]
                text-[11px]
                font-light
                leading-6
                text-[#D0C1BE]
              "
            >
              Se você não souber o teor do ouro, o tipo da pedra, a marca ou a
              origem da joia, envie as imagens mesmo assim. A primeira etapa é
              justamente organizar essas informações.
            </p>
          </div>

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
              O que ajuda na análise
            </p>

            <div
              className="
                mt-7
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {[
                'Fotos nítidas',
                'Frente e verso',
                'Fechos e marcações',
                'Assinaturas',
                'Certificados',
                'Embalagem original',
                'Referências gravadas',
                'Histórico conhecido',
              ].map((item) => (
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
                      text-[10px]
                      font-light
                      text-[#5F5350]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TRANSIÇÃO */}
        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[linear-gradient(135deg,#E6CDA5_0%,#F1E2C8_48%,#DFC294_100%)]
            p-8
            shadow-[0_24px_64px_rgba(96,72,45,0.08)]
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
                text-[#8C6635]
              "
            >
              Para uma análise melhor
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
              A qualidade das fotos faz diferença na primeira leitura da peça.
            </h3>
          </div>

          <a
            href="#como-fotografar-avaliacao-online"
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
            Como fotografar
          </a>
        </div>
      </div>
    </section>
  );
}