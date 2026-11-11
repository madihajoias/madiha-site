export default function CompraJoiasAntigasLocation() {
  const address =
    'Madiha Maison, Av. das Américas, 8585, Sala 490, Vogue Square, Barra da Tijuca, Rio de Janeiro - RJ, 22793-081';

  const encodedAddress = encodeURIComponent(address);

  const mapUrl =
    `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  const directionsUrl =
    'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    '5521993530012';

  const whatsappMessage =
    'Olá, Madiha Maison! Gostaria de agendar uma avaliação presencial de joias antigas.';

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <section
      id="localizacao"
      aria-labelledby="localizacao-joias-antigas-title"
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
          bg-[radial-gradient(circle_at_12%_20%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_80%,rgba(90,16,23,0.05),transparent_34%)]
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
            gap-6
            overflow-hidden
            rounded-[2.4rem]
            border
            border-[#5A1017]/10
            bg-[#FCFAF7]
            shadow-[0_30px_85px_rgba(54,30,30,0.08)]
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* PAINEL ESQUERDO */}
          <div
            className="
              relative
              overflow-hidden
              bg-[#4F1720]
              p-8
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-[#7A1622]/40
                blur-[80px]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-24
                -right-16
                h-72
                w-72
                rounded-full
                bg-[#C7A87A]/12
                blur-[80px]
              "
            />

            <div className="relative z-10">
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
                Avaliação presencial
              </p>

              <h2
                id="localizacao-joias-antigas-title"
                className="
                  mt-6
                  max-w-[620px]
                  font-serif
                  text-[3rem]
                  font-normal
                  leading-[0.98]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  sm:text-[3.5rem]
                  md:text-[4rem]
                "
              >
                Avaliação de joias antigas na Barra da Tijuca.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[580px]
                  text-[13px]
                  font-light
                  leading-7
                  text-[#D0C1BE]
                  md:text-[14px]
                "
              >
                Depois da estimativa inicial, a análise presencial permite
                observar a peça real, suas pedras, construção, conservação,
                assinatura e demais características relevantes.
              </p>

              <div
                className="
                  mt-9
                  rounded-[1.7rem]
                  border
                  border-white/10
                  bg-white/[0.045]
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
                    tracking-[0.2em]
                    text-[#D6BB8B]
                  "
                >
                  Madiha Maison
                </p>

                <p
                  className="
                    mt-4
                    font-serif
                    text-[24px]
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  Vogue Square
                </p>

                <address
                  className="
                    mt-4
                    not-italic
                    text-[11px]
                    font-light
                    leading-6
                    text-[#CDBDBA]
                  "
                >
                  Av. das Américas, 8585
                  <br />
                  Sala 490 · Vogue Square
                  <br />
                  Barra da Tijuca · Rio de Janeiro – RJ
                  <br />
                  CEP 22793-081
                </address>
              </div>

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C7A87A]
                    bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                    px-7
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#4F1720]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >
                  Abrir no Google Maps
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/14
                    bg-white/[0.045]
                    px-7
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#F7F3EF]
                    transition-all
                    duration-300
                    hover:border-[#C7A87A]/45
                    hover:bg-white/[0.07]
                  "
                >
                  Agendar avaliação
                </a>
              </div>
            </div>
          </div>

          {/* MAPA */}
          <div className="min-h-[560px] bg-[#EFE8E0]">
            <iframe
              src={mapUrl}
              title="Madiha Maison no Vogue Square"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="
                h-full
                min-h-[560px]
                w-full
                border-0
              "
            />
          </div>
        </div>

        <div
          className="
            mt-6
            grid
            gap-4
            sm:grid-cols-3
          "
        >
          {[
            ['Local', 'Vogue Square'],
            ['Região', 'Barra da Tijuca'],
            ['Atendimento', 'Avaliação presencial'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="
                rounded-[1.6rem]
                border
                border-[#5A1017]/10
                bg-[#FCFAF7]
                px-6
                py-6
                shadow-[0_16px_42px_rgba(54,30,30,0.05)]
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4F]
                "
              >
                {label}
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#4F1720]
                "
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}