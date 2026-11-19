'use client';

import {
  BadgeCheck,
  EyeOff,
  Handshake,
  LockKeyhole,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

export default function CompraRelogiosSegurancaSection() {
  const pilares = [
    {
      icon: EyeOff,
      titulo: 'Atendimento reservado',
      texto:
        'A avaliação é conduzida de forma discreta, em ambiente adequado e com atenção individual à peça apresentada.',
    },
    {
      icon: UserCheck,
      titulo: 'Análise individual',
      texto:
        'Cada relógio é observado em seu próprio contexto, sem avaliações genéricas ou comparações simplificadas.',
    },
    {
      icon: LockKeyhole,
      titulo: 'Privacidade',
      texto:
        'As informações relacionadas à peça e à negociação são tratadas com discrição durante todo o atendimento.',
    },
    {
      icon: Handshake,
      titulo: 'Proposta clara',
      texto:
        'Após a análise, a proposta é apresentada de forma objetiva para que você possa decidir com tranquilidade.',
    },
  ];

  return (
    <section
      id="seguranca-na-negociacao"
      aria-labelledby="seguranca-relogios-title"
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
          bg-[radial-gradient(circle_at_18%_20%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_85%_72%,rgba(90,16,23,0.06),transparent_34%)]
        "
      />

      {/* LUZ */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[48%]
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
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
                border-[#C7A87A]/25
                bg-[#EFE4D1]/70
                px-4
                py-3
              "
            >
              <ShieldCheck
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
                Segurança e discrição
              </p>
            </div>

            <h2
              id="seguranca-relogios-title"
              className="
                mt-5
                max-w-[680px]
                text-[#4F1720]
              "
            >
              Uma negociação que respeita o valor da sua peça
            </h2>
          </div>

          <p
            className="
              max-w-[650px]
              text-[14px]
              font-light
              leading-8
              text-[#725D58]
              md:text-[15px]
            "
          >
            Relógios de luxo exigem cuidado não apenas na avaliação, mas também
            na forma como o atendimento é conduzido. Por isso, a Madiha Maison
            trabalha com discrição, clareza e análise individual.
          </p>
        </div>

        {/* BLOCO CENTRAL */}
        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-[0.78fr_1.22fr]
          "
        >
          {/* DESTAQUE */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.2rem]
              border
              border-[#C7A87A]/28
              bg-[#4F1720]
              p-8
              shadow-[0_26px_70px_rgba(63,38,26,0.14)]
              md:p-10
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
                bg-[#C7A87A]/14
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
                  border-[#C7A87A]/28
                  bg-[#C7A87A]/10
                  motion-safe:animate-[pulse_4s_ease-in-out_infinite]
                "
              >
                <BadgeCheck
                  size={28}
                  strokeWidth={1.2}
                  className="text-[#D6BB8B]"
                />
              </div>

              <p
                className="
                  mt-8
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#D6BB8B]
                "
              >
                Atendimento Madiha Maison
              </p>

              <p
                className="
                  mt-4
                  max-w-[440px]
                  font-serif
                  text-[24px]
                  leading-tight
                  text-[#F7F3EF]
                  md:text-[28px]
                "
              >
                Sem exposição. Sem pressão. Sem obrigação de venda.
              </p>

              <p
                className="
                  mt-5
                  max-w-[470px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D3C3C0]
                  md:text-[13px]
                "
              >
                Você conhece a avaliação e a proposta antes de decidir. A
                negociação só avança se houver concordância.
              </p>

              <div
                className="
                  mt-8
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-[#C7A87A]/60
                  to-transparent
                "
              />

              <p
                className="
                  mt-6
                  text-[11px]
                  font-light
                  leading-6
                  text-[#C9B8B5]
                "
              >
                Atendimento presencial no Vogue Square, Barra da Tijuca.
              </p>
            </div>
          </div>

          {/* PILARES */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {pilares.map(({ icon: Icon, titulo, texto }, index) => (
              <article
                key={titulo}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#5A1017]/8
                  bg-white/55
                  p-7
                  shadow-[0_18px_55px_rgba(63,38,26,0.05)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#C7A87A]/35
                  hover:shadow-[0_28px_70px_rgba(63,38,26,0.09)]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-36
                    w-36
                    rounded-full
                    bg-[#C7A87A]/8
                    blur-[45px]
                    transition-all
                    duration-500
                    group-hover:bg-[#C7A87A]/16
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                    "
                  >
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7A87A]/28
                        bg-[#EFE4D1]
                        transition-all
                        duration-500
                        group-hover:rotate-6
                        group-hover:scale-110
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.2}
                        className="text-[#A17D4F]"
                      />
                    </div>

                    <span
                      className="
                        font-serif
                        text-[25px]
                        text-[#C7A87A]/65
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-6
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
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA DE CONTINUIDADE */}
        <div
          className="
            mt-14
            flex
            flex-col
            items-center
            text-center
          "
        >
          <p
            className="
              max-w-[660px]
              font-serif
              text-[20px]
              leading-tight
              text-[#4F1720]
              md:text-[22px]
            "
          >
            Seu relógio pode ser avaliado com discrição e atendimento
            individual.
          </p>

          <a
            href="#localizacao"
            className="
              mt-7
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              bg-[#4F1720]
              px-8
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#F7F3EF]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#5A1017]
            "
          >
            Conhecer o atendimento
          </a>
        </div>
      </div>
    </section>
  );
}