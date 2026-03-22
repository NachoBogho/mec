const pillars = [
  {
    number: "01",
    title: "Enseñanza comunicativa",
    description:
      "Un enfoque centrado en el uso real del idioma en contextos profesionales. No gramática por la gramática, sino comunicación con propósito.",
    delay: "0ms",
  },
  {
    number: "02",
    title: "Coaching ontológico",
    description:
      "Prácticas que desarrollan la autoconciencia y la agencia del profesional. El coach acompaña el proceso de transformación, no solo la corrección lingüística.",
    delay: "150ms",
  },
  {
    number: "03",
    title: "Neurociencias aplicadas",
    description:
      "Principios del aprendizaje adulto, el compromiso emocional y la flexibilidad cognitiva para desbloquear la comunicación y sostener el cambio.",
    delay: "300ms",
  },
];

export function MECFramework() {
  return (
    <section id="mec-framework" className="bg-navy-dark overflow-hidden relative">

      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

        {/* Coming soon badge */}
        <div className="animate-on-scroll mb-10 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 border border-teal/40 bg-teal/[0.08] text-teal font-sans text-[10px] font-semibold tracking-[0.22em] uppercase px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" aria-hidden="true" />
            Próximamente
          </span>
        </div>

        {/* Section header */}
        <div className="mb-6 max-w-2xl">
          <p className="animate-on-scroll font-sans text-[10px] tracking-[0.22em] uppercase text-white/35 mb-8">
            Una nueva forma de enseñar inglés
          </p>
          <h2
            className="animate-on-scroll font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-white leading-[1.12]"
            style={{ transitionDelay: "100ms" }}
          >
            MEC Framework:{" "}
            <em className="not-italic text-white/50">
              Master English Coach
            </em>
          </h2>
        </div>

        {/* Intro paragraph */}
        <div
          className="animate-on-scroll mb-16 lg:mb-20 max-w-2xl"
          style={{ transitionDelay: "180ms" }}
        >
          <p className="font-sans text-base sm:text-[1.05rem] text-white/55 leading-[1.8]">
            Una metodología desarrollada por{" "}
            <span className="text-white/75 font-medium">Gabriela Díaz</span> a
            partir de más de 26 años de experiencia en la enseñanza del inglés,
            combinada con formación en coaching y procesos de aprendizaje adulto.
            MEC redefine el rol del docente: de instructor de idiomas a{" "}
            <span className="text-white/75 font-medium">
              coach de comunicación profesional
            </span>
            .
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 xl:gap-12 mb-16 lg:mb-20">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className="animate-on-scroll relative flex flex-col pt-10 pb-12 lg:pt-0 border-t border-white/[0.1] lg:border-t-0 lg:border-l lg:pl-8 first:border-t-0 first:pt-0 lg:first:border-l-0 lg:first:pl-0"
              style={{ transitionDelay: pillar.delay }}
            >
              {/* Ghost numeral */}
              <span
                className="absolute top-4 lg:top-0 right-0 font-serif font-bold text-[8rem] sm:text-[10rem] leading-none text-white select-none pointer-events-none"
                style={{ opacity: 0.03 }}
                aria-hidden="true"
              >
                {pillar.number}
              </span>

              <span className="font-sans text-[11px] tracking-[0.24em] uppercase text-white/30 mb-6 relative z-10">
                {pillar.number}
              </span>

              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl sm:text-[1.6rem] text-white mb-4 leading-snug">
                  {pillar.title}
                </h3>
                <p className="font-sans text-sm text-white/55 leading-[1.75] flex-1">
                  {pillar.description}
                </p>
              </div>

              {i < pillars.length - 1 && (
                <div
                  className="hidden lg:block absolute top-[1.65rem] -right-4 xl:-right-6 w-8 xl:w-12 h-px bg-white/[0.12] z-10"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* What "Master" means */}
        <div
          className="animate-on-scroll border-t border-white/[0.1] pt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
          style={{ transitionDelay: "400ms" }}
        >
          <div>
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-5">
              ¿Qué significa Master?
            </p>
            <p className="font-sans text-sm text-white/50 leading-[1.8]">
              El término{" "}
              <span className="text-white/70 font-medium italic">Master</span>{" "}
              tiene una doble lectura: la expertise del coach en comunicación
              profesional global, y el proceso continuo del profesional para
              dominar su propia voz en entornos internacionales. Comunicación
              auténtica, con propósito y confianza.
            </p>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/30 mb-5">
              ¿Para quién es MEC?
            </p>
            <p className="font-sans text-sm text-white/50 leading-[1.8]">
              Para profesionales adultos que necesitan comunicarse con claridad
              y seguridad en inglés dentro de contextos corporativos y globales.
              No para aprender el idioma desde cero, sino para desbloquearse y
              hablar con la presencia que ya merecen tener.
            </p>
          </div>
        </div>

        {/* Coming soon note */}
        <div
          className="animate-on-scroll mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex-1 max-w-lg">
            <p className="font-sans text-[0.8rem] text-white/30 leading-relaxed">
              El MEC Framework se está presentando en congresos y espacios
              académicos internacionales. Próximamente disponible como
              formación para docentes y coaches.
            </p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-white/20 hover:border-teal/50 text-white/50 hover:text-teal font-sans text-[0.75rem] font-medium tracking-[0.1em] uppercase px-6 py-3 transition-all duration-200"
          >
            Avisame cuando esté disponible
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>

      {/* Subtle bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]" aria-hidden="true" />
    </section>
  );
}
