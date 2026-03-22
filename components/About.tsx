import { PhotoPlaceholder } from "./PhotoPlaceholder";

const credentials = [
  "Coaching de comunicación",
  "Inglés para líderes",
  "Metodología 1:1",
  "Enfoque en confianza oral",
];

export function About() {
  return (
    <section id="sobre-mi" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:gap-28 items-start">

          {/* Photo column */}
          <div
            className="animate-on-scroll flex-shrink-0 w-full max-w-[300px] sm:max-w-sm lg:w-80 xl:w-96 mx-auto lg:mx-0"
          >
            <div className="relative">
              {/* Decorative offset rectangle — teal accent */}
              <div
                className="absolute -top-4 -left-4 bottom-4 right-4 border border-teal/20 z-0"
                aria-hidden="true"
              />
              <PhotoPlaceholder
                src="/gabriela2.jpeg"
                alt="Gabriela Díaz — English Coach, sesión de coaching"
                description="Foto natural de Gabriela — sonrisa genuina, ambiente profesional pero cálido, iluminación suave, ropa sobria"
                aspectRatio="portrait"
                className="relative z-10 bg-beige border border-beige-dark text-ink-secondary"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="flex-1">

            <p
              className="animate-on-scroll editorial-label font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-8"
            >
              Tu English Coach
            </p>

            <h2
              className="animate-on-scroll font-serif text-3xl sm:text-[2.4rem] lg:text-[2.8rem] text-ink-primary leading-[1.1] mb-6"
              style={{ transitionDelay: "100ms" }}
            >
              Gabriela Díaz
            </h2>

            <div
              className="animate-on-scroll space-y-5 font-sans text-[0.95rem] text-ink-secondary leading-[1.75]"
              style={{ transitionDelay: "180ms" }}
            >
              <p>
              Soy Gabriela Díaz profesora de inglés, líder educativa y coach ontológica con 26 años de experiencia en la enseñanza. 
              </p>
              <p>
              Licenciada en Enseñanza del Inglés, trabajo con profesionales que buscan fortalecer su comunicación en contextos internacionales. 
              </p>
              <p>
              Creé MEC (Master English Coach), una metodología que integra la enseñanza del inglés de negocios, el coaching y las neurociencias.
              </p>
              <p>
              Mi trabajo no es enseñarte el idioma. Es ayudarte a encontrar tu voz en inglés. La que ya existe pero que el miedo al error, la comparación o la presión del contexto profesional silencian.
              </p>
            </div>

            {/* Pull quote */}
            <div
              className="animate-on-scroll mt-10 py-8 border-t border-b border-[rgba(43,43,43,0.07)]"
              style={{ transitionDelay: "280ms" }}
            >
              <p className="font-serif text-xl sm:text-2xl text-navy italic leading-relaxed">
                &ldquo;No soy solo una profesora de inglés.{" "}
                <span className="not-italic font-semibold">
                  Soy tu coach de comunicación.
                </span>
                &rdquo;
              </p>
            </div>

            {/* Credential tags */}
            <div
              className="animate-on-scroll flex flex-wrap gap-2 mt-8"
              style={{ transitionDelay: "360ms" }}
            >
              {credentials.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[11px] tracking-[0.1em] uppercase text-ink-secondary border border-[rgba(43,43,43,0.15)] px-4 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
