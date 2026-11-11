export default function CompraDiamantesLocation() {
  return (
    <section
      id="localizacao-diamantes"
      aria-labelledby="localizacao-diamantes-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.14),transparent_34%)]
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
            grid
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
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
              Onde estamos
            </p>

            <h2
              id="localizacao-diamantes-title"
              className="
                mt-6
                max-w-[820px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#332A2B]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Avaliação de diamantes no Vogue Square.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#675C5D]
                md:text-[15px]
                md:leading-8
              "
            >
              A Madiha Maison realiza atendimento na Barra da Tijuca, em um
              ambiente adequado para avaliação individual de joias, diamantes e
              brilhantes.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.78fr_1.22fr]
          "
        >
          {/* INFORMAÇÕES */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#A17D4F]/16
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DCC08F_100%)]
              p-8
              shadow-[0_28px_72px_rgba(96,72,45,0.09)]
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-white/25
                blur-[70px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#8C6635]
                "
              >
                Madiha Maison
              </p>

              <h3
                className="
                  mt-5
                  max-w-[560px]
                  font-serif
                  text-[2.8rem]
                  leading-[0.98]
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Vogue Square
              </h3>

              <p
                className="
                  mt-6
                  max-w-[540px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#5F5350]
                "
              >
                Barra da Tijuca
                <br />
                Rio de Janeiro — RJ
              </p>

              <div
                className="
                  mt-8
                  grid
                  gap-3
                "
              >
                {[
                  {
                    label: 'Atendimento',
                    value: 'Individual e reservado',
                  },
                  {
                    label: 'Avaliação',
                    value: 'Diamantes soltos ou montados',
                  },
                  {
                    label: 'Documentação',
                    value: 'Com ou sem certificado',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-[1.45rem]
                      border
                      border-[#8C6635]/14
                      bg-white/25
                      px-5
                      py-5
                    "
                  >
                    <p
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#8C6635]
                      "
                    >
                      {item.label}
                    </p>

                    <p
                      className="
                        mt-2
                        font-serif
                        text-[20px]
                        leading-tight
                        text-[#332A2B]
                      "
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-8
                  rounded-[1.55rem]
                  border
                  border-[#8C6635]/14
                  bg-white/25
                  px-6
                  py-5
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8C6635]
                  "
                >
                  Antes de ir
                </p>

                <p
                  className="
                    mt-3
                    text-[10px]
                    font-light
                    leading-5
                    text-[#5F5350]
                  "
                >
                  Para uma experiência mais organizada, entre em contato antes
                  de apresentar a peça para avaliação.
                </p>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div
            className="
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#A17D4F]/14
              bg-[#FCFAF7]
              shadow-[0_26px_68px_rgba(96,72,45,0.065)]
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                border-b
                border-[#A17D4F]/10
                bg-[#FCFAF7]
                px-7
                py-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#A17D4F]
                  "
                >
                  Localização
                </p>

                <h3
                  className="
                    mt-2
                    font-serif
                    text-[24px]
                    leading-none
                    text-[#332A2B]
                  "
                >
                  Madiha Maison — Vogue Square
                </h3>
              </div>

              <span
                className="
                  inline-flex
                  w-fit
                  rounded-full
                  border
                  border-[#A17D4F]/12
                  bg-[#EFE6D8]/65
                  px-4
                  py-2
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8C6635]
                "
              >
                Barra da Tijuca
              </span>
            </div>

            <div className="relative min-h-[520px] w-full">
              <iframe
                title="Localização Madiha Maison no Vogue Square"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5923754482!2d-43.39869498874111!3d-23.00201224119506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbf2521f3707%3A0xa54921f2f3d36fd8!2sMadiha%20Maison!5e0!3m2!1spt-BR!2sbr!4v1791309377339!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="
                  absolute
                  inset-0
                  h-full
                  min-h-[520px]
                  w-full
                  border-0
                "
              />
            </div>
          </div>
        </div>

        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[#332A2B]
            p-8
            shadow-[0_24px_64px_rgba(51,42,43,0.10)]
            md:p-10
            lg:grid-cols-[1fr_auto]
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
                text-[#D6BB8B]
              "
            >
              Madiha Maison
            </p>

            <h3
              className="
                mt-4
                max-w-[880px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Atendimento na Barra da Tijuca para avaliação de diamantes e joias.
            </h3>
          </div>

          <a
            href="#faq-diamantes"
            className="
              inline-flex
              min-h-[54px]
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
              tracking-[0.22em]
              text-[#332A2B]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Dúvidas frequentes
          </a>
        </div>
      </div>
    </section>
  );
}