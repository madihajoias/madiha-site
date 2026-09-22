import type {
  DiamondPriceEntry,
} from './diamond-pricing';

import diamondPrices from '../data/diamond-prices.generated.json';

/*
 * =========================================================
 * MADIHA MAISON
 * BASE PRIVADA — ROUND BRILLIANT
 * =========================================================
 *
 * Os dados são gerados por:
 *
 * scripts/import-diamond-prices.mjs
 *
 * Fonte:
 *
 * data/diamond-prices.csv
 *
 * O arquivo deve ser utilizado
 * exclusivamente pelo servidor.
 */

export const PRIVATE_ROUND_DIAMOND_PRICES =
  diamondPrices as DiamondPriceEntry[];