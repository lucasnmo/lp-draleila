"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../public/assets/logo.svg";
import "../app/globals.css";
import bgimage from "../public/assets/marmore2.webp";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useInView } from "react-intersection-observer"; // Importando hook para verificação de visibilidade

const SectionHero = () => {
  const [scrollY, setScrollY] = useState(0);

  // Atualiza o estado de scroll para o efeito parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Configura o useInView para animar os elementos quando entrarem em view
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true, // A animação será disparada apenas uma vez
    threshold: 0.3, // O elemento precisa estar 30% visível na tela
  });

  const { ref: subtitleRef, inView: subtitleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const MyIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="yellow"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    );
  };

  return (
    <section className="relative h-screen flex justify-center items-center text-center p-6 overflow-hidden mt-12 tracking-wider">
      {/* Elemento de fundo com posição absoluta */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(256, 256, 256, 0.5), rgba(256, 256, 256, 0.5)), url(${bgimage.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: `translateY(${scrollY * 0.8}px)`, // Movimento simulando o parallax
          willChange: "transform",
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-30 w-full max-w-5xl mx-auto text-azul-escuro text-shadow">
        {/* Logo da Marca */}
        <div
          ref={titleRef}
          className="justify-center border-gray-300 inline-flex"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: titleInView ? 1 : 0,
              y: titleInView ? 0 : -50,
            }}
            transition={{ duration: 1 }}
          >
            <Image
              src={logo}
              alt="Logo da Marca"
              width={450}
              height={225}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Subtítulo 1 */}
        <motion.h2
          ref={subtitleRef}
          className="text-xl md:text-2xl font-thin mb-4 flex items-center justify-center mt-12 gap-4 text-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: subtitleInView ? 1 : 0,
            y: subtitleInView ? 0 : 50,
          }}
          transition={{ duration: 1 }}
        >
          <span>Realço sua beleza com naturalidade e segurança</span>
        </motion.h2>

        {/* Título principal */}
        <motion.h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl mb-6 font-thin text-shadow"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: titleInView ? 1 : 0,
            y: titleInView ? 0 : 50,
          }}
          transition={{ duration: 1 }}
        >
          Especialista Harmonização Facial e Corporal
        </motion.h1>

        {/* Subtítulo 2 */}
        <motion.h3
          ref={subtitleRef}
          className="text-xl md:text-2xl mb-6 font-thin"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: subtitleInView ? 1 : 0,
            y: subtitleInView ? 0 : 50,
          }}
          transition={{ duration: 1 }}
        >
          Agende sua consulta e revele sua melhor versão.
        </motion.h3>

        {/* Botões */}
        <div className="flex flex-col justify-center items-center gap-4">
          <motion.a
            ref={buttonRef}
            href="https://api.whatsapp.com/send?phone=5571999541070&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20tratamentos!!%20"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center text-shadow-light items-center bg-azul-escuro text-white py-3 px-6 rounded-md hover:bg-azul text-lg font-montserrat font-bold transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: buttonInView ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            AGENDE AGORA
          </motion.a>

          {/* Ícones de redes sociais centralizados */}
          <div className="flex justify-center items-center gap-6 ">
            {/* Ícone do Instagram */}
            <a
              href="https://www.instagram.com/dra.leilafidelis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            {/* Ícone do Facebook */}
            <a
              href="https://www.facebook.com/dra.leilafidelis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
