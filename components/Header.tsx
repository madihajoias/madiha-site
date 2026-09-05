'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Heart,
  MapPin,
  Menu,
  Phone,
  Search,
} from 'lucide-react';

import Butterfly from './Butterfly';

export default function Header() {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  const logoRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    let ticking = false;

    const updateHeader = () => {
      const nextScrolled =
        window.scrollY > 32;

      setIsScrolled((current) => {
        if (current === nextScrolled) {
          return current;
        }

        return nextScrolled;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(
        updateHeader
      );

      ticking = true;
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

  return (
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
          isScrolled
            ? `
              border-[#6D4C42]/10
              bg-[#F7F3EF]/92
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
        {/* ===================================================
            LADO ESQUERDO
        ==================================================== */}

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
            aria-label="Abrir menu"
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
              strokeWidth={1}
              size={24}
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
              strokeWidth={1}
              size={18}
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

        {/* ===================================================
            CENTRO — LOGO + BORBOLETA
        ==================================================== */}

        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2

            text-center
          "
        >
          <div
            ref={logoRef}
            className="
              relative
              inline-block
              cursor-pointer
            "
          >
            <h1
              className={`
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
                  isScrolled
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
            </h1>

            <Butterfly />
          </div>
        </div>

        {/* ===================================================
            LADO DIREITO
        ==================================================== */}

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
              strokeWidth={1}
              size={20}
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
              strokeWidth={1}
              size={20}
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
              strokeWidth={1}
              size={20}
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
  );
}