const pilares = [
  {
    label: 'Privacidade',
    title: 'Atendimento reservado',
    text:
      'A avaliação acontece em ambiente discreto, adequado para quem deseja tratar joias e ouro com mais privacidade.',
  },
  {
    label: 'Acompanhamento',
    title: 'Você vê o processo',
    text:
      'As principais etapas da avaliação são apresentadas de forma clara para que você entenda o que está sendo considerado.',
  },
  {
    label: 'Transparência',
    title: 'Proposta explicada',
    text:
      'Peso, teor, características da peça e referência comercial são considerados antes da apresentação da proposta.',
  },
  {
    label: 'Pagamento',
    title: 'Após o aceite',
    text:
      'Com a venda aprovada pelo cliente e a operação concluída, o pagamento é realizado conforme a forma acordada.',
  },
];

export default function LojaOuroPertoSegurancaSection() {
  return (
    <section
      id="seguranca"
      aria-labelledby="loja-ouro-seguranca-title"
      className="
        relative
        overflow-hidden
        bg-[#F3E7D5]
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
          bg-[radial-gradient(circle_at_10%_16%,rgba(255,255,255,0.84),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(180,135,68,0.14),transparent_34%)]
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
            lg:grid-cols-[0.86fr_1.14fr]
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
              Segurança para vender ouro
            </p>

            <h2
              id="loja-ouro-seguranca-title"
              className="
                mt-6
                max-w-[720px]
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
              Perto de você,
              <br />
              sem abrir mão da privacidade.
            </h2>
          </div>

          <div
            className="
              max-w-[640px]
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
              Para vender ouro, proximidade é importante, mas segurança também.
              Na Madiha Maison, o atendimento foi pensado para oferecer
              discrição, clareza e acompanhamento durante a avaliação.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-6
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
              border-white/60
              bg-[linear-gradient(145deg,rgba(199,165,108,0.98),rgba(177,136,72,0.96),rgba(154,110,49,0.95),rgba(188,148,84,0.95))]
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
                Atendimento Madiha Maison
              </p>

              <h3
                className="
                  mt-6
                  max-w-[470px]
                  font-serif
                  text-[2.8rem]
                  font-normal
                  leading-[1.02]
                  text-[#412907]
                  md:text-[3.6rem]
                "
              >
                Segurança começa
                <br />
                pelo ambiente.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[470px]
                  text-[12px]
                  font-light
                  leading-7
                  text-[#4E3515]/80
                "
              >
                A avaliação é realizada em espaço reservado, com atenção à
                privacidade e ao cuidado necessário para tratar peças de valor.
              </p>

              <div
                className="
                  mt-9
                  grid
                  gap-3
                  sm:grid-cols-2
                "
              >
                <div
                  className="
                    rounded-[1.4rem]
                    border
                    border-white/28
                    bg-white/10
                    px-5
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
                    Local
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    Vogue Square
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.4rem]
                    border
                    border-white/28
                    bg-white/10
                    px-5
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
                    Atendimento
                  </p>

                  <p
                    className="
                      mt-2
                      font-serif
                      text-[20px]
                      text-[#412907]
                    "
                  >
                    Reservado
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-9
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
                  Você decide depois da avaliação
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
                  A proposta é apresentada somente depois da análise. A decisão
                  de vender permanece com você.
                </p>
              </div>
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
            {pilares.map((item) => (
              <article
                key={item.label}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/60
                  bg-[#F1E2C8]/38
                  p-7
                  shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.52)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-[#F4E7D1]/52
                  md:p-8
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
                    blur-[30px]
                    transition-transform
                    duration-500
                    group-hover:scale-125
                  "
                />

                <div className="relative z-10">
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
                      leading-tight
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
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* PROCESSO DE VENDA */}
        <div
          className="
            mt-6
            rounded-[2rem]
            border
            border-white/60
            bg-[#F1E2C8]/38
            px-7
            py-8
            shadow-[0_18px_48px_rgba(94,66,27,0.05)]
            backdrop-blur-xl
            md:px-9
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
            Da chegada à decisão
          </p>

          <div
            className="
              mt-7
              grid
              gap-6
              md:grid-cols-4
            "
          >
            {[
              [
                '01',
                'Chegada',
                'Você apresenta as peças que deseja avaliar.',
              ],
              [
                '02',
                'Avaliação',
                'Peso, teor e características são conferidos.',
              ],
              [
                '03',
                'Proposta',
                'A referência comercial é apresentada de forma clara.',
              ],
              [
                '04',
                'Decisão',
                'Você escolhe se deseja concluir ou não a venda.',
              ],
            ].map(([numero, titulo, texto]) => (
              <div key={numero}>
                <p
                  className="
                    font-serif
                    text-[30px]
                    leading-none
                    text-[#B38B52]
                  "
                >
                  {numero}
                </p>

                <p
                  className="
                    mt-4
                    font-serif
                    text-[21px]
                    text-[#68491F]
                  "
                >
                  {titulo}
                </p>

                <p
                  className="
                    mt-3
                    text-[10px]
                    font-light
                    leading-5
                    text-[#725D41]
                  "
                >
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FECHAMENTO */}
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
              max-w-[740px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            Para quem procura um lugar seguro para vender ouro na Barra da
            Tijuca, a Madiha Maison combina localização, atendimento reservado
            e avaliação técnica em um mesmo endereço.
          </p>

          <a
            href="#regioes-proximas"
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
            Ver regiões próximas
          </a>
        </div>
      </div>
    </section>
  );
}