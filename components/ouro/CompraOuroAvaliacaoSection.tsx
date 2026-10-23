export default function CompraOuroAvaliacaoSection() {
  return (
    <section
      id="avaliacao"
      aria-labelledby="avaliacao-ouro-title"
      className="
        relative
        grid
        min-h-[115vh]
        w-full
        overflow-hidden
        bg-[#F4E9D7]
        lg:grid-cols-2
      "
    >
      {/* TEXTO */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          px-6
          py-24
          md:px-8
          lg:px-16
          xl:px-24
        "
      >
        <div className="mx-auto w-full max-w-[600px]">
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
            Avaliação profissional
          </p>

          <h2
            id="avaliacao-ouro-title"
            className="
              mt-6
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
            Avaliação de ouro
            <br />
            com precisão técnica.
          </h2>

          <p
            className="
              mt-8
              max-w-[520px]
              text-[14px]
              font-light
              leading-8
              text-[#806C50]
              md:text-[15px]
            "
          >
            Cada peça é analisada individualmente. Peso, teor e
            características do metal são considerados antes da
            apresentação da proposta comercial.
          </p>

          <p
            className="
              mt-5
              max-w-[520px]
              text-[12px]
              font-light
              leading-7
              text-[#927D60]
            "
          >
            A avaliação é realizada com transparência e discrição,
            permitindo que você acompanhe o processo antes de decidir
            pela venda.
          </p>

          <div
            className="
              mt-12
              grid
              gap-3
              sm:grid-cols-2
            "
          >
            {[
              ['Peso', 'Balança de precisão'],
              ['Teor', '24k a 10k'],
              ['Cotação', 'Atualizada'],
              ['Proposta', 'Sem obrigação de venda'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="
                  rounded-[1.4rem]
                  border
                  border-white/60
                  bg-[#EAD8B8]/32
                  px-5
                  py-5
                  shadow-[0_14px_38px_rgba(100,70,27,0.06),inset_0_1px_0_rgba(255,255,255,0.55)]
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#937144]
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

          <a
            href="#calculadora-de-ouro"
            className="
              mt-10
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
              shadow-[0_13px_28px_rgba(67,42,8,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Calcular meu ouro
          </a>
        </div>
      </div>

      {/* VISUAL */}
      <div
        className="
          relative
          min-h-[600px]
          overflow-hidden
          bg-[#E4D2B2]
          lg:min-h-full
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_52%_40%,rgba(255,246,224,0.72)_0%,rgba(221,190,139,0.35)_35%,rgba(173,128,65,0.18)_64%,transparent_82%)]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            h-[440px]
            w-[440px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#F6E8CC]/45
            blur-[65px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-[360px]
            w-[360px]
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-[54px_54px_90px_54px]
            border
            border-white/55
            bg-[linear-gradient(145deg,rgba(198,164,106,0.92),rgba(167,124,62,0.90),rgba(190,149,84,0.92))]
            shadow-[0_45px_110px_rgba(76,48,12,0.25),inset_0_1px_0_rgba(255,255,255,0.42)]
            backdrop-blur-xl
            sm:h-[430px]
            sm:w-[430px]
          "
        >
          <div className="text-center">
            <p
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#5F431F]
              "
            >
              Processo técnico
            </p>

            <p
              className="
                mt-5
                font-serif
                text-[3rem]
                leading-none
                text-[#412907]
                sm:text-[4rem]
              "
            >
              Peso
              <br />
              + Teor
            </p>

            <div
              className="
                mx-auto
                my-7
                h-px
                w-20
                bg-[#51350F]/25
              "
            />

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.22em]
                text-[#5F431F]
              "
            >
              Análise individual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}