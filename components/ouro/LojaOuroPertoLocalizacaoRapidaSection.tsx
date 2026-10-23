export default function LojaOuroPertoLocalizacaoRapidaSection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    '5521993530012';

  const message =
    'Olá, encontrei a Madiha Maison pesquisando por loja de ouro perto de mim e gostaria de falar com um especialista.';

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

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
      aria-labelledby="loja-ouro-localizacao-title"
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
              Loja de ouro na Barra da Tijuca
            </p>

            <h2
              id="loja-ouro-localizacao-title"
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
              Estamos no
              <br />
              Vogue Square
            </h2>
          </div>

          <div
            className="
              max-w-[630px]
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
              Para quem procura uma loja de ouro perto de mim na Barra da
              Tijuca, a Madiha Maison está localizada na Av. das Américas,
              dentro do Vogue Square, com atendimento reservado para avaliação
              de ouro e joias.
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
              lg:min-h-[580px]
            "
          >
            <iframe
              src={mapUrl}
              title="Localização da Madiha Maison no Vogue Square, Barra da Tijuca"
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

              {/* REFERÊNCIA LOCAL */}
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
                  Referência
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
                  Localização estratégica na Av. das Américas, com fácil acesso
                  para quem está na Barra da Tijuca e regiões próximas.
                </p>
              </div>

              {/* ATENDIMENTO */}
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
                  Atendimento reservado
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
                  Avaliação técnica de ouro e joias em ambiente discreto, com
                  processo acompanhado e apresentação clara da referência
                  comercial.
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
                Abrir no Google Maps
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* MICRO SINAIS LOCAIS */}
        <div
          className="
            mt-6
            grid
            gap-4
            md:grid-cols-3
          "
        >
          {[
            {
              label: 'Localização',
              title: 'Barra da Tijuca',
              text:
                'Atendimento na Av. das Américas, uma das principais vias da região.',
            },
            {
              label: 'Referência',
              title: 'Vogue Square',
              text:
                'Endereço conhecido e de fácil localização para atendimento presencial.',
            },
            {
              label: 'Atendimento',
              title: 'Sala 490',
              text:
                'Ambiente reservado para avaliação de ouro, joias e outros materiais.',
            },
          ].map((item) => (
            <article
              key={item.label}
              className="
                rounded-[2rem]
                border
                border-white/60
                bg-[#F1E2C8]/38
                p-7
                shadow-[0_18px_48px_rgba(94,66,27,0.05)]
                backdrop-blur-xl
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#947244]
                "
              >
                {item.label}
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[23px]
                  text-[#68491F]
                "
              >
                {item.title}
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
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}