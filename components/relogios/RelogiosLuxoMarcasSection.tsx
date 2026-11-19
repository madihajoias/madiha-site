'use client';

import { Crown, Sparkles, Watch } from 'lucide-react';

export default function RelogiosLuxoMarcasSection() {
  const marcas = [
    'Rolex',
    'Patek Philippe',
    'Audemars Piguet',
    'Vacheron Constantin',
    'Cartier',
    'Omega',
    'Jaeger-LeCoultre',
    'IWC',
    'Breitling',
    'TAG Heuer',
    'Panerai',
    'Bulgari',
  ];

  const marcasDuplicadas = [...marcas, ...marcas];

  return (
    <>
      <section
        id="grandes-marcas"
        aria-labelledby="marcas-luxo-title"
        className="
          relative
          overflow-hidden
          bg-[#4F1720]
          py-24

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
            bg-[radial-gradient(circle_at_16%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_84%_76%,rgba(122,22,34,0.62),transparent_34%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
          "
        />

        {/* HALO */}
        <div
          aria-hidden="true"
          className="
            luxo-marcas-halo
            pointer-events-none
            absolute
            left-1/2
            top-[44%]
            h-[620px]
            w-[620px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C7A87A]/7
            blur-[140px]
          "
        />

        {/* CABEÇALHO */}
        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[90rem]
            px-5

            sm:px-6

            md:px-8
          "
        >
          <div
            className="
              mx-auto
              max-w-[860px]
              text-center
            "
          >
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
              <Crown
                size={14}
                strokeWidth={1.3}
                className="
                  luxo-marcas-crown
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
                Grandes maisons
              </p>
            </div>

            <h2
              id="marcas-luxo-title"
              className="
                mt-6
                text-[#F7F3EF]
              "
            >
              Marcas que moldaram a alta relojoaria
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[720px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]

                md:text-[15px]
              "
            >
              Algumas maisons construíram sua reputação ao longo de décadas ou
              séculos, combinando inovação, tradição, identidade e excelência
              técnica.
            </p>
          </div>
        </div>

        {/* =====================================
            TICKER PRINCIPAL
        ====================================== */}
        <div
          className="
            relative
            mt-16
            overflow-hidden
            border-y
            border-white/8
            bg-white/[0.025]
            py-6
            backdrop-blur-xl
          "
        >
          {/* DEGRADÊ ESQUERDO */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              top-0
              z-20
              w-20
              bg-gradient-to-r
              from-[#4F1720]
              to-transparent

              md:w-40
            "
          />

          {/* DEGRADÊ DIREITO */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              top-0
              z-20
              w-20
              bg-gradient-to-l
              from-[#4F1720]
              to-transparent

              md:w-40
            "
          />

          <div
            className="
              luxo-marcas-track-left
              flex
              w-max
              items-center
              gap-4
            "
          >
            {marcasDuplicadas.map((marca, index) => (
              <div
                key={`${marca}-${index}`}
                className="
                  group
                  flex
                  min-w-[210px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#C7A87A]/16
                  bg-white/[0.045]
                  px-7
                  py-4
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  hover:border-[#C7A87A]/40
                  hover:bg-white/[0.075]
                "
              >
                <Watch
                  size={15}
                  strokeWidth={1.2}
                  className="
                    text-[#D6BB8B]
                    transition-transform
                    duration-500

                    group-hover:rotate-12
                  "
                />

                <span
                  className="
                    whitespace-nowrap
                    font-serif
                    text-[17px]
                    text-[#F7F3EF]
                  "
                >
                  {marca}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================
            TICKER SECUNDÁRIO
        ====================================== */}
        <div
          className="
            relative
            mt-4
            overflow-hidden
            py-3
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              top-0
              z-20
              w-20
              bg-gradient-to-r
              from-[#4F1720]
              to-transparent

              md:w-40
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              top-0
              z-20
              w-20
              bg-gradient-to-l
              from-[#4F1720]
              to-transparent

              md:w-40
            "
          />

          <div
            className="
              luxo-marcas-track-right
              flex
              w-max
              items-center
              gap-7
              opacity-55
            "
          >
            {[...marcasDuplicadas].reverse().map((marca, index) => (
              <span
                key={`${marca}-secondary-${index}`}
                className="
                  whitespace-nowrap
                  px-5
                  font-serif
                  text-[18px]
                  italic
                  tracking-[0.02em]
                  text-[#D6BB8B]

                  md:text-[20px]
                "
              >
                {marca}
              </span>
            ))}
          </div>
        </div>

        {/* =====================================
            CONTEÚDO EDITORIAL
        ====================================== */}
        <div
          className="
            relative
            z-10
            mx-auto
            mt-16
            w-full
            max-w-[90rem]
            px-5

            sm:px-6

            md:px-8
          "
        >
          <div
            className="
              grid
              gap-5

              lg:grid-cols-3
            "
          >
            {/* TRADIÇÃO */}
            <article
              className="
                group
                relative
                overflow-hidden
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

                md:p-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  luxo-marcas-card-light
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#C7A87A]/9
                  blur-[55px]
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#D6BB8B]
                  "
                >
                  Tradição
                </p>

                <h3
                  className="
                    mt-4
                    text-[#F7F3EF]
                  "
                >
                  História que atravessa gerações
                </h3>

                <p
                  className="
                    mt-4
                    text-[12px]
                    font-light
                    leading-7
                    text-[#D3C3C0]

                    md:text-[13px]
                  "
                >
                  Algumas marcas construíram séculos de conhecimento, técnica e
                  identidade, tornando seus relógios reconhecíveis muito além do
                  próprio logotipo.
                </p>
              </div>
            </article>

            {/* INOVAÇÃO */}
            <article
              className="
                group
                relative
                overflow-hidden
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

                md:p-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  luxo-marcas-card-light
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#C7A87A]/9
                  blur-[55px]
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#D6BB8B]
                  "
                >
                  Inovação
                </p>

                <h3
                  className="
                    mt-4
                    text-[#F7F3EF]
                  "
                >
                  Engenharia como assinatura
                </h3>

                <p
                  className="
                    mt-4
                    text-[12px]
                    font-light
                    leading-7
                    text-[#D3C3C0]

                    md:text-[13px]
                  "
                >
                  Calibres, complicações, materiais e soluções técnicas
                  transformaram determinadas maisons em referências dentro da
                  relojoaria mundial.
                </p>
              </div>
            </article>

            {/* IDENTIDADE */}
            <article
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#C7A87A]/26
                bg-[#C7A87A]/9
                p-7
                backdrop-blur-xl
                transition-all
                duration-500

                hover:-translate-y-1
                hover:bg-[#C7A87A]/13

                md:p-9
              "
            >
              <div
                aria-hidden="true"
                className="
                  luxo-marcas-card-light
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#D6BB8B]/12
                  blur-[55px]
                "
              />

              <div className="relative z-10">
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#D6BB8B]
                  "
                >
                  Identidade
                </p>

                <h3
                  className="
                    mt-4
                    text-[#F7F3EF]
                  "
                >
                  Designs que se tornam ícones
                </h3>

                <p
                  className="
                    mt-4
                    text-[12px]
                    font-light
                    leading-7
                    text-[#D3C3C0]

                    md:text-[13px]
                  "
                >
                  Algumas referências se tornam reconhecíveis pelo desenho da
                  caixa, mostrador, pulseira ou proporções, criando uma
                  identidade própria.
                </p>
              </div>
            </article>
          </div>

          {/* OBSERVAÇÃO */}
          <div
            className="
              mt-12
              grid
              gap-6
              overflow-hidden
              rounded-[2rem]
              border
              border-[#C7A87A]/20
              bg-white/[0.045]
              px-7
              py-8
              backdrop-blur-xl

              md:px-10
              md:py-9

              lg:grid-cols-[0.75fr_1.25fr]
              lg:items-center
            "
          >
            <div>
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7A87A]/25
                  bg-[#C7A87A]/9
                "
              >
                <Sparkles
                  size={19}
                  strokeWidth={1.2}
                  className="text-[#D6BB8B]"
                />
              </div>

              <p
                className="
                  mt-5
                  font-serif
                  text-[22px]
                  leading-tight
                  text-[#F7F3EF]
                "
              >
                A marca importa, mas a referência também.
              </p>
            </div>

            <p
              className="
                text-[12px]
                font-light
                leading-7
                text-[#D3C3C0]

                md:text-[13px]
              "
            >
              Dentro de uma mesma maison existem coleções, movimentos,
              materiais, épocas e referências muito diferentes. Por isso, dois
              relógios da mesma marca podem ter características, histórias e
              relevância completamente distintas.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        /* =========================================
           HALO
        ========================================= */

        .luxo-marcas-halo {
          animation: luxoMarcasHalo 7s ease-in-out infinite;
        }

        @keyframes luxoMarcasHalo {
          0%,
          100% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(0.94);
          }

          50% {
            opacity: 0.82;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }

        /* =========================================
           COROA
        ========================================= */

        .luxo-marcas-crown {
          animation: luxoMarcasCrown 2.6s ease-in-out infinite;
        }

        @keyframes luxoMarcasCrown {
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

        /* =========================================
           TICKER ESQUERDA
        ========================================= */

        .luxo-marcas-track-left {
          animation: luxoMarcasLeft 34s linear infinite;
          will-change: transform;
        }

        @keyframes luxoMarcasLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =========================================
           TICKER DIREITA
        ========================================= */

        .luxo-marcas-track-right {
          animation: luxoMarcasRight 42s linear infinite;
          will-change: transform;
        }

        @keyframes luxoMarcasRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }

        /* =========================================
           LUZ DOS CARDS
        ========================================= */

        .luxo-marcas-card-light {
          opacity: 0.5;
          transition:
            opacity 0.6s ease,
            transform 0.6s ease;
        }

        article:hover .luxo-marcas-card-light {
          opacity: 1;
          transform: scale(1.18);
        }
      `}</style>
    </>
  );
}