"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FaExpandAlt, FaTimes } from "react-icons/fa";
import resultOne from "../public/assets/carrossel/harmonizacao2.webp";
import resultTwo from "../public/assets/carrossel/harmonizacao3.webp";
import resultThree from "../public/assets/carrossel/botox.webp";
import resultFour from "../public/assets/carrossel/botox2.webp";
import resultFive from "../public/assets/carrossel/botox3.webp";

type ResultImage = {
  src: StaticImageData;
  alt: string;
};

const results: ResultImage[] = [
  {
    src: resultOne,
    alt: "Comparativo facial antes e depois de tratamento personalizado",
  },
  {
    src: resultTwo,
    alt: "Comparativo facial após tratamento de harmonização",
  },
  {
    src: resultThree,
    alt: "Comparativo facial de paciente após tratamento estético",
  },
  {
    src: resultFour,
    alt: "Comparativo de contorno facial antes e depois do tratamento",
  },
  {
    src: resultFive,
    alt: "Comparativo da região frontal após tratamento facial",
  },
];

export default function SectionCarousel() {
  const [selectedImage, setSelectedImage] = useState<ResultImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section id="resultados" className="deferred-section site-section marble-background border-y border-[#000066]/5">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Resultados e espaço exclusivo</p>
          <h2 className="section-title">Técnica, cuidado e respeito à individualidade</h2>
          <p className="section-copy mt-5">
            Conheça alguns registros de tratamentos realizados com planejamento e acompanhamento profissional.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {results.map((item, index) => {
            const layoutClass =
              index === 0
                ? "lg:col-span-2 lg:row-span-2"
                : "lg:col-span-1";

            return (
              <button
                key={item.src.src}
                type="button"
                onClick={() => setSelectedImage(item)}
                className={`group relative min-h-[280px] overflow-hidden rounded-[1.25rem] bg-slate-100 text-left shadow-[0_14px_40px_rgba(0,0,102,0.1)] ${layoutClass}`}
                aria-label="Ampliar imagem de resultado"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  quality={78}
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.025]"
                />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-azul-escuro opacity-100 shadow-md transition sm:opacity-0 sm:group-hover:opacity-100">
                  <FaExpandAlt aria-hidden="true" />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#05051a]/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem de resultado ampliada"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative h-[min(85vh,760px)] w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              quality={82}
              sizes="90vw"
              className="rounded-2xl object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-azul-escuro shadow-lg"
              aria-label="Fechar imagem"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
