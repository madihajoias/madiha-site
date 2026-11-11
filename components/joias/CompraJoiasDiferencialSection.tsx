const criterios = [
  {
    label: 'Metal precioso',
    title: 'Peso e teor',
    text:
      'O peso da peça e o teor do ouro continuam sendo referências importantes dentro da avaliação.',
  },
  {
    label: 'Diamantes',
    title: 'Pedras com análise própria',
    text:
      'Quando presentes, diamantes podem exigir uma leitura específica além do valor do metal.',
  },
  {
    label: 'Pedras preciosas',
    title: 'Gemas relevantes',
    text:
      'Rubis, safiras, esmeraldas e outras gemas podem fazer parte da análise conforme a peça apresentada.',
  },
  {
    label: 'Marca',
    title: 'Joias assinadas',
    text:
      'Peças de marcas reconhecidas podem exigir uma avaliação comercial específica além da composição do metal.',
  },
  {
    label: 'Design',
    title: 'Características da peça',
    text:
      'Desenho, proporção, execução e acabamento podem ser considerados dentro da leitura geral da joia.',
  },
  {
    label: 'Conservação',
    title: 'Estado da joia',
    text:
      'Integridade, conservação e condição geral ajudam a contextualizar a peça durante a avaliação.',
  },
];

export default function CompraJoiasDiferencialSection() {
  return (
    <section
      id="diferencial"
      aria-labelledby="compra-joias-diferencial-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        py-24
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(90,16,23,0.06),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[8%]
          top-[16%]
          h-[30vw]
          w-[30vw]
          rounded-full
          bg-[#C7A87A]/10
          blur-[100px]
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
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Avaliação além do metal
            </p>

            <h2
              id="compra-joias-diferencial-title"
              className="
                mt-6
                max-w-[760px]
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
              Sua joia pode valer mais do que o ouro que ela contém.
            </h2>
          </div>

          <div
            className="
              max-w-[650px]
              lg:justify-self-end
            "
          >
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
              Uma avaliação de joias pode considerar diferentes elementos da
              peça. Além do metal precioso, fatores como pedras, marca, design,
              acabamento e estado de conservação podem exigir uma análise
              individual.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* PAINEL PRINCIPAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.25rem]
              border
              border-[#5A1017]/10
              bg-[#4F1720]
              p-8
              shadow-[0_30px_85px_rgba(55,20,26,0.16),inset_0_1px_0_rgba(255,255,255,0.04)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-24
                -top-28
                h-72
                w-72
                rounded-full
                bg-[#C7A87A]/12
                blur-[70px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#D6BB8B]
                "
              >
                Cada peça é única
              </p>

              <h3
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  md:text-[3.5rem]
                "
              >
                Não avaliamos apenas gramas de ouro.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[470px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                "
              >
                A composição da joia é apenas uma parte da análise. Dependendo
                da peça, sua identidade, pedras, assinatura e características
                comerciais também podem ser relevantes.
              </p>

              {/* CARDS */}
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
                    rounded-[1.45rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#D6BB8B]
                    "
                  >
                    Metal
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Parte da análise
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.45rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                    shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#D6BB8B]
                    "
                  >
                    Joia completa
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#F7F3EF]
                    "
                  >
                    Leitura individual
                  </p>
                </div>
              </div>

              {/* NOTA */}
              <div
                className="
                  mt-9
                  rounded-[1.5rem]
                  border
                  border-[#C7A87A]/18
                  bg-[#F7F3EF]/[0.055]
                  px-6
                  py-5
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#D6BB8B]
                  "
                >
                  Importante
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-light
                    leading-6
                    text-[#D3C3C0]
                  "
                >
                  Nem toda característica adicional representa automaticamente
                  maior valor. A relevância de cada elemento depende da peça e
                  da avaliação realizada.
                </p>
              </div>
            </div>
          </div>

          {/* CRITÉRIOS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {criterios.map((item) => (
              <article
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.8rem]
                  border
                  border-[#5A1017]/10
                  bg-[#FCFAF7]
                  p-7
                  shadow-[0_18px_48px_rgba(54,30,30,0.055),inset_0_1px_0_rgba(255,255,255,0.7)]
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
                  <p
                    className="
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

                  <div
                    aria-hidden="true"
                    className="
                      mt-5
                      h-px
                      w-10
                      bg-[#C7A87A]/35
                    "
                  />

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
        </div>

        {/* FECHAMENTO */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-[#5A1017]/10
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              max-w-[760px]
              text-[11px]
              font-light
              leading-6
              text-[#817475]
            "
          >
            É por isso que duas joias com o mesmo peso de ouro podem exigir
            avaliações diferentes quando possuem pedras, marcas ou
            características distintas.
          </p>

          <a
            href="#tipos-de-joias"
            className="
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              rounded-full
              border
              border-[#5A1017]/15
              bg-[#FCFAF7]
              px-7
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#4F1720]
              shadow-[0_10px_30px_rgba(54,30,30,0.05)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#C7A87A]
              hover:text-[#A17D4F]
            "
          >
            Ver o que compramos
          </a>
        </div>
      </div>
    </section>
  );
}