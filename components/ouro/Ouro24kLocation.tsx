export default function Ouro24kLocation() {
  const address =
    'Madiha Maison, Av. das Américas, 8585, Sala 490, Vogue Square, Barra da Tijuca, Rio de Janeiro - RJ, 22793-081';

  const encodedAddress = encodeURIComponent(address);

  const mapUrl =
    `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  const directionsUrl =
    'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

  return (
    <section
      id="localizacao"
      aria-labelledby="ouro-24k-location-title"
      className="
        relative
        overflow-hidden
        bg-[#F4E9D8]
        py-20
        md:py-24
        lg:py-28
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(118,85,37,0.08),transparent_32%)]
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
            mb-12
            grid
            gap-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:gap-16
          "
        >
          <div>
            <p
              className="
                mb-5
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#8C692E]
                md:text-[10px]
              "
            >
              Avaliação presencial
            </p>

            <h2
              id="ouro-24k-location-title"
              className="
                font-serif
                text-[2.8rem]
                font-normal
                leading-[1.04]
                tracking-[-0.02em]
                text-[#765525]
                sm:text-[3.4rem]
                md:text-[4rem]
              "
            >
              Avalie seu ouro 24k
              <br />
              no Vogue Square
            </h2>
          </div>

          <div
            className="
              max-w-[620px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#725D41]
                md:text-[15px]
                md:leading-8
              "
            >
              Na Madiha Maison, você pode confirmar presencialmente o teor,
              peso e composição do ouro antes de qualquer decisão. O
              atendimento é realizado no Vogue Square, na Barra da Tijuca.
            </p>
          </div>
        </div>

        {/* MAPA + DADOS */}
        <div
          className="
            grid
            overflow-hidden
            rounded-[2.5rem]
            border
            border-white/60
            bg-[#F8EBD8]/62
            shadow-[0_30px_80px_rgba(91,61,21,0.08)]
            backdrop-blur-xl
            lg:grid-cols-[1.35fr_0.65fr]
          "
        >
          {/* MAPA */}
          <div
            className="
              relative
              min-h-[430px]
              w-full
              lg:min-h-[560px]
            "
          >
            <iframe
              src={mapUrl}
              title="Localização da Madiha Maison para avaliação de ouro 24k no Vogue Square"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="
                absolute
                inset-0
                h-full
                w-full
                border-0
              "
            />
          </div>

          {/* DADOS */}
          <div
            className="
              flex
              flex-col
              justify-between
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
                  tracking-[0.3em]
                  text-[#8C692E]
                "
              >
                Madiha Maison
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[2.2rem]
                  font-normal
                  leading-tight
                  text-[#68491F]
                  md:text-[2.6rem]
                "
              >
                Vogue Square
              </h3>

              {/* ENDEREÇO */}
              <div
                className="
                  mt-8
                  border-t
                  border-[#765525]/12
                  pt-7
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#8C692E]
                  "
                >
                  Endereço
                </p>

                <address
                  className="
                    mt-4
                    not-italic
                    text-[13px]
                    font-light
                    leading-7
                    text-[#725D41]
                  "
                >
                  Av. das Américas, 8585
                  <br />
                  Sala 490
                  <br />
                  Vogue Square
                  <br />
                  Barra da Tijuca
                  <br />
                  Rio de Janeiro – RJ
                  <br />
                  CEP 22793-081
                </address>
              </div>

              {/* ATENDIMENTO */}
              <div
                className="
                  mt-8
                  border-t
                  border-[#765525]/12
                  pt-7
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#8C692E]
                  "
                >
                  Avaliação de ouro 24k
                </p>

                <p
                  className="
                    mt-4
                    text-[13px]
                    font-light
                    leading-7
                    text-[#725D41]
                  "
                >
                  Conferência de peso, teor e características da peça para
                  uma avaliação técnica mais precisa.
                </p>
              </div>

              {/* NOTA */}
              <div
                className="
                  mt-8
                  rounded-[1.4rem]
                  border
                  border-[#765525]/10
                  bg-white/18
                  px-5
                  py-4
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#8C692E]
                  "
                >
                  Atendimento especializado
                </p>

                <p
                  className="
                    mt-2
                    text-[10px]
                    font-light
                    leading-5
                    text-[#725D41]
                  "
                >
                  O atendimento presencial permite confirmar informações que
                  não podem ser determinadas apenas por fotos, marcações ou
                  estimativas online.
                </p>
              </div>
            </div>

            {/* BOTÕES */}
            <div
              className="
                mt-10
                space-y-3
              "
            >
              <a
                href={directionsUrl}
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
                  text-center
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
                Como chegar
              </a>

              <a
                href="#calculadora-de-ouro"
                className="
                  inline-flex
                  min-h-[50px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#765525]/22
                  bg-white/18
                  px-7
                  text-center
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
                Calcular valor do ouro
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}