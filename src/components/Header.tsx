"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../public/assets/logo.svg";
import "../public/styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const headerLinks = document.querySelectorAll('a[href^="#"]');
    headerLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement)
          .getAttribute("href")
          ?.substring(1);
        const targetElement = targetId
          ? document.getElementById(targetId)
          : null;

        if (targetElement) {
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const targetPosition =
            offsetTop - (window.innerHeight - targetElement.offsetHeight);
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });

    const handleClickOutside = (event: MouseEvent) => {
      const headerElement = document.querySelector(".header");
      if (
        menuOpen &&
        headerElement &&
        !headerElement.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside, {
      passive: true,
    });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Função para fechar o menu quando um item for clicado
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container flex items-center justify-between w-full sm:w-auto gap-4">
        {/* Menu Mobile Button */}
        <button
          className="sm:hidden text-azul-escuro ml-4 font-montserrat uppercase"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Logo */}
        <a
          href="https://www.instagram.com/botolips.estetica/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={logo}
            alt="Company Logo"
            className="header-logo sm:mr-8"
          />
        </a>

        {/* Navegação */}
        <nav
          className={`header-nav ${menuOpen ? "open" : "hidden"} sm:flex font-bold text-azul-escuro hover:text-azul font-montserrat uppercase text-shadow-light`}
        >
          <a href="#carrossel" onClick={handleMenuItemClick}>
            Tratamentos
          </a>
          <a href="#sobre" onClick={handleMenuItemClick}>
            Quem Somos
          </a>
          <a href="#localizacao" onClick={handleMenuItemClick}>
            Localização
          </a>
          <a href="#rodape" onClick={handleMenuItemClick}>
            Contato
          </a>
        </nav>

        {/* Botão de Cadastro */}
        <motion.a
          href="https://wa.me/5511991806637"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex justify-center text-shadow items-center rounded-md font-bold font-montserrat uppercase header-button hover:border-azul text-white  bg-azul-escuro hover:bg-dourado-claro hover:text-azul px-2.5 py-2 sm:ml-8"
        >
          Entre em contato
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
