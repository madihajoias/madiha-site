const fatores = [
  {
    number: '01',
    title: 'Cotação-base do ouro',
    text:
      'O ouro 24k funciona como referência para o valor do metal puro no mercado.',
  },
  {
    number: '02',
    title: 'Pureza do teor',
    text:
      'Cada teor representa uma proporção diferente de ouro na liga. Por isso, 18k, 14k e outros teores possuem valores por grama distintos.',
  },
  {
    number: '03',
    title: 'Peso da peça',
    text:
      'O peso do ouro é utilizado em conjunto com a cotação correspondente ao teor informado.',
  },
  {
    number: '04',
    title: 'Valor comercial',
    text:
      'O valor comercial pode ser diferente da referência teórica de mercado, considerando critérios de avaliação, composição e condições da peça.',
  },
];

export default function CotacaoOuroFormacaoSection() {
  return (
    <section
      id="como-e-formada-a-cotacao"
      aria-labelledby="formacao-cotacao-title"
      className="
        relative
        overflow-hidden
        bg-[#F5EBDD]
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
              Entenda a cotação
            </p>

            <h2
              id="formacao-cotacao-title"
              className="
                mt-6
                max-w-[620px]
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
              Como é formado
              <br />
              o preço do ouro.
            </h2>
          </div>

          <div
            className="
              max-w-[620px]
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
              A cotação do ouro parte de uma referência de mercado e é
              ajustada conforme o teor do metal. Para chegar a uma estimativa
              comercial, também é necessário considerar peso, composição e
              características da peça.
            </p>
          </div>
        </div>

        {/* PAINEL */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.78fr_1.22fr]
          "
        >
          {/* REFERÊNCIA 24K */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[3rem_3rem_5rem_3rem]
              border
              border-white/60
              bg-[linear-gradient(145deg,rgba(199,165,108,0.96),rgba(177,136,72,0.95),rgba(154,110,49,0.94),rgba(188,148,84,0.94))]
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
                Referência-base
              </p>

              <p
                className="
                  mt-6
                  font-serif
                  text-[4rem]
                  leading-none
                  text-[#412907]
                  md:text-[5.3rem]
                "
              >
                24k
              </p>

              <p
                className="
                  mt-3
                  font-serif
                  text-[24px]
                  text-[#412907]
                "
              >
                Ouro puro
              </p>

              <div
                className="
                  my-8
                  h-px
                  w-20
                  bg-[#52350F]/25
                "
              />

              <p
                className="
                  max-w-[420px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                O ouro 24k representa a referência de maior pureza e serve
                como base para comparação com os demais teores.
              </p>

              <div
                className="
                  mt-8
                  rounded-[1.5rem]
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
                  Exemplo
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[18px]
                    text-[#412907]
                  "
                >
                  18k = 75% de ouro
                </p>

                <p
                  className="
                    mt-2
                    text-[10px]
                    leading-5
                    text-[#4E3515]/70
                  "
                >
                  Por isso, o preço por grama do ouro 18k é inferior ao do
                  ouro 24k.
                </p>
              </div>
            </div>
          </div>

          {/* FATORES */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {fatores.map((fator) => (
              <article
                key={fator.number}
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
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#987646]
                    "
                  >
                    {fator.number}
                  </p>

                  <div
                    className="
                      mt-6
                      h-px
                      w-12
                      bg-[#765525]/24
                    "
                  />

                  <h3
                    className="
                      mt-6
                      font-serif
                      text-[24px]
                      font-normal
                      leading-tight
                      text-[#68491F]
                    "
                  >
                    {fator.title}
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
                    {fator.text}
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
            A cotação do ouro pode variar ao longo do dia. A referência
            exibida no site deve ser entendida como uma informação de mercado
            e não como proposta definitiva de compra.
          </p>

          <a
            href="#cotacao-por-teor"
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
            Ver preço por teor
          </a>
        </div>
      </div>
    </section>
  );
}