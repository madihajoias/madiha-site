const comparativo = [
  {
    item: 'Pureza',
    ouro18k: '75% de ouro',
    ouro24k: 'Próximo de 100%',
  },
  {
    item: 'Composição',
    ouro18k: 'Ouro + outros metais',
    ouro24k: 'Quase totalmente ouro',
  },
  {
    item: 'Resistência',
    ouro18k: 'Mais adequado para joias',
    ouro24k: 'Mais macio',
  },
  {
    item: 'Uso',
    ouro18k: 'Muito comum em joalheria',
    ouro24k: 'Mais usado como referência de pureza',
  },
  {
    item: 'Valor por grama',
    ouro18k: 'Inferior ao 24k',
    ouro24k: 'Referência superior',
  },
];

export default function Ouro18kComparativoSection() {
  return (
    <section
      id="comparativo-18k-24k"
      aria-labelledby="ouro-18k-comparativo-title"
      className="
        relative
        overflow-hidden
        bg-[#F4E8D6]
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
          bg-[radial-gradient(circle_at_14%_16%,rgba(255,255,255,0.82),transparent_30%),radial-gradient(circle_at_86%_84%,rgba(170,125,61,0.14),transparent_34%)]
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
            lg:grid-cols-[0.88fr_1.12fr]
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
              Comparação de teores
            </p>

            <h2
              id="ouro-18k-comparativo-title"
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
              Ouro 18k
              <br />
              x ouro 24k
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
              O ouro 18k e o ouro 24k possuem teores diferentes e, por isso,
              apresentam características distintas de composição, resistência,
              uso e referência de valor.
            </p>
          </div>
        </div>

        {/* CARDS PRINCIPAIS */}
        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-2
          "
        >
          {/* 18K */}
          <article
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
                -right-20
                -top-24
                h-64
                w-64
                rounded-full
                bg-[#FFECC3]/36
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
                Ouro 18k
              </p>

              <p
                className="
                  mt-5
                  font-serif
                  text-[5rem]
                  leading-none
                  text-[#412907]
                  md:text-[6rem]
                "
              >
                18/24
              </p>

              <p
                className="
                  mt-4
                  font-serif
                  text-[25px]
                  text-[#412907]
                "
              >
                75% de ouro
              </p>

              <p
                className="
                  mt-6
                  max-w-[480px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                O ouro 18k combina alto teor de ouro com uma liga metálica que
                aumenta resistência e durabilidade, característica importante
                para joias de uso frequente.
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
                    Ouro
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[22px]
                      text-[#412907]
                    "
                  >
                    75%
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
                    Liga metálica
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[22px]
                      text-[#412907]
                    "
                  >
                    25%
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* 24K */}
          <article
            className="
              relative
              overflow-hidden
              rounded-[3rem]
              border
              border-white/60
              bg-[#F3E5CE]/48
              p-8
              shadow-[0_24px_64px_rgba(94,66,27,0.08),inset_0_1px_0_rgba(255,255,255,0.55)]
              backdrop-blur-xl
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-24
                h-64
                w-64
                rounded-full
                bg-[#C7A56C]/15
                blur-[65px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#947244]
                "
              >
                Ouro 24k
              </p>

              <p
                className="
                  mt-5
                  font-serif
                  text-[5rem]
                  leading-none
                  text-[#68491F]
                  md:text-[6rem]
                "
              >
                24/24
              </p>

              <p
                className="
                  mt-4
                  font-serif
                  text-[25px]
                  text-[#68491F]
                "
              >
                Referência de pureza
              </p>

              <p
                className="
                  mt-6
                  max-w-[480px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#725D41]
                "
              >
                O ouro 24k possui teor muito elevado de ouro e funciona como
                referência máxima dentro da escala de quilates, mas é
                naturalmente mais macio do que o ouro 18k.
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
                    border-white/55
                    bg-white/18
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
                      text-[#947244]
                    "
                  >
                    Pureza
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[22px]
                      text-[#68491F]
                    "
                  >
                    ~100%
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.4rem]
                    border
                    border-white/55
                    bg-white/18
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
                      text-[#947244]
                    "
                  >
                    Característica
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[22px]
                      text-[#68491F]
                    "
                  >
                    Mais macio
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* TABELA */}
        <div
          className="
            mt-6
            overflow-hidden
            rounded-[2rem]
            border
            border-white/60
            bg-[#F1E2C8]/38
            shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.52)]
            backdrop-blur-xl
          "
        >
          <div
            className="
              hidden
              grid-cols-[1fr_1fr_1fr]
              border-b
              border-[#765525]/10
              px-7
              py-5
              md:grid
            "
          >
            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#947244]
              "
            >
              Comparação
            </span>

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#947244]
              "
            >
              Ouro 18k
            </span>

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#947244]
              "
            >
              Ouro 24k
            </span>
          </div>

          {comparativo.map((linha) => (
            <div
              key={linha.item}
              className="
                grid
                gap-4
                border-b
                border-[#765525]/10
                px-7
                py-6
                last:border-b-0
                md:grid-cols-[1fr_1fr_1fr]
                md:items-center
              "
            >
              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#947244]
                    md:hidden
                  "
                >
                  Comparação
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-[20px]
                    text-[#68491F]
                    md:mt-0
                  "
                >
                  {linha.item}
                </p>
              </div>

              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#947244]
                    md:hidden
                  "
                >
                  Ouro 18k
                </p>

                <p
                  className="
                    mt-1
                    text-[12px]
                    font-light
                    leading-6
                    text-[#725D41]
                    md:mt-0
                  "
                >
                  {linha.ouro18k}
                </p>
              </div>

              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#947244]
                    md:hidden
                  "
                >
                  Ouro 24k
                </p>

                <p
                  className="
                    mt-1
                    text-[12px]
                    font-light
                    leading-6
                    text-[#725D41]
                    md:mt-0
                  "
                >
                  {linha.ouro24k}
                </p>
              </div>
            </div>
          ))}
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
            Como o ouro 18k contém 75% de ouro, sua referência por grama é
            diferente da utilizada para o ouro 24k.
          </p>

          <a
            href="#cotacao-ouro-18k"
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
            Ver valor do ouro 18k
          </a>
        </div>
      </div>
    </section>
  );
}