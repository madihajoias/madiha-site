export default function CotacaoOuroLocation() {
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
      aria-labelledby="cotacao-ouro-location-title"
      className="
        relative
        overflow-hidden
        bg-[#F4E9D8]
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
              Cotação do ouro no Rio de Janeiro
            </p>

            <h2
              id="cotacao-ouro-location-title"
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
              Cotação e avaliação
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
              Para quem deseja entender a cotação do ouro na Barra da Tijuca
              e obter uma avaliação presencial, a Madiha Maison oferece
              atendimento especializado no Vogue Square, com análise técnica
              e referência comercial atualizada.
            </p>
          </div>
        </div>

        {/* MAPA + INFORMAÇÕES */}
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
              title="Localização da Madiha Maison para cotação e avaliação de ouro no Vogue Square"
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

              {/* SERVIÇO */}
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
                  Cotação e avaliação
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
                  Atendimento para quem deseja acompanhar a cotação do ouro,
                  compreender o preço por grama e obter avaliação técnica de
                  peças em diferentes teores.
                </p>
              </div>

              {/* REFERÊNCIA */}
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
                  Antes da visita
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
                  Você pode consultar a cotação por teor e utilizar a
                  calculadora de ouro para obter uma estimativa inicial.
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
                href="#cotacao-por-teor"
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
                Ver cotação por teor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}