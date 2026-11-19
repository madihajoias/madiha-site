'use client';

import {
  ArrowDown,
  Building2,
  Gem,
  MapPin,
  ShieldCheck,
  Sparkles,
  Watch,
} from 'lucide-react';

export default function RioJaneiroHero() {
  return (
    <>
      <section
        id="inicio"
        aria-labelledby="rio-janeiro-title"
        className="
          relative
          w-full
          overflow-hidden
          bg-[#4F1720]
        "
      >
        {/* FUNDO */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_14%_18%,rgba(122,22,34,0.82),transparent_32%),radial-gradient(circle_at_82%_68%,rgba(199,168,122,0.16),transparent_30%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
          "
        />

        {/* LUZ ESQUERDA */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-[15%]
            top-[8%]
            h-[48vw]
            w-[48vw]
            rounded-full
            bg-[#8B2834]/25
            blur-[120px]
          "
        />

        {/* LUZ DIREITA */}
        <div
          aria-hidden="true"
          className="
            rio-background-glow
            pointer-events-none
            absolute
            -right-[12%]
            bottom-[2%]
            h-[44vw]
            w-[44vw]
            rounded-full
            bg-[#C7A87A]/12
            blur-[120px]
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
            px-5
            pb-16
            pt-28

            sm:px-6
            sm:pb-20
            sm:pt-32

            md:px-8

            lg:min-h-[calc(100vh-90px)]
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-center
            lg:gap-16
            lg:px-10
            lg:pb-16
            lg:pt-32

            xl:grid-cols-[0.92fr_1.08fr]
            xl:gap-20
            xl:px-12
          "
        >
          {/* TEXTO */}
          <div className="min-w-0 lg:max-w-[700px]">
            <div
              className="
                inline-flex
                max-w-full
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
              <Sparkles
                size={14}
                strokeWidth={1.4}
                className="
                  rio-sparkle
                  shrink-0
                  text-[#D6BB8B]
                "
              />

              <p
                className="
                  truncate
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#D6BB8B]

                  sm:text-[8px]

                  md:text-[9px]
                  md:tracking-[0.28em]
                "
              >
                Madiha Maison • Rio de Janeiro
              </p>
            </div>

            <h1
              id="rio-janeiro-title"
              className="
                mt-7
                max-w-[820px]
                text-[#F7F3EF]
              "
            >
              Joias, Ouro, Diamantes e Relógios no Rio de Janeiro
            </h1>

            <p
              className="
                mt-7
                max-w-[660px]
                text-[14px]
                font-light
                leading-7
                text-[#E1D6D2]

                md:text-[16px]
                md:leading-8
              "
            >
              A Madiha Maison oferece atendimento especializado no Rio de
              Janeiro para ouro, joias, diamantes e relógios de luxo, com análise
              individual e atendimento presencial.
            </p>

            <p
              className="
                mt-5
                max-w-[620px]
                text-[12px]
                font-light
                leading-7
                text-[#C8B8B6]

                md:text-[13px]
              "
            >
              O atendimento acontece na Barra da Tijuca, no Vogue Square,
              reunindo diferentes especialidades em um único endereço.
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
                href="#servicos"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#C7A87A]
                  bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
                  px-7
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#4F1720]
                  shadow-[0_16px_40px_rgba(20,5,8,0.26)]
                  transition-all
                  duration-300

                  hover:-translate-y-1

                  sm:px-8
                  sm:text-[9px]
                  sm:tracking-[0.22em]
                "
              >
                Conhecer os serviços

                <ArrowDown
                  size={14}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                />
              </a>

              <a
                href="/localizacao/barra-da-tijuca/"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.045]
                  px-7
                  text-center
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#F7F3EF]
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#C7A87A]/45
                  hover:bg-white/[0.07]

                  sm:px-8
                  sm:text-[9px]
                  sm:tracking-[0.22em]
                "
              >
                Atendimento na Barra
              </a>
            </div>

            {/* INDICADORES */}
            <div
              className="
                mt-10
                grid
                grid-cols-1
                gap-3

                min-[430px]:grid-cols-3

                lg:max-w-[650px]
              "
            >
              {[
                {
                  icon: MapPin,
                  label: 'Cidade',
                  value: 'Rio de Janeiro',
                },
                {
                  icon: Building2,
                  label: 'Atendimento',
                  value: 'Vogue Square',
                },
                {
                  icon: ShieldCheck,
                  label: 'Experiência',
                  value: 'Reservada',
                },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.35rem]
                    border
                    border-white/10
                    bg-white/[0.045]
                    px-5
                    py-4
                    backdrop-blur-xl
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[#C7A87A]/30
                    hover:bg-white/[0.065]
                  "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/22
                        bg-[#C7A87A]/8
                      "
                    >
                      <Icon
                        size={17}
                        strokeWidth={1.25}
                        className="text-[#D6BB8B]"
                      />
                    </div>

                    <div className="min-w-0">
                      <p
                        className="
                          text-[7px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[#D6BB8B]
                        "
                      >
                        {label}
                      </p>

                      <p
                        className="
                          mt-1
                          font-serif
                          text-[16px]
                          text-[#F7F3EF]
                        "
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL */}
          <div
            className="
              relative
              flex
              w-full
              min-w-0
              items-center
              justify-center
              pb-4

              sm:pb-8

              lg:min-h-[570px]
              lg:-translate-y-2
              lg:pb-0

              xl:min-h-[610px]
            "
          >
            {/* HALO */}
            <div
              aria-hidden="true"
              className="
                rio-main-halo
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[310px]
                w-[310px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#C7A87A]/10
                blur-[80px]

                sm:h-[430px]
                sm:w-[430px]

                lg:h-[480px]
                lg:w-[480px]

                xl:h-[520px]
                xl:w-[520px]
              "
            />

            {/* ÓRBITA */}
            <div
              aria-hidden="true"
              className="
                rio-orbit
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                hidden
                h-[340px]
                w-[340px]
                rounded-full
                border
                border-[#C7A87A]/18

                sm:block

                lg:h-[390px]
                lg:w-[390px]

                xl:h-[430px]
                xl:w-[430px]
              "
            >
              <div
                className="
                  absolute
                  -top-2
                  left-1/2
                  h-4
                  w-4
                  -translate-x-1/2
                  rounded-full
                  bg-[#D6BB8B]
                  shadow-[0_0_12px_rgba(214,187,139,0.8),0_0_30px_rgba(214,187,139,0.55)]
                "
              />
            </div>

            {/* CARD PRINCIPAL */}
            <div
              className="
                relative
                w-full
                max-w-[520px]
                overflow-hidden
                rounded-[2rem]
                border
                border-[#C7A87A]/22
                bg-[rgba(255,255,255,0.055)]
                px-6
                py-7
                shadow-[0_30px_80px_rgba(20,5,8,0.26),inset_0_1px_0_rgba(255,255,255,0.06)]
                backdrop-blur-2xl

                sm:rounded-[2.5rem]
                sm:px-8
                sm:py-9

                lg:max-w-[470px]
                lg:px-8
                lg:py-8

                xl:max-w-[500px]
                xl:px-9
                xl:py-10
              "
            >
              {/* RESPIRAÇÃO */}
              <div
                aria-hidden="true"
                className="
                  rio-color-breath
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
                  rio-card-glow
                  pointer-events-none
                  absolute
                  -right-24
                  -top-28
                  h-72
                  w-72
                  rounded-full
                  bg-[#C7A87A]/14
                  blur-[75px]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      rio-location-ring
                      absolute
                      inset-0
                      rounded-full
                      border
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      rio-location-ring-secondary
                      absolute
                      inset-[6px]
                      rounded-full
                      border
                    "
                  />

                  <span
                    aria-hidden="true"
                    className="
                      rio-location-icon-bg
                      absolute
                      inset-[4px]
                      rounded-full
                    "
                  />

                  <MapPin
                    size={30}
                    strokeWidth={1.15}
                    className="
                      rio-location-icon
                      relative
                      z-10
                    "
                  />
                </div>

                <p
                  className="
                    mt-6
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-[#D6BB8B]

                    sm:mt-7
                    sm:text-[9px]

                    lg:mt-6
                  "
                >
                  Madiha Maison no Rio
                </p>

                <h2
                  className="
                    mt-4
                    max-w-[450px]
                    text-[#F7F3EF]
                  "
                >
                  Especialidades reunidas em um atendimento presencial.
                </h2>

                <p
                  className="
                    mt-5
                    max-w-[440px]
                    text-[12px]
                    font-light
                    leading-7
                    text-[#D3C3C0]
                  "
                >
                  Atendimento para diferentes categorias de peças, com presença
                  física na Barra da Tijuca.
                </p>

                <div
                  className="
                    mt-7
                    grid
                    grid-cols-2
                    gap-3

                    sm:gap-4
                  "
                >
                  <div
                    className="
                      rounded-[1.3rem]
                      border
                      border-white/10
                      bg-white/[0.045]
                      px-4
                      py-4
                      backdrop-blur-xl

                      sm:px-5
                    "
                  >
                    <Gem
                      size={17}
                      strokeWidth={1.2}
                      className="text-[#D6BB8B]"
                    />

                    <p
                      className="
                        mt-3
                        font-serif
                        text-[17px]
                        leading-tight
                        text-[#F7F3EF]

                        sm:text-[18px]
                      "
                    >
                      Joias + Diamantes
                    </p>
                  </div>

                  <div
                    className="
                      rounded-[1.3rem]
                      border
                      border-white/10
                      bg-white/[0.045]
                      px-4
                      py-4
                      backdrop-blur-xl

                      sm:px-5
                    "
                  >
                    <Watch
                      size={17}
                      strokeWidth={1.2}
                      className="text-[#D6BB8B]"
                    />

                    <p
                      className="
                        mt-3
                        font-serif
                        text-[17px]
                        leading-tight
                        text-[#F7F3EF]

                        sm:text-[18px]
                      "
                    >
                      Ouro + Relógios
                    </p>
                  </div>
                </div>

                {/* MOBILE */}
                <div
                  className="
                    mt-4
                    rounded-[1.4rem]
                    border
                    border-[#C7A87A]/18
                    bg-[#F7F3EF]
                    px-5
                    py-5
                    shadow-[0_16px_40px_rgba(20,5,8,0.16)]

                    lg:hidden
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
                    Atendimento presencial
                  </p>

                  <p
                    className="
                      mt-3
                      font-serif
                      text-[18px]
                      leading-tight
                      text-[#4F1720]
                    "
                  >
                    Barra da Tijuca • Vogue Square
                  </p>
                </div>
              </div>
            </div>

            {/* BADGE DESKTOP */}
            <div
              className="
                rio-floating-badge
                absolute
                z-20
                hidden
                w-[225px]
                rounded-[1.5rem]
                border
                border-[#C7A87A]/22
                bg-[#F7F3EF]/95
                px-6
                py-5
                shadow-[0_20px_55px_rgba(20,5,8,0.28)]
                backdrop-blur-2xl

                lg:bottom-[-44px]
                lg:right-[1%]
                lg:block

                xl:bottom-[-50px]
                xl:right-[2%]
                xl:w-[240px]
              "
            >
              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  strokeWidth={1.25}
                  className="text-[#A17D4F]"
                />

                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A17D4F]
                  "
                >
                  Rio de Janeiro
                </p>
              </div>

              <p
                className="
                  mt-3
                  font-serif
                  text-[19px]
                  leading-tight
                  text-[#4F1720]
                "
              >
                Madiha Maison • Barra da Tijuca
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .rio-location-ring {
          border-color: rgba(214, 187, 139, 0.5);
          animation: rioLocationRing 2.4s ease-in-out infinite;
        }

        .rio-location-ring-secondary {
          border-color: rgba(214, 187, 139, 0.2);
          animation: rioLocationRingSecondary 2.4s ease-in-out infinite;
        }

        .rio-location-icon-bg {
          background: rgba(199, 168, 122, 0.08);
          animation: rioLocationBackground 2.4s ease-in-out infinite;
        }

        .rio-location-icon {
          color: #d6bb8b;
          animation: rioLocationIcon 2.4s ease-in-out infinite;
        }

        @keyframes rioLocationRing {
          0%,
          100% {
            transform: scale(1);
            border-color: rgba(214, 187, 139, 0.45);
            box-shadow:
              0 0 0 0 rgba(214, 187, 139, 0),
              0 0 6px rgba(214, 187, 139, 0.08);
          }

          50% {
            transform: scale(1.18);
            border-color: rgba(255, 255, 255, 0.95);
            box-shadow:
              0 0 0 8px rgba(214, 187, 139, 0.035),
              0 0 38px rgba(255, 245, 224, 0.38);
          }
        }

        @keyframes rioLocationRingSecondary {
          0%,
          100% {
            transform: scale(1);
            border-color: rgba(214, 187, 139, 0.18);
          }

          50% {
            transform: scale(1.08);
            border-color: rgba(255, 255, 255, 0.7);
          }
        }

        @keyframes rioLocationBackground {
          0%,
          100% {
            background: rgba(199, 168, 122, 0.08);
          }

          50% {
            background: rgba(255, 255, 255, 0.14);
          }
        }

        @keyframes rioLocationIcon {
          0%,
          100% {
            color: #d6bb8b;
            transform: scale(1);
          }

          50% {
            color: #ffffff;
            transform: scale(1.08);
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.55));
          }
        }

        .rio-color-breath {
          opacity: 0;
          animation: rioColorBreath 6.5s ease-in-out infinite;
        }

        @keyframes rioColorBreath {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 0.21;
          }
        }

        .rio-orbit {
          transform: translate(-50%, -50%);
          animation: rioOrbitSpin 14s linear infinite;
          transform-origin: center center;
          will-change: transform;
        }

        @keyframes rioOrbitSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .rio-card-glow {
          animation: rioCardGlow 5s ease-in-out infinite;
        }

        @keyframes rioCardGlow {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.92);
          }

          50% {
            opacity: 0.78;
            transform: scale(1.08);
          }
        }

        .rio-main-halo {
          animation: rioHaloPulse 6s ease-in-out infinite;
        }

        @keyframes rioHaloPulse {
          0%,
          100% {
            opacity: 0.55;
          }

          50% {
            opacity: 0.85;
          }
        }

        .rio-background-glow {
          animation: rioBackgroundGlow 7s ease-in-out infinite;
        }

        @keyframes rioBackgroundGlow {
          0%,
          100% {
            opacity: 0.5;
          }

          50% {
            opacity: 0.8;
          }
        }

        .rio-floating-badge {
          animation: rioFloatingBadge 5s ease-in-out infinite;
        }

        @keyframes rioFloatingBadge {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }
        }

        .rio-sparkle {
          animation: rioSparkle 2.2s ease-in-out infinite;
        }

        @keyframes rioSparkle {
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