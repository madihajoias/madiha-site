export type DiamondColor =
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'D-F'
  | 'G-H'
  | 'I-J'
  | 'K-L'
  | 'M-N';

export type DiamondClarity =
  | 'IF'
  | 'VVS1'
  | 'VVS2'
  | 'VS1'
  | 'VS2'
  | 'SI1'
  | 'SI2'
  | 'SI3'
  | 'I1'
  | 'I2'
  | 'I3'
  | 'IF-VVS'
  | 'VVS'
  | 'VS';

export type DiamondPriceEntry = {
  minCarat: number;
  maxCarat: number;
  color: DiamondColor;
  clarity: DiamondClarity;
  factor: number;
};

/*
 * =========================================================
 * FAIXAS DE PESO
 * =========================================================
 *
 * "grouped" indica apenas que a tabela interna
 * utiliza agrupamentos nessa faixa.
 *
 * O cliente continuará escolhendo cor e pureza
 * individualmente.
 */

export const ROUND_CARAT_RANGES = [
  {
    min: 0.01,
    max: 0.03,
    grouped: true,
    label: '0.01 - 0.03 ct',
  },
  {
    min: 0.04,
    max: 0.07,
    grouped: true,
    label: '0.04 - 0.07 ct',
  },
  {
    min: 0.08,
    max: 0.14,
    grouped: true,
    label: '0.08 - 0.14 ct',
  },
  {
    min: 0.15,
    max: 0.17,
    grouped: true,
    label: '0.15 - 0.17 ct',
  },
  {
    min: 0.18,
    max: 0.22,
    grouped: true,
    label: '0.18 - 0.22 ct',
  },
  {
    min: 0.23,
    max: 0.29,
    grouped: true,
    label: '0.23 - 0.29 ct',
  },

  {
    min: 0.3,
    max: 0.39,
    grouped: false,
    label: '0.30 - 0.39 ct',
  },
  {
    min: 0.4,
    max: 0.49,
    grouped: false,
    label: '0.40 - 0.49 ct',
  },
  {
    min: 0.5,
    max: 0.69,
    grouped: false,
    label: '0.50 - 0.69 ct',
  },
  {
    min: 0.7,
    max: 0.89,
    grouped: false,
    label: '0.70 - 0.89 ct',
  },
  {
    min: 0.9,
    max: 0.99,
    grouped: false,
    label: '0.90 - 0.99 ct',
  },
  {
    min: 1,
    max: 1.49,
    grouped: false,
    label: '1.00 - 1.49 ct',
  },
  {
    min: 1.5,
    max: 1.99,
    grouped: false,
    label: '1.50 - 1.99 ct',
  },
  {
    min: 2,
    max: 2.99,
    grouped: false,
    label: '2.00 - 2.99 ct',
  },
  {
    min: 3,
    max: 3.99,
    grouped: false,
    label: '3.00 - 3.99 ct',
  },
  {
    min: 4,
    max: 4.99,
    grouped: false,
    label: '4.00 - 4.99 ct',
  },
  {
    min: 5,
    max: 5.99,
    grouped: false,
    label: '5.00 - 5.99 ct',
  },
  {
    min: 10,
    max: 10.99,
    grouped: false,
    label: '10.00 - 10.99 ct',
  },
] as const;

/*
 * =========================================================
 * OPÇÕES EXIBIDAS PARA O CLIENTE
 * =========================================================
 *
 * Mesmo quando a tabela interna estiver agrupada,
 * o cliente verá sempre:
 *
 * D, E, F, G, H...
 *
 * e
 *
 * IF, VVS1, VVS2, VS1, VS2...
 */

export const INDIVIDUAL_COLORS: DiamondColor[] = [
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
];

export const INDIVIDUAL_CLARITIES: DiamondClarity[] = [
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
];

/*
 * =========================================================
 * COMPATIBILIDADE COM JewelryCalculator.tsx
 * =========================================================
 *
 * O componente atual escolhe entre:
 *
 * GROUPED_COLORS
 * INDIVIDUAL_COLORS
 *
 * Mas queremos que a interface sempre seja individual.
 *
 * Então ambos apontam para as mesmas opções públicas.
 */

export const GROUPED_COLORS: DiamondColor[] = [
  ...INDIVIDUAL_COLORS,
];

export const GROUPED_CLARITIES: DiamondClarity[] = [
  ...INDIVIDUAL_CLARITIES,
];

/*
 * =========================================================
 * LOCALIZAR FAIXA
 * =========================================================
 */

export function findCaratRange(
  caratWeight: number
) {
  if (
    !Number.isFinite(caratWeight) ||
    caratWeight <= 0
  ) {
    return null;
  }

  return (
    ROUND_CARAT_RANGES.find(
      (range) =>
        caratWeight >= range.min &&
        caratWeight <= range.max
    ) ?? null
  );
}