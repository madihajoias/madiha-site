'use client';

import {
  ArrowUpRight,
  Building2,
  MapPin,
  Navigation,
  Route,
  Sparkles,
} from 'lucide-react';

export default function RioJaneiroMapaSection() {
  return (
    <>
      <section
        id="mapa"
        aria-labelledby="rio-janeiro-mapa-title"
        className="
          relative
          overflow-hidden
          bg-[#4F1720]
          px-5
          py-24

          sm:px-6

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
            bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(122,22,34,0.62),transparent_34%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            rio-mapa-halo
            pointer-events-none
            absolute
            left-1/2
            top-[48%]
            h-[620px]
            w-[620px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A87A]/8
            blur-[140px]
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
              <div
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#C7A87A]/20
                  bg-white/[0.045]
                  px-4
                  py-3
                  backdrop-blur-xl
                "
              >
                <MapPin
                  size={14}
                  strokeWidth={1.3}
                  className="
                    rio-mapa-pin
                    text-[#D6BB8B]
                  "
                />

                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#D6BB8B]
                  "
                >
                  Localização • Rio de Janeiro
                </p>
              </div>

              <h2
                id="rio-janeiro-mapa-title"
                className="
                  mt-6
                  max-w-[720px]
                  text-[#F7F3EF]
                "
              >
                Encontre a Madiha Maison no Rio de Janeiro
              </h2>
            </div>

            <p
              className="
                max-w-[670px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]

                md:text-[15px]
              "
            >
              O atendimento presencial da Madiha Maison no Rio de Janeiro está
              localizado na Barra da Tijuca, no Vogue Square, com acesso pela
              Av. das Américas.
            </p>
          </div>

          {/* MAPA + INFORMAÇÕES */}
          <div
            className="
              mt-16
              grid
              gap-5

              lg:grid-cols-[1.35fr_0.65fr]
              lg:items-stretch
            "
          >
            {/* MAPA */}
            <div
              className="
                relative
                min-h-[430px]
                overflow-hidden
                rounded-[2.3rem]
                border
                border-[#C7A87A]/20
                bg-white/[0.045]
                shadow-[0_30px_90px_rgba(20,5,8,0.22)]

                sm:min-h-[500px]

                lg:min-h-[560px]
              "
            >
              <iframe
                title="Mapa da Madiha Maison no Rio de Janeiro"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5923754482!2d-43.39869498874111!3d-23.00201224119506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbf2521f3707%3A0xa54921f2f3d36fd8!2sMadiha%20Maison!5e0!3m2!1spt-BR!2sbr!4v1791309377339!5m2!1spt-BR!2sbr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  border-0
                "
              />
            </div>

            {/* COLUNA DIREITA */}
            <div
              className="
                flex
                flex-col
                gap-4
              "
            >
              {/* CARD PRINCIPAL */}
              <article
                className="
                  relative
                  flex-1
                  overflow-hidden
                  rounded-[2.2rem]
                  border
                  border-[#C7A87A]/24
                  bg-white/[0.05]
                  p-7
                  shadow-[0_28px_75px_rgba(20,5,8,0.16)]
                  backdrop-blur-xl

                  md:p-8
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    rio-mapa-card-light
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-60
                    w-60
                    rounded-full
                    bg-[#C7A87A]/14
                    blur-[65px]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                  "
                >
                  <div
                    className="
                      rio-mapa-icon
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/28
                      bg-[#C7A87A]/9
                    "
                  >
                    <Route
                      size={27}
                      strokeWidth={1.15}
                      className="text-[#D6BB8B]"
                    />
                  </div>

                  <p
                    className="
                      mt-7
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.24em]
                      text-[#D6BB8B]
                    "
                  >
                    Madiha Maison
                  </p>

                  <h3
                    className="
                      mt-4
                      text-[#F7F3EF]
                    "
                  >
                    Vogue Square
                  </h3>

                  <p
                    className="
                      mt-5
                      text-[12px]
                      font-light
                      leading-7
                      text-[#D3C3C0]

                      md:text-[13px]
                    "
                  >
                    Av. das Américas, 8585
                    <br />
                    Sala 490
                    <br />
                    Barra da Tijuca
                    <br />
                    Rio de Janeiro - RJ
                    <br />
                    CEP 22793-081
                  </p>

                  <div className="mt-auto pt-8">
                    <a
                      href="https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        inline-flex
                        min-h-[52px]
                        w-full
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        border
                        border-[#C7A87A]
                        bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                        px-6
                        text-center
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#4F1720]
                        transition-all
                        duration-300

                        hover:-translate-y-1

                        sm:text-[9px]
                      "
                    >
                      Abrir no Google Maps

                      <Navigation
                        size={14}
                        strokeWidth={1.4}
                        className="
                          transition-transform
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </a>
                  </div>
                </div>
              </article>

              {/* CARD LOCALIZAÇÃO */}
              <article
                className="
                  rounded-[1.8rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-6
                  backdrop-blur-xl
                "
              >
                <div className="flex items-start gap-4">
                  <Building2
                    size={19}
                    strokeWidth={1.2}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#D6BB8B]
                    "
                  />

                  <div>
                    <p
                      className="
                        font-serif
                        text-[18px]
                        leading-tight
                        text-[#F7F3EF]
                      "
                    >
                      Barra da Tijuca
                    </p>

                    <p
                      className="
                        mt-3
                        text-[11px]
                        font-light
                        leading-6
                        text-[#D3C3C0]
                      "
                    >
                      O atendimento presencial da Madiha Maison no Rio está
                      localizado no Vogue Square.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* NAVEGAÇÃO LOCAL */}
          <div
            className="
              mt-7
              grid
              gap-4

              md:grid-cols-2
            "
          >
            <a
              href="/localizacao/barra-da-tijuca/"
              className="
                group
                flex
                items-center
                justify-between
                gap-5
                rounded-[1.8rem]
                border
                border-white/10
                bg-white/[0.045]
                p-6
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#C7A87A]/30
                hover:bg-white/[0.065]

                md:p-7
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
                  Região
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[20px]
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  Barra da Tijuca
                </p>

                <p
                  className="
                    mt-3
                    max-w-[460px]
                    text-[11px]
                    font-light
                    leading-6
                    text-[#D3C3C0]
                  "
                >
                  Veja os serviços e informações de atendimento da Madiha na
                  Barra da Tijuca.
                </p>
              </div>

              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7A87A]/24
                  bg-[#C7A87A]/8
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.3}
                  className="text-[#D6BB8B]"
                />
              </span>
            </a>

            <a
              href="/localizacao/vogue-square/"
              className="
                group
                flex
                items-center
                justify-between
                gap-5
                rounded-[1.8rem]
                border
                border-[#C7A87A]/24
                bg-[#C7A87A]/9
                p-6
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:bg-[#C7A87A]/13

                md:p-7
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
                  Endereço
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[20px]
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  Vogue Square
                </p>

                <p
                  className="
                    mt-3
                    max-w-[460px]
                    text-[11px]
                    font-light
                    leading-6
                    text-[#D3C3C0]
                  "
                >
                  Conheça a página específica do endereço, localização e
                  atendimento no Vogue Square.
                </p>
              </div>

              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7A87A]/30
                  bg-[#C7A87A]/10
                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.3}
                  className="text-[#D6BB8B]"
                />
              </span>
            </a>
          </div>

          {/* RODAPÉ */}
          <div
            className="
              mt-7
              flex
              items-start
              gap-4
              rounded-[1.7rem]
              border
              border-white/10
              bg-white/[0.045]
              p-6
              backdrop-blur-xl
            "
          >
            <Sparkles
              size={18}
              strokeWidth={1.2}
              className="
                mt-0.5
                shrink-0
                text-[#D6BB8B]
              "
            />

            <p
              className="
                text-[11px]
                font-light
                leading-6
                text-[#D3C3C0]

                md:text-[12px]
              "
            >
              Ouro, joias, diamantes e relógios de luxo podem ser apresentados
              para análise no atendimento presencial da Madiha Maison.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .rio-mapa-halo {
          animation: rioMapaHalo 7s ease-in-out infinite;
        }

        @keyframes rioMapaHalo {
          0%,
          100% {
            opacity: 0.42;
            transform: translate(-50%, -50%) scale(0.94);
          }

          50% {
            opacity: 0.82;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        .rio-mapa-pin {
          animation: rioMapaPin 2.5s ease-in-out infinite;
        }

        @keyframes rioMapaPin {
          0%,
          100% {
            opacity: 0.5;
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.12);
          }
        }

        .rio-mapa-card-light {
          animation: rioMapaCardLight 5.5s ease-in-out infinite;
        }

        @keyframes rioMapaCardLight {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.86;
            transform: scale(1.08);
          }
        }

        .rio-mapa-icon {
          animation: rioMapaIcon 2.8s ease-in-out infinite;
        }

        @keyframes rioMapaIcon {
          0%,
          100% {
            border-color: rgba(199, 168, 122, 0.28);
            box-shadow: 0 0 0 rgba(214, 187, 139, 0);
          }

          50% {
            border-color: rgba(247, 243, 239, 0.55);
            box-shadow: 0 0 28px rgba(214, 187, 139, 0.12);
          }
        }
      `}</style>
    </>
  );
}