const testimonials = [
  {
    quote:
      "Después de años evitando hablar en inglés en reuniones, en ocho semanas con Gabriela lideré mi primera presentación ante el board internacional. No fue perfecta. Fue auténtica. Y eso valió más que cualquier curso.",
    author: "Martín R.",
    role: "Director de Operaciones",
    company: "Industria tecnológica",
    delay: "0ms",
  },
  {
    quote:
      "Gabriela no te corrige el inglés. Te ayuda a confiar en el tuyo. Eso cambia todo. En seis semanas, la ansiedad en reuniones bajó radicalmente y empecé a participar de verdad.",
    author: "Carolina M.",
    role: "Gerente de Marketing",
    company: "Consultoría internacional",
    delay: "150ms",
  },
  {
    quote:
      "Creía que mi problema era la gramática. Resultó que era la confianza. Gabriela lo vio desde la primera sesión y trabajamos exactamente sobre eso. Los resultados fueron concretos y rápidos.",
    author: "Sebastián P.",
    role: "Consultor Senior",
    company: "Firma de servicios financieros",
    delay: "300ms",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

        {/* Section header */}
        <div className="mb-14 lg:mb-16">
          <p className="animate-on-scroll editorial-label font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-8">
            Resultados reales
          </p>
          <h2
            className="animate-on-scroll font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-ink-primary leading-[1.12] max-w-2xl"
            style={{ transitionDelay: "100ms" }}
          >
            Lo que dicen quienes ya dieron el paso.
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="animate-on-scroll relative flex flex-col border border-[rgba(43,43,43,0.09)] p-8 sm:p-9"
              style={{ transitionDelay: t.delay }}
            >
              {/* Decorative opening quote */}
              <span
                className="font-serif text-6xl text-navy/15 leading-none -mt-2 mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="font-serif text-[1.0rem] sm:text-[1.05rem] text-ink-primary leading-[1.65] italic flex-1 mb-8">
                {t.quote}
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-[rgba(43,43,43,0.07)] mb-6" aria-hidden="true" />

              {/* Attribution */}
              <div>
                <p className="font-sans text-[0.8rem] font-semibold tracking-[0.06em] text-ink-primary uppercase">
                  {t.author}
                </p>
                <p className="font-sans text-[0.75rem] text-ink-secondary mt-1">
                  {t.role} &middot; {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Story callout */}
        <div
          className="animate-on-scroll relative bg-beige border-l-4 border-teal p-8 sm:p-10 lg:p-12"
          style={{ transitionDelay: "350ms" }}
        >
          <span
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-teal mb-5 block"
          >
            Caso real
          </span>
          <p className="font-serif text-xl sm:text-2xl lg:text-[1.7rem] text-ink-primary leading-[1.45]">
            Un director que entendía todo pero no hablaba en reuniones.
            <br />
            <span className="text-navy font-semibold">
              En seis semanas, lideró su primera presentación en inglés.
            </span>
          </p>
          <p className="font-sans text-sm text-ink-secondary mt-4 max-w-2xl leading-relaxed">
            No cambió su nivel de inglés. Cambió su relación con el error.
            Aprendió a hablar aunque no supiera cada palabra. A pausar con
            seguridad. A proyectar presencia — no perfección.
          </p>
        </div>

      </div>
    </section>
  );
}
