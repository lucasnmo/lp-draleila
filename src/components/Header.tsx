"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import logo from "../public/assets/logo.svg";
import { WHATSAPP_URL } from "../service/siteLinks";

const navigation = [
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Quem Somos", href: "#sobre" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#000066]/10 bg-white/95 shadow-[0_8px_30px_rgba(0,0,102,0.06)] backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6">
        <a
          href="#inicio"
          aria-label="Ir para o início"
          className="relative z-10 block w-[118px] shrink-0 min-[420px]:w-[138px] sm:w-[185px]"
        >
          <Image
            src={logo}
            alt="Dra. Leila Fidelis, odontologia e harmonização facial"
            className="h-auto w-full"
            priority
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-montserrat text-xs font-semibold uppercase tracking-[0.08em] text-azul-escuro transition-colors hover:text-dourado-claro"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-azul-escuro px-3 font-montserrat text-[0.62rem] font-semibold uppercase tracking-[0.06em] text-white shadow-lg shadow-[#000066]/15 transition hover:-translate-y-0.5 hover:bg-azul min-[420px]:px-4 min-[420px]:text-[0.68rem] sm:gap-2 sm:px-5 sm:text-xs"
          >
            <FaWhatsapp className="text-base" aria-hidden="true" />
            <span className="hidden sm:inline">Entre em contato</span>
            <span className="sm:hidden">Contato</span>
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#000066]/15 text-azul-escuro min-[420px]:h-11 min-[420px]:w-11 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[#000066]/10 bg-white px-4 pb-6 pt-3 shadow-xl lg:hidden"
        >
          <nav className="mx-auto flex max-w-[1200px] flex-col" aria-label="Navegação mobile">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#000066]/10 px-2 py-4 font-montserrat text-sm font-semibold uppercase tracking-[0.08em] text-azul-escuro last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
