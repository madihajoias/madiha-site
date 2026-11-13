import Image from 'next/image';

export default function AtendimentoHoraMarcadaVogueSection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5521993530012';

  const whatsappMessage =
    'Olá, gostaria de agendar um atendimento com hora marcada na Madiha Maison no Vogue Square.';

  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="vogue-square-atendimento"
      aria-labelledby="vogue-square-atendimento-title"
      className="
        relative
        overflow-hidden
        bg-[#FCFAF7]
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
          bg-[radial-gradient(circle_at_14%_18%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(214,187,139,0.11),transparent_34%)]
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
            grid
            gap-8
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-stretch
          "
        >
          {/* IMAGEM */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.5rem]
              border
              border-[#A17D4F]/14
              bg-[#F7F3EF]
              shadow-[0_28px_72px_rgba(96,72,45,0.08)]
            "
          >
            <div className="relative aspect-square w-full">
              <Image
                src="/servicos/atendimento-hora-marcada/madiha-vogue-square-atendimento.webp"
                alt="Entrada da Madiha Maison no Vogue Square, Barra da Tijuca"
                fill
                sizes="
                  (max-width: 1024px) 100vw,
                  50vw
                "
                className="
                  object-cover
                  object-center
                "
              />
            </div>

            {/* LEGENDA */}
            <div
              className="
                absolute
                bottom-5
                left-5
                right-5
                rounded-[1.35rem]
                border
                border-white/20
                bg-[#332A2B]/80
                px-5
                py-4
                backdrop-blur-md
              "
            >
              <p
                className="
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#D6BB8B]
                "
              >
                Madiha Maison
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[20px]
                  text-[#F7F3EF]
                "
              >
                Vogue Square • Barra da Tijuca
              </p>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div
            className="
              rounded-[2.5rem]
              border
              border-[#A17D4F]/14
              bg-[#F7F3EF]
              p-8
              shadow-[0_24px_64px_rgba(96,72,45,0.05)]
              md:p-10
              lg:p-12
            "
          >
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#A17D4F]
              "
            >
              Atendimento no Vogue Square
            </p>

            <h2
              id="vogue-square-atendimento-title"
              className="
                mt-6
                max-w-[700px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#332A2B]
                sm:text-[3.7rem]
                md:text-[4.2rem]
              "
            >
              Um ambiente preparado para receber você com hora marcada.
            </h2>

            <p
              className="
                mt-7
                max-w-[650px]
                text-[13px]
                font-light
                leading-7
                text-[#675C5D]
                md:text-[14px]
                md:leading-8
              "
            >
              A Madiha Maison recebe seus clientes no Vogue Square, na Barra da
              Tijuca, em um ambiente profissional pensado para avaliações e
              atendimentos que exigem atenção, discrição e organização.
            </p>

            <p
              className="
                mt-5
                max-w-[620px]
                text-[10px]
                font-light
                leading-6
                text-[#7B6E6F]
              "
            >
              O horário marcado ajuda a preservar a privacidade do atendimento
              e permite que a equipe organize previamente o tempo necessário para
              avaliar a peça com mais tranquilidade.
            </p>

            {/* PILARES */}
            <div
              className="
                mt-9
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              {[
                ['Segurança', 'Ambiente profissional'],
                ['Privacidade', 'Atendimento reservado'],
                ['Transparência', 'Critérios explicados'],
                ['Localização', 'Vogue Square'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="
                    rounded-[1.4rem]
                    border
                    border-[#A17D4F]/10
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <p
                    className="
                      text-[7px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#A17D4F]
                    "
                  >
                    {label}
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[18px]
                      text-[#332A2B]
                    "
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* DESTAQUE */}
            <div
              className="
                mt-8
                rounded-[1.6rem]
                border
                border-[#A17D4F]/14
                bg-[linear-gradient(145deg,#E7D1AA_0%,#F1E2C8_52%,#DEC296_100%)]
                px-6
                py-6
              "
            >
              <p
                className="
                  font-serif
                  text-[21px]
                  leading-snug
                  text-[#332A2B]
                "
              >
                A avaliação acontece com você presente, acompanhando o processo
                e recebendo as informações necessárias para decidir com clareza.
              </p>
            </div>

            {/* CTA */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-[56px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B99154]
                  bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
                  px-8
                  text-center
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#332A2B]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_18px_42px_rgba(96,72,45,0.12)]
                "
              >
                Agendar atendimento
              </a>

              <a
                href="#o-que-levar-atendimento"
                className="
                  inline-flex
                  min-h-[56px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A17D4F]/18
                  bg-[#FCFAF7]
                  px-8
                  text-center
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#5F5350]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#A17D4F]/32
                "
              >
                O que levar
              </a>
            </div>
          </div>
        </div>

        {/* FAIXA INFERIOR */}
        <div
          className="
            mt-10
            grid
            gap-7
            overflow-hidden
            rounded-[2.15rem]
            border
            border-[#A17D4F]/15
            bg-[#332A2B]
            p-8
            shadow-[0_24px_64px_rgba(51,42,43,0.10)]
            md:p-10
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
                tracking-[0.22em]
                text-[#D6BB8B]
              "
            >
              Antes do atendimento
            </p>

            <h3
              className="
                mt-4
                max-w-[900px]
                font-serif
                text-[2rem]
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Algumas informações e documentos podem ajudar durante a avaliação.
            </h3>
          </div>

          <a
            href="#o-que-levar-atendimento"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#D6BB8B]
              bg-[linear-gradient(135deg,#B99154_0%,#D8BA82_48%,#F0D59D_100%)]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#332A2B]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            O que levar
          </a>
        </div>
      </div>
    </section>
  );
}