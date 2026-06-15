"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";
import print7 from "../public/assets/carrossel_testimonials/test.webp";
import print1 from "../public/assets/carrossel_testimonials/test1.webp";
import print2 from "../public/assets/carrossel_testimonials/test2.webp";
import print3 from "../public/assets/carrossel_testimonials/test3.webp";
import print4 from "../public/assets/carrossel_testimonials/test4.webp";
import print5 from "../public/assets/carrossel_testimonials/test5.webp";
import print6 from "../public/assets/carrossel_testimonials/test6.webp";
import { WHATSAPP_URL } from "../service/siteLinks";

const testimonials = [print1, print2, print3, print4, print5, print6, print7];

export default function SectionTestimonials() {
  const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

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
    <section id="depoimentos" className="deferred-section site-section marble-background border-y border-[#000066]/5">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Experiências reais</p>
          <h2 className="section-title">Clientes satisfeitos</h2>
          <p className="section-copy mt-5">
            Relatos que refletem a atenção, o acolhimento e o cuidado presentes em cada atendimento.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="horizontal-scroll -mx-4 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-5 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.src}
              type="button"
              onClick={() => setSelectedImage(testimonial)}
              aria-label={`Ampliar depoimento de cliente ${index + 1}`}
              className="block w-[82vw] max-w-[360px] shrink-0 snap-center overflow-hidden rounded-[1.25rem] border border-[#000066]/10 bg-white p-2 shadow-[0_14px_40px_rgba(0,0,102,0.09)] sm:w-[46vw] lg:w-auto lg:max-w-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-[0.95rem] bg-slate-100">
                <Image
                  src={testimonial}
                  alt={`Depoimento de cliente ${index + 1} sobre o atendimento`}
                  fill
                  quality={76}
                  placeholder="blur"
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 46vw, 25vw"
                  className="object-cover object-top"
                />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-azul-escuro px-7 font-montserrat text-sm font-semibold uppercase tracking-[0.07em] text-white shadow-lg shadow-[#000066]/15 transition hover:-translate-y-0.5 hover:bg-azul"
          >
            <FaWhatsapp className="text-xl" aria-hidden="true" />
            Quero agendar minha avaliação
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#05051a]/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Depoimento ampliado"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative h-[min(88vh,820px)] w-full max-w-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Depoimento de cliente ampliado"
              fill
              quality={82}
              sizes="90vw"
              className="rounded-2xl object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-azul-escuro shadow-lg"
              aria-label="Fechar depoimento"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
