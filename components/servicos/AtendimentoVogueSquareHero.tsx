import Image from 'next/image';

export default function AtendimentoVogueSquareHero() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de agendar um atendimento na Madiha Maison no Vogue Square.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      aria-labelledby="atendimento-vogue-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
        pb-24
        pt-36
        md:pb-28
        md:pt-44
        lg:min-h-[820px]
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
          bg-[radial-gradient(circle_at_15%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_86%_80%,rgba(90,16,23,0.06),transparent_35%)]
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
          gap-12
          px-6
          md:px-8
          lg:grid-cols-[1.02fr_0.98fr]
          lg:items-center
          lg:gap-16
        "
      >
        {/* FOTO REAL */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[2.7rem]
            border
            border-[#A17D4F]/15
            bg-[#332A2B]
            shadow-[0_34px_90px_rgba(51,42,43,0.13)]
          "
        >
          <div className="relative aspect-square w-full">
            <Image
              src="/servicos/atendimento-no-vogue-square/madiha-maison-vogue-square.webp"
              alt="Madiha Maison no Vogue Square, Barra da Tijuca, Rio de Janeiro"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover object-center"
            />

            {/* SOMBREAMENTO INFERIOR */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-x-0
                bottom-0
                h-[42%]
                bg-gradient-to-t
                from-[#332A2B]/80
                via-[#332A2B]/30
                to-transparent
              "
            />

            {/* LOCALIZADOR */}
            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                flex
                items-center
                gap-5
                rounded-[1.6rem]
                border
                border-white/15
                bg-[#332A2B]/78
                px-5
                py-5
                backdrop-blur-xl
                md:bottom-8
                md:left-8
                md:right-auto
                md:min-w-[340px]
                md:px-6
              "
            >
              {/* PIN PULSANTE */}
              <div
                className="
                  relative
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                "
                aria-hidden="true"
              >
                {/* HALO EXTERNO */}
                <span
                  className="
                    absolute
                    h-12
                    w-12
                    animate-ping
                    rounded-full
                    bg-[#D6BB8B]/35
                  "
                  style={{
                    animationDuration: '2.2s',
                  }}
                />

                {/* HALO INTERMEDIÁRIO */}
                <span
                  className="
                    absolute
                    h-10
                    w-10
                    animate-ping
                    rounded-full
                    border
                    border-[#F0D59D]/70
                  "
                  style={{
                    animationDuration: '2.2s',
                    animationDelay: '0.7s',
                  }}
                />

                {/* BRILHO FIXO */}
                <span
                  className="
                    absolute
                    h-11
                    w-11
                    rounded-full
                    bg-[#C7A87A]/20
                    blur-[5px]
                  "
                />

                {/* NÚCLEO DOURADO */}
                <span
                  className="
                    relative
                    z-10
                    flex
                    h-10
                    w-10
                    animate-pulse
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#F6DEA8]
                    bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
                    shadow-[0_0_18px_rgba(214,187,139,0.65),0_0_38px_rgba(199,168,122,0.35)]
                  "
                  style={{
                    animationDuration: '1.8s',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#332A2B]"
                  >
                    <path
                      d="M12 21C12 21 18 15.5 18 9.5C18 6.19 15.31 3.5 12 3.5C8.69 3.5 6 6.19 6 9.5C6 15.5 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="12"
                      cy="9.5"
                      r="2.2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
              </div>

              <div>
                <p
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#D6BB8B]
                  "
                >
                  Madiha Maison
                </p>

                <p
                  className="
                    mt-1
                    font-serif
                    text-[21px]
                    leading-none
                    text-[#F7F3EF]
                  "
                >
                  Vogue Square
                </p>

                <p
                  className="
                    mt-2
                    text-[7px]
                    font-light
                    uppercase
                    tracking-[0.16em]
                    text-[#D0C1BE]
                  "
                >
                  Barra da Tijuca • Rio de Janeiro
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEÚDO */}
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
            <span className="h-1.5 w-1.5 rounded-full bg-[#5A1017]" />

            <p
              className="
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#8C6635]
              "
            >
              Vogue Square • Barra da Tijuca
            </p>
          </div>

          <h1
            id="atendimento-vogue-title"
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
              md:text-[5.3rem]
              lg:text-[5.7rem]
            "
          >
            Madiha Maison no Vogue Square.
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
            Atendimento especializado em joias na Barra da Tijuca, em um
            endereço reconhecido pela estrutura, localização e conveniência.
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
            Na Madiha Maison, você pode realizar avaliações e atendimentos
            relacionados a joias, ouro e peças de valor em um ambiente
            reservado e profissional.
          </p>

          {/* CTAS */}
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
              Agendar atendimento
            </a>

            <a
              href="#localizacao-vogue-square"
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
              Como chegar
            </a>
          </div>

          {/* INFORMAÇÕES RÁPIDAS */}
          <div
            className="
              mt-10
              grid
              gap-3
              sm:grid-cols-2
            "
          >
            {[
              ['Localização', 'Vogue Square'],
              ['Região', 'Barra da Tijuca'],
              ['Atendimento', 'Reservado'],
              ['Avaliação', 'Especializada'],
            ].map(([label, value]) => (
              <div
                key={label}
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
                  {label}
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[18px]
                    text-[#332A2B]
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}