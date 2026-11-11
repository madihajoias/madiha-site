const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

const whatsappMessage =
  'Olá, gostaria de solicitar uma avaliação de diamante ou brilhante na Madiha Maison.';

const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function CompraDiamantesCTASection() {
  return (
    <section
      id="contato-diamantes"
      aria-labelledby="contato-diamantes-title"
      className="
        relative
        overflow-hidden
        bg-[#FCFAF7]
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
          bg-[radial-gradient(circle_at_16%_20%,rgba(199,168,122,0.18),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(214,187,139,0.16),transparent_34%)]
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
            rounded-[2.6rem]
            border
            border-[#A17D4F]/18
            bg-[linear-gradient(135deg,#E4C99D_0%,#F1E2C9_38%,#F7EFE4_62%,#D9B982_100%)]
            px-7
            py-12
            shadow-[0_36px_100px_rgba(96,72,45,0.12)]
            md:px-12
            md:py-16
            lg:px-16
            lg:py-20
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-[420px]
              w-[420px]
              rounded-full
              bg-white/28
              blur-[90px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-24
              h-[360px]
              w-[360px]
              rounded-full
              bg-[#B99154]/14
              blur-[90px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-[12%]
              top-[18%]
              h-[1px]
              w-[76%]
              bg-gradient-to-r
              from-transparent
              via-[#A17D4F]/20
              to-transparent
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
              lg:gap-20
            "
          >
            {/* TEXTO */}
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#8C6635]/16
                  bg-white/25
                  px-4
                  py-2.5
                  backdrop-blur-xl
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#8C6635]
                  "
                />

                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#8C6635]
                  "
                >
                  Avaliação Madiha Maison
                </p>
              </div>

              <h2
                id="contato-diamantes-title"
                className="
                  mt-7
                  max-w-[820px]
                  font-serif
                  text-[3.15rem]
                  font-normal
                  leading-[0.93]
                  tracking-[-0.045em]
                  text-[#332A2B]
                  sm:text-[3.8rem]
                  md:text-[4.6rem]
                  lg:text-[5rem]
                "
              >
                Quer entender o valor do seu diamante?
              </h2>

              <p
                className="
                  mt-7
                  max-w-[660px]
                  text-[13px]
                  font-light
                  leading-7
                  text-[#5F5350]
                  md:text-[15px]
                  md:leading-8
                "
              >
                Apresente sua pedra ou joia para uma avaliação individual.
                Diamantes soltos ou montados podem ser analisados, com ou sem
                certificado.
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
                    border-[#332A2B]
                    bg-[#332A2B]
                    px-8
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#F7F3EF]
                    shadow-[0_18px_42px_rgba(51,42,43,0.14)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#473A3B]
                  "
                >
                  Solicitar avaliação
                </a>

                <a
                  href="#localizacao-diamantes"
                  className="
                    inline-flex
                    min-h-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#8C6635]/24
                    bg-white/28
                    px-8
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#5A1017]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-white/45
                  "
                >
                  Ver localização
                </a>
              </div>

              <p
                className="
                  mt-6
                  max-w-[620px]
                  text-[9px]
                  font-light
                  leading-5
                  text-[#766760]
                "
              >
                O envio de informações pelo WhatsApp pode ajudar no primeiro
                contato, mas a confirmação das características da pedra depende
                da avaliação presencial.
              </p>
            </div>

            {/* PAINEL LATERAL */}
            <div
              className="
                rounded-[2.1rem]
                border
                border-[#8C6635]/15
                bg-[#FCFAF7]/55
                p-7
                shadow-[0_24px_64px_rgba(96,72,45,0.08)]
                backdrop-blur-xl
                md:p-9
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#8C6635]
                "
              >
                Você pode apresentar
              </p>

              <div className="mt-7 grid gap-3">
                {[
                  {
                    number: '01',
                    title: 'Diamante solto',
                    text: 'Lapidado e fora de uma joia.',
                  },
                  {
                    number: '02',
                    title: 'Diamante montado',
                    text: 'Em anéis, brincos, colares ou outras peças.',
                  },
                  {
                    number: '03',
                    title: 'Com certificado',
                    text: 'O documento pode ser considerado durante a análise.',
                  },
                  {
                    number: '04',
                    title: 'Sem certificado',
                    text: 'A ausência do documento não impede uma avaliação inicial.',
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="
                      grid
                      grid-cols-[auto_1fr]
                      gap-4
                      rounded-[1.45rem]
                      border
                      border-[#8C6635]/10
                      bg-white/30
                      p-5
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#8C6635]/16
                        bg-[#EFE1C8]/65
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[16px]
                          text-[#8C6635]
                        "
                      >
                        {item.number}
                      </span>
                    </div>

                    <div>
                      <h3
                        className="
                          font-serif
                          text-[20px]
                          leading-tight
                          text-[#332A2B]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-[9px]
                          font-light
                          leading-5
                          text-[#675C5D]
                        "
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-5
                  rounded-[1.55rem]
                  border
                  border-[#8C6635]/14
                  bg-[#EAD5B1]/60
                  px-6
                  py-5
                "
              >
                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#8C6635]
                  "
                >
                  Madiha Maison
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[21px]
                    leading-snug
                    text-[#332A2B]
                  "
                >
                  Avaliação individual, atendimento reservado e decisão sem
                  obrigação de venda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}