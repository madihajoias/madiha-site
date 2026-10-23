'use client';

import {
  useEffect,
  useMemo,
  useState,
} from 'react';

type GoldKarat =
  | '24k'
  | '22k'
  | '18k'
  | '16k'
  | '14k'
  | '12k'
  | '10k';

type GoldPriceResponse = {
  bolsa: Record<
    GoldKarat,
    number
  >;

  comercial: Record<
    GoldKarat,
    number
  >;

  updatedAt: string;
};

const karats: {
  value: GoldKarat;
  label: string;
  purity: string;
}[] = [
  {
    value: '24k',
    label: 'Ouro 24k',
    purity: '100%',
  },
  {
    value: '22k',
    label: 'Ouro 22k',
    purity: '91,67%',
  },
  {
    value: '18k',
    label: 'Ouro 18k',
    purity: '75%',
  },
  {
    value: '16k',
    label: 'Ouro 16k',
    purity: '66,67%',
  },
  {
    value: '14k',
    label: 'Ouro 14k',
    purity: '58,33%',
  },
  {
    value: '12k',
    label: 'Ouro 12k',
    purity: '50%',
  },
  {
    value: '10k',
    label: 'Ouro 10k',
    purity: '41,67%',
  },
];

const currencyFormatter =
  new Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  );

export default function CotacaoOuroTeoresSection() {
  const [
    prices,
    setPrices,
  ] =
    useState<GoldPriceResponse | null>(
      null
    );

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState('');

  useEffect(() => {
    let active = true;

    async function loadPrices() {
      try {
        setLoading(true);
        setError('');

        const response =
          await fetch(
            '/api/gold-price',
            {
              method:
                'GET',

              headers: {
                Accept:
                  'application/json',
              },

              cache:
                'no-store',
            }
          );

        const data =
          await response.json();

        if (
          !response.ok
        ) {
          throw new Error(
            data?.error ||
              'Não foi possível carregar a cotação.'
          );
        }

        if (active) {
          setPrices(
            data as GoldPriceResponse
          );
        }
      } catch (err) {
        if (active) {
          setError(
            err instanceof Error
              ? err.message
              : 'Não foi possível carregar a cotação.'
          );
        }
      } finally {
        if (active) {
          setLoading(
            false
          );
        }
      }
    }

    loadPrices();

    return () => {
      active = false;
    };
  }, []);

  const updatedLabel =
    useMemo(() => {
      if (
        !prices?.updatedAt
      ) {
        return null;
      }

      return new Date(
        prices.updatedAt
      ).toLocaleString(
        'pt-BR',
        {
          dateStyle:
            'short',

          timeStyle:
            'short',
        }
      );
    }, [prices]);

  return (
    <section
      id="cotacao-por-teor"
      aria-labelledby="cotacao-teores-title"
      className="
        relative
        overflow-hidden
        bg-[#EAD9BC]
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
              Cotação por teor
            </p>

            <h2
              id="cotacao-teores-title"
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
              Preço do ouro
              <br />
              por grama.
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
              Consulte abaixo a referência de mercado e o valor comercial
              por grama para cada teor de ouro disponível na cotação.
            </p>

            {updatedLabel && (
              <p
                className="
                  mt-4
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#947244]
                "
              >
                Atualizado em{' '}
                {updatedLabel}
              </p>
            )}
          </div>
        </div>

        {/* ERRO */}
        {error && (
          <div
            className="
              mt-12
              rounded-[1.5rem]
              border
              border-[#8E3232]/15
              bg-white/30
              px-6
              py-5
              text-[12px]
              leading-6
              text-[#7A3D35]
              backdrop-blur-xl
            "
          >
            {error}
          </div>
        )}

        {/* TABELA / CARDS */}
        <div
          className="
            mt-16
            grid
            gap-4
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {karats.map(
            (item) => {
              const market =
                prices?.bolsa[
                  item.value
                ];

              const commercial =
                prices?.comercial[
                  item.value
                ];

              return (
                <article
                  key={
                    item.value
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/58
                    bg-[#F2E3C9]/40
                    p-7
                    shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.52)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:bg-[#F5E8D2]/52
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
                      blur-[28px]
                      transition-transform
                      duration-500
                      group-hover:scale-125
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-4
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[8px]
                            font-semibold
                            uppercase
                            tracking-[0.20em]
                            text-[#947244]
                          "
                        >
                          Teor
                        </p>

                        <h3
                          className="
                            mt-2
                            font-serif
                            text-[28px]
                            font-normal
                            text-[#68491F]
                          "
                        >
                          {
                            item.label
                          }
                        </h3>
                      </div>

                      <span
                        className="
                          rounded-full
                          border
                          border-[#765525]/12
                          bg-white/22
                          px-3
                          py-2
                          text-[8px]
                          font-semibold
                          tracking-[0.14em]
                          text-[#80643C]
                        "
                      >
                        {
                          item.purity
                        }
                      </span>
                    </div>

                    <div
                      className="
                        my-6
                        h-px
                        w-full
                        bg-[#765525]/12
                      "
                    />

                    {/* MERCADO */}
                    <div>
                      <p
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[#947244]
                        "
                      >
                        Referência de mercado
                      </p>

                      <p
                        className="
                          mt-2
                          font-serif
                          text-[24px]
                          text-[#68491F]
                        "
                      >
                        {loading ||
                        market ===
                          undefined
                          ? '—'
                          : currencyFormatter.format(
                              market
                            )}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[9px]
                          text-[#806C50]
                        "
                      >
                        por grama
                      </p>
                    </div>

                    {/* COMERCIAL */}
                    <div
                      className="
                        mt-6
                        rounded-[1.3rem]
                        border
                        border-white/48
                        bg-white/20
                        px-5
                        py-4
                      "
                    >
                      <p
                        className="
                          text-[8px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-[#8C692E]
                        "
                      >
                        Referência comercial
                      </p>

                      <p
                        className="
                          mt-2
                          font-serif
                          text-[21px]
                          text-[#563A17]
                        "
                      >
                        {loading ||
                        commercial ===
                          undefined
                          ? '—'
                          : currencyFormatter.format(
                              commercial
                            )}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[9px]
                          text-[#806C50]
                        "
                      >
                        por grama
                      </p>
                    </div>
                  </div>
                </article>
              );
            }
          )}
        </div>

        {/* NOTA */}
        <div
          className="
            mt-12
            rounded-[1.7rem]
            border
            border-[#765525]/10
            bg-white/16
            px-6
            py-5
            backdrop-blur-xl
            md:px-8
          "
        >
          <p
            className="
              text-[10px]
              font-light
              leading-6
              text-[#725D41]
            "
          >
            Os valores apresentados são referências e podem variar ao longo
            do dia. O valor final de uma peça depende da avaliação técnica,
            do teor confirmado, do peso e das demais características do ouro.
          </p>
        </div>
      </div>
    </section>
  );
}