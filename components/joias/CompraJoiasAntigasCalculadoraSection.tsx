export default function CompraJoiasAntigasCalculadoraSection() {
  return (
    <section
      id="calculadora-joias-antigas"
      aria-labelledby="calculadora-joias-antigas-title"
      className="
        relative
        overflow-hidden
        bg-[#54151E]
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
          bg-[radial-gradient(circle_at_14%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(255,255,255,0.035),transparent_34%)]
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
            gap-10
            lg:grid-cols-[0.92fr_1.08fr]
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
              Estimativa inicial
            </p>

            <h2
              id="calculadora-joias-antigas-title"
              className="
                mt-6
                max-w-[820px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#F7F3EF]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Use a calculadora como ponto de partida — não como conclusão.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#D0C1BE]
                md:text-[15px]
                md:leading-8
              "
            >
              Em uma joia antiga, peso e teor do ouro podem ajudar a construir
              uma referência inicial. Mas o valor da peça pode envolver muito
              mais do que isso.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-[0.86fr_1.14fr]
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-[#C7A87A]/22
              bg-[#F7F3EF]
              p-8
              shadow-[0_30px_85px_rgba(20,5,8,0.18)]
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#C7A87A]/14
                blur-[72px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#A17D4F]
                "
              >
                O que a calculadora consegue estimar
              </p>

              <h3
                className="
                  mt-6
                  max-w-[560px]
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#4F1720]
                  md:text-[3.5rem]
                "
              >
                Uma referência útil para começar a entender a peça.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[560px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#776B6C]
                "
              >
                A calculadora pode ajudar a estimar ouro e diamantes com base
                nas informações inseridas pelo usuário e em referências de
                mercado.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A17D4F]">
                    Ouro
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#4F1720]">
                    Peso + teor
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.5rem]
                    border
                    border-[#5A1017]/9
                    bg-[#FCFAF7]
                    px-5
                    py-5
                  "
                >
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A17D4F]">
                    Diamantes
                  </p>

                  <p className="mt-2 font-serif text-[20px] text-[#4F1720]">
                    Referência inicial
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              relative
              overflow-hidden
              rounded-[2.35rem]
              border
              border-white/10
              bg-white/[0.045]
              p-8
              shadow-[0_24px_68px_rgba(20,5,8,0.16),inset_0_1px_0_rgba(255,255,255,0.035)]
              backdrop-blur-xl
              md:p-10
              lg:p-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -left-20
                bottom-0
                h-72
                w-72
                rounded-full
                bg-[#C7A87A]/10
                blur-[72px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.26em]
                  text-[#D6BB8B]
                "
              >
                O que a calculadora não substitui
              </p>

              <h3
                className="
                  mt-6
                  max-w-[640px]
                  font-serif
                  text-[2.7rem]
                  font-normal
                  leading-[0.96]
                  tracking-[-0.035em]
                  text-[#F7F3EF]
                  md:text-[3.5rem]
                "
              >
                A leitura completa de uma joia antiga continua sendo presencial.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[620px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#D0C1BE]
                "
              >
                Marca, design, pedras, conservação, construção, procedência,
                reformas e características específicas da peça não podem ser
                confirmadas apenas por uma estimativa online.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  'Marca e assinatura',
                  'Estado de conservação',
                  'Construção da joia',
                  'Pedras e montagem',
                  'Procedência',
                  'Alterações e reformas',
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-[1.35rem]
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-4
                      py-4
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-[#D6BB8B]
                      "
                    />

                    <span
                      className="
                        text-[10px]
                        font-light
                        leading-5
                        text-[#E1D6D2]
                      "
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="
                  mt-7
                  rounded-[1.65rem]
                  border
                  border-[#C7A87A]/20
                  bg-white/[0.045]
                  px-6
                  py-6
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-[#D6BB8B]
                  "
                >
                  Em joias antigas
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-light
                    leading-6
                    text-[#CDBDBA]
                  "
                >
                  A estimativa pode ser útil para compreender parte do valor
                  material, mas não representa necessariamente o valor comercial
                  da joia como um todo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            mt-8
            grid
            gap-8
            overflow-hidden
            rounded-[2.1rem]
            border
            border-white/10
            bg-white/[0.045]
            p-8
            backdrop-blur-xl
            md:p-10
            lg:grid-cols-[1fr_auto]
            lg:items-center
          "
        >
          <div>
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.24em]
                text-[#D6BB8B]
              "
            >
              Primeiro estime. Depois confirme.
            </p>

            <h3
              className="
                mt-4
                max-w-[860px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              A calculadora ajuda a iniciar a conversa. A avaliação presencial
              ajuda a entender a peça.
            </h3>
          </div>

          <a
            href="#calculadora"
            className="
              inline-flex
              min-h-[54px]
              items-center
              justify-center
              rounded-full
              border
              border-[#C7A87A]
              bg-[linear-gradient(135deg,#C7A87A_0%,#D9BE91_52%,#B89460_100%)]
              px-8
              text-center
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#4F1720]
              shadow-[0_14px_34px_rgba(20,5,8,0.16)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Usar calculadora
          </a>
        </div>
      </div>
    </section>
  );
}