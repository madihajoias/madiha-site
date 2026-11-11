const faqs = [
  {
    question:
      'A Calculadora de Joias mostra o valor exato da minha joia?',
    answer:
      'Não. A Calculadora de Joias apresenta uma estimativa inicial baseada nas informações fornecidas pelo usuário e nas referências utilizadas pela ferramenta. O valor comercial de uma peça depende da confirmação presencial de suas características.',
  },
  {
    question:
      'Quais informações entram no cálculo do ouro?',
    answer:
      'A estimativa do ouro considera principalmente o peso informado e o teor selecionado para a peça. Alterações nessas informações podem modificar significativamente o resultado.',
  },
  {
    question:
      'Por que a calculadora utiliza o dólar?',
    answer:
      'As referências internacionais utilizadas para diamantes são tradicionalmente expressas em dólar. Por isso, a conversão cambial participa da estimativa apresentada em reais.',
  },
  {
    question:
      'Por que o valor da calculadora pode mudar de um dia para outro?',
    answer:
      'A estimativa pode variar porque referências de mercado e câmbio podem mudar ao longo do tempo, mesmo quando as características informadas da joia permanecem iguais.',
  },
  {
    question:
      'Qual formato de diamante é utilizado como referência?',
    answer:
      'A Calculadora de Joias utiliza como referência o diamante redondo, especialmente o padrão conhecido como Round Brilliant.',
  },
  {
    question:
      'Posso usar a calculadora para um diamante Oval, Emerald ou Pear?',
    answer:
      'A ferramenta pode servir como uma referência inicial, mas outras lapidações podem apresentar comportamento comercial diferente do Round Brilliant. Nesses casos, o resultado não deve ser interpretado como o valor específico daquela lapidação.',
  },
  {
    question:
      'Cor e pureza do diamante influenciam o cálculo?',
    answer:
      'Sim. Peso em quilates, cor e grau de pureza informados pelo usuário participam da referência utilizada para estimar o diamante.',
  },
  {
    question:
      'Cotação de referência e preço comercial são a mesma coisa?',
    answer:
      'Não. A cotação funciona como um termômetro do mercado. O preço comercial considera a peça real, sua classificação, liquidez, demanda e as condições específicas de uma negociação.',
  },
  {
    question:
      'A calculadora considera marca e design da joia?',
    answer:
      'A ferramenta é voltada principalmente para a estimativa dos elementos informados no cálculo. Marca, assinatura, design, construção, procedência e outras características podem exigir avaliação individual.',
  },
  {
    question:
      'Joias antigas ou herdadas podem ser calculadas?',
    answer:
      'A calculadora pode ajudar como ponto de partida, mas joias antigas ou herdadas podem ter características que não são capturadas por uma ferramenta online e podem exigir avaliação presencial.',
  },
  {
    question:
      'Preciso saber o teor exato do ouro para usar a calculadora?',
    answer:
      'Para uma referência mais coerente, o teor informado deve corresponder ao teor real da peça. Caso você não saiba essa informação, a avaliação presencial é o caminho mais adequado para confirmá-la.',
  },
  {
    question:
      'Posso levar a joia para avaliação depois de usar a calculadora?',
    answer:
      'Sim. A estimativa pode funcionar como um primeiro passo antes da avaliação presencial. A Madiha Maison atende no Vogue Square, na Barra da Tijuca, Rio de Janeiro.',
  },
];

export default function CalculadoraJoiasFAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="calculadora-faq-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
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
          bg-[radial-gradient(circle_at_14%_16%,rgba(199,168,122,0.13),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(90,16,23,0.055),transparent_34%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[8%]
          bottom-[8%]
          h-[34vw]
          w-[34vw]
          rounded-full
          bg-[#C7A87A]/10
          blur-[110px]
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
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Perguntas frequentes
            </p>

            <h2
              id="calculadora-faq-title"
              className="
                mt-6
                max-w-[760px]
                font-serif
                text-[3rem]
                font-normal
                leading-[0.98]
                tracking-[-0.035em]
                text-[#4F1720]
                sm:text-[3.7rem]
                md:text-[4.4rem]
              "
            >
              Dúvidas sobre a Calculadora de Joias.
            </h2>
          </div>

          <div className="max-w-[650px] lg:justify-self-end">
            <p
              className="
                text-[13px]
                font-light
                leading-7
                text-[#776B6C]
                md:text-[15px]
                md:leading-8
              "
            >
              Entenda melhor como a ferramenta funciona, o que influencia a
              estimativa e por que a avaliação presencial continua sendo
              importante para confirmar a peça real.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div
          className="
            mt-16
            grid
            gap-4
            lg:grid-cols-2
          "
        >
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="
                group
                overflow-hidden
                rounded-[1.75rem]
                border
                border-[#5A1017]/10
                bg-[#FCFAF7]
                shadow-[0_16px_42px_rgba(54,30,30,0.055),inset_0_1px_0_rgba(255,255,255,0.75)]
                transition-all
                duration-300
                open:border-[#C7A87A]/40
                open:bg-white
                open:shadow-[0_22px_52px_rgba(54,30,30,0.08)]
              "
            >
              <summary
                className="
                  flex
                  min-h-[92px]
                  cursor-pointer
                  list-none
                  items-center
                  gap-5
                  px-6
                  py-6
                  md:px-7
                "
              >
                <span
                  className="
                    inline-flex
                    h-10
                    min-w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C7A87A]/35
                    bg-[#C7A87A]/[0.08]
                    font-serif
                    text-[14px]
                    text-[#A17D4F]
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span
                  className="
                    flex-1
                    font-serif
                    text-[19px]
                    font-normal
                    leading-tight
                    text-[#4F1720]
                    md:text-[21px]
                  "
                >
                  {faq.question}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-10
                    min-w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#5A1017]/10
                    bg-[#5A1017]/[0.035]
                    text-[20px]
                    font-light
                    text-[#A17D4F]
                    transition-transform
                    duration-300
                    group-open:rotate-45
                  "
                >
                  +
                </span>
              </summary>

              <div
                className="
                  border-t
                  border-[#5A1017]/10
                  px-6
                  py-6
                  md:px-7
                "
              >
                <p
                  className="
                    max-w-[620px]
                    text-[11px]
                    font-light
                    leading-7
                    text-[#776B6C]
                    md:text-[12px]
                  "
                >
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA FINAL */}
        <div
          className="
            mt-14
            grid
            gap-6
            overflow-hidden
            rounded-[2.1rem]
            border
            border-[#5A1017]/10
            bg-[#4F1720]
            p-8
            shadow-[0_28px_72px_rgba(55,20,26,0.14),inset_0_1px_0_rgba(255,255,255,0.04)]
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
              Depois da calculadora
            </p>

            <h3
              className="
                mt-4
                max-w-[760px]
                font-serif
                text-[2rem]
                font-normal
                leading-[1.04]
                tracking-[-0.025em]
                text-[#F7F3EF]
                md:text-[2.7rem]
              "
            >
              Use a estimativa como começo, não como conclusão.
            </h3>

            <p
              className="
                mt-5
                max-w-[760px]
                text-[11px]
                font-light
                leading-6
                text-[#CDBDBA]
              "
            >
              Se quiser entender melhor sua peça, a avaliação presencial pode
              confirmar as informações e acrescentar contexto ao resultado.
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
              shadow-[0_14px_34px_rgba(20,5,8,0.16),inset_0_1px_0_rgba(255,255,255,0.22)]
              transition-all
              duration-300
              hover:-translate-y-0.5
            "
          >
            Agendar avaliação
          </a>
        </div>
      </div>
    </section>
  );
}