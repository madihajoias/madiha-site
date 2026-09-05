'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';

type GoldKarat =
  | '24k'
  | '22k'
  | '18k'
  | '16k'
  | '14k'
  | '12k'
  | '10k';

type GoldPriceResponse = {
  bolsa: Record<GoldKarat, number>;
  comercial: Record<GoldKarat, number>;
  updatedAt: string;
};

const KARATS: {
  value: GoldKarat;
  label: string;
  purity: string;
}[] = [
  { value: '24k', label: 'Ouro 24k', purity: '100%' },
  { value: '22k', label: 'Ouro 22k', purity: '91,67%' },
  { value: '18k', label: 'Ouro 18k', purity: '75%' },
  { value: '16k', label: 'Ouro 16k', purity: '66,67%' },
  { value: '14k', label: 'Ouro 14k', purity: '58,33%' },
  { value: '12k', label: 'Ouro 12k', purity: '50%' },
  { value: '10k', label: 'Ouro 10k', purity: '41,67%' },
];

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function GoldCalculator() {
  const [weight, setWeight] = useState('');
  const [karat, setKarat] = useState<GoldKarat>('18k');

  const [prices, setPrices] = useState<GoldPriceResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasCalculated, setHasCalculated] = useState(false);

  // Pré-carrega a mesma cotação usada pela calculadora para alimentar o letreiro.
  useEffect(() => {
    let active = true;

    async function loadTickerPrices() {
      try {
        const response = await fetch('/api/gold-price', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        });

        if (!response.ok) return;

        const data: GoldPriceResponse = await response.json();

        if (active) {
          setPrices(data);
        }
      } catch {
        // O letreiro continua com o texto institucional caso a API esteja indisponível.
      }
    }

    loadTickerPrices();

    return () => {
      active = false;
    };
  }, []);

  const parsedWeight = useMemo(() => {
    return Number(
      weight
        .replace(',', '.')
        .trim()
    );
  }, [weight]);

  const selectedKarat = useMemo(() => {
    return KARATS.find(
      (item) => item.value === karat
    );
  }, [karat]);

  const result = useMemo(() => {
    if (
      !prices ||
      !Number.isFinite(parsedWeight) ||
      parsedWeight <= 0
    ) {
      return null;
    }

    return {
      market:
        prices.bolsa[karat] * parsedWeight,

      commercial:
        prices.comercial[karat] * parsedWeight,

      marketPerGram:
        prices.bolsa[karat],

      commercialPerGram:
        prices.comercial[karat],
    };
  }, [prices, karat, parsedWeight]);

  const tickerItems = useMemo(() => {
    const ounceBRL = prices
      ? prices.bolsa['24k'] * 31.1035
      : null;

    const updatedLabel = prices?.updatedAt
      ? new Date(prices.updatedAt).toLocaleString('pt-BR', {
          dateStyle: 'long',
          timeStyle: 'short',
        })
      : 'cotação sendo atualizada';

    return [
      'Madiha Cotações',
      'Cotação do ouro hoje',
      ounceBRL
        ? `Onça Troy 31,1035 g • ${currencyFormatter.format(ounceBRL)}`
        : 'Onça Troy • 31,1035 g',
      prices
        ? `Ouro 24k • 1 g ${currencyFormatter.format(prices.bolsa['24k'])}`
        : 'Ouro 24k • cotação atualizada',
      prices
        ? `Preço comercial de referência 24k • ${currencyFormatter.format(prices.comercial['24k'])}/g`
        : 'Preço comercial de referência',
      prices
        ? `Ouro 18k • 1 g ${currencyFormatter.format(prices.bolsa['18k'])}`
        : 'Ouro 18k • cotação atualizada',
      'Compramos ouro, lingotes e barras',
      'Avaliação de ouro 24k a 10k',
      'Vogue Square • Barra da Tijuca • Rio de Janeiro',
      'Balança de precisão hidrostática • comprovante na avaliação',
      'Compramos joias de ouro em qualquer estado',
      'Avaliação online, na loja com hora marcada ou pela calculadora de ouro',
      `Madiha Informa • ${updatedLabel}`,
    ];
  }, [prices]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError('');

    if (
      !Number.isFinite(parsedWeight) ||
      parsedWeight <= 0
    ) {
      setHasCalculated(false);
      setError(
        'Informe um peso válido em gramas.'
      );

      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        '/api/gold-price',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            'Não foi possível consultar a cotação.'
        );
      }

      setPrices(data);

      window.setTimeout(() => {
        setHasCalculated(true);
      }, 120);
    } catch (err) {
      setHasCalculated(false);

      setError(
        err instanceof Error
          ? err.message
          : 'Não foi possível calcular o valor.'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="calculadora-de-ouro"
      aria-labelledby="gold-calculator-title"
      className="
        relative
        flex
        min-h-[140vh]
        w-full
        flex-col
        justify-center
        overflow-hidden
        bg-[#EFE4D1]
        font-sans
        pt-20
      "
    >

      {/* =====================================================
          LETREIRO SUPERIOR — COTAÇÃO / SERVIÇOS
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          top-0
          z-50
          flex
          w-full
          items-center
          overflow-hidden
          border-b
          border-[#765525]/10
          bg-[#B8935C]/22
          py-6
          backdrop-blur-md
        "
      >
        <div className="gold-ticker-track flex w-max items-center">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              className="flex shrink-0 items-center whitespace-nowrap"
              aria-hidden={copyIndex === 1}
            >
              {tickerItems.map((item, index) => (
                <div
                  key={`${copyIndex}-${index}`}
                  className="flex items-center"
                >
                  <span
                    className={`mx-5 text-[10px] uppercase tracking-[0.28em] text-[#5A431F] ${
                      index === 0 ? 'font-semibold' : 'font-medium'
                    }`}
                  >
                    {item}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-[#765525]/30"
                  >
                    •
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* =====================================================
          ATMOSFERA
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            inset-0
            calculator-background
          "
        />

        <div
          className="
            calculator-orb
            absolute
            -left-[14%]
            -top-[8%]
            h-[54vw]
            w-[54vw]
            rounded-full
          "
        />

        <div
          className="
            calculator-orb
            calculator-delay-1
            absolute
            -right-[12%]
            top-[12%]
            h-[50vw]
            w-[50vw]
            rounded-full
          "
        />

        <div
          className="
            calculator-orb
            calculator-delay-2
            absolute
            -bottom-[24%]
            left-[12%]
            h-[60vw]
            w-[60vw]
            rounded-full
          "
        />

        <div
          className="
            calculator-spotlight
            absolute
            right-[1%]
            top-[18%]
            h-[650px]
            w-[700px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[14%]
            hidden
            h-[70%]
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-[#826033]/15
            to-transparent
            md:block
          "
        />
      </div>

      {/* =====================================================
          CONTEÚDO
      ====================================================== */}

      <div
        className="
          container
          relative
          z-10
          mx-auto
          flex
          h-full
          flex-col
          items-center
          justify-between
          gap-16
          px-6
          py-24
          md:flex-row
          md:gap-12
        "
      >
        {/* ===================================================
            ESQUERDA
        ==================================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            text-center
            md:w-1/2
            md:items-start
            md:text-left
          "
        >
          <p
            className="
              mb-5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-[#8F6E3F]
            "
          >
            Madiha Maison • Cotação do Ouro
          </p>

          <h2
            id="gold-calculator-title"
            className="
              max-w-xl
              font-serif
              text-4xl
              leading-[1.04]
              text-[#765525]
              md:text-5xl
              lg:text-6xl
            "
          >
            Calculadora
            <br />
            de Ouro
          </h2>

          <p
            className="
              mt-7
              max-w-md
              text-sm
              font-light
              leading-7
              text-[#806C50]
              md:text-base
            "
          >
            Consulte uma estimativa do valor
            comercial do seu ouro com base no
            peso, no teor informado e na
            cotação atual do mercado.
          </p>

          <div
            className="
              mt-9
              h-px
              w-20
              bg-gradient-to-r
              from-[#956D32]
              to-transparent
            "
          />

          <div
            className="
              mt-11
              grid
              w-full
              max-w-md
              grid-cols-3
              gap-3
            "
          >
            {[
              ['Cotação', 'Atualizada'],
              ['Teores', '24k a 10k'],
              ['Resultado', 'Imediato'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="
                  info-glass
                  rounded-[1.25rem]
                  px-4
                  py-5
                  md:px-5
                "
              >
                <p
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#86663A]
                  "
                >
                  {label}
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-sm
                    text-[#68491F]
                    md:text-base
                  "
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            DIREITA — CALCULADORA
        ==================================================== */}

        <div
          className="
            flex
            w-full
            items-center
            justify-center
            md:w-1/2
          "
        >
          <div
            className="
              calculator-stage
              relative
              w-full
              max-w-[520px]
            "
          >
            <div
              aria-hidden="true"
              className="calculator-floor-shadow"
            />

            <div
              aria-hidden="true"
              className="calculator-outer-halo"
            />

            <div className="calculator-jewel">
              <div className="calculator-jewel-depth" />

              <div className="calculator-jewel-glow" />

              <div className="calculator-jewel-reflection" />

              <div className="calculator-jewel-edge" />

              <div
                className="
                  relative
                  z-20
                  p-7
                  md:p-10
                "
              >
                {/* CABEÇALHO */}

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-[#68491F]
                  "
                >
                  Simulação de valor
                </p>

                <h3
                  className="
                    mt-3
                    font-serif
                    text-3xl
                    leading-[1.12]
                    text-[#4F3412]
                    md:text-[2.15rem]
                  "
                >
                  Informe os dados
                  <br />
                  do seu ouro
                </h3>

                <div
                  className="
                    mt-8
                    h-px
                    w-16
                    bg-[#52350F]/30
                  "
                />

                {/* FORM */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                >
                  {/* PESO */}

                  <div>
                    <label
                      htmlFor="gold-weight"
                      className="
                        mb-2
                        block
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.19em]
                        text-[#5F431F]
                      "
                    >
                      Peso do ouro
                    </label>

                    <div className="relative">
                      <input
                        id="gold-weight"
                        type="text"
                        inputMode="decimal"
                        autoComplete="off"
                        placeholder="Ex: 15,5"
                        value={weight}
                        onChange={(event) =>
                          setWeight(
                            event.target.value
                          )
                        }
                        className="
                          luxury-field
                          w-full
                          rounded-full
                          px-6
                          py-[17px]
                          pr-16
                          font-serif
                          text-lg
                          text-[#503615]
                          outline-none
                          placeholder:text-[#8E7757]
                        "
                      />

                      <span
                        className="
                          pointer-events-none
                          absolute
                          right-6
                          top-1/2
                          -translate-y-1/2
                          text-[9px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          text-[#725736]
                        "
                      >
                        g
                      </span>
                    </div>
                  </div>

                  {/* TEOR */}

                  <div>
                    <label
                      htmlFor="gold-karat"
                      className="
                        mb-2
                        block
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.19em]
                        text-[#5F431F]
                      "
                    >
                      Teor do ouro
                    </label>

                    <div className="relative">
                      <select
                        id="gold-karat"
                        value={karat}
                        onChange={(event) =>
                          setKarat(
                            event.target
                              .value as GoldKarat
                          )
                        }
                        className="
                          luxury-field
                          w-full
                          cursor-pointer
                          appearance-none
                          rounded-full
                          px-6
                          py-[17px]
                          pr-12
                          text-sm
                          font-medium
                          text-[#503615]
                          outline-none
                        "
                      >
                        {KARATS.map((item) => (
                          <option
                            key={item.value}
                            value={item.value}
                          >
                            {item.label} —{' '}
                            {item.purity}
                          </option>
                        ))}
                      </select>

                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          right-6
                          top-1/2
                          -translate-y-1/2
                          text-[#5B3D18]
                        "
                      >
                        ↓
                      </span>
                    </div>
                  </div>

                  {/* ERRO */}

                  {error && (
                    <div
                      role="alert"
                      className="
                        rounded-2xl
                        border
                        border-white/45
                        bg-white/28
                        px-5
                        py-4
                        text-sm
                        leading-6
                        text-[#4E3515]
                        backdrop-blur-xl
                      "
                    >
                      {error}
                    </div>
                  )}

                  {/* BOTÃO */}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`
                      luxury-button
                      relative
                      flex
                      w-full
                      items-center
                      justify-center
                      overflow-visible
                      rounded-full
                      px-6
                      py-[17px]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.24em]
                      outline-none

                      ${
                        loading
                          ? 'luxury-button-loading'
                          : ''
                      }
                    `}
                  >
                    <span
                      aria-hidden="true"
                      className="luxury-button-glow"
                    />

                    <span
                      className="
                        relative
                        z-20
                        flex
                        items-center
                        justify-center
                        gap-3
                      "
                    >
                      {loading && (
                        <span
                          aria-hidden="true"
                          className="
                            h-3
                            w-3
                            animate-spin
                            rounded-full
                            border
                            border-white/40
                            border-t-white
                          "
                        />
                      )}

                      {loading
                        ? 'Consultando cotação...'
                        : hasCalculated
                          ? 'Recalcular'
                          : 'Calcular valor'}
                    </span>
                  </button>
                </form>

                {/* STATUS ONLINE */}

                <div
                  aria-live="polite"
                  className="
                    mt-5
                    flex
                    min-h-[20px]
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  <span className="live-indicator">
                    <span />
                  </span>

                  <p
                    className="
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#553C1B]
                    "
                  >
                    {loading
                      ? 'Atualizando mercado'
                      : 'Cotação consultada em tempo real'}
                  </p>
                </div>

                {/* =================================================
                    RESULTADO
                ================================================== */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-700
                    ease-out

                    ${
                      hasCalculated && result
                        ? `
                          mt-8
                          grid-rows-[1fr]
                          translate-y-0
                          opacity-100
                          blur-0
                        `
                        : `
                          grid-rows-[0fr]
                          translate-y-4
                          opacity-0
                          blur-[4px]
                        `
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    {result && (
                      <div className="result-inner-glass relative overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="result-inner-light"
                        />

                        <div className="relative z-10">
                          <p
                            className="
                              text-[8px]
                              font-semibold
                              uppercase
                              tracking-[0.22em]
                              text-[#5D411E]
                            "
                          >
                            Valor comercial
                            estimado
                          </p>

                          <p
                            className="
                              mt-3
                              break-words
                              font-serif
                              text-4xl
                              leading-none
                              text-[#412907]
                              md:text-[2.85rem]
                            "
                          >
                            {currencyFormatter.format(
                              result.commercial
                            )}
                          </p>

                          <div
                            className="
                              my-6
                              h-px
                              w-full
                              bg-[#4C300C]/18
                            "
                          />

                          <div
                            className="
                              flex
                              flex-col
                              gap-4
                              sm:flex-row
                              sm:items-end
                              sm:justify-between
                            "
                          >
                            <div>
                              <p
                                className="
                                  text-[8px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.16em]
                                  text-[#654924]
                                "
                              >
                                Simulação
                              </p>

                              <p
                                className="
                                  mt-1
                                  text-xs
                                  text-[#51391B]
                                "
                              >
                                {parsedWeight.toLocaleString(
                                  'pt-BR'
                                )}{' '}
                                g •{' '}
                                {selectedKarat?.label}
                              </p>
                            </div>

                            <div className="sm:text-right">
                              <p
                                className="
                                  text-[8px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.16em]
                                  text-[#654924]
                                "
                              >
                                Comercial / g
                              </p>

                              <p
                                className="
                                  mt-1
                                  font-serif
                                  text-base
                                  text-[#412907]
                                "
                              >
                                {currencyFormatter.format(
                                  result.commercialPerGram
                                )}
                              </p>
                            </div>
                          </div>

                          {/* REFERÊNCIA */}

                          <div
                            className="
                              result-reference
                              mt-6
                              rounded-2xl
                              px-5
                              py-4
                            "
                          >
                            <div
                              className="
                                flex
                                flex-col
                                gap-3
                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                              "
                            >
                              <div>
                                <p
                                  className="
                                    text-[8px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.16em]
                                    text-[#654924]
                                  "
                                >
                                  Referência da
                                  bolsa
                                </p>

                                <p
                                  className="
                                    mt-1
                                    text-[10px]
                                    text-[#584222]
                                  "
                                >
                                  Valor teórico
                                  do metal
                                </p>
                              </div>

                              <p
                                className="
                                  font-serif
                                  text-xl
                                  text-[#412907]
                                "
                              >
                                {currencyFormatter.format(
                                  result.market
                                )}
                              </p>
                            </div>
                          </div>

                          <p
                            className="
                              mt-5
                              text-[10px]
                              font-normal
                              leading-5
                              text-[#513A1C]
                              md:text-[11px]
                            "
                          >
                            Este valor representa uma
                            estimativa inicial. A
                            proposta final poderá
                            variar após avaliação
                            presencial, considerando
                            características da peça,
                            materiais agregados,
                            processo de refino e
                            demais aspectos técnicos.
                          </p>

                          {prices?.updatedAt && (
                            <p
                              className="
                                mt-5
                                text-[8px]
                                font-medium
                                uppercase
                                tracking-[0.12em]
                                text-[#674D2A]
                              "
                            >
                              Cotação consultada em{' '}
                              {new Date(
                                prices.updatedAt
                              ).toLocaleString(
                                'pt-BR',
                                {
                                  dateStyle:
                                    'short',
                                  timeStyle:
                                    'short',
                                }
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          CSS
      ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* ===============================================
               LETREIRO SUPERIOR
            =============================================== */

            .gold-ticker-track {
              display: flex;
              width: max-content;

              animation:
                goldTickerMarquee
                46s
                linear
                infinite;

              will-change: transform;
            }

            @keyframes goldTickerMarquee {
              from {
                transform: translate3d(0, 0, 0);
              }

              to {
                transform: translate3d(-50%, 0, 0);
              }
            }

            @media (hover: hover) and (pointer: fine) {
              .gold-ticker-track:hover {
                animation-play-state: paused;
              }
            }

            /* ===============================================
               FUNDO
            =============================================== */

            .calculator-background {
              background:
                radial-gradient(
                  circle at 18% 20%,
                  rgba(255,253,248,.90) 0%,
                  rgba(244,235,219,.93) 32%,
                  rgba(232,215,187,.96) 67%,
                  rgba(222,199,159,.94) 100%
                );
            }

            .calculator-orb {
              background:
                radial-gradient(
                  circle,
                  rgba(255,246,226,.32) 0%,
                  rgba(209,180,130,.20) 43%,
                  transparent 72%
                );

              filter:
                blur(72px);

              animation:
                calculatorAtmosphere
                16s
                ease-in-out
                infinite
                alternate;
            }

            .calculator-delay-1 {
              animation-delay: 2s;
            }

            .calculator-delay-2 {
              animation-delay: 4s;
            }

            @keyframes calculatorAtmosphere {
              0% {
                transform:
                  translate3d(0,0,0)
                  scale(1);
              }

              50% {
                transform:
                  translate3d(32px,-40px,0)
                  scale(1.08);
              }

              100% {
                transform:
                  translate3d(-22px,25px,0)
                  scale(.96);
              }
            }

            .calculator-spotlight {
              border-radius: 50%;

              background:
                radial-gradient(
                  circle,
                  rgba(255,249,233,.62) 0%,
                  rgba(235,215,180,.31) 37%,
                  rgba(183,145,85,.13) 62%,
                  transparent 78%
                );

              filter: blur(58px);
            }


            /* ===============================================
               INDICADORES
            =============================================== */

            .info-glass {
              border:
                1px solid
                rgba(255,255,255,.66);

              background:
                rgba(239,224,198,.36);

              backdrop-filter:
                blur(20px);

              box-shadow:
                0 14px 36px
                rgba(120,88,42,.08),

                inset 0 1px 0
                rgba(255,255,255,.62);

              transition:
                transform .45s ease,
                box-shadow .45s ease,
                background .45s ease;
            }

            @media
            (hover:hover)
            and
            (pointer:fine) {
              .info-glass:hover {
                transform:
                  translateY(-2px);

                background:
                  rgba(245,232,209,.48);

                box-shadow:
                  0 18px 40px
                  rgba(120,88,42,.11),

                  inset 0 1px 0
                  rgba(255,255,255,.76);
              }
            }


            /* ===============================================
               PALCO
            =============================================== */

            .calculator-stage {
              perspective: 1500px;
            }

            .calculator-floor-shadow {
              position: absolute;

              left: 7%;
              right: 7%;
              bottom: -48px;

              height: 92px;

              border-radius: 50%;

              background:
                radial-gradient(
                  ellipse,
                  rgba(82,56,20,.33) 0%,
                  rgba(111,75,26,.19) 35%,
                  transparent 72%
                );

              filter: blur(27px);
            }

            .calculator-outer-halo {
              position: absolute;

              inset: -42px;

              border-radius:
                76px 76px
                116px 76px;

              background:
                radial-gradient(
                  circle at 50% 42%,
                  rgba(244,220,176,.45),
                  rgba(179,139,74,.22) 45%,
                  transparent 72%
                );

              filter:
                blur(39px);

              pointer-events: none;

              opacity: .76;
            }


            /* ===============================================
               CALCULADORA
            =============================================== */

            .calculator-jewel {
              position: relative;

              overflow: hidden;

              border-radius:
                54px 54px
                90px 54px;

              border:
                1px solid
                rgba(255,248,232,.72);

              background:
                linear-gradient(
                  145deg,
                  rgba(199,165,108,.96) 0%,
                  rgba(177,136,72,.95) 38%,
                  rgba(154,110,49,.94) 70%,
                  rgba(188,148,84,.94) 100%
                );

              backdrop-filter:
                blur(36px)
                saturate(125%);

              box-shadow:
                0 48px 112px
                rgba(77,49,12,.34),

                0 17px 46px
                rgba(110,72,19,.23),

                inset 0 1px 0
                rgba(255,255,255,.48),

                inset 0 -1px 0
                rgba(71,45,12,.20);

              transform:
                translateZ(0);

              transition:
                transform .65s
                cubic-bezier(
                  .22,
                  1,
                  .36,
                  1
                ),
                box-shadow .65s ease;
            }

            @media
            (hover:hover)
            and
            (pointer:fine) {
              .calculator-jewel:hover {
                transform:
                  translateY(-4px);

                box-shadow:
                  0 58px 126px
                  rgba(77,49,12,.37),

                  0 21px 52px
                  rgba(110,72,19,.25),

                  inset 0 1px 0
                  rgba(255,255,255,.53);
              }
            }

            .calculator-jewel-depth {
              position: absolute;
              inset: 1px;

              border-radius:
                53px 53px
                89px 53px;

              background:
                linear-gradient(
                  155deg,
                  rgba(255,250,237,.19),
                  transparent 31%,
                  rgba(68,42,8,.10) 72%,
                  rgba(255,241,213,.10)
                );

              pointer-events: none;
            }

            .calculator-jewel-glow {
              position: absolute;

              width: 370px;
              height: 370px;

              right: -135px;
              top: -150px;

              border-radius: 50%;

              background:
                rgba(255,237,199,.43);

              filter:
                blur(78px);

              pointer-events: none;
            }

            .calculator-jewel-reflection {
              position: absolute;

              width: 90%;
              height: 180px;

              left: -28%;
              top: -78px;

              transform:
                rotate(-12deg);

              border-radius: 50%;

              background:
                linear-gradient(
                  90deg,
                  transparent,
                  rgba(255,255,255,.23),
                  rgba(255,255,255,.05),
                  transparent
                );

              filter:
                blur(12px);

              pointer-events: none;
            }

            .calculator-jewel-edge {
              position: absolute;

              left: 38px;
              right: 68px;
              top: 0;

              height: 1px;

              background:
                linear-gradient(
                  90deg,
                  transparent,
                  rgba(255,255,255,.82),
                  transparent
                );

              pointer-events: none;
            }


            /* ===============================================
               CAMPOS
            =============================================== */

            .luxury-field {
              border:
                1px solid
                rgba(255,249,235,.70);

              background:
                rgba(255,247,229,.82);

              box-shadow:
                inset 0 1px 0
                rgba(255,255,255,.70),

                0 8px 22px
                rgba(65,41,9,.09);

              backdrop-filter:
                blur(18px);

              transition:
                transform .3s ease,
                background .3s ease,
                border-color .3s ease,
                box-shadow .35s ease;
            }

            @media
            (hover:hover)
            and
            (pointer:fine) {
              .luxury-field:hover {
                background:
                  rgba(255,251,241,.94);

                border-color:
                  rgba(255,255,255,.90);
              }
            }

            .luxury-field:focus {
              background:
                rgba(255,254,249,.98);

              border-color:
                white;

              transform:
                translateY(-1px);

              box-shadow:
                0 0 0 3px
                rgba(255,250,237,.15),

                0 12px 30px
                rgba(63,40,9,.13),

                inset 0 1px 0
                white;
            }


            /* ===============================================
               BOTÃO
            =============================================== */

            .luxury-button {
              min-height: 52px;

              border: none;

              color: white;

              background:
                linear-gradient(
                  135deg,
                  #98703a 0%,
                  #ae8246 48%,
                  #936936 100%
                );

              box-shadow:
                0 13px 28px
                rgba(67,42,8,.22),

                inset 0 1px 0
                rgba(255,255,255,.20);

              isolation: isolate;

              transition:
                transform .22s ease,
                background .35s ease,
                box-shadow .35s ease;
            }

            .luxury-button-glow {
              position: absolute;

              inset: -8px;

              z-index: -1;

              border-radius: 999px;

              opacity: 0;

              background:
                rgba(224,190,130,.30);

              filter:
                blur(12px);

              transform:
                scale(.97);

              transition:
                opacity .30s ease,
                transform .34s ease;

              pointer-events: none;
            }

            @media
            (hover:hover)
            and
            (pointer:fine) {
              .luxury-button:hover {
                transform:
                  translateY(-2px);

                background:
                  linear-gradient(
                    135deg,
                    #a57a40 0%,
                    #b88d50 50%,
                    #9c713b 100%
                  );

                box-shadow:
                  0 0 17px
                  rgba(224,190,130,.21),

                  0 17px 31px
                  rgba(67,42,8,.22),

                  inset 0 1px 0
                  rgba(255,255,255,.24);
              }

              .luxury-button:hover
              .luxury-button-glow {
                opacity: .48;

                transform:
                  scale(1.01);
              }
            }

            .luxury-button:active {
              transform:
                translateY(1px)
                scale(.985);

              background:
                linear-gradient(
                  135deg,
                  #ad8247,
                  #bd9455,
                  #a1763f
                );

              box-shadow:
                0 0 16px
                rgba(226,193,136,.26),

                0 7px 15px
                rgba(67,42,8,.17),

                inset 0 2px 5px
                rgba(66,39,5,.12);

              transition-duration:
                90ms;
            }

            .luxury-button:active
            .luxury-button-glow {
              opacity: .55;
            }

            .luxury-button-loading {
              cursor: wait;
              opacity: .84;
            }


            /* ===============================================
               STATUS ONLINE — VERDE
            =============================================== */

            .live-indicator {
              position: relative;

              display: inline-flex;

              width: 6px;
              height: 6px;
            }

            .live-indicator::before {
              content: '';

              position: absolute;

              inset: -4px;

              border-radius: 50%;

              background:
                rgba(76,154,97,.22);

              animation:
                livePulse
                1.8s
                ease-out
                infinite;
            }

            .live-indicator span {
              position: relative;

              width: 6px;
              height: 6px;

              border-radius: 50%;

              background:
                #4C9A61;

              box-shadow:
                0 0 7px
                rgba(76,154,97,.36);
            }

            @keyframes livePulse {
              0% {
                transform:
                  scale(.70);

                opacity: .75;
              }

              100% {
                transform:
                  scale(2.25);

                opacity: 0;
              }
            }


            /* ===============================================
               RESULTADO
            =============================================== */

            .result-inner-glass {
              border-radius:
                28px 28px
                42px 28px;

              border:
                1px solid
                rgba(255,248,231,.44);

              background:
                linear-gradient(
                  145deg,
                  rgba(255,246,225,.42),
                  rgba(255,235,198,.24)
                );

              padding: 24px;

              backdrop-filter:
                blur(26px);

              box-shadow:
                inset 0 1px 0
                rgba(255,255,255,.40),

                0 18px 45px
                rgba(61,38,7,.11);

              animation:
                resultReveal
                .82s
                cubic-bezier(
                  .22,
                  1,
                  .36,
                  1
                )
                both;
            }

            .result-inner-light {
              position: absolute;

              width: 190px;
              height: 190px;

              right: -75px;
              top: -80px;

              border-radius: 50%;

              background:
                rgba(255,237,198,.34);

              filter:
                blur(50px);
            }

            .result-reference {
              border:
                1px solid
                rgba(255,250,237,.42);

              background:
                rgba(255,247,229,.28);

              backdrop-filter:
                blur(16px);

              box-shadow:
                inset 0 1px 0
                rgba(255,255,255,.27);
            }

            @keyframes resultReveal {
              0% {
                opacity: 0;

                transform:
                  translateY(16px)
                  scale(.975);

                filter:
                  blur(7px);
              }

              62% {
                opacity: 1;

                transform:
                  translateY(-2px)
                  scale(1.004);
              }

              100% {
                opacity: 1;

                transform:
                  translateY(0)
                  scale(1);

                filter:
                  blur(0);
              }
            }


            /* ===============================================
               MOBILE
            =============================================== */

            @media
            (max-width: 767px) {
              .calculator-jewel {
                border-radius:
                  38px 38px
                  58px 38px;
              }

              .calculator-floor-shadow {
                bottom: -28px;
              }

              .calculator-outer-halo {
                inset: -22px;

                border-radius:
                  48px 48px
                  70px 48px;
              }

              .result-inner-glass {
                padding: 20px;
              }
            }


            /* ===============================================
               REDUCED MOTION
            =============================================== */

            @media
            (prefers-reduced-motion: reduce) {
              .calculator-orb,
              .live-indicator::before,
              .result-inner-glass {
                animation:
                  none !important;
              }

              .calculator-jewel,
              .luxury-button,
              .luxury-button-glow,
              .luxury-field,
              .info-glass {
                transition:
                  none !important;
              }
            }
          `,
        }}
      />
    </section>
  );
}