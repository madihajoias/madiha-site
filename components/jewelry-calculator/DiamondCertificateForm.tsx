import {
  GEM_CERTIFICATES,
} from '../../lib/jewelry-config';

import type {
  GemCertificate,
} from '../../lib/jewelry-types';

type Props = {
  certificate:
    GemCertificate;

  otherCertificate:
    string;

  onCertificateChange:
    (
      value:
        GemCertificate
    ) => void;

  onOtherCertificateChange:
    (value: string) => void;
};

export default function DiamondCertificateForm({
  certificate,
  otherCertificate,
  onCertificateChange,
  onOtherCertificateChange,
}: Props) {
  const isOther =
    certificate ===
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
            Documentação
          </p>

          <h2 className="mt-3 font-serif text-[29px] font-normal text-[#F7F3F0]">
            Certificado dos
            brilhantes
          </h2>

          <p className="mt-3 text-[11px] leading-6 text-[#F7F3F0]/45">
            Informe se os brilhantes
            possuem documentação
            gemológica.
          </p>
        </div>

        <div className="mt-7 h-px w-16 bg-white/20" />

        <label className="mt-8 block">
          <span className="mb-2 block text-[9px] uppercase tracking-[0.14em] text-[#F7F3F0]/50">
            Certificado gemológico
          </span>

          <select
            value={
              certificate
            }
            onChange={(
              event
            ) =>
              onCertificateChange(
                event.target
                  .value as GemCertificate
              )
            }
            className={`${fieldClass} cursor-pointer appearance-none`}
          >
            {GEM_CERTIFICATES.map(
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

        {isOther && (
          <>
            <label className="mt-5 block">
              <span className="mb-2 block text-[9px] uppercase tracking-[0.14em] text-[#F7F3F0]/50">
                Informe o certificado
              </span>

              <input
                type="text"
                value={
                  otherCertificate
                }
                onChange={(
                  event
                ) =>
                  onOtherCertificateChange(
                    event.target
                      .value
                  )
                }
                placeholder="Nome do certificado"
                className={
                  fieldClass
                }
              />
            </label>

            <div className="mt-6 rounded-[1.4rem] border border-[#D6BB8B]/18 bg-[#D6BB8B]/[0.055] px-5 py-5 backdrop-blur-xl">
              <p className="font-serif text-[17px] text-[#F7F3F0]">
                Este certificado não
                possui valor comercial
                para esta avaliação.
              </p>

              <p className="mt-2 text-[11px] leading-5 text-[#F7F3F0]/48">
                A peça continuará sendo
                avaliada normalmente
                pelos demais critérios
                informados.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}