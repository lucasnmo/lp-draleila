"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SectionLocalizacao = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Garante que o observador dispare apenas uma vez
    threshold: 0.3,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true); // Marca que a animação foi disparada
    }
  }, [inView, hasAnimated, controls]);

  return (
    <section
      ref={ref}
      id="localizacao"
      className="relative text-white py-0 pb-0 px-6 overflow-hidden"
    >
      <div
        className="w-2/3 h-[2px] mx-auto mb-16"
        style={{
          background:
            "linear-gradient(to right, transparent, #FFEBB5, #FFEBB5, #FFEBB5, #FFEBB5, #FFEBB5, transparent)",
        }}
      ></div>

      {/* Container com o card e o mapa */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-col lg:flex-row items-center justify-center gap-5 max-w-screen-xl mx-auto"
      >
        {/* Mapa do Google Maps */}
        <div className="w-full max-w-md">
          <iframe
            className="w-full h-80 rounded-xl shadow-2xl "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7621983409836!2d-38.44832285441784!3d-12.98705599612346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b0ed26c658b%3A0x9f5b7800c77eb974!2sInternational%20Trade%20Center%20-%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1737401434837!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Card "Nossa Localização" */}
        <div className="bg-opacity-40 rounded-3xl p-6 shadow-xl w-full max-w-md">
          <h2 className="text-3xl md:text-4xl uppercase font-montserrat text-azul-escuro text-center mb-4">
            Nossa Localização
          </h2>
          <p className="text-xl md:text-2xl text-azul-escuro text-left font-thin">
            <strong>Endereço: </strong>Rua Arthur de Azevêdo Machado, 1459 - Stiep, Salvador - BA<br />
            <strong>Edifício: </strong>International Trade Center<br />
          </p>
        </div>
      </motion.div>
      <div
        className="w-2/3 h-[2px] mx-auto mt-20"
        style={{
          background:
            "linear-gradient(to right, transparent, #FFEBB5, #FFEBB5, #FFEBB5, #FFEBB5, #FFEBB5, transparent)",
        }}
      ></div>
    </section>
  );
};

export default SectionLocalizacao;
