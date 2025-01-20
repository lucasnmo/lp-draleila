'use client';
import React, { useEffect } from "react";
import "../public/styles/InstagramWidget.css"; // Certifique-se de que o caminho está correto
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'; // Importando os ícones do Instagram, Facebook e WhatsApp
import "../app/globals.css";
import Image from 'next/image'; // Importando o componente Image do Next.js
import bgimage from "../public/assets/marmore.jpg";

const InstagramWidget: React.FC = () => {
  useEffect(() => {
    // Carregar o script do Tagembed de forma assíncrona
    const script = document.createElement("script");
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Limpar o script quando o componente for desmontado.
    };
  }, []);

  return (
    <section className="relative py-16">
      {/* Imagem de fundo otimizada com o Next.js */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={bgimage}
          alt="Imagem de fundo"
          layout="fill" // A imagem ocupará toda a tela
          objectFit="cover" // A imagem se ajustará mantendo a proporção
          objectPosition="center" // A imagem será centralizada
          priority // Carrega a imagem com prioridade
        />
      </div>

      {/* Conteúdo da seção */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-4xl font-montserrat text-azul mb-4 text-shadow">SIGA-NOS</h2>
        
        {/* Links com ícones */}
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.instagram.com/botolips.estetica/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-azul text-4xl hover:text-pink-500 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/people/Botolips/100094007372479/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-azul text-shadow text-4xl hover:text-blue-600 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/5571992297253" // Substitua pelo número correto
            target="_blank"
            rel="noopener noreferrer"
            className="text-azul text-shadow text-4xl hover:text-green-500 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Widget do Instagram */}
      <div className="instagram-widget-container flex justify-center">
        <div
          className="tagembed-widget"
          data-widget-id="2140227"
          data-tags="false"
          view-url="https://widget.tagembed.com/2140227"
        ></div>
      </div>
    </section>
  );
};

export default InstagramWidget;
