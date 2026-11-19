'use client';

import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Sparkles,
  Watch,
} from 'lucide-react';

export default function CompraRelogiosFinalCTA() {
  const googleMapsUrl =
    'https://www.google.com/maps/place/Madiha+Maison/@-23.0020122,-43.398695,17z';

  return (
    <section
      aria-labelledby="compra-relogios-final-title"
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
          bg-[radial-gradient(circle_at_18%_18%,rgba(122,22,34,0.8),transparent_32%),radial-gradient(circle_at_82%_72%,rgba(199,168,122,0.16),transparent_32%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
        "
      />

      {/* HALO CENTRAL */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C7A87A]/10
          blur-[140px]
          motion-safe:animate-[pulse_7s_ease-in-out_infinite]
        "
      />

      {/* ORBITA */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[340px]
          w-[340px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#C7A87A]/12
          sm:h-[470px]
          sm:w-[470px]
          lg:h-[560px]
          lg:w-[560px]
          motion-safe:animate-[spin_40s_linear_infinite]
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
            shadow-[0_0_30px_rgba(214,187,139,0.5)]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[90rem]
          flex-col
          items-center
          text-center
        "
      >
        {/* BADGE */}
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
            Madiha Maison • Barra da Tijuca
          </p>
        </div>

        {/* ÍCONE */}
        <div
          className="
            mt-10
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-[#C7A87A]/26
            bg-[#C7A87A]/10
            shadow-[0_20px_50px_rgba(20,5,8,0.2)]
            backdrop-blur-xl
            motion-safe:animate-[pulse_4s_ease-in-out_infinite]
          "
        >
          <Watch
            size={34}
            strokeWidth={1.1}
            className="text-[#D6BB8B]"
          />
        </div>

        {/* TÍTULO */}
        <h2
          id="compra-relogios-final-title"
          className="
            mt-9
            max-w-[900px]
            text-[#F7F3EF]
          "
        >
          Quer vender seu relógio?
        </h2>

        <p
          className="
            mx-auto
            mt-7
            max-w-[760px]
            text-[14px]
            font-light
            leading-8
            text-[#D3C3C0]
            md:text-[15px]
          "
        >
          Traga sua peça para uma avaliação individual na Madiha Maison.
          Relógios de luxo, vintage, de coleção e relógios de marcas
          reconhecidas em ouro podem ser analisados presencialmente.
        </p>

        {/* DESTAQUE OURO */}
        <div
          className="
            mt-8
            max-w-[760px]
            rounded-[1.7rem]
            border
            border-[#C7A87A]/25
            bg-white/[0.045]
            px-6
            py-5
            backdrop-blur-xl
          "
        >
          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#D6BB8B]
            "
          >
            Relógios em ouro
          </p>

          <p
            className="
              mt-3
              font-serif
              text-[19px]
              leading-tight
              text-[#F7F3EF]
              md:text-[21px]
            "
          >
            Compramos relógios de marca em ouro em qualquer estado de
            conservação.
          </p>
        </div>

        {/* CTAS */}
        <div
          className="
            mt-10
            flex
            w-full
            max-w-[720px]
            flex-col
            gap-3
            sm:flex-row
            sm:justify-center
          "
        >
          <a
            href="#localizacao"
            className="
              group
              inline-flex
              min-h-[58px]
              flex-1
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
              shadow-[0_16px_40px_rgba(20,5,8,0.26)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_22px_52px_rgba(20,5,8,0.32)]
            "
          >
            Avaliar meu relógio

            <ArrowDown
              size={14}
              strokeWidth={1.4}
              className="
                transition-transform
                duration-300
                group-hover:translate-y-1
              "
            />
          </a>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              min-h-[58px]
              flex-1
              items-center
              justify-center
              gap-3
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
              hover:-translate-y-1
              hover:border-[#C7A87A]/40
              hover:bg-white/[0.07]
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

        {/* BENEFÍCIOS */}
        <div
          className="
            mt-10
            grid
            w-full
            max-w-[850px]
            gap-3
            sm:grid-cols-2
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-[1.4rem]
              border
              border-white/10
              bg-white/[0.04]
              px-5
              py-4
              backdrop-blur-xl
            "
          >
            <ShieldCheck
              size={16}
              strokeWidth={1.2}
              className="text-[#D6BB8B]"
            />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#E1D6D2]
              "
            >
              Atendimento reservado
            </span>
          </div>

          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              rounded-[1.4rem]
              border
              border-white/10
              bg-white/[0.04]
              px-5
              py-4
              backdrop-blur-xl
            "
          >
            <MapPin
              size={16}
              strokeWidth={1.2}
              className="text-[#D6BB8B]"
            />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#E1D6D2]
              "
            >
              Vogue Square • Sala 490
            </span>
          </div>
        </div>

        {/* ENCERRAMENTO */}
        <div
          className="
            mt-14
            flex
            flex-col
            items-center
          "
        >
          <div
            className="
              h-14
              w-px
              bg-gradient-to-b
              from-[#C7A87A]/60
              to-transparent
              motion-safe:animate-pulse
            "
          />

          <p
            className="
              mt-5
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.26em]
              text-[#D6BB8B]
            "
          >
            Barra da Tijuca • Rio de Janeiro
          </p>
        </div>
      </div>
    </section>
  );
}