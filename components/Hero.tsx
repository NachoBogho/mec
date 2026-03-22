import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-navy overflow-hidden flex flex-col"
    >
      {/* Subtle grid lines — editorial texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/[0.03]" />
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/[0.02]" />
        <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white/[0.02]" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 max-w-6xl mx-auto w-full px-6 sm:px-8 pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-16 xl:gap-24">

          {/* ── Text column ── */}
          <div className="flex-1 order-2 lg:order-1">

            {/* Eyebrow label */}
            <p
              className="animate-on-scroll font-sans text-[10px] tracking-[0.26em] uppercase text-white/35 mb-7"
            >
              Gabriela Díaz &mdash; English Coach
            </p>

            {/* Headline */}
            <h1
              className="animate-on-scroll font-serif text-[2.5rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] text-white leading-[1.06] tracking-tight mb-7"
              style={{ transitionDelay: "120ms" }}
            >
              Ya sabés inglés.{" "}
              <em className="not-italic text-white/55 block mt-1">
                Te ayudo a hablarlo con confianza.
              </em>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-on-scroll font-sans text-base sm:text-[1.05rem] text-white/55 leading-relaxed max-w-lg mb-10"
              style={{ transitionDelay: "220ms" }}
            >
              Coaching personalizado para profesionales que entienden todo
              pero se traban al hablar.
            </p>

            {/* CTAs */}
            <div
              className="animate-on-scroll flex flex-col sm:flex-row gap-3"
              style={{ transitionDelay: "320ms" }}
            >
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center bg-teal hover:bg-teal-light text-white font-sans text-[0.8rem] font-semibold tracking-[0.1em] uppercase px-8 py-4 transition-colors duration-200"
              >
                Agendá tu trial session gratuita
              </a>
              <a
                href="/#metodo"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/45 text-white/65 hover:text-white font-sans text-[0.8rem] font-medium tracking-[0.1em] uppercase px-7 py-4 transition-all duration-200"
              >
                Cómo trabajo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Trust line */}
            <p
              className="animate-on-scroll font-sans text-[10px] text-white/25 tracking-[0.14em] uppercase mt-8"
              style={{ transitionDelay: "450ms" }}
            >
              Sin compromisos &middot; Primera sesión sin costo
            </p>
          </div>

          {/* ── Photo column ── */}
          <div
            className="animate-on-scroll flex-shrink-0 order-1 lg:order-2 w-full max-w-[240px] sm:max-w-[280px] lg:w-72 xl:w-80 mx-auto lg:mx-0"
            style={{ transitionDelay: "180ms" }}
          >
            <div className="relative">
              {/* Offset decorative frame */}
              <div
                className="absolute -bottom-4 -right-4 inset-x-4 top-4 border border-white/[0.08] z-0"
                aria-hidden="true"
              />
              <PhotoPlaceholder
                src="/gabriela.jpeg"
                alt="Gabriela Díaz — MEC English Coach"
                description="Retrato profesional de Gabriela — medio cuerpo, mirada a cámara, iluminación natural cálida, fondo neutro oscuro"
                aspectRatio="portrait"
                priority
                className="relative z-10 bg-navy-dark border border-white/[0.1] text-white"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="relative pb-10 flex justify-center" aria-hidden="true">
        <div className="flex flex-col items-center gap-2 opacity-25">
          <div className="w-px h-8 bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
}
