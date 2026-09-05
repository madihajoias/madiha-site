'use client';

import { useState } from 'react';

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
        relative
        min-h-[84svh]
        w-full
        overflow-hidden
        bg-[#F4D9D9]
        md:min-h-[100svh]
      "
    >
      {/* =====================================================
          POSTER RESPONSIVO
      ====================================================== */}

      <picture
        aria-hidden="true"
        className="
          absolute
          inset-0
          z-0
          block
          h-full
          w-full
        "
      >
        <source
          media="(max-width: 767px)"
          srcSet="/hero/hero-poster-mobile.webp"
        />

        <img
          src="/hero/hero-poster-desktop.webp"
          alt=""
          width={1920}
          height={960}
          fetchPriority="high"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
          "
        />
      </picture>

      {/* =====================================================
          VÍDEO RESPONSIVO
      ====================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onCanPlay={() => setVideoReady(true)}
        className={`
          absolute
          inset-0
          z-[1]
          h-full
          w-full
          object-cover

          transition-opacity
          duration-700
          ease-out

          ${
            videoReady
              ? 'opacity-100'
              : 'opacity-0'
          }
        `}
      >
        <source
          media="(max-width: 767px)"
          src="/hero/hero-mobile.mp4"
          type="video/mp4"
        />

        <source
          src="/hero/hero-desktop.mp4"
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          OVERLAY DE LEITURA
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]

          bg-gradient-to-r
          from-[#F7E3E2]/80
          via-[#F7E3E2]/22
          to-transparent

          md:from-[#F8E7E4]/72
          md:via-[#F8E7E4]/18
        "
      />

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          flex
          min-h-[84svh]
          w-full
          max-w-[90rem]

          items-start
          px-6
          pb-14
          pt-36

          md:min-h-[100svh]
          md:items-center
          md:px-8
          md:pb-0
          md:pt-24
        "
      >
        <div
          className="
            w-full
            max-w-[540px]

            text-center
            md:text-left
          "
        >
          <p
            className="
              mb-5
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#7B4F56]
              md:text-[10px]
            "
          >
            Madiha Maison • Rio de Janeiro
          </p>

          <h1
            id="hero-title"
            className="
              font-serif
              text-[2.65rem]
              font-normal
              leading-[1.04]
              text-[#4F1720]
              sm:text-5xl
              md:text-6xl
              lg:text-[4.6rem]
            "
          >
            A Arte do Leilão
            <br />
            e da Avaliação
          </h1>

          <p
            className="
              mx-auto
              mt-7
              max-w-[460px]
              text-[11px]
              font-light
              uppercase
              leading-6
              tracking-[0.14em]
              text-[#654F51]
              md:mx-0
              md:text-xs
              md:leading-7
            "
          >
            Transforme suas joias e ouro em capital
            com segurança, discrição e atendimento
            especializado no Vogue Square.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-5
              sm:flex-row
              md:justify-start
            "
          >
            <a
              href="#leilao"
              className="
                group
                relative
                px-1
                pb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#4F1720]
                transition-colors
                duration-300
                hover:text-[#8C692E]
              "
            >
              Ver Leilão Atual

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-left
                  bg-[#4F1720]
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-75
                  group-hover:bg-[#8C692E]
                "
              />
            </a>

            <a
              href="#calculadora-de-ouro"
              className="
                group
                relative
                px-1
                pb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#755F61]
                transition-colors
                duration-300
                hover:text-[#8C692E]
              "
            >
              Avaliar Minha Joia

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-0
                  bg-[#8C692E]
                  transition-all
                  duration-500
                  ease-out
                  group-hover:w-full
                "
              />
            </a>
          </div>
        </div>
      </div>

      {/* =====================================================
          INDICADOR INFERIOR
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-7
          left-1/2
          z-10
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
      >
        <span
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#715B5D]/70
          "
        >
          Descubra
        </span>

        <span
          className="
            h-10
            w-px
            bg-gradient-to-b
            from-[#715B5D]/50
            to-transparent
          "
        />
      </div>
    </section>
  );
}