const pontos = [
  {
    label: 'Fotos',
    value: 'Frente e verso',
  },
  {
    label: 'Detalhes',
    value: 'Marcas e fechos',
  },
  {
    label: 'Pedras',
    value: 'Enquadramento próximo',
  },
  {
    label: 'Documentos',
    value: 'Certificados',
  },
];

function OnlineJewelryPhoneIllustration() {
  return (
    <div
      className="
        relative
        mx-auto
        w-full
        max-w-[430px]
      "
    >
      {/* AURA */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-1/2
          h-[380px]
          w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D6BB8B]/10
          blur-[80px]
        "
      />

      {/* CELULAR */}
      <div
        className="
          relative
          mx-auto
          w-[285px]
          rounded-[2.7rem]
          border
          border-[#A17D4F]/20
          bg-[#332A2B]
          p-[9px]
          shadow-[0_35px_90px_rgba(51,42,43,0.18)]
          sm:w-[310px]
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[2.25rem]
            bg-[linear-gradient(145deg,#F8F3EB_0%,#EEE1CF_100%)]
          "
        >
          {/* TOPO */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-[#A17D4F]/10
              px-5
              py-4
            "
          >
            <div>
              <p
                className="
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#A17D4F]
                "
              >
                Madiha Maison
              </p>

              <p
                className="
                  mt-1
                  font-serif
                  text-[14px]
                  text-[#332A2B]
                "
              >
                Avaliação Online
              </p>
            </div>

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-[#A17D4F]/16
                bg-[#FCFAF7]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#A17D4F]
                "
              />
            </span>
          </div>

          {/* ÁREA DA FOTO */}
          <div
            className="
              relative
              mx-4
              mt-5
              aspect-[4/5]
              overflow-hidden
              rounded-[1.7rem]
              border
              border-[#A17D4F]/12
              bg-[#FCFAF7]
            "
          >
            {/* GUIA DE ENQUADRAMENTO */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-1/2
                h-[205px]
                w-[205px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#C7A87A]/25
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-1/2
                h-[155px]
                w-[155px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-dashed
                border-[#C7A87A]/30
              "
            />

            {/* JOIA */}
            <svg
              viewBox="0 0 280 330"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
              "
            >
              {/* corrente */}
              <path
                d="M64 74C82 102 99 119 140 121C181 119 199 102 216 74"
                stroke="#B99154"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M140 121V151"
                stroke="#B99154"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* pingente */}
              <circle
                cx="140"
                cy="187"
                r="37"
                stroke="#A17D4F"
                strokeWidth="2.2"
              />

              <circle
                cx="140"
                cy="187"
                r="25"
                stroke="#C7A87A"
                strokeWidth="1"
                opacity="0.7"
              />

              <path
                d="M140 150V224M103 187H177M114 161L166 213M166 161L114 213"
                stroke="#C7A87A"
                strokeWidth="0.9"
                opacity="0.55"
              />

              <circle
                cx="140"
                cy="187"
                r="8"
                stroke="#C7A87A"
                strokeWidth="1"
              />

              {/* reflexo */}
              <path
                d="M119 170L128 161"
                stroke="#F7F3EF"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.9"
              />
            </svg>

            {/* CANTOS DO ENQUADRAMENTO */}
            <span
              className="
                absolute
                left-5
                top-5
                h-7
                w-7
                border-l
                border-t
                border-[#A17D4F]/55
              "
            />

            <span
              className="
                absolute
                right-5
                top-5
                h-7
                w-7
                border-r
                border-t
                border-[#A17D4F]/55
              "
            />

            <span
              className="
                absolute
                bottom-5
                left-5
                h-7
                w-7
                border-b
                border-l
                border-[#A17D4F]/55
              "
            />

            <span
              className="
                absolute
                bottom-5
                right-5
                h-7
                w-7
                border-b
                border-r
                border-[#A17D4F]/55
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                rounded-full
                border
                border-[#A17D4F]/14
                bg-[#FCFAF7]/90
                px-4
                py-2
              "
            >
              <p
                className="
                  whitespace-nowrap
                  text-[6px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#8C6635]
                "
              >
                Centralize a peça
              </p>
            </div>
          </div>

          {/* BASE */}
          <div
            className="
              grid
              grid-cols-3
              gap-2
              px-4
              pb-5
              pt-4
            "
          >
            {['Frente', 'Verso', 'Detalhe'].map((item) => (
              <div
                key={item}
                className="
                  rounded-[0.9rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]
                  px-2
                  py-3
                  text-center
                "
              >
                <p
                  className="
                    text-[6px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#8C6635]
                  "
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CARD FLUTUANTE */}
      <div
        className="
          absolute
          -bottom-5
          -right-1
          hidden
          rounded-[1.4rem]
          border
          border-[#A17D4F]/14
          bg-[#FCFAF7]
          px-5
          py-4
          shadow-[0_20px_50px_rgba(96,72,45,0.12)]
          md:block
        "
      >
        <p
          className="
            text-[6px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#A17D4F]
          "
        >
          Análise inicial
        </p>

        <p
          className="
            mt-2
            font-serif
            text-[18px]
            text-[#332A2B]
          "
        >
          Fotos + informações
        </p>
      </div>
    </div>
  );
}

export default function AvaliacaoOnlineHero() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de solicitar uma avaliação online de uma joia pela Madiha Maison.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      aria-labelledby="avaliacao-online-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        pb-24
        pt-36
        md:pb-28
        md:pt-44
        lg:min-h-[860px]
        lg:pb-32
        lg:pt-48
      "
    >
      {/* FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_18%_20%,rgba(214,187,139,0.16),transparent_30%),radial-gradient(circle_at_84%_70%,rgba(199,168,122,0.13),transparent_32%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[12%]
          top-[15%]
          h-[520px]
          w-[520px]
          rounded-full
          border
          border-[#C7A87A]/[0.08]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[90rem]
          gap-16
          px-6
          md:px-8
          lg:grid-cols-[0.92fr_1.08fr]
          lg:items-center
          lg:gap-14
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
              border-[#A17D4F]/14
              bg-[#FCFAF7]/70
              px-4
              py-2.5
            "
          >
            <span
              aria-hidden="true"
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#A17D4F]
              "
            />

            <p
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#8C6635]
              "
            >
              Madiha Maison • Atendimento Online
            </p>
          </div>

          <h1
            id="avaliacao-online-title"
            className="
              mt-7
              max-w-[720px]
              font-serif
              text-[3.7rem]
              font-normal
              leading-[0.92]
              tracking-[-0.045em]
              text-[#332A2B]
              sm:text-[4.6rem]
              md:text-[5.4rem]
              lg:text-[6rem]
            "
          >
            Comece sua avaliação sem sair de casa.
          </h1>

          <p
            className="
              mt-8
              max-w-[650px]
              text-[13px]
              font-light
              leading-7
              text-[#675C5D]
              md:text-[15px]
              md:leading-8
            "
          >
            Envie fotos e informações da sua joia pelo WhatsApp para uma
            análise inicial da Madiha Maison. Um primeiro passo simples para
            entender melhor a peça antes de uma eventual avaliação presencial.
          </p>

          <p
            className="
              mt-5
              max-w-[620px]
              text-[10px]
              font-light
              leading-6
              text-[#7B6E6F]
            "
          >
            Joias de ouro, diamantes, peças antigas, joias assinadas e outras
            peças podem ser apresentadas para uma triagem inicial.
          </p>

          {/* CTA */}
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
                border-[#B99154]
                bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_50%,#EED098_100%)]
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#332A2B]
                shadow-[0_16px_42px_rgba(96,72,45,0.10)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_22px_52px_rgba(96,72,45,0.15)]
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
                border-[#A17D4F]/20
                bg-[#FCFAF7]/70
                px-8
                text-center
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#5F5350]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[#A17D4F]/36
                hover:bg-[#FCFAF7]
              "
            >
              Fazer uma estimativa
            </a>
          </div>

          {/* INDICADORES */}
          <div
            className="
              mt-10
              grid
              gap-3
              sm:grid-cols-2
            "
          >
            {pontos.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-[1.35rem]
                  border
                  border-[#A17D4F]/10
                  bg-[#FCFAF7]/70
                  px-5
                  py-4
                "
              >
                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#A17D4F]
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[18px]
                    text-[#332A2B]
                  "
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <p
            className="
              mt-6
              max-w-[650px]
              text-[8px]
              font-light
              leading-5
              text-[#8A7E7F]
            "
          >
            A análise online é uma referência inicial. Características como
            teor, peso, autenticidade, qualidade das pedras e estado da peça
            podem exigir conferência presencial.
          </p>
        </div>

        {/* VISUAL */}
        <div
          className="
            relative
            rounded-[2.8rem]
            border
            border-[#A17D4F]/14
            bg-[linear-gradient(145deg,#EFE3D2_0%,#F8F3EB_48%,#E7D1AA_100%)]
            px-7
            py-10
            shadow-[0_32px_86px_rgba(96,72,45,0.08)]
            md:px-10
            md:py-12
          "
        >
          <div
            className="
              mb-8
              flex
              items-start
              justify-between
              gap-5
            "
          >
            <div>
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#A17D4F]
                "
              >
                Primeiro passo
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-[2.1rem]
                  leading-none
                  tracking-[-0.03em]
                  text-[#332A2B]
                "
              >
                Mostre sua joia.
              </h2>
            </div>

            <span
              className="
                rounded-full
                border
                border-[#A17D4F]/14
                bg-[#FCFAF7]/60
                px-4
                py-2
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#8C6635]
              "
            >
              Online
            </span>
          </div>

          <OnlineJewelryPhoneIllustration />

          <div
            className="
              mt-12
              border-t
              border-[#A17D4F]/12
              pt-6
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A17D4F]
                  "
                >
                  Depois das fotos
                </p>

                <p
                  className="
                    mt-2
                    text-[9px]
                    font-light
                    leading-5
                    text-[#675C5D]
                  "
                >
                  Informações da peça ajudam a contextualizar a análise.
                </p>
              </div>

              <a
                href="#como-funciona-avaliacao-online"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8C6635]
                  transition-opacity
                  hover:opacity-60
                "
              >
                Como funciona
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}