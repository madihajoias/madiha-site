'use client';

import {
  ArrowUpRight,
  Building2,
  MapPin,
  Navigation,
  ShieldCheck,
} from 'lucide-react';

export default function CompraRelogiosMapaSection() {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

  return (
    <section
      aria-labelledby="mapa-compra-relogios-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
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
          bg-[radial-gradient(circle_at_15%_20%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_85%_74%,rgba(90,16,23,0.06),transparent_34%)]
        "
      />

      {/* LUZ */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[30%]
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-[#C7A87A]/8
          blur-[120px]
          motion-safe:animate-[pulse_7s_ease-in-out_infinite]
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
                bg-[#EFE4D1]/65
                px-4
                py-3
              "
            >
              <MapPin
                size={14}
                strokeWidth={1.3}
                className="
                  text-[#A17D4F]
                  motion-safe:animate-pulse
                "
              />

              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#A17D4F]
                "
              >
                Localização
              </p>
            </div>

            <h2
              id="mapa-compra-relogios-title"
              className="
                mt-5
                max-w-[680px]
                text-[#4F1720]
              "
            >
              Compra de relógios na Barra da Tijuca
            </h2>
          </div>

          <p
            className="
              max-w-[640px]
              text-[14px]
              font-light
              leading-8
              text-[#725D58]
              md:text-[15px]
            "
          >
            Encontre a Madiha Maison no Vogue Square e leve seu relógio para uma
            avaliação presencial, reservada e individual.
          </p>
        </div>

        {/* MAPA + FICHA */}
        <div
          className="
            mt-14
            grid
            overflow-hidden
            rounded-[2.4rem]
            border
            border-[#5A1017]/8
            bg-white/50
            shadow-[0_26px_80px_rgba(63,38,26,0.09)]
            backdrop-blur-xl
            md:mt-16
            lg:grid-cols-[1.35fr_0.65fr]
          "
        >
          {/* =========================
              GOOGLE MAPS
          ========================== */}
          <div
            className="
              relative
              min-h-[430px]
              overflow-hidden
              lg:min-h-[590px]
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5923754482!2d-43.39869498874111!3d-23.00201224119506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbf2521f3707%3A0xa54921f2f3d36fd8!2sMadiha%20Maison!5e0!3m2!1spt-BR!2sbr!4v1791309377339!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: 'absolute',
                inset: 0,
              }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Madiha Maison no Vogue Square"
            />

            {/* LABEL */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-5
                left-5
                hidden
                rounded-full
                border
                border-white/40
                bg-[#F7F3EF]/95
                px-5
                py-3
                shadow-[0_14px_36px_rgba(63,38,26,0.16)]
                backdrop-blur-xl
                md:flex
                md:items-center
                md:gap-3
              "
            >
              <Navigation
                size={14}
                strokeWidth={1.3}
                className="text-[#A17D4F]"
              />

              <span
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#4F1720]
                "
              >
                Vogue Square • Barra da Tijuca
              </span>
            </div>
          </div>

          {/* =========================
              FICHA
          ========================== */}
          <div
            className="
              relative
              flex
              flex-col
              justify-between
              overflow-hidden
              bg-[#EFE4D1]
              p-8
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                bg-[#C7A87A]/18
                blur-[60px]
                motion-safe:animate-[pulse_7s_ease-in-out_infinite]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7A87A]/35
                  bg-[#F7F3EF]/70
                "
              >
                <Building2
                  size={23}
                  strokeWidth={1.2}
                  className="text-[#A17D4F]"
                />
              </div>

              <p
                className="
                  mt-7
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#A17D4F]
                "
              >
                Google Maps
              </p>

              <h3
                className="
                  mt-4
                  text-[#4F1720]
                "
              >
                Madiha Maison
              </h3>

              <p
                className="
                  mt-3
                  font-serif
                  text-[19px]
                  text-[#725D58]
                "
              >
                Vogue Square
              </p>

              <div
                className="
                  my-7
                  h-px
                  w-full
                  bg-[#A17D4F]/20
                "
              />

              <div
                className="
                  space-y-1
                  text-[12px]
                  font-light
                  leading-7
                  text-[#725D58]
                  md:text-[13px]
                "
              >
                <p>Av. das Américas, 8585</p>
                <p>Sala 490</p>
                <p>Barra da Tijuca</p>
                <p>Rio de Janeiro - RJ</p>
                <p>22793-081</p>
              </div>

              {/* INFO */}
              <div
                className="
                  mt-8
                  rounded-[1.5rem]
                  border
                  border-[#A17D4F]/18
                  bg-[#F7F3EF]/55
                  p-5
                "
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={17}
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
                    "
                  >
                    Atendimento presencial para avaliação e compra de relógios
                    de luxo, peças vintage e relógios em ouro.
                  </p>
                </div>
              </div>

              {/* OURO */}
              <div
                className="
                  mt-4
                  rounded-[1.5rem]
                  border
                  border-[#4F1720]/10
                  bg-[#4F1720]
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
                  Relógios em ouro
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-light
                    leading-6
                    text-[#E1D6D2]
                  "
                >
                  Compramos relógios de marcas reconhecidas em ouro mesmo em
                  diferentes estados de conservação.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              className="
                relative
                z-10
                mt-10
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
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#4F1720]
                  px-8
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#F7F3EF]
                  shadow-[0_14px_32px_rgba(79,23,32,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#5A1017]
                  hover:shadow-[0_20px_40px_rgba(79,23,32,0.22)]
                "
              >
                Ver no Google Maps

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
            </div>
          </div>
        </div>

        {/* TEXTO LOCAL SEO */}
        <div
          className="
            mx-auto
            mt-10
            max-w-[900px]
            text-center
          "
        >
          <p
            className="
              text-[11px]
              font-light
              leading-7
              text-[#8A7671]
              md:text-[12px]
            "
          >
            Se você procura onde vender relógios na Barra da Tijuca, a Madiha
            Maison realiza atendimento no Vogue Square para análise presencial
            de relógios de luxo, relógios de coleção, modelos vintage e peças em
            ouro.
          </p>
        </div>
      </div>
    </section>
  );
}