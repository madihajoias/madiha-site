const tipos = [
  {
    label: 'Anéis',
    title: 'Anéis de ouro e alta joalheria',
    text:
      'Anéis em ouro, com ou sem diamantes, pedras preciosas ou outros elementos relevantes podem ser avaliados individualmente.',
  },
  {
    label: 'Alianças',
    title: 'Alianças e pares',
    text:
      'Alianças individuais ou pares podem ser analisados considerando metal, teor, peso e características da peça.',
  },
  {
    label: 'Brincos',
    title: 'Brincos e pares incompletos',
    text:
      'Brincos com ou sem pedras, inclusive peças sem par, podem ser apresentados para avaliação.',
  },
  {
    label: 'Correntes e colares',
    title: 'Peças em diferentes estilos',
    text:
      'Correntes, colares e peças de diferentes comprimentos, estilos e composições também podem ser avaliados.',
  },
  {
    label: 'Pulseiras',
    title: 'Pulseiras e braceletes',
    text:
      'Avaliamos pulseiras, braceletes e peças com diferentes estruturas, acabamentos e combinações de materiais.',
  },
  {
    label: 'Pingentes e broches',
    title: 'Peças especiais',
    text:
      'Pingentes, broches e joias com características especiais podem exigir uma leitura específica durante a avaliação.',
  },
  {
    label: 'Joias antigas',
    title: 'Peças com história',
    text:
      'Joias antigas ou herdadas podem exigir análise individual de metal, pedras, assinatura e estado de conservação.',
  },
  {
    label: 'Diamantes',
    title: 'Joias com diamantes',
    text:
      'Quando presentes, diamantes podem exigir uma análise própria além da avaliação do metal precioso.',
  },
  {
    label: 'Pedras preciosas',
    title: 'Rubis, safiras e esmeraldas',
    text:
      'Joias com pedras preciosas podem demandar uma avaliação mais ampla de acordo com as características da peça.',
  },
  {
    label: 'Marcas reconhecidas',
    title: 'Joias assinadas',
    text:
      'Peças de marcas reconhecidas podem exigir uma leitura específica de assinatura, construção, conservação e características comerciais.',
  },
  {
    label: 'Peças quebradas',
    title: 'Joias mesmo sem uso',
    text:
      'Peças quebradas, danificadas ou incompletas ainda podem ser avaliadas conforme sua composição e características.',
  },
  {
    label: 'Outras joias',
    title: 'Avaliação individual',
    text:
      'Se a sua peça não estiver nesta lista, ela ainda pode ser apresentada para uma análise individual.',
  },
];

export default function AvaliacaoJoiasTiposSection() {
  return (
    <section
      id="tipos-de-joias"
      aria-labelledby="avaliacao-joias-tipos-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(90,16,23,0.055),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[8%]
          top-[18%]
          h-[32vw]
          w-[32vw]
          rounded-full
          bg-[#C7A87A]/10
          blur-[105px]
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
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Tipos de joias
            </p>

            <h2
              id="avaliacao-joias-tipos-title"
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
              Diferentes peças podem exigir diferentes leituras.
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
              A Madiha Maison avalia diferentes tipos de joias, desde peças em
              ouro até joias com diamantes, pedras preciosas, marcas
              reconhecidas e peças antigas.
            </p>
          </div>
        </div>

        {/* GRADE */}
        <div
          className="
            mt-16
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {tipos.map((item) => (
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

        {/* DESTAQUES */}
        <div
          className="
            mt-6
            grid
            gap-6
            lg:grid-cols-[0.78fr_1.22fr]
          "
        >
          <div
            className="
              rounded-[2.1rem]
              border
              border-[#5A1017]/10
              bg-[#4F1720]
              p-8
              shadow-[0_26px_70px_rgba(55,20,26,0.14)]
              md:p-10
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#D6BB8B]
              "
            >
              Peças quebradas
            </p>

            <h3
              className="
                mt-5
                font-serif
                text-[2.2rem]
                font-normal
                leading-[1.02]
                tracking-[-0.03em]
                text-[#F7F3EF]
                md:text-[2.8rem]
              "
            >
              A joia não precisa estar perfeita para ser avaliada.
            </h3>

            <p
              className="
                mt-6
                text-[12px]
                font-light
                leading-7
                text-[#D3C3C0]
              "
            >
              Mesmo peças danificadas ou incompletas podem apresentar
              características relevantes para uma avaliação.
            </p>
          </div>

          <div
            className="
              relative
              overflow-hidden
              rounded-[2.1rem]
              border
              border-[#5A1017]/10
              bg-[#FCFAF7]
              p-8
              shadow-[0_26px_70px_rgba(54,30,30,0.06)]
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
                bg-[#C7A87A]/12
                blur-[60px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#A17D4F]
                "
              >
                Joias assinadas
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[2.2rem]
                  font-normal
                  leading-[1.02]
                  tracking-[-0.03em]
                  text-[#4F1720]
                  md:text-[2.8rem]
                "
              >
                Marcas reconhecidas podem exigir uma avaliação própria.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[720px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#776B6C]
                "
              >
                Cartier, Van Cleef & Arpels, Bvlgari, Tiffany & Co., H.Stern,
                Sauer, Antonio Bernardo, Tereza Xavier e outras marcas podem
                exigir uma leitura que vá além da composição do metal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}