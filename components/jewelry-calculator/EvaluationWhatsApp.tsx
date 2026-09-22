'use client';

import {
  MessageCircle,
} from 'lucide-react';

import {
  BRAND_DOCUMENTATION_OPTIONS,
  CONSERVATION_STATES,
  GEM_CERTIFICATES,
  GOLD_COLORS,
  PIECE_TYPES,
} from '../../lib/jewelry-config';

import type {
  BrandDocumentation,
  ConservationState,
  DiamondGroup,
  DiamondGroupResult,
  GemCertificate,
  GoldColor,
  GoldKarat,
  JewelryCategory,
  PieceType,
} from '../../lib/jewelry-types';

import {
  formatEvaluationDate,
} from '../../lib/evaluation-reference';

import {
  formatBRL,
} from '../../lib/jewelry-utils';

type Props = {
  reference:
    string;

  createdAt:
    string;

  category:
    JewelryCategory;

  pieceType:
    PieceType;

  goldColor:
    GoldColor;

  conservation:
    ConservationState;

  goldWeight:
    number;

  karat:
    GoldKarat;

  goldValue:
    number;

  diamondGroups:
    DiamondGroup[];

  diamondResults:
    Record<
      number,
      DiamondGroupResult
    >;

  diamondsValue:
    number;

  gemCertificate:
    GemCertificate;

  otherCertificate:
    string;

  luxuryBrand:
    string;

  otherLuxuryBrand:
    string;

  brandDocumentation:
    BrandDocumentation;

  otherBrandDocumentation:
    string;

  luxuryPremiumEligible:
    boolean;

  totalValue:
    number;
};

function findLabel<
  T extends string,
>(
  items: {
    value: T;
    label: string;
  }[],
  value: T
) {
  return (
    items.find(
      (item) =>
        item.value ===
        value
    )?.label ??
    value
  );
}

function categoryLabel(
  category:
    JewelryCategory
) {
  switch (
    category
  ) {
    case 'gold':
      return 'Joias em Ouro';

    case 'diamonds':
      return 'Joias com Brilhantes';

    case 'luxury':
      return 'Joias de Grife';

    default:
      return 'Avaliação de Joias';
  }
}

export default function EvaluationWhatsApp({
  reference,
  createdAt,
  category,
  pieceType,
  goldColor,
  conservation,
  goldWeight,
  karat,
  goldValue,
  diamondGroups,
  diamondResults,
  diamondsValue,
  gemCertificate,
  otherCertificate,
  luxuryBrand,
  otherLuxuryBrand,
  brandDocumentation,
  otherBrandDocumentation,
  luxuryPremiumEligible,
  totalValue,
}: Props) {
  const whatsappNumber =
    (
      process.env
        .NEXT_PUBLIC_WHATSAPP_NUMBER ??
      ''
    ).replace(
      /\D/g,
      ''
    );

  const hasDiamonds =
    category ===
      'diamonds' ||
    category ===
      'luxury';

  const pieceLabel =
    findLabel(
      PIECE_TYPES,
      pieceType
    );

  const goldColorLabel =
    findLabel(
      GOLD_COLORS,
      goldColor
    );

  const conservationLabel =
    findLabel(
      CONSERVATION_STATES,
      conservation
    );

  const certificateLabel =
    findLabel(
      GEM_CERTIFICATES,
      gemCertificate
    );

  const documentationLabel =
    findLabel(
      BRAND_DOCUMENTATION_OPTIONS,
      brandDocumentation
    );

  const finalBrand =
    luxuryBrand ===
    'other'
      ? otherLuxuryBrand ||
        'Outra marca'
      : luxuryBrand;

  const certificateText =
    gemCertificate ===
    'other'
      ? otherCertificate ||
        'Outro certificado'
      : certificateLabel;

  const documentationText =
    brandDocumentation ===
    'other'
      ? otherBrandDocumentation ||
        'Outro documento'
      : documentationLabel;

  const diamondLines =
    hasDiamonds
      ? diamondGroups.map(
          (
            group,
            index
          ) => {
            const result =
              diamondResults[
                group.id
              ];

            const value =
              result?.status ===
              'success'
                ? ` — ${formatBRL(
                    result.totalValueBrl
                  )}`
                : '';

            return [
              `${index + 1}.`,
              `${group.quantity || '0'} ×`,
              `${group.caratWeight || '—'} ct`,
              `${group.color || '—'} /`,
              `${group.clarity || '—'}`,
              value,
            ]
              .join(' ')
              .trim();
          }
        )
      : [];

  const lines: string[] =
    [
      'Olá! Quero mais informações sobre esta avaliação gerada pela Calculadora de Joias Madiha Maison.',
      '',
      `Referência: ${reference}`,
      `Gerada em: ${formatEvaluationDate(
        createdAt
      )}`,
      '',
      `Categoria: ${categoryLabel(
        category
      )}`,
      `Tipo de peça: ${pieceLabel}`,
      `Cor do ouro: ${goldColorLabel}`,
      `Estado de conservação: ${conservationLabel}`,
      '',
      `Peso do metal: ${goldWeight.toLocaleString(
        'pt-BR',
        {
          minimumFractionDigits:
            2,

          maximumFractionDigits:
            2,
        }
      )} g`,
      `Teor informado: ${karat.toUpperCase()}`,
    ];

  if (
    category ===
    'luxury'
  ) {
    lines.push(
      '',
      `Marca / Grife: ${
        finalBrand ||
        'Não informada'
      }`,
      `Documentação da marca: ${documentationText}`,
      `Regra de avaliação: ${
        luxuryPremiumEligible
          ? 'Marca elegível para referência comercial de ouro 24k'
          : 'Avaliação normal pelo teor informado'
      }`
    );
  }

  if (
    hasDiamonds
  ) {
    lines.push(
      '',
      'Brilhantes:'
    );

    lines.push(
      ...diamondLines
    );

    lines.push(
      '',
      `Certificado gemológico: ${certificateText}`
    );
  }

  lines.push(
    '',
    'Composição da estimativa:',
    `Ouro: ${formatBRL(
      goldValue
    )}`
  );

  if (
    hasDiamonds
  ) {
    lines.push(
      `Brilhantes: ${formatBRL(
        diamondsValue
      )}`
    );
  }

  lines.push(
    `Estimativa total: ${formatBRL(
      totalValue
    )}`,
    '',
    'Quero mais informações sobre esta avaliação.'
  );

  const message =
    lines.join('\n');

  const whatsappUrl =
    whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`
      : '';

  const configured =
    Boolean(
      whatsappNumber
    );

  return (
    <div className="mt-8">
      <a
        href={
          configured
            ? whatsappUrl
            : undefined
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={
          !configured
        }
        className={[
          'flex w-full items-center justify-center gap-3 px-6 py-4 text-[10px] uppercase tracking-[0.18em] transition-all duration-300',

          configured
            ? 'bg-[#F7F3EF] text-[#4F1720] hover:bg-white'
            : 'cursor-not-allowed bg-white/10 text-white/40',
        ].join(' ')}
      >
        <MessageCircle
          size={17}
          strokeWidth={1.3}
        />

        Falar com um
        especialista
      </a>

      {!configured && (
        <p className="mt-3 text-center text-[9px] leading-4 text-[#BDAFB0]">
          Configure
          NEXT_PUBLIC_WHATSAPP_NUMBER
          para ativar o atendimento.
        </p>
      )}
    </div>
  );
}