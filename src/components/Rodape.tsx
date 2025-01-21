"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export function Rodape() {
  return (
    <footer className="bg-azul-escuro text-white py-6 font-helvetica" id="rodape">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título e chamada para ação */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">CONTATO</h3>
          <p className="text-lg">Entre em contato e agende sua avaliação agora</p>
        </div>

        {/* Informações de contato */}
        <div className="text-center mb-4">
          
          <p className="flex justify-center items-center gap-2">
            <FaPhone /> <span className="font-semibold">Telefone:</span> +55 (71) 99954-1070
          </p>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center space-x-6">
          <Link
            href="https://www.facebook.com/people/Botolips/100094007372479/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/botolips.estetica/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
