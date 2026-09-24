import {
  Diamond,
  Plus,
  Trash2,
} from 'lucide-react';

import {
  findCaratRange,
  GROUPED_CLARITIES,
  GROUPED_COLORS,
  INDIVIDUAL_CLARITIES,
  INDIVIDUAL_COLORS,
  type DiamondClarity,
  type DiamondColor,
} from '../../lib/diamond-pricing';

import type {
  DiamondGroup,
  DiamondGroupResult,
} from '../../lib/jewelry-types';

import {
  createIdleResult,
  formatBRL,
  parseInputNumber,
} from '../../lib/jewelry-utils';

type Props = {
  groups: DiamondGroup[];

  results: Record<
    number,
    DiamondGroupResult
  >;

  onUpdate: <
    K extends keyof DiamondGroup,
  >(
    id: number,
    field: K,
    value: DiamondGroup[K]
  ) => void;

  onAdd: () => void;

  onRemove:
    (id: number) => void;
};

export default function DiamondGroups({
  groups,
  results,
  onUpdate,
  onAdd,
  onRemove,
}: Props) {
  const fieldClass = [
    'h-[54px]',
    'w-full',
    'rounded-full',
    'border',
    'border-white/15',
    'bg-black/10',
    'px-5',
    'text-[14px]',
    'text-[#F7F3F0]',
    'outline-none',
    'backdrop-blur-xl',
    'transition-all',
    'duration-300',
    'placeholder:text-white/28',
    'focus:border-white/35',
    'focus:bg-black/15',
  ].join(' ');

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_28px_70px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl md:p-9">
      <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#D6BB8B]/10 blur-[72px]" />

      <div className="pointer-events-none absolute left-[8%] right-[20%] top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#D6BB8B]">
              Etapa 02
            </p>

            <h2 className="mt-3 font-serif text-[29px] font-normal text-[#F7F3F0]">
              Brilhantes
            </h2>

            <p className="mt-3 max-w-[480px] text-[11px] leading-6 text-[#F7F3F0]/48">
              Agrupe pedras com o mesmo
              peso, cor e pureza. Você
              não precisa cadastrar cada
              brilhante separadamente.
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-[#D6BB8B]">
            <Diamond
              size={18}
              strokeWidth={1.15}
            />
          </div>
        </div>

        <div className="mt-7 h-px w-16 bg-white/20" />

        <div className="mt-8 space-y-6">
          {groups.map(
            (
              group,
              index
            ) => {
              const caratWeight =
                parseInputNumber(
                  group.caratWeight
                );

              const range =
                findCaratRange(
                  caratWeight
                );

              /*
               * Quando existe faixa,
               * mantemos exatamente as
               * classificações utilizadas
               * pelo cálculo.
               *
               * Quando NÃO existe faixa,
               * liberamos as opções
               * individuais para que o
               * cliente consiga registrar
               * a pedra para avaliação
               * especializada.
               */
              const colors =
                range?.grouped
                  ? GROUPED_COLORS
                  : INDIVIDUAL_COLORS;

              const clarities =
                range?.grouped
                  ? GROUPED_CLARITIES
                  : INDIVIDUAL_CLARITIES;

              const result =
                results[
                  group.id
                ] ??
                createIdleResult(
                  group.id
                );

              const requiresSpecialist =
                caratWeight >
                  0 &&
                !range;

              return (
                <div
                  key={
                    group.id
                  }
                  className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/[0.075] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl md:p-6"
                >
                  <div className="pointer-events-none absolute left-[10%] right-[25%] top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="relative z-10">
                    <div className="mb-6 flex items-center justify-between">
                      <p className="text-[9px] uppercase tracking-[0.18em] text-[#D6BB8B]">
                        Grupo{' '}
                        {index + 1}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          onRemove(
                            group.id
                          )
                        }
                        aria-label={`Remover grupo ${
                          index + 1
                        }`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/38 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                      >
                        <Trash2
                          size={15}
                          strokeWidth={1}
                        />
                      </button>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-[9px] uppercase tracking-[0.13em] text-[#F7F3F0]/50">
                          Quantidade de
                          brilhantes iguais
                        </span>

                        <input
                          type="number"
                          min="1"
                          step="1"
                          value={
                            group.quantity
                          }
                          onChange={(
                            event
                          ) =>
                            onUpdate(
                              group.id,
                              'quantity',
                              event
                                .target
                                .value
                            )
                          }
                          className={
                            fieldClass
                          }
                        />

                        <p className="mt-2 text-[9px] leading-4 text-white/30">
                          Ex.: um colar
                          com 80
                          brilhantes iguais
                          → informe 80.
                        </p>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-[9px] uppercase tracking-[0.13em] text-[#F7F3F0]/50">
                          Peso de cada
                          brilhante
                        </span>

                        <div className="relative">
                          <input
                            type="text"
                            inputMode="decimal"
                            value={
                              group.caratWeight
                            }
                            onChange={(
                              event
                            ) =>
                              onUpdate(
                                group.id,
                                'caratWeight',
                                event
                                  .target
                                  .value
                              )
                            }
                            placeholder="Ex.: 0,05 ou 8,05"
                            className={`${fieldClass} pr-14`}
                          />

                          <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.1em] text-white/35">
                            ct
                          </span>
                        </div>

                        <p className="mt-2 text-[9px] leading-4 text-white/30">
                          Informe o peso
                          individual de
                          cada pedra.
                        </p>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-[9px] uppercase tracking-[0.13em] text-[#F7F3F0]/50">
                          Cor
                        </span>

                        <select
                          value={
                            group.color
                          }
                          onChange={(
                            event
                          ) =>
                            onUpdate(
                              group.id,
                              'color',
                              event
                                .target
                                .value as DiamondColor
                            )
                          }
                          className={`${fieldClass} cursor-pointer appearance-none`}
                        >
                          <option
                            value=""
                            className="text-[#3E2B1B]"
                          >
                            Selecione
                          </option>

                          {colors.map(
                            (
                              color
                            ) => (
                              <option
                                key={
                                  color
                                }
                                value={
                                  color
                                }
                                className="text-[#3E2B1B]"
                              >
                                {
                                  color
                                }
                              </option>
                            )
                          )}
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-[9px] uppercase tracking-[0.13em] text-[#F7F3F0]/50">
                          Pureza
                        </span>

                        <select
                          value={
                            group.clarity
                          }
                          onChange={(
                            event
                          ) =>
                            onUpdate(
                              group.id,
                              'clarity',
                              event
                                .target
                                .value as DiamondClarity
                            )
                          }
                          className={`${fieldClass} cursor-pointer appearance-none`}
                        >
                          <option
                            value=""
                            className="text-[#3E2B1B]"
                          >
                            Selecione
                          </option>

                          {clarities.map(
                            (
                              clarity
                            ) => (
                              <option
                                key={
                                  clarity
                                }
                                value={
                                  clarity
                                }
                                className="text-[#3E2B1B]"
                              >
                                {
                                  clarity
                                }
                              </option>
                            )
                          )}
                        </select>
                      </label>
                    </div>

                    {range && (
                      <div className="mt-5 border-t border-white/10 pt-4">
                        <p className="text-[10px] text-[#F7F3F0]/38">
                          Faixa de
                          classificação:{' '}

                          <span className="text-[#D6BB8B]">
                            {
                              range.label
                            }
                          </span>
                        </p>
                      </div>
                    )}

                    {requiresSpecialist && (
                      <div className="mt-5 rounded-[1.35rem] border border-[#D6BB8B]/25 bg-[#D6BB8B]/[0.075] px-5 py-5 backdrop-blur-xl">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#D6BB8B]">
                          Avaliação
                          especializada
                        </p>

                        <p className="mt-3 font-serif text-[17px] leading-6 text-[#F7F3F0]">
                          Este peso está
                          fora da faixa
                          disponível para
                          cálculo
                          automático.
                        </p>

                        <p className="mt-2 text-[11px] leading-5 text-[#F7F3F0]/50">
                          Continue
                          preenchendo cor
                          e pureza. Os
                          dados da pedra
                          serão
                          registrados para
                          análise de um
                          especialista.
                        </p>
                      </div>
                    )}

                    {!requiresSpecialist &&
                      result.status ===
                        'loading' && (
                        <div className="mt-5 rounded-[1.2rem] border border-white/8 bg-white/[0.04] px-5 py-4">
                          <p className="text-[11px] text-white/45">
                            Calculando
                            valor dos
                            brilhantes...
                          </p>
                        </div>
                      )}

                    {!requiresSpecialist &&
                      result.status ===
                        'success' && (
                        <div className="mt-5 rounded-[1.2rem] border border-[#D6BB8B]/15 bg-[#D6BB8B]/[0.065] px-5 py-4">
                          <div className="flex items-end justify-between gap-5">
                            <div>
                              <p className="text-[9px] uppercase tracking-[0.13em] text-[#D6BB8B]">
                                Valor do
                                grupo
                              </p>

                              {parseInputNumber(
                                group.quantity
                              ) >
                                1 && (
                                <p className="mt-2 text-[10px] text-white/38">
                                  {formatBRL(
                                    result.unitValueBrl
                                  )}{' '}
                                  por pedra
                                </p>
                              )}
                            </div>

                            <strong className="font-serif text-[20px] font-normal text-[#F7F3F0]">
                              {formatBRL(
                                result.totalValueBrl
                              )}
                            </strong>
                          </div>
                        </div>
                      )}

                    {!requiresSpecialist &&
                      result.status ===
                        'not-found' && (
                        <div className="mt-5 rounded-[1.2rem] border border-[#D6BB8B]/18 bg-[#D6BB8B]/[0.05] px-5 py-4">
                          <p className="text-[11px] leading-5 text-white/55">
                            {
                              result.message
                            }
                          </p>
                        </div>
                      )}

                    {!requiresSpecialist &&
                      result.status ===
                        'error' && (
                        <div className="mt-5 rounded-[1.2rem] border border-red-200/15 bg-red-950/15 px-5 py-4">
                          <p className="text-[11px] leading-5 text-red-100/75">
                            {
                              result.message
                            }
                          </p>
                        </div>
                      )}
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className="mt-6 rounded-[1.35rem] border border-white/8 bg-white/[0.025] px-5 py-4">
          <p className="text-[10px] leading-5 text-white/38">
            Exemplo: um colar
            com 80 brilhantes
            de 0,05 ct, mesma
            cor e pureza, pode
            ser informado em um
            único grupo:
            quantidade 80 e
            peso individual
            0,05 ct.
          </p>
        </div>

        <button
          type="button"
          onClick={onAdd}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.045] px-5 py-[17px] text-[10px] uppercase tracking-[0.17em] text-[#F7F3F0] transition-all duration-300 hover:border-white/25 hover:bg-white/[0.09]"
        >
          <Plus
            size={15}
            strokeWidth={1}
          />

          Adicionar outro grupo
          de brilhantes
        </button>
      </div>
    </div>
  );
}