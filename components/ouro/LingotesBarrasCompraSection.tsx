const itens = [
  {
    label: 'Lingotes',
    title: 'Lingotes de ouro',
    text:
      'Avaliamos lingotes em diferentes pesos e formatos, considerando teor, peso efetivo, características físicas e referência comercial vigente.',
  },
  {
    label: 'Barras',
    title: 'Barras de ouro',
    text:
      'Compramos barras de ouro mediante avaliação técnica, com conferência de peso, composição e demais características relevantes do material.',
  },
  {
    label: 'Teor',
    title: 'Pureza confirmada',
    text:
      'O teor informado, gravado ou documentado é analisado e deve ser confirmado tecnicamente antes da definição da proposta.',
  },
  {
    label: 'Pagamento',
    title: 'Liquidação após avaliação',
    text:
      'Após a conferência técnica e a aceitação da proposta, o pagamento é realizado de forma imediata, conforme as condições do atendimento.',
  },
];

export default function LingotesBarrasCompraSection() {
  return (
    <section
      id="compra-lingotes-barras"
      aria-labelledby="lingotes-barras-compra-title"
      className="
        relative
        overflow-hidden
        bg-[#F5EBDD]
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.84),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(199,168,122,0.15),transparent_34%)]
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
            lg:grid-cols-[0.85fr_1.15fr]
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
              Compra de ouro físico
            </p>

            <h2
              id="lingotes-barras-compra-title"
              className="
                mt-6
                max-w-[700px]
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
              Compramos lingotes
              <br />
              e barras de ouro.
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
              O processo começa com uma análise técnica do material. Peso,
              teor, integridade e características da peça são considerados
              antes da apresentação de qualquer referência comercial.
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
                Venda com avaliação técnica
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
                Primeiro avaliamos.
                <br />
                Depois apresentamos
                <br />
                a proposta.
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
                Lingotes e barras exigem uma análise cuidadosa para confirmar
                as características do material. A simples aparência ou uma
                gravação de teor não substituem a avaliação técnica.
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
                    Conferência
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
                    Proposta técnica
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
                  Precisão na pesagem
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
                  Utilizamos balança de precisão hidrostática como parte do
                  processo de avaliação, auxiliando na conferência técnica do
                  material apresentado.
                </p>
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {itens.map((item) => (
              <article
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/60
                  bg-[#F0E0C7]/34
                  p-7
                  shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.55)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#F4E7D1]/50
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
                      text-[#947244]
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
                      text-[#68491F]
                    "
                  >
                    {item.title}
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
            A proposta é apresentada somente após a conferência técnica das
            características do lingote ou barra.
          </p>

          <a
            href="#avaliacao-tecnica"
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
            Ver avaliação técnica
          </a>
        </div>
      </div>
    </section>
  );
}