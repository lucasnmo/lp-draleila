'use client';

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar o botão após o scroll
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função que redireciona para o WhatsApp
  const redirectToWhatsApp = () => {
    const phoneNumber = "5571999541070"; // Coloque seu número de WhatsApp aqui
    const message = "Olá, estou interessado em seus serviços!"; // Mensagem pré-definida
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={redirectToWhatsApp}
            className="text-white p-3 rounded-full bg-zap shadow-lg hover:bg-azul-marinho2 transition-all duration-300"
          >
            <FaWhatsapp size={20} />
          </button>
        </div>
      )}
    </>
  );
}
