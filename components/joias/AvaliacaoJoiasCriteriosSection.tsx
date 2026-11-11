const criterios = [
  {
    numero: '01',
    label: 'Metal',
    title: 'Peso, teor e composição',
    text:
      'O metal precioso é analisado considerando peso, teor e composição da peça, sempre dentro do contexto geral da joia.',
  },
  {
    numero: '02',
    label: 'Pedras',
    title: 'Diamantes e gemas',
    text:
      'Diamantes, rubis, safiras, esmeraldas e outras pedras podem exigir uma análise própria de acordo com as características da peça.',
  },
  {
    numero: '03',
    label: 'Marca',
    title: 'Assinatura e procedência',
    text:
      'Peças de marcas reconhecidas podem exigir uma leitura específica além do valor do metal e das pedras.',
  },
  {
    numero: '04',
    label: 'Design',
    title: 'Construção e acabamento',
    text:
      'Proporção, acabamento, montagem e características de construção ajudam a compreender a identidade da joia.',
  },
  {
    numero: '05',
    label: 'Conservação',
    title: 'Estado geral da peça',
    text:
      'Integridade, desgaste, manutenção e condição da joia também podem ser considerados durante a avaliação.',
  },
];

export default function AvaliacaoJoiasCriteriosSection() {
  return (
    <section
      id="como-avaliamos"
      aria-labelledby="avaliacao-joias-criterios-title"
      className="
        relative
        overflow-hidden
        bg-[#56151F]
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
          bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_84%_82%,rgba(255,255,255,0.035),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[8%]
          top-[16%]
          h-[34vw]
          w-[34vw]
          rounded-full
          bg-[#7A1622]/28
          blur-[110px]
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
                text-[#D6BB8B]
                md:text-[10px]
              "
            >
              O que observamos
            </p>

            <h2
              id="avaliacao-joias-criterios-title"
              className="
                mt-6
                max-w-[760px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#F7F3EF]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Cada detalhe ajuda a compreender melhor a sua joia.
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
                text-[#D0C1BE]
                md:text-[15px]
                md:leading-8
              "
            >
              A avaliação considera diferentes aspectos da peça. Nem todos
              possuem o mesmo peso em todas as joias, por isso cada análise é
              feita individualmente.
            </p>
          </div>
        </div>

        {/* PAINEL */}
        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[2.35rem]
            border
            border-white/10
            bg-white/[0.045]
            p-6
            shadow-[0_32px_90px_rgba(20,5,8,0.18),inset_0_1px_0_rgba(255,255,255,0.04)]
            backdrop-blur-2xl
            md:p-8
            lg:p-10
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              -left-20
              top-10
              h-72
              w-72
              rounded-full
              bg-[#7A1622]/30
              blur-[80px]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -right-24
              bottom-0
              h-72
              w-72
              rounded-full
              bg-[#C7A87A]/12
              blur-[80px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-4
              lg:grid-cols-5
            "
          >
            {criterios.map((item) => (
              <article
                key={item.numero}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-6
                  shadow-[0_16px_42px_rgba(20,5,8,0.11),inset_0_1px_0_rgba(255,255,255,0.035)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#C7A87A]/35
                  hover:bg-white/[0.065]
                  md:p-7
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-12
                    -top-12
                    h-28
                    w-28
                    rounded-full
                    bg-[#C7A87A]/10
                    blur-[26px]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >
                    <span
                      className="
                        inline-flex
                        h-11
                        min-w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/30
                        bg-[#C7A87A]/[0.08]
                        px-3
                        font-serif
                        text-[16px]
                        text-[#D6BB8B]
                      "
                    >
                      {item.numero}
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
                      text-[#D6BB8B]
                    "
                  >
                    {item.label}
                  </p>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[23px]
                      font-normal
                      leading-tight
                      text-[#F7F3EF]
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
                      text-[#CDBDBA]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* FECHAMENTO DO PAINEL */}
          <div
            className="
              relative
              z-10
              mt-6
              grid
              gap-4
              lg:grid-cols-[1.15fr_0.85fr]
            "
          >
            <div
              className="
                rounded-[1.7rem]
                border
                border-white/10
                bg-white/[0.04]
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
                  tracking-[0.2em]
                  text-[#D6BB8B]
                "
              >
                Avaliação individual
              </p>

              <p
                className="
                  mt-3
                  max-w-[760px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#D3C3C0]
                "
              >
                A relevância de cada critério depende da peça apresentada.
                Algumas joias exigem atenção maior ao metal, enquanto outras
                podem demandar análise mais detalhada de pedras, marca ou
                construção.
              </p>
            </div>

            <div
              className="
                rounded-[1.7rem]
                border
                border-[#C7A87A]/20
                bg-[#F7F3EF]/[0.06]
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
                  tracking-[0.2em]
                  text-[#D6BB8B]
                "
              >
                Resultado
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
                O objetivo é chegar a uma leitura clara e coerente da joia como
                um conjunto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}