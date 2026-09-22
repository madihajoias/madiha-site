import {
  Crown,
  Gem,
  Scale,
} from 'lucide-react';

import type {
  JewelryCategory,
} from '../../lib/jewelry-types';

type Props = {
  category:
    JewelryCategory;

  onChange:
    (
      category:
        JewelryCategory
    ) => void;
};

const CATEGORIES = [
  {
    id: 'gold' as const,
    number: '01',
    title:
      'Joias em Ouro',
    description:
      'Avaliação pelo peso e teor do ouro.',
    icon: Scale,
  },

  {
    id: 'diamonds' as const,
    number: '02',
    title:
      'Joias com Brilhantes',
    description:
      'Avaliação do ouro somada aos brilhantes.',
    icon: Gem,
  },

  {
    id: 'luxury' as const,
    number: '03',
    title:
      'Alta Joalheria',
    description:
      'Avaliação especial para joias de grife.',
    icon: Crown,
  },
];

export default function CategorySelector({
  category,
  onChange,
}: Props) {
  const premium =
    category ===
      'diamonds' ||
    category ===
      'luxury';

  return (
    <div>
      <div className="mb-10 md:mb-12">
        <div className="flex items-center gap-3">
          <span
            className={[
              'h-px w-8 transition-colors duration-700 md:w-10',

              premium
                ? 'bg-[#D6BB8B]/65'
                : 'bg-[#98713E]/55',
            ].join(' ')}
          />

          <p
            className={[
              'text-[9px] font-semibold uppercase tracking-[0.32em] transition-colors duration-700',

              premium
                ? 'text-[#D6BB8B]'
                : 'text-[#98713E]',
            ].join(' ')}
          >
            Avaliação de Joias
          </p>
        </div>

        <h1
          className={[
            'mt-5 max-w-[780px] font-serif text-[39px] font-normal leading-[1.03] tracking-[-0.025em] transition-colors duration-700 md:text-[54px]',

            premium
              ? 'text-[#F7F3F0]'
              : 'text-[#5A1017]',
          ].join(' ')}
        >
          O que você deseja
          avaliar?
        </h1>

        <p
          className={[
            'mt-5 max-w-[650px] text-[12px] leading-6 transition-colors duration-700 md:text-[13px]',

            premium
              ? 'text-[#F7F3F0]/55'
              : 'text-[#806F61]',
          ].join(' ')}
        >
          Escolha a categoria da
          peça para iniciar uma
          estimativa personalizada.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {CATEGORIES.map(
          (
            item
          ) => {
            const Icon =
              item.icon;

            const active =
              category ===
              item.id;

            const goldActive =
              active &&
              item.id ===
                'gold';

            return (
              <button
                key={
                  item.id
                }
                type="button"
                onClick={() =>
                  onChange(
                    item.id
                  )
                }
                className={[
                  'group relative min-h-[176px] overflow-hidden rounded-[1.5rem] p-6 text-left transition-all duration-500 ease-out md:p-7',

                  premium
                    ? [
                        'border',

                        active
                          ? 'border-[#F7F3F0]/28 bg-white/[0.12] shadow-[0_26px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl'
                          : 'border-[#F7F3F0]/10 bg-white/[0.045] shadow-[0_18px_50px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl hover:-translate-y-[3px] hover:border-[#F7F3F0]/20 hover:bg-white/[0.075]',
                      ].join(
                        ' '
                      )
                    : goldActive
                      ? [
                          'border',
                          'border-white/65',
                          'bg-gradient-to-br',
                          'from-[#C9A56C]/95',
                          'via-[#AF8848]/94',
                          'to-[#A47538]/94',
                          'shadow-[0_25px_65px_rgba(77,49,12,0.20),0_10px_30px_rgba(110,72,19,0.12),inset_0_1px_0_rgba(255,255,255,0.42)]',
                        ].join(
                          ' '
                        )
                      : [
                          'border',
                          'border-white/75',
                          'bg-white/40',
                          'shadow-[0_18px_48px_rgba(91,66,32,0.06),inset_0_1px_0_rgba(255,255,255,0.70)]',
                          'backdrop-blur-xl',
                          'hover:-translate-y-[3px]',
                          'hover:border-[#C7A87A]/45',
                          'hover:bg-white/55',
                        ].join(
                          ' '
                        ),
                ].join(' ')}
              >
                <div
                  className={[
                    'pointer-events-none absolute left-[12%] right-[18%] top-0 h-px',

                    premium
                      ? 'bg-gradient-to-r from-transparent via-white/45 to-transparent'
                      : goldActive
                        ? 'bg-gradient-to-r from-transparent via-white/80 to-transparent'
                        : 'bg-gradient-to-r from-transparent via-white/75 to-transparent',
                  ].join(' ')}
                />

                <div
                  className={[
                    'pointer-events-none absolute -right-14 -top-16 h-40 w-40 rounded-full blur-[45px]',

                    premium
                      ? active
                        ? 'bg-[#D6BB8B]/16'
                        : 'bg-[#F7F3F0]/5'
                      : goldActive
                        ? 'bg-[#FFECC3]/35'
                        : 'bg-white/40',
                  ].join(' ')}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={[
                      'flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500',

                      premium
                        ? active
                          ? 'border-white/20 bg-white/10 text-[#F7F3F0]'
                          : 'border-white/10 bg-white/[0.045] text-[#D6BB8B]'
                        : goldActive
                          ? 'border-white/25 bg-white/12 text-[#5C3C15]'
                          : 'border-[#C7A87A]/25 bg-[#F4E8D3]/60 text-[#98713E]',
                    ].join(
                      ' '
                    )}
                  >
                    <Icon
                      size={
                        17
                      }
                      strokeWidth={
                        1.2
                      }
                    />
                  </div>

                  <span
                    className={[
                      'font-serif text-[11px] tracking-[0.10em]',

                      premium
                        ? 'text-white/25'
                        : goldActive
                          ? 'text-[#5F431F]/45'
                          : 'text-[#9A7441]/45',
                    ].join(
                      ' '
                    )}
                  >
                    {
                      item.number
                    }
                  </span>
                </div>

                <div className="relative z-10">
                  <h2
                    className={[
                      'mt-7 font-serif text-[22px] font-normal',

                      premium
                        ? 'text-[#F7F3F0]'
                        : goldActive
                          ? 'text-[#4F3412]'
                          : 'text-[#5A1017]',
                    ].join(
                      ' '
                    )}
                  >
                    {
                      item.title
                    }
                  </h2>

                  <p
                    className={[
                      'mt-2 max-w-[250px] text-[10px] leading-5',

                      premium
                        ? 'text-[#F7F3F0]/45'
                        : goldActive
                          ? 'text-[#5E4728]/70'
                          : 'text-[#847879]',
                    ].join(
                      ' '
                    )}
                  >
                    {
                      item.description
                    }
                  </p>
                </div>

                <div
                  className={[
                    'absolute bottom-0 left-0 h-[2px] transition-all duration-500',

                    active
                      ? 'w-full opacity-100'
                      : 'w-0 opacity-0',

                    premium
                      ? 'bg-gradient-to-r from-transparent via-[#D6BB8B] to-transparent'
                      : 'bg-gradient-to-r from-transparent via-white/70 to-transparent',
                  ].join(
                    ' '
                  )}
                />
              </button>
            );
          }
        )}
      </div>
    </div>
  );
}