const caracteristicas = [
  {
    label: 'Resistência',
    title: 'Mais adequado para joias',
    text:
      'A presença de outros metais aumenta a resistência da liga, tornando o ouro 18k mais apropriado para anéis, alianças, correntes, pulseiras e outras joias de uso frequente.',
  },
  {
    label: 'Durabilidade',
    title: 'Maior estabilidade',
    text:
      'O ouro puro é naturalmente mais macio. A liga metálica ajuda a melhorar a estabilidade da peça sem retirar o alto teor de ouro presente no 18k.',
  },
  {
    label: 'Cor',
    title: 'A liga influencia o acabamento',
    text:
      'A composição dos metais adicionados pode alterar a tonalidade final da joia, permitindo variações como ouro amarelo e ouro branco.',
  },
  {
    label: 'Avaliação',
    title: 'O teor continua sendo 18k',
    text:
      'Mesmo com diferenças de cor e composição da liga, uma peça 18k mantém 75% de ouro como referência de teor.',
  },
];

export default function Ouro18kComposicaoSection() {
  return (
    <section
      id="composicao-ouro-18k"
      aria-labelledby="ouro-18k-composicao-title"
      className="
        relative
        overflow-hidden
        bg-[#EAD9BC]
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
          bg-[radial-gradient(circle_at_14%_16%,rgba(255,250,240,0.76),transparent_30%),radial-gradient(circle_at_86%_84%,rgba(163,115,49,0.14),transparent_34%)]
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
                text-[#8C692E]
                md:text-[10px]
              "
            >
              Composição do ouro 18k
            </p>

            <h2
              id="ouro-18k-composicao-title"
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
              O papel dos
              <br />
              outros 25%.
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
                text-[#725D41]
                md:text-[15px]
                md:leading-8
              "
            >
              No ouro 18k, os 25% restantes da composição são formados por
              outros metais. Essa liga influencia resistência, durabilidade,
              acabamento e tonalidade da joia.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.82fr_1.18fr]
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
                Liga 18k
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
                75% ouro
                <br />
                + 25% liga
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
                A adição de outros metais permite que a joia seja mais
                resistente do que uma peça produzida com ouro de pureza muito
                elevada, preservando ao mesmo tempo um alto teor de ouro.
              </p>

              <div
                className="
                  mt-9
                  rounded-[1.6rem]
                  border
                  border-white/28
                  bg-white/10
                  px-6
                  py-6
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
                  Proporção da liga
                </p>

                <div
                  className="
                    mt-5
                    flex
                    h-3
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-[#614114]/14
                  "
                >
                  <div className="h-full w-3/4 bg-[#5C3B0E]/78" />
                  <div className="h-full w-1/4 bg-white/34" />
                </div>

                <div
                  className="
                    mt-4
                    grid
                    grid-cols-2
                    gap-4
                  "
                >
                  <div>
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#5F431F]/70
                      "
                    >
                      Ouro
                    </p>

                    <p
                      className="
                        mt-1
                        font-serif
                        text-[22px]
                        text-[#412907]
                      "
                    >
                      75%
                    </p>
                  </div>

                  <div>
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#5F431F]/70
                      "
                    >
                      Liga metálica
                    </p>

                    <p
                      className="
                        mt-1
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

              <div
                className="
                  mt-8
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
                  Um mesmo teor, diferentes tonalidades
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
                  Uma joia pode ser ouro 18k amarelo ou ouro 18k branco. A
                  diferença visual está relacionada à composição da liga,
                  enquanto o teor de ouro permanece em 75%.
                </p>
              </div>
            </div>
          </div>

          {/* CARACTERÍSTICAS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {caracteristicas.map((item) => (
              <article
                key={item.label}
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

        {/* OURO AMARELO X OURO BRANCO */}
        <div
          className="
            mt-6
            grid
            gap-4
            md:grid-cols-2
          "
        >
          <article
            className="
              rounded-[2rem]
              border
              border-white/60
              bg-[#F0DFC1]/42
              p-7
              shadow-[0_18px_48px_rgba(94,66,27,0.05)]
              backdrop-blur-xl
              md:p-8
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#947244]
              "
            >
              Ouro amarelo 18k
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[25px]
                text-[#68491F]
              "
            >
              Tonalidade clássica
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
              Mantém a aparência dourada tradicional, enquanto a liga metálica
              ajuda a fornecer resistência para o uso em joias.
            </p>
          </article>

          <article
            className="
              rounded-[2rem]
              border
              border-white/70
              bg-white/24
              p-7
              shadow-[0_18px_48px_rgba(94,66,27,0.05)]
              backdrop-blur-xl
              md:p-8
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#947244]
              "
            >
              Ouro branco 18k
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-[25px]
                text-[#68491F]
              "
            >
              Mesmo teor, outra aparência
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
              Também possui 75% de ouro, mas a composição da liga modifica a
              aparência do metal, produzindo uma tonalidade mais clara.
            </p>
          </article>
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
            Para avaliar corretamente uma peça 18k, além da cor é necessário
            confirmar tecnicamente o teor e a composição do material.
          </p>

          <a
            href="#comparativo-18k-24k"
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
            Comparar 18k e 24k
          </a>
        </div>
      </div>
    </section>
  );
}