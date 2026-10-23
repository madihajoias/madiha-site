'use client';

import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
  '5521993530012';

export default function CompraOuroWhatsApp() {
  const message =
    'Olá, Madiha Maison! Gostaria de informações sobre avaliação e compra de ouro no Vogue Square.';

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Madiha Maison pelo WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-[300]

        flex
        h-14
        w-14
        items-center
        justify-center

        rounded-full

        border
        border-white/25

        bg-[#9A7139]
        text-white

        shadow-[0_16px_40px_rgba(79,49,11,0.28)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-[#A97C40]

        md:bottom-7
        md:right-7
        md:h-16
        md:w-16
      "
    >
      <MessageCircle
        size={24}
        strokeWidth={1.4}
      />
    </a>
  );
}