'use client';

import {
  useEffect,
  useRef,
} from 'react';

const marcas = [
  'Cartier',
  'Van Cleef & Arpels',
  'Bvlgari',
  'Tiffany & Co.',
  'Harry Winston',
  'Boucheron',
  'Graff',
  'Chopard',
  'Chaumet',
  'Buccellati',
  'Vivara',
  'Monte Carlo',
  'Dryzun',
  'Tereza Xavier',
  'H.Stern',
  'Sauer',
  'Antonio Bernardo',
];

export default function CompraJoiasMarcasTicker() {
  const trackRef =
    useRef<HTMLDivElement | null>(
      null
    );

  useEffect(() => {
    const track =
      trackRef.current;

    if (!track) {
      return;
    }

    let animationFrame = 0;
    let position = 0;
    let lastTime =
      performance.now();

    /*
     * Velocidade
     *
     * Antes: 30
     * Agora: 42
     *
     * Continua elegante,
     * mas o movimento fica
     * bem mais perceptível.
     */
    const speed = 42;

    const animate = (
      currentTime: number
    ) => {
      const delta =
        currentTime -
        lastTime;

      lastTime =
        currentTime;

      position -=
        (speed * delta) /
        1000;

      const halfWidth =
        track.scrollWidth / 2;

      if (
        halfWidth > 0 &&
        Math.abs(position) >=
          halfWidth
      ) {
        position +=
          halfWidth;
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animationFrame =
      requestAnimationFrame(
        animate
      );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  const tickerItems = [
    'Madiha Maison Compra Joias',
    ...marcas,
  ];

  return (
    <section
      aria-label="Marcas de joias avaliadas pela Madiha Maison"
      className="
        relative
        z-20
        w-full
        overflow-hidden
        border-y
        border-[#C7A87A]/20
        bg-[#57151F]
      "
    >
      {/* LUZ DE FUNDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(90deg,rgba(199,168,122,0.05),transparent_24%,rgba(255,255,255,0.028)_50%,transparent_76%,rgba(199,168,122,0.05))]
        "
      />

      {/* FADE ESQUERDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          top-0
          z-20
          w-14
          bg-gradient-to-r
          from-[#57151F]
          via-[#57151F]/82
          to-transparent
          sm:w-20
          md:w-28
        "
      />

      {/* FADE DIREITO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          top-0
          z-20
          w-14
          bg-gradient-to-l
          from-[#57151F]
          via-[#57151F]/82
          to-transparent
          sm:w-20
          md:w-28
        "
      />

      {/* ÁREA DO LETREIRO */}
      <div
        className="
          relative
          flex
          min-h-[96px]
          w-full
          items-center
          overflow-hidden
          md:min-h-[108px]
        "
      >
        <div
          ref={trackRef}
          className="
            flex
            w-max
            shrink-0
            items-center
            whitespace-nowrap
          "
          style={{
            willChange:
              'transform',
          }}
        >
          {[0, 1].map(
            (copyIndex) => (
              <div
                key={
                  copyIndex
                }
                aria-hidden={
                  copyIndex ===
                  1
                }
                className="
                  flex
                  shrink-0
                  items-center
                "
              >
                {tickerItems.map(
                  (
                    item,
                    index
                  ) => {
                    const destaque =
                      index ===
                      0;

                    return (
                      <div
                        key={`${copyIndex}-${item}`}
                        className="
                          flex
                          shrink-0
                          items-center
                        "
                      >
                        <span
                          className={
                            destaque
                              ? `
                                  mx-8
                                  text-[11px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.34em]
                                  text-[#D6BB8B]
                                  md:mx-11
                                  md:text-[12px]
                                `
                              : `
                                  mx-8
                                  font-serif
                                  text-[19px]
                                  font-normal
                                  tracking-[0.025em]
                                  text-[#F7F3EF]
                                  md:mx-10
                                  md:text-[22px]
                                `
                          }
                        >
                          {
                            item
                          }
                        </span>

                        <span
                          aria-hidden="true"
                          className="
                            mx-1
                            font-serif
                            text-[16px]
                            text-[#C7A87A]/65
                          "
                        >
                          •
                        </span>

                        {index ===
                          tickerItems.length -
                            1 && (
                          <span
                            aria-hidden="true"
                            className="
                              mx-6
                              h-px
                              w-14
                              bg-[#C7A87A]/35
                              md:mx-8
                              md:w-18
                            "
                          />
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}