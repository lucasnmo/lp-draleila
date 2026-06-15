import Header from "../components/Header";
import { Rodape } from "../components/Rodape";
import SectionCarousel from "../components/SectionCarousel";
import SectionFinalCTA from "../components/SectionFinalCTA";
import SectionHero from "../components/SectionHero";
import SectionLocalizacao from "../components/SectionLocalizacao";
import SectionQuemSomos from "../components/SectionQuemSomos";
import SectionTestimonials from "../components/SectionTestimonials";
import SectionTratamentos from "../components/SectionTratamentos";
import WhatsAppButton from "../service/BackToTopButton";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Dra. Leila Fidelis",
  description:
    "Tratamentos de harmonização facial com naturalidade, segurança e atendimento personalizado em Salvador.",
  telephone: "+55 71 99954-1070",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Arthur de Azevêdo Machado, 1459 - International Trade Center",
    addressLocality: "Salvador",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  areaServed: "Salvador, BA",
  sameAs: [
    "https://www.instagram.com/dra.leilafidelis/",
    "https://www.facebook.com/dra.leilafidelis",
  ],
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionTratamentos />
        <SectionCarousel />
        <SectionQuemSomos />
        <SectionTestimonials />
        <SectionLocalizacao />
        <SectionFinalCTA />
      </main>
      <Rodape />
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
