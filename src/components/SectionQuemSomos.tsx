import Image from "next/image";
import {
  FaChalkboardTeacher,
  FaClinicMedical,
  FaGraduationCap,
  FaUserMd,
} from "react-icons/fa";
import draLeila from "../public/assets/draleila2.webp";

const credentials = [
  {
    icon: FaUserMd,
    title: "Cirurgiã-dentista",
    text: "Atuação dedicada à saúde, estética e ao cuidado individualizado.",
  },
  {
    icon: FaGraduationCap,
    title: "Formação",
    text: "Escola Baiana de Medicina e Saúde Pública.",
  },
  {
    icon: FaGraduationCap,
    title: "Especialização",
    text: "Harmonização facial pela Instituição Santé.",
  },
  {
    icon: FaClinicMedical,
    title: "CEO da Clínica Botolips",
    text: "Espaço voltado à estética facial e corporal.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Professora e palestrante",
    text: "Compartilha conhecimento em cursos e eventos profissionais.",
  },
];

export default function SectionQuemSomos() {
  return (
    <section id="sobre" className="deferred-section site-section marble-background-warm">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] border border-dourado-claro/35" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_24px_70px_rgba(0,0,102,0.14)]">
            <Image
              src={draLeila}
              alt="Dra. Leila Fidelis em seu ambiente profissional"
              fill
              quality={80}
              placeholder="blur"
              sizes="(max-width: 1024px) 90vw, 470px"
              className="object-cover object-[54%_22%]"
            />
          </div>
        </div>

        <div>
          <p className="section-eyebrow">Quem somos</p>
          <h2 className="section-title">Dra. Leila Fidelis</h2>
          <p className="mt-3 text-xl font-medium text-azul sm:text-2xl">
            Especialista em harmonização facial
          </p>
          <p className="section-copy mt-6 max-w-2xl">
            Sua trajetória reúne formação, experiência clínica e ensino, com uma abordagem que valoriza técnica, segurança e atendimento humanizado.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {credentials.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className={`rounded-2xl border border-[#000066]/10 bg-white/85 p-5 shadow-[0_12px_35px_rgba(0,0,102,0.05)] backdrop-blur-sm ${
                  index === credentials.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dourado-claro/15 text-dourado-claro">
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-azul-escuro">{title}</h3>
                    <p className="mt-1 leading-6 text-[#66677a]">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
