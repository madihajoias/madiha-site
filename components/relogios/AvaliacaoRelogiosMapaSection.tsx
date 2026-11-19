export default function AvaliacaoRelogiosMapaSection() {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

  return (
    <section
      aria-labelledby="mapa-avaliacao-relogios-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        px-6
        py-24
        md:px-8
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
          bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(90,16,23,0.06),transparent_34%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[90rem]
        "
      >
        {/* CABEÇALHO */}
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
              Madiha Maison • Vogue Square
            </p>

            <h2
              id="mapa-avaliacao-relogios-title"
              className="
                mt-5
                max-w-[650px]
                text-[#4F1720]
              "
            >
              Onde fazer a avaliação do seu relógio
            </h2>
          </div>

          <p
            className="
              max-w-[620px]
              text-[14px]
              font-light
              leading-8
              text-[#725D58]
              md:text-[15px]
            "
          >
            A Madiha Maison está localizada no Vogue Square, na Barra da
            Tijuca, com atendimento presencial e reservado para avaliação de
            relógios.
          </p>
        </div>

        {/* MAPA + FICHA */}
        <div
          className="
            mt-14
            grid
            overflow-hidden
            rounded-[2.2rem]
            border
            border-[#5A1017]/8
            bg-white/45
            shadow-[0_24px_70px_rgba(63,38,26,0.08)]
            backdrop-blur-xl
            lg:grid-cols-[1.35fr_0.65fr]
          "
        >
          {/* MAPA GOOGLE */}
          <div
            className="
              relative
              min-h-[420px]
              overflow-hidden
              lg:min-h-[560px]
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5923754482!2d-43.39869498874111!3d-23.00201224119506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbf2521f3707%3A0xa54921f2f3d36fd8!2sMadiha%20Maison!5e0!3m2!1spt-BR!2sbr!4v1791309377339!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: 'absolute',
                inset: 0,
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Madiha Maison no Vogue Square"
            />
          </div>

          {/* FICHA */}
          <div
            className="
              relative
              flex
              flex-col
              justify-between
              bg-[#F3E9D8]
              p-8
              md:p-10
              lg:p-12
            "
          >
            <div>
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#A17D4F]
                "
              >
                Google Maps
              </p>

              <h3
                className="
                  mt-5
                  text-[#4F1720]
                "
              >
                Madiha Maison
              </h3>

              <p
                className="
                  mt-4
                  text-[12px]
                  font-light
                  leading-7
                  text-[#725D58]
                  md:text-[13px]
                "
              >
                Vogue Square
                <br />
                Av. das Américas, 8585
                <br />
                Sala 490
                <br />
                Barra da Tijuca
                <br />
                Rio de Janeiro - RJ
                <br />
                22793-081
              </p>

              <div
                className="
                  my-7
                  h-px
                  w-full
                  bg-[#A17D4F]/20
                "
              />

              <p
                className="
                  text-[11px]
                  font-light
                  leading-6
                  text-[#7A6762]
                "
              >
                Atendimento presencial para avaliação de relógios de luxo,
                peças vintage e relógios de coleção.
              </p>
            </div>

            <div className="mt-9">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[54px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-[linear-gradient(135deg,#98703A_0%,#AE8246_48%,#936936_100%)]
                  px-8
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-white
                  shadow-[0_13px_28px_rgba(67,42,8,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}