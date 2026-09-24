import type {
  GoldKarat,
} from '../../lib/jewelry-types';

import {
  formatBRL,
  KARATS,
} from '../../lib/jewelry-utils';

type Props = {
  premium: boolean;

  isWhiteGold: boolean;

  goldWeight: string;

  karat: GoldKarat;

  goldPricePerGram: number;

  goldLoading: boolean;

  onGoldWeightChange:
    (value: string) => void;

  onKaratChange:
    (value: GoldKarat) => void;
};

export default function GoldJewelryForm({
  premium,
  isWhiteGold,
  goldWeight,
  karat,
  goldPricePerGram,
  goldLoading,
  onGoldWeightChange,
  onKaratChange,
}: Props) {
  const whiteGoldKarats:
    GoldKarat[] = [
      '18k',
      '16k',
      '14k',
      '12k',
      '10k',
    ];

  const availableKarats =
    isWhiteGold
      ? whiteGoldKarats
      : KARATS;

  const inputClass =
    premium
      ? [
          'h-[58px]',
          'w-full',
          'rounded-full',
          'border',
          'border-white/15',
          'bg-black/10',
          'px-6',
          'text-[15px]',
          'text-[#F7F3F0]',
          'outline-none',
          'backdrop-blur-xl',
          'transition-all',
          'duration-300',
          'placeholder:text-white/30',
          'focus:border-white/35',
          'focus:bg-black/15',
        ].join(' ')
      : [
          'h-[58px]',
          'w-full',
          'rounded-full',
          'border',
          'border-white/70',
          'bg-[#FFF9EC]/85',
          'px-6',
          'text-[15px]',
          'text-[#503615]',
          'outline-none',
          'shadow-[inset_0_1px_0_rgba(255,255,255,0.70),0_8px_22px_rgba(65,41,9,0.09)]',
          'backdrop-blur-xl',
          'transition-all',
          'duration-300',
          'placeholder:text-[#8E7757]',
          'focus:-translate-y-px',
          'focus:border-white',
          'focus:bg-[#FFFCF5]',
        ].join(' ');

  return (
    <div
      className={[
        'relative',
        'overflow-hidden',
        'transition-all',
        'duration-700',

        premium
          ? [
              'rounded-[2rem]',
              'border',
              'border-white/10',
              'bg-white/[0.055]',
              'p-7',
              'shadow-[0_28px_70px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.07)]',
              'backdrop-blur-2xl',
              'md:p-9',
            ].join(' ')
          : [
              'rounded-[2.6rem_2.6rem_4rem_2.6rem]',
              'border',
              'border-white/65',
              'bg-gradient-to-br',
              'from-[#C9A56C]/95',
              'via-[#AF8848]/94',
              'to-[#A47538]/94',
              'p-7',
              'shadow-[0_38px_95px_rgba(77,49,12,0.25),0_15px_40px_rgba(110,72,19,0.16),inset_0_1px_0_rgba(255,255,255,0.42)]',
              'md:p-9',
            ].join(' '),
      ].join(' ')}
    >
      <div
        className={[
          'pointer-events-none',
          'absolute',
          '-right-24',
          '-top-28',
          'h-72',
          'w-72',
          'rounded-full',
          'blur-[72px]',

          premium
            ? 'bg-[#D6BB8B]/10'
            : 'bg-[#FFECC3]/35',
        ].join(' ')}
      />

      <div
        className={[
          'pointer-events-none',
          'absolute',
          'left-[8%]',
          'right-[20%]',
          'top-0',
          'h-px',

          premium
            ? 'bg-gradient-to-r from-transparent via-white/35 to-transparent'
            : 'bg-gradient-to-r from-transparent via-white/80 to-transparent',
        ].join(' ')}
      />

      <div className="relative z-10">
        <p
          className={[
            'text-[9px]',
            'font-semibold',
            'uppercase',
            'tracking-[0.28em]',

            premium
              ? 'text-[#D6BB8B]'
              : 'text-[#68491F]',
          ].join(' ')}
        >
          Etapa 01
        </p>

        <h2
          className={[
            'mt-3',
            'font-serif',
            'text-[29px]',
            'font-normal',

            premium
              ? 'text-[#F7F3F0]'
              : 'text-[#4F3412]',
          ].join(' ')}
        >
          Ouro da joia
        </h2>

        <div
          className={[
            'mt-7',
            'h-px',
            'w-16',

            premium
              ? 'bg-white/20'
              : 'bg-[#52350F]/25',
          ].join(' ')}
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span
              className={[
                'mb-2',
                'block',
                'text-[9px]',
                'font-semibold',
                'uppercase',
                'tracking-[0.17em]',

                premium
                  ? 'text-[#F7F3F0]/55'
                  : 'text-[#5F431F]',
              ].join(' ')}
            >
              Peso líquido do ouro
            </span>

            <div className="relative">
              <input
                type="text"
                inputMode="decimal"
                autoComplete="off"
                placeholder="Ex.: 10,00"
                value={goldWeight}
                onChange={(event) =>
                  onGoldWeightChange(
                    event.target.value
                  )
                }
                className={`${inputClass} pr-16 font-serif text-[17px]`}
              />

              <span
                className={[
                  'pointer-events-none',
                  'absolute',
                  'right-6',
                  'top-1/2',
                  '-translate-y-1/2',
                  'text-[9px]',
                  'uppercase',
                  'tracking-[0.16em]',

                  premium
                    ? 'text-white/40'
                    : 'text-[#725736]',
                ].join(' ')}
              >
                g
              </span>
            </div>
          </label>

          <label className="block">
            <span
              className={[
                'mb-2',
                'block',
                'text-[9px]',
                'font-semibold',
                'uppercase',
                'tracking-[0.17em]',

                premium
                  ? 'text-[#F7F3F0]/55'
                  : 'text-[#5F431F]',
              ].join(' ')}
            >
              Teor do ouro
            </span>

            <select
              value={karat}
              onChange={(event) =>
                onKaratChange(
                  event.target
                    .value as GoldKarat
                )
              }
              className={`${inputClass} cursor-pointer appearance-none`}
            >
              {availableKarats.map(
                (item) => (
                  <option
                    key={item}
                    value={item}
                    className="text-[#3E2B1B]"
                  >
                    {item.toUpperCase()}
                  </option>
                )
              )}
            </select>
          </label>
        </div>

        {isWhiteGold && (
          <div
            className={[
              'mt-6 rounded-[1.35rem] border px-5 py-4',

              premium
                ? 'border-[#D6BB8B]/20 bg-[#D6BB8B]/[0.06]'
                : 'border-white/40 bg-white/15',
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
              Regra comercial — ouro branco
            </p>

            <p
              className={[
                'mt-2 text-[10px] leading-5',

                premium
                  ? 'text-[#F7F3F0]/48'
                  : 'text-[#513A1C]/75',
              ].join(' ')}
            >
              O valor por grama já considera
              o ajuste comercial de 50% sobre
              a cotação-base aplicável.
            </p>
          </div>
        )}

        <div
          className={[
            'mt-7',
            'flex',
            'items-end',
            'justify-between',
            'gap-5',
            'border-t',
            'pt-6',

            premium
              ? 'border-white/10'
              : 'border-[#5F431F]/15',
          ].join(' ')}
        >
          <div>
            <p
              className={[
                'text-[9px]',
                'uppercase',
                'tracking-[0.15em]',

                premium
                  ? 'text-[#F7F3F0]/40'
                  : 'text-[#654924]',
              ].join(' ')}
            >
              Valor comercial por grama
            </p>

            {premium && (
              <p className="mt-2 text-[9px] text-white/30">
                Cotação atualizada
              </p>
            )}
          </div>

          <p
            className={[
              'font-serif',
              'text-[19px]',

              premium
                ? 'text-[#F7F3F0]'
                : 'text-[#412907]',
            ].join(' ')}
          >
            {goldLoading
              ? '—'
              : formatBRL(
                  goldPricePerGram
                )}
          </p>
        </div>
      </div>
    </div>
  );
}
