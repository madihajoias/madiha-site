import type {
  BrandDocumentation,
  ConservationState,
  GemCertificate,
  GoldColor,
  PieceType,
} from './jewelry-types';

export const PIECE_TYPES: {
  value: PieceType;
  label: string;
}[] = [
  {
    value: 'ring',
    label: 'Anel',
  },
  {
    value: 'wedding-ring',
    label: 'Aliança',
  },
  {
    value: 'earrings',
    label: 'Brincos',
  },
  {
    value: 'necklace',
    label: 'Colar',
  },
  {
    value: 'chain',
    label: 'Corrente',
  },
  {
    value: 'bracelet',
    label: 'Pulseira',
  },
  {
    value: 'pendant',
    label: 'Pingente',
  },
  {
    value: 'brooch',
    label: 'Broche',
  },
  {
    value: 'cufflinks',
    label: 'Abotoaduras',
  },
  {
    value: 'other',
    label: 'Outro',
  },
];

export const GOLD_COLORS: {
  value: GoldColor;
  label: string;
}[] = [
  {
    value: 'yellow',
    label: 'Ouro amarelo',
  },
  {
    value: 'white',
    label: 'Ouro branco',
  },
  {
    value: 'rose',
    label: 'Ouro rosé',
  },
  {
    value: 'mixed',
    label: 'Ouro misto',
  },
  {
    value: 'unknown',
    label: 'Não sei informar',
  },
];

export const CONSERVATION_STATES: {
  value: ConservationState;
  label: string;
  description: string;
}[] = [
  {
    value: 'excellent',
    label: 'Excelente',
    description:
      'Sem sinais relevantes de uso.',
  },
  {
    value: 'very-good',
    label: 'Muito bom',
    description:
      'Pequenos sinais de uso.',
  },
  {
    value: 'good',
    label: 'Bom',
    description:
      'Marcas normais de uso.',
  },
  {
    value: 'regular',
    label: 'Regular',
    description:
      'Desgaste perceptível.',
  },
  {
    value: 'damaged',
    label: 'Com avarias',
    description:
      'Pode apresentar deformações, quebras ou partes ausentes.',
  },
];

export const GEM_CERTIFICATES: {
  value: GemCertificate;
  label: string;
}[] = [
  {
    value: 'none',
    label: 'Sem certificado',
  },
  {
    value: 'gia',
    label: 'GIA',
  },
  {
    value: 'igi',
    label: 'IGI',
  },
  {
    value: 'hrd',
    label: 'HRD',
  },
  {
    value: 'other',
    label: 'Outro',
  },
];

export const BRAND_DOCUMENTATION_OPTIONS: {
  value: BrandDocumentation;
  label: string;
}[] = [
  {
    value: 'none',
    label: 'Não possui',
  },
  {
    value: 'brand-certificate',
    label: 'Certificado da marca',
  },
  {
    value: 'invoice',
    label: 'Nota fiscal / comprovante',
  },
  {
    value: 'box-documents',
    label: 'Caixa e documentação',
  },
  {
    value: 'other',
    label: 'Outro documento',
  },
];

export const PREMIUM_LUXURY_BRANDS = [
  'Cartier',
  'Van Cleef & Arpels',
  'Bvlgari',
  'Tiffany & Co.',
  'Chopard',
  'Piaget',
  'Graff',
  'Harry Winston',
  'Boucheron',
  'Chaumet',
] as const;

export type PremiumLuxuryBrand =
  (typeof PREMIUM_LUXURY_BRANDS)[number];

export function isPremiumLuxuryBrand(
  value: string
): value is PremiumLuxuryBrand {
  return (
    PREMIUM_LUXURY_BRANDS as readonly string[]
  ).includes(value);
}