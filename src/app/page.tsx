import Header from "../components/Header";
import { Rodape } from "../components/Rodape";
import SectionCarousel from "../components/SectionCarousel";
import  SectionHero  from "../components/SectionHero";
import SectionQuemSomos from "../components/SectionQuemSomos";
import BackToTopButton from "../service/BackToTopButton";
import SectionLocalizacao from "../components/SectionLocalizacao";
import InstagramWidget from "../components/InstagramWidget";
import SectionTestimonials from "../components/SectionTestimonials";
import "./globals.css";



export default function Home() {
  return (
    <>
    <Header/>
    <BackToTopButton/>
    <SectionHero/>
    <SectionCarousel/>
    <SectionQuemSomos/>
    <SectionTestimonials/>
    <SectionLocalizacao/>
    <Rodape/>
    </>
  );
}
