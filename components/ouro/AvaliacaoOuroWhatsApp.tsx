'use client';

export default function AvaliacaoOuroWhatsApp() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    '5521993530012';

  const message =
    'Olá, gostaria de falar com um especialista sobre avaliação de ouro na Madiha Maison, no Vogue Square.';

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com um especialista da Madiha Maison pelo WhatsApp"
      className="
        group
        fixed
        bottom-5
        right-5
        z-[300]
        flex
        items-center
        md:bottom-7
        md:right-7
      "
    >
      {/* BALÃO — DESKTOP */}
      <div
        className="
          pointer-events-none
          mr-2
          hidden
          items-center
          gap-2
          rounded-full
          border
          border-[#765525]/10
          bg-[#FAF6EF]/95
          px-3
          py-2
          shadow-[0_10px_28px_rgba(67,42,8,0.12)]
          backdrop-blur-xl
          transition-all
          duration-300
          group-hover:-translate-x-1
          group-hover:shadow-[0_14px_32px_rgba(67,42,8,0.16)]
          md:flex
        "
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className="
              absolute
              inline-flex
              h-full
              w-full
              animate-ping
              rounded-full
              bg-[#25D366]
              opacity-50
            "
          />

          <span
            className="
              relative
              inline-flex
              h-2
              w-2
              rounded-full
              bg-[#25D366]
            "
          />
        </span>

        <div className="whitespace-nowrap text-left">
          <p
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-[#765525]
            "
          >
            Atendente online
          </p>

          <p
            className="
              mt-[1px]
              text-[10px]
              font-medium
              text-[#5A431F]
            "
          >
            Posso te ajudar?
          </p>
        </div>
      </div>

      {/* BOTÃO WHATSAPP */}
      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_16px_40px_rgba(0,0,0,0.22)]
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.28)]
        "
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-7 w-7 fill-current"
        >
          <path d="M12.04 2C6.52 2 2.05 6.46 2.05 11.96c0 1.75.46 3.46 1.34 4.96L2 22l5.2-1.36a10 10 0 0 0 4.83 1.23h.01c5.51 0 9.99-4.46 9.99-9.96C22.03 6.46 17.55 2 12.04 2Zm0 18.05h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.81.82-3-.2-.31a8.15 8.15 0 1 1 6.96 3.82Zm4.48-6.1c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.16-.28.18-.52.06-.25-.12-1.03-.38-1.96-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.24.25-.4.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03 0 1.19.87 2.35.99 2.51.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
        </svg>
      </div>
    </a>
  );
}