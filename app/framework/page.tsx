import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEC Framework — Master English Coach | Metodología de Gabriela Díaz",
  description:
    "MEC Framework: metodología desarrollada por Gabriela Díaz que integra la enseñanza del inglés de negocios, coaching ontológico y neurociencias aplicadas para transformar la comunicación profesional.",
};

const pillars = [
  {
    number: "01",
    discipline: "Enseñanza comunicativa del inglés",
    label: "Communicative Language Teaching",
    body: "El punto de partida no es la gramática sino la comunicación con propósito. MEC toma los principios de la enseñanza comunicativa — uso real del idioma, contextualización, interacción significativa — y los adapta al entorno corporativo y profesional. El objetivo no es dominar reglas sino operar con fluidez dentro de situaciones concretas: reuniones, presentaciones, negociaciones, entrevistas.",
    anchor: "La lengua como herramienta, no como objeto de estudio.",
  },
  {
    number: "02",
    discipline: "Coaching ontológico",
    label: "Ontological Coaching",
    body: "El coaching ontológico trabaja sobre el ser del profesional, no solo sobre su conocimiento. MEC incorpora prácticas que desarrollan la autoconciencia, la agencia y la capacidad de observación. El coach de comunicación acompaña al profesional para que identifique sus propios patrones de bloqueo — el miedo al error, la comparación, la autocrítica — y construya una relación distinta con su voz en inglés.",
    anchor: "El cambio ocurre cuando cambia el observador.",
  },
  {
    number: "03",
    discipline: "Neurociencias aplicadas",
    label: "Applied Neuroscience",
    body: "Los principios del aprendizaje adulto, el compromiso emocional y la flexibilidad cognitiva informan cada decisión metodológica. MEC diseña experiencias que reducen la amenaza percibida (el miedo a equivocarse), activan la memoria emocional y generan condiciones neurológicas para el aprendizaje real. No se trata de repetición mecánica sino de activación consciente.",
    anchor: "El cerebro aprende cuando se siente seguro.",
  },
];

const forWhom = [
  {
    role: "Profesores de inglés de adultos",
    description:
      "Docentes que enseñan Business English o ESP en contextos corporativos y buscan un marco para integrar la dimensión emocional y comunicativa del aprendizaje adulto.",
  },
  {
    role: "Coaches profesionales",
    description:
      "Coaches que trabajan con profesionales en entornos globales y quieren incorporar herramientas específicas de comunicación en inglés dentro de sus procesos.",
  },
  {
    role: "Coordinadores y líderes educativos",
    description:
      "Responsables de programas de formación corporativa que buscan un enfoque más completo que los cursos de idiomas tradicionales.",
  },
];

export default function FrameworkPage() {
  return (
    <main>
      <Nav />

      {/* ── HERO ── */}
      <section className="relative bg-navy overflow-hidden min-h-[70vh] flex flex-col justify-end">
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/[0.03]" />
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/[0.02]" />
          <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white/[0.02]" />
        </div>

        {/* Ghost "MEC" watermark */}
        <div
          className="absolute right-0 bottom-0 font-serif font-black text-[20rem] sm:text-[28rem] leading-none text-white select-none pointer-events-none translate-x-1/4 translate-y-1/4"
          style={{ opacity: 0.025 }}
          aria-hidden="true"
        >
          MEC
        </div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 pt-36 pb-16 sm:pb-20 lg:pb-60 w-full">



          {/* Headline */}
          <div className="max-w-4xl">
            <p className="font-sans text-[10px] tracking-[0.26em] uppercase text-white/30 mb-6">
              Gabriela Díaz — Metodología
            </p>
            <h1 className="font-serif text-[2.8rem] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] text-white leading-[1.04] tracking-tight mb-7">
              MEC Framework
              <br />
              <em className="not-italic text-white/45 text-[0.75em]">
                Master English Coach
              </em>
            </h1>
            <p className="font-sans text-base sm:text-lg text-white/50 leading-[1.75] max-w-2xl">
              Una metodología que integra la enseñanza del inglés de negocios,
              el coaching ontológico y las neurociencias aplicadas para
              transformar el rol del docente en coach de comunicación
              profesional.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-14 pt-10 border-t border-white/[0.08] flex flex-wrap gap-10 sm:gap-16">
            {[
              { value: "26+", label: "años de experiencia" },
              { value: "3", label: "disciplinas integradas" },
              { value: "1", label: "nuevo rol docente" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl sm:text-4xl text-white font-bold leading-none mb-2">
                  {stat.value}
                </p>
                <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-white/35">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTO ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            <div className="lg:w-80 xl:w-96 flex-shrink-0">
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-8">
                El punto de partida
              </p>
              <h2 className="font-serif text-3xl sm:text-[2.4rem] text-ink-primary leading-[1.12]">
                Más allá de la instrucción lingüística.
              </h2>
            </div>

            <div className="flex-1 space-y-6 font-sans text-[0.98rem] text-ink-secondary leading-[1.8]">
              <p>
                En entornos profesionales globalizados, la comunicación efectiva
                exige más que competencia lingüística. Los profesionales
                necesitan desarrollar confianza, claridad de propósito y la
                capacidad de interactuar con autenticidad en contextos
                internacionales.
              </p>
              <p>
                Sin embargo, muchos adultos en proceso de aprendizaje enfrentan
                barreras que no son lingüísticas: el miedo a hablar, la falta de
                confianza, la presión del contexto profesional o la ausencia de
                espacios para la interacción auténtica.
              </p>
              <p>
                MEC nace de esa brecha.{" "}
                <span className="text-ink-primary font-medium">
                  No como un método más, sino como un reencuadre del rol docente
                  mismo.
                </span>{" "}
                El profesor de inglés de negocios puede y debe operar como coach
                de comunicación — alguien que acompaña al profesional a
                desarrollar su presencia comunicativa, no solo su vocabulario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRES FUNDAMENTOS ── */}
      <section className="bg-navy overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

          <div className="mb-16 lg:mb-20">
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/35 mb-8">
              Arquitectura metodológica
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-white leading-[1.1] max-w-2xl">
              Tres disciplinas. Una sola práctica.
            </h2>
          </div>

          <div className="space-y-0">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.number}
                className="group relative grid grid-cols-1 lg:grid-cols-[auto_1fr_1.2fr] gap-0 lg:gap-16 py-12 sm:py-14 border-t border-white/[0.08] first:border-t-0"
              >
                {/* Number */}
                <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-16">
                  <span
                    className="font-serif font-bold text-[5rem] leading-none text-white"
                    style={{ opacity: 0.06 }}
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </span>
                </div>

                {/* Title block */}
                <div className="lg:pt-1 mb-6 lg:mb-0">
                  <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-white/25 mb-3">
                    {pillar.label}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-[1.65rem] text-white leading-[1.2]">
                    {pillar.discipline}
                  </h3>
                  <div className="mt-6 h-px w-12 bg-teal/40" aria-hidden="true" />
                </div>

                {/* Body */}
                <div className="lg:pt-1">
                  <p className="font-sans text-sm text-white/55 leading-[1.8] mb-6">
                    {pillar.body}
                  </p>
                  <p className="font-sans text-[0.8rem] text-teal/70 italic leading-relaxed">
                    &ldquo;{pillar.anchor}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA INTERSECCIÓN: el significado de MASTER ── */}
      <section className="bg-beige">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            <div className="lg:w-80 xl:w-96 flex-shrink-0">
              <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-8">
                El concepto central
              </p>
              <h2 className="font-serif text-3xl sm:text-[2.4rem] text-ink-primary leading-[1.12] mb-6">
                ¿Qué significa{" "}
                <em className="italic text-navy">Master</em>?
              </h2>
              {/* Visual element: three overlapping lines */}
              <div className="space-y-2 mt-10" aria-hidden="true">
                <div className="h-[2px] bg-navy w-full" />
                <div className="h-[2px] bg-teal w-3/4" />
                <div className="h-[2px] bg-navy/30 w-1/2" />
              </div>
            </div>

            <div className="flex-1">
              <div className="space-y-8">
                <div className="pl-6 border-l-2 border-navy">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink-muted mb-3">
                    Perspectiva del docente
                  </p>
                  <p className="font-sans text-[0.98rem] text-ink-secondary leading-[1.8]">
                    El coach de comunicación es un{" "}
                    <span className="text-ink-primary font-medium">
                      master en su disciplina
                    </span>{" "}
                    — no es solo profesor de idioma, sino profesional con formación
                    en coaching, neurociencias y comunicación corporativa. MEC
                    requiere un nivel de experticia que va más allá del
                    conocimiento lingüístico.
                  </p>
                </div>

                <div className="pl-6 border-l-2 border-teal">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ink-muted mb-3">
                    Perspectiva del profesional
                  </p>
                  <p className="font-sans text-[0.98rem] text-ink-secondary leading-[1.8]">
                    Para el profesional adulto, <em>master</em> refleja el
                    proceso continuo de{" "}
                    <span className="text-ink-primary font-medium">
                      dominar su propia voz
                    </span>{" "}
                    en entornos globales. No se trata de alcanzar la perfección
                    lingüística sino de desarrollar presencia, autenticidad y
                    propósito comunicativo en cada interacción internacional.
                  </p>
                </div>

                <blockquote className="mt-4 py-6 border-t border-b border-beige-dark">
                  <p className="font-serif text-xl sm:text-2xl text-ink-primary leading-relaxed italic">
                    &ldquo;Master English Coach refleja una dualidad:{" "}
                    <span className="not-italic font-semibold text-navy">
                      la expertise del coach y el proceso de mastery del
                      profesional.
                    </span>
                    &rdquo;
                  </p>
                  <footer className="mt-4 font-sans text-sm text-ink-secondary">
                    — Gabriela Díaz
                  </footer>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EN LA PRÁCTICA ── */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-ink-secondary mb-8">
              Aplicación metodológica
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-ink-primary leading-[1.1] max-w-2xl">
              MEC en la práctica del aula.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                title: "Preguntas reflexivas",
                description:
                  "El coach formula preguntas que invitan al profesional a observarse como comunicador: ¿Qué querías decir? ¿Qué te frenó? ¿Qué harías diferente? La reflexión como herramienta de aprendizaje.",
                accent: "border-navy",
              },
              {
                title: "Tareas con propósito",
                description:
                  "Las actividades comunicativas están diseñadas en torno a situaciones reales del profesional. No ejercicios genéricos sino simulaciones de sus reuniones, presentaciones y negociaciones concretas.",
                accent: "border-teal",
              },
              {
                title: "Feedback de coaching",
                description:
                  "El feedback va más allá de la corrección lingüística. Incluye la observación de la presencia, el ritmo, la intención comunicativa. El objetivo es fortalecer la confianza, no solo la precisión.",
                accent: "border-navy/40",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`py-10 px-0 md:px-10 border-t-2 ${item.accent} md:border-t-0 md:border-l md:border-[rgba(43,43,43,0.08)] first:md:border-l-0`}
              >
                <div className={`h-[2px] w-8 ${item.accent.replace("border-", "bg-")} mb-8 md:hidden`} aria-hidden="true" />
                <h3 className="font-serif text-xl sm:text-[1.4rem] text-ink-primary mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-ink-secondary leading-[1.8]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── PARA QUIÉN ── */}
      <section className="bg-navy-dark overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28 lg:py-36">

          <div className="mb-16">
            <p className="font-sans text-[10px] tracking-[0.22em] uppercase text-white/35 mb-8">
              Alcance del framework
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-white leading-[1.1] max-w-xl">
              ¿A quién está dirigido MEC?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {forWhom.map((item, i) => (
              <div
                key={item.role}
                className="border border-white/[0.1] hover:border-white/[0.2] p-8 sm:p-9 transition-colors duration-200"
              >
                <span
                  className="block font-sans text-[10px] tracking-[0.2em] uppercase text-white/25 mb-6"
                >
                  0{i + 1}
                </span>
                <h3 className="font-serif text-xl sm:text-[1.35rem] text-white mb-4 leading-snug">
                  {item.role}
                </h3>
                <p className="font-sans text-sm text-white/50 leading-[1.75]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Academic context note */}
          <div className="border-t border-white/[0.08] pt-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
            <div className="flex-1">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">
                Contexto académico
              </p>
              <p className="font-sans text-sm text-white/45 leading-[1.8] max-w-xl">
                MEC Framework se está presentando en congresos y espacios
                académicos internacionales de ELT y ESP. La metodología surge
                de más de 26 años de práctica docente combinada con formación
                en coaching ontológico y procesos de aprendizaje adulto.
              </p>
            </div>
            <div className="flex-shrink-0">
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">
                Autora
              </p>
              <p className="font-sans text-sm text-white/60 font-medium">Gabriela Díaz</p>
              <p className="font-sans text-xs text-white/35 mt-1 leading-relaxed">
                Licenciada en Enseñanza del Inglés<br />
                Coach ontológica certificada<br />
                26+ años en docencia y liderazgo educativo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA PARA DOCENTES ── */}
      <section className="bg-white border-t border-[rgba(43,43,43,0.07)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center">
          <p className="font-sans text-[10px] tracking-[0.26em] uppercase text-ink-muted mb-8">
            ¿Te interesa MEC?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] text-ink-primary leading-[1.1] mb-6">
            Hablemos sobre el framework.
          </h2>
          <p className="font-sans text-base text-ink-secondary leading-relaxed max-w-xl mx-auto mb-10">
            Si sos docente, coach o coordinador educativo y querés saber más
            sobre MEC — su aplicación, sus fundamentos o posibles
            colaboraciones — escribile directamente a Gabriela.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/541156576577?text=Hola%20Gabriela%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20el%20MEC%20Framework."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-navy hover:bg-navy-dark text-white font-sans text-[0.8rem] font-semibold tracking-[0.1em] uppercase px-8 py-4 transition-colors duration-200 w-full sm:w-auto"
            >
              Escribir a Gabriela
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4.5l2.5 2.5L8 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-[rgba(43,43,43,0.2)] hover:border-[rgba(43,43,43,0.4)] text-ink-secondary hover:text-ink-primary font-sans text-[0.8rem] font-medium tracking-[0.1em] uppercase px-7 py-4 transition-all duration-200 w-full sm:w-auto"
            >
              Ver los servicios de coaching
            </a>
          </div>
          <p className="font-sans text-[10px] text-ink-muted tracking-[0.12em] uppercase mt-8">
            También disponible en Instagram · @masterenglishcoach
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
