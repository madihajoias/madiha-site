import { NextResponse } from 'next/server';

import {
  findCaratRange,
  type DiamondClarity,
  type DiamondColor,
} from '../../../lib/diamond-pricing';

import {
  PRIVATE_ROUND_DIAMOND_PRICES,
} from '../../../lib/diamond-pricing-private';

/*
 * =========================================================
 * CONFIGURAÇÃO
 * =========================================================
 */

const MADIHA_DIAMOND_FACTOR = 0.3;

/*
 * Somente valores que o cliente realmente
 * pode selecionar na interface.
 */

const PUBLIC_COLORS = [
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
] as const;

const PUBLIC_CLARITIES = [
  'IF',
  'VVS1',
  'VVS2',
  'VS1',
  'VS2',
  'SI1',
  'SI2',
  'SI3',
  'I1',
  'I2',
  'I3',
] as const;

type PublicDiamondColor =
  (typeof PUBLIC_COLORS)[number];

type PublicDiamondClarity =
  (typeof PUBLIC_CLARITIES)[number];

type RequestBody = {
  caratWeight?: number;
  quantity?: number;
  color?: string;
  clarity?: string;
};

/*
 * =========================================================
 * CACHE DO DÓLAR
 * =========================================================
 */

type DollarCache = {
  value: number;
  updatedAt: string;
  expiresAt: number;
};

let dollarCache:
  DollarCache | null = null;

/*
 * =========================================================
 * VALIDADORES
 * =========================================================
 */

function isPublicColor(
  value: string
): value is PublicDiamondColor {
  return (
    PUBLIC_COLORS as readonly string[]
  ).includes(value);
}

function isPublicClarity(
  value: string
): value is PublicDiamondClarity {
  return (
    PUBLIC_CLARITIES as readonly string[]
  ).includes(value);
}

/*
 * =========================================================
 * AGRUPAMENTO INTERNO DE COR
 * =========================================================
 *
 * Usado somente nas faixas pequenas.
 *
 * O cliente nunca vê esses grupos.
 */

function mapGroupedColor(
  color: PublicDiamondColor
): DiamondColor {
  switch (color) {
    case 'D':
    case 'E':
    case 'F':
      return 'D-F';

    case 'G':
    case 'H':
      return 'G-H';

    case 'I':
    case 'J':
      return 'I-J';

    case 'K':
    case 'L':
      return 'K-L';

    case 'M':
      return 'M-N';

    default:
      return color;
  }
}

/*
 * =========================================================
 * AGRUPAMENTO INTERNO DE PUREZA
 * =========================================================
 */

function mapGroupedClarity(
  clarity: PublicDiamondClarity
): DiamondClarity {
  switch (clarity) {
    case 'IF':
    case 'VVS1':
    case 'VVS2':
      return 'IF-VVS';

    case 'VS1':
    case 'VS2':
      return 'VS';

    case 'SI1':
      return 'SI1';

    case 'SI2':
      return 'SI2';

    case 'SI3':
      return 'SI3';

    case 'I1':
      return 'I1';

    case 'I2':
      return 'I2';

    case 'I3':
      return 'I3';

    default:
      return clarity;
  }
}

/*
 * =========================================================
 * USD / BRL
 * =========================================================
 */

async function getUsdBrl() {
  const now = Date.now();

  if (
    dollarCache &&
    dollarCache.expiresAt > now
  ) {
    return {
      usdBrl:
        dollarCache.value,

      updatedAt:
        dollarCache.updatedAt,
    };
  }

  const apiKey =
    process.env.METALPRICE_API_KEY;

  if (!apiKey) {
    throw new Error(
      'METALPRICE_API_KEY não configurada.'
    );
  }

  const url = new URL(
    'https://api.metalpriceapi.com/v1/latest'
  );

  url.searchParams.set(
    'api_key',
    apiKey
  );

  url.searchParams.set(
    'base',
    'USD'
  );

  url.searchParams.set(
    'currencies',
    'BRL'
  );

  const response =
    await fetch(
      url.toString(),
      {
        method: 'GET',

        headers: {
          Accept:
            'application/json',
        },

        cache: 'no-store',
      }
    );

  if (!response.ok) {
    throw new Error(
      'Não foi possível consultar a cotação do dólar.'
    );
  }

  const data =
    await response.json();

  if (
    !data?.success ||
    !data?.rates?.BRL
  ) {
    throw new Error(
      'Resposta inválida da API de cotação.'
    );
  }

  const usdBrl =
    Number(data.rates.BRL);

  if (
    !Number.isFinite(usdBrl) ||
    usdBrl <= 0
  ) {
    throw new Error(
      'Cotação USD/BRL inválida.'
    );
  }

  const updatedAt =
    new Date().toISOString();

  dollarCache = {
    value: usdBrl,

    updatedAt,

    expiresAt:
      now +
      5 * 60 * 1000,
  };

  return {
    usdBrl,
    updatedAt,
  };
}

/*
 * =========================================================
 * POST /api/diamond-price
 * =========================================================
 */

export async function POST(
  request: Request
) {
  try {
    const body =
      (await request.json()) as RequestBody;

    const caratWeight =
      Number(body.caratWeight);

    const quantity =
      Number(body.quantity ?? 1);

    const color =
      String(body.color ?? '');

    const clarity =
      String(body.clarity ?? '');

    /*
     * =====================================================
     * VALIDAÇÕES
     * =====================================================
     */

    if (
      !Number.isFinite(
        caratWeight
      ) ||
      caratWeight <= 0
    ) {
      return NextResponse.json(
        {
          error:
            'O peso do brilhante é inválido.',
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Number.isInteger(quantity) ||
      quantity <= 0 ||
      quantity > 1000
    ) {
      return NextResponse.json(
        {
          error:
            'A quantidade de brilhantes é inválida.',
        },
        {
          status: 400,
        }
      );
    }

    if (
      !isPublicColor(color)
    ) {
      return NextResponse.json(
        {
          error:
            'A classificação de cor é inválida.',
        },
        {
          status: 400,
        }
      );
    }

    if (
      !isPublicClarity(
        clarity
      )
    ) {
      return NextResponse.json(
        {
          error:
            'A classificação de pureza é inválida.',
        },
        {
          status: 400,
        }
      );
    }

    /*
     * =====================================================
     * DESCOBRIR FAIXA
     * =====================================================
     */

    const range =
      findCaratRange(
        caratWeight
      );

    if (!range) {
      return NextResponse.json(
        {
          error:
            'Peso fora das faixas cadastradas.',
          code:
            'DIAMOND_RANGE_NOT_FOUND',
        },
        {
          status: 404,
        }
      );
    }

    /*
     * =====================================================
     * CONVERSÃO INTERNA
     * =====================================================
     *
     * Para pedras pequenas:
     *
     * E
     * →
     * D-F
     *
     * VVS1
     * →
     * IF-VVS
     *
     * A partir das faixas individuais,
     * usamos exatamente o valor escolhido.
     */

    const internalColor:
      DiamondColor =
      range.grouped
        ? mapGroupedColor(color)
        : color;

    const internalClarity:
      DiamondClarity =
      range.grouped
        ? mapGroupedClarity(
            clarity
          )
        : clarity;

    /*
     * =====================================================
     * PROCURAR FATOR NA BASE PRIVADA
     * =====================================================
     */

    const priceEntry =
      PRIVATE_ROUND_DIAMOND_PRICES.find(
        (entry) =>
          caratWeight >=
            entry.minCarat &&
          caratWeight <=
            entry.maxCarat &&
          entry.color ===
            internalColor &&
          entry.clarity ===
            internalClarity
      );

    if (!priceEntry) {
      return NextResponse.json(
        {
          error:
            'Classificação ainda não cadastrada para esta faixa de peso.',
          code:
            'DIAMOND_PRICE_NOT_FOUND',
        },
        {
          status: 404,
        }
      );
    }

    /*
     * =====================================================
     * DÓLAR
     * =====================================================
     */

    const {
      usdBrl,
      updatedAt,
    } = await getUsdBrl();

    /*
     * =====================================================
     * CÁLCULO
     * =====================================================
     *
     * fator × 100
     * =
     * USD por quilate
     */

    const usdPerCarat =
      priceEntry.factor *
      100;

    /*
     * Valor de referência
     * de uma pedra.
     */

    const referenceValueUsd =
      usdPerCarat *
      caratWeight;

    /*
     * Valor pago pela Madiha.
     */

    const madihaUnitValueUsd =
      referenceValueUsd *
      MADIHA_DIAMOND_FACTOR;

    /*
     * Valor unitário em reais.
     */

    const unitValueBrl =
      madihaUnitValueUsd *
      usdBrl;

    /*
     * Valor total do grupo.
     */

    const totalValueBrl =
      unitValueBrl *
      quantity;

    /*
     * =====================================================
     * RESPOSTA PÚBLICA
     * =====================================================
     *
     * Não retornamos:
     *
     * - fator da tabela
     * - agrupamento interno
     * - tabela privada
     * - percentual interno
     */

    return NextResponse.json(
      {
        success: true,

        quantity,

        caratWeight,

        color,

        clarity,

        usdBrl,

        unitValueBrl,

        totalValueBrl,

        updatedAt,
      }
    );
  } catch (error) {
    console.error(
      'Erro na API de brilhantes:',
      error
    );

    return NextResponse.json(
      {
        error:
          'Ocorreu um erro ao calcular o valor dos brilhantes.',
      },
      {
        status: 500,
      }
    );
  }
}