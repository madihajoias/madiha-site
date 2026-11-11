const documentos = [
  {
    label: 'Nota fiscal',
    title: 'Pode ajudar a reconstruir a origem',
    text:
      'Uma nota fiscal antiga pode trazer informações sobre data de aquisição, loja, marca e características registradas no momento da compra.',
  },
  {
    label: 'Certificado',
    title: 'Pode complementar a análise de pedras',
    text:
      'Certificados gemológicos ou documentos ligados a diamantes e outras gemas podem fornecer dados úteis quando correspondem corretamente à peça.',
  },
  {
    label: 'Estojo',
    title: 'Pode trazer contexto de marca',
    text:
      'Estojos, caixas e embalagens originais podem ajudar a contextualizar a peça, especialmente em joias associadas a casas reconhecidas.',
  },
  {
    label: 'Recibos',
    title: 'Registros antigos também podem ser relevantes',
    text:
      'Recibos, comprovantes, fichas de manutenção e outros registros podem acrescentar informações ao histórico da joia.',
  },
  {
    label: 'Fotos',
    title: 'Imagens antigas podem contribuir',
    text:
      'Fotografias da peça ao longo do tempo podem ajudar a compreender alterações, reparos, substituições e características anteriores.',
  },
  {
    label: 'Sem documentos',
    title: 'A avaliação ainda pode começar',
    text:
      'Mesmo quando nenhum documento acompanha a joia, ainda é possível iniciar uma análise presencial baseada nas características reais da peça.',
  },
];

export default function CompraJoiasAntigasDocumentacaoSection() {
  return (
    <section
      id="sem-documentacao"
      aria-labelledby="documentacao-joias-antigas-title"
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
              Documentação e procedência
            </p>

            <h2
              id="documentacao-joias-antigas-title"
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
              Sem nota ou certificado? A avaliação ainda pode começar.
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
              É comum que joias antigas tenham perdido documentos ao longo dos
              anos. Quando existem, eles podem ajudar. Quando não existem, a
              própria peça continua sendo o principal ponto de partida da
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
                O documento ajuda. A peça confirma.
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
                Informação documental e análise física devem caminhar juntas.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[560px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D0C1BE]
                "
              >
                Certificados, notas, estojos e registros podem oferecer contexto,
                mas precisam estar coerentes com a joia apresentada.
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
                    Com documentação
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#F7F3EF]">
                    Mais contexto
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
                    Sem documentação
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#F7F3EF]">
                    A análise continua
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
                  Não descarte uma peça por falta de papel
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
                  A ausência de nota fiscal ou certificado não significa que a
                  joia não possa ser avaliada. Ela apenas reduz uma das fontes
                  de informação disponíveis.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {documentos.map((item) => (
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
            grid
            gap-8
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#5A1017]/10
            bg-[#FCFAF7]
            p-8
            shadow-[0_22px_58px_rgba(54,30,30,0.06)]
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
                text-[#A17D4F]
              "
            >
              Se tiver documentos, leve com a peça
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
                text-[#4F1720]
                md:text-[2.7rem]
              "
            >
              Eles podem acrescentar informação — mas não substituem a avaliação
              da joia real.
            </h3>

            <p
              className="
                mt-5
                max-w-[780px]
                text-[11px]
                font-light
                leading-6
                text-[#776B6C]
              "
            >
              A leitura final precisa considerar a correspondência entre
              documentação, características físicas e estado atual da peça.
            </p>
          </div>

          <a
            href="#calculadora-joias-antigas"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#5A1017]/12
              bg-[#4F1720]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#F7F3EF]
              shadow-[0_14px_34px_rgba(55,20,26,0.14)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Fazer estimativa inicial
          </a>
        </div>
      </div>
    </section>
  );
}