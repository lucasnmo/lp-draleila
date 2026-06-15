import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../public/assets/logowhite.webp";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
} from "../service/siteLinks";

export function Rodape() {
  return (
    <footer className="footer-marble px-5 py-10 text-white" id="rodape">
      <div className="mx-auto grid max-w-[1200px] gap-9 md:grid-cols-[1.3fr_0.7fr_0.8fr] md:items-center">
        <div>
          <Image
            src={logo}
            alt="Dra. Leila Fidelis, odontologia e harmonização facial"
            quality={92}
            className="h-auto w-full max-w-[390px]"
          />
          <p className="mt-4 max-w-md leading-7 text-white/65">
            Harmonização facial com atendimento personalizado em Salvador.
          </p>
        </div>

        <div>
          <h2 className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-[#f0d99e]">Contato</h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center gap-3 text-white/80 transition hover:text-white"
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href="tel:+5571999541070"
            className="mt-3 flex items-center gap-3 text-white/80 transition hover:text-white"
          >
            <FaPhoneAlt aria-hidden="true" />
            (71) 99954-1070
          </a>
        </div>

        <div>
          <h2 className="font-montserrat text-xs font-semibold uppercase tracking-[0.16em] text-[#f0d99e]">Acompanhe</h2>
          <div className="mt-4 flex gap-3">
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Dra. Leila Fidelis"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-dourado-claro hover:text-dourado-claro"
            >
              <FaInstagram aria-hidden="true" />
            </Link>
            <Link
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Dra. Leila Fidelis"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:border-dourado-claro hover:text-dourado-claro"
            >
              <FaFacebookF aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 max-w-[1200px] border-t border-white/10 pt-6 text-center text-sm text-white/45">
        <p>© {new Date().getFullYear()} Dra. Leila Fidelis. Todos os direitos reservados.</p>
        <p className="mt-2">Desenvolvido por Moreno Digital Studio</p>
      </div>
    </footer>
  );
}
