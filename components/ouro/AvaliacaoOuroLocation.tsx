export default function AvaliacaoOuroLocation() {
  const address =
    'Madiha Maison, Av. das Américas, 8585, Sala 490, Vogue Square, Barra da Tijuca, Rio de Janeiro - RJ, 22793-081';

  const encodedAddress =
    encodeURIComponent(address);

  const mapUrl =
    `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  const directionsUrl =
    'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

  return (
    <section
      id="localizacao"
      aria-labelledby="avaliacao-ouro-location-title"
      className="
        relative
        overflow-hidden
        bg-[#F2E8D7]
        py-20
        md:py-24
        lg:py-28
      "
    >
      {/* FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_10%_15%,rgba(199,168,122,0.13),transparent_28%),radial-gradient(circle_at_90%_85%,rgba(138,96,42,0.08),transparent_30%)]
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
              Onde avaliar ouro
            </p>

            <h2
              id="avaliacao-ouro-location-title"
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
              Avaliação de ouro
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
              Para quem busca avaliação de ouro na Barra da Tijuca,
              a Madiha Maison oferece atendimento especializado no
              Vogue Square, com análise técnica, discrição e atendimento
              individual.
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
              title="Localização da Madiha Maison para avaliação de ouro no Vogue Square"
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

          {/* INFORMAÇÕES */}
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
                Escritório Madiha Maison
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
                  Avaliação de ouro
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
                  Atendimento especializado para avaliação de ouro,
                  joias em ouro e peças de diferentes teores, com análise
                  técnica e discrição.
                </p>
              </div>
            </div>

            {/* BOTÃO */}
            <div className="mt-10">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}