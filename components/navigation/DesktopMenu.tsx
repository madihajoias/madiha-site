'use client';

import { ChevronRight, X } from 'lucide-react';
import Link from 'next/link';

import {
  footerMenuItems,
  menuSections,
} from './menu-data';

type DesktopMenuProps = {
  open: boolean;
  activeSectionId: string | null;
  onClose: () => void;
  onSectionChange: (id: string) => void;
};

type MenuDestinationProps = {
  label: string;
  href?: string;
  live?: boolean;
  className?: string;
};

function MenuDestination({
  label,
  href,
  live,
  className = '',
}: MenuDestinationProps) {
  if (live && href) {
    return (
      <Link
        href={href}
        className={className}
      >
        {label}
      </Link>
    );
  }

  return (
    <span
      className={`${className} cursor-default`}
      aria-disabled="true"
      title="Página em preparação"
    >
      {label}
    </span>
  );
}

export default function DesktopMenu({
  open,
  activeSectionId,
  onClose,
  onSectionChange,
}: DesktopMenuProps) {
  const activeSection =
    menuSections.find(
      (section) =>
        section.id === activeSectionId
    ) ?? null;

  const secondaryOpen =
    Boolean(activeSection);

  return (
    <div
      className={`fixed inset-0 z-[140] hidden lg:block transition-[visibility] duration-300 ${
        open
          ? 'visible'
          : 'invisible delay-500'
      }`}
      aria-hidden={!open}
    >
      {/* =========================================
          OVERLAY
      ========================================== */}

      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className={`absolute inset-0 border-0 bg-[#241416]/48 backdrop-blur-[2px] transition-opacity duration-500 ease-out ${
          open
            ? 'opacity-100'
            : 'opacity-0'
        }`}
      />

      {/* =========================================
          SIDEBAR PRINCIPAL
      ========================================== */}

      <aside
        className={`absolute inset-y-0 left-0 z-[3] flex w-[390px] flex-col bg-[#FCFAF7] shadow-[20px_0_60px_rgba(26,12,14,0.10)] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
        aria-label="Menu principal"
      >
        <nav
          aria-label="Categorias principais"
          className="flex h-full flex-col px-12 pb-9 pt-10"
        >
          {/* FECHAR */}

          <button
            type="button"
            onClick={onClose}
            className="mb-10 flex w-fit items-center gap-2 border-0 bg-transparent p-0 text-[10px] font-medium uppercase tracking-[0.18em] text-[#625859] transition-colors duration-300 hover:text-[#5A1017]"
          >
            <X
              size={17}
              strokeWidth={1.15}
            />

            Fechar
          </button>

          {/* CATEGORIAS */}

          <div className="flex flex-col gap-[3px]">
            {menuSections.map(
              (section) => {
                const active =
                  section.id ===
                  activeSectionId;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() =>
                      onSectionChange(
                        section.id
                      )
                    }
                    aria-expanded={
                      active
                    }
                    className={`group flex w-full items-center justify-between border-0 bg-transparent px-0 py-[9px] text-left text-[14px] uppercase tracking-[0.14em] transition-[color,transform] duration-300 ${
                      active
                        ? 'translate-x-[2px] font-medium text-[#321B1E]'
                        : 'font-normal text-[#7B7474] hover:translate-x-[2px] hover:text-[#5A1017]'
                    }`}
                  >
                    <span>
                      {section.label}
                    </span>

                    <ChevronRight
                      size={16}
                      strokeWidth={1}
                      className={`transition-[transform,color] duration-300 ${
                        active
                          ? 'translate-x-0 text-[#5A1017]'
                          : '-translate-x-1 text-[#9D9696]'
                      }`}
                    />
                  </button>
                );
              }
            )}
          </div>

          {/* RODAPÉ DA PRIMEIRA SIDEBAR */}

          <div className="mt-auto border-t border-[#5A1017]/10 pt-6">
            {footerMenuItems.map(
              (item) => (
                <MenuDestination
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  live={item.live}
                  className="mb-3 block text-[10px] uppercase tracking-[0.16em] text-[#716768] transition-colors duration-300 hover:text-[#5A1017]"
                />
              )
            )}
          </div>
        </nav>
      </aside>

      {/* =========================================
          SEGUNDA SIDEBAR
      ========================================== */}

      <aside
        className={`absolute inset-y-0 left-[390px] z-[2] w-[590px] max-w-[calc(100vw-390px)] overflow-hidden border-l border-[#5A1017]/10 bg-[#FCFAF7] shadow-[22px_0_70px_rgba(26,12,14,0.12)] transition-[transform,opacity] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open && secondaryOpen
            ? 'translate-x-0 opacity-100 delay-[90ms]'
            : '-translate-x-full opacity-0 delay-0'
        }`}
        aria-hidden={
          !secondaryOpen
        }
      >
        <div className="h-full overflow-y-auto px-10 pb-12 pt-[88px] [scrollbar-width:thin]">
          {activeSection && (
            <div
              key={
                activeSection.id
              }
              className="mx-auto max-w-[470px]"
            >
              {/* CABEÇALHO DO SUBMENU */}

              <div className="mb-8 flex items-end justify-between gap-8">
                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.28em] text-[#A1886B]">
                    Madiha Maison
                  </p>

                  <h2 className="font-serif text-[31px] font-normal tracking-[-0.02em] text-[#4B2026]">
                    {
                      activeSection.label
                    }
                  </h2>
                </div>

                <MenuDestination
                  label={`Ver tudo em ${activeSection.label}`}
                  href={
                    activeSection.href
                  }
                  live={
                    activeSection.live
                  }
                  className="whitespace-nowrap border-b border-[#5A1017]/30 pb-1 text-[9px] uppercase tracking-[0.16em] text-[#6C5C5D] transition-colors duration-300 hover:text-[#5A1017]"
                />
              </div>

              <div className="h-px w-full bg-[#5A1017]/10" />

              {/* LINKS DO SUBMENU */}

              <div className="grid grid-cols-1 py-5">
                {activeSection.items
                  .filter(
                    (
                      item,
                      index
                    ) =>
                      !(
                        index ===
                          0 &&
                        item.href ===
                          activeSection.href
                      )
                  )
                  .map(
                    (item) => (
                      <MenuDestination
                        key={`${activeSection.id}-${item.label}`}
                        label={
                          item.label
                        }
                        href={
                          item.href
                        }
                        live={
                          item.live
                        }
                        className="border-b border-[#5A1017]/8 py-[14px] text-[12px] uppercase tracking-[0.12em] text-[#6F6667] transition-all duration-300 hover:pl-1 hover:text-[#5A1017]"
                      />
                    )
                  )}
              </div>

              {/* BLOCO INSTITUCIONAL */}

              <div className="mt-8 rounded-[2px] bg-[linear-gradient(135deg,rgba(247,243,240,.96),rgba(229,211,183,.62))] px-7 py-8">
                <p className="text-[9px] uppercase tracking-[0.26em] text-[#98764A]">
                  Vogue Square • Barra da Tijuca
                </p>

                <p className="mt-3 max-w-[360px] font-serif text-[21px] leading-[1.35] text-[#4D252A]">
                  Joias, ouro, avaliação especializada e leilão em uma experiência discreta.
                </p>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}