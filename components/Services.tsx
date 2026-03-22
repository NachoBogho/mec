const services = [
  {
    tag: "Individual · A tu ritmo",
    name: "Coaching 1:1 Premium",
    description:
      "Sesiones individuales diseñadas en torno a tus desafíos reales. Trabajamos en los escenarios concretos donde necesitás hablar inglés: reuniones, presentaciones, negociaciones, entrevistas. El ritmo, los temas y los objetivos son tuyos.",
    highlights: [
      "Flexibilidad horaria total",
      "Enfoque en tu contexto profesional",
      "Feedback personalizado en cada sesión",
    ],
    cta: "Quiero saber más",
    accent: "navy",
  },
  {
    tag: "Programa · 4 a 6 semanas",
    name: "Unlock Your English Voice",
    description:
      "Programa intensivo para desbloquear tu fluidez oral en un tiempo definido. Ideal si necesitás un empujón concreto antes de una presentación, entrevista o cambio de rol. Estructura, foco y resultado en pocas semanas.",
    highlights: [
      "Cronograma claro y comprometido",
      "Práctica oral intensiva",
      "Resultado en tiempo definido",
    ],
    cta: "Quiero saber más",
    accent: "teal",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-beige-xlight">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

        {/* Section header */}
        <div className="mb-14 lg:mb-16">
          <p className="animate-on-scroll editorial-label font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-8">
            Servicios
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="animate-on-scroll font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-ink-primary leading-[1.12] max-w-lg"
              style={{ transitionDelay: "100ms" }}
            >
              Elegí cómo empezar.
            </h2>
            <p
              className="animate-on-scroll font-sans text-sm text-ink-secondary max-w-xs sm:text-right"
              style={{ transitionDelay: "180ms" }}
            >
              Ambas opciones incluyen sesión diagnóstica gratuita.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="animate-on-scroll group relative bg-white border border-[rgba(43,43,43,0.09)] hover:border-[rgba(43,43,43,0.18)] hover:shadow-[0_8px_40px_-8px_rgba(0,58,93,0.12)] transition-all duration-300 flex flex-col"
              style={{ transitionDelay: i === 0 ? "0ms" : "150ms" }}
            >
              {/* Top accent line */}
              <div
                className={`h-[3px] w-full ${service.accent === "navy" ? "bg-navy" : "bg-teal"}`}
                aria-hidden="true"
              />

              <div className="p-8 sm:p-10 flex flex-col flex-1 gap-6">
                {/* Tag */}
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink-muted">
                  {service.tag}
                </span>

                {/* Name */}
                <h3 className="font-serif text-2xl sm:text-[1.65rem] text-ink-primary leading-snug">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-ink-secondary leading-[1.75]">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2.5 flex-1">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className={`flex-shrink-0 mt-[0.35rem] w-1.5 h-1.5 ${
                          service.accent === "navy" ? "bg-navy" : "bg-teal"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="font-sans text-[0.85rem] text-ink-secondary leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-6 border-t border-[rgba(43,43,43,0.07)]">
                  <a
                    href="/#contacto"
                    className={`inline-flex items-center gap-2 font-sans text-[0.8rem] font-semibold tracking-[0.1em] uppercase transition-all duration-200 ${
                      service.accent === "navy"
                        ? "text-navy hover:text-navy-dark"
                        : "text-teal hover:text-teal-dark"
                    }`}
                  >
                    {service.cta}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                      <path
                        d="M3 7h8M8 4.5l2.5 2.5L8 9.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
