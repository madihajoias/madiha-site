const items = [
  {
    label: 'Estimativa',
    title: 'Valor comercial estimado',
    text:
      'É o valor calculado a partir do peso informado e da referência comercial correspondente ao teor selecionado.',
  },
  {
    label: 'Por grama',
    title: 'Referência comercial',
    text:
      'Mostra o valor utilizado por grama para o teor escolhido na simulação.',
  },
  {
    label: 'Mercado',
    title: 'Referência da bolsa',
    text:
      'É uma referência teórica do metal e ajuda a comparar o valor de mercado com a referência comercial.',
  },
];

export default function CalculadoraOuroResultadoSection() {
  return (
    <section
      id="entenda-o-resultado"
      aria-labelledby="resultado-calculadora-title"
      className="
        relative
        overflow-hidden
        bg-[#EAD9BC]
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(255,250,240,0.74),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(163,115,49,0.14),transparent_34%)]
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
                text-[#8C692E]
                md:text-[10px]
              "
            >
              Entenda o resultado
            </p>

            <h2
              id="resultado-calculadora-title"
              className="
                mt-6
                max-w-[650px]
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
              O que significa
              <br />
              cada valor.
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
                text-[#725D41]
                md:text-[15px]
                md:leading-8
              "
            >
              A calculadora apresenta referências diferentes para ajudar
              você a compreender melhor o resultado. Cada valor possui uma
              função específica dentro da simulação.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-[0.82fr_1.18fr]
          "
        >
          {/* PAINEL PRINCIPAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[3rem_3rem_5rem_3rem]
              border
              border-white/58
              bg-[linear-gradient(145deg,rgba(199,165,108,0.96),rgba(177,136,72,0.95),rgba(154,110,49,0.94),rgba(188,148,84,0.94))]
              p-8
              shadow-[0_38px_90px_rgba(83,55,18,0.20),inset_0_1px_0_rgba(255,255,255,0.42)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-24
                -top-28
                h-72
                w-72
                rounded-full
                bg-[#FFECC3]/34
                blur-[70px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#5F431F]
                "
              >
                Leitura da simulação
              </p>

              <h3
                className="
                  mt-6
                  max-w-[430px]
                  font-serif
                  text-[2.8rem]
                  font-normal
                  leading-[1.02]
                  text-[#412907]
                  md:text-[3.6rem]
                "
              >
                Peso
                <br />
                × valor por grama
              </h3>

              <p
                className="
                  mt-7
                  max-w-[430px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                A estimativa considera o peso informado e o valor comercial
                por grama correspondente ao teor e ao tipo de ouro
                selecionados.
              </p>

              <div
                className="
                  mt-10
                  rounded-[1.6rem]
                  border
                  border-white/28
                  bg-white/10
                  px-6
                  py-5
                  backdrop-blur-xl
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#5F431F]
                  "
                >
                  Importante
                </p>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-light
                    leading-6
                    text-[#4E3515]/78
                  "
                >
                  O resultado é uma estimativa e pode mudar após a avaliação
                  técnica presencial da peça.
                </p>
              </div>
            </div>
          </div>

          {/* EXPLICAÇÕES */}
          <div
            className="
              grid
              gap-4
              md:grid-cols-3
              lg:grid-cols-1
            "
          >
            {items.map((item) => (
              <article
                key={item.label}
                className="
                  rounded-[2rem]
                  border
                  border-white/58
                  bg-[#F1E2C8]/38
                  p-7
                  shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.52)]
                  backdrop-blur-xl
                  transition-all
                  duration-400
                  hover:-translate-y-1
                  hover:bg-[#F4E7D0]/48
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#947244]
                  "
                >
                  {item.label}
                </p>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-[24px]
                    font-normal
                    text-[#68491F]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[11px]
                    font-light
                    leading-6
                    text-[#725D41]
                  "
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

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
            Para confirmar peso, teor e características da peça, o ideal é
            realizar uma avaliação presencial.
          </p>

          <a
            href="#localizacao"
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
            Solicitar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}