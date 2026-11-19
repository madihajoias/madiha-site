'use client';

import {
  Building2,
  MapPin,
  Navigation,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function RelogiosLuxoLocation() {
  return (
    <>
      <section
        id="localizacao"
        aria-labelledby="relogios-luxo-localizacao-title"
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
            bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(122,22,34,0.60),transparent_34%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            luxo-location-halo
            pointer-events-none
            absolute
            right-[5%]
            top-[20%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#C7A87A]/9
            blur-[130px]
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
            gap-14

            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-center
            lg:gap-20
          "
        >
          {/* =================================
              TEXTO
          ================================= */}
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
                  luxo-location-pin
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
                Barra da Tijuca • Rio de Janeiro
              </p>
            </div>

            <h2
              id="relogios-luxo-localizacao-title"
              className="
                mt-6
                max-w-[680px]
                text-[#F7F3EF]
              "
            >
              Relógios de luxo no Vogue Square
            </h2>

            <p
              className="
                mt-7
                max-w-[620px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]

                md:text-[15px]
              "
            >
              A Madiha Maison recebe clientes na Barra da Tijuca para
              atendimento relacionado a relógios de luxo, avaliação de peças e
              negociação de relógios selecionados.
            </p>

            <p
              className="
                mt-5
                max-w-[590px]
                text-[12px]
                font-light
                leading-7
                text-[#C8B8B6]

                md:text-[13px]
              "
            >
              O atendimento acontece no Vogue Square, em um ambiente reservado
              e adequado para analisar cada relógio com atenção aos seus
              detalhes.
            </p>

            {/* ENDEREÇO */}
            <div
              className="
                mt-9
                rounded-[1.8rem]
                border
                border-[#C7A87A]/24
                bg-white/[0.045]
                p-6
                backdrop-blur-xl

                md:p-7
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
                    border-[#C7A87A]/25
                    bg-[#C7A87A]/9
                  "
                >
                  <Building2
                    size={20}
                    strokeWidth={1.2}
                    className="text-[#D6BB8B]"
                  />
                </div>

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
                    Madiha Maison
                  </p>

                  <p
                    className="
                      mt-3
                      font-serif
                      text-[21px]
                      leading-tight
                      text-[#F7F3EF]
                    "
                  >
                    Vogue Square
                  </p>

                  <p
                    className="
                      mt-3
                      text-[12px]
                      font-light
                      leading-7
                      text-[#D3C3C0]
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
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-7
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#C7A87A]
                bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                px-8
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#4F1720]
                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              Como chegar

              <Navigation
                size={15}
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

          {/* =================================
              VISUAL
          ================================= */}
          <div
            className="
              relative
              grid
              gap-4
            "
          >
            {/* CARD PRINCIPAL */}
            <article
              className="
                luxo-location-main-card
                relative
                overflow-hidden
                rounded-[2.3rem]
                border
                border-[#C7A87A]/24
                bg-white/[0.05]
                p-7
                shadow-[0_28px_75px_rgba(20,5,8,0.16)]
                backdrop-blur-xl

                md:p-9
              "
            >
              {/* RESPIRAÇÃO */}
              <div
                aria-hidden="true"
                className="
                  luxo-location-breath
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[#7A1622]
                "
              />

              {/* LUZ */}
              <div
                aria-hidden="true"
                className="
                  luxo-location-card-light
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

              <div className="relative z-10">
                <div
                  className="
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
                  <MapPin
                    size={27}
                    strokeWidth={1.15}
                    className="text-[#D6BB8B]"
                  />
                </div>

                <p
                  className="
                    mt-8
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#D6BB8B]
                  "
                >
                  Atendimento presencial
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[520px]
                    text-[#F7F3EF]
                  "
                >
                  Um ambiente reservado para analisar sua peça com atenção.
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[650px]
                    text-[12px]
                    font-light
                    leading-7
                    text-[#D3C3C0]

                    md:text-[13px]
                  "
                >
                  Relógios de luxo exigem uma análise cuidadosa de marca,
                  referência, movimento, materiais, originalidade, conservação
                  e documentação.
                </p>
              </div>
            </article>

            {/* CARDS INFERIORES */}
            <div
              className="
                grid
                gap-4

                sm:grid-cols-2
              "
            >
              <article
                className="
                  group
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:border-[#C7A87A]/30
                "
              >
                <ShieldCheck
                  size={22}
                  strokeWidth={1.2}
                  className="text-[#D6BB8B]"
                />

                <p
                  className="
                    mt-6
                    font-serif
                    text-[20px]
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  Atendimento reservado
                </p>

                <p
                  className="
                    mt-4
                    text-[11px]
                    font-light
                    leading-6
                    text-[#D3C3C0]
                  "
                >
                  Uma experiência discreta para avaliação e negociação de peças
                  de alta relojoaria.
                </p>
              </article>

              <article
                className="
                  group
                  rounded-[2rem]
                  border
                  border-[#C7A87A]/24
                  bg-[#C7A87A]/9
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  hover:-translate-y-1
                  hover:bg-[#C7A87A]/13
                "
              >
                <Sparkles
                  size={22}
                  strokeWidth={1.2}
                  className="text-[#D6BB8B]"
                />

                <p
                  className="
                    mt-6
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
                    mt-4
                    text-[11px]
                    font-light
                    leading-6
                    text-[#D3C3C0]
                  "
                >
                  Atendimento no Vogue Square, com acesso pela Av. das Américas.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .luxo-location-halo {
          animation: luxoLocationHalo 7s ease-in-out infinite;
        }

        @keyframes luxoLocationHalo {
          0%,
          100% {
            opacity: 0.42;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.82;
            transform: scale(1.08);
          }
        }

        .luxo-location-pin {
          animation: luxoLocationPin 2.5s ease-in-out infinite;
        }

        @keyframes luxoLocationPin {
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

        .luxo-location-breath {
          opacity: 0;
          animation: luxoLocationBreath 6.5s ease-in-out infinite;
        }

        @keyframes luxoLocationBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.22;
          }
        }

        .luxo-location-card-light {
          animation: luxoLocationCardLight 5.5s ease-in-out infinite;
        }

        @keyframes luxoLocationCardLight {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(0.94);
          }

          50% {
            opacity: 0.85;
            transform: scale(1.08);
          }
        }
      `}</style>
    </>
  );
}