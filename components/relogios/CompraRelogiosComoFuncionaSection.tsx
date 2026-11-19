'use client';

import {
  ArrowDown,
  BadgeCheck,
  Banknote,
  SearchCheck,
} from 'lucide-react';

export default function CompraRelogiosComoFuncionaSection() {
  const etapas = [
    {
      numero: '01',
      icon: SearchCheck,
      titulo: 'Avaliação da peça',
      texto:
        'Analisamos marca, referência, movimento, materiais, estado de conservação, documentação e demais características do relógio.',
    },
    {
      numero: '02',
      icon: BadgeCheck,
      titulo: 'Apresentação da proposta',
      texto:
        'Após a análise, apresentamos uma proposta comercial de forma clara, considerando as características específicas da peça.',
    },
    {
      numero: '03',
      icon: Banknote,
      titulo: 'Pagamento após o aceite',
      texto:
        'Com a aprovação da proposta, seguimos para a conclusão da negociação e o pagamento conforme as condições apresentadas.',
    },
  ];

  return (
    <>
      <section
        id="como-funciona"
        aria-labelledby="como-funciona-relogios-title"
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
            bg-[radial-gradient(circle_at_18%_18%,rgba(199,168,122,0.15),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(90,16,23,0.07),transparent_34%)]
          "
        />

        {/* LUZ EM MOVIMENTO */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[520px]
            w-[520px]
            -translate-x-1/2
            rounded-full
            bg-[#C7A87A]/10
            blur-[120px]
            motion-safe:animate-[pulse_6s_ease-in-out_infinite]
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
              mx-auto
              max-w-[780px]
              text-center
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.34em]
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Processo de compra
            </p>

            <h2
              id="como-funciona-relogios-title"
              className="
                mt-5
                text-[#4F1720]
              "
            >
              Da avaliação à proposta
            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-[680px]
                text-[14px]
                font-light
                leading-8
                text-[#725D58]
                md:text-[15px]
              "
            >
              Um processo direto, reservado e conduzido etapa por etapa para
              que você compreenda exatamente como funciona a negociação do seu
              relógio.
            </p>
          </div>

          {/* FLUXO */}
          <div
            className="
              relative
              mt-16
              md:mt-20
            "
          >
            {/* LINHA DESKTOP */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-[10%]
                right-[10%]
                top-[42px]
                hidden
                h-px
                overflow-hidden
                bg-[#C7A87A]/22
                lg:block
              "
            >
              <div
                className="
                  h-full
                  w-1/3
                  bg-gradient-to-r
                  from-transparent
                  via-[#C7A87A]
                  to-transparent
                  animate-[scrollLine_4s_ease-in-out_infinite]
                "
              />
            </div>

            {/* LINHA MOBILE */}
            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[8%]
                left-[31px]
                top-[7%]
                w-px
                overflow-hidden
                bg-[#C7A87A]/20
                lg:hidden
              "
            >
              <div
                className="
                  h-1/3
                  w-full
                  bg-gradient-to-b
                  from-transparent
                  via-[#C7A87A]
                  to-transparent
                  animate-[scrollLineVertical_4s_ease-in-out_infinite]
                "
              />
            </div>

            <div
              className="
                grid
                gap-6
                lg:grid-cols-3
                lg:gap-5
              "
            >
              {etapas.map(({ numero, icon: Icon, titulo, texto }, index) => (
                <article
                  key={numero}
                  className="
                    group
                    relative
                    rounded-[2rem]
                    border
                    border-[#5A1017]/8
                    bg-white/55
                    p-7
                    pl-24
                    shadow-[0_18px_55px_rgba(63,38,26,0.05),inset_0_1px_0_rgba(255,255,255,0.75)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:border-[#C7A87A]/32
                    hover:shadow-[0_26px_70px_rgba(63,38,26,0.09)]
                    lg:p-8
                    lg:pt-24
                  "
                >
                  {/* ÍCONE */}
                  <div
                    className="
                      absolute
                      left-5
                      top-6
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/30
                      bg-[#EFE4D1]
                      shadow-[0_10px_30px_rgba(90,16,23,0.08)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                      lg:left-1/2
                      lg:top-3
                      lg:-translate-x-1/2
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.25}
                      className="text-[#A17D4F]"
                    />
                  </div>

                  <div className="relative z-10">
                    <p
                      className="
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#A17D4F]
                      "
                    >
                      Etapa {numero}
                    </p>

                    <h3
                      className="
                        mt-4
                        text-[#4F1720]
                      "
                    >
                      {titulo}
                    </h3>

                    <p
                      className="
                        mt-4
                        text-[12px]
                        font-light
                        leading-7
                        text-[#7A6762]
                        md:text-[13px]
                      "
                    >
                      {texto}
                    </p>

                    <div
                      className="
                        mt-6
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          h-px
                          flex-1
                          bg-gradient-to-r
                          from-[#C7A87A]/45
                          to-transparent
                        "
                      />

                      <span
                        className="
                          font-serif
                          text-[18px]
                          text-[#C7A87A]
                        "
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CONTINUE SCROLLANDO */}
          <div
            className="
              mt-16
              flex
              flex-col
              items-center
              text-center
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#A17D4F]
              "
            >
              Continue conhecendo o processo
            </p>

            <ArrowDown
              size={20}
              strokeWidth={1.25}
              className="
                mt-4
                animate-bounce
                text-[#A17D4F]
              "
            />
          </div>
        </div>
      </section>

      {/* KEYFRAMES SEM STYLED-JSX */}
      <style>{`
        @keyframes scrollLine {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateX(320%);
            opacity: 0;
          }
        }

        @keyframes scrollLineVertical {
          0% {
            transform: translateY(-130%);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(330%);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}