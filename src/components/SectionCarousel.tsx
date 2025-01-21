"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../app/globals.css";

// Imagens
import preenchimento from "../public/assets/carrossel/preenchimento.jpeg";
import botox from "../public/assets/carrossel/botox.jpeg";
import preechimentoqueixo from "../public/assets/carrossel/preechimentoqueixo.jpeg";
import bigodechines from "../public/assets/carrossel/bigodechines.jpg";
import botox2 from "../public/assets/carrossel/botox2.jpeg";
import bigodechines2 from "../public/assets/carrossel/bigodechines2.jpeg";
import botox3 from "../public/assets/carrossel/botox3.jpeg";
import espaco1 from "../public/assets/carrossel/espaco1.jpg";
import espaco2 from "../public/assets/carrossel/espaco2.jpg";
import espaco3 from "../public/assets/carrossel/espaco3.jpg";
import espaco4 from "../public/assets/carrossel/espaco4.jpg";
import espaco5 from "../public/assets/carrossel/espaco5.jpg";
import espaco6 from "../public/assets/carrossel/espaco6.jpg";
import espaco7 from "../public/assets/carrossel/espaco7.jpg";

export function SectionCarousel() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(espaco1); // Definir tipo StaticImageData

  const handleImageClick = (image: StaticImageData) => {
    setSelectedImage(image); // Garantir que o tipo seja StaticImageData
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const settings = {
    centerMode: true,
    centerPadding: "6px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 750,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: true,
        },
      },
    ],
  };

  const items: { src: StaticImageData; alt: string }[] = [
    { src: espaco5, alt: "Espaço" },
    { src: preenchimento, alt: "Preenchimento" },
    { src: espaco1, alt: "Espaço" },
    { src: botox, alt: "Botox" },
    { src: espaco3, alt: "Espaço" },
    { src: preechimentoqueixo, alt: "Preenchimento queixo" },
    { src: espaco4, alt: "Espaço" },
    { src: bigodechines, alt: "Bigode Chinês" },
    { src: espaco6, alt: "Espaço" },
    { src: botox2, alt: "Botox" },
    { src: espaco7, alt: "Espaço" },
    { src: bigodechines2, alt: "Bigode Chinês" },
    { src: botox3, alt: "Botox" },
  ];

  return (
    <section className="relative" id="carrossel">
      <div
        className="w-2/3 h-[2px] mx-auto mb-8"
        style={{
          background:
            "linear-gradient(to right, transparent, #FFEBB5, #FFEBB5, #FFEBB5, #FFEBB5, #FFEBB5, transparent)",
        }}
      ></div>
      <div ref={ref} className="py-8 px-4 md:px-8 relative overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <h1 className="text-center text-azul-escuro text-4xl mb-10 font-montserrat uppercase text-shadow-light">
            RESULTADOS E ESPAÇO EXCLUSIVO
          </h1>
          <div className="mx-auto w-full sm:w-[90%] relative">
            <Slider {...settings}>
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative carousel-item mb-12"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="relative mx-4 h-[350px] w-[350px] md:h-[350px] md:w-[350px] sm:h-[350px] sm:w-[350px] rounded-lg overflow-hidden border border-[#000066] shadow-xl">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg cursor-pointer"
                      onClick={() => handleImageClick(item.src)}
                    />
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClick}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Imagem Expansiva"
              width={800}
              height={1066}
              className="rounded-lg shadow-2xl max-w-[30vw] max-h-[85vh]"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 p-4 text-white text-3xl font-bold"
            >
              X
            </button>
          </div>
        </div>
      )}

      <div
        className="w-2/3 h-[1px] mx-auto mb-0"
        style={{
          background:
            "linear-gradient(to right, transparent, #FFEBB5, #FFEBB5, #FFEBB5, #FFEBB5, #FFEBB5, transparent)",
        }}
      ></div>
    </section>
  );
}

export default SectionCarousel;
