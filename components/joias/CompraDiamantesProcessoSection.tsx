const etapas = [
  {
    numero: '01',
    titulo: 'Apresente o diamante',
    texto:
      'A pedra pode ser apresentada solta ou montada em uma joia, com ou sem certificado.',
  },
  {
    numero: '02',
    titulo: 'Fazemos a análise',
    texto:
      'São observadas características como peso, cor, pureza, lapidação, medidas e condição geral.',
  },
  {
    numero: '03',
    titulo: 'Conferimos a documentação',
    texto:
      'Quando houver certificado ou outros documentos, eles são considerados como parte da análise.',
  },
  {
    numero: '04',
    titulo: 'Apresentamos a proposta',
    texto:
      'A proposta considera a pedra, a classificação, o mercado, a liquidez e o contexto comercial.',
  },
  {
    numero: '05',
    titulo: 'Você decide',
    texto:
      'A decisão de vender permanece com você. A avaliação serve para oferecer clareza antes da negociação.',
  },
];

export default function CompraDiamantesProcessoSection() {
  return (
    <section
      id="processo-compra"
      aria-labelledby="processo-compra-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.13),transparent_34%)]
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
              Como funciona
            </p>

            <h2
              id="processo-compra-title"
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
              Da apresentação da pedra até a proposta.
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
              O processo é conduzido de forma direta, com análise individual e
              explicação dos principais critérios considerados antes de qualquer
              negociação.
            </p>
          </div>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="
              absolute
              left-[25px]
              top-12
              hidden
              h-[calc(100%-6rem)]
              w-px
              bg-[#C7A87A]/25
              md:block
              lg:hidden
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              left-[10%]
              right-[10%]
              top-[37px]
              hidden
              h-px
              bg-[#C7A87A]/25
              lg:block
            "
          />

          <div
            className="
              relative
              grid
              gap-4
              lg:grid-cols-5
            "
          >
            {etapas.map((etapa) => (
              <article
                key={etapa.numero}
                className="
                  group
                  relative
                  rounded-[1.8rem]
                  border
                  border-[#A17D4F]/12
                  bg-[#F7F3EF]
                  p-7
                  shadow-[0_18px_48px_rgba(96,72,45,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#A17D4F]/28
                  hover:bg-[#FCFAF7]
                  hover:shadow-[0_24px_58px_rgba(96,72,45,0.07)]
                "
              >
                <div
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#A17D4F]/28
                    bg-[#EFE6D8]
                    shadow-[0_8px_22px_rgba(96,72,45,0.06)]
                  "
                >
                  <span
                    className="
                      font-serif
                      text-[20px]
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
                    text-[25px]
                    leading-tight
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
                    bg-[#A17D4F]/30
                  "
                />

                <p
                  className="
                    mt-5
                    text-[11px]
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
              relative
              overflow-hidden
              rounded-[2.2rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DCC08F_100%)]
              p-8
              shadow-[0_26px_68px_rgba(96,72,45,0.08)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-16
                -top-16
                h-64
                w-64
                rounded-full
                bg-white/25
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
                Avaliação individual
              </p>

              <h3
                className="
                  mt-5
                  max-w-[560px]
                  font-serif
                  text-[2.6rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Cada pedra é analisada dentro do próprio contexto.
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
                Dois diamantes aparentemente semelhantes podem apresentar
                diferenças importantes quando observados de forma mais detalhada.
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
                  A proposta só faz sentido depois de entender a pedra apresentada.
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              rounded-[2.2rem]
              border
              border-[#A17D4F]/12
              bg-[#F7F3EF]
              p-8
              shadow-[0_22px_58px_rgba(96,72,45,0.05)]
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
              O que trazer
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
                'O diamante ou a joia',
                'Certificado, se houver',
                'Documentos relacionados à peça',
                'Estojo original, se disponível',
                'Notas ou comprovantes antigos',
                'Informações sobre procedência, se conhecidas',
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
                    bg-[#FCFAF7]
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
                      border-[#A17D4F]/20
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
                      leading-5
                      text-[#5F5350]
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="
                mt-6
                text-[9px]
                font-light
                leading-5
                text-[#7D7070]
              "
            >
              A ausência de certificado, nota ou estojo não impede uma avaliação
              inicial da pedra.
            </p>
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
              Sem obrigação de venda
            </p>

            <h3
              className="
                mt-4
                max-w-[880px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Primeiro você entende a avaliação. Depois decide se deseja negociar.
            </h3>
          </div>

          <a
            href="#seguranca-diamantes"
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
            Segurança e discrição
          </a>
        </div>
      </div>
    </section>
  );
}