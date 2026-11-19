'use client';

import {
  BadgeCheck,
  Box,
  FileCheck2,
  Gem,
  History,
  Search,
  ShieldCheck,
  Watch,
} from 'lucide-react';

export default function CompraRelogiosValorSection() {
  const fatores = [
    {
      icon: BadgeCheck,
      titulo: 'Marca e referência',
      texto:
        'Marca, coleção, modelo e referência ajudam a identificar corretamente a peça e seu posicionamento.',
    },
    {
      icon: Watch,
      titulo: 'Movimento',
      texto:
        'Mecanismo, funcionamento e características técnicas fazem parte da análise do relógio.',
    },
    {
      icon: Gem,
      titulo: 'Materiais',
      texto:
        'Ouro, aço, platina, cerâmica, titânio, pedras e outros materiais podem influenciar a leitura da peça.',
    },
    {
      icon: Search,
      titulo: 'Estado de conservação',
      texto:
        'Sinais de uso, polimentos, desgaste, integridade e eventuais intervenções são considerados na avaliação.',
    },
    {
      icon: ShieldCheck,
      titulo: 'Originalidade',
      texto:
        'A coerência entre caixa, mostrador, pulseira, fecho e demais componentes ajuda a compreender a integridade do conjunto.',
    },
    {
      icon: FileCheck2,
      titulo: 'Documentação',
      texto:
        'Certificados, cartões, notas e outros documentos podem contribuir para contextualizar melhor o relógio.',
    },
    {
      icon: Box,
      titulo: 'Caixa e acessórios',
      texto:
        'Caixa original, manual, elos adicionais e acessórios relacionados podem ser relevantes durante a análise.',
    },
    {
      icon: History,
      titulo: 'Histórico da peça',
      texto:
        'Procedência, manutenção, revisões e informações disponíveis sobre a trajetória do relógio podem ajudar na avaliação.',
    },
  ];

  return (
    <>
      <section
        id="valor-do-relogio"
        aria-labelledby="valor-relogio-title"
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
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[radial-gradient(circle_at_14%_18%,rgba(122,22,34,0.78),transparent_34%),radial-gradient(circle_at_84%_72%,rgba(199,168,122,0.14),transparent_30%),linear-gradient(145deg,#4F1720_0%,#5A1017_48%,#351016_100%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
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
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.34em]
                  text-[#D6BB8B]
                  md:text-[10px]
                "
              >
                Referência comercial
              </p>

              <h2
                id="valor-relogio-title"
                className="
                  mt-5
                  max-w-[680px]
                  text-[#F7F3EF]
                "
              >
                O que influencia o valor de um relógio
              </h2>
            </div>

            <p
              className="
                max-w-[640px]
                text-[14px]
                font-light
                leading-8
                text-[#D3C3C0]
                md:text-[15px]
              "
            >
              O valor de um relógio não depende apenas do nome gravado no
              mostrador. A avaliação considera um conjunto de fatores técnicos,
              estéticos e documentais.
            </p>
          </div>

          <div
            className="
              my-14
              h-px
              w-full
              overflow-hidden
              bg-white/8
              md:my-16
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
                animate-[travel_5s_ease-in-out_infinite]
              "
            />
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {fatores.map(({ icon: Icon, titulo, texto }, index) => (
              <article
                key={titulo}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-white/[0.045]
                  p-7
                  shadow-[0_18px_50px_rgba(20,5,8,0.12),inset_0_1px_0_rgba(255,255,255,0.04)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#C7A87A]/35
                  hover:bg-white/[0.065]
                  hover:shadow-[0_28px_75px_rgba(20,5,8,0.20)]
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-14
                    -top-14
                    h-32
                    w-32
                    rounded-full
                    bg-[#C7A87A]/8
                    blur-[42px]
                    transition-all
                    duration-500
                    group-hover:bg-[#C7A87A]/18
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
                        border-[#C7A87A]/22
                        bg-[#C7A87A]/8
                        transition-all
                        duration-500
                        group-hover:rotate-6
                        group-hover:scale-110
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.2}
                        className="text-[#D6BB8B]"
                      />
                    </div>

                    <span
                      className="
                        font-serif
                        text-[26px]
                        leading-none
                        text-[#C7A87A]/65
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[#F7F3EF]">
                    {titulo}
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
                    {texto}
                  </p>

                  <div
                    className="
                      mt-7
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-[#C7A87A]/35
                      to-transparent
                      transition-all
                      duration-500
                      group-hover:from-[#C7A87A]/70
                    "
                  />
                </div>
              </article>
            ))}
          </div>

          <div
            className="
              mt-14
              overflow-hidden
              rounded-[2rem]
              border
              border-[#C7A87A]/20
              bg-white/[0.045]
              px-7
              py-8
              backdrop-blur-xl
              md:mt-16
              md:px-10
              md:py-9
            "
          >
            <div
              className="
                grid
                gap-6
                lg:grid-cols-[0.7fr_1.3fr]
                lg:items-center
              "
            >
              <div>
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#D6BB8B]
                  "
                >
                  Importante
                </p>

                <p
                  className="
                    mt-3
                    font-serif
                    text-[21px]
                    leading-tight
                    text-[#F7F3EF]
                  "
                >
                  Cada relógio precisa ser analisado individualmente.
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
                Mesmo relógios da mesma referência podem apresentar diferenças
                relevantes de conservação, documentação, componentes e histórico.
                Por isso, a avaliação presencial é essencial antes da definição de
                uma proposta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes travel {
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
      `}</style>
    </>
  );
}