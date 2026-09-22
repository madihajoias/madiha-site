import {
  BRAND_DOCUMENTATION_OPTIONS,
  PREMIUM_LUXURY_BRANDS,
  isPremiumLuxuryBrand,
} from '../../lib/jewelry-config';

import type {
  BrandDocumentation,
} from '../../lib/jewelry-types';

type Props = {
  brand:
    string;

  otherBrand:
    string;

  documentation:
    BrandDocumentation;

  otherDocumentation:
    string;

  onBrandChange:
    (value: string) => void;

  onOtherBrandChange:
    (value: string) => void;

  onDocumentationChange:
    (
      value:
        BrandDocumentation
    ) => void;

  onOtherDocumentationChange:
    (value: string) => void;
};

export default function LuxuryJewelryForm({
  brand,
  otherBrand,
  documentation,
  otherDocumentation,
  onBrandChange,
  onOtherBrandChange,
  onDocumentationChange,
  onOtherDocumentationChange,
}: Props) {
  const isOtherBrand =
    brand ===
    'other';

  const isPremium =
    isPremiumLuxuryBrand(
      brand
    );

  const isOtherDocumentation =
    documentation ===
    'other';

  const fieldClass = [
    'h-[56px]',
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
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#D6BB8B]">
            Avaliação especial
          </p>

          <h2 className="mt-3 font-serif text-[29px] font-normal text-[#F7F3F0]">
            Marca e documentação
          </h2>

          <p className="mt-3 max-w-[450px] text-[11px] leading-6 text-[#F7F3F0]/45">
            Algumas joalherias
            selecionadas possuem uma
            regra especial de
            valorização.
          </p>
        </div>

        <div className="mt-7 h-px w-16 bg-white/20" />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-[9px] uppercase tracking-[0.14em] text-[#F7F3F0]/50">
              Marca / Grife
            </span>

            <select
              value={
                brand
              }
              onChange={(
                event
              ) =>
                onBrandChange(
                  event.target
                    .value
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

              {PREMIUM_LUXURY_BRANDS.map(
                (
                  item
                ) => (
                  <option
                    key={
                      item
                    }
                    value={
                      item
                    }
                    className="text-[#3E2B1B]"
                  >
                    {
                      item
                    }
                  </option>
                )
              )}

              <option
                value="other"
                className="text-[#3E2B1B]"
              >
                Outra marca
              </option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-[9px] uppercase tracking-[0.14em] text-[#F7F3F0]/50">
              Documentação da marca
            </span>

            <select
              value={
                documentation
              }
              onChange={(
                event
              ) =>
                onDocumentationChange(
                  event.target
                    .value as BrandDocumentation
                )
              }
              className={`${fieldClass} cursor-pointer appearance-none`}
            >
              {BRAND_DOCUMENTATION_OPTIONS.map(
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

        {isOtherBrand && (
          <label className="mt-5 block">
            <span className="mb-2 block text-[9px] uppercase tracking-[0.14em] text-[#F7F3F0]/50">
              Informe a marca
            </span>

            <input
              type="text"
              value={
                otherBrand
              }
              onChange={(
                event
              ) =>
                onOtherBrandChange(
                  event.target
                    .value
                )
              }
              placeholder="Nome da marca"
              className={
                fieldClass
              }
            />
          </label>
        )}

        {isOtherDocumentation && (
          <label className="mt-5 block">
            <span className="mb-2 block text-[9px] uppercase tracking-[0.14em] text-[#F7F3F0]/50">
              Informe o documento
            </span>

            <input
              type="text"
              value={
                otherDocumentation
              }
              onChange={(
                event
              ) =>
                onOtherDocumentationChange(
                  event.target
                    .value
                )
              }
              placeholder="Descrição do documento"
              className={
                fieldClass
              }
            />
          </label>
        )}

        {isPremium && (
          <div className="mt-6 rounded-[1.4rem] border border-[#D6BB8B]/22 bg-[#D6BB8B]/[0.065] px-5 py-5 backdrop-blur-xl">
            <p className="text-[9px] uppercase tracking-[0.17em] text-[#D6BB8B]">
              Marca elegível
            </p>

            <p className="mt-3 font-serif text-[18px] text-[#F7F3F0]">
              Avaliação especial
              disponível
            </p>

            <p className="mt-2 text-[11px] leading-5 text-[#F7F3F0]/48">
              O metal desta peça será
              considerado pela
              referência comercial do
              ouro 24k, somado à
              avaliação dos brilhantes.
            </p>
          </div>
        )}

        {isOtherBrand && (
          <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur-xl">
            <p className="font-serif text-[17px] text-[#F7F3F0]">
              Esta marca não possui
              valorização comercial
              automática.
            </p>

            <p className="mt-2 text-[11px] leading-5 text-[#F7F3F0]/48">
              A avaliação seguirá
              normalmente pelo teor do
              ouro e pelos brilhantes
              informados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}