import type {
  DiamondClarity,
  DiamondColor,
} from './diamond-pricing';

export type JewelryCategory =
  | 'gold'
  | 'diamonds'
  | 'luxury';

export type GoldKarat =
  | '24k'
  | '22k'
  | '18k'
  | '16k'
  | '14k'
  | '12k'
  | '10k';

export type PieceType =
  | 'ring'
  | 'wedding-ring'
  | 'earrings'
  | 'necklace'
  | 'chain'
  | 'bracelet'
  | 'pendant'
  | 'brooch'
  | 'cufflinks'
  | 'other';

export type GoldColor =
  | 'yellow'
  | 'white'
  | 'rose'
  | 'mixed'
  | 'unknown';

export type ConservationState =
  | 'excellent'
  | 'very-good'
  | 'good'
  | 'regular'
  | 'damaged';

export type GemCertificate =
  | 'none'
  | 'gia'
  | 'igi'
  | 'hrd'
  | 'other';

export type BrandDocumentation =
  | 'none'
  | 'brand-certificate'
  | 'invoice'
  | 'box-documents'
  | 'other';

export type GoldPriceResponse = {
  bolsa: Record<GoldKarat, number>;
  comercial: Record<GoldKarat, number>;
  usdBrl: number;
  updatedAt: string;
};

export type DiamondGroup = {
  id: number;
  quantity: string;
  caratWeight: string;
  color: DiamondColor | '';
  clarity: DiamondClarity | '';
};

export type DiamondApiSuccess = {
  success: true;
  quantity: number;
  caratWeight: number;
  color: string;
  clarity: string;
  usdBrl: number;
  unitValueBrl: number;
  totalValueBrl: number;
  updatedAt: string;
};

export type DiamondApiError = {
  error: string;
  code?: string;
};

export type DiamondResultStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'not-found'
  | 'error';

export type DiamondGroupResult = {
  groupId: number;
  status: DiamondResultStatus;
  unitValueBrl: number;
  totalValueBrl: number;
  usdBrl: number | null;
  message: string;
};