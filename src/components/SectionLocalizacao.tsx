import { FaMapMarkerAlt, FaRoute, FaWhatsapp } from "react-icons/fa";
import { MAPS_URL, WHATSAPP_URL } from "../service/siteLinks";

export default function SectionLocalizacao() {
  return (
    <section id="localizacao" className="deferred-section site-section marble-background-warm">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Atendimento em Salvador</p>
          <h2 className="section-title">Nossa localização</h2>
          <p className="section-copy mt-5">
            Um endereço de fácil acesso para receber você com conforto e atenção.
          </p>
          <div className="gold-divider" />
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-[#000066]/10 bg-white shadow-[0_22px_70px_rgba(0,0,102,0.1)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-h-[360px] lg:min-h-[480px]">
            <iframe
              title="Mapa do International Trade Center em Salvador"
              className="h-full min-h-[360px] w-full lg:min-h-[480px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7621983409836!2d-38.44832285441784!3d-12.98705599612346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b0ed26c658b%3A0x9f5b7800c77eb974!2sInternational%20Trade%20Center%20-%20Salvador!5e0!3m2!1spt-BR!2sbr!4v1737401434837!5m2!1spt-BR!2sbr"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center bg-azul-escuro p-8 text-white sm:p-10 lg:p-12">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl text-dourado-claro">
              <FaMapMarkerAlt aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-3xl font-medium">International Trade Center</h3>
            <address className="mt-4 not-italic text-lg leading-8 text-white/80">
              Rua Arthur de Azevêdo Machado, 1459<br />
              Stiep, Salvador - BA
            </address>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 font-montserrat text-xs font-semibold uppercase tracking-[0.08em] text-azul-escuro transition hover:bg-[#f5e4b8]"
              >
                <FaRoute aria-hidden="true" />
                Como chegar
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-5 font-montserrat text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:border-dourado-claro hover:text-dourado-claro"
              >
                <FaWhatsapp aria-hidden="true" />
                Falar conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
