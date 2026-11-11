export default function CompraJoiasAntigasCTASection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    '5521993530012';

  const whatsappMessage =
    'Olá, Madiha Maison! Gostaria de avaliar uma joia antiga.';

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

  return (
    <section
      id="avaliacao-presencial"
      aria-labelledby="cta-joias-antigas-title"
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
            relative
            overflow-hidden
            rounded-[2.4rem]
            border
            border-[#5A1017]/10
            bg-[#4F1720]
            px-8
            py-12
            shadow-[0_34px_90px_rgba(55,20,26,0.16)]
            md:px-10
            md:py-14
            lg:px-14
            lg:py-16
          "
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              h-80
              w-80
              rounded-full
              bg-[#7A1622]/40
              blur-[90px]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-28
              -right-20
              h-80
              w-80
              rounded-full
              bg-[#C7A87A]/14
              blur-[90px]
            "
          />

          <div
            className="
              relative
              z-10
              grid
              gap-12
              lg:grid-cols-[1.08fr_0.92fr]
              lg:items-center
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
                Antes de vender uma joia antiga
              </p>

              <h2
                id="cta-joias-antigas-title"
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
                Entenda primeiro o que você realmente possui.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[720px]
                  text-[13px]
                  font-light
                  leading-7
                  text-[#D0C1BE]
                  md:text-[15px]
                  md:leading-8
                "
              >
                Uma joia antiga pode reunir ouro, diamantes, gemas, assinatura,
                design, história familiar e características que não aparecem
                em uma simples pesagem.
              </p>

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-[56px]
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
                  Quero avaliar minha joia
                </a>

                <a
                  href="#localizacao"
                  className="
                    inline-flex
                    min-h-[56px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/14
                    bg-white/[0.045]
                    px-8
                    text-center
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#F7F3EF]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[#C7A87A]/45
                    hover:bg-white/[0.07]
                  "
                >
                  Ver localização
                </a>
              </div>
            </div>

            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.045]
                p-7
                shadow-[0_20px_60px_rgba(20,5,8,0.14),inset_0_1px_0_rgba(255,255,255,0.035)]
                backdrop-blur-xl
                md:p-8
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.24em]
                  text-[#D6BB8B]
                "
              >
                Traga a peça para uma análise individual
              </p>

              <h3
                className="
                  mt-5
                  font-serif
                  text-[2.2rem]
                  font-normal
                  leading-[1]
                  tracking-[-0.03em]
                  text-[#F7F3EF]
                "
              >
                A avaliação presencial ajuda a transformar dúvida em informação.
              </h3>

              <p
                className="
                  mt-6
                  text-[11px]
                  font-light
                  leading-6
                  text-[#CDBDBA]
                "
              >
                O objetivo é observar a joia real, compreender seus elementos e
                apresentar uma leitura mais completa antes de qualquer decisão.
              </p>

              <div className="mt-8 grid gap-3">
                {[
                  'Ouro e teor',
                  'Diamantes e gemas',
                  'Marca e assinatura',
                  'Conservação e construção',
                  'Documentação disponível',
                  'Condições comerciais',
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-[1.25rem]
                      border
                      border-white/10
                      bg-white/[0.035]
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
            </div>
          </div>
        </div>

        <div
          className="
            mt-6
            grid
            gap-4
            sm:grid-cols-3
          "
        >
          {[
            ['Metal', 'Análise presencial'],
            ['Pedras', 'Leitura individual'],
            ['Atendimento', 'Vogue Square'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="
                rounded-[1.6rem]
                border
                border-[#5A1017]/10
                bg-[#FCFAF7]
                px-6
                py-6
                shadow-[0_16px_42px_rgba(54,30,30,0.05)]
              "
            >
              <p
                className="
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A17D4F]
                "
              >
                {label}
              </p>

              <p
                className="
                  mt-2
                  font-serif
                  text-[20px]
                  leading-tight
                  text-[#4F1720]
                "
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}