import Image from "next/image";
import { FaCheck, FaWhatsapp } from "react-icons/fa";
import draLeila from "../public/assets/quemsomos.webp";
import { WHATSAPP_URL } from "../service/siteLinks";

const highlights = ["Atendimento personalizado", "Estética com naturalidade"];

export default function SectionHero() {
  return (
    <section
      id="inicio"
      className="marble-background relative overflow-hidden pb-16 pt-[112px] sm:pb-20 sm:pt-[124px] lg:min-h-[700px] lg:pb-20"
    >
      <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-dourado-claro/10 blur-3xl" />
      <div className="section-shell relative grid min-w-0 grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14">
        <div className="hero-reveal min-w-0 max-w-2xl">
          <p className="section-eyebrow">Harmonização facial em Salvador</p>
          <h1 className="max-w-full break-words text-[2.35rem] font-medium leading-[1.04] tracking-[-0.045em] text-azul-escuro min-[420px]:text-[2.65rem] sm:text-6xl lg:text-[4.35rem]">
            Especialista em Harmonização Facial
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#3f4054] sm:text-2xl">
            Realce sua beleza com naturalidade, técnica e segurança.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-[#66677a] sm:text-lg">
            Uma avaliação cuidadosa para compreender suas necessidades e indicar um plano de tratamento personalizado.
          </p>

          <div className="mt-7 grid min-w-0 gap-3 min-[520px]:flex min-[520px]:flex-wrap min-[520px]:gap-x-6">
            {highlights.map((highlight) => (
              <span key={highlight} className="flex min-w-0 items-center gap-2 text-sm font-medium text-azul-escuro">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-dourado-claro/20 text-dourado-claro">
                  <FaCheck className="text-[0.65rem]" aria-hidden="true" />
                </span>
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-azul-escuro px-5 text-center font-montserrat text-xs font-semibold uppercase tracking-[0.07em] text-white shadow-xl shadow-[#000066]/20 transition hover:-translate-y-0.5 hover:bg-azul sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.08em]"
            >
              <FaWhatsapp className="text-xl" aria-hidden="true" />
              Agende sua avaliação
            </a>
            <a
              href="#tratamentos"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-[#000066]/20 px-5 text-center font-montserrat text-xs font-semibold uppercase tracking-[0.07em] text-azul-escuro transition hover:border-dourado-claro hover:text-dourado-claro sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.08em]"
            >
              Conheça os tratamentos
            </a>
          </div>
        </div>

        <div className="hero-image-reveal relative mx-auto min-w-0 w-full max-w-[330px] sm:max-w-[360px]">
          <div className="absolute -inset-4 rounded-[2.25rem] border border-dourado-claro/30 sm:-inset-5" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_rgba(0,0,102,0.18)]">
            <Image
              src={draLeila}
              alt="Dra. Leila Fidelis, especialista em harmonização facial em Salvador"
              fill
              priority
              quality={92}
              placeholder="blur"
              sizes="(max-width: 640px) 330px, 360px"
              className="object-cover object-[50%_20%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000044]/85 via-[#000044]/25 to-transparent px-6 pb-6 pt-24 text-white sm:px-8 sm:pb-8">
              <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-[#f2d99e]">Dra. Leila Fidelis</p>
              <p className="mt-1 text-lg font-medium">Cirurgiã-dentista e especialista em harmonização facial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
