const pains = [
  {
    text: "Entendés todo en inglés pero te trabás cuando tenés que hablar.",
    delay: "0ms",
  },
  {
    text: "Evitás participar en reuniones en inglés por miedo a equivocarte.",
    delay: "100ms",
  },
  {
    text: "Sentís que tu nivel de inglés no refleja tu nivel profesional.",
    delay: "200ms",
  },
  {
    text: "Preparás todo antes de una call y aun así te ponés nervioso/a.",
    delay: "300ms",
  },
];

export function Problem() {
  return (
    <section id="problema" className="bg-beige">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left: section label + headline */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <p className="animate-on-scroll editorial-label font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-8">
              ¿Te pasa esto?
            </p>
            <h2
              className="animate-on-scroll font-serif text-3xl sm:text-4xl text-ink-primary leading-[1.18]"
              style={{ transitionDelay: "100ms" }}
            >
              Sabés más inglés del que creés que sabés.
            </h2>
            <div
              className="animate-on-scroll mt-10 h-px bg-beige-dark"
              style={{ transitionDelay: "200ms" }}
              aria-hidden="true"
            />
          </div>

          {/* Right: pain points + closing */}
          <div className="flex-1">
            <div className="space-y-0">
              {pains.map((pain, i) => (
                <div
                  key={i}
                  className="animate-on-scroll flex gap-5 py-6 border-b border-beige-dark"
                  style={{ transitionDelay: pain.delay }}
                >
                  {/* Teal accent bar */}
                  <div className="flex-shrink-0 w-[2px] bg-teal/50 self-stretch" aria-hidden="true" />
                  <p className="font-sans text-[1.0rem] text-ink-primary leading-relaxed">
                    {pain.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Empathetic closing statement */}
            <div
              className="animate-on-scroll mt-12"
              style={{ transitionDelay: "400ms" }}
            >
              <blockquote className="relative pl-8 border-l-2 border-teal">
                <p className="font-serif text-xl sm:text-2xl text-ink-primary leading-relaxed italic">
                  &ldquo;No es un problema de idioma.{" "}
                  <span className="not-italic font-semibold text-navy">
                    Es un problema de confianza.
                  </span>{" "}
                  Y tiene solución.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
