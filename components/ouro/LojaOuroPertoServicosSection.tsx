const servicos = [
  {
    label: 'Ouro 24k',
    title: 'Ouro de alta pureza',
    text:
      'Avaliamos ouro 24k considerando peso, teor e características do material apresentado.',
  },
  {
    label: 'Ouro 18k',
    title: 'Joias e peças 750',
    text:
      'Analisamos peças em ouro 18k, incluindo joias marcadas como 750 e outras referências equivalentes.',
  },
  {
    label: 'Ouro branco',
    title: 'Avaliação específica',
    text:
      'Peças em ouro branco também podem ser avaliadas, considerando teor, composição e características da joia.',
  },
  {
    label: 'Joias',
    title: 'Anéis, alianças e correntes',
    text:
      'Avaliamos anéis, alianças, correntes, pulseiras, brincos e outras joias em ouro.',
  },
  {
    label: 'Joias antigas',
    title: 'Peças usadas ou antigas',
    text:
      'Joias antigas, herdadas ou fora de uso podem ser avaliadas mesmo quando já apresentam sinais do tempo.',
  },
  {
    label: 'Peças quebradas',
    title: 'Ouro mesmo sem uso',
    text:
      'Correntes rompidas, alianças deformadas e outras peças danificadas continuam tendo valor relacionado ao metal.',
  },
  {
    label: 'Lingotes',
    title: 'Lingotes de ouro',
    text:
      'Lingotes podem ser avaliados com análise técnica de peso, pureza e características físicas.',
  },
  {
    label: 'Barras',
    title: 'Barras de ouro',
    text:
      'Barras de ouro também passam por conferência técnica antes da apresentação de uma referência comercial.',
  },
];

export default function LojaOuroPertoServicosSection() {
  return (
    <section
      id="o-que-avaliamos"
      aria-labelledby="loja-ouro-servicos-title"
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
              O que avaliamos
            </p>

            <h2
              id="loja-ouro-servicos-title"
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
              Ouro e joias
              <br />
              em diferentes formatos.
            </h2>
          </div>

          <div
            className="
              max-w-[640px]
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
              Se você encontrou a Madiha procurando uma loja de ouro perto de
              mim, pode trazer diferentes tipos de peças para avaliação. O
              importante é confirmar tecnicamente o material antes de definir
              qualquer referência comercial.
            </p>
          </div>
        </div>

        {/* DESTAQUE */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.76fr_1.24fr]
          "
        >
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
                Avaliação técnica
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
                Não precisa saber
                <br />
                exatamente o que
                <br />
                você tem.
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
                Se você não souber o teor, peso ou composição da peça, isso
                pode ser verificado durante a avaliação presencial.
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
                    Identificação
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    Teor do ouro
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
                    Peso da peça
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
                  Mesmo peças sem uso
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
                  Uma joia pode estar antiga, quebrada ou fora de uso e ainda
                  possuir valor relacionado ao ouro presente em sua composição.
                </p>
              </div>
            </div>
          </div>

          {/* SERVIÇOS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {servicos.map((item) => (
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
                      text-[23px]
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

        {/* SERVIÇOS COMPLEMENTARES */}
        <div
          className="
            mt-6
            rounded-[2rem]
            border
            border-white/60
            bg-[#F1E2C8]/36
            px-7
            py-8
            shadow-[0_18px_48px_rgba(94,66,27,0.05)]
            backdrop-blur-xl
            md:px-9
          "
        >
          <div
            className="
              grid
              gap-8
              lg:grid-cols-[0.7fr_1.3fr]
              lg:items-center
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#947244]
                "
              >
                Outros itens
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[27px]
                  leading-tight
                  text-[#68491F]
                "
              >
                Além do ouro
              </h3>
            </div>

            <p
              className="
                text-[11px]
                font-light
                leading-6
                text-[#725D41]
              "
            >
              A Madiha Maison também trabalha com avaliação de joias com
              diamantes, relógios de luxo e outros materiais. Esses serviços
              complementares são analisados de acordo com as características
              específicas de cada peça.
            </p>
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
              max-w-[740px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            Não é necessário identificar previamente o teor ou o valor da peça.
            A avaliação presencial é justamente a etapa utilizada para confirmar
            essas informações.
          </p>

          <a
            href="#avaliacao-local"
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
            Como funciona a avaliação
          </a>
        </div>
      </div>
    </section>
  );
}