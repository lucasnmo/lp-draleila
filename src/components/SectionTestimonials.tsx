'use client';
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image, { StaticImageData } from "next/image";  // Importando StaticImageData
import print1 from "../public/assets/carrossel_testimonials/test1.jpg";
import print2 from "../public/assets/carrossel_testimonials/test2.jpg";
import print3 from "../public/assets/carrossel_testimonials/test3.jpg";
import print4 from "../public/assets/carrossel_testimonials/test4.jpg";
import print5 from "../public/assets/carrossel_testimonials/test5.jpg";
import print6 from "../public/assets/carrossel_testimonials/test6.jpg";
import print7 from "../public/assets/carrossel_testimonials/test.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgimage from "../public/assets/marmore2.webp";

// Definindo as imagens do carrossel
const prints = [print1, print2, print3, print4, print5, print6, print7];

const TestimonialsCarousel = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Ajustando o tipo de selectedImage para aceitar apenas string ou StaticImport
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(prints[0]);  // Inicializa com uma imagem válida

  const handleImageClick = (image: string | StaticImageData) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(prints[0]); // Voltar para a primeira imagem ao fechar
  };

  // Função para fechar o modal ao clicar fora da imagem
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <section ref={ref} className="text-white flex justify-center relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full min-h-[100vh] bg-cover bg-center z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(256, 256, 256, 0.5), rgba(256, 256, 256, 0.5)), url(${bgimage.src})`,
          objectFit: "cover",
          objectPosition: "center",
        }}
      ></div>

      <div className="w-[80%] max-w-4xl mx-auto px-4 relative z-20 py-0">
        <div
          className="w-2/3 h-[2px] mx-auto mb-12"
          style={{
            background:
              "linear-gradient(to right, transparent, #FFEBB5, #FFEBB5, transparent)",
          }}
        ></div>
        <h2 className="text-4xl text-shadow-light text-center text-azul-escuro uppercase font-montserrat mb-8">
          CLIENTES SATISFEITOS!
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4200 }}
          loop
          speed={1000}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper mb-12"
        >
          {prints.map((print, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.2 }}
              >
                <Image
                  src={print}
                  alt={`Print ${index + 1}`}
                  width={350}
                  height={460}
                  className="rounded-lg shadow-2xl border border-azul-escuro cursor-pointer"
                  onClick={() => handleImageClick(print)}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-8">
          <motion.a
            ref={buttonRef}
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex justify-center text-shadow-light items-center shadow-lg bg-azul-escuro text-white py-3 px-6 border-2 border-azul-escuro rounded-lg text-xl font-montserrat font-semibold transition-colors mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: buttonInView ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            AGENDE AGORA
          </motion.a>
        </div>
      </div>

      {/* Modal de Imagem Expandida */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClick} // Fechar o modal ao clicar fora
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Imagem Expansiva"
              width={800}
              height={1066}
              className="rounded-lg shadow-2xl max-w-[90vw] sm:max-w-[60vw] lg:max-w-[30vw] max-h-[85vh]" // Ajustando o tamanho da imagem com responsividade
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 p-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsCarousel;
