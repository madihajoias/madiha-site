const points = [
  ['Pagamento após a aprovação', 'Após a avaliação e o aceite da proposta, o pagamento é realizado de forma imediata conforme a modalidade disponível no atendimento.'],
  ['Atendimento especializado', 'Nossa equipe acompanha cada etapa da avaliação, esclarece dúvidas e orienta sobre peso, teor e valor comercial da peça.'],
  ['Hora marcada no Vogue Square', 'Para maior conforto e discrição, o atendimento pode ser organizado previamente em nosso escritório na Barra da Tijuca.'],
];

export default function PagamentoAtendimentoSection() {
  return (
    <section
      id="pagamento-atendimento"
      aria-labelledby="pagamento-atendimento-title"
      className="relative overflow-hidden bg-[#F1E5D1] py-24 md:py-32 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,250,239,0.72),transparent_31%),radial-gradient(circle_at_88%_82%,rgba(186,143,76,0.12),transparent_34%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#8F6E3F] md:text-[10px]">
              Pagamento • Atendimento
            </p>

            <h2
              id="pagamento-atendimento-title"
              className="mt-6 max-w-[650px] font-serif text-[3rem] font-normal leading-[1.01] tracking-[-0.025em] text-[#765525] sm:text-[3.8rem] md:text-[4.6rem]"
            >
              Uma decisão simples,
              <br />
              com atendimento próximo.
            </h2>

            <p className="mt-8 max-w-[590px] text-[14px] font-light leading-8 text-[#806C50] md:text-[15px]">
              Da primeira consulta à conclusão da avaliação, o processo é conduzido de forma clara, discreta e objetiva.
            </p>

            <a
              href="#localizacao"
              className="mt-10 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#98703A_0%,#AE8246_48%,#936936_100%)] px-8 text-[9px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_13px_28px_rgba(67,42,8,0.22),inset_0_1px_0_rgba(255,255,255,0.20)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Agendar avaliação
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle,rgba(222,190,138,0.22),transparent_70%)] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/65 bg-[#E6D2B0]/45 p-7 shadow-[0_32px_80px_rgba(89,58,18,0.12),inset_0_1px_0_rgba(255,255,255,0.62)] backdrop-blur-2xl md:p-10">
              <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-[#8A6837]">
                Madiha Maison
              </p>

              <p className="mt-4 font-serif text-[31px] leading-tight text-[#68491F] md:text-[38px]">
                Venda seu ouro com tranquilidade.
              </p>

              <div className="my-8 h-px w-full bg-[#765525]/18" />

              <div className="space-y-7">
                {points.map(([title, text], index) => (
                  <div key={title} className="grid grid-cols-[44px_1fr] gap-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7B5828]/18 bg-white/18 font-serif text-[14px] text-[#725022]">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <h3 className="font-serif text-[20px] leading-tight text-[#65461E]">
                        {title}
                      </h3>

                      <p className="mt-2 text-[11px] font-light leading-6 text-[#7A654A] md:text-[12px]">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 rounded-[1.35rem] border border-white/45 bg-[#F4E7D0]/35 px-5 py-5">
                <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#8B6B3C]">
                  Atendimento
                </p>

                <p className="mt-2 font-serif text-[19px] text-[#68491F]">
                  Vogue Square • Barra da Tijuca
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
