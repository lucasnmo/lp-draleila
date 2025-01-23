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
import preenchimento from "../public/assets/carrossel/preenchimento.jpg";
import botox from "../public/assets/carrossel/preenchimento2.jpg";
import preechimentoqueixo from "../public/assets/carrossel/harmonizacao1.jpg";
import bigodechines from "../public/assets/carrossel/harmonizacao2.jpg";
import botox2 from "../public/assets/carrossel/harmonizacao3.jpg";
import bigodechines2 from "../public/assets/carrossel/botox.jpg";
import botox3 from "../public/assets/carrossel/botox2.jpg";
import espaco1 from "../public/assets/carrossel/botox3.jpg";
import harmonizacao from "../public/assets/carrossel/harmonizacao.jpg";
import harmonizacao4 from "../public/assets/carrossel/harmonizacao4.jpg";


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

  const items: { src: StaticImageData; alt: string; description: string }[] = [
    { src: preenchimento, alt: "Preenchimento Labial", description: "Preenchimento Labial" },
    { src: preechimentoqueixo, alt: "Botox", description: "Botox" },
    { src: harmonizacao4, alt: "Harmonização Facial", description: "Harmonização Facial" },
    { src: espaco1, alt: "Espaço", description: "Botox" },
    { src: botox, alt: "Botox", description: "Preenchimento Labial" },
    { src: bigodechines, alt: "Bigode Chinês", description: "Botox" },
    { src: harmonizacao, alt: "Espaço", description: "Harmonização Facial" },
    { src: botox3, alt: "Botox", description: "Harmonização Facial" },
    { src: botox2, alt: "Botox", description: "Botox" },
    { src: bigodechines2, alt: "Bigode Chinês", description: "Botox" },
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
            {/* Imagem */}
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
            {/* Descrição */}
            <div className="text-center mt-4">
              <p className="text-azul-escuro font-montserrat font-semibold text-lg">
                {item.description}
              </p>
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
