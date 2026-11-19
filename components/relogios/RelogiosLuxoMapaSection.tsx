'use client';

import {
  MapPin,
  Navigation,
  Sparkles,
} from 'lucide-react';

export default function RelogiosLuxoMapaSection() {
  return (
    <>
      <section
        id="mapa"
        aria-labelledby="relogios-luxo-mapa-title"
        className="
          relative
          overflow-hidden
          bg-[#F7F3EF]
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
            bg-[radial-gradient(circle_at_18%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(90,16,23,0.06),transparent_34%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            luxo-mapa-halo
            pointer-events-none
            absolute
            left-1/2
            top-[48%]
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A87A]/8
            blur-[135px]
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
                  border-[#C7A87A]/24
                  bg-[#EFE4D1]/70
                  px-4
                  py-3
                "
              >
                <MapPin
                  size={14}
                  strokeWidth={1.3}
                  className="
                    luxo-mapa-pin
                    text-[#A17D4F]
                  "
                />

                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.26em]
                    text-[#A17D4F]
                  "
                >
                  Localização
                </p>
              </div>

              <h2
                id="relogios-luxo-mapa-title"
                className="
                  mt-5
                  max-w-[720px]
                  text-[#4F1720]
                "
              >
                Visite a Madiha Maison no Vogue Square
              </h2>
            </div>

            <p
              className="
                max-w-[650px]
                text-[14px]
                font-light
                leading-8
                text-[#725D58]

                md:text-[15px]
              "
            >
              Estamos na Barra da Tijuca, em um endereço de fácil acesso pela
              Av. das Américas. O atendimento é realizado em ambiente
              reservado para avaliação e negociação de relógios de luxo.
            </p>
          </div>

          {/* MAPA */}
          <div
            className="
              relative
              mt-14
              overflow-hidden
              rounded-[2.3rem]
              border
              border-[#5A1017]/8
              bg-white/60
              shadow-[0_28px_80px_rgba(63,38,26,0.08)]
              backdrop-blur-xl

              md:mt-16
            "
          >
            {/* TOPO DO MAPA */}
            <div
              className="
                flex
                flex-col
                gap-5
                border-b
                border-[#5A1017]/8
                bg-white/75
                px-6
                py-6

                md:flex-row
                md:items-center
                md:justify-between
                md:px-8
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C7A87A]/28
                    bg-[#EFE4D1]
                  "
                >
                  <MapPin
                    size={20}
                    strokeWidth={1.2}
                    className="text-[#A17D4F]"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#A17D4F]
                    "
                  >
                    Madiha Maison
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[19px]
                      leading-tight
                      text-[#4F1720]

                      md:text-[21px]
                    "
                  >
                    Vogue Square — Barra da Tijuca
                  </p>

                  <p
                    className="
                      mt-2
                      text-[11px]
                      font-light
                      leading-6
                      text-[#7A6762]
                    "
                  >
                    Av. das Américas, 8585 • Sala 490
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  min-h-[50px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#4F1720]
                  px-7
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#F7F3EF]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#5A1017]
                "
              >
                Abrir no Google Maps

                <Navigation
                  size={14}
                  strokeWidth={1.3}
                  className="
                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>

            {/* IFRAME */}
            <div
              className="
                relative
                h-[430px]
                w-full
                overflow-hidden

                sm:h-[500px]

                lg:h-[560px]
              "
            >
              <iframe
                title="Mapa da Madiha Maison no Vogue Square"
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
          </div>

          {/* RODAPÉ */}
          <div
            className="
              mt-7
              grid
              gap-4

              md:grid-cols-[1fr_auto]
              md:items-center
            "
          >
            <div
              className="
                flex
                items-start
                gap-4
                rounded-[1.7rem]
                border
                border-[#5A1017]/8
                bg-white/55
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
                  text-[#A17D4F]
                "
              />

              <p
                className="
                  text-[11px]
                  font-light
                  leading-6
                  text-[#725D58]

                  md:text-[12px]
                "
              >
                Para uma experiência mais organizada, o atendimento pode ser
                alinhado previamente antes da visita.
              </p>
            </div>

            <a
              href="/relogios/avaliacao-de-relogios/"
              className="
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                rounded-full
                border
                border-[#C7A87A]
                bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                px-8
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#4F1720]
                transition-all
                duration-300

                hover:-translate-y-1

                md:text-[9px]
              "
            >
              Avaliar meu relógio
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .luxo-mapa-halo {
          animation: luxoMapaHalo 7s ease-in-out infinite;
        }

        @keyframes luxoMapaHalo {
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

        .luxo-mapa-pin {
          animation: luxoMapaPin 2.5s ease-in-out infinite;
        }

        @keyframes luxoMapaPin {
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
      `}</style>
    </>
  );
}