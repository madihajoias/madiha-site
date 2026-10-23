const tipos = [
  {
    label: 'Ouro amarelo',
    title: 'Teores de 24k a 10k',
    text:
      'Na calculadora, o ouro amarelo pode ser simulado nos teores 24k, 22k, 18k, 16k, 14k, 12k e 10k.',
  },
  {
    label: 'Ouro branco',
    title: 'Teores de 18k a 10k',
    text:
      'Para ouro branco, a calculadora disponibiliza 18k, 16k, 14k, 12k e 10k, seguindo a regra comercial aplicada à avaliação.',
  },
];

export default function CalculadoraOuroTiposSection() {
  return (
    <section
      id="tipos-de-ouro"
      aria-labelledby="tipos-ouro-title"
      className="
        relative
        overflow-hidden
        bg-[#F2E6D3]
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.76),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(190,147,82,0.16),transparent_34%)]
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
            lg:grid-cols-[0.88fr_1.12fr]
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
              Tipo de ouro
            </p>

            <h2
              id="tipos-ouro-title"
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
              Ouro amarelo
              <br />
              e ouro branco.
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
              A calculadora diferencia o tipo de ouro porque a referência
              comercial e os teores disponíveis não são exatamente os mesmos
              para ouro amarelo e ouro branco.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-[0.9fr_1.1fr]
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
                Regra da calculadora
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
                Selecione o tipo
                <br />
                antes do teor.
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
                Ao selecionar ouro branco, os teores 24k e 22k deixam de
                aparecer na calculadora. Se um deles estiver selecionado,
                a ferramenta ajusta automaticamente para 18k.
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
                  Ouro branco
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
                  A simulação considera a regra comercial específica aplicada
                  ao ouro branco dentro da calculadora.
                </p>
              </div>
            </div>
          </div>

          {/* TIPOS */}
          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {tipos.map((tipo) => (
              <article
                key={tipo.label}
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
                  {tipo.label}
                </p>

                <h3
                  className="
                    mt-4
                    font-serif
                    text-[24px]
                    font-normal
                    leading-tight
                    text-[#68491F]
                  "
                >
                  {tipo.title}
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
                  {tipo.text}
                </p>
              </article>
            ))}

            {/* NOTA COMPLEMENTAR */}
            <div
              className="
                sm:col-span-2
                rounded-[2rem]
                border
                border-[#765525]/10
                bg-white/16
                px-7
                py-6
                backdrop-blur-xl
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#947244]
                "
              >
                Atenção
              </p>

              <p
                className="
                  mt-3
                  max-w-[760px]
                  text-[11px]
                  font-light
                  leading-6
                  text-[#725D41]
                "
              >
                O tipo de ouro informado na simulação deve corresponder à peça
                avaliada. Caso exista dúvida sobre teor ou composição, a
                confirmação deve ser feita presencialmente.
              </p>
            </div>
          </div>
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
            Se você não souber o teor ou o tipo exato do ouro, utilize a
            calculadora apenas como referência inicial.
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
            Fazer nova simulação
          </a>
        </div>
      </div>
    </section>
  );
}