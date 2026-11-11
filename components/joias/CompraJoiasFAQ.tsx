const faqs = [
  {
    question:
      'Onde vender joias na Barra da Tijuca?',
    answer:
      'A Madiha Maison realiza avaliação e compra de joias no Vogue Square, na Barra da Tijuca, Rio de Janeiro. O atendimento é presencial e reservado.',
  },
  {
    question:
      'A Madiha Maison compra joias usadas?',
    answer:
      'Sim. Joias usadas podem ser avaliadas considerando o metal, as pedras e outras características relevantes da peça.',
  },
  {
    question:
      'Vocês compram joias com diamantes?',
    answer:
      'Sim. Joias com diamantes podem exigir uma análise específica das pedras além da avaliação do metal precioso.',
  },
  {
    question:
      'Vocês compram joias antigas?',
    answer:
      'Sim. Joias antigas ou herdadas podem ser avaliadas individualmente conforme sua composição, pedras, assinatura e estado de conservação.',
  },
  {
    question:
      'Peças quebradas também podem ser avaliadas?',
    answer:
      'Sim. Mesmo joias quebradas, incompletas ou danificadas podem apresentar valor relacionado ao metal, às pedras ou a outras características da peça.',
  },
  {
    question:
      'Como é determinado o valor de uma joia?',
    answer:
      'A avaliação pode considerar peso e teor do metal, presença de diamantes ou outras gemas, marca, design, acabamento e estado de conservação, conforme as características da peça.',
  },
  {
    question:
      'O valor depende apenas do peso do ouro?',
    answer:
      'Não necessariamente. O peso e o teor do ouro são referências importantes, mas determinadas joias podem exigir uma análise mais ampla.',
  },
  {
    question:
      'Joias de marca têm uma avaliação diferente?',
    answer:
      'Peças de marcas reconhecidas podem exigir uma leitura comercial específica além da composição do metal.',
  },
  {
    question:
      'Preciso ter certificado da joia ou das pedras?',
    answer:
      'Não necessariamente. A peça pode ser apresentada para avaliação mesmo sem certificado. Documentos disponíveis podem ser considerados durante a análise.',
  },
  {
    question:
      'Posso avaliar minhas joias sem obrigação de vender?',
    answer:
      'Sim. A proposta é apresentada após a análise e você decide se deseja ou não prosseguir com a venda.',
  },
  {
    question:
      'Como funciona o pagamento?',
    answer:
      'Caso você aceite a proposta, a equipe orienta sobre a formalização da compra e as condições aplicáveis para conclusão da operação.',
  },
  {
    question:
      'Onde fica a Madiha Maison?',
    answer:
      'A Madiha Maison está na Av. das Américas, 8585, Sala 490, Vogue Square, Barra da Tijuca, Rio de Janeiro – RJ, CEP 22793-081.',
  },
];

export default function CompraJoiasFAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="compra-joias-faq-title"
      className="
        relative
        overflow-hidden
        bg-[#F7F3EF]
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
              id="compra-joias-faq-title"
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
              Dúvidas sobre avaliação e compra de joias.
            </h2>
          </div>

          <div
            className="
              max-w-[650px]
              lg:justify-self-end
            "
          >
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
              Reunimos algumas das principais dúvidas de quem deseja avaliar ou
              vender joias na Barra da Tijuca.
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
              Ainda tem alguma dúvida?
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
              Fale diretamente com a Madiha Maison.
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
              Nossa equipe pode orientar sobre avaliação, localização e o
              processo de compra de joias.
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
            Ver atendimento
          </a>
        </div>
      </div>
    </section>
  );
}