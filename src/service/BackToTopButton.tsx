"use client";

import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "./siteLinks";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className="fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-zap text-white shadow-[0_12px_35px_rgba(37,211,102,0.4)] transition hover:-translate-y-1 hover:scale-105 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <FaWhatsapp className="text-3xl" aria-hidden="true" />
    </a>
  );
}
