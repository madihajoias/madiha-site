import { NextResponse } from 'next/server';

const OUNCE_IN_GRAMS = 31.1035;

const PURITY_FACTORS = {
  '24k': 1,
  '22k': 0.9167,
  '18k': 0.75,
  '16k': 0.6667,
  '14k': 0.5833,
  '12k': 0.5,
  '10k': 0.4167,
} as const;

type GoldKarat = keyof typeof PURITY_FACTORS;

let cache:
  | {
      expiresAt: number;
      data: {
        bolsa: Record<GoldKarat, number>;
        comercial: Record<GoldKarat, number>;
        updatedAt: string;
      };
    }
  | null = null;

export async function GET() {
  try {
    const now = Date.now();

    if (cache && cache.expiresAt > now) {
      return NextResponse.json(cache.data);
    }

    const apiKey = process.env.METALPRICE_API_KEY;
    const adjustment = Number(
      process.env.GOLD_COMMERCIAL_ADJUSTMENT ?? '30'
    );

    if (!apiKey) {
      return NextResponse.json(
        {
          error: 'A chave da API de cotação não foi configurada.',
        },
        {
          status: 500,
        }
      );
    }

    if (!Number.isFinite(adjustment)) {
      return NextResponse.json(
        {
          error: 'O ajuste comercial configurado é inválido.',
        },
        {
          status: 500,
        }
      );
    }

    const url = new URL(
      'https://api.metalpriceapi.com/v1/latest'
    );

    url.searchParams.set('api_key', apiKey);
    url.searchParams.set('base', 'USD');
    url.searchParams.set('currencies', 'XAU,BRL');

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },

      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            'Não foi possível consultar o serviço de cotação do ouro.',
        },
        {
          status: 502,
        }
      );
    }

    const data = await response.json();

    if (
      !data?.success ||
      !data?.rates?.XAU ||
      !data?.rates?.BRL
    ) {
      return NextResponse.json(
        {
          error:
            'A API de cotação retornou uma resposta inválida.',
        },
        {
          status: 502,
        }
      );
    }

    const xauRate = Number(data.rates.XAU);
    const usdBrlRate = Number(data.rates.BRL);

    if (
      !Number.isFinite(xauRate) ||
      !Number.isFinite(usdBrlRate) ||
      xauRate <= 0 ||
      usdBrlRate <= 0
    ) {
      return NextResponse.json(
        {
          error:
            'Os valores retornados pela API são inválidos.',
        },
        {
          status: 502,
        }
      );
    }

    // Valor de 1 onça troy de ouro em USD.
    const ounceGoldUsd = 1 / xauRate;

    // Valor do grama de ouro puro 24k em BRL.
    const marketPrice24k =
      (ounceGoldUsd / OUNCE_IN_GRAMS) * usdBrlRate;

    // Valor comercial após o ajuste configurado.
    const commercialPrice24k =
      marketPrice24k * (1 - adjustment / 100);

    const bolsa = {} as Record<GoldKarat, number>;
    const comercial = {} as Record<GoldKarat, number>;

    (
      Object.entries(PURITY_FACTORS) as [
        GoldKarat,
        number,
      ][]
    ).forEach(([karat, purity]) => {
      bolsa[karat] = marketPrice24k * purity;
      comercial[karat] =
        commercialPrice24k * purity;
    });

    const result = {
      bolsa,
      comercial,
      updatedAt: new Date().toISOString(),
    };

    cache = {
      data: result,
      expiresAt: now + 5 * 60 * 1000,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Erro na API de cotação:', error);

    return NextResponse.json(
      {
        error:
          'Ocorreu um erro inesperado ao calcular a cotação.',
      },
      {
        status: 500,
      }
    );
  }
}