const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Sesión inicial para entender tu nivel real, tus bloqueos específicos y tus objetivos profesionales. Partimos de donde estás, no de un esquema genérico.",
    delay: "0ms",
  },
  {
    number: "02",
    title: "Plan personalizado",
    description:
      "Diseño un camino adaptado a tu contexto: tu industria, tu rol, los desafíos reales que enfrentás en inglés. Nada de plantillas. Todo a medida.",
    delay: "150ms",
  },
  {
    number: "03",
    title: "Práctica con acompañamiento",
    description:
      "Sesiones 1:1 enfocadas en la comunicación, no en el idioma. Simulaciones, feedback real, ejercicios que reproducen tus situaciones concretas.",
    delay: "300ms",
  },
];

export function Method() {
  return (
    <section id="metodo" className="bg-navy overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

        {/* Section header */}
        <div className="mb-16 lg:mb-20 max-w-lg">
          <p className="animate-on-scroll editorial-label font-sans text-[10px] tracking-[0.22em] uppercase text-white/35 mb-8">
            ¿Cómo trabajo?
          </p>
          <h2
            className="animate-on-scroll font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-white leading-[1.12]"
            style={{ transitionDelay: "100ms" }}
          >
            Un proceso hecho para vos, no un curso para todos.
          </h2>
        </div>

        {/* Steps — editorial layout with ghost numerals */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 xl:gap-12">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="animate-on-scroll relative flex flex-col pt-10 pb-12 lg:pt-0 border-t border-white/[0.1] lg:border-t-0 lg:border-l lg:pl-8 first:border-t-0 first:pt-0 lg:first:border-l-0 lg:first:pl-0"
              style={{ transitionDelay: step.delay }}
            >
              {/* Ghost numeral — editorial signature */}
              <span
                className="absolute top-4 lg:top-0 right-0 font-serif font-bold text-[8rem] sm:text-[10rem] leading-none text-white select-none pointer-events-none"
                style={{ opacity: 0.04 }}
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Step number — visible */}
              <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-white/30 mb-6 relative z-10">
                {step.number}
              </span>

              {/* Content */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl sm:text-[1.6rem] text-white mb-4 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-white/55 leading-[1.75] flex-1">
                  {step.description}
                </p>
              </div>

              {/* Step connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[1.65rem] -right-4 xl:-right-6 w-8 xl:w-12 h-px bg-white/[0.12] z-10"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div
          className="animate-on-scroll mt-16 pt-10 border-t border-white/[0.1] max-w-2xl"
          style={{ transitionDelay: "400ms" }}
        >
          <p className="font-sans text-sm text-white/40 leading-relaxed">
            <span className="text-white/60 font-medium">No es un curso.</span>{" "}
            Es un proceso de coaching donde vos sos protagonista. La gramática
            no es el centro — tu fluidez, tu voz y tu confianza sí lo son.
          </p>
        </div>

      </div>
    </section>
  );
}
