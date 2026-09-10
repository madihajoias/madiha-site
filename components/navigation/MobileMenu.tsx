'use client';

import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Search,
  X,
} from 'lucide-react';
import Link from 'next/link';

import {
  footerMenuItems,
  menuSections,
} from './menu-data';

type MobileMenuProps = {
  open: boolean;
  activeSectionId: string | null;
  onClose: () => void;
  onSectionChange: (id: string | null) => void;
};

type MenuDestinationProps = {
  label: string;
  href?: string;
  live?: boolean;
  className?: string;
  onClick?: () => void;
};

function MenuDestination({
  label,
  href,
  live,
  className = '',
  onClick,
}: MenuDestinationProps) {
  if (live && href) {
    return (
      <Link
        href={href}
        onClick={onClick}
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

export default function MobileMenu({
  open,
  activeSectionId,
  onClose,
  onSectionChange,
}: MobileMenuProps) {
  const activeSection =
    menuSections.find(
      (section) => section.id === activeSectionId
    ) ?? null;

  const submenuOpen = Boolean(activeSection);

  return (
    <div
      className={`fixed inset-0 z-[150] lg:hidden ${
        open
          ? 'visible'
          : 'invisible delay-500'
      }`}
      aria-hidden={!open}
    >
      {/* FUNDO */}

      <button
        type="button"
        aria-label="Fechar menu"
        onClick={onClose}
        className={`absolute inset-0 border-0 bg-[#241416]/30 transition-opacity duration-500 ${
          open
            ? 'opacity-100'
            : 'opacity-0'
        }`}
      />

      {/* CONTAINER PRINCIPAL */}

      <div
        className={`absolute inset-0 overflow-hidden bg-[#FCFAF7] transition-transform duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? 'translate-x-0'
            : '-translate-x-full'
        }`}
      >
        {/* HEADER MOBILE */}

        <div className="relative flex h-[82px] items-center justify-between border-b border-[#5A1017]/10 px-5">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="flex h-9 w-9 items-center justify-center border-0 bg-transparent text-[#453536]"
            >
              <X
                size={21}
                strokeWidth={1}
              />
            </button>

            <button
              type="button"
              aria-label="Pesquisar"
              className="flex h-9 w-9 items-center justify-center border-0 bg-transparent text-[#453536]"
            >
              <Search
                size={19}
                strokeWidth={1}
              />
            </button>
          </div>

          <Link
            href="/"
            onClick={onClose}
            aria-label="Madiha Maison - Página inicial"
            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[16px] uppercase tracking-[0.14em] text-[#580F1A]"
          >
            Madiha Maison
          </Link>

          <a
            href="tel:"
            aria-label="Telefone"
            className="flex h-9 w-9 items-center justify-center text-[#453536]"
          >
            <Phone
              size={19}
              strokeWidth={1}
            />
          </a>
        </div>

        {/* ÁREA DOS PAINÉIS */}

        <div className="relative h-[calc(100%-82px)] overflow-hidden">
          {/* =========================================
              PAINEL 1 - CATEGORIAS
          ========================================== */}

          <div
            className={`absolute inset-0 overflow-y-auto bg-[#FCFAF7] px-7 pb-10 pt-7 transition-[transform,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              submenuOpen
                ? '-translate-x-[18%] opacity-0 pointer-events-none'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <nav
              aria-label="Categorias principais"
              className="flex min-h-full flex-col"
            >
              <div>
                {menuSections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() =>
                      onSectionChange(section.id)
                    }
                    className="group flex w-full items-center justify-between border-0 border-b border-[#5A1017]/8 bg-transparent py-[17px] text-left"
                  >
                    <span className="text-[13px] uppercase tracking-[0.15em] text-[#63595A] transition-colors duration-300 group-hover:text-[#5A1017]">
                      {section.label}
                    </span>

                    <ChevronRight
                      size={17}
                      strokeWidth={1}
                      className="text-[#9C9293]"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-auto border-t border-[#5A1017]/10 pt-7">
                {footerMenuItems.map((item) => (
                  <MenuDestination
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    live={item.live}
                    onClick={onClose}
                    className="mb-4 block text-[10px] uppercase tracking-[0.16em] text-[#776D6E]"
                  />
                ))}
              </div>
            </nav>
          </div>

          {/* =========================================
              PAINEL 2 - SUBMENU
          ========================================== */}

          <div
            className={`absolute inset-0 overflow-y-auto bg-[#FCFAF7] px-7 pb-12 pt-6 transition-[transform,opacity] duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              submenuOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0 pointer-events-none'
            }`}
          >
            {activeSection && (
              <div>
                {/* VOLTAR */}

                <button
                  type="button"
                  onClick={() =>
                    onSectionChange(null)
                  }
                  className="mb-8 flex items-center gap-2 border-0 bg-transparent p-0 text-[10px] uppercase tracking-[0.18em] text-[#6C6263]"
                >
                  <ChevronLeft
                    size={17}
                    strokeWidth={1}
                  />

                  Voltar
                </button>

                {/* TÍTULO */}

                <div className="mb-8">
                  <p className="mb-2 text-[9px] uppercase tracking-[0.26em] text-[#A1886B]">
                    Madiha Maison
                  </p>

                  <h2 className="font-serif text-[30px] font-normal text-[#4B2026]">
                    {activeSection.label}
                  </h2>
                </div>

                {/* VER TUDO */}

                <MenuDestination
                  label={`Ver tudo em ${activeSection.label}`}
                  href={activeSection.href}
                  live={activeSection.live}
                  onClick={onClose}
                  className="mb-5 block border-b border-[#5A1017]/15 pb-5 text-[10px] uppercase tracking-[0.15em] text-[#5A1017]"
                />

                {/* ITENS */}

                <div>
                  {activeSection.items
                    .filter(
                      (item, index) =>
                        !(
                          index === 0 &&
                          item.href === activeSection.href
                        )
                    )
                    .map((item) => (
                      <MenuDestination
                        key={`${activeSection.id}-${item.label}`}
                        label={item.label}
                        href={item.href}
                        live={item.live}
                        onClick={onClose}
                        className="block border-b border-[#5A1017]/8 py-[16px] text-[12px] uppercase tracking-[0.12em] text-[#6F6667]"
                      />
                    ))}
                </div>

                {/* CARD EDITORIAL
                    Mantido discreto.
                    Depois podemos tornar opcional por categoria.
                */}

                <div className="mt-9 bg-[linear-gradient(135deg,rgba(247,243,240,.96),rgba(229,211,183,.62))] px-6 py-7">
                  <p className="text-[8px] uppercase tracking-[0.24em] text-[#98764A]">
                    Vogue Square • Barra da Tijuca
                  </p>

                  <p className="mt-3 font-serif text-[19px] leading-[1.4] text-[#4D252A]">
                    Joias, ouro, avaliação especializada e leilão em uma experiência discreta.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}