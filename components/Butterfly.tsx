'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

// ============================================================
// SPRITES
// ============================================================

const ASSETS = {
  // FRONTAL
  frontal: [
    '/borboleta/frontal_aberta.png',
    '/borboleta/frontal_semi.png',
    '/borboleta/frontal_fechada.png',
    '/borboleta/frontal_semi.png',
  ],

  // COSTAS
  costas: [
    '/borboleta/costas_aberta.png',
    '/borboleta/costas_semi.png',
    '/borboleta/costas_fechada.png',
    '/borboleta/costas_semi.png',
  ],

  // LATERAL DIREITA
  lateralDireita: [
    '/borboleta/lateral_direita_aberta.png',
    '/borboleta/lateral_direita_semi.png',
    '/borboleta/lateral_direita_fechada.png',
    '/borboleta/lateral_direita_semi.png',
  ],

  // LATERAL ESQUERDA
  lateralEsquerda: [
    '/borboleta/lateral_esquerda_aberta.png',
    '/borboleta/lateral_esquerda_semi.png',
    '/borboleta/lateral_esquerda_fechada.png',
    '/borboleta/lateral_esquerda_semi.png',
  ],

  // 3/4 FRONTAL DIREITA
  // Por enquanto você tem apenas a versão aberta.
  tresQuartosFrontalDireita: [
    '/borboleta/tresquartos_frontal_direita_aberta.png',
    '/borboleta/tresquartos_frontal_direita_aberta.png',
    '/borboleta/tresquartos_frontal_direita_aberta.png',
    '/borboleta/tresquartos_frontal_direita_aberta.png',
  ],

  // 3/4 FRONTAL ESQUERDA
  tresQuartosFrontalEsquerda: [
    '/borboleta/tresquartos_frontal_esquerda.png',
    '/borboleta/tresquartos_frontal_esquerda_semi.png',
    '/borboleta/tresquartos_frontal_esquerda_fechada.png',
    '/borboleta/tresquartos_frontal_esquerda_semi.png',
  ],

  // 3/4 COSTAS ESQUERDA
  tresQuartosCostasEsquerda: [
    '/borboleta/tresquartos_costas_esquerda.png',
    '/borboleta/tresquartos_costas_esquerda_semi.png',
    '/borboleta/tresquartos_costas_esquerda_fechada.png',
    '/borboleta/tresquartos_costas_esquerda_semi.png',
  ],
};

export default function Butterfly() {
  const butterflyRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);

  const currentSetRef = useRef<string[]>(ASSETS.lateralDireita);

  // ============================================================
  // PRÉ-CARREGAMENTO
  // ============================================================

  useEffect(() => {
    const images = Object.values(ASSETS).flat();

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // ============================================================
  // ANIMAÇÃO PRINCIPAL
  // ============================================================

  useEffect(() => {
    if (!butterflyRef.current || !spriteRef.current) return;

    const butterfly = butterflyRef.current;
    const sprite = spriteRef.current;

    const ctx = gsap.context(() => {
      // ========================================================
      // TROCA DE DIREÇÃO / CONJUNTO DE SPRITES
      // ========================================================

      const setDirection = (frames: string[]) => {
        currentSetRef.current = frames;

        sprite.style.backgroundImage = `url('${frames[0]}')`;
      };

      // ========================================================
      // ESTADO INICIAL
      // ========================================================

      gsap.set(butterfly, {
        x: -170,
        y: 25,
        opacity: 0,
        scale: 0.76,

        transformPerspective: 1000,
        transformOrigin: '50% 50%',

        force3D: true,
      });

      gsap.set(sprite, {
        x: 0,
        y: 0,

        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,

        scaleX: 1,
        scaleY: 1,

        transformOrigin: '50% 50%',
        force3D: true,
      });

      // ========================================================
      // MOTOR DAS ASAS
      // ========================================================

      const wings = gsap.timeline({
        repeat: -1,
      });

      for (let frame = 0; frame < 4; frame++) {
        wings
          .call(() => {
            const currentFrames = currentSetRef.current;

            if (!currentFrames.length) return;

            const safeFrame = frame % currentFrames.length;

            sprite.style.backgroundImage =
              `url('${currentFrames[safeFrame]}')`;
          })
          .to({}, {
            duration: 0.135,
          });
      }

      // ========================================================
      // OSCILAÇÃO SUTIL DO CORPO
      // ========================================================

      const bodyFloat = gsap.timeline({
        repeat: -1,
        yoyo: true,
      });

      bodyFloat.to(sprite, {
        y: -1.8,
        rotationX: 2.5,

        duration: 0.95,
        ease: 'sine.inOut',
      });

      // ========================================================
      // TIMELINE PRINCIPAL
      // ========================================================

      const flight = gsap.timeline({
        repeat: -1,
        repeatDelay: 0,
      });

      // ========================================================
      //
      // IDA: ESQUERDA → DIREITA
      //
      // ========================================================

      flight.call(
        () => {
          setDirection(ASSETS.lateralDireita);
        },
        [],
        0
      );

      // Entrada
      flight.fromTo(
        butterfly,
        {
          opacity: 0,
          scale: 0.70,
        },
        {
          opacity: 1,
          scale: 0.78,

          duration: 1.4,
          ease: 'sine.out',
        },
        0
      );

      // --------------------------------------------------------
      // TRAJETÓRIA DA IDA
      // --------------------------------------------------------

      flight.to(
        butterfly,
        {
          duration: 17,

          motionPath: {
            path: [
              { x: -150, y: 28 },
              { x: -115, y: 8 },
              { x: -75, y: -13 },
              { x: -30, y: -20 },
              { x: 20, y: -7 },
              { x: 70, y: 15 },
              { x: 120, y: 18 },
              { x: 170, y: 3 },
              { x: 215, y: -16 },
              { x: 260, y: -7 },
              { x: 305, y: -12 },
              { x: 355, y: -24 },
            ],

            curviness: 1.8,
          },

          ease: 'none',
          force3D: true,
        },
        0
      );

      // --------------------------------------------------------
      // LATERAL DIREITA → 3/4 FRONTAL DIREITA
      //
      // Pequena virada, mas ainda apontando para frente.
      // --------------------------------------------------------

      flight.call(
        () => {
          setDirection(ASSETS.tresQuartosFrontalDireita);
        },
        [],
        7.2
      );

      // --------------------------------------------------------
      // 3/4 FRONTAL DIREITA → LATERAL DIREITA
      //
      // Volta ao perfil normal antes de sair.
      // --------------------------------------------------------

      flight.call(
        () => {
          setDirection(ASSETS.lateralDireita);
        },
        [],
        10.2
      );

      // --------------------------------------------------------
      // INCLINAÇÃO CORPORAL NA IDA
      // --------------------------------------------------------

      flight.to(
        sprite,
        {
          keyframes: [
            {
              rotationZ: -4,
              rotationY: -2,
              duration: 2.5,
            },

            {
              rotationZ: 3,
              rotationY: 2,
              duration: 2.7,
            },

            {
              rotationZ: -3,
              rotationY: -2,
              duration: 2.8,
            },

            {
              rotationZ: 2,
              rotationY: 2,
              duration: 3,
            },

            {
              rotationZ: -2,
              rotationY: -1,
              duration: 3,
            },

            {
              rotationZ: 0,
              rotationY: 0,
              duration: 3,
            },
          ],

          ease: 'sine.inOut',
        },
        0
      );

      // --------------------------------------------------------
      // SAÍDA DA IDA
      // --------------------------------------------------------

      flight.to(
        butterfly,
        {
          opacity: 0,
          scale: 0.72,

          duration: 1.6,
          ease: 'sine.in',
        },
        15.4
      );

      // Intervalo
      flight.to({}, {
        duration: 2.2,
      });

      // ========================================================
      //
      // VOLTA: DIREITA → ESQUERDA
      //
      // ========================================================

      flight.set(butterfly, {
        x: 355,
        y: -20,

        opacity: 0,
        scale: 0.72,
      });

      flight.set(sprite, {
        x: 0,
        y: 0,

        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,

        scaleX: 1,
        scaleY: 1,
      });

      // IMPORTANTE:
      // A volta agora começa corretamente em perfil esquerdo.
      flight.call(() => {
        setDirection(ASSETS.lateralEsquerda);
      });

      // Entrada da volta
      flight.to(butterfly, {
        opacity: 1,
        scale: 0.78,

        duration: 1.4,
        ease: 'sine.out',
      });

      flight.addLabel('volta');

      // --------------------------------------------------------
      // TRAJETÓRIA DA VOLTA
      // --------------------------------------------------------

      flight.to(
        butterfly,
        {
          duration: 17,

          motionPath: {
            path: [
              { x: 355, y: -20 },
              { x: 325, y: -2 },
              { x: 285, y: 14 },
              { x: 240, y: 18 },
              { x: 195, y: 5 },
              { x: 150, y: -15 },
              { x: 105, y: -12 },
              { x: 60, y: 8 },
              { x: 15, y: 19 },
              { x: -30, y: 7 },
              { x: -80, y: -13 },
              { x: -155, y: 18 },
            ],

            curviness: 1.8,
          },

          ease: 'none',
          force3D: true,
        },
        'volta'
      );

      // --------------------------------------------------------
      // LATERAL ESQUERDA → 3/4 FRONTAL ESQUERDA
      // --------------------------------------------------------

      flight.call(
        () => {
          setDirection(ASSETS.tresQuartosFrontalEsquerda);
        },
        [],
        'volta+=6'
      );

      // --------------------------------------------------------
      // 3/4 FRONTAL ESQUERDA → LATERAL ESQUERDA
      // --------------------------------------------------------

      flight.call(
        () => {
          setDirection(ASSETS.lateralEsquerda);
        },
        [],
        'volta+=9'
      );

      // --------------------------------------------------------
      // INCLINAÇÃO CORPORAL NA VOLTA
      // --------------------------------------------------------

      flight.to(
        sprite,
        {
          keyframes: [
            {
              rotationZ: 4,
              rotationY: 2,
              duration: 2.5,
            },

            {
              rotationZ: -3,
              rotationY: -2,
              duration: 2.7,
            },

            {
              rotationZ: 3,
              rotationY: 2,
              duration: 2.8,
            },

            {
              rotationZ: -2,
              rotationY: -2,
              duration: 3,
            },

            {
              rotationZ: 2,
              rotationY: 1,
              duration: 3,
            },

            {
              rotationZ: 0,
              rotationY: 0,
              duration: 3,
            },
          ],

          ease: 'sine.inOut',
        },
        'volta'
      );

      // --------------------------------------------------------
      // SAÍDA FINAL
      // --------------------------------------------------------

      flight.to(
        butterfly,
        {
          opacity: 0,
          scale: 0.70,

          duration: 1.6,
          ease: 'sine.in',
        },
        'volta+=15.4'
      );

      flight.to({}, {
        duration: 2.5,
      });

      // ========================================================
      // VARIAÇÃO LEVE DAS ASAS
      // ========================================================

      const wingVariation = gsap.timeline({
        repeat: -1,
      });

      wingVariation
        .to(wings, {
          timeScale: 1.12,
          duration: 2,
          ease: 'sine.inOut',
        })

        .to(wings, {
          timeScale: 0.92,
          duration: 2.3,
          ease: 'sine.inOut',
        })

        .to(wings, {
          timeScale: 1,
          duration: 2,
          ease: 'sine.inOut',
        });

    }, butterfly);

    // ==========================================================
    // CLEANUP
    // ==========================================================

    return () => {
      ctx.revert();
    };
  }, []);

  // ============================================================
  // HTML
  // ============================================================

  return (
    <div
      ref={butterflyRef}
      className="
        absolute
        top-0
        left-0
        z-50
        pointer-events-none

        w-[2.2rem]
        h-[2.2rem]

        md:w-[2.9rem]
        md:h-[2.9rem]

        will-change-transform
      "
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        ref={spriteRef}
        className="
          w-full
          h-full

          bg-contain
          bg-center
          bg-no-repeat

          drop-shadow-lg

          will-change-transform
        "
        style={{
          backgroundImage:
            `url('${ASSETS.lateralDireita[0]}')`,

          transformOrigin: 'center center',
        }}
      />
    </div>
  );
}