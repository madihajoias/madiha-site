const tipos = [
  {
    label: 'Herdadas',
    title: 'Joias de família',
    text:
      'Peças recebidas de pais, avós ou outros familiares podem reunir valor material, histórico e características próprias de época.',
  },
  {
    label: 'Antigas',
    title: 'Peças de décadas anteriores',
    text:
      'Joias produzidas há muitos anos podem apresentar técnicas, desenhos e construções diferentes das peças atuais.',
  },
  {
    label: 'Assinadas',
    title: 'Joias de marcas reconhecidas',
    text:
      'Peças assinadas podem exigir uma leitura específica de marca, procedência, construção e estado de conservação.',
  },
  {
    label: 'Com diamantes',
    title: 'Joias com brilhantes e diamantes',
    text:
      'Diamantes podem exigir uma análise própria de peso, cor, pureza, lapidação e montagem dentro da peça.',
  },
  {
    label: 'Com gemas',
    title: 'Rubis, safiras e esmeraldas',
    text:
      'Pedras preciosas podem influenciar significativamente a leitura da joia e precisam ser analisadas de forma individual.',
  },
  {
    label: 'Sem documentação',
    title: 'Peças sem nota ou certificado',
    text:
      'A ausência de documentos não impede uma avaliação inicial. Quando existem, notas, certificados e embalagens podem complementar a análise.',
  },
  {
    label: 'Guardadas',
    title: 'Joias que ficaram anos sem uso',
    text:
      'Peças guardadas por longos períodos podem ser avaliadas mesmo quando o proprietário já não possui informações sobre origem, teor ou pedras.',
  },
  {
    label: 'Danificadas',
    title: 'Joias quebradas ou incompletas',
    text:
      'Fechos danificados, partes faltantes ou desgaste não impedem necessariamente uma avaliação da peça e de seus elementos.',
  },
  {
    label: 'Reformadas',
    title: 'Peças que passaram por alterações',
    text:
      'Joias antigas podem ter sido ajustadas, reformadas ou modificadas ao longo do tempo, o que também pode fazer parte da leitura.',
  },
];

export default function CompraJoiasAntigasTiposSection() {
  return (
    <section
      id="o-que-consideramos"
      aria-labelledby="compra-joias-antigas-tipos-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(90,16,23,0.055),transparent_34%)]
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
              Tipos de peças
            </p>

            <h2
              id="compra-joias-antigas-tipos-title"
              className="
                mt-6
                max-w-[820px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#4F1720]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              O que pode ser considerado uma joia antiga?
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#776B6C]
                md:text-[15px]
                md:leading-8
              "
            >
              Nem toda joia antiga precisa ter uma origem conhecida ou
              documentação completa. Muitas vezes, a própria peça fornece os
              principais elementos para iniciar a análise.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-16
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {tipos.map((item, index) => (
            <article
              key={item.label}
              className="
                group
                relative
                overflow-hidden
                rounded-[1.85rem]
                border
                border-[#5A1017]/10
                bg-[#FCFAF7]
                p-7
                shadow-[0_18px_48px_rgba(54,30,30,0.055)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C7A87A]/35
                hover:shadow-[0_24px_58px_rgba(54,30,30,0.08)]
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
                  bg-[#C7A87A]/10
                  blur-[28px]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <span
                    className="
                      inline-flex
                      h-10
                      min-w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/30
                      bg-[#C7A87A]/[0.08]
                      font-serif
                      text-[14px]
                      text-[#A17D4F]
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      h-px
                      flex-1
                      bg-gradient-to-r
                      from-[#C7A87A]/35
                      to-transparent
                    "
                  />
                </div>

                <p
                  className="
                    mt-7
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#A17D4F]
                  "
                >
                  {item.label}
                </p>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-[24px]
                    font-normal
                    leading-tight
                    text-[#4F1720]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-[11px]
                    font-light
                    leading-6
                    text-[#776B6C]
                  "
                >
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* BLOCO DE APOIO */}
        <div
          className="
            mt-8
            grid
            gap-6
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#5A1017]/10
            bg-[#4F1720]
            p-8
            shadow-[0_28px_72px_rgba(55,20,26,0.14)]
            md:p-10
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#D6BB8B]
              "
            >
              Você não precisa saber tudo sobre a peça
            </p>

            <h3
              className="
                mt-4
                max-w-[850px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Mesmo sem saber a idade, o teor ou a origem, a joia pode ser
              apresentada para avaliação.
            </h3>

            <p
              className="
                mt-5
                max-w-[780px]
                text-[11px]
                font-light
                leading-6
                text-[#CDBDBA]
              "
            >
              A análise presencial ajuda a identificar os principais elementos
              da peça e orientar os próximos passos.
            </p>
          </div>

          <a
            href="#como-avaliamos"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#C7A87A]
              bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#4F1720]
              shadow-[0_14px_34px_rgba(20,5,8,0.16)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Entender a avaliação
          </a>
        </div>
      </div>
    </section>
  );
}