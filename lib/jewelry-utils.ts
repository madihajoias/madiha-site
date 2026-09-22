import type {
  DiamondGroup,
  DiamondGroupResult,
  GoldKarat,
} from './jewelry-types';

export const KARATS: GoldKarat[] = [
  '24k',
  '22k',
  '18k',
  '16k',
  '14k',
  '12k',
  '10k',
];

export function formatBRL(
  value: number
) {
  return new Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  ).format(value);
}

export function formatNumber(
  value: number,
  decimals = 2
) {
  return new Intl.NumberFormat(
    'pt-BR',
    {
      minimumFractionDigits:
        decimals,

      maximumFractionDigits:
        decimals,
    }
  ).format(value);
}

/*
 * Aceita:
 *
 * 0,40
 * 0.40
 * 1.234,56
 * 1234.56
 */
export function parseInputNumber(
  value: string
) {
  const clean =
    value.trim();

  if (!clean) {
    return 0;
  }

  let normalized =
    clean;

  if (
    clean.includes(',')
  ) {
    normalized = clean
      .replace(/\./g, '')
      .replace(',', '.');
  }

  const number =
    Number(normalized);

  return Number.isFinite(
    number
  )
    ? number
    : 0;
}

export function createDiamondGroup(
  id: number
): DiamondGroup {
  return {
    id,
    quantity: '1',
    caratWeight: '',
    color: '',
    clarity: '',
  };
}

export function createIdleResult(
  groupId: number
): DiamondGroupResult {
  return {
    groupId,
    status: 'idle',
    unitValueBrl: 0,
    totalValueBrl: 0,
    usdBrl: null,
    message: '',
  };
}