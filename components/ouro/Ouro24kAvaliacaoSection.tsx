const etapas = [
  {
    numero: '01',
    titulo: 'Conferência do peso',
    texto:
      'A peça é pesada em balança de precisão para identificar o peso total utilizado como base na avaliação.',
  },
  {
    numero: '02',
    titulo: 'Análise do teor',
    texto:
      'O teor informado ou indicado pela peça é verificado tecnicamente para confirmar se o material corresponde ao ouro 24k.',
  },
  {
    numero: '03',
    titulo: 'Composição da peça',
    texto:
      'São observadas soldas, componentes, pedras, fechos e outros elementos que possam interferir na composição e no peso do ouro.',
  },
  {
    numero: '04',
    titulo: 'Referência comercial',
    texto:
      'Após a confirmação das características, a avaliação considera a referência comercial aplicável ao teor e ao peso apurados.',
  },
];

export default function Ouro24kAvaliacaoSection() {
  return (
    <section
      id="avaliacao-ouro-24k"
      aria-labelledby="ouro-24k-avaliacao-title"
      className="
        relative
        overflow-hidden
        bg-[#F3E7D5]
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.82),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(180,135,68,0.14),transparent_34%)]
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
                text-[#8F6E3F]
                md:text-[10px]
              "
            >
              Avaliação técnica
            </p>

            <h2
              id="ouro-24k-avaliacao-title"
              className="
                mt-6
                max-w-[680px]
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
              Como avaliamos
              <br />
              ouro 24k.
            </h2>
          </div>

          <div
            className="
              max-w-[630px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#806C50]
                md:text-[15px]
                md:leading-8
              "
            >
              O valor de uma peça não depende apenas da cotação. Para uma
              avaliação correta, é necessário confirmar peso, teor, composição
              e demais características do material.
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
              rounded-[3rem_3rem_5rem_3rem]
              border
              border-white/60
              bg-[linear-gradient(145deg,rgba(199,165,108,0.98),rgba(177,136,72,0.96),rgba(154,110,49,0.95),rgba(188,148,84,0.95))]
              p-8
              shadow-[0_38px_90px_rgba(83,55,18,0.20),inset_0_1px_0_rgba(255,255,255,0.42)]
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
                bg-[#FFECC3]/34
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
                  text-[#5F431F]
                "
              >
                Madiha Maison
              </p>

              <h3
                className="
                  mt-6
                  max-w-[450px]
                  font-serif
                  text-[2.8rem]
                  font-normal
                  leading-[1.02]
                  text-[#412907]
                  md:text-[3.6rem]
                "
              >
                Cotação é
                <br />
                apenas o início.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[450px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                Para confirmar quanto vale uma peça de ouro 24k, é preciso
                verificar se o peso corresponde efetivamente ao metal e se o
                teor informado é compatível com a composição analisada.
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
                    Verificação
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    Peso + teor
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
                    Resultado
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    Referência real
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
                  Avaliação presencial
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
                  A confirmação técnica evita que uma estimativa baseada apenas
                  em peso ou marcação de quilates seja tratada como valor
                  definitivo.
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
                  <p
                    className="
                      font-serif
                      text-[34px]
                      leading-none
                      text-[#B38B52]
                    "
                  >
                    {etapa.numero}
                  </p>

                  <h3
                    className="
                      mt-5
                      font-serif
                      text-[24px]
                      font-normal
                      leading-tight
                      text-[#68491F]
                    "
                  >
                    {etapa.titulo}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[11px]
                      font-light
                      leading-6
                      text-[#725D41]
                    "
                  >
                    {etapa.texto}
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
            border-[#765525]/12
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              max-w-[720px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            A avaliação técnica é especialmente importante quando não há
            certeza sobre a origem, o teor ou a composição da peça.
          </p>

          <a
            href="#localizacao"
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
            Agendar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}