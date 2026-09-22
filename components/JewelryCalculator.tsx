'use client';

import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  findCaratRange,
} from '../lib/diamond-pricing';

import {
  createEvaluationReference,
} from '../lib/evaluation-reference';

import {
  isPremiumLuxuryBrand,
} from '../lib/jewelry-config';

import type {
  BrandDocumentation,
  ConservationState,
  DiamondApiError,
  DiamondApiSuccess,
  DiamondGroup,
  DiamondGroupResult,
  GemCertificate,
  GoldColor,
  GoldKarat,
  GoldPriceResponse,
  JewelryCategory,
  PieceType,
} from '../lib/jewelry-types';

import {
  createDiamondGroup,
  createIdleResult,
  parseInputNumber,
} from '../lib/jewelry-utils';

import CategorySelector from './jewelry-calculator/CategorySelector';
import DiamondCertificateForm from './jewelry-calculator/DiamondCertificateForm';
import DiamondGroups from './jewelry-calculator/DiamondGroups';
import EvaluationResult from './jewelry-calculator/EvaluationResult';
import GoldJewelryForm from './jewelry-calculator/GoldJewelryForm';
import LuxuryJewelryForm from './jewelry-calculator/LuxuryJewelryForm';
import PieceDetailsForm from './jewelry-calculator/PieceDetailsForm';

export default function JewelryCalculator() {
  /*
   * =====================================================
   * REFERÊNCIA DA AVALIAÇÃO
   * =====================================================
   */

  const [
    evaluationReference,
    setEvaluationReference,
  ] = useState<
    ReturnType<
      typeof createEvaluationReference
    > | null
  >(null);

  useEffect(() => {
    setEvaluationReference(
      createEvaluationReference()
    );
  }, []);

  /*
   * =====================================================
   * CATEGORIA
   * =====================================================
   */

  const [
    category,
    setCategory,
  ] =
    useState<JewelryCategory>(
      'gold'
    );

  /*
   * =====================================================
   * DADOS DA PEÇA
   * =====================================================
   */

  const [
    pieceType,
    setPieceType,
  ] =
    useState<PieceType>(
      'ring'
    );

  const [
    goldColor,
    setGoldColor,
  ] =
    useState<GoldColor>(
      'yellow'
    );

  const [
    conservation,
    setConservation,
  ] =
    useState<ConservationState>(
      'excellent'
    );

  /*
   * =====================================================
   * CERTIFICADO GEMOLÓGICO
   * =====================================================
   */

  const [
    gemCertificate,
    setGemCertificate,
  ] =
    useState<GemCertificate>(
      'none'
    );

  const [
    otherCertificate,
    setOtherCertificate,
  ] =
    useState('');

  /*
   * =====================================================
   * GRIFE
   * =====================================================
   */

  const [
    luxuryBrand,
    setLuxuryBrand,
  ] =
    useState('');

  const [
    otherLuxuryBrand,
    setOtherLuxuryBrand,
  ] =
    useState('');

  const [
    brandDocumentation,
    setBrandDocumentation,
  ] =
    useState<BrandDocumentation>(
      'none'
    );

  const [
    otherBrandDocumentation,
    setOtherBrandDocumentation,
  ] =
    useState('');

  /*
   * =====================================================
   * COTAÇÃO DO OURO
   * =====================================================
   */

  const [
    goldPriceData,
    setGoldPriceData,
  ] =
    useState<GoldPriceResponse | null>(
      null
    );

  const [
    goldLoading,
    setGoldLoading,
  ] =
    useState(true);

  const [
    goldError,
    setGoldError,
  ] =
    useState('');

  /*
   * =====================================================
   * OURO
   * =====================================================
   */

  const [
    goldWeight,
    setGoldWeight,
  ] =
    useState('');

  const [
    karat,
    setKarat,
  ] =
    useState<GoldKarat>(
      '18k'
    );

  /*
   * =====================================================
   * BRILHANTES
   * =====================================================
   */

  const [
    diamondGroups,
    setDiamondGroups,
  ] =
    useState<
      DiamondGroup[]
    >([
      createDiamondGroup(
        1
      ),
    ]);

  const [
    nextGroupId,
    setNextGroupId,
  ] =
    useState(2);

  const [
    diamondResults,
    setDiamondResults,
  ] =
    useState<
      Record<
        number,
        DiamondGroupResult
      >
    >({
      1: createIdleResult(
        1
      ),
    });

  /*
   * =====================================================
   * REGRAS DA CATEGORIA
   * =====================================================
   */

  const hasDiamonds =
    category ===
      'diamonds' ||
    category ===
      'luxury';

  const isLuxury =
    category ===
    'luxury';

  const isPremiumTheme =
    category ===
      'diamonds' ||
    category ===
      'luxury';

  const luxuryPremiumEligible =
    isLuxury &&
    isPremiumLuxuryBrand(
      luxuryBrand
    );

  /*
   * =====================================================
   * CARREGAR COTAÇÃO DO OURO
   * =====================================================
   */

  useEffect(() => {
    let active = true;

    async function loadGoldPrices() {
      try {
        setGoldLoading(
          true
        );

        setGoldError('');

        const response =
          await fetch(
            '/api/gold-price',
            {
              method: 'GET',
              cache:
                'no-store',
            }
          );

        if (
          !response.ok
        ) {
          throw new Error(
            'Não foi possível carregar a cotação do ouro.'
          );
        }

        const data =
          (await response.json()) as GoldPriceResponse;

        if (
          !data?.comercial ||
          !Number.isFinite(
            data?.usdBrl
          )
        ) {
          throw new Error(
            'A resposta da cotação do ouro é inválida.'
          );
        }

        if (active) {
          setGoldPriceData(
            data
          );
        }
      } catch (
        error
      ) {
        console.error(
          'Erro ao carregar cotação do ouro:',
          error
        );

        if (active) {
          setGoldError(
            'Não foi possível carregar a cotação do ouro neste momento.'
          );
        }
      } finally {
        if (active) {
          setGoldLoading(
            false
          );
        }
      }
    }

    loadGoldPrices();

    return () => {
      active = false;
    };
  }, []);

  /*
   * =====================================================
   * CALCULAR BRILHANTES
   * =====================================================
   */

  useEffect(() => {
    if (
      !hasDiamonds
    ) {
      return;
    }

    const controller =
      new AbortController();

    const timer =
      window.setTimeout(
        async () => {
          const newResults: Record<
            number,
            DiamondGroupResult
          > = {};

          const validGroups =
            diamondGroups.filter(
              (
                group
              ) => {
                const quantity =
                  Math.floor(
                    parseInputNumber(
                      group.quantity
                    )
                  );

                const caratWeight =
                  parseInputNumber(
                    group.caratWeight
                  );

                const range =
                  findCaratRange(
                    caratWeight
                  );

                if (
                  quantity <=
                    0 ||
                  caratWeight <=
                    0 ||
                  !range ||
                  !group.color ||
                  !group.clarity
                ) {
                  newResults[
                    group.id
                  ] =
                    createIdleResult(
                      group.id
                    );

                  return false;
                }

                newResults[
                  group.id
                ] = {
                  groupId:
                    group.id,

                  status:
                    'loading',

                  unitValueBrl:
                    0,

                  totalValueBrl:
                    0,

                  usdBrl:
                    null,

                  message:
                    'Calculando...',
                };

                return true;
              }
            );

          setDiamondResults(
            (
              current
            ) => ({
              ...current,
              ...newResults,
            })
          );

          await Promise.all(
            validGroups.map(
              async (
                group
              ) => {
                const quantity =
                  Math.floor(
                    parseInputNumber(
                      group.quantity
                    )
                  );

                const caratWeight =
                  parseInputNumber(
                    group.caratWeight
                  );

                try {
                  const response =
                    await fetch(
                      '/api/diamond-price',
                      {
                        method:
                          'POST',

                        headers: {
                          'Content-Type':
                            'application/json',
                        },

                        body:
                          JSON.stringify(
                            {
                              quantity,
                              caratWeight,
                              color:
                                group.color,
                              clarity:
                                group.clarity,
                            }
                          ),

                        signal:
                          controller.signal,
                      }
                    );

                  const data =
                    (await response.json()) as
                      | DiamondApiSuccess
                      | DiamondApiError;

                  if (
                    response.status ===
                      404 &&
                    'code' in
                      data &&
                    data.code ===
                      'DIAMOND_PRICE_NOT_FOUND'
                  ) {
                    newResults[
                      group.id
                    ] = {
                      groupId:
                        group.id,

                      status:
                        'not-found',

                      unitValueBrl:
                        0,

                      totalValueBrl:
                        0,

                      usdBrl:
                        null,

                      message:
                        'Esta classificação ainda não está disponível para cálculo.',
                    };

                    return;
                  }

                  if (
                    !response.ok ||
                    !(
                      'success' in
                        data &&
                      data.success
                    )
                  ) {
                    newResults[
                      group.id
                    ] = {
                      groupId:
                        group.id,

                      status:
                        'error',

                      unitValueBrl:
                        0,

                      totalValueBrl:
                        0,

                      usdBrl:
                        null,

                      message:
                        'Não foi possível calcular este grupo.',
                    };

                    return;
                  }

                  newResults[
                    group.id
                  ] = {
                    groupId:
                      group.id,

                    status:
                      'success',

                    unitValueBrl:
                      data.unitValueBrl,

                    totalValueBrl:
                      data.totalValueBrl,

                    usdBrl:
                      data.usdBrl,

                    message: '',
                  };
                } catch (
                  error
                ) {
                  if (
                    error instanceof
                      DOMException &&
                    error.name ===
                      'AbortError'
                  ) {
                    return;
                  }

                  console.error(
                    'Erro ao calcular brilhante:',
                    error
                  );

                  newResults[
                    group.id
                  ] = {
                    groupId:
                      group.id,

                    status:
                      'error',

                    unitValueBrl:
                      0,

                    totalValueBrl:
                      0,

                    usdBrl:
                      null,

                    message:
                      'Não foi possível calcular este grupo.',
                  };
                }
              }
            )
          );

          if (
            !controller.signal
              .aborted
          ) {
            setDiamondResults(
              (
                current
              ) => ({
                ...current,
                ...newResults,
              })
            );
          }
        },
        350
      );

    return () => {
      window.clearTimeout(
        timer
      );

      controller.abort();
    };
  }, [
    diamondGroups,
    hasDiamonds,
  ]);

  /*
   * =====================================================
   * CÁLCULO DO OURO
   * =====================================================
   */

  const goldWeightNumber =
    parseInputNumber(
      goldWeight
    );

  const standardGoldPricePerGram =
    goldPriceData
      ?.comercial[
        karat
      ] ?? 0;

  const premiumGoldPricePerGram =
    goldPriceData
      ?.comercial[
        '24k'
      ] ?? 0;

  const goldPricePerGram =
    luxuryPremiumEligible
      ? premiumGoldPricePerGram
      : standardGoldPricePerGram;

  const goldValue =
    goldWeightNumber >
    0
      ? goldWeightNumber *
        goldPricePerGram
      : 0;

  /*
   * =====================================================
   * TOTAL DOS BRILHANTES
   * =====================================================
   */

  const diamondsValue =
    useMemo(
      () => {
        if (
          !hasDiamonds
        ) {
          return 0;
        }

        return Object.values(
          diamondResults
        ).reduce(
          (
            total,
            result
          ) => {
            if (
              result.status !==
              'success'
            ) {
              return total;
            }

            return (
              total +
              result.totalValueBrl
            );
          },
          0
        );
      },
      [
        diamondResults,
        hasDiamonds,
      ]
    );

  /*
   * =====================================================
   * DÓLAR
   * =====================================================
   */

  const diamondUsdBrl =
    useMemo(() => {
      if (
        !hasDiamonds
      ) {
        return null;
      }

      const success =
        Object.values(
          diamondResults
        ).find(
          (
            result
          ) =>
            result.status ===
              'success' &&
            result.usdBrl
        );

      return (
        success?.usdBrl ??
        goldPriceData
          ?.usdBrl ??
        null
      );
    }, [
      diamondResults,
      goldPriceData,
      hasDiamonds,
    ]);

  /*
   * =====================================================
   * TOTAL
   * =====================================================
   */

  const totalValue =
    goldValue +
    diamondsValue;

  /*
   * =====================================================
   * ALTERAR GRUPO
   * =====================================================
   */

  const updateDiamondGroup =
    <
      K extends keyof DiamondGroup,
    >(
      id: number,
      field: K,
      value:
        DiamondGroup[K]
    ) => {
      setDiamondGroups(
        (
          current
        ) =>
          current.map(
            (
              group
            ) => {
              if (
                group.id !==
                id
              ) {
                return group;
              }

              if (
                field ===
                'caratWeight'
              ) {
                return {
                  ...group,

                  caratWeight:
                    value as string,

                  color:
                    '',

                  clarity:
                    '',
                };
              }

              return {
                ...group,

                [field]:
                  value,
              };
            }
          )
      );
    };

  /*
   * =====================================================
   * ADICIONAR GRUPO
   * =====================================================
   */

  const addDiamondGroup =
    () => {
      const newId =
        nextGroupId;

      setDiamondGroups(
        (
          current
        ) => [
          ...current,

          createDiamondGroup(
            newId
          ),
        ]
      );

      setDiamondResults(
        (
          current
        ) => ({
          ...current,

          [newId]:
            createIdleResult(
              newId
            ),
        })
      );

      setNextGroupId(
        (
          current
        ) =>
          current + 1
      );
    };

  /*
   * =====================================================
   * REMOVER GRUPO
   * =====================================================
   */

  const removeDiamondGroup =
    (
      id: number
    ) => {
      if (
        diamondGroups.length ===
        1
      ) {
        setDiamondGroups([
          createDiamondGroup(
            id
          ),
        ]);

        setDiamondResults({
          [id]:
            createIdleResult(
              id
            ),
        });

        return;
      }

      setDiamondGroups(
        (
          current
        ) =>
          current.filter(
            (
              group
            ) =>
              group.id !==
              id
          )
      );

      setDiamondResults(
        (
          current
        ) => {
          const next = {
            ...current,
          };

          delete next[id];

          return next;
        }
      );
    };

  /*
   * =====================================================
   * INTERFACE
   * =====================================================
   */

  return (
    <section
      className={[
        'relative min-h-screen overflow-hidden px-5 pb-24 pt-20 transition-colors duration-700 ease-in-out md:px-8 md:pb-32 md:pt-24 lg:pt-28',

        isPremiumTheme
          ? 'bg-[#5A1017]'
          : 'bg-[#F4EBD7]',
      ].join(' ')}
    >
      {/*
       * =================================================
       * FUNDO CLARO — OURO / HOME
       * =================================================
       */}

      <div
        className={[
          'pointer-events-none absolute inset-0 transition-opacity duration-700',

          isPremiumTheme
            ? 'opacity-0'
            : 'opacity-100',
        ].join(' ')}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 15% 42%, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.52) 24%, transparent 49%), radial-gradient(circle at 84% 38%, rgba(196,158,92,0.38) 0%, rgba(228,208,166,0.30) 32%, transparent 59%), linear-gradient(112deg, #F9F4E9 0%, #F2E8D4 48%, #E2CDA4 100%)',
          }}
        />

        <div className="absolute -left-[10%] top-[12%] h-[44vw] w-[44vw] rounded-full bg-white/50 blur-[130px]" />

        <div className="absolute -right-[10%] top-[12%] h-[48vw] w-[48vw] rounded-full bg-[#C7A87A]/20 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            background:
              'radial-gradient(circle at 50% 100%, rgba(255,255,255,0.65), transparent 52%)',
          }}
        />
      </div>

      {/*
       * =================================================
       * FUNDO PREMIUM — BRILHANTES / ALTA JOALHERIA
       * =================================================
       */}

      <div
        className={[
          'pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-700',

          isPremiumTheme
            ? 'opacity-100'
            : 'opacity-0',
        ].join(' ')}
      >
        <div className="absolute inset-0 bg-[#5A1017]" />

        <div className="jewelry-blob-one absolute -left-[15%] top-[-12%] h-[58vw] w-[58vw] rounded-full bg-[#8B1A27] opacity-75 blur-[140px]" />

        <div className="jewelry-blob-two absolute -right-[14%] top-[4%] h-[48vw] w-[48vw] rounded-full bg-[#31080D] opacity-95 blur-[135px]" />

        <div className="jewelry-blob-three absolute bottom-[-32%] left-[15%] h-[66vw] w-[66vw] rounded-full bg-[#7A1622] opacity-60 blur-[165px]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, transparent 15%, rgba(30,3,7,0.34) 100%)',
          }}
        />
      </div>

      {/*
       * =================================================
       * CONTEÚDO
       * =================================================
       */}

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <CategorySelector
          category={
            category
          }
          onChange={
            setCategory
          }
        />

        <div className="mt-10 md:mt-12">
          {goldError ? (
            <div
              className={[
                'mx-auto max-w-[700px] rounded-[1.5rem] px-6 py-5 text-center text-[13px] backdrop-blur-xl',

                isPremiumTheme
                  ? 'border border-red-200/15 bg-black/15 text-red-100'
                  : 'border border-[#8E3232]/20 bg-white/70 text-[#8E3232]',
              ].join(' ')}
            >
              {goldError}
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-start">
              <div
                key={
                  category
                }
                className="space-y-8 jewelry-content-enter"
              >
                <PieceDetailsForm
  premium={
    isPremiumTheme
  }
  pieceType={
    pieceType
  }
  goldColor={
    goldColor
  }
  conservation={
    conservation
  }
  onPieceTypeChange={
    setPieceType
  }
  onGoldColorChange={
    setGoldColor
  }
  onConservationChange={
    setConservation
  }
/>

                {isLuxury && (
                  <LuxuryJewelryForm
                    brand={
                      luxuryBrand
                    }
                    otherBrand={
                      otherLuxuryBrand
                    }
                    documentation={
                      brandDocumentation
                    }
                    otherDocumentation={
                      otherBrandDocumentation
                    }
                    onBrandChange={
                      setLuxuryBrand
                    }
                    onOtherBrandChange={
                      setOtherLuxuryBrand
                    }
                    onDocumentationChange={
                      setBrandDocumentation
                    }
                    onOtherDocumentationChange={
                      setOtherBrandDocumentation
                    }
                  />
                )}

                <GoldJewelryForm
  premium={
    isPremiumTheme
  }
  goldWeight={
    goldWeight
  }
  karat={
    karat
  }
  goldPricePerGram={
    goldPricePerGram
  }
  goldLoading={
    goldLoading
  }
  onGoldWeightChange={
    setGoldWeight
  }
  onKaratChange={
    setKarat
  }
/>

                {hasDiamonds && (
                  <DiamondGroups
                    groups={
                      diamondGroups
                    }
                    results={
                      diamondResults
                    }
                    onUpdate={
                      updateDiamondGroup
                    }
                    onAdd={
                      addDiamondGroup
                    }
                    onRemove={
                      removeDiamondGroup
                    }
                  />
                )}

                {hasDiamonds && (
                  <DiamondCertificateForm
                    certificate={
                      gemCertificate
                    }
                    otherCertificate={
                      otherCertificate
                    }
                    onCertificateChange={
                      setGemCertificate
                    }
                    onOtherCertificateChange={
                      setOtherCertificate
                    }
                  />
                )}
              </div>

              <div
                key={`result-${category}`}
                className="jewelry-content-enter"
              >
                {evaluationReference ? (
                  <EvaluationResult
                    reference={
                      evaluationReference.code
                    }
                    createdAt={
                      evaluationReference.createdAt
                    }
                    category={
                      category
                    }
                    goldLoading={
                      goldLoading
                    }
                    goldWeight={
                      goldWeightNumber
                    }
                    karat={
                      karat
                    }
                    goldValue={
                      goldValue
                    }
                    diamondsValue={
                      diamondsValue
                    }
                    diamondGroups={
                      diamondGroups
                    }
                    diamondResults={
                      diamondResults
                    }
                    totalValue={
                      totalValue
                    }
                    diamondUsdBrl={
                      diamondUsdBrl
                    }
                    pieceType={
                      pieceType
                    }
                    goldColor={
                      goldColor
                    }
                    conservation={
                      conservation
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
                  />
                ) : (
                  <div className="lg:sticky lg:top-[120px]">
                    <div
                      className={[
                        'rounded-[2rem] px-7 py-10 shadow-[0_28px_80px_rgba(55,20,26,0.15)] transition-all duration-700 md:px-9',

                        isPremiumTheme
                          ? 'border border-white/10 bg-white/[0.06] text-[#F7F3F0] backdrop-blur-2xl'
                          : 'border border-[#5A1017]/10 bg-[#5A1017] text-[#F7F3F0]',
                      ].join(' ')}
                    >
                      <p className="text-[9px] uppercase tracking-[0.24em] text-[#D6BB8B]">
                        Avaliação de joias
                      </p>

                      <p className="mt-4 font-serif text-[25px]">
                        Preparando avaliação...
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/*
       * =================================================
       * ANIMAÇÕES
       * =================================================
       */}

      <style>
        {`
          @keyframes jewelryBlobOne {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(6%, -5%, 0) scale(1.08);
            }

            100% {
              transform: translate3d(-3%, 5%, 0) scale(0.96);
            }
          }

          @keyframes jewelryBlobTwo {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(-8%, 6%, 0) scale(1.1);
            }

            100% {
              transform: translate3d(4%, -3%, 0) scale(0.94);
            }
          }

          @keyframes jewelryBlobThree {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(5%, -8%, 0) scale(1.06);
            }

            100% {
              transform: translate3d(-4%, 3%, 0) scale(0.95);
            }
          }

          @keyframes jewelryContentEnter {
            0% {
              opacity: 0;
              transform: translateY(14px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .jewelry-blob-one {
            animation:
              jewelryBlobOne
              16s
              ease-in-out
              infinite
              alternate;
          }

          .jewelry-blob-two {
            animation:
              jewelryBlobTwo
              19s
              ease-in-out
              infinite
              alternate;
          }

          .jewelry-blob-three {
            animation:
              jewelryBlobThree
              22s
              ease-in-out
              infinite
              alternate;
          }

          .jewelry-content-enter {
            animation:
              jewelryContentEnter
              480ms
              cubic-bezier(
                0.22,
                1,
                0.36,
                1
              )
              both;
          }

          @media (
            prefers-reduced-motion:
            reduce
          ) {
            .jewelry-blob-one,
            .jewelry-blob-two,
            .jewelry-blob-three,
            .jewelry-content-enter {
              animation:
                none !important;
            }
          }
        `}
      </style>
    </section>
  );
}