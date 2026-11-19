'use client';

import { Sparkles, Watch } from 'lucide-react';

export default function CompraRelogiosMarcasSection() {
  const marcas = [
    'Rolex',
    'Cartier',
    'Omega',
    'Patek Philippe',
    'Audemars Piguet',
    'Vacheron Constantin',
    'IWC',
    'Jaeger-LeCoultre',
    'Breitling',
    'TAG Heuer',
    'Panerai',
    'Bulgari',
  ];

  const marcasDuplicadas = [...marcas, ...marcas];

  return (
    <>
      <section
        id="marcas-de-relogios"
        aria-labelledby="marcas-relogios-title"
        className="
          relative
          overflow-hidden
          bg-[#4F1720]
          py-24
          md:py-32
          lg:py-36
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_18%_18%,rgba(199,168,122,0.12),transparent_30%),radial-gradient(circle_at_84%_76%,rgba(122,22,34,0.60),transparent_34%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[40%]
            h-[620px]
            w-[620px]
            -translate-x-1/2
            rounded-full
            bg-[#C7A87A]/7
            blur-[140px]
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
            px-6
            md:px-8
          "
        >
          <div
            className="
              mx-auto
              max-w-[850px]
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
                Alta relojoaria
              </p>
            </div>

            <h2
              id="marcas-relogios-title"
              className="
                mt-6
                text-[#F7F3EF]
              "
            >
              Compramos relógios de grandes marcas
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[700px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]
                md:text-[15px]
              "
            >
              Avaliamos relógios de marcas reconhecidas internacionalmente,
              referências contemporâneas, vintage e peças de coleção.
            </p>
          </div>
        </div>

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
              flex
              w-max
              items-center
              gap-4
              animate-[marqueeLeft_34s_linear_infinite]
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

        <div
          className="
            relative
            mt-4
            overflow-hidden
            py-2
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
              flex
              w-max
              items-center
              gap-6
              opacity-55
              animate-[marqueeRight_42s_linear_infinite]
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

        <div
          className="
            relative
            z-10
            mx-auto
            mt-16
            w-full
            max-w-[90rem]
            px-6
            md:px-8
          "
        >
          <div
            className="
              grid
              gap-5
              lg:grid-cols-2
            "
          >
            <div
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
                  absolute
                  -right-20
                  -top-20
                  h-44
                  w-44
                  rounded-full
                  bg-[#C7A87A]/8
                  blur-[50px]
                  transition-all
                  duration-700
                  group-hover:scale-125
                  group-hover:bg-[#C7A87A]/16
                "
              />

              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#D6BB8B]
                "
              >
                Outras marcas
              </p>

              <p
                className="
                  mt-4
                  max-w-[520px]
                  font-serif
                  text-[22px]
                  leading-tight
                  text-[#F7F3EF]
                "
              >
                Seu relógio não aparece nesta lista?
              </p>

              <p
                className="
                  mt-4
                  max-w-[540px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                  md:text-[13px]
                "
              >
                A lista é apenas uma referência. Outras marcas de luxo,
                relojoaria independente e modelos especiais também podem ser
                analisados.
              </p>
            </div>

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[#C7A87A]/30
                bg-[#C7A87A]/10
                p-7
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-[#C7A87A]/14
                md:p-9
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
                  bg-[#D6BB8B]/12
                  blur-[55px]
                "
              />

              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#D6BB8B]
                "
              >
                Atenção especial
              </p>

              <p
                className="
                  mt-4
                  max-w-[550px]
                  font-serif
                  text-[22px]
                  leading-tight
                  text-[#F7F3EF]
                "
              >
                Relógio de marca em ouro? Avaliamos mesmo em qualquer estado de
                conservação.
              </p>

              <p
                className="
                  mt-4
                  max-w-[540px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                  md:text-[13px]
                "
              >
                Peças antigas, usadas, desgastadas, paradas ou sem documentação
                podem ser analisadas individualmente quando se trata de relógios
                de marcas reconhecidas em ouro.
              </p>
            </div>
          </div>

          <div
            className="
              mt-14
              flex
              flex-col
              items-center
              text-center
            "
          >
            <span
              className="
                h-14
                w-px
                bg-gradient-to-b
                from-[#C7A87A]/70
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
              Cada peça merece uma análise individual
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marqueeLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeRight {
          from {
            transform: translateX(-50%);
          }

          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}