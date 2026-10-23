'use client';

import { useState } from 'react';

const menusRodape = [
  {
    titulo: 'Compro Ouro',
    links: [
      'Cotação do Ouro',
      'Ouro 18k e 24k',
      'Moedas e Barras',
    ],
  },
  {
    titulo: 'Compro Joias',
    links: [
      'Diamantes',
      'Joias Assinadas',
      'Alta Relojoaria',
    ],
  },
  {
    titulo: 'Avaliação de Joias',
    links: [
      'Agendar Atendimento',
      'Avaliação Online',
      'Inventários e Heranças',
    ],
  },
  {
    titulo: 'Leilão de Joias',
    links: [
      'Lotes Atuais',
      'Como Dar Lance',
      'Resultados Anteriores',
    ],
  },
  {
    titulo: 'Blog!',
    links: [
      'Guia de Diamantes',
      'Cuidados com Ouro',
      'Notícias do Mercado',
    ],
  },
  {
    titulo: 'Contato',
    links: [
      'Falar com Concierge',
      'Agendar Visita',
      'Ouvidoria',
    ],
  },
  {
    titulo: 'Redes Sociais',
    links: [
      'Instagram',
      'LinkedIn',
      'YouTube',
    ],
  },
];

export default function FooterSection() {
  const [openMenu, setOpenMenu] =
    useState<number | null>(null);

  const toggleMenu = (
    index: number
  ) => {
    setOpenMenu(
      openMenu === index
        ? null
        : index
    );
  };

  return (
    <footer
      className="
        flex
        w-full
        flex-col
        font-sans
      "
    >
      <div
        className="
          w-full
          overflow-hidden
          border-t
          border-[#F7F3F0]/20
          bg-[#5A1017]
          pb-8
          pt-20
          text-[#F7F3F0]
        "
      >
        <div
          className="
            container
            mx-auto
            flex
            flex-col
            px-6
            lg:px-16
          "
        >
          {/* IDENTIDADE */}
          <div
            className="
              animate-reveal
              mb-16
              text-center
              md:text-left
            "
          >
            <h2
              className="
                mb-3
                font-serif
                text-2xl
                uppercase
                tracking-widest
                text-[#F7F3F0]
                md:text-3xl
              "
            >
              MADIHA MAISON
            </h2>

            <p
              className="
                mb-4
                text-[10px]
                font-light
                uppercase
                tracking-[0.3em]
                text-[#D4AF37]
                md:text-xs
              "
            >
              Leilão de Joias e Ouro
              • Compra e Venda de
              Joias
            </p>

            <p
              className="
                text-[10px]
                font-light
                uppercase
                leading-relaxed
                tracking-widest
                text-[#F7F3F0]/60
                md:text-xs
              "
            >
              Vogue Square - Av. das
              Américas, 8585
              <br className="md:hidden" />
              Barra da Tijuca, Rio de
              Janeiro - RJ
              <br className="md:hidden" />
              CEP: 22793-081
            </p>
          </div>

          {/* MENUS */}
          <div
            className="
              mb-16
              grid
              grid-cols-1
              gap-x-8
              gap-y-4
              border-y
              border-[#F7F3F0]/10
              py-8
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {menusRodape.map(
              (menu, index) => (
                <div
                  key={menu.titulo}
                  className="
                    flex
                    flex-col
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggleMenu(index)
                    }
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      py-3
                      text-left
                      outline-none
                    "
                  >
                    <span
                      className={`
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-widest
                        transition-colors

                        ${
                          openMenu ===
                          index
                            ? 'text-[#D4AF37]'
                            : 'text-[#F7F3F0]/80 group-hover:text-white'
                        }
                      `}
                    >
                      {menu.titulo}
                    </span>

                    <span
                      className="
                        text-lg
                        text-[#F7F3F0]/50
                        lg:hidden
                      "
                    >
                      {openMenu ===
                      index
                        ? '−'
                        : '+'}
                    </span>
                  </button>

                  <div
                    className={`
                      flex
                      flex-col
                      gap-3
                      overflow-hidden
                      transition-all
                      duration-500
                      ease-in-out

                      lg:max-h-96
                      lg:opacity-100

                      ${
                        openMenu ===
                        index
                          ? 'mb-4 mt-2 max-h-48 opacity-100'
                          : 'max-h-0 opacity-0 lg:mb-4 lg:mt-2'
                      }
                    `}
                  >
                    {menu.links.map(
                      (link) => (
                        <a
                          key={link}
                          href="#"
                          className="
                            text-[10px]
                            uppercase
                            tracking-wider
                            text-[#F7F3F0]/50
                            transition-colors
                            hover:text-[#D4AF37]
                          "
                        >
                          {link}
                        </a>
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {/* COPYRIGHT */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              text-center
              text-[9px]
              uppercase
              tracking-widest
              text-[#F7F3F0]/30
              md:flex-row
              md:text-left
            "
          >
            <p>
              &copy; 2026 MADIHA
              MAISON. Todos os direitos
              reservados.
            </p>

            <p>
              Vogue Square • Barra da
              Tijuca • RJ
            </p>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeUpReveal {
              0% {
                opacity: 0;
                transform: translateY(40px);
              }

              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-reveal {
              animation:
                fadeUpReveal
                1.5s
                cubic-bezier(0.2, 0.8, 0.2, 1)
                forwards;
            }
          `,
        }}
      />
    </footer>
  );
}