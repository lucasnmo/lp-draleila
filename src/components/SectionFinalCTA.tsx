import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "../service/siteLinks";

export default function SectionFinalCTA() {
  return (
    <section id="contato" className="deferred-section marble-background px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12">
      <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-[2rem] bg-azul-escuro px-6 py-14 text-center text-white shadow-[0_25px_70px_rgba(0,0,102,0.2)] sm:px-10 sm:py-16">
        <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full border border-dourado-claro/20" />
        <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-dourado-claro/10 blur-2xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="font-montserrat text-xs font-semibold uppercase tracking-[0.18em] text-[#f0d99e]">Sua avaliação começa com uma conversa</p>
          <h2 className="mt-4 text-3xl font-medium leading-tight sm:text-5xl">
            Pronta para realçar sua beleza com naturalidade?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Agende sua avaliação e descubra o tratamento ideal para você.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 font-montserrat text-sm font-semibold uppercase tracking-[0.07em] text-azul-escuro shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f5e4b8]"
          >
            <FaWhatsapp className="text-xl" aria-hidden="true" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
