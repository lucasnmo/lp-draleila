"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import draleila from "../public/assets/draleila2.jpg";
import "animate.css";
import "../app/globals.css";

const SectionQuemSomos = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Dispara apenas uma vez
    threshold: 0.3,
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true); // Define que a animação já foi disparada
    }
  }, [inView, hasAnimated, controls]);

  return (
    <section
      ref={ref}
      id="sobre"
      className="relative text-white flex flex-col md:flex-row items-center justify-center overflow-hidden py-14 gap-4 bg-white"
    >
      {/* Linha no topo da seção */}
      <div
        className="absolute top-0 w-2/3 h-[1px] mx-auto mb-12"
        style={{
          background:
            "linear-gradient(to right, transparent, #FFEBB5, #FFEBB5, transparent)",
        }}
      ></div>

      <motion.div
        className="flex justify-center items-center w-[300px] md:w-[425px] shadow-2xl border-2 border-azul-escuro overflow-hidden rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="relative w-[500px] h-[400px] md:w-[65vh] md:h-[80vh] ">
          <Image
            src={draleila}
            alt="Dra Leila Fidelis"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 2 }}
        className="bg-opacity-60 bg-cinza-claro rounded-3xl p-6 w-full md:w-1/3 max-w-3xl text-left shadow-2xl"
      >
        <div className="text-shadow-light ">
          <h1 className="font-bold text-3xl md:text-5xl mb-4 md:mb-2 text-azul-escuro">
            Dra. Leila Fidelis
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-azul-escuro">
            Especialista em Harmonização Facial
          </h2>
          <motion.p
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            transition={{ duration: 2, delay: 0.8 }}
            className=" text-azul md:text-xl font-thin"
          >
            Cirurgiã dentista formada pela{" "}
            <span className="font-bold">
              Escola Baiana de Medicina e Saúde Pública
            </span>
            . Especialista na área de Estética Dentária e Harmonização
            Orofacial. CRO 18788
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionQuemSomos;
