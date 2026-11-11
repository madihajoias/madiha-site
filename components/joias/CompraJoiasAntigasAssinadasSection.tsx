const marcas = [
  'Cartier',
  'Van Cleef & Arpels',
  'Bvlgari',
  'Tiffany & Co.',
  'Harry Winston',
  'Boucheron',
  'Graff',
  'Chopard',
  'Chaumet',
  'Buccellati',
  'H.Stern',
  'Sauer',
  'Antonio Bernardo',
  'Vivara',
  'Monte Carlo',
  'Tereza Xavier',
];

const criterios = [
  {
    label: 'Assinatura',
    title: 'Marca e identificação',
    text:
      'Gravações, assinaturas, números, punções e outros elementos podem ajudar a orientar a identificação inicial da peça.',
  },
  {
    label: 'Procedência',
    title: 'Origem e histórico',
    text:
      'Informações sobre aquisição, origem familiar, documentos e embalagens podem complementar a análise quando estão disponíveis.',
  },
  {
    label: 'Design',
    title: 'Características reconhecíveis',
    text:
      'Algumas peças apresentam linguagens de design, proporções e soluções construtivas associadas a determinadas casas joalheiras.',
  },
  {
    label: 'Construção',
    title: 'Acabamento e fabricação',
    text:
      'Qualidade de execução, encaixes, articulações, cravação e acabamento também podem fornecer informações relevantes sobre a joia.',
  },
  {
    label: 'Conservação',
    title: 'Originalidade da peça',
    text:
      'Reformas, substituições, alterações e desgaste podem interferir na leitura de uma joia assinada ou de coleção.',
  },
  {
    label: 'Documentação',
    title: 'Certificados e referências',
    text:
      'Certificados, notas fiscais, estojos, recibos e documentos de origem podem ajudar, mas a ausência desses itens não impede uma análise inicial.',
  },
];

export default function CompraJoiasAntigasAssinadasSection() {
  return (
    <section
      id="joias-assinadas"
      aria-labelledby="joias-assinadas-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(90,16,23,0.05),transparent_34%)]
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
            lg:grid-cols-[0.92fr_1.08fr]
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
              Joias assinadas
            </p>

            <h2
              id="joias-assinadas-title"
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
              A assinatura pode mudar completamente a forma de analisar a peça.
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
              Uma joia associada a uma casa reconhecida não deve ser avaliada
              apenas pelo ouro ou pelas pedras. Marca, design, construção,
              procedência e estado de conservação também podem participar da
              análise.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#5A1017]/10
              bg-[#4F1720]
              p-8
              shadow-[0_30px_85px_rgba(55,20,26,0.16)]
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#C7A87A]/14
                blur-[72px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#D6BB8B]
                "
              >
                Mais do que uma gravação
              </p>

              <h3
                className="
                  mt-6
                  max-w-[560px]
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  md:text-[3.5rem]
                "
              >
                Marca, peça e contexto precisam conversar entre si.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[550px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D0C1BE]
                "
              >
                Uma assinatura isolada não deve ser tratada automaticamente como
                prova de autenticidade. A leitura precisa considerar também a
                construção, os acabamentos, a coerência do design e outros
                elementos presentes na própria joia.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#D6BB8B]">
                    Assinatura
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#F7F3EF]">
                    Um dos elementos
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#D6BB8B]">
                    Análise
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#F7F3EF]">
                    Conjunto da peça
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-6
                  rounded-[1.65rem]
                  border
                  border-[#C7A87A]/20
                  bg-white/[0.045]
                  px-6
                  py-6
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
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
                    text-[#CDBDBA]
                  "
                >
                  Uma peça antiga ou assinada não é automaticamente rara, de
                  coleção ou de alto valor. Essas características dependem da
                  análise da joia real.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {criterios.map((item) => (
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
                      bg-[#C7A87A]/40
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

        <div
          className="
            mt-8
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#5A1017]/10
            bg-[#FCFAF7]
            px-7
            py-8
            shadow-[0_22px_58px_rgba(54,30,30,0.06)]
            md:px-10
            md:py-10
          "
        >
          <div className="flex flex-col gap-8">
            <div
              className="
                grid
                gap-6
                lg:grid-cols-[0.72fr_1.28fr]
                lg:items-end
              "
            >
              <div>
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#A17D4F]
                  "
                >
                  Algumas marcas presentes no universo da alta joalheria
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[610px]
                    font-serif
                    text-[2rem]
                    font-normal
                    leading-[1.04]
                    tracking-[-0.025em]
                    text-[#4F1720]
                    md:text-[2.7rem]
                  "
                >
                  A marca pode ser relevante. A peça precisa confirmar a
                  história.
                </h3>
              </div>

              <p
                className="
                  max-w-[640px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#776B6C]
                  lg:justify-self-end
                "
              >
                Marcas reconhecidas possuem linguagens próprias, mas a presença
                de um nome ou gravação deve ser interpretada junto com os demais
                elementos da joia.
              </p>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-2.5
              "
            >
              {marcas.map((marca) => (
                <span
                  key={marca}
                  className="
                    inline-flex
                    min-h-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#5A1017]/10
                    bg-[#F7F3EF]
                    px-5
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#6B4246]
                  "
                >
                  {marca}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
            mt-8
            grid
            gap-8
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
              Tem uma joia assinada?
            </p>

            <h3
              className="
                mt-4
                max-w-[860px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Antes de considerar apenas o peso, vale entender a peça como um
              todo.
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
              A análise presencial permite observar marca, pedras, construção,
              conservação e demais características relevantes.
            </p>
          </div>

          <a
            href="#estado-de-conservacao"
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
            Estado da joia
          </a>
        </div>
      </div>
    </section>
  );
}