const faqItems = [
  {
    question: 'Onde vender joias antigas na Barra da Tijuca?',
    answer:
      'A Madiha Maison realiza avaliação presencial de joias antigas no Vogue Square, na Barra da Tijuca. A peça pode ser analisada antes de qualquer decisão de venda.',
  },
  {
    question: 'Vocês compram joias herdadas?',
    answer:
      'Sim. Joias herdadas e peças de família podem ser apresentadas para avaliação mesmo quando o proprietário não possui todas as informações sobre origem, teor, pedras ou marca.',
  },
  {
    question: 'Joias antigas sem nota fiscal podem ser avaliadas?',
    answer:
      'Sim. A ausência de nota fiscal não impede uma avaliação inicial. Quando existem, documentos podem acrescentar contexto, mas a própria peça continua sendo o principal ponto de partida.',
  },
  {
    question: 'É necessário ter certificado das pedras?',
    answer:
      'Não necessariamente. Certificados podem ajudar quando correspondem corretamente às pedras da joia, mas a ausência deles não impede uma análise presencial inicial.',
  },
  {
    question: 'Joias quebradas ou incompletas têm valor?',
    answer:
      'Podem ter. Mesmo peças quebradas, desgastadas ou incompletas podem conter metais preciosos, diamantes, gemas, assinatura ou outros elementos relevantes que precisam ser analisados.',
  },
  {
    question: 'A idade da joia aumenta automaticamente o valor?',
    answer:
      'Não. A idade, por si só, não determina o valor. Metal, pedras, marca, design, construção, conservação, procedência e condições comerciais também podem influenciar a análise.',
  },
  {
    question: 'Vocês avaliam diamantes em joias antigas?',
    answer:
      'Sim. Diamantes presentes em joias antigas podem ser considerados individualmente de acordo com características como peso, cor, pureza, lapidação e montagem dentro da peça.',
  },
  {
    question: 'Rubis, safiras e esmeraldas podem influenciar o valor?',
    answer:
      'Podem. Gemas podem ter participação relevante na leitura da joia, dependendo de suas características, condição, montagem e relação com o restante da peça.',
  },
  {
    question: 'Como saber se uma joia antiga é de marca?',
    answer:
      'Assinaturas, gravações, punções, construção, acabamento, design e documentação podem ajudar na identificação. Uma gravação isolada, porém, não deve ser tratada automaticamente como confirmação de autenticidade.',
  },
  {
    question: 'Joias assinadas são sempre mais valiosas?',
    answer:
      'Não necessariamente. A presença de uma assinatura pode ser relevante, mas a peça precisa ser analisada como um conjunto, considerando coerência de design, construção, conservação, pedras e outros elementos.',
  },
  {
    question: 'Preciso restaurar ou limpar a joia antes da avaliação?',
    answer:
      'Não. Em peças antigas, geralmente é melhor apresentar a joia em seu estado atual antes de qualquer reforma, alteração ou intervenção.',
  },
  {
    question: 'Posso avaliar várias joias de família juntas?',
    answer:
      'Sim. Um conjunto de peças pode ser apresentado para avaliação, permitindo separar e analisar individualmente os elementos relevantes de cada joia.',
  },
  {
    question: 'A avaliação considera apenas o peso do ouro?',
    answer:
      'Não. O ouro é apenas uma parte possível da análise. Diamantes, gemas, marca, design, construção, conservação, documentação e características comerciais também podem ser relevantes.',
  },
  {
    question: 'A calculadora mostra o valor exato de uma joia antiga?',
    answer:
      'Não. A calculadora oferece uma estimativa inicial baseada nas informações inseridas e em referências de mercado. Ela não substitui a avaliação presencial de uma joia antiga.',
  },
  {
    question: 'Sou obrigado a vender depois da avaliação?',
    answer:
      'Não. A avaliação ou a apresentação de uma proposta não obriga a venda. A decisão final permanece com o proprietário da joia.',
  },
  {
    question: 'Onde fica a Madiha Maison?',
    answer:
      'A Madiha Maison fica no Vogue Square, Av. das Américas, 8585, Sala 490, Barra da Tijuca, Rio de Janeiro – RJ, CEP 22793-081.',
  },
];

export default function CompraJoiasAntigasFAQ() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    '5521993530012';

  const whatsappMessage =
    'Olá, Madiha Maison! Gostaria de tirar uma dúvida sobre avaliação e compra de joias antigas.';

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <section
      id="faq"
      aria-labelledby="faq-joias-antigas-title"
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
          bg-[radial-gradient(circle_at_12%_18%,rgba(199,168,122,0.14),transparent_30%),radial-gradient(circle_at_88%_82%,rgba(90,16,23,0.05),transparent_34%)]
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
                text-[#A17D4F]
                md:text-[10px]
              "
            >
              Perguntas frequentes
            </p>

            <h2
              id="faq-joias-antigas-title"
              className="
                mt-6
                max-w-[820px]
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
              Dúvidas sobre compra e avaliação de joias antigas.
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
              Reunimos as dúvidas mais comuns sobre joias herdadas, peças
              antigas, documentação, pedras, conservação, avaliação e venda.
            </p>
          </div>
        </div>

        <div
          className="
            mt-16
            grid
            gap-4
            lg:grid-cols-2
          "
        >
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="
                group
                rounded-[1.7rem]
                border
                border-[#5A1017]/10
                bg-[#FCFAF7]
                px-6
                py-5
                shadow-[0_14px_38px_rgba(54,30,30,0.045)]
                transition-all
                duration-300
                open:border-[#C7A87A]/35
                open:shadow-[0_20px_50px_rgba(54,30,30,0.07)]
                md:px-7
                md:py-6
              "
            >
              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  gap-6
                "
              >
                <span
                  className="
                    font-serif
                    text-[20px]
                    font-normal
                    leading-tight
                    text-[#4F1720]
                    md:text-[22px]
                  "
                >
                  {item.question}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#5A1017]/10
                    bg-[#F7F3EF]
                    text-[18px]
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
                  mt-5
                  border-t
                  border-[#5A1017]/8
                  pt-5
                "
              >
                <p
                  className="
                    max-w-[680px]
                    text-[11px]
                    font-light
                    leading-6
                    text-[#776B6C]
                    md:text-[12px]
                    md:leading-7
                  "
                >
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div
          className="
            mt-10
            grid
            gap-8
            overflow-hidden
            rounded-[2.25rem]
            border
            border-[#5A1017]/10
            bg-[#4F1720]
            p-8
            shadow-[0_28px_72px_rgba(55,20,26,0.14)]
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
              Ainda tem alguma dúvida?
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
              Cada joia antiga pode exigir uma leitura diferente.
            </h3>

            <p
              className="
                mt-5
                max-w-[780px]
                text-[11px]
                font-light
                leading-6
                text-[#CDBDBA]
              "
            >
              Se a sua peça não se encaixa em uma situação comum, você pode
              apresentar as informações disponíveis e conversar com a Madiha
              Maison.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
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
            Falar com a Madiha Maison
          </a>
        </div>
      </div>
    </section>
  );
}