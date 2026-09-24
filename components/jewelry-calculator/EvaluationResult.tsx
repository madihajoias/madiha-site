import {
  findCaratRange,
} from '../../lib/diamond-pricing';

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
  formatNumber,
  parseInputNumber,
} from '../../lib/jewelry-utils';

import EvaluationWhatsApp from './EvaluationWhatsApp';

type Props = {
  reference:
    string;

  createdAt:
    string;

  category:
    JewelryCategory;

  goldLoading:
    boolean;

  goldWeight:
    number;

  karat:
    GoldKarat;

  goldValue:
    number;

  diamondsValue:
    number;

  diamondGroups:
    DiamondGroup[];

  diamondResults:
    Record<
      number,
      DiamondGroupResult
    >;

  totalValue:
    number;

  diamondUsdBrl:
    number | null;

  pieceType:
    PieceType;

  goldColor:
    GoldColor;

  isWhiteGold:
    boolean;

  conservation:
    ConservationState;

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
};

function getTitle(
  category:
    JewelryCategory
) {
  switch (
    category
  ) {
    case 'gold':
      return 'Valor do ouro';

    case 'diamonds':
    case 'luxury':
      return 'Valor da peça';

    default:
      return 'Valor da peça';
  }
}

export default function EvaluationResult({
  reference,
  createdAt,
  category,
  goldLoading,
  goldWeight,
  karat,
  goldValue,
  diamondsValue,
  diamondGroups,
  diamondResults,
  totalValue,
  diamondUsdBrl,
  pieceType,
  goldColor,
  isWhiteGold,
  conservation,
  gemCertificate,
  otherCertificate,
  luxuryBrand,
  otherLuxuryBrand,
  brandDocumentation,
  otherBrandDocumentation,
  luxuryPremiumEligible,
}: Props) {
  const premium =
    category !==
    'gold';

  const hasDiamonds =
    premium;

  /*
   * =====================================================
   * PEDRAS FORA DA FAIXA AUTOMÁTICA
   * =====================================================
   */

  const specialistGroups =
    hasDiamonds
      ? diamondGroups.filter(
          (
            group
          ) => {
            const weight =
              parseInputNumber(
                group.caratWeight
              );

            return (
              weight >
                0 &&
              !findCaratRange(
                weight
              )
            );
          }
        )
      : [];

  const hasSpecialistDiamonds =
    specialistGroups.length >
    0;

  const totalLabel =
    category ===
    'gold'
      ? 'Valor estimado do ouro'
      : hasSpecialistDiamonds
        ? 'Estimativa parcial'
        : category ===
            'luxury'
          ? 'Estimativa inicial da joia'
          : 'Valor estimado da joia';

  return (
    <div className="lg:sticky lg:top-[120px]">
      <div
        className={[
          'relative overflow-hidden transition-all duration-700',

          premium
            ? 'rounded-[2rem] border border-white/10 bg-white/[0.065] shadow-[0_30px_80px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl'
            : 'rounded-[2.6rem_2.6rem_4rem_2.6rem] border border-white/65 bg-gradient-to-br from-[#C9A56C]/95 via-[#AF8848]/94 to-[#A47538]/94 shadow-[0_42px_100px_rgba(77,49,12,0.27),0_17px_45px_rgba(110,72,19,0.18),inset_0_1px_0_rgba(255,255,255,0.45)]',
        ].join(' ')}
      >
        <div
          className={[
            'pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full blur-[78px]',

            premium
              ? 'bg-[#D6BB8B]/10'
              : 'bg-[#FFECC3]/38',
          ].join(' ')}
        />

        <div
          className={[
            'pointer-events-none absolute left-[9%] right-[18%] top-0 h-px',

            premium
              ? 'bg-gradient-to-r from-transparent via-white/35 to-transparent'
              : 'bg-gradient-to-r from-transparent via-white/85 to-transparent',
          ].join(' ')}
        />

        <div className="relative z-10 px-7 py-9 md:px-9 md:py-10">
          <div
            className={[
              'border-b pb-6',

              premium
                ? 'border-white/10'
                : 'border-[#52350F]/18',
            ].join(' ')}
          >
            <p
              className={[
                'text-[9px] font-semibold uppercase tracking-[0.24em]',

                premium
                  ? 'text-[#D6BB8B]'
                  : 'text-[#68491F]',
              ].join(' ')}
            >
              Referência da
              avaliação
            </p>

            <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
              <p
                className={[
                  'font-serif text-[19px] tracking-[0.03em]',

                  premium
                    ? 'text-[#F7F3F0]'
                    : 'text-[#4F3412]',
                ].join(' ')}
              >
                {
                  reference
                }
              </p>

              <span
                className={[
                  'text-[9px]',

                  premium
                    ? 'text-[#F7F3F0]/45'
                    : 'text-[#5E4728]/60',
                ].join(' ')}
              >
                {formatEvaluationDate(
                  createdAt
                )}
              </span>
            </div>
          </div>

          <p
            className={[
              'mt-8 text-[9px] font-semibold uppercase tracking-[0.28em]',

              premium
                ? 'text-[#D6BB8B]'
                : 'text-[#68491F]',
            ].join(' ')}
          >
            Composição estimada
          </p>

          <h2
            className={[
              'mt-3 font-serif text-[29px] font-normal',

              premium
                ? 'text-[#F7F3F0]'
                : 'text-[#4F3412]',
            ].join(' ')}
          >
            {getTitle(
              category
            )}
          </h2>

          <div className="mt-9 space-y-5">
            <div
              className={[
                'flex items-end justify-between gap-6 border-b pb-5',

                premium
                  ? 'border-white/10'
                  : 'border-[#52350F]/16',
              ].join(' ')}
            >
              <div>
                <p
                  className={[
                    'text-[10px] uppercase tracking-[0.14em]',

                    premium
                      ? 'text-[#F7F3F0]/60'
                      : 'text-[#5F431F]',
                  ].join(' ')}
                >
                  Ouro
                </p>

                {goldWeight >
                  0 && (
                  <p
                    className={[
                      'mt-2 text-[10px]',

                      premium
                        ? 'text-[#F7F3F0]/40'
                        : 'text-[#5E4728]/70',
                    ].join(' ')}
                  >
                    {formatNumber(
                      goldWeight
                    )}{' '}
                    g •{' '}
                    {luxuryPremiumEligible
                      ? 'Referência 24K'
                      : karat.toUpperCase()}

                    {isWhiteGold
                      ? ' • Ouro branco'
                      : ''}
                  </p>
                )}
              </div>

              <strong
                className={[
                  'font-serif text-[20px] font-normal',

                  premium
                    ? 'text-[#F7F3F0]'
                    : 'text-[#412907]',
                ].join(' ')}
              >
                {formatBRL(
                  goldValue
                )}
              </strong>
            </div>

            {hasDiamonds && (
              <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[#F7F3F0]/60">
                    Brilhantes
                  </p>

                  <p className="mt-2 text-[10px] text-[#F7F3F0]/40">
                    {
                      diamondGroups.length
                    }{' '}
                    {diamondGroups.length ===
                    1
                      ? 'grupo'
                      : 'grupos'}
                  </p>
                </div>

                {hasSpecialistDiamonds ? (
                  <div className="text-right">
                    <strong className="font-serif text-[18px] font-normal text-[#D6BB8B]">
                      Sob avaliação
                    </strong>

                    {diamondsValue >
                      0 && (
                      <p className="mt-1 text-[9px] text-white/35">
                        {formatBRL(
                          diamondsValue
                        )}{' '}
                        já calculados
                      </p>
                    )}
                  </div>
                ) : (
                  <strong className="font-serif text-[20px] font-normal text-[#F7F3F0]">
                    {formatBRL(
                      diamondsValue
                    )}
                  </strong>
                )}
              </div>
            )}
          </div>

          {isWhiteGold && (
            <div
              className={[
                'mt-7 rounded-[1.35rem] border px-5 py-5',

                premium
                  ? 'border-[#D6BB8B]/22 bg-[#D6BB8B]/[0.065]'
                  : 'border-[#52350F]/16 bg-white/15',
              ].join(' ')}
            >
              <p
                className={[
                  'text-[9px] font-semibold uppercase tracking-[0.17em]',

                  premium
                    ? 'text-[#D6BB8B]'
                    : 'text-[#5F431F]',
                ].join(' ')}
              >
                Ouro branco
              </p>

              <p
                className={[
                  'mt-3 text-[10px] leading-5',

                  premium
                    ? 'text-[#F7F3F0]/50'
                    : 'text-[#513A1C]/75',
                ].join(' ')}
              >
                Esta estimativa já aplica
                a regra comercial de 50%
                sobre a cotação-base
                utilizada para o ouro.
              </p>
            </div>
          )}

          {hasSpecialistDiamonds && (
            <div className="mt-7 rounded-[1.35rem] border border-[#D6BB8B]/22 bg-[#D6BB8B]/[0.065] px-5 py-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#D6BB8B]">
                Avaliação
                especializada
              </p>

              <p className="mt-3 font-serif text-[17px] leading-6 text-[#F7F3F0]">
                {specialistGroups.length ===
                1
                  ? 'Uma pedra informada está fora da faixa de cálculo automático.'
                  : `${specialistGroups.length} grupos informados estão fora da faixa de cálculo automático.`}
              </p>

              <div className="mt-4 space-y-3">
                {specialistGroups.map(
                  (
                    group,
                    index
                  ) => (
                    <div
                      key={
                        group.id
                      }
                      className="border-t border-white/10 pt-3 text-[10px] leading-5 text-white/50"
                    >
                      <span className="text-white/75">
                        Pedra{' '}
                        {index +
                          1}:
                      </span>{' '}

                      {group.quantity ||
                        '1'}{' '}
                      ×{' '}

                      {group.caratWeight ||
                        '—'}{' '}
                      ct

                      {group.color
                        ? ` • Cor ${group.color}`
                        : ''}

                      {group.clarity
                        ? ` • Pureza ${group.clarity}`
                        : ''}
                    </div>
                  )
                )}
              </div>

              <p className="mt-4 text-[10px] leading-5 text-[#F7F3F0]/45">
                O valor dessas
                pedras não foi
                incluído na
                estimativa abaixo.
              </p>
            </div>
          )}

          <div className="mt-9">
            <p
              className={[
                'text-[9px] font-semibold uppercase tracking-[0.18em]',

                premium
                  ? 'text-[#D6BB8B]'
                  : 'text-[#68491F]',
              ].join(' ')}
            >
              {
                totalLabel
              }
            </p>

            <p
              className={[
                'mt-4 font-serif text-[42px] leading-none tracking-[-0.03em] md:text-[48px]',

                premium
                  ? 'text-white'
                  : 'text-[#412907]',
              ].join(' ')}
            >
              {goldLoading
                ? '—'
                : formatBRL(
                    totalValue
                  )}
            </p>

            {hasSpecialistDiamonds && (
              <p className="mt-3 text-[10px] leading-5 text-white/40">
                Valor parcial:
                não inclui{' '}
                {specialistGroups.length ===
                1
                  ? 'a pedra que requer avaliação especializada.'
                  : 'as pedras que requerem avaliação especializada.'}
              </p>
            )}
          </div>

          {hasDiamonds &&
            diamondUsdBrl && (
              <div className="mt-9 border-t border-white/10 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[9px] uppercase tracking-[0.13em] text-[#F7F3F0]/40">
                    Dólar utilizado
                  </span>

                  <span className="text-[11px] text-[#F7F3F0]/80">
                    R${' '}
                    {formatNumber(
                      diamondUsdBrl,
                      4
                    )}
                  </span>
                </div>
              </div>
            )}

          <EvaluationWhatsApp
            reference={
              reference
            }
            createdAt={
              createdAt
            }
            category={
              category
            }
            pieceType={
              pieceType
            }
            goldColor={
              goldColor
            }
            isWhiteGold={
              isWhiteGold
            }
            conservation={
              conservation
            }
            goldWeight={
              goldWeight
            }
            karat={
              karat
            }
            goldValue={
              goldValue
            }
            diamondGroups={
              diamondGroups
            }
            diamondResults={
              diamondResults
            }
            diamondsValue={
              diamondsValue
            }
            gemCertificate={
              gemCertificate
            }
            otherCertificate={
              otherCertificate
            }
            luxuryBrand={
              luxuryBrand
            }
            otherLuxuryBrand={
              otherLuxuryBrand
            }
            brandDocumentation={
              brandDocumentation
            }
            otherBrandDocumentation={
              otherBrandDocumentation
            }
            luxuryPremiumEligible={
              luxuryPremiumEligible
            }
            totalValue={
              totalValue
            }
          />
        </div>

        <div
          className={[
            'relative z-10 px-7 py-6 md:px-9',

            premium
              ? 'border-t border-white/8 bg-black/10'
              : 'border-t border-[#52350F]/12 bg-[#6E4B1C]/10',
          ].join(' ')}
        >
          <p
            className={[
              'text-[10px] leading-[1.7]',

              premium
                ? 'text-[#F7F3F0]/48'
                : 'text-[#513A1C]/75',
            ].join(' ')}
          >
            {hasSpecialistDiamonds
              ? 'Esta é uma estimativa parcial. O valor apresentado não inclui as pedras que estão fora da faixa disponível para cálculo automático. A avaliação definitiva depende da conferência técnica.'
              : `Esta estimativa é informativa. O valor definitivo depende da conferência do teor, peso, autenticidade${
                  hasDiamonds
                    ? ' e classificação das pedras'
                    : ''
                } durante a avaliação técnica.`}
          </p>
        </div>
      </div>
    </div>
  );
}
