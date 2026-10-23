'use client';

import { useEffect, useMemo, useState } from 'react';

type GoldPriceResponse = {
  updatedAt?: string;
  bolsa?: {
    '18k'?: number;
    [key: string]: number | undefined;
  };
  comercial?: {
    '18k'?: number;
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

export default function Ouro18kCotacaoSection() {
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

  const bolsa18k = useMemo(
    () => data?.bolsa?.['18k'],
    [data]
  );

  const comercial18k = useMemo(
    () => data?.comercial?.['18k'],
    [data]
  );

  return (
    <section
      id="cotacao-ouro-18k"
      aria-labelledby="ouro-18k-cotacao-title"
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
              Cotação do ouro 18k
            </p>

            <h2
              id="ouro-18k-cotacao-title"
              className="
                mt-6
                max-w-[670px]
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
              Quanto vale
              <br />
              o ouro 18k hoje.
            </h2>
          </div>

          <div
            className="
              max-w-[630px]
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
              O preço do ouro 18k por grama varia conforme a cotação do metal
              e a referência comercial aplicada ao teor de 75% de ouro.
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
                Ouro 18k por grama
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
                    : formatCurrency(comercial18k)}
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
                      : formatCurrency(bolsa18k)}
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
                    Referência teórica correspondente ao ouro 18k por grama.
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
                    O preço pode mudar conforme novas atualizações do mercado.
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
                Teor 18k
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
                75% da referência do ouro
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
                Como o ouro 18k contém 75% de ouro, sua referência por grama é
                proporcionalmente diferente da utilizada para o ouro 24k.
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
                Valor comercial
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
                Uma referência inicial
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
                O valor comercial exibido pode ser utilizado para simulações,
                mas não substitui a análise da peça e a confirmação do teor.
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
                Importante
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
                Em joias, pedras, fechos, soldas e outros elementos podem
                interferir no peso total. A avaliação técnica permite
                confirmar quanto do material corresponde efetivamente ao ouro.
              </p>
            </article>
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
              max-w-[720px]
              text-[11px]
              font-light
              leading-6
              text-[#8A7454]
            "
          >
            Se você souber o peso aproximado da sua joia, pode calcular uma
            estimativa selecionando o teor 18k na calculadora.
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
            Calcular ouro 18k
          </a>
        </div>
      </div>
    </section>
  );
}