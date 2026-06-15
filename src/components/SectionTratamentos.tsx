import Image, { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa";
import botoxImage from "../public/assets/carrossel/botox4.webp";
import bioestimuladorImage from "../public/assets/carrossel/harmonizacao4.webp";
import harmonizacaoImage from "../public/assets/carrossel/harmonizacao.webp";
import olheirasImage from "../public/assets/carrossel/harmonizacao1.webp";
import bigodeChinesImage from "../public/assets/carrossel/preenchimento2.webp";
import preenchimentoLabialImage from "../public/assets/carrossel/preenchimento.webp";
import { WHATSAPP_URL } from "../service/siteLinks";

type Treatment = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const treatments: Treatment[] = [
  {
    title: "Harmonização Facial",
    description:
      "Planejamento facial personalizado para equilibrar proporções e valorizar características individuais.",
    image: harmonizacaoImage,
    alt: "Comparativo de perfil em tratamento de harmonização facial",
  },
  {
    title: "Botox",
    description:
      "Tratamento voltado à suavização de linhas de expressão, com avaliação individual de cada região.",
    image: botoxImage,
    alt: "Comparativo da região frontal após tratamento com botox",
  },
  {
    title: "Preenchimento Labial",
    description:
      "Técnica que considera contorno, proporção e características naturais dos lábios.",
    image: preenchimentoLabialImage,
    alt: "Comparativo de lábios em tratamento de preenchimento labial",
  },
  {
    title: "Preenchimento de Bigode Chinês",
    description:
      "Abordagem personalizada para suavizar os sulcos nasolabiais com equilíbrio facial.",
    image: bigodeChinesImage,
    alt: "Tratamento facial na região do sulco nasolabial",
  },
  {
    title: "Preenchimento de Olheiras",
    description:
      "Avaliação cuidadosa da região abaixo dos olhos para definir a indicação mais adequada.",
    image: olheirasImage,
    alt: "Comparativo facial em tratamento da região das olheiras",
  },
  {
    title: "Bioestimulador de Colágeno",
    description:
      "Procedimento voltado ao estímulo de colágeno e à melhora gradual da qualidade da pele.",
    image: bioestimuladorImage,
    alt: "Comparativo facial em tratamento com bioestimulador de colágeno",
  },
];

export default function SectionTratamentos() {
  return (
    <section id="tratamentos" className="deferred-section site-section marble-background-warm">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Tratamentos</p>
          <h2 className="section-title">Cuidado personalizado em cada detalhe</h2>
          <p className="section-copy mt-5">
            Cada indicação parte de uma avaliação individual, respeitando sua anatomia, seus objetivos e a naturalidade do resultado.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <article
              key={treatment.title}
              className="group overflow-hidden rounded-[1.5rem] border border-[#000066]/10 bg-white shadow-[0_16px_50px_rgba(0,0,102,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,102,0.13)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={treatment.image}
                  alt={treatment.alt}
                  fill
                  quality={78}
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex min-h-[230px] flex-col p-6">
                <h3 className="text-2xl font-medium leading-tight text-azul-escuro">
                  {treatment.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-[#66677a]">
                  {treatment.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Agendar avaliação para ${treatment.title}`}
                  className="mt-5 inline-flex items-center gap-2 font-montserrat text-xs font-semibold uppercase tracking-[0.1em] text-azul-escuro transition-colors hover:text-dourado-claro"
                >
                  Agendar avaliação
                  <FaArrowRight className="text-[0.65rem]" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
