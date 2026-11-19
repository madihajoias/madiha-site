export default function AvaliacaoRelogiosEstadoSection() {
  const pontos = [
    {
      titulo: 'Conservação geral',
      texto:
        'Caixa, pulseira, mostrador, vidro, fecho e demais componentes são observados para compreender o estado geral da peça.',
    },
    {
      titulo: 'Sinais de uso',
      texto:
        'Marcas, riscos, desgaste, polimento e alterações visíveis podem fazer parte da análise do relógio.',
    },
    {
      titulo: 'Originalidade',
      texto:
        'A relação entre os componentes e as características esperadas para a referência ajuda a compreender a integridade do conjunto.',
    },
    {
      titulo: 'Intervenções',
      texto:
        'Trocas de peças, restaurações, reparos e outras intervenções conhecidas ou identificáveis podem influenciar a avaliação.',
    },
  ];

  return (
    <section
      aria-labelledby="estado-relogios-title"
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
          bg-[radial-gradient(circle_at_18%_22%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(90,16,23,0.06),transparent_34%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[90rem]
          gap-14
          lg:grid-cols-[0.9fr_1.1fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* ESQUERDA */}
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
            Estado da peça
          </p>

          <h2
            id="estado-relogios-title"
            className="
              mt-5
              max-w-[650px]
              text-[#4F1720]
            "
          >
            Conservação e originalidade também importam
          </h2>

          <p
            className="
              mt-7
              max-w-[610px]
              text-[14px]
              font-light
              leading-8
              text-[#725D58]
              md:text-[15px]
            "
          >
            Dois relógios da mesma marca e referência podem apresentar
            condições muito diferentes. Por isso, a avaliação não considera
            apenas o nome do modelo, mas também o estado real da peça.
          </p>

          <p
            className="
              mt-5
              max-w-[580px]
              text-[12px]
              font-light
              leading-7
              text-[#8A7470]
              md:text-[13px]
            "
          >
            Integridade, sinais de uso, componentes, intervenções e
            características visuais ajudam a construir uma análise mais
            precisa.
          </p>

          <div
            className="
              mt-9
              rounded-[2rem]
              border
              border-[#C7A87A]/22
              bg-[#EFE4D1]/60
              px-7
              py-7
              backdrop-blur-xl
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
              Análise individual
            </p>

            <p
              className="
                mt-3
                text-[12px]
                font-light
                leading-7
                text-[#6F5B56]
                md:text-[13px]
              "
            >
              A condição deve ser interpretada dentro do contexto específico
              de cada relógio, especialmente em peças vintage ou de coleção.
            </p>
          </div>
        </div>

        {/* DIREITA */}
        <div
          className="
            relative
            grid
            gap-4
            sm:grid-cols-2
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#C7A87A]/10
              blur-[90px]
            "
          />

          {pontos.map((ponto, index) => (
            <article
              key={ponto.titulo}
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
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-14
                  -top-14
                  h-32
                  w-32
                  rounded-full
                  bg-[#C7A87A]/8
                  blur-[42px]
                  transition-all
                  duration-500
                  group-hover:bg-[#C7A87A]/14
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    font-serif
                    text-[28px]
                    leading-none
                    text-[#C7A87A]
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </p>

                <h3
                  className="
                    mt-6
                    text-[#4F1720]
                  "
                >
                  {ponto.titulo}
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
                  {ponto.texto}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}