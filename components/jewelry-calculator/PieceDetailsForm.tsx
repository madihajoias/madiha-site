import {
  CONSERVATION_STATES,
  GOLD_COLORS,
  PIECE_TYPES,
} from '../../lib/jewelry-config';

import type {
  ConservationState,
  GoldColor,
  PieceType,
} from '../../lib/jewelry-types';

type Props = {
  premium:
    boolean;

  pieceType:
    PieceType;

  goldColor:
    GoldColor;

  conservation:
    ConservationState;

  onPieceTypeChange:
    (value: PieceType) => void;

  onGoldColorChange:
    (value: GoldColor) => void;

  onConservationChange:
    (
      value:
        ConservationState
    ) => void;
};

export default function PieceDetailsForm({
  premium,
  pieceType,
  goldColor,
  conservation,
  onPieceTypeChange,
  onGoldColorChange,
  onConservationChange,
}: Props) {
  const selectClass =
    premium
      ? 'h-[56px] w-full appearance-none rounded-full border border-white/15 bg-black/10 px-5 text-[14px] text-[#F7F3F0] outline-none backdrop-blur-xl transition-all duration-300 focus:border-white/35 focus:bg-black/15'
      : 'h-[56px] w-full appearance-none rounded-full border border-white/70 bg-[#FFF9EC]/80 px-5 text-[14px] text-[#503615] outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.70),0_8px_22px_rgba(65,41,9,0.08)] backdrop-blur-xl transition-all duration-300 focus:-translate-y-px focus:border-white focus:bg-[#FFFCF5]';

  return (
    <div
      className={[
        'relative overflow-hidden transition-all duration-700',

        premium
          ? 'rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_28px_70px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl md:p-9'
          : 'rounded-[2.6rem_2.6rem_4rem_2.6rem] border border-white/65 bg-gradient-to-br from-[#C9A56C]/95 via-[#AF8848]/94 to-[#A47538]/94 p-7 shadow-[0_38px_95px_rgba(77,49,12,0.25),0_15px_40px_rgba(110,72,19,0.16),inset_0_1px_0_rgba(255,255,255,0.42)] md:p-9',
      ].join(' ')}
    >
      <div
        className={[
          'pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full blur-[70px]',

          premium
            ? 'bg-[#D6BB8B]/8'
            : 'bg-[#FFECC3]/35',
        ].join(' ')}
      />

      <div
        className={[
          'pointer-events-none absolute left-[8%] right-[20%] top-0 h-px',

          premium
            ? 'bg-gradient-to-r from-transparent via-white/35 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/75 to-transparent',
        ].join(' ')}
      />

      <div className="relative z-10">
        <p
          className={[
            'text-[9px] font-semibold uppercase tracking-[0.28em]',

            premium
              ? 'text-[#D6BB8B]'
              : 'text-[#68491F]',
          ].join(' ')}
        >
          Dados da peça
        </p>

        <h2
          className={[
            'mt-3 font-serif text-[29px] font-normal',

            premium
              ? 'text-[#F7F3F0]'
              : 'text-[#4F3412]',
          ].join(' ')}
        >
          Detalhes da joia
        </h2>

        <p
          className={[
            'mt-3 text-[11px] leading-6',

            premium
              ? 'text-[#F7F3F0]/48'
              : 'text-[#5E4728]/75',
          ].join(' ')}
        >
          Informe as principais
          características da peça.
        </p>

        <div
          className={[
            'mt-7 h-px w-16',

            premium
              ? 'bg-white/20'
              : 'bg-[#52350F]/25',
          ].join(' ')}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span
              className={[
                'mb-2 block text-[9px] font-semibold uppercase tracking-[0.17em]',

                premium
                  ? 'text-[#F7F3F0]/55'
                  : 'text-[#5F431F]',
              ].join(' ')}
            >
              Tipo de peça
            </span>

            <select
              value={
                pieceType
              }
              onChange={(
                event
              ) =>
                onPieceTypeChange(
                  event.target
                    .value as PieceType
                )
              }
              className={
                selectClass
              }
            >
              {PIECE_TYPES.map(
                (
                  item
                ) => (
                  <option
                    key={
                      item.value
                    }
                    value={
                      item.value
                    }
                    className="text-[#3E2B1B]"
                  >
                    {
                      item.label
                    }
                  </option>
                )
              )}
            </select>
          </label>

          <label className="block">
            <span
              className={[
                'mb-2 block text-[9px] font-semibold uppercase tracking-[0.17em]',

                premium
                  ? 'text-[#F7F3F0]/55'
                  : 'text-[#5F431F]',
              ].join(' ')}
            >
              Cor do ouro
            </span>

            <select
              value={
                goldColor
              }
              onChange={(
                event
              ) =>
                onGoldColorChange(
                  event.target
                    .value as GoldColor
                )
              }
              className={
                selectClass
              }
            >
              {GOLD_COLORS.map(
                (
                  item
                ) => (
                  <option
                    key={
                      item.value
                    }
                    value={
                      item.value
                    }
                    className="text-[#3E2B1B]"
                  >
                    {
                      item.label
                    }
                  </option>
                )
              )}
            </select>
          </label>
        </div>

        <label className="mt-5 block">
          <span
            className={[
              'mb-2 block text-[9px] font-semibold uppercase tracking-[0.17em]',

              premium
                ? 'text-[#F7F3F0]/55'
                : 'text-[#5F431F]',
            ].join(' ')}
          >
            Estado de
            conservação
          </span>

          <select
            value={
              conservation
            }
            onChange={(
              event
            ) =>
              onConservationChange(
                event.target
                  .value as ConservationState
              )
            }
            className={
              selectClass
            }
          >
            {CONSERVATION_STATES.map(
              (
                item
              ) => (
                <option
                  key={
                    item.value
                  }
                  value={
                    item.value
                  }
                  className="text-[#3E2B1B]"
                >
                  {
                    item.label
                  }
                </option>
              )
            )}
          </select>

          <p
            className={[
              'mt-3 text-[10px] leading-5',

              premium
                ? 'text-[#F7F3F0]/38'
                : 'text-[#5E4728]/65',
            ].join(' ')}
          >
            {
              CONSERVATION_STATES.find(
                (
                  item
                ) =>
                  item.value ===
                  conservation
              )?.description
            }
          </p>
        </label>
      </div>
    </div>
  );
}