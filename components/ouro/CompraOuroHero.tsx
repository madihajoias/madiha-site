export default function CompraOuroHero() {
  return (
    <section
      id="inicio"
      aria-labelledby="compra-ouro-title"
      className="
        relative
        min-h-[115svh]
        w-full
        overflow-hidden
        bg-[#EFE4D1]
        font-sans
      "
    >
      {/* ATMOSFERA */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_18%_18%,rgba(255,253,248,0.95)_0%,rgba(244,235,219,0.93)_31%,rgba(232,215,187,0.96)_67%,rgba(222,199,159,0.94)_100%)]
          "
        />

        <div
          className="
            absolute
            -left-[14%]
            -top-[8%]
            h-[54vw]
            w-[54vw]
            rounded-full
            bg-[radial-gradient(circle,rgba(255,246,226,0.34)_0%,rgba(209,180,130,0.20)_43%,transparent_72%)]
            blur-[72px]
          "
        />

        <div
          className="
            absolute
            -right-[12%]
            top-[10%]
            h-[50vw]
            w-[50vw]
            rounded-full
            bg-[radial-gradient(circle,rgba(255,246,226,0.34)_0%,rgba(209,180,130,0.18)_45%,transparent_72%)]
            blur-[72px]
          "
        />

        <div
          className="
            absolute
            -bottom-[24%]
            left-[12%]
            h-[60vw]
            w-[60vw]
            rounded-full
            bg-[radial-gradient(circle,rgba(255,246,226,0.28)_0%,rgba(190,151,91,0.16)_45%,transparent_72%)]
            blur-[82px]
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[#765525]/20
            to-transparent
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          min-h-[115svh]
          w-full
          max-w-[90rem]
          items-center
          gap-14
          px-6
          pb-24
          pt-40
          md:px-8
          md:pb-24
          md:pt-32
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-20
        "
      >
        {/* ESQUERDA */}
        <div className="max-w-[650px]">
          <p
            className="
              mb-6
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#8F6E3F]
              md:text-[10px]
            "
          >
            Madiha Maison • Compra de Ouro
          </p>

          <h1
            id="compra-ouro-title"
            className="
              max-w-[650px]
              font-serif
              text-[3.1rem]
              font-normal
              leading-[0.98]
              tracking-[-0.025em]
              text-[#765525]
              sm:text-[4rem]
              md:text-[5rem]
              lg:text-[5.7rem]
            "
          >
            Compra
            <br />
            de Ouro
          </h1>

          <p
            className="
              mt-8
              max-w-[540px]
              text-[14px]
              font-light
              leading-8
              text-[#806C50]
              md:text-[16px]
            "
          >
            Venda seu ouro com avaliação técnica,
            segurança, discrição e atendimento
            especializado no Vogue Square, na Barra da Tijuca.
          </p>

          <p
            className="
              mt-5
              max-w-[510px]
              text-[12px]
              font-light
              leading-7
              text-[#8A775B]
            "
          >
            Analisamos peso, teor e características da peça
            para apresentar uma proposta comercial clara,
            com pagamento após a aprovação da avaliação.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              items-start
              gap-5
              sm:flex-row
              sm:items-center
            "
          >
            <a
              href="#calculadora-de-ouro"
              className="
                inline-flex
                min-h-[54px]
                items-center
                justify-center
                rounded-full
                bg-[linear-gradient(135deg,#98703A_0%,#AE8246_48%,#936936_100%)]
                px-8
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-white
                shadow-[0_13px_28px_rgba(67,42,8,0.22),inset_0_1px_0_rgba(255,255,255,0.20)]
                transition-all
                duration-300
                hover:-translate-y-0.5
              "
            >
              Calcular meu ouro
            </a>

            <a
              href="#localizacao"
              className="
                group
                relative
                px-1
                pb-3
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#68491F]
              "
            >
              Agendar avaliação

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-left
                  bg-[#765525]
                  transition-transform
                  duration-500
                  group-hover:scale-x-75
                "
              />
            </a>
          </div>

          <div
            className="
              mt-14
              grid
              max-w-[610px]
              grid-cols-1
              gap-3
              sm:grid-cols-3
            "
          >
            {[
              ['Avaliação', 'Técnica'],
              ['Cotação', 'Atualizada'],
              ['Pagamento', 'Imediato'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="
                  rounded-[1.25rem]
                  border
                  border-white/65
                  bg-[#EFE0C6]/38
                  px-5
                  py-5
                  shadow-[0_14px_36px_rgba(120,88,42,0.08),inset_0_1px_0_rgba(255,255,255,0.62)]
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#86663A]
                  "
                >
                  {label}
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[17px]
                    text-[#68491F]
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DIREITA */}
        <div
          className="
            relative
            flex
            min-h-[520px]
            items-center
            justify-center
            lg:min-h-[720px]
          "
        >
          <div
            className="
              absolute
              h-[520px]
              w-[520px]
              rounded-full
              bg-[radial-gradient(circle,rgba(255,249,233,0.62)_0%,rgba(235,215,180,0.31)_37%,rgba(183,145,85,0.13)_62%,transparent_78%)]
              blur-[58px]
            "
          />

          <div
            className="
              relative
              h-[380px]
              w-[380px]
              overflow-hidden
              rounded-[54px_54px_90px_54px]
              border
              border-[#FFF8E8]/75
              bg-[linear-gradient(145deg,rgba(199,165,108,0.96)_0%,rgba(177,136,72,0.95)_38%,rgba(154,110,49,0.94)_70%,rgba(188,148,84,0.94)_100%)]
              shadow-[0_48px_112px_rgba(77,49,12,0.34),0_17px_46px_rgba(110,72,19,0.23),inset_0_1px_0_rgba(255,255,255,0.48)]
              backdrop-blur-3xl
              sm:h-[500px]
              sm:w-[500px]
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-[28%]
                -top-[26%]
                h-[370px]
                w-[370px]
                rounded-full
                bg-[#FFEDC7]/45
                blur-[78px]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -left-[20%]
                -top-[12%]
                h-[180px]
                w-[90%]
                -rotate-12
                rounded-full
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent
                blur-xl
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
                items-center
                justify-center
                px-10
                text-center
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.30em]
                  text-[#5F431F]
                "
              >
                Madiha Maison
              </p>

              <p
                className="
                  mt-6
                  font-serif
                  text-[4.8rem]
                  leading-none
                  tracking-[-0.045em]
                  text-[#412907]
                  sm:text-[6.4rem]
                "
              >
                24K
              </p>

              <div
                className="
                  my-7
                  h-px
                  w-20
                  bg-[#52350F]/28
                "
              />

              <p
                className="
                  max-w-[250px]
                  text-[10px]
                  font-medium
                  uppercase
                  leading-6
                  tracking-[0.20em]
                  text-[#5E421F]
                "
              >
                Avaliação de ouro
                <br />
                24k a 10k
              </p>
            </div>
          </div>

          <div
            className="
              absolute
              bottom-[6%]
              right-[1%]
              max-w-[240px]
              rounded-[1.35rem]
              border
              border-white/60
              bg-[#F5E8D1]/65
              p-6
              shadow-[0_22px_60px_rgba(86,57,19,0.10)]
              backdrop-blur-2xl
              sm:right-[4%]
            "
          >
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#86663A]
              "
            >
              Vogue Square
            </p>

            <p
              className="
                mt-3
                font-serif
                text-[20px]
                leading-snug
                text-[#68491F]
              "
            >
              Atendimento discreto e especializado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}