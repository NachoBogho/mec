import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — MEC English Coach | Agendá tu sesión gratuita",
  description:
    "Escribile a Gabriela Díaz y agendá tu primera sesión diagnóstica gratuita. Coaching de inglés personalizado para profesionales.",
};

const channels = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+54 11 5657-6577",
    description: "Respuesta en menos de 24 horas",
    href: "https://wa.me/541156576577?text=Hola%20Gabriela%2C%20quiero%20agendar%20mi%20sesi%C3%B3n%20diagn%C3%B3stica%20gratuita.",
    cta: "Escribir por WhatsApp",
    color: "teal",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
    label: "Instagram",
    value: "@masterenglishcoach",
    description: "DM directo o seguí el contenido",
    href: "https://www.instagram.com/masterenglishcoach/",
    cta: "Ver en Instagram",
    color: "navy",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Page hero */}
      <section className="bg-navy pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <p className="font-sans text-[10px] tracking-[0.26em] uppercase text-white/30 mb-6">
            Primer paso
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] text-white leading-[1.08] max-w-2xl">
            Hablemos.
            <br />
            <em className="not-italic text-white/50">
              La primera sesión no tiene costo.
            </em>
          </h1>
          <p className="font-sans text-base text-white/50 mt-5 max-w-xl leading-relaxed">
            Completá el formulario, escribime por WhatsApp o mandame un DM en
            Instagram. Elegí el canal que te resulte más cómodo.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:gap-28">

          {/* ── Form column ── */}
          <div className="flex-1 max-w-2xl">
            <div className="mb-10">
              <p className="editorial-label font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-6">
                Formulario de contacto
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-ink-primary leading-snug">
                Contame un poco sobre vos y tu inglés.
              </h2>
            </div>

            <ContactForm />
          </div>

          {/* ── Sidebar: direct channels ── */}
          <div className="lg:w-72 xl:w-80 flex-shrink-0">

            <div className="mb-10">
              <p className="editorial-label font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-6">
                Contacto directo
              </p>
              <h2 className="font-serif text-2xl text-ink-primary leading-snug">
                O escribime directamente.
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col gap-4 border p-6 transition-all duration-200 ${
                    ch.color === "teal"
                      ? "border-teal/30 hover:border-teal bg-teal/[0.03] hover:bg-teal/[0.06]"
                      : "border-navy/20 hover:border-navy bg-navy/[0.02] hover:bg-navy/[0.05]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 ${
                        ch.color === "teal" ? "text-teal" : "text-navy"
                      }`}
                    >
                      {ch.icon}
                    </span>
                    <div>
                      <p className="font-sans text-[10px] tracking-[0.16em] uppercase text-ink-muted mb-0.5">
                        {ch.label}
                      </p>
                      <p className="font-sans text-sm font-semibold text-ink-primary">
                        {ch.value}
                      </p>
                      <p className="font-sans text-xs text-ink-secondary mt-1">
                        {ch.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`font-sans text-[0.78rem] font-semibold tracking-[0.08em] uppercase ${
                        ch.color === "teal" ? "text-teal" : "text-navy"
                      }`}
                    >
                      {ch.cta}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="group-hover:translate-x-1 transition-transform duration-200 text-ink-muted"
                    >
                      <path
                        d="M3 7h8M8 4.5l2.5 2.5L8 9.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* FAQ nudge */}
            <div className="mt-8 pt-8 border-t border-[rgba(43,43,43,0.07)]">
              <p className="font-sans text-xs text-ink-secondary leading-relaxed">
                ¿Tenés dudas antes de escribir?{" "}
                <a
                  href="/#faq"
                  className="text-navy underline underline-offset-2 hover:text-navy-dark transition-colors"
                >
                  Revisá las preguntas frecuentes.
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="bg-beige border-t border-beige-dark">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 lg:gap-20">
            {[
              {
                label: "Sin compromiso",
                desc: "La primera sesión es 100% gratuita y sin ningún tipo de obligación.",
              },
              {
                label: "Respuesta rápida",
                desc: "Respondemos en menos de 24 horas hábiles.",
              },
              {
                label: "Sesión a medida",
                desc: "Cada diagnóstico es único — adaptado a tu perfil y objetivos.",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 flex-1">
                <div className="flex-shrink-0 w-1.5 h-1.5 bg-teal mt-2" aria-hidden="true" />
                <div>
                  <p className="font-sans text-[0.82rem] font-semibold text-ink-primary tracking-wide uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="font-sans text-xs text-ink-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
