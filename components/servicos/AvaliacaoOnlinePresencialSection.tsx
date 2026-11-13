export default function AvaliacaoOnlineCTASection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de solicitar uma avaliação online de uma joia pela Madiha Maison.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contato-avaliacao-online"
      aria-labelledby="contato-avaliacao-online-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
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
          bg-[radial-gradient(circle_at_15%_20%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(214,187,139,0.13),transparent_34%)]
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
        <div
          className="
            relative
            overflow-hidden
            rounded-[2.7rem]
            border
            border-[#A17D4F]/16
            bg-[#332A2B]
            px-8
            py-12
            shadow-[0_34px_90px_rgba(51,42,43,0.14)]
            md:px-12
            md:py-16
            lg:px-16
            lg:py-20
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              -left-24
              -top-24
              h-[360px]
              w-[360px]
              rounded-full
              bg-[#D6BB8B]/[0.07]
              blur-[90px]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -bottom-28
              -right-20
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#C7A87A]/[0.06]
              blur-[100px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-12
              lg:grid-cols-[1.08fr_0.92fr]
              lg:items-center
              lg:gap-16
            "
          >
            {/* TEXTO */}
            <div>
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#D6BB8B]
                "
              >
                Avaliação Online Madiha Maison
              </p>

              <h2
                id="contato-avaliacao-online-title"
                className="
                  mt-6
                  max-w-[820px]
                  font-serif
                  text-[3.2rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.04em]
                  text-[#F7F3EF]
                  sm:text-[4rem]
                  md:text-[4.8rem]
                "
              >
                Envie sua joia e comece por uma primeira análise.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[690px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D0C1BE]
                  md:text-[14px]
                  md:leading-8
                "
              >
                Envie fotografias, documentos e as informações que tiver sobre
                a peça. A equipe da Madiha Maison poderá orientar os próximos
                passos a partir desse primeiro contato.
              </p>

              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D6BB8B]
                    bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
                    px-8
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#332A2B]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_20px_48px_rgba(214,187,139,0.14)]
                  "
                >
                  Solicitar avaliação online
                </a>

                <a
                  href="/joias/calculadora-de-joias/"
                  className="
                    inline-flex
                    min-h-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D6BB8B]/20
                    bg-[#F7F3EF]/[0.035]
                    px-8
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#F7F3EF]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#D6BB8B]/40
                    hover:bg-[#F7F3EF]/[0.06]
                  "
                >
                  Fazer uma estimativa
                </a>
              </div>

              <p
                className="
                  mt-5
                  max-w-[650px]
                  text-[8px]
                  font-light
                  leading-5
                  text-[#B8A9A7]
                "
              >
                A análise online é inicial e não substitui a conferência física
                quando forem necessários testes, medições ou validação técnica.
              </p>
            </div>

            {/* CARD */}
            <div
              className="
                rounded-[2.2rem]
                border
                border-[#D6BB8B]/14
                bg-[#F7F3EF]/[0.04]
                p-7
                backdrop-blur-sm
                md:p-8
              "
            >
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#D6BB8B]
                "
              >
                Para começar
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[2.2rem]
                  leading-[1]
                  tracking-[-0.025em]
                  text-[#F7F3EF]
                "
              >
                O que enviar pelo WhatsApp
              </h3>

              <div className="mt-7 grid gap-3">
                {[
                  ['01', 'Foto da frente'],
                  ['02', 'Foto do verso'],
                  ['03', 'Detalhes e marcações'],
                  ['04', 'Pedras em destaque'],
                  ['05', 'Certificados, se houver'],
                  ['06', 'Informações que você conhece'],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[1.3rem]
                      border
                      border-[#D6BB8B]/10
                      bg-[#F7F3EF]/[0.025]
                      px-5
                      py-4
                    "
                  >
                    <span
                      className="
                        font-serif
                        text-[18px]
                        text-[#D6BB8B]
                      "
                    >
                      {number}
                    </span>

                    <span
                      className="
                        text-[9px]
                        font-light
                        text-[#E1D5D2]
                      "
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-7
                  rounded-[1.45rem]
                  border
                  border-[#D6BB8B]/12
                  bg-[#D6BB8B]/[0.05]
                  px-6
                  py-5
                "
              >
                <p
                  className="
                    font-serif
                    text-[19px]
                    leading-snug
                    text-[#F7F3EF]
                  "
                >
                  Não precisa saber tudo sobre a peça. O primeiro contato serve
                  justamente para organizar essas informações.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCO SECUNDÁRIO */}
        <div
          className="
            mt-8
            grid
            gap-6
            md:grid-cols-3
          "
        >
          {[
            {
              title: 'Prático',
              text:
                'Comece pelo celular, sem precisar deslocar a peça imediatamente.',
            },
            {
              title: 'Orientado',
              text:
                'As informações enviadas ajudam a direcionar os próximos passos.',
            },
            {
              title: 'Integrado',
              text:
                'Se necessário, a avaliação continua presencialmente no Vogue Square.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-[1.8rem]
                border
                border-[#A17D4F]/12
                bg-[#FCFAF7]
                p-6
                shadow-[0_16px_44px_rgba(96,72,45,0.04)]
              "
            >
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.19em]
                  text-[#A17D4F]
                "
              >
                {item.title}
              </p>

              <p
                className="
                  mt-3
                  text-[10px]
                  font-light
                  leading-6
                  text-[#675C5D]
                "
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* TRANSIÇÃO */}
        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-[#A17D4F]/12
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div>
            <p
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#A17D4F]
              "
            >
              Atendimento presencial
            </p>

            <p
              className="
                mt-2
                font-serif
                text-[24px]
                text-[#332A2B]
              "
            >
              Se precisar trazer a peça, estamos no Vogue Square.
            </p>
          </div>

          <a
            href="#localizacao-avaliacao-online"
            className="
              inline-flex
              items-center
              gap-2
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#8C6635]
              transition-opacity
              hover:opacity-60
            "
          >
            Ver localização
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}