'use client';

import { useEffect, useMemo, useState } from 'react';

type GoldPriceResponse = {
  updatedAt?: string;
  bolsa?: {
    '24k'?: number;
    [key: string]: number | undefined;
  };
  comercial?: {
    '24k'?: number;
    [key: string]: number | undefined;
  };
};

function formatCurrency(value?: number) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return '—';
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatUpdatedAt(value?: string) {
  if (!value) {
    return 'Atualização automática';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return 'Atualização automática';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
}

export default function LingotesBarrasCotacaoSection() {
  const [data, setData] = useState<GoldPriceResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadGoldPrice() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch('/api/gold-price', {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Não foi possível carregar a cotação.');
        }

        const result: GoldPriceResponse = await response.json();

        if (active) {
          setData(result);
        }
      } catch {
        if (active) {
          setError(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadGoldPrice();

    return () => {
      active = false;
    };
  }, []);

  const bolsa24k = useMemo(
    () => data?.bolsa?.['24k'],
    [data]
  );

  const comercial24k = useMemo(
    () => data?.comercial?.['24k'],
    [data]
  );

  return (
    <section
      id="cotacao-lingotes-barras"
      aria-labelledby="lingotes-barras-cotacao-title"
      className="
        relative
        overflow-hidden
        bg-[#EAD9BC]
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
          bg-[radial-gradient(circle_at_14%_18%,rgba(255,250,240,0.78),transparent_30%),radial-gradient(circle_at_86%_82%,rgba(163,115,49,0.14),transparent_34%)]
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
                text-[#8C692E]
                md:text-[10px]
              "
            >
              Cotação do ouro
            </p>

            <h2
              id="lingotes-barras-cotacao-title"
              className="
                mt-6
                max-w-[700px]
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
              Quanto vale um lingote
              <br />
              ou barra de ouro.
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
                text-[#725D41]
                md:text-[15px]
                md:leading-8
              "
            >
              O valor depende principalmente do peso efetivo, da pureza
              confirmada e da referência comercial do ouro no momento da
              avaliação.
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div
          className="
            mt-16
            grid
            gap-5
            lg:grid-cols-[1.08fr_0.92fr]
          "
        >
          {/* VALOR PRINCIPAL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[3rem_3rem_5rem_3rem]
              border
              border-white/60
              bg-[linear-gradient(145deg,rgba(199,165,108,0.98),rgba(177,136,72,0.96),rgba(154,110,49,0.95),rgba(188,148,84,0.95))]
              p-8
              shadow-[0_40px_95px_rgba(83,55,18,0.21),inset_0_1px_0_rgba(255,255,255,0.44)]
              md:p-10
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-24
                h-72
                w-72
                rounded-full
                bg-[#FFECC3]/36
                blur-[72px]
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
                Referência ouro 24k / grama
              </p>

              <p
                className="
                  mt-6
                  font-serif
                  text-[3.3rem]
                  leading-none
                  tracking-[-0.03em]
                  text-[#412907]
                  sm:text-[4rem]
                  md:text-[4.8rem]
                "
              >
                {loading
                  ? 'Carregando...'
                  : error
                    ? 'Indisponível'
                    : formatCurrency(comercial24k)}
              </p>

              <p
                className="
                  mt-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#5F431F]/75
                "
              >
                Referência comercial / g
              </p>

              <div
                className="
                  my-9
                  h-px
                  w-full
                  bg-[#52350F]/16
                "
              />

              <div
                className="
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                <div
                  className="
                    rounded-[1.5rem]
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
                    Referência de mercado
                  </p>

                  <p
                    className="
                      mt-3
                      font-serif
                      text-[24px]
                      text-[#412907]
                    "
                  >
                    {loading || error
                      ? '—'
                      : formatCurrency(bolsa24k)}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-light
                      leading-5
                      text-[#4E3515]/72
                    "
                  >
                    Valor teórico de referência do ouro 24k por grama.
                  </p>
                </div>

                <div
                  className="
                    rounded-[1.5rem]
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
                    Atualização
                  </p>

                  <p
                    className="
                      mt-3
                      font-serif
                      text-[19px]
                      leading-tight
                      text-[#412907]
                    "
                  >
                    {loading
                      ? 'Consultando...'
                      : error
                        ? 'Tente novamente'
                        : formatUpdatedAt(data?.updatedAt)}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-light
                      leading-5
                      text-[#4E3515]/72
                    "
                  >
                    A referência pode mudar conforme novas atualizações do mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* EXPLICAÇÕES */}
          <div
            className="
              flex
              flex-col
              gap-4
            "
          >
            <article
              className="
                rounded-[2rem]
                border
                border-white/60
                bg-[#F1E2C8]/38
                p-7
                shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.52)]
                backdrop-blur-xl
                md:p-8
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
                Peso
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[25px]
                  font-normal
                  text-[#68491F]
                "
              >
                Quantidade efetiva de ouro
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
                O peso do lingote ou barra é uma das principais bases da
                avaliação e precisa ser conferido com precisão.
              </p>
            </article>

            <article
              className="
                rounded-[2rem]
                border
                border-white/60
                bg-[#F1E2C8]/38
                p-7
                shadow-[0_18px_48px_rgba(94,66,27,0.06),inset_0_1px_0_rgba(255,255,255,0.52)]
                backdrop-blur-xl
                md:p-8
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
                Pureza
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[25px]
                  font-normal
                  text-[#68491F]
                "
              >
                Teor influencia diretamente
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
                Um material 999, 999,9 ou com outro teor não deve ser avaliado
                apenas pela aparência. A pureza precisa fazer parte da análise.
              </p>
            </article>

            <article
              className="
                rounded-[2rem]
                border
                border-[#765525]/10
                bg-white/18
                p-7
                backdrop-blur-xl
                md:p-8
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
                Proposta comercial
              </p>

              <p
                className="
                  mt-4
                  text-[11px]
                  font-light
                  leading-6
                  text-[#725D41]
                "
              >
                A cotação exibida é uma referência. A proposta de compra é
                definida somente após a avaliação técnica do lingote ou barra.
              </p>
            </article>
          </div>
        </div>

        {/* FÓRMULA VISUAL */}
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
            Referência da avaliação
          </p>

          <div
            className="
              mt-6
              grid
              gap-4
              md:grid-cols-[1fr_auto_1fr_auto_1fr]
              md:items-center
            "
          >
            <div>
              <p className="font-serif text-[27px] text-[#68491F]">
                Peso
              </p>
              <p className="mt-2 text-[11px] font-light text-[#725D41]">
                Massa confirmada
              </p>
            </div>

            <span
              aria-hidden="true"
              className="
                hidden
                font-serif
                text-[26px]
                text-[#A77D45]
                md:block
              "
            >
              ×
            </span>

            <div>
              <p className="font-serif text-[27px] text-[#68491F]">
                Pureza
              </p>
              <p className="mt-2 text-[11px] font-light text-[#725D41]">
                Teor efetivamente avaliado
              </p>
            </div>

            <span
              aria-hidden="true"
              className="
                hidden
                font-serif
                text-[26px]
                text-[#A77D45]
                md:block
              "
            >
              ×
            </span>

            <div>
              <p className="font-serif text-[27px] text-[#68491F]">
                Cotação
              </p>
              <p className="mt-2 text-[11px] font-light text-[#725D41]">
                Referência comercial vigente
              </p>
            </div>
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
            A calculadora abaixo pode fornecer uma estimativa inicial, mas a
            proposta para lingotes e barras depende da avaliação presencial do
            material.
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
            Calcular estimativa
          </a>
        </div>
      </div>
    </section>
  );
}