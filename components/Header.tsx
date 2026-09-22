'use client';

import {
  Heart,
  MapPin,
  Menu,
  Phone,
  Search,
} from 'lucide-react';

import Link from 'next/link';

import {
  usePathname,
} from 'next/navigation';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import Butterfly from './Butterfly';

import DesktopMenu from './navigation/DesktopMenu';

import MobileMenu from './navigation/MobileMenu';

export default function Header() {
  const pathname =
    usePathname();

  const [
    isScrolled,
    setIsScrolled,
  ] =
    useState(false);

  const [
    mounted,
    setMounted,
  ] =
    useState(false);

  const [
    menuOpen,
    setMenuOpen,
  ] =
    useState(false);

  const [
    desktopSectionId,
    setDesktopSectionId,
  ] =
    useState<
      string | null
    >(null);

  const [
    mobileSectionId,
    setMobileSectionId,
  ] =
    useState<
      string | null
    >(null);

  const logoRef =
    useRef<HTMLDivElement>(
      null
    );

  /*
   * =====================================================
   * PÁGINAS QUE PRECISAM DO HEADER SEMPRE CLARO
   * =====================================================
   */

  const forceLightHeader =
    pathname?.startsWith(
      '/joias/calculadora-de-joias'
    ) ?? false;

  const showLightHeader =
    forceLightHeader ||
    isScrolled ||
    menuOpen;

  /*
   * =====================================================
   * SCROLL
   * =====================================================
   */

  useEffect(() => {
    setMounted(true);

    let ticking =
      false;

    const updateHeader =
      () => {
        const nextScrolled =
          window.scrollY >
          32;

        setIsScrolled(
          (
            current
          ) =>
            current ===
            nextScrolled
              ? current
              : nextScrolled
        );

        ticking =
          false;
      };

    const handleScroll =
      () => {
        if (ticking) {
          return;
        }

        window.requestAnimationFrame(
          updateHeader
        );

        ticking =
          true;
      };

    updateHeader();

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  /*
   * =====================================================
   * MENU
   * =====================================================
   */

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow =
      document.body.style
        .overflow;

    document.body.style.overflow =
      'hidden';

    const handleKeyDown =
      (
        event:
          KeyboardEvent
      ) => {
        if (
          event.key ===
          'Escape'
        ) {
          closeMenu();
        }
      };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [
    menuOpen,
  ]);

  const openMenu =
    () => {
      setDesktopSectionId(
        null
      );

      setMobileSectionId(
        null
      );

      setMenuOpen(
        true
      );
    };

  const closeMenu =
    () => {
      setMenuOpen(
        false
      );

      window.setTimeout(
        () => {
          setDesktopSectionId(
            null
          );

          setMobileSectionId(
            null
          );
        },
        450
      );
    };

  return (
    <>
      <header
        className={`
          fixed
          left-0
          top-0
          z-[100]

          w-full

          border-b

          transition-[background-color,border-color,box-shadow,backdrop-filter]
          duration-500
          ease-out

          ${
            showLightHeader
              ? `
                  border-[#6D4C42]/10
                  bg-[#F7F3EF]/95
                  shadow-[0_8px_30px_rgba(55,35,25,0.06)]
                  backdrop-blur-xl
                `
              : `
                  border-transparent
                  bg-transparent
                  shadow-none
                  backdrop-blur-0
                `
          }
        `}
      >
        <div
          className="
            relative

            mx-auto
            flex
            w-full
            max-w-[90rem]

            items-center
            justify-between

            px-5
            py-6

            md:px-8
            md:py-8
          "
        >
          {/*
           * ==========================================
           * ESQUERDA
           * ==========================================
           */}

          <div
            className="
              flex
              items-center
              gap-5

              md:gap-6
            "
          >
            <button
              type="button"
              onClick={
                openMenu
              }
              aria-label="Abrir menu"
              aria-expanded={
                menuOpen
              }
              aria-controls="madiha-main-navigation"
              className="
                cursor-pointer

                border-none
                bg-transparent
                outline-none

                text-[#3E3030]

                transition-colors
                duration-300

                hover:text-[#9B7437]
              "
            >
              <Menu
                strokeWidth={
                  1
                }
                size={
                  24
                }
              />
            </button>

            <button
              type="button"
              aria-label="Pesquisar"
              className="
                hidden
                cursor-pointer
                items-center
                gap-3

                border-none
                bg-transparent
                outline-none

                text-[#3E3030]

                transition-colors
                duration-300

                hover:text-[#9B7437]

                md:flex
              "
            >
              <Search
                strokeWidth={
                  1
                }
                size={
                  18
                }
              />

              <span
                className="
                  mt-0.5

                  text-[10px]
                  uppercase
                  tracking-widest
                "
              >
                Pesquisar
              </span>
            </button>
          </div>

          {/*
           * ==========================================
           * CENTRO
           * ==========================================
           */}

          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2

              text-center
            "
          >
            <div
              ref={
                logoRef
              }
              className="
                relative
                inline-block
              "
            >
              <Link
                href="/"
                aria-label="Madiha Maison - Página inicial"
                className={`
                  block
                  whitespace-nowrap

                  font-serif
                  text-[18px]
                  font-normal
                  uppercase

                  transition-[color,opacity,letter-spacing]
                  duration-[1800ms]
                  ease-out

                  sm:text-2xl
                  md:text-[28px]

                  ${
                    showLightHeader
                      ? 'text-[#580F1A]'
                      : 'text-[#4F1720]'
                  }

                  ${
                    mounted
                      ? `
                          opacity-100
                          tracking-[0.15em]
                        `
                      : `
                          opacity-0
                          tracking-[0.05em]
                        `
                  }
                `}
              >
                Madiha Maison
              </Link>

              <Butterfly />
            </div>
          </div>

          {/*
           * ==========================================
           * DIREITA
           * ==========================================
           */}

          <div
            className="
              flex
              items-center
              gap-4

              md:gap-5
            "
          >
            <button
              type="button"
              className="
                mr-2
                mt-0.5

                hidden
                items-center
                gap-2

                border-none
                bg-transparent
                outline-none

                text-[10px]
                uppercase
                tracking-widest

                text-[#3E3030]

                transition-colors
                duration-300

                hover:text-[#9B7437]

                md:flex
              "
            >
              BR - R$ &gt;
            </button>

            <button
              type="button"
              aria-label="Localização"
              className="
                hidden
                cursor-pointer

                border-none
                bg-transparent
                outline-none

                text-[#3E3030]

                transition-colors
                duration-300

                hover:text-[#9B7437]

                sm:block
              "
            >
              <MapPin
                strokeWidth={
                  1
                }
                size={
                  20
                }
              />
            </button>

            <button
              type="button"
              aria-label="Telefone"
              className="
                hidden
                cursor-pointer

                border-none
                bg-transparent
                outline-none

                text-[#3E3030]

                transition-colors
                duration-300

                hover:text-[#9B7437]

                sm:block
              "
            >
              <Phone
                strokeWidth={
                  1
                }
                size={
                  20
                }
              />
            </button>

            <button
              type="button"
              aria-label="Favoritos"
              className="
                relative

                cursor-pointer

                border-none
                bg-transparent
                outline-none

                text-[#3E3030]

                transition-colors
                duration-300

                hover:text-[#9B7437]
              "
            >
              <Heart
                strokeWidth={
                  1
                }
                size={
                  20
                }
              />

              <span
                className="
                  absolute
                  -right-1
                  -top-1

                  hidden
                  h-4
                  w-4

                  items-center
                  justify-center

                  rounded-full

                  bg-[#580F1A]

                  text-[9px]
                  text-white
                "
              >
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="madiha-main-navigation">
        <DesktopMenu
          open={
            menuOpen
          }
          activeSectionId={
            desktopSectionId
          }
          onClose={
            closeMenu
          }
          onSectionChange={
            setDesktopSectionId
          }
        />

        <MobileMenu
          open={
            menuOpen
          }
          activeSectionId={
            mobileSectionId
          }
          onClose={
            closeMenu
          }
          onSectionChange={
            setMobileSectionId
          }
        />
      </div>
    </>
  );
}