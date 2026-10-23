const benefits = [
  ['Segurança', 'Atendimento com discrição', 'A avaliação é realizada em ambiente profissional, com atenção à privacidade e acompanhamento durante todo o processo.'],
  ['Cotação', 'Referência comercial atualizada', 'A proposta considera o teor identificado, o peso da peça e a cotação comercial aplicável no momento da avaliação.'],
  ['Transparência', 'Processo claro do início ao fim', 'Você acompanha a análise e recebe as informações necessárias antes de decidir pela venda.'],
];

export default function SegurancaCotacaoSection() {
  return (
    <section
      id="seguranca-cotacao"
      aria-labelledby="seguranca-cotacao-title"
      className="relative overflow-hidden bg-[#E9D8BA] py-24 md:py-32 lg:py-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[12%] top-[4%] h-[48vw] w-[48vw] rounded-full bg-[radial-gradient(circle,rgba(255,245,223,0.32)_0%,rgba(211,178,121,0.15)_48%,transparent_74%)] blur-[75px]" />
        <div className="absolute -right-[16%] bottom-[-20%] h-[58vw] w-[58vw] rounded-full bg-[radial-gradient(circle,rgba(171,125,61,0.18)_0%,transparent_70%)] blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-6 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          <div className="max-w-[620px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#876536] md:text-[10px]">
              Segurança • Melhor cotação
            </p>

            <h2
              id="seguranca-cotacao-title"
              className="mt-6 font-serif text-[3rem] font-normal leading-[1.01] tracking-[-0.025em] text-[#6E4B1C] sm:text-[3.8rem] md:text-[4.6rem]"
            >
              Valor e confiança
              <br />
              na mesma avaliação.
            </h2>

            <p className="mt-8 max-w-[540px] text-[14px] font-light leading-8 text-[#7A6243] md:text-[15px]">
              Vender ouro exige mais do que uma cotação. Exige um processo seguro, técnico e transparente, conduzido por uma equipe especializada.
            </p>

            <div className="mt-10 h-px w-20 bg-gradient-to-r from-[#8A6230] to-transparent" />

            <div className="mt-10 grid max-w-[560px] grid-cols-2 gap-3">
              {[
                ['24K a 10K', 'Teores avaliados'],
                ['Vogue Square', 'Atendimento'],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-[1.4rem] border border-white/55 bg-[#F2E5CF]/38 px-5 py-5 shadow-[0_16px_38px_rgba(95,64,22,0.08),inset_0_1px_0_rgba(255,255,255,0.48)] backdrop-blur-xl"
                >
                  <p className="font-serif text-[22px] text-[#66461D]">{value}</p>
                  <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#8E7047]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {benefits.map(([eyebrow, title, text]) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-[#F0E0C4]/42 p-7 shadow-[0_20px_55px_rgba(91,61,21,0.08),inset_0_1px_0_rgba(255,255,255,0.58)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:bg-[#F3E5CD]/55 md:p-9"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-white/10" />

                <p className="text-[8px] font-semibold uppercase tracking-[0.26em] text-[#927141]">
                  {eyebrow}
                </p>

                <h3 className="mt-4 font-serif text-[26px] font-normal leading-tight text-[#65461E] md:text-[30px]">
                  {title}
                </h3>

                <p className="mt-4 max-w-[620px] text-[12px] font-light leading-7 text-[#7A654A] md:text-[13px]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
