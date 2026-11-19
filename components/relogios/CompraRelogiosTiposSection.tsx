'use client';

import {
  Crown,
  Diamond,
  Gauge,
  Gem,
  History,
  ShieldCheck,
  Sparkles,
  Watch,
} from 'lucide-react';

export default function CompraRelogiosTiposSection() {
  const tipos = [
    {
      icon: Crown,
      titulo: 'Relógios de luxo',
      texto:
        'Modelos de marcas reconhecidas, peças contemporâneas e referências com presença consolidada no mercado.',
    },
    {
      icon: History,
      titulo: 'Relógios vintage',
      texto:
        'Peças antigas e referências descontinuadas podem ser avaliadas considerando idade, conservação e contexto.',
    },
    {
      icon: Diamond,
      titulo: 'Relógios com diamantes',
      texto:
        'Modelos com diamantes ou outras pedras podem exigir uma leitura conjunta entre relógio, materiais e ornamentação.',
    },
    {
      icon: Gem,
      titulo: 'Relógios em ouro',
      texto:
        'Compramos relógios de marcas reconhecidas em ouro, inclusive peças com sinais de uso, desgaste ou em diferentes estados de conservação.',
    },
    {
      icon: Gauge,
      titulo: 'Relógios mecânicos',
      texto:
        'Movimentos automáticos e manuais podem ser analisados conforme funcionamento, construção e características do modelo.',
    },
    {
      icon: Watch,
      titulo: 'Relógios de coleção',
      texto:
        'Referências especiais, séries limitadas e peças procuradas por colecionadores podem receber análise individual.',
    },
  ];

  return (
    <section
      id="relogios-que-compramos"
      aria-labelledby="tipos-relogios-title"
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
          bg-[radial-gradient(circle_at_18%_20%,rgba(199,168,122,0.16),transparent_30%),radial-gradient(circle_at_82%_70%,rgba(90,16,23,0.065),transparent_35%)]
        "
      />

      {/* ELEMENTO LUMINOSO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[10%]
          top-[10%]
          h-[440px]
          w-[440px]
          rounded-full
          bg-[#C7A87A]/10
          blur-[110px]
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
              <Sparkles
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
                Relógios que compramos
              </p>
            </div>

            <h2
              id="tipos-relogios-title"
              className="
                mt-5
                max-w-[680px]
                text-[#4F1720]
              "
            >
              Peças diferentes exigem leituras diferentes
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
            Não existe um único perfil de relógio. Marca, época, materiais,
            mecanismo, condição e raridade podem mudar completamente a forma
            como uma peça deve ser analisada.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-14
            grid
            gap-4
            md:mt-16
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {tipos.map(({ icon: Icon, titulo, texto }, index) => (
            <article
              key={titulo}
              className="
                group
                relative
                min-h-[275px]
                overflow-hidden
                rounded-[2rem]
                border
                border-[#5A1017]/8
                bg-white/55
                p-7
                shadow-[0_18px_55px_rgba(63,38,26,0.05),inset_0_1px_0_rgba(255,255,255,0.78)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#C7A87A]/34
                hover:shadow-[0_28px_75px_rgba(63,38,26,0.10)]
                md:p-8
              "
            >
              {/* EFEITO DE LUZ */}
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
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#C7A87A]/28
                      bg-[#EFE4D1]
                      shadow-[0_10px_30px_rgba(90,16,23,0.07)]
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.2}
                      className="text-[#A17D4F]"
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

                <h3
                  className="
                    mt-7
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
                    mt-7
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-[#C7A87A]/40
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:from-[#C7A87A]/80
                  "
                />
              </div>
            </article>
          ))}
        </div>

        {/* DESTAQUE RELÓGIOS EM OURO */}
        <div
          className="
            mt-10
            overflow-hidden
            rounded-[2rem]
            border
            border-[#C7A87A]/28
            bg-[#4F1720]
            px-7
            py-8
            text-center
            shadow-[0_22px_60px_rgba(63,38,26,0.12)]
            md:px-10
            md:py-10
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              h-0
              w-0
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
            Relógios em ouro
          </p>

          <p
            className="
              mx-auto
              mt-4
              max-w-[820px]
              font-serif
              text-[22px]
              leading-tight
              text-[#F7F3EF]
              md:text-[26px]
            "
          >
            Compramos relógios de marca em ouro em qualquer estado de
            conservação.
          </p>

          <p
            className="
              mx-auto
              mt-4
              max-w-[760px]
              text-[12px]
              font-light
              leading-7
              text-[#D3C3C0]
              md:text-[13px]
            "
          >
            Mesmo peças usadas, antigas, com desgaste, sinais de uso, sem caixa
            ou sem documentação podem ser analisadas individualmente.
          </p>
        </div>

        {/* CHAMADA FINAL */}
        <div
          className="
            mt-10
            grid
            gap-6
            overflow-hidden
            rounded-[2rem]
            border
            border-[#C7A87A]/22
            bg-[#EFE4D1]/70
            px-7
            py-8
            backdrop-blur-xl
            md:px-10
            md:py-9
            lg:grid-cols-[1fr_auto]
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
                text-[#A17D4F]
              "
            >
              Não encontrou seu modelo?
            </p>

            <p
              className="
                mt-3
                max-w-[760px]
                font-serif
                text-[21px]
                leading-tight
                text-[#4F1720]
              "
            >
              Outras marcas, referências e estilos também podem ser avaliados.
            </p>
          </div>

          <a
            href="#localizacao"
            className="
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
            Avaliar minha peça
          </a>
        </div>

        {/* SCROLL CUE */}
        <div
          className="
            mt-12
            flex
            justify-center
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              text-[#A17D4F]
            "
          >
            <ShieldCheck
              size={16}
              strokeWidth={1.2}
              className="motion-safe:animate-pulse"
            />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
              "
            >
              Atendimento reservado no Vogue Square
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}