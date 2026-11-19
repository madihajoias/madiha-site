'use client';

import {
  ArrowUpRight,
  Building2,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function CompraRelogiosLocation() {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

  return (
    <section
      id="localizacao"
      aria-labelledby="compra-relogios-location-title"
      className="
        relative
        overflow-hidden
        bg-[#4F1720]
        px-6
        py-24
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
          bg-[radial-gradient(circle_at_15%_20%,rgba(122,22,34,0.78),transparent_32%),radial-gradient(circle_at_85%_72%,rgba(199,168,122,0.14),transparent_30%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
        "
      />

      {/* HALO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[12%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#C7A87A]/10
          blur-[120px]
          motion-safe:animate-[pulse_7s_ease-in-out_infinite]
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
        {/* =========================
            TEXTO
        ========================== */}
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
            <Sparkles
              size={14}
              strokeWidth={1.3}
              className="
                text-[#D6BB8B]
                motion-safe:animate-pulse
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
              Barra da Tijuca
            </p>
          </div>

          <h2
            id="compra-relogios-location-title"
            className="
              mt-6
              max-w-[680px]
              text-[#F7F3EF]
            "
          >
            Venda seu relógio no Vogue Square
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
            A Madiha Maison realiza atendimento presencial para compra e
            avaliação de relógios de luxo na Barra da Tijuca, em ambiente
            reservado no Vogue Square.
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
            Se você possui um relógio de marca, peça vintage, relógio em ouro
            ou modelo de coleção, nossa equipe pode realizar uma análise
            individual antes da apresentação da proposta.
          </p>

          {/* BENEFÍCIOS */}
          <div
            className="
              mt-9
              grid
              gap-3
              sm:grid-cols-2
            "
          >
            <div
              className="
                flex
                items-start
                gap-4
                rounded-[1.5rem]
                border
                border-white/10
                bg-white/[0.045]
                p-5
                backdrop-blur-xl
              "
            >
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
                  border-[#C7A87A]/24
                  bg-[#C7A87A]/8
                "
              >
                <ShieldCheck
                  size={17}
                  strokeWidth={1.2}
                  className="text-[#D6BB8B]"
                />
              </div>

              <div>
                <p
                  className="
                    font-serif
                    text-[17px]
                    text-[#F7F3EF]
                  "
                >
                  Atendimento reservado
                </p>

                <p
                  className="
                    mt-2
                    text-[11px]
                    font-light
                    leading-6
                    text-[#C9B8B5]
                  "
                >
                  Privacidade durante a avaliação e a negociação.
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-start
                gap-4
                rounded-[1.5rem]
                border
                border-white/10
                bg-white/[0.045]
                p-5
                backdrop-blur-xl
              "
            >
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
                  border-[#C7A87A]/24
                  bg-[#C7A87A]/8
                "
              >
                <Building2
                  size={17}
                  strokeWidth={1.2}
                  className="text-[#D6BB8B]"
                />
              </div>

              <div>
                <p
                  className="
                    font-serif
                    text-[17px]
                    text-[#F7F3EF]
                  "
                >
                  Vogue Square
                </p>

                <p
                  className="
                    mt-2
                    text-[11px]
                    font-light
                    leading-6
                    text-[#C9B8B5]
                  "
                >
                  Atendimento na Barra da Tijuca, Rio de Janeiro.
                </p>
              </div>
            </div>
          </div>

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
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                min-h-[56px]
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
                shadow-[0_16px_40px_rgba(20,5,8,0.25)]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              Como chegar

              <ArrowUpRight
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

            <a
              href="#faq-compra-relogios"
              className="
                inline-flex
                min-h-[56px]
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.045]
                px-8
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#F7F3EF]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#C7A87A]/40
                hover:bg-white/[0.07]
              "
            >
              Tirar dúvidas
            </a>
          </div>
        </div>

        {/* =========================
            CARD LOCALIZAÇÃO
        ========================== */}
        <div
          className="
            relative
            min-h-[560px]
            w-full
          "
        >
          {/* CÍRCULO */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-1/2
              h-[360px]
              w-[360px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-[#C7A87A]/15
              sm:h-[430px]
              sm:w-[430px]
              motion-safe:animate-[spin_35s_linear_infinite]
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
                shadow-[0_0_28px_rgba(214,187,139,0.5)]
              "
            />
          </div>

          {/* CARD PRINCIPAL */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              w-full
              max-w-[470px]
              -translate-x-1/2
              -translate-y-1/2
              overflow-hidden
              rounded-[2.5rem]
              border
              border-[#C7A87A]/22
              bg-white/[0.055]
              p-8
              shadow-[0_35px_90px_rgba(20,5,8,0.28)]
              backdrop-blur-2xl
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-[#C7A87A]/12
                blur-[60px]
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
                  border-[#C7A87A]/25
                  bg-[#C7A87A]/10
                  motion-safe:animate-[pulse_4s_ease-in-out_infinite]
                "
              >
                <MapPin
                  size={27}
                  strokeWidth={1.2}
                  className="text-[#D6BB8B]"
                />
              </div>

              <p
                className="
                  mt-7
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D6BB8B]
                "
              >
                Madiha Maison
              </p>

              <p
                className="
                  mt-4
                  font-serif
                  text-[27px]
                  leading-tight
                  text-[#F7F3EF]
                "
              >
                Vogue Square
              </p>

              <div
                className="
                  mt-7
                  h-px
                  w-full
                  bg-[#C7A87A]/20
                "
              />

              <div
                className="
                  mt-7
                  space-y-2
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                  md:text-[13px]
                "
              >
                <p>Av. das Américas, 8585</p>
                <p>Sala 490</p>
                <p>Barra da Tijuca</p>
                <p>Rio de Janeiro - RJ</p>
                <p>22793-081</p>
              </div>

              <div
                className="
                  mt-8
                  rounded-[1.4rem]
                  border
                  border-[#C7A87A]/18
                  bg-[#C7A87A]/8
                  p-5
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
                  Compra de relógios
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
                  Atendimento presencial para avaliação e compra de relógios de
                  luxo e peças em ouro.
                </p>
              </div>
            </div>
          </div>

          {/* CARD FLUTUANTE */}
          <div
            className="
              absolute
              bottom-[3%]
              right-0
              rounded-[1.5rem]
              border
              border-[#C7A87A]/25
              bg-[#F7F3EF]/95
              px-6
              py-5
              shadow-[0_20px_55px_rgba(20,5,8,0.26)]
              backdrop-blur-xl
              sm:right-[3%]
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#A17D4F]
              "
            >
              Barra da Tijuca
            </p>

            <p
              className="
                mt-2
                font-serif
                text-[18px]
                text-[#4F1720]
              "
            >
              Vogue Square • Sala 490
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}