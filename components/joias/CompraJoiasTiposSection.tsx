const tipos = [
  {
    label: 'Anéis',
    title: 'Anéis de ouro e joias finas',
    text:
      'Avaliamos anéis em ouro, com ou sem diamantes, pedras preciosas ou outros elementos de valor.',
  },
  {
    label: 'Alianças',
    title: 'Alianças e pares',
    text:
      'Alianças individuais ou pares podem ser avaliados de acordo com o metal, teor, peso e características da peça.',
  },
  {
    label: 'Brincos',
    title: 'Brincos e pares incompletos',
    text:
      'Brincos com ou sem pedras, inclusive peças sem par, podem ser analisados presencialmente.',
  },
  {
    label: 'Correntes e colares',
    title: 'Peças em diferentes estilos',
    text:
      'Correntes, colares e peças de diferentes comprimentos, estilos e composições podem ser avaliados.',
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
      'Pingentes, broches e joias com características especiais também podem fazer parte da avaliação.',
  },
  {
    label: 'Joias antigas',
    title: 'Peças com história',
    text:
      'Joias antigas ou herdadas podem exigir uma leitura individual de metal, pedras, assinatura e estado de conservação.',
  },
  {
    label: 'Diamantes',
    title: 'Joias com diamantes',
    text:
      'Quando presentes, diamantes podem ser analisados separadamente das características do metal precioso.',
  },
  {
    label: 'Pedras preciosas',
    title: 'Rubis, safiras e esmeraldas',
    text:
      'Joias com pedras preciosas podem exigir análise específica de acordo com o tipo, a montagem e as características da peça.',
  },
  {
    label: 'Marcas reconhecidas',
    title: 'Joias assinadas',
    text:
      'Peças de joalherias reconhecidas podem exigir uma avaliação comercial específica além da composição do metal.',
  },
  {
    label: 'Peças quebradas',
    title: 'Joias mesmo sem uso',
    text:
      'Peças quebradas, danificadas ou incompletas ainda podem possuir valor e podem ser apresentadas para avaliação.',
  },
  {
    label: 'Outras joias',
    title: 'Avaliação individual',
    text:
      'Se a sua peça não estiver nesta lista, ela ainda pode ser avaliada conforme suas características e composição.',
  },
];

export default function CompraJoiasTiposSection() {
  return (
    <section
      id="tipos-de-joias"
      aria-labelledby="compra-joias-tipos-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(255,255,255,0.035),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[8%]
          top-[20%]
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
                text-[#D6BB8B]
                md:text-[10px]
              "
            >
              O que compramos
            </p>

            <h2
              id="compra-joias-tipos-title"
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
              Diferentes joias. Uma avaliação individual.
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
              A Madiha Maison compra diferentes tipos de joias, desde peças em
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
                border-white/10
                bg-white/[0.045]
                p-7
                shadow-[0_18px_48px_rgba(20,5,8,0.14),inset_0_1px_0_rgba(255,255,255,0.035)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C7A87A]/35
                hover:bg-white/[0.065]
                hover:shadow-[0_24px_60px_rgba(20,5,8,0.18)]
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
                    text-[#D6BB8B]
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
                    text-[#F7F3EF]
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
                    text-[#CDBDBA]
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
            lg:grid-cols-[0.72fr_1.28fr]
          "
        >
          {/* PEÇAS QUEBRADAS */}
          <div
            className="
              rounded-[2.1rem]
              border
              border-[#C7A87A]/20
              bg-[#F7F3EF]
              p-8
              shadow-[0_26px_70px_rgba(20,5,8,0.18)]
              md:p-10
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.26em]
                text-[#A17D4F]
              "
            >
              Não precisa estar perfeita
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
              Peças quebradas também podem ser avaliadas.
            </h3>

            <p
              className="
                mt-6
                text-[12px]
                font-light
                leading-7
                text-[#776B6C]
              "
            >
              Uma joia pode estar danificada, incompleta ou fora de uso e ainda
              possuir valor relacionado ao metal, às pedras ou a outras
              características presentes na peça.
            </p>
          </div>

          {/* JOIAS ASSINADAS */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.1rem]
              border
              border-white/10
              bg-white/[0.045]
              p-8
              shadow-[0_26px_70px_rgba(20,5,8,0.16),inset_0_1px_0_rgba(255,255,255,0.04)]
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
                bg-[#C7A87A]/10
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
                  text-[#D6BB8B]
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
                  text-[#F7F3EF]
                  md:text-[2.8rem]
                "
              >
                Marcas reconhecidas merecem uma leitura própria.
              </h3>

              <p
                className="
                  mt-6
                  max-w-[720px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#CDBDBA]
                "
              >
                Cartier, Van Cleef & Arpels, Bvlgari, Tiffany & Co., H.Stern,
                Sauer, Antonio Bernardo, Tereza Xavier e outras marcas
                selecionadas podem exigir uma avaliação além do valor do metal.
              </p>
            </div>
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
            border-white/10
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
              text-[#BFAEAB]
            "
          >
            Mesmo que você não saiba exatamente o metal, a marca ou as pedras
            presentes na peça, ela pode ser apresentada para uma avaliação
            individual.
          </p>

          <a
            href="#avaliacao-de-joias"
            className="
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              rounded-full
              border
              border-[#C7A87A]/40
              bg-white/[0.035]
              px-7
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#F7F3EF]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#C7A87A]
              hover:bg-[#C7A87A]
              hover:text-[#4F1720]
            "
          >
            Como avaliamos
          </a>
        </div>
      </div>
    </section>
  );
}