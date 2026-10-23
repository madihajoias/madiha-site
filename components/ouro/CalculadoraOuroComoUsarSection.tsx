const steps = [
  {
    number: '01',
    title: 'Informe o peso',
    text:
      'Digite o peso aproximado do ouro em gramas. Esse dado será utilizado como base para a simulação.',
  },
  {
    number: '02',
    title: 'Escolha o tipo e o teor',
    text:
      'Selecione se o ouro é amarelo ou branco e informe o teor correspondente, como 18k, 14k ou outro disponível.',
  },
  {
    number: '03',
    title: 'Consulte a estimativa',
    text:
      'A calculadora cruza peso, teor e cotação para apresentar uma referência comercial inicial do seu ouro.',
  },
];

export default function CalculadoraOuroComoUsarSection() {
  return (
    <section
      id="como-usar"
      aria-labelledby="como-usar-calculadora-title"
      className="
        relative
        overflow-hidden
        bg-[#F5EBDD]
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.84),transparent_30%),radial-gradient(circle_at_88%_78%,rgba(199,168,122,0.15),transparent_34%)]
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
        {/* CABEÇALHO */}
        <div
          className="
            grid
            gap-10
            lg:grid-cols-[0.85fr_1.15fr]
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
                text-[#8F6E3F]
                md:text-[10px]
              "
            >
              Como usar
            </p>

            <h2
              id="como-usar-calculadora-title"
              className="
                mt-6
                max-w-[620px]
                font-serif
                text-[3rem]
                font-normal
                leading-[1.02]
                tracking-[-0.025em]
                text-[#765525]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Calcule em
              <br />
              poucos passos.
            </h2>
          </div>

          <div
            className="
              max-w-[620px]
              lg:justify-self-end
            "
          >
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#806C50]
                md:text-[15px]
                md:leading-8
              "
            >
              A calculadora foi criada para oferecer uma estimativa rápida
              e simples. Com três informações básicas, você consegue ter uma
              referência inicial antes de solicitar uma avaliação presencial.
            </p>
          </div>
        </div>

        {/* ETAPAS */}
        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-3
          "
        >
          {steps.map((step) => (
            <article
              key={step.number}
              className="
                group
                relative
                min-h-[300px]
                overflow-hidden
                rounded-[2.2rem]
                border
                border-white/60
                bg-[#F0E0C7]/34
                p-8
                shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.55)]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:bg-[#F4E7D1]/50
              "
            >
              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-[#D5B27A]/14
                  blur-[28px]
                  transition-transform
                  duration-500
                  group-hover:scale-125
                "
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                "
              >
                <p
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#987646]
                  "
                >
                  Passo {step.number}
                </p>

                <div
                  className="
                    mt-6
                    h-px
                    w-12
                    bg-[#765525]/24
                  "
                />

                <h3
                  className="
                    mt-6
                    font-serif
                    text-[26px]
                    font-normal
                    leading-tight
                    text-[#68491F]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-[12px]
                    font-light
                    leading-7
                    text-[#725D41]
                  "
                >
                  {step.text}
                </p>

                <p
                  className="
                    mt-auto
                    pt-10
                    font-serif
                    text-[3rem]
                    leading-none
                    text-[#765525]/12
                  "
                >
                  {step.number}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-5
            border-t
            border-[#765525]/12
            pt-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p
            className="
              max-w-[700px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            O resultado é uma estimativa inicial e não substitui a avaliação
            técnica da peça.
          </p>

          <a
            href="#calculadora-de-ouro"
            className="
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              rounded-full
              border
              border-[#765525]/22
              bg-white/20
              px-7
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#765525]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white/38
            "
          >
            Usar calculadora
          </a>
        </div>
      </div>
    </section>
  );
}