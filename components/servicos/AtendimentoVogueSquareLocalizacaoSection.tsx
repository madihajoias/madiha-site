const beneficios = [
  {
    titulo: 'Localização',
    texto:
      'A Madiha Maison está no Vogue Square, na Barra da Tijuca, em uma região de fácil acesso para clientes da Zona Oeste e demais áreas do Rio de Janeiro.',
    icon: 'pin',
  },
  {
    titulo: 'Acesso',
    texto:
      'O atendimento em um centro comercial estruturado facilita a chegada, o estacionamento e a organização da visita.',
    icon: 'route',
  },
  {
    titulo: 'Estrutura',
    texto:
      'O Vogue Square reúne serviços, alimentação, estacionamento e uma estrutura que torna a experiência mais confortável antes e depois do atendimento.',
    icon: 'building',
  },
];

function PinIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M32 53C32 53 46 40 46 26C46 18.3 39.7 12 32 12C24.3 12 18 18.3 18 26C18 40 32 53 32 53Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="32"
        cy="26"
        r="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M18 48C18 41 24 37 31 37H36C43 37 47 33 47 27C47 21 42 17 36 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle
        cx="18"
        cy="48"
        r="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="36"
        cy="17"
        r="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-full w-full"
    >
      <path
        d="M18 52V16H46V52"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 52H52"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M24 23H28M36 23H40M24 31H28M36 31H40M24 39H28M36 39H40"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M28 52V45H36V52"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function iconFor(type: string) {
  switch (type) {
    case 'route':
      return <RouteIcon />;
    case 'building':
      return <BuildingIcon />;
    default:
      return <PinIcon />;
  }
}

export default function AtendimentoVogueSquareLocalizacaoSection() {
  return (
    <section
      id="localizacao-vogue-square"
      aria-labelledby="localizacao-vogue-square-title"
      className="
        relative
        overflow-hidden
        bg-[#FCFAF7]
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
          bg-[radial-gradient(circle_at_14%_20%,rgba(199,168,122,0.12),transparent_30%),radial-gradient(circle_at_86%_80%,rgba(214,187,139,0.10),transparent_34%)]
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
            grid
            gap-10
            lg:grid-cols-[0.92fr_1.08fr]
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
              Localização e acesso
            </p>

            <h2
              id="localizacao-vogue-square-title"
              className="
                mt-6
                max-w-[780px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#332A2B]
                sm:text-[3.7rem]
                md:text-[4.3rem]
              "
            >
              A Madiha Maison está no Vogue Square, na Barra da Tijuca.
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
              Um endereço que combina localização, acesso e estrutura para quem
              deseja realizar seu atendimento presencial com mais praticidade.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-3
          "
        >
          {beneficios.map((item) => (
            <article
              key={item.titulo}
              className="
                rounded-[2rem]
                border
                border-[#A17D4F]/12
                bg-[#F7F3EF]
                p-7
                shadow-[0_18px_48px_rgba(96,72,45,0.04)]
              "
            >
              <div
                className="
                  flex
                  h-[62px]
                  w-[62px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A17D4F]/16
                  bg-[#EFE6D8]
                  p-3.5
                  text-[#A17D4F]
                "
              >
                {iconFor(item.icon)}
              </div>

              <h3
                className="
                  mt-7
                  font-serif
                  text-[26px]
                  leading-[1.02]
                  text-[#332A2B]
                "
              >
                {item.titulo}
              </h3>

              <div
                aria-hidden="true"
                className="
                  mt-5
                  h-px
                  w-10
                  bg-[#A17D4F]/28
                "
              />

              <p
                className="
                  mt-5
                  text-[9px]
                  font-light
                  leading-5
                  text-[#675C5D]
                "
              >
                {item.texto}
              </p>
            </article>
          ))}
        </div>

        {/* BLOCO INFERIOR */}
        <div
          className="
            mt-10
            grid
            gap-6
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          <div
            className="
              rounded-[2.4rem]
              border
              border-[#A17D4F]/15
              bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DEC296_100%)]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.07)]
              md:p-10
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#8C6635]
              "
            >
              No Vogue Square
            </p>

            <h3
              className="
                mt-5
                max-w-[680px]
                font-serif
                text-[2.6rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#332A2B]
              "
            >
              Um atendimento inserido em uma estrutura completa.
            </h3>

            <p
              className="
                mt-6
                max-w-[630px]
                text-[11px]
                font-light
                leading-6
                text-[#5F5350]
              "
            >
              Estar no Vogue Square facilita a experiência de quem visita a
              Madiha Maison, com uma estrutura organizada para receber clientes
              com conforto e praticidade.
            </p>

            <div
              className="
                mt-8
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {[
                ['Estacionamento', 'No próprio complexo'],
                ['Acesso', 'Barra da Tijuca'],
                ['Serviços', 'Estrutura no entorno'],
                ['Atendimento', 'Madiha Maison'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="
                    rounded-[1.35rem]
                    border
                    border-[#8C6635]/12
                    bg-white/25
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
                      text-[#8C6635]
                    "
                  >
                    {label}
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[17px]
                      text-[#332A2B]
                    "
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="
              rounded-[2.4rem]
              border
              border-[#A17D4F]/14
              bg-[#332A2B]
              p-8
              shadow-[0_28px_76px_rgba(51,42,43,0.11)]
              md:p-10
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
              Barra da Tijuca
            </p>

            <h3
              className="
                mt-5
                max-w-[580px]
                font-serif
                text-[2.55rem]
                leading-[0.98]
                tracking-[-0.03em]
                text-[#F7F3EF]
              "
            >
              Um endereço pensado para facilitar sua visita.
            </h3>

            <p
              className="
                mt-6
                max-w-[540px]
                text-[11px]
                font-light
                leading-6
                text-[#D0C1BE]
              "
            >
              Você pode combinar previamente seu atendimento e chegar ao Vogue
              Square já sabendo onde será recebido pela Madiha Maison.
            </p>

            <div
              className="
                mt-8
                rounded-[1.5rem]
                border
                border-[#D6BB8B]/12
                bg-[#D6BB8B]/[0.05]
                px-6
                py-5
              "
            >
              <p
                className="
                  font-serif
                  text-[20px]
                  leading-snug
                  text-[#F7F3EF]
                "
              >
                Localização, estrutura e atendimento no mesmo endereço.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}