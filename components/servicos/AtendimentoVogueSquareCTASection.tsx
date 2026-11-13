export default function AtendimentoVogueSquareCTASection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de agendar um atendimento na Madiha Maison no Vogue Square.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="contato-vogue-square"
      aria-labelledby="cta-vogue-square-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        py-24
        md:py-28
        lg:py-32
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_84%_82%,rgba(90,16,23,0.06),transparent_34%)]
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
            rounded-[2.8rem]
            border
            border-[#A17D4F]/14
            bg-[#332A2B]
            px-8
            py-12
            shadow-[0_34px_90px_rgba(51,42,43,0.13)]
            md:px-12
            md:py-16
            lg:px-16
            lg:py-18
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute
              -right-32
              -top-32
              h-[420px]
              w-[420px]
              rounded-full
              border
              border-[#D6BB8B]/10
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -bottom-40
              -left-32
              h-[420px]
              w-[420px]
              rounded-full
              bg-[#5A1017]/22
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
              lg:gap-20
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#D6BB8B]
                "
              >
                Madiha Maison • Vogue Square
              </p>

              <h2
                id="cta-vogue-square-title"
                className="
                  mt-6
                  max-w-[820px]
                  font-serif
                  text-[3.2rem]
                  font-normal
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-[#F7F3EF]
                  sm:text-[4rem]
                  md:text-[4.7rem]
                "
              >
                Agende seu atendimento na Barra da Tijuca.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[680px]
                  text-[13px]
                  font-light
                  leading-7
                  text-[#D0C1BE]
                  md:text-[15px]
                  md:leading-8
                "
              >
                A Madiha Maison recebe clientes no Vogue Square para
                atendimentos relacionados a joias, ouro e peças de valor em um
                ambiente reservado e profissional.
              </p>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-9
                  inline-flex
                  min-h-[58px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D6BB8B]
                  bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
                  px-9
                  text-center
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.21em]
                  text-[#332A2B]
                  shadow-[0_18px_48px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                Agendar pelo WhatsApp
              </a>
            </div>

            <div
              className="
                rounded-[2.2rem]
                border
                border-[#D6BB8B]/14
                bg-[#F7F3EF]/[0.045]
                p-7
                backdrop-blur-sm
                md:p-8
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D6BB8B]
                "
              >
                Atendimento no Vogue Square
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  ['Local', 'Vogue Square'],
                  ['Região', 'Barra da Tijuca'],
                  ['Atendimento', 'Presencial'],
                  ['Ambiente', 'Reservado'],
                  ['Avaliação', 'Especializada'],
                  ['Contato', 'WhatsApp'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-6
                      rounded-[1.35rem]
                      border
                      border-[#D6BB8B]/10
                      bg-[#F7F3EF]/[0.035]
                      px-5
                      py-4
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#D6BB8B]
                      "
                    >
                      {label}
                    </span>

                    <span
                      className="
                        text-right
                        font-serif
                        text-[17px]
                        text-[#F7F3EF]
                      "
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-6
                  rounded-[1.4rem]
                  border
                  border-[#D6BB8B]/12
                  bg-[#D6BB8B]/[0.05]
                  px-5
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
                  Localização, estrutura e atendimento Madiha Maison no mesmo
                  endereço.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}