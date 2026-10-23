const regioes = [
  {
    label: 'Barra da Tijuca',
    title: 'Vogue Square',
    text:
      'A Madiha Maison está no Vogue Square, na Av. das Américas, em uma localização estratégica para quem vive, trabalha ou circula pela Barra da Tijuca.',
  },
  {
    label: 'Av. das Américas',
    title: 'Acesso direto',
    text:
      'O endereço fica em uma das principais vias da Zona Oeste, facilitando o deslocamento para quem procura avaliação ou compra de ouro na região.',
  },
  {
    label: 'Península',
    title: 'Próximo à região',
    text:
      'Clientes da Península encontram na Madiha uma opção próxima para avaliação presencial de ouro e joias em ambiente reservado.',
  },
  {
    label: 'VillageMall',
    title: 'Barra central',
    text:
      'Quem está no entorno do VillageMall e de áreas centrais da Barra pode chegar facilmente ao Vogue Square pela Av. das Américas.',
  },
  {
    label: 'BarraShopping',
    title: 'Fácil deslocamento',
    text:
      'A localização da Madiha também atende quem está próximo ao BarraShopping e busca um endereço especializado para avaliação de ouro.',
  },
  {
    label: 'Jardim Oceânico',
    title: 'Atendimento na Barra',
    text:
      'Para quem está no Jardim Oceânico, a Madiha oferece atendimento presencial na própria Barra da Tijuca, com avaliação técnica e privacidade.',
  },
  {
    label: 'Olegário Maciel',
    title: 'Região próxima',
    text:
      'Quem circula pela região da Olegário Maciel também pode utilizar o Vogue Square como referência para encontrar a Madiha Maison.',
  },
  {
    label: 'Recreio',
    title: 'Acesso pela Av. das Américas',
    text:
      'A Madiha também atende clientes que vêm do Recreio dos Bandeirantes e procuram uma loja de ouro na Barra da Tijuca.',
  },
];

export default function LojaOuroPertoRegioesSection() {
  return (
    <section
      id="regioes-proximas"
      aria-labelledby="loja-ouro-regioes-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F0E5]
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_86%_84%,rgba(118,85,37,0.08),transparent_34%)]
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
              Regiões próximas
            </p>

            <h2
              id="loja-ouro-regioes-title"
              className="
                mt-6
                max-w-[760px]
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
              Loja de ouro
              <br />
              na Barra da Tijuca.
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
                text-[#806C50]
                md:text-[15px]
                md:leading-8
              "
            >
              Localizada no Vogue Square, na Av. das Américas, a Madiha Maison
              atende quem procura uma loja de ouro perto de diferentes pontos
              da Barra da Tijuca e regiões próximas.
            </p>
          </div>
        </div>

        {/* DESTAQUE LOCAL */}
        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.78fr_1.22fr]
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
                Nosso endereço
              </p>

              <h3
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[2.8rem]
                  font-normal
                  leading-[1.02]
                  text-[#412907]
                  md:text-[3.6rem]
                "
              >
                No coração
                <br />
                da Barra.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[460px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                O Vogue Square funciona como uma referência de localização para
                quem procura avaliação e compra de ouro na Av. das Américas e
                nos arredores da Barra da Tijuca.
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
                  Madiha Maison
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[22px]
                    leading-snug
                    text-[#412907]
                  "
                >
                  Av. das Américas, 8585
                  <br />
                  Vogue Square • Sala 490
                </p>

                <p
                  className="
                    mt-4
                    text-[10px]
                    font-light
                    leading-5
                    text-[#4E3515]/72
                  "
                >
                  Barra da Tijuca • Rio de Janeiro – RJ
                </p>
              </div>

              <a
                href="#localizacao"
                className="
                  mt-7
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#5F431F]/20
                  bg-white/12
                  px-7
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#4F3514]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:bg-white/24
                "
              >
                Ver mapa e endereço
              </a>
            </div>
          </div>

          {/* REGIÕES */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {regioes.map((regiao) => (
              <article
                key={regiao.label}
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
                    {regiao.label}
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
                    {regiao.title}
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
                    {regiao.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CONTEXTO LOCAL */}
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
              lg:grid-cols-[0.66fr_1.34fr]
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
                Busca local
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
                Perto de onde você está
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
              Se você está na Barra da Tijuca, Península, Jardim Oceânico,
              Olegário Maciel, Recreio ou no entorno do BarraShopping e
              VillageMall, pode utilizar o Vogue Square como referência para
              chegar à Madiha Maison.
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
              max-w-[760px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            Independentemente do ponto da Barra de onde você venha, a avaliação
            é realizada presencialmente no Vogue Square, com atendimento
            reservado e análise técnica do material.
          </p>

          <a
            href="#perguntas-frequentes"
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
            Perguntas frequentes
          </a>
        </div>
      </div>
    </section>
  );
}