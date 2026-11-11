'use client';

const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
  '5521993530012';

const whatsappMessage =
  'Olá, Madiha Maison! Gostaria de informações sobre avaliação e compra de joias.';

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

export default function CompraJoiasWhatsApp() {
  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        z-[300]
        md:bottom-7
        md:right-7
      "
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Madiha Maison pelo WhatsApp"
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          border
          border-[#5A1017]/10
          bg-[#F7F3EF]/95
          p-2
          shadow-[0_18px_45px_rgba(35,14,18,0.16)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-[#C7A87A]/45
          hover:shadow-[0_24px_60px_rgba(35,14,18,0.20)]
        "
      >
        {/* TEXTO — DESKTOP */}
        <div
          className="
            hidden
            pl-4
            pr-2
            md:block
          "
        >
          <p
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#A17D4F]
            "
          >
            Atendimento
          </p>

          <p
            className="
              mt-1
              font-serif
              text-[16px]
              leading-none
              text-[#4F1720]
            "
          >
            Fale com a Madiha
          </p>
        </div>

        {/* ÍCONE */}
        <span
          className="
            flex
            h-[52px]
            w-[52px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            shadow-[0_10px_24px_rgba(37,211,102,0.22)]
            transition-transform
            duration-300
            group-hover:scale-[1.04]
          "
        >
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="
              h-[25px]
              w-[25px]
              fill-white
            "
          >
            <path d="M16.04 3C8.86 3 3.03 8.79 3.03 15.93c0 2.28.6 4.51 1.74 6.47L3 29l6.79-1.77a13.05 13.05 0 0 0 6.24 1.59h.01c7.17 0 13-5.8 13-12.93C29.04 8.79 23.21 3 16.04 3Zm0 23.64h-.01a10.86 10.86 0 0 1-5.53-1.51l-.4-.24-4.03 1.05 1.08-3.91-.26-.4a10.7 10.7 0 0 1-1.67-5.7c0-5.94 4.85-10.76 10.82-10.76 5.96 0 10.81 4.82 10.81 10.76 0 5.93-4.85 10.71-10.81 10.71Zm5.93-8.03c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.32-.16-1.37-.5-2.61-1.6-.97-.85-1.62-1.91-1.81-2.23-.19-.32-.02-.5.14-.66.15-.14.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.02-2.43-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7 0 1.59 1.16 3.13 1.32 3.34.16.22 2.28 3.47 5.52 4.87.77.33 1.37.53 1.84.68.77.24 1.47.21 2.03.13.62-.09 1.91-.78 2.18-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z" />
          </svg>
        </span>
      </a>
    </div>
  );
}